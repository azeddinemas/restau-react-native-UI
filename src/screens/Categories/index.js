import { ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { IL_Brinjal, IL_Brokoli, IL_Cauliflawer_PNG, IL_Grapes_PNG, IL_Pumpkin, IL_RedOnion, IL_Tomato_PNG } from '../../res';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BoxItemTopProduct, Gap, Header } from '../../compenents';

const Categories = ({route,navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dataCategories = [
    {
      name: 'Tometo',
      icon: IL_Tomato_PNG,
      bgColor: 'rgba(227,206,243,0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Pumkin',
      icon: IL_Pumpkin,
      bgColor: 'rgba(255,244,143,0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Brinjal',
      icon: IL_Brinjal,
      bgColor: 'rgba(238,224,248,0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Cauliflower',
      icon: IL_Cauliflawer_PNG,
      bgColor: 'rgba(140, 250, 145,0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Red Onion',
      icon: IL_RedOnion,
      bgColor: 'rgba(251, 216, 224,0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Brokoli',
      icon: IL_Brokoli,
      bgColor: 'rgba(140, 250, 145,0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ]
  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={isDarkMode?'light-content':'dark-content'}/>
      <View style={styles.flex1}>
        <Header back cart onPress={()=>navigation.goBack()}/>
        <View style={styles.wrapperTittle}>
          <Text style={styles.tittle}>{route.params}</Text>
        </View>
        <Gap height={10}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.sectionBoxTopProduct}>
            {dataCategories.map((item,index)=>{
              return(
                <BoxItemTopProduct key={index}
                  bgColor={item.bgColor}
                  icon={item.icon}
                  text={item.name}
                  price={item.price}
                  onPress={()=> navigation.navigate('Detail',item)}
                  />
              )
            })}
          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Categories

const styles = StyleSheet.create({
  flex1:{
    flex:1
  },
  wrapperTittle:{
    paddingHorizontal:20
  },
  tittle:{
    fontSize:20,
    fontFamily:'Poppins-SemiBold',
    color:'#0FA956'
  },
  sectionBoxTopProduct:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center'
  }
})