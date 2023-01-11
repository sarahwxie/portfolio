import React from "react";
import ExperienceSection from "../components/experience-section";

// create a parallax homepage
function ExperiencePage() {
    // data for the web section
    const web = ["web/api.webp", "web/css.webp", "web/html.png", "web/javascript.png", "web/mysql.png", "web/postman.png", "web/trello.png", "web/github.png"];
    const web1 = {
      largeimg: 'web/dashboard.png',
      title: "Built admin, student, and instructor dashboard",
      text: "Built out the user dashboards for NexStream. Worked with model, view, control tools. For the student and instructor dashboards, built out the Zoom REST API integration using Postman. \
            Weekly features were completed via Zoom syncs, Trello boards, and Git."
    }
    const web2 = {
      largeimg: 'web/database.png',
      title: "Re-organized the MySQL database",
      text: "Previously, the MySQL database had JSON which was sub-optimal for the Laravel framework and for organizaiton. Designed a new database \
            using dbdiagram.io and implemented it using SQL scripts."
    }
    const webData = [web1, web2];


    // data for the machine learning section
    const machine = ["machine/colab.webp", "machine/matplotlib.png", "machine/numpy.png", "machine/pandas.png", "machine/python.png", "machine/linux.png", "machine/tensorflow.png"];
    const machine1 = {
      largeimg: 'machine/ml.png',
      title: "Taught Machine Learning, Python, and Python Libraries",
      text: "Created course content, taught, and created labs using Google CoLab that covered machine learning concepts and implementation, Python libraries, Linux, and general programming concepts.\
            Answered questions and managed 2-3 TAs."
    }
    const machine2 = {
      largeimg: 'machine/teach.jpeg',
      title: "Identified and solved problems with the company",
      text: "Helped NexStream tackle their issue of low student engagement by designing a new lession structure. Trained and helped onboard new instructors."
    }
    const machineData = [machine2, machine1];

    // data for the hackathon section
    const hackathon = ["hackathon/c.png", "hackathon/java.png", "hackathon/gracehacks.jpeg", "hackathon/replit.jpeg", "hackathon/teaching.png"];
    const hackathon1 = {
      largeimg: 'hackathon/mentor.webp',
      title: "Held workshop and mentored at GraceHacks",
      text: "Devlivered a workshop on web development, and helped GraceHacks participants with various coding issues. "
    }
    const hackathonData = [hackathon1];

    // data for the marketing section
    const marketing = ["marketing/canva.png", "marketing/excel.png", "marketing/speaking.png", "marketing/sportshi.png"];
    const marketing1 = {
      largeimg: 'marketing/marketing.webp',
      title: "Coordinated marketing events, created marketing material",
      text: "Organized other interns to appear in reality TV show promoting the company. Appeared in reality TV segment with TikTok stars Josh Richards and Griffic Johnson. Organized data with Excel, and created marketing material \
            using Canva."
    }
    const marketing2 = {
      largeimg: 'marketing/growth.webp',
      title: "Pitched and helped implement marketing solution",
      text: "Helped SportsHi solve problem of initiation horizontal marketing between students by pitching and helping develop the 'club chapters' marketing idea. \
            Led to the creation of 150+ SportsHi clubs, and the hiring of 5,000+ high school ambassadors."
    }
    const marketingData = [marketing2, marketing1];

    // data for the Cybersecurity section
    const cyber = ["cyber/bash.png", "cyber/powershell.webp", "cyber/apache.png", "cyber/ctf.png", "cyber/kali.webp", "cyber/packet.png", "cyber/redteam.jpeg"];
    const cyber1 = {
      largeimg: 'cyber/capture-the-flag.jpeg',
      title: "Red Team/Blue team training activities, CTF competitions",
      text: `Competed in CTF events, participated in red/blue team activities on both the blue and red team. Utilized both hacking and security tools. OS, browser, and application hardening. Bash & Powershell scripting.`
    }
    const cyber2 = {
      largeimg: 'cyber/security.jpeg',
      title: "Compete in Windows/Linux system administration & security competitions",
      text: `6-time platinum national semifinalist. Windows & Linux system administration & security. Routing & network security on Packet Tracer`
    }
    const cyberData = [cyber1, cyber2];

    // data for the researhcer section
    const researcher = ["researcher/ssh.png", "researcher/raspberry.png", "researcher/jupyter.png", "researcher/research.png", "researcher/cloud.webp", "researcher/sdsc.jpeg"];
    const researcher1 = {
      largeimg: 'researcher/supercomputer.jpeg',
      title: "Tested algorithms on supercomputer",
      text: "Researched and wrote research essay under Dr. Mary Thomas, developed Jupyter notebooks, tested maze solving algorithms on supercomputer through SSH tunnel."
    }
    const researcherData = [researcher1];


    return (
      <div class="experience-page">
        <ExperienceSection position="Full Stack Web Developer" company="NexStream Technical Education" img={web} data={webData}/>
        <ExperienceSection position="Machine Learning Instructor" company="NexStream Technical Education" img={machine} data={machineData}/>
        <ExperienceSection position="Hackathon Mentor & Speaker" company="GraceHacks" img={hackathon} data={hackathonData}/>
        <ExperienceSection position="Marketing Intern" company="BreakThru (formerly SportsHi)" img={marketing} data={marketingData}/>
        <ExperienceSection position="CyberPatriot" company="Air Force Association" img={cyber} data={cyberData}/>
        <ExperienceSection position="Student Researcher" company="San Diego Supercomputer Center" img={researcher} data={researcherData}/>
      </div>
    )
}

export default ExperiencePage;
