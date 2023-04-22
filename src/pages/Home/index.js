import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Home() {
  return(
    <View style={styles.container}>
      <Header />
      <Baleance />
    </View>
  )
}

class Header extends Component{
  render(){
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.username}>App Financeiro - Vitor Costa</Text>
          <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
            <Feather name='user' size={27} color="#fff"></Feather>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class Baleance extends Component{
  render(){
    return (
      <View style={styles.baleanceContainer}>

        <View style={styles.item}>
            <Text style={styles.itemTitle}>Saldo</Text>
            <View style={styles.contentBalenace}>
              <Text style={styles.currencySymbol}>R$</Text>
              <Text style={styles.balance}>234,95</Text>
            </View>
        </View>

        <View style={styles.item}>
            <Text style={styles.itemTitle}>Gastos</Text>
            <View style={styles.contentBalenace}>
              <Text style={styles.currencySymbol}>R$</Text>
              <Text style={styles.expenses}>52,30</Text>
            </View>
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
  headerContainer: {
    backgroundColor: '#8000ff',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 34
  },
  headerContent: {
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
  },
  baleanceContainer: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22
  }, 
  itemTitle: {
    fontSize: 20,
    color: "#DADADA"
  },
  contentBalenace: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  currencySymbol: {
    color: "#DADADA",
    marginRight: 6
  },
  balance: {
    fontSize: 22,
    color: "#2ecc71"
  },
  expenses: {
    fontSize: 22,
    color: "#e74c3c"
  }
})
