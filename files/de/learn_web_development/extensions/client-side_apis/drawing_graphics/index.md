---
title: Zeichnen von Grafiken
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: 9381ac06accc1f6340cda5c90cec69cc66f67136
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsfähige Grafikprogrammiertools, von der Sprache Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) bis hin zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in Canvas und weiterführende Ressourcen, um mehr zu lernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und grundlegende API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte und Anwendungsfälle, die durch die in dieser Lektion behandelten APIs ermöglicht werden.</li>
          <li>Grundsyntax und Verwendung von <code>&lt;canvas&gt;</code> und zugehörigen APIs.</li>
          <li>Verwendung von Timern und <code>requestAnimationFrame()</code>, um Animationsschleifen einzurichten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Das Web war ursprünglich nur Text, was sehr langweilig war, also wurden Bilder eingeführt — zuerst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Dies war jedoch immer noch nicht genug. Während Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden konnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) — da sie durch Markup dargestellt werden — gab es immer noch keine Möglichkeit, dasselbe für Bitmap-Bilder zu tun, und die verfügbaren Tools waren ziemlich begrenzt. Das Web hatte immer noch keine Möglichkeit, effektiv Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die üblicherweise von niedrigeren Programmiersprachen wie C++ oder Java gehandhabt werden.

Die Situation begann sich zu verbessern, als Browser begannen, das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) im Jahr 2004 zu unterstützen. Wie unten gezeigt wird, bietet Canvas einige nützliche Werkzeuge zur Erstellung von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere in Kombination mit einigen anderen APIs, die die Webplattform bietet, kann jedoch schwierig oder unmöglich zugänglich gemacht werden.

Das folgende Beispiel zeigt eine einfache 2D-Canvas-basierte Animation von springenden Bällen, die wir ursprünglich in unserem Modul [Einführung in JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) kennengelernt haben:

```html hidden live-sample___bouncing-balls
<h1>bouncing balls</h1>
<canvas></canvas>
```

```css hidden live-sample___bouncing-balls
html,
body {
  margin: 0;
}

html {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  height: 100%;
}

body {
  overflow: hidden;
  height: inherit;
}

h1 {
  font-size: 2rem;
  letter-spacing: -1px;
  position: absolute;
  margin: 0;
  top: -4px;
  right: 5px;

  color: transparent;
  text-shadow: 0 0 4px white;
}
```

```js hidden live-sample___bouncing-balls
// set up canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    if (this.x + this.size >= width) {
      this.velX = -Math.abs(this.velX);
    }

    if (this.x - this.size <= 0) {
      this.velX = Math.abs(this.velX);
    }

    if (this.y + this.size >= height) {
      this.velY = -Math.abs(this.velY);
    }

    if (this.y - this.size <= 0) {
      this.velY = Math.abs(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball)) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size,
  );

  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();
```

{{EmbedLiveSample("bouncing-balls", '100%', 500)}}

Rund um 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Dies wurde zu [WebGL](/de/docs/Web/API/WebGL_API), das unter Browseranbietern an Fahrt gewann und um 2009–2010 standardisiert wurde. WebGL erlaubt es Ihnen, echte 3D-Grafiken in Ihrem Webbrowser zu erstellen; das folgende Beispiel zeigt einen einfachen rotierenden WebGL-Würfel:

```html hidden live-sample___webgl-cube
<script src="https://cdn.jsdelivr.net/npm/three-js@79.0.0/three.min.js"></script>
```

```css hidden live-sample___webgl-cube
html,
body {
  margin: 0;
}

body {
  overflow: hidden;
}
```

```js hidden live-sample___webgl-cube
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let cube;

const loader = new THREE.TextureLoader();

loader.load(
  "https://mdn.github.io/shared-assets/images/examples/learn/metal003.png",
  (texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);

    const geometry = new THREE.BoxGeometry(2.4, 2.4, 2.4);
    const material = new THREE.MeshLambertMaterial({ map: texture });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    draw();
  },
);

const light = new THREE.AmbientLight("rgb(255,255,255)"); // soft white light
scene.add(light);

const spotLight = new THREE.SpotLight("rgb(255,255,255)");
spotLight.position.set(100, 1000, 1000);
spotLight.castShadow = true;
scene.add(spotLight);

function draw() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);

  requestAnimationFrame(draw);
}
```

{{EmbedLiveSample("webgl-cube", "100%", 500)}}

