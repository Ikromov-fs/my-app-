import React, { Component } from 'react';

export default class open extends Component {
  render() {
    return (
      <div className='w-[25%]   text-center bg-blue-200 border-solid border-black border-[1.9px]'>
        <h1 className='text-3xl text-black font-bold py-2 bg-[#fcfaf5]'>open</h1>
        <ul className='items-center  px-5 bg-[#868181] '>
          <li className='flex items-center gap-24 pl-12'>
            <p className='text-xl font-bold my-5'>Tasck</p>
            <div>
              <button className='active:transform active:scale-95 active:bg-transparent active:text-black text-white mx-1 border-2 border-b-gray-600 bg-green-600 px-3 py-1 rounded-md border-none '>edit</button>
              <button className='active:transform active:scale-95 active:bg-transparent active:text-black text-white mx-1 border-2 border-b-gray-600 bg-red-900 px-3 py-1 rounded-md border-none '>delete</button>
            </div>
          </li>
        </ul>
        <div className='bg-[#fcfaf5]'>
          <button className='active:transform active:scale-95 active:bg-transparent active:text-black text-white mx-1 my-5 border-2 border-b-gray-600 bg-green-900 px-3 py-1 rounded-md border-none'>add user</button>
        </div>
      </div>
    )
  }
}
