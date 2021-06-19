import React from "react";

const ChildrenProps = (props) => {
    return (
        <div>
            <h5> Hello {props.name}  </h5>
            {props.children}
        </div>
    );
}
export default ChildrenProps;