---
title: Physik
slug: Games/Tutorials/2D_breakout_game_Phaser/Physics
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball", "Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls")}}

Dies ist der **3. Schritt** von 12 im [Tutorial zum Erstellen eines Breakout-Spiels mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Damit Kollisionen zwischen Objekten in unserem Spiel zuverlässig erkannt werden, benötigen wir ein Physiksystem. Dieser Artikel stellt die in Phaser verfügbaren Möglichkeiten vor und zeigt eine typische einfache Einrichtung.

## Physik hinzufügen

Phaser enthält drei verschiedene Physik-Engines: Arcade Physics, Impact Physics und Matter.js Physics. Eine vierte Option, Box2D, ist als kommerzielles Plugin erhältlich. Für einfache Spiele wie unseres können wir Arcade Physics verwenden. Aufwendige geometrische Berechnungen sind nicht nötig – schließlich prallt nur ein Ball von Wänden und Steinen ab.

Zuerst konfigurieren wir Arcade Physics für unser Spiel. Fügen Sie dem `config`-Objekt die Eigenschaft `physics` hinzu, wie unten gezeigt:

```js
const config = {
  // ...
  physics: {
    default: "arcade",
  },
};
```

Als Nächstes müssen wir die Physik für unseren Ball aktivieren – für Phaser-Objekte ist sie standardmäßig nicht aktiviert. Fügen Sie am Ende der Methode `create()` die folgende Zeile hinzu:

```js
this.physics.add.existing(this.ball);
```

Damit sich der Ball über den Bildschirm bewegt, können wir die `velocity` seines `body` festlegen. Fügen Sie die folgende Zeile ebenfalls am Ende von `create()` hinzu:

```js
this.ball.body.setVelocity(150, 150);
```

## Bisherige Anweisungen zur Aktualisierung entfernen

Entfernen Sie die bisherige Methode, bei der in `update()` Werte zu `x` und `y` addiert werden. `update()` sollte also wieder leer sein:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {}
}
```

Die Bewegung wird jetzt von einer Physik-Engine gesteuert.

Laden Sie `index.html` erneut. Im Moment berücksichtigt die Physik-Engine weder Schwerkraft noch Reibung. Deshalb bewegt sich der Ball mit konstanter Geschwindigkeit in die vorgegebene Richtung.

## Mit Physik experimentieren

Mit dem Physiksystem können Sie noch viel mehr tun. Wenn Sie beispielsweise `this.ball.body.gravity.y = 500;` in `create()` einfügen, legen Sie die vertikale Schwerkraft für den Ball fest. Ändern Sie die Geschwindigkeit zu `this.ball.body.setVelocity(150, -150);`: Der Ball fliegt zunächst nach oben und fällt dann wieder herunter, weil die Schwerkraft ihn nach unten zieht.

Diese Funktionen sind nur ein kleiner Teil der Möglichkeiten. Verschiedene Funktionen und Variablen helfen Ihnen dabei, Physikobjekte zu beeinflussen. Sehen Sie sich die offizielle [Physikdokumentation](https://docs.phaser.io/phaser/concepts/physics/arcade) und die [umfangreiche Sammlung von Beispielen](https://phaser.io/examples/v3.85.0/physics) für Arcade Physics und Matter.js Physics an.

## Vergleichen Sie Ihren Code

So sollte Ihr Code bisher aussehen. Das Beispiel wird direkt hier ausgeführt. Um den Quellcode anzusehen, klicken Sie auf die Schaltfläche „Play“.

Falls Sie den Ball nicht sehen, laden Sie die Seite erneut – wahrscheinlich hat der Ball den Bildschirm bereits verlassen.

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

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
  }
  create() {
    this.ball = this.add.sprite(50, 50, "ball");
    this.physics.add.existing(this.ball);
    this.ball.body.setVelocity(150, 150);
  }
  update() {}
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

In der nächsten Lektion erfahren Sie, wie Sie den Ball [von den Wänden abprallen lassen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball", "Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls")}}
