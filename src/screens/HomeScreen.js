import React from 'react';
import { View, Button, Text } from 'react-native';
import { useRoute,  useNavigation, StackActions } from '@react-navigation/native';

function HomeScreen()  {
  const navigation = useNavigation();

  const route = useRoute();

  const handleLogout = () => {
    // Realizar a lógica de logout, se necessário

    // Redirecionar para a tela de login e remover as telas anteriores da pilha de navegação
    navigation.dispatch(StackActions.replace('Login'));
  };

  
  const loginData = route.params?.loginData;


  // Ocultar o cabeçalho na tela de HOME
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>


      <Text>Bem-vindo à tela principal!</Text>
      {loginData && <Text>Email: {loginData.email}</Text>}
      <Text />
   

      <Button
        title="Ir para tela Detalhes"
        onPress={() => navigation.navigate('Details')}
      />
      <Button 
        title="Logout" 
        onPress={handleLogout} 
      />

    </View>
  );
}

export default HomeScreen;
