import React from 'react';

const EventDetails = ({ eventId, onBack }) => {
  const meetingRooms = new Array(5).fill().map((_, i) => ({
    id: i + 1,
    name: `Meeting Room ${i + 1}`,
    positions: 12,
    start: '12th Jan, 2023',
    end: '15th Jan, 2023'
  }));

  const positions = new Array(7).fill().map((_, i) => ({
    time: '9 am - 7 pm',
    info: 'LP default',
    quantity: 20
  }));

  return (
    <div className="text-white w-[90vw] lg:w-[960px] h-full border-2 border-pink-700 border-opacity-70 rounded-xl shadow-[0_0_20px_2px_rgba(255,0,128,0.2)] overflow-y-scroll custom-scrollbar p-4 bg-transparent">
      
      
      <div className="flex gap-2 items-center mb-4">
        <button
        onClick={onBack}
        className="text-2xl font-bold w-8 h-8 bg-gray-800 px-2 rounded-full items-center"
      >
        ←
      </button>
      <h2 className="text-xl font-bold">Event Name <span className="text-sm text-gray-400 ml-1">(Venue Details)</span></h2>
      </div>

      
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2 overflow-x-auto">
          <button className="bg-pink-600 hover:bg-pink-700 px-3 py-1 rounded text-sm">Event Details</button>
          <button className="bg-pink-900 hover:bg-pink-700 px-3 py-1 rounded text-sm">Assign Coordinator/Contractor</button>
          <button className="bg-pink-900 hover:bg-pink-700 px-3 py-1 rounded text-sm">Session Management</button>
          <button className="bg-pink-900 hover:bg-pink-700 px-3 py-1 rounded text-sm">Generate SOW</button>
        </div>
      </div>

      
      <div className="grid lg:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 text-sm">Assign Coordinator</label>
          <select className="bg-transparent border border-white px-3 py-1 rounded w-full">
            <option>Select Coordinator</option>
          </select>
          <button className="text-xs text-pink-400 mt-1">+ Add New Coordinator</button>
        </div>
        <div>
          <label className="block mb-1 text-sm">Event Name (Venue Here)</label>
          <div className="flex gap-2">
            <input type="text" className="bg-transparent border border-white px-2 py-1 rounded w-1/2" placeholder="Start: 12-12-2023" />
            <input type="text" className="bg-transparent border border-white px-2 py-1 rounded w-1/2" placeholder="End: 15-12-2023" />
          </div>
          <input
            type="text"
            placeholder="Venue Address: Some Location 12, Name Here, City, State"
            className="mt-2 bg-transparent border border-white px-2 py-1 rounded w-full"
          />
        </div>
      </div>

      
      <div className="lg:grid grid-cols-3 gap-4">
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold mb-1">Assign Contractor</h3>
          {meetingRooms.map(room => (
            <div
              key={room.id}
              className={`border border-pink-500 p-2 rounded-lg ${room.id === 1 ? 'bg-pink-700' : 'bg-black'}`}
            >
              <p className="flex mb-1 items-center font-semibold">{room.name} 
                <img src="/Star 2.png" alt="" className="w-9 -my-2" />
                <span className=""></span>
                <span className="text-sm text-gray-300">{room.positions} Positions</span></p>
              <p className="text-xs text-gray-400">Start {room.start} - End {room.end}</p>
            </div>
          ))}
        </div>

        
        <div className="col-span-2 lg:w-full w-[80vw]">
          <h3 className="text-lg font-semibold lg:mt-0 mt-4 mb-2">Positions</h3>
          <div className="border border-pink-700 rounded-lg bg-black lg:overflow-hidden overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-transparent">
                <tr>
                  <th className="lg:px-2 px-10 py-1 text-center">Position</th>
                  <th className="lg:px-2 px-10 py-1 text-center">Time</th>
                  <th className="lg:px-2 px-10 py-1 text-center">Info</th>
                  <th className="lg:px-2 px-10 py-1 text-center">Quantity</th>
                  <th className="lg:px-2 px-16 py-1 text-center"></th>
                </tr>
              </thead>
              <tbody>
                {positions.map((pos, i) => (
                  <tr key={i} className="border-t border-pink-800">
                    <td className="px-2 py-1 text-center">Camera (Video)</td>
                    <td className="px-2 py-1 text-center">{pos.time}</td>
                    <td className="px-2 py-1 text-center">{pos.info}</td>
                    <td className="px-2 py-1 text-center">{pos.quantity}</td>
                    <td className="px-2 py-1 text-center">
                      <select className="bg-transparent border border-white rounded px-2 py-1 w-full">
                        <option>Select Contractor</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-3 space-x-2">
            <span className="cursor-pointer">●</span>
            <span className="cursor-pointer text-gray-400">●</span>
            <span className="cursor-pointer text-gray-400">●</span>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6 flex justify-center">
        <button className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded-lg font-medium">Save Edits</button>
      </div>
    </div>
  );
};

export default EventDetails;
