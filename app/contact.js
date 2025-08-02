import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0dfe8",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 18
  }
});
