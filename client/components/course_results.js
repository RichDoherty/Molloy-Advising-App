import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import CourseDetail from './course_detail';
import { Courses } from '../../imports/collections/courses';

const PER_PAGE = 20;

class CourseResults extends Component {
  componentWillMount() {
    this.page = 1;
    this.addedCourses = [];
  }

  handleButtonClick() {

  }

  render() {
    return (

      <div>
        <table id="courseResultsTable">
          <div>
            <tr>
              <td><label>ID</label></td>
              <td><label>Code</label></td>
              <td><label>Name</label></td>
              <td><label>Description</label></td>
            </tr>
            <div className="course-list">
              {this.props.courses.map(course =>
                <CourseDetail key={course._id} course={course} />)}
            </div>
          </div>
        </table>
        <button id="addButton" className="btn"
        onClick={this.handleButtonClick}>Confirm</button>
      </div>
    )
  }
}

export default withTracker(() => {
  // set up subscription
  Meteor.subscribe('molloyAdvising.courses');

  // return an object. Whatever we return will be sent to CourseResults
  // as props
  return { courses: Courses.find({}).fetch() };
}) (CourseResults);
