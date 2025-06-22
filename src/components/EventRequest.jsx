import React from 'react'

const EventRequest = ({ onViewDetails }) => {

  const data = new Array(12).fill().map((_, i) => ({
    id: i + 1,
    event: "Field Name",
    start: "Jan 12, 2024",
    end: "Jan 14, 2024",
    client: "Muhammad Asad",
    phone: "+1234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet"
  }));

  const handleRedirect = (id) => {
    navigate(`/event/${id}`);
  }

  return (
    <div className="text-base text-white w-[400px] lg:w-[960px] lg:h-full h-[85vh] border-[2px] border-pink-700 border-opacity-70 rounded-xl shadow-[0_0_20px_2px_rgba(255,0,128,0.2)] overflow-y-scroll custom-scrollbar">
      <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between justify-start my-2 px-5">
        <h1 className="text-2xl font-semibold">Event Requests</h1>
        <div className="flex items-center">
          <div className="flex items-center border-[1px] border-white px-2 py-1 rounded-lg gap-2">
            <img src="/search-01.png" alt="" className="w-4 ml-2" />
            <input type="text" className="bg-transparent outline-none text-sm" placeholder="Search" />
          </div>
          <img src="/Frame 39235.png" alt="" className="w-12 h-12 ml-4" />
        </div>
      </div>

      <table className="w-full">
        <thead className="bg-pink-700 border border-pink-700 text-white text-base">
          <tr>
            <th className="ml-4 px-7 lg:px-0"></th>
            <th className="py-2 lg:px-1 px-7 text-start">Event Name</th>
            <th className='py-2 lg:px-1 px-7 text-start'>Event Start</th>
            <th className='py-2 lg:px-1 px-7 text-start'>Event End</th>
            <th className='py-2 lg:px-1 px-7 text-start'>Client Name</th>
            <th className='py-2 lg:px-1 px-7 text-start'>Contact Info</th>
            <th className='py-2 lg:pr-6 px-7 text-start'>Venue</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="text-sm border border-pink-500">
              <td className="text-center">
                <img
                  src="/Frame 39328.png"
                  alt="icon"
                  className="w-7 cursor-pointer -mr-1 ml-2"
                  onClick={() => onViewDetails(row.id)}
                />
              </td>
              <td className='py-2'>{row.event}</td>
              <td className='py-2'>{row.start}</td>
              <td className='py-2'>{row.end}</td>
              <td className='py-2'>{row.client}</td>
              <td className='py-2'>{row.phone}</td>
              <td className='py-2'>{row.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EventRequest
