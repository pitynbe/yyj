import React, {Component} from "react";
import {DrawerLayoutAndroid, View, Text} from "react-native";

export default class DrawerLayoutAndroidExm extends Component {
	constructor(props) {
		super(props);
		
	}
	render() {
    var navigationView = (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <Text style={{margin: 10,color:'#fff',fontSize: 15, textAlign: 'center'}}>我是导航功能栏标题</Text>
      <Text style={{marginTop: 10,marginLeft:20,color:'#fff',fontSize: 15, textAlign: 'left'}}>1.功能1</Text>
      <Text style={{marginTop: 10,marginLeft:20,color:'#fff',fontSize: 15, textAlign: 'left'}}>2.功能2</Text>
    </View>
  );
  return (
    <DrawerLayoutAndroid
      drawerWidth={150}
      drawerPosition={DrawerLayoutAndroid.positions.left}
      renderNavigationView={() => navigationView}>
      <View >
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>我是主布局内容</Text>
      </View>
    </DrawerLayoutAndroid>
   );
  }
}
