const bubbleStyles = {
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#293264',
    fontSize: '2vw',
    fontFamily: 'Karla',
    backgroundColor: '#ffffcc',
    text: 'awodi',
};

const bubblePositionStyles = (position) => ({
    position: 'absolute',
    top: position.top,
    left: position.left,
    width: '15vw',
    height: '15vw',
});

const animations = ['swim1', 'swim2'];

const bubblesData = Array.from({ length: 2 }, (_, index) => ({
    id: index,
    styles: bubbleStyles,
    positionStyles: bubblePositionStyles({ 
        top: `${Math.random() * 100}vh`, 
        left: `${Math.random() * 100}vw` }),
        animationName: animations[index % animations.length],
        animationDuration: `${Math.random() * 5 + 5}s`,
}));

export default bubblesData;