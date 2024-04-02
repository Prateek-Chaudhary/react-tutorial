/* eslint-disable react/prop-types */
import { MdAddShoppingCart } from "react-icons/md";
import { useState } from "react";

function InputBox({ addItem }) {

  let [itemName, setItemName] = useState("");
  let [itemDate, setItemDate] = useState("");

  let handleItemName = (e) => setItemName(e.target.value);
  let handleItemDate = (e) => setItemDate(e.target.value);

  let handleButton = () => {
    addItem(itemName, itemDate);
    setItemName("");
    setItemDate("");
  }

  return (
    <div
      className='flex'
    >
      <div>
        <input type="text"
          className=' border-2 border-black rounded mx-2 pl-2 py-1'
          onChange={handleItemName}
          value={itemName}
          placeholder='Enter ToDo here'
        />
      </div>
      <div>
        <input type="date" name="date" id="date"
          className='border-2 border-black p-1 rounded mx-2'
          onChange={handleItemDate}
          value={itemDate}
        />
      </div>
      <div>
        <button type="submit"
          className='bg-blue-700 text-white text-xl px-7 pt-1 pb-2 rounded-md shadow-sm shadow-black mx-2 hover:bg-blue-600 active:bg-blue-700'
          onClick={handleButton}
        ><MdAddShoppingCart 
            className="mt-1"
        /></button>
      </div>
    </div>
  )
}

export default InputBox;