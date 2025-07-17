// import { TourCardData } from '@/components/hotel/components/TourCardData';
import ExclusiveOffers from '@/components/hotel/components/ExclusiveOffers';
import FreeTravel from '@/components/hotel/components/FreeTravel';
import HotelHero from '@/components/hotel/components/HotelHero';
import ReviewSlider from '@/components/ReviewSlider';
import React from 'react';

const Hotel = () => {
    return (
        <div>
            <HotelHero />
            <ExclusiveOffers />
            <FreeTravel />
            <ReviewSlider />
            {/* Add more components as needed */}
        </div>
    );
};

export default Hotel;
