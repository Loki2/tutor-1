import React, { useState } from 'react';
import './Home.css';
import Course1 from '../../assets/images/Lover_zen.png'


function Home() {
    const [popularCourse] = useState([  //setPopularCourse after PopularCourse
        {
            ID: 1,
            title:"Learning how to create model in 102 min",
            tutor: {
                ID: 1,
                name: "Lanna Marelnna", 
                username:"lannamarln",
                dp: "https://placeimg.com/100/100/people?tutor-" + 1,
            },
            duration: "58min",
            poster: Course1
        },
        {
            ID: 2,
            title:"Create Startup from begurry and Caffee With Startbug",
            tutor: {
                ID: 1,
                name: "Lanna Marelnna", 
                username:"lannamarln",
                dp: "https://placeimg.com/100/100/people?tutor-" + 2,
            },
            duration: "1h 13min",
            poster: "https://placeimg.com/256/480/arch?tutor-" + 2
        },
        {
            ID: 3,
            title:"Learning how to create model in 102 min",
            tutor: {
                ID: 1,
                name: "Lanna Marelnna", 
                username:"lannamarln",
                dp: "https://placeimg.com/100/100/people?tutor-" + 3,
            },
            duration: "42min",
            poster: "https://placeimg.com/256/480/arch?tutor-" + 3
        },
        {
            ID: 4,
            title:"Learning how to create model in 102 min",
            tutor: {
                ID: 1,
                name: "Lanna Marelnna", 
                username:"lannamarln",
                dp: "https://placeimg.com/100/100/people?tutor-" + 4,
            },
            duration: "2h 12min",
            poster: "https://placeimg.com/256/480/arch?tutor-" + 4
        }
    ]);

    const [topTutors] = useState([ //setTopTutor After topTutors
        {
            ID: 1,
            name: "Lanna Marelnna", 
            username:"lannamarln",
            dp: "https://placeimg.com/100/100/people?tutors-" + 1,
        },
        {
            ID: 2,
            name: "Lanna Marelnna", 
            username:"lannamarln",
            dp: "https://placeimg.com/100/100/people?tutors-" + 2,
        },
        {
            ID: 3,
            name: "Lanna Marelnna", 
            username:"lannamarln",
            dp: "https://placeimg.com/100/100/people?tutors-" + 3,
        },
        {
            ID: 4,
            name: "Lanna Marelnna", 
            username:"lannamarln",
            dp: "https://placeimg.com/100/100/people?tutors-" + 4,
        },
        {
            ID: 5,
            name: "Lanna Marelnna", 
            username:"lannamarln",
            dp: "https://placeimg.com/100/100/people?tutors-" + 5,
        },
        {
            ID: 6,
            name: "Lanna Marelnna", 
            username:"lannamarln",
            dp: "https://placeimg.com/100/100/people?tutors-" + 6,
        },
        {
            ID: 7,
            name: "Lanna Marelnna", 
            username:"lannamarln",
            dp: "https://placeimg.com/100/100/people?tutors-" + 7,
        },
        {
            ID: 8,
            name: "Lanna Marelnna", 
            username:"lannamarln",
            dp: "https://placeimg.com/100/100/people?tutors-" + 8,
        }
    ])



    const [workshopCourse] = useState([  //setPopularCourse after PopularCourse
        {
            ID: 1,
            title:"Learning how to create model in 102 min",
            tutor: {
                ID: 1,
                name: "Lanna Marelnna", 
                username:"lannamarln",
                dp: "https://placeimg.com/100/100/people?tutor-" + 1,
            },
            duration: "58min",
            poster: "https://placeimg.com/100/100/people?"
        },
        {
            ID: 2,
            title:"Create Startup from begurry and Caffee With Startbug",
            tutor: {
                ID: 1,
                name: "Lanna Marelnna", 
                username:"lannamarln",
                dp: "https://placeimg.com/100/100/people?tutor-" + 2,
            },
            duration: "1h 13min",
            poster: "https://placeimg.com/100/100/people?tutor"
        },
        {
            ID: 3,
            title:"Learning how to create model in 102 min",
            tutor: {
                ID: 1,
                name: "Lanna Marelnna", 
                username:"lannamarln",
                dp: "https://placeimg.com/100/100/people?tutor-" + 3,
            },
            duration: "42min",
            poster: "https://placeimg.com/100/100/people?tutor"
        },
        {
            ID: 4,
            title:"Learning how to create model in 102 min",
            tutor: {
                ID: 1,
                name: "Lanna Marelnna", 
                username:"lannamarln",
                dp: "https://placeimg.com/100/100/people?tutor-" + 4,
            },
            duration: "2h 12min",
            poster: "https://placeimg.com/100/100/people?tutor"
        }
    ]);

        /* User Live Streaming Course */
        const tutorsList = [];
        // loop tutorList
        for(let i=0; i<14; i++){
            tutorsList.push(
                <button className="tutor rel" key={"tutor-live" + i}>
                    <img src={"https://placeimg.com/100/100/people?" + i } alt="profile-img"/>
                </button>
            );
        }

        /*Popular Course Of The Week*/
        const courseList = [];
        // loop CourseList
        for(let i=0; i< popularCourse.length; i++){
            courseList.push(
                // "#e2e2e2 url(" + popularCourse[i].poster + ") no-repeat center"
                <a href="/" className="course rel" key={"popular-course" + i}>
                    <div className="block" style={{
                        background: require('../../assets/images/Lover_zen.png')
                    }}>


                            <div className="user aic abs flex">
                                    <div className="pic">
                                        <img src={popularCourse[i].tutor.dp} className="bl" alt="profile"/>
                                    </div>
                                    <div className="meta rel">
                                    <h2 className="s15 name fontb c333">{popularCourse[i].tutor.name}</h2>
                                    <span className="s13 uname fontn c333">@{popularCourse[i].tutor.username}</span>
                                    </div>
                            </div>

                            <div className="dura abs">
                                <a href="/" className="s13 dur fontb cfff">{popularCourse[i].duration}</a>
                            </div>
                            
                            <div className="course-name abs">
                                <a href="/" className="s13 course-text fontb cfff">{popularCourse[i].title}</a>
                            </div>
                    </div>
                </a>
            );
        }

        // Top tutors List
        const topTutorsList = [];
        // Loop Top Tutors List
        for(let i=0; i<topTutors.length; i++){
            topTutorsList.push(
                <a href="/" className="user-block rel noul" key={"top-tutors" + i}>
                    <div className="user aic flex">
                        <div className="pic">
                            <img src={topTutors[i].dp} className="bl" alt="profile"/>
                        </div>
                        <div className="meta rel">
                            <h2 className="s15 name fontb c333">{topTutors[i].name}</h2>
                            <span className="s13 uname fontn c333">@{topTutors[i].username}</span>
                            {/* <h2 className="s13 uname fontn cfff">@{popularCourse[i].tutor.username}</h2> */}
                        </div>
                    </div>

                </a>
            );
        }




        /*Popular Course Of The Week*/
        const workshopList = [];
        // loop CourseList
        for(let i=0; i< workshopCourse.length; i++){
            workshopList.push(
                <a href="/" className="course rel" key={"workshop-course" + i}>
                    <div className="block" style={{
                        background:"#e2e2e2 url(" + workshopCourse[i].poster + ") no-repeat center"
                    }}>
                            <div className="user aic abs flex">
                                    <div className="pic">
                                        <img src={workshopCourse[i].tutor.dp} className="bl" alt="profile"/>
                                    </div>
                                    <div className="meta rel">
                                    <h2 className="s15 name fontb c333">{workshopCourse[i].tutor.name}</h2>
                                    {/* <span className="s13 uname fontn c333">@{workshopCourse[i].tutor.username}</span> */}
                                    {/* <h2 className="s13 uname fontn cfff">@{popularCourse[i].tutor.username}</h2> */}
                                    </div>
                            </div>

                            <div className="dura abs">
                                <a href="/" className="s13 dur fontb cfff">{workshopCourse[i].duration}</a>
                            </div>
                            
                            <div className="course-name abs">
                                <a href="/" className="s15 course-text fontb cfff">{workshopCourse[i].title}</a>
                            </div>
                    </div>
                </a>
            );
        }
    // Render Every Loop
    return (
        <div className="home-page rel">


            {/* User Live Streaming Course */}
            <div className="section rel">
                <h2 className="title s20 fontb">Streaming <span className="fontn"> Now</span></h2>
                <div className="tutors rel flex">
                        {tutorsList}
                </div>
            </div>


            {/* Poopular Course this Weeks*/}
            <div className="section section-b rel">
                <h2 className="title s20 fontb">Popular Course<span className="fontn"> -This Week</span></h2>
                <div className="courses rel flex">
                        {courseList}
                </div>
            </div>


            {/* Poopular Course this Weeks*/}
            <div className="section section-workshop rel">
                <h2 className="title s20 fontb">Course By<span className="fontn"> Category</span></h2>
                <div className="courses rel flex">
                        {workshopList}
                </div>
            </div>


            {/* Poopular Course this Weeks*/}
            <div className="section section-workshop rel">
                <h2 className="title s20 fontb">My Favourite<span className="fontn"> Course</span></h2>
                <div className="courses rel flex">
                        {workshopList}
                </div>
            </div>

            {/* Poopular Course this Weeks*/}
            <div className="section section-workshop rel">
                <h2 className="title s20 fontb">Popular Workshop<span className="fontn"> now</span></h2>
                <div className="courses rel flex">
                        {workshopList}
                </div>
            </div>

            {/* Poopular Course this Weeks*/}
            <div className="section section-workshop rel">
                <h2 className="title s20 fontb">Workshop By<span className="fontn"> Category</span></h2>
                <div className="courses rel flex">
                        {workshopList}
                </div>
            </div>

            {/* Poopular Course this Weeks*/}
            <div className="section section-workshop rel">
                <h2 className="title s20 fontb">My Favourite<span className="fontn"> Workshop</span></h2>
                <div className="courses rel flex">
                        {workshopList}
                </div>
            </div>


            {/* Top Tutors*/}
            <div className="section section-c rel">
                <h2 className="title s20 fontb">Top<span className="fontn"> -Tutors</span></h2>
                <div className="top-tutors rel flex">
                       {topTutorsList}
                </div>
            </div>



            
        </div>
    )
}

export default Home;
