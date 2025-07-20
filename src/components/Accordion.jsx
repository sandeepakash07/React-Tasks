import React, { useState } from 'react';
import data from '../assets/data';
import { ChevronDown } from 'lucide-react';

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(cpyMultiple);
  };

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h1 className='text-3xl py-4 font-bold'>Accordion</h1>
      <button
        className='px-4 py-2 bg-blue-600 rounded-md text-white cursor-pointer'
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        {enableMultiSelection ? 'Disable' : 'Enable'} MultiSelection
      </button>
      <div className='accordion py-5 w-3xl flex flex-col justify-center items-center'>
        {data && data.length > 0
          ? data.map((item, index) => (
              <div key={index} className='w-full py-2 cursor-pointer border-b'>
                <div
                  className='title w-full flex justify-between items-center font-bold'
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(item.id)
                      : () => handleSingleSelection(item.id)
                  }
                >
                  <h1 className='text-2xl'>{item.question}</h1>
                  <span>
                    <ChevronDown size={20} />
                  </span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(item.id) !== -1 && (
                      <div className='px-2'>
                        <h1>{item.answer}</h1>
                      </div>
                    )
                  : selected === item.id && (
                      <div className='px-2'>
                        <h1>{item.answer}</h1>
                      </div>
                    )}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Accordion;
