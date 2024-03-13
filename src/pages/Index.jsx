import React from "react";

const Index = () => {
  const exams = [
    { subject: "Math", date: "2023-05-15", time: "09:00 - 11:00", room: "A101" },
    { subject: "English", date: "2023-05-16", time: "13:00 - 15:00", room: "B202" },
    { subject: "Science", date: "2023-05-17", time: "10:00 - 12:00", room: "C303" },
    { subject: "History", date: "2023-05-18", time: "14:00 - 16:00", room: "D404" },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Student Exam Time Table</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Subject</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Room</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="border px-4 py-2">{exam.subject}</td>
                <td className="border px-4 py-2">{exam.date}</td>
                <td className="border px-4 py-2">{exam.time}</td>
                <td className="border px-4 py-2">{exam.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;
