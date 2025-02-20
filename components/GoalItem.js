import { StyleSheet, View, Text, Pressable } from "react-native";
//</Pressable> используется ддя onClick

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "black" }} //стилизация эффекта
        onPress={props.onDeleteItem.bind(this, props.id)} //удаление элемента
        style={({ pressed }) => pressed && styles.pressedItem} // для ios. Если нажато, то примени эффект styles.pressedItem. Потому что стиль андрооид не действут для ios
      >
        <Text style={styles.goalText}> {props.text} </Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#42BD01",
    //padding: 8,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