Dieser Artikel wird sich hauptsächlich auf 2D-Canvas konzentrieren, da roher WebGL-Code sehr komplex ist. Wir werden jedoch zeigen, wie man eine WebGL-Bibliothek verwendet, um eine 3D-Szene einfacher zu erstellen, und Sie können anderswo ein Tutorial finden, das rohes WebGL behandelt — siehe [Einstieg in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Einstieg mit einem `<canvas>`

Wenn Sie eine 2D- _oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-{{htmlelement("canvas")}}-Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Das Hinzufügen des Elements auf der Seite ist so einfach wie:

```html
<canvas width="320" height="240"></canvas>
```

Dies erstellt ein Canvas auf der Seite mit einer Größe von 320 x 240 Pixel.

Sie sollten einige Fallback-Inhalte innerhalb der `<canvas>`-Tags hinzufügen. Diese sollten den Canvas-Inhalt für Benutzer von Browsern beschreiben, die Canvas nicht unterstützen oder für Benutzer von Bildschirmlesern.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Der Fallback sollte nützliche alternative Inhalte zum Canvas-Inhalt bereitstellen. Wenn Sie beispielsweise ein sich ständig aktualisierendes Diagramm von Aktienkursen darstellen, könnten die Fallback-Inhalte ein statisches Bild des neuesten Aktiencharts sein, mit `alt`-Text, der beschreibt, welche Preise in Text angegeben sind, oder eine Liste von Links zu individuellen Aktienseiten.

> [!NOTE]
> Canvas-Inhalte sind für Bildschirmleser nicht zugänglich. Geben Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs direkt auf dem Canvas-Element selbst an oder fügen Sie Fallback-Inhalte hinzu, die innerhalb der öffnenden und schließenden `<canvas>`-Tags platziert sind. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte schon.

### Erstellen und Größeneinstellung unseres Canvas

Lassen Sie uns damit beginnen, unsere eigene Canvas-Vorlage zu erstellen, um zukünftige Experimente durchzuführen.

1. Erstellen Sie zuerst ein Verzeichnis auf Ihrer lokalen Festplatte mit dem Namen `canvas-template`.
2. Erstellen Sie eine neue Datei im Verzeichnis namens `index.html` und speichern Sie den folgenden Inhalt darin:

   ```html live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
   <!DOCTYPE html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Canvas</title>
       <script src="script.js" defer></script>
       <link href="style.css" rel="stylesheet" />
     </head>
     <body>
       <canvas class="myCanvas">
         <p>Add suitable fallback here.</p>
       </canvas>
     </body>
   </html>
   ```

3. Erstellen Sie eine neue Datei im Verzeichnis namens `style.css` und speichern Sie die folgende CSS-Regel darin:

   ```css live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
   body {
     margin: 0;
     overflow: hidden;
   }
   ```

4. Erstellen Sie eine neue Datei im Verzeichnis namens `script.js`. Lassen Sie diese Datei vorerst leer.

5. Öffnen Sie nun `script.js` und fügen Sie die folgenden Zeilen JavaScript hinzu:

   ```js
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz auf das Canvas im `canvas`-Konstanten gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas auf [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Ansichtsbreite gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas auf [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Ansichtshöhe gibt). Jetzt haben wir also ein Canvas, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden auch sehen, dass wir Zuweisungen mit mehreren Gleichheitszeichen verketten — das ist in JavaScript erlaubt, und es ist eine gute Technik, wenn Sie mehrere Variablen alle auf denselben Wert setzen möchten. Wir wollten, dass die Canvas-Breite und -Höhe in den Breite/Höhe-Variablen leicht zugänglich sind, da sie nützliche Werte sind, die später verfügbar sein sollten (zum Beispiel, wenn Sie etwas genau in der Mitte der Breite des Canvas zeichnen möchten).

> [!NOTE]
> Sie sollten die Größe des Canvas im Allgemeinen mit HTML-Attributen oder DOM-Eigenschaften festlegen, wie oben erklärt. Sie könnten CSS verwenden, aber das Problem ist dann, dass die Größenbestimmung erfolgt, nachdem das Canvas gerendert wurde, und genau wie jedes andere Bild könnte das Canvas verpixelt/gestaucht werden.

### Abrufen des Canvas-Kontexts und endgültiges Setup

Bevor wir unsere Canvas-Vorlage als fertig betrachten können, müssen wir noch eine letzte Sache tun. Um auf das Canvas zu zeichnen, müssen wir eine spezielle Referenz auf den Zeichenbereich erhalten, der als Kontext bezeichnet wird. Dies erfolgt mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die für die grundlegende Verwendung eine einzelne Zeichenfolge als Parameter nimmt, die den Typ des abzurufenden Kontexts darstellt.

In diesem Fall möchten wir ein 2D-Canvas, also fügen Sie die folgende JavaScript-Zeile unter den anderen in `script.js` hinzu:

```js
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextwerte, die Sie auswählen könnten, sind `webgl` für WebGL, `webgpu` für WebGPU usw., aber diese werden wir in diesem Artikel nicht brauchen.

Das war's — unser Canvas ist jetzt bereit zum Zeichnen! Die `ctx`-Variable enthält jetzt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Objekt, und alle Zeichenoperationen auf dem Canvas werden mit dieser Objektmanipulation durchgeführt.

Lassen Sie uns eine letzte Sache tun, bevor wir weitermachen. Wir werden den Canvas-Hintergrund schwarz färben, um Ihnen einen ersten Eindruck von der Canvas-API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript hinzu:

```js
ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mit der [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)-Eigenschaft des Canvas (dies nimmt [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) an, genau wie CSS-Eigenschaften), dann zeichnen wir ein Rechteck, das den gesamten Bereich des Canvas mit der [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)-Methode abdeckt (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, die Sie das Rechteck zeichnen möchten — wir haben Ihnen gesagt, dass diese `width`- und `height`-Variablen nützlich sein würden)!

OK, unsere Vorlage ist fertig und es ist Zeit weiterzumachen.

## 2D Canvas-Grundlagen

Wie wir oben gesagt haben, werden alle Zeichenoperationen durch Manipulation eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts (in unserem Fall `ctx`) durchgeführt. Viele Operationen müssen mit Koordinaten versehen werden, um genau zu bestimmen, wo etwas gezeichnet werden soll — die obere linke Ecke des Canvas ist Punkt (0, 0), die horizontale (x) Achse verläuft von links nach rechts, und die vertikale (y) Achse verläuft von oben nach unten.

![Rastergraphikpapier mit kleinen Quadraten, die den Bereich bedecken, mit einem stahlblauen Quadrat in der Mitte. Die obere linke Ecke des Canvas ist Punkt (0, 0) der Canvas-x-Achse und y-Achse. Die horizontale (x)-Achse verläuft von links nach rechts und gibt die Breite an, und die vertikale (y)-Achse verläuft von oben nach unten und gibt die Höhe an. Die obere linke Ecke des blauen Quadrats wird als ein Abstand von x-Einheiten von der y-Achse und y-Einheiten von der x-Achse dargestellt.](canvas_default_grid.png)

Das Zeichnen von Formen wird oft mit dem Rechteckformen-Primitive durchgeführt oder indem man eine Linie entlang eines bestimmten Pfades zeichnet und dann die Form füllt. Unten zeigen wir, wie beides geht.

### Einfache Rechtecke

Lassen Sie uns mit einigen einfachen Rechtecken beginnen.

1. Erstellen Sie zuerst eine Kopie Ihres neu codierten Canvas-Vorlagenverzeichnisses.
2. Fügen Sie die folgenden Zeilen am Ende Ihrer JavaScript-Datei hinzu:

   ```js
   ctx.fillStyle = "red";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie Ihr HTML im Browser laden, sollten Sie sehen, dass ein rotes Rechteck auf Ihrem Canvas erschienen ist. Seine obere linke Ecke befindet sich 50 Pixel von oben und links vom Rand des Canvas entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch die dritte und vierte Parameter definiert).

3. Fügen Sie ein weiteres Rechteck in die Mischung ein — dieses Mal ein grünes. Fügen Sie das folgende am Ende Ihrer JavaScript hinzu:

   ```js
   ctx.fillStyle = "green";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren, und Sie werden Ihr neues Rechteck sehen. Dies wirft einen wichtigen Punkt auf: Grafikoperationen wie das Zeichnen von Rechtecken, Linien usw. werden in der Reihenfolge ausgeführt, in der sie erscheinen. Denken Sie daran, dass es wie das Streichen einer Wand ist, bei der jede Farbschicht überlappt und möglicherweise das darunter verbirgt. Sie können nichts tun, um dies zu ändern, daher müssen Sie sorgfältig darüber nachdenken, in welcher Reihenfolge Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, z.B. durch die Verwendung von `rgb()`. Der "Alpha-Kanal" definiert, wie viel Transparenz die Farbe hat. Je höher der Wert, desto mehr wird es verdecken, was dahinter liegt. Fügen Sie das folgende zu Ihrem Code hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, einige weitere Rechtecke selbst zu zeichnen; haben Sie Spaß dabei!

### Striche und Linienbreiten

Bisher haben wir uns das Zeichnen von gefüllten Rechtecken angesehen, aber Sie können auch Rechtecke zeichnen, die nur Umrisse haben (in der Grafikgestaltung als **Striche** bezeichnet). Um die gewünschte Farbe für Ihren Strich festzulegen, verwenden Sie die [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)-Eigenschaft; das Zeichnen eines Strichrechtecks erfolgt mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Fügen Sie das folgende Beispiel, erneut unter den vorherigen JavaScript-Zeilen, hinzu:

   ```js
   ctx.strokeStyle = "rgb(255 255 255)";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Strichen beträgt 1 Pixel; Sie können den Wert der [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)-Eigenschaft ändern, um dies zu ändern (es nimmt eine Zahl, die die Anzahl der Pixel darstellt, die der Strich breit ist). Fügen Sie die folgende Zeile zwischen den vorherigen beiden Zeilen hinzu:

   ```js
   ctx.lineWidth = 5;
   ```

Jetzt sollten Sie sehen, dass Ihr weißer Umriss viel dicker geworden ist! Das war's vorerst. An diesem Punkt sollte Ihr Beispiel so aussehen:

```js hidden live-sample___2-canvas-rectangles
const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = "rgb(255,0,0)";
ctx.fillRect(50, 50, 100, 150);

ctx.fillStyle = "rgb(0,255,0)";
ctx.fillRect(75, 75, 100, 100);

ctx.fillStyle = "rgba(255,0,255,0.75)";
ctx.fillRect(25, 100, 175, 50);

ctx.strokeStyle = "rgb(255,255,255)";
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);
```

{{EmbedLiveSample("2-canvas-rectangles", '100%', 250)}}

Sie können den **Play**-Button drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Zeichnen von Pfaden

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Dies bedeutet im Wesentlichen, dass Sie Code schreiben müssen, um genau anzugeben, auf welchem Weg der Stift sich auf Ihrem Canvas bewegen soll, um die gewünschte Form zu zeichnen. Canvas enthält Funktionen zum Zeichnen von geraden Linien, Kreisen, Bézier-Kurven und mehr.

