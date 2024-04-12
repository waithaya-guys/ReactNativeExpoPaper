import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import ScreenWrapper from './ScreenWrapper';

const Home = (props) => {
    return (
        <ScreenWrapper contentContainerStyle={styles.container}>
            <View style={styles.container}>
                <Text>(Home Screen)</Text>
                <Text>Open up App.tsx to start working on your app!</Text>
            </View>
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;