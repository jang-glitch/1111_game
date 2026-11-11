export class ResultScene extends Phaser.Scene {
  constructor() {
    super("ResultScene");
  }

  create({ success = true, earnings = 0, stage = 1 } = {}) {
    const { width, height } = this.scale;
    const resultText = success ? "성공" : "실패";
    const resultColor = success ? "#8b3e5a" : "#745661";

    this.add.rectangle(width / 2, height / 2, width, height, 0xfbe9d9);
    this.add.text(width / 2, height * 0.28, resultText, {
      color: resultColor,
      fontFamily: "Malgun Gothic, sans-serif",
      fontSize: Math.max(28, Math.min(width * 0.075, 46)),
      fontStyle: "bold",
    }).setOrigin(0.5);
    this.add.text(width / 2, height * 0.46, `번 돈: ${earnings}원`, {
      color: "#593342",
      fontFamily: "Malgun Gothic, sans-serif",
      fontSize: Math.max(18, Math.min(width * 0.04, 26)),
    }).setOrigin(0.5);

    this.createButton(width * 0.34, height * 0.7, "다시 하기", () => {
      this.scene.start("GameScene", { stage });
    });
    this.createButton(width * 0.66, height * 0.7, "다음 스테이지", () => {
      this.scene.start("GameScene", { stage: stage + 1 });
    });
  }

  createButton(x, y, label, onClick) {
    const button = this.add.text(x, y, label, {
      backgroundColor: "#8b3e5a",
      color: "#ffffff",
      fontFamily: "Malgun Gothic, sans-serif",
      fontSize: "18px",
      fontStyle: "bold",
      padding: { x: 16, y: 10 },
    });
    button.setOrigin(0.5).setInteractive({ useHandCursor: true });
    button.on("pointerup", onClick);
  }
}
