import React from "react"

const TodoItem = props => (
  <li>
    {props.text}
    <button onClick={props.deleteMethod}>刪除</button>
  </li>
)

// 匯出TodoItem模組
export default TodoItem
