import React, { useState } from "react";

function Menu() {

    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const menuCategories = [

        {
            title: "Signature Coffee",
            items: [
                {
                    name: "Moon Cappuccino",
                    price: 180,
                    image: "/images/cappuccino.png"
                },
                {
                    name: "Caramel Latte",
                    price: 200,
                    image: "/images/caramel.latte.jpg"
                },
                {
                    name: "Chocolate Mocha",
                    price: 220,
                    image: "/images/chocolatemocha.jpg"
                },
                {
                    name: "Vanilla Cold Coffee",
                    price: 190,
                    image: "/images/vennila cold coffee.jpg"
                }
            ]
        },

        {
            title: "Bubble Tea",
            items: [
                {
                    name: "Classic Bubble Tea",
                    price: 180,
                    image: "/images/boba-milk-tea-featured-image.jpg"
                },
                {
                    name: "Strawberry Bubble Tea",
                    price: 200,
                    image: "/images/strawberrybubbletea.png"
                },
                {
                    name: "Brown Sugar Milk Tea",
                    price: 220,
                    image: "/images/brown-sugar-bubble-tea.jpg"
                },
                {
                    name: "Taro Bubble Tea",
                    price: 200,
                    image: "/images/taro-milk-tea-boba.webp"
                }
            ]
        },

        {
            title: "Fresh Juices",
            items: [
                {
                    name: "Fresh Orange Juice",
                    price: 120,
                    image: "/images/orange_2.jpg"
                },
                {
                    name: "Watermelon Juice",
                    price: 100,
                    image: "/images/watermelon.jpg"
                },
                {
                    name: "Mango Juice",
                    price: 140,
                    image: "/images/AMAZING-MANGO-JUICE.jpg"
                },
                {
                    name: "Mixed Fruit Juice",
                    price: 160,
                    image: "/images/fruitmixer.webp"
                }
            ]
        },

        {
            title: "Mocktails",
            items: [
                {
                    name: "Blue Lagoon",
                    price: 180,
                    image: "/images/blue lagoon.jpg"
                },
                {
                    name: "Strawberry Mojito",
                    price: 190,
                    image: "/images/mojitostrawberry.jpg"
                },
                {
                    name: "Virgin Pina Colada",
                    price: 220,
                    image: "/images/Virgin-Pina-Colada.png"
                },
                {
                    name: "Green Apple Mojito",
                    price: 180,
                    image: "/images/greenapple.webp"
                }
            ]
        },

        {
            title: "Ice Cream Specials",
            items: [
                {
                    name: "Moon Special Ice Cream",
                    price: 180,
                    image: "/images/moonspecialicecream.webp"
                },
                {
                    name: "Chocolate Brownie Ice Cream",
                    price: 220,
                    image: "/images/chocolatebrownie.jpg"
                },
                {
                    name: "Strawberry Dream",
                    price: 190,
                    image: "/images/icesrawberry.jpg"
                },
                {
                    name: "Cookie & Cream",
                    price: 200,
                    image: "/images/Cookies-And-Cream-Ice-Cream.webp"
                }
            ]
        },

        {
            title: "Cakes & Desserts",
            items: [
                {
                    name: "Chocolate Cake",
                    price: 180,
                    image: "/images/Chocolate-Cake-with-Cream-Filling-3-1-1.webp"
                },
                {
                    name: "Red Velvet Cake",
                    price: 200,
                    image: "/images/14REDVELVET-superJumbo-v4.jpg"
                },
                {
                    name: "Cheesecake",
                    price: 220,
                    image: "/images/cheesecake-recipe-6.jpg"
                },
                {
                    name: "Choco Lava Cake",
                    price: 190,
                    image: "/images/Chocolate-Lava-Cake.webp"
                }
            ]
        },

        {
            title: "Korean Delights",
            items: [
                {
                    name: "Korean Fried Chicken",
                    price: 320,
                    image: "/images/k friedchick.jpg"
                },
                {
                    name: "Tteokbokki",
                    price: 280,
                    image: "/images/Tteokbokki.jpg"
                },
                {
                    name: "Korean Noodles",
                    price: 260,
                    image: "/images/Korean Spicy Noodles.webp"
                },
                {
                    name: "Kimchi Fried Rice",
                    price: 280,
                    image: "/images/🍳 Kimchi Fried Rice.jpg"
                }
            ]
        },

        {
            title: "Chinese Favorites",
            items: [
                {
                    name: "Chicken Fried Rice",
                    price: 250,
                    image: "/images/chickenfriedrice2.jpg"
                },
                {
                    name: "Schezwan Noodles",
                    price: 240,
                    image: "/images/scezwannoodles.webp"
                },
                {
                    name: "Chilli Chicken",
                    price: 200,
                    image: "/images/chillichicken.jpg"
                },
                {
                    name: "Veg Manchurian",
                    price: 220,
                    image: "/images/vegmanchurian.avif"
                }
            ]
        }

    ];

    const addToCart = (item) => {

        const existingItem = cart.find(
            (cartItem) => cartItem.name === item.name
        );

        if (existingItem) {

            setCart(
                cart.map((cartItem) =>
                    cartItem.name === item.name
                        ? {
                            ...cartItem,
                            quantity: cartItem.quantity + 1
                        }
                        : cartItem
                )
            );

        } else {

            setCart([
                ...cart,
                {
                    ...item,
                    quantity: 1
                }
            ]);

        }
    };

    const increaseQuantity = (name) => {

        setCart(
            cart.map((item) =>
                item.name === name
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            )
        );

    };

    const decreaseQuantity = (name) => {

        setCart(
            cart
                .map((item) =>
                    item.name === name
                        ? {
                            ...item,
                            quantity: item.quantity - 1
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );

    };

    const removeItem = (name) => {

        setCart(
            cart.filter((item) => item.name !== name)
        );

    };

    const totalPrice = cart.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );


    // TOTAL ITEMS
    const totalItems = cart.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );

    const orderNow = () => {

        if (cart.length === 0) {

            alert("Your cart is empty!");

            return;
        }

        alert(
            `Order placed successfully! \n\nTotal Amount: ₹${totalPrice}`
        );

        setCart([]);
        setShowCart(false);

    };


    return (

        <section className="menu-page">

            <div className="menu-header">

                <h1>Our Menu</h1>

                <h3>
                    Explore our delicious collection of
                    premium beverages, desserts and food.
                </h3>

            </div>

            <div className="cart-button-container">

                <button
                    className="open-cart-btn"
                    onClick={() => setShowCart(true)}
                >
                    Open Cart ({totalItems})
                </button>

            </div>

            <div className="menu-grid">

                {menuCategories.map((category, index) => (

                    <div
                        className="menu-card"
                        key={index}
                    >

                        <h2>
                            {category.title}
                        </h2>


                        <div className="menu-items">

                            {category.items.map((item) => (

                                <div
                                    className="menu-item"
                                    key={item.name}
                                >

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="menu-image"
                                    />

                                    <div className="food-details">

                                        <h3>
                                            {item.name}
                                        </h3>

                                        <p className="price">
                                            ₹{item.price}
                                        </p>

                                        <button
                                            className="add-cart-btn"
                                            onClick={() =>
                                                addToCart(item)
                                            }
                                        >
                                            Add to Cart
                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                ))}

            </div>

            {showCart && (

                <div className="cart-overlay">

                    <div className="cart-box">

                        <div className="cart-header">

                            <h2>
                                Your Cart
                            </h2>

                            <button
                                className="close-cart"
                                onClick={() =>
                                    setShowCart(false)
                                }
                            >
                                ✕
                            </button>

                        </div>

                        {cart.length === 0 ? (

                            <div className="empty-cart">

                                <h3>
                                    Your cart is empty
                                </h3>

                                <p>
                                    Add some delicious food!
                                </p>

                            </div>

                        ) : (

                            <>

                                <div className="cart-items">

                                    {cart.map((item) => (

                                        <div
                                            className="cart-item"
                                            key={item.name}
                                        >

                                            <img
                                                src={item.image}
                                                alt={item.name}
                                            />


                                            <div>

                                                <h3>
                                                    {item.name}
                                                </h3>

                                                <p>
                                                    ₹{item.price}
                                                </p>

                                            </div>

                                            <div className="quantity">

                                                <button
                                                    onClick={() =>
                                                        decreaseQuantity(
                                                            item.name
                                                        )
                                                    }
                                                >
                                                    −
                                                </button>

                                                <span>
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    onClick={() =>
                                                        increaseQuantity(
                                                            item.name
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>

                                            </div>

                                            <strong>
                                                ₹
                                                {item.price *
                                                    item.quantity}
                                            </strong>

                                            <button
                                                className="remove-btn"
                                                onClick={() =>
                                                    removeItem(
                                                        item.name
                                                    )
                                                }
                                            >
                                                
                                            </button>

                                        </div>

                                    ))}

                                </div>

                                <div className="cart-total">

                                    <h2>
                                        Total: ₹{totalPrice}
                                    </h2>

                                </div>

                                <button
                                    className="order-btn"
                                    onClick={orderNow}
                                >
                                    Order Now
                                </button>

                            </>

                        )}

                    </div>

                </div>

            )}

            <div className="menu-footer">

                <h2>
                    Special Moments Deserve Special Food!
                </h2>

                <p>
                    Enjoy your favourite food and drinks
                    at VS Moon Cafe.
                </p>

            </div>

        </section>

    );

}

export default Menu;