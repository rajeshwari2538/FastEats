import React from "react";
import ReactDOM  from "react-dom/client";


/*
AppLayout
   -Header
        -Logo
        -Nav
   -Body
        -Search
        -RestorauntContainer
          -RestorauntCard
   -Footer
        -Links
        -Contact
        -Address
        -Copyright
*/

const restoList = [
    {
        data: {
            id: 1,
            name: "Meghna Foods",
            cuisines: ["Biryani","North Indian", "Seafood"],
            img: "https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg",
            avgRating: 4.5,
            costForTwo: "500",
            delivaryIn: 21,
        }
    },
    {
        data: {
            id: 2,
            name: "Domino's Pizza",
            cuisines: ["Pizzas","Italian"],
            img: "https://b.zmtcdn.com/data/pictures/chains/6/18732986/fe0435cd1d26e63b2cc20df854e20992.jpg?fit=around|960:500&crop=960:620;*,*",
            avgRating: 4.5,
            costForTwo: "400",
            delivaryIn: 25,
        }
    },
    {
        data: {
            id: 3,
            name: "Nandhana Palace",
            cuisines: ["Biryani", "Andhra"],
            img: "https://media-cdn.tripadvisor.com/media/photo-s/1c/b7/c6/de/food.jpg",
            avgRating: 4.2,
            costForTwo: "500",
            delivaryIn: 20,
        }
    },
    {
        data: {
            id: 4,
            name: "Leon's - Burgers & Wings (Leon Grill)",
            cuisines: ["American", "Snacks"],
            img: "https://b.zmtcdn.com/data/pictures/9/18597729/d25388fb3824bdeb47718c68b7c2f88b.jpg",
            avgRating: 4.5,
            costForTwo: "300",
            delivaryIn: 22,
        }
    },
    {
        data: {
            id: 5,
            name: "Mani's Dum Biryani",
            cuisines: ["Andhra", "Biryani"],
            img: "https://imgmedia.lbb.in/media/2020/03/5e8347b8cc27600fd49efc9b_1585661880637.jpg",
            avgRating: 4.5,
            costForTwo: "400",
            delivaryIn: 17,
        }
    },
    {
        data: {
            id: 6,
            name: "Truffles",
            cuisines: ["American", "Continental"],
            img: "https://b.zmtcdn.com/data/pictures/chains/9/51039/99b002b985def493b463c925ba4c70f6.jpg",
            avgRating: 4.5,
            costForTwo: "450",
            delivaryIn: 24,
        }
    },
    {
        data: {
            id: 7,
            name: "Corner House Ice Cream",
            cuisines: ["Ice Cream", "Desserts"],
            img: "https://pbs.twimg.com/media/EOOG4NNUwAE-C1X.jpg",
            avgRating: 4.8,
            costForTwo: "250",
            delivaryIn: 10,
        }
    },
    {
        data: {
            id: 8,
            name: "Zaitoon",
            cuisines: ["Arabian", "Biryani"],
            img: "https://b.zmtcdn.com/data/pictures/chains/3/54123/511bd6538a10b7799bb1e3779cd9ec63.jpg",
            avgRating: 4.4,
            costForTwo: "500",
            delivaryIn: 26,
        }
    },
    {
        data: {
            id: 9,
            name: "Pizza Hut",
            cuisines: ["Pizzas"],
            img: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/q/x/p49-1493902576590b24f0cacb9.jpg?tr=tr:n-large",
            avgRating: 4.1,
            costForTwo: "300",
            delivaryIn: 26,
        }
    },
    {
        data: {
            id: 10,
            name: "Istah - The Mediterranean Way",
            cuisines: ["Mediterranean", "Snacks"],
            img: "https://b.zmtcdn.com/data/pictures/chains/7/18486567/b7bce72e6e5836319eee6c5faa660a21.jpg?fit=around|960:500&crop=960:500;*,*",
            avgRating: 4.5,
            costForTwo: "250",
            delivaryIn: 25,
        }
    },
]

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
                {
                    restoList.map((resto) => (
                        <RestaurantCard restoData={resto} key={resto.data.id}/>
                    ))
                }
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const {restoData} = props;
    return (
        <div className="resto-card">
            <img 
            className="resto-img" alt="resto-logo"
            src={restoData.data.img}/>
            <h3>{restoData.data.name}</h3>
            <h4>{restoData.data.cuisines.join(", ")}</h4>
            <h4>{restoData.data.avgRating} Stars</h4>
            <h4>₹{restoData.data.costForTwo} For Two</h4>
            <h4>{restoData.data.delivaryIn} mins</h4>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
            
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);