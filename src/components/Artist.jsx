import React from "react";

function Artist() {
  return (
    <div className="artist">
      <img className="artist-album" src="img/lettuce-redrock.jpg" width="416px;" alt="lettuce"/>
      <div className="info-container">
            <div ClassName="artist-info">
                <h2>Silence is Golden</h2>
                <h3>ARTIST</h3>
                <p>lettuce</p>
                <h3>RELEASE DATE</h3>
                <p>2019</p>
            </div>
      
            <div ClassName="album-info">
           
                <h3>LABEL</h3>
                <p>Blue Note</p>
            </div>
                
    
            
            <div ClassName="lyric-info">
            <button>SYNC TO LIGHT</button>
                <h3>Lyrics</h3>
                <p>orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  Folor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. commodo ligula eget dolor. Amet, consectetuer adipiscing elit. Aenean</p>
                
            </div>

           
              <div ClassName="track-info">
                  <h3>TRACKLIST</h3>
                  <ol>
                    <li>Lettuce- Give it up!</li>
                    <li>Lettuce- Mt Cushmore</li>
                    <li>Lettuce- LIVE at Madison</li>
                    <li>Lettuce- Frankenstein</li>
                  </ol>
            </div>
            
          </div>
      
        
            <button>SHOW MORE</button>
            <div ClassName="similar-artists">
              <h2>Similar Artists</h2>
              <img  src="img/gal.jpg"  alt="lettuce"/>
            </div>
    </div>
  );
}

export default Artist;
