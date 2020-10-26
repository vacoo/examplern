import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import { MainStacks } from '@containers/index';

YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested',
    '`-[RCTRootView cancelTouches]`',
    'Warning: componentWillMount',
    'Warning: componentWillReceiveProps',
    'source.uri should',
    'componentWillMount has been renamed, and is not recommended for use',
    'componentWillReceiveProps has been renamed, and is not recommended for use',
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`',
    'Task orphaned for request <NSMutableURLRequest:',
    'getNode()',
    'Remote debugger is in a background tab which may cause apps to perform slowly',
    'Animated.event now requires a second argument for options',
    'Sending `onAnimatedValueUpdate` with no listeners registered.',
    'Non-serializable values were found in the navigation state',
]);

export default class Root extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <StatusBar barStyle="default" backgroundColor="#000" />
                <SafeAreaProvider>
                    <NavigationContainer>
                        <MainStacks />
                    </NavigationContainer>
                </SafeAreaProvider>
            </React.Fragment>
        );
    }
}
