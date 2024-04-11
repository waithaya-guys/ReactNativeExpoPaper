import * as React from 'react';
import { Appbar } from 'react-native-paper';

const MyComponent = () => (
    <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Examples" />
    </Appbar.Header>
);

export default MyComponent;