import TodoList from "./components/TodoList";
import MemoPropTypes from "./components/MemoPropTypes";
import UseEffect from "./components/UseEffect";
import CleanUpFunction from "./components/CleanUpFunction";

function App() {
  return (
    <>
      <TodoList />
      <hr style={{margin:"100px 0"}}/>
      <MemoPropTypes />
      <hr style={{margin:"100px 0"}}/>
      <UseEffect />
      <hr style={{margin:"100px 0"}}/>
      <CleanUpFunction />
    </>
  );
}

export default App;
