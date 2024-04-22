import React from 'react';
import Nigel from '../components/images/Nigel.jpg';
import '../components/styles/Details.css';
import Layout from '../components/Layout/Layout';


export default function TeamMemberDetails1() {

return (
<Layout>
<div className='Container'>

<h3 className='name'>Nigel Silveira</h3>
<img src={Nigel} alt="Nigel Silveira" className='img2'/>
<p></p>
<div className='description'>
<h5>Pursing Software Engineering At Don Bosco Institute of Technology</h5><br></br>
<h5>Skills Set: HTML, CSS, MySql</h5><br></br>
<h5>Projects Worked on: IMEX - Image to Excel, Car Rental System</h5><br></br>
</div>
</div>
</Layout>
);
};