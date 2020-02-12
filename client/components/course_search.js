import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Button from '@material-ui/core/Button';
import CourseResults from './course_results';
import { Subjects } from '../../imports/collections/subjects'
import '../CSS/main';
import '../CSS/media';
import '../CSS/login';
import '../CSS/logout';

class CourseSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isResultsVisible: false
    };
  }

  renderSubjects() {
    return this.props.subjects.map(subjectInList => {
      const { _id, subject } = subjectInList;

      return (
        <option key={subjectInList._id} value={subject}>{subject}</option>
      )
    })
  }

  render() {
    return(
      <div>
    <table id="courseSearchTable">
      <tbody>
              <tr>
                  <td className="cstTitle"><label>Term :</label></td>
                  <td>
                      <select className="cstSelect">
                          <option value="2020 Spring - All Terms">2020 Spring - All Terms</option>
                          <option value="2020 Winter Intersession">2020 Winter Intersession</option>
                          <option value="2019 Fall Session 2">2019 Fall Session 2</option>
                          <option value="2019 Fall Session 1">2019 Fall Session 1</option>
                          <option value="2019 Fall">2019 Fall</option>
                      </select>
                  </td>
              </tr>
              <tr>
                  <td className="cstTitle">Subject :</td>
                  <td>
                      <select className="cstSelect">
                        <option value="ALL">ALL</option>
                        {this.renderSubjects()}
                      </select>
                  </td>
              </tr>
              <tr>
                  <td className="cstTitle">Title :</td>
                  <td>
                      <input type="text" className="cstInput" />
                  </td>
              </tr>
              <tr>
                  <td className="cstTitle">Course Code :</td>
                  <td>
                      <input type="text" className="cstInput" />
                  </td>
              </tr>
          </tbody>
    </table>
      <div className="searchButtonDiv">
          <Button
          id="submitButton"
          variant="contained"
          color="primary"

          onClick={() => {
            this.setState({ isResultsVisible: true });

          }}>
          Search
          </Button>
      </div>
      { this.state.isResultsVisible ? <CourseResults subject='' /> : null }
    </div>
    )
  }
  }

  export default withTracker(() => {
    // set up subscription
    Meteor.subscribe('subjects');

    // return an object. Whatever we return will be sent to CourseSearch
    // as props
    return { subjects: Subjects.find({}).fetch() };
  }) (CourseSearch);
