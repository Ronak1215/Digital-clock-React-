import React, { useEffect, useState } from 'react'

const Clock = () => {
  // const [time, setTime] = useState(new Date())

  // useEffect(()=>{
  //   const currentTime = setInterval(()=>{
  //     setTime(new Date())
  //     // console.log(time)
  //   },1000)

  //   // return ()=> clearInterval(currentTime)
  // },[])

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  },[]);

  return (
    <div>
      <h1>Current Time {count}</h1>
      {/* <h2>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</h2> */}
    </div>
  )
}

export default Clock
