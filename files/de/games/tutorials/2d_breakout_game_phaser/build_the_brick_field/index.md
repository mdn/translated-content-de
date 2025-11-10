---
title: Erstellen des Ziegelspielfelds
slug: Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Game_over", "Games/Tutorials/2D_breakout_game_Phaser/Collision_detection")}}

Dies ist der **9. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Lassen Sie uns erkunden, wie man eine Gruppe von Ziegeln erstellt und sie mithilfe einer Schleife auf dem Bildschirm anzeigt. Das Erstellen des Ziegelspielfelds ist etwas komplizierter als das Hinzufügen eines einzelnen Objekts zum Bildschirm, obwohl es mit Phaser immer noch einfacher ist als in reinem JavaScript.

## Neue Eigenschaften

Fügen Sie zuerst die neue Eigenschaft `bricks` unterhalb Ihrer vorherigen Eigenschaftsdefinitionen hinzu:

```js
class ExampleScene extends Phaser.Scene {
  // ... previous property definitions ...
  bricks;
  // ... rest of the class ...
}
```

Die Eigenschaft `bricks` wird verwendet, um eine Gruppe von Ziegeln zu erstellen, was es einfach macht, mehrere Ziegel gleichzeitig zu verwalten.

## Rendering des Ziegelbilds

Laden wir als Nächstes das Bild des Ziegels—fügen Sie den folgenden Aufruf von `load.image()` direkt unter den anderen hinzu:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  preload() {
    // ...
    this.load.image("brick", "img/brick.png");
  }
  // ...
}
```

Sie müssen auch [das Ziegelbild abrufen](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/brick.png) und es in Ihrem `/img` Verzeichnis speichern.

## Zeichnen der Ziegel

Wir werden den gesamten Code zum Zeichnen der Ziegel in einer `initBricks`-Methode platzieren, um ihn vom Rest des Codes getrennt zu halten. Fügen Sie am Ende der `create()`-Methode einen Aufruf zu `initBricks` hinzu:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  create() {
    // ...
    this.initBricks();
  }
  // ...
}
```

Kommen wir nun zur Methode selbst. Fügen Sie die `initBricks`-Methode am Ende der `ExampleScene`-Klasse hinzu, direkt vor der schließenden Klammer `}`, wie unten gezeigt. Zunächst fügen wir das Objekt `bricksLayout` hinzu, da dies sehr bald nützlich sein wird:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  initBricks() {
    const bricksLayout = {
      width: 50,
      height: 20,
      count: {
        row: 3,
        col: 7,
      },
      offset: {
        top: 50,
        left: 60,
      },
      padding: 10,
    };
  }
}
```

Dieses `bricksLayout` enthält alle Informationen, die wir benötigen: die Breite und Höhe eines einzelnen Ziegels, die Anzahl der Reihen und Spalten von Ziegeln, die wir auf dem Bildschirm sehen werden, den oberen und linken Versatz (den Ort auf der Leinwand, an dem wir beginnen, die Ziegel zu zeichnen), und den Abstand zwischen jeder Reihe und Spalte von Ziegeln.

Nun lassen Sie uns beginnen, die Ziegel selbst zu erstellen—zuerst fügen Sie eine leere Gruppe hinzu, um die Ziegel zu enthalten, indem Sie die folgende Zeile am Ende der `initBricks()`-Methode hinzufügen:

```js
this.bricks = this.add.group();
```

Wir können durch die Reihen und Spalten schleifen, um bei jeder Iteration einen neuen Ziegel zu erstellen—fügen Sie die folgende verschachtelte Schleife unter der vorherigen Codezeile hinzu:

```js
for (let c = 0; c < bricksLayout.count.col; c++) {
  for (let r = 0; r < bricksLayout.count.row; r++) {
    // create new brick and add it to the group
  }
}
```

Auf diese Weise erstellen wir genau die Anzahl der benötigten Ziegel und haben sie alle in einer Gruppe enthalten. Jetzt müssen wir etwas Code innerhalb der verschachtelten Schleifenstruktur hinzufügen, um jeden Ziegel zu zeichnen. Füllen Sie die Inhalte wie unten gezeigt aus:

```js
for (let c = 0; c < bricksLayout.count.col; c++) {
  for (let r = 0; r < bricksLayout.count.row; r++) {
    const brickX = 0;
    const brickY = 0;

    const newBrick = this.add.sprite(brickX, brickY, "brick");
    this.physics.add.existing(newBrick);
    newBrick.body.setImmovable(true);
    this.bricks.add(newBrick);
  }
}
```

Hier schleifen wir durch die Reihen und Spalten, um die neuen Ziegel zu erstellen und sie auf dem Bildschirm zu platzieren. Der neu erstellte Ziegel ist für die Arcade-Physik-Engine aktiviert, sein Körper ist so eingestellt, dass er unbeweglich ist (damit er sich nicht bewegt, wenn er vom Ball getroffen wird), und dann wird er zur Gruppe hinzugefügt.

Das derzeitige Problem ist, dass wir alle Ziegel an einem Ort zeichnen, bei den Koordinaten (0,0). Was wir tun müssen, ist, jeden Ziegel an seiner eigenen x- und y-Position zu zeichnen. Aktualisieren Sie die `brickX` und `brickY` Zeilen wie folgt:

```js
const brickX =
  c * (bricksLayout.width + bricksLayout.padding) + bricksLayout.offset.left;
