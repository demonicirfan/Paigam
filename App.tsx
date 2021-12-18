import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import config from './src/aws-exports';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';

Amplify.configure(config);

function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    );
  }
}
export default withAuthenticator(App);
