import React from "react";
import Search from "../Search";
import API from "../../utils/API.js";

class Table extends React.Component {
  state = {
    alphabetical: true,
    ascending: true,
    sortedEmployees: [],
    search: "",
    employees: [],
  };

  componentDidMount() {
    API.search()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          sortedEmployees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  componentDidUpdate(prevProps) {
    if (this.props.empList !== prevProps.empList) {
      this.setState({
        sortedEmployees: this.props.empList,
      });
    }
  }

  sortName = () => {
    let sortEmp = [];
    if (this.state.alphabetical) {
      sortEmp = this.props.empList.sort((a, b) => {
        var nameA = a.name.last.toLowerCase(),
          nameB = b.name.last.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    } else {
      sortEmp = this.props.empList.sort((a, b) => {
        var nameA = a.name.last.toLowerCase(),
          nameB = b.name.last.toLowerCase();
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      });
    }
    this.setState({
      alphabetical: !this.state.alphabetical,
      sortedEmployees: sortEmp,
    });
  };

  render() {
    return (
      <div>
        <div className="header">
          <div>Photo</div>
          <div>
            <p onClick={this.sortName} className="name">
              Name
            </p>{" "}
          </div>
          <div>Gender</div>
          <div>Phone</div>
          <div>E-mail</div>
        </div>

        {this.state.sortedEmployees.length > 0 &&
          this.state.sortedEmployees.map((item, index) => (
            <Search
              image={item.picture.large}
              first={item.name.first}
              last={item.name.last}
              title={item.name.title}
              gender={item.gender}
              age={item.dob.age}
              phone={item.cell}
              email={item.email}
            />
          ))}
      </div>
    );
  }
}

export default Table;
