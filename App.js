import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appConatiner}>
        <Text>Hellor there</Text>
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
