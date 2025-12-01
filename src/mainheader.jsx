import pic from "./assets/ali.jpg"
function Minheader() {
  return (
    <div className="mainheader">
      <div className="img">
        <img src={pic} alt="ali" />
        <p id="animtxtmh" className="bg-gradient-to-br from-[#ff0000] to-[#3518b8] min-w-24 h-12 bg-clip-text text-transparent"></p>
      </div>
    </div>
  );
}
export default Minheader;
