// dropdown button below

// $('.dropbtn').on('click', function (e) {
//       e.preventDefault();
//   $('.dropdown-content').toggleClass('activeX');
  

// });

// end dropdown button


$(document).ready(function(){

    $(".fade").hide(0).delay(100).fadeIn(200);
    // (".hero").delay(200).addClass('animated fadeInDown')
    $(".conf-logo").delay(300).addClass('animated fadeInDown');
    $(".location").delay(300).addClass('animated fadeInLeft');
    $(".ctas").delay(350).addClass('animated fadeInUp');
    $(".nineteen").delay(350).addClass('animated fadeInUp');


    // $(function(){
    //    function show_popup(){
    //       $(".nineteen").slideUp();
    //    };
    //    window.setTimeout( show_popup, 5000 ); // 5 seconds
    // });

});





var speakers = [
{
  firstname: 'Jack',
  lastname: 'Dangermond',
  displayname: 'Jack Dangermond',
  title: 'Founder and President',
  company: 'Esri',
  panel: 'The Future of Market Analysis: A Conversation with Jack Dangermond | Monday, Oct. 14 at 8:30 a.m.',
  bio1: 'A landscape architect by training, Jack Dangermond founded Environmental Systems Research Institute (Esri) in 1969 with a vision that computer mapping and analysis could help us design a better future. Under Dangermond\'s leadership, that vision has continued to guide Esri in creating cutting-edge GIS and Geodesign technologies used in every industry to make a difference worldwide. Dangermond fostered the growth of Esri from a small research group to an organization recognized as the world leader in GIS software development. Esri employs more than 4,000 people worldwide; many who shared his passion for GIS in the early days are still with the company and remain dedicated to helping Esri users be successful.',
  bio2: '',
  special: 'Keynote Address'
},

{
  firstname: 'Carmela',
  lastname: 'Ma',
  displayname: 'Carmela Ma, CCIM',
  title: 'President',
  company: 'CJM Associates, Inc.',
  title2: 'Senior Instructor',
  company2: 'CCIM Institute',
  panel: 'Cross-Border Investment Primer | Monday, Oct. 14 at 9:45 a.m.',
  bio1: 'Carmela Ma, CCIM, is President/CEO of CJM Associates, Inc., which specializes in real estate investment, advisement, and global transactions. She has conducted business in more than 30 countries, including projects in Asia, Africa, Europe, and the Americas.',
  bio2: 'Educated at the University of Southern California and the University of Hong Kong, Ma regularly speaks at conferences and real estate events around the world.  She has been a senior instructor at CCIM Institute since 1994 and she has also held several faculty and committee positions with the National Association of REALTORS®. In 2009 Ma was awarded “Women at the Top” award Commercial Real Estate Women (CREW) and was named a World Top Broker by the Real Estate Global Summit.',
  special: ''
},
{
  firstname: 'Laura',
  lastname: 'Cataldo',
  displayname: 'Laura Cataldo',
  title: 'Senior Manager, Construction & Real Estate Services',
  company: 'Baker Tilly',
  panel: 'Succession Planning: Your Legacy and the Workforce of the Future | Monday, Oct. 14 at 1 p.m.',
  bio1: 'Laura Cataldo, senior manager with Baker Tilly, joined the firm in 2017. Cataldo works with real estate and construction firms of all sizes to evaluate business practices and assist with management challenges. Having worked in the real estate and construction industry for almost 25 years, she offers a depth of experience working with management teams to improve profitability and succeed in the changing marketplace. Cataldo excels at working with dynamic and demanding environments that require relationship building, versatility and challenge. She is a member of AGC’s Industry Recruitment Taskforce and is the Board Chair-Elect for the Workforce Development Board of South Central Wisconsin.',
    bio2: '',
  special: ''
},
{
  firstname: 'KC',
  lastname: 'Conway',
  displayname: 'K.C. Conway, MAI, CRE',
  title: 'Chief Economist',
  company: 'CCIM Institute',
  title2: 'Director of Research',
  company2: 'Alabama Center for Real Estate at The University of Alabama',
  panel: 'Preparing for a Market Correction: Exploring Exposure Risk | Monday, Oct. 14 at 2:25 p.m.',
  bio1: 'CCIM Institute Chief Economist Kiernan “K.C.” Conway is the director of research and corporate engagement at the Alabama Center for Real Estate (ACRE) housed within the University of Alabama\'s Culverhouse College of Business. Conway is a frequent speaker for the Federal Reserve, FDIC, FHLB, state bank commissioners, academic groups, professional organizations, and industry associations. He previously served as chief economist for Colliers International - US.',
  bio2: 'In addition to being a frequent lecturer at international conferences, Conway has consulted with major governmental agencies, most notably briefing former Federal Reserve Chairman Ben Bernanke and the Board of Governors on the burgeoning subprime lending and housing crisis and its impact on the commercial real estate industry.',
  special: ''
},
{
  firstname: 'Camille',
  lastname: 'Renshaw',
  displayname: 'Camille Renshaw, CCIM',
  title: 'CEO and Co-Founder',
  company: 'B+E',
  panel: 'Campfire Sessions: Lessons from CCIM Women of Influence | Monday, Oct. 14 at 1 p.m. <br><b>Session:</b> Innovation and Inclusion: Future-Proofing Your Commercial Real Estate Business | Monday, Oct. 14 at 2:55 p.m.',
  bio1: 'Camille Renshaw, CCIM, is the CEO and co-founder of B+E, the first tech-driven brokerage and trading platform for net lease real estate. B+E’s trading platform consists of user-friendly dashboards, real-time predictive pricing and an AI-driven exchange — all leveraging the largest data set in the industry. Buyers and sellers can conduct entire transactions online, reviewing real-time credit, news, and tenant data while they trade, much like online stock trading platforms. Prior to B+E, Renshaw was Head of Sales for Ten-X (a Google Capital company), a leading online marketplace for commercial real estate with products such as Auction.com. Prior to Ten-X, she founded the Stan Johnson Company’s New York office where she led their sales team as its top producer for five years.  Before this, she was Director of the US Capital Markets division of Colliers International and a Top 40 Worldwide Producer. Renshaw originally entered commercial real estate as an owner, after founding Dyzco Technologies and successfully selling it to American Financial Services Corp, Inc.',
  bio2: 'Renshaw was recently honored as a 2019 Real Estate Forum Women of Influence award recipient for achievement in innovation, selected from a record-breaking 350 submissions.  Since 1983, the Women of Influence award has recognized remarkable commercial real estate professionals who have significantly influenced the market or had outstanding successes in the past year.',
  special: ''
},
{
  firstname: 'Kenisha',
  lastname: 'Robnett',
  displayname: 'Kenisha Robnett, CCIM',
  title: 'Executive Vice President, Commercial',
  company: 'RE/MAX Platinum Access',
  title2: 'Workshop Leader',
  company2: 'CCIM Institute',
  panel: 'Capitalizing on Cannabis: Preparing for Legalization in Your Market | Monday, Oct. 14 at 9:45 a.m.',
  bio1: 'Kenisha Robnett, CCIM, is the Executive Vice President of Commercial at RE/MAX Platinum Access, with years of Real Estate Experience and a Master\'s Degree in Real Estate Development. She is currently on the Board of Directors for the Georgia CCIM Chapter over University Outreach and Scholarships. Robnett is serving as a 2019 Diversity Mentor for the Atlanta Commercial Board and she is a Business Broker, and a member of both the commercial and residential boards. ',
  bio2: 'Robnett has managed over 44 million square feet of Walmart Real Estate, assisted with new store development, lease negotiations, and selling excess land. She now represents numerous corporate clients and private investors with acquisitions, dispositions, lease negotiations, and development, as they build their real estate portfolios in retail, land, multifamily, restaurant, office, warehouse, flex space, and more.',
  special: ''
},
{
  firstname: 'Darrel',
  lastname: 'Fullbright',
  displayname: 'Darrel Fullbright, AIA, LEED GA',
  title: 'Principal and Design Director',
  company: 'Gensler',
  panel: 'A Closer Look: The Impact of Autonomous Vehicles | Monday, Oct. 14 at 1 p.m.',
  bio1: 'Darrel Fullbright is Gensler’s Firmwide Office Building Practice Area Leader and Principal in the San Diego office. Fullbright leads the firm’s global experts in the strategic planning and exploration of office design and its impact on development. A true client partner and advocate, he leads projects of various types and sizes, and has built a strong reputation as a strategic thinker in the real estate industry by helping his clients grow their commercial office portfolios. Fullbright has designed more than 3-million-square-feet of commercial office, life science, hospitality, and government projects. His vision is to create compelling and purposeful architecture focused on improving his clients’ business operations. Fullbright’s leadership has been recognized through design awards from the AIA, BOMA International, and Contract Magazine.',
  bio2: '',
  special: ''
},
{
  firstname: 'Chris',
  lastname: 'Lo',
  displayname: 'Chris Lo',
  title: 'Director, Los Angeles',
  company: 'Hong Kong Trade Development Council',
  panel: 'Global Connections Luncheon Keynote | Sunday, Oct. 13 at 12:15 p.m.',
  bio1: 'As Director of the Hong Kong Trade Development Council (HKTDC) in the West Coast, Chris Lo leads Hong Kong’s trade promotion programs and operations in the region, and he is responsible for facilitating enterprises in the United States to invest, trade and do business in Asia through partnership with Hong Kong.',
  bio2: 'Lo joined the HKTDC in 2000 and has proven experience in directing trade and investment promotion for various prioritized manufacturing sectors, financial services, tech commercialization, infrastructure investment as well as real estate-related services. He was posted to the HKTDC Paris Office from 2005-07 as Marketing Manager. Prior to his current role, Lo led HKTDC’s promotional program for Hong Kong’s creative industries including design, advertising and marketing services, and was actively engaged in capacity building program for mainland Chinese enterprises to upgrade and transform.',
  special: ''
},
{
  firstname: 'Jeff',
  lastname: 'Engelstad',
  displayname: 'Jeff Engelstad, Ph.D, FRICS, CCIM',
  title: 'Professor of the Practice, Daniels College of Business',
  company: 'University of Denver',
  title2: 'Senior Instructor',
  company2: 'CCIM Institute',
  panel: 'Beyond the Core: CCIM Institute’s Other Professional Development Resources | Monday, Oct. 14 at 9:45 a.m. <br><b>Session:</b> Splitting Profits in Commercial Real Estate | Monday, Oct. 14 at 1 p.m.',
  bio1: 'Jeff Engelstad Ph.D, FRICS, CCIM, is a professor at the University of Denver and has been active in commercial and investment real estate since 1980. In his capacity as professor, he has published articles in the area of real estate finance and investment and feasibility analysis.',
  bio2: 'Engelstad has been a CCIM Institute instructor since 2007. He has served as a director of the Colorado Association of Realtors® and as a director of NAIOP Colorado. Engelstad was awarded REALTOR® of the Year in 2001 and the 1996 Presidents Distinguished Service Award by the Aurora Association of REALTORS®. ',
  special: ''
},
{
  firstname: 'Bo',
  lastname: 'Barron',
  displayname: 'Bo Barron, CCIM',
  title: 'CEO and Managing Director',
  company: 'Barron Commercial Group',
  title2: 'Workshop Leader',
  company2: 'CCIM Institute',
  panel: 'Advanced Prospecting: Learn How to Leverage Storytelling to Win More Business | Monday, Oct. 14 at 9:45 a.m.',
  bio1: 'Bo Barron, CCIM, is the CEO and Managing Director of Barron Commercial Group. After five years of serving in the Marine Corps, Barron started working for his father at Wm. G. Barron Enterprises as a commercial real estate advisor, becoming the 3rd generation of his family to practice real estate. In October 2010, he purchased the brokerage company from his father and became managing director and owner. In 2013, he accepted a position as Vice President of Organizational Development with SVN International Corporation where he was responsible for growing the productivity and production of SVN advisors nationwide. Barron then worked for three years as COO of The Massimo Group, the leading coaching firm for the nation’s top real estate professionals. After an incredible experience with that team, he returned to lead the family business and rebranded it as Barron Commercial Group.',
  bio2: '',
  special: ''
},
{
  firstname: 'Barbara',
  lastname: 'Crane',
  displayname: 'Barbara Crane, CCIM',
  title: '2019 President and Senior Instructor',
  company: 'CCIM Institute',
  panel: 'Campfire Sessions: Lessons from CCIM Women of Influence | Monday, Oct. 14 at 1 p.m.',
  bio1: '2019 CCIM Institute President Barbara Crane, CCIM, also serves as the immediate past president of CCIM Foundation, an affiliate of CCIM Institute that raises funds for scholarships, and as a CCIM senior instructor. In addition, she is an independent broker in San Antonio, specializing in the sale and leasing of office properties and related development and consulting projects. During her 40 years in commercial real estate, Crane has worked on general brokerage, agency leasing services for property owners, tenant representation, and consultation for her clients – including small businesses, law firms, large corporate users, developers, and the Federal Reserve Bank – representing several million square feet of office space.',
  bio2: 'As a CCIM senior instructor, Crane belongs to an elite group of faculty with practical knowledge of the commercial real estate profession who are grooming the next generation of CRE professionals. For many years, she has helped to write new material for existing CCIM Institute’s core designation courses. During the last few years, Crane has assisted in developing the institute’s blended learning courses, which combine online and classroom study to accommodate busy students’ lives. Among many industry awards, Crane has received the “40 Women in Real Estate” award in 2017 from Connect Media; “Women of Influence” Award in 2013 from Real Estate Forum magazine; and the CCIM Institute “Robert L. Ward Instructor of the Year” Award in 2010. Her love of teaching springs from a mentor who helped her learn and grow. Crane wants to give her students the confidence to do new things and succeed in the commercial real estate profession.',
  special: ''
},
{
  firstname: 'Renee',
  lastname: 'Savage',
  displayname: 'Renee Savage, CCIM, CPM',
  title: 'President',
  company: 'Capital Growth Properties',
  panel: 'Campfire Sessions: Lessons from CCIM Women of Influence | Monday, Oct. 14 at 1 p.m.',
  bio1: 'As president of Capital Growth Properties, Renee Savage, with more than 30 years of experience in property management, is responsible for the risk management, strategic direction and overall operation of the firm. She leads CGP’s 40+ team members in the management of more than 110 commercial & residential properties totaling over 2.2 million square feet throughout San Diego County.',
  bio2: 'Savage has been actively involved in the property management industry. She is a past president of IREM San Diego, started and chairs the Student Outreach Committee in San Diego and currently serves as a senior vice president with IREM International. IREM has honored Savage with the CPM of the Year (2006), the Presidential Achievement Award (2009), and the Exceptional Contribution Award (2014) and officially recognized her as a “Woman Changing the World of Real Estate Management” in 2013. Savage is also a past president of the San Diego County Apartment Association and was honored with the President’s Award (1999) and Industry Achievement Award (2007). In 2019 Savage was the Gold winner of the Woman of Influence award for Property Management by GlobeSt.com. Savage is attempting to change the world of real estate management even further by passing on her knowledge and experience to others through teaching and mentoring. She has returned to her alma mater, the University of San Diego, where she earned a Bachelor of Science in Business Administration, to teach the Property Management course in the Master of Science in Real Estate program offered through USD’s Burnham Moore Center.',
  special: ''
},
{
  firstname: 'Helen',
  lastname: 'Thompson',
  displayname: 'Helen Thompson',
  title: 'Global Marketing Strategy Manager in Real Estate, Banking and Insurance',
  company: 'Esri',
  panel: 'The Power of Story Maps to Enhance Your Site Appeal | Monday, Oct. 14 at 11 a.m.',
  bio1: 'Helen Thompson is the global marketing strategy manager for real estate, banking and insurance for Esri Inc. A recognized thought leader, keynote speaker and expert on location-based data and spatial analysis, Thompson believes that to do intelligent business, the real estate industry first needs to be location intelligent. With more than 30 years’ experience in applying spatial analysis and data to market and tenant analysis, she has helped thousands of companies find new market opportunities by developing a better understanding of people and place.',
  bio2: 'Thompson is an advocate for advancing analytics and geographic literacy. While every twenty-first century dataset contains location, most businesses remain blind to the value and importance of geographic decision-making. The future of smart cities, drone delivery, autonomous vehicles, IoT, big data and e-commerce relies on our ability to develop better ways of making sense of the world and the changes brought by technology and digital transformation.',
  special: ''
},
{
  firstname: 'Mark',
  lastname: 'Vanark',
  displayname: 'Mark Van Ark, CCIM, SIOR',
  title: 'Director of Commercial Real Estate',
  company: 'KW Commercial Real Estate',
  title2: 'Senior Instructor',
  company2: 'CCIM Institute',
  panel: 'Beyond the Core: CCIM Institute’s Other Professional Development Resources | Monday, Oct. 14 at 11 a.m.',
  bio1: 'Mark Van Ark, CCIM, SIOR, is commercial director of KW Commercial in Boulder, Colo. A native of Boulder, CO, he first obtained his real estate license in 1969, and began learning the business while assisting in the family-owned real estate projects. Van Ark’s real estate business was placed on hold while he worked in the field of law enforcement from 1970-1980. During this period, he earned his undergraduate degree in both criminal justice, as well as real estate. His professional experience included working with the Boulder County Sheriff’s Department as an investigator, as well as a three-year undercover and intelligence assignment with the Drug Enforcement Administration’s (DEA) Denver office.',
  bio2: 'Van Ark has over thirty years of real estate experience in the commercial and investment field. Van Ark has broad experience in investment sales, office and industrial leasing, land sales and development, including multi-family projects and consulting. As a senior instructor for the CCIM Institute, Van Ark has trained real estate professionals both domestically as well as internationally. These training assignments have included such international locations as Taipei, Tokyo, Warsaw, Moscow and St. Petersburg.',
  special: ''
},
// {
//   firstname: 'Mark',
//   lastname: 'Cypert',
//   displayname: 'Mark Cypert, CCIM',
//   title: 'Partner',
//   company: 'Middleton Partners',
//   title2: 'Senior Instructor',
//   company2: 'CCIM Institute',
//   panel: 'The Future of Market Analysis: A Conversation with Jack Dangermond | Monday, Oct. 14 at 8:30 a.m.',
//   bio1: 'Mark Cypert, CCIM, is a partner with Middleton Partners, a private equity investment firm specializing in creating value in properties through acquiring, developing, leasing, managing, and repositioning quality properties in targeted markets. During his career, he has participated in 16.9 million square feet of office, industrial and retail acquisition and development ventures with a total market capitalization of $2.25 billion. Prior to joining Middleton, he was the chief investment officer and office division president for Encore Enterprises. Cypert also previously served as the managing director of Cawley Partners, where he directed the firm\'s commercial real estate investment funds, and as senior vice president of CRT Properties, a NYSE office REIT, where he oversaw operations for the firm\'s Southwestern and Mid-Atlantic regions.',
//   bio2: 'Cypert is an award-winning senior instructor for the CCIM Institute with a specialty focus on commercial property market analysis courses, which he teaches globally. He\'s a graduate of Texas Tech University with a degree in construction engineering technology. He holds the CCIM and RPA professional designations, and he is a licensed Texas real estate broker.',
//   special: ''
// },
{
  firstname: 'Todd',
  lastname: 'Kuhlmann',
  displayname: 'Todd Kuhlmann, CCIM',
  title: 'President/Founder',
  company: 'TheAnalyst PRO, a CRE Tech® company',
  title2: 'Senior Instructor',
  company2: 'CCIM Institute',
  panel: 'Cap Rate and Rent Setting: Analyzing a Proposed Development | Monday, Oct. 14 at 9:45 a.m.',
  bio1: 'Todd Kuhlmann, CCIM, has been in the commercial real estate industry over 28 years, closing over $1 billion in transactions. Kuhlmann is the founder and president of CRE Tech®, Inc., a technology company that developed TheAnalyst® PRO software platform to quickly perform investment, lease, location and demographic analysis on commercial real estate worldwide. Kuhlmann is a senior instructor for the CCIM Institute, teaching the 101 and 104 core courses, as well as the High Tech Marketing course for the CCIM Ward Center for Real Estate Studies.',
  bio2: '',
  special: ''
},
// {
//   firstname: 'Karl',
//   lastname: 'Landreneau',
//   displayname: 'Karl Landreneau, CCIM',
//   title: 'Director of Commercial Sales & Leasing',
//   company: 'NAI Latter & Blum',
//   title2: 'Senior Instructor',
//   company2: 'CCIM Institute',
//   panel: 'Cap Rate and Rent Setting: Analyzing a Proposed Development | Monday, Oct. 14 at 9:45 a.m.',
//   bio1: 'Karl Landreneau, CCIM, has been an active player in matters affecting commercial real estate in Louisiana for more than 16 years and is the current director of commercial sales and leasing for NAI Latter & Blum, part of Latter & Blum, Inc. — the largest independently-owned real estate firm in the Gulf South.',
//   bio2: 'Landreneau’s previous accomplishments include 2006 chair of the Commercial Business & Industry Team for the Louisiana Realtors Association (LREC), where he was recognized for his role in helping to create the first database of Louisiana commercial properties (LACDB) for commercial agents. He has served in multiple industry leadership positions, including past president of the Commercial Investment Division (CID) of East Baton Rouge Parish, 2006 graduate of the CCIM Jay Levine Leadership Academy, where he was awarded the Susan B. Groeneveld award, 2007 president of the Louisiana CCIM chapter, 2007 CCIM Region IV first vice-president, and 2009 CCIM presidential liaison. Landreneau is a current member of CCIM’s National Board of Directors. Since 2012, he has served in senior leadership positions within the organization, including first vice president, vice president, and was elected the 2014 president of the CCIM Institute.',
//   special: ''
// },
// {
//   firstname: 'Cynthia',
//   lastname: 'Shelton',
//   displayname: 'Cynthia Shelton, CCIM, CRE',
//   title: 'Senior Managing Director of Investments and Capital Markets',
//   company: 'LandQwest',
//   title2: 'Senior Instructor',
//   company2: 'CCIM Institute',
//   panel: 'Campfire Sessions: Lessons from CCIM Women of Influence | Monday, Oct. 14 at 1 p.m.',
//   bio1: 'Cynthia Shelton, CCIM, has extensive experience in the real estate industry since 1975, with a concentration on the disposition of retail investment properties, including grocery-anchored, power shopping centers, single-tenant, net leased (NNN) properties, and retail strip centers.',
//   bio2: 'Previously the director of investments sales for Colliers International, Shelton focused on acquisition and disposition services to private and institutional clients and distressed property lenders. She was also the former vice president of acquisitions for a NYSE Real Estate Investment Trust, where she acquired single tenant assets in excess of $300 million. Shelton has facilitated disposition and sale-leaseback services for tenants and owners, development and site selection, development; an unmatched contribution for sellers to help analyze, market, sell, and maximize asset value. Shelton stays abreast of capital market trends, which allow her to assist sellers and buyers with securing debt.',
//   special: ''
// },
// {
//   firstname: 'Sue',
//   lastname: 'Earnest',
//   displayname: 'Sue Earnest, CCIM',
//   title: 'Principal',
//   company: 'Avison Young Nashville',
//   panel: 'Campfire Sessions: Lessons from CCIM Women of Influence | Monday, Oct. 14 at 1 p.m.',
//   bio1: 'Sue Earnest, CCIM, specializes in assisting Fortune 500 companies, as well as owner-occupied properties, throughout Middle Tennessee with the leasing, acquisition and/or disposition of their real estate, with a focus on the sales and leasing of industrial and commercial properties. Her knowledge of the market, attention to detail, and strong work ethic have resulted in her success and representation of sales and leasing transactions.',
//   bio2: 'Prior to joining Avison Young\'s Nashville office, Sue was a principal and broker with Cushman & Wakefield | Cornerstone and previously Newmark Knight Frank. Sue was also vice president/affiliate broker for Hawkins Company Inc. (CORFAC International), where she spent six years in sales and leasing of commercial properties, both industrial parks and office buildings. Prior to entering the commercial real estate profession in 1999, Sue worked with National Material Company, a steel coil servicing company for ten years. Here she worked in inside sales, as well as implemented and manage the ISO 9000 standards program for their Middle Tennessee service center.',
//   special: ''
// },
// {
//   firstname: 'Eric',
//   lastname: 'Pollard',
//   displayname: 'Eric Pollard',
//   title: 'Commercial Services: Real Estate Practice Lead',
//   company: 'Esri',
//   panel: 'The Power of Story Maps to Enhance Your Site Appeal | Monday, Oct. 14 at 11 a.m.',
//   bio1: 'With 15 years of professional real estate and location intelligence experience, Eric Pollard serves as the real estate practice lead for Esri’s commercial services department out of Southern California. Prior to Esri, Pollard led multiple Fortune 500 companies in creating and operating market analysis and site selection systems, combining market intelligence and spatial analysis to better position fast-growing brands within regions across the world. Pollard founded and led a consultancy specializing in market analysis and site selection for real estate and retail companies while also working in land development analysis and tenant representation. While at Esri, Pollard has worked with dozens of Fortune 100 companies across many industries to better analyze their portfolio of locations, identify opportunity potential, optimize their growth strategies, and implement location intelligence systems.',
//   bio2: '',
//   special: ''
// },
// {
//   firstname: 'David',
//   lastname: 'Moore',
//   displayname: 'David Moore',
//   title: 'CEO and Co-Founder',
//   company: 'Equity Advantage',
//   panel: '1031 Tax-Deferred Exchange | Monday, Oct. 14 at 11 a.m.',
//   bio1: 'David Moore is chief executive officer of Equity Advantage, Incorporated, a nationally-recognized leader in 1031 Exchange facilitation. Moore founded Equity Advantage with his brother Tom in 1991 after a successful career in real estate investment. Since then, Equity Advantage has developed an outstanding reputation for partnering with their investment clients to develop unique strategies for the 1031 Exchange, reducing their clients’ tax risks and increasing the value of their property portfolios.',
//   bio2: 'Moore is a recognized 1031 Exchange expert and is regularly invited to share his knowledge with realtors, investors, attorneys and property owners through seminars and classes. He is a power sponsor of CCIM Institute and is a former board member of the Federation of Exchange Accommodators (FEA). Moore played an instrumental role in the FEA’s expansion throughout the Pacific Northwest and served as chairman of the FEA Ethics Committee. He is active in Rotary Club and serves on the boards of several charity organizations.',
//   special: ''
// },
{
  firstname: 'Chip',
  lastname: 'Watts',
  displayname: 'Chip Watts, CCIM, CPM',
  title: '2020 President-Elect',
  company: 'IREM',
  panel: 'Building Partnerships: Unlock the Value of Property Manager Referrals | Monday, Oct. 14 at 11 a.m.',
  bio1: 'Chip Watts, CCIM, CPM, is the 2020 president-elect of IREM (the Institute of Real Estate Management).  He is president and executive CPM for Watts Realty Co., Inc., AMO®, in Birmingham, Alabama. He started his real estate career in 1998 as general manager of Watts Realty, and earned his current title in 2006. During his tenure, he received the AMO accreditation on behalf of the company.',
  bio2: 'Watts earned his CPM designation in 2004 and his Certified Commercial Investment Member (CCIM) designation in 2002. He served as the 2008 president of IREM’s Alabama chapter and the 2009 president of the CCIM Institute’s Alabama chapter. Watts served for two years as an IREM regional vice president. He also chaired the IREM Chapter Leadership Forum, the AMO Taskforce, and has been a long-time member of the IREM Governing Council. Also in 2008, Watts was honored by the Birmingham Association of REALTORS® with its “REALTOR of the Year” award and served as its president in 2014. He also served as a trustee to the University of Alabama Center for Real Estate Board for ten years, happily wearing his Auburn orange and blue on the Alabama campus!',
  special: ''
},
// {
//   firstname: 'Eddie',
//   lastname: 'Blanton',
//   displayname: 'Eddie Blanton, CCIM',
//   title: '2019 President-Elect',
//   company: 'CCIM Institute',
//   title2: 'Principal and Senior Advisor',
//   company2: 'Tradd Commercial',
//   panel: 'Breakfast and Opening Remarks | Monday, Oct. 14 at 7:30 a.m.<br><b>Session:</b> Closing Reception | Monday, Oct. 14 at 3:15 p.m',
//   bio1: 'Eddie Blanton, CCIM, serves as a principal and senior advisor with Tradd Commercial’s Charlotte, North Carolina office. He began his commercial real estate career back in 1996. While initially operating as a leasing agent and property manager, he has since specialized in the areas of retail and investment brokerage. Blanton holds real estate broker licenses in both North and South Carolina. He was awarded the CCIM designation in May 2001. He currently serves on the North Carolina CCIM Chapter’s board as an ex-officio member, as he was the chapter’s president in 2010. He has served on the CCIM National Board of Directors since 2013 and serves as the CCIM Institute’s 2019 President-Elect.',
//   bio2: '',
//   special: ''
// },


]
var sponsors = [
  {
    sponsorname: 'NAI Global',
    sponsorlogo: 'nai-logo'
  },
  {
    sponsorname: 'Esri',
    sponsorlogo: 'esri-logo'
  },
  {
    sponsorname: 'RE/MAX',
    sponsorlogo: 'remax-logo'
  },
  {
    sponsorname: 'CoStar',
    sponsorlogo: 'costar-logo'
  },
  {
    sponsorname: 'National Association of Realtors (NAR) Commercial',
    sponsorlogo: 'nar-commercial-logo'
  },
  {
    sponsorname: 'Equity Advantage',
    sponsorlogo: 'equity-logo'
  },

  {
    sponsorname: 'Granite Properties',
    sponsorlogo: 'granite-logo'
  },
  {
    sponsorname: 'Biproxi',
    sponsorlogo: 'biproxi-logo'
  },
  {
    sponsorname: 'Lee & Associates',
    sponsorlogo: 'lee-logo'
  },



  {
    sponsorname: 'Buildout',
    sponsorlogo: 'buildout-logo'
  },
  {
    sponsorname: 'Century 21 Commercial',
    sponsorlogo: 'century21-logo'
  },
  {
    sponsorname: 'CompStak',
    sponsorlogo: 'compstak-logo'
  },
  {
    sponsorname: 'CrowdfundingLawyers.net | Trowbridge Sidoti LLP',
    sponsorlogo: 'crowdfunding-lawyers-logo'
  }, 
  {
    sponsorname: 'France Media',
    sponsorlogo: 'france-logo'
  },
  {
    sponsorname: 'Lightbox',
    sponsorlogo: 'lightbox-logo'
  },
  {
    sponsorname: 'Live Oak Bank',
    sponsorlogo: 'live-oak-logo'
  },
  {
    sponsorname: 'Reonomy',
    sponsorlogo: 'reonomy-logo'
  },
  {
    sponsorname: 'SVN',
    sponsorlogo: 'svn-logo'
  },
  {
    sponsorname: 'Ten-X',
    sponsorlogo: 'ten-x-logo'
  },
  {
    sponsorname: 'CREXi',
    sponsorlogo: 'crexi-logo'
  },
  {
    sponsorname: 'AREAA',
    sponsorlogo: 'areaa-logo'
  },
  {
    sponsorname: 'Corfac International',
    sponsorlogo: 'corfac-logo'
  },
  
  {
    sponsorname: 'IREM',
    sponsorlogo: 'irem-logo'
  },
  {
    sponsorname: 'iREOC',
    sponsorlogo: 'ireoc-logo'
  },
  {
    sponsorname: 'Walker & Dunlop',
    sponsorlogo: 'walker-dunlop-logo'
  },
  {
    sponsorname: 'Coldwell Banker Commercial',
    sponsorlogo: 'cbc-logo'
  },
  {
    sponsorname: 'KW Commercial',
    sponsorlogo: 'kw-logo'
  },
  {
    sponsorname: 'GlobeSt.',
    sponsorlogo: 'globest-logo'
  },


  
]
/*Generate Non-Keynote Speakers*/
var speakersGoHere = $('.speakers-wrap');
var photoDir = "img/speakers/speaker-";
var displayName;
var lastFirst;
var firstLast;
var speakTitle;
var speakCol;
var speakPanel;
var headshot;
var thisSpeaker;
var noPic = "headshot-no-pic.jpg";
var speakerPod;
var isSpecial;
var highClass;

