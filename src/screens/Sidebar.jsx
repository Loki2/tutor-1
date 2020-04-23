import React, {useState} from 'react';
import Logo from '../ui/logo.png';
function Sidebar() {

    // Create Sidebar label slug constant variable
    const [nav] = useState([ //, setNav put after Nav
        { lable:"Home", slug:"/", icon: "icon-home" },
        { lable:"Discover", slug:"discover", icon: "icon-quill" },
        { lable:"Categories", slug:"cats", icon: "icon-blog" },
        { lable:"WorkShop", slug:"workshop", icon: "icon-newspaper" },
        { lable:"Tags", slug:"tags", icon: "icon-droplet" },
        { lable:"Products", slug:"my-product", icon: "icon-pen" },
        { lable:"My Course", slug:"my-course", icon: "icon-pencil" }
    ])

    // Set Sidebar label slug constant variable to Currently Page
    const [currentPage] = useState("/") //, setCurrenPage put after currentpage

    // Loop Sidebar label slug constan variable
    var navigation = [];
    for(let i = 0; i < nav.length; i++) {
        navigation.push(
                <li key={"nav-" + i + "-" + nav[i].slug}>
                    <a href={nav[i].slug} className={"aic link c12 noul flex c333" + (currentPage === nav[i].slug ? " on" : "") }>
                        <div className={"ico s18 " + nav[i].icon} />
                        <h2 className="lbl s16">{nav[i].lable}</h2>
                    </a>
                </li>
        );
    }
    // Return View
    return (
        <div className="sidebar rel">
            <a href="/" className="logo bl"><img src={Logo} alt="Logo"/></a>
            
            {/* Sidebar Navigation */}
            <ul className="nav">
                {navigation}
            </ul>

            {/* Update Course by User_ID */}
            <div className="updated-course flex aic">
                <div className="ico icon-firefox" />
                    <div className="lbl s15 fontb c333">
                        <strong>Update Course</strong> <br/><span className="author s13 c777">by Loki STN</span>
                    </div>
            </div>

            {/* Status Box Show how long to take the Course */}
            <div className="stats flex">
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



            <div className="profile flex aic">
                <button className="user-profile">
                    <img src="https://placeimg.com/100/100/people?" alt="profile-img"/>
                </button>
                    <div className="lbl s15 fontb c333">
                        User Profile <br/><span className="author s13 c777">@lokitntn_t8</span>
                    </div>
            </div>


            <div className="music-box flex aic jic">
                <button className="music-profile">
                    <img src="https://placeimg.com/100/100/people?" alt="profile-img"/>
                </button>
                    <div className="lbl s15 fontb c333">
                        <strong>Musics Box</strong> <br/><span className="author s13 c777">Music &Podcast Playlist</span>
                    </div>
            </div>
        </div>  
    );
}

export default Sidebar;
