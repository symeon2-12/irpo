import "./Pictures.css";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { FiSettings } from "react-icons/fi";

const pics = [
  "YlOrRd.png",
  "Accent.png",
  "afmhot.png",
  "autumn.png",
  "binary.png",
  "Blues.png",
  "bone.png",
  "BrBG.png",
  "brg.png",
  "BuGn.png",
  "BuPu.png",
  "bwr.png",
  "cividis.png",
  "CMRmap.png",
  "cool.png",
  "coolwarm.png",
  "copper.png",
  "cubehelix.png",
  "Dark2.png",
  "flag.png",
  "gist_earth.png",
  "gist_gray.png",
  "gist_heat.png",
  "gist_ncar.png",
  "gist_rainbow.png",
  "gist_stern.png",
  "gist_yarg.png",
  "GnBu.png",
  "gnuplot.png",
  "gnuplot2.png",
  "gray.png",
  "Greens.png",
  "Greys.png",
  "hot.png",
  "hsv.png",
  "inferno.png",
  "jet.png",
  "magma.png",
  "nipy_spectral.png",
  "ocean.png",
  "Oranges.png",
  "OrRd.png",
  "Paired.png",
  "Pastel1.png",
  "Pastel2.png",
  "pink.png",
  "PiYG.png",
  "plasma.png",
  "PRGn.png",
  "prism.png",
  "PuBu.png",
  "PuBuGn.png",
  "PuOr.png",
  "PuRd.png",
  "Purples.png",
  "rainbow.png",
  "RdBu.png",
  "RdGy.png",
  "RdPu.png",
  "RdYlBu.png",
  "RdYlGn.png",
  "Reds.png",
  "seismic.png",
  "Set1.png",
  "Set2.png",
  "Set3.png",
  "Spectral.png",
  "spring.png",
  "summer.png",
  "tab10.png",
  "tab20.png",
  "tab20b.png",
  "tab20c.png",
  "terrain.png",
  "turbo.png",
  "twilight.png",
  "twilight_shifted.png",
  "viridis.png",
  "winter.png",
  "Wistia.png",
  "YlGn.png",
  "YlGnBu.png",
  "YlOrBr.png",
];

const Pictures = () => {
  const [picsrc, setPicsrc] = useState(pics[0]);
  const [t, setT] = useState(Date.now());

  const refreshTime = () => {
    setT(Date.now());
  };

  useEffect(() => {
    const timerId = setInterval(refreshTime, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []); //

  return (
    <div className="container">
      <div className="collist">
        <div className="listheader">
          <h2>Tanks</h2>
          <h3> {format(t, "yyyy MMM do")}</h3>
        </div>
        <div className="list">
          {pics.map((pic, idx) => (
            <button
              className="picbutton"
              key={idx}
              onClick={() => {
                setPicsrc(pic);
              }}>
              {pic.replace(".png", "")}
            </button>
          ))}
        </div>
      </div>
      <div className="colpic">
        <div className="pictureheader">
          <p>{picsrc.replace(".png", "")}</p>
          <p>picture status</p>
        </div>
        <div className="image">
          <img src={"/assets/" + picsrc} alt="picture" />
        </div>
        <div className="picturefooter">
          <div className="picturefooter_left">
            <div className="left_top">
              <div>Min: 245°</div>
              <div>Max: 275°</div>
              <div>Avg: 265°</div>
              <div>Pointer: --</div>
            </div>
            <div className="left_bottom">slider</div>
          </div>
          <div className="picturefooter_middle">
            <div> {format(t, "hh:mm:ss")} </div>
            <button className="livestream"> Livestream </button>
          </div>
          <div className="picturefooter_right">
            <FiSettings className="settings" size={35} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pictures;
