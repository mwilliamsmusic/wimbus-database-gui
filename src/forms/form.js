import React from "react";
import {useInput} from "../hooks/input-hook";


const ItemForm = (props) => {
    const {value: name, bind: bindName, reset: resetName} = useInput('');
    const {value: location, bind: bindLocation, reset: resetLocation} = useInput('');
    const {value: desc, bind: bindDesc, reset: resetDesc} = useInput('');
    const {value: char, bind: bindChar, reset: resetChar} = useInput('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name} ${location} ${desc} ${char}`);
        resetName();
        resetLocation();
        resetDesc();
        resetChar();
    };

    return (
        <div className="container">

            <form  onSubmit={handleSubmit}>
                <div className='form-horizontal'>
                <div className='form-group'>
                    <label className='col-sm-8 '>{props.name}:   </label>
                    <input type="text" className='form-control' {...bindName} />

                </div>

                <div className='form-group'>
                    <label className='col-sm-2 control-label'>{props.location}: </label>
                    <input type="text" className='form-control' {...bindLocation} />
                </div>

                <div className='form-group'>
                    <label className='col-sm-2 control-label'>{props.char}: </label>
                    <input type="text" className='form-control' {...bindChar} />
                </div>

                <div className='form-group'>
                    <label className='col-sm-2 control-label'>{props.desc}: </label>
                    <input type="text" className='form-control' {...bindDesc} />
                </div>

                <button type="submit" value="Submit" className="btn btn-success ">Submit</button>
                </div>
            </form>
        </div>
    );
};
export default ItemForm;
