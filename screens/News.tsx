import React from 'react';
import { View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const NewsScr = () => {
    return (
        <View>
            <Card>
                <Card.Content>
                    <Title>News Title</Title>
                    <Paragraph>News content goes here...</Paragraph>
                </Card.Content>
            </Card>
        </View>
    );
};

export default NewsScr;