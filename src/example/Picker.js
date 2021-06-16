import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Picker,
  Text,
  View
} from 'react-native';
export default class PickerDemo extends Component {
  state = {
	selected:' ',
	dropdown:' ',
  }
  render() {
	return (
	  <View style={styles.container}>
	   <Picker
			prompt="弹框Dialog"
			style={styles.picker}
			selectedValue={this.state.selected}
			onValueChange={(value)=>this.onValueChange(1,value)}>
			<Picker.Item label="hello" value="key0" />
			<Picker.Item label="world" value="key1" />
			 <Picker.Item label="弹框1" value="key2" />
			<Picker.Item label="弹框2" value="key3" />
		  </Picker>
		  <Picker
			mode={'dropdown'}
			style={{width: gScreen.width}}
			selectedValue={this.state.dropdown}
			onValueChange={(value)=>this.onValueChange(2,value)}>
			<Picker.Item label="我是下拉菜单1" value="key0" />
			<Picker.Item label="我是下拉菜单2" value="key1" />
			<Picker.Item label="我是下拉菜单3" value="key2" />
			<Picker.Item label="我是下拉菜单4" value="key3" />
		  </Picker>
	  </View>
	);
  }
  onValueChange = (flag,value) => {
	if(flag ==1){
	this.setState({selected:value});
	}else{
	  this.setState({dropdown:value});
	}
  };
}
const styles = StyleSheet.create({
  container: {
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#F5FCFF',
  },
  picker: {
	width: gScreen.width,
  },
});
