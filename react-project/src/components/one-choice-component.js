import React from 'react'
import Name from './name-component'

const OneChoiceComponent = () => {

  let [weaponChoice, setWeaponChoice] = React.useState([])

  const chooseSword = () => {
    setWeaponChoice("sword")
  }
  const chooseShield = () => {
    setWeaponChoice("shield")
  }
  const chooseStaff = () => {
    setWeaponChoice("staff")
  }

  return <div>
              <h2>Player 1, Pick Your Weapon</h2>
              <br />Sword:<br />
              <img src="https://image.flaticon.com/icons/svg/744/744729.svg" height="50px" /><br />
              <button onClick={chooseSword}>Use Sword</button>
              <br />
              <br />Shield:<br />
              <img src="https://image.flaticon.com/icons/svg/1065/1065535.svg" height="50px"/><br />
              <button onClick={chooseShield}>Use Shield</button>
              <br />
              <br />Staff:<br />
              <img src="https://image.flaticon.com/icons/svg/1067/1067730.svg" height="50px"/><br />
              <button onClick={chooseStaff}>Use Staff</button>
              <br />
              <br />
              <h4>Player 1 picked {weaponChoice}</h4>
            </div>
}

export default OneChoiceComponent



