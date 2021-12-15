import React from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';

const App = () => {

  return (
    <TouchableOpacity
      accessibilityLabel="alertButton"
      style={{width: 100, height: 100, backgroundColor: 'aqua'}}
      onPress={() => alert('Hello')}>
      
    <Text>Hello</Text>
    
    </TouchableOpacity>
  );
};

export default App;
