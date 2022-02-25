import React from 'react';
import Typical from 'react-typical';
import '../Profile/Profile.css';
import ScrollService from '../../../utilities/ScrollService';

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">                         
                        <a href="https://www.facebook.com/profile.php?id=100008028372922" target="_blank">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-google-plus-square"></i>
                        </a>
                        <a href="https://www.instagram.com/archismanbanik/" target="_blank">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCws3QQCG-3us-pOsA550Kng" target="_blank">
                            <i className="fa fa-youtube-square"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/archisman-banik-b65913202/" target="_blank">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        </div>

                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello , I'M <span className="highlighted-text">Archisman Banik</span>
                        </span>
                    </div>

                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                               {" "}
                               <Typical
                               loop={Infinity}
                               steps={[
                                   "Ethusiastic Dev",
                                   1000,
                                   "Full Stack Developer",
                                   1000,
                                   "Php Developer",
                                   1000,
                                   "Photographer",
                                   1000,
                                   "React Dev",
                                   1000,
                               ]}
                               />
                            </h1>
                            <span className="profile-role-tagline">
                                Knack of building applications with front and back end operations
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn" 
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        >
                            {" "}
                            Hire me{" "}
                        </button>
                        <a href="Archisman_Banik_Resume.pdf" download="Archisman_Banik_Resume.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    )
}
