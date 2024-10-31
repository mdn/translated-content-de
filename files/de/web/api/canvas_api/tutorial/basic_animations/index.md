---
title: Grundlegende Animationen
slug: Web/API/Canvas_API/Tutorial/Basic_animations
l10n:
  sourceCommit: 217a5e09a120f8d8ae3de0505ab4d9de918126f7
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Compositing", "Web/API/Canvas_API/Tutorial/Advanced_animations")}}

Da wir JavaScript verwenden, um {{HTMLElement("canvas")}}-Elemente zu steuern, ist es auch sehr einfach, (interaktive) Animationen zu erstellen. In diesem Kapitel werden wir uns ansehen, wie man einige grundlegende Animationen macht.

Wahrscheinlich ist die größte Einschränkung, dass eine einmal gezeichnete Form so bleibt, wie sie ist. Wenn wir sie bewegen müssen, müssen wir sie und alles, was davor gezeichnet wurde, neu zeichnen. Es kostet viel Zeit, komplexe Bilder neu zu zeichnen, und die Leistung hängt stark von der Geschwindigkeit des Computers ab, auf dem es ausgeführt wird.

## Grundlegende Animationsschritte

Dies sind die Schritte, die Sie unternehmen müssen, um ein Bild zu zeichnen:

1. **Löschen der Leinwand**
   Sofern die zu zeichnenden Formen nicht die gesamte Leinwand ausfüllen (zum Beispiel ein Hintergrundbild), müssen Sie alle zuvor gezeichneten Formen löschen. Der einfachste Weg dies zu tun, ist die Verwendung der [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)-Methode.
2. **Speichern des Leinwandzustands**
   Wenn Sie irgendeine Einstellung ändern (wie Stile, Transformationen usw.), die den Zustand der Leinwand beeinflusst, und sicherstellen möchten, dass der Originalzustand jedes Mal verwendet wird, wenn ein Bild gezeichnet wird, müssen Sie diesen Originalzustand speichern.
3. **Zeichnen der animierten Formen**
   Der Schritt, in dem Sie die eigentliche Bilddarstellung machen.
4. **Wiederherstellen des Leinwandzustands**
   Wenn Sie den Zustand gespeichert haben, stellen Sie ihn wieder her, bevor Sie ein neues Bild zeichnen.

## Steuerung einer Animation

Formen werden auf die Leinwand gezeichnet, indem direkt die Canvas-Methoden aufgerufen oder benutzerdefinierte Funktionen aufgerufen werden. Unter normalen Umständen sehen wir diese Ergebnisse erst auf der Leinwand, wenn das Skript die Ausführung beendet hat. Beispielsweise ist es nicht möglich, eine Animation innerhalb einer `for`-Schleife zu machen.

Das bedeutet, dass wir einen Weg benötigen, um unsere Zeichenfunktionen über einen Zeitraum auszuführen. Es gibt zwei Möglichkeiten, eine solche Animation zu steuern.

### Geplante Aktualisierungen

Zunächst gibt es die Funktionen [`setInterval()`](/de/docs/Web/API/Window/setInterval), [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), mit denen eine bestimmte Funktion über einen festgelegten Zeitraum aufgerufen werden kann.

- [`setInterval()`](/de/docs/Web/API/Window/setInterval)
  - : Startet das wiederholte Ausführen der Funktion, die durch `function` angegeben ist, alle `delay` Millisekunden.
- [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)
  - : Führt die Funktion, die durch `function` angegeben ist, in `delay` Millisekunden aus.
- [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
  - : Teilt dem Browser mit, dass Sie eine Animation durchführen möchten, und fordert den Browser auf, eine angegebene Funktion zum Aktualisieren einer Animation vor dem nächsten Neuzeichnen aufzurufen.

Wenn Sie keine Benutzerinteraktion wünschen, können Sie die `setInterval()`-Funktion verwenden, die den bereitgestellten Code wiederholt ausführt. Wenn wir ein Spiel erstellen wollten, könnten wir Tastatur- oder Mausereignisse verwenden, um die Animation zu steuern und `setTimeout()` verwenden. Indem wir Listener mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einrichten, erfassen wir jede Benutzerinteraktion und führen unsere Animationsfunktionen aus.

> [!NOTE]
> In den untenstehenden Beispielen verwenden wir die [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Methode, um die Animation zu steuern. Die `requestAnimationFrame`-Methode bietet eine flüssigere und effizientere Möglichkeit zur Animation, indem der Animationsrahmen aufgerufen wird, wenn das System bereit ist, das Bild zu zeichnen. Die Anzahl der Rückaufrufe beträgt normalerweise 60 Mal pro Sekunde und kann auf eine niedrigere Rate reduziert werden, wenn sie in Hintergrund-Tabs ausgeführt wird. Für weitere Informationen über die Animationsschleife, insbesondere für Spiele, siehe den Artikel [Anatomie eines Videospiels](/de/docs/Games/Anatomy) in unserer [Spielentwicklungszone](/de/docs/Games).

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
const ctx = document.getElementById("canvas").getContext("2d");

function init() {
  sun.src = "canvas_sun.png";
  moon.src = "canvas_moon.png";
  earth.src = "canvas_earth.png";
  window.requestAnimationFrame(draw);
}

function draw() {
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

### Ergebnis

{{EmbedLiveSample("An_animated_solar_system", "310", "340")}}

## Eine animierte Uhr

Dieses Beispiel zeichnet eine animierte Uhr, die Ihre aktuelle Zeit anzeigt.

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

### Ergebnis

> [!NOTE]
> Obwohl die Uhr nur einmal pro Sekunde aktualisiert wird, wird das animierte Bild mit 60 Bildern pro Sekunde (oder mit der Bildwiederholrate Ihres Webbrowsers) aktualisiert.
> Um die Uhr mit einem schleichenden Sekundenzeiger anzuzeigen, ersetzen Sie die Definition von `const sec` oben durch die Version, die auskommentiert wurde.

{{EmbedLiveSample("An_animated_clock", "180", "200")}}

## Ein laufendes Panorama

In diesem Beispiel wird ein Panorama von links nach rechts gescrollt. Wir verwenden [ein Bild des Yosemite-Nationalparks](https://commons.wikimedia.org/wiki/File:Capitan_Meadows,_Yosemite_National_Park.jpg), das wir von Wikipedia entnommen haben, aber Sie könnten jedes Bild verwenden, das größer als die Leinwand ist.

### HTML

Das HTML enthält das {{HTMLElement("canvas")}}, auf dem das Bild gescrollt wird. Beachten Sie, dass die hier angegebene Breite und Höhe mit den Werten der `canvasXSize`- und `canvasYSize`-Variablen im JavaScript-Code übereinstimmen muss.

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

### Ergebnis

{{EmbedLiveSample("A_looping_panorama", "830", "250")}}

## Maus-folgende Animation

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

### Ergebnis

{{EmbedLiveSample("Mouse_following_animation", "500", "500")}}

## Andere Beispiele

- [Fortgeschrittene Animationen](/de/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
  - : Im nächsten Kapitel werden wir uns einige fortgeschrittene Animationstechniken und Physik ansehen.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Compositing", "Web/API/Canvas_API/Tutorial/Advanced_animations")}}
