---
title: An den Wänden abprallen
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls")}}

Dies ist der **3. Schritt** von 11 im [Tutorial zum Erstellen eines Breakout-Spiels mit reinem JavaScript](/de/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Nachdem wir die Bewegungsphysik eingeführt haben, können wir nun die Kollisionserkennung im Spiel implementieren. Zuerst betrachten wir die Wände.

## An den Begrenzungen des Spielfelds abprallen

Das [Reflexionsgesetz](<https://en.wikipedia.org/wiki/Reflection_(physics)>) besagt, dass ein Ball in einer idealen Welt zurückgeworfen wird, wenn er auf eine ebene Fläche wie eine Wand trifft: Die zur Wand senkrechte Geschwindigkeitskomponente kehrt sich um, während die zur Wand parallele Komponente erhalten bleibt. Trifft der Ball beispielsweise auf die untere Begrenzung, während er nach rechts unten fliegt, sollte er anschließend nach rechts oben fliegen.

Wir können diese Logik als weitere Methode von `Ball` implementieren. Die Methode erhält zwei boolesche Werte, die angeben, ob der Ball eine vertikale Wand, eine horizontale Wand oder beide getroffen hat. Im letzten Fall fliegt er auf demselben Weg zurück.

```js
class Ball {
  // …
  onCollide({ x, y }) {
    if (x) {
      this.vel.x = -this.vel.x;
    }
    if (y) {
      this.vel.y = -this.vel.y;
    }
  }
}
```

Die Kollisionserkennung führen wir direkt nach der Aktualisierung der Position durch. Angenommen, der Ball bewegt sich mit `vx = -1` gerade nach links, dann wird seine Bewegung folgendermaßen aktualisiert:

1. Frame 1: bei `x = 1`, `vx = -1`
2. Frame 2: bei `x = 0`; eine Kollision wird erkannt, daher ändert sich die Geschwindigkeit zu `vx = 1`
3. Frame 3: bei `x = 1`, `vx = 1`

> [!NOTE]
> In Frame 2 kann `x` kleiner als 0 sein, beispielsweise wenn `vx = -2` gilt. Der Ball überschneidet sich dann mit der Wand. Da dieser Zustand höchstens einige wenige Frames anhält, wird er von den meisten Game-Engines toleriert, weil er die Berechnung erheblich vereinfacht. Sie können auch die Position des Balls anpassen, um die Überschneidung zu vermeiden, indem Sie beispielsweise `x = 0` setzen, sobald `x <= 0` gilt.

Die grundlegende Logik sieht so aus:

```js
const x = hittingLeftBoundary || hittingRightBoundary;
const y = hittingTopBoundary || hittingBottomBoundary;
if (x || y) {
  ball.onCollide({ x, y });
}
```

Wir müssen lediglich jede Variable in den Bedingungen durch den passenden Ausdruck ersetzen. Nehmen wir als Beispiel die linke Begrenzung. Ihre `x`-Koordinate ist 0. Wenn also die linke Kante des Balls eine `x`-Koordinate kleiner oder gleich 0 hat und der Ball sich nach links bewegt, wissen wir, dass er die Begrenzung getroffen hat.

> [!NOTE]
> Stellen Sie sich Folgendes vor: Der Ball bewegt sich nach links, überschneidet sich mit der Wand (die `x`-Koordinate ist negativ) und kehrt seine Richtung um. Der nächste Frame folgt jedoch so schnell, dass der Ball die Wand noch nicht vollständig verlassen hat (die `x`-Koordinate ist immer noch negativ). Ohne diese Bedingung würde erneut eine Kollision ausgelöst und die Richtung ein weiteres Mal umgekehrt. Das ist als [Collision Jitter](https://docs.flatredball.com/flatredball/tutorials/code-tutorials/collision-jitter) bekannt – ein häufiger Fehler in Spielen, insbesondere in älteren Spielen ohne etablierte Game-Engine. Wir vermeiden ihn durch die zusätzliche Bedingung, dass sich der Ball nach links bewegt. Alternativ lässt er sich durch die oben beschriebene Anpassung zur Vermeidung von Überschneidungen beheben.

Um die linke Kante des Balls zu bestimmen, ziehen wir die Hälfte seiner Breite von der Position seines Mittelpunkts ab, ähnlich wie bei der Ermittlung der Koordinaten für `drawImage()`.

```js
const hittingLeftBoundary = ball.pos.x - ball.size.w / 2 <= 0 && ball.vel.x < 0;
```

Die Implementierung für die anderen drei Begrenzungen bleibt Ihnen als Übung überlassen. Beachten Sie, dass die rechte Begrenzung die `x`-Koordinate `canvas.width` hat, während die obere und die untere Begrenzung die `y`-Koordinaten 0 beziehungsweise `canvas.height` haben.

> [!NOTE]
> Hier nähern wir den Ball durch ein Quadrat an, dessen Mittelpunkt bei `ball.pos` liegt und dessen Breite und Höhe `ball.size.w` beziehungsweise `ball.size.h` betragen (dies sind die Abmessungen des PNG-Bilds). Bei Quadraten lässt sich eine Überschneidung leichter berechnen als bei beliebigen geometrischen Formen. Eine solche Form wird als _Hitbox_ bezeichnet. Ein Objekt kann auch mehrere Hitboxen haben, wenn seine Geometrie komplex ist. Da unser PNG-Bild keine zusätzlichen Randabstände hat, umschließt die bildbasierte Hitbox den dargestellten Kreis recht genau – abgesehen vom zusätzlichen Platz in den vier Ecken. Je komplexer ein Objekt ist, desto schwieriger wird es, präzise Hitboxen zu erstellen und zugleich eine gute Performance zu gewährleisten.

## Die Kollisionsbehandlung einbinden

Wir halten die Kollisionserkennung außerhalb der Objekte, da die meisten Kollisionen zwischen zwei Objekten stattfinden und wir möglicherweise auch steuern möchten, wann und wie sie erkannt werden. Die Klasse `Ball` ist lediglich dafür zuständig, die `hitbox` und die Reaktion `onCollide()` bereitzustellen. Wir implementieren `hitbox` als Getter:

```js
class Ball {
  // …
  get hitbox() {
    return {
      left: this.pos.x - this.size.w / 2,
      right: this.pos.x + this.size.w / 2,
      top: this.pos.y - this.size.h / 2,
      bottom: this.pos.y + this.size.h / 2,
    };
  }
}
```

Der Getter berechnet die Kanten anhand der aktuellen Position und Größe des Balls, wann immer wir `ball.hitbox` auslesen. So müssen wir keinen zweiten Satz Koordinaten speichern, den wir bei jeder Bewegung des Balls aktualisieren müssten.

Fügen Sie nun den Kollisions-Handler außerhalb der Klasse hinzu. Er erhält ein Objekt, das `hitbox`, `vel` und `onCollide()` bereitstellt, sowie die Breite und Höhe des Spielfelds:

```js
function handleWallCollisions(object, width, height) {
  const hitbox = object.hitbox;
  const hittingLeftBoundary = hitbox.left <= 0 && object.vel.x < 0;
  const hittingRightBoundary = hitbox.right >= width && object.vel.x > 0;
  const hittingTopBoundary = hitbox.top <= 0 && object.vel.y < 0;
  const hittingBottomBoundary = hitbox.bottom >= height && object.vel.y > 0;

  const x = hittingLeftBoundary || hittingRightBoundary;
  const y = hittingTopBoundary || hittingBottomBoundary;
  if (x || y) {
    object.onCollide({ x, y });
  }
}
```

Rufen Sie den Handler innerhalb der zentralen Funktion `update()` unmittelbar nach `ball.move()` auf:

```js
ball.move(dt);
handleWallCollisions(ball, canvas.width, canvas.height);
```

Die Spielschleife bewegt nun den Ball, behandelt Kollisionen mit den Wänden und zeichnet ihn anschließend. Der aktuelle Kollisionsalgorithmus ist sehr einfach und lässt die oben erwähnte „vorübergehende Überschneidung“ zu. Später, wenn wir weitere Objekte hinzufügen, werden wir diesen Algorithmus verbessern.

## Vergleichen Sie Ihren Code

So sollte Ihr Code bisher aussehen. Das Beispiel ist direkt ausführbar. Klicken Sie auf die Schaltfläche „Play“, um den Quellcode anzuzeigen.

```html hidden
<canvas id="game-canvas" width="480" height="320"></canvas>
```

```css hidden
* {
  padding: 0;
  margin: 0;
}

body {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

canvas {
  display: block;
  width: min(100vw, 150vh);
  height: auto;
}
```

```js hidden
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
let lastTimestamp = null;

class Ball {
  asset;
  ctx;
  size = { w: undefined, h: undefined };
  pos = { x: 50, y: 50 };
  vel = { x: 150, y: 150 };
  constructor(url, ctx) {
    this.asset = new Image();
    this.asset.src = url;
    this.ctx = ctx;
  }
  async preload() {
    await this.asset.decode();
    if (this.size.w === undefined) {
      this.size.w = this.asset.width;
      this.size.h = this.asset.height;
    }
  }
  get hitbox() {
    return {
      left: this.pos.x - this.size.w / 2,
      right: this.pos.x + this.size.w / 2,
      top: this.pos.y - this.size.h / 2,
      bottom: this.pos.y + this.size.h / 2,
    };
  }
  draw() {
    this.ctx.drawImage(
      this.asset,
      this.pos.x - this.size.w / 2,
      this.pos.y - this.size.h / 2,
    );
  }
  move(dt) {
    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;
  }
  onCollide({ x, y }) {
    if (x) {
      this.vel.x = -this.vel.x;
    }
    if (y) {
      this.vel.y = -this.vel.y;
    }
  }
}

const ball = new Ball(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png",
  ctx,
);

Promise.all([ball].map((obj) => obj.preload())).then(() =>
  requestAnimationFrame(update),
);

function update(timestamp) {
  const dt = lastTimestamp === null ? 0 : (timestamp - lastTimestamp) / 1000;
  lastTimestamp = timestamp;
  ball.move(dt);
  handleWallCollisions(ball, canvas.width, canvas.height);

  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();

  requestAnimationFrame(update);
}

function handleWallCollisions(object, width, height) {
  const hitbox = object.hitbox;
  const hittingLeftBoundary = hitbox.left <= 0 && object.vel.x < 0;
  const hittingRightBoundary = hitbox.right >= width && object.vel.x > 0;
  const hittingTopBoundary = hitbox.top <= 0 && object.vel.y < 0;
  const hittingBottomBoundary = hitbox.bottom >= height && object.vel.y > 0;

  const x = hittingLeftBoundary || hittingRightBoundary;
  const y = hittingTopBoundary || hittingBottomBoundary;
  if (x || y) {
    object.onCollide({ x, y });
  }
}
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Langsam sieht das Ganze wie ein Spiel aus, aber wir können es noch nicht steuern. Es ist höchste Zeit, den [Spielerschläger und die Steuerung](/de/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls) einzuführen.

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls")}}
