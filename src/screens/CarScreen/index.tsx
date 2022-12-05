import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import CarItem from "./components/CarItem/CarItem";

const CarScreen: React.FC<any> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<CarItem />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
export default CarScreen;
