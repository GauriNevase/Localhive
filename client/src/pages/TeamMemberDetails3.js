import React from 'react';
import Kastle from '../components/images/Kastle.jpg';
import '../components/styles/Details.css';
import Layout from '../components/Layout/Layout';

export default function TeamMemberDetails3() {

return (
<Layout>

<div className='Container'>

<h3 className='name'>Kastle Farro</h3>
<img src={Kastle} alt="Kastle Farro" className='img2'/>
<p></p>
<div className='description'>
<h5>Pursing Software Engineering At Don Bosco Institute of Technology</h5><br></br>
<h5>Skills Set: HTML, CSS, React, Wordpress</h5><br></br>
<h5>Projects Worked on: Attendance Management System</h5><br></br>
</div>
</div>

</Layout>
);
};
