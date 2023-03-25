import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../Firebase/Firebse-config";

export default function HomeUsedPage() {
  const navigation = useNavigation();
  const [allItems, setAllItems] = useState("");

  useEffect(() => {
    const getUsedItem = async () => {
      const data = await getDocs(collection(db, "UsedItems"));
      setAllItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsedItem();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {/* <View style={styles.categories}>
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => navigation.navigate("AddProductClientPage")}
        >
          <Ionicons name="add-circle" size={30} color="#000" />
          <Text style={styles.categoryText}>Add Items</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <AntDesign name="calendar" size={35} color="#332885" />
          <Text style={styles.categoryText}>My Items</Text>
        </TouchableOpacity>
      </View> */}
      <TouchableOpacity
        style={{
          margin: 10,
          borderRadius: 10,
          paddingVertical: 10,
          backgroundColor: "#3669C9",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("AddProductClientPage")}
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
            ADD USED ITEMS
          </Text>
        </View>
      </TouchableOpacity>
      <FlatList
        data={allItems}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("DetailsUsedPeoductPage", { item })
            }
          >
            <Image source={{ uri: item.useditem_image }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.title}>{item.useditem_name}</Text>
              <Text style={styles.subtitle}>{item.useditem_catagory}</Text>
              <Text style={styles.price}>{`Rs.${item.useditem_price}`}</Text>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    margin: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
  cardContent: {
    flex: 1,
    marginVertical: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  subtitle: {
    fontSize: 14,
    marginHorizontal: 10,
    color: "#888",
  },
  price: {
    fontSize: 16,
    color: "#FE3A30",
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 10,
  },
  categories: {
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  categoryButton: {
    //elevation: 5,

    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    //backgroundColor: "#AEE2FF",
  },
  categoryIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#332885",
  },
});
