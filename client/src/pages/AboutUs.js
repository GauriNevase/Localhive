import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/AboutUs.css'
import Nigel from '../components/images/Nigel.jpg';
import Gauri from '../components/images/Gauri.jpg';
import Kastle from '../components/images/Kastle.jpg';
import Kainaat from '../components/images/Kainaat.jpg';

import Layout from '../components/Layout/Layout';


const AboutUs = () => (
<Layout>

<div className="team-members">
<div className="team-member">
<div className="NigelCon">
<img src={Nigel} className="img"/>
<Link to="/TeamMemberDetails1" className="Name1">Nigel Silveira</Link>
</div>
<div className="NigelCon">
<img src={Gauri} className="img"/>
<Link to="/TeamMemberDetails2" className="Name1">Gauri Nevase</Link>
</div>
<div className="NigelCon">
<img src={Kastle} className="img"/>
<Link to="/TeamMemberDetails3" className="Name1">Kastle Farro</Link>
</div>
<div className="NigelCon">
<img src={Kainaat} className="img"/>
<Link to="/TeamMemberDetails4" className="Name1">Kainaat Zaidi</Link>
</div>
</div>
</div>
</Layout>
);

export default AboutUs;