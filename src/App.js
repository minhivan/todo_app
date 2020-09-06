import React, {useState} from 'react';
import Todo from './Todo'
import {Button,FormControl,Input,InputLabel} from '@material-ui/core';
import './App.css';

function App() {
    const [todos, setTodos] = useState(['State 1', 'State 2']);
    const [input, setInput] = useState('');
    console.log(input);

    const addTodo = (event) =>  {
        // action when hit button
        event.preventDefault(); // Stop refresh page
        console.log("Working !!");
        setTodos([...todos, input])
        setInput('')
    }
    return (
        <div className="App">
            <h1>Hello bro !!</h1>
            <form>
                <FormControl>
                    <InputLabel htmlFor="my-input">Write a todo list here</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" value={input} onChange={event => setInput(event.target.value)} />
                </FormControl>
                <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}>
                    Add todo
                </Button>
            </form>
            <ul>
                {todos.map(todo => (
                    <Todo text={todo}/>
                ))}
            </ul>
        </div>
    );
}
export default App;
