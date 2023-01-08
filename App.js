import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import profile from './assets/profile.png';
// Tab Icons ...
import home from './assets/home.png';
import search from './assets/search.png';
import notifications from './assets/bell.png';
import settings from './assets/settings.png';
import logout from './assets/logout.png';

export default function App() {
  const [currentTab, setCurrentTab] = useState('Home');

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ justifyContent: 'flex-start', padding: 20 }}>
        <Image source={profile} style={{
          width: 60,
          height: 60,
          borderRadius: 10,
          marginTop: 8,
        }} />

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#fff',
          marginTop: 20,
        }}>Tony Stark</Text>

        <TouchableOpacity>
          <Text style={{
            marginTop: 10,
            color: 'white',
          }}>View Profile</Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          { /* Tab Bar Buttons... */}
          {TabButton(currentTab, setCurrentTab, 'Home', home)}
          {TabButton(currentTab, setCurrentTab, 'Search', search)}
          {TabButton(currentTab, setCurrentTab, 'Notifications', notifications)}
          {TabButton(currentTab, setCurrentTab, 'Settings', settings)}
        </View>

        <View>
          {TabButton(currentTab, setCurrentTab, 'Logout', logout)}
        </View>

      </View>
    </SafeAreaView>
  );
}

// Tab Button component
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity onPress={() => {
      if (title === 'Logout') {
        return;
      } else {
        setCurrentTab(title);
      }
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab === title ? '#fff' : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15,
      }}>
        <Image source={image} style={{
          width: 25,
          height: 25,
          tintColor: currentTab === title ? '#5359d1' : '#fff',
        }} />
        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 10,
          color: currentTab === title ? '#5359d1' : '#fff',
        }}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359d1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
