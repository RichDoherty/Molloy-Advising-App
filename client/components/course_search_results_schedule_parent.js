import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import CourseDetail from './course_detail';
import CourseAdded from './course_added';
import Schedule from './schedule';
import CourseSearch from './course_search';
import { Courses } from '../../imports/collections/courses';
import { Subjects } from '../../imports/collections/subjects';

class CourseSearchResultsScheduleParent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      addedCourses: []
    }
  }

  componentDidMount() {
    const getAddedCourses = localStorage.getItem('addedCoursesPermanent')
    this.setState({ addedCourses: getAddedCourses.split(",") })
    console.log(getAddedCourses)
  }

  addCourseClick(id) {
    localStorage.setItem('addedCoursesPermanent', this.state.addedCourses.concat(id))
    this.setState({ addedCourses: this.state.addedCourses.concat(id) })
  }

  removeCourseClick(id) {
    const index = this.state.addedCourses.indexOf(id)
    const beginning = this.state.addedCourses.slice(0, index)
    const end = this.state.addedCourses.slice(index+1)
    localStorage.setItem('addedCoursesPermanent', beginning.concat(end))
    console.log(beginning)
    console.log(end)
    console.log(beginning.concat(end) )
    if(index !== -1) {
      this.setState({ addedCourses: beginning.concat(end) })
    }
  }

  render() {
    return (
      <div>
        <CourseSearch
          addedCourses={this.state.addedCourses}
          courses={this.props.courses}
          addCourseClick={this.addCourseClick.bind(this)}
          removeCourseClick={this.removeCourseClick.bind(this)}
          />
        <Schedule
          addedCourses={this.state.addedCourses}
          courses={this.props.courses}
          removeCourseClick={this.removeCourseClick.bind(this)}
          />
      </div>
    )
  }
}

export default withTracker(() => {
  // set up subscription
  Meteor.subscribe('courses');

  // return an object. Whatever we return will be sent to CourseResults
  // as props
  return { courses: Courses.find({}).fetch() };
}) (CourseSearchResultsScheduleParent);
