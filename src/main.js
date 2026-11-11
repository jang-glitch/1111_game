import { StartScene } from "./scenes/StartScene.js";
import { GameScene } from "./scenes/GameScene.js";
import { ResultScene } from "./scenes/ResultScene.js";

const config = {
  type: Phaser.AUTO,
  parent: "game-canvas",
  backgroundColor: "#f6d6c9",
  scene: [StartScene, GameScene, ResultScene],
  scale: {
    mode: Phaser.Scale.RESIZE,
    width: 800,
    height: 330,
  },
};

new Phaser.Game(config);
