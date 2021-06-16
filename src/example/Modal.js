import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

export default class ModalExample extends Component {

  constructor(props) {
    super(props);
    this.state = {modalVisible: false};
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible(!this.state.modalVisible)}}
          >
         <View style={{marginTop: 52, backgroundColor: "rgba(0,0,0,0.6)", position: "absolute", bottom: 0, width: gScreen.width, height: gScreen.height - 280,}}>
          <View>
            <Text style={{fontSize: 22, color: "#e1e1e1"}}>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text style={{fontSize: 22, color: "#e1e1e1"}}>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text style={{fontSize: 22}}>Show Modal</Text>
        </TouchableHighlight>

      </View>
    );
  }
}