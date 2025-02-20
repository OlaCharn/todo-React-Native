import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState(""); // state fot entered text from user

  function goalInputHandler(enteredText) {
    //console.log(enteredText);
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/images/3.png")} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Your goals"
          onChangeText={goalInputHandler}
          value={enteredGoalText} //чтобы исчезал текст после ввода
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="#E1178D" onPress={props.onCancel} />
          </View>

          <View style={styles.button}>
            <Button title="ADD GOAL" color="#fb933c" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fec76f" ,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#fb933c",
    width: "100%",
  },
  goalsContainer: {
    flex: 4,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "35%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
});
