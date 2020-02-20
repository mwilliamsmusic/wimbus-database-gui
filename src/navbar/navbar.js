import React, {useState,useReducer} from 'react';
import {navbarReducer,initialState} from "../reducers/navbarReducer";
import Edit from "../edit/edit";
import Form from "../forms/form";


const Navbar = () => {
    const [state, dispatch] = useReducer(navbarReducer,initialState);
            return(<div className='container'>

                <nav className="navbar navbar-dark bg-primary">
                    <div className='navbar-brand'>Wimbus Studios</div>

                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar navbar">

                        <div className="btn-group mr-2" role="group" aria-label="Edit group">
                            <button type="button" className="btn btn- btn-outline-light"
                                    onClick={()=> dispatch({type:'edit'})}>Edit</button>
                        </div>

                        <div className="btn-group mr-2" role="group" aria-label="Upload group">
                            <button type="button" className="btn btn- btn-outline-light"
                                    onClick={()=> dispatch({type: 'upload'})}>Upload</button>
                        </div>
                    </div>
                </nav>
                    {(state.toggle.toString()==='edit'? <Edit />:<Form/>)}
            </div>
        );
};

export default Navbar;
