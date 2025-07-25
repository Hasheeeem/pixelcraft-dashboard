import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Settings, Bell, Search, Edit3, ArrowUp, Play, Pause, Square, Menu, X } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) => {
  const feedItems = [
    { name: 'Feed', active: false },
    { name: 'AutoFix', active: false },
    { name: 'Snoozed', active: false },
    { name: 'Ignored', active: true, count: '99+' },
    { name: 'Solved', active: false }
  ];

  const sections = [
    { name: 'Repositories', count: '1' },
    { name: 'Containers', count: '2' },
    { name: 'Clouds', count: '1' },
    { name: 'Virtual Machines', count: '1' },
    { name: 'Domains & APIs', count: '1' },
    { name: 'Zen Firewall', count: '1' }
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-screen bg-brand-black text-brand-light z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 w-64 p-6`}>
        {/* Mobile close button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 text-brand-light hover:text-brand-orange"
        >
          <X size={20} />
        </button>

        <div className="mb-8 mt-8 lg:mt-0">
          <div className="space-y-2">
            {feedItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                  item.active ? 'bg-accent' : 'hover:bg-brand-gray/20'
                }`}
              >
                <span className="text-sm font-medium">{item.name}</span>
                {item.count && (
                  <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
                    {item.count}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-brand-gray/30 pt-6">
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-3 py-2 hover:bg-brand-gray/20 rounded-lg cursor-pointer transition-colors"
              >
                <span className="text-sm text-brand-light/80 font-medium">{section.name}</span>
                <span className="text-xs text-brand-gray bg-brand-gray/20 px-2 py-1 rounded-full font-medium">
                  {section.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-brand-gray/30">
          <div className="text-sm text-brand-light/80 mb-4 font-medium">Integrations</div>
          <div className="text-xs text-brand-gray">No integrations configured</div>
        </div>
      </div>
    </>
  );
};

const NavBar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const tabs = ['Dashboard', 'People', 'Hiring', 'Devices', 'Apps', 'Salary', 'Calendar', 'Reviews'];
  
  return (
    <nav className="w-full bg-brand-black px-4 lg:px-6 py-3 flex items-center justify-between lg:ml-64">
      {/* Mobile menu button */}
      <button 
        onClick={toggleSidebar}
        className="lg:hidden text-brand-light hover:text-brand-orange mr-4"
      >
        <Menu size={20} />
      </button>

      <div className="flex items-center space-x-4 lg:space-x-8 flex-1 lg:flex-none">
        <div className="bg-brand-light text-brand-black px-4 py-2 rounded-full font-semibold text-sm lg:text-base">
          Crextio
        </div>
        <div className="hidden md:flex space-x-4 lg:space-x-6">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                index === 0 
                  ? 'bg-brand-gray/20 text-brand-light' 
                  : 'text-brand-gray hover:text-brand-light'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-4 text-brand-gray">
        <Settings size={18} className="hover:text-brand-light cursor-pointer transition-colors" />
        <Bell size={18} className="hover:text-brand-light cursor-pointer transition-colors" />
        <Search size={18} className="hover:text-brand-light cursor-pointer transition-colors" />
      </div>
    </nav>
  );
};

const StatsRow = () => {
  const stats = [
    { label: 'Interviews', value: '6%', bgColor: 'bg-brand-black', textColor: 'text-brand-light' },
    { label: 'Hired', value: '2%', bgColor: 'bg-accent', textColor: 'text-accent-foreground' },
    { label: 'Project time', value: '60%', bgColor: 'bg-accent', textColor: 'text-accent-foreground', pattern: true },
    { label: 'Output', value: '10%', bgColor: 'bg-brand-light', textColor: 'text-brand-black' }
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.bgColor} ${stat.textColor} px-4 py-2 rounded-full text-sm font-medium ${
            stat.pattern ? 'relative overflow-hidden' : ''
          }`}
        >
          {stat.pattern && (
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, white 4px, white 8px)'
            }}></div>
          )}
          <span className="relative font-semibold">{stat.label} {stat.value}</span>
        </div>
      ))}
    </div>
  );
};

const TopStatsCards = () => {
  const stats = [
    { number: '78', label: 'Employee' },
    { number: '56', label: 'Hirings' },
    { number: '203', label: 'Projects' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-accent/10 rounded-2xl p-4">
          <div className="text-3xl font-bold text-brand-black">{stat.number}</div>
          <div className="text-sm text-brand-gray font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

const ProfileCard = () => {
  const [expandedSection, setExpandedSection] = useState('Devices');
  
  const sections = [
    { name: 'Pension contributions', content: null },
    { 
      name: 'Devices', 
      content: (
        <div className="flex items-center space-x-3 mt-3 pb-3">
          <div className="w-10 h-10 bg-brand-light rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
              alt="MacBook"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm text-brand-black font-medium">MacBook Air Version M1</span>
        </div>
      )
    },
    { name: 'Compensation Summary', content: null },
    { name: 'Employee Benefits', content: null }
  ];

  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border">
      {/* Large centered profile image */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-muted">
          <img 
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&fit=crop"
            alt="Lora Piterson"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-brand-black mb-1">Lora Piterson</h3>
          <p className="text-sm text-brand-gray font-medium mb-3">UX Designer</p>
          <div className="bg-accent/20 text-brand-black px-4 py-2 rounded-full text-sm font-bold">
            $1,200
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        {sections.map((section, index) => (
          <div key={index} className="border-b border-border last:border-b-0">
            <button
              onClick={() => setExpandedSection(expandedSection === section.name ? null : section.name)}
              className="w-full flex items-center justify-between py-3 text-left"
            >
              <span className="text-sm font-semibold text-brand-black">{section.name}</span>
              {expandedSection === section.name ? (
                <ChevronUp size={16} className="text-brand-gray" />
              ) : (
                <ChevronDown size={16} className="text-brand-gray" />
              )}
            </button>
            {expandedSection === section.name && section.content && (
              <div>{section.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProgressWidget = () => {
  const days = ['M', 'T', 'W', 'T', 'F', 'S'];
  const heights = [20, 60, 40, 80, 100, 30]; // percentages for bar heights
  
  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-brand-black">Progress</h3>
        <Edit3 size={16} className="text-brand-gray" />
      </div>
      <p className="text-sm text-brand-gray mb-6 font-medium">6.1 h Work Time this week</p>
      
      <div className="flex items-end space-x-3 h-24">
        {days.map((day, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div className="w-full relative">
              <div 
                className={`w-full rounded-t ${index === 4 ? 'bg-accent' : 'bg-muted'}`}
                style={{ height: `${heights[index]}%`, minHeight: '8px' }}
              ></div>
              {index === 4 && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded font-semibold whitespace-nowrap">
                  6h 33m
                </div>
              )}
            </div>
            <span className="text-xs text-brand-gray mt-2 font-medium">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TimeTracker = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-brand-black">Time tracker</h3>
        <ArrowUp size={16} className="text-brand-gray" />
      </div>
      
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 mb-6">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="hsl(var(--muted))"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="hsl(var(--accent))"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${60} ${240}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-2xl font-bold text-brand-black">02:35</div>
            <div className="text-xs text-brand-gray font-medium">Work Time</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors">
            <Square size={14} />
          </button>
          <button className="w-8 h-8 bg-brand-black rounded-full flex items-center justify-center text-brand-light hover:bg-brand-black/80 transition-colors">
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

const OnboardingPanel = () => {
  const tasks = [
    { id: 1, name: 'Interactive Walkthrough', completed: true, time: '10:15:20' },
    { id: 2, name: 'Team Meeting', completed: true, time: '11:30:15' },
    { id: 3, name: 'Project Updates', completed: false, time: '12:45:30' },
    { id: 4, name: 'Devices QA Goals', completed: false, time: '14:00:45' },
    { id: 5, name: 'HR Policy Review', completed: false, time: '15:15:10' }
  ];
  
  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-brand-black">Onboarding</h3>
        <span className="text-lg font-bold text-brand-black">18%</span>
      </div>
      
      <div className="mb-6">
        <div className="flex space-x-2 mb-3">
          <div className="flex-1 bg-accent h-2 rounded-full"></div>
          <div className="flex-1 bg-accent/40 h-2 rounded-full"></div>
          <div className="flex-1 bg-muted h-2 rounded-full"></div>
        </div>
        <div className="flex justify-between text-xs text-brand-gray font-medium">
          <span>50%</span>
          <span>20%</span>
          <span>10%</span>
        </div>
      </div>
      
      <div className="mb-4">
        <span className="text-sm font-semibold text-brand-gray">Task</span>
      </div>
      
      <div className="bg-brand-black rounded-xl p-4">
        <div className="text-brand-light text-sm font-semibold mb-4">Onboarding Task 2/8</div>
        
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center space-x-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                task.completed 
                  ? 'bg-accent text-accent-foreground' 
                  : 'bg-brand-gray text-brand-light'
              }`}>
                {task.completed ? '✓' : task.id}
              </div>
              <div className="flex-1">
                <div className="text-brand-light text-sm font-medium">{task.name}</div>
                <div className="text-brand-gray text-xs">{task.time}</div>
              </div>
              {task.completed && (
                <div className="w-2 h-2 bg-accent rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CalendarStrip = () => {
  const days = [
    { day: 'Mon', date: '22' },
    { day: 'Tue', date: '23' },
    { day: 'Wed', date: '24' },
    { day: 'Thu', date: '25' },
    { day: 'Fri', date: '26' },
    { day: 'Sat', date: '27' }
  ];
  
  const times = ['8:00 am', '9:00 am', '10:00 am', '11:00 am'];
  
  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-4 text-sm">
          <span className="text-brand-gray">August</span>
          <span className="font-semibold text-brand-black">September 2024</span>
          <span className="text-brand-gray">October</span>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-4 mb-4">
        <div></div>
        {days.map((day, index) => (
          <div key={index} className="text-center">
            <div className="text-xs text-brand-gray mb-1 font-medium">{day.day}</div>
            <div className="text-sm font-semibold text-brand-black">{day.date}</div>
          </div>
        ))}
      </div>
      
      <div className="space-y-3">
        {times.map((time, index) => (
          <div key={index} className="grid grid-cols-7 gap-4 items-center">
            <div className="text-xs text-brand-gray font-medium">{time}</div>
            <div></div>
            <div></div>
            {index === 1 && (
              <div className="col-span-2 bg-brand-black text-brand-light text-xs px-3 py-2 rounded-full flex items-center space-x-2">
                <span className="font-medium">Weekly Team Sync</span>
                <div className="flex -space-x-1">
                  <div className="w-4 h-4 bg-blue-400 rounded-full border border-white"></div>
                  <div className="w-4 h-4 bg-green-400 rounded-full border border-white"></div>
                  <div className="w-4 h-4 bg-red-400 rounded-full border border-white"></div>
                </div>
              </div>
            )}
            {index === 2 && (
              <div className="col-span-2 bg-muted text-brand-black text-xs px-3 py-2 rounded-full flex items-center space-x-2">
                <span className="font-medium">Onboarding Session</span>
                <div className="flex -space-x-1">
                  <div className="w-4 h-4 bg-accent rounded-full border border-white"></div>
                  <div className="w-4 h-4 bg-purple-400 rounded-full border border-white"></div>
                </div>
              </div>
            )}
            {index !== 1 && index !== 2 && (
              <>
                <div></div>
                <div></div>
                <div></div>
              </>
            )}
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <NavBar toggleSidebar={toggleSidebar} />
      
      <div className="p-4 lg:p-6 lg:ml-64 transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-black mb-6">Welcome in, Nixtio</h1>
          
          <StatsRow />
          <TopStatsCards />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 xl:col-span-3">
              <ProfileCard />
            </div>
            
            <div className="lg:col-span-5 xl:col-span-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <ProgressWidget />
                <TimeTracker />
              </div>
              <CalendarStrip />
            </div>
            
            <div className="lg:col-span-3">
              <OnboardingPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;