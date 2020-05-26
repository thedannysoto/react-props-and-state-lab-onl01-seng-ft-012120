import React from 'react'

class Pet extends React.Component {


  handleClick = event => {
    event.target.style.display = 'none';
    event.target.previousSibling.className = 'ui primary button';
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    let gender = '';
    if (this.props.pet.gender === 'male') {
      gender = ' ♂';
    } else {
      gender = ' ♀';
    }


    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name} {gender}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
