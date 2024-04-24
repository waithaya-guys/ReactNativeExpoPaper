import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Appbar, Avatar, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getHeaderTitle } from '@react-navigation/elements';

import BottomTabs from './BottomTabNavigator';
import i18n from '../helper/I18n';

import TemplateScreen from '../screens/TemplateScreen';

const Stack = createStackNavigator();

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
                        console.log(i18n.t(title), title);
                        return (
                            <Appbar.Header 
                                elevated
                                mode='center-aligned'
                            >
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
                                <Appbar.Content
                                    title={
                                        title === 'Home' || title === 'หน้าหลัก' ? 
                                        (<MaterialCommunityIcons
                                            style={{ marginRight: 10 }}
                                            name="facebook"
                                            size={40}
                                            color={theme.colors.primary}
                                        />): title
                                    }
                                    titleStyle={{
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        color: title === 'Home' || title === 'หน้าหลัก' ? theme.colors.primary : theme.colors.inverseSurface,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                />
                            </Appbar.Header>
                        );
                    },
                };
            }}
        >
            <Stack.Screen
                name="Home"
                component={BottomTabs}
                options={({ route }) => {
                    const routeName = getFocusedRouteNameFromRoute(route) ?? 'home';
                    return {
                        headerTitle: i18n.t(routeName),
                    };
                }}
            />
            <Stack.Screen
                name="TemplateScreen"
                component={TemplateScreen}
                options={({ route }) => {
                    const routeName = getFocusedRouteNameFromRoute(route) ?? 'TemplateScreen';
                    return { headerTitle: i18n.t(routeName) };
                }}
            />
        </Stack.Navigator>
    );
};