import React, { useState } from "react";

function Menu() {

    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const menuCategories = [

        {
            title: "☕ Signature Coffee",
            items: [
                {
                    name: "Moon Cappuccino",
                    price: 180,
                    image: "src/assets/image/cappuccino.png"
                },
                {
                    name: "Caramel Latte",
                    price: 200,
                    image: "src/assets/image/caramel.latte.jpg"
                },
                {
                    name: "Chocolate Mocha",
                    price: 220,
                    image: "src/assets/image/chocolatemocha.jpg"
                },
                {
                    name: "Vanilla Cold Coffee",
                    price: 190,
                    image: "/images/vanilla-cold-coffee.jpg"
                }
            ]
        },

        {
            title: "🧋 Bubble Tea",
            items: [
                {
                    name: "Classic Bubble Tea",
                    price: 180,
                    image: "/images/classic-bubble-tea.jpg"
                },
                {
                    name: "Strawberry Bubble Tea",
                    price: 200,
                    image: "/images/strawberry-bubble-tea.jpg"
                },
                {
                    name: "Brown Sugar Milk Tea",
                    price: 220,
                    image: "/images/brown-sugar-milk-tea.jpg"
                },
                {
                    name: "Taro Bubble Tea",
                    price: 200,
                    image: "/images/taro-bubble-tea.jpg"
                }
            ]
        },

        {
            title: "🍹 Fresh Juices",
            items: [
                {
                    name: "Fresh Orange Juice",
                    price: 120,
                    image: "/images/orange-juice.jpg"
                },
                {
                    name: "Watermelon Juice",
                    price: 100,
                    image: "/images/watermelon-juice.jpg"
                },
                {
                    name: "Mango Juice",
                    price: 140,
                    image: "/images/mango-juice.jpg"
                },
                {
                    name: "Mixed Fruit Juice",
                    price: 160,
                    image: "/images/mixed-fruit-juice.jpg"
                }
            ]
        },

        {
            title: "🍸 Mocktails",
            items: [
                {
                    name: "Blue Lagoon",
                    price: 180,
                    image: "/images/blue-lagoon.jpg"
                },
                {
                    name: "Strawberry Mojito",
                    price: 190,
                    image: "/images/strawberry-mojito.jpg"
                },
                {
                    name: "Virgin Pina Colada",
                    price: 220,
                    image: "/images/pina-colada.jpg"
                },
                {
                    name: "Green Apple Mojito",
                    price: 180,
                    image: "/images/green-apple-mojito.jpg"
                }
            ]
        },

        {
            title: "🍨 Ice Cream Specials",
            items: [
                {
                    name: "Moon Special Ice Cream",
                    price: 180,
                    image: "/images/moon-ice-cream.jpg"
                },
                {
                    name: "Chocolate Brownie Ice Cream",
                    price: 220,
                    image: "/images/brownie-ice-cream.jpg"
                },
                {
                    name: "Strawberry Dream",
                    price: 190,
                    image: "/images/strawberry-ice-cream.jpg"
                },
                {
                    name: "Cookie & Cream",
                    price: 200,
                    image: "/images/cookie-cream.jpg"
                }
            ]
        },

        {
            title: "🍰 Cakes & Desserts",
            items: [
                {
                    name: "Chocolate Cake",
                    price: 180,
                    image: "/images/chocolate-cake.jpg"
                },
                {
                    name: "Red Velvet Cake",
                    price: 200,
                    image: "/images/red-velvet.jpg"
                },
                {
                    name: "Cheesecake",
                    price: 220,
                    image: "/images/cheesecake.jpg"
                },
                {
                    name: "Choco Lava Cake",
                    price: 190,
                    image: "/images/choco-lava-cake.jpg"
                }
            ]
        },

        {
            title: "🍗 Korean Delights",
            items: [
                {
                    name: "Korean Fried Chicken",
                    price: 320,
                    image: "/images/korean-fried-chicken.jpg"
                },
                {
                    name: "Tteokbokki",
                    price: 280,
                    image: "/images/tteokbokki.jpg"
                },
                {
                    name: "Korean Noodles",
                    price: 260,
                    image: "/images/korean-noodles.jpg"
                },
                {
                    name: "Kimchi Fried Rice",
                    price: 280,
                    image: "/images/kimchi-fried-rice.jpg"
                }
            ]
        },

        {
            title: "🥢 Chinese Favorites",
            items: [
                {
                    name: "Chicken Fried Rice",
                    price: 250,
                    image: "/images/chicken-fried-rice.jpg"
                },
                {
                    name: "Schezwan Noodles",
                    price: 240,
                    image: "/images/schezwan-noodles.jpg"
                },
                {
                    name: "Chilli Chicken",
                    price: 300,
                    image: "/images/chilli-chicken.jpg"
                },
                {
                    name: "Veg Manchurian",
                    price: 220,
                    image: "/images/veg-manchurian.jpg"
                }
            ]
        }

    ];


    // ADD TO CART
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


    // INCREASE QUANTITY
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


    // DECREASE QUANTITY
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


    // REMOVE ITEM
    const removeItem = (name) => {

        setCart(
            cart.filter((item) => item.name !== name)
        );

    };


    // TOTAL PRICE
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


    // ORDER NOW
    const orderNow = () => {

        if (cart.length === 0) {

            alert("Your cart is empty!");

            return;
        }

        alert(
            `Order placed successfully! 🎉\n\nTotal Amount: ₹${totalPrice}`
        );

        setCart([]);
        setShowCart(false);

    };


    return (

        <section className="menu-page">

            {/* HEADER */}

            <div className="menu-header">

                <h1>🌙 VS MOON CAFE</h1>

                <h2>Our Menu</h2>

                <p>
                    Coffee • Dreams • Memories
                </p>

                <p>
                    Explore our delicious collection of
                    premium beverages, desserts and food.
                </p>

            </div>


            {/* OPEN CART BUTTON */}

            <div className="cart-button-container">

                <button
                    className="open-cart-btn"
                    onClick={() => setShowCart(true)}
                >
                    🛒 Open Cart ({totalItems})
                </button>

            </div>


            {/* MENU CARDS */}

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

                                    {/* IMAGE */}

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="menu-image"
                                    />


                                    {/* DETAILS */}

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
                                            🛒 Add to Cart
                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                ))}

            </div>


            {/* CART POPUP */}

            {showCart && (

                <div className="cart-overlay">

                    <div className="cart-box">

                        {/* CART HEADER */}

                        <div className="cart-header">

                            <h2>
                                🛒 Your Cart
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


                        {/* EMPTY CART */}

                        {cart.length === 0 ? (

                            <div className="empty-cart">

                                <h3>
                                    🛒 Your cart is empty
                                </h3>

                                <p>
                                    Add some delicious food!
                                </p>

                            </div>

                        ) : (

                            <>

                                {/* CART ITEMS */}

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


                                            {/* QUANTITY */}

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


                                            {/* ITEM TOTAL */}

                                            <strong>
                                                ₹
                                                {item.price *
                                                    item.quantity}
                                            </strong>


                                            {/* REMOVE */}

                                            <button
                                                className="remove-btn"
                                                onClick={() =>
                                                    removeItem(
                                                        item.name
                                                    )
                                                }
                                            >
                                                🗑
                                            </button>

                                        </div>

                                    ))}

                                </div>


                                {/* TOTAL */}

                                <div className="cart-total">

                                    <h2>
                                        Total: ₹{totalPrice}
                                    </h2>

                                </div>


                                {/* ORDER NOW */}

                                <button
                                    className="order-btn"
                                    onClick={orderNow}
                                >
                                    🍽️ Order Now
                                </button>

                            </>

                        )}

                    </div>

                </div>

            )}


            {/* FOOTER */}

            <div className="menu-footer">

                <h2>
                    ✨ Special Moments Deserve Special Food ✨
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