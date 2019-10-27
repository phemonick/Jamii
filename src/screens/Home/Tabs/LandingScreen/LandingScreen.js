import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {EventCard} from '../../../../components';

export default function LandingScreen(props) {
  const [featuredEvent, setFeaturedEvent] = useState([
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
  ]);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, padding: 20}}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.body}>
            <View>
              <Text style={styles.logo}> J </Text>
            </View>
            <View style={styles.featuredEvent}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, alignItems: 'center'}}>
                <Text style={{ fontSize: 24, fontWeight: 'bold'}}>Featured events</Text>
                <TouchableOpacity style={{backgroundColor: 'red', paddingLeft: 20, paddingRight: 20, height: 35, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{ fontSize: 16, color: '#fff'}}>See All</Text>
                </TouchableOpacity>
              </View>
              <View>
                <FlatList
                  data={featuredEvent}
                  renderItem={({item}) => <EventCard item={item} />}
                  keyExtractor={item => item.id}
                  horizontal={true}
                />
              </View>
            </View>
            <View style={{ marginTop: 40}}>
              <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20}}> My Next Event</Text>
              <FlatList data={featuredEvent}
                renderItem={({item}) => <EventCard item={item} />}
                keyExtractor={item => item.id}
               />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '95%',
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
  featuredEvent: {},
});
