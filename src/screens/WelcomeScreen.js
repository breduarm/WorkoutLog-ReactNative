import React from 'react';
import {Pressable, SafeAreaView, Text, StyleSheet} from 'react-native';
import globalStyles from './../styles/global';
import Spacing from '../theme/Spacing';
import WLButton from '../components/WLButton';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={globalStyles.surfaceContainer}>
      <Text style={[globalStyles.h1, styles.title]}>Workout{'\n'}Log</Text>
      <Text style={[globalStyles.body, styles.content]}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
        architecto, at asperiores magnam accusantium eveniet omnis porro eos.
      </Text>
      <WLButton styles={styles.signupBtn} title={'Get Started'}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: Spacing.px24,
  },
  content: {
    flex: 1,
    marginTop: Spacing.px48,
  },
  signupBtn: {
    marginBottom: Spacing.px24,
  },
});

export default WelcomeScreen;
