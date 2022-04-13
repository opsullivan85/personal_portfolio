import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { Component, useReducer } from "react";

class TodoItems extends Component {
    createTasks(item) {
      return <li key={item.key}>{item.text}</li>
    }

    render() {
      var todoEntries = this.props.entries;
      var listItems = todoEntries.map(this.createTasks);

      return (
        <ul className="theList" class="text-3xl font-bold m-4 bg-gray-100 rounded-2xl">
            {listItems}
        </ul>
      );
    }
  };

class TodoList extends Component {
render() {
    return (
      <div className="todoListMain" class="max-w-sm rounded overflow-hidden shadow-xl bg-gray-50">
        <div className="header">
          <form onSubmit={this.addItem} class="flex space-x-4 m-4">
            <input class="bg-gray-100 rounded-2xl hover:bg-gray-200" ref={(a) => this._inputElement = a} 
                    placeholder=" enter task">
            </input>
            <button type="submit" class="inline-block bg-gray-100 rounded-2xl px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-400">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}/>
      </div>
    );
  }
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
          var newItem = {
            text: this._inputElement.value,
            key: Date.now()
          };

          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) 
            };
          });

          this._inputElement.value = "";
        }

        console.log(this.state.items);

        e.preventDefault();
      }
}

export default TodoList;

// function reducer(todos, packet) {
//     console.log(packet);
//     switch (packet[0]) {
//         case 'add':
//             return todos.push(packet[1]);
//         case 'remove':
//             return todos;
//         default:
//             console.log(packet);
//     }
// }

// export default function TodoList() {
//     const [todos, dispatch] = useReducer(reducer);
//     var inputElement = 0;

//     return (
//         <div>
//             <input ref={(a) => inputElement = a} 
//                 placeholder="enter task">
//             </input>            
//             <button onClick={() => dispatch({type: ['add', inputElement]})}>
//                 add
//             </button>

//             <ul>
//                 {todos}
//             </ul>
//         </div>
//     );
// }