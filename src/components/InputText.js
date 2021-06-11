import React, {PropTypes} from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";

const propTypes = {
	onPress: PropTypes.func,
	style: TextInput.propTypes.style,
	textStyle: Text.propTypes.style,
	containerStyle: View.propTypes.style,
	text: PropTypes.string,
	placeholder: TextInput.propTypes.placeholder,
	underlineColorAndroid: TextInput.propTypes.underlineColorAndroid,
};

const InputText = (({
	onPress,
	style,
	textStyle,
	containerStyle,
	text,
	placeholder,
	underlineColorAndroid,
}) => (
	<View style={containerStyle}>
		<Text style={textStyle}>{text}</Text>
		<View style={styles.textView}>
			<TextInput 
				onPress={onPress} 
				style={style}
				placeholder={placeholder} 
				underlineColorAndroid={underlineColorAndroid}
			/>
		</View>
	</View>
))

InputText.propTypes = propTypes;
InputText.defaultProps = {
	onPress: null,
}

const styles = StyleSheet.create({
	textView: {
		alignItems: "center",
	},
})

export default InputText;
