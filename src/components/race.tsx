import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useRacerData from '../hooks/useRacerData';


const Race: React.FC = () => {
  const { racers, setRacers } = useRacerData();

  const startRace = () => {
    const generateRacerWinLikelihoodCalculator = () => {
      const delay = 7000 + Math.random() * 7000;
      const likelihoodOfRacerWinning = Math.random();

      return (callback: (likelihood: number) => void) => {
        setTimeout(() => {
          callback(likelihoodOfRacerWinning);
        }, delay);
      };
    };
    racers.forEach((racer, index) => {
      const racerCalculator = generateRacerWinLikelihoodCalculator();
      racerCalculator(likelihood => {
        const updatedRacers = [...racers];
        updatedRacers[index].likelihood = likelihood;
        setRacers(
          updatedRacers.sort(
            (a, b) => (b.likelihood || 0) - (a.likelihood || 0),
          ),
        );
      });
    });
  };

  return (
    <View>
      <Text>Race Results:</Text>
      {racers.map((racer, i) => (
        <Text style={{ color: `${racer.color.toLowerCase()}` }} key={i}>
          {racer.name}:{' '}
          {racer.likelihood !== null ? racer.likelihood : 'Calculating...'}
        </Text>
      ))}
      <Button
        title="Start Race"
        onPress={startRace}
        disabled={racers.length === 0}
      />
    </View>
  );
};

export default Race;
