import React, { Component } from 'react'

export default class LadingPage extends Component {
  render() {
    return (
      <div>
        {header()}
        {signin()}
      </div>
    )
  }
}


const header = () => {
    return (
        <div className="header">
            <div className="title">
                StupidGram
            </div>
        </div>
    );
};

const signin = () => {
    return (
        <div className="side-container">
            <div className="title">
                SignIn
            </div>
            <form action="SignIn">
                {fields.map(({type, name, label}) => input(type, name, label))}
                <button>SignIn</button>
            </form>
        </div>
    );
}

const input = (type:string, name:string, label: string) => {
    return (
        <div className="field">
            {label}
            <input type={type} name={name} id={name} />
        </div>
    );
}

const fields = [
    {type: 'text', name: 'email', label: 'Email'},
    {type: 'text', name: 'pasword', label: 'Password'},
    {type: 'text', name: 'nick', label: 'Nick'},
]

function SignIn()
{

}
