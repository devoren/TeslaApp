import React, { useEffect } from "react";
import {
	Image,
	Pressable,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native";
import CarsList from "../../components/CarsList";
import Header from "../../components/Header";
import headerStyles from "../../components/styles/Header/style";

const Home: React.FC<any> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<StatusBar />
			<Header navigation={navigation} />
			<CarsList />
			{/* <SvgComponent color={"black"} /> */}
		</View>
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

export default Home;
