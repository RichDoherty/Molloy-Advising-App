import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';
import Schedule from './schedule';
import CourseDetail from './course_detail';
import CourseSearch from './course_search';
import CourseResults from './course_results';
import CourseAdded from './course_added';
import { Courses } from '../../imports/collections/courses';
import CourseSearchResultsScheduleParent from './course_search_results_schedule_parent';

class Home extends Component {
  constructor() {
    super()

    this.state = {
      searchVisible: false
    }
  }
  render() {
    return (
      <div>
        <Header />
        <CourseSearchResultsScheduleParent searchVisible={this.state.searchVisible} />
        <Footer />
      </div>
    );
  }
};

export default Home;
