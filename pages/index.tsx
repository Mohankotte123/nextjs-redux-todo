import { Button, CircularProgress,IconButton, Flex, Icon, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../store/store'
import { Update, Get } from '../store/todo/todo-actions'
import { todoState } from '../store/todo/todo-reducer'
import { Heading} from '@chakra-ui/react' ;
import { MdAdd } from "@react-md/icon";
import AddTodo from '../components/addtodo';
import Todo from '../components/todo';
const Home: NextPage = () => {

  const  { 
    todos, 
  }: todoState = useSelector((state: RootState) => state.todos)

  const dispatch = useDispatch<ThunkDispatch<RootState, {}, Action<string>>>();
  type todo = {id: number,todo: string, isCompleted: boolean};  

  useEffect(() => {
    if(todos == null) {
       dispatch(Get())
      
      
    }
  }, [])
  
  const addTodo = (todo:todo[]) => {
    let toBeUpdated: todo[]=[...JSON.parse(JSON.stringify(todos)), todo];
    dispatch(Update(toBeUpdated))
    
  } 

  const onClickCheck = (id: number, value: boolean) => {
   let toBeUpdated = todos.map((todo) => {
      if(todo.id == id) {
        todo.isCompleted = value;
      }
      return todo;
    })
    dispatch(Update(toBeUpdated))
  }
  const onClickDelete = (id: number,) => {
    let toBeUpdated: todo[] = JSON.parse(JSON.stringify(todos))
    toBeUpdated = toBeUpdated.filter(Todo => Todo.id !== id)
    dispatch(Update(toBeUpdated))
  }
  
  return (
    <Flex w = "100%" direction = "column" h = "100vh" justifyContent={"center"} overflowY={"hidden"} alignItems={"center"}>
      <Flex direction = "column" h = {["100%", "100%", "70%", "70%", "70%"]} bg = "#cc2b5e" justifyContent={"center"} alignItems={"center"} w = {["95%", "90%", "60%", "50%", "40%"]}>
        <Flex direction={"column"} bg = "white" padding = "20px" h = "85%" w = "85%">
          <Heading mb ="20px" alignSelf={"center"}>Todo Application</Heading>
          <AddTodo addTodo = {addTodo}/>
          <Flex w = "100%" mt = "20px" overflow = "scroll" pr = "15px" direction = "column">
          {todos?.map((todo, index) => {
              return <Flex key = {index} my = "5px">
                <Todo todo = {todo}  onClickCheck = {onClickCheck} onClickDelete = {onClickDelete} />
              </Flex>
            })}
            </Flex>
         
           
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Home
