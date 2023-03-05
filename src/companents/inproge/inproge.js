import React, { Component } from 'react';

export default class inproge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    form = (evt) => {
        evt.preventDefault()
        let inputValue = evt.target[0].value;
        this.props.addUser(inputValue)
        evt.target.reset()
    }

    
    toggleModal = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    delete = (ev) => {
        let p = ev.target.id
        const { users } = this.props
        users.splice(p, 1)
        this.setState(this.state)
    }
    add = () => {
        const { users } = this.props
        if (!this.state.isOpen) {
            this.setState({ isOpen: !this.state.isOpen });
        }
        this.setState(users.inputValue)
    }
    render() {
        const { users } = this.props
        return (
            <div className='w-[25%]   text-center bg-blue-200 border-solid border-black border-[1.9px]'>
                <h1 className='text-3xl text-black font-bold py-2 bg-[#fcfaf5]'>Inproge</h1>
                <ul className='items-center  px-5 bg-[#868181] '>
                    <ul className='items-center  pl-12'>
                        {
                            users.map(item =>
                                <li className='flex items-center gap-16 mb-2' key={item.id} >
                                    <p> {item.inputValue}</p>
                                    <div>
                                        <button id={item.id} onClick={this.add} className='active:transform active:scale-95 active:bg-transparent active:text-black text-white mx-1 border-2 border-b-gray-600 bg-green-600 px-3 py-1 rounded-md border-none '>edit</button>
                                        <button id={item.id} onClick={this.delete} className='active:transform active:scale-95 active:bg-transparent active:text-black text-white mx-1 border-2 border-b-gray-600 bg-red-900 px-3 py-1 rounded-md border-none '>delete</button>
                                    </div>
                                </li>)
                        }
                    </ul>
                </ul>
                <div className='bg-[#fcfaf5]'>
                    <button onClick={this.toggleModal} className='active:transform active:scale-95 active:bg-transparent active:text-black text-white mx-1 my-5 border-2 border-b-gray-600 bg-green-900 px-3 py-1 rounded-md border-none'>add user</button>
                    {this.state.isOpen &&
                        <div className='relative left-[50vh] top-[15vh]'>
                            <div className='absolute w-[500px] h-[200px] bg-slate-600 py-9 px-1 rounded-xl'>
                                <form id='form' className='form' onSubmit={this.form} >
                                    <input className='text-lg rounded-xl px-5 border-2 py-5 w-[100%] border-solid border-[#333]' type="text" placeholder='add user' required />
                                </form>
                                <div>
                                    <select className='w-1/2 flex justify-center mx-auto py-2 rounded-md'>
                                        <option value="inproge">inproge</option>
                                        <option value="open">open</option>
                                        <option value="peding">peding</option>
                                        <option value="penproge">penproge</option>
                                        <option value="penproge">penproge</option>
                                    </select>
                                </div>
                                <div className='flex'>
                                    <button form='form' className='mx-auto mt-4  block active:transform active:scale-95 active:bg-transparent active:text-black text-white border-2 border-b-gray-600 bg-red-900 px-8 py-2 rounded-md border-none'>add</button>
                                    <button onClick={this.toggleModal} className='mx-auto mt-4  block active:transform active:scale-95 active:bg-transparent active:text-black text-white border-2 border-b-gray-600 bg-green-900 px-8 py-2 rounded-md border-none'>exit</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}
