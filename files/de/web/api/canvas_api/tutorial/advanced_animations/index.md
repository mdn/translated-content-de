---
title: Erweiterte Animationen
slug: Web/API/Canvas_API/Tutorial/Advanced_animations
l10n:
  sourceCommit: 02724e050873ff160217f3980e6eb8c2d356fdc9
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}

Im letzten Kapitel haben wir einige [grundlegende Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) erstellt und Wege kennengelernt, um Dinge in Bewegung zu setzen. In diesem Teil werden wir uns die Bewegung selbst genauer anschauen und einige physikalische Effekte hinzufügen, um unsere Animationen zu erweitern.

## Zeichnen eines Balls

Wir werden einen Ball für unsere Animationsstudien verwenden, daher zeichnen wir diesen zunächst auf die Leinwand. Der folgende Code wird uns dabei unterstützen.

```html
<canvas id="canvas" width="600" height="300"></canvas>
```

Wie üblich benötigen wir zunächst einen Zeichenkontext. Um den Ball zu zeichnen, erstellen wir ein `ball`-Objekt, das Attribute und eine `draw()`-Methode enthält, um es auf die Leinwand zu malen.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const ball = {
  x: 100,
  y: 100,
  radius: 25,
  color: "blue",
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

ball.draw();
```

Nichts Besonderes hier, der Ball ist tatsächlich ein einfacher Kreis und wird mit Hilfe der {{domxref("CanvasRenderingContext2D.arc()", "arc()")}}-Methode gezeichnet.

## Hinzufügen von Geschwindigkeit

Nun, da wir einen Ball haben, sind wir bereit, eine grundlegende Animation hinzuzufügen, wie wir sie im [letzten Kapitel](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) dieses Tutorials gelernt haben. Wieder hilft uns {{domxref("window.requestAnimationFrame()")}}, die Animation zu steuern. Der Ball wird durch Hinzufügen eines Geschwindigkeitsvektors zur Position bewegt. Für jedes Frame löschen wir auch {{domxref("CanvasRenderingContext2D.clearRect", "clear", "", 1)}} die Leinwand, um alte Kreise von vorherigen Frames zu entfernen.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "blue",
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseover", (e) => {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", (e) => {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```

## Begrenzungen

Ohne jegliche Begrenzungskollisionsprüfung läuft unser Ball schnell aus der Leinwand heraus. Wir müssen prüfen, ob die `x`- und `y`-Position des Balls außerhalb der Leinwanddimensionen liegt und die Richtung der Geschwindigkeitsvektoren umkehren. Dazu fügen wir die folgenden Prüfungen zur `draw`-Methode hinzu:

```js
if (
  ball.y + ball.vy > canvas.height - ball.radius ||
  ball.y + ball.vy < ball.radius
) {
  ball.vy = -ball.vy;
}
if (
  ball.x + ball.vx > canvas.width - ball.radius ||
  ball.x + ball.vx < ball.radius
) {
  ball.vx = -ball.vx;
}
```

### Erste Demo

Schauen wir uns an, wie es bisher in Aktion aussieht.

#### HTML

```html
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "blue",
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (
    ball.y + ball.vy > canvas.height - ball.radius ||
    ball.y + ball.vy < ball.radius
  ) {
    ball.vy = -ball.vy;
  }
  if (
    ball.x + ball.vx > canvas.width - ball.radius ||
    ball.x + ball.vx < ball.radius
  ) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseover", (e) => {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", (e) => {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```

#### Ergebnis

Bewegen Sie Ihre Maus auf die Leinwand, um die Animation zu starten.

{{EmbedLiveSample("First_demo", "610", "340")}}

## Beschleunigung

Um die Bewegung realistischer zu gestalten, können Sie beispielsweise so mit der Geschwindigkeit spielen:

```js
ball.vy *= 0.99;
ball.vy += 0.25;
```

Dies verlangsamt die vertikale Geschwindigkeit jedes Frames, sodass der Ball am Ende nur auf dem Boden hüpfen wird.

### Zweite Demo

#### HTML

```html
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "blue",
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.vy *= 0.99;
  ball.vy += 0.25;

  if (
    ball.y + ball.vy > canvas.height - ball.radius ||
    ball.y + ball.vy < ball.radius
  ) {
    ball.vy = -ball.vy;
  }
  if (
    ball.x + ball.vx > canvas.width - ball.radius ||
    ball.x + ball.vx < ball.radius
  ) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseover", (e) => {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", (e) => {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```

#### Ergebnis

{{EmbedLiveSample("Second_demo", "610", "340")}}

## Nachlaufeffekt

Bis jetzt haben wir die {{domxref("CanvasRenderingContext2D.clearRect", "clearRect")}}-Methode verwendet, um vorherige Frames zu löschen. Wenn Sie diese Methode durch ein halbtransparentes {{domxref("CanvasRenderingContext2D.fillRect", "fillRect")}} ersetzen, können Sie leicht einen Nachlaufeffekt erzeugen.

```js
ctx.fillStyle = "rgb(255 255 255 / 30%)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

### Dritte Demo

#### HTML

```html
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "blue",
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.fillStyle = "rgb(255 255 255 / 30%)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.vy *= 0.99;
  ball.vy += 0.25;

  if (
    ball.y + ball.vy > canvas.height - ball.radius ||
    ball.y + ball.vy < ball.radius
  ) {
    ball.vy = -ball.vy;
  }
  if (
    ball.x + ball.vx > canvas.width - ball.radius ||
    ball.x + ball.vx < ball.radius
  ) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseover", (e) => {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", (e) => {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```

#### Ergebnis

{{EmbedLiveSample("Third_demo", "610", "340")}}

## Hinzufügen von Maussteuerung

Um etwas Kontrolle über den Ball zu erhalten, können wir ihn unserer Maus mit dem [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis folgen lassen. Das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis gibt den Ball wieder frei und lässt ihn erneut hüpfen.

### Vierte Demo

#### HTML

```html
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;
let running = false;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 1,
  radius: 25,
  color: "blue",
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function clear() {
  ctx.fillStyle = "rgb(255 255 255 / 30%)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  clear();
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (
    ball.y + ball.vy > canvas.height - ball.radius ||
    ball.y + ball.vy < ball.radius
  ) {
    ball.vy = -ball.vy;
  }
  if (
    ball.x + ball.vx > canvas.width - ball.radius ||
    ball.x + ball.vx < ball.radius
  ) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mousemove", (e) => {
  if (!running) {
    clear();
    ball.x = e.clientX;
    ball.y = e.clientY;
    ball.draw();
  }
});

canvas.addEventListener("click", (e) => {
  if (!running) {
    raf = window.requestAnimationFrame(draw);
    running = true;
  }
});

canvas.addEventListener("mouseout", (e) => {
  window.cancelAnimationFrame(raf);
  running = false;
});

ball.draw();
```

#### Ergebnis

Bewegen Sie den Ball mit Ihrer Maus und lassen Sie ihn mit einem Klick los.

{{EmbedLiveSample("Fourth_demo", "610", "340")}}

## Breakout

Dieses kurze Kapitel erklärt nur einige Techniken, um fortgeschrittenere Animationen zu erstellen. Es gibt noch viele mehr! Wie wäre es damit, ein Paddel hinzuzufügen, einige Ziegelsteine, und dieses Demo in ein [Breakout](https://en.wikipedia.org/wiki/Breakout_%28video_game%29)-Spiel zu verwandeln? Schauen Sie sich unseren [Spieleentwicklung](/de/docs/Games) Bereich für weitere Spiele-bezogene Artikel an.

## Siehe auch

- {{domxref("window.requestAnimationFrame()")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}
