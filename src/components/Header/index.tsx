import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Pressable, Text, Button } from "react-native";
import Feed from "../../screens/Feed";
import Icon from "react-native-vector-icons/Feather";
import styles from "../styles/Header/style";

const Header: React.FC<any> = ({ props }) => {
	const navigation: any = useNavigation();
	const myIcon = <Icon name="menu" size={30} color="#000" />;
	return (
		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={require("src/assets/images/logo.png")}
			/>
			{/* <Image
				style={styles.menu}
				source={require("src/assets/images/menu.png")}
			/> */}
			<Pressable
				style={styles.menu}
				onPress={() => navigation.openDrawer()}
			>
				<Text style={styles.text}>{myIcon}</Text>
			</Pressable>
		</View>
	);
};

export default Header;
