
import {useInput} from './useInput.js'
import {useTabs} from './useTabs.js'

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  },
];


const App = () => {

  const {currentItem, changeItem} = useTabs(0, content)

  // const maxLen = value => value.length <= 10;
  const noAt = value => !value.includes('@', content);
  const name = useInput('Mr.', noAt);

  

  return  (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
      <div className='tab-wrap'>
        {content.map((section, index) => (
          <button onClick={()=>changeItem(index)}>{section.tab}</button>
        ))}
       <div> {currentItem.content}</div>
      </div>
      
    </div>
  );

}

export default App;

