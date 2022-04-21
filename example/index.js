class Example extends Phaser.Scene {
    preload() {
        // First set the cachebuster variable
        this.load.cacheBuster = 123

        // Then load your image or whatever you need
        this.load.image('phaser', 'https://labs.phaser.io/assets/sprites/phaser.png')
    }

    create() {
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'phaser')
    }
}

const config = {
    width: 800,
    height: 600,
    scene: [Example],
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
}

window.onload = () => {
    new Phaser.Game(config)
}