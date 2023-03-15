import React from 'react';
import { useQuery } from '@apollo/client';

import ReviewList from '../components/ReviewList';

import { QUERY_THOUGHTS } from '../utils/queries';

const Reviews = () => {
  const { data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];
  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ReviewList
              thoughts={thoughts}
              title="Checkout Our Reviews..."
            />
        </div>
      </div>
    </main>
  );
};

export default Reviews;