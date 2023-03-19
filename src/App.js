const App = () => {
  return (
    <div>
      <h1>I'm the root component</h1>
      <Person />
      <Person />
      <Person />
    </div>
  );
}
const Person = () => {
  return <p>I'm a functional component</p>;
};
export default App;