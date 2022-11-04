import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "./contexts/theme.context";
import { TodoItemEdit } from "./shared/todo.edit";
import { TodoItemView } from "./shared/todo.view";

import './todo.css';

export function Todo() {

    // define state to store all the todo items
    const [todoItems, setTodoItems] = useState([]);

    const [reload, setReload] = useState(false);

    const theme = useContext(ThemeContext);

    // load the todo items
    /**
     * 3 main works of useEffect
     * 1. on load -once -  init
     * 2. on update - multiple times
     * 3. on destroy - once
     */
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(items => {
            // set the todo items
            if (items && items.length > 0) {
                items.map(obj => {
                    // adding own propert to the object
                    obj['editMode'] = false;
                    return obj;
                });

                setTodoItems(items);
            }

        }).catch(err => {

        })
    }, [reload]);

    function changeItem(id, callback) {
        // copy the array
        const allItems = [...todoItems];
        const item = allItems.find(m => m.id == id);
        if (item) {
            // let developer do its work
            callback(item);
            // update the state
            setTodoItems(allItems);
        }
    }

    function markAsComplete(id) {
        changeItem(id, item => {
            item.completed = !item.completed;
        });
    }

    function handleOnEdit(id) {
        changeItem(id, item => {
            item.editMode = true;
        });
    }

    function handleOnCancel(id) {
        changeItem(id, item => {
            item.editMode = false;
        });
    }

    function handleUpdate(id, updatedTitle) {
        changeItem(id, item => {
            // update title
            item.title = updatedTitle;
            // dissable the edit mode
            item.editMode = false;
        });
    }

    function handleReload() {
        setReload(true);
    }

    return (
        <div>
            <h1>Todo App</h1>
            <div style={{
                background: theme.background,
                color: theme.foreground
            }}>
                <button onClick={handleReload}>Reload</button>
                <ul>

                    {
                        todoItems.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.editMode && <TodoItemEdit item={item} onCancel={handleOnCancel} onUpdate={handleUpdate} />}

                                    {!item.editMode && <TodoItemView item={item} onComplete={markAsComplete} onEdit={handleOnEdit} />}
                                </li>
                            )
                        })
                    }


                </ul>
            </div>
        </div>
    )
}

function fn() {

    // initialize
    let x = 10;

    // logic
    // update
    x = 20;

    // return
    return 10;

}

// init
// update
// end/destroy
fn();
