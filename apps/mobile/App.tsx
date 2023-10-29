import { useEffect, useState } from "react";
import { Button, FlatList,  SafeAreaView,  StatusBar,  StyleSheet, Text } from "react-native";
import { trpc } from "./src/trpc";

export default function App() {
  const [users, setUsers] = useState<{ email: string; password: string }[]>([]);
  
  const getUsers = async () => {
    const data = await trpc.getUsers.query();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const createUser = async () => {
    await trpc.createUser.mutate({
      email: "some@email.com",
      password: "some-password",
    });
    getUsers();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>TRPC REACT NATIVE EXPO STARTER!</Text>
      <StatusBar  />
      <Button title="Create User" onPress={createUser} />
      <FlatList
        data={users}
        renderItem={({ item: { email } }) => <Text style={styles.listItem}>{email}</Text>}
        style={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem : {
    padding: 10
  },
  listContainer:{
    padding: 10
  }
});
