import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import SplashScreen from "react-native-splash-screen";

import Feed from "./screens/Feed";
import Home from "./screens/Home";
import CarScreen from "./screens/CarScreen/index";

const App = () => {
	useEffect(() => {
		SplashScreen.hide();
	}, [2000]);

	const Drawer = createDrawerNavigator();
	const Stack = createStackNavigator();

	function HomeStack() {
		return (
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="CarScreen"
					component={CarScreen}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		);
	}
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="HomeStack">
				<Drawer.Screen
					name="HomeStack"
					component={HomeStack}
					options={{
						headerShown: false,
						drawerType: "front",
						drawerPosition: "right",
					}}
				/>
				<Drawer.Screen
					name="Feed"
					component={Feed}
					options={{
						headerShown: false,
						drawerType: "front",
						drawerPosition: "right",
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
	},
});

export default App;
