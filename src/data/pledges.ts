
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
    shortDescription: "My pledge to contribute to ending poverty in all its forms everywhere",
    longDescription: "I commit to donating 5% of my income to effective charities that combat extreme poverty. I will also volunteer monthly with local organizations that provide direct support to homeless individuals in my community.",
    icon: "activity",
    color: "sdg-1",
    goals: [
      "Monthly donations to GiveDirectly",
      "Weekly volunteer work at local shelter",
      "Advocate for policy change through letters to representatives"
    ],
    impact: "Supporting approximately 10 families per year through direct cash transfers, and providing 200+ volunteer hours",
    timeline: "Ongoing, with quarterly assessment of impact"
  },
  {
    id: 2,
    title: "Zero Hunger",
    shortDescription: "My commitment to help end hunger and promote sustainable agriculture",
    longDescription: "I pledge to reduce food waste in my household by 75%, support local farmers through regular farmers market shopping, and participate in community garden initiatives to grow fresh produce for food banks.",
    icon: "wheat",
    color: "sdg-2",
    goals: [
      "Reduce personal food waste by 75%",
      "Purchase 60% of groceries from local farmers",
      "Donate 50+ hours to community garden projects" 
    ],
    impact: "Reduction of approximately 300kg of food waste annually, and contributing to local food systems",
    timeline: "12-month implementation with monthly tracking"
  },
  {
    id: 3,
    title: "Good Health & Well-being",
    shortDescription: "My pledge to ensure healthy lives and promote well-being for all",
    longDescription: "I commit to promoting mental health awareness through organizing quarterly workshops in my community, supporting healthcare initiatives for underserved populations, and maintaining a healthy lifestyle that can inspire others.",
    icon: "heart-pulse",
    color: "sdg-3",
    goals: [
      "Organize 4 mental health workshops per year",
      "Regular blood donation every 3 months",
      "Promote vaccination and health education",
    ],
    impact: "Reaching 200+ people through workshops and contributing to community health initiatives",
    timeline: "Ongoing with annual expansion of reach"
  },
  {
    id: 4,
    title: "Quality Education",
    shortDescription: "My commitment to ensure inclusive and equitable quality education",
    longDescription: "I pledge to tutor underprivileged students in mathematics and science for 5 hours weekly, donate educational materials to schools in need, and advocate for expanded educational opportunities in my community.",
    icon: "book-open",
    color: "sdg-4",
    goals: [
      "Provide 250+ hours of free tutoring annually",
      "Donate educational resources worth $500",
      "Mentor 3 at-risk students each semester"
    ],
    impact: "Directly supporting 15+ students annually with measurable improvement in academic performance",
    timeline: "School-year cycle with summer intensive programs"
  },
  {
    id: 5,
    title: "Gender Equality",
    shortDescription: "My pledge to achieve gender equality and empower all women and girls",
    longDescription: "I commit to actively promoting gender equality in my workplace by advocating for equal pay and opportunities, supporting women-owned businesses with at least 30% of my purchases, and volunteering with organizations that empower young women.",
    icon: "users",
    color: "sdg-5",
    goals: [
      "Advocate for gender-balanced hiring practices",
      "Support 10+ women-owned businesses regularly",
      "Mentor 5 young women in STEM fields"
    ],
    impact: "Contributing to systemic change in workplace policies and supporting women's economic empowerment",
    timeline: "Ongoing with quarterly assessment"
  },
  {
    id: 6,
    title: "Clean Water & Sanitation",
    shortDescription: "My commitment to ensure availability and sustainable management of water",
    longDescription: "I pledge to reduce my household water consumption by 30%, participate in local water conservation initiatives, and support organizations providing clean water access in developing countries through monthly donations.",
    icon: "droplets",
    color: "sdg-6",
    goals: [
      "Reduce personal water usage by 30%",
      "Participate in 3 watershed cleanup events annually",
      "Fund 2 water projects in developing communities"
    ],
    impact: "Saving approximately 15,000 gallons of water annually and supporting global water access",
    timeline: "24-month transformation with biannual reviews"
  },
  {
    id: 7,
    title: "Affordable & Clean Energy",
    shortDescription: "My pledge to ensure access to affordable, reliable, sustainable energy",
    longDescription: "I commit to transitioning my home to 100% renewable energy sources, reducing my energy consumption by 40% through efficiency measures, and advocating for community solar projects in my neighborhood.",
    icon: "zap",
    color: "sdg-7",
    goals: [
      "Switch to 100% renewable electricity",
      "Install energy-efficient appliances throughout home",
      "Reduce energy consumption by 40% through behavior changes"
    ],
    impact: "Reducing carbon footprint by approximately 5 tons of CO2 annually",
    timeline: "18-month transition period"
  },
  {
    id: 8,
    title: "Decent Work & Economic Growth",
    shortDescription: "My commitment to promote sustainable economic growth and decent work",
    longDescription: "I pledge to support fair trade products with at least 50% of my purchases, mentor young entrepreneurs from disadvantaged backgrounds, and advocate for living wages and ethical business practices in my professional network.",
    icon: "briefcase",
    color: "sdg-8",
    goals: [
      "Increase fair trade purchases to 50% of total",
      "Mentor 3 entrepreneurs from marginalized communities",
      "Advocate for living wage policies in business associations"
    ],
    impact: "Supporting ethical supply chains and creating economic opportunities for underrepresented groups",
    timeline: "Ongoing with annual expansion goals"
  },
  {
    id: 9,
    title: "Industry, Innovation & Infrastructure",
    shortDescription: "My pledge to build resilient infrastructure and foster innovation",
    longDescription: "I commit to developing open-source technology solutions for community challenges, investing in sustainable infrastructure projects, and promoting digital literacy in underserved communities through skills workshops.",
    icon: "factory",
    color: "sdg-9",
    goals: [
      "Create 2 open-source tools for community use",
      "Teach digital skills to 50+ individuals annually",
      "Advocate for sustainable infrastructure development"
    ],
    impact: "Bridging the digital divide for vulnerable populations and supporting community innovation",
    timeline: "3-year development roadmap"
  },
  {
    id: 10,
    title: "Reduced Inequalities",
    shortDescription: "My commitment to reduce inequality within and among communities",
    longDescription: "I pledge to actively advocate for inclusive policies in my workplace and community, support organizations focused on social justice, and educate myself and others about systemic inequality and privilege.",
    icon: "equal",
    color: "sdg-10",
    goals: [
      "Complete 12 educational workshops on social justice",
      "Advocate for inclusive policies in 3 organizations",
      "Allocate 10% of charitable giving to equality-focused nonprofits"
    ],
    impact: "Contributing to more inclusive institutions and raising awareness about inequality",
    timeline: "Ongoing commitment with annual learning objectives"
  },
  {
    id: 11,
    title: "Sustainable Cities & Communities",
    shortDescription: "My pledge to make cities inclusive, safe, resilient and sustainable",
    longDescription: "I commit to advocating for affordable housing initiatives, supporting public transportation and walkable communities, and participating in urban greening projects to improve quality of life in my city.",
    icon: "building",
    color: "sdg-11",
    goals: [
      "Plant 20 trees in urban areas annually",
      "Reduce personal car usage by 50%",
      "Participate in 5 community development meetings yearly"
    ],
    impact: "Contributing to urban sustainability and inclusive community development",
    timeline: "Ongoing with quarterly community service"
  },
  {
    id: 12,
    title: "Responsible Consumption & Production",
    shortDescription: "My commitment to ensure sustainable consumption and production patterns",
    longDescription: "I pledge to adopt a near-zero waste lifestyle, with 90% reduction in personal waste generation, prioritize repairable and sustainable products, and educate others about conscious consumption through workshops and social media.",
    icon: "recycle",
    color: "sdg-12",
    goals: [
      "Reduce personal waste to less than 1 lb per week",
      "Eliminate single-use plastics from household",
      "Repair or repurpose 90% of potentially discarded items"
    ],
    impact: "Preventing approximately 1,500 pounds of waste from entering landfills annually",
    timeline: "2-year transition to near-zero waste"
  },
  {
    id: 13,
    title: "Climate Action",
    shortDescription: "My pledge to take urgent action to combat climate change and its impacts",
    longDescription: "I commit to reducing my carbon footprint by 70% through lifestyle changes, supporting climate advocacy organizations, and engaging in climate education and outreach in my community and workplace.",
    icon: "cloud",
    color: "sdg-13",
    goals: [
      "Reduce personal carbon footprint by 70%",
      "Participate in 6 climate advocacy events annually",
      "Educate 100+ people about climate solutions"
    ],
    impact: "Preventing approximately 10 tons of CO2 emissions annually through personal action and influence",
    timeline: "5-year comprehensive climate action plan"
  },
  {
    id: 14,
    title: "Life Below Water",
    shortDescription: "My commitment to conserve and sustainably use oceans and marine resources",
    longDescription: "I pledge to eliminate my consumption of unsustainable seafood, participate in coastal cleanup initiatives, reduce plastic usage by 95%, and support marine conservation organizations through volunteering and donations.",
    icon: "fish",
    color: "sdg-14",
    goals: [
      "Participate in 4 coastal cleanup events annually",
      "Eliminate consumption of red-listed seafood",
      "Reduce plastic usage by 95%"
    ],
    impact: "Removing approximately 200 pounds of ocean plastic annually and promoting sustainable marine ecosystems",
    timeline: "Ongoing with seasonal cleanup events"
  },
  {
    id: 15,
    title: "Life on Land",
    shortDescription: "My pledge to protect, restore and promote sustainable use of terrestrial ecosystems",
    longDescription: "I commit to supporting reforestation and biodiversity conservation through volunteer work, adopting a plant-rich diet to reduce environmental impact, and creating wildlife habitat in my garden and community.",
    icon: "trees",
    color: "sdg-15",
    goals: [
      "Plant 50 native trees and plants annually",
      "Increase plant-based meals to 80% of diet",
      "Convert 100% of lawn to wildlife-supporting habitat"
    ],
    impact: "Creating habitat for local wildlife and reducing land-use impact of personal consumption",
    timeline: "3-year habitat transformation plan"
  },
  {
    id: 16,
    title: "Peace, Justice & Strong Institutions",
    shortDescription: "My commitment to promote peaceful and inclusive societies for sustainable development",
    longDescription: "I pledge to actively participate in democratic processes, support transparency and anti-corruption initiatives, and volunteer with organizations that provide legal aid to underserved communities.",
    icon: "scale",
    color: "sdg-16",
    goals: [
      "Vote in all elections and contact representatives monthly",
      "Volunteer 100 hours annually with legal aid organizations",
      "Support 3 transparency/anti-corruption initiatives"
    ],
    impact: "Strengthening democratic participation and increasing access to justice for vulnerable populations",
    timeline: "Ongoing civic engagement with election-cycle intensity"
  },
  {
    id: 17,
    title: "Partnerships for the Goals",
    shortDescription: "My pledge to strengthen the means of implementation and revitalize global partnership",
    longDescription: "I commit to connecting diverse stakeholders working on sustainability challenges, supporting international cooperation through conscious consumerism and advocacy, and sharing resources and knowledge across my professional and personal networks.",
    icon: "handshake",
    color: "sdg-17",
    goals: [
      "Connect 10+ organizations working on complementary SDGs",
      "Share SDG resources through professional network",
      "Host 2 partnership-building events annually"
    ],
    impact: "Facilitating collaboration that amplifies SDG progress across sectors and borders",
    timeline: "Ongoing network development with annual expansion"
  }
];
