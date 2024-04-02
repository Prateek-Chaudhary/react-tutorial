/* eslint-disable react/prop-types */

function InputBox({value, onChange}) {
  
  return (
    <input 
      type="text"
      value={value}
      onChange={onChange}
      readOnly
      className='text-2xl w-full text-right pr-4 py-1 border-none bg-transparent text-white'
    />
  )
}

export default InputBox;