Beginnen Sie den Abschnitt, indem Sie eine frische Kopie Ihrer Canvas-Vorlage erstellen, in der Sie das neue Beispiel zeichnen.

Wir werden einige gemeinsame Methoden und Eigenschaften in allen folgenden Abschnitten verwenden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — beginnt einen Pfad zu zeichnen an dem Punkt, an dem sich der Stift aktuell auf dem Canvas befindet. Auf einem neuen Canvas beginnt der Stift bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — verschiebt den Stift zu einem anderen Punkt auf dem Canvas, ohne die Linie zu zeichnen oder zu verfolgen; der Stift "springt" zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — zeichnet eine gefüllte Form, indem der bisher verfolgte Pfad ausgefüllt wird.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — zeichnet eine Umrissform, indem ein Strich entlang des bisher gezeichneten Pfades gezeichnet wird.
- Sie können auch Eigenschaften wie `lineWidth` und `fillStyle`/`strokeStyle` sowohl für Pfade als auch für Rechtecke verwenden.

Eine typische, einfache Pfadzeichnungsoperation könnte so aussehen:

```js
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Zeichnen von Linien

Lassen Sie uns ein gleichseitiges Dreieck auf dem Canvas zeichnen.

1. Fügen Sie zuerst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Diese konvertiert Gradwerte in Bogenmaß, was nützlich ist, da wann immer Sie einen Winkelwert in JavaScript angeben müssen, er fast immer im Bogenmaß sein wird, während Menschen normalerweise in Grad denken.

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Starten Sie nun Ihren Pfad, indem Sie das folgende unter Ihrer vorherigen Hinzufügung hinzufügen; hier setzen wir eine Farbe für unser Dreieck, beginnen einen Pfad zu zeichnen, und bewegen dann den Stift zu (50, 50), ohne etwas zu zeichnen. Dort werden wir beginnen, unser Dreieck zu zeichnen.

   ```js
   ctx.fillStyle = "red";
   ctx.beginPath();
   ctx.moveTo(50, 50);
   ```

3. Fügen Sie nun die folgenden Zeilen am Ende Ihres Skripts hinzu:

   ```js
   ctx.lineTo(150, 50);
   const triHeight = 50 * Math.tan(degToRad(60));
   ctx.lineTo(100, 50 + triHeight);
   ctx.lineTo(50, 50);
   ctx.fill();
   ```

   Lassen Sie uns dies der Reihe nach durchgehen:

   Zuerst zeichnen wir eine Linie bis (150, 50) — unser Pfad verläuft jetzt 100 Pixel nach rechts entlang der x-Achse.

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks unter Verwendung einfacher Trigonometrie. Im Wesentlichen zeichnen wir das Dreieck nach unten gerichtet. Die Winkel in einem gleichseitigen Dreieck sind immer 60 Grad; um die Höhe zu berechnen, können wir es in der Mitte aufteilen und in zwei rechtwinklige Dreiecke aufteilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben. Was die Seiten betrifft:
   - Die längste Seite wird als **Hypotenuse** bezeichnet
   - Die Seite neben dem 60-Grad-Winkel wird als **Ankathete** bezeichnet — die wir mit 50 Pixeln kennen, da dies die Hälfte der Linie ist, die wir gerade gezeichnet haben.
   - Die Seite gegenüber dem 60-Grad-Winkel wird als **Gegenkathete** bezeichnet, die die Höhe des Dreiecks ist, das wir berechnen möchten.

   ![Ein gleichseitiges Dreieck, das nach unten zeigt, mit beschrifteten Winkeln und Seiten. Die horizontale Linie oben ist als "Ankathete" beschriftet. Eine senkrechte gestrichelte Linie, von der Mitte der Ankathete aus, als "Gegenkathete" bezeichnet, teilt das Dreieck und bildet zwei gleiche rechtwinklige Dreiecke. Die rechte Seite des Dreiecks wird als Hypotenuse bezeichnet, da es die Hypotenuse des gebildeten rechtwinkligen Dreiecks ist, während alle drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des rechtwinkligen Dreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass das Produkt der Länge der Ankathete mit dem Tangens des Winkels gleich der Gegenkathete ist, daher ergibt sich `50 * Math.tan(degToRad(60))`. Wir verwenden unsere `degToRad()`-Funktion, um 60 Grad in Bogenmaß umzuwandeln, da {{jsxref("Math.tan()")}} einen Eingabewert in Bogenmaß erwartet.

4. Mit der berechneten Höhe zeichnen wir eine weitere Linie zu `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss genau zwischen den vorher festgelegten zwei X-Werten liegen. Der Y-Wert hingegen muss 50 plus der Dreieckshöhe betragen, da wir wissen, dass die Spitze des Dreiecks 50 Pixel von der Oberseite des Canvas entfernt ist.
5. Die nächste Linie zeichnet eine Rückführungsline zurück zum Ausgangspunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form auszufüllen.

#### Zeichnen von Kreisen

Schauen wir uns jetzt an, wie man einen Kreis in Canvas zeichnet. Dies wird mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) erreicht, die einen ganzen oder einen Teil eines Kreises an einem angegebenen Punkt zeichnet.

1. Lassen Sie uns einen Bogen zu unserem Canvas hinzufügen — fügen Sie das folgende am Ende Ihres Codes hinzu:

   ```js
   ctx.fillStyle = "rgb(0 0 255)";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` nimmt sechs Parameter. Die ersten beiden geben die Position des Mittelpunkts des Bogens an (X und Y). Der dritte ist der Radius des Kreises, der vierte und fünfte sind die Start- und Endwinkel, bei denen der Kreis gezeichnet werden soll (das Angeben von 0 und 360 Grad ergibt also einen vollen Kreis), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn oder im Uhrzeigersinn gezeichnet werden soll (`false` bedeutet im Uhrzeigersinn).

   > [!NOTE]
   > 0 Grad ist horizontal nach rechts.

2. Lassen Sie uns einen weiteren Bogen hinzufügen:

   ```js
   ctx.fillStyle = "yellow";
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   Das Muster ist hier sehr ähnlich, aber mit zwei Unterschieden:
   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird. Das bedeutet, dass der Bogen zwar als Beginn bei -45 Grad und Ende bei 45 Grad angegeben ist, wir aber den Bogen über die 270 Grad herum anstelle innerhalb dieses Abschnitts zeichnen. Wenn Sie `true` durch `false` ersetzen und dann den Code erneut ausführen, würde nur das 90 Grad Stück des Kreises gezeichnet.
   - Bevor `fill()` aufgerufen wird, zeichnen wir eine Linie zum Mittelpunkt des Kreises. Das bedeutet, dass der Pac-Man-Stil Ausschnitt gerendert wird. Wenn Sie diese Linie entfernt haben (versuchen Sie es!), erhalten Sie nur einen Teil des Kreises herausgeschnitten.

Das war's vorerst; Ihr finales Beispiel sollte so aussehen:

```js hidden live-sample___3_canvas_paths
const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0, 0, width, height);

function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

ctx.fillStyle = "rgb(255,0,0)";
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
const triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 50 + triHeight);
ctx.lineTo(50, 50);
ctx.fill();

