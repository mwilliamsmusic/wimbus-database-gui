import React, {useState} from "react";

const EditItem = (props) => {
    const [toggle, setToggle] = useState(false);
    let display;

    if (!toggle) {
        display = <div className='m-5'>
            <div className='container  border border-primary p-3 text-center h5'>
                <div className='row'>
                    <div className='col'>
                        {props.name}
                    </div>

                    <div className='col'>
                        {props.loc}
                    </div>

                    <div className='col'>
                        {props.char}
                    </div>

                    <div className='col'>
                        {props.desc}
                    </div>
                    <div className='col'>
                        <button onClick={() => setToggle(true)} className="btn btn-primary ">Edit</button>
                    </div>
                </div>
            </div>
        </div>


    } else {
        display = <div className='m-5'>
            <div className='container  border border-primary p-3'>
                <form>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder={props.name}/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder={props.loc}/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder={props.desc}/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder={props.char}/>
                        </div>
                        <div className="btn-toolbar" role="toolbar" aria-label="Edit navbar">

                            <div className="btn-group mr-2" role="group" aria-label="Close group">
                                <button type="button" className="btn btn- btn-primary"
                                        onClick={() => setToggle(true)}>Edit</button>
                            </div>

                            <div className="btn-group mr-2" role="group" aria-label="Delete group">
                                <button type="button" className="btn btn- btn-danger"
                                        onClick={() => setToggle(true)} >Delete</button>
                            </div>
                        </div>


                    </div>
                </form>
            </div>
        </div>
    }

    return (
        <div>
            {display}
        </div>
    )
};

export default EditItem;
