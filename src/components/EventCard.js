import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

export function EventCard(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginRight: 20, marginBottom: 20}}>
      <View
        style={{backgroundColor: '#eee', borderRadius: 10, overflow: 'hidden'}}>
        <View>
          <Image
            source={require('../images/road.jpeg')}
            style={{
              height: 200,
              width: 250,
            }}
          />
        </View>
        <View style={{padding: 15, width: 250}}>
          <Text style={{paddingBottom: 15}}>Anifowose, Bariga</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', flex: 2, marginRight: 10}}>Fixing potholes in Bariga</Text>
            <TouchableOpacity style={{ backgroundColor: 'blue', justifyContent: "center", alignItems: 'center', flex: 1, height: 30, borderRadius: 5}}>
                <Text style={{ color: '#fff'}}> Join </Text>
            </TouchableOpacity>
          </View>
          <Text style={{color: '#777', paddingTop: 10, paddingBottom: 10}}>
            Follow me this saturday as we provide social good to our local community
          </Text>
          <Text style={{color: '#777', paddingTop: 5}}>20th, August, 2019</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
  },
});
