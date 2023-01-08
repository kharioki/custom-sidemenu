import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import profile from './assets/profile.png';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: 'flex-start' }}>
        <Image source={profile} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
