import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 25 : 64;

const list = [{
  id: 1,
  label: 'Boleto',
  value: '195,60',
  date: '17/09/2022',
  type: 1, //despesas
},
{
  id: 2,
  label: 'Pix cliente',
  value: '1.500,26',
  date: '01/10,2022',
  type: 2,
},
{
  id: 3,
  label: 'Folha de pagamento',
  value: '1.259,00',
  date: '05/10/2022',
  type: 1, // Receitas / Entradas
}];

export default function Home() {
  return(
    <View style={styles.container}>
      <Header />
      <Baleance />
      <Actions />
      <Movement />
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

class Actions extends Component{
  render(){
    return(
      <ScrollView style = {styles.actionsContainer} horizontal={true} showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.actionButton}>
              <View>
                <AntDesign name='addfolder' size={26} color="#000"/>
              </View>
              <Text style={styles.labelButton}>Entradas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
              <View>
                <AntDesign name='addfolder' size={26} color="#000"/>
              </View>
              <Text style={styles.labelButton}>Saidas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
              <View>
                <AntDesign name='addfolder' size={26} color="#000"/>
              </View>
              <Text style={styles.labelButton}>Boletos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
              <View>
                <AntDesign name='addfolder' size={26} color="#000"/>
              </View>
              <Text style={styles.labelButton}>Pix</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
              <View>
                <AntDesign name='addfolder' size={26} color="#000"/>
              </View>
              <Text style={styles.labelButton}>Empresas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
              <View>
                <AntDesign name='addfolder' size={26} color="#000"/>
              </View>
              <Text style={styles.labelButton}>Investimento</Text>
          </TouchableOpacity>
      </ScrollView>
    )
  }

}

class Movement extends Component{
  render(){
    return (  
      <View style={styles.movementContainer}>
        <Text style={styles.lastBalance}>Ultimas Movimentações</Text>
          <TouchableOpacity activeOpacity={0.9}>
            <FlatList style={styles.list} 
              data={list} keyExtractor={ (item) => String(item.id)} 
              showsHorizontalScrollIndicator={false} 
              renderItem={ ({item}) => 
                <Text style = {styles.listMovement}>
                  <Text style = {item.type == 2 ? styles.positive : styles.negative}>{item.date} | {item.label} - {item.value}</Text>
                </Text>
              }>
                </FlatList>
          </TouchableOpacity>
      </View>
    )
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 8,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99
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
  },
  actionsContainer: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14
  },
  actionButton: {
    alignItems: 'center',
    marginRight: 32
  },
  areaButton: {
    backgroundColor: '#ecf0f1',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelButton: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  lastBalance: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 14,
    marginLeft: 14,
    marginRight: 14,
  },
  listMovement: {
    marginTop: 10,
    marginLeft: 14,
    marginBottom: 12,
    fontSize: 15,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: "#DADADA",
  },
  positive: {
    color: "#2ecc71"
  },
  negative: {
    color: "#e74c3c"
  },
  hidden: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: "#DADADA",
    borderRadius: 8
  }
});
