import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ReviewForm />
        </div>
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
         Checkout Our Reviews <a href='/Reviews'>Here</a>
        </div>
        
        {/* <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ReviewList
              thoughts={thoughts}
              title="Checkout Our Reviews..."
            />
          )}
        </div> */}
      </div>
    </main>
  );
};

export default Home;
