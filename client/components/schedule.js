import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import CourseDetail from './course_detail';
import CourseResults from './course_results';
import CourseSearchResultsScheduleParent from './course_search_results_schedule_parent';
import CourseAdded from './course_added';
import { Courses } from '../../imports/collections/courses';
import '../CSS/main';
import '../CSS/media';
import '../CSS/login';
import '../CSS/logout';

class Schedule extends Component {

  render() {
    console.log(this.props.addedCourses);
    return(
        <div>
            <div className="column" className="right">
              <table>
                <tbody>
                  <tr id="list1">
                      <td>Advisor: <a href = "schanker.html">Dr. Jason Schanker</a></td>
                      <td>Major: Computer Science</td>
                      <td>Minor: Computer Information Systems</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="column" className="left">
                <table id="schedule">
                  <thead>
                    <tr>
                      <td>Course Code</td>
                      <td>Name</td>
                      <td>Description</td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                  {this.props.courses.map(x => {
                    if (this.props.addedCourses.find(function(y) {
                     return x._id == y }))
                      return <CourseAdded key={x._id} course={x} removeCourseClick={() => this.props.removeCourseClick(x._id)} />
                  })}
                  </tbody>
                </table>
            </div>
        </div>
    )
  }
}
export default Schedule;
