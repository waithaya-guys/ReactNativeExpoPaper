import * as React from 'react';
import { useColorScheme , StatusBar} from 'react-native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider, Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

import RootNavigator from './navigation/RootNavigator';

import 'react-native-gesture-handler';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { PreferencesContext } from './context/PreferencesContext';


export default function App() {

    const colorScheme = useColorScheme();
    const [theme, setTheme] = React.useState<'light' | 'dark'>(
        colorScheme === 'dark' ? 'dark' : 'light'
    );

    function toggleTheme() {
        setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
    }

    const preferences = React.useMemo(
        () => ({
            toggleTheme,
            theme,
        }),
        [theme]
    );

    return (
        <PreferencesContext.Provider value={preferences}>
            <PaperProvider theme={
                theme === 'light'
                    ? {
                        ...MD3LightTheme,
                        colors: { ...MD3LightTheme.colors, primary: '#1ba1f2' },
                    }
                    : {
                        ...MD3DarkTheme,
                        colors: { ...MD3DarkTheme.colors, primary: '#1ba1f2' },
                    }
            }>
                <StatusBar/>
                <React.Fragment>
                    <SafeAreaInsetsContext.Consumer>
                        {(insets) => <RootNavigator />}
                    </SafeAreaInsetsContext.Consumer>
                </React.Fragment>
            </PaperProvider>
        </PreferencesContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
