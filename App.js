import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class App extends Component {

  state = {
    massa: 0,
    altura: 0,
    resultadoText: '',
  }

  calcular = () => {
    var imc = parseInt(this.state.massa) / (parseFloat(this.state.altura)*parseFloat(this.state.altura))
    if (imc < 18.6) {
      this.definirIndice('Abaixo do peso')
    } else if (imc < 25) {
      this.definirIndice('Peso ideal')
    } else if (imc < 30) {
      this.definirIndice('Levemente acima do peso')
    } else if (imc < 35) {
      this.definirIndice('Obesidade grau I')
    } else if (imc < 40) {
      this.definirIndice('Obesidade grau II')
    } else if (imc > 40) {
      this.definirIndice('Obesidade grau III')
    }
  }

  definirIndice = (estado) => {
    this.setState({resultadoText: estado})
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.layout01}>
          <View style={[styles.textInputContainer, styles.h50]}>
            <TextInput onChangeText={(altura)=>{this.setState({altura})}} placeholder="Altura" keyboardType="numeric" style={[styles.textInput, styles.textCenter]}></TextInput>
            <TextInput onChangeText={(massa)=>{this.setState({massa})}} placeholder="Peso" keyboardType="numeric" style={[styles.textInput, styles.textCenter]}></TextInput>
          </View>

          <TouchableOpacity style={[styles.button, styles.h50]} onPress={this.calcular}>
            <Text style={[styles.textCenter, styles.textSize]}>Calcular</Text>
          </TouchableOpacity>
        </View>
        

        <View style={styles.layout02}>
          <Text style={styles.textSize}>{this.state.resultadoText}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout01: {
    flexDirection: 'column',
    height: '35%',
  },
  textInputContainer: {
    flexDirection: 'row',
  },
  textInput: {
    fontSize: 55,
    width: '50%',
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#90b7f5',
    justifyContent: 'center',
  },
  layout02: {
    height: '65%',
    alignItems: 'center',
  },
  //
  textCenter: {
    textAlign: 'center',
  },
  textSize: {
    fontSize: 50,
  },
  h50: {
    height: '50%',
  },
})