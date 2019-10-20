import React, {Component} from 'react';
import {View, Text} from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}>
          HomeScreen
        </Text>
      </View>
    );
  }
}

export default HomeScreen;
