import { useState } from 'react';
import './App.css';
import AddedButtons from './components/AddedButtons';
import DropdownOption from './components/DropdownOption';

function App() {
  const buttonsData = [
    {name: 'Purple',
    color: 'rgb(168 85 247)',
  bg:'rgba(168, 85, 247, .2)'},
    {name: 'Red',
    color: 'rgb(244 63 94)',
  bg:'rgba(244, 63, 94, .2)'},
    {name: 'Orange',
    color: 'rgb(251 146 60)',
  bg:'rgba(251, 146, 60, .2)'},
    {name: 'Yellow',
    color: 'rgb(234 179 8)',
  bg:'rgba(234, 179, 8, .2)'},
    {name: 'Green',
    color: 'rgb(34 197 94)',
  bg:'rgba(34, 197, 94, .2)'},
    {name: 'Slate',
    color: 'rgb(100 116 139)',
  bg:'rgba(100, 116, 139, .2)'},
    {name: 'Ocean',
    color: 'rgb(6 182 212)',
  bg:'rgba(6, 182, 212, .2)'},
    {name: 'Blue',
    color: 'rgb(59 130 246)',
  bg:'rgba(59, 130, 246, .2)'},
    {name: 'Forest',
    color: 'rgb(16 185 129)',
  bg:'rgba(16, 185, 129, .2)'},
  ]
  const [buttons, setButtons] = useState([])
  const [toggle, setToggle] = useState(false)

  const handleAdd = (button) => {
    const newButtonList = [...buttons, button]
    setButtons(newButtonList)
  }

  const handleDelete = (button) => {
    const newButtonList = buttons.filter(e => e.name !== button.name)
    setButtons(newButtonList)
  }

  const handleDeleteAll = () => {
    setButtons([])
  }

  const toggleDropDown = () => {
    setToggle(!toggle)
  }


  
  return (
    <div className="App">
      <div className='max-w-3xl mx-auto'>
        <div className='border-2 border-blue-500 py-1 my-2 rounded'>
          <div className='flex justify-between items-center px-2'>
            <div className='flex flex-wrap gap-2 overflow-hidden'>
              {buttons?.map((button, i) => <div key={i} className='px-2 flex flex-wrap gap-2'>
                <AddedButtons handleDelete={handleDelete} button={button}></AddedButtons>
              </div>)}
            </div>
            <div className='flex items-center text-gray-500 gap-2'>
              {/* Close all button */}
              <div onClick={handleDeleteAll}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              </div>
              <p>|</p>
              {/* Show Dropdown Button */}
              <div onClick={toggleDropDown}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Drop Down Menu */}
          {
            toggle && <DropdownOption buttonsData={buttonsData} handleAdd={handleAdd} ></DropdownOption>
          }
      </div>
    </div>
  );
}

export default App;
