import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

const unwrapImg = require('../../images/undraw.png');

export default function GetStarted(props) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.body}>
          <View>
            <Image style={{width: 450, height: 250}} source={unwrapImg} />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.description}>
              Help make our city better. Join a
            </Text>
            <Text style={styles.description}>network of volunteers</Text>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Login')}
            style={styles.btn}>
            <Text style={{color: '#DDE2EB', fontSize: 24, fontWeight: 'bold'}}>
              {'Get Started'.toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    height: '80%',
    justifyContent: 'space-between',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  description: {
    fontSize: 20,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  btn: {
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    backgroundColor: '#393443',
  },
});
