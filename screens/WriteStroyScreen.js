import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import firebase from 'firebase';
import db from '../config';

export default class WirteStoryScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      hasCameraPermissions : null,
      scanned : false,
      author : '',
      title: '',
      story: '',
      buttonState : 'normal',
      transactionMessage : ''
    }
  }

  submit = async() => {
    db.collection('Storys').add({
      'Title': this.state.title,
      'Author': this.state.author,
      'Story': this.state.story
    })
  } 

  render(){
    return(
      <KeyboardAvoidingView style={styles.container} behaviour="padding" enabled>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputBox}
            placeholder="Title of Story"
            onChangeText={text => this.setState({title: text})}
            value={this.state.title}/> 
        </View>

        <View style={styles.inputView}>
          <TextInput
              style={styles.inputBox}
              placeholder="Author of Story"
              onChangeText={text => this.setState({author: text})}
              value={this.state.author}/> 
        </View>
        <View style={styles.inputView}>
          <TextInput
              style={styles.inputBox2}
              placeholder="Author of Story"
              onChangeText={text => this.setState({story: text})}
              value={this.state.story}/>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={this.submit()}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  };
}

const styles = StyleSheet.create({
  inputBox:{
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20,
  },
  inputBox2:{
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20,
    multiline: true
  },
  inputView:{
    flexDirection: 'row',
    margin: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitButtonText:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:"bold",
    color: 'white'
  },
  submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    height:50
  },
});