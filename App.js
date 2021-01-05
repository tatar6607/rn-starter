import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ListScreenExercise from './src/screens/ListScreenExercise';
import ImageScreen from './src/screens/ImageScreen';
import ImageScreenExercise from './src/screens/ImageScreenE'
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import CounterReducer from './src/screens/CounterScreenWithReducer';
import TextInputScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen'


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    ListSc : ListScreen,
    ListScE : ListScreenExercise,
    ImageSc : ImageScreen,
    ImageScE : ImageScreenExercise,
    CounterSc : CounterScreen,
    ColorSc : ColorScreen,
    SquareSc : SquareScreen,
    CounterReducerSc : CounterReducer,
    TextInputSc : TextInputScreen,
    BoxSc : BoxScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
