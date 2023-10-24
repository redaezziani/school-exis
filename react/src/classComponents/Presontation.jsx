// make a class component called Presentation
import { Component } from 'react'

class Presentation extends Component {

    constructor(props) {
        super(props);
        this.state = {nom: "ezziani", prenom: "reda"};
        }

  render() {
    return (
        <div
        className=''
        >
            <p
            className='text-xl p-2 text-slate-700  '
            >
                je mappelle {this.state.nom} {this.state.prenom}
            </p>
        </div>
    );
  }
}
export default Presentation