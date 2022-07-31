
import "./App.css";
import "../src/style.css"
import img from "../src/imageInSrc.jpg"
function App() {
  return (
    <div>
      <div style={{borderWidth:1,borderStyle:"solid",borderColor:"black",maxWidth:"100vw"}}>
        <h1 className="title red" >Ibrahim</h1>
        <br />
        <img className=" w-50" src={img}></img>
        <br />
        <img className=" w-50" src="/imageInPublic.jpg"></img>
      </div>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
