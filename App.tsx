import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.hender}>Xin Chao</Text>
        <Text>Xin Chao</Text>
      </View>
      <Text style={styles.cssText}>Hello world!</Text>
      <Text>Hello world Nguyễn Trường Nam</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cssText: {
    color: "red",
    fontSize: 60,
    borderColor: "red",
    borderWidth: 1,
    padding: 20
  },
  hender: {
    color: "green",
    fontSize: 60
  }
});
