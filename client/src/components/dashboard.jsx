import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0B1D36] text-white p-6 space-y-6">
        <h1 className="text-2xl font-bold mb-6">Team Dashboard</h1>
        <nav className="space-y-2">
          {['Dashboard', 'Properties', 'Tasks', 'Tenant Queries', 'Rent Collection', 'Employees', 'Settings'].map((item, i) => (
            <a
              key={i}
              className={`block px-4 py-2 rounded hover:bg-yellow-400 hover:text-black ${
                item === 'Dashboard' ? 'bg-yellow-400 text-black font-semibold' : ''
              }`}
              href="#"
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-6">
        {/* Top Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Pending Tenant Queries" value="12" subtitle="Issues waiting to be resolved" />
          <StatCard title="Rent Payments Collected (This Month)" value="€18,450" subtitle="Shows incoming revenue" />
          <StatCard title="New Properties Added (This Week)" value="3" subtitle="Highlights portfolio growth" />
          <StatCard title="Active Employees Logged In" value="5" subtitle="Team activity at a glance" />
        </div>

        {/* Graphs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">Monthly Rent Collection (Example)</h2>
            <div className="h-40 flex items-center justify-center text-gray-400">[Graph Placeholder]</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">Tenant Issues Distribution</h2>
            <div className="flex flex-col items-center justify-center">
              <div className="h-40 w-40 rounded-full bg-gradient-to-tr from-yellow-300 to-green-400 flex items-center justify-center text-white">
                [Pie Chart Placeholder]
              </div>
              <div className="mt-4 text-sm text-gray-700 space-y-1 text-center">
                <div><span className="font-bold text-yellow-600">Pending: 29%</span></div>
                <div><span className="font-bold text-green-600">Resolved: 57%</span></div>
                <div><span className="font-bold text-black">In Progress: 14%</span></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const StatCard = ({ title, value, subtitle }) => (
  <div className="bg-yellow-400 rounded-xl p-4 text-center shadow hover:scale-105 transition-transform duration-200">
    <h3 className="text-md font-medium text-gray-800">{title}</h3>
    <p className="text-3xl font-bold text-black mt-2">{value}</p>
    <p className="text-sm text-gray-700 mt-1">{subtitle}</p>
  </div>
);

export default Dashboard;
