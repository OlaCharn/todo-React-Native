import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState(""); // state fot entered text from user
  const [goals, setGoals] = useState([]); //initially we have no goals => []

  function goalInputHandler(enteredText) {
    //console.log(enteredText);
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    //console.log(enteredGoalText);
    setGoals((currentGoals) => [
      ...goals,
      { text: enteredGoalText, id: Math.random().toString() }, //for unique key in FlatList
      // for FlatList is better to work witj Objects see below
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your goals"
          onChangeText={goalInputHandler}
        />
        <View style={styles.button}>
          <Button title="ADD GOAL" color="#fb933c" onPress={addGoalHandler} />
        </View>
      </View>

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}> {itemData.item.text} </Text>
              </View>
            );
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return item.id;
          }} //for unique key alternative to key!
        />
      </View>
    </View>
  );
}

// ScrollView - great for articles, but for renders items is not optimizing because it will slow app
// instead a better solution is FlatList

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#fec76f",
    flex: 1,
  },
  goalsContainer: {
    flex: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#fb933c",
    width: "70%",
    marginRight: 10,
  },
  list: {
    color: "#fb933c",
    fontStyle: "italic",
    fontWeight: "500",
  },
  button: {},
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#42BD01",
    padding: 8,
  },
  goalText: {
    color: "white",
  },
});
