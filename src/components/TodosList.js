import TodoItem from "./TodoItem";
import React from "react"

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
      <TodoItem
      key={todo.id}
      todo={todo}
      handleChangeProps={this.props.handleChangeProps}
    />
        ))}
      </ul>
    )
  }
}

export default TodosList