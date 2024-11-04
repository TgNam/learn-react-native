import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, FlatList, ScrollView, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [user, setUser] = useState([
    { id: 1, name: "Nam1", age: 20 },
    { id: 2, name: "Nam2", age: 20 },
    { id: 3, name: "Nam3", age: 20 },
    { id: 4, name: "Nam4", age: 20 },
    { id: 5, name: "Nam5", age: 20 },
    { id: 6, name: "Nam6", age: 20 },
    { id: 7, name: "Nam7", age: 20 },
    { id: 8, name: "Nam8", age: 20 },
    { id: 9, name: "Nam9", age: 20 },
    { id: 10, name: "Nam10", age: 20 },
    { id: 11, name: "Nam11", age: 20 },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={user}
        keyExtractor={item => item.id + ""}
        renderItem={({ item }) => {
          return (
            <View style={styles.viewUser}>
              <Text>{item.name}</Text>
            </View>
          )
        }}
      >

      </FlatList>
      {/* <ScrollView>
        {
          user.map((item, index) => { // Sửa cú pháp ở đây
            return (
              <View key={item.id} style={styles.viewUser}>
                <Text>{item.name}</Text>
              </View>
            )
          })
        }
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  viewUser: {
    padding: 30,
    backgroundColor: "pink",
    marginBottom: 30
  }
});
