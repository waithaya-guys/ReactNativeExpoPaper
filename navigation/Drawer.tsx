import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
    Avatar,
    Caption,
    Drawer,
    Paragraph,
    Switch,
    Text,
    Title,
    TouchableRipple,
    useTheme,
    Badge,
    MD3Colors,
} from 'react-native-paper';
import Animated from 'react-native-reanimated';
import i18n from '../helper/I18n';

import { PreferencesContext } from '../context/PreferencesContext';

export function DrawerContent(props: DrawerContentComponentProps) {
    const paperTheme = useTheme();
    const {theme, toggleTheme } = React.useContext(
        PreferencesContext
    );

    const DrawerItemsData = [
        {
            component: 'TemplateScreen',
            label: i18n.t('TemplateScreen'),
            icon: 'inbox',
            key: 0,
            right: () => <Text variant="labelLarge">44</Text>,
        },
        {
            component: 'TemplateScreen',
            label: i18n.t('TemplateScreen'),
            icon: 'star',
            key: 1,
            right: ({ color }: { color: string }) => (
                <Badge
                    visible
                    size={8}
                    style={[styles.badge, { backgroundColor: color }]}
                />
            ),
        },
        {
            component: 'TemplateScreen',
            label: i18n.t('TemplateScreen'),
            icon: 'send',
            key: 2
        },
        {
            component: 'TemplateScreen',
            label: i18n.t('TemplateScreen'),
            icon: 'palette',
            key: 3
        },
        {
            component: 'TemplateScreen',
            label: i18n.t('TemplateScreen'),
            icon: 'delete',
            key: 4,
            right: () => <Badge visible size={8} style={styles.badge} />,
        },
    ];

    const [drawerItemIndex, setDrawerItemIndex] = React.useState<number>(0);
    const _setDrawerItem = (index: number) => {
        setDrawerItemIndex(index);
        //Navigator.of(context).pop();
        props.navigation.navigate(DrawerItemsData[index].component);
    };

    return (
        <DrawerContentScrollView
            style={[
                styles.drawerContent,
                {
                    backgroundColor: paperTheme.colors.surface,
                },
            ]}
        >
            <Animated.View
                style={[
                    styles.drawerContent,
                    {
                        backgroundColor: paperTheme.colors.surface,
                    },
                ]}
            >
                <View style={styles.userInfoSection}>
                    <Title style={styles.title}>React Native With Paper</Title>
                    <Caption style={styles.caption}>@SeCuRiTyS</Caption>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>
                                444
                            </Paragraph>
                            <Caption style={styles.caption}>{i18n.t('subscriber')}</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>
                                345
                            </Paragraph>
                            <Caption style={styles.caption}>{i18n.t('like')}</Caption>
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    {DrawerItemsData.map((props, index) => (
                        <Drawer.Item
                            {...props}
                            key={props.key}
                            active={drawerItemIndex === index}
                            onPress={() => _setDrawerItem(index)}
                        />
                    ))}
                </Drawer.Section>
                <Drawer.Section title={i18n.t('preferences')}>
                    <TouchableRipple onPress={toggleTheme}>
                        <View style={styles.preference}>
                            <Text>{i18n.t('Dark_Theme')}</Text>
                            <View pointerEvents="none">
                                <Switch value={theme === 'dark'} />
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </Animated.View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    badge: {
        alignSelf: 'center',
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});