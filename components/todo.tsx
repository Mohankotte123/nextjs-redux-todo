import { Text, Flex, Checkbox, IconButton} from '@chakra-ui/react' ;
import React from 'react';
import  {TextIconSpacing}  from "@react-md/icon";
import { todo } from '../pages';
import { IoMdAdd } from 'react-icons/fa';

interface TodoProps {
    todo: todo,
    onClickCheck: (id: number, value: boolean) => void,
    onClickDelete: (id: number) => void,
}

function Todo (todoProps: TodoProps) {
  
    return (
        <Flex w = "100%" borderRadius = "10px" justifyContent={"space-between"} bg = {todoProps.todo.isCompleted ? "green.200" : "gray.200"} padding = "12px" >
            <Flex justifyContent={"start"} alignItems={"center"}>
                <Checkbox borderColor={"black"} colorScheme={"green"} isChecked = {todoProps.todo.isCompleted ? true : false} onChange = {(e) => todoProps.onClickCheck(todoProps.todo.id, e.target.checked)} >
                    <Text ml = "10px" as = {todoProps.todo.isCompleted ? 's' : 'text'}>{todoProps.todo.todo}</Text>
                </Checkbox>
            </Flex>
            <Flex cursor = "pointer" w = "30px" h = "30px" justifyContent={"center"} alignItems={"center"} onClick = {() => todoProps.onClickDelete(todoProps.todo.id)}>
            <IconButton aria-label = "addButton" bg = "cyan.400" onClickDelete = {todoProps.onClickDelete} color = "white" _hover = {{bg: "cyan.600"}} icon = {<TextIconSpacing />} />
            </Flex>
        </Flex>
    );
}

export default Todo;