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
    if(getAddedCourses !== null) {
    return this.setState({ addedCourses: getAddedCourses.split(",") })
    }
    console.log(getAddedCourses)
  }

  addCourseClick(id) {
    // .valueOf() is used to get the id from MongoDB's ObjectId(...) format
    // https://docs.mongodb.com/manual/reference/method/ObjectId.valueOf/
    localStorage.setItem('addedCoursesPermanent',
      this.state.addedCourses.concat(id.valueOf()))
    this.setState({ addedCourses: this.state.addedCourses.concat(id.valueOf()) })
  }

  removeCourseClick(id) {
    const index = this.state.addedCourses.indexOf(id.valueOf())
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
      {/* this.props.searchVisible used to make CourseSearch visible on the
      Course Search page and invisible on the Home page */}
      { this.props.searchVisible ?
        <CourseSearch
          addedCourses={this.state.addedCourses}
          courses={this.props.courses}
          addCourseClick={this.addCourseClick.bind(this)}
          removeCourseClick={this.removeCourseClick.bind(this)}
          />
        : null }
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
