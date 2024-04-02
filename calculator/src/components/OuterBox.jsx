/* eslint-disable react/prop-types */

function OuterBox({children}) {
  return (
    <div
      className="border-2 border-black text-center mt-10 bg-pink-950 text-white w-[30rem] mx-auto rounded-lg pt-5"
    >
      {children}
    </div>
  )
}

export default OuterBox;
