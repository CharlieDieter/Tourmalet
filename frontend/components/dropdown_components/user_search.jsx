import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { searchUsers } from "../../actions/user_actions";

class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.updateValue = this.updateValue.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateValue(e) {
    this.setState({ name: e.currentTarget.value }, () => {
       ;
      this.props.searchUsers(this.state.name);
    });
  }

  handleClick(userId) {
    this.props.history.push(`/users/${userId}`);
  }

  handleSubmit() {
    const selected = Object.values(this.props.searchReturn).filter(
      user => user.username === this.state.name
    );
    if (selected[0]) {
      this.props.history.push(`/users/${selected[0].id}`);
    } else {
      this.props.history.push(`/users/search`);
    }
  }

  render() {
    const returnVal =
      this.props.searchReturn &&
      Object.values(this.props.searchReturn).map(user => (
        <div key={user.id} onClick={() => this.handleClick(user.id)}>
          <img src={user.avatar_url} />
          <div>{user.username}</div>
        </div>
      ));
    return (
      <div className="outer-search-div">
        <form onSubmit={this.handleSubmit}>
          <div className="inner-search-div">
            <input
              type="text"
              placeholder="Find your friends"
              value={this.state.name}
              onChange={this.updateValue}
              className="user-search-input"
            />
            <button>
              <i className="material-icons">search</i>
            </button>
            <ul>{returnVal}</ul>
          </div>
        </form>
      </div>
    );
  }
}

const msp = state => ({
  searchReturn: state.search
});

const mdp = dispatch => ({
  searchUsers: params => dispatch(searchUsers(params))
});

export default withRouter(connect(msp, mdp)(UserSearch));
