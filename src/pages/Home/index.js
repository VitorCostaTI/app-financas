import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Home() {
  return(
    <View style={styles.container}>
      <Header />
      <Text>Página inicial</Text>
    </View>
  )
}

class Header extends Component{
  render(){
    return (
      <View style={styles.header}>
        <View style={styles.content}>
          <Text style={styles.username}>Home</Text>
          <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
            <Feather name='user' size={27} color="#fff"></Feather>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#8000ff',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 34
  },
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  username: {
    fontSize: 18,
    color: "#fff",
    fontWeight: 'bold'
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44 / 2
  }
})