ctx.fillStyle = "rgb(0,0,255)";
ctx.beginPath();
ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill();

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
ctx.lineTo(200, 106);
ctx.fill();
```

{{EmbedLiveSample("3_canvas_paths", '100%', 200)}}

Sie können den **Play**-Button drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

> [!NOTE]
> Um mehr über fortgeschrittene Pfadzeichnungsfunktionen wie Bézier-Kurven zu erfahren, schauen Sie sich unser [Zeichnen von Formen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)-Tutorial an.

### Text

Canvas hat auch Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz erkunden. Starten Sie mit einer weiteren frischen Kopie Ihrer Canvas-Vorlage, in der Sie das neue Beispiel zeichnen.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnet Text als Umriss (Strich).

Beide nehmen in ihrer einfachen Verwendung drei Eigenschaften an: den zu zeichnenden Textstring und die X- und Y-Koordinaten des Punktes, an dem der Text beginnen soll. Dies entspricht der **unteren linken** Ecke der **Textbox** (wörtlich, der Box, die den von Ihnen gezeichneten Text umgibt), was Sie verwirren könnte, da andere Zeichenoperationen oft von der oberen linken Ecke aus gehen — behalten Sie dies im Hinterkopf.

Es gibt auch eine Reihe von Eigenschaften, um die Textrendering zu steuern, wie [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), mit dem Sie Schriftfamilie, Größe usw. angeben können. Es nimmt als Wert dieselbe Syntax wie die CSS-{{cssxref("font")}}-Eigenschaft an.

Canvas-Inhalte sind für Bildschirmleser nicht zugänglich. Text, der auf das Canvas gezeichnet wird, ist nicht im DOM verfügbar, muss jedoch zugänglich gemacht werden. In diesem Beispiel geben wir den Text als Wert für `aria-label` an.

Versuchen Sie, den folgenden Block am Ende Ihres JavaScript hinzuzufügen:

```js
ctx.strokeStyle = "white";
ctx.lineWidth = 1;
ctx.font = "36px arial";
ctx.strokeText("Canvas text", 50, 50);

ctx.fillStyle = "red";
ctx.font = "48px georgia";
ctx.fillText("Canvas text", 50, 150);

canvas.setAttribute("aria-label", "Canvas text");
```

Hier zeichnen wir zwei Textzeilen, eine als Füllung und die andere als Strich. Das Beispiel sollte so aussehen:

```js hidden live-sample___4-canvas-text
const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0, 0, width, height);

ctx.strokeStyle = "white";
ctx.lineWidth = 1;
ctx.font = "36px arial";
ctx.strokeText("Canvas text", 50, 50);

ctx.fillStyle = "red";
ctx.font = "48px georgia";
ctx.fillText("Canvas text", 50, 150);

canvas.setAttribute("aria-label", "Canvas text");
```

{{EmbedLiveSample("4-canvas-text", '100%', 180)}}

Drücken Sie den **Play**-Button, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Experimentieren Sie und sehen Sie, was Sie sich einfallen lassen können! Weitere Informationen zu den verfügbaren Optionen für Canvas-Text finden Sie unter [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Bilder auf Canvas zeichnen

Es ist möglich, externe Bilder auf Ihrer Canvas darzustellen. Diese können einfache Bilder, Frames von Videos oder Inhalte anderer Canvas sein. Momentan betrachten wir nur den Fall, einige einfache Bilder auf unserem Canvas zu verwenden.

1. Machen Sie wie zuvor eine weitere frische Kopie Ihrer Canvas-Vorlage, in der Sie das neue Beispiel zeichnen.

   Bilder werden mit der [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)-Methode auf das Canvas gezeichnet. Die einfachste Version nimmt drei Parameter an — eine Referenz auf das Bild, das Sie rendern möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Lassen Sie uns damit beginnen, eine Bildquelle einzubinden. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript hinzu:

   ```js
   const image = new Image();
   image.src =
     "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt mit dem [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor. Das zurückgegebene Objekt ist vom selben Typ wie das, was Sie erhalten, wenn Sie eine Referenz auf ein bestehendes {{htmlelement("img")}}-Element ergreifen. Wir setzen dann sein [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut gleich unserem Firefox-Logo-Bild. Zu diesem Zeitpunkt beginnt der Browser, das Bild zu laden.

3. Wir könnten jetzt versuchen, das Bild mit `drawImage()` einzubinden, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, da der Code sonst fehlschlagen könnte. Dies können wir mit dem `load`-Ereignis erreichen, das nur ausgelöst wird, wenn das Bild vollständig geladen ist. Fügen Sie den folgenden Block unter den vorherigen hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie das Bild im Canvas eingebettet sehen, obwohl ziemlich groß.

4. Doch es gibt mehr! Was, wenn wir nur einen Teil des Bildes anzeigen oder es skalieren möchten? Beides können wir mit der komplexeren Version von `drawImage()` tun. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile wie folgt:

   ```js
   ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185);
   ```

   - Der erste Parameter ist die Bildreferenz, wie zuvor.
   - Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links vom ersten Parameter oder oberhalb des zweiten wird gezeichnet.
   - Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem ursprünglichen Bild ausschneiden möchten.
   - Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Bereichs des Bildes zeichnen möchten, relativ zur oberen linken Ecke des Canvas.
   - Parameter 8 und 9 definieren die Breite und Höhe zum Zeichnen des ausgeschnittenen Bereichs des Bildes. In diesem Fall haben wir dieselben Maße wie der ursprüngliche Abschnitt angegeben, aber Sie könnten es durch Angabe unterschiedlicher Werte skalieren.

5. Wenn das Bild sinnvoll aktualisiert wird, muss auch die {{Glossary("accessible_description", "barrierefreie Beschreibung")}} aktualisiert werden.

   ```js
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das finale Beispiel sollte so aussehen:

```js hidden live-sample___5-canvas-images
const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0, 0, width, height);

const image = new Image();
image.src =
  "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png";
image.addEventListener("load", () =>
  ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185),
);

canvas.setAttribute("aria-label", "Firefox Logo");
```

{{EmbedLiveSample("5-canvas-images", '100%', 260)}}

Drücken Sie den **Play**-Button, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

## Schleifen und Animationen

Wir haben bisher einige sehr grundlegende Verwendungen von 2D-Canvas behandelt, aber wirklich werden Sie die volle Leistung von Canvas nur erleben, wenn Sie es auf irgendeine Weise aktualisieren oder animieren. Schließlich liefert Canvas skriptfähige Bilder! Wenn Sie nichts ändern, könnten Sie genauso gut statische Bilder verwenden und sich die ganze Arbeit sparen.

### Eine Schleife erstellen

Das Spielen mit Schleifen in Canvas macht Spaß — Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)- (oder einer anderen Art von) Schleife ausführen wie bei jedem anderen JavaScript-Code.

Lassen Sie uns ein Beispiel erstellen.

1. Machen Sie eine weitere frische Kopie Ihrer Canvas-Vorlage.
2. Fügen Sie die folgende Zeile am Ende Ihres JavaScript hinzu. Diese enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas bewegt:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

   Dadurch wird der Koordinatenursprung (0, 0) in die Mitte des Canvas verlagert, anstatt in der oberen linken Ecke zu verbleiben. Dies ist in vielen Situationen sehr nützlich, wie in dieser, wo wir unser Design relativ zur Mitte des Canvas zeichnen wollen.

3. Fügen Sie nun den folgenden Code am Ende des JavaScript hinzu:

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }

   function rand(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   let length = 250;
   let moveOffset = 20;

   for (let i = 0; i < length; i++) {}
   ```

   Hier implementieren wir dieselbe `degToRad()`-Funktion, die wir im vorhergehenden Dreieck-Beispiel gesehen haben, eine `rand()`-Funktion, die eine Zufallszahl zwischen gegebenen unteren und oberen Grenzen zurückgibt, `length` und `moveOffset` Variablen (die wir später noch besser kennen), und eine leere `for`-Schleife.

