/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
//import AsyncStorage from 'react-native-async-storage';
import SplashScreen from 'react-native-splash-screen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AppIntroSlider from 'react-native-app-intro-slider';
import HomeScreen from './src/screens/HomeScreen';
import {Ionicons} from 'react-native-vector-icons';
class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }
  // setFirstVisitFlag = async () => {
  //   try {
  //     await AsyncStorage.setItem('@first_visit', 'done');
  //   } catch (e) {
  //     // saving error
  //   }
  // };
  // getFirstVisitFlag = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@first_visit');
  //     if (value !== null) {
  //       this.setState({showRealApp: false});
  //     } else {
  //       this.setState({showRealApp: true});
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // };
  componentDidMount() {
    SplashScreen.hide();
  }
  _onDone = () => {
    this.setState({showRealApp: true});
    // this.setFirstVisitFlag();
  };
  _onSkip = () => {
    this.setState({showRealApp: true});
    // this.setFirstVisitFlag();
  };

  _renderDoneButton = () => {
    return (
      <Text style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{backgroundColor: 'transparent'}}
        />
      </Text>
    );
  };
  _renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return this.props.navigation.navigate('HomeScreen');
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }
  }
}

const slides = [
  {
    key: 's1',
    text: 'React native Shop',
    title: 'Welcome to React native Ecommerce App',
    image: require('./images/shopping.png'),
    backgroundColor: '#968c7e',
  },
  {
    key: 's2',
    title: 'Multiple payments',
    text: 'we support apple or even google pay',
    image: require('./images/credit-card-1.png'),
    backgroundColor: '#968c7e',
  },
  {
    key: 's3',
    title: '24/7 customer support',
    text: 'fast and great customer support',
    image: require('./images/telephone.png'),
    backgroundColor: '#968c7e',
  },
  {
    key: 's4',
    title: 'Whitelist',
    text: ' Easily build whitelist of your favourite product',
    image: require('./images/wishlist.png'),
    backgroundColor: '#968c7e',
  },
  {
    key: 's5',
    title: 'Free shipping',
    text: 'instant shiiping free and fast',
    image: require('./images/cargo-ship.png'),
    backgroundColor: '#968c7e',
  },
];
const AppNavigator = createStackNavigator(
  {
    IntroScreen: {
      screen: IntroScreen,
    },
    HomeScreen: {
      screen: HomeScreen,
    },
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  },
);
const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
export default createAppContainer(AppNavigator);
