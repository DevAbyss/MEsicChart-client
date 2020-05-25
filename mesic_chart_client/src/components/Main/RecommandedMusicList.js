import React from 'react';
import MusicEntry from './MusicEntry'

const recommandedMusicList = (props) => {
    console.log(props)
    const videos = props.videos.map(video =>
    <MusicEntry video={video}/>
    ) 
    return (
        <div>
          <div className="recommended-Message">
              추천 음악 리스트
          </div>
          <div className="main-Videos">
              {videos}
          </div>
        </div>
    )
};
export default recommandedMusicList;