import React, {useState} from 'react';
import './Rightbar.css';
function Rightbar() {

    
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
            poster: "../ui/course-1.png"
        },
    ]);


      /*Popular Course Of The Week*/
      const courseList = [];
      // loop CourseList
      for(let i=0; i< popularCourse.length; i++){
          courseList.push(
              <a href="/" className="course rel" key={"popular-course" + i}>
                  <div className="block" style={{
                      background:"#e2e2e2 url(" + popularCourse[i].poster + ") no-repeat center"
                  }}>


                          <div className="user aic abs flex">
                                  <div className="pic">
                                      <img src={popularCourse[i].tutor.dp} className="bl" alt="profile"/>
                                  </div>
                                  <div className="meta rel">
                                  <h2 className="s15 name fontb c333">{popularCourse[i].tutor.name}</h2>
                                  <span className="s13 uname fontn c333">@{popularCourse[i].tutor.username}</span>
                                  {/* <h2 className="s13 uname fontn cfff">@{popularCourse[i].tutor.username}</h2> */}
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

      const [cats] = useState([ //, setCats put after Cats
        { lable:"Grapphic Design", slug:"/", icon: "icon-home" },
        { lable:"IT Security", slug:"discover", icon: "icon-quill" },
        { lable:"Software Devolopment", slug:"cats", icon: "icon-blog" },
        { lable:"Web App Develop & Design", slug:"workshop", icon: "icon-newspaper" },
        { lable:"Mobile App Develop & Design", slug:"workshop", icon: "icon-newspaper" },
        { lable:"Machine Learning", slug:"tags", icon: "icon-droplet" },
        { lable:"Data Analysist", slug:"my-product", icon: "icon-pen" },
        { lable:"Digital Marketing", slug:"my-course", icon: "icon-pencil" },
        { lable:"Gaming Solution", slug:"my-course", icon: "icon-pencil" }
    ])




    var catsList = [];
    for(let i = 0; i < cats.length; i++) {
        catsList.push(
                <ul className="categories">
                    <li key={"cats-" + i + "-" + cats[i].slug}>
                        <a href={cats[i].slug} className={"cat-link aic link c12 noul flex c333"}>
                            {/* <div className={"ico s16 " + cats[i].icon} /> */}
                            {cats[i].lable}
                        </a>
                    </li>
                </ul>
        );
    }

    return (
        <div className="rightbar rel">



            <div className="section rel">
                <h2 className="title s20 fontb">Advance<span className="fontn"> Search</span></h2>
                <div className="search-box rel flex">
                      <input type="text" placeholder="Start Writting Something..." className="qry s15 c333 fontn"/>
                      <button className="go s15 fontb">Find</button>
                </div>
            </div>


            

            <div className="section section-c rel">
                    <h2 className="category-list s18 fontb c333">All Categories</h2>
                        {catsList}
            </div>

            <div className="section section-c rel">
                    <h2 className="category-list s18 fontb c333">Public Source</h2>
                        {/* {catsList} */}
            </div>
            
            <div className="section section-c rel">
                    <h2 className="category-list s18 fontb c333">Social Media</h2>
                        {/* {catsList} */}
            </div>


            <div className="section section-c rel">
                    <h2 className="category-list s18 fontb c333">About Us</h2>
                    <ul>
                      <li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                      <li><a href="/"><span class="icon icon-phone"></span><span class="text">+856-20 2822-2732</span></a></li>
                      <li><a href="/"><span class="icon icon-envelope"></span><span class="text">info@tutor1.com</span></a></li>
                    </ul>
            </div>

            <div className="section section-c rel">
                {/* <h2 className="category-list s18 fontb c333">*****************************</h2> */}
                <p>Copyright &copy; 2020<script>document.write(new Date().getFullYear())</script>  All rights reserved | SoftSkill <i class="icon-heart text-danger" aria-hidden="true"></i>Power by <a href="https://softskill.com">Soft-Skill</a></p>
            </div>
        </div>
    )
}

export default Rightbar;
