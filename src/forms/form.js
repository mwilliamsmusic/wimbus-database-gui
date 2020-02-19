import React from "react";
import {useInput} from "../hooks/input-hook";


const Form = (props) => {
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
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" {...bindName}/>
                    </div>
                </div>


                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Character:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" {...bindChar}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Location:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" {...bindLocation}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Description:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" {...bindDesc}/>
                    </div>
                </div>

                <button type="submit" value="Submit" className="btn btn-success ">Submit</button>
            </form>
        </div>
    );
};
export default Form;
