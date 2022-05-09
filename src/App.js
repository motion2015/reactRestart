import {useInput} from './useInput.js'

const App = () => {
  // const maxLen = value => value.length <= 10;
  const noAt = value => !value.includes('@');
  const name = useInput('Mr.', noAt);
  return  (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );

}

export default App;

