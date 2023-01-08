import React, { useRef, useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
import profile from './assets/profile.png';
// Tab Icons ...
import home from './assets/home.png';
import search from './assets/search.png';
import notifications from './assets/bell.png';
import settings from './assets/settings.png';
import logout from './assets/logout.png';
// Menu icons ...
import menu from './assets/menu.png';
import close from './assets/close.png';
// Photo
import photo from './assets/photo.jpg';

export default function App() {
  const [currentTab, setCurrentTab] = useState('Home');
  const [showMenu, setShowMenu] = useState(false);

  // Animated properties...
  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale initially must be 1
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

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

      {/* Overlay view */}
      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: '#fff',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: showMenu ? 20 : 0,
        // Transform the view...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue },
        ],
      }}>

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset,
          }],
        }}>
          {/* Menu Button */}
          <TouchableOpacity onPress={() => {
            // Do Actions Here...
            // Scaling the view...
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.8,
              duration: 300,
              useNativeDriver: true,
            }).start();

            // Moving the view...
            Animated.timing(offsetValue, {
              toValue: showMenu ? 0 : 250,
              duration: 300,
              useNativeDriver: true,
            }).start();

            // Moving the close button...
            Animated.timing(closeButtonOffset, {
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true,
            }).start();

            setShowMenu(!showMenu);
          }}>

            <Image source={showMenu ? close : menu} style={{
              width: 20,
              height: 20,
              tintColor: 'black',
              marginTop: 30,
            }} />

          </TouchableOpacity>

          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            paddingTop: 20,
          }}>{currentTab}</Text>

          <Image source={photo} style={{
            width: '100%',
            height: 300,
            borderRadius: 15,
            marginTop: 20,
          }} />

          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingTop: 15,
            paddingBottom: 8,
          }}>Tony Stark</Text>

          <Text style={{}}>
            Techie, Woodworker, and a Marvel Fanatic. I love to build shit!!!
          </Text>
        </Animated.View>

      </Animated.View>
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