4. Die Idee ist, dass wir etwas auf dem Canvas innerhalb der `for`-Schleife zeichnen und es jedes Mal iterieren, sodass wir etwas Interessantes kreieren können. Fügen Sie den folgenden Code innerhalb Ihrer `for`-Schleife hinzu:

   ```js
   ctx.fillStyle = `rgb(${255 - length} 0 ${255 - length} / 90%)`;
   ctx.beginPath();
   ctx.moveTo(moveOffset, moveOffset);
   ctx.lineTo(moveOffset + length, moveOffset);
   const triHeight = (length / 2) * Math.tan(degToRad(60));
   ctx.lineTo(moveOffset + length / 2, moveOffset + triHeight);
   ctx.lineTo(moveOffset, moveOffset);
   ctx.fill();

   length--;
   moveOffset += 0.7;
   ctx.rotate(degToRad(5));
   ```

   Auf jeder Iteration:
   - Setzen wir den `fillStyle` auf einen Hauch von leicht transparentem Violett, der sich jedes Mal basierend auf dem `length`-Wert ändert. Wie Sie später sehen werden, verringert sich die Länge jedes Mal, wenn die Schleife ausgeführt wird, sodass hier der Effekt entsteht, dass die Farbe bei jedem gezeichneten Dreieck heller wird.
   - Beginnen wir den Pfad.
   - Bewegen wir den Stift zu einer Koordinate von `(moveOffset, moveOffset)`; Diese Variable definiert, wie weit wir uns jedes Mal bewegen möchten, wenn wir ein neues Dreieck zeichnen.
   - Zeichnen wir eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Dies zeichnet eine Linie der Länge `length` parallel zur X-Achse.
   - Berechnen wir die Höhe des Dreiecks, wie oben.
   - Zeichnen wir eine Linie zur nach unten zeigenden Ecke des Dreiecks, dann zeichnen wir eine Linie zurück zum Anfang des Dreiecks.
   - Rufen wir `fill()` auf, um das Dreieck auszufüllen.
   - Aktualisieren wir die Variablen, die die Sequenz der Dreiecke beschreiben, sodass wir bereit sind, das nächste zu zeichnen. Wir verringern den `length`-Wert um 1, sodass die Dreiecke jedes Mal kleiner werden; erhöhen `moveOffset` um einen kleinen Betrag, sodass jedes aufeinanderfolgende Dreieck etwas weiter entfernt ist, und verwenden eine andere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), die es uns ermöglicht, das ganze Canvas zu drehen! Wir drehen es um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das war's! Das finale Beispiel sollte so aussehen:

```js hidden live-sample___6-canvas-for-loop
const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0, 0, width, height);

ctx.translate(width / 2, height / 2);

function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let length = 250;
let moveOffset = 20;

for (let i = 0; i < length; i++) {
  ctx.fillStyle = `rgba(${255 - length},0,${255 - length},0.9)`;
  ctx.beginPath();
  ctx.moveTo(moveOffset, moveOffset);
  ctx.lineTo(moveOffset + length, moveOffset);
  const triHeight = (length / 2) * Math.tan(degToRad(60));
  ctx.lineTo(moveOffset + length / 2, moveOffset + triHeight);
  ctx.lineTo(moveOffset, moveOffset);
  ctx.fill();

  length--;
  moveOffset += 0.7;
  ctx.rotate(degToRad(5));
}
```

{{EmbedLiveSample("6-canvas-for-loop", '100%', 550)}}

Drücken Sie den **Play**-Button, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Wir ermutigen Sie, das Beispiel zu erkunden und es Ihre eigene Kreation werden zu lassen! Beispielsweise:

- Zeichnen Sie Rechtecke oder Bögen statt Dreiecken oder betten Sie sogar Bilder ein.
- Spielen Sie mit den `length`- und `moveOffset`-Werten.
- Führen Sie einige Zufallszahlen unter Verwendung der `rand()`-Funktion ein, die wir oben aufgenommen haben, aber nicht verwendet haben.

### Animationen

Das Schleifenbeispiel, das wir oben erstellt haben, war unterhaltsam, aber wirklich benötigen Sie eine konstante Schleife, die immer weiterläuft und weiterläuft für jede ernsthafte Canvas-Anwendung (wie Spiele und Echtzeitvisualisierungen). Wenn Sie Ihr Canvas als eine Art Film betrachten, möchten Sie wirklich, dass die Anzeige bei jedem Frame aktualisiert wird, um die aktualisierte Ansicht zu zeigen, mit einer idealen Bildwiederholrate von 60 Frames pro Sekunde, damit die Bewegung schön fließend für das menschliche Auge erscheint.

Es gibt einige JavaScript-Funktionen, mit denen Sie Funktionen mehrmals pro Sekunde wiederholt ausführen können. Die beste für unsere Zwecke hier ist [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Sie nimmt einen Parameter — den Namen der Funktion, die Sie für jeden Frame erneut ausführen möchten. Das nächste Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion das neue Update Ihrer Animation zeichnet und dann `requestAnimationFrame()` erneut direkt vor dem Ende der Funktion aufruft, läuft die Animationsschleife weiter. Die Schleife endet, wenn Sie aufhören, `requestAnimationFrame()` aufzurufen oder falls Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) nach `requestAnimationFrame()` aufrufen, aber bevor der Frame ausgeführt wird.

> [!NOTE]
> Es ist eine gute Praxis, `cancelAnimationFrame()` von Ihrem Hauptcode aus aufzurufen, wenn Sie mit der Animation fertig sind, um sicherzustellen, dass keine Updates noch auf die Ausführung warten.

Der Browser kümmert sich um komplexe Details wie die Animation bei konstanter Geschwindigkeit auszuführen und keine Ressourcen für die Animation von Dingen zu verschwenden, die nicht gesehen werden können.

