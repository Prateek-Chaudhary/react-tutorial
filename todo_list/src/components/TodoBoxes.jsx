/* eslint-disable react/prop-types */
import TodoBox from './TodoBox'

function TodoBoxes({data, deleteData}) {

  return (
    <div>
      {
        data.map((items) => (<TodoBox key={items.itemName} itemName={items.itemName} buyDate={items.buyDate} deleteData = {deleteData} />))
      }
    </div>
  )
}

export default TodoBoxes;
