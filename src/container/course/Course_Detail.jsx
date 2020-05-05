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
                            <div className="course-video aic flex">
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
                        <button className="icon-quill s24 vol"/>
                        <button className="icon-droplet s24 fs"/>
                    </div>
                </div>

                <div className="extra-block rel flex">
                    <div className="chat rel">
                        <div className="section section-b rel">
                            <h2 className="title s20 fontb">Quick<span className="fontn"> Chats</span></h2>
                                <div className="messages aic flex">
                                    <div className="bubble rel">
                                        <h1 className="txt ibl fontn s13 c333">I am new babie</h1>
                                    </div>
                                    <div className="bubble rel">
                                        <h1 className="txt ibl fontn s13 c333">I Love this course...!</h1>
                                    </div>
                                    <div className="bubble bubble-mine rel">
                                        <h1 className="txt ibl fontn s13 c333">Hey, ?</h1>
                                    </div>
                                    <div className="bubble bubble-mine rel">
                                        <h1 className="txt ibl fontn s13 c333">Cozy, bla bla... you gotta face newLine </h1>
                                    </div>
                                    <div className="bubble rel">
                                        <h1 className="txt ibl fontn s13 c333">I asked to create new gen model size...</h1>
                                    </div>
                                    <div className="bubble rel">
                                        <h1 className="txt ibl fontn s13 c333">Yep, gotta clean bubble bean</h1>
                                    </div>
                                    <div className="bubble bubble-mine rel">
                                        <h1 className="txt ibl fontn s13 c333">@!Taroz, blean dot oop..@</h1>
                                    </div>
                                    <div className="bubble rel">
                                        <h1 className="txt ibl fontn s13 c333">I asked to create new gen model size...</h1>
                                    </div>
                                    <div className="bubble bubble-mine rel">
                                        <input type="text" className="text s15 fontn c3333" placeholder="feeling fear to push..."/>
                                    </div>
                                </div>
                        </div>
                    </div>


                    <div className="watch-now rel">
                        <div className="tooltip abs s13 fontb cfff">86 Live Now</div>
                        <div className="section section-b rel">
                        <h2 className="title s20 fontb">Now <span className="fontn"> Watching</span></h2>
                        <div className="you aic rel flex">
                            <div className="pic">
                                <img src="https://placeimg.com/100/100/people?guest-1" className="bl" alt="profile"/>
                            </div>
                            <div className="lbl meta rel">
                                <h2 className="s15 name fontb c333">John Deo 
                                <br/> <span className="s13 uname fontn c777">@John_D</span>
                                </h2>
                            </div>
                        </div>
                        <div className="you aic rel flex">
                            <div className="pic">
                                <img src="https://placeimg.com/100/100/people?guest-2" className="bl" alt="profile"/>
                            </div>
                            <div className="lbl meta rel">
                                <h2 className="s15 name fontb c333">Robert D, Juniur 
                                <br/> <span className="s13 uname fontn c777"> @iron_man</span>
                                </h2>
                            </div>
                        </div>
                        <div className="you aic rel flex">
                            <div className="pic">
                                <img src="https://placeimg.com/100/100/people?guest-3" className="bl" alt="profile"/>
                            </div>
                            <div className="lbl meta rel">
                                <h2 className="s15 name fontb c333">Christ Evant <
                                    br/> <span className="s13 uname fontn c777">  @capt_american</span>
                                </h2>
                            </div>
                        </div>
                        <div className="you aic rel flex">
                            <div className="pic">
                                <img src="https://placeimg.com/100/100/people?guest-4" className="bl" alt="profile"/>
                            </div>
                            <div className="lbl meta rel">
                                <h2 className="s15 name fontb c333">Christ Hemwerd 
                                    <br/> <span className="s13 uname fontn c777">  @thor_t8</span>
                                </h2>
                            </div>
                        </div>
                        <div className="you aic rel flex">
                            <div className="pic">
                                <img src="https://placeimg.com/100/100/people?guest-4" className="bl" alt="profile"/>
                            </div>
                            <div className="lbl meta rel">
                                <h2 className="s15 name fontb c333">Christ Hemwerd 
                                    <br/> <span className="s13 uname fontn c777">  @thor_t8</span>
                                </h2>
                            </div>
                        </div>
                        <div className="you aic rel flex">
                            <div className="pic">
                                <img src="https://placeimg.com/100/100/people?guest-4" className="bl" alt="profile"/>
                            </div>
                            <div className="lbl meta rel">
                                <h2 className="s15 name fontb c333">Christ Hemwerd 
                                    <br/> <span className="s13 uname fontn c777">  @thor_t8</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Course_Detail;


 