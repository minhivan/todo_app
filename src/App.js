import React, {useEffect, useState} from 'react';
import Todo from './Todo'
import {Button,FormControl,Input,InputLabel} from '@material-ui/core';
import './App.css';
import db from './firebase';
import * as firebase from "firebase";

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    useEffect(() => {
        db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
            // console.log(snapshot.docs.map(doc => doc.data().todo));
            setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo, date: doc.data().timestamp.toDate().toString() })));
        });
    }, [])
    const addTodo = (event) =>  {
        // action when hit button
        event.preventDefault(); // Stop refresh page
        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setTimeout(() => {
            console.log("Loadddd")
        }, 3000);
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
                {todos.map((todo) => (
                    <Todo todo={todo} key={todo.id}/>
                ))}
            </ul>
        </div>
    );
}
export default App;
