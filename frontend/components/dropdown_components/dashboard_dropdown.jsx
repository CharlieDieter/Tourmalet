import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export default class DashboardDropdown extends React.Component {
  constructor(props){
    super(props)
    this.state = {open: false}
    this.mouseEventHandler = this.mouseEventHandler.bind(this)
  }

  mouseEventHandler(e) {
    this.setState({open: !this.state.open })
  }

  render(){
    const items = (this.state.open === true) ?
    <ul>
    <li><Link to='/dashboard'>Activity Feed</Link></li>
    <li><Link to='/'>My Routes</Link></li>
    </ul>
    : null

    return(
      <div
        className="dropdown-div  selected-drop"
        onMouseEnter={this.mouseEventHandler}
        onMouseLeave={this.mouseEventHandler}
      > <div><a>Dashboard</a><i className="material-icons">keyboard_arrow_down</i></div>
      {items}
      </div>
    )
  }
}
