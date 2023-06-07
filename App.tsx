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
    // backgroundColor: '#202124',
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginBottom: 30,
  },
  name: {
    color: 'white',
    fontSize: 25,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
