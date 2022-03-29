const counterReducer: any = (state: any = 0, action: any) => {
  console.log('hello');
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default: {
      return state;
    }
  }
};
export default counterReducer;
