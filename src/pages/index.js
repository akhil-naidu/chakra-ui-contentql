import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  VStack,
  HStack,
  Divider,
} from '@chakra-ui/react';
import TodoCard from '@/components/TodoCard';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

export default function Home() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    setTodos((prev) => [...prev, { id: nanoid(), task: task }]); //
    setTask('');
  };

  return (
    <Center h='100vh'>
      <Box h='60vh'>
        <VStack>
          <Heading>My Todo Application</Heading>
          <Divider />
          <HStack m='8'>
            <Input
              placeholder='Enter your Todo'
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
            <Button colorScheme='blue' onClick={() => handleClick()}>
              Submit
            </Button>
          </HStack>
        </VStack>

        <VStack>
          {todos.map(({ id, task }) => (
            <TodoCard key={id} task={task} />
          ))}
        </VStack>
      </Box>
    </Center>
  );
}
