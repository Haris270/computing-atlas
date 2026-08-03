import ada from "../assets/images/ada-1.webp"
import babbage from "../assets/images/babbage.webp"
import engine from "../assets/images/babbage-engine.jpg"
import hollerith from "../assets/images/hollerith-small.jpg"
import tabulator from "../assets/images/tabulator.webp"
import turing from "../assets/images/turing-smaller.jpg"
import vannevar from "../assets/images/vannevar-bush.jpg"


export const timeline = [
    {
        year: "1830s",
        location: "United Kingdom 🇬🇧",
        events: [
            "Charles Babbage shows off his 'Difference Engine', which he claimed could solve polynomial equations",
            "The 'Difference Engine' used vertical shafts, with disks that could be turned to any numeral",
            "Ada Lovelace becomes intrigued by the machine on one of Babbage's weekly evening gatherings",
            "In 1834, Babbage thinks of a general-purpose computer, which he names the 'Analytical Engine'"
        ],

        images: [
            {
                src: babbage,
                alt: "Charles Babbage"
            },

            {
                src: engine,
                alt: "Ada Lovelace"
            }
        ]
    },

    {
        year: "1840s",
        location: "United Kingdom 🇬🇧",
        events: [
            "In 1843, Ada Lovelace publishes her 'Notes' on Babbage's Analytical Engine, in which she explored the concepts of a reprogrammable general-purpose machine",
            "She also noted that such a machine could store, manipulate, process and act upon anything expressable in symbols",
            "She noted that it could alter relationship between any symbols that were logically related e.g. musical notations"
        ],
        images:[
            {
                src: ada,
                alt: "Ada Lovelace"
            }
        ]
    },

    {
        year: "1890",
        location: "U.S.A 🇺🇸",
        events: [
            "Herman Hollerith develops an electromagnetical tabulating machine for punched cards to automate 1890's census",
            "It was the first major use of electrical circuits to process information",
            "Hollerith's company, Tabulating Machine Company, is founded in 1896, which later became IBM"
        ],
        images:[
            {
                src: hollerith,
                alt: "Herman Hollerith"
            },

            {
                src: tabulator,
                alt: "Hollerith's Tabulating Machine"
            }

        ]
    },

    {
        year: "1931",
        location: "U.S.A 🇺🇸",
        events: [
            "Vannevar Bush, an MIT engineering Professor, builds the Differential Analyzer, world's first analog electrical-mechanical computer",
            "The Differential Analyzer (size of a small bedroom) could solve equations containing 18 variables",
            "Alan Turing, studying at King's College Cambridge, reads Von Neumann's 'Mathematical Foundations of Quantum Mechanics'"
        ],
        images:[
            {
                src: turing,
                alt: "Alan Turing"
            },

            {
                src: vannevar,
                alt: "Vannevar Bush"
            }

        ]
    },




];