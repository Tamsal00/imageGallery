import "./picture.css"

export default function Picture({image}) {
  return (
    <>
   
     <div className="pictureBox">
        <img  className="picture" src={image.userImageURL} alt="no pic sorry"/>
        <span className="pictureName">Picture by {image.user}</span>
        <ul className="unoederList">
          <li className="listItem">
            <strong>Views</strong> {image.views}
          </li>
          <li className="listItem"> 
            <strong>Downloads</strong> {image.downloads}
          </li>
          <li className="listItem">
            <strong>Likes</strong> {image.likes}
          </li>
        </ul> 
      </div>
  
    </>
  )
}
