
export interface Pledge {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  color: string;
  goals: string[];
  impact: string;
  timeline: string;
  bgImage?: string;
}

export const pledges: Pledge[] = [
  {
    id: 1,
    title: "No Poverty",
    shortDescription: "Taking action to address poverty within Bicol University and local communities",
    longDescription: "As a BU student, I pledge to volunteer monthly with the university's outreach programs for impoverished communities in Albay. I'll initiate a book and uniform drive each semester for students who cannot afford these essentials, and participate in the university's 'Scholars Help Scholars' mentoring initiative.",
    icon: "activity",
    color: "sdg-1",
    goals: [
      "Volunteer 5 hours monthly with BU outreach programs",
      "Organize semestral book and uniform collection drive",
      "Mentor 2 financially challenged students per semester"
    ],
    impact: "Supporting 15+ students annually with academic resources and expanding mentorship network at BU",
    timeline: "Ongoing throughout academic year with semestral assessment"
  },
  {
    id: 2,
    title: "Zero Hunger",
    shortDescription: "Contributing to food security at BU and surrounding communities",
    longDescription: "I commit to reducing food waste in the BU canteen by proposing and implementing a food sharing system. I'll participate in the agriculture college's urban gardening initiatives and help organize the distribution of excess produce to community kitchens around the campus.",
    icon: "wheat",
    color: "sdg-2",
    goals: [
      "Establish a food sharing table in BU canteen",
      "Dedicate 3 hours weekly to campus urban garden project",
      "Organize monthly distribution of garden produce to local communities"
    ],
    impact: "Reducing campus food waste by approximately 20% and providing fresh produce to nearby communities",
    timeline: "Implementation within first semester with continued maintenance"
  },
  {
    id: 3,
    title: "Good Health & Well-being",
    shortDescription: "Promoting physical and mental health awareness at Bicol University",
    longDescription: "I pledge to actively participate in BU's mental health awareness campaigns, organize bi-monthly jogging sessions for students, and volunteer with the university health services during vaccination drives and health screenings.",
    icon: "heart-pulse",
    color: "sdg-3",
    goals: [
      "Lead 2 mental health awareness sessions per semester",
      "Organize bi-monthly 'Jog for Health' campus events",
      "Volunteer 15 hours per semester with BU health services"
    ],
    impact: "Engaging 100+ students in health activities and supporting university-wide health initiatives",
    timeline: "Regular schedule throughout academic year"
  },
  {
    id: 4,
    title: "Quality Education",
    shortDescription: "Enhancing educational opportunities within Bicol University community",
    longDescription: "As a computer science student, I commit to tutoring fellow students struggling with programming courses for 3 hours weekly. I'll create and share educational resources online, and contribute to the CITE department's coding workshops for high school students in Legazpi City.",
    icon: "book-open",
    color: "sdg-4",
    goals: [
      "Provide 3 hours of programming tutoring weekly",
      "Create 5 educational coding tutorials per semester for BU students",
      "Assist in 3 CITE outreach coding workshops annually"
    ],
    impact: "Supporting academic success for 25+ BU students and introducing coding to 60+ high school students yearly",
    timeline: "Weekly tutoring schedule with semester-based workshop planning"
  },
  {
    id: 5,
    title: "Gender Equality",
    shortDescription: "Advocating for gender equality in Bicol University's academic and social environment",
    longDescription: "I pledge to actively support BU's Women in Computing organization, participate in gender awareness campaigns on campus, and organize discussions about gender equality in technology and other fields where representation gaps exist.",
    icon: "users",
    color: "sdg-5",
    goals: [
      "Active membership in BU Women in Computing group",
      "Participate in 3 gender equality campus events annually",
      "Organize one semestral discussion on gender equality in tech"
    ],
    impact: "Raising awareness and creating supportive spaces for gender diversity within the BU community",
    timeline: "Ongoing participation with semestral themed discussions"
  },
  {
    id: 6,
    title: "Clean Water & Sanitation",
    shortDescription: "Contributing to water conservation efforts at Bicol University",
    longDescription: "I commit to joining BU's environmental club in their water conservation initiatives, reporting water leaks around campus promptly, and participating in clean-up drives at local water sources like the Yawa River that affect our community's water supply.",
    icon: "droplets",
    color: "sdg-6",
    goals: [
      "Monitor and report campus water infrastructure issues weekly",
      "Participate in 4 local watershed clean-up activities annually",
      "Reduce personal water consumption by 20% through mindful usage"
    ],
    impact: "Contributing to campus water conservation and local watershed protection efforts",
    timeline: "Weekly monitoring with quarterly clean-up activities"
  },
  {
    id: 7,
    title: "Affordable & Clean Energy",
    shortDescription: "Promoting energy conservation within Bicol University campus",
    longDescription: "I pledge to start an 'Energy Monitors' student initiative to ensure lights and computers are turned off in BU computer labs when not in use. I'll also advocate for more energy-efficient practices in my department and participate in the university's sustainability committee discussions.",
    icon: "zap",
    color: "sdg-7",
    goals: [
      "Establish Energy Monitors program in CITE department",
      "Reduce computer lab energy consumption by 15%",
      "Propose 3 energy efficiency improvements to the department"
    ],
    impact: "Decreasing departmental energy usage and promoting energy consciousness among students",
    timeline: "Program establishment within first month of semester"
  },
  {
    id: 8,
    title: "Decent Work & Economic Growth",
    shortDescription: "Supporting entrepreneurship and skill development at BU",
    longDescription: "I commit to participating in BU's student entrepreneurship programs, helping organize the annual career fair, and creating a skill-sharing network among students to prepare us better for professional opportunities after graduation.",
    icon: "briefcase",
    color: "sdg-8",
    goals: [
      "Active participation in BU's entrepreneurship seminars",
      "Volunteer 10 hours for the annual BU career fair",
      "Establish a CITE department skill-sharing program"
    ],
    impact: "Enhancing professional preparedness for 50+ students and strengthening BU's career development initiatives",
    timeline: "Year-round activities with focus on pre-graduation periods"
  },
  {
    id: 9,
    title: "Industry, Innovation & Infrastructure",
    shortDescription: "Contributing to technological innovation at Bicol University",
    longDescription: "As a CS student, I pledge to develop an open-source application to address a specific campus need, participate in BU's innovation competitions, and collaborate with other departments on cross-disciplinary tech projects that improve university infrastructure.",
    icon: "factory",
    color: "sdg-9",
    goals: [
      "Develop one campus-focused open-source application annually",
      "Participate in BU's technology innovation challenge",
      "Initiate one cross-department collaboration project"
    ],
    impact: "Creating practical technology solutions for campus needs and fostering innovation culture at BU",
    timeline: "One major project per academic year with continuous improvements"
  },
  {
    id: 10,
    title: "Reduced Inequalities",
    shortDescription: "Working to reduce digital and social divides at Bicol University",
    longDescription: "I commit to volunteering with BU's programs for students from disadvantaged backgrounds, organizing basic computer literacy workshops for community members, and advocating for improved accessibility features on campus for students with disabilities.",
    icon: "equal",
    color: "sdg-10",
    goals: [
      "Volunteer 2 hours weekly with accessibility support services",
      "Conduct 5 basic computer literacy workshops per semester",
      "Audit and recommend improvements for campus accessibility"
    ],
    impact: "Reducing digital divide for 30+ community members and improving campus accessibility",
    timeline: "Weekly volunteer work with monthly workshops"
  },
  {
    id: 11,
    title: "Sustainable Cities & Communities",
    shortDescription: "Promoting sustainability in Bicol University campus and surrounding areas",
    longDescription: "I pledge to actively participate in BU's campus beautification initiatives, join community planning discussions with student government, and advocate for sustainable transportation options like bike-sharing and carpooling programs for students.",
    icon: "building",
    color: "sdg-11",
    goals: [
      "Participate in monthly campus beautification activities",
      "Attend all student government sustainability meetings",
      "Organize one carpooling network for students in my neighborhood"
    ],
    impact: "Contributing to a more sustainable, livable campus environment for the BU community",
    timeline: "Regular monthly activities with one major initiative per semester"
  },
  {
    id: 12,
    title: "Responsible Consumption & Production",
    shortDescription: "Reducing waste and promoting responsible consumption at BU",
    longDescription: "I commit to organizing e-waste collection drives in the CITE department, practicing zero-waste principles in my daily campus life, and creating awareness campaigns about reducing single-use plastics in the university canteens and events.",
    icon: "recycle",
    color: "sdg-12",
    goals: [
      "Organize semestral e-waste collection for proper recycling",
      "Reduce personal waste to maximum 1 small bag weekly",
      "Launch 'Bring Your Own Container' campaign in BU canteens"
    ],
    impact: "Proper disposal of harmful e-waste and reduction of single-use items on campus",
    timeline: "Daily personal practice with semestral organized activities"
  },
  {
    id: 13,
    title: "Climate Action",
    shortDescription: "Taking climate action within Bicol University community",
    longDescription: "I pledge to organize educational sessions about climate change impacts on Bicol Region, participate in the university's tree-planting initiatives, and create a digital carbon footprint calculator specifically for BU students to raise awareness.",
    icon: "cloud",
    color: "sdg-13",
    goals: [
      "Lead 2 climate education sessions per semester",
      "Plant 10 trees per semester through BU's forestry program",
      "Develop and promote BU student carbon footprint calculator"
    ],
    impact: "Increasing climate awareness among 200+ students and contributing to campus carbon offset efforts",
    timeline: "Regular activities throughout academic year with special focus during Earth Month"
  },
  {
    id: 14,
    title: "Life Below Water",
    shortDescription: "Contributing to marine conservation efforts near Bicol University",
    longDescription: "I commit to participating in coastal clean-up drives in nearby Legazpi beaches, supporting BU Marine Science department's awareness campaigns, and reducing my use of plastics that could end up in our local waters.",
    icon: "fish",
    color: "sdg-14",
    goals: [
      "Participate in 4 coastal clean-ups annually",
      "Assist Marine Science department with 2 events per year",
      "Eliminate single-use plastic water bottles from my daily routine"
    ],
    impact: "Contributing to cleaner coastal areas and raising awareness about marine conservation",
    timeline: "Quarterly clean-ups with ongoing plastic reduction"
  },
  {
    id: 15,
    title: "Life on Land",
    shortDescription: "Supporting biodiversity and ecosystem protection around BU",
    longDescription: "I pledge to volunteer with BU's botanical garden maintenance, participate in Mayon Volcano natural park conservation activities, and help document local flora and fauna through the Biology department's citizen science initiatives.",
    icon: "trees",
    color: "sdg-15",
    goals: [
      "Volunteer 4 hours monthly at BU botanical garden",
      "Join 2 Mayon conservation activities annually",
      "Contribute 20 local species observations to biodiversity database"
    ],
    impact: "Supporting ecosystem health and biodiversity documentation in the Bicol region",
    timeline: "Monthly garden work with seasonal conservation activities"
  },
  {
    id: 16,
    title: "Peace, Justice & Strong Institutions",
    shortDescription: "Promoting ethical governance and peace at Bicol University",
    longDescription: "I commit to active participation in BU's student government elections, organizing ethics discussions in my BSCS program, and volunteering with the university's conflict resolution peer counseling program.",
    icon: "scale",
    color: "sdg-16",
    goals: [
      "100% participation in all student government elections",
      "Organize 2 ethics discussions per semester for BSCS students",
      "Complete peer counseling training and volunteer 2 hours weekly"
    ],
    impact: "Strengthening democratic participation and ethical awareness in the BU community",
    timeline: "Ongoing with heightened activity during election periods"
  },
  {
    id: 17,
    title: "Partnerships for the Goals",
    shortDescription: "Building collaborations to advance SDGs at Bicol University",
    longDescription: "I pledge to connect BU student organizations working on different SDGs for collaborative projects, facilitate partnerships between my department and local tech companies for sustainability initiatives, and organize a multi-stakeholder SDG forum with university and community participants.",
    icon: "handshake",
    color: "sdg-17",
    goals: [
      "Connect 3+ student organizations for collaborative SDG projects",
      "Establish 1 department-industry partnership for sustainability",
      "Organize annual BU SDG forum with diverse stakeholders"
    ],
    impact: "Creating synergies between different SDG efforts and strengthening university-community-industry collaboration",
    timeline: "Ongoing networking with annual forum event"
  }
];
