import React from "react";

const Filter = ({
  statusFilter,
  setStatusFilter,
  genderFilter,
  setGenderFilter,
}) => {
  return (
    <div className="flex justify-center gap-6 mb-6">
      <div>
        <label className="mr-2">Status:</label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="all">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div>
        <label className="mr-2">Gender:</label>
        <select
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
