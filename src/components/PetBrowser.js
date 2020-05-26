import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
      const onAdoptPet = this.props.onAdoptPet;
      const petsList = this.props.pets.map(function(pet, index) {
        return <Pet onAdoptPet={onAdoptPet} key={index} pet={pet}/>;
      }); 
    


    return( 
    <div className="ui cards">
      { petsList }
    </div>
    )
  }
}

export default PetBrowser
