import "./Bar.css"
import obi from '../../assets/images/obi.png'
import tinubu from '../../assets/images/tinubu.png'
import atiku from '../../assets/images/atiku.png'

function Bar() {
  return (
    <div className="bar-parent">
        <h2>PRESIDENT</h2>
        <div className="bar">
            <div className="apc poll">
               <span className="tooltips">
                <div className="poll-parent">
                    <div className="image">
                       <img src={tinubu} alt="tinubu"/>
                    </div>
                    <div className="description">
                      <h5 className="tinubu">Tinubu, APC</h5>
                      <p>1,112,000 votes (8%)</p>
                    </div>
                </div>
               </span>
            </div>
              
            <div className="lp poll">
               <span className="tooltips">
               <div className="poll-parent">
                    <div className="image">
                       <img src={obi} alt="obi"/>
                    </div>
                    <div className="description">
                      <h5 className="peter">Peter, LP</h5>
                      <p>61,112,000 votes (78%)</p>
                    </div>
                </div>
               </span>
            </div>
            <div className="pdp poll">
              <span className="tooltips"><div className="poll-parent">
                    <div className="image">
                       <img src={atiku} alt="atiku"/>
                    </div>
                    <div className="description">
                      <h5 className="atiku">Atiku, PDP</h5>
                      <p>19,412,000 votes (14%)</p>
                    </div>
                </div></span>
            </div>
        </div>
    </div>
    
  )
}

export default Bar;