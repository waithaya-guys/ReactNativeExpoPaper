import React from 'react';
import { View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import ScreenWrapper from './ScreenWrapper';

const NewsScr = () => {
    return (
        <ScreenWrapper>
            <View>
                <Card>
                    <Card.Content>
                        <Title>News Title</Title>
                        <Paragraph>News content goes here...</Paragraph>
                    </Card.Content>
                </Card>
            </View>
        </ScreenWrapper>
    );
};

export default NewsScr;