Um zu sehen, wie es funktioniert, werfen wir kurz einen Blick auf unser [Bouncing Balls Beispiel](#frame_bouncing-balls). Der Code für die Schleife, die alles in Bewegung hält, sieht so aus:

```js
function loop() {
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();
```

Wir führen die Funktion `loop()` einmal am Ende des Codes aus, um den Kreislauf zu starten und den ersten Animationsrahmen zu zeichnen; die Funktion `loop()` übernimmt dann die Verantwortung `requestAnimationFrame(loop)` aufzurufen, um den nächsten Frame der Animation erneut und erneut auszuführen.

Beachten Sie, dass wir bei jedem Frame das gesamte Canvas vollständig löschen und alles neu zeichnen. Für jeden vorhandenen Ball zeichnen wir ihn, aktualisieren seine Position und prüfen, ob er mit anderen Bällen zusammenstößt. Sobald Sie eine Grafik auf ein Canvas gezeichnet haben, gibt es keine Möglichkeit, diese Grafik individuell zu manipulieren, wie es bei DOM-Elementen möglich ist. Sie können jeden Ball nicht auf dem Canvas verschieben, denn sobald er gezeichnet wurde, ist er Teil des Canvas und kein einzelnes zugängliches Element oder Objekt mehr. Stattdessen müssen Sie löschen und neu zeichnen, entweder indem Sie den gesamten Frame löschen und alles neu zeichnen oder indem Sie Code haben, der genau weiß, welche Teile gelöscht werden müssen und nur das notwendige minimalste Bereich des Canvas löscht und neu zeichnet.

Die Optimierung der Grafik-Animation ist eine ganze Programmier-Spezialität mit vielen cleveren Techniken. Diese gehen jedoch über das hinaus, was wir für unser Beispiel benötigen!

Im Allgemeinen beinhaltet der Prozess des Erstellens einer Canvas-Animation die folgenden Schritte:

1. Löschen Sie den Canvas-Inhalt (z.B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Speichern Sie den Zustand (falls erforderlich) mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) — dies ist erforderlich, wenn Sie Einstellungen speichern möchten, die Sie auf dem Canvas geändert haben, bevor Sie fortfahren, was für fortgeschrittenere Anwendungen nützlich ist.
3. Zeichnen Sie die Grafiken, die Sie animieren.
4. Stellen Sie die Einstellungen wieder her, die Sie in Schritt 2 gespeichert haben, mit [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
5. Rufen Sie `requestAnimationFrame()` auf, um das Zeichnen des nächsten Animationsrahmens festzulegen.

> [!NOTE]
> Wir werden hier nicht `save()` und `restore()` behandeln, aber sie sind sehr gut in unserem Tutorial zu [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations) (und den darauf folgenden) erklärt.

### Eine einfache Charakter-Animation

Jetzt erstellen wir unsere eigene einfache Animation — wir lassen einen Charakter eines bestimmten ziemlich großartigen Retro-Computerspiels über den Bildschirm laufen.

1. Machen Sie eine weitere frische Kopie unserer Canvas-Vorlage und öffnen Sie sie in Ihrem Code-Editor.

2. Aktualisieren Sie das Fallback-HTML, um das Bild zu reflektieren:

   ```html
   <canvas class="myCanvas">
     <p>A man walking.</p>
   </canvas>
   ```

3. Fügen Sie am Ende des JavaScript die folgende Zeile erneut hinzu, um den Koordinatenursprung in die Mitte des Canvas zu setzen:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

4. Erstellen Sie nun ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, setzen Sie dessen [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf das Bild, das wir laden möchten, und fügen Sie einen `onload`-Ereignis-Handler hinzu, der die `draw()`-Funktion auslöst, wenn das Bild geladen ist:

   ```js
   const image = new Image();
   image.src =
     "https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation/walk-right.png";
   image.onload = draw;
   ```

5. Fügen Sie nun einige Variablen hinzu, um die Position zu verfolgen, an der das Sprite auf dem Bildschirm gezeichnet werden soll, und die Spritenummer, die wir anzeigen möchten.

   ```js
   let sprite = 0;
   let posX = 0;
   ```

   Erklären wir das Spritesheet-Bild (das wir höflich von Mike Thomas' [Walking cycle using CSS animation](https://codepen.io/mikethomas/pen/kQjKLW) CodePen geliehen haben). Das Bild sieht so aus:

   ![Ein Spritesheet mit sechs Sprites von einem pixeligen Charakter, der einem laufenden menschlichen aus der rechten Seite ähnlich sieht, in verschiedenen Phasen eines einzelnen Schrittes vorwärts. Der Charakter hat ein weißes Hemd mit blauem Knopf, schwarze Hose und schwarze Schuhe. Jedes Sprite ist 102 Pixel breit und 148 Pixel hoch.](walk-right.png)

   Es enthält sechs Sprites, die den gesamten Gehzyklus ausmachen — jedes ist 102 Pixel breit und 148 Pixel hoch. Um jedes Sprite sauber anzeigen zu können, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild aus dem Spritesheet herauszuschneiden und nur diesen Teil anzuzeigen, wie wir es oben mit dem Firefox-Logo gemacht haben. Die X-Koordinate der Ausschnitt muss ein Vielfaches von 102 sein, und die Y-Koordinate wird immer 0 sein. Die Größe des Ausschnitts beträgt immer 102 x 148 Pixel.

6. Fügen wir nun eine leere `draw()`-Funktion am Ende des Codes hinzu, die bereit ist, mit etwas Code gefüllt zu werden:

   ```js
   function draw() {}
   ```

7. Der restliche Code in diesem Abschnitt geht in `draw()`. Zuerst fügen wir die folgende Zeile hinzu, die das Canvas löscht, um jeden Frame für das Zeichnen vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width/2), -(height/2)` angeben müssen, da wir die Ursprungspostion als `width/2, height/2` früher festgelegt haben.

   ```js
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

8. Dann zeichnen wir unser Bild mit `drawImage()`, der Version mit 9 Parametern. Fügen Sie das folgende hinzu:

   ```js
   ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);
   ```

   Wie Sie sehen können:
   - Wir geben `image` als das Bild zum Einfügen an.
   - Parameter 2 und 3 geben die obere linke Ecke des Ausschnitts zum Herausschneiden aus dem Quellbild an, mit dem X-Wert als `sprite` multipliziert mit 102 (wobei `sprite` die Spritenummer zwischen 0 und 5 ist) und der Y-Wert immer 0.
   - Parameter 4 und 5 geben die Größe des Ausschnitts an — 102 x 148 Pixel.
   - Parameter 6 und 7 geben die obere linke Ecke der Box an, in der der Ausschnitt auf das Canvas gezeichnet werden soll — die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichnungsposition ändern können, indem wir den Wert `posX` ändern.
   - Parameter 8 und 9 geben die Größe des Bildes auf dem Canvas an. Wir möchten seine Originalgröße beibehalten, deshalb geben wir 102 und 148 als Breite und Höhe an.

9. Ändern wir nun den `sprite`-Wert nach jedem Zeichnen — oder zumindest nach einigen von ihnen. Fügen Sie den folgenden Block an das Ende der `draw()`-Funktion hinzu:

   ```js
   if (posX % 13 === 0) {
     if (sprite === 5) {
       sprite = 0;
     } else {
       sprite++;
     }
   }
   ```

   Wir verwenden das Ganze innerhalb von `if (posX % 13 === 0) { }`. Wir verwenden den Modulo-Operator (`%`) (auch bekannt als [Remainder-Operator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu überprüfen, ob der `posX`-Wert genau durch 13 teilbar ist, ohne einen Rest zu haben. Wenn dies der Fall ist, fahren wir mit dem nächsten Sprite fort, indem wir `sprite` inkrementieren (nachfolgend auf 0, nachdem wir mit Sprite #5 fertig sind). Dies bedeutet im Wesentlichen, dass wir das Sprite effektiv jedes 13. Frame ändern, oder ungefähr 5 Frames pro Sekunde (`requestAnimationFrame()` ruft uns bis zu 60 Frames pro Sekunde auf, wenn möglich). Wir reduzieren bewusst die Bildrate, da wir nur sechs Sprites zur Verfügung haben, und wenn wir jedes 60stel einer Sekunde eines anzeigen, wird sich unser Charakter viel zu schnell bewegen!

   Im inneren Block verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob der `sprite`-Wert auf 5 (das letzte Sprite, da die Spritenummern von 0 bis 5 laufen). Wenn wir bereits das letzte Sprite anzeigen, setzen wir `sprite` zurück auf 0; andernfalls inkrementieren wir es einfach um 1.

10. Als nächstes müssen wir herausfinden, wie der `posX`-Wert bei jedem Frame geändert werden soll — fügen Sie den folgenden Codeblock direkt unter dem letzten hinzu.

    ```js
    if (posX > width / 2) {
      let newStartPos = -(width / 2 + 102);
      posX = Math.ceil(newStartPos);
      console.log(posX);
    } else {
      posX += 2;
    }
    ```

    Wir verwenden eine weitere `if...else`-Anweisung, um festzustellen, ob der Wert von `posX` größer als `width/2` geworden ist, was bedeutet, dass unser Charakter über den rechten Rand des Bildschirms gelaufen ist. Wenn dies der Fall ist, berechnen wir eine Position, die den Charakter knapp links vom linken Rand des Bildschirms platzieren würde.

    Wenn unser Charakter noch nicht vom Rand des Bildschirms gelaufen ist, inkrementieren wir `posX` um 2. So wird er beim nächsten Zeichnen ein wenig weiter nach rechts bewegen.

11. Schließlich müssen wir die Animationsschleife erstellen, indem wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()`-Funktion aufrufen:

    ```js
    window.requestAnimationFrame(draw);
    ```

Das war's! Das finale Beispiel sollte so aussehen:

```js hidden live-sample___7-canvas-walking-animation
const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0, 0, width, height);

ctx.translate(width / 2, height / 2);

const image = new Image();
image.src =
  "https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation/walk-right.png";
image.onload = draw;

let sprite = 0;
let posX = 0;

function draw() {
  ctx.fillRect(-(width / 2), -(height / 2), width, height);
  ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);

  if (posX % 13 === 0) {
    if (sprite === 5) {
      sprite = 0;
    } else {
      sprite++;
    }
  }

  if (posX > width / 2) {
    let newStartPos = -(width / 2 + 102);
    posX = Math.ceil(newStartPos);
    console.log(posX);
  } else {
    posX += 2;
  }

  window.requestAnimationFrame(draw);
}
```

{{EmbedLiveSample("7-canvas-walking-animation", '100%', 260)}}

Sie können den **Play**-Button drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Eine einfache Zeichenanwendung

Als letztes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben (wie Mausbewegungen in diesem Fall) kombiniert werden kann. Wir gehen hier nicht Schritt für Schritt durch, sondern erkunden nur die interessantesten Teile des Codes.

```html hidden live-sample___8-canvas-drawing-app
<div class="toolbar">
  <input type="color" aria-label="select pen color" value="#ff0000" />
  <div>
    <input
      type="range"
      min="2"
      max="50"
      value="30"
      aria-label="select pen size" /><span class="output">30</span>
  </div>
  <button>Clear canvas</button>
</div>

<canvas class="myCanvas">
  <p>Add suitable fallback here.</p>
</canvas>
```

```css hidden live-sample___8-canvas-drawing-app
body {
  margin: 0;
  overflow: hidden;
  background: #cccccc;
}

.toolbar {
  height: 75px;
  background: #cccccc;
  padding: 5px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toolbar div {
  margin: 0 20px;
  flex: 3;
}

input[type="color"],
button {
  flex: 1;
}

input[type="range"] {
  width: calc(100% - 20px);
}

output {
  width: 20px;
}

span {
  position: relative;
  bottom: 5px;
}
```

```js hidden live-sample___8-canvas-drawing-app
const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight - 85);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0, 0, width, height);

const colorPicker = document.querySelector('input[type="color"]');
const sizePicker = document.querySelector('input[type="range"]');
const output = document.querySelector(".output");
const clearBtn = document.querySelector("button");

// covert degrees to radians
function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

// update sizePicker output value

sizePicker.addEventListener(
  "input",
  () => (output.textContent = sizePicker.value),
);

// store mouse pointer coordinates, and whether the button is pressed
let curX;
let curY;
let pressed = false;

// update mouse pointer coordinates
document.addEventListener("mousemove", (e) => {
  curX = window.Event
    ? e.pageX
    : e.clientX +
      (document.documentElement.scrollLeft
        ? document.documentElement.scrollLeft
        : document.body.scrollLeft);
  curY = window.Event
    ? e.pageY
    : e.clientY +
      (document.documentElement.scrollTop
        ? document.documentElement.scrollTop
        : document.body.scrollTop);
});

canvas.addEventListener("mousedown", () => (pressed = true));

canvas.addEventListener("mouseup", () => (pressed = false));

clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(0, 0, width, height);
});

function draw() {
  if (pressed) {
    ctx.fillStyle = colorPicker.value;
    ctx.beginPath();
    ctx.arc(
      curX,
      curY - 85,
      sizePicker.value,
      degToRad(0),
      degToRad(360),
      false,
    );
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
```

Sie können das Beispiel live unten spielen und auch den **Play**-Button drücken, um es im MDN Playground zu öffnen, wo Sie den Quellcode bearbeiten können:

{{EmbedLiveSample("8-canvas-drawing-app", '100%', 600)}}

Schauen wir uns die interessantesten Teile an. Zuerst verfolgen wir die X- und Y-Koordinaten der Maus und ob sie geklickt wird oder nicht, mit drei Variablen: `curX`, `curY` und `pressed`. Wenn sich die Maus bewegt, wird eine Funktion ausgelöst, die als `onmousemove`-Ereignishandler gesetzt ist und die aktuellen X- und Y-Werte erfasst. Wir verwenden auch `onmousedown` und `onmouseup`-Ereignishandler, um den Wert von `pressed` auf `true` zu ändern, wenn die Maustaste gedrückt wird, und auf `false`, wenn sie losgelassen wird.

```js
let curX;
let curY;
let pressed = false;

// update mouse pointer coordinates
document.addEventListener("mousemove", (e) => {
  curX = e.pageX;
  curY = e.pageY;
});

canvas.addEventListener("mousedown", () => (pressed = true));

canvas.addEventListener("mouseup", () => (pressed = false));
```

Wenn die Schaltfläche "Canvas löschen" gedrückt wird, starten wir eine einfache Funktion, die das gesamte Canvas wieder schwarz stellt, wie bereits gesehen:

```js
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal ziemlich einfach — wenn `pressed` `true` ist, zeichnen wir einen Kreis mit einem Füllstil, der dem Wert im Farbauswahlfeld entspricht, und einem Radius, der dem im Range-Input angegebenen Wert entspricht. Wir müssen den Kreis 85 Pixel über dem Punkt zeichnen, an dem wir ihn messen, weil das Vertikale Maß von der Oberseite des Ansichtsfensters genommen wird, aber wir zeichnen den Kreis relativ zur Oberseite der Leinwand, die unterhalb der 85 Pixel hohen Symbolleiste beginnt. Wenn wir ihn mit `curY` als y-Koordinate zeichnen würden, würde er 85 Pixel tiefer erscheinen als die Mausposition.

```js
function draw() {
  if (pressed) {
    ctx.fillStyle = colorPicker.value;
    ctx.beginPath();
    ctx.arc(
      curX,
      curY - 85,
      sizePicker.value,
      degToRad(0),
      degToRad(360),
      false,
    );
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
```

Alle {{htmlelement("input")}}-Typen werden gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, wird er auf einfache Textfelder zurückgreifen.

## WebGL

Es ist nun an der Zeit, 2D hinter sich zu lassen und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalte werden mit der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert, die eine komplett separate API von der 2D-Canvas-API ist, obwohl beide auf {{htmlelement("canvas")}}-Elementen rendern.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht Ihnen, direkt mit dem {{Glossary("GPU", "GPU")}} des Computers zu kommunizieren. Als solches ist das Schreiben von rohem WebGL näher an niedrigeren Programmiersprachen wie C++ als normales JavaScript; es ist ziemlich komplex, aber unglaublich mächtig.

### Verwendung einer Bibliothek

Aufgrund seiner Komplexität schreiben die meisten Menschen 3D-Grafikcode mit einer externen JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten davon funktionieren ähnlich, indem sie Funktionalitäten bereitstellen, um primitive und benutzerdefinierte Formen zu erstellen, Kameras und Beleuchtung zu positionieren, Oberflächen mit Texturen zu überziehen und mehr. Sie kümmern sich um das WebGL für Sie, sodass Sie auf einer höheren Ebene arbeiten können.

Ja, die Verwendung einer dieser bedeutet, eine weitere neue API (eine von Drittanbietern in diesem Fall) zu lernen, aber sie sind viel einfacher als das Roh-WebGL zu kodieren.

### Unseren Würfel neu erstellen

Lassen Sie uns ein Beispiel ansehen, wie man etwas mit einer WebGL-Bibliothek erstellt. Wir entscheiden uns für [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der beliebtesten ist. In diesem Tutorial erstellen wir den 3D-drehenden Würfel, den wir zuvor gesehen haben.

1. Zunächst erstellen Sie einen neuen Ordner auf Ihrem lokalen Laufwerk mit dem Namen `webgl-cube`.
2. Erstellen Sie darin eine neue Datei mit dem Namen `index.html` und fügen Sie den folgenden Inhalt hinzu:

   ```html
   <!DOCTYPE html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />

       <title>Three.js basic cube example</title>

       <script src="https://cdn.jsdelivr.net/npm/three-js@79.0.0/three.min.js"></script>
       <script src="script.js" defer></script>
       <link href="style.css" rel="stylesheet" />
     </head>

     <body></body>
   </html>
   ```

3. Erstellen Sie als nächstes eine weitere neue Datei mit dem Namen `script.js` erneut im selben Ordner wie zuvor. Lassen Sie es vorerst leer.
4. Erstellen Sie jetzt eine weitere neue Datei mit dem Namen `style.css`, erneut im selben Ordner, und fügen Sie den folgenden Inhalt hinzu:

   ```css
   html,
   body {
     margin: 0;
   }

   body {
     overflow: hidden;
   }
   ```

5. Wir haben `three.js` in unsere Seite eingeschlossen (das ist, was das erste `<script>`-Element in unserem HTML tut), also können wir jetzt beginnen, JavaScript zu `script.js` zu schreiben, das es verwendet. Beginnen wir mit dem Erstellen einer neuen Szene — fügen Sie das folgende in Ihre `script.js`-Datei ein:

   ```js
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene) Konstruktor erstellt eine neue Szene, die die gesamte 3D-Welt darstellt, die wir anzeigen möchten.

6. Als nächstes benötigen wir eine **Kamera**, damit wir die Szene sehen können. In 3D-Bildbegriffen stellt die Kamera die Position des Betrachters in der Welt dar. Um eine Kamera zu erstellen, fügen Sie die folgenden Zeilen als nächstes hinzu:

   ```js
   const camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000,
   );
   camera.position.z = 5;
   ```

   Der [`PerspectiveCamera()`](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera) Konstruktor nimmt vier Argumente an:
   - Das Gesichtsfeld: Wie breit der Bereich vor der Kamera ist, der sichtbar sein sollte, in Grad.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Normalerweise ist dies das Verhältnis der Breite der Szene geteilt durch die Höhe der Szene. Die Verwendung eines anderen Wertes wird die Szene verzerren (was vielleicht das ist, was Sie wollen, aber normalerweise nicht).
   - Die Nah-Ebene: Wie nahe an der Kamera Objekte sein können, bevor wir aufhören, sie auf den Bildschirm zu rendern. Denken Sie daran, wie wenn Sie Ihre Fingerspitze näher und näher zwischen Ihre Augen bringen, schließlich können Sie sie nicht mehr sehen.
   - Die Fern-Ebene: Wie weit Dinge von der Kamera entfernt sind, bevor sie nicht mehr gerendert werden.

   Wir setzen auch die Position der Kamera so, dass sie 5 Einheiten aus der Z-Achse heraus ist, was, wie bei CSS, aus dem Bildschirm zu Ihnen, dem Betrachter, ist.

7. Die dritte wesentliche Zutat ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene rendert, wie sie durch eine gegebene Kamera gesehen wird. Wir erstellen jetzt einen mithilfe des [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer) Konstruktors, aber wir verwenden ihn erst später. Fügen Sie die folgenden Zeilen als nächstes hinzu:

   ```js
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile legt die Größe fest, in der der Renderer die Ansicht der Kamera zeichnen wird, und die dritte Zeile fügt das vom Renderer erstellte {{htmlelement("canvas")}}-Element dem {{htmlelement("body")}} des Dokuments hinzu. Jetzt wird alles, was der Renderer zeichnet, in unserem Fenster angezeigt.

8. Als nächstes möchten wir den Würfel erstellen, den wir auf dem Canvas anzeigen werden. Fügen Sie das folgende Stück-Code am Ende Ihres JavaScript hinzu:

   ```js
   let cube;

   const loader = new THREE.TextureLoader();

   loader.load(
     "https://mdn.github.io/shared-assets/images/examples/learn/metal003.png",
     (texture) => {
       texture.wrapS = THREE.RepeatWrapping;
       texture.wrapT = THREE.RepeatWrapping;
       texture.repeat.set(2, 2);

       const geometry = new THREE.BoxGeometry(2.4, 2.4, 2.4);
       const material = new THREE.MeshLambertMaterial({ map: texture });
       cube = new THREE.Mesh(geometry, material);
       scene.add(cube);

       draw();
     },
   );
   ```

   Es gibt hier ein bisschen mehr zu beachten, also lassen Sie uns es in Stufen durchgehen:
   - Wir erstellen zuerst eine `cube`-globale Variable, damit wir von überall im Code auf unseren Würfel zugreifen können.
   - Als nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt, dann rufen wir `load()` darauf auf. `load()` nimmt in diesem Fall zwei Parameter entgegen (obwohl es mehr annehmen kann): die Textur, die wir laden möchten (ein PNG), und eine Funktion, die ausgeführt wird, wenn die Textur geladen wurde.
   - Innerhalb dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um anzugeben, dass wir eine 2 x 2 Wiederholung des Bildes um alle Seiten des Würfels gewickelt haben möchten. Als nächstes erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt und bringen sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) zusammen, um unseren Würfel zu erstellen. Ein Objekt hat typischerweise eine Geometrie (welche Form es hat) und ein Material (wie seine Oberfläche aussieht).
   - Zuletzt fügen wir unseren Würfel zur Szene hinzu, dann rufen wir unsere `draw()`-Funktion auf, um die Animation zu starten.

9. Bevor wir zu `draw()` kommen, fügen wir der Szene ein paar Lichter hinzu, um die Dinge interessanter zu machen; fügen Sie die folgenden Blöcke als nächstes ein:

   ```js
   const light = new THREE.AmbientLight("rgb(255 255 255)"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("rgb(255 255 255)");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art von weichem Licht, das die gesamte Szene ein wenig erhellt, wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt, hingegen, ist ein direktionaler Lichtstrahl, wie eine Taschenlampe (oder ein Spotlicht, in der Tat).

10. Zuletzt, fügen wir unsere `draw()`-Funktion am Ende des Codes hinzu:

    ```js
    function draw() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);

      requestAnimationFrame(draw);
    }
    ```

    Das ist ziemlich intuitiv; in jedem Frame rotieren wir unseren Würfel leicht auf seinen X- und Y-Achsen, rendern dann die Szene wie von unserer Kamera gesehen, und schließlich rufen wir `requestAnimationFrame()` auf, um das Zeichnen unseres nächsten Frames einzuplanen.

Lassen Sie uns nochmal einen kurzen Blick darauf werfen, wie das fertige Produkt aussehen sollte:

{{EmbedLiveSample("webgl-cube", "100%", 500)}}

> [!NOTE]
> In unserem GitHub-Repo finden Sie ein weiteres interessantes 3D-Würfelbeispiel — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([siehe es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dies verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Computer-Webcam zu nehmen und ihn als Textur auf die Seite des Würfels zu projizieren!

## Zusammenfassung

An diesem Punkt sollten Sie eine nützliche Vorstellung von den Grundlagen der Grafikenprogrammierung mit Canvas und WebGL und davon haben, was Sie mit diesen APIs tun können, sowie eine gute Vorstellung davon, wohin Sie gehen können, um weitere Informationen zu erhalten. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklichen Grundlagen von Canvas behandelt — es gibt noch viel mehr zu lernen! Die unten aufgeführten Artikel werden Sie weiterführen.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorial-Serie, die detailliert erklärt, was Sie über 2D-Canvas wissen sollten. Wesentliche Lektüre.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Serie, die die Grundlagen der Roh-WebGL-Programmierung lehrt.
- [Einführung in eine grundlegende Demo mit Three.js erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — grundlegendes Three.js-Tutorial. Wir haben auch entsprechende Leitfäden für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spielentwicklung](/de/docs/Games) — die Homepage für Web-Spielentwicklung auf MDN. Hier gibt es einige wirklich nützliche Tutorials und Techniken in Bezug auf 2D- und 3D-Canvas — siehe die Menüoptionen Techniken und Tutorials.

## Beispiele

- [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API, um Sound zu erzeugen, und Canvas, um eine hübsche Visualisierung dazu zu erzeugen.
- [Voice Change-O-Matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas, um Echtzeitaudio-Daten von der Web Audio API zu visualisieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
