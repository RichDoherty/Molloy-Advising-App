import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class CourseAdded extends Component {
  //const { _id, course_id, subject_id, course_Name, course_Description } = course;

  render() {
    const {course} = this.props;
    return (
        <tr key={this.props.course._id}>
          <td><label className="subjectId">{this.props.course.subject_id}{this.props.course.course_id}</label></td>
          <td><label className="courseName">{this.props.course.course_Name}</label></td>
          <td><label className="courseDescription">{this.props.course.course_Description}</label></td>
          <td className="addButton"><Button variant="outlined" color="primary" onClick={this.props.removeCourseClick}>:)</Button></td>
        </tr>
    );
  };
};

export default CourseAdded;
