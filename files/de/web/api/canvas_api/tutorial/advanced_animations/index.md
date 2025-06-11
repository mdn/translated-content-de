---
title: Fortgeschrittene Animationen
slug: Web/API/Canvas_API/Tutorial/Advanced_animations
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}

Im letzten Kapitel haben wir einige [einfache Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) erstellt und kennengelernt, wie man Dinge in Bewegung setzt. In diesem Teil nehmen wir die Bewegung selbst genauer unter die Lupe und fügen einigen physikalischen Eigenschaften hinzu, um unsere Animationen weiter zu verfeinern.

## Einen Ball zeichnen

Wir werden einen Ball für unsere Animationsexperimente verwenden, also lassen Sie uns diesen Ball zuerst auf die Leinwand zeichnen. Der folgende Code wird uns dabei einrichten.

```html
<canvas id="canvas" width="600" height="300"></canvas>
```

Wie gewohnt benötigen wir zuerst einen Zeichenkontext. Um den Ball zu zeichnen, erstellen wir ein `ball` Objekt, das Eigenschaften und eine `draw()` Methode enthält, um es auf die Leinwand zu malen.

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

Nichts Besonderes hier, der Ball ist eigentlich ein einfacher Kreis und wird mit Hilfe der [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) Methode gezeichnet.

## Geschwindigkeit hinzufügen

Jetzt, da wir einen Ball haben, können wir, wie im [letzten Kapitel](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) dieses Tutorials gelernt, eine einfache Animation hinzufügen. Wieder hilft uns [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) bei der Steuerung der Animation. Der Ball wird in Bewegung gesetzt, indem ein Geschwindigkeitsvektor zur Position hinzugefügt wird. Für jedes Frame [löschen](/de/docs/Web/API/CanvasRenderingContext2D/clearRect) wir zudem die Leinwand, um alte Kreise aus vorherigen Frames zu entfernen.

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

Ohne eine Begrenzungskollisionstestung verlässt unser Ball schnell die Leinwände. Wir müssen prüfen, ob die `x` und `y` Position des Balls außerhalb der Leinwanddimensionen liegt und die Richtung der Geschwindigkeitsvektoren umkehren. Dazu fügen wir die folgenden Überprüfungen zur `draw` Methode hinzu:

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

Schauen wir uns an, wie es in Aktion aussieht.

#### HTML

```html
<canvas id="canvas" width="600" height="300"></canvas>
```

```css hidden
#canvas {
  border: 1px solid black;
}
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

Bewegen Sie Ihre Maus in das Canvas, um die Animation zu starten.

{{EmbedLiveSample("First_demo", "610", "340")}}

## Beschleunigung

Um die Bewegung realer zu gestalten, können Sie beispielsweise folgenden Trick mit der Geschwindigkeit ausprobieren:

```js
ball.vy *= 0.99;
ball.vy += 0.25;
```

Dies verlangsamt die vertikale Geschwindigkeit bei jedem Frame, sodass der Ball am Ende nur noch auf dem Boden hüpft.

### Zweite Demo

#### HTML

```html
<canvas id="canvas" width="600" height="300"></canvas>
```

```css hidden
#canvas {
  border: 1px solid black;
}
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

## Nachzieheffekt

Bisher haben wir die [`clearRect`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect) Methode verwendet, um vorherige Frames zu löschen. Wenn Sie diese Methode durch ein halbtransparentes [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) ersetzen, können Sie leicht einen Nachzieheffekt erstellen.

```js
ctx.fillStyle = "rgb(255 255 255 / 30%)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

### Dritte Demo

#### HTML

```html
<canvas id="canvas" width="600" height="300"></canvas>
```

```css hidden
#canvas {
  border: 1px solid black;
}
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

## Maussteuerung hinzufügen

Um etwas Kontrolle über den Ball zu erhalten, können wir ihn z.B. unserer Maus durch das [`mousemove`](/de/docs/Web/API/Element/mousemove_event) Ereignis folgen lassen. Das [`click`](/de/docs/Web/API/Element/click_event) Ereignis gibt den Ball frei und lässt ihn wieder hüpfen.

### Vierte Demo

#### HTML

```html
<canvas id="canvas" width="600" height="300"></canvas>
```

```css hidden
#canvas {
  border: 1px solid black;
}
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

Dieses kurze Kapitel erklärt nur einige Techniken, um fortgeschrittenere Animationen zu erstellen. Es gibt noch viele weitere! Wie wäre es, ein Paddle und einige Ziegel hinzuzufügen und diese Demo in ein [Breakout](https://en.wikipedia.org/wiki/Breakout_%28video_game%29) Spiel zu verwandeln? Schauen Sie sich unseren [Spielentwicklung](/de/docs/Games) Bereich für weitere gamingbezogene Artikel an.

## Siehe auch

- [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}
