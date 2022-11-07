import React from 'react';

export default function colorBlock(props) {

    function copyTextFun() {
        navigator.clipboard.writeText(`#${props.bg}`)
            .then(() => {return true})
            .catch(err => {
                console.error('Error in copying text: ', err);
            });
        }

    return (
        <div className='block' style={{backgroundColor: `#${props.bg}`}}>
            <span className='block__code'>#{props.bg}</span>
            <button className="btn_save" onClick={copyTextFun}>Copy</button>
        </div>
    )
}