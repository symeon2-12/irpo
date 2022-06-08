import "./Pictures.css";
import { format } from "date-fns";
import { useState, useEffect, useRef } from "react";
import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

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

const CustomSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#6c7c94" : "#070e1a",
  height: 2,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 14,
    width: 28,
    backgroundColor: "#4f348d",
    "&:focus, &:hover, &.Mui-active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      backgroundColor: "#9a8abe",
      // Reset on touch devices, it doesn't add specificity
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&:before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#fff" : "#000",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  },
}));

const Pictures = () => {
  const [picsrc, setPicsrc] = useState(pics[0]);
  const [t, setT] = useState(Date.now());
  const [sliderValues, setSliderValues] = useState([250, 260]);
  const [pixelValues, setPixelValues] = useState(["-", "-"]);
  const imageRef = useRef(null);

  const refreshTime = () => {
    setT(Date.now());
  };

  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setInterval(refreshTime, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []); //timer

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const setXY = (e) => {
      let imgXY = imageRef.current.getBoundingClientRect();
      setPixelValues([
        Math.round(e.pageX - imgXY.x).toString(),
        Math.round(e.pageY - imgXY.y).toString(),
      ]);
    };

    const setNone = (e) => {
      setPixelValues(["-", "-"]);
    };
    imageRef.current.addEventListener("mousemove", setXY);
    imageRef.current.addEventListener("mouseleave", setNone);

    return () => {
      imageRef.current?.removeEventListener("mousemove", setXY);
      imageRef.current?.removeEventListener("mouseleave", setNone);
    };
  }, []);

  const handleChange = (event, newValue) => {
    setSliderValues(newValue);
  };

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
          <img src={"/irpo/assets/" + picsrc} alt="picture" ref={imageRef} />
        </div>
        <div className="picturefooter">
          <div className="picturefooter_left">
            <div className="left_top">
              <div>Min: {sliderValues[0]}°</div>
              <div>Max: {sliderValues[1]}°</div>
              <div>Avg: 265°</div>
              <div>Pointer: {`${pixelValues[0]}.${pixelValues[1]}`}</div>
            </div>
            <div className="left_bottom">
              <CustomSlider
                value={sliderValues}
                onChange={handleChange}
                min={240}
                max={300}
              />
            </div>
          </div>
          <div className="picturefooter_middle">
            <div> {format(t, "hh:mm:ss")} </div>
            <button className="livestream">Livestream</button>
          </div>
          <div className="picturefooter_right">
            <button
              className="settingsbutton"
              onClick={() => navigate("/setup")}>
              <FiSettings className="settings" size={35} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pictures;
