import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { AboutContent } from '@components/about-content';

import { StackNavigationProps } from '@containers/index';

export const About = (props: StackNavigationProps<any>) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AboutContent
                onPress={() => {
                    props.navigation.navigate('Exchanges');
                }}
            />
        </SafeAreaView>
    );
};
