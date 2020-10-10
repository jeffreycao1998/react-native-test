import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styled from 'styled-components';

const StyledTouchableOpacity = styled(TouchableOpacity)`
  padding: 15px;
  background-color: #f8f8f8;
  border-bottom-width: 1px;
  border-color: #eee;
`;

const StyledItem = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledText = styled(Text)`
  font-size: 18px;
`;

const ListItem = ({ item, deleteItem }) => {
  return (
    <StyledTouchableOpacity>
      <StyledItem>
        <StyledText>{item.text}</StyledText>
        <Icon name='remove' size={20} color='firebrick' onPress={() => deleteItem(item.id)}/>
      </StyledItem>
    </StyledTouchableOpacity>
  )
};

export default ListItem;