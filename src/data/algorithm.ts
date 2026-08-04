import floyd from "../assets/images/r-floyd.jpg"
import euclid from "../assets/images/euclid.jpg"
import dijkstra from "../assets/images/dijkstra.jpeg"


export const algorithm = [
    {
        id: 1,
        slug: "euclid-algo",
        title: "Euclidean Algorithm",
        creator: "Euclid",
        description: "Formulated over two millennia ago, Euclid's elegant procedure for determining the Greatest Common Divisor remains one of the oldest algorithms still in active use.",
        image: euclid
    },

    {
        id: 2,
        slug: "floyd-algo",
        title: "Cycle Detection Algorithm",
        creator: "Robert W. Floyd",
        description: "The algorithm that identifies structural cycles within sequences without requiring any auxiliary memory.",
        image: floyd
    },

    {
        id: 3,
        slug: "dijkstra-algo",
        title: "Dijkstra's Algorithm",
        creator: "Edsger W. Dijkstra",
        description: "The foundational graph traversal algorithm that systematically calculates the shortest path between nodes with unparalleled efficiency.",
        image: dijkstra
    }
];