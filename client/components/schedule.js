import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import CourseResults from './course_results';
import { Courses } from '../../imports/collections/courses';
import '../CSS/main';
import '../CSS/media';
import '../CSS/login';
import '../CSS/logout';

const Schedule = () => {
    return(
        <div>
            <div className="column" className="right">
                <tr id="list1">
                    <td>Advisor: <a href = "schanker.html">Dr. Jason Schanker</a></td>
                    <td>Major: Computer Science</td>
                    <td>Minor: Computer Information Systems</td>
                </tr>
            </div>
            <div className="column" className="left">
                <table id="schedule">
                  <thead>
                    <tr>
                      <td>Course Code</td>
                      <td>Name</td>
                      <td>Description</td>
                    </tr>
                  </thead>
                  <tbody>

                  </tbody>
                </table>
            </div>
        </div>
    )
}
export default Schedule;
