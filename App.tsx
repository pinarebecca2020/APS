import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  Image, ImageBackground, SafeAreaView, ScrollView,
  StatusBar, StyleSheet,
  Text, TouchableHighlight,
  View
} from 'react-native';

function HomeScreen({ navigation }: any) {
  return (

    <ImageBackground source={require('./img/Ar.png.jpg')} resizeMode="cover" style={styles.root}>
      <View style={{ justifyContent: 'center', marginTop: 120 }}>
        <Text style={styles.title}>Qualidade do Ar</Text>
        <View style={styles.text}>
          <Text>Seja bem vindo ao app Qualidade do Ar</Text>
          <Text>Acesso rápido aos últimos dados do Instituto de Energia e Meio Ambiente (IEMA) sobre qualidade do ar</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate('Indice de Qualidade do Ar')}
          >
            <Text style={styles.appButtonText}>Acessar</Text></TouchableHighlight>
        </View>
      </View>
    </ImageBackground>

  );
}
function FirstScreen({ navigation }: any) {
  return (

    <SafeAreaView style={{
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      alignItems: 'center',
      justifyContent: 'flex-start',
    }}>
      <ScrollView>
        <ImageBackground source={require('./img/Ar.png.jpg')} resizeMode="cover" style={styles.root}>
          <Text style={styles.subItem}> A qualidade do ar pode ser classificada como:</Text>
          <Text style={styles.item}>•Moderada</Text>
          <Text style={styles.item}>•Ruim</Text>
          <Text style={styles.item}>•Muito Ruim</Text>
          <Text style={{ paddingTop: 5, marginLeft: 20 }}> •Péssima</Text>
          <Text style={styles.subTitle}>Estrutura do índice brasileiro de qualidade do ar e efeitos à saúde</Text>
          <Image source={require('./img/test3.png')} style={{
            resizeMode: 'contain', width: 360, height: 280, margin: 10, borderWidth: 0.5

          }} />
          <Text style={{ paddingLeft: 10, paddingTop: 12 }}>Alguns dos efeitos á saúde de acordo com a classificação:</Text>
          <Image source={require('./img/test4.png')} style={{
            resizeMode: 'contain', width: 360, height: 280, margin: 10, borderWidth: 0.5

          }} />
          <View style={{ backgroundColor: '#4878A8', alignSelf: 'center', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, elevation: 8, marginTop: 10 }}>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => navigation.navigate('Padrões de Qualidade do Ar no Brasil')}
            >
              <Text style={styles.appButtonText}>Próxima Página</Text></TouchableHighlight>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>

  );
}
function SecondScreen({ navigation }: any) {
  return (
    <SafeAreaView style={{
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      alignItems: 'center',
      justifyContent: 'flex-start',
    }}>
      <ScrollView>
        <ImageBackground source={require('./img/Ar.png.jpg')} resizeMode="cover" style={styles.root}>
          <Text style={styles.subItem}>Os padrões de qualidade do ar são valores de referência de concentração de poluentes que funcionam como metas na gestão da qualidade do ar. </Text>
          <Text style={styles.subItem}>No Brasil, são estabelecidos pela Resolução do Conselho Nacional do Meio Ambiente nº 491/2018, e são organizados em níveis. </Text>
          <Text style={styles.subItem}>Há os padrões intermediários (PI), 1 a 3, que representam valores provisórios ou temporários para uma determinada região poluída, que ao longo do tempo deve almejar prosseguir avançando para padrões mais elevados, despoluindo o ar em etapas até alcançar o padrão final.</Text>
          <Text style={styles.subItem}> O padrão final (PF) segue as definições da Organização Mundial da Saúde de 2005.</Text>
          <Text style={styles.subTitle}>Padrões nacionais de qualidade do ar</Text>
          <Image source={require('./img/test5.png')} style={{
            resizeMode: 'contain', width: 360, height: 280, margin: 10, borderWidth: 0.5

          }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
            <View style={{ backgroundColor: '#4878A8', alignSelf: 'center', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, elevation: 8, marginTop: 10 }}>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => navigation.navigate('Home')}
              >
                <Text style={styles.appButtonText}>Página Inicial</Text></TouchableHighlight>
            </View>
            <View style={{ backgroundColor: '#4878A8', alignSelf: 'center', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, elevation: 8, marginTop: 10 }}>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => navigation.navigate('Poluição do Ar nas Capitais')}

              >
                <Text style={styles.appButtonText}>Próxima Página</Text></TouchableHighlight>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView >

  );
}
function ThirdScreen({ navigation }: any) {
  return (
    <SafeAreaView style={{
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      alignItems: 'center',
      justifyContent: 'flex-start',
    }}>
      <ScrollView>
        <ImageBackground source={require('./img/Ar.png.jpg')} resizeMode="cover" style={styles.root}>
          <View style={{ flex: 1 }}>
            <Text style={styles.subTitle}>Como está a poulição do ar nas capitais?</Text>
            <Image source={require('./img/test6.png')} style={{
              resizeMode: 'contain', width: 360, height: 280, margin: 10, borderWidth: 0.5

            }} />
            <Text style={styles.subItem}>As estações de monitoramento estão concentradas na região sudeste do país, e a região norte do país sem monitoramento.</Text>
            <Image source={require('./img/test7.png')} style={{
              resizeMode: 'contain', width: 360, height: 280, margin: 10, borderWidth: 0.5

            }} />
            <Text style={styles.subItem}>Observa-se que o poluente que esta marjoriatamente acima das diretrizes de qualidade do ar recomendadas pela OMS é o Ozonio.</Text>
            <Image source={require('./img/test8.png')} style={{
              resizeMode: 'contain', width: 360, height: 280, margin: 10, borderWidth: 0.5

            }} />
            <Text style={styles.subItem}>Todos os dados foram retirados da plataforma Qualidade do Ar do IEMA (Instituto de Energia e Meio Ambiente)</Text>
          </View>
          <View style={{ backgroundColor: '#4878A8', alignSelf: 'center', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, elevation: 8, marginTop: 10 }}>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.appButtonText}>Página Inicial</Text></TouchableHighlight>
          </View>
        </ImageBackground>
      </ScrollView></SafeAreaView >
  );
}

export const styles = StyleSheet.create({
  root: { flex: 1 },
  container: {
    flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center', backgroundColor: '#A9C0D8',
  },
  title: {
    textAlign: 'center', fontSize: 28, fontWeight: 'bold', color: 'black', marginTop: 45,
  },
  subTitle: {
    textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 20
  },
  item: { padding: 5, marginLeft: 20 },
  subItem: { paddingLeft: 5, paddingTop: 12 },
  text: {
    paddingHorizontal: 30, fontWeight: 'bold', fontSize: 18, paddingVertical: 12
  },
  buttonContainer: {
    backgroundColor: '#4878A8', width: 150, alignSelf: 'center',
    color: '#fff', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, elevation: 8,
  },
  appButtonText: {
    fontSize: 18, color: "#fff", fontWeight: "bold", alignSelf: "center", textTransform: "uppercase"
  }
});

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    //<SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Indice de Qualidade do Ar" component={FirstScreen} />
        <Stack.Screen name="Padrões de Qualidade do Ar no Brasil" component={SecondScreen} />
        <Stack.Screen name="Poluição do Ar nas Capitais" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
}

export default App;
