/* eslint-disable react/prop-types */

function AnswerBox({answer}) {
  return (
    <div
      className="h-14 text-3xl flex justify-end items-center mb-2 text-orange-500 pr-4"
    >
      {answer}
    </div>
  )
}

export default AnswerBox;
