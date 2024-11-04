import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, FlatList, ScrollView, Text, View, Button, TextInput } from 'react-native';

interface ITodo {
  id: number,
  name: string
}
export default function App() {
  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [todo, setTodo] = useState("");
  const [listToDo, setListToDo] = useState<ITodo[]>([]);
  const handleCreateToDo = () => {
    if (!todo) return;
    setListToDo([...listToDo, { id: randomInteger(2, 200000), name: todo }])
    setTodo("")
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.hender}>ToDoApp</Text>
      </View>
      <View style={styles.styleBody}>
        <TextInput
          style={styles.inputText}
          value={todo}
          onChangeText={(value) => setTodo(value)}
        />
        <Button title='ADD TODO' onPress={handleCreateToDo} />
      </View>
      <View>
        <FlatList
          data={listToDo}
          keyExtractor={item => item.id + ""}
          renderItem={({ item }) => (
            <Text style={styles.todoItem}>{item.name}</Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hender: {
    backgroundColor: "orange",
    textAlign: "center",
    fontSize: 60,
    marginBottom: 10
  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
  styleBody: {
    paddingHorizontal: 20,
    marginBottom: 20
  },
  inputText: {
    borderColor: 'green',
    borderBottomWidth: 1,
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 10
  },
  todoItem: {
    padding: 30,
    backgroundColor: "pink",
    marginBottom: 30,
  }
});
