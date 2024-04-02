/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";

function TodoBox({
  itemName,
  buyDate,
  deleteData
}) {

  let deleteItem = () => {
    deleteData(itemName);
  }

  return (
    <div
      className='flex mt-4'
    >
      <div>
        <div
          className='w-48 mx-2 pl-2 py-1'
        > {itemName} </div>
      </div>
      <div>
        <div
          className='w-[9.5rem] mx-2 pl-2 py-1'
        >
          {buyDate}
        </div>
      </div>
      <div>
        <button type="submit"
          className='bg-red-700 text-white text-xl px-5 pt-1 pb-2 rounded-md shadow-sm shadow-black mx-2 hover:bg-red-600 active:bg-red-700'
          onClick={deleteItem}
        ><MdDeleteForever
          className="mt-1"
         /></button>
      </div>
    </div>
  )
}

export default TodoBox;