// Generate Speakers
for (var prop in speakers) {
  thisSpeaker = speakers[prop];
  displayName = thisSpeaker.displayname;
  lastFirst = thisSpeaker.lastname + "-" + thisSpeaker.firstname;
  lastFirstLower = lastFirst.toLowerCase();
  photo = photoDir + lastFirstLower + ".jpg";
  speakTitle = thisSpeaker.title;
  speakCo = thisSpeaker.company;
  speakPanel = thisSpeaker.panel;
  special = thisSpeaker.special;
  if (special === '') {
    isSpecial = 'hidden';
    highClass= '';
  } else {
    isSpecial = 'highlight';
    highClass= 'feature';
  }
  speakerPod = '<div class="speaker check is-hidden '+highClass+'" id="'+lastFirstLower+'"><div class="headshot '+speakPanel+'"><img src="'+photo+'" alt="" onerror="imgError(this)"></div><div class="info"><h3 class="'+isSpecial+'"">'+special+'</h3><p class="name">'+displayName+'</p><p class="title">'+speakTitle+', '+speakCo+'</p></div></div>'
  speakersGoHere.append(speakerPod);
}
function imgError(source) {
  source.src =
  "img/no-headshot.jpg";
  source.onerror = "";
  return true;
}

// Speaker Bio Modals
var modalStart = '<div class="modal"><div class="modal-content cf"><p class="close-modal">x</p>';
var modalEnd = '</div></div>';
var showModal = function(){$(".modal").removeClass("fadeOut").addClass("fadeIn")}
var deleteModal = function(){
  this.remove();
};

