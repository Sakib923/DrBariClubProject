import {useState, useEffect} from "react";
// eslint-disable-next-line react-refresh/only-export-components
export default function New() {
    const [count] = useState(0);
    let [count2, setCount2] = useState(0);
    useEffect(() => {
        let message = (count2%2) === 0 ? "I've rendered" : "rendered again";
        console.log(message);
        // setTimeout(() => {
        //     setCount((count) => count + 1);
        // }, 1000);
    },[count2]);
    const incrementCount = () => {
        let newCount = count2 + 1;
        count2 = count2 ++;
        setCount2(newCount);
    }
    
    return (
        <div>
            <h1> I{"'"}ve rendered {count} times!</h1>;
            <h1> I{"'"}ve rendered {count2} times!</h1>;
            <button onClick={incrementCount}>Increment</button>
            Hello
        </div>
    )
    
}
