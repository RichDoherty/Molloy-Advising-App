import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';
import CourseSearch from './course_search';
import CourseResults from './course_results';
import Schedule from './schedule';
import CourseSearchResultsScheduleParent from './course_search_results_schedule_parent';

class MainCourseSearch extends Component {
  constructor() {
    super()

    this.state = {
      searchVisible: true
    }
  }
  render() {
    return (
      <div>
        <CourseSearchResultsScheduleParent searchVisible={this.state.searchVisible} />
        <Footer />
      </div>
    );
  }
};

export default MainCourseSearch;
