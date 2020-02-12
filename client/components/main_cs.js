import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import CourseSearch from '../components/course_search';
import CourseResults from '../components/course_results';
import Schedule from '../components/schedule';

const MainCourseSearch = () => {
  return (
    <div>
      <Header />
      <CourseSearch />

      <Footer />
    </div>
  );
};

export default MainCourseSearch;
