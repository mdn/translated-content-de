---
title: Grundlegende Animationen
slug: Web/API/Canvas_API/Tutorial/Basic_animations
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Compositing", "Web/API/Canvas_API/Tutorial/Advanced_animations")}}

Da wir JavaScript zur Steuerung von {{HTMLElement("canvas")}}-Elementen verwenden, ist es auch sehr einfach, (interaktive) Animationen zu erstellen. In diesem Kapitel werden wir uns ansehen, wie man einige grundlegende Animationen macht.

Wahrscheinlich die größte Einschränkung ist, dass eine einmal gezeichnete Form so bleibt. Wenn wir sie bewegen müssen, müssen wir sie und alles, was vorher gezeichnet wurde, neu zeichnen. Es dauert viel Zeit, komplexe Frames neu zu zeichnen, und die Leistung hängt stark von der Geschwindigkeit des Computers ab, auf dem sie läuft.

## Grundlegende Animationsschritte

Dies sind die Schritte, die Sie unternehmen müssen, um einen Frame zu zeichnen:

1. **Das Canvas löschen**
   Es sei denn, die Formen, die Sie zeichnen werden, füllen das gesamte Canvas (zum Beispiel ein Hintergrundbild), müssen Sie alle zuvor gezeichneten Formen löschen. Der einfachste Weg, dies zu tun, ist die Verwendung der [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)-Methode.
2. **Den Canvas-Zustand speichern**
   Wenn Sie Einstellungen (wie Stile, Transformationen usw.), die den Canvas-Zustand beeinflussen, ändern und sicherstellen möchten, dass der ursprüngliche Zustand jedes Mal verwendet wird, wenn ein Frame gezeichnet wird, müssen Sie diesen ursprünglichen Zustand speichern.
3. **Animierte Formen zeichnen**
   Der Schritt, in dem Sie das eigentliche Frame-Rendering durchführen.
4. **Den Canvas-Zustand wiederherstellen**
   Wenn Sie den Zustand gespeichert haben, stellen Sie ihn wieder her, bevor Sie einen neuen Frame zeichnen.

## Eine Animation steuern

Formen werden auf das Canvas gezeichnet, indem die Canvas-Methoden direkt oder durch Aufrufen benutzerdefinierter Funktionen verwendet werden. Unter normalen Umständen sehen wir diese Ergebnisse erst dann auf dem Canvas erscheinen, wenn das Skript die Ausführung beendet. Zum Beispiel ist es nicht möglich, eine Animation innerhalb einer `for`-Schleife zu erstellen.

Das bedeutet, dass wir einen Weg benötigen, um unsere Zeichnungsfunktionen über einen Zeitraum auszuführen. Es gibt zwei Möglichkeiten, eine Animation auf diese Weise zu steuern.

### Geplante Aktualisierungen

Zuerst gibt es die Funktionen [`setInterval()`](/de/docs/Web/API/Window/setInterval), [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), die verwendet werden können, um eine bestimmte Funktion über einen festgelegten Zeitraum aufzurufen.

- [`setInterval()`](/de/docs/Web/API/Window/setInterval)
  - : Beginnt mit der wiederholten Ausführung der durch `function` angegebenen Funktion alle `delay` Millisekunden.
- [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)
  - : Führt die durch `function` angegebene Funktion nach `delay` Millisekunden aus.
