---
title: Spielerschläger und Steuerung
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over")}}

Dies ist der **4. Schritt** von 11 im [Tutorial zum Erstellen eines Breakout-Spiels mit reinem JavaScript](/de/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Der Ball bewegt sich und prallt von den Wänden ab, aber das wird schnell langweilig – es fehlt jede Interaktivität! Damit ein richtiges Spiel daraus wird, erstellen wir in diesem Artikel einen Schläger, den Sie bewegen können, um den Ball zu treffen.

## Den Schläger zeichnen

Sowohl der Ball als auch der Schläger benötigen ein Bild, eine Position, eine Größe, eine Kollisionsbox und Zeichenlogik. Diese Eigenschaften können wir in einer Basisklasse `GameObject` zusammenfassen. Ersetzen Sie die vorhandene Klasse `Ball` durch die folgenden beiden Klassen:

```js
class GameObject {
  asset;
  ctx;
  size = { w: undefined, h: undefined };
  pos = { x: 0, y: 0 };
  origin = { x: 0.5, y: 0.5 };
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
  pos = { x: 50, y: 50 };
  vel = { x: 150, y: 150 };
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
```

`origin` legt fest, welcher Punkt des Bildes an `pos` platziert wird, angegeben als Anteil seiner Breite und Höhe. Der Standardwert `(0.5, 0.5)` platziert dort die Bildmitte. Die Basisklasse definiert außerdem eine leere Methode `onCollide()`, damit jedes Objekt über diese Methode verfügt. Reagiert ein Objekt nicht auf Kollisionen – wie der Schläger –, kann es die Standardmethode erben.

`Ball` erbt den Konstruktor, `preload()`, `hitbox` und `draw()` von `GameObject`. Die Klasse ergänzt ihre Anfangsposition, Geschwindigkeit, `move()` und die Reaktion `onCollide()` aus der vorherigen Lektion.

Fügen Sie nun unterhalb von `Ball` eine Klasse `Paddle` hinzu:

```js
class Paddle extends GameObject {
  origin = { x: 0.5, y: 1 };
  constructor(url, ctx) {
    super(url, ctx);
    this.pos = { x: ctx.canvas.width / 2, y: ctx.canvas.height - 5 };
  }
}
```

Der Aufruf `super(url, ctx)` führt den gemeinsamen Konstruktor aus, um das Bild und den Zeichenkontext des Schlägers einzurichten. Anschließend legt der Schläger seine Anfangsposition fest. Mit `canvas.width` und `canvas.height` können wir den Schläger genau dort positionieren, wo wir ihn haben möchten: `canvas.width / 2` liegt genau in der Mitte des Bildschirms. In unserem Fall entspricht die Spielwelt dem Canvas. Bei anderen Spieltypen, etwa Side-Scrollern, ist die Spielwelt jedoch größer, sodass Sie mit den Werten experimentieren können, um interessante Effekte zu erzielen.

> [!NOTE]
> Da `origin.y` auf `1` gesetzt ist, ziehen wir beim Zeichnen des Schlägers und beim Berechnen seiner Oberkante `this.size.h` statt `this.size.h / 2` ab. Das bedeutet, dass `paddle.pos.y` die y-Position der _Unterkante_ des Schlägers angibt, nicht die seiner Mitte. So lässt sich die Position des Schlägers relativ zur Unterkante des Canvas einfacher steuern.

Laden Sie die [Schlägergrafik](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/paddle.png) herunter und speichern Sie sie in Ihrem Ordner `/img`. Erstellen Sie den Schläger direkt nach dem Ball:

```js
const paddle = new Paddle("img/paddle.png", ctx);
```

Fügen Sie außerdem `paddle` zum Array in `Promise.all()` hinzu:

```js
Promise.all([ball, paddle].map((obj) => obj.preload())).then(() =>
  requestAnimationFrame(update),
);
```

Fügen Sie nach dem vorhandenen Aufruf `ball.draw()` Folgendes hinzu:

```js
paddle.draw();
```

Der Schläger befindet sich nun genau dort, wo wir ihn haben möchten. Damit der Ball von ihm abprallt, müssen wir als Nächstes die Kollisionsphysik zwischen beiden implementieren.

## Physik hinzufügen

> [!NOTE]
> Hier gehen wir schneller vor als im übrigen Tutorial, denn genau diese Aufgabe übernimmt ein Framework wie [Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls) für uns. Normalerweise müssten Sie die Physik nicht selbst implementieren, sondern lediglich den Schläger als Kollisionsobjekt registrieren.

Anders als Wände ist der Schläger ein begrenztes Rechteck. Der Ball kann daher auf jede seiner vier Kanten (oder sogar eine Ecke) treffen. In dem äußerst seltenen Fall, dass der Ball schnell genug ist, kann er sogar vollständig hindurchfliegen. Statt erst nach der Bewegung des Balls auf eine Überlappung zu prüfen, implementieren wir eine _kontinuierliche Kollisionserkennung_. Sie berechnet den ersten Zeitpunkt zwischen zwei Frames, an dem der Ball eine Oberfläche berührt. So geht die Information darüber, welche Oberfläche zuerst berührt wurde, nicht verloren.

Wir schreiben die Kollisionsberechnung als wiederverwendbare Funktion, damit wir sie für den Schläger und später auch für die Steine nutzen können. Sie erhält eine `moving`-Kollisionsbox und eine `obstacle`-Kollisionsbox und bestimmt, ob das `moving`-Objekt innerhalb von `dt` voraussichtlich mit `obstacle` kollidiert und, falls ja, wann und wo.

Anstatt wie bei `handleWallCollisions` die Position der vier Seiten des bewegten Objekts einzeln zu berechnen, können wir es auf einen einzigen Punkt reduzieren – seine linke obere Ecke –, indem wir den Bereich des Hindernisses um die Breite und Höhe des bewegten Objekts erweitern.

![Ein Rechteck bewegt sich diagonal, bis seine Unterkante ein Hindernis berührt. Seine linke obere Ecke erreicht im selben Moment das erweiterte Hindernis.](continuous-collision-detection.svg)

```js
function getCollision(moving, velocity, obstacle, dt) {
  const width = moving.right - moving.left;
  const height = moving.bottom - moving.top;
  const movingPos = { x: moving.left, y: moving.top };
  const left = obstacle.left - width;
  const right = obstacle.right;
  const top = obstacle.top - height;
  const bottom = obstacle.bottom;
  const hit = { time: dt, x: null, y: null };

  function checkFace(axis, direction, coordinate, min, max) {
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

  checkFace("x", 1, left, top, bottom);
  checkFace("x", -1, right, top, bottom);
  checkFace("y", 1, top, left, right);
  checkFace("y", -1, bottom, left, right);

  return hit.x === null && hit.y === null ? null : hit;
}
```

Der Großteil der Logik befindet sich in der verschachtelten Funktion `checkFace()`. Sie erhält die Parameter `axis`, `direction` und `coordinate`, die eine der vier Seiten des Hindernisses als nach innen gerichteten Normalenvektor beschreiben. Beispielsweise steht `"x", 1, left` für die linke Kante, weil ein Vektor in positiver x-Richtung senkrecht auf der Oberfläche steht und in das Objekt hineinzeigt.

Bei einer vertikalen Oberfläche ergibt sich die Zeit bis zum Kontakt aus der horizontalen Entfernung geteilt durch die horizontale Geschwindigkeit. Anschließend berechnen wir die vertikale Position des Balls zu diesem Zeitpunkt, um zu prüfen, ob er die Oberfläche trifft oder oberhalb beziehungsweise unterhalb an ihr vorbeifliegt (und somit keine Kollision stattfindet). Bei horizontalen Oberflächen funktioniert das genauso, nur mit vertauschten Achsen. Die Funktion `checkFace()` hält den frühesten Kontakt innerhalb von `dt` fest.

Das Ergebnis von `getCollision()` ist `null`, wenn kein Kontakt stattfindet. Andernfalls enthält es den Kontaktzeitpunkt und für jede Achse, auf der eine Kollision stattfindet, die zu verwendende Koordinate der linken oberen Ecke. Trifft der Ball beispielsweise auf eine vertikale Seite, wird eine `x`-Koordinate zurückgegeben, während `y` `null` bleibt. Bei einem Treffer genau auf eine Ecke werden beide Koordinaten gesetzt.

Jetzt müssen wir `getCollision()` nur noch für den Ball und alle Objekte aufrufen, mit denen er kollidieren könnte. Sogar die Wände können wir als normale Hindernisse behandeln, sodass wir keine separate Logik mehr benötigen. Die Liste `colliders` enthält Objekte mit einer Eigenschaft `hitbox`. Bei jedem Aufruf von `getCollision()` können wir daher über den Getter von `GameObject` den aktuellen Wert von `hitbox` abrufen, statt einen Momentwert zu speichern, der beim Hinzufügen des Objekts zur Liste erfasst wurde.

```js
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
  { hitbox: { ...baseWallHitbox, top: canvas.height } },
];
```

Registrieren Sie direkt nach dem Erstellen des Schlägers auch `paddle`:

```js
colliders.push(paddle);
```

Ersetzen Sie als Nächstes die alte Funktion `handleWallCollisions()` durch die Funktion `moveBall()`. Sie koordiniert die Kollisionsbehandlung: Sie ruft wiederholt `getCollision()` auf und bewegt den Ball weiter, bis die angegebene Zeitspanne `dt` verstrichen ist. Dabei ermittelt sie jeweils das nächste Hindernis beziehungsweise die nächsten Hindernisse, mit denen der Ball kollidiert (`hit.time` ist am kleinsten), bewegt den Ball bis genau zum Kontaktpunkt, ruft die Kollisionsreaktionen auf und setzt die Bewegung für die verbleibende Zeit fort.

```js
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
```

> [!NOTE]
> Diese Schleife könnte innerhalb eines Frames sehr viele Kollisionen verarbeiten und dadurch Verzögerungen verursachen. Manchmal wird deshalb die Anzahl der Kollisionen pro Frame begrenzt und das verbleibende `dt` verworfen, sobald dieser Grenzwert erreicht ist. Dadurch kann das Spiel früher neu gezeichnet werden, allerdings bewegt sich das Objekt langsamer.

Ersetzen Sie in `update()` die Aufrufe von `ball.move()` und `handleWallCollisions()` durch einen Aufruf von `moveBall()`:

```js
const dt = lastTimestamp === null ? 0 : (timestamp - lastTimestamp) / 1000;
lastTimestamp = timestamp;
moveBall(dt);
```

Diese Berechnung setzt voraus, dass sich der Ball zu Beginn innerhalb des Canvas befindet, ohne ein Kollisionsobjekt zu überlappen, und dass die Kollisionsobjekte während jedes Aufrufs von `moveBall()` stillstehen.

## Den Schläger steuern

Das nächste Problem: Wir können den Schläger noch nicht bewegen. Dazu können wir die Zeigereingabe des Systems verwenden – je nach Plattform Maus oder Touch – und die Position des Schlägers an die Position des Zeigers anpassen.

```js
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
```

`clientX` des Zeigers wird relativ zum Viewport gemessen. Wir ziehen die linke Kante des Canvas ab und skalieren das Ergebnis auf die Zeichenkoordinaten des Canvas, da CSS das Canvas möglicherweise in einer anderen Größe darstellt. Anschließend aktualisieren wir `paddle.pos.x` und sorgen dabei dafür, dass der gesamte Schläger innerhalb des Canvas bleibt. Solange der Zeiger nicht bewegt wird, bleibt der Schläger an der im Konstruktor festgelegten mittigen Position. Die Größenprüfung ignoriert Eingaben, bevor das Schlägerbild geladen wurde.

Damit Sie den Schläger per Touch ziehen können, ohne dabei die Seite zu scrollen, fügen Sie der CSS-Regel für das Canvas folgende Deklaration hinzu:

```css
canvas {
  /* … */
  touch-action: none;
}
```

Falls Sie es noch nicht getan haben, laden Sie Ihre `index.html` neu und probieren Sie es aus!

## Den Ball positionieren

Der Schläger funktioniert nun wie erwartet. Platzieren wir also den Ball darauf. Sobald beide Grafiken geladen sind, können wir anhand ihrer Kollisionsboxen und Abmessungen die Unterkante des Balls an der Oberkante des Schlägers platzieren. Aktualisieren Sie die Klasse `Ball`:

```js
class Ball extends GameObject {
  pos = { x: undefined, y: undefined };
  vel = { x: 150, y: -150 };
  // …
}
```

Die horizontale Geschwindigkeit bleibt unverändert. Die vertikale Geschwindigkeit ändern wir von `150` auf `-150`, damit sich der Ball anfangs nach oben statt nach unten bewegt. Seine Position können wir nicht im Voraus bestimmen, denn dafür müssen wir ihn auf dem Schläger platzieren, dessen Grafik zunächst geladen werden muss. Ersetzen Sie den vorhandenen `Promise.all()`-Block durch Folgendes:

```js
Promise.all([ball, paddle].map((obj) => obj.preload())).then(() => {
  ball.pos.x = paddle.pos.x;
  ball.pos.y = paddle.hitbox.top - ball.size.h / 2;
  requestAnimationFrame(update);
});
```

Nun startet der Ball genau in der Mitte des Schlägers.

## Vergleichen Sie Ihren Code

So sollte Ihr Spiel bisher aussehen. Die folgende Version können Sie direkt ausprobieren. Um den Quellcode anzusehen, klicken Sie auf die Schaltfläche „Play“.

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
  { hitbox: { ...baseWallHitbox, top: canvas.height } },
];

class GameObject {
  asset;
  ctx;
  size = { w: undefined, h: undefined };
  pos = { x: 0, y: 0 };
  origin = { x: 0.5, y: 0.5 };
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

const ball = new Ball(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png",
  ctx,
);
const paddle = new Paddle(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/paddle.png",
  ctx,
);
colliders.push(paddle);

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

Promise.all([ball, paddle].map((obj) => obj.preload())).then(() => {
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
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Wir können den Schläger bewegen und den Ball von ihm abprallen lassen. Doch welchen Sinn hat das, wenn der Ball ohnehin von der Unterkante des Bildschirms abprallt? Als Nächstes führen wir die Möglichkeit ein, zu verlieren – auch bekannt als [Game-over-Logik](/de/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over")}}
