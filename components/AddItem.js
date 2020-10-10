import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styled from 'styled-components';

const StyledView = styled(View)`

`;

const StyledTextInput = styled(TextInput)`
  height: 60px;
  padding: 8px;
  font-size: 16px;
`;

const StyledTouchableOpacity = styled(TouchableOpacity)`
  background-color: #c2bad8;
  padding: 9px;
  margin: 5px;
`;

const StyledText = styled(Text)`
  color: darkslateblue;
  font-size: 20px;
  text-align: center;
`;

const AddItem = ({ item, addItem }) => {
  const [text, setText] = useState('');

  const onChange = (textValue) => setText(textValue);

  return (
    <StyledView>
      <StyledTextInput placeholder='Add Item...' onChangeText={onChange}/>
      <StyledTouchableOpacity onPress={() => addItem(text)} >
        <StyledText><Icon name='plus' size={20} />Add Item</StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  )
};

export default AddItem;