- [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
  - : Teilt dem Browser mit, dass Sie eine Animation durchführen möchten und fordert den Browser auf, eine bestimmte Funktion aufzurufen, um eine Animation vor dem nächsten Neuladen zu aktualisieren.

Wenn keine Benutzerinteraktion gewünscht ist, können Sie die `setInterval()`-Funktion verwenden, die den übergebenen Code wiederholt ausführt. Wenn wir ein Spiel erstellen wollten, könnten wir Tastatur- oder Mausereignisse verwenden, um die Animation zu steuern und `setTimeout()` verwenden. Indem wir Listener mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einrichten, erfassen wir alle Benutzerinteraktionen und führen unsere Animationsfunktionen aus.

> [!NOTE]
> In den unten stehenden Beispielen verwenden wir die [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Methode, um die Animation zu steuern. Die `requestAnimationFrame`-Methode bietet eine glattere und effizientere Art des Animierens, indem sie den Animationsrahmen aufruft, wenn das System bereit ist, den Rahmen zu malen. Die Anzahl der Rückrufe beträgt normalerweise 60 Mal pro Sekunde und kann in Hintergrund-Tabs auf eine geringere Rate reduziert werden. Weitere Informationen zur Animationsschleife, insbesondere für Spiele, finden Sie im Artikel [Anatomy of a video game](/de/docs/Games/Anatomy) in unserer [Spielentwicklungszone](/de/docs/Games).

## Ein animiertes Sonnensystem

Dieses Beispiel animiert ein kleines Modell unseres Sonnensystems.

### HTML

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

### JavaScript

```js
const sun = new Image();
const moon = new Image();
const earth = new Image();
function init() {
  sun.src = "canvas_sun.png";
  moon.src = "canvas_moon.png";
  earth.src = "canvas_earth.png";
  window.requestAnimationFrame(draw);
}

function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  ctx.globalCompositeOperation = "destination-over";
  ctx.clearRect(0, 0, 300, 300); // clear canvas

  ctx.fillStyle = "rgb(0 0 0 / 40%)";
  ctx.strokeStyle = "rgb(0 153 255 / 40%)";
  ctx.save();
  ctx.translate(150, 150);

  // Earth
  const time = new Date();
  ctx.rotate(
    ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds(),
  );
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 40, 24); // Shadow
  ctx.drawImage(earth, -12, -12);

  // Moon
  ctx.save();
  ctx.rotate(
    ((2 * Math.PI) / 6) * time.getSeconds() +
      ((2 * Math.PI) / 6000) * time.getMilliseconds(),
  );
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();

  ctx.drawImage(sun, 0, 0, 300, 300);

  window.requestAnimationFrame(draw);
}

init();
```

### Resultat

{{EmbedLiveSample("An_animated_solar_system", "310", "340")}}

## Eine animierte Uhr

Dieses Beispiel zeichnet eine animierte Uhr, die Ihre aktuelle Uhrzeit anzeigt.

### HTML

```html
<canvas id="canvas" width="150" height="150">The current time</canvas>
```

### JavaScript

```js
function clock() {
  const now = new Date();
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.save();
  ctx.clearRect(0, 0, 150, 150);
  ctx.translate(75, 75);
  ctx.scale(0.4, 0.4);
  ctx.rotate(-Math.PI / 2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";

  // Hour marks
  ctx.save();
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // Minute marks
  ctx.save();
  ctx.lineWidth = 5;
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  const sec = now.getSeconds();
  // To display a clock with a sweeping second hand, use:
  // const sec = now.getSeconds() + now.getMilliseconds() / 1000;
  const min = now.getMinutes();
  const hr = now.getHours() % 12;

  ctx.fillStyle = "black";

  // Write image description
  canvas.innerText = `The time is: ${hr}:${min}`;

  // Write Hours
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec,
  );
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // Write Minutes
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  // Write seconds
  ctx.save();
  ctx.rotate((sec * Math.PI) / 30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(83, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fillStyle = "rgb(0 0 0 / 0%)";
  ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = "#325FA2";
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.restore();

  window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);
```

### Resultat

> [!NOTE]
> Obwohl die Uhr nur einmal pro Sekunde aktualisiert wird, wird das animierte Bild mit 60 Bildern pro Sekunde (oder in der Bildwiederholrate Ihres Webbrowsers) aktualisiert.
> Um die Uhr mit einem gleitenden Sekundenzeiger anzuzeigen, ersetzen Sie die Definition von `const sec` oben durch diejenige, die auskommentiert wurde.

{{EmbedLiveSample("An_animated_clock", "180", "200")}}

## Ein sich wiederholendes Panorama

In diesem Beispiel wird ein Panorama von links nach rechts verschoben. Wir verwenden [ein Bild des Yosemite-Nationalparks](https://commons.wikimedia.org/wiki/File:Capitan_Meadows,_Yosemite_National_Park.jpg), das wir von Wikipedia genommen haben, aber Sie könnten jedes Bild verwenden, das größer als das Canvas ist.

### HTML

Das HTML enthält das {{HTMLElement("canvas")}}, in dem das Bild gescrollt wird. Beachten Sie, dass die hier angegebenen Breiten- und Höhenangaben mit den Werten der Variablen `canvasXSize` und `canvasYSize` im JavaScript-Code übereinstimmen müssen.

```html
<canvas id="canvas" width="800" height="200"
  >Yosemite National Park, meadow at the base of El Capitan</canvas
>
```

### JavaScript

```js
const img = new Image();

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.
img.src = "capitan_meadows_yosemite_national_park.jpg";
const canvasXSize = 800;
const canvasYSize = 200;
const speed = 30; // lower is faster
const scale = 1.05;
const y = -4.5; // vertical offset

// Main program
const dx = 0.75;
let imgW;
let imgH;
let x = 0;
let clearX;
let clearY;
let ctx;

img.onload = () => {
  imgW = img.width * scale;
  imgH = img.height * scale;

  if (imgW > canvasXSize) {
    // Image larger than canvas
    x = canvasXSize - imgW;
  }

  // Check if image dimension is larger than canvas
  clearX = Math.max(imgW, canvasXSize);
  clearY = Math.max(imgH, canvasYSize);

  // Get canvas context
  ctx = document.getElementById("canvas").getContext("2d");

  // Set refresh rate
  return setInterval(draw, speed);
};

function draw() {
  ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

  // If image is <= canvas size
  if (imgW <= canvasXSize) {
    // Reset, start from beginning
    if (x > canvasXSize) {
      x = -imgW + x;
    }

    // Draw additional image1
    if (x > 0) {
      ctx.drawImage(img, -imgW + x, y, imgW, imgH);
    }

    // Draw additional image2
    if (x - imgW > 0) {
      ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
    }
  } else {
    // Image is > canvas size
    // Reset, start from beginning
    if (x > canvasXSize) {
      x = canvasXSize - imgW;
    }

    // Draw additional image
    if (x > canvasXSize - imgW) {
      ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
    }
  }

  // Draw image
  ctx.drawImage(img, x, y, imgW, imgH);

  // Amount to move
  x += dx;
}
```

### Resultat

{{EmbedLiveSample("A_looping_panorama", "830", "250")}}

## Mausfolgende Animation

### HTML

```html
<canvas id="cw"
  >Animation creating multi-colored disappearing stream of light that follow the
  cursor as it moves over the image
</canvas>
```

### CSS

```css
#cw {
  position: fixed;
  z-index: -1;
}

body {
  margin: 0;
  padding: 0;
  background-color: rgb(0 0 0 / 5%);
}
```

### JavaScript

```js
const canvas = document.getElementById("cw");
const context = canvas.getContext("2d");
context.globalAlpha = 0.5;

const cursor = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

let particlesArray = [];

generateParticles(101);
setSize();
anim();

addEventListener("mousemove", (e) => {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
});

addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
    cursor.x = e.touches[0].clientX;
    cursor.y = e.touches[0].clientY;
  },
  { passive: false },
);

addEventListener("resize", () => setSize());

function generateParticles(amount) {
  for (let i = 0; i < amount; i++) {
    particlesArray[i] = new Particle(
      innerWidth / 2,
      innerHeight / 2,
      4,
      generateColor(),
      0.02,
    );
  }
}

function generateColor() {
  let hexSet = "0123456789ABCDEF";
  let finalHexString = "#";
  for (let i = 0; i < 6; i++) {
    finalHexString += hexSet[Math.ceil(Math.random() * 15)];
  }
  return finalHexString;
}

function setSize() {
  canvas.height = innerHeight;
  canvas.width = innerWidth;
}

function Particle(x, y, particleTrailWidth, strokeColor, rotateSpeed) {
  this.x = x;
  this.y = y;
  this.particleTrailWidth = particleTrailWidth;
  this.strokeColor = strokeColor;
  this.theta = Math.random() * Math.PI * 2;
  this.rotateSpeed = rotateSpeed;
  this.t = Math.random() * 150;

  this.rotate = () => {
    const ls = {
      x: this.x,
      y: this.y,
    };
    this.theta += this.rotateSpeed;
    this.x = cursor.x + Math.cos(this.theta) * this.t;
    this.y = cursor.y + Math.sin(this.theta) * this.t;
    context.beginPath();
    context.lineWidth = this.particleTrailWidth;
    context.strokeStyle = this.strokeColor;
    context.moveTo(ls.x, ls.y);
    context.lineTo(this.x, this.y);
    context.stroke();
  };
}

function anim() {
  requestAnimationFrame(anim);

  context.fillStyle = "rgb(0 0 0 / 5%)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  particlesArray.forEach((particle) => particle.rotate());
}
```

### Resultat

{{EmbedLiveSample("Mouse_following_animation", "500", "500")}}

## Weitere Beispiele

- [Erweiterte Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
  - : Im nächsten Kapitel werden wir einige fortgeschrittene Animationstechniken und Physik betrachten.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Compositing", "Web/API/Canvas_API/Tutorial/Advanced_animations")}}