const brickY =
  r * (bricksLayout.height + bricksLayout.padding) + bricksLayout.offset.top;
```

Jede `brickX`-Position wird als `bricksLayout.width` plus `bricksLayout.padding` berechnet, multipliziert mit der Spaltennummer, `c`, plus dem `bricksLayout.offset.left`; die Logik für die `brickY` ist identisch, außer dass sie die Werte für die Zeilennummer, `r`, `bricksLayout.height` und `bricksLayout.offset.top` verwendet. Jetzt kann jeder einzelne Ziegel an seinem richtigen Platz, mit Abstand zwischen jedem Ziegel, platziert und mit einem Versatz von den linken und oberen Rändern des Canvas gezeichnet werden.

Wenn Sie `index.html` an diesem Punkt neu laden, sollten Sie die Ziegel auf dem Bildschirm gedruckt sehen, in gleichmäßigem Abstand voneinander.

## Vergleichen Sie Ihren Code

Hier ist, was Sie bisher haben sollten, live laufend. Um dessen Quellcode anzuzeigen, klicken Sie auf die Schaltfläche "Play".

```html hidden
<script src="https://cdnjs.cloudflare.com/ajax/libs/phaser/3.90.0/phaser.js"></script>
```

```css hidden
* {
  padding: 0;
  margin: 0;
}
```

```js hidden
class ExampleScene extends Phaser.Scene {
  ball;
  paddle;
  bricks;

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
    this.load.image("paddle", "paddle.png");
    this.load.image("brick", "brick.png");
  }
  create() {
    this.physics.world.checkCollision.down = false;

    this.ball = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height - 25,
      "ball",
    );
    this.physics.add.existing(this.ball);
    this.ball.body.setVelocity(150, -150);
    this.ball.body.setCollideWorldBounds(true, 1, 1);
    this.ball.body.setBounce(1);

    this.paddle = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height - 5,
      "paddle",
    );
    this.paddle.setOrigin(0.5, 1);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);

    this.initBricks();
  }
  update() {
    this.physics.collide(this.ball, this.paddle);
    this.paddle.x = this.input.x || this.scale.width * 0.5;
    const ballIsOutOfBounds = !Phaser.Geom.Rectangle.Overlaps(
      this.physics.world.bounds,
      this.ball.getBounds(),
    );
    if (ballIsOutOfBounds) {
      // Game over logic
      location.reload();
    }
  }

  initBricks() {
    const bricksLayout = {
      width: 50,
      height: 20,
      count: {
        row: 3,
        col: 7,
      },
      offset: {
        top: 50,
        left: 60,
      },
      padding: 10,
    };

    this.bricks = this.add.group();
    for (let c = 0; c < bricksLayout.count.col; c++) {
      for (let r = 0; r < bricksLayout.count.row; r++) {
        const brickX =
          c * (bricksLayout.width + bricksLayout.padding) +
          bricksLayout.offset.left;
        const brickY =
          r * (bricksLayout.height + bricksLayout.padding) +
          bricksLayout.offset.top;

        const newBrick = this.add.sprite(brickX, brickY, "brick");
        this.physics.add.existing(newBrick);
        newBrick.body.setImmovable(true);
        this.bricks.add(newBrick);
      }
    }
  }
}

const config = {
  type: Phaser.CANVAS,
  width: 480,
  height: 320,
  scene: ExampleScene,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: "#eeeeee",
  physics: {
    default: "arcade",
  },
};

const game = new Phaser.Game(config);
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Etwas fehlt jedoch. Der Ball geht durch die Ziegel, ohne anzuhalten—wir benötigen eine ordnungsgemäße [Kollisionsdetektion](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Collision_detection).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Game_over", "Games/Tutorials/2D_breakout_game_Phaser/Collision_detection")}}
