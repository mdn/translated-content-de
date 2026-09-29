---
title: Den Ball bewegen
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Initialize_the_canvas", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls")}}

Dies ist der **2. von 11 Schritten** des [Tutorials zum Erstellen eines Breakout-Spiels mit reinem JavaScript](/de/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). In diesem Artikel sehen wir uns an, wie Sie Sprites in die Spielwelt einfügen. In unserem Spiel rollt ein Ball über den Bildschirm, prallt von einem Schläger ab und zerstört Blöcke, um Punkte zu erzielen.

Für den Ball sind zwei Schritte nötig: die Bilddatei des Balls laden und ihn während seiner Bewegung an der richtigen Position darstellen. Technisch gesehen zeichnen wir den Ball auf den Bildschirm, entfernen ihn wieder und zeichnen ihn in jedem Frame an einer leicht veränderten Position neu. So entsteht der Eindruck von Bewegung – ähnlich wie beim Film.

## Eine Zeichenschleife definieren

Damit die Zeichnung auf dem Canvas in jedem Frame aktualisiert wird, benötigen wir eine Zeichenfunktion, die immer wieder ausgeführt wird. Bei jedem Aufruf verwendet sie andere Variablenwerte, um beispielsweise die Positionen der Sprites zu ändern.

Sie könnten [`setInterval()`](/de/docs/Web/API/Window/setInterval) verwenden, um die Funktion alle paar Millisekunden auszuführen – etwa alle 10 Millisekunden, was 100 Frames pro Sekunde entspräche. Das funktioniert, führt aber zu Problemen:

1. Timer sind ungenau. Sie können daher nicht davon ausgehen, dass die Funktion exakt alle 10 Millisekunden aufgerufen wird.
2. Wenn Ihre Zeichenfunktion langsam ist und mehr als 10 Millisekunden benötigt, um einen Frame zu zeichnen, verpasst sie den nächsten Aufruf. Diese Verzögerungen summieren sich, sodass die Spielzeit nicht mehr mit der tatsächlichen Zeit übereinstimmt.

Sie können weiterhin `setInterval` oder `setTimeout` verwenden. Damit lässt sich die Framerate festlegen, allerdings müssen Sie zusätzliche Logik implementieren, um die Aufrufe zeitlich so zu steuern, dass die genannten Probleme vermieden werden. Der Einfachheit halber verwenden wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Damit ruft der Browser die Zeichenfunktion automatisch auf, sobald die nächste Neuzeichnung ansteht. Die Funktion erhält einen Zeitstempel. Durch den Vergleich mit dem vorherigen Zeitstempel können wir bestimmen, wie weit sich der Ball zwischen den Frames bewegt haben soll.

Ersetzen Sie den Inhalt Ihrer Datei `script.js` durch Folgendes:

```js
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

requestAnimationFrame(update);

function update(timestamp) {
  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // continue adding things here...

  requestAnimationFrame(update);
}
```

Wenn Sie die HTML-Seite neu laden, läuft das Spiel bereits in einer Schleife. Da wir noch keine beweglichen Objekte definiert haben, ist davon allerdings noch nichts zu sehen.

## Das Ball-Sprite laden

Alle Spielobjekte – Ball, Schläger und Blöcke – implementieren wir als Klassen. So können sie ihren Zustand kapseln und Verhalten bereitstellen.

Den Ball stellen wir durch ein PNG-Bild dar. Mit [`ctx.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) zeichnen wir das PNG auf den Canvas. Die Methode akzeptiert verschiedene Arten von Eingabedaten. Wir verwenden ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), da es das Laden und Dekodieren des Bildes für uns übernimmt.

> [!NOTE]
> Natürlich können Sie mit [`ctx.arcTo()`](/de/docs/Web/API/CanvasRenderingContext2D/arcTo) und [`ctx.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) auch direkt einen ausgefüllten Kreis auf den Canvas zeichnen. In einem richtigen Spiel ist der Ball aber vermutlich komplexer als ein einfacher Kreis. Dann benötigen Sie ohnehin irgendwann eine separate Bilddatei.

Definieren Sie zunächst die Klasse:

```js
class Ball {
  asset;
  ctx;
  size = { w: undefined, h: undefined };
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
}
```

Der Konstruktor [`Image()`](/de/docs/Web/API/HTMLImageElement/Image) erstellt ein `HTMLImageElement`, ohne es in das DOM einzufügen. Wir stellen nicht das `<img>`-Element selbst dar, sondern verwenden es nur zum Zeichnen auf dem Canvas. Die Zuweisung an [`src`](/de/docs/Web/API/HTMLImageElement/src) startet die Anfrage nach dem Bild `ball.png`. Die Funktion `preload()` ruft [`decode()`](/de/docs/Web/API/HTMLImageElement/decode) auf. Diese Methode gibt ein Promise zurück, das erfüllt wird, sobald das Bild erfolgreich geladen und dekodiert wurde. Anschließend können wir die Bildabmessungen für spätere Berechnungen speichern.

Ersetzen Sie den Aufruf `requestAnimationFrame(update);` oberhalb der Definition der Funktion `update` durch Folgendes:

```js
const ball = new Ball("img/ball.png", ctx);

Promise.all([ball].map((obj) => obj.preload())).then(() =>
  requestAnimationFrame(update),
);
```

Wir rufen `Promise.all([ball].map((obj) => obj.preload()))` auf. Dadurch erhalten wir ein einzelnes Promise, das erfüllt wird, wenn alle Bilddateien erfolgreich vorgeladen wurden. Danach beginnen wir mit `requestAnimationFrame(update)` zu zeichnen.

