---
title: Das Ziegelfeld erstellen
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Track_the_score_and_win")}}

Dies ist der **6. von 11 Schritten** des [Tutorials zum Erstellen eines Breakout-Spiels mit reinem JavaScript](/de/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Sehen wir uns an, wie Sie eine Gruppe von Ziegeln erstellen, sie mithilfe einer Schleife auf dem Bildschirm zeichnen und entfernen, wenn der Ball sie trifft. Das Ziegelfeld zu erstellen ist etwas komplizierter, als ein einzelnes Objekt auf dem Bildschirm hinzuzufügen.

## Die Ziegel zeichnen

Alle Ziegel verwenden dasselbe Bild. Daher können wir es einmal erstellen und dekodieren und anschließend für alle Ziegel verwenden. Fügen Sie `GameObject` eine statische `assets`-Map und ein `url`-Feld hinzu und ersetzen Sie den Konstruktor und die Methode `preload()`:

```js
class GameObject {
  static assets = new Map();
  url;
  // …
  constructor(url, ctx) {
    this.url = url;
    this.ctx = ctx;
  }
  async preload() {
    if (!GameObject.assets.has(this.url)) {
      const asset = new Image();
      asset.src = this.url;
      GameObject.assets.set(
        this.url,
        asset.decode().then(() => asset),
      );
    }
    this.asset = await GameObject.assets.get(this.url);
    if (this.size.w === undefined) {
      this.size.w = this.asset.width;
      this.size.h = this.asset.height;
    }
  }
  // …
}
```

Der Cache ordnet jeder URL ein Promise zu, das mit dem dekodierten Bild erfüllt wird. Der erste `preload()`-Aufruf für eine URL erstellt das Bild und startet die Dekodierung. Spätere Aufrufe warten auf dasselbe Promise und erhalten dasselbe Bild. Jedes Objekt hat weiterhin seine eigene Position und Größe.

Wie `Ball` und `Paddle` basiert auch `Brick` auf der Klasse `GameObject`. Ein Ziegel hat keine Standardposition und -größe; beides muss im Konstruktor ausdrücklich angegeben werden. Da die Ziegel feste Abmessungen haben, können wir die zusätzlichen Parameter `dWidth` und `dHeight` von [`ctx.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) verwenden. Damit wird das Bild automatisch skaliert, falls es noch nicht die gewünschten Abmessungen hat.

```js
class Brick extends GameObject {
  constructor(url, ctx, x, y, w, h) {
    super(url, ctx);
    this.pos = { x, y };
    this.size = { w, h };
  }
  draw() {
    const { left, top } = this.hitbox;
    this.ctx.drawImage(this.asset, left, top, this.size.w, this.size.h);
  }
}
```

Sie müssen außerdem [das Ziegelbild herunterladen](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/brick.png) und in Ihrem Verzeichnis `/img` speichern.

Wir fügen den gesamten Code zum Zeichnen der Ziegel in eine Funktion `initBricks` ein, damit er vom übrigen Code getrennt bleibt. Fügen Sie unter `colliders.push(paddle);` einen Aufruf von `initBricks` hinzu:

```js
// …
const paddle = new Paddle("img/paddle.png", ctx);
colliders.push(paddle);
const bricks = initBricks();
// …
```

Stellen Sie außerdem sicher, dass das Spiel wartet, bis die Ziegel vorgeladen sind, bevor es startet: Fügen Sie dazu `, ...bricks` zum Array in `Promise.all()` hinzu. Diese Aufrufe verwenden dasselbe zwischengespeicherte Dekodierungs-Promise, sodass das Ziegelbild nur einmal dekodiert wird.

Nun zur Funktion selbst. Fügen Sie die Funktion `initBricks` am Ende der Datei `script.js` hinzu. Zunächst definieren wir das Objekt `bricksLayout`, das wir gleich benötigen:

```js
function initBricks() {
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
  const bricks = [];
  // continue adding here...
  return bricks;
}
```

`bricksLayout` enthält alle benötigten Informationen: die Breite und Höhe eines einzelnen Ziegels, die Anzahl der Ziegelreihen und -spalten auf dem Bildschirm, den Abstand vom oberen und linken Rand (also die Stelle auf dem Canvas, an der wir mit dem Zeichnen der Ziegel beginnen) sowie den Abstand zwischen den einzelnen Reihen und Spalten.

Erstellen wir nun die Ziegel. Wir können die Reihen und Spalten mit Schleifen durchlaufen und bei jedem Durchlauf einen neuen Ziegel erstellen. Fügen Sie die folgende verschachtelte Schleife unter der vorherigen Codezeile hinzu:

```js
for (let c = 0; c < bricksLayout.count.col; c++) {
  for (let r = 0; r < bricksLayout.count.row; r++) {
    const brickX =
      c * (bricksLayout.width + bricksLayout.padding) +
      bricksLayout.offset.left;
    const brickY =
      r * (bricksLayout.height + bricksLayout.padding) +
      bricksLayout.offset.top;

    const newBrick = new Brick(
      "img/brick.png",
      ctx,
      brickX,
      brickY,
      bricksLayout.width,
      bricksLayout.height,
    );
    bricks.push(newBrick);
  }
}
```

Jede `brickX`-Position ergibt sich aus `bricksLayout.width` plus `bricksLayout.padding`, multipliziert mit der Spaltennummer `c`, zuzüglich `bricksLayout.offset.left`. Die Berechnung für `brickY` funktioniert genauso, verwendet aber die Reihennummer `r`, `bricksLayout.height` und `bricksLayout.offset.top`. So lässt sich jeder Ziegel an der richtigen Stelle platzieren, mit Abstand zu den anderen Ziegeln und zu den linken und oberen Rändern des Canvas.

Zum Schluss zeichnen wir die Ziegel innerhalb der Funktion `update()` auf den Bildschirm. Fügen Sie Folgendes unter dem Aufruf von `paddle.draw()` hinzu:

```js
for (const brick of bricks) {
  brick.draw();
}
```

Wenn Sie `index.html` jetzt neu laden, sollten die Ziegel in gleichmäßigen Abständen auf dem Bildschirm erscheinen.

## Kollisionserkennung zwischen Ziegel und Ball

Die nächste Herausforderung ist die Kollisionserkennung zwischen dem Ball und den Ziegeln. Glücklicherweise haben wir bereits ein allgemeines Kollisionssystem implementiert und müssen nur noch die Ziegel daran anbinden.

Registrieren Sie zunächst jeden Ziegel als Collider, direkt unter dem Aufruf von `initBricks()`:

```js
const bricks = initBricks();
for (const brick of bricks) {
  colliders.push(brick);
}
```

Fügen Sie jedem Ziegel eine Methode `onCollide()` hinzu, die ihn aus den Sammlungen `bricks` und `colliders` entfernt:

```js
class Brick extends GameObject {
  // …
  onCollide() {
    bricks.splice(bricks.indexOf(this), 1);
    colliders.splice(colliders.indexOf(this), 1);
  }
}
```

Der Ziegel muss so schnell wie möglich entfernt werden, damit der Ball nicht an ihm abprallt.

Das war’s! Laden Sie Ihren Code neu. Die neue Kollisionserkennung sollte nun wie gewünscht funktionieren.

## Vergleichen Sie Ihren Code

So sollte Ihr bisheriger Stand aussehen – Sie können ihn hier direkt ausprobieren. Um den Quellcode anzuzeigen, klicken Sie auf die Schaltfläche „Play“.

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
  touch-action: none;
}
```

```js hidden
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
let lastTimestamp = null;

const baseWallHitbox = {
  left: -Infinity,
  right: Infinity,
  top: -Infinity,
  bottom: Infinity,
};

const colliders = [
  { hitbox: { ...baseWallHitbox, right: 0 } },
  { hitbox: { ...baseWallHitbox, left: canvas.width } },
  { hitbox: { ...baseWallHitbox, bottom: 0 } },
];

class GameObject {
  static assets = new Map();
  url;
  asset;
  ctx;
  size = { w: undefined, h: undefined };
  pos = { x: 0, y: 0 };
  origin = { x: 0.5, y: 0.5 };
  constructor(url, ctx) {
    this.url = url;
    this.ctx = ctx;
  }
  async preload() {
    if (!GameObject.assets.has(this.url)) {
      const asset = new Image();
      asset.src = this.url;
      GameObject.assets.set(
        this.url,
        asset.decode().then(() => asset),
      );
    }
    this.asset = await GameObject.assets.get(this.url);
    if (this.size.w === undefined) {
      this.size.w = this.asset.width;
      this.size.h = this.asset.height;
    }
  }
  get hitbox() {
    const left = this.pos.x - this.size.w * this.origin.x;
    const top = this.pos.y - this.size.h * this.origin.y;
    return {
      left,
      right: left + this.size.w,
      top,
      bottom: top + this.size.h,
    };
  }
  draw() {
    const { left, top } = this.hitbox;
    this.ctx.drawImage(this.asset, left, top);
  }
  onCollide() {}
}

class Ball extends GameObject {
  pos = { x: undefined, y: undefined };
  vel = { x: 150, y: -150 };
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

class Paddle extends GameObject {
  origin = { x: 0.5, y: 1 };
  constructor(url, ctx) {
    super(url, ctx);
    this.pos = { x: ctx.canvas.width / 2, y: ctx.canvas.height - 5 };
  }
}

class Brick extends GameObject {
  constructor(url, ctx, x, y, w, h) {
    super(url, ctx);
    this.pos = { x, y };
    this.size = { w, h };
  }
  draw() {
    const { left, top } = this.hitbox;
    this.ctx.drawImage(this.asset, left, top, this.size.w, this.size.h);
  }
  onCollide() {
    bricks.splice(bricks.indexOf(this), 1);
    colliders.splice(colliders.indexOf(this), 1);
  }
}

const ball = new Ball(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png",
  ctx,
);
const paddle = new Paddle(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/paddle.png",
  ctx,
);
colliders.push(paddle);
const bricks = initBricks();
for (const brick of bricks) {
  colliders.push(brick);
}

canvas.addEventListener("pointermove", (event) => {
  if (paddle.size.w === undefined) {
    return;
  }
  const bounds = canvas.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) * canvas.width) / bounds.width;
  paddle.pos.x = Math.max(
    paddle.size.w / 2,
    Math.min(canvas.width - paddle.size.w / 2, x),
  );
});

Promise.all([ball, paddle, ...bricks].map((obj) => obj.preload())).then(() => {
  ball.pos.x = paddle.pos.x;
  ball.pos.y = paddle.hitbox.top - ball.size.h / 2;
  requestAnimationFrame(update);
});

function update(timestamp) {
  const dt = lastTimestamp === null ? 0 : (timestamp - lastTimestamp) / 1000;
  lastTimestamp = timestamp;
  moveBall(dt);

  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  paddle.draw();
  for (const brick of bricks) {
    brick.draw();
  }

  requestAnimationFrame(update);
}

function getCollision(moving, velocity, obstacle, dt) {
  const width = moving.right - moving.left;
  const height = moving.bottom - moving.top;
  const movingPos = { x: moving.left, y: moving.top };
  const left = obstacle.left - width;
  const right = obstacle.right;
  const top = obstacle.top - height;
  const bottom = obstacle.bottom;
  const hit = { time: dt, x: null, y: null };

  function checkFace(axis, coordinate, min, max, direction) {
    if (velocity[axis] * direction <= 0) {
      return;
    }
    const time = (coordinate - movingPos[axis]) / velocity[axis];
    if (time < 0 || time > hit.time) {
      return;
    }
    const otherAxis = axis === "x" ? "y" : "x";
    const otherPosition = movingPos[otherAxis] + velocity[otherAxis] * time;
    if (otherPosition < min || otherPosition > max) {
      return;
    }
    if (time < hit.time) {
      hit.x = null;
      hit.y = null;
    }
    hit.time = time;
    hit[axis] = coordinate;
  }

  checkFace("x", left, top, bottom, 1);
  checkFace("x", right, top, bottom, -1);
  checkFace("y", top, left, right, 1);
  checkFace("y", bottom, left, right, -1);

  return hit.x === null && hit.y === null ? null : hit;
}

function moveBall(dt) {
  while (dt > 0) {
    // Avoid repeatedly triggering the getter
    const ballHitbox = ball.hitbox;
    let hitTime = dt;
    let hitX = null;
    let hitY = null;
    let contacts = [];

    for (const collider of colliders) {
      const hit = getCollision(ballHitbox, ball.vel, collider.hitbox, hitTime);
      if (hit === null) {
        continue;
      }
      if (hit.time < hitTime) {
        hitX = null;
        hitY = null;
        contacts = [];
      }
      hitTime = hit.time;
      hitX = hit.x ?? hitX;
      hitY = hit.y ?? hitY;
      contacts.push({ collider, hit });
    }

    ball.move(hitTime);
    dt -= hitTime;

    const ballIsOutOfBounds = ball.hitbox.bottom > canvas.height;
    if (ballIsOutOfBounds) {
      // Game over logic
      location.reload();
      return;
    }

    if (contacts.length === 0) {
      break;
    }
    // Snap the position to the point of contact to avoid floating point errors
    if (hitX !== null) {
      ball.pos.x = hitX + ball.size.w / 2;
    }
    if (hitY !== null) {
      ball.pos.y = hitY + ball.size.h / 2;
    }

    ball.onCollide({ x: hitX !== null, y: hitY !== null });
    for (const { collider, hit } of contacts) {
      collider.onCollide?.({ x: hit.x !== null, y: hit.y !== null });
    }
  }
}

function initBricks() {
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
  const bricks = [];
  for (let c = 0; c < bricksLayout.count.col; c++) {
    for (let r = 0; r < bricksLayout.count.row; r++) {
      const brickX =
        c * (bricksLayout.width + bricksLayout.padding) +
        bricksLayout.offset.left;
      const brickY =
        r * (bricksLayout.height + bricksLayout.padding) +
        bricksLayout.offset.top;

      const newBrick = new Brick(
        "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/brick.png",
        ctx,
        brickX,
        brickY,
        bricksLayout.width,
        bricksLayout.height,
      );
      bricks.push(newBrick);
    }
  }
  return bricks;
}
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Wir können die Ziegel treffen und entfernen – das ist bereits eine schöne Erweiterung des Spiels. Noch besser wäre es, den [Punktestand zu verfolgen und das Spiel zu gewinnen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win), sobald alle Ziegel zerstört sind.

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Track_the_score_and_win")}}
