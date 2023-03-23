import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function FeedbackForm() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={{
          margin: 10,
          borderRadius: 10,
          paddingVertical: 10,
          backgroundColor: "#3669C9",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Add ")}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="add-circle" size={30} color="#fff" />
          <Text
            style={{
              color: "#fff",
              marginLeft: 10,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            ADD ITEMS
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
