import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PassData from "./screens/ImagePickerTwo";
import AdminHome from "./screens/AdminHome";
import ItemsShop from "./screens/ItemsShop";
import AddItems from "./screens/AddItems";
import ItemDetailPage from "./screens/ItemDetailPage";
import EditItemsPage from "./screens/EditItemsPage";
import HomeBlogPage from "./screens/NewsBlogs/HomeBlogPage";
import AddBlogPage from "./screens/NewsBlogs/AddBlogPage";
import DetailsBlogPage from "./screens/NewsBlogs/DetailsBlogPage";
import EditBlogPage from "./screens/NewsBlogs/EditBlogPage";

const stack = createStackNavigator();
export default function app() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="AdminHome" component={AdminHome} />
          <stack.Screen name="ItemsShop" component={ItemsShop} />
          <stack.Screen name="AddItems" component={AddItems} />
          <stack.Screen name="EditItemsPage" component={EditItemsPage} />
          <stack.Screen name="ItemDetailPage" component={ItemDetailPage} />
          <stack.Screen name="HomeBlogPage" component={HomeBlogPage} />
          <stack.Screen name="AddBlogPage" component={AddBlogPage} />
          <stack.Screen name="DetailsBlogPage" component={DetailsBlogPage} />
          <stack.Screen name="EditBlogPage" component={EditBlogPage} />
          <stack.Screen name="Home" component={PassData} />
        </stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
