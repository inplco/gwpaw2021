import React from "react";
import { Link } from "react-router-dom";

const Main = () => (
  <div className="main-container" style={{ marginTop: -170 }}>
    <h1 className="main-heading" style={{ fontFamily: 'palatino' }}>GWPAW 2021 POSTER AWARDS</h1>
    <div className="main-btn-section">
      <p style={{ marginTop: -30 }}>DEC 13-17 2021, HANNOVER</p>
      <p style={{ marginTop: 25, marginLeft: 100, marginRight: 100 }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      <Link to="/voting" className="show-stats-btn">
        Click to Vote
      </Link>
    </div>
    <div className="footer">
      <p style={{ fontSize: 14}} >Powered by <a href="http://inpl.one" target = "_">Interplanetary Company</a><sup>TM</sup></p>
    </div>
  </div>
);

export default Main;
