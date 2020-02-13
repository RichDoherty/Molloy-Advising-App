import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Schedule from '../components/schedule';
import CourseDetail from './course_detail';
import CourseSearch from '../components/course_search';
import CourseResults from './course_results';
import CourseAdded from './course_added';
import { Courses } from '../../imports/collections/courses';

const Home = () => {
  return (
    <div>
      <Header />

      <Footer />
    </div>
  );
};

export default Home;
