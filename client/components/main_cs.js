import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';
import CourseSearch from './course_search';
import CourseResults from './course_results';
import Schedule from './schedule';
import CourseSearchResultsScheduleParent from './course_search_results_schedule_parent';

const MainCourseSearch = () => {
  return (
    <div>
      <Header />
      <CourseSearchResultsScheduleParent />
      <Footer />
    </div>
  );
};

export default MainCourseSearch;