// var closeModal = function(){$('.close-modal').on('click', function(){

//           $(this).parent().parent().removeClass("fadeIn").addClass("fadeOut").setTimeout(deleteModal, 500).remove();
//                   });
// }

var closeModal = function(){$('.close-modal').on('click', function(){
                    $("div[class^='modal']").removeClass("fadeIn").addClass("fadeOut").delay(800).remove();

                  });}



var closeModalBtn = '<a href="javascript:void(0)" class="btn btn-sm btn-primary close-modal">Close</a>'
var keynote = $('.keynote');
var speaker = $('.speaker');
var speakerBioName;
var speakerBio;
var speakerPos;
var speakerBioTitle;
var speakerBioCompany;
var speakerBioTitle2;
var speakerBioCompany2;
var speakerHeadshot;
var speakerPanel;
var secondTitle;

speaker.on('click', function(){
  speakerPos = ($(this).index('.speaker'));
  console.log(speakerPos);
  speakerBioName = $(this).find('.name').text();
  thisSpeaker = speakers[speakerPos];
  speakerBio = '<p>'+thisSpeaker.bio1+'</p><p>'+thisSpeaker.bio2+'</p>';
  speakerBioTitle = thisSpeaker.title;
  speakerBioCompany = thisSpeaker.company;
  speakerBioTitle2 = thisSpeaker.title2;
  speakerBioCompany2 = thisSpeaker.company2;
  speakerPanel = thisSpeaker.panel;
  speakerHeadshot = $(this).find('img').attr('src');
  secondTitle = thisSpeaker.secondTitle;
  if (speakerBioTitle2 === undefined) {
    secondTitle = 'hidden';
    highClass= '';
  } else {
    secondTitle = 'show';
    highClass= 'feature';
  }

  $b.append(modalStart+'<h1>'+speakerBioName+'</h1><h2>'+speakerBioTitle+' | '+speakerBioCompany+'</h2><h2 class="'+secondTitle+'">'+speakerBioTitle2+' | '+speakerBioCompany2+'</h2><img src="'+speakerHeadshot+'"><p>'+speakerBio+'</p><p class="speaker-session"><strong>Session: </strong>'+speakerPanel+'</p>'+modalEnd);
  showModal();
  closeModal();


});


/*Generate Sessions*/
// var sessionsGoHere = $('.the-sessions');
// var thisSession;
// var sessionId;
// var sessionTitle;
// var sessionDesc;
// var sessionSponsor;
// var sessionTime;
// var sessionDateTime;
// var eventPod;
// var isSponsored;
// var featuredSess;

// for (var prop in sessions) {
//   thisSession= sessions[prop];
//   sessionId = thisSession.id;
//   sessionTitle = thisSession.title; 
//   sessionDesc = thisSession.desc;
//   sessionSponsor = thisSession.sponsor;
//   sessionTime = thisSession.time;
//   sessionDateTime = thisSession.datetime;
//   featuredSess = thisSession.special
//   if (sessionSponsor  === '') {
//     isSponsored = 'hidden'
//   } else {
//     isSponsored = 'sponsored'
//   }
//   eventPod = '<section class="event cf" id="'+sessionId+'"><div class="left"><p><time datetime="'+sessionDateTime+'">'+sessionTime+'</time></p></div><div class="right"><h4>'+featuredSess+sessionTitle+'</h4><p>'+sessionDesc+'</p><p class="'+isSponsored+'">Sponsored by '+sessionSponsor+'</p></div></section>';
//   sessionsGoHere.append(eventPod);
// }



/*Generate Sponsors*/
var sponsorsGoHere = $('.sponsor-logos');
var sponsorPod;
var thisSponsor;
var sponsorName;
var sponsorLogo;

for (var prop in sponsors) {
  thisSponsor = sponsors[prop];
  sponsorName= thisSponsor.sponsorname;
  sponsorLogo = thisSponsor.sponsorlogo; 
  sponsorPod = '<img src="img/sponsors/'+sponsorLogo+'.jpg" alt="'+sponsorName+'"/>'
  sponsorsGoHere.append(sponsorPod);
}

// Show pricing details
var prices = $('.pricing');
var ticket = $('.tickets');
prices.on('click', function(){
  $b.append(modalStart+'<h1>Pricing</h1><h2>Main Conference | Oct. 14</h2><p><span>CCIM Member: $295 USD</span><span class="no-sale"> SOLD OUT</span><br><span>Non-member: $345 USD</span> <span class="no-sale"> SOLD OUT</span></p><h2>Related Events | Oct. 13</h2><ul><li>Global Connections Luncheon (Oct. 13): $100</li><li><span>Official Opening Reception (Oct. 13): Free for Conference Registrants</span> <span class="no-sale"> SOLD OUT</span></li><li><span>San Diego Chapter Networking Event (Oct. 13): $85</span><span class="no-sale"> SOLD OUT</span></li></ul><br><p></p><br>'+modalEnd);
  $('.modal-content').addClass('price-info');
  showModal();
  closeModal();
});

var $w = $(window);
var $b= $('body');
var $this = $(this);
var menu = $('header .burger');
var nav = $('header nav');
var navA = $('.container>header nav a');
var navBtn = $('.container>header nav ul li .btn')
var header = $('.container>header');
var speaker = $('.speaker');
var headerLogo = $('header .logo');

// Hides or Shows nav in mobile
menu.on('click', function() {
    nav.toggleClass('unhide-nav');
    menu.toggleClass('menu-close');
});

//Make header get compact on scroll
//Watch the scrolling in the browser, and do this function
var adjustNav = function() {
  var $this = $(this);
 // If user has scrolled past 300px
  if ($this.scrollTop() > 300 && $w.width() > 1145) {
    header.css({
      height: '40px',
      backgroundSize: '70px'
      
    });
    headerLogo.css({
      maxWidth: '33px',
      marginTop: '7px'
    });
    menu.addClass('autoWH');
    nav.addClass('margin-nav-small-heading');
    navA.addClass('nav-items-new-padding');
    navBtn.addClass('register-btn-small-heading');
  } else if ($this.scrollTop() <= 300 && $w.width() > 1145) {
   header.css({
      height: '80px',
      backgroundSize: '170px'
    });
   headerLogo.css({
      maxWidth: '56px',
      marginTop: '16px'
    });
   menu.removeClass('autoWH');
   nav.removeClass('margin-nav-small-heading');
   navA.removeClass('nav-items-new-padding');
   navBtn.removeClass('register-btn-small-heading');
  } else if ($this.scrollTop() <= 300 && $w.width() <= 1145) {
    header.css({
      height: '70px',
      backgroundSize: '130px'
    });
    headerLogo.css({
      width: '100%',
      maxWidth: '56px',
      marginTop: '10px'
    });
    menu.css({
      width: '50px',
      height: '50px',
      marginTop: '10px'
    });
    nav.css('top', '70px');
    nav.removeClass('margin-nav-small-heading');
    navA.removeClass('nav-items-new-padding');
    navBtn.removeClass('register-btn-small-heading');
  } else if ($this.scrollTop() > 300 && $w.width() <= 1145) {
    header.css({
      height: '50px',
      backgroundSize: '90px'
    });
    headerLogo.css({
      width: '40px',
      marginTop: '9px'
    });
    menu.css({
      width: '40px',
      height: '40px',
      marginTop: '5px'
    });
    nav.css('top', '50px');
    nav.removeClass('margin-nav-small-heading');
    navA.removeClass('nav-items-new-padding');
    navBtn.removeClass('register-btn-small-heading');
  }
  else if ($w.width() <= 471) {
    console.log('this');
    header.css({
      height: '40px',
      backgroundSize: '90px'
    });
    headerLogo.css({
      width: '265px',
      marginTop: '5px'
    });
    menu.css({
      width: '50px',
      height: '50px',
      marginTop: '10px'
    });
    nav.css('top', '40px');
    nav.removeClass('margin-nav-small-heading');
    navA.removeClass('nav-items-new-padding');
    navBtn.removeClass('register-btn-small-heading');
  }
}

$w.scroll(function(){
  adjustNav();
});
$w.resize(function(){
  adjustNav();
  if ($w.width() <= 1145) {
   nav.removeClass('margin-nav-small-heading');
   navA.removeClass('nav-items-new-padding');
   navBtn.removeClass('register-btn-small-heading');
  }
});

//If mobile, hide nav on menu item click
$('nav a').on('click', function() {
  if ($w.width() < 1146) {
    nav.toggleClass('unhide-nav');
    menu.toggleClass('menu-close');
  }
});

//Smooth Scrolling: https://css-tricks.com/snippets/jquery/smooth-scrolling/
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

var card = $('.check'),
  offset = .9;

$(window).on('scroll', function(){
  (!window.requestAnimationFrame) 
    ? setTimeout(function(){ showBlocks(card, offset); }, 100)
    : window.requestAnimationFrame(function(){ showBlocks(card, offset); });
});

