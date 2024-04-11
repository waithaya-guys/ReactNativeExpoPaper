import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider, Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNav from './navigation/BottomTabNavigator';
import RootNavigator from './navigation/RootNavigator';
import 'react-native-gesture-handler';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';


export default function App() {

  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const paperTheme =
    colorScheme === 'dark'
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };

  return (
    console.log('colorScheme', colorScheme),
    <PaperProvider theme={paperTheme}>
      <React.Fragment>
        <SafeAreaInsetsContext.Consumer>
          {(insets) => <RootNavigator />}
        </SafeAreaInsetsContext.Consumer>
      </React.Fragment>
    </PaperProvider>
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
