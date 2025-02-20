import {
  StyleSheet,
  View,
  FlatList,
  Button,
  Text,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]); //initially we have no goals => []

  function addGoalHandler(enteredGoalText) {
    //console.log(enteredGoalText);
    setGoals((currentGoals) => [
      ...goals,
      { text: enteredGoalText, id: Math.random().toString() }, //for unique key in FlatList
      // for FlatList is better to work witj Objects see below
    ]);
    setModalVisible(false);
  }

  function deleteGoalHandler(id) {
    //console.log("DELETE")
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  // модальное окно с кнопкой
  function startAddGoalHandler() {
    setModalVisible(true);
  }
  //закрытие модального окна с кнопкой
  function endAddGoalHandler() {
    setModalVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return item.id;
          }} //for unique key alternative to key!
        />
      </View>

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={startAddGoalHandler}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

// ScrollView - great for articles, but for renders items is not optimizing because it will slow app
// instead a better solution is FlatList
      /* Кнопка внизу справа <Button
        title="Add New Goal"
        color="#fb933c"
        onPress={startAddGoalHandler}
      /> */


const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  floatingButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#fb933c",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Для Android
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
