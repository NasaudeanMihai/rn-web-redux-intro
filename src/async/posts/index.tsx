import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../actions';

const Posts = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  console.log(state.items);
  const renderPosts = () => {
    if (state.loading) {
      return <Text>Loading</Text>;
    }
    return state.items.map((item: any, index: number) => {
      if (index >= 10) {
        return;
      }
      return <Text>{item.title}</Text>;
    });
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <View>
      {renderPosts()}

      {/* {posts.map((item: any, index: number) => {
        if (index >= 10) {
          return;
        }
        return <Text>{item.title}</Text>;
      })} */}
    </View>
  );
};

export default Posts;
