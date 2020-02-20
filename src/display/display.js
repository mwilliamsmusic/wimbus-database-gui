import React, {useReducer} from "react";
import {initialState, navbarReducer} from "../reducers/navbarReducer";
import Edit from "../edit/edit";
import Form from "../forms/form";
import Navbar from "../navbar/navbar";

const Display = () => {
    const [state, dispatch] = useReducer(navbarReducer, initialState);
    let displayPage;

        if (state.toggle.toString() === 'upload') {
          displayPage = <Edit/>
        } else  {
            displayPage = <Form/>
    }

    return(
        <div>

        {displayPage}
        </div>
    )
};
export default Display;
