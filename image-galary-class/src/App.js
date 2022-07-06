import "./App.css";
import { Galary } from "./Galary";

function App() {
  let imageGalary = [
    {
      nameofimage: "Name of Image",
      images: "https://media0.giphy.com/media/MWqc0k2qiD1As/giphy.gif?cid=ecf05e47vcqur7bpu8ceve72vuakp1kjwo7jsroh9jnv8cx0&rid=giphy.gif&ct=g",
    },
    {
      nameofimage: "Name of Image",
      images: "https://media1.giphy.com/media/26FfkdCTYVj4rRe48/200w.webp?cid=ecf05e47vcqur7bpu8ceve72vuakp1kjwo7jsroh9jnv8cx0&rid=200w.webp&ct=g",
    },
    {
      nameofimage: "Name of Image",
      images: "https://media1.giphy.com/media/3o6nUNZhOJDdlmla00/200w.webp?cid=ecf05e47sik8cmacdi26tun3nig4eci1em8hraxkxi2s8aos&rid=200w.webp&ct=g",
    },
    {
      nameofimage: "Name of Image",
      images: "https://media1.giphy.com/media/l4EoXWq4awUmALZBe/200w.webp?cid=ecf05e47sik8cmacdi26tun3nig4eci1em8hraxkxi2s8aos&rid=200w.webp&ct=g",
    },
    {
      nameofimage: "Name of Image",
      images: "https://media4.giphy.com/media/Tex5bvkg9kmpLt71PL/200w.webp?cid=ecf05e47rznbx7e1ly5ppko67h5z7ge2b1vqyzj7br4er2qh&rid=200w.webp&ct=g",
    },
    {
      nameofimage: "Name of Image",
      images: "https://media0.giphy.com/media/UcywOZE3fd4vXVfvzq/200w.webp?cid=ecf05e47rznbx7e1ly5ppko67h5z7ge2b1vqyzj7br4er2qh&rid=200w.webp&ct=g",
    },
    {
      nameofimage: "Name of Image",
      images: "https://media2.giphy.com/media/XbID6JbFphTp3RYDOF/200w.webp?cid=ecf05e47rznbx7e1ly5ppko67h5z7ge2b1vqyzj7br4er2qh&rid=200w.webp&ct=g",
    },
    {
      nameofimage: "Name of Image",
      images: "https://media0.giphy.com/media/n3iylHGbfiTRYSqZ2G/200w.webp?cid=ecf05e47rznbx7e1ly5ppko67h5z7ge2b1vqyzj7br4er2qh&rid=200w.webp&ct=g",
    },
    {
      nameofimage: "Name of Image",
      images: "https://images.unsplash.com/photo-1566055972289-c52022ae23b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    },
    {
      nameofimage: "Name of Image",
      images: "https://images.unsplash.com/photo-1555617778-02518510b9fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      nameofimage: "Name of Image",
      images: "https://media4.giphy.com/media/vzz51a8snn38TUsP86/200w.webp?cid=ecf05e47rznbx7e1ly5ppko67h5z7ge2b1vqyzj7br4er2qh&rid=200w.webp&ct=g",
    },
    {
      nameofimage: "Name of Image",
      images: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    
   
  ];
  return (
    <div className="App">
      <h2 style={{fontSize:"3vw"}}>Image Galary Using Class Compenent</h2><br />
      <Galary finalarray={imageGalary} />
    </div>
  );
}

export default App;
