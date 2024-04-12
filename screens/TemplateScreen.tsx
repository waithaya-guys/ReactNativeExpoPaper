import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenWrapper from './ScreenWrapper';

const ProfileScr = () => {
    return (
        <ScreenWrapper contentContainerStyle={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>This is a TemplateScreen</Text>
            </View>
        </ScreenWrapper >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default ProfileScr;