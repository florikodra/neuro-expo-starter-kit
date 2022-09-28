import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from "react-redux";
import { store } from './src/redux/store';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </>
  );
}