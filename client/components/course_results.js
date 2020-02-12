import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import CourseDetail from './course_detail';
import CourseAdded from './course_added';
import Schedule from '../components/schedule';
import { Courses } from '../../imports/collections/courses';
import Button from '@material-ui/core/Button';

const PER_PAGE = 20;

class CourseResults extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subject: '',
      addedCourses: []
    }
  }

/*
  componentDidMount() {
    const getAddedCourses = localStorage.getItem('addedCoursesPermanent')
    this.setState({  })
  }
*/
  addCourseClick(id) {
    console.log("clicked")
    localStorage.setItem('addedCoursesPermanent', this.state.addedCourses.concat(id))
    this.setState({ addedCourses: this.state.addedCourses.concat(id) })
  }

  removeCourseClick(id) {
    console.log("clicked")
    /** Thank you MarcoS. You're my hero!
     * https://stackoverflow.com/questions/36326612/delete-item-from-state-array-in-react
     */
    const array = [this.state.addedCourses];
    const indecks = this.state.addedCourses.indexOf(id)
    if(indecks !== -1) {
      this.state.addedCourses.splice(indecks, 1);
      this.setState({ adddedCourses: array })
    }
  }

  render() {
    console.log(this.state.addedCourses)
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
            {this.props.courses.map(x => {
              if (this.state.addedCourses.find(function(y){
               return x._id == y }))
              	return <CourseAdded course={x} removeCourseClick={this.removeCourseClick.bind(this, x._id)}/>
              else return <CourseDetail key={x._id} course={x} addCourseClick={this.addCourseClick.bind(this, x._id)}/>
            })}
            </tbody>
        </table>
        <Schedule array={this.state.addedCourses} />
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
}) (CourseResults);
