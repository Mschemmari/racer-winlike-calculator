import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import Race from './src/components/race';

function App(): JSX.Element {

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View>
        <Text style={styles.title}>Racer Winlike Calculator</Text>
        <Race />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    color: 'white',
    paddingHorizontal: 24,
  },
  title: {
    color: 'black',
    fontSize: 30,
    marginBottom: 30,
  },
  name: {
    color: 'black',
    fontSize: 25,
  },
});

export default App;
