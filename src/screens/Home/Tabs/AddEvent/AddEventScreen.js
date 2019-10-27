import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function AddEventScreen(props) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, padding: 20}}>
        <View style={styles.body}>
          <View style={{}}>
            <View>
              <Text style={styles.logo}> J </Text>
            </View>
            <View style={styles.t}>
              <Text style={styles.description}>Add Event</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder={'Email'}
                  style={[styles.textInput, {marginBottom: 20}]}
                />
                <TextInput placeholder={'Password'} style={styles.textInput} />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 30,
                }}>
                <TouchableOpacity style={styles.loginBtn}>
                  <Text
                    style={{
                      color: '#DDE2EB',
                      fontSize: 24,
                      fontWeight: 'bold',
                    }}>
                    {'Login'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('SignUp')}>
                  <Text style={{fontSize: 24}}> Create Account</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={{color: '#DDE2EB', fontSize: 22}}>
              {'skip'.toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '95%',
    justifyContent: 'space-between',
  },
  logo: {
    color: '#fff',
    backgroundColor: '#393443',
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
  },
  description: {
    marginTop: 20,
    marginBottom: 40,
    fontSize: 24,
  },
  inputContainer: {},
  textInput: {
    backgroundColor: '#DDE2EB',
    height: 50,
    fontSize: 18,
    borderRadius: 5,
  },
  btn: {
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    backgroundColor: '#393443',
    alignItems: 'center',
  },
  loginBtn: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    backgroundColor: '#393443',
  },
});
