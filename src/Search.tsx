import React, { useState } from 'react';

interface searchProps {
    onSubmit:Function,
}

let Search = (props:searchProps) => {

    let name:string,
        setName:Function;
    [name,setName] = useState("");

    let handleInputOnChange = (e:any):void => {
        setName(e.target.value);
    }
    
    let handleButtonOnClick = ():void => {
        props.onSubmit({name:name,date:new Date()})
        setName("");
    }
    return (
        <div>
            <input value={name} onChange={handleInputOnChange} />
            <button onClick={handleButtonOnClick}>添加</button>
        </div>
    )
}

export default Search;