import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar';
import { Plus, Upload, Filter, Search, ChevronDown } from 'lucide-react';
import {
  IconDashboard,
  IconFolder,
  IconUsers,
  IconBrandGithub,
  IconCircleCheck,
  IconMessageCircle,
  IconSettings,
  IconBook,
  IconHelp,
  IconUser,
} from '@tabler/icons-react';

const ResponsiveSidebar = ({ sidebarOpen, setSidebarOpen }: { sidebarOpen: boolean; setSidebarOpen: (open: boolean) => void }) => {
  const feedLinks = [
    {
      label: "Dashboard",
      href: "/",
      icon: <IconDashboard className="h-5 w-5 shrink-0" />,
      active: false,
    },
    {
      label: "Projects",
      href: "/projects",
      icon: <IconFolder className="h-5 w-5 shrink-0" />,
      active: true,
    },
    {
      label: "Members",
      href: "#",
      icon: <IconUsers className="h-5 w-5 shrink-0" />,
      active: false,
    },
    {
      label: "Integrations",
      href: "#",
      icon: <IconBrandGithub className="h-5 w-5 shrink-0" />,
      active: false,
      count: "99+",
    },
    {
      label: "Solved",
      href: "#",
      icon: <IconCircleCheck className="h-5 w-5 shrink-0" />,
      active: false,
    },
  ];

  const bottomLinks = [
    {
      label: "Feedback",
      href: "#",
      icon: <IconMessageCircle className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Settings",
      href: "#",
      icon: <IconSettings className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Docs",
      href: "#",
      icon: <IconBook className="h-5 w-5 shrink-0" />,
    },
    {
      label: "Help",
      href: "#",
      icon: <IconHelp className="h-5 w-5 shrink-0" />,
    },
  ];

  const profileLink = {
    label: "Lora Piterson",
    href: "#",
    icon: <IconUser className="h-5 w-5 shrink-0" />,
  };

  return (
    <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-1 flex-col">
          <Logo />
          
          <div className="mt-8 flex flex-col gap-2">
            {feedLinks.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-2">
            {bottomLinks.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>

          <div className="pt-4 border-t border-brand-gray/30">
            <SidebarLink link={profileLink} />
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
};

const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal"
    >
      <span className="font-medium text-brand-light">SECURE THREAD</span>
    </a>
  );
};

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-brand-black">{project.name}</h3>
          <p className="text-sm text-brand-gray">{project.user}</p>
        </div>
        <div className="flex items-center space-x-2">
          {project.critical > 0 && (
            <Badge variant="destructive" className="bg-red-500 text-white">
              C {project.critical}
            </Badge>
          )}
          {project.high > 0 && (
            <Badge className="bg-orange-500 text-white">
              H {project.high}
            </Badge>
          )}
          {project.medium > 0 && (
            <Badge className="bg-yellow-500 text-white">
              M {project.medium}
            </Badge>
          )}
          {project.low > 0 && (
            <Badge className="bg-gray-500 text-white">
              L {project.low}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Sample project data
  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      user: "john.doe",
      critical: 2,
      high: 5,
      medium: 8,
      low: 12
    },
    {
      id: 2,
      name: "Mobile Banking App",
      user: "jane.smith",
      critical: 0,
      high: 3,
      medium: 6,
      low: 9
    },
    {
      id: 3,
      name: "Healthcare Portal",
      user: "mike.johnson",
      critical: 1,
      high: 2,
      medium: 4,
      low: 7
    },
    {
      id: 4,
      name: "Social Media Dashboard",
      user: "sarah.wilson",
      critical: 0,
      high: 1,
      medium: 3,
      low: 5
    }
  ];

  const completedThisMonth = 23;

  return (
    <div className="w-full h-screen font-sans relative flex overflow-hidden">
      <AuroraBackground />
      
      <ResponsiveSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="p-4 lg:p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-black">
                  Secure Thread
                </h1>
                <p className="text-brand-gray mt-1">User &gt; Projects</p>
              </div>
              <div className="flex items-center space-x-3">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Projects
                </Button>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Upload className="w-4 h-4 mr-2" />
                  Import Logs
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="my-projects" className="w-full">
              <TabsList className="bg-white/80 backdrop-blur-sm border border-white/20">
                <TabsTrigger value="my-projects" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                  My Projects
                </TabsTrigger>
              </TabsList>

              <TabsContent value="my-projects" className="mt-6">
                {/* Filters and Controls */}
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-sm mb-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <Button
                        variant="outline"
                        onClick={() => setShowFilters(!showFilters)}
                        className="bg-white/50"
                      >
                        <Filter className="w-4 h-4 mr-2" />
                        Add Filter
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </Button>
                      
                      {showFilters && (
                        <>
                          <Select>
                            <SelectTrigger className="w-[140px] bg-white/50">
                              <SelectValue placeholder="With Issue" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="with-issue">With Issue</SelectItem>
                              <SelectItem value="without-issue">Without Issue</SelectItem>
                            </SelectContent>
                          </Select>
                          
                          <Select>
                            <SelectTrigger className="w-[150px] bg-white/50">
                              <SelectValue placeholder="Without Issue" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="with-issue">With Issue</SelectItem>
                              <SelectItem value="without-issue">Without Issue</SelectItem>
                            </SelectContent>
                          </Select>
                        </>
                      )}
                      
                      <Select>
                        <SelectTrigger className="w-[160px] bg-accent text-accent-foreground">
                          <SelectValue placeholder="GROUP BY TARGET" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="target">Target</SelectItem>
                          <SelectItem value="severity">Severity</SelectItem>
                          <SelectItem value="user">User</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        Sort by highest severity
                      </Button>
                    </div>
                    
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray w-4 h-4" />
                      <Input
                        placeholder="Type here..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 w-64 bg-accent text-accent-foreground placeholder:text-accent-foreground/70"
                      />
                    </div>
                  </div>
                </div>

                {/* Projects Section */}
                <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-white/20 shadow-sm">
                  <div className="p-6 border-b border-gray-200/50">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold text-brand-black">Projects</h2>
                      <div className="flex items-center text-sm text-brand-gray">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {completedThisMonth} last this month
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center justify-between py-3 border-b border-gray-200/50">
                        <h3 className="font-semibold text-brand-black">User / Project Name</h3>
                        <div className="flex items-center space-x-4 text-sm text-brand-gray">
                          <span>Critical</span>
                          <span>High</span>
                          <span>Medium</span>
                          <span>Low</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {projects
                        .filter(project => 
                          project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.user.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((project) => (
                          <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;