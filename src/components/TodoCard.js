import React from 'react';

import { HStack, Card, IconButton, Text, Spacer } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

const TodoCard = ({ task }) => {
  return (
    <Card py='2' px='4' w='80'>
      <HStack>
        <Text>{task}</Text>
        <Spacer />
        <IconButton
          colorScheme='green'
          aria-label='Edit'
          icon={<EditIcon />}
          isRound
        />

        <IconButton
          colorScheme='red'
          aria-label='Delete'
          icon={<DeleteIcon />}
          isRound
        />
      </HStack>
    </Card>
  );
};

export default TodoCard;
