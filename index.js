import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
    'Required dispatch_sync to load constants for RNDeviceInfo',
    'Warning: RNCNetInfo - You are using the deprecated API.',
    'Unrecognized WebSocket connection option(s)',
    'Setting a timer for a long period of time'
]);

import React, {Component} from 'react';
const ReactNative = require('react-native');
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Navigation } from 'react-native-navigation';

const {
    ScrollView,
    StyleSheet,
    Text,
    View
} = ReactNative;

class App extends Component<Props> {
    render() {
        return (
            <ScrollView>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque volutpat pulvinar. Mauris volutpat tortor in tellus suscipit, nec venenatis lacus tincidunt. Sed mollis maximus neque id suscipit. Vestibulum cursus turpis eget mauris scelerisque maximus. Maecenas ut felis convallis, fringilla nunc sed, euismod elit. Nulla tincidunt velit id tristique viverra. Proin placerat ornare enim, et mollis tellus dapibus in. Proin sapien felis, pretium vel justo sit amet, pharetra sodales ipsum. Praesent eget tempor ante, sed mollis odio. Sed ac lacinia enim, in dictum ipsum. Integer aliquam, dui ac pharetra faucibus, ligula turpis lobortis nibh, non pellentesque magna metus ac nulla. Nulla vestibulum nulla vehicula condimentum sollicitudin. Aliquam sollicitudin euismod dui.

                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis laoreet enim et mi tincidunt maximus. Integer vulputate, urna sed dapibus molestie, metus nunc dignissim nunc, eu accumsan augue lectus at metus. Donec at arcu venenatis, finibus lorem nec, luctus magna. Curabitur cursus, mi non accumsan accumsan, ex turpis hendrerit lorem, eu pulvinar dolor est nec elit. Quisque orci eros, semper interdum ipsum sit amet, ultricies facilisis diam. Proin sagittis, massa vitae convallis interdum, elit sapien pulvinar massa, nec malesuada nisi ipsum vel sapien. Ut interdum sollicitudin ex, vel luctus tortor porta ac. Pellentesque facilisis porta sem, in vestibulum nisi molestie ac. Mauris lobortis lobortis ante vel imperdiet. Sed viverra elit quis enim euismod, at imperdiet lorem lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus mollis ex sagittis erat sagittis, ac ornare magna varius. Etiam justo augue, tempor sit amet convallis tempor, vehicula vitae nunc.

                    Aliquam fringilla fermentum ante, vitae molestie arcu bibendum sed. Curabitur egestas arcu quis turpis dapibus, quis bibendum odio aliquam. Pellentesque congue, lacus at volutpat efficitur, libero sapien facilisis tellus, vitae aliquet dolor augue sed enim. Ut sit amet accumsan nisi. Morbi et molestie erat, sit amet molestie risus. Pellentesque venenatis nunc suscipit, interdum quam sit amet, commodo velit. Duis eu diam id est semper viverra. Integer viverra, turpis in volutpat elementum, metus orci tempus velit, ac pellentesque mauris tellus sit amet leo.

                    Praesent sodales fermentum nisi, sit amet facilisis mauris aliquam eget. Fusce vulputate dapibus nibh et lacinia. Donec justo sem, suscipit ut blandit a, consequat id diam. Nunc luctus ac risus congue elementum. Fusce nec ante non lectus tempus tincidunt. Nunc ut enim quis erat egestas imperdiet. Donec a velit turpis. Quisque egestas leo vel sapien dignissim efficitur. Fusce fermentum luctus eleifend.

                    Etiam sed urna neque. Quisque venenatis sollicitudin euismod. Sed quam erat, sodales sit amet molestie ut, maximus fermentum augue. Curabitur et semper lorem. Aenean id turpis sagittis, efficitur nisl et, pretium enim. Aliquam rhoncus congue auctor. Morbi non aliquam ante, sed rutrum erat. Sed scelerisque, massa venenatis scelerisque ultrices, orci magna congue risus, sed feugiat mi massa sed ante. Nunc congue mattis odio, posuere rhoncus ipsum finibus ut. Quisque auctor ligula at magna tempor vehicula. Proin eget tellus nisi. Cras malesuada odio a feugiat dignissim. Vivamus pharetra iaculis hendrerit. Nam nec lectus facilisis, pretium nibh ac, gravida sem. Donec congue ac magna a eleifend.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque volutpat pulvinar. Mauris volutpat tortor in tellus suscipit, nec venenatis lacus tincidunt. Sed mollis maximus neque id suscipit. Vestibulum cursus turpis eget mauris scelerisque maximus. Maecenas ut felis convallis, fringilla nunc sed, euismod elit. Nulla tincidunt velit id tristique viverra. Proin placerat ornare enim, et mollis tellus dapibus in. Proin sapien felis, pretium vel justo sit amet, pharetra sodales ipsum. Praesent eget tempor ante, sed mollis odio. Sed ac lacinia enim, in dictum ipsum. Integer aliquam, dui ac pharetra faucibus, ligula turpis lobortis nibh, non pellentesque magna metus ac nulla. Nulla vestibulum nulla vehicula condimentum sollicitudin. Aliquam sollicitudin euismod dui.

                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis laoreet enim et mi tincidunt maximus. Integer vulputate, urna sed dapibus molestie, metus nunc dignissim nunc, eu accumsan augue lectus at metus. Donec at arcu venenatis, finibus lorem nec, luctus magna. Curabitur cursus, mi non accumsan accumsan, ex turpis hendrerit lorem, eu pulvinar dolor est nec elit. Quisque orci eros, semper interdum ipsum sit amet, ultricies facilisis diam. Proin sagittis, massa vitae convallis interdum, elit sapien pulvinar massa, nec malesuada nisi ipsum vel sapien. Ut interdum sollicitudin ex, vel luctus tortor porta ac. Pellentesque facilisis porta sem, in vestibulum nisi molestie ac. Mauris lobortis lobortis ante vel imperdiet. Sed viverra elit quis enim euismod, at imperdiet lorem lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus mollis ex sagittis erat sagittis, ac ornare magna varius. Etiam justo augue, tempor sit amet convallis tempor, vehicula vitae nunc.

                    Aliquam fringilla fermentum ante, vitae molestie arcu bibendum sed. Curabitur egestas arcu quis turpis dapibus, quis bibendum odio aliquam. Pellentesque congue, lacus at volutpat efficitur, libero sapien facilisis tellus, vitae aliquet dolor augue sed enim. Ut sit amet accumsan nisi. Morbi et molestie erat, sit amet molestie risus. Pellentesque venenatis nunc suscipit, interdum quam sit amet, commodo velit. Duis eu diam id est semper viverra. Integer viverra, turpis in volutpat elementum, metus orci tempus velit, ac pellentesque mauris tellus sit amet leo.

                    Praesent sodales fermentum nisi, sit amet facilisis mauris aliquam eget. Fusce vulputate dapibus nibh et lacinia. Donec justo sem, suscipit ut blandit a, consequat id diam. Nunc luctus ac risus congue elementum. Fusce nec ante non lectus tempus tincidunt. Nunc ut enim quis erat egestas imperdiet. Donec a velit turpis. Quisque egestas leo vel sapien dignissim efficitur. Fusce fermentum luctus eleifend.

                    Etiam sed urna neque. Quisque venenatis sollicitudin euismod. Sed quam erat, sodales sit amet molestie ut, maximus fermentum augue. Curabitur et semper lorem. Aenean id turpis sagittis, efficitur nisl et, pretium enim. Aliquam rhoncus congue auctor. Morbi non aliquam ante, sed rutrum erat. Sed scelerisque, massa venenatis scelerisque ultrices, orci magna congue risus, sed feugiat mi massa sed ante. Nunc congue mattis odio, posuere rhoncus ipsum finibus ut. Quisque auctor ligula at magna tempor vehicula. Proin eget tellus nisi. Cras malesuada odio a feugiat dignissim. Vivamus pharetra iaculis hendrerit. Nam nec lectus facilisis, pretium nibh ac, gravida sem. Donec congue ac magna a eleifend.
                </Text>
            </ScrollView>
        );
    }
}

class Overlay extends Component<Props> {
    static options(props) {
        return {
            layout: {
                backgroundColor: 'transparent'
            },
            overlay: {
                interceptTouchOutside: false
            }
        }
    }

    render() {
        return <View style={styles.overlay} />
    }
}

const styles = StyleSheet.create({
    overlay: {
        width: 200,
        height: 200,
        backgroundColor: '#f00',
    },
});

Navigation.registerComponent(`app.Screen`, () => App);
Navigation.registerComponent(`app.Overlay`, () => gestureHandlerRootHOC(Overlay));

Navigation.events().registerAppLaunchedListener(async () => {

    Navigation.showOverlay({
        component: {
            name: 'app.Overlay'
        }
    })

    Navigation.setRoot({
        root: {
            component: {
                name: 'app.Screen',
            }
        }
    });
});
