---
title: Animationen und Tweens
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Animations_and_tweens
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Extra_lives", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Buttons")}}

Dies ist der **9. Schritt** von 11 im [Tutorial zum Erstellen eines Breakout-Spiels mit reinem JavaScript](/de/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Wir sehen uns an, wie Sie Animationen und Tweens in unserem Spiel implementieren, damit es lebendiger wirkt und mehr Spaß macht.

## Animationen

Bei einer Sprite-Animation werden die Sprites eines Spritesheets nacheinander angezeigt. Als Beispiel lassen wir den Ball wackeln, wenn er auf etwas trifft.

Laden Sie zunächst [das Spritesheet herunter](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/wobble.png) und speichern Sie es in Ihrem Verzeichnis `/img`.

Ersetzen Sie die Bild-URL des Balls durch die URL des Spritesheets:

```js
const ball = new Ball("img/wobble.png", ctx);
```

Fügen Sie in der Klasse `Ball` eine explizite `size` hinzu, damit `GameObject.preload()` nicht die Abmessungen des gesamten Spritesheets als Größe des Balls verwendet. Fügen Sie außerdem Eigenschaften für die Frame-Sequenz und die seit Beginn der Animation verstrichene Zeit hinzu:

```js
class Ball extends GameObject {
  size = { w: 20, h: 20 };
  wobbleFrames = [0, 1, 0, 2, 0, 1, 0, 2, 0];
  wobbleTime = null;
  // ... existing properties and methods ...
}
```

Die Frame-Sequenz verweist über ihre Positionen auf die drei Sprites: 0, 1 und 2. Ein `wobbleTime`-Wert von `null` bedeutet, dass keine Animation läuft; deshalb zeigen wir Frame 0 an.

## Die Animation abspielen

Fügen Sie `Ball` die folgenden Methoden hinzu und behalten Sie die vorhandenen Methoden `move()` und `onCollide()` bei:

```js
class Ball extends GameObject {
  // ...
  playWobble() {
    this.wobbleTime = 0;
  }
  updateAnimation(dt) {
    if (this.wobbleTime === null) {
      return;
    }
    this.wobbleTime += dt;
    if (this.wobbleTime >= this.wobbleFrames.length * (1 / 24)) {
      this.wobbleTime = null;
    }
  }
  draw() {
    const frame =
      this.wobbleTime === null
        ? 0
        : this.wobbleFrames[Math.floor(this.wobbleTime / (1 / 24))];
    const { left, top } = this.hitbox;
    this.ctx.drawImage(
      this.asset,
      frame * this.size.w,
      0,
      this.size.w,
      this.size.h,
      left,
      top,
      this.size.w,
      this.size.h,
    );
  }
}
```

Die Methode `playWobble()` startet die Animation oder startet sie neu, wenn sie bereits läuft. Die Methode `updateAnimation()` setzt sie anhand der verstrichenen Zeit in Sekunden fort. Wir spielen die Animation mit 24 Frames pro Sekunde ab, sodass jeder Frame `1 / 24` Sekunden dauert.

Die überschriebene Methode `draw()` verwendet die Variante von [`ctx.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) mit neun Argumenten. Die ersten vier Zahlen nach dem Bild wählen einen rechteckigen Ausschnitt aus dem Spritesheet aus; die letzten vier bestimmen Position und Größe dieses Ausschnitts auf dem Canvas.

## Die Animation auslösen, wenn der Ball den Schläger trifft

Fügen Sie `Paddle` eine Methode `onCollide()` hinzu, die die Animation des Balls startet, wenn das Kollisionssystem einen Treffer meldet:

```js
class Paddle extends GameObject {
  // ...
  onCollide() {
    ball.playWobble();
  }
}
```

Die Animation wird jedes Mal abgespielt, wenn der Ball den Schläger trifft. Sie können `ball.playWobble()` auch innerhalb der Methode `onCollide()` des Ziegelsteins aufrufen, wenn das Spiel dadurch Ihrer Meinung nach besser aussieht.

## Tweens

Während Sprite-Animationen Frames nacheinander anzeigen, animieren Tweens Eigenschaften eines Objekts in der Spielwelt, etwa seine Breite oder Deckkraft, stufenlos.

Fügen wir unserem Spiel einen Tween hinzu, damit Ziegelsteine nach einem Treffer durch den Ball allmählich verschwinden. Wir müssen jeden getroffenen Ziegelstein weiterhin sofort aus `bricks` und `colliders` entfernen, damit er nicht erneut getroffen werden oder Punkte einbringen kann. Damit er während des Tweens weiter gezeichnet wird, fügen Sie neben `bricks` ein separates Array hinzu:

```js
const disappearingBricks = [];
```

Ersetzen Sie die Klasse `Brick` durch Folgendes:

```js
class Brick extends GameObject {
  shrinkTime = 0;
  constructor(url, ctx, x, y, w, h) {
    super(url, ctx);
    this.pos = { x, y };
    this.size = { w, h };
  }
  draw() {
    const scale = 1 - Math.min(this.shrinkTime / 0.2, 1);
    const width = this.size.w * scale;
    const height = this.size.h * scale;
    this.ctx.drawImage(
      this.asset,
      this.pos.x - width / 2,
      this.pos.y - height / 2,
      width,
      height,
    );
  }
  onCollide() {
    bricks.splice(bricks.indexOf(this), 1);
    colliders.splice(colliders.indexOf(this), 1);
    disappearingBricks.push(this);
    score += 10;
  }
}
```

Die Eigenschaft `shrinkTime` erfasst in Sekunden, wie lange der Ziegelstein bereits schrumpft. Der Tween soll 0,2 Sekunden dauern. Wenn wir `shrinkTime` durch 0,2 teilen, erhalten wir den Fortschritt von 0 bis 1. Ziehen wir diesen Fortschritt von 1 ab, ergibt sich ein Skalierungsfaktor, der linear von der vollen Größe auf null sinkt. Die Zeichenkoordinaten sorgen dafür, dass das schrumpfende Bild an der ursprünglichen Position des Ziegelsteins zentriert bleibt.

Nachdem der Ziegelstein aus dem Spielgeschehen entfernt wurde, bleibt er also in `disappearingBricks` erfasst, damit er animiert werden kann.

## Die Effekte aktualisieren und zeichnen

Ersetzen Sie `update()` durch Folgendes, um beide Effekte in jedem Frame fortzusetzen:

```js
function update(timestamp) {
  const dt = lastTimestamp === null ? 0 : (timestamp - lastTimestamp) / 1000;
  lastTimestamp = timestamp;

  ball.updateAnimation(dt);
  for (let i = disappearingBricks.length - 1; i >= 0; i--) {
    const brick = disappearingBricks[i];
    brick.shrinkTime += dt;
    if (brick.shrinkTime >= 0.2) {
      disappearingBricks.splice(i, 1);
    }
  }
  moveBall(dt);

  // drawing code...
  for (const brick of disappearingBricks) {
    brick.draw();
  }
  drawStatus();

  if (bricks.length === 0 && disappearingBricks.length === 0) {
    alert("You won the game, congratulations!");
    location.reload();
    return;
  }

  requestAnimationFrame(update);
}
```

Wir aktualisieren bestehende Effekte, bevor wir den Ball bewegen. So beginnen Animationen, die durch Kollisionen in diesem Frame ausgelöst werden, bei Zeit null. Beim Entfernen abgeschlossener Tweens durchlaufen wir `disappearingBricks` rückwärts, damit das Entfernen von Einträgen die Indizes noch nicht besuchter Elemente nicht verschiebt. Das Zeichnen erfolgt nach diesen Aktualisierungen und umfasst sowohl intakte als auch verschwindende Ziegelsteine.

Die Siegbedingung wartet nun darauf, dass beide Arrays leer sind. So schrumpft der letzte Ziegelstein vollständig, bevor die Siegesmeldung erscheint. Die vorhandene Bedingung `bricks.length > 0` in `moveBall()` stoppt den Ball, sobald alle Ziegelsteine getroffen wurden, während die Zeichenschleife die Tweens noch zu Ende führt.

## Vergleichen Sie Ihren Code

So sollte Ihr Spiel bisher aussehen. Das Beispiel wird live ausgeführt. Klicken Sie auf die Schaltfläche „Play“, um den Quellcode anzuzeigen.

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
let score = 0;
let lives = 3;
let showLifeLostText = false;
const disappearingBricks = [];

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
  size = { w: 20, h: 20 };
  wobbleFrames = [0, 1, 0, 2, 0, 1, 0, 2, 0];
  wobbleTime = null;
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
  playWobble() {
    this.wobbleTime = 0;
  }
  updateAnimation(dt) {
    if (this.wobbleTime === null) {
      return;
    }
    this.wobbleTime += dt;
    if (this.wobbleTime >= this.wobbleFrames.length * (1 / 24)) {
      this.wobbleTime = null;
    }
  }
  draw() {
    const frame =
      this.wobbleTime === null
        ? 0
        : this.wobbleFrames[Math.floor(this.wobbleTime / (1 / 24))];
    const { left, top } = this.hitbox;
    this.ctx.drawImage(
      this.asset,
      frame * this.size.w,
      0,
      this.size.w,
      this.size.h,
      left,
      top,
      this.size.w,
      this.size.h,
    );
  }
}

class Paddle extends GameObject {
  origin = { x: 0.5, y: 1 };
  constructor(url, ctx) {
    super(url, ctx);
    this.pos = { x: ctx.canvas.width / 2, y: ctx.canvas.height - 5 };
  }
  onCollide() {
    ball.playWobble();
  }
}

class Brick extends GameObject {
  shrinkTime = 0;
  constructor(url, ctx, x, y, w, h) {
    super(url, ctx);
    this.pos = { x, y };
    this.size = { w, h };
  }
  draw() {
    const scale = 1 - Math.min(this.shrinkTime / 0.2, 1);
    const width = this.size.w * scale;
    const height = this.size.h * scale;
    this.ctx.drawImage(
      this.asset,
      this.pos.x - width / 2,
      this.pos.y - height / 2,
      width,
      height,
    );
  }
  onCollide() {
    bricks.splice(bricks.indexOf(this), 1);
    colliders.splice(colliders.indexOf(this), 1);
    disappearingBricks.push(this);
    score += 10;
  }
}

const ball = new Ball(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/wobble.png",
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

  ball.updateAnimation(dt);
  for (let i = disappearingBricks.length - 1; i >= 0; i--) {
    const brick = disappearingBricks[i];
    brick.shrinkTime += dt;
    if (brick.shrinkTime >= 0.2) {
      disappearingBricks.splice(i, 1);
    }
  }
  moveBall(dt);

  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  paddle.draw();
  for (const brick of bricks) {
    brick.draw();
  }
  for (const brick of disappearingBricks) {
    brick.draw();
  }
  drawStatus();

  if (bricks.length === 0 && disappearingBricks.length === 0) {
    alert("You won the game, congratulations!");
    location.reload();
    return;
  }

  requestAnimationFrame(update);
}

function drawStatus() {
  ctx.font = "18px Arial";
  ctx.fillStyle = "#0095dd";
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.fillText(`Points: ${score}`, 5, 5);

  ctx.textAlign = "right";
  ctx.fillText(`Lives: ${lives}`, canvas.width - 5, 5);

  if (showLifeLostText) {
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      "Life lost, click to continue",
      canvas.width / 2,
      canvas.height / 2,
    );
  }
}

function ballLeaveScreen() {
  lives--;
  if (lives === 0) {
    // Game over logic
    location.reload();
    return;
  }

  paddle.pos.x = canvas.width / 2;
  ball.pos.x = paddle.pos.x;
  ball.pos.y = paddle.hitbox.top - ball.size.h / 2;
  ball.vel = { x: 0, y: 0 };
  showLifeLostText = true;
  canvas.addEventListener(
    "pointerdown",
    () => {
      showLifeLostText = false;
      ball.vel = { x: 150, y: -150 };
      lastTimestamp = null;
    },
    { once: true },
  );
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
  while (dt > 0 && bricks.length > 0) {
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
      ballLeaveScreen();
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

Animationen und Tweens sehen gut aus, aber wir können unser Spiel noch weiter verbessern: Im nächsten Abschnitt beschäftigen wir uns mit der Verarbeitung von Eingaben über [Buttons](/de/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Buttons).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Extra_lives", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Buttons")}}
