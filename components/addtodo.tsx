import { FormControl, Flex, Input, FormErrorMessage, IconButton } from '@chakra-ui/react';
import React from 'react';
import { FontIcon, TextIconSpacing } from "@react-md/icon";

function AddTodo({ addTodo }: { addTodo: any }) {
    const [content, setContent] = React.useState(String([]));
    const [error, setError] = React.useState(false);

    function onChangeContent(e: any) {
        if (e.target.value !== '') {
            setError(false);
        }
        setContent(e.target.value);
    }

    function onClickAdd(e: any) {
        if (content == '') {
            setError(true);
            return;
        } else {
            addTodo({
                todo: content,
                isCompleted: false,
                id: Math.random()
            });
            setContent('');
            setError(false);
        }
    }

    return (
        <Flex justifyContent={"space-between"}>
            <FormControl w="85%" isInvalid={error}>
                <Input id='name' placeholder='name' value={content} onChange={(e) => onChangeContent(e)} />
                <FormErrorMessage>Please Enter Something!</FormErrorMessage>
            </FormControl>
            <IconButton aria-label="addButton" bg="cyan.400" onClick={onClickAdd} color="white" _hover={{ bg: "cyan.600" }} icon={<TextIconSpacing />} />
        </Flex>
    );
}

export default AddTodo;