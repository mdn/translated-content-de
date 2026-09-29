---
title: Das Ziegelfeld erstellen
slug: Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Game_over", "Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win")}}

Dies ist der **7. Schritt** von 12 im [Tutorial zum Erstellen eines Breakout-Spiels mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sehen wir uns an, wie Sie eine Gruppe von Ziegeln erstellen, sie mithilfe einer Schleife auf dem Bildschirm darstellen und sie entfernen, wenn der Ball sie trifft. Das Erstellen des Ziegelfelds ist etwas komplizierter, als ein einzelnes Objekt zum Bildschirm hinzuzufügen – mit Phaser aber wahrscheinlich einfacher als mit reinem JavaScript.

## Neue Eigenschaften

Fügen Sie zunächst die neue Eigenschaft `bricks` unterhalb Ihrer bisherigen Eigenschaftsdefinitionen hinzu:

```js
class ExampleScene extends Phaser.Scene {
  // ... previous property definitions ...
  bricks;
  // ... rest of the class ...
}
```

Mit der Eigenschaft `bricks` erstellen Sie eine Gruppe von Ziegeln, sodass Sie mehrere Ziegel gleichzeitig verwalten können.

## Das Ziegelbild laden

Laden Sie als Nächstes das Bild für den Ziegel. Fügen Sie dazu den folgenden Aufruf von `load.image()` direkt unter den anderen Aufrufen hinzu:

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

Außerdem müssen Sie [das Ziegelbild herunterladen](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/brick.png) und in Ihrem Verzeichnis `/img` speichern.

## Die Ziegel zeichnen

Wir legen den gesamten Code zum Zeichnen der Ziegel in einer Methode `initBricks` ab, damit er vom übrigen Code getrennt bleibt. Fügen Sie am Ende der Methode `create()` einen Aufruf von `initBricks` hinzu:

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

Nun zur Methode selbst: Fügen Sie die Methode `initBricks` am Ende der Klasse `ExampleScene` direkt vor der schließenden Klammer `}` hinzu, wie unten gezeigt. Zunächst fügen wir das Objekt `bricksLayout` hinzu, das wir gleich benötigen:

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

`bricksLayout` enthält alle benötigten Informationen: die Breite und Höhe eines einzelnen Ziegels, die Anzahl der Ziegelreihen und -spalten auf dem Bildschirm, den Abstand vom oberen und linken Rand (also die Stelle auf dem Canvas, an der wir mit dem Zeichnen beginnen) sowie den Abstand zwischen den einzelnen Reihen und Spalten.

Jetzt erstellen wir die Ziegel. Fügen Sie zunächst am Ende der Methode `initBricks()` mit der folgenden Zeile eine leere Gruppe für die Ziegel hinzu:

```js
this.bricks = this.add.group();
```

Mit einer Schleife über die Reihen und Spalten können wir bei jedem Durchlauf einen neuen Ziegel erstellen. Fügen Sie die folgende verschachtelte Schleife unter der vorherigen Codezeile hinzu:

```js
for (let c = 0; c < bricksLayout.count.col; c++) {
  for (let r = 0; r < bricksLayout.count.row; r++) {
    // create new brick and add it to the group
  }
}
```

So erstellen wir genau die benötigte Anzahl an Ziegeln und fassen sie alle in einer Gruppe zusammen. Nun müssen wir innerhalb der verschachtelten Schleife Code zum Zeichnen der einzelnen Ziegel hinzufügen. Ergänzen Sie den Inhalt wie unten gezeigt:

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

Hier durchlaufen wir die Reihen und Spalten, um neue Ziegel zu erstellen und auf dem Bildschirm zu platzieren. Für jeden neu erstellten Ziegel wird die Arcade-Physik-Engine aktiviert. Sein physikalischer Körper wird als unbeweglich festgelegt (damit er sich nicht bewegt, wenn der Ball ihn trifft). Anschließend wird der Ziegel der Gruppe hinzugefügt.

Derzeit zeichnen wir allerdings alle Ziegel an derselben Stelle, bei den Koordinaten (0,0). Stattdessen müssen wir jeden Ziegel an seiner eigenen x- und y-Position zeichnen. Ändern Sie die Zeilen für `brickX` und `brickY` wie folgt:

```js
const brickX =
  c * (bricksLayout.width + bricksLayout.padding) + bricksLayout.offset.left;
const brickY =
  r * (bricksLayout.height + bricksLayout.padding) + bricksLayout.offset.top;
```

Für jede Position `brickX` werden `bricksLayout.width` und `bricksLayout.padding` addiert, mit der Spaltennummer `c` multipliziert und anschließend um `bricksLayout.offset.left` erhöht. Die Berechnung für `brickY` funktioniert genauso, verwendet aber die Reihennummer `r`, `bricksLayout.height` und `bricksLayout.offset.top`. So wird jeder Ziegel an der richtigen Stelle platziert – mit Abstand zu den anderen Ziegeln und zu den linken und oberen Rändern des Canvas.

Wenn Sie `index.html` jetzt neu laden, sollten die Ziegel in gleichmäßigen Abständen auf dem Bildschirm erscheinen.

## Kollisionserkennung zwischen Ziegeln und Ball

Die nächste Herausforderung ist die Kollisionserkennung zwischen dem Ball und den Ziegeln. Zum Glück können wir mit der Physik-Engine nicht nur Kollisionen zwischen einzelnen Objekten (wie Ball und Schläger) erkennen, sondern auch zwischen einem Objekt und einer Gruppe.

Fügen Sie zunächst in Ihrer Methode `update()` eine neue Zeile hinzu, die eine Kollision zwischen dem Ball und den Ziegeln erkennt:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    this.physics.collide(this.ball, this.paddle);
    this.physics.collide(this.ball, this.bricks, (ball, brick) =>
      this.hitBrick(ball, brick),
    );
    this.paddle.x = this.input.x || this.scale.width * 0.5;
    // ...
  }
  // ...
}
```

Die Position des Balls wird mit den Positionen aller Ziegel in der Gruppe abgeglichen. Der dritte, optionale Parameter ist die Funktion, die bei einer Kollision ausgeführt wird. Phaser ruft diese Funktion mit zwei Argumenten auf: Das erste ist der Ball, den wir ausdrücklich an die Methode `collide` übergeben haben. Das zweite ist der einzelne Ziegel aus der Gruppe, mit dem der Ball kollidiert. Wir implementieren das Verhalten in einer Methode namens `hitBrick()`. Fügen Sie diese neue Methode am Ende der Klasse `ExampleScene` direkt vor der schließenden Klammer `}` hinzu:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  hitBrick(ball, brick) {
    brick.destroy();
  }
}
```

Das war's! Laden Sie Ihren Code neu. Die neue Kollisionserkennung sollte nun wie gewünscht funktionieren.

## Vergleichen Sie Ihren Code

So sollte Ihr bisheriger Code aussehen. Das Beispiel wird hier direkt ausgeführt. Klicken Sie auf die Schaltfläche „Play“, um den Quellcode anzuzeigen.

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
    this.physics.collide(this.ball, this.bricks, (ball, brick) =>
      this.hitBrick(ball, brick),
    );

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

  hitBrick(ball, brick) {
    brick.destroy();
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

Wir können die Ziegel nun treffen und entfernen – eine schöne Erweiterung des Spielablaufs. Noch besser wäre es, [den Punktestand zu erfassen und das Spiel zu gewinnen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win), sobald alle Ziegel zerstört sind.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Game_over", "Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win")}}
