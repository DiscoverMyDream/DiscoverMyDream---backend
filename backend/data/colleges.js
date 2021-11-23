const colleges= [
    {
        name:'California Institute of Technology',
        image:'/images/1.jpg',
        description: "The California Institute of Technology (Caltech) is a private research university in Pasadena, California, US. The university is known for its strength in science and engineering, and is one among a small group of institutes of technology in the United States which is primarily devoted to the instruction of pure and applied sciences.",
        collegelink:'https://www.caltech.edu/',
        dataset:'caltechData.csv',

    },

    {
        name:  'Harvard University',
        image: '/images/2.jpg',
        description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Founded in 1636 as Harvard College and named for its first benefactor, the Puritan clergyman John Harvard, it is the oldest institution of higher learning in the United States and among the most prestigious in the world. The Massachusetts colonial legislature authorized Harvards founding, dreading to leave an illiterate ministry to the churches, when our present ministers shall lie in the dust",
        collegelink:'https://www.harvard.edu/',
        dataset:'harvardDataset.csv',

    },
    {
        name:  'Washington University in St Louis',
        image: '/images/3.jpg',
        description: "Washington University in St. Louis (WashU, or WUSTL) is a private research university in Greater St. Louis with its main campus (Danforth) mostly in unincorporated St. Louis County, Missouri, and Clayton, Missouri. It also has a West Campus in Clayton, North Campus in the West End neighborhood of St. Louis, Missouri, and Medical Campus in the Central West End neighborhood of St. Louis, Missouri.Founded in 1853 and named after George Washington",
        collegelink: 'https://wustl.edu/' ,
        dataset:'washingtonUniversityData.csv',

    },
    {
        name:  'Duke University',
        image: '/images/4.jpg',
        description: "Duke University is a private research university in Durham, North Carolina. Founded by Methodists and Quakers in the present-day town of Trinity in 1838, the school moved to Durham in 1892.[15] In 1924, tobacco and electric power industrialist James Buchanan Duke established The Duke Endowment and the institution changed its name to honor his deceased father, Washington Duke.The campus spans over 8,600 acres (3,500 hectares) on three contiguous sub-campuses in Durham",
        collegelink:'https://duke.edu/',
        dataset:'dukeUniversityData.csv',

    },
    {
        name:  'University of Chicago',
        image: '/images/5.jpg',
        description: "The University of Chicago is a private research university in Chicago, Illinois. Founded in 1890, its main campus is located in Chicago's Hyde Park neighborhood.[7] It enrolled 16,445 students in Fall 2019, including 6,286 undergraduates and 10,159 graduate students.[1] The University of Chicago is ranked among the best universities in the world by major education publications,[8][9][10][11] and it is among the most selective in the United States.",
        collegelink:'https://www.uchicago.in/',
        dataset:'chicagoUniversityData.csv',

    },
     {
        name:  'Stanford University',
        image: '/images/6.jpg',
        description: "Stanford University, officially Leland Stanford Junior University,[13][14] is a private research university in Stanford, California. The campus occupies 8,180 acres (3,310 hectares), among the largest in the United States, and enrolls over 17,000 students.[15] Stanford is ranked among the best universities in the world.",
        collegelink:'https://www.stanford.edu/',
        dataset:'stanfordUniversityData.csv',

    },
    {
        name:  'Massachusetts Institute of Technology',
        image: '/images/7.jpg',
        description: "Massachusetts Institute of Technology (MIT) is a private land-grant research university in Cambridge, Massachusetts. Established in 1861, MIT has since played a key role in the development of modern technology and science and has been ranked among the top academic institutions in the world.Yale University is a private Ivy League research university in New Haven, Connecticut. Founded in 1701 as the Collegiate School, it is the third-oldest institution of higher education in the United States and among the most prestigious in the world.",
        collegelink:'https://www.mit.edu/',
        dataset:'massachussetIntituteData.csv',

    },
     {
        name:   'Yale University',
        image: '/images/8.jpg',
        description: "One of the nine Colonial Colleges chartered before the American Revolution, the Collegiate School was renamed Yale College in 1718 to honor the school's largest private benefactor for the first century of its existence, Elihu Yale.",
        collegelink:'https://www.yale.edu/',
        dataset:'yaleUniversityData.csv',
        

    },
    {
        name:   'Princeton University',
        image: '/images/9.jpg',
        description: "Princeton University is a private Ivy League research university in Princeton, New Jersey. Founded in 1746 in Elizabeth as the College of New Jersey, Princeton is the fourth-oldest institution of higher education in the United States and one of the nine colonial colleges chartered before the American Revolution.The institution moved to Newark in 1747, and then to the current site nine years later. It officially became a university in 1896 and was subsequently renamed Princeton University.",
        collegelink:'https://www.princeton.edu/',
        dataset:'princetonUniversityData.csv',

    },
     {
        name:   'Cornell University',
        image: '/images/10.jpg',
        description: "Cornell University is a private Ivy League and statutory land-grant research university, based in Ithaca, New York. Founded in 1865 by Ezra Cornell and Andrew Dickson White, Cornell was founded with the intention to teach and make contributions in all fields of knowledge — from the classics to the sciences, and from the theoretical to the applied.",
        collegelink:'https://www.cornell.edu/',
        dataset:'cornellUniversityData.csv',

    },
     {
        name:    'Johns Hopkins University',
        image: '/images/11.jpg',
        description: "Johns Hopkins (May 19, 1795 – December 24, 1873) was an American entrepreneur, investor, and philanthropist of Baltimore, Maryland. His bequests founded numerous institutions bearing his name, most notably Johns Hopkins Hospital, and Johns Hopkins University (including its academic divisions such as Johns Hopkins School of Nursing, Johns Hopkins School of Medicine, Johns Hopkins Carey Business School, Johns Hopkins Bloomberg School of Public Health, and Johns Hopkins School of Advanced Internati",
        collegelink:'https://www.jhu.edu/',
        dataset:'johnsHopkinsData.csv',

    },
    {
        name:     'Rice University',
        image: '/images/12.jpg',
        description: "William Marsh Rice University (Rice University) is a private research university in Houston, Texas. It is situated on a 300-acre campus near the Houston Museum District and is adjacent to the Texas Medical Center.Opened in 1912 after the murder of its namesake William Marsh Rice, Rice is a research university with an undergraduate focus. Its emphasis on education is demonstrated by a small student body and 6:1 student-faculty ratio.",
        collegelink:'https://www.rice.edu/',
        dataset:'riceUniversityData.csv',

    },
    {
        name:     'Dartmouth College',
        image: '/images/13.jpg',
        description: "Dartmouth College (/ˈdɑːrtməθ/ DART-məth) is a private Ivy League research university in Hanover, New Hampshire, United States. Established in 1769 by Eleazar Wheelock, it is the ninth-oldest institution of higher education in the United States and one of the nine colonial colleges chartered before the American Revolution.",
        collegelink:'https://home.dartmouth.edu/',
        dataset:'dartmouthCollegeData.csv',

    },
    {
        name:    'Vanderbilt University',
        image: '/images/14.jpg',
        description: "Vanderbilt University (informally Vandy or VU) is a private research university in Nashville, Tennessee. Founded in 1873, it was named in honor of shipping and rail magnate Cornelius Vanderbilt, who provided the school its initial $1-million endowment; Vanderbilt hoped that his gift and the greater work of the university would help to heal the sectional wounds inflicted by the Civil War. Vanderbilt enrolls approximately 13,500 students from the US and over 100 foreign countries. ",
        collegelink:'https://www.vanderbilt.edu/',
        dataset:'vanderbiltUniversityData.csv',

    },
    {
        name:  'Columbia University in the City of New York',
        image: '/images/15.jpg',
        description: "Columbia University (also known as Columbia, and officially as Columbia University in the City of New York) is a private Ivy League research university in New York City. Established in 1754 as King's College on the grounds of Trinity Church in Manhattan, Columbia is the oldest institution of higher education in New York and the fifth-oldest institution of higher learning in the United States.",
        collegelink:'https://www.columbia.edu/',
        dataset:'columbiaUniversityData.csv',

    },
    {
        name:  'University of Notre Dame',
        image: '/images/16.jpg',
        description: "The University of Notre Dame du Lac, known simply as Notre Dame (/ˌnoʊtərˈdeɪm/ NOH-tər-DAYM) or ND is a private Catholic research university in Notre Dame, Indiana, outside the city of South Bend.[8] Edward Sorin founded the school in 1842. The main campus covers 1,261 acres (510 ha) in a suburban setting and contains landmarks such as the Golden Dome, the Word of Life mural (commonly known as Touchdown Jesus), Notre Dame Stadium, and the Basilica.",
        collegelink:'https://www.nd.edu/',
        dataset:'notreDameUniversityData.csv',

    },
    {
        name:  'Brown University',
        image: '/images/17.jpg',
        description: "Brown University is a private Ivy League research university in Providence, Rhode Island. Founded in 1764 as the College in the English Colony of Rhode Island and Providence Plantations, Brown is the seventh-oldest institution of higher education in the United States and one of the nine colonial colleges chartered before the American Revolution.",
        collegelink:'https://www.brown.edu/',
        dataset:'brownUniversityData.csv',

    },
    {
        name:   'University of Pennsylvania',
        image: '/images/18.jpg',
        description: "The University of Pennsylvania (Penn or UPenn) is a private Ivy League research university in Philadelphia, Pennsylvania. The university, established as the College of Philadelphia in 1740, is one of the nine colonial colleges chartered prior to the U.S. Declaration of Independence. Benjamin Franklin, Penn's founder and first president, advocated an educational program that trained leaders in commerce, government, and public service, similar to a modern liberal arts curriculum with a practicalperspective",
        collegelink:'https://www.upenn.edu/',
        dataset:'pennsylvanaUniversityData.csv',

    },
    {
        name:     'Carnegie Mellon University',
        image: '/images/19.jpg',
        description: "Carnegie Mellon University (CMU) is a private research university based in Pittsburgh, Pennsylvania. Founded in 1900, the university is a merger of the Carnegie Institute of Technology and the Mellon Institute of Industrial Research. Established by Andrew Carnegie as the Carnegie Technical Schools, the university became the Carnegie Institute of Technology in 1912 and began granting four-year degrees.",
        collegelink:'https://www.cmu.edu/',
        dataset:'carneigeMellonData.csv',

    },


]
export default colleges