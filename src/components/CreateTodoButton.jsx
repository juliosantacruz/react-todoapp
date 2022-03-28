import React from 'react';
import '../styles/CreateTodoButton.css'

function CreateTodoButton(){

    const onClickCreateTodo = () => {
        console.log('crear nuevo todo')
    }
    return(
        <button className='createTodoButton'
        onClick={onClickCreateTodo}>
            <i class='bx bx-plus' ></i>
        </button>
    );
}

export { CreateTodoButton };