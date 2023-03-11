import map from "../../assets/images/map.png"
import Bar from "../bar/Bar";
import "./Map.css"

const Map = () => {
    return ( 
        <div className="map">
             <Bar />
            <img src={map} alt="" className="map_image"/>
        </div>
     );
}


 
export default Map;