Damit das Bild geladen werden kann, muss es natürlich in Ihrem Projektverzeichnis verfügbar sein. [Laden Sie das Bild des Balls von unserer Asset-Website herunter](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png) und speichern Sie es in einem Verzeichnis `/img` am selben Ort wie Ihre Datei `index.html`.

Um den Ball auf dem Bildschirm anzuzeigen, rufen wir `drawImage()` auf und übergeben das Bild des Balls sowie die x- und y-Koordinaten der gewünschten Position auf dem Canvas. Ergänzen Sie Ihre Klasse `Ball` um Folgendes:

```js
class Ball {
  // …
  draw() {
    this.ctx.drawImage(this.asset, 50 - this.size.w / 2, 50 - this.size.h / 2);
  }
}
```

> [!NOTE]
> Die Koordinaten, die Sie an `drawImage()` übergeben, bezeichnen die _obere linke Ecke_ des Bildes. In der Praxis ist es oft einfacher, die Position des _Mittelpunkts_ eines Objekts zu verfolgen. So lassen sich alle Richtungen gleich behandeln, insbesondere bei der [Kollisionserkennung](/de/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls). Deshalb geben wir mit `(50, 50)` die gewünschte Position des _Mittelpunkts_ des Balls an und ziehen `width / 2` beziehungsweise `height / 2` ab, um die Koordinaten der oberen linken Ecke zu erhalten.

Das war's: Wenn Sie Ihre Datei `index.html` öffnen, sehen Sie das geladene Bild auf dem Canvas!

## Die Position des Balls in jedem Frame aktualisieren

Derzeit zeichnet jeder Aufruf von `ball.draw()` den Ball an genau derselben Stelle. Deshalb scheint er stillzustehen. Wir können seinen Mittelpunkt und seine Geschwindigkeit in separaten Feldern speichern. Fügen Sie in `class Ball` direkt unter den vorhandenen Felddeklarationen die Definitionen für `pos` und `vel` hinzu und ersetzen Sie die Methode `draw()`, sodass sie diese Koordinaten verwendet:

```js
class Ball {
  // …
  size = { w: undefined, h: undefined };
  pos = { x: 50, y: 50 };
  vel = { x: 150, y: 150 };
  // …
  draw() {
    this.ctx.drawImage(
      this.asset,
      this.pos.x - this.size.w / 2,
      this.pos.y - this.size.h / 2,
    );
  }
}
```

Die Geschwindigkeit beträgt entlang beider Achsen 150 Pixel pro Sekunde. Bei jedem Aufruf von `update()` aktualisieren wir die Position des Balls. Dafür müssen wir berechnen, wie weit er sich seit seiner letzten Position bewegt hat. Wir verwenden die Formel `dx = vx * dt`: `vx` ist die Geschwindigkeit entlang der x-Achse und `dt` die seit dem letzten Aufruf von `update()` verstrichene Zeit. Da die Funktion `update()` bei jedem Aufruf einen `timestamp` erhält, können wir ihn mit dem Zeitstempel des vorherigen Aufrufs vergleichen, um `dt` zu ermitteln. Ergänzen Sie die Klasse um Folgendes:

```js
class Ball {
  // …
  move(dt) {
    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;
  }
}
```

Bei jedem Frame addiert die Funktion die berechnete Verschiebung zu den Koordinaten des Balls auf dem Canvas. Später ergänzen wir hier weitere Logik, etwa die Kollisionserkennung.

Fügen Sie direkt nach `const ctx` Folgendes hinzu:

```js
let lastTimestamp = null;
```

Innerhalb der Funktion `update()` können wir nun `ball.move()` und `ball.draw()` aufrufen. Damit aktualisiert die Klasse sich selbst, während die Funktion `update()` nur die Zeit erfasst:

```js
const dt = lastTimestamp === null ? 0 : (timestamp - lastTimestamp) / 1000;
lastTimestamp = timestamp;
ball.move(dt);

ctx.fillStyle = "#eeeeee";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ball.draw();
```

Im ersten Frame ist `lastTimestamp` gleich `null`. Daher ist `dt` null und der Ball bleibt an seiner Anfangsposition. In späteren Frames entspricht `dt` der seit dem vorherigen Frame verstrichenen Zeit in Sekunden. Die Zeitstempel sind in Millisekunden angegeben. Deshalb teilen wir ihre Differenz durch 1000, damit sie zu den Einheiten der Geschwindigkeit passt.

Laden Sie `index.html` neu. Sie sollten sehen, wie der Ball über den Bildschirm rollt.

> [!NOTE]
> Der Canvas wird nicht bei jedem Aufruf von `update()` automatisch geleert. Die vorherige Position des Balls verschwindet, weil wir mit `ctx.fillRect(0, 0, canvas.width, canvas.height)` den gesamten Hintergrund neu zeichnen und damit den vorhandenen Inhalt überdecken. Wenn Sie diese Zeile entfernen, sehen Sie, dass der Ball eine Spur hinterlässt.

## Vergleichen Sie Ihren Code

So sollte Ihr bisheriger Code aussehen. Das Ergebnis können Sie hier direkt ausprobieren. Klicken Sie auf die Schaltfläche „Play“, um den Quellcode anzuzeigen.

Falls Sie den Ball nicht sehen, laden Sie die Seite erneut – wahrscheinlich hat er den Bildschirm bereits verlassen.

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

  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();

  requestAnimationFrame(update);
}
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

In der nächsten Lektion erfahren Sie, wie Sie den Ball [von den Wänden abprallen lassen](/de/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Initialize_the_canvas", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls")}}
