import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enterText, setEnterText] = useState();

  function goalInputHandler(enteredText) {
    setEnterText(enteredText);
  }

  function addGoalHandler() {
    props.addGoalHandler(enterText);
    setEnterText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inpuContainer}>
        <Image
          source={require("../assets/image/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Your curse goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enterText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inpuContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    marginRight: 8,
    padding: 16,
    color: "#120438",
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
