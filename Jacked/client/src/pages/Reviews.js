import React from 'react';
import { useQuery } from '@apollo/client';

import ReviewList from '../components/ReviewList';
import { QUERY_THOUGHTS } from '../utils/queries';

const Reviews = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
            <ReviewList/>
        </div>
      </div>
    </main>
  );
};

export default Reviews;