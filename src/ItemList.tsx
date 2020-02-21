import React from 'react';
import itemInterface from './interface/itemInterface';
import Item from './Item';

interface itemListProps{
    list: itemInterface[],
    onDelete:Function,
}

let ItemList = (props:itemListProps) => {
    return (
        <div>
            {
                props.list.map((item:itemInterface,key:number) => {
                    return <Item onDelete={props.onDelete} item={item} key={key} index={key}/>
                })
            }
        </div>
    )
}

export default ItemList;