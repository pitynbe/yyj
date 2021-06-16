import React, {Component} from "react";
import {FlatList, Text, View} from "react-native";

const arr = [
	{key: "a", name: "a"},
	{key: "b", name: "a"},
	{key: "c", name: "a"},
	{key: "d", name: "a"},
	{key: "e", name: "a"},
	{key: "f", name: "a"},
	{key: "g", name: "a"},
	{key: "h", name: "a"},
	{key: "i", name: "a"},
	{key: "j", name: "a"},
	{key: "k", name: "a"},
	{key: "1", name: "a"},
	{key: "2", name: "a"},
	{key: "3", name: "a"},
	{key: "4", name: "a"},
	{key: "5", name: "a"},
	{key: "6", name: "a"},
	{key: "7", name: "a"},
	{key: "8", name: "a"},
	{key: "9", name: "a"},
	{key: "10", name: "a"},
	{key: "11", name: "a"},
	{key: "l3", name: "a"},
	{key: "l4", name: "a"},
	{key: "l5", name: "a"},
	{key: "l6", name: "a"},
	{key: "l7", name: "a"},
	{key: "l8", name: "a"},
	{key: "l9", name: "a"},
	{key: "l00", name: "a"},
	{key: "l60", name: "a"},
	{key: "l61", name: "a"},
	{key: "l63", name: "a"},
	{key: "l62", name: "a"},
	{key: "l64", name: "a"},
	{key: "l65", name: "a"},
	{key: "l66", name: "a"},
	{key: "l67", name: "a"},
];
export default class ActivityIndicatorExm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animating: true,
		}
	}
	_header() {
		return (
			<Text style={{backgroundColor: "red", color: "#fff"}}>这是头部部分</Text>
		);
	}
	_footer() {
		return (
			<Text style={{backgroundColor: "blue", color: "#fff"}}>这是尾部部分</Text>
		);
	}
	_itemSeper() {
		return (
			<View style={{backgroundColor: "green", height: 1}}></View>
		);
	}
	
	render() {
		return (
			<FlatList 
				data={arr}
				renderItem={({item}) => <Text>{item.name}</Text>}
				ListHeaderComponent={this._header}
				ListFooterComponent={this._footer}
				horizontal={false}
				initialNumToRender={1}
				refreshing={false}
				onRefresh={() =>  alert('onRefresh: nothing to refresh :P')}
			/>
		);
	}
}