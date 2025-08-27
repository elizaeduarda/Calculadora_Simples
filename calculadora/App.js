import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard} from 'react-native';

export default function App() {

  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState(0);
   const [operacao, setOperacao] = useState('');

function somar(){
  if (valor1 == '' || valor2 == '')
    {
      Alert.alert('Preencha os campos na tela!');
    }
  setOperacao('+');
  Keyboard.dismiss();
  let soma = Number.parseFloat(valor1.replace(',', '.'))+
             Number.parseFloat(valor2.replace(',', '.'));
  setResultado(soma);
}

function subtrair(){
  if (valor1 == '' || valor2 == '')
    {
      Alert.alert('Preencha os campos na tela!');
    }
    setOperacao('-');
  Keyboard.dismiss();
  
  let subtrair = Number.parseFloat(valor1.replace(',', '.'))-
             Number.parseFloat(valor2.replace(',', '.'));
  setResultado(subtrair);
}

function dividir(){
  if (valor1 == '' || valor2 == '')
    {
      Alert.alert('Preencha os campos na tela!');
    }
    setOperacao('÷');
  Keyboard.dismiss();

   if (Number.parseFloat(valor2.replace(',', '.')) === 0) {
      Alert.alert('Erro', 'Não é possível dividir por zero!');
      return;
    }

  let dividir = Number.parseFloat(valor1.replace(',', '.'))/
             Number.parseFloat(valor2.replace(',', '.'));
  setResultado(dividir);
}

function multiplicar(){
  if (valor1 == '' || valor2 == '')
    {
      Alert.alert('Preencha os campos na tela!');
    }
    Keyboard.dismiss();
    setOperacao('x');
  let multiplicar = Number.parseFloat(valor1.replace(',', '.'))*
             Number.parseFloat(valor2.replace(',', '.'));
  setResultado(multiplicar);
}

function expo(){
  if (valor1 == '' || valor2 == '')
    {
      Alert.alert('Preencha os campos na tela!');
    }
    Keyboard.dismiss();
    setOperacao('^');
  let base = Number.parseFloat(valor1.replace(',', '.'));
  let expoente = Number.parseFloat(valor2.replace(',', '.'));
  let resultadoExp = Math.pow(base, expoente);
  setResultado(resultadoExp);
}
//funcao para limpar
function limpar(){
  setValor1(''); //limpa o primeiro valor
  setValor2('');
  setResultado(0); //coloca o resultado por zero
  setOperacao('');
  Keyboard.dismiss();
}
 return (
    <View style={styles.container}>
    
      <Text style={styles.titulo}>Calculadora</Text>

      <Text style={styles.labelCampo}>Primeiro valor:</Text>
      <TextInput style={styles.caixaTexto}
      keyboardType='decimal-pad'
      onChangeText={(text)=> setValor1(text)}
      value={valor1}
      placeholder="Digite um número"
      />

      <View style={styles.operacaoContainer}>
          <Text style={styles.operacao}>{operacao}</Text>
      </View>

      <Text style={styles.labelCampo}>Segundo valor:</Text>

      <TextInput style={styles.caixaTexto}
      keyboardType='decimal-pad'
      onChangeText={(text)=> setValor2(text)}
      value={valor2}
      placeholder="Digite um número"
      />
    
      <View style={styles.botoesContainer}>
      <TouchableOpacity style={[styles.botao, styles.botaoSoma]}
        onPress={()=> somar()}>
        <Text style={styles.textoBotao}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.botaoSubtrair]}
        onPress={()=> subtrair()}>
        <Text style={styles.textoBotao}>-</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.botaoMultiplicar]}
        onPress={()=> multiplicar()}>
        <Text style={styles.textoBotao}>×</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.botaoDividir]}
        onPress={()=> dividir()}>
        <Text style={styles.textoBotao}>÷</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.botaoExpoente]}
        onPress={()=> expo()}>
        <Text style={styles.textoBotao}>^</Text>
      </TouchableOpacity>

      </View>

      <TouchableOpacity style={[styles.botao, styles.botaoLimpar]}
        onPress={()=> limpar()}>
        <Text style={styles.textoBotao}>Limpar</Text>
      </TouchableOpacity>

        <View style={styles.resultadoContainer}>
        <Text style={styles.resultadoLabel}>Resultado:</Text>
        <Text style={styles.resultado}>
          {resultado.toString().replace('.', ',')}
        </Text>
      </View>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: 20,
  },
  labelCampo: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
    color: '#4a5568',
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
  operacao: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4299e1',
  },
  operacaoContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  caixaTexto: {
    width: '80%',
    height: 50,
    borderColor: '#e2e8f0',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  botoesContainer: {
    padding:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  botao: {
    width: 55,
    height: 55,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  botaoSoma: {
    backgroundColor: '#48bb78',
  },
  botaoSubtrair: {
    backgroundColor: '#ed8936',
  },
  botaoMultiplicar: {
    backgroundColor: '#9f7aea',
  },
  botaoDividir: {
    backgroundColor: '#FC0FC0',
  },
  botaoExpoente: {
    backgroundColor: "#4da6ff",
  },
  textoBotao: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  botaoLimpar: {
    width: "30%",
    backgroundColor: "#ff6666",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 10,
    
  },
  textoBotaoLimpar: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  resultadoContainer: {
    margin:30,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  resultadoLabel: {
    fontSize: 16,
    color: '#718096',
    marginBottom: 5,
  },
  resultado: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3748',
  },
});