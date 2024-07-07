import { useState } from "react";
import classes from './Counter.module.scss';

classes
const Counter = () => {


  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div >
      <h1 className={classes.counter}>{count}</h1>
      <button className={classes.btn__counter} onClick={handleClick}>click me</button>
    </div>
  )
}

export default Counter;