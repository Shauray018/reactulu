// useEffect useMemo useState #learning_react



import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [selectedid, setSelectedid] = useState(1)

  return <div>
    <button onClick={() => {setSelectedid(1)}}>1</button>
    <button onClick={() => {setSelectedid(2)}}>2</button>
    <button onClick={() => {setSelectedid(3)}}>3</button>
    <button onClick={() => {setSelectedid(4)}}>4</button>
    <div> <Todo id = {selectedid} /> </div>
  </div>
}

function Todo({id}) {

  const [todo,setTodo] = useState({})




  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(function(response) {
        setTodo(response.data.todo)
      })
  }, [id])
  return <div>
    {id}
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;

// function Thisthing() { 
//   const [count,setCount]  = useState(0);
//   const [inputValue, setInputValue] = useState(0); 

//   function handleChange(event) { 
//     setInputValue(Number(event.target.value));
//   }


//   function counter() { 
//      setCount(count+1);
//   }

//   return  ( 
//     <div> 
//       <input id="getit" placeholder="write here" onChange={handleChange}></input>
//       <p>sum is {inputValue+count}</p>
//       <button onClick={counter}>click</button>
//       <p>count: {count}</p>

//     </div>
//   )

// }

// export default Thisthing; 
