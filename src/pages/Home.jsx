import React, { useState } from 'react';
import Topbar from '../components/TopBar'
import SideBar from '../components/SideBar'
import EventRequest from '../components/EventRequest'
import EventDetail from '../components/EventDetail'

const Home = () => {
  const [selectedEventId, setSelectedEventId] = useState(null);

  const handleViewDetails = (id) => {
    setSelectedEventId(id);
  };

  const handleBack = () => {
    setSelectedEventId(null);
  };
  return (
    <>
        <div className="min-h-screen w-full p-0 m-0 bg-gradient-moving bg-[length:200%_200%] animate-bg-move">
            <Topbar />

            <div className="flex lg:px-[40px] py-[25px] height-minus-74 gap-6">
              <div className="">
                <SideBar />
              </div>

              <div className="">
                {selectedEventId === null ? (
                  <EventRequest onViewDetails={handleViewDetails} />
                ) : (
                  <EventDetail eventId={selectedEventId} onBack={handleBack} />
                )}
              </div>
            </div>
        </div>
    </>
  )
}

export default Home