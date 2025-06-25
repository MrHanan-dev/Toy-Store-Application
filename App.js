import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./screens/LandingPage";
import CategoriesPage from "./screens/CategoriesPage";
import ToyListPage from "./screens/ToyListPage";
import ToyDetailPage from "./screens/ToyDetailPage";
import CartPage from "./screens/Cart";
import AddUser from "./screens/AddUser";
import DeleteUser from "./screens/DeleteUser";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CategoriesPage"
          component={CategoriesPage}
          options={{ title: "Choose Category" }}
        />
        <Stack.Screen
          name="ToyListPage"
          component={ToyListPage}
          options={{ title: "View Toys" }}
        />
        <Stack.Screen
          name="ToyDetailPage"
          component={ToyDetailPage}
          options={{ title: "Order Page" }}
        />
        <Stack.Screen
          name="CartPage"
          component={CartPage}
          options={{ title: "Your Cart" }}
        />
        <Stack.Screen
          name="AddUser"
          component={AddUser}
          options={{ title: "Add User" }}
        />
        <Stack.Screen
          name="DeleteUser"
          component={DeleteUser}
          options={{ title: "Delete User" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
