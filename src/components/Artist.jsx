import React from "react";

function Artist(props) {
  return (
 
    <div className="artist">
      <img className="artist-album" src={props.img} alt=""/>
      <div className="info-container">
            <div className="artist-info">
                <h2>{props.name}</h2>
                <h3>ARTIST</h3>
                <p>lettuce</p>
                <h3>RELEASE DATE</h3>
                <p>2019</p>
            </div>
      
            <div className="album-info">
              
                <h3>LABEL</h3>
                <p>Blue Note</p>
            </div>
                
    
            
            <div className="lyric-info">
            <button className="sync-btn">SYNC TO LIGHT</button>
                <h3>LYRICS</h3>
                <p>orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  Folor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. commodo ligula eget dolor. Amet, consectetuer adipiscing elit. Aenean</p>
                
            </div>

           
              <div className="track-info">
                  <h3 className="trk-lst">TRACKLIST</h3>
                  <ol>
                    <li>Lettuce- Give it up!</li>
                    <li>Lettuce- Mt Cushmore</li>
                    <li>Lettuce- LIVE at Madison</li>
                    <li>Lettuce- Frankenstein</li>
                  </ol>
      
                  
            </div>
            <button className="shw-btn">SHOW MORE</button>
            <div className="similar-artists">
            
              <h2>Similar Artists</h2>
              <img  src="img/gal.jpg"  alt="lettuce"/>
              <img  src="img/gal.jpg"  alt="lettuce"/>
              <img  src="img/gal.jpg"  alt="lettuce"/>
            </div>

          </div>

      
        
         
           
    </div>

  );
}

export default Artist;
