import React, {memo} from 'react';
import './App.css';
import {useState} from "react"
import {MyInput} from './MyInput';
import {MyButton} from './MyButton';

export const App = memo(() => {
    console.log("rerender app")
    const [isTrue, setIsTrue] = useState(true)
    const [word, setWord] = useState("")
    const [inputValue, setInputValue] = useState("");
    const onKeyDown = (e: any): void => {
        if (e.key === "Enter") {
            setWord(inputValue)
            setInputValue("")
        }
    };
    const onChange = (e: any): void => {
            setInputValue(e.currentTarget.value)
    };

    const onButtonClick = (): void => {
        setIsTrue((prev) => !prev)
    }


    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
            gap: 5
        }}>
            <MyInput value={inputValue}
                     onKeyDown={onKeyDown} onChange={onChange}
                     onDoubleClick={() => console.log(" суперважный даблклик, не удалять")}
                     onMouseOver={() => console.log("мышка на инпуте, важно")}/>
            <MyButton variant={"outlined"} onClick={onButtonClick}>Toggle</MyButton>
            {isTrue ? <div>True</div> : <div>False</div>}
            После нажатия энтер ниже появится слово из инпута
            <h1>{word}</h1>
        </div>
    );
})
