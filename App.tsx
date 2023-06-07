import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View>
        <Text style={styles.title}>Racer Winlike Calculator</Text>
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
    backgroundColor: '#202124',
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginBottom: 30,
  },
});

export default App;
