import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import { About } from '@containers/about';
import { Exchanges } from '@containers/exchanges';

const Stack = createStackNavigator();

export type NavigationRoute<P> = {
    name: string;
    key: string;
    params: P;
};

export type StackNavigationProps<P> = {
    route: NavigationRoute<P>;
    navigation: StackNavigationProp<any>;
};

export const MainStacks = (props: any) => {
    return (
        <Stack.Navigator mode="card">
            <Stack.Screen
                name="About"
                component={About}
                options={{
                    title: 'О приложении',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Exchanges"
                component={Exchanges}
                options={{
                    title: 'Котировки',
                }}
            />
        </Stack.Navigator>
    );
};
