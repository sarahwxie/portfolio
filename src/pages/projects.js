import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ExperienceSection from "../components/experience-section";

// create a parallax homepage
function ProjectsPage() {
    // data for bobacoin
    const coin = ["marketing/uiux.svg", "coin/ethereum.png", "coin/figma.png", "coin/solidity.webp", "coin/web3.webp"];
    const coin1 = {
      largeimg: 'coin/etherscan.png',
      title: "Created and deployed Solidity Smart Contract",
      text: "Used solidity to write a simple token smart contract, and deployed to the goerli Ethereum testnet. "
    }
    const coin2 = {
      largeimg: 'coin/bobacoin.png',
      title: "Designed Site using Figma",
      text: "Used Figma to create the basic design for the website. I put extra focus on color scheme and ensuring a good UI/UX user experience. "
    }
    const coinData = [coin1, coin2];

    // data for the club rush section
    const club = [];
    const club1 = {
      largeimg: 'club.png',
      title: "Built website for club rush",
      text: "Organized data from 50+ participating clubs, obtained 4,000+ users in first month."
    }
    const clubData = [club1];

    return (
      <div class="experience-page">
            <ExperienceSection position="BobaCoin (in progress!)" company="Web3 site that acts as a faucet for BobaCoin token" img={coin} data={coinData}/>
            <ExperienceSection position="4sclubrush.com" company="School club directory for my neighborhood" img={club} data={clubData}/>
      </div>
    )
}

export default ProjectsPage;
