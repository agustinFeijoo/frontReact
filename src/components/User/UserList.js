import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../services/index";

import "../../assets/css/Style.css";
import {
  Card,
  Table,
  InputGroup,
  FormControl,
  Button,
  Alert,
} from "react-bootstrap";
/*
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faStepBackward,
  faFastBackward,
  faStepForward,
  faFastForward,
} from "@fortawesome/free-solid-svg-icons";
*/
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentPage: 1,
      usersPerPage: 5,
    };
  }

  componentDidMount() {
    //this.findAllRandomUsers();
    this.props.fetchUsers();
  }

  /*findAllRandomUsers() {
        fetch("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
            .then(response => response.json())
            .then((data) => {
                this.setState({users: data});
            });
    };*/

  /*findAllRandomUsers() {
        axios.get("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
            .then(response => response.data)
            .then((data) => {
                this.setState({users: data});
            });
    };*/

  changePage = (event) => {
    this.setState({
      [event.target.name]: parseInt(event.target.value),
    });
  };

  firstPage = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: 1,
      });
    }
  };

  prevPage = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
    }
  };

  lastPage = () => {
    let usersLength = this.props.userData.users.length;
    if (
      this.state.currentPage < Math.ceil(usersLength / this.state.usersPerPage)
    ) {
      this.setState({
        currentPage: Math.ceil(usersLength / this.state.usersPerPage),
      });
    }
  };

  nextPage = () => {
    if (
      this.state.currentPage <
      Math.ceil(this.props.userData.users.length / this.state.usersPerPage)
    ) {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
    }
  };

  render() {
    const { currentPage, usersPerPage } = this.state;
    const lastIndex = currentPage * usersPerPage;
    const firstIndex = lastIndex - usersPerPage;

    const userData = this.props.userData;
    const users = userData.users;
    const currentUsers = users && users.slice(firstIndex, lastIndex);
    const totalPages = users.length / usersPerPage;
    // /* <FontAwesomeIcon icon={faUsers} />*/
    //<FontAwesomeIcon icon={faFastBackward} />
    //<FontAwesomeIcon icon={faStepBackward} />
    //<FontAwesomeIcon icon={faStepForward} />
    //<FontAwesomeIcon icon={faFastForward} /> Last
    return (
      <div>
        {userData.error ? (
          <Alert variant="danger">{userData.error}</Alert>
        ) : (
          <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>
              User List      
            </Card.Header>
            <Card.Body>
              <Table bordered hover striped variant="dark">
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Address</td>
                    <td>Created</td>
                    <td>Balance</td>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                    <tr align="center">
                      <td colSpan="6">No Users Available</td>
                    </tr>
                  ) : (
                    currentUsers.map((user, index) => (
                      <tr key={index}>
                        <td>
                          {user.first} {user.last}
                        </td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>{user.created}</td>
                        <td>{user.balance}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </Card.Body>
            {users.length > 0 ? (
              <Card.Footer>
                <div style={{ float: "left" }}>
                  Showing Page {currentPage} of {totalPages}
                </div>
                <div style={{ float: "right" }}>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <Button
                        type="button"
                        variant="outline-info"
                        disabled={currentPage === 1 ? true : false}
                        onClick={this.firstPage}
                      >
                         First
                      </Button>
                      <Button
                        type="button"
                        variant="outline-info"
                        disabled={currentPage === 1 ? true : false}
                        onClick={this.prevPage}
                      >
                         Prev
                      </Button>
                    </InputGroup.Prepend>
                    <FormControl
                      className={"page-num bg-dark"}
                      name="currentPage"
                      value={currentPage}
                      onChange={this.changePage}
                    />
                    <InputGroup.Append>
                      <Button
                        type="button"
                        variant="outline-info"
                        disabled={currentPage === totalPages ? true : false}
                        onClick={this.nextPage}
                      >
                         Next
                      </Button>
                      <Button
                        type="button"
                        variant="outline-info"
                        disabled={currentPage === totalPages ? true : false}
                        onClick={this.lastPage}
                      >
                        
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </div>
              </Card.Footer>
            ) : null}
          </Card>
        )}
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