function showBlocks(blocks, offset) {
  blocks.each(function(){
    ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).hasClass('is-hidden') ) && $(this).removeClass('is-hidden').addClass('not-hidden');
  });
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtc2Vzc2lvbnMuanMiLCJlZGl0LXNwZWFrZXJzLmpzIiwiZWRpdC1zcG9uc29ycy5qcyIsImdlbmVyYXRlLmpzIiwiZ29vZ2xlLXNoZWV0cy5qcyIsIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzZXNzaW9ucyA9IFtcclxuXHR7XHJcblx0XHRpZDogJ2JyZWFrZmFzdCcsXHJcblx0XHR0aXRsZTogJ0JyZWFrZmFzdCBhbmQgT3BlbmluZyBSZW1hcmtzJyxcclxuXHRcdGRhdGV0aW1lOiAnMjAxNy0xMC0xNiAwNzozMCcsXHJcblx0XHR0aW1lOiAnNzozMCBhLm0uICZuZGFzaDsgODoxNSBhLm0uJyxcclxuXHRcdGRlc2M6ICcnLFxyXG5cdFx0c3BvbnNvcjogJ1Rlbi1YJyxcclxuXHRcdHNwZWNpYWw6ICcnXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogJ2ZpbmFuY2luZycsXHJcblx0XHR0aXRsZTogJ0tlZXBlcnMgb2YgdGhlIENhcGl0YWwnLFxyXG5cdFx0ZGF0ZXRpbWU6ICcyMDE3LTEwLTE2IDA4OjE1JyxcclxuXHRcdHRpbWU6ICc4OjE1IGEubS4gJm5kYXNoOyA5IGEubS4nLFxyXG5cdFx0ZGVzYzogJ0Zyb20gdGhlIGdsb2JhbCBkZWJ0IGNyaXNpcyB0byBsb2NhbCByZWd1bGF0aW9ucywgd2hhdCBmYWN0b3JzIHdpbGwgYWZmZWN0IGZpbmFuY2luZyBpbiAyMDE4PycsXHJcblx0XHRzcG9uc29yOiAnJyxcclxuXHRcdHNwZWNpYWw6ICcnXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogJ2RlbW9ncmFwaHknLFxyXG5cdFx0dGl0bGU6ICdUaGUgVXBzaWRlIG9mIEdsb2JhbCBVcGhlYXZhbCB3aXRoIEtlbm5ldGggR3JvbmJhY2gnLFxyXG5cdFx0ZGF0ZXRpbWU6ICcyMDE3LTEwLTE2IDA5OjAwJyxcclxuXHRcdHRpbWU6ICc5IGEubS4gJm5kYXNoOyAxMCBhLm0uJyxcclxuXHRcdGRlc2M6ICdMZWFybiBob3cgdG8gcHJvZml0IGZyb20gdGhlIGNvbWluZyBkZW1vZ3JhcGhpYyBzdG9ybS4nLFxyXG5cdFx0c3BvbnNvcjogJycsXHJcblx0XHRzcGVjaWFsOiAnPHNwYW4+U3BlY2lhbCBQcmVzZW50YXRpb248L3NwYW4+J1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICd0ZWNoJyxcclxuXHRcdHRpdGxlOiAnVGhlIFdvbWVuIE9wdGltaXppbmcgT3VyIFdvcmxkJyxcclxuXHRcdGRhdGV0aW1lOiAnMjAxNy0xMC0xNiAxMDoxNScsXHJcblx0XHR0aW1lOiAnMTA6MTUgYS5tLiAmbmRhc2g7IDExOjE1IGEubS4nLFxyXG5cdFx0ZGVzYzogJ0NvbW1lcmNpYWwgcmVhbCBlc3RhdGUgdGVjaCBleGVjdXRpdmVzIGRpc2N1c3MgaG93IHRoZXlcXCdyZSByZXZvbHV0aW9uaXppbmcgdGhlIGluZHVzdHJ5IOKAlCB3aGV0aGVyIHlvdSBsaWtlIGl0IG9yIG5vdC4nLFxyXG5cdFx0c3BvbnNvcjogJycsXHJcblx0XHRzcGVjaWFsOiAnJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICdicm9rZXJhZ2UnLFxyXG5cdFx0dGl0bGU6ICdUcmFuc2Zvcm1pbmcgQnJva2VyYWdlJyxcclxuXHRcdGRhdGV0aW1lOiAnMjAxNy0xMC0xNiAxMToxNScsXHJcblx0XHR0aW1lOiAnMTE6MTUgYS5tLiAmbmRhc2g7IDEyIG5vb24nLFxyXG5cdFx0ZGVzYzogJ0FzIHRyYW5zcGFyZW5jeSBpbmNyZWFzZXMsIGNvbW1lcmNpYWwgcmVhbCBlc3RhdGUgZmlybXMgd2lsbCBiZSBmb3JjZWQgdG8gYWRhcHQuIFNlbmlvciBleGVjdXRpdmVzIGZyb20gdG9wIGJyb2tlcmFnZSBmaXJtcyB3ZWlnaCBpbi4nLFxyXG5cdFx0c3BvbnNvcjogJycsXHJcblx0XHRzcGVjaWFsOiAnJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICdicmVhaycsXHJcblx0XHR0aXRsZTogJ1Nwb25zb3IgTmV0d29ya2luZyBCcmVhaycsXHJcblx0XHRkYXRldGltZTogJzIwMTctMTAtMTYgMTI6MDAnLFxyXG5cdFx0dGltZTogJzEyIG5vb24gJm5kYXNoOyAxMjozMCBwLm0uJyxcclxuXHRcdGRlc2M6ICcnLFxyXG5cdFx0c3BvbnNvcjogJycsXHJcblx0XHRzcGVjaWFsOiAnJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICdsdW5jaCcsXHJcblx0XHR0aXRsZTogJ0x1bmNoIGFuZCBTcGVjaWFsIEFkZHJlc3MnLFxyXG5cdFx0ZGF0ZXRpbWU6ICcyMDE3LTEwLTE2IDEyOjM1JyxcclxuXHRcdHRpbWU6ICcxMjozMCBwLm0uICZuZGFzaDsgMTozMCBwLm0uJyxcclxuXHRcdGRlc2M6ICcnLFxyXG5cdFx0c3BvbnNvcjogJycsXHJcblx0XHRzcGVjaWFsOiAnJ1xyXG5cdH0sXHJcblxyXG5cdHtcclxuXHRcdGlkOiAna2V5bm90ZScsXHJcblx0XHR0aXRsZTogJ0EgQ29udmVyc2F0aW9uIHdpdGggU3RldmUgRm9yYmVzJyxcclxuXHRcdGRhdGV0aW1lOiAnMjAxNy0xMC0xNiAxMzozMCcsXHJcblx0XHR0aW1lOiAnMTozMCBwLm0uICZuZGFzaDsgMjozMCBwLm0uJyxcclxuXHRcdGRlc2M6ICcnLFxyXG5cdFx0c3BvbnNvcjogJycsXHJcblx0XHRzcGVjaWFsOiAnPHNwYW4+S2V5bm90ZSBBZGRyZXNzPC9zcGFuPidcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAncmVjZXB0aW9uJyxcclxuXHRcdHRpdGxlOiAnQ2xvc2luZyBSZWNlcHRpb24nLFxyXG5cdFx0ZGF0ZXRpbWU6ICcyMDE3LTEwLTE2IDE0OjMwJyxcclxuXHRcdHRpbWU6ICcyOjMwIHAubS4gJm5kYXNoOyAzOjAwIHAubS4nLFxyXG5cdFx0ZGVzYzogJycsXHJcblx0XHRzcG9uc29yOiAnJyxcclxuXHRcdHNwZWNpYWw6ICcnXHJcblx0fSxcclxuXSIsInZhciBzcGVha2VycyA9IFtcclxue1xyXG4gIGZpcnN0bmFtZTogJ1N0ZXZlJyxcclxuICBsYXN0bmFtZTogJ0ZvcmJlcycsXHJcbiAgZGlzcGxheW5hbWU6ICdTdGV2ZSBGb3JiZXMnLFxyXG4gIHRpdGxlOiAnRWRpdG9yLWluLUNoaWVmJyxcclxuICBjb21wYW55OiAnRm9yYmVzIE1lZGlhJyxcclxuICBwYW5lbDogJ0tleW5vdGUgQWRkcmVzcyB8IE1vbmRheSwgT2N0LiAxNiBhdCAxOjMwIHAubS4nLFxyXG4gIGJpbzE6ICdTdGV2ZSBGb3JiZXMgaXMgQ2hhaXJtYW4gYW5kIEVkaXRvci1pbi1DaGllZiBvZiBGb3JiZXMgTWVkaWEuIEZvcmJlcyB3cml0ZXMgZWRpdG9yaWFscyBmb3IgZWFjaCBpc3N1ZSBvZiBGb3JiZXMgdW5kZXIgdGhlIGhlYWRpbmcgb2Yg4oCcRmFjdCBhbmQgQ29tbWVudC7igJ0gQSB3aWRlbHkgcmVzcGVjdGVkIGVjb25vbWljIHByb2dub3N0aWNhdG9yLCBoZSBpcyB0aGUgb25seSB3cml0ZXIgdG8gaGF2ZSB3b24gdGhlIGhpZ2hseSBwcmVzdGlnaW91cyBDcnlzdGFsIE93bCBBd2FyZCBmb3VyIHRpbWVzLiBUaGUgcHJpemUgd2FzIGZvcm1lcmx5IGdpdmVuIGJ5IFUuUy4gU3RlZWwgQ29ycG9yYXRpb24gdG8gdGhlIGZpbmFuY2lhbCBqb3VybmFsaXN0IHdob3NlIGVjb25vbWljIGZvcmVjYXN0cyBmb3IgdGhlIGNvbWluZyB5ZWFyIHByb3ZlZCBtb3N0IGFjY3VyYXRlLicsXHJcbiAgYmlvMjogJ0luIGJvdGggMTk5NiBhbmQgMjAwMCwgRm9yYmVzIGNhbXBhaWduZWQgdmlnb3JvdXNseSBmb3IgdGhlIFJlcHVibGljYW4gbm9taW5hdGlvbiBmb3IgdGhlIFUuUy4gUHJlc2lkZW5jeS4gS2V5IHRvIGhpcyBwbGF0Zm9ybSB3ZXJlIGEgZmxhdCB0YXgsIG1lZGljYWwgc2F2aW5ncyBhY2NvdW50cywgYSBuZXcgU29jaWFsIFNlY3VyaXR5IHN5c3RlbSBmb3Igd29ya2luZyBBbWVyaWNhbnMsIHBhcmVudGFsIGNob2ljZSBvZiBzY2hvb2xzIGZvciB0aGVpciBjaGlsZHJlbiwgdGVybSBsaW1pdHMsIGFuZCBhIHN0cm9uZyBuYXRpb25hbCBkZWZlbnNlLiBGb3JiZXMgY29udGludWVzIHRvIGVuZXJnZXRpY2FsbHkgcHJvbW90ZSB0aGlzIGFnZW5kYS4nLFxyXG4gIHNwZWNpYWw6ICdLZXlub3RlIEFkZHJlc3MnXHJcbn0sXHJcbntcclxuICBmaXJzdG5hbWU6ICdLZW4nLFxyXG4gIGxhc3RuYW1lOiAnR3JvbmJhY2gnLFxyXG4gIGRpc3BsYXluYW1lOiAnS2VubmV0aCBXLiBHcm9uYmFjaCcsXHJcbiAgdGl0bGU6ICdQcmVzaWRlbnQnLFxyXG4gIGNvbXBhbnk6ICdLR0MgRGlyZWN0IExMQycsXHJcbiAgcGFuZWw6ICdTcGVjaWFsIFByZXNlbnRhdGlvbjogVGhlIFVwc2lkZSBvZiBHbG9iYWwgVXBoZWF2YWwgfCBNb25kYXksIE9jdC4gMTYgYXQgOSBhLm0uJyxcclxuICBiaW8xOiAnS2VubmV0aCBXLiBHcm9uYmFjaCBpcyBhIGdpZnRlZCBrZXlub3RlIHNwZWFrZXIgYW5kIG5hdGlvbmFsbHkgcmVjb2duaXplZCBhdXRob3IsIGV4cGVydCBhbmQgZnV0dXJpc3QgaW4gdGhlIGZpZWxkIG9mIERlbW9ncmFwaHkgYW5kIEdlbmVyYXRpb25hbCBNYXJrZXRpbmcuIEhlIG1ha2VzIHRoZSBzY2llbmNlIG9mIHNoaWZ0aW5nIGRlbW9ncmFwaHkgY29tZSBhbGl2ZSB3aXRoIHJlYWwgbGlmZSBleGFtcGxlcyB3aGljaCBtYWtlIGl0IHJlbGV2YW50IHRvIHRvZGF54oCZcyBjdWx0dXJlLCBidXNpbmVzcyBjbGltYXRlIGFuZCBlY29ub215LiBXaXRoIG5lYXJseSB0aHJlZSBkZWNhZGVzIGV4cGVyaWVuY2UgaW4gcmV0YWlsIGFkdmVydGlzaW5nIGFuZCBtYXJrZXRpbmcsIEtlbiBzYXcgdGhlIGRpcmVjdCByZXN1bHRzIG9mIHNoaWZ0aW5nIGRlbW9ncmFwaGljcyBpbiBoaXMgY2xpZW50c+KAmSBwcm9maXRzLiBFdmVudHVhbGx5LCBoaXMgcGFzc2lvbiBmb3IgdGhlIHN1YmplY3QgY2hhbmdlZCB0aGUgZGlyZWN0aW9uIG9mIGhpcyBjYXJlZXIsIHRvIHRoZSBiZW5lZml0IG9mIHJlYWRlcnMgb2YgaGlzIGJvb2tzIGFuZCBhdHRlbmRlZXMgb2YgaGlzIGtleW5vdGVzIGFuZCBvdGhlciBwcmVzZW50YXRpb25zLicsXHJcbiAgYmlvMjogJzxkaXYgc3R5bGU9XCJwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MDtwYWRkaW5nLWJvdHRvbTo1Ni4yNSVcIj48aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3FaeWs3djNjSmRvP3JlbD0wP2VjdmVyPTJcIiB3aWR0aD1cIjUwNFwiIGhlaWdodD1cIjI4My41XCIgZnJhbWVib3JkZXI9XCIwXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2xlZnQ6MFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT48L2Rpdj4nLFxyXG4gIHNwZWNpYWw6ICdTcGVjaWFsIFByZXNlbnRhdGlvbidcclxufSxcclxue1xyXG4gIGZpcnN0bmFtZTogJ01hcmsnLFxyXG4gIGxhc3RuYW1lOiAnUm9zZScsXHJcbiAgZGlzcGxheW5hbWU6ICdNYXJrIEUuIFJvc2UnLFxyXG4gIHRpdGxlOiAnQ0VPJyxcclxuICBjb21wYW55OiAnQXZpc29uIFlvdW5nJyxcclxuICBwYW5lbDogJ1RyYW5zZm9ybWluZyBCcm9rZXJhZ2UgfCBNb25kYXksIE9jdC4gMTYgYXQgMTE6MTUgYS5tLicsXHJcbiAgYmlvMTogJ01hcmsgRS4gUm9zZSBpcyBDaGllZiBFeGVjdXRpdmUgT2ZmaWNlciBvZiBBdmlzb24gWW91bmcgYW5kIENoYWlybWFuIG9mIHRoZSBCb2FyZCBvZiBEaXJlY3RvcnMgb2YgQXZpc29uIFlvdW5nIChDYW5hZGEpIEluYy4gSGUgbWFuYWdlcyBhbGwgc3RyYXRlZ2ljLCBmaW5hbmNpYWwsIGFuZCBvcGVyYXRpb25hbCBhY3Rpdml0aWVzIG9mIHRoaXMgZnVsbC1zZXJ2aWNlIGNvbW1lcmNpYWwgcmVhbCBlc3RhdGUgY29tcGFueSwgd2hpY2ggcHJvdmlkZXMgc29sdXRpb25zIHRvIHJlYWwgZXN0YXRlIGludmVzdG9ycywgb3duZXJzLCBhbmQgb2NjdXBpZXJzIHRocm91Z2hvdXQgdGhlIHdvcmxkLiBJbiBoaXMgbmluZSB5ZWFycyB3aXRoIHRoZSBUb3JvbnRvLCBDYW5hZGEtYmFzZWQgZmlybSwgTWFyayBoYXMgb3ZlcnNlZW4gaXRzIGdyb3d0aCBmcm9tIDI5MCByZWFsIGVzdGF0ZSBwcm9mZXNzaW9uYWxzIGluIDExIG9mZmljZXMgaW4gQ2FuYWRhIHRvIG1vcmUgdGhhbiAyLDQwMCBwcm9mZXNzaW9uYWxzIGluIDc5IG9mZmljZXMgaW4gQ2FuYWRhLCB0aGUgVS5TLiwgTWV4aWNvLCBhbmQgRXVyb3BlLicsXHJcbiAgYmlvMjogJycsXHJcbiAgc3BlY2lhbDogJydcclxufSxcclxue1xyXG4gIGZpcnN0bmFtZTogJ0pheScsXHJcbiAgbGFzdG5hbWU6ICdPbHNob25za3knLFxyXG4gIGRpc3BsYXluYW1lOiAnSmF5IE9sc2hvbnNreScsXHJcbiAgdGl0bGU6ICdQcmVzaWRlbnQnLFxyXG4gIGNvbXBhbnk6ICdOQUkgR2xvYmFsJyxcclxuICBwYW5lbDogJ1RyYW5zZm9ybWluZyBCcm9rZXJhZ2UgfCBNb25kYXksIE9jdC4gMTYgYXQgMTE6MTUgYS5tLicsXHJcbiAgYmlvMTogJ0pheSBPbHNob25za3kgaXMgUHJlc2lkZW50IG9mIE5BSSBHbG9iYWwsIGEgbGVhZGluZyBjb21tZXJjaWFsIHJlYWwgZXN0YXRlIGJyb2tlcmFnZSBmaXJtIHdpdGggbW9yZSB0aGFuIDQwMCBvZmZpY2VzIHN0cmF0ZWdpY2FsbHkgbG9jYXRlZCB0aHJvdWdob3V0IE5vcnRoIEFtZXJpY2EsIExhdGluIEFtZXJpY2EsIGFuZCB0aGUgQ2FyaWJiZWFuLCBFdXJvcGUsIEFmcmljYSwgYW5kIEFzaWEgUGFjaWZpYywgaW5jbHVkaW5nIG92ZXIgNywwMDAgbG9jYWwgbWFya2V0IHByb2Zlc3Npb25hbHMuIEFubnVhbGx5LCBOQUkgR2xvYmFsIGNvbXBsZXRlcyBpbiBleGNlc3Mgb2YgJDIwIGJpbGxpb24gaW4gY29tbWVyY2lhbCByZWFsIGVzdGF0ZSB0cmFuc2FjdGlvbnMgdGhyb3VnaG91dCB0aGUgd29ybGQuJyxcclxuICBiaW8yOiAnJyxcclxuICBzcGVjaWFsOiAnJ1xyXG59LFxyXG57XHJcbiAgZmlyc3RuYW1lOiAnTWlrZScsXHJcbiAgbGFzdG5hbWU6ICdSZWdhbicsXHJcbiAgZGlzcGxheW5hbWU6ICdNaWtlIFJlYWdhbicsXHJcbiAgdGl0bGU6ICdTZW5pb3IgVmljZSBQcmVzaWRlbnQnLFxyXG4gIGNvbXBhbnk6ICdSRS9NQVggQ29tbWVyY2lhbCcsXHJcbiAgcGFuZWw6ICdUcmFuc2Zvcm1pbmcgQnJva2VyYWdlIHwgTW9uZGF5LCBPY3QuIDE2IGF0IDExOjE1IGEubS4nLFxyXG4gIGJpbzE6ICdNaWtlIFJlYWdhbiBvdmVyc2VlcyB0aGUgZ2xvYmFsIGFsbGlhbmNlIHByb2dyYW1zIHRoYXQgaGF2ZSBoZWxwZWQgbWFrZSBSRS9NQVggb25lIG9mIHRoZSBtb3N0IHJlY29nbml6ZWQgcmVhbCBlc3RhdGUgYnJhbmRzIGluIHRoZSB3b3JsZC4gSGUgYWxzbyBsZWFkcyBUaGUgUkUvTUFYIENvbGxlY3Rpb24gbHV4dXJ5IHJlYWwgZXN0YXRlIGRpdmlzaW9uLCB3aGljaCBzZXJ2ZXMgYWZmbHVlbnQgYnV5ZXJzIGFuZCBzZWxsZXJzIGFyb3VuZCB0aGUgd29ybGQ7IGFuZCBSRS9NQVggQ29tbWVyY2lhbCwgd2hpY2ggdW5kZXIgaGlzIGRpcmVjdGlvbiBoYXMgZ3Jvd24gaW50byBvbmUgb2YgdGhlIHRvcCAyMCBjb21tZXJjaWFsIGJyb2tlcmFnZSBuZXR3b3JrcyBpbiB0aGUgd29ybGQuJyxcclxuICBiaW8yOiAnJyxcclxuICBzcGVjaWFsOiAnJ1xyXG59LFxyXG57XHJcbiAgZmlyc3RuYW1lOiAnQnJpYW4nLFxyXG4gIGxhc3RuYW1lOiAnU3RvZmZlcnMnLFxyXG4gIGRpc3BsYXluYW1lOiAnQnJpYW4gU3RvZmZlcnMnLFxyXG4gIHRpdGxlOiAnR2xvYmFsIFByZXNpZGVudCwgRGVidCAmIFN0cnVjdHVyZWQgRmluYW5jZScsXHJcbiAgY29tcGFueTogJ0NCUkUnLFxyXG4gIHBhbmVsOiAnS2VlcGVycyBvZiB0aGUgQ2FwaXRhbCB8IE1vbmRheSwgT2N0LiAxNiBhdCA4OjE1IGEubScsXHJcbiAgYmlvMTogJ0JyaWFuIFN0b2ZmZXJzIGlzIEdsb2JhbCBQcmVzaWRlbnQsIERlYnQgJiBTdHJ1Y3R1cmVkIEZpbmFuY2UgYXQgQ0JSRS4gVW5kZXIgaGlzIGxlYWRlcnNoaXAsIG5lYXJseSAxNDAgcHJvZmVzc2lvbmFscyBoYXZlIG9yaWdpbmF0ZWQgYXBwcm94aW1hdGVseSAkMjE2IGJpbGxpb24gaW4gbG9hbiB2b2x1bWUgc2luY2UgMjAwNy4gQWRkaXRpb25hbGx5LCB0aGlzIHByYWN0aWNlIG1haW50YWlucyBhIGxvYW4gc2VydmljZXMgcG9ydGZvbGlvIG9mIG1vcmUgdGhhbiAkMTIwIGJpbGxpb24gaW4gdGhlIFVuaXRlZCBTdGF0ZXMsIHdoaWxlIENCUkXigJlzIEVNRUEgc2VydmljaW5nIHBvcnRmb2xpbyBoYXMgZ3Jvd24gYnkgYW4gYWRkaXRpb25hbCAkMjQgYmlsbGlvbi4nLFxyXG4gIGJpbzI6ICdTdG9mZmVycyBoYXMgZXh0ZW5zaXZlIGV4cGVyaWVuY2UgaW4gdGhlIG9yaWdpbmF0aW9uLCBzdHJ1Y3R1cmluZywgcGxhY2VtZW50LCBjbG9zaW5nIGFuZCBzZXJ2aWNpbmcgb2YgY29tbWVyY2lhbCByZWFsIGVzdGF0ZSBkZWJ0IGZvciBsaWZlIGluc3VyYW5jZSBjb21wYW5pZXMsIHBlbnNpb24gZnVuZHMsIGJhbmtzLCBzYXZpbmdzLCBhbmQgbG9hbnMsIEZyZWRkaWUgTWFjLCBGYW5uaWUgTWFlLCBGSEEsIGFuZCBXYWxsIFN0cmVldCBzb3VyY2VzLicsXHJcbiAgc3BlY2lhbDogJydcclxufSxcclxue1xyXG4gIGZpcnN0bmFtZTogJ0xpbmRzYXknLFxyXG4gIGxhc3RuYW1lOiAnQmFrZXInLFxyXG4gIGRpc3BsYXluYW1lOiAnTGluZHNheSBCYWtlcicsXHJcbiAgdGl0bGU6ICdQcmVzaWRlbnQnLFxyXG4gIGNvbXBhbnk6ICdDb21meScsXHJcbiAgcGFuZWw6ICdUaGUgV29tZW4gT3B0aW1pemluZyBPdXIgV29ybGQgfCBNb25kYXksIE9jdC4gMTYgYXQgMTA6MTUgYS5tLicsXHJcbiAgYmlvMTogJ0xpbmRzYXkgQmFrZXIgbGVhZHMgcmVsYXRpb25zaGlwIGJ1aWxkaW5nIGFuZCBzZXJ2ZXMgYXMgQ29tZnlcXCdzIGNoaWVmIGJyYW5kIGV2YW5nZWxpc3QuIENvbWZ5IGlzIGEgc2ltcGxlLXRvLXVzZSBhcHAgdGhhdCBlbXBsb3llZXMgcHV0IG9uIHRoZWlyIHBob25lcyBhbmQgdXNlIHRvIHJlcXVlc3Qgd2FybSBvciBjb29sIGFpciBpbiBhIHpvbmUgd2hlcmUgdGhleSB3b3JrLiBUaGUgYXBwIHVzZXMgZW1wbG95ZWUtY29udHJpYnV0ZWQgZGF0YSwgYW5kIGNvbWJpbmVzIGl0IHdpdGggdXNhZ2UgZGF0YSBhbmQgcGF0dGVybnMsIHRvIHR1bmUgZXZlcnkgem9uZSBpbiBhbiBvZmZpY2UgYnVpbGRpbmcgYmFzZWQgb24gdGhlIHJvdXRpbmUgcHJlZmVyZW5jZXMgb2YgcGVvcGxlIHdobyB3b3JrIGluIGVhY2ggem9uZSB0aGVyZS4nLFxyXG4gIGJpbzI6ICdBbiBlc3RhYmxpc2hlZCB3cml0ZXIgaW4gdGhlIGdyZWVuIGJ1aWxkaW5nIGNvbW11bml0eSwgQmFrZXIgd2FzIHByZXZpb3VzbHkgYSBTdXN0YWluYWJsZSBPcGVyYXRpb25zIENvbnN1bHRhbnQgYXQgR29vZ2xlLiBTaGUgaXMgYSBQaC5ELiBDYW5kaWRhdGUgaW4gQnVpbGRpbmcgU2NpZW5jZSBhdCBVbml2ZXJzaXR5IG9mIENhbGlmb3JuaWEgQmVya2VsZXksIGFuZCB3YXMgb24gdGhlIG9yaWdpbmFsIHN0YWZmIHRlYW0gZGV2ZWxvcGluZyB0aGUgTEVFRCBSYXRpbmcgU3lzdGVtIGF0IFVTR0JDLjxicj48aWZyYW1lIHdpZHRoPVwiNTYwXCIgaGVpZ2h0PVwiMzE1XCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvTk85MmFaRGI1MkU/c3RhcnQ9MTQ1JnJlbD0wJmFtcDtjb250cm9scz0wXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPicsXHJcbiAgc3BlY2lhbDogJydcclxufSxcclxue1xyXG4gIGZpcnN0bmFtZTogJ1lhbicsXHJcbiAgbGFzdG5hbWU6ICdLaGFtaXNoJyxcclxuICBkaXNwbGF5bmFtZTogJ1lhbiBLaGFtaXNoJyxcclxuICB0aXRsZTogJ01hbmFnaW5nIERpcmVjdG9yJyxcclxuICBjb21wYW55OiAnVGVuLVgnLFxyXG4gIHBhbmVsOiAnVHJhbnNmb3JtaW5nIEJyb2tlcmFnZSB8IE1vbmRheSwgT2N0LiAxNiBhdCAxMToxNSBhLm0uJyxcclxuICBiaW8xOiAnQXMgdGhlIGhlYWQgb2YgdGhlIEJyb2tlciBDaGFubmVsLCBZYW4gaXMgZXhwYW5kaW5nIFRlbi1Y4oCZcyBlbmdhZ2VtZW50IHdpdGggdGhlIHRvcCBjb21tZXJjaWFsIGJyb2tlcmFnZSBmaXJtcywgaW5kdXN0cnkgYXNzb2NpYXRpb25zIGFuZCB0ZWNobm9sb2d5IHBhcnRuZXJzLiBIZSBicmluZ3MgYSBzdHJvbmcgQ1JFIHNraWxsIHNldCB0aGF0IGVuY29tcGFzc2VzIEFjcXVpc2l0aW9ucywgRGlzcG9zaXRpb24sIERlYnQgU3RydWN0dXJpbmcsIExlYXNpbmcsIFBvcnRmb2xpbyBNYW5hZ2VtZW50LCBFcXVpdHksIGFuZCBvdmVyYWxsIENhcGl0YWwgTWFya2V0cyBzdHJhdGVneSwgZGV2ZWxvcGVkIGR1cmluZyBhIGNhcmVlciBlbmNvbXBhc3Npbmcgb3ZlciAyMCB5ZWFycyBpbiBDb21tZXJjaWFsIFJlYWwgRXN0YXRlLicsXHJcbiAgYmlvMjogJ0toYW1pc2ggY29tZXMgdG8gVGVuLVggZnJvbSBOZXcgWW9yay1iYXNlZCBGb3J0cmVzcyBJbnZlc3RtZW50IEdyb3VwLCB3aGVyZSBoZSBzZXJ2ZWQgYXMgU2VuaW9yIFZpY2UgUHJlc2lkZW50IG1hbmFnaW5nIGEgZGl2ZXJzZSBjb21tZXJjaWFsIHJlYWwgZXN0YXRlLCBpbmZyYXN0cnVjdHVyZSwgYW5kIHRyYW5zcG9ydGF0aW9uIHBvcnRmb2xpbyB2YWx1ZWQgYXQgJDMuNSBiaWxsaW9uLiBIaXMgcHJldmlvdXMgcG9zaXRpb25zIGluY2x1ZGUgQ2hpZWYgT3BlcmF0aW5nIE9mZmljZXIgYW5kIE1hbmFnaW5nIERpcmVjdG9yIGZvciBUaGUgU1RHIEdyb3VwLCBTZW5pb3IgVmljZSBQcmVzaWRlbnQgYXQgRm93bGVyIFByb3BlcnR5IEFjcXVpc2l0aW9ucywgYW5kIERpcmVjdG9yIGFuZCBjb21tZXJjaWFsIGJyb2tlciBhdCBNYXJjdXMgJiBNaWxsaWNoYXAuIEtoYW1pc2ggc3RhcnRlZCBoaXMgY2FyZWVyIGluIHB1YmxpYyBhY2NvdW50aW5nIHdpdGggQXJ0aHVyIEFuZGVyc2VuLicsXHJcbiAgc3BlY2lhbDogJydcclxufSxcclxue1xyXG4gIGZpcnN0bmFtZTogJ05hdmVlbicsXHJcbiAgbGFzdG5hbWU6ICdKYWdnaScsXHJcbiAgZGlzcGxheW5hbWU6ICdOYXZlZW4gSmFnZ2knLFxyXG4gIHRpdGxlOiAnUHJlc2lkZW50LCBSZXRhaWwgQnJva2VyYWdlJyxcclxuICBjb21wYW55OiAnSkxMJyxcclxuICBwYW5lbDogJ1RyYW5zZm9ybWluZyBCcm9rZXJhZ2UgfCBNb25kYXksIE9jdC4gMTYgYXQgMTE6MTUgYS5tLicsXHJcbiAgYmlvMTogJ05hdmVlbiBKYWdnaSBqb2luZWQgSkxMIGluIDIwMTQgYW5kIGxlYWRzIHRoZSByZXRhaWwgYnJva2VyYWdlIGJ1c2luZXNzIGNvbXByaXNpbmcgb2YgdGVuYW50IHJlcCwgYWdlbmN5IGxlYXNpbmcsIGFuZCBjYXBpdGFsIG1hcmtldHMgZm9yIHRoZSBBbWVyaWNh4oCZcyB3aGVyZSBoZSBpcyByZXNwb25zaWJsZSBmb3Igb3ZlcmFsbCBzdHJhdGVneSwgYnVzaW5lc3MgZGV2ZWxvcG1lbnQgYW5kIHRoZSBncm93dGggb2YgdGhlIHBsYXRmb3JtLiBJbiBhZGRpdGlvbiB0byBvdmVyc2VlaW5nIGFsbCBvZiBKTEzigJlzIHJldGFpbCB0ZW5hbnQgcmVwLCBhZ2VuY3kgbGVhc2luZyBhbmQgY2FwaXRhbCBtYXJrZXRzIGJyb2tlcnMgYWNyb3NzIHRoZSBVbml0ZWQgU3RhdGVzLCBKYWdnaSBpcyBDaGFpcm1hbiBvZiB0aGUgR2xvYmFsIFJldGFpbCBMZWFzaW5nIEJvYXJkIHdoaWNoIGNvb3JkaW5hdGVzIEpMTOKAmXMgcmV0YWlsIGJyb2tlcmFnZSBhY3Rpdml0eSBHbG9iYWxseS4nLFxyXG4gIGJpbzI6ICdXaXRoIG1vcmUgdGhhbiAyMCB5ZWFycyBvZiByZXRhaWwgcmVhbCBlc3RhdGUgZXhwZXJpZW5jZSwgSmFnZ2kgYnJpbmdzIGEgY2xpZW50LWZvY3VzIGFuZCBmYW1pbGlhcml0eSB3aXRoIGFsbCBhc3BlY3RzIG9mIHJldGFpbCBpbiB0aGUgVS5TIGFuZCBhYnJvYWQuIEhlIHNwZWNpYWxpemVzIGluIG11bHRpLW1hcmtldCBlbnRyeSBzdHJhdGVneSwgc2l0ZSBzZWxlY3Rpb24gYW5hbHl0aWNzLCBhY3F1aXNpdGlvbiB1bmRlcndyaXRpbmcsIHBvcnRmb2xpbyBvcHRpbWl6YXRpb24gYW5kIGRpc3Bvc2l0aW9uIHN0cmF0ZWd5LicsXHJcbiAgc3BlY2lhbDogJydcclxufSxcclxue1xyXG4gIGZpcnN0bmFtZTogJ1N1c2llJyxcclxuICBsYXN0bmFtZTogJ0FsZ2FyZCcsXHJcbiAgZGlzcGxheW5hbWU6ICdTdXNpZSBBbGdhcmQnLFxyXG4gIHRpdGxlOiAnQ0VPJyxcclxuICBjb21wYW55OiAnT2ZmaWNlU3BhY2UuY29tJyxcclxuICBwYW5lbDogJ1RoZSBXb21lbiBPcHRpbWl6aW5nIE91ciBXb3JsZCB8IE1vbmRheSwgT2N0LiAxNiBhdCAxMDoxNSBhLm0uJyxcclxuICBiaW8xOiAnU3VzaWUgQWxnYXJkIGlzIHRoZSBDRU8gYW5kIGNvLWZvdW5kZXIgb2YgT2ZmaWNlU3BhY2UuY29tLCBhbiBvbmxpbmUgZGF0YWJhc2UgY29tcGFueSBmb3IgY29tbWVyY2lhbCByZWFsIGVzdGF0ZS4gU2luY2UgdGhlaXIgbGF1bmNoIGluIDIwMTIsIHRoZXkgaGF2ZSBjcmVhdGVkIGFuIGVmZmljaWVudCBhbmQgZWZmZWN0aXZlIG1hcmtldGluZyBwbGF0Zm9ybSBjb25uZWN0aW5nIHRlbmFudHMgdG8gYnJva2VycyBhbmQgbGlzdGluZyBhZ2VudHMuIFRlbmFudHMgYW5kIHJlYWwgZXN0YXRlIHByb2Zlc3Npb25hbHMgY2FuIHVzZSB0aGUgc2l0ZSB0byBwZXJ1c2UgY29tbWVyY2lhbCBsaXN0aW5ncyB0aHJvdWdob3V0IHRoZSBVLlMuIGFuZCwgZm9yIHRoZSBsYXR0ZXIsIGFkZCBsaXN0aW5ncyB0byB0aGUgZGF0YWJhc2UuIE9mZmljZVNwYWNlLmNvbSBpcyBidWlsZGluZyBhIGJldHRlciBzZWFyY2ggZXhwZXJpZW5jZSBmb3IgdGVuYW50cyB0byBtYWtlIGZpbmRpbmcgdGhlIHJpZ2h0IG9mZmljZSwgcmV0YWlsLCBhbmQgaW5kdXN0cmlhbCBzcGFjZSBlYXNpZXIuIEFsZ2FyZCBoYXMgYSBwcm92ZW4gdHJhY2sgcmVjb3JkIG9mIGRyaXZpbmcgbmV3IGNvbnN1bWVyIHdlYiBzZXJ2aWNlcyBmcm9tIHplcm8gdG8gJDUwIG1pbGxpb24gaW4gcmV2ZW51ZS4nLFxyXG4gIGJpbzI6ICcnLFxyXG4gIHNwZWNpYWw6ICcnXHJcbn0sXHJcbntcclxuICBmaXJzdG5hbWU6ICdKZXJlbXknLFxyXG4gIGxhc3RuYW1lOiAnV2VkZ2J1cnknLFxyXG4gIGRpc3BsYXluYW1lOiAnSmVyZW15IFdlZGdidXJ5JyxcclxuICB0aXRsZTogJ1NlbmlvciBWaWNlIFByZXNpZGVudCwgQ29tbWVyY2lhbCBNb3J0Z2FnZXMnLFxyXG4gIGNvbXBhbnk6ICdGaXJzdCBOYXRpb25hbCcsXHJcbiAgcGFuZWw6ICdLZWVwZXJzIG9mIHRoZSBDYXBpdGFsIHwgTW9uZGF5LCBPY3QuIDE2IGF0IDg6MTUgYS5tJyxcclxuICBiaW8xOiAnSmVyZW15IFdlZGdidXJ5IGlzIHRoZSBTZW5pb3IgVmljZSBQcmVzaWRlbnQsIENvbW1lcmNpYWwgTW9ydGdhZ2VzIGZvciBGaXJzdCBOYXRpb25hbCBhbmQgaXMgcmVzcG9uc2libGUgZm9yIHRoZSBzYWxlcyBhbmQgbWFya2V0aW5nIG9mIEZpcnN0IE5hdGlvbmFs4oCZcyBjb21tZXJjaWFsIG1vcnRnYWdlIHByb2R1Y3RzLiAgVGhpcyByb2xlIGluY2x1ZGVzIHRoZSBtYW5hZ2VtZW50IG9mIGFwcHJveGltYXRlbHkgMjUgbW9ydGdhZ2Ugb3JpZ2luYXRvcnMgbG9jYXRlZCBpbiBvZmZpY2VzIG5hdGlvbmFsbHkgYW5kIHRoZSBjcmVkaXQgcmV2aWV3IG9mIHRoZSBjb21tZXJjaWFsIGxvYW4gcHJvZHVjdHMsIGluY2x1ZGluZyBDTUhDLWluc3VyZWQgZml4ZWQgYW5kIGZsb2F0aW5nIHJhdGUgbG9hbnMsIENNQlMgbG9hbnMsIHNtYWxsIGNvbW1lcmNpYWwgbG9hbnMsIHNlY29uZCBtb3J0Z2FnZXMgYW5kIGludGVyaW0vY29uc3RydWN0aW9uIGxvYW5zLicsXHJcbiAgYmlvMjogJ1ByaW9yIHRvIGpvaW5pbmcgRmlyc3QgTmF0aW9uYWwgaW4gMjAwNCwgV2VkZ2J1cnkgd29ya2VkIHdpdGggb3RoZXIgbGVhZGluZyBjb21tZXJjaWFsIG1vcnRnYWdlIGxlbmRlcnMgZm9yIDE0IHllYXJzLCBpbmNsdWRpbmcgTWFudWxpZmUgRmluYW5jaWFsIGFuZCBNZXJyaWxsIEx5bmNoIEZpbmFuY2lhbC4gIFdlZGdidXJ54oCZcyBlZHVjYXRpb25hbCBiYWNrZ3JvdW5kIGluY2x1ZGVzIGEgQmFjaGVsb3Igb2YgQXJ0cyBmcm9tIFdpbGZyaWQgTGF1cmllciBVbml2ZXJzaXR5IGFuZCB0aGUgVXJiYW4gTGFuZCBFY29ub21pY3MgRGlwbG9tYSAoUmVhbCBFc3RhdGUpIGZyb20gdGhlIFVuaXZlcnNpdHkgb2YgQnJpdGlzaCBDb2x1bWJpYS4nLFxyXG4gIHNwZWNpYWw6ICcnXHJcbn0sXHJcbntcclxuICBmaXJzdG5hbWU6ICdHcmFudCcsXHJcbiAgbGFzdG5hbWU6ICdNdXJyYXknLFxyXG4gIGRpc3BsYXluYW1lOiAnR3JhbnQgTXVycmF5JyxcclxuICB0aXRsZTogJ1NlbmlvciBWaWNlIFByZXNpZGVudCcsXHJcbiAgY29tcGFueTogJ0NvbmNvcmQgUGFjaWZpYyBEZXZlbG9wbWVudHMsIEluYy4nLFxyXG4gIHBhbmVsOiAnR2xvYmFsIENvbm5lY3Rpb25zIEx1bmNoZW9uIHwgU3VuZGF5LCBPY3QuIDE1IGF0IDEyOjE1IHAubS4nLFxyXG4gIGJpbzE6ICdHcmFudCBNdXJyYXkgaXMgdGhlIFNlbmlvciBWaWNlIFByZXNpZGVudCwgU2FsZXMgYXQgQ29uY29yZCBQYWNpZmljIERldmVsb3BtZW50cyBJbmMuIEluIGhpcyBleGVjdXRpdmUgcG9zaXRpb24sIE11cnJheSBsZWFkcyBzdGFmZiBhbmQgc2FsZXMgYXQgdGhlIGNvbXBhbnnigJlzIG11bHRpcGxlIHByZXNlbnRhdGlvbiBjZW50ZXJzLCBhbmQgb3ZlcnNlZXMgc2FsZXMgaW4gZXhjZXNzIG9mICQxMCBiaWxsaW9uIGluIGhpZ2gtcmlzZSBjb21wbGV4ZXMgaW4gbWFqb3IgY2l0aWVzLiBNdXJyYXkgd2FzIGFsc28gVmljZSBQcmVzaWRlbnQgb2YgU2FsZXMgYXQgTUdNIFJlc29ydHPigJkgJDEwIGJpbGxpb24gQ2l0eSBDZW50ZXIgcHJvamVjdCBpbiBMYXMgVmVnYXMsIHRoZSBsYXJnZXN0IHByaXZhdGVseSBmdW5kZWQgZGV2ZWxvcG1lbnQgcHJvamVjdCBpbiBVLlMuIGhpc3RvcnkuJyxcclxuICBiaW8yOiAnJyxcclxuICBzcGVjaWFsOiAnJ1xyXG59LFxyXG57XHJcbiAgZmlyc3RuYW1lOiAnUG9vbmFtJyxcclxuICBsYXN0bmFtZTogJ01hdGhpcycsXHJcbiAgZGlzcGxheW5hbWU6ICdQb29uYW0gTWF0aGlzJyxcclxuICB0aXRsZTogJ0NFTycsXHJcbiAgY29tcGFueTogJ1N0ZWFsdGhGb3JjZScsXHJcbiAgcGFuZWw6ICdUaGUgV29tZW4gT3B0aW1pemluZyBPdXIgV29ybGQgfCBNb25kYXksIE9jdC4gMTYgYXQgMTA6MTUgYS5tLicsXHJcbiAgYmlvMTogJ1Bvb25hbSBNYXRoaXMgc3BlbnQgb3ZlciBhIGRlY2FkZSBpbiByZWFsIGVzdGF0ZSBwcml2YXRlIGVxdWl0eSBhbmQgZGV2ZWxvcG1lbnQuIEN1cnJlbnRseSwgTWF0aGlzIGlzIEZvdW5kZXIgYW5kIENFTyBvZiBTdGVhbHRoRm9yY2UuY29tLCBhIGdsb2JhbCBjb25zdWx0YW50IG5ldHdvcmssIHByb3ZpZGluZyBwcm9qZWN0LWJhc2VkIHJlYWwgZXN0YXRlIGludmVzdG1lbnQgaW5zaWdodHMgYW5kIGN1c3RvbWl6ZWQgY29uc3VsdGluZyBvbi1kZW1hbmQuIFN0ZWFsdGhGb3JjZSBoYXMgYmVlbiBjYWxsZWQgdGhlIHJvbG9kZXggb2YgYSByZWFsIGVzdGF0ZSBpbnZlc3RvcuKAmXMgZHJlYW1zLicsXHJcbiAgYmlvMjogJ0EgSGFydmFyZCBCQSBhbmQgV2hhcnRvbiBNQkEsIE1hdGhpcyB3YXMgcHJldmlvdXNseSBEZXB1dHkgSGVhZCBvZiBHbG9iYWwgUmVhbCBFc3RhdGUgQXNzZXQgTWdtdC4gZm9yIFBhcnRuZXJzIEdyb3VwICgkNDAgYmlsbGlvbiBBVU0pLCBhbmQgZWFybHkgaW4gaGVyIGNhcmVlciB3YXMgdGhlIDEzdGggRW1wbG95ZWUgYXQgVGhlIEdlcnNvbiBMZWhybWFuIEdyb3VwIChHTEcpLCBub3cgdmFsdWVkIGF0IG92ZXIgJDEgYmlsbGlvbi4nLFxyXG4gIHNwZWNpYWw6ICcnXHJcbn0sXHJcbntcclxuICBmaXJzdG5hbWU6ICdKdWxpYScsXHJcbiAgbGFzdG5hbWU6ICdEYXZpcycsXHJcbiAgZGlzcGxheW5hbWU6ICdKdWxpYSBEYXZpcycsXHJcbiAgdGl0bGU6ICdWUCwgR2xvYmFsIEhlYWQgb2YgQnJva2VyICYgUmVhbCBFc3RhdGUgUGFydG5lcnNoaXBzJyxcclxuICBjb21wYW55OiAnV2VXb3JrJyxcclxuICBwYW5lbDogJ1RoZSBXb21lbiBPcHRpbWl6aW5nIE91ciBXb3JsZCB8IE1vbmRheSwgT2N0LiAxNiBhdCAxMDoxNSBhLm0uJyxcclxuICBiaW8xOiAnSnVsaWEgRGF2aXMgaXMgVlAsIEdsb2JhbCBIZWFkIG9mIEJyb2tlciAmIFJlYWwgRXN0YXRlIFBhcnRuZXJzaGlwcyBhdCBXZVdvcmssIHdoZXJlIGhlciB0ZWFtIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgZGV2ZWxvcG1lbnQsIG1hbmFnZW1lbnQsIGFuZCBvcGVyYXRpb25zIG9mIHRoZSBwcm9ncmFtcy4gRGF2aXNcXCdzIGNhcmVlciBzcGFucyBvdmVyIDE0IHllYXJzIGZvY3VzZWQgcHJpbWFyaWx5IGluIGNvbW1lcmNpYWwgcmVhbCBlc3RhdGUuIFNoZSByZWNlaXZlZCBoZXIgTUJBIGZyb20gVU5DIGFuZCBoZXIgQkEgZnJvbSBNZXJlZGl0aCBDb2xsZWdlLicsXHJcbiAgYmlvMjogJzxpZnJhbWUgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9sNXRTSU5henc3OD9yZWw9MCZhbXA7Y29udHJvbHM9MFwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nLFxyXG4gIHNwZWNpYWw6ICcnXHJcbn0sXHJcbntcclxuICBmaXJzdG5hbWU6ICdSb3knLFxyXG4gIGxhc3RuYW1lOiAnQWJyYW1zJyxcclxuICBkaXNwbGF5bmFtZTogJ1JveSBBYnJhbXMnLFxyXG4gIHRpdGxlOiAnQ0VPIGFuZCBGb3VuZGVyJyxcclxuICBjb21wYW55OiAnUmVhbENvbm5leCcsXHJcbiAgcGFuZWw6ICdLZWVwZXJzIG9mIHRoZSBDYXBpdGFsIHwgTW9uZGF5LCBPY3QuIDE2IGF0IDg6MTUgYS5tJyxcclxuICBiaW8xOiAnJyxcclxuICBiaW8yOiAnPGlmcmFtZSB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjMxNVwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1hGRS1vTWc1VXdzP3JlbD0wJmFtcDtjb250cm9scz0wXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPicsXHJcbiAgc3BlY2lhbDogJydcclxufSxcclxue1xyXG4gIGZpcnN0bmFtZTogJ0VtaWx5JyxcclxuICBsYXN0bmFtZTogJ0xpbmUnLFxyXG4gIGRpc3BsYXluYW1lOiAnRW1pbHkgTGluZScsXHJcbiAgdGl0bGU6ICdWUCBvZiBDb21tZXJjaWFsIFNlcnZpY2VzJyxcclxuICBjb21wYW55OiAnUmVhbHRvcnMgUHJvcGVydHkgUmVzb3VyY2XCricsXHJcbiAgcGFuZWw6ICdUaGUgV29tZW4gT3B0aW1pemluZyBPdXIgV29ybGQgfCBNb25kYXksIE9jdC4gMTYgYXQgMTA6MTUgYS5tLicsXHJcbiAgYmlvMTogJ0VtaWx5IExpbmUgaXMgVmljZSBQcmVzaWRlbnQgb2YgQ29tbWVyY2lhbCBTZXJ2aWNlcyBmb3IgdGhlIFJlYWx0b3JzIFByb3BlcnR5IFJlc291cmNlwq4gKFJQUiksIGEgd2hvbGx5IG93bmVkIHN1YnNpZGlhcnkgb2YgdGhlIE5BVElPTkFMIEFTU09DSUFUSU9OIE9GIFJFQUxUT1JTwq4gKE5BUikuIFNoZSBpcyBwYXNzaW9uYXRlIGFib3V0IGVkdWNhdGluZyBvbiBkYXRhIGRyaXZlbiBzb2x1dGlvbnMgYW5kIGV4ZXJjaXNlcyBoZXIgYmFja2dyb3VuZCBpbiBJbnRlcmRpc2NpcGxpbmFyeSBSZXNlYXJjaCB0byBzdHJlbmd0aGVuIHRoZSBpbmZvcm1hdGlvbiBhbmQgYW5hbHlzaXMgYXZhaWxhYmxlIHRvIFJFQUxUT1JTwq4gYXMgYSBtZW1iZXJzLW9ubHkgYmVuZWZpdCB0aHJvdWdoIFJQUi4gRnJvbSBzaXRlIHNlbGVjdGlvbiBhbmQgaW52ZXN0bWVudCBhbmFseXNpcyB0b29scyB0byBkZW1vZ3JhcGhpYyBhbmQgcHN5Y2hvZ3JhcGhpYyBpbnNpZ2h0cyBhYm91dCBjb21tdW5pdGllcywgUlBSIENvbW1lcmNpYWwgaXMgYSBkYXRhYmFzZSBkZXNpZ25lZCB0byB2YWxpZGF0ZSBhIHByYWN0aXRpb25lcuKAmXMgbG9jYWwgZXhwZXJ0aXNlIHdoZW4gd29ya2luZyB3aXRoIGEgYnJvYWQgcmFuZ2Ugb2YgY2xpZW50cy4nLFxyXG4gIGJpbzI6ICdQcmlvciB0byBSUFIsIExpbmUgbWFuYWdlZCBEZXZlbG9wbWVudCBhbmQgT3V0cmVhY2ggZm9yIHRoZSBDb21tZXJjaWFsIFJlYWwgRXN0YXRlIERpdmlzaW9uIG9mIE5BUi4gU2hlIHNlcnZlcyBvbiB0aGUgQm9hcmQgb2YgQWR2aXNvcnMgZm9yIENvbW1pc3Npb25UcmFjLCBhbiBBdGxhbnRhIGJhc2VkIGNvbXBhbnkgdGhhdCBkZWxpdmVycyBjbG91ZC1jb21wdXRpbmcgc29sdXRpb25zIGZvciBjb21tZXJjaWFsIHJlYWwgZXN0YXRlIGNvbW1pc3Npb24gdHJhY2tpbmcsIGFzIHdlbGwgYXMgdGhlIEJvYXJkIG9mIERpcmVjdG9ycyBmb3IgU3BlY2lhbCBEYXlzIENhbXAsIHRoZSBzZWNvbmQgbG9uZ2VzdCBydW5uaW5nIHBlZGlhdHJpYyBvbmNvbG9neSBjYW1wIGluIHRoZSB3b3JsZC4gTGluZSBlYXJuZWQgYSBNYXN0ZXJzIGRlZ3JlZSBmcm9tIHRoZSBVbml2ZXJzaXR5IG9mIE1pY2hpZ2FuIGFuZCBhIEJhY2hlbG9yIG9mIEFydHMgZGVncmVlIGZyb20gQWxiaW9uIENvbGxlZ2UuJyxcclxuICBzcGVjaWFsOiAnJ1xyXG59XHJcblxyXG5dIiwidmFyIHNwb25zb3JzID0gW1xyXG5cdHtcclxuXHRcdHNwb25zb3JuYW1lOiAnVGVuLVgnLFxyXG5cdFx0c3BvbnNvcmxvZ286ICd0ZW4teC1sb2dvJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0c3BvbnNvcm5hbWU6ICdOQUkgR2xvYmFsJyxcclxuXHRcdHNwb25zb3Jsb2dvOiAnbmFpLWxvZ28nXHJcblx0fSxcclxuXHR7XHJcblx0XHRzcG9uc29ybmFtZTogJ1JFL01BWCcsXHJcblx0XHRzcG9uc29ybG9nbzogJ3JlbWF4LWxvZ28nXHJcblx0fSxcclxuXHR7XHJcblx0XHRzcG9uc29ybmFtZTogJ05hdGlvbmFsIEFzc29jaWF0aW9uIG9mIFJlYWx0b3JzIChOQVIpIENvbW1lcmNpYWwnLFxyXG5cdFx0c3BvbnNvcmxvZ286ICduYXItY29tbWVyY2lhbC1sb2dvJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0c3BvbnNvcm5hbWU6ICdTcGVycnkgQ29tbWVyY2lhbCBHbG9iYWwgQWZmaWxpYXRlcycsXHJcblx0XHRzcG9uc29ybG9nbzogJ3NwZXJyeS1jZ2EtbG9nbydcclxuXHR9LFxyXG5cdHtcclxuXHRcdHNwb25zb3JuYW1lOiAnU2lsdmVyIFBvcnRhbCBDYXBpdGFsJyxcclxuXHRcdHNwb25zb3Jsb2dvOiAnc2lsdmVyLXBvcnRhbC1jYXBpdGFsLWxvZ28nXHJcblx0fSxcclxuXHR7XHJcblx0XHRzcG9uc29ybmFtZTogJ1JlYWxDb25uZXgnLFxyXG5cdFx0c3BvbnNvcmxvZ286ICdyZWFsY29ubmV4LWxvZ28nXHJcblx0fSxcclxuXHR7XHJcblx0XHRzcG9uc29ybmFtZTogJ0Nyb3dkZnVuZGluZ0xhd3llcnMubmV0IHwgVHJvd2JyaWRnZSBTaWRvdGkgTExQJyxcclxuXHRcdHNwb25zb3Jsb2dvOiAnY3Jvd2RmdW5kaW5nLWxhd3llcnMtbG9nbydcclxuXHR9LFxyXG5cdHtcclxuXHRcdHNwb25zb3JuYW1lOiAnQXZpc29uIFlvdW5nJyxcclxuXHRcdHNwb25zb3Jsb2dvOiAnYXZpc29uLXlvdW5nLWxvZ28nXHJcblx0fSxcclxuXHR7XHJcblx0XHRzcG9uc29ybmFtZTogJ0xleGlzIE5leGlzJyxcclxuXHRcdHNwb25zb3Jsb2dvOiAnbGV4aXMtbmV4aXMtbG9nbydcclxuXHR9LFxyXG5cdHtcclxuXHRcdHNwb25zb3JuYW1lOiAnRXNyaScsXHJcblx0XHRzcG9uc29ybG9nbzogJ2VzcmktbG9nbydcclxuXHR9LFxyXG5cdHtcclxuXHRcdHNwb25zb3JuYW1lOiAnQ1JFIFRlY2gnLFxyXG5cdFx0c3BvbnNvcmxvZ286ICdjcmUtdGVjaC1sb2dvJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0c3BvbnNvcm5hbWU6ICdTdGV3YXJ0IFRpdGxlJyxcclxuXHRcdHNwb25zb3Jsb2dvOiAnc3Rld2FydC10aXRsZS1sb2dvJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0c3BvbnNvcm5hbWU6ICdDb3JmYWMgSW50ZXJuYXRpb25hbCcsXHJcblx0XHRzcG9uc29ybG9nbzogJ2NvcmZhYy1sb2dvJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0c3BvbnNvcm5hbWU6ICdUaGUgTmV3cyBGdW5uZWwnLFxyXG5cdFx0c3BvbnNvcmxvZ286ICduZXdzLWZ1bm5lbC1sb2dvJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0c3BvbnNvcm5hbWU6ICdDb2xkd2VsbCBCYW5rZXIgQ29tbWVyY2lhbCcsXHJcblx0XHRzcG9uc29ybG9nbzogJ2NiYy1sb2dvJ1xyXG5cdH1cclxuXSIsIi8qR2VuZXJhdGUgTm9uLUtleW5vdGUgU3BlYWtlcnMqL1xyXG52YXIgc3BlYWtlcnNHb0hlcmUgPSAkKCcuc3BlYWtlcnMtd3JhcCcpO1xyXG52YXIgcGhvdG9EaXIgPSBcImltZy9zcGVha2Vycy9zcGVha2VyLVwiO1xyXG52YXIgZGlzcGxheU5hbWU7XHJcbnZhciBsYXN0Rmlyc3Q7XHJcbnZhciBmaXJzdExhc3Q7XHJcbnZhciBzcGVha1RpdGxlO1xyXG52YXIgc3BlYWtDb2w7XHJcbnZhciBzcGVha1BhbmVsO1xyXG52YXIgaGVhZHNob3Q7XHJcbnZhciB0aGlzU3BlYWtlcjtcclxudmFyIG5vUGljID0gXCJoZWFkc2hvdC1uby1waWMuanBnXCI7XHJcbnZhciBzcGVha2VyUG9kO1xyXG52YXIgaXNTcGVjaWFsO1xyXG52YXIgaGlnaENsYXNzO1xyXG5cclxuLy8gR2VuZXJhdGUgU3BlYWtlcnNcclxuZm9yICh2YXIgcHJvcCBpbiBzcGVha2Vycykge1xyXG4gIHRoaXNTcGVha2VyID0gc3BlYWtlcnNbcHJvcF07XHJcbiAgZGlzcGxheU5hbWUgPSB0aGlzU3BlYWtlci5kaXNwbGF5bmFtZTtcclxuICBsYXN0Rmlyc3QgPSB0aGlzU3BlYWtlci5sYXN0bmFtZSArIFwiLVwiICsgdGhpc1NwZWFrZXIuZmlyc3RuYW1lO1xyXG4gIGxhc3RGaXJzdExvd2VyID0gbGFzdEZpcnN0LnRvTG93ZXJDYXNlKCk7XHJcbiAgcGhvdG8gPSBwaG90b0RpciArIGxhc3RGaXJzdExvd2VyICsgXCIuanBnXCI7XHJcbiAgc3BlYWtUaXRsZSA9IHRoaXNTcGVha2VyLnRpdGxlO1xyXG4gIHNwZWFrQ28gPSB0aGlzU3BlYWtlci5jb21wYW55O1xyXG4gIHNwZWFrUGFuZWwgPSB0aGlzU3BlYWtlci5wYW5lbDtcclxuICBzcGVjaWFsID0gdGhpc1NwZWFrZXIuc3BlY2lhbDtcclxuICBpZiAoc3BlY2lhbCA9PT0gJycpIHtcclxuXHRcdGlzU3BlY2lhbCA9ICdoaWRkZW4nO1xyXG5cdFx0aGlnaENsYXNzPSAnJztcclxuXHR9IGVsc2Uge1xyXG5cdFx0aXNTcGVjaWFsID0gJ2hpZ2hsaWdodCc7XHJcblx0XHRoaWdoQ2xhc3M9ICdmZWF0dXJlJztcclxuXHR9XHJcbiAgc3BlYWtlclBvZCA9ICc8ZGl2IGNsYXNzPVwic3BlYWtlciAnK2hpZ2hDbGFzcysnXCIgaWQ9XCInK2xhc3RGaXJzdExvd2VyKydcIj48ZGl2IGNsYXNzPVwiaGVhZHNob3QgJytzcGVha1BhbmVsKydcIj48aW1nIHNyYz1cIicrcGhvdG8rJ1wiIGFsdD1cIlwiIG9uZXJyb3I9XCJpbWdFcnJvcih0aGlzKVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJpbmZvXCI+PGgzIGNsYXNzPVwiJytpc1NwZWNpYWwrJ1wiXCI+JytzcGVjaWFsKyc8L2gzPjxwIGNsYXNzPVwibmFtZVwiPicrZGlzcGxheU5hbWUrJzwvcD48cCBjbGFzcz1cInRpdGxlXCI+JytzcGVha1RpdGxlKycsICcrc3BlYWtDbysnPC9wPjwvZGl2PjwvZGl2PidcclxuICBzcGVha2Vyc0dvSGVyZS5hcHBlbmQoc3BlYWtlclBvZCk7XHJcbn1cclxuZnVuY3Rpb24gaW1nRXJyb3Ioc291cmNlKSB7XHJcblx0c291cmNlLnNyYyA9XHJcblx0XCJpbWcvbm8taGVhZHNob3QuanBnXCI7XHJcblx0c291cmNlLm9uZXJyb3IgPSBcIlwiO1xyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vLyBTcGVha2VyIEJpbyBNb2RhbHNcclxudmFyIG1vZGFsU3RhcnQgPSAnPGRpdiBjbGFzcz1cIm1vZGFsXCI+PGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnQgY2ZcIj48cCBjbGFzcz1cImNsb3NlLW1vZGFsXCI+eDwvcD4nO1xyXG52YXIgbW9kYWxFbmQgPSAnPC9kaXY+PC9kaXY+JztcclxudmFyIHNob3dNb2RhbCA9IGZ1bmN0aW9uKCl7JChcIi5tb2RhbFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiaW5pdGlhbFwiKX1cclxudmFyIGNsb3NlTW9kYWwgPSBmdW5jdGlvbigpeyQoJy5jbG9zZS1tb2RhbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcImRpdltjbGFzc149J21vZGFsJ11cIikuY3NzKCdkaXNwbGF5JywgJ25vbmUnKS5yZW1vdmUoKTt9KTt9XHJcbnZhciBjbG9zZU1vZGFsQnRuID0gJzxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgY2xvc2UtbW9kYWxcIj5DbG9zZTwvYT4nXHJcbnZhciBrZXlub3RlID0gJCgnLmtleW5vdGUnKTtcclxudmFyIHNwZWFrZXIgPSAkKCcuc3BlYWtlcicpO1xyXG52YXIgc3BlYWtlckJpb05hbWU7XHJcbnZhciBzcGVha2VyQmlvO1xyXG52YXIgc3BlYWtlclBvcztcclxudmFyIHNwZWFrZXJCaW9UaXRsZTtcclxudmFyIHNwZWFrZXJCaW9Db21wYW55O1xyXG52YXIgc3BlYWtlckhlYWRzaG90O1xyXG52YXIgc3BlYWtlclBhbmVsO1xyXG5cclxuc3BlYWtlci5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdHNwZWFrZXJQb3MgPSAoJCh0aGlzKS5pbmRleCgnLnNwZWFrZXInKSk7XHJcblx0Y29uc29sZS5sb2coc3BlYWtlclBvcyk7XHJcblx0c3BlYWtlckJpb05hbWUgPSAkKHRoaXMpLmZpbmQoJy5uYW1lJykudGV4dCgpO1xyXG5cdHRoaXNTcGVha2VyID0gc3BlYWtlcnNbc3BlYWtlclBvc107XHJcblx0c3BlYWtlckJpbyA9ICc8cD4nK3RoaXNTcGVha2VyLmJpbzErJzwvcD48cD4nK3RoaXNTcGVha2VyLmJpbzIrJzwvcD4nO1xyXG5cdHNwZWFrZXJCaW9UaXRsZSA9IHRoaXNTcGVha2VyLnRpdGxlO1xyXG5cdHNwZWFrZXJCaW9Db21wYW55ID0gdGhpc1NwZWFrZXIuY29tcGFueTtcclxuXHRzcGVha2VyUGFuZWwgPSB0aGlzU3BlYWtlci5wYW5lbDtcclxuXHRzcGVha2VySGVhZHNob3QgPSAkKHRoaXMpLmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycpO1xyXG5cdCRiLmFwcGVuZChtb2RhbFN0YXJ0Kyc8aDE+JytzcGVha2VyQmlvTmFtZSsnPC9oMT48aDI+JytzcGVha2VyQmlvVGl0bGUrJzxicj4nK3NwZWFrZXJCaW9Db21wYW55Kyc8L2gyPjxpbWcgc3JjPVwiJytzcGVha2VySGVhZHNob3QrJ1wiPjxwPicrc3BlYWtlckJpbysnPC9wPjxwIGNsYXNzPVwic3BlYWtlci1zZXNzaW9uXCI+PHN0cm9uZz5TZXNzaW9uOiA8L3N0cm9uZz4nK3NwZWFrZXJQYW5lbCsnPC9wPicrbW9kYWxFbmQpO1xyXG5cdHNob3dNb2RhbCgpO1xyXG5cdGNsb3NlTW9kYWwoKTtcclxufSk7XHJcblxyXG5cclxuLypHZW5lcmF0ZSBTZXNzaW9ucyovXHJcbnZhciBzZXNzaW9uc0dvSGVyZSA9ICQoJy50aGUtc2Vzc2lvbnMnKTtcclxudmFyIHRoaXNTZXNzaW9uO1xyXG52YXIgc2Vzc2lvbklkO1xyXG52YXIgc2Vzc2lvblRpdGxlO1xyXG52YXIgc2Vzc2lvbkRlc2M7XHJcbnZhciBzZXNzaW9uU3BvbnNvcjtcclxudmFyIHNlc3Npb25UaW1lO1xyXG52YXIgc2Vzc2lvbkRhdGVUaW1lO1xyXG52YXIgZXZlbnRQb2Q7XHJcbnZhciBpc1Nwb25zb3JlZDtcclxudmFyIGZlYXR1cmVkU2VzcztcclxuXHJcbmZvciAodmFyIHByb3AgaW4gc2Vzc2lvbnMpIHtcclxuICB0aGlzU2Vzc2lvbj0gc2Vzc2lvbnNbcHJvcF07XHJcbiAgc2Vzc2lvbklkID0gdGhpc1Nlc3Npb24uaWQ7XHJcblx0c2Vzc2lvblRpdGxlID0gdGhpc1Nlc3Npb24udGl0bGU7IFxyXG5cdHNlc3Npb25EZXNjID0gdGhpc1Nlc3Npb24uZGVzYztcclxuXHRzZXNzaW9uU3BvbnNvciA9IHRoaXNTZXNzaW9uLnNwb25zb3I7XHJcblx0c2Vzc2lvblRpbWUgPSB0aGlzU2Vzc2lvbi50aW1lO1xyXG5cdHNlc3Npb25EYXRlVGltZSA9IHRoaXNTZXNzaW9uLmRhdGV0aW1lO1xyXG5cdGZlYXR1cmVkU2VzcyA9IHRoaXNTZXNzaW9uLnNwZWNpYWxcclxuXHRpZiAoc2Vzc2lvblNwb25zb3IgID09PSAnJykge1xyXG5cdFx0aXNTcG9uc29yZWQgPSAnaGlkZGVuJ1xyXG5cdH0gZWxzZSB7XHJcblx0XHRpc1Nwb25zb3JlZCA9ICdzcG9uc29yZWQnXHJcblx0fVxyXG5cdGV2ZW50UG9kID0gJzxzZWN0aW9uIGNsYXNzPVwiZXZlbnQgY2ZcIiBpZD1cIicrc2Vzc2lvbklkKydcIj48ZGl2IGNsYXNzPVwibGVmdFwiPjxwPjx0aW1lIGRhdGV0aW1lPVwiJytzZXNzaW9uRGF0ZVRpbWUrJ1wiPicrc2Vzc2lvblRpbWUrJzwvdGltZT48L3A+PC9kaXY+PGRpdiBjbGFzcz1cInJpZ2h0XCI+PGg0PicrZmVhdHVyZWRTZXNzK3Nlc3Npb25UaXRsZSsnPC9oND48cD4nK3Nlc3Npb25EZXNjKyc8L3A+PHAgY2xhc3M9XCInK2lzU3BvbnNvcmVkKydcIj5TcG9uc29yZWQgYnkgJytzZXNzaW9uU3BvbnNvcisnPC9wPjwvZGl2Pjwvc2VjdGlvbj4nO1xyXG5cdHNlc3Npb25zR29IZXJlLmFwcGVuZChldmVudFBvZCk7XHJcbn1cclxuXHJcblxyXG5cclxuLypHZW5lcmF0ZSBTcG9uc29ycyovXHJcbnZhciBzcG9uc29yc0dvSGVyZSA9ICQoJy5zcG9uc29yLWxvZ29zJyk7XHJcbnZhciBzcG9uc29yUG9kO1xyXG52YXIgdGhpc1Nwb25zb3I7XHJcbnZhciBzcG9uc29yTmFtZTtcclxudmFyIHNwb25zb3JMb2dvO1xyXG5cclxuZm9yICh2YXIgcHJvcCBpbiBzcG9uc29ycykge1xyXG4gIHRoaXNTcG9uc29yID0gc3BvbnNvcnNbcHJvcF07XHJcbiAgc3BvbnNvck5hbWU9IHRoaXNTcG9uc29yLnNwb25zb3JuYW1lO1xyXG5cdHNwb25zb3JMb2dvID0gdGhpc1Nwb25zb3Iuc3BvbnNvcmxvZ287IFxyXG5cdHNwb25zb3JQb2QgPSAnPGltZyBzcmM9XCJpbWcvc3BvbnNvcnMvJytzcG9uc29yTG9nbysnLmpwZ1wiIGFsdD1cIicrc3BvbnNvck5hbWUrJ1wiLz4nXHJcblx0c3BvbnNvcnNHb0hlcmUuYXBwZW5kKHNwb25zb3JQb2QpO1xyXG59XHJcblxyXG4vLyBTaG93IHByaWNpbmcgZGV0YWlsc1xyXG52YXIgcHJpY2VzID0gJCgnLnByaWNpbmcnKTtcclxudmFyIHRpY2tldCA9ICQoJy50aWNrZXRzJyk7XHJcbnByaWNlcy5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICRiLmFwcGVuZChtb2RhbFN0YXJ0Kyc8aDE+UHJpY2luZzwvaDE+PGgyPk1haW4gQ29uZmVyZW5jZSB8IE9jdC4gMTY8L2gyPjxwPkNDSU0gTWVtYmVyOiAkMjk1IFVTRDxicj5Ob24tbWVtYmVyOiAkMzUwIFVTRDwvcD48aDI+UmVsYXRlZCBFdmVudHMgfCBPY3QuIDE1PC9oMj48dWw+PGxpPkdsb2JhbCBDb25uZWN0aW9ucyBMdW5jaGVvbiAoT2N0LiAxNSk6ICQ1MCBVU0Q8L2xpPjxsaT5PZmZpY2lhbCBPcGVuaW5nIFJlY2VwdGlvbiAoT2N0LiAxNSk6IEZyZWUsIGJ1dCByZWdpc3RyYXRpb24gaXMgcmVxdWlyZWQ8L2xpPjxsaT5DZW50cmFsIENhbmFkYSBDQ0lNIENoYXB0ZXIgTmV0d29ya2luZyBFdmVudCAoT2N0LiAxNSk6ICQ1MCBVU0Q8L2xpPjwvdWw+PHA+WW91IGNhbiByZWdpc3RlciBmb3IgdGhlIHJlbGF0ZWQgZXZlbnRzIGFzIHBhcnQgb2YgdGhlIG1haW4gY29uZmVyZW5jZSByZWdpc3RyYXRpb24gcHJvY2Vzcy48L3A+PGJyPjxwPjxhIGhyZWY9XCJodHRwczovL2NjaW0ucGVyc29uaWZ5Y2xvdWQuY29tL1BlcnNvbmlmeUVidXNpbmVzcy9EZWZhdWx0LmFzcHg/VGFiSUQ9MTYyMCZhbXA7cHJvZHVjdElkPTEzNTQzMTc3NVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+UmVnaXN0ZXIgTm93PC9hPjwvcD48YnI+Jyttb2RhbEVuZCk7XHJcblx0JCgnLm1vZGFsLWNvbnRlbnQnKS5hZGRDbGFzcygncHJpY2UtaW5mbycpO1xyXG5cdHNob3dNb2RhbCgpO1xyXG5cdGNsb3NlTW9kYWwoKTtcclxufSk7XHJcbiIsIi8vIElEIG9mIHRoZSBHb29nbGUgU3ByZWFkc2hlZXRcclxuIC8vIHZhciBzcHJlYWRzaGVldElEID0gXCIxZ0d2N2tWUE5OeVY3RWp4b3pLMldrUGEyaGZxb3R2VDBVWi1YM1ZNNHZxVVwiO1xyXG5cclxuIC8vIC8vIE1ha2Ugc3VyZSBpdCBpcyBwdWJsaWMgb3Igc2V0IHRvIEFueW9uZSB3aXRoIGxpbmsgY2FuIHZpZXcgXHJcbiAvLyB2YXIgdXJsID0gXCJodHRwczovL3NwcmVhZHNoZWV0cy5nb29nbGUuY29tL2ZlZWRzL2xpc3QvXCIgKyBzcHJlYWRzaGVldElEICsgXCIvb2Q2L3B1YmxpYy92YWx1ZXM/YWx0PWpzb25cIjtcclxuXHJcbiAvLyAkLmdldEpTT04odXJsLCBmdW5jdGlvbihkYXRhKSB7XHJcblxyXG4gLy8gIHZhciBlbnRyeSA9IGRhdGEuZmVlZC5lbnRyeTtcclxuXHJcbiAvLyAgJChlbnRyeSkuZWFjaChmdW5jdGlvbigpe1xyXG4gLy8gICAgLy8gQ29sdW1uIG5hbWVzIGFyZSBuYW1lLCBhZ2UsIGV0Yy5cclxuIC8vICAgICQoJy5yZXN1bHRzJykucHJlcGVuZCgnPGgyPicrdGhpcy5nc3gkbmFtZS4kdCsnPC9oMj48cD4nK3RoaXMuZ3N4JGFnZS4kdCsnPC9wPicpO1xyXG4gLy8gIH0pO1xyXG5cclxuIC8vIH0pOyIsInZhciAkdyA9ICQod2luZG93KTtcclxudmFyICRiPSAkKCdib2R5Jyk7XHJcbnZhciAkdGhpcyA9ICQodGhpcyk7XHJcbnZhciBtZW51ID0gJCgnaGVhZGVyIC5idXJnZXInKTtcclxudmFyIG5hdiA9ICQoJ2hlYWRlciBuYXYnKTtcclxudmFyIG5hdkEgPSAkKCdib2R5PmhlYWRlciBuYXYgYScpO1xyXG52YXIgbmF2QnRuID0gJCgnYm9keT5oZWFkZXIgbmF2IHVsIGxpIC5idG4nKVxyXG52YXIgaGVhZGVyID0gJCgnYm9keT5oZWFkZXInKTtcclxudmFyIHNwZWFrZXIgPSAkKCcuc3BlYWtlcicpO1xyXG52YXIgaGVhZGVyTG9nbyA9ICQoJ2hlYWRlciAubG9nbycpO1xyXG5cclxuLy8gSGlkZXMgb3IgU2hvd3MgbmF2IGluIG1vYmlsZVxyXG5tZW51Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bmF2LnRvZ2dsZUNsYXNzKCd1bmhpZGUtbmF2Jyk7XHJcbiAgICBtZW51LnRvZ2dsZUNsYXNzKCdtZW51LWNsb3NlJyk7XHJcbn0pO1xyXG5cclxuLy9NYWtlIGhlYWRlciBnZXQgY29tcGFjdCBvbiBzY3JvbGxcclxuLy9XYXRjaCB0aGUgc2Nyb2xsaW5nIGluIHRoZSBicm93c2VyLCBhbmQgZG8gdGhpcyBmdW5jdGlvblxyXG52YXIgYWRqdXN0TmF2ID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuIC8vIElmIHVzZXIgaGFzIHNjcm9sbGVkIHBhc3QgMzAwcHhcclxuICBpZiAoJHRoaXMuc2Nyb2xsVG9wKCkgPiAzMDAgJiYgJHcud2lkdGgoKSA+IDExNDUpIHtcclxuICAgIGhlYWRlci5jc3Moe1xyXG4gICAgICBoZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICc5MHB4J1xyXG4gICAgfSk7XHJcbiAgICBoZWFkZXJMb2dvLmNzcyh7XHJcbiAgICAgIG1heFdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICBtYXJnaW5Ub3A6ICc3cHgnXHJcbiAgICB9KTtcclxuICAgIG1lbnUuYWRkQ2xhc3MoJ2F1dG9XSCcpO1xyXG4gICAgbmF2LmFkZENsYXNzKCdtYXJnaW4tbmF2LXNtYWxsLWhlYWRpbmcnKTtcclxuICAgIG5hdkEuYWRkQ2xhc3MoJ25hdi1pdGVtcy1uZXctcGFkZGluZycpO1xyXG4gICAgbmF2QnRuLmFkZENsYXNzKCdyZWdpc3Rlci1idG4tc21hbGwtaGVhZGluZycpO1xyXG4gIH0gZWxzZSBpZiAoJHRoaXMuc2Nyb2xsVG9wKCkgPD0gMzAwICYmICR3LndpZHRoKCkgPiAxMTQ1KSB7XHJcbiAgIGhlYWRlci5jc3Moe1xyXG4gICAgICBoZWlnaHQ6ICc4MHB4JyxcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICcxNzBweCdcclxuICAgIH0pO1xyXG4gICBoZWFkZXJMb2dvLmNzcyh7XHJcbiAgICAgIG1heFdpZHRoOiAnMzAwcHgnLFxyXG4gICAgICBtYXJnaW5Ub3A6ICcyMHB4J1xyXG4gICAgfSk7XHJcbiAgIG1lbnUucmVtb3ZlQ2xhc3MoJ2F1dG9XSCcpO1xyXG4gICBuYXYucmVtb3ZlQ2xhc3MoJ21hcmdpbi1uYXYtc21hbGwtaGVhZGluZycpO1xyXG4gICBuYXZBLnJlbW92ZUNsYXNzKCduYXYtaXRlbXMtbmV3LXBhZGRpbmcnKTtcclxuICAgbmF2QnRuLnJlbW92ZUNsYXNzKCdyZWdpc3Rlci1idG4tc21hbGwtaGVhZGluZycpO1xyXG4gIH0gZWxzZSBpZiAoJHRoaXMuc2Nyb2xsVG9wKCkgPD0gMzAwICYmICR3LndpZHRoKCkgPD0gMTE0NSkge1xyXG4gICAgaGVhZGVyLmNzcyh7XHJcbiAgICAgIGhlaWdodDogJzcwcHgnLFxyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJzEzMHB4J1xyXG4gICAgfSk7XHJcbiAgICBoZWFkZXJMb2dvLmNzcyh7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIG1heFdpZHRoOiAnMzQwcHgnLFxyXG4gICAgICBtYXJnaW5Ub3A6ICcxMHB4J1xyXG4gICAgfSk7XHJcbiAgICBtZW51LmNzcyh7XHJcbiAgICAgIHdpZHRoOiAnNTBweCcsXHJcbiAgICAgIGhlaWdodDogJzUwcHgnLFxyXG4gICAgICBtYXJnaW5Ub3A6ICcxMHB4J1xyXG4gICAgfSk7XHJcbiAgICBuYXYuY3NzKCd0b3AnLCAnNzBweCcpO1xyXG4gICAgbmF2LnJlbW92ZUNsYXNzKCdtYXJnaW4tbmF2LXNtYWxsLWhlYWRpbmcnKTtcclxuICAgIG5hdkEucmVtb3ZlQ2xhc3MoJ25hdi1pdGVtcy1uZXctcGFkZGluZycpO1xyXG4gICAgbmF2QnRuLnJlbW92ZUNsYXNzKCdyZWdpc3Rlci1idG4tc21hbGwtaGVhZGluZycpO1xyXG4gIH0gZWxzZSBpZiAoJHRoaXMuc2Nyb2xsVG9wKCkgPiAzMDAgJiYgJHcud2lkdGgoKSA8PSAxMTQ1KSB7XHJcbiAgICBoZWFkZXIuY3NzKHtcclxuICAgICAgaGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiAnOTBweCdcclxuICAgIH0pO1xyXG4gICAgaGVhZGVyTG9nby5jc3Moe1xyXG4gICAgICB3aWR0aDogJzI3NXB4JyxcclxuICAgICAgbWFyZ2luVG9wOiAnNnB4J1xyXG4gICAgfSk7XHJcbiAgICBtZW51LmNzcyh7XHJcbiAgICAgIHdpZHRoOiAnNDBweCcsXHJcbiAgICAgIGhlaWdodDogJzQwcHgnLFxyXG4gICAgICBtYXJnaW5Ub3A6ICc1cHgnXHJcbiAgICB9KTtcclxuICAgIG5hdi5jc3MoJ3RvcCcsICc1MHB4Jyk7XHJcbiAgICBuYXYucmVtb3ZlQ2xhc3MoJ21hcmdpbi1uYXYtc21hbGwtaGVhZGluZycpO1xyXG4gICAgbmF2QS5yZW1vdmVDbGFzcygnbmF2LWl0ZW1zLW5ldy1wYWRkaW5nJyk7XHJcbiAgICBuYXZCdG4ucmVtb3ZlQ2xhc3MoJ3JlZ2lzdGVyLWJ0bi1zbWFsbC1oZWFkaW5nJyk7XHJcbiAgfVxyXG4gIC8vIGVsc2UgaWYgKCR3LndpZHRoKCkgPD0gNDcxKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZygndGhpcycpO1xyXG4gIC8vICAgaGVhZGVyLmNzcyh7XHJcbiAgLy8gICAgIGhlaWdodDogJzQwcHgnLFxyXG4gIC8vICAgICBiYWNrZ3JvdW5kU2l6ZTogJzkwcHgnXHJcbiAgLy8gICB9KTtcclxuICAvLyAgIGhlYWRlckxvZ28uY3NzKHtcclxuICAvLyAgICAgd2lkdGg6ICcyNjVweCcsXHJcbiAgLy8gICAgIG1hcmdpblRvcDogJzVweCdcclxuICAvLyAgIH0pO1xyXG4gIC8vICAgbWVudS5jc3Moe1xyXG4gIC8vICAgICB3aWR0aDogJzUwcHgnLFxyXG4gIC8vICAgICBoZWlnaHQ6ICc1MHB4JyxcclxuICAvLyAgICAgbWFyZ2luVG9wOiAnMTBweCdcclxuICAvLyAgIH0pO1xyXG4gIC8vICAgbmF2LmNzcygndG9wJywgJzQwcHgnKTtcclxuICAvLyAgIG5hdi5yZW1vdmVDbGFzcygnbWFyZ2luLW5hdi1zbWFsbC1oZWFkaW5nJyk7XHJcbiAgLy8gICBuYXZBLnJlbW92ZUNsYXNzKCduYXYtaXRlbXMtbmV3LXBhZGRpbmcnKTtcclxuICAvLyAgIG5hdkJ0bi5yZW1vdmVDbGFzcygncmVnaXN0ZXItYnRuLXNtYWxsLWhlYWRpbmcnKTtcclxuICAvLyB9XHJcbn1cclxuXHJcbiR3LnNjcm9sbChmdW5jdGlvbigpe1xyXG4gIGFkanVzdE5hdigpO1xyXG59KTtcclxuJHcucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgYWRqdXN0TmF2KCk7XHJcbiAgaWYgKCR3LndpZHRoKCkgPD0gMTE0NSkge1xyXG4gICBuYXYucmVtb3ZlQ2xhc3MoJ21hcmdpbi1uYXYtc21hbGwtaGVhZGluZycpO1xyXG4gICBuYXZBLnJlbW92ZUNsYXNzKCduYXYtaXRlbXMtbmV3LXBhZGRpbmcnKTtcclxuICAgbmF2QnRuLnJlbW92ZUNsYXNzKCdyZWdpc3Rlci1idG4tc21hbGwtaGVhZGluZycpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vL0lmIG1vYmlsZSwgaGlkZSBuYXYgb24gbWVudSBpdGVtIGNsaWNrXHJcbiQoJ25hdiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgaWYgKCR3LndpZHRoKCkgPCAxMTQ2KSB7XHJcbiAgICBuYXYudG9nZ2xlQ2xhc3MoJ3VuaGlkZS1uYXYnKTtcclxuICAgIG1lbnUudG9nZ2xlQ2xhc3MoJ21lbnUtY2xvc2UnKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy9TbW9vdGggU2Nyb2xsaW5nOiBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2pxdWVyeS9zbW9vdGgtc2Nyb2xsaW5nL1xyXG4vLyBTZWxlY3QgYWxsIGxpbmtzIHdpdGggaGFzaGVzXHJcbiQoJ2FbaHJlZio9XCIjXCJdJylcclxuICAvLyBSZW1vdmUgbGlua3MgdGhhdCBkb24ndCBhY3R1YWxseSBsaW5rIHRvIGFueXRoaW5nXHJcbiAgLm5vdCgnW2hyZWY9XCIjXCJdJylcclxuICAubm90KCdbaHJlZj1cIiMwXCJdJylcclxuICAuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIC8vIE9uLXBhZ2UgbGlua3NcclxuICAgIGlmIChcclxuICAgICAgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgXHJcbiAgICAgICYmIFxyXG4gICAgICBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lXHJcbiAgICApIHtcclxuICAgICAgLy8gRmlndXJlIG91dCBlbGVtZW50IHRvIHNjcm9sbCB0b1xyXG4gICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xyXG4gICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArICddJyk7XHJcbiAgICAgIC8vIERvZXMgYSBzY3JvbGwgdGFyZ2V0IGV4aXN0P1xyXG4gICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xyXG4gICAgICAgIC8vIE9ubHkgcHJldmVudCBkZWZhdWx0IGlmIGFuaW1hdGlvbiBpcyBhY3R1YWxseSBnb25uYSBoYXBwZW5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxyXG4gICAgICAgIH0sIDEwMDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgLy8gQ2FsbGJhY2sgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgICAvLyBNdXN0IGNoYW5nZSBmb2N1cyFcclxuICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJCh0YXJnZXQpO1xyXG4gICAgICAgICAgJHRhcmdldC5mb2N1cygpO1xyXG4gICAgICAgICAgaWYgKCR0YXJnZXQuaXMoXCI6Zm9jdXNcIikpIHsgLy8gQ2hlY2tpbmcgaWYgdGhlIHRhcmdldCB3YXMgZm9jdXNlZFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkdGFyZ2V0LmF0dHIoJ3RhYmluZGV4JywnLTEnKTsgLy8gQWRkaW5nIHRhYmluZGV4IGZvciBlbGVtZW50cyBub3QgZm9jdXNhYmxlXHJcbiAgICAgICAgICAgICR0YXJnZXQuZm9jdXMoKTsgLy8gU2V0IGZvY3VzIGFnYWluXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiJdfQ==