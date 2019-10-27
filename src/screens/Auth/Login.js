import React, {useEffect, useState} from 'react';
const axios = require('axios');
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';


export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

    async function loginAction() {
        try{
            let response = await axios.post('jamii-api.herokuapp.com/api/users/login',{
                email,
                password,
              })
            let user = await response;
            await AsyncStorage.setItem('TOKEN_KEY', user.payload.token);
            props.navigation.navigate('Home');
        }
        catch(error) {
            setError("failed to login")
        }
    }
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
              <Text style={styles.description}>Please Login</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="joe@company.com"
                  onChangeText={setEmail}
                  style={[styles.textInput, {marginBottom: 20}]}
                />
                <TextInput
                  placeholder={'Password'}
                  secureTextEntry
                  onChangeText={setPassword}
                  style={styles.textInput}
                />
                { error && <Text>{error}</Text>}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 30,
                }}>
                <TouchableOpacity onPress={()=> loginAction()} style={styles.loginBtn}>
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
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Home')}
            style={styles.btn}>
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
