import {StyleSheet} from "react-native";

export default StyleSheet.create({
	inputText: {
		width: gScreen.width - 40,
		marginTop: 5,

	},
	textStyle: {
		paddingLeft: 20,
		fontSize: 16,
		color: gColor.fontColor,
	},
	textFontSize: {
		fontSize: 13,
	},
	textColor: {
		color: "red",
	},
	viewBlock: {
		marginTop: 20,
	},
	wrightInfo: {
		marginTop: 20,
		marginBottom: 20,
		fontSize: 18,
	},
	nameText: {
		width: gScreen.width - 100,
		height: 35,
	},
	containerText: {
		flexDirection: "row",
		marginBottom: 10,
	},
	btn: {
		backgroundColor: "#D9D9D9",
		fontSize: 11,
		paddingLeft: 8,
		paddingRight: 8,
		color: "#333",
		height: 30,
		lineHeight: 22,
	}, 
	checkbox: {
		fontSize: 12,
		color: "#71A3D6",
	},
	checkboxView: {
		flexDirection: "row",
		alignItems: "center",
	},
	checkboxWidth: {
		width: 12,
		height: 12,
	},

})