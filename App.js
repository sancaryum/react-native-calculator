import React, {Component} from 'react';
import {AppRegistry, Text, View, Style, TextInput, TouchableHighlight, Dimensions,StyleSheet
} from 'react-native';
//import Contants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


export default class App extends Component {
  state = {
    number1: '',
    number2: '',
    result: '',
    operateSymbol: ''
  };

  //Toplama işlemi
  plusOperation=()=>{
    this.setState({
      result:Number(this.state.number1)+Number(this.state.number2),
      operateSymbol: '+',
    })
  }

  subOperation=()=>{
    this.setState({
      result: Number(this.state.number1) - Number(this.state.number2),
      operateSymbol: '-',
    })
  }

  //divoperation(){} şeklinde de direkt yazılabilir
  divOperation=()=>{

    this.setState({
      result: Number(this.state.number1) / Number(this.state.number2),
      operateSymbol: '/'
    })
  }
  
  multOperation=()=>{ 
    this.setState({
      result: Number(this.state.number1) * Number(this.state.number2),
      operateSymbol:'X'
    })
  }




    render(){
      return(
        <View style={styles.container}>
            <View style={styles.titleView}>
               
               <Text style={styles.title}>
                  Easy Calculator
                  by Yasin Eryigit
               </Text>

            </View>

            <View style={styles.userInput}>
              
                <TextInput style={styles.number1}
                  keyboardType='numeric'
                  placeholder='0'
                  onChangeText={(number1)=>this.setState({number1})}
                  value={this.state.number1} 
                />

                <Text style={styles.operationSymbol}>
                  {this.state.operateSymbol}
                </Text>

                <TextInput style={styles.number2}
                  keyboardType='numeric'
                  placeholder='0'
                  onChangeText={(number2)=>this.setState({number2})}
                  value={this.state.number2} 
                />

            </View>


            <View style={styles.resultBox}>

              <Text style={styles.resultOutput}>
                  Answer: {this.state.result}
              </Text>

            </View>

       
            <View style={styles.operationDesc}>

               <Text style={styles.operationDescTxt}>
                  Click operation below to Calculate
               </Text> 

            </View>
        
            

            <View style={styles.operation}>
               
               <TouchableHighlight
                  onPress={this.plusOperation}
                  style={styles.buttonOperation}               
               >
               
                  <Text style={styles.operationTxt}>  
                    +
                  </Text>
               

               </TouchableHighlight>    


              <TouchableHighlight
                onPress =  {this.subOperation}
                style={styles.buttonOperation}
              >

                 
                    <Text style={styles.operationTxt}>
                      -
                      </Text>
                  

              </TouchableHighlight>
               

            </View>

            <View style={styles.operation}>

             <TouchableHighlight
                onPress={
                  this.divOperation
                }
                style={styles.buttonOperation}
             >

                  <Text style={styles.operationTxt}>
                    /
                  </Text>
               

             </TouchableHighlight> 
            
            <TouchableHighlight
              onPress={this.multOperation}
              style={styles.buttonOperation}
            >

                
                  <Text style={styles.operationTxt}>
                    X
                    </Text>
                

            </TouchableHighlight>
         

          </View>
        
        
        </View>


      );
    }
}

const styles = StyleSheet.create({
  container:{
    height: deviceHeight,
    width: deviceWidth,
    backgroundColor: '#edd972'
  },
  titleView:{
    height: deviceHeight/10,
    backgroundColor: '#edd972',
    justifyContent:'center'
  },
  title: {
    fontSize:19,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  userInput:{
    height: deviceHeight/3,
    backgroundColor: '#edd972',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  number1:{
    height:55,
    width:55,
    alignSelf:'center',
    backgroundColor: 'white',
    margin: 20,
    borderColor: 'black',
    borderWidth: 1.3,

  },  
  number2:{
    height: 55,
    width: 55,
    alignSelf: 'center',
    backgroundColor: 'white',
    margin: 25,
    borderColor: 'black',
    borderWidth: 1.3,
  },
  resultBox:{
    height: deviceHeight/10,
    backgroundColor: '#edd972',
    justifyContent: 'center',
  },
  resultOutput:{
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  operationDesc:{
    height: deviceHeight/9,
    backgroundColor: '#edd972',
    justifyContent: 'center'
  },
  operationDescTxt:{
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  operation:{
    height: deviceHeight/6,
    backgroundColor: '#edd972',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonOperation:{
    height: 55,
    width: 80,
    backgroundColor: 'orange',
    alignSelf: 'center',
    margin:10,
    justifyContent: 'center'
  },
  operationTxt:{
    fontSize: 18,
    textAlign: 'center',
  },
  operationSymbol:{
    fontSize: 17,
    textAlign: 'center',
    color: 'black',
    marginTop: 95
  }

})
