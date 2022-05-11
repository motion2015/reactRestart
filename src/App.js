
import { useEffect, useState } from 'react';
import {useInput} from './useInput.js'
import {useTabs} from './useTabs.js'
import {useTitle} from './useTitle.js'
import {useClick} from './useClick.js'
import {useHover} from './useHover.js'
import {useConfirm} from './useConfirm.js'
import {usePreventLeave} from './usePreventLeave.js'
import { useBeforeLeave } from './useBeforeLeave.js';
import { useFadeIn } from './useFadeIn.js';
import { useScroll } from './useScroll.js';
/* import { useNetwork } from './useNetwork.js'; */
import { useFullscreen } from './useFullscreen.js';

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

  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  
  const {currentItem, changeItem} = useTabs(0, content)

  // const maxLen = value => value.length <= 10;
  const noAt = value => !value.includes('@', content);
  const name = useInput('Mr.', noAt);

  const sayHello = () => console.log('hello');
  useEffect(sayHello, [number])

  const titleUpdater = useTitle('Loading...')
  setTimeout(()=> titleUpdater('Home'), 5000)

  /* 
  const potato = useRef();
  setTimeout(()=> potato.current.focus(), 5000); */
  const sayHello2 = () => console.log('say Hello');
  const title = useClick(sayHello2);
  const title2 = useHover(sayHello2);
  const deleteWorld = () => console.log('Deleteing the world..');
  const abort = () => console.log('Aborted');
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort)
  const {enablePrevent, disablePrevent} = usePreventLeave()
  const begForLife = () => console.log("pls dont leave");
  useBeforeLeave(begForLife, begForLife )
  // const el = useFadeIn();
  const fadInH3 = useFadeIn(2, 2);
  const fadInp = useFadeIn(5, 4);
  /*   
  오류나서 주석처리함
  Expected an assignment or function call and instead saw an expression 
  
  const handleNetWorkChange = onLine => {
    console.log(onLine? "We just went online" : 'We are offline');
  };
  const onLine = useNetwork(handleNetWorkChange);
  */

  const {y} = useScroll();

  const onFullS = isFull => {
    console.log(isFull ? "We are full" : "We are small");
  }
  const {element, triggerFull, exitFull} = useFullscreen(onFullS);
  
  return  (
    <div className="App" style={{height: "1000vh"}}>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
      <div className='tab-wrap'>
        {content.map((section, index) => (
          <button onClick={()=>changeItem(index)}>{section.tab}</button>
        ))}
       <div> {currentItem.content}</div>
      </div>
      <button onClick={()=> setNumber(number + 1)}>{number}</button>
      <button onClick={()=> setAnumber(aNumber + 1)}>{aNumber}</button>  

      {/* 
      userClick으로 대체가능
      <input ref={potato} placeholder="la" />     
      */}
      <h1 ref={title}>Hi</h1>
      <h2 ref={title2}>Hello</h2>
      <button onClick={confirmDelete}>Delete the world</button>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
      {/* <h3 ref={el} style={{opacity: 0}}>Hello</h3> */}
      <h3 {...fadInH3}>Hello</h3>
      <p {...fadInp}>lorem issum ipsum lalalalalal</p>
     {/*  <h1>{onLine ? "Online" : "Offline"}</h1> */}
     <h1 style={{postion: 'fixed', color: y> 100 ? "red": 'green'}}>Hi{y}</h1>
     <div>
     <img ref={element} onClick={triggerFull} src="https://img.sbs.co.kr/newsnet/etv/upload/2020/01/17/30000641395_1280.jpg" />
     <button onClick={exitFull}>Exit fullscreen</button>
     </div>
     <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );

}

export default App;

