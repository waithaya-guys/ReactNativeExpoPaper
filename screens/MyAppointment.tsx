import React from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import ScreenWrapper from './ScreenWrapper';

const MyAppointmentScr = () => {
    const [appointment, setAppointment] = React.useState('');

    const handleSaveAppointment = () => {
        // Logic to save the appointment
        console.log('Appointment saved:', appointment);
    };

    return (
        <ScreenWrapper>
        <View>
            <Text>My Appointment</Text>
            <TextInput
                label="Appointment"
                value={appointment}
                onChangeText={setAppointment}
            />
            <Button mode="contained" onPress={handleSaveAppointment}>
                Save Appointment
            </Button>
            </View>
        </ScreenWrapper>
    );
};

export default MyAppointmentScr;