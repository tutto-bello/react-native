import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisable, setModalIsVisable] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisable(true);
  }

  function endAddGoalHandler() {
    setModalIsVisable(false);
  }

  const addGoalHandler = (enterText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enterText, key: Math.random().toString() },
    ]);
    setModalIsVisable(false);
  };

  function deleteGoalHanler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((item) => item.key !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appConatiner}>
        <Button
          title="Add new goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          addGoalHandler={addGoalHandler}
          visible={modalIsVisable}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            alwaysBounceVertical={false}
            keyExtractor={(item, index) => {
              return item.key;
            }}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.key}
                  deleteGoalHanler={deleteGoalHanler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appConatiner: {
    padding: 60,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
