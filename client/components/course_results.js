import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import CourseDetail from './course_detail';
import CourseAdded from './course_added';
import Schedule from './schedule';
import CourseSearchResultsScheduleParent from './course_search_results_schedule_parent';
import { Courses } from '../../imports/collections/courses';
import { Subjects } from '../../imports/collections/subjects';
import Button from '@material-ui/core/Button';

class CourseResults extends Component {
  constructor(props) {
    super(props)
  }

  coursesToMap() {
    if(this.props.selctedSubject === '' && this.props.titleInput === '' && this.props.courseCodeInput === '') {
      return this.props.courses;
    }
    else {
      return this.props.courses.filter(course =>
        (this.props.selctedSubject === course.subject_id || this.props.selctedSubject === '') &&
        (course.course_Name.toString().toLowerCase().split(' ').join('')).includes(this.props.titleInput.toString().toLowerCase().split(' ').join('')) &&
        (course.subject_id + course.course_id).includes(this.props.courseCodeInput.toString().toUpperCase().split(' ').join('')));
    }
  }

  render() {
    console.log(this.props.addedCourses)
    console.log(this.props.selctedSubject)
    console.log(this.props.titleInput.toLowerCase().split(' ').join(''))

    return (
      <div>
        <table id="courseResultsTable">
            <thead>
              <tr>
                <td><label>Course Code</label></td>
                <td><label>Name</label></td>
                <td><label>Description</label></td>
                <td>Select</td>
              </tr>
            </thead>
            <tbody>
            {this.coursesToMap().map(x => {
              if (this.props.addedCourses.find(function(y) {
               return x._id == y }))
              	return <CourseAdded key={x._id} course={x} removeCourseClick={() => this.props.removeCourseClick(x._id)} />
              else return <CourseDetail key={x._id} course={x} addCourseClick={() => this.props.addCourseClick(x._id)} />
            })}
            </tbody>
        </table>
      </div>
    )
  }
}

export default CourseResults;
