---
title: Buttons
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Buttons
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Animations_and_tweens", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Randomizing_gameplay")}}

Dies ist der **10. von 11 Schritten** im [Tutorial zum Erstellen eines Breakout-Spiels mit reinem JavaScript](/de/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Anstatt das Spiel sofort zu starten, können wir die Entscheidung den Spielenden überlassen, indem wir einen Start-Button hinzufügen. Sehen wir uns an, wie das geht.

## Neue Variablen

Wir benötigen eine boolesche Variable, die angibt, ob das Spiel gestartet wurde, und einen `AbortController`, um die Event-Listener des Buttons zu entfernen, sobald das Spiel startet. Fügen Sie diese Zeilen unter Ihren anderen Variablen auf oberster Ebene ein:

```js
let playing = false;
const buttonControls = new AbortController();
```

## Den Button zum Spiel hinzufügen

Wir können das Spritesheet des Buttons genauso laden wie die Wackelanimation des Balls. Fügen Sie nach Ihren anderen Klassen für Spielobjekte eine Klasse `Button` hinzu:

```js
class Button extends GameObject {
  size = { w: 120, h: 40 };
  frame = 0;
  constructor(url, ctx) {
    super(url, ctx);
    this.pos = { x: ctx.canvas.width / 2, y: ctx.canvas.height / 2 };
  }
}
```

Der Button ist auf der Canvas zentriert. Seine Eigenschaft `frame` wählt das Bild für den Normalzustand (0), den Hover-Zustand (1) oder den gedrückten Zustand (2) aus.

Die Methode `draw()` berechnet die Spalte und Zeile des Frames im Spritesheet und zeichnet nur diesen Frame, genau wie beim Ball.

```js
class Button extends GameObject {
  // …
  draw() {
    const columns = Math.floor(this.asset.width / this.size.w);
    const { left, top } = this.hitbox;
    this.ctx.drawImage(
      this.asset,
      (this.frame % columns) * this.size.w,
      Math.floor(this.frame / columns) * this.size.h,
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

Erstellen Sie den Button unter den Definitionen für Ball, Paddle und Bricks:

```js
const startButton = new Button("img/button.png", ctx);
```

Sie müssen außerdem [das Spritesheet des Buttons herunterladen](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_pure_JavaScript/button.png) und in Ihrem Verzeichnis `/img` speichern.

Fügen Sie in `update()` nach `drawStatus()` Folgendes hinzu, damit der Button angezeigt wird, bis das Spiel startet:

```js
if (!playing) {
  startButton.draw();
}
```

## Eingaben für den Button verarbeiten

Die Verarbeitung von Eingaben für den Button ist etwas aufwendig, weil wir mit einer Canvas statt mit nativen HTML-Elementen arbeiten. Wir müssen die Prüfung der Trefferfläche, die Animation und die Event-Verarbeitung selbst implementieren.

Die Methode `containsPointer()` wandelt die Koordinaten des Zeigers in Canvas-Koordinaten um und prüft anschließend, ob sich der Zeiger innerhalb der Trefferfläche befindet:

```js
class Button extends GameObject {
  // …
  containsPointer(event) {
    const bounds = this.ctx.canvas.getBoundingClientRect();
    const x =
      ((event.clientX - bounds.left) * this.ctx.canvas.width) / bounds.width;
    const y =
      ((event.clientY - bounds.top) * this.ctx.canvas.height) / bounds.height;
    const { left, right, top, bottom } = this.hitbox;
    return x >= left && x <= right && y >= top && y <= bottom;
  }
}
```

Fügen Sie am Ende des Skripts eine Funktion `initButtonControls()` hinzu, die Pointer-Event-Listener zur Steuerung des Buttons registriert. Sofern nicht anders angegeben, fügen Sie alles Folgende in diesem Abschnitt zum Funktionskörper hinzu.

```js
function initButtonControls() {
  // Add code here
}
```

Definieren Sie zunächst `options` mit dem `signal`, über das diese Listener entfernt werden, sobald das Spiel startet. Erfassen Sie außerdem die Pointer-ID, damit nur der Zeiger, mit dem der Button gedrückt wurde, ihn aktivieren kann.

```js
const options = { signal: buttonControls.signal };
let pressedPointer = null;
```

Wenn der Zeiger den Button verlässt, wird der Frame-Index zurückgesetzt, wodurch der Button wieder sein Standardaussehen erhält. Wird der Zeiger außerhalb des Buttons losgelassen, wird der Tastendruck abgebrochen. Diese Gesten können auf verschiedene Arten erfolgen. Fügen Sie deshalb wiederverwendbare Funktionen dafür hinzu.

```js
function resetFrame(event) {
  if (pressedPointer === null || pressedPointer === event.pointerId) {
    startButton.frame = 0;
  }
}
function cancelPress(event) {
  if (event.pointerId === pressedPointer) {
    pressedPointer = null;
    resetFrame(event);
  }
}
```

Definieren Sie als Nächstes den Handler für `pointermove`. Er setzt den Frame-Index – und ändert damit das Aussehen des Buttons –, wenn sich der Zeiger über dem Button befindet. Wenn bereits ein Zeiger gedrückt gehalten wird, werden andere Zeiger ignoriert und nicht als zusätzliche Hover-Ereignisse berücksichtigt.

```js
canvas.addEventListener(
  "pointermove",
  (event) => {
    if (pressedPointer !== null && pressedPointer !== event.pointerId) {
      return;
    }
    if (startButton.containsPointer(event)) {
      startButton.frame = pressedPointer === null ? 1 : 2;
    } else {
      resetFrame(event);
    }
  },
  options,
);
```

Definieren Sie als Nächstes den Handler für `pointerdown`. Er setzt den Frame-Index für das Aussehen im gedrückten Zustand und speichert außerdem `pressedPointer`. Dies geschieht nur, wenn derzeit kein anderer Zeiger gedrückt gehalten wird und es sich bei einer Maus oder einem ähnlichen Gerät um einen Linksklick handelt. Durch Pointer-Capture empfängt die Canvas weiterhin Pointer-Events, selbst wenn der Zeiger ihren Bereich verlässt.

```js
canvas.addEventListener(
  "pointerdown",
  (event) => {
    if (
      event.button !== 0 ||
      pressedPointer !== null ||
      !startButton.containsPointer(event)
    ) {
      return;
    }
    pressedPointer = event.pointerId;
    startButton.frame = 2;
    canvas.setPointerCapture(event.pointerId);
  },
  options,
);
```

Definieren Sie als Nächstes den Handler für `pointerup`. Er startet das Spiel nur dann, wenn der Zeiger losgelassen wird, während er sich noch über dem Button befindet. Andernfalls gilt der Tastendruck als abgebrochen.

```js
canvas.addEventListener(
  "pointerup",
  (event) => {
    if (event.pointerId !== pressedPointer) {
      return;
    }
    if (startButton.containsPointer(event)) {
      pressedPointer = null;
      startGame();
    } else {
      cancelPress(event);
    }
  },
  options,
);
```

Wenn der Zeiger die Canvas verlässt, eine native Pointer-Cancel-Geste erfolgt oder das durch den `pointerdown`-Listener eingerichtete Pointer-Capture verloren geht, muss jeweils ein Zurücksetzen beziehungsweise Abbrechen ausgelöst werden. Diese Events werden nicht anhand der Trefferfläche gefiltert, da sie auch Tastendrücke bereinigen müssen, bei denen der Zeiger den Button verlässt.

```js
canvas.addEventListener("pointerleave", resetFrame, options);
canvas.addEventListener("pointercancel", cancelPress, options);
canvas.addEventListener("lostpointercapture", cancelPress, options);
```

Wir registrieren diese Listener erst, nachdem die Assets geladen wurden. Ersetzen Sie den bisherigen Aufruf zum Vorladen durch Folgendes, das auch das Bild des Buttons lädt:

```js
Promise.all(
  [ball, paddle, ...bricks, startButton].map((obj) => obj.preload()),
).then(() => {
  ball.pos.x = paddle.pos.x;
  ball.pos.y = paddle.hitbox.top - ball.size.h / 2;
  initButtonControls();
  requestAnimationFrame(update);
});
```

## Das Spiel starten

Nun müssen wir die oben im Code referenzierte Funktion `startGame()` definieren:

```js
function startGame() {
  buttonControls.abort();
  ball.vel = { x: 150, y: -150 };
  playing = true;
  lastTimestamp = null;
}
```

Wenn der Button gedrückt wird, entfernen wir alle Event-Listener des Buttons, legen die Anfangsgeschwindigkeit des Balls fest und setzen die Eigenschaft `playing` auf `true`. Außerdem setzen wir `lastTimestamp` zurück, damit bei der ersten Aktualisierung der Ballbewegung nicht die Zeit vor dem Loslassen des Buttons berücksichtigt wird.

Gehen Sie zum Abschluss dieses Abschnitts zurück zu Ihrer Klasse `Ball`, suchen Sie die Zeile `vel = { x: 150, y: -150 }` und ersetzen Sie sie durch `vel = { x: 0, y: 0 }`. Der Ball soll sich erst bewegen, wenn der Button gedrückt wurde – nicht vorher!

## Das Paddle vor Spielbeginn unbeweglich halten

Es funktioniert wie erwartet, aber wir können das Paddle auch dann noch bewegen, wenn das Spiel noch nicht gestartet ist. Das wirkt etwas merkwürdig. Um das zu verhindern, können wir die Eigenschaft `playing` nutzen und das Paddle nur dann beweglich machen, wenn das Spiel gestartet wurde. Fügen Sie dazu `!playing` wie folgt zur Bedingung im vorhandenen `pointermove`-Listener des Paddles hinzu:

```js
if (!playing || paddle.size.w === undefined) {
  return;
}
```

So bleibt das Paddle unbeweglich, nachdem alles geladen und vorbereitet wurde, aber bevor das eigentliche Spiel beginnt.

## Vergleichen Sie Ihren Code

Hier sehen Sie, wie Ihr bisheriger Stand aussehen sollte – als lauffähiges Beispiel. Klicken Sie auf den Button „Play“, um den Quellcode anzuzeigen.

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
let playing = false;
const buttonControls = new AbortController();
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
  vel = { x: 0, y: 0 };
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

class Button extends GameObject {
  size = { w: 120, h: 40 };
  frame = 0;
  constructor(url, ctx) {
    super(url, ctx);
    this.pos = { x: ctx.canvas.width / 2, y: ctx.canvas.height / 2 };
  }
  containsPointer(event) {
    const bounds = this.ctx.canvas.getBoundingClientRect();
    const x =
      ((event.clientX - bounds.left) * this.ctx.canvas.width) / bounds.width;
    const y =
      ((event.clientY - bounds.top) * this.ctx.canvas.height) / bounds.height;
    const { left, right, top, bottom } = this.hitbox;
    return x >= left && x <= right && y >= top && y <= bottom;
  }
  draw() {
    const columns = Math.floor(this.asset.width / this.size.w);
    const { left, top } = this.hitbox;
    this.ctx.drawImage(
      this.asset,
      (this.frame % columns) * this.size.w,
      Math.floor(this.frame / columns) * this.size.h,
      this.size.w,
      this.size.h,
      left,
      top,
      this.size.w,
      this.size.h,
    );
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

const startButton = new Button(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/button.png",
  ctx,
);

canvas.addEventListener("pointermove", (event) => {
  if (!playing || paddle.size.w === undefined) {
    return;
  }
  const bounds = canvas.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) * canvas.width) / bounds.width;
  paddle.pos.x = Math.max(
    paddle.size.w / 2,
    Math.min(canvas.width - paddle.size.w / 2, x),
  );
});

Promise.all(
  [ball, paddle, ...bricks, startButton].map((obj) => obj.preload()),
).then(() => {
  ball.pos.x = paddle.pos.x;
  ball.pos.y = paddle.hitbox.top - ball.size.h / 2;
  initButtonControls();
  requestAnimationFrame(update);
});

function startGame() {
  buttonControls.abort();
  ball.vel = { x: 150, y: -150 };
  playing = true;
  lastTimestamp = null;
}

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
  if (!playing) {
    startButton.draw();
  }

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

function initButtonControls() {
  const options = { signal: buttonControls.signal };
  let pressedPointer = null;

  function resetFrame(event) {
    if (pressedPointer === null || pressedPointer === event.pointerId) {
      startButton.frame = 0;
    }
  }
  function cancelPress(event) {
    if (event.pointerId === pressedPointer) {
      pressedPointer = null;
      resetFrame(event);
    }
  }

  canvas.addEventListener(
    "pointermove",
    (event) => {
      if (pressedPointer !== null && pressedPointer !== event.pointerId) {
        return;
      }
      if (startButton.containsPointer(event)) {
        startButton.frame = pressedPointer === null ? 1 : 2;
      } else {
        resetFrame(event);
      }
    },
    options,
  );
  canvas.addEventListener(
    "pointerdown",
    (event) => {
      if (
        event.button !== 0 ||
        pressedPointer !== null ||
        !startButton.containsPointer(event)
      ) {
        return;
      }
      pressedPointer = event.pointerId;
      startButton.frame = 2;
      canvas.setPointerCapture(event.pointerId);
    },
    options,
  );
  canvas.addEventListener(
    "pointerup",
    (event) => {
      if (event.pointerId !== pressedPointer) {
        return;
      }
      if (startButton.containsPointer(event)) {
        pressedPointer = null;
        startGame();
      } else {
        cancelPress(event);
      }
    },
    options,
  );
  canvas.addEventListener("pointerleave", resetFrame, options);
  canvas.addEventListener("pointercancel", cancelPress, options);
  canvas.addEventListener("lostpointercapture", cancelPress, options);
}
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Als Letztes werden wir in dieser Artikelreihe das Gameplay noch interessanter gestalten, indem wir der Art, wie der Ball vom Paddle abprallt, etwas [Zufall](/de/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Randomizing_gameplay) hinzufügen.

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Animations_and_tweens", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Randomizing_gameplay")}}
