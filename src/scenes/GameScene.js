export class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    this.drawCounter();
    this.scale.on("resize", () => this.drawCounter());
  }

  drawCounter() {
    const { width, height } = this.scale;
    this.counterGraphics?.destroy();
    this.counterLabel?.destroy();

    const graphics = this.add.graphics();

    graphics.fillStyle(0xfbe9d9, 1);
    graphics.fillRect(0, 0, width, height);
    graphics.fillStyle(0x8b3e5a, 1);
    graphics.fillRoundedRect(width * 0.1, height * 0.14, width * 0.8, height * 0.18, 12);
    graphics.fillStyle(0xfffcf8, 1);
    graphics.fillRoundedRect(width * 0.16, height * 0.2, width * 0.68, height * 0.06, 6);
    graphics.fillStyle(0xb9637d, 1);
    graphics.fillRect(0, height * 0.68, width, height * 0.32);
    graphics.fillStyle(0x6d3b45, 1);
    graphics.fillRect(0, height * 0.82, width, height * 0.18);

    const label = this.add.text(width / 2, height * 0.49, "음료 제조 카운터", {
      color: "#593342",
      fontFamily: "Malgun Gothic, sans-serif",
      fontSize: Math.max(18, Math.min(width * 0.055, 30)),
      fontStyle: "bold",
    });
    label.setOrigin(0.5);

    this.counterGraphics = graphics;
    this.counterLabel = label;
  }
}
