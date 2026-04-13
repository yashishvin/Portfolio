import { useEffect } from "react";
import { useLoading } from "../context/LoadingProvider";
import { setProgress } from "./Loading";
import { setCharTimeline, setAllTimeline } from "./utils/GsapScroll";

const ProfileImage = () => {
  const { setLoading } = useLoading();

  useEffect(() => {
    // Initiate visual loader sequence to retain aesthetics and unlock scrolling 
    let progress = setProgress((value) => setLoading(value));
    
    // Simulate image 'download' load finish
    progress.loaded().then(() => {
      setTimeout(() => {
        setCharTimeline();
        setAllTimeline();
      }, 1500);
    });
  }, []);

  return (
    <>
      <div className="character-container">
        <div className="character-model">
          <div className="character-rim"></div>
          <img 
            src="/images/yash_photo.jpeg" 
            alt="Yashishvin Pothuri" 
            className="profile-photo" 
          />
        </div>
      </div>
    </>
  );
};

export default ProfileImage;
