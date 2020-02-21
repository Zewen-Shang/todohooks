import React from 'react';
import itemInterface from './interface/itemInterface';

interface itemProps{
    item:itemInterface,
    key:number,
    index:number,
    onDelete:Function
}

let Item = (props:itemProps) => {

    let handleButtonOnClick = () => {
        props.onDelete(props.index);
    }
    return (
        <div>
            <div>{props.item.name}</div>
            <div>{props.item.date.getFullYear()}年{props.item.date.getMonth()+1}月{props.item.date.getDate()}日</div>
            <button onClick={handleButtonOnClick}>删除</button>
        </div>
    )
}

export default Item;