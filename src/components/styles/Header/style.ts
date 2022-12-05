import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
	container: {
		position: "absolute",
		top: 25,
		zIndex: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		paddingHorizontal: 20,
		paddingVertical: 10,
		alignItems: "center",
		backgroundColor: "hsla(0,0%,0%,.1)",
	},
	logo: {
		width: 100,
		height: 20,
		resizeMode: "contain",
	},
	menu: {
		backgroundColor: "hsla(0,0%,0%,.05)",
		borderRadius: 12,
	},
	text: {
		padding: 10,
		fontWeight: "400",
	},
});

export default headerStyles;
