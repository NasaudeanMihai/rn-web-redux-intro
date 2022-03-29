const initState: any = {
  items: [],
  loading: false,
  error: null,
};

const postsReducer = (state: any = initState, action: any) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST': {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case 'FETCH_POSTS_SUCCESS': {
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    }
    case 'FETCH_POSTS_FAILURE': {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default postsReducer;
