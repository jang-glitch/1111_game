export class StartScene extends Phaser.Scene {
  constructor() {
    super("StartScene");
  }

  create() {
    const { width, height } = this.scale;

    this.add.rectangle(width / 2, height / 2, width, height, 0xfbe9d9);
    this.add.text(width / 2, height * 0.34, "공차 알바 체험 게임", {
      color: "#593342",
      fontFamily: "Malgun Gothic, sans-serif",
      fontSize: Math.max(22, Math.min(width * 0.06, 36)),
      fontStyle: "bold",
    }).setOrigin(0.5);

    const startButton = this.add.text(width / 2, height * 0.62, "시작", {
      backgroundColor: "#8b3e5a",
      color: "#ffffff",
      fixedWidth: Math.min(width * 0.38, 180),
      fontFamily: "Malgun Gothic, sans-serif",
      fontSize: Math.max(18, Math.min(width * 0.035, 24)),
      fontStyle: "bold",
      padding: { x: 20, y: 12 },
      align: "center",
    });
    startButton.setOrigin(0.5).setInteractive({ useHandCursor: true });
    startButton.on("pointerup", () => this.scene.start("GameScene", { stage: 1 }));
  }
}
