import {useInput} from './useInput.js'

const App = () => {
  // const maxLen = value => value.length <= 10;
  const maxLen = value => !value.includes('@');
  const name = useInput('Mr.', maxLen);
  return  (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );

}

export default App;

