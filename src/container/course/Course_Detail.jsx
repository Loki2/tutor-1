import React, {useState} from 'react';
import './Course.css';
import '../../css/App.css'
function Course_Detail() {
    const [Course] = useState(  //setCourse after Course
        {
            ID: 1,
            title:"Learning how to create model in 102 min",
            detail:"In this course i will teach you how to create illustrated modelling look really good. <br/> we are going to study alot and the most power tools from adobe collection as long as good to go and <br/> prepare to you project model, as you can optimization, <br/> then i will let you try to deploy this production on any server as you can do by yourself",
            tutor: {
                ID: 1,
                name: "Lanna Marelnna", 
                username:"lannamarln",
                dp: "https://placeimg.com/100/100/people?tutor-" + 1,
            },
            duration: "58min",
            poster: "https://placeimg.com/100/100/people?",

            video: [
                {
                    ID: 1,
                    title:"introduction",
                    duration: "03min 06secs"
                },
                {
                    ID: 2,
                    title:"Setup Enviroment",
                    duration: "12min 06secs"
                },
                {
                    ID: 3,
                    title:"Configuration template",
                    duration: "23min 34secs"
                },
                {
                    ID: 4,
                    title:"Connect to database & create model",
                    duration: "18min 45secs"
                }
            ]
        }
    );

    const courseVideo = [];

    for(let i = 0; i < Course.video.length; i++){
        courseVideo.push(
            <a href="/" key={"course-video-" + i} className="noul aic rel flex">
                <div className="id s15 fontn cfff">{Course.video[i].ID}</div>
                <div className="meta rel">
                    <h1 className="s15 lbl fontb c333">{Course.video[i].title}</h1>
                    <h1 className="s13 dur fontn c777">{Course.video[i].duration}</h1>
                </div>
            </a>
        );
    }


    return (
        <div className="course-detail rel flex">
            
            <div className="course-info rel">
                <div className="tutor aic rel flex">
                        <div className="pic">
                            <img src={Course.tutor.dp} className="bl" alt="profile"/>
                        </div>
                        <div className="lbl meta rel">
                            <h2 className="s15 name fontb c333">{Course.tutor.name} 
                                <br/> <span className="s13 uname fontn c777">  Course Tutor</span>
                            </h2>
                        </div>
                </div>
                <div className="course-meta">
                        <h2 className="s20 title fontb c333">{Course.title}</h2>
                        <p className="s15 fontn c777" dangerouslySetInnerHTML={{__html: Course.detail }} />
                        <div className="section section-b rel">
                            <h2 className="title s20 fontb">Course<span className="fontn"> Achiements</span></h2>
                            <div className="course-stats flex">
                                <div className="stat-box aic flex">
                                    <div className="ico point icon-pencil2" />
                                        <div className="lbl s15 fontb c333">
                                            <h2 className="lbl s15 fontb">1800</h2>
                                            <span className="val s13 c777"> Points</span>
                                        </div>
                                </div>
                                <div className="stat-box aic flex">
                                    <div className="ico  complete icon-droplet" />
                                        <div className="lbl s15 fontb c333">
                                            <h2 className="lbl s15 fontb">45.3%</h2>
                                            <span className="val s13 c777"> Completed</span>
                                        </div>
                                </div>
                            </div>
                    </div>
                    <div className="section section-b rel">
                        <h2 className="title s20 fontb">Course<span className="fontn"> Video Detail</span></h2>
                            {/* Status Box Show how long to take the Course */}
                            <div className="course-video flex">
                            {courseVideo}
                            </div>
                    </div>
                </div>
            </div>



            <div className="course-preview rel">
                <div className="player rel">
                    <video />
                    <div className="ctrls abs aic flex">
                        <button className="icon-pen s24 pp" />
                        <div className="timer rel fontb s13 cfff">
                            02:35 / 09:35
                        </div>

                        <div className="slider rel">
                           <div className="prog rel">
                            <div className="bar rel">
                                <div className="knob abs" />
                            </div>
                           </div>
                        </div>
                        <button className="icon-pen s24 vol"/>
                        <button className="icon-pen s24 fs"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course_Detail;


 