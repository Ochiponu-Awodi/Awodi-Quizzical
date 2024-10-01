const bubbleStyles = {
    color: '#293264',
    fontFamily: 'Karla',
    backgroundColor: '#ffffcc',
    text: 'awodi',
};

const bubblePositionStyles = (isQuizPage, index) => {
    if (isQuizPage) {
        const offset = 200;
        return {
            position: 'fixed',
            top: `calc(50% - ${offset * index}px)`,
            left: `calc(50% + ${offset * index}px)`,
            transform: 'translate(-50%, -50%)',
            width: '15vw',
            height: '15vw',
        };
    } else {
        return {
            position: 'absolute',
            top: `${Math.random() * 100}vh`, 
            left: `${Math.random() * 100}vw`, 
            width: '15vw',
            height: '15vw',
        };
    }
};

const animations = ['swim1', 'swim2'];

const createBubblesData = (isQuizPage) => {
    return Array.from({ length: 2 }, (_, index) => ({
        id: index,
        styles: bubbleStyles,
        positionStyles: bubblePositionStyles(isQuizPage, index),
        animationName: animations[index % animations.length],
        animationDuration: `${Math.random() * 5 + 5}s`,
    }));
};

export default createBubblesData;