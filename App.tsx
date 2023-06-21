import React from 'react';
import { View, Text } from 'react-native';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import DataDisplay from './components/FetchApi';


const queryClient = new QueryClient();




const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={{ backgroundColor: 'black', height: '100%' }}>
        <Text style={{ textAlign: 'center', color: 'orange', fontSize: 17 }}>Welcome to React Native with React Query!</Text>
        <DataDisplay />
      </View>
    </QueryClientProvider>
  );
};

export default App;
