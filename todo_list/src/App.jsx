/* eslint-disable react/jsx-key */
import './App.css';
import InputBox from './components/InputBox';
import TodoBoxes from './components/TodoBoxes';
import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';

function App() {

  let [data, setData] = useState([]);

  let newItem = (itemName, itemDate) => {
    let newDate = [...data, {
      "itemName" : itemName,
      "buyDate" : itemDate
    }]
    setData(newDate);
  }

  let deleteData = (selectedItemName) => {
    console.log(selectedItemName);
    let newData = data.filter((item) => item.itemName !== selectedItemName);
    setData(newData);
  }

  return (
    <>
      <div
        className='flex flex-col border-2 rounded-lg pb-5 border-black w-fit px-4 py-2 items-center justify-center mx-auto my-24 bg-yellow-200'
      >
        <div
          className='mb-4 text-3xl'
        >ToDo App</div>
        <InputBox addItem = {newItem} />
        {data.length === 0 && <WelcomeMessage />}
        <TodoBoxes data={data} deleteData = {deleteData} />
        
      </div>
    </>
  )
}

export default App
