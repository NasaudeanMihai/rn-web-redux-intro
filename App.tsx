////////////////// Async Redux //////////

import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import postsReducer from './src/async/reducer/postsReducer';
import Posts from './src/async/posts';
import {composeWithDevTools} from 'redux-devtools-extension';

const {height} = Dimensions.get('screen');

const store = createStore(
  postsReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.center}>
          <Text>Hello React Native Web!!!</Text>
          <Posts />
        </View>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

/////////////////////// Count logic //////////////////

// import React from 'react';
// import {Dimensions, StyleSheet, Text, View} from 'react-native';
// import {createStore, applyMiddleware} from 'redux';
// import {Provider} from 'react-redux';
// import rootReducer from './src/count/redux/reducer';
// import HomeScreen from './src/count/home';

// // Long type

// // const myLogger = (_store: any): any => {
// //   return (next: any) => {
// //     return (action: any) => {
// //       console.log('middleware ran');
// //       return next(action);
// //     };
// //   };
// // };

// //short verion

// const myLogger = (_store: any) => (next: any) => (action: any) => {
//   return next(action);
// };

// const secondMiddleware = (_store: any) => (next: any) => (action: any) => {
//   return next(action);
// };

// const capAtTen = (_store: any) => (_next: any) => (_action: any) => {
//   if (store.getState().counterReducer >= 10) {
//     return _next({type: 'DECREMENT'});
//   }
//   _next(_action);
// };

// const store = createStore(
//   rootReducer,
//   // (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
//   //   (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(myLogger, secondMiddleware, capAtTen),
// );
// const {height} = Dimensions.get('screen');

// const App = () => {
//   return (
//     <Provider store={store}>
//       <View style={styles.container}>
//         <View style={styles.center}>
//           <Text>Hello React Native Web!!!</Text>
//           <HomeScreen />
//         </View>
//       </View>
//     </Provider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height,
//   },
//   center: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;

/////////// Spicy level ////////////////

// import React from 'react';
// import {Dimensions, StyleSheet, View} from 'react-native';
// import {applyMiddleware, createStore} from 'redux';
// import {Provider} from 'react-redux';
// import counterReducer from './src/spiceLevel/reducer';
// import HomeScreen from './src/spiceLevel/home';
// import {composeWithDevTools} from 'redux-devtools-extension';

// const {height} = Dimensions.get('screen');

// const capAtFive = (store: any) => (next: any) => (action: any) => {
//   console.log(store.getState());
//   if (store.getState() > 4) {
//     return next({type: 'DECREMENT'});
//   }

//   next(action);
// };
// const capAtOne = (store: any) => (next: any) => (action: any) => {
//   console.log(store.getState());
//   if (store.getState() < 2) {
//     return next({type: 'INCREMENT'});
//   }
//   next(action);
// };

// const store = createStore(
//   counterReducer,
//   composeWithDevTools(applyMiddleware(capAtFive, capAtOne)),
// );

// const App = () => {
//   return (
//     <Provider store={store}>
//       <View style={styles.container}>
//         <HomeScreen />
//       </View>
//     </Provider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height,
//   },
//   center: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;
