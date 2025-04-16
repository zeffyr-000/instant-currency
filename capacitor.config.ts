import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.zeffyr.instantcurrency',
  appName: 'InstantCurrency',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    iosScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: '#121212'
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#121212',
      overlaysWebView: false
    }
  },
  ios: {
    scheme: 'InstantCurrency',
    contentInset: 'automatic',
    preferredContentMode: 'mobile',
    backgroundColor: '#121212'
  },
  android: {
    backgroundColor: '#121212'
  }
};

export default config;
