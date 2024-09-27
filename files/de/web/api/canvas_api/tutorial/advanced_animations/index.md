---
title: Erweiterte Animationen
slug: Web/API/Canvas_API/Tutorial/Advanced_animations
l10n:
  sourceCommit: 02724e050873ff160217f3980e6eb8c2d356fdc9
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}

Im letzten Kapitel haben wir einige [einfache Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) erstellt und Möglichkeiten kennengelernt, um Objekte in Bewegung zu versetzen. In diesem Teil werden wir uns die Bewegung genauer ansehen und einige physikalische Aspekte hinzufügen, um unsere Animationen weiter zu entwickeln.

## Zeichnen eines Balls

Wir werden einen Ball für unsere Animationsstudien verwenden, daher lassen Sie uns diesen zuerst auf die Leinwand zeichnen. Der folgende Code bereitet uns darauf vor.

```html
<canvas id="canvas" width="600" height="300"></canvas>
```

Wie üblich benötigen wir zuerst einen Zeichenkontext. Um den Ball zu zeichnen, erstellen wir ein `ball`-Objekt, das Eigenschaften und eine `draw()`-Methode enthält, um ihn auf die Leinwand zu malen.

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

Nichts Besonderes hier, der Ball ist tatsächlich ein einfacher Kreis und wird mit der Hilfe der [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)-Methode gezeichnet.

## Hinzufügen von Geschwindigkeit

Jetzt, da wir einen Ball haben, sind wir bereit, eine einfache Animation hinzuzufügen, wie wir in dem [letzten Kapitel](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) dieses Tutorials gelernt haben. Wiederum hilft uns [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) bei der Steuerung der Animation. Der Ball wird bewegt, indem ein Geschwindigkeitsvektor zur Position hinzugefügt wird. Für jedes Bild {{domxref("CanvasRenderingContext2D.clearRect", "löschen", "", 1)}} wir auch die Leinwand, um alte Kreise aus vorherigen Bildern zu entfernen.

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

Ohne eine Kollisionsprüfung für die Begrenzungen läuft unser Ball schnell aus der Leinwand heraus. Wir müssen überprüfen, ob die `x`- und `y`-Position des Balls außerhalb der Leinwandabmessungen ist und die Richtung der Geschwindigkeitsvektoren umkehren. Dazu fügen wir die folgenden Überprüfungen zur `draw`-Methode hinzu:

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

Lassen Sie uns sehen, wie es bisher in Aktion aussieht.

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

Bewegen Sie Ihre Maus in die Leinwand, um die Animation zu starten.

{{EmbedLiveSample("First_demo", "610", "340")}}

## Beschleunigung

Um die Bewegung realistischer zu gestalten, können Sie mit der Geschwindigkeit wie folgt spielen:

```js
ball.vy *= 0.99;
ball.vy += 0.25;
```

Dies verlangsamt die vertikale Geschwindigkeit jedes Bildes, sodass der Ball am Ende einfach auf dem Boden hüpft.

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

## Schleifeffekt

Bis jetzt haben wir die Methode [`clearRect`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect) verwendet, um vorherige Bilder zu löschen. Wenn Sie diese Methode durch ein halbtransparentes [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) ersetzen, können Sie leicht einen Schleifeffekt erstellen.

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

## Maussteuerung hinzufügen

Um etwas Kontrolle über den Ball zu bekommen, können wir ihn beispielsweise unserem Mauszeiger folgen lassen, indem wir das [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis verwenden. Das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis lässt den Ball wieder los und er hüpft erneut.

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

Dieses kurze Kapitel erklärt nur einige Techniken, um fortgeschrittenere Animationen zu erstellen. Es gibt noch viele mehr! Wie wäre es, ein Paddle und einige Steine hinzuzufügen und diese Demo in ein [Breakout](https://en.wikipedia.org/wiki/Breakout_%28video_game%29)-Spiel zu verwandeln? Schauen Sie sich unseren [Spiel-Entwicklung](/de/docs/Games)-Bereich für weitere artikelbezogene Artikel an.

## Siehe auch

- [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}
