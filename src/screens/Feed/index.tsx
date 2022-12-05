import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Image, Pressable, Text, Button } from "react-native";
import Header from "../../components/Header";
import styles from "../../components/styles/Header/style";

const Feed: React.FC<any> = ({ navigation }) => {
	return (
		<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<Text>Feed Screen</Text>
			<Pressable
				style={styles.menu}
				onPress={() => navigation.toggleDrawer()}
			>
				<Text style={styles.text}>Menu</Text>
			</Pressable>
			<Button
				title="Open drawer"
				onPress={() => navigation.toggleDrawer()}
			/>
		</View>
	);
};

export default Feed;
