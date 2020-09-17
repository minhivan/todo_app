import React from "react";
import {List, ListItem, ListItemText, Button} from '@material-ui/core';
import db from './firebase'
function Todo(props) {
    const delTodo = (event) => {
        event.preventDefault();
        db.collection('todos').doc(props.todo.id).delete();
    }
    return (
        <List>
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary={props.todo.date} />
                <Button variant="contained" color="secondary" onClick={ delTodo }>
                    Delete
                </Button>
            </ListItem>
        </List>
    )
}

export default Todo