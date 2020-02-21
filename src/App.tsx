import React, { useState} from 'react';
import Search from "./Search";
import ItemList from './ItemList';
import itemInterface from './interface/itemInterface';

const App = () => {
    let list :itemInterface[];
    let setList:Function;
    [list,setList] = useState([]);

    let handleSubmit = (item:itemInterface):void => {
        let tmpList:itemInterface[] = [...list];
        tmpList.push(item);
        setList(tmpList);
        console.log(list);
    }; 

    let handleDelete = (index:number):void => {
        let tmpList:itemInterface[] = [];
        for(let i=0;i<index;i++){
            tmpList.push(list[i]);
        }
        for(let i =index+1;i<list.length;i++){
            tmpList.push(list[i]);
        }
        setList(tmpList);
    }

    return (
        <div>
            <Search onSubmit={handleSubmit}/>
            <ItemList onDelete={handleDelete} list={list} />
        </div>
    );
}

export default App;
