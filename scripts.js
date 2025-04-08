* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f5f8; /* Lyse pastellfarger */
    color: #333;
    line-height: 1.6;
}

#hero {
    height: 100vh;
    background-color: #f9fafb;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.hero-content {
    text-align: center;
}

.dikt-line {
    font-size: 2rem;
    font-weight: 300;
    margin: 20px 0;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

#info {
    background-color: #ffffff;
    padding: 50px 20px;
    text-align: center;
}

.info-content p {
    font-size: 1.25rem;
    color: #666;
    margin-bottom: 15px;
}

/* Footer-stil */
footer {
    background-color: #ffffff;
    padding: 30px 20px;
    text-align: center;
    font-size: 1.2rem;
    color: #333;
    margin-top: 30px;
}
