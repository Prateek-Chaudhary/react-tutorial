/* eslint-disable react/prop-types */
import { FaDeleteLeft } from "react-icons/fa6";

function ComputeButtons({buttonList, clickedBtn}) {

  return (
    <div
      className="grid grid-cols-4 mt-10 bg-rose-950"
    >
      {
        buttonList.map((btn) => {
          if(btn === 'X') {
            return <button 
            key={btn}
            className="text-3xl py-5 h-20 hover:bg-pink-950 hover:text-4xl hover:text-yellow-500"
            onClick={() => clickedBtn(btn)}
          >
            <FaDeleteLeft className="ml-10"
            />
          </button>
          }
          return <button 
            key={btn}
            className="text-3xl py-5 h-20 hover:bg-pink-950 hover:text-4xl hover:text-yellow-500"
            onClick={() => clickedBtn(btn)}
          >
            {btn}
          </button>
        })
      }
    </div>
  )
}

export default ComputeButtons
