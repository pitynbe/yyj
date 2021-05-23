import React, {PropTypes} from "react";
import {View, Text, TextInput} from "react-native";

const propTypes = {
	onPress: PropTypes.func,
	style: TextInput.propTypes.style,
	containerStyle: Text.propTypes.style,
	text: PropTypes.string,
};

const InputText = (({
	onPress,
	style,
	containerStyle,
	text,
}) => (
	<View>
		<Text style={containerStyle}>{text}</Text>
		<TextInput onPress={onPress} style={style} />
	</View>
))

InputText.propTypes = propTypes;
InputText.defaultProps = {
	onPress: null,
}

export default InputText;
