import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Appbar, Avatar, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getHeaderTitle } from '@react-navigation/elements';

import BottomTabs from './BottomTabNavigator';
import Details from '../screens/Home';
import { StackNavigatorParamlist } from './Types';

const Stack = createStackNavigator<StackNavigatorParamlist>();

export const StackNavigator = () => {
    const theme = useTheme();
    const cardStyleInterpolator =
        Platform.OS === 'android'
            ? CardStyleInterpolators.forFadeFromBottomAndroid
            : CardStyleInterpolators.forHorizontalIOS;
    return (
        <Stack.Navigator
            screenOptions={({ navigation }) => {
                return {
                    detachPreviousScreen: !navigation.isFocused(),
                    cardStyleInterpolator,
                    header: ({ navigation, route, options, back }) => {
                        const title = getHeaderTitle(options, route.name);
                        return (
                            <Appbar.Header elevated>
                                {back ? (
                                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                                ) : (navigation as any).openDrawer ? (
                                    <Appbar.Action
                                        icon="menu"
                                        isLeading
                                        onPress={() =>
                                            (
                                                navigation as any as DrawerNavigationProp<{}>
                                            ).openDrawer()
                                        }
                                    />
                                ) : null}
                                <Appbar.Content title={title} />
                            </Appbar.Header>
                        );
                    },
                };
            }}
        >
            <Stack.Screen
                name="FeedList"
                component={BottomTabs}
                options={({ route }) => {
                    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
                    return { headerTitle: routeName };
                }}
            />
        </Stack.Navigator>
    );
};