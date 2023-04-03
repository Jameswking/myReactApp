import Header from './Header'
function App() {

  let count = Nan;

  return (
    <div className="App">
      <Header />
      <TodoList todos={todos} handleDelete={deleteTodo} />

      <p>Count: {count ? { count } : null}</p>
      <p>Count: { count && { count }}</p>
      {console.log(typeof count)}
    </div>
  )
}
export default App;
