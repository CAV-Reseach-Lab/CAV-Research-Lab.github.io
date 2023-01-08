import React from 'react';
import '../../App.css';
import './Pages.css';
import Footer from '../Footer';

export default function Team() {
    return (
        <>
            <div class="TeamBody" style={{backgroundColor: "#333333" }}>

                <br></br><br></br>
                <h1 style={{color: "white"}}>CAV-Lab Team</h1>
                <br></br><br></br>

                <div className="info" style={{ margin: "5%", marginTop: "2%" }}>
                    <h2>CAV-Lab Staff</h2><br></br>

                    <table>
                    <tr><th></th>

                        <span class="badge badge-pill badge-danger"><h5>Founder</h5></span>
                        <br></br>
                        </tr>
                        <tr><th></th>

                        <th width="33%"><img class="circular--square" src={require('../../images/old_images/img-1.jpg')} style={{ width: "200px", height: "200px" }} /></th> {/*style={{ width: "50%", height: "50%" }}*/}
                        </tr><tr><th width="33%"></th><th width="33%">

                            <h3 >Saber Fallah</h3>
                            <p class="info">Dr. Fallah founded the CAV-Lab for connectivity and automation research in 2015
                                and since then has worked
                            </p><br></br></th></tr>

                        <tr>
                            <th><span class="badge badge-pill badge-primary"><h5>Founder</h5></span></th>
                            <th><span class="badge badge-pill badge-primary"><h5>Founder</h5></span></th>
                            <th><span class="badge badge-pill badge-primary"><h5>Founder</h5></span></th>

                        </tr>
                        <tr>
                            <th width="33%"><img class="circular--square" src={require('../../images/old_images/img-1.jpg')} style={{ width: "200px", height: "200px" }} /></th>
                            <th width="33%"><img class="circular--square" src={require('../../images/old_images/img-1.jpg')} style={{ width: "200px", height: "200px" }} /></th>
                            <th width="33%"><img class="circular--square" src={require('../../images/old_images/img-1.jpg')} style={{ width: "200px", height: "200px" }} /></th>
                        </tr><tr>


                            <th><br></br><br></br>
                                <h3>Luc McCutcheon</h3><br></br>
                                <p>
                                    As second year PhD student, Luc's work has focused on applying state-of-the-art Reinforcement Learning
                                    algorithms to the task of teleoperated control. Luc joined the team directly from a bachalors in computer
                                    science after a summer placement in 2021.</p> <br></br>

                            </th>
                            <th><br></br><br></br>
                                <h3>Vinal Asodia</h3><br></br>
                                <p>
                                    As second year PhD student, Luc's work has focused on applying state-of-the-art Reinforcement Learning
                                    algorithms to the task of teleoperated control. Luc joined the team directly from a bachalors in computer
                                    science after a summer placement in 2021.</p> <br></br>

                            </th>
                            <th><br></br><br></br>
                                <h3>Mustafa Yilirim</h3><br></br>
                                <p>
                                    As second year PhD student, Luc's work has focused on applying state-of-the-art Reinforcement Learning
                                    algorithms to the task of teleoperated control. Luc joined the team directly from a bachalors in computer
                                    science after a summer placement in 2021.</p> <br></br>

                            </th>


                        </tr>
                    </table>

{/* -------------------------------------------------------------------------------------------------------------------------------------- */}
<br></br><br></br><br></br>

                    <table>

                        <th width="20%"></th>
                        <th width="20%"></th>
                        <th width="20%">
                        <span class="badge badge-pill badge-success"><h5>Alumni</h5></span></th>
                        <th width="20%"></th>
                        <th width="20%"></th>

                        <tr>
                            <th><h3>Saber Fallah</h3></th>
                            <th><h3>Luc McCutcheon</h3></th>
                            <th><h3>Vinal Asodia</h3></th>
                            <th><h3>Mustafa Yildrim</h3></th>

                        <tr>
                            <th><h3>Shilp Dixit</h3></th>
                        </tr>

                        </tr>
                    </table>

                </div>
                <br></br><br></br><br></br>
            </div>
            <Footer />
        </>
    );
}
