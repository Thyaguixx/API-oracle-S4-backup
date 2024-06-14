// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import * as React from 'react';
// import HomePAR from './src/pages/Home-PAR/HomePAR';
import HomeADM from './src/pages/ADM/Home/HomeADM';
import ExpertiseCursoParceiro from './src/pages/ADM/fluxoTrackANTIGO/ExpertisesCursos/expertise-cloud/ExpertiseCurso';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from './RootNavigation';
import Parceiros from './src/pages/ADM/Parceiros/Parceiros';
// import ProgressoExpertise from './src/pages/ADM/progressoExepertises/ProgressoExpertise';
import Welcome from './src/pages/LOGIN/welcome';
import Login from './src/pages/LOGIN/login';
import CadastroStep1 from './src/pages/ADM/CadastroParceiros/step-1/step1';
import CadastroStep2 from './src/pages/ADM/CadastroParceiros/step-2/step2';
import CadastroStep3 from './src/pages/ADM/CadastroParceiros/step-3/step3';
import DashboardExpertise from './src/pages/Graficos/dashboardExpertise/dashboardExepertise';
import Dashboard from './src/pages/Graficos/dashboard/dashboard';
import DashboardCursos from './src/pages/Graficos/dashboardCursos/dashboard';
import GerenciarUsuario from './src/pages/ADM/GerenciarUsuarios/Gerenciar/gerenciarUsuarios';
import ListaParceiros from './src/pages/ADM/GerenciarUsuarios/ListaParceiros/listaParceiros';
import ListaConsultor from './src/pages/ADM/GerenciarUsuarios/ListaConsultor/listaConsultor';
import EdicaoParceiro from './src/pages/ADM/EdicaoParceiro/edicaoParceiro';
import Step1Parceiro from './src/pages/ADM/EdicaoParceiro/step-1/step1';
import Step2Parceiro from './src/pages/ADM/EdicaoParceiro/step-2/step2';
import Step3Parceiro from './src/pages/ADM/EdicaoParceiro/step-3/step3';
import ProgressoExpertise from './src/pages/ADM/TracksLista/ProgressoExpertise';
import CertificacoesCheck from './src/pages/ADM/CertificacoesCheck/expertise-cloud/CertificacoesCheck';
import ExpertisesLista from './src/pages/ADM/ExpertisesLista/ExpertisesLista';
import RelatorioADMIN from './src/pages/ADM/Relatorio/Relatorio';
import CadastroConsultor from './src/pages/ADM/CadastroConsultor/page/cadastro';

const AppStack = createNativeStackNavigator()
//caso queira chamar um component de header que seja padrao nosso, em AppStack.Screen, dentro de option passar header: 'A header configurada nossa'


function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack.Navigator>
        <AppStack.Screen name='Inicio' component={Welcome} options={{ headerShown: false }} />
        <AppStack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <AppStack.Screen name='HomeADM' component={HomeADM} options={{ headerShown: false }} />
        <AppStack.Screen name='Parceiros' component={Parceiros} options={{ headerShown: false }} />
        <AppStack.Screen name='ExpertiseCursoParceiro' component={ExpertiseCursoParceiro} options={{ headerShown: false }} />
        
        <AppStack.Screen name='DashboardExpertises' component={DashboardExpertise} options={{headerShown: false}} />
        <AppStack.Screen name='DashboardExpertisesCursos' component={DashboardCursos} options={{headerShown: false}} />
        <AppStack.Screen name='DashboardParceiros' component={Dashboard} options={{headerShown: false}} />
        
        <AppStack.Screen name='CadastroStep1' component={CadastroStep1} options={{ headerShown: false }} />
        <AppStack.Screen name='CadastroStep2' component={CadastroStep2} options={{ headerShown: false }} />
        <AppStack.Screen name='CadastroStep3' component={CadastroStep3} options={{ headerShown: false }} />
        <AppStack.Screen name='CadastroConsultor' component={CadastroConsultor} options={{ headerShown: false }} />
        <AppStack.Screen name='GerenciarUsuarios' component={GerenciarUsuario} options={{ headerShown: false }} />
        <AppStack.Screen name='ListaParceiros' component={ListaParceiros} options={{ headerShown: false }} />
        <AppStack.Screen name='ListaConsultores' component={ListaConsultor} options={{ headerShown: false }} />
        
        <AppStack.Screen name='EdicaoParceiro' component={EdicaoParceiro} options={{ headerShown: false }} />
        {/* <AppStack.Screen name='EdicaoParceiroStep1' component={Step1Parceiro} options={{ headerShown: false }} /> */}
        <AppStack.Screen name='EdicaoParceiroStep2' component={Step2Parceiro} options={{ headerShown: false }} />
        <AppStack.Screen name='EdicaoParceiroStep3' component={Step3Parceiro} options={{ headerShown: false }} />
        
        {/* Tracks: */}
        <AppStack.Screen name='ProgressoExpertise' component={ProgressoExpertise} options={{ headerShown: false }} />
        
        {/* Expertises */}
        <AppStack.Screen name='ExpertisesLista' component={ExpertisesLista} options={{ headerShown: false }} />
        
        {/* Certificações */}
        <AppStack.Screen name='CertificacoesCheck' component={CertificacoesCheck} options={{ headerShown: false }} />
        <AppStack.Screen name='Relatorio' component={RelatorioADMIN} options={{ headerShown: false }} />
        
        
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
