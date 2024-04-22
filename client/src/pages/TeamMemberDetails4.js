import React from 'react';
import Kainaat from '../components/images/Kainaat.jpg';
import '../components/styles/Details.css';
import Layout from '../components/Layout/Layout';

export default function TeamMemberDetails4() {

return (
<Layout>

<div className='Container'>

<h3 className='name'>Kainaat Zaidi</h3>
<img src={Kainaat} alt="Kainaat" className='img2'/>
<p></p>
<div className='description'>
<h5>Pursing Software Engineering At Don Bosco Institute of Technology</h5><br></br>
<h5>Skills Set: HTML, CSS, Java, React</h5><br></br>
<h5>Projects Worked on: WellCare - Social Media for Mental Health,<br></br><br></br> HBMS - Hospital Bed Management System</h5><br></br>
</div>
</div>

</Layout>
);
};
