import img1 from "../Assets/img/planet/planet9.svg"
import img2 from "../Assets/img/planet/planet2.svg"
import img3 from "../Assets/img/planet/planet3.svg"
import img4 from "../Assets/img/planet/planet4.svg"
import img5 from "../Assets/img/planet/planet5.svg"
import img6 from "../Assets/img/planet/planet6.svg"
import img7 from "../Assets/img/planet/planet7.svg"
import img8 from "../Assets/img/planet/planet8.svg"
import ship1 from "../Assets/img/ship/ship1.svg"
import ship2 from "../Assets/img/ship/ship2.svg"
import ship3 from "../Assets/img/ship/ship3.svg"
import ship4 from "../Assets/img/ship/ship4.svg"
import ship5 from "../Assets/img/ship/ship5.svg"
import ship6 from "../Assets/img/ship/ship6.svg"

let state = {
    planets: [
        { name:"x11",
          predescription: "Planet has a weak induced magnetosphere, but retains a thick atmosphere of mainly carbon dioxide",
          description: "Planet has a weak induced magnetosphere, but retains a thick atmosphere of mainly carbon dioxide, which creats a strong greenhouse effect. This results in an intense mean temperature of 737 K (464 °C; 867 °F) at the bottom of the atmosphere, where the thick atmosphere reaches an 92 times higher atmospheric pressure than Earth has at its surface, turning the air into a supercritical fluid. At the bottom of the atmosphere lies a terrestrial surface of volcanic origin. Water might have formed oceans on Venus before runaway greenhouse effects increased the atmospheric temperature, evaporating the water, which subsequently also dissapeared from the atmosphere.[22][23][24] The atmosphere obscures the surface of Venus, as it has the highest albedo in the Solar System, and sulfuric acid clouds cover the planet. The possibility of life on Venus has long been a topic of speculation, particularly in the clouds of Venus, featuring layers of more Earth-like conditions at roughly 50 km altitude, but despite recent indicative research, no convincing evidence has been found thus far.",
          image: img1,
          price: "12 TR",
          id: 1
        },
        { name:"x22",
            predescription: "Planet has a weak induced magnetosphere, but retains a thick atmosphere of mainly carbon dioxide",
            description: "Planet has a weak induced magnetosphere, but retains a thick atmosphere of mainly carbon dioxide, which creats a strong greenhouse effect. This results in an intense mean temperature of 737 K (464 °C; 867 °F) at the bottom of the atmosphere, where the thick atmosphere reaches an 92 times higher atmospheric pressure than Earth has at its surface, turning the air into a supercritical fluid. At the bottom of the atmosphere lies a terrestrial surface of volcanic origin. Water might have formed oceans on Venus before runaway greenhouse effects increased the atmospheric temperature, evaporating the water, which subsequently also dissapeared from the atmosphere.[22][23][24] The atmosphere obscures the surface of Venus, as it has the highest albedo in the Solar System, and sulfuric acid clouds cover the planet. The possibility of life on Venus has long been a topic of speculation, particularly in the clouds of Venus, featuring layers of more Earth-like conditions at roughly 50 km altitude, but despite recent indicative research, no convincing evidence has been found thus far.",
            image: img2,
            price: "12 TR",
            id: 2

        },
        { name:"x33",
            predescription: "Planet has a weak induced magnetosphere, but retains a thick atmosphere of mainly carbon dioxide",
            description: "Planet has a weak induced magnetosphere, but retains a thick atmosphere of mainly carbon dioxide, which creats a strong greenhouse effect. This results in an intense mean temperature of 737 K (464 °C; 867 °F) at the bottom of the atmosphere, where the thick atmosphere reaches an 92 times higher atmospheric pressure than Earth has at its surface, turning the air into a supercritical fluid. At the bottom of the atmosphere lies a terrestrial surface of volcanic origin. Water might have formed oceans on Venus before runaway greenhouse effects increased the atmospheric temperature, evaporating the water, which subsequently also dissapeared from the atmosphere.[22][23][24] The atmosphere obscures the surface of Venus, as it has the highest albedo in the Solar System, and sulfuric acid clouds cover the planet. The possibility of life on Venus has long been a topic of speculation, particularly in the clouds of Venus, featuring layers of more Earth-like conditions at roughly 50 km altitude, but despite recent indicative research, no convincing evidence has been found thus far.",
            image: img3,
            price: "12 TR",
            id: 3
        },
        { name:"x44",
            predescription: "Planet has a weak induced magnetosphere, but retains a thick atmosphere of mainly carbon dioxide",
            description: "Planet has a weak induced magnetosphere, but retains a thick atmosphere of mainly carbon dioxide, which creats a strong greenhouse effect. This results in an intense mean temperature of 737 K (464 °C; 867 °F) at the bottom of the atmosphere, where the thick atmosphere reaches an 92 times higher atmospheric pressure than Earth has at its surface, turning the air into a supercritical fluid. At the bottom of the atmosphere lies a terrestrial surface of volcanic origin. Water might have formed oceans on Venus before runaway greenhouse effects increased the atmospheric temperature, evaporating the water, which subsequently also dissapeared from the atmosphere.[22][23][24] The atmosphere obscures the surface of Venus, as it has the highest albedo in the Solar System, and sulfuric acid clouds cover the planet. The possibility of life on Venus has long been a topic of speculation, particularly in the clouds of Venus, featuring layers of more Earth-like conditions at roughly 50 km altitude, but despite recent indicative research, no convincing evidence has been found thus far.",
            image: img4,
            price: "12 TR",
            id: 4
        },
        { name:"x55",
            predescription: "Planet has a weak induced magnetosphere, but retains a thick atmosphere of mainly carbon dioxide",
            description: "Planet has a weak induced magnetosphere, but retains a thick atmosphere of mainly carbon dioxide, which creats a strong greenhouse effect. This results in an intense mean temperature of 737 K (464 °C; 867 °F) at the bottom of the atmosphere, where the thick atmosphere reaches an 92 times higher atmospheric pressure than Earth has at its surface, turning the air into a supercritical fluid. At the bottom of the atmosphere lies a terrestrial surface of volcanic origin. Water might have formed oceans on Venus before runaway greenhouse effects increased the atmospheric temperature, evaporating the water, which subsequently also dissapeared from the atmosphere.[22][23][24] The atmosphere obscures the surface of Venus, as it has the highest albedo in the Solar System, and sulfuric acid clouds cover the planet. The possibility of life on Venus has long been a topic of speculation, particularly in the clouds of Venus, featuring layers of more Earth-like conditions at roughly 50 km altitude, but despite recent indicative research, no convincing evidence has been found thus far.",
            image: img5,
            price: "12 TR",
            id: 5
        },
        { name:"x66",
            predescription: "Planet has a weak induced magnetosphere, but retains a thick atmosphere of mainly carbon dioxide",
            description: "Planet has a weak induced magnetosphere, but retains a thick atmosphere of mainly carbon dioxide, which creats a strong greenhouse effect. This results in an intense mean temperature of 737 K (464 °C; 867 °F) at the bottom of the atmosphere, where the thick atmosphere reaches an 92 times higher atmospheric pressure than Earth has at its surface, turning the air into a supercritical fluid. At the bottom of the atmosphere lies a terrestrial surface of volcanic origin. Water might have formed oceans on Venus before runaway greenhouse effects increased the atmospheric temperature, evaporating the water, which subsequently also dissapeared from the atmosphere.[22][23][24] The atmosphere obscures the surface of Venus, as it has the highest albedo in the Solar System, and sulfuric acid clouds cover the planet. The possibility of life on Venus has long been a topic of speculation, particularly in the clouds of Venus, featuring layers of more Earth-like conditions at roughly 50 km altitude, but despite recent indicative research, no convincing evidence has been found thus far.",
            image: img6,
            price: "12 TR",
            id: 6
        },
        { name:"x77",
            predescription: "Planet has a weak induced magnetosphere, but retains a thick atmosphere of mainly carbon dioxide",
            description: "Planet has a weak induced magnetosphere, but retains a thick atmosphere of mainly carbon dioxide, which creats a strong greenhouse effect. This results in an intense mean temperature of 737 K (464 °C; 867 °F) at the bottom of the atmosphere, where the thick atmosphere reaches an 92 times higher atmospheric pressure than Earth has at its surface, turning the air into a supercritical fluid. At the bottom of the atmosphere lies a terrestrial surface of volcanic origin. Water might have formed oceans on Venus before runaway greenhouse effects increased the atmospheric temperature, evaporating the water, which subsequently also dissapeared from the atmosphere.[22][23][24] The atmosphere obscures the surface of Venus, as it has the highest albedo in the Solar System, and sulfuric acid clouds cover the planet. The possibility of life on Venus has long been a topic of speculation, particularly in the clouds of Venus, featuring layers of more Earth-like conditions at roughly 50 km altitude, but despite recent indicative research, no convincing evidence has been found thus far.",
            image: img7,
            price: "12 TR",
            id: 7
        },
        { name:"x88",
            predescription: "Planet has a weak induced magnetosphere, but retains a thick atmosphere of mainly carbon dioxide",
            description: "Planet has a weak induced magnetosphere, but retains a thick atmosphere of mainly carbon dioxide, which creats a strong greenhouse effect. This results in an intense mean temperature of 737 K (464 °C; 867 °F) at the bottom of the atmosphere, where the thick atmosphere reaches an 92 times higher atmospheric pressure than Earth has at its surface, turning the air into a supercritical fluid. At the bottom of the atmosphere lies a terrestrial surface of volcanic origin. Water might have formed oceans on Venus before runaway greenhouse effects increased the atmospheric temperature, evaporating the water, which subsequently also dissapeared from the atmosphere.[22][23][24] The atmosphere obscures the surface of Venus, as it has the highest albedo in the Solar System, and sulfuric acid clouds cover the planet. The possibility of life on Venus has long been a topic of speculation, particularly in the clouds of Venus, featuring layers of more Earth-like conditions at roughly 50 km altitude, but despite recent indicative research, no convincing evidence has been found thus far.",
            image: img8,
            price: "12 TR",
            id: 8
        },
    ],
    ships: [
        {name:"Dreamer",
        price: "12 TR",
        description:"True astronaut`s friend, V8",
        image: ship1
        },
        {name:"StarDust",
            price: "12 TR",
            description:"True astronaut`s friend, V8",
            image: ship2
        },
        {name:"Stalker",
            price: "12 TR",
            description:"True astronaut`s friend, V8",
            image: ship3
        },
        {name:"Startrack",
            price: "12 TR",
            description:"True astronaut`s friend, V8",
            image: ship4
        },
        {name:"Voyager",
            price: "12 TR",
            description:"True astronaut`s friend, V8",
            image: ship5
        },
       {name:"Pathfinder",
            price: "12 TR",
            description:"True astronaut`s friend, V8",
            image: ship6
        }
        ]
}
export default state

