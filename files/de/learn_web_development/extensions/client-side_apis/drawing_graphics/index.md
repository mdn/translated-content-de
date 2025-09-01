---
title: Zeichnen von Grafiken
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: 019b71e1fccd7756bda54dbe2cf61ed2105076be
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsstarke Grafikprogrammiertools, von der Sprache Skalable Vektorgrafiken ([SVG](/de/docs/Web/SVG)) bis zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in Canvas und weitere Ressourcen, die Ihnen ermöglichen, mehr zu lernen.

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
          <li>Grundlegende Syntax und Nutzung von <code>&lt;canvas&gt;</code> und zugehörigen APIs.</li>
          <li>Verwendung von Timern und <code>requestAnimationFrame()</code>, um Animationsschleifen einzurichten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Das Web bestand ursprünglich nur aus Text, was sehr langweilig war, also wurden Bilder eingeführt — zuerst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Dies war jedoch immer noch nicht genug. Während man [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden konnte, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) — da sie durch Markup dargestellt werden — gab es immer noch keine Möglichkeit, dasselbe für Bitmap-Bilder zu tun, und die verfügbaren Tools waren ziemlich begrenzt. Das Web hatte immer noch keine Möglichkeit, effektiv Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die üblicherweise von niedrigstufigen Sprachen wie C++ oder Java bearbeitet werden.

Die Situation begann sich zu verbessern, als Browser anfingen, das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) im Jahr 2004 zu unterstützen. Wie Sie unten sehen werden, bietet Canvas einige nützliche Werkzeuge zum Erstellen von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere wenn es mit einigen der anderen APIs kombiniert wird, die die Webplattform bietet, aber es kann schwierig oder unmöglich sein, es zugänglich zu machen.

Das folgende Beispiel zeigt eine einfache 2D-Canvas-basierte Animation von hüpfenden Bällen, die wir ursprünglich in unserem Modul [Einführung in JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) kennengelernt haben:

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

Um 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Dies wurde zu [WebGL](/de/docs/Web/API/WebGL_API), das bei Browserherstellern Anklang fand und um 2009–2010 standardisiert wurde. WebGL ermöglicht es Ihnen, echte 3D-Grafiken in Ihrem Webbrowser zu erstellen; das folgende Beispiel zeigt einen einfachen rotierenden WebGL-Würfel:

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

Dieser Artikel wird sich hauptsächlich auf 2D-Canvas konzentrieren, da roher WebGL-Code sehr komplex ist. Wir werden jedoch zeigen, wie Sie mit einer WebGL-Bibliothek eine 3D-Szene leichter erstellen können, und Sie können anderswo ein Tutorial finden, das rohes WebGL behandelt — siehe [Einstieg in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Einstieg mit einem `<canvas>`

Wenn Sie eine 2D- _oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-{{htmlelement("canvas")}}-Element beginnen. Dieses Element wird verwendet, um den Bereich der Seite zu definieren, in dem das Bild gezeichnet wird. Dies ist so einfach wie das Einfügen des Elements in die Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dadurch wird auf der Seite ein Canvas mit einer Größe von 320 x 240 Pixeln erstellt.

Sie sollten einige Fallback-Inhalte innerhalb der `<canvas>`-Tags platzieren. Diese sollten den Canvas-Inhalt für Benutzer von Browsern beschreiben, die Canvas nicht unterstützen, oder für Benutzer von Screenreadern.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Der Fallback sollte sinnvolle alternative Inhalte zum Canvas-Inhalt bieten. Wenn Sie beispielsweise ein ständig aktualisiertes Diagramm von Aktienkursen rendern, könnten die Fallback-Inhalte ein statisches Bild des neuesten Diagramms sein, mit `alt`-Text, der die Preise im Text angibt, oder einer Liste von Links zu einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalte sind nicht für Screenreader zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributes direkt auf das Canvas-Element selbst oder fügen Sie Fallback-Inhalte zwischen den öffnenden und schließenden `<canvas>`-Tags ein. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte schon.

### Unser Canvas erstellen und dimensionieren

Fangen wir an, indem wir unsere eigene Canvas-Vorlage erstellen, um zukünftige Experimente durchzuführen.

1. Erstellen Sie zunächst ein Verzeichnis auf Ihrer lokalen Festplatte namens `canvas-template`.
2. Erstellen Sie in dem Verzeichnis eine neue Datei namens `index.html` und speichern Sie den folgenden Inhalt darin:

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

5. Öffnen Sie nun `script.js` und fügen Sie die folgenden Zeilen von JavaScript hinzu:

   ```js
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir einen Verweis auf das Canvas in der `canvas`-Konstanten gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas gleich [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Viewport-Breite gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas gleich [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Viewport-Höhe gibt). So haben wir jetzt ein Canvas, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden auch sehen, dass wir Zuweisungen mit mehreren Gleichheitszeichen verkettet haben — dies ist in JavaScript erlaubt und eine gute Technik, wenn Sie mehrere Variablen alle gleich dem gleichen Wert machen möchten. Wir wollten die Canvas-Breite und Höhe leicht zugänglich in den Variablen width/height machen, da sie nützliche Werte sind, die später verfügbar sind (zum Beispiel, wenn Sie etwas genau in der Mitte der Breite des Canvas zeichnen möchten).

> [!NOTE]
> Sie sollten die Größe des Canvas im Allgemeinen mit HTML-Attributen oder DOM-Eigenschaften festlegen, wie oben erklärt. Sie könnten CSS verwenden, aber das Problem ist dann, dass die Größenanpassung nach dem Rendern des Canvas erfolgt und das Canvas, wie jedes andere Bild, pixelig/verzerrt werden könnte.

### Das Canvas-Kontext und die endgültige Einrichtung erhalten

Wir müssen noch eine letzte Sache tun, bevor wir unsere Canvas-Vorlage als fertig betrachten können. Um auf das Canvas zu zeichnen, müssen wir einen speziellen Verweis auf den Zeichenbereich erhalten, der als Kontext bezeichnet wird. Dies erfolgt mit der [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)-Methode, die in der Grundversion einen einzelnen String als Parameter nimmt, der den Typ des Kontexts angibt, den Sie abrufen möchten.

In diesem Fall wollen wir ein 2D-Canvas, also fügen Sie die folgende JavaScript-Zeile unter den anderen in `script.js` hinzu:

```js
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextwerte, die Sie wählen könnten, sind `webgl` für WebGL, `webgpu` für WebGPU usw., aber diese werden wir in diesem Artikel nicht benötigen.

Das war's — unser Canvas ist jetzt bereit zum Zeichnen! Die `ctx`-Variable enthält jetzt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, und alle Zeichenoperationen auf dem Canvas werden die Manipulation dieses Objekts umfassen.

Machen wir noch eine letzte Sache, bevor wir fortfahren. Wir werden den Canvas-Hintergrund schwarz färben, um Ihnen einen ersten Geschmack der Canvas-API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

```js
ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mit der `fillStyle`-Eigenschaft des Canvas' ([dies nimmt Farbwerte an](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color), genau wie CSS-Eigenschaften), und zeichnen dann ein Rechteck, das den gesamten Bereich des Canvas mit der `fillRect`-Methode abdeckt (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, die Sie für das Rechteck wünschen — wir haben Ihnen gesagt, dass diese width- und height-Variablen nützlich sein würden)!

OK, unsere Vorlage ist fertig und es ist Zeit, weiterzumachen.

## 2D-Canvas-Grundlagen

Wie oben erwähnt, werden alle Zeichenoperationen durch die Manipulation eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts (in unserem Fall `ctx`) ausgeführt. Viele Operationen müssen Koordinaten angegeben werden, um genau zu bestimmen, wo gezeichnet werden soll — die obere linke Ecke des Canvas ist Punkt (0, 0), die horizontale (x) Achse verläuft von links nach rechts, und die vertikale (y) Achse verläuft von oben nach unten.

![Gitterpapier mit kleinen Quadraten, die seine Fläche bedecken, mit einem stahlblauen Quadrat in der Mitte. Die obere linke Ecke des Canvas ist Punkt (0, 0) der x- und y-Achse des Canvas. Die horizontale (x) Achse verläuft von links nach rechts und gibt die Breite an, und die vertikale (y) Achse verläuft von oben nach unten und gibt die Höhe an. Die obere linke Ecke des blauen Quadrats ist so gelabelt, dass sie einen Abstand von x Einheiten von der y-Achse und y Einheiten von der x-Achse hat.](canvas_default_grid.png)

Das Zeichnen von Formen erfolgt in der Regel mit dem Rechteckform-Primitiv oder durch das Nachzeichnen einer Linie entlang eines bestimmten Pfads und anschließendes Ausfüllen der Form. Im Folgenden zeigen wir, wie man beides macht.

### Einfache Rechtecke

Beginnen wir mit ein paar einfachen Rechtecken.

1. Erstellen Sie zunächst eine Kopie Ihres neu codierten Canvas-Vorlagenverzeichnisses.
2. Fügen Sie die folgenden Zeilen am Ende Ihrer JavaScript-Datei hinzu:

   ```js
   ctx.fillStyle = "red";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie Ihr HTML im Browser laden, sollten Sie sehen, dass ein rotes Rechteck auf Ihrem Canvas erschienen ist. Dessen obere linke Ecke ist 50 Pixel von oben und von der linken Seite des Canvas-Rands entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch die dritten und vierten Parameter definiert).

3. Fügen wir noch ein weiteres Rechteck hinzu — dieses Mal ein grünes. Fügen Sie das Folgende am Ende Ihres JavaScripts hinzu:

   ```js
   ctx.fillStyle = "green";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren Sie, und Sie werden Ihr neues Rechteck sehen. Dies wirft eine wichtige Frage auf: Grafikoperationen wie das Zeichnen von Rechtecken, Linien usw. werden in der Reihenfolge durchgeführt, in der sie auftreten. Stellen Sie sich das wie das Streichen einer Wand vor, wobei jede Farbschicht die darunter liegende Schicht überlappt und möglicherweise sogar verbirgt. Sie können nichts daran ändern, also müssen Sie sorgfältig überlegen, in welcher Reihenfolge Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, z.B. mit `rgb()`. Der "Alpha-Kanal" bestimmt den Grad der Transparenz, den die Farbe hat. Je höher der Wert, desto mehr wird das verdeckt, was sich dahinter befindet. Fügen Sie das Folgende Ihrem Code hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, einige weitere Rechtecke selbst zu zeichnen; haben Sie Spaß!

### Striche und Linienbreiten

Bisher haben wir uns das Zeichnen von gefüllten Rechtecken angesehen, aber Sie können auch Rechtecke zeichnen, die nur Umrisse sind (in der Grafikdesignsprache **Striche** genannt). Um die gewünschte Farbe für Ihren Strich festzulegen, verwenden Sie die `_property_; die Zeichnung eines Strichrechtecks erfolgt mit `strokeRect`.

1. Fügen Sie das Folgende zu dem vorherigen Beispiel hinzu, wiederum unterhalb der vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "rgb(255 255 255)";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Strichen ist 1 Pixel; Sie können den Wert der `_property_`-Eigenschaft ändern, um dies anzupassen (sie nimmt eine Zahl an, die die Anzahl der Pixel darstellt, die der Strich breit ist). Fügen Sie die folgende Zeile zwischen den vorherigen beiden Zeilen hinzu:

   ```js
   ctx.lineWidth = 5;
   ```

Jetzt sollten Sie sehen, dass Ihr weißer Umriss viel dicker geworden ist! Das war's für den Moment. Zu diesem Zeitpunkt sollte Ihr Beispiel so aussehen:

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

Sie können auf die Schaltfläche **Play** klicken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Zeichnen von Pfaden

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Im Wesentlichen bedeutet dies, Code zu schreiben, um genau den Pfad anzugeben, dem der Stift auf Ihrem Canvas folgen soll, um die Form zu zeichnen, die Sie zeichnen möchten. Canvas enthält Funktionen zum Zeichnen von geraden Linien, Kreisen, Bézier-Kurven und mehr.

Beginnen Sie den Abschnitt, indem Sie eine neue Kopie Ihrer Canvas-Vorlage erstellen, um das neue Beispiel zu zeichnen.

Wir werden einige gängige Methoden und Eigenschaften über alle folgenden Abschnitte hinweg verwenden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — Beginnt einen Pfad an der Stelle zu zeichnen, an der sich der Stift aktuell auf dem Canvas befindet. Auf einer neuen Canvas beginnt der Stift bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — Bewegt den Stift zu einem anderen Punkt auf der Leinwand, ohne die Linie aufzuzeichnen oder zu zeichnen; der Stift "springt" zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — Zeichnet eine gefüllte Form, indem das bisherige Pfad nachgezeichnet wird.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — Zeichnet eine Umrissform, indem ein Strich entlang des bisher gezeichneten Pfades gezogen wird.
- Sie können Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` mit Pfaden sowie mit Rechtecken verwenden.

Ein typischer, einfacher Pfadbefehl könnte in etwa so aussehen:

```js
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Zeichnen von Linien

Lassen Sie uns ein gleichseitiges Dreieck auf das Canvas zeichnen.

1. Fügen Sie zunächst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Diese konvertiert Gradwerte in Bogenmaß, was nützlich ist, da immer dann, wenn Sie einen Winkelwert in JavaScript angeben müssen, dieser fast immer im Bogenmaß angegeben sein wird, aber Menschen normalerweise in Grad denken.

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Beginnen Sie nun Ihren Pfad, indem Sie die folgende Zeile unter Ihrem vorherigen Eintrag hinzufügen; hier setzen wir eine Farbe für unser Dreieck, beginnen einen Pfad zu zeichnen und bewegen dann den Stift auf (50, 50), ohne etwas zu zeichnen. Dort werden wir beginnen, unser Dreieck zu zeichnen.

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

   Gehen wir das in der Reihenfolge durch:

   Zuerst zeichnen wir eine Linie zu (150, 50) — unser Pfad geht jetzt 100 Pixel entlang der x-Achse nach rechts.

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks mit etwas einfacher Trigonometrie. Im Wesentlichen zeichnen wir das Dreieck nach unten zeigend. Die Winkel in einem gleichseitigen Dreieck sind immer 60 Grad; um die Höhe zu berechnen, können wir es in der Mitte in zwei rechtwinklige Dreiecke teilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben. In Bezug auf die Seiten:
   - Die längste Seite wird als **Hypotenuse** bezeichnet.
   - Die Seite neben dem 60-Grad-Winkel wird als **adjacent** bezeichnet — die wir als 50 Pixel kennen, da sie die Hälfte der Linie ist, die wir gerade gezeichnet haben.
   - Die Seite, die dem 60-Grad-Winkel gegenüberliegt, wird als \*\*oppositeside bezeichnet, was die Höhe des Dreiecks ist, die wir berechnen möchten.

   ![Ein gleichseitiges Dreieck, das nach unten zeigt, mit beschrifteten Winkeln und Seiten. Die horizontale Linie oben ist als 'angrenzend' gekennzeichnet. Eine senkrechte gepunktete Linie, von der Mitte der angrenzenden Linie aus, bezeichnet 'oppositeside' und teilt das Dreieck in zwei gleiche rechtwinklige Dreiecke. Der rechte Teil des Dreiecks ist mit Hypotenuse beschriftet, da es die Hypotenuse des rechtwinkligen Dreiecks ist, das von der Linie gegenüber der Hypotenuse bezeichnet wird. Obwohl alle drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des rechtwinkligen Dreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass das Produkt der angrenzenden Seite mit dem Tangens des Winkels gleich der gegenüberliegenden Seite ist, daher kommen wir auf `50 * Math.tan(degToRad(60))`. Wir verwenden unsere `degToRad()`-Funktion, um 60 Grad in Bogenmaß zu konvertieren, da {{jsxref("Math.tan()")}} erwartet einen Eingabewert im Bogenmaß.

4. Nachdem die Höhe berechnet wurde, zeichnen wir eine weitere Linie zu `(100, 50 + triHeight)`. Die x-Koordinate ist einfach; sie muss genau in der Mitte zwischen den vorherigen beiden x-Werten liegen. Der y-Wert muss hingegen 50 plus der Höhe des Dreiecks sein, da wir wissen, dass die obere Spitze des Dreiecks 50 Pixel von der oberen Kante des Canvas entfernt ist.
5. Die nächste Linie führt den Stift zurück zum Startpunkt des Dreiecks.
6. Zum Schluss führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form auszufüllen.

#### Zeichnen von Kreisen

Nun schauen wir uns an, wie man einen Kreis in Canvas zeichnet. Dies wird mit der [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)-Methode erreicht, die einen ganzen oder einen Teil eines Kreises an einem bestimmten Punkt zeichnet.

1. Fügen wir einen Bogen zu unserem Canvas hinzu — fügen Sie das Folgende am Ende Ihres Codes hinzu:

   ```js
   ctx.fillStyle = "rgb(0 0 255)";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` benötigt sechs Parameter. Die ersten beiden geben die Position des Mittelpunkts des Bogens (x und y) an. Der dritte ist der Radius des Kreises, der vierte und fünfte sind die Start- und Endwinkel, bei denen der Kreis gezeichnet werden soll (bei der Angabe von 0 und 360 Grad erhalten wir einen vollständigen Kreis), und der sechste Parameter gibt an, ob der Kreis gegen den Uhrzeigersinn oder im Uhrzeigersinn gezeichnet werden soll (`false` ist im Uhrzeigersinn).

   > [!NOTE]
   > 0 Grad ist horizontal nach rechts.

2. Fügen wir einen weiteren Bogen hinzu:

   ```js
   ctx.fillStyle = "yellow";
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   Das Muster hier ist sehr ähnlich, aber mit zwei Unterschieden:
   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird, was bedeutet, dass, obwohl der Bogen als Beginn bei -45 Grad und Ende bei 45 Grad angegeben ist, wir den Bogen um die 270 Grad ziehen, die nicht innerhalb dieses Abschnitts liegen. Wenn Sie `true` zu `false` ändern und dann den Code erneut ausführen, wird nur der 90-Grad-Segment des Kreises gezeichnet.
   - Bevor wir `fill()` aufrufen, ziehen wir eine Linie zum Mittelpunkt des Kreises. Dadurch erhalten wir den ziemlich schönen Pac-Man-Stil-Ausschnitt. Wenn Sie diese Linie entfernen (probieren Sie es aus!) und den Code neu ausführen, erhalten Sie nur einen Teil des Kreises, der zwischen dem Start- und Endpunkt des Bogens abgeschnitten ist. Dies veranschaulicht auch einen weiteren wichtigen Punkt des Canvas — wenn Sie versuchen, einen unvollständigen Pfad (d.h. einen, der nicht geschlossen ist) zu füllen, fügt der Browser eine gerade Linie zwischen dem Start- und Endpunkt ein und füllt ihn dann aus.

Das war's vorerst; Ihr Abschlussergebnis sollte so aussehen:

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

Sie können auf die Schaltfläche **Play** klicken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

> [!NOTE]
> Um mehr über fortgeschrittene Funktionen zur Pfadzeichnung wie Bézier-Kurven zu erfahren, sehen Sie sich unser [Zeichnen von Formen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)-Tutorial an.

### Text

Canvas verfügt auch über Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz erkunden. Beginnen Sie damit, eine weitere neue Kopie Ihrer Canvas-Vorlage zu erstellen, um das neue Beispiel zu zeichnen.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnet Umriss- (Strich-) Text.

Beide nehmen in ihrer Grundnutzung drei Eigenschaften an: den zu zeichnenden Textstring sowie die x- und y-Koordinaten des Punktes, an dem der Text begonnen werden soll. Dies entspricht der **unteren linken** Ecke des **Textfeldes** (wörtlich, dem Feld, das den Text umgibt, den Sie zeichnen), was Sie verwirren könnte, da andere Zeichenoperationen dazu neigen, von der oberen linken Ecke zu beginnen — beachten Sie dies.

Es gibt auch eine Reihe von Eigenschaften, die Ihnen helfen, das Text-Rendering zu steuern, wie [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), das Ihnen ermöglicht, Schriftfamilie, Größe usw. anzugeben. Es nimmt als Wert die gleiche Syntax wie die CSS-{{cssxref("font")}}-Eigenschaft an.

Canvas-Inhalte sind nicht für Screenreader zugänglich. Text, der auf das Canvas gemalt wird, ist im DOM nicht verfügbar, muss jedoch zugänglich gemacht werden. In diesem Beispiel fügen wir den Text als Wert für `aria-label` hinzu.

Versuchen Sie, den folgenden Block am Ende Ihres JavaScripts hinzuzufügen:

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

Hier zeichnen wir zwei Textzeilen, eine umrandete und die andere als Strich. Das Beispiel sollte so aussehen:

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

Drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Experimentieren Sie und sehen Sie, was Sie sich einfallen lassen! Weitere Informationen zu den für Canvas-Text verfügbaren Optionen finden Sie bei [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Zeichnen von Bildern auf Canvas

Es ist möglich, externe Bilder auf Ihrer Canvas darzustellen. Diese können einfache Bilder, Frames von Videos oder der Inhalt anderer Canvas sein. Im Moment werden wir nur den Fall betrachten, einfache Bilder auf unsere Canvas zu verwenden.

1. Machen Sie, wie zuvor, eine neue Kopie Ihrer Canvas-Vorlage, um das neue Beispiel zu zeichnen.

   Bilder werden mit der [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)-Methode auf das Canvas gezeichnet. Die einfachste Version nimmt drei Parameter — einen Verweis auf das Bild, das Sie rendern möchten, und die x- und y-Koordinaten der oberen linken Ecke des Bildes.

2. Lassen Sie uns beginnen, indem wir eine Bildquelle einfügen, die wir in unser Canvas einbetten können. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

   ```js
   const image = new Image();
   image.src =
     "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt mit dem [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor. Das zurückgegebene Objekt ist vom gleichen Typ wie das, was zurückgegeben wird, wenn Sie einen Verweis auf ein vorhandenes {{htmlelement("img")}}-Element erhalten. Wir setzen dann sein [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut gleich unserem Firefox-Logo-Bild. Zu diesem Zeitpunkt beginnt der Browser, das Bild zu laden.

3. Wir könnten jetzt versuchen, das Bild mit `drawImage()` einzubetten, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, sonst schlägt der Code fehl. Wir können dies erreichen, indem wir das `load`-Ereignis verwenden, das nur ausgelöst wird, wenn das Bild fertig geladen ist. Fügen Sie den folgenden Block unter dem vorherigen hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie das Bild eingebettet im Canvas sehen, wenn auch ziemlich groß.

4. Aber es gibt noch mehr! Was ist, wenn wir nur einen Teil des Bildes anzeigen oder es skalieren möchten? Beides können wir mit der komplexeren Version von `drawImage()` erreichen. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile wie folgt:

   ```js
   ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185);
   ```

   - Der erste Parameter ist der Bildverweis, wie zuvor.
   - Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links oder darüber der ersten beiden Parameter wird gezeichnet.
   - Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem Originalbild, das wir geladen haben, ausschneiden wollen.
   - Parameters 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Teils des Bildes zeichnen möchten, relativ zur oberen linken Ecke des Canvas.
   - Parameter 8 und 9 definieren die Breite und Höhe, um den ausgeschnittenen Bereich des Bildes darzustellen. In diesem Fall haben wir die gleichen Abmessungen wie das ursprüngliche Stück angegeben, aber Sie könnten es skalieren, indem sie andere Werte angeben.

5. Wenn das Bild sinnvoll aktualisiert wird, muss auch die {{Glossary("accessible_description", "zugängliche Beschreibung")}} aktualisiert werden.

   ```js
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das endgültige Beispiel sollte so aussehen:

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

Drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

## Schleifen und Animationen

Wir haben bisher einige sehr grundlegende Anwendungen des 2D-Canvas behandelt, aber Sie werden wirklich nicht die volle Leistung des Canvas erleben, es sei denn, Sie aktualisieren oder animieren es auf irgendeine Weise. Immerhin liefert Canvas skriptbare Bilder! Wenn Sie nichts ändern möchten, sollten Sie genauso gut statische Bilder verwenden und sich die ganze Arbeit ersparen.

### Eine Schleife erstellen

Mit Schleifen im Canvas zu arbeiten macht ziemlich viel Spaß — Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) (oder anderer Schleifenarten) ausführen, genau wie jeden anderen JavaScript-Code.

Lassen Sie uns ein Beispiel erstellen.

1. Machen Sie eine weitere frische Kopie Ihrer Canvas-Vorlage.
2. Fügen Sie folgende Zeile am Ende Ihres JavaScripts ein. Diese enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprung des Canvas verschiebt:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

   Dadurch wird der Koordinatenursprung (0, 0) zur Mitte des Canvas verschoben, anstatt in der oberen linken Ecke zu sein. Dies ist in vielen Situationen sehr nützlich, wie in diesem Fall, in dem wir das Design relativ zur Mitte des Canvas zeichnen möchten.

3. Fügen Sie nun den folgenden Code am Ende des JavaScripts hinzu:

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

   Hier implementieren wir dieselbe `degToRad()`-Funktion, die wir im Dreiecksbeispiel oben gesehen haben, sowie eine `rand()`-Funktion, die eine Zufallszahl innerhalb gegebener unterer und oberer Grenzen zurückgibt, sowie die `length`- und `moveOffset`-Variablen (über die wir später mehr erfahren) und eine leere `for`-Schleife.

4. Die Idee hier ist, dass wir innerhalb der `for`-Schleife etwas auf dem Canvas zeichnen und es bei jedem Mal iterieren, um etwas Interessantes zu erstellen. Fügen Sie den folgenden Code in Ihre `for`-Schleife ein:

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

   Bei jeder Iteration:
   - Setzen wir die `fillStyle`-Farbe auf einen Hauch von leicht transparentem Lila, der sich jedes Mal basierend auf dem Wert `length` ändert. Wie Sie später sehen werden, wird die Länge jedes Mal kleiner, sodass der Effekt hier ist, dass die Farbe mit jedem gezeichneten Dreieck heller wird.
   - Beginnen wir den Pfad.
   - Bewegen wir den Stift zu einem Koordinatenpunkt von `(moveOffset, moveOffset)`; Diese Variable definiert, wie weit wir jedes Mal beim Zeichnen eines neuen Dreiecks gehen möchten.
   - Zeichnen wir eine Linie zu einem Koordinatenpunkt von `(moveOffset+length, moveOffset)`. Dies zeichnet eine Linie der Länge `length`, die parallel zur X-Achse verläuft.
   - Berechnen wir die Höhe des Dreiecks wie zuvor.
   - Zeichnen wir eine Linie zur nach unten zeigenden Ecke des Dreiecks und dann eine Linie zurück zum Anfang des Dreiecks.
   - Rufen wir `fill()` auf, um das Dreieck auszufüllen.
   - Aktualisieren wir die Variablen, die die Sequenz der Dreiecke beschreiben, damit wir bereit sind, das nächste zu zeichnen. Wir reduzieren den `length`-Wert um 1, sodass die Dreiecke jedes Mal kleiner werden; erhöhen `moveOffset` um einen kleinen Betrag, damit jedes nachfolgende Dreieck ein wenig weiter entfernt ist, und verwenden eine weitere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), die es uns ermöglicht, das gesamte Canvas zu drehen! Wir drehen es um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das war's! Das endgültige Beispiel sollte so aussehen:

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

Drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Wir möchten Sie ermutigen, mit dem Beispiel zu experimentieren und es zu Ihrem eigenen zu machen! Zum Beispiel:

- Zeichnen Sie Rechtecke oder Bögen anstelle von Dreiecken oder betten Sie sogar Bilder ein.
- Spielen Sie mit den `length`- und `moveOffset`-Werten.
- Verwenden Sie Zufallszahlen mit der `rand()`-Funktion, die wir oben eingefügt, aber nicht verwendet haben.

### Animationen

Das Schleifenbeispiel, das wir oben erstellt haben, war unterhaltsam, aber wirklich benötigen Sie eine konstante Schleife, die ununterbrochen läuft, für jede ernste Canvas-Anwendung (wie Spiele und Echtzeit-Visualisierungen). Wenn Sie sich vorstellen, dass Ihr Canvas wie ein Film ist, möchten Sie wirklich, dass die Anzeige pro Bild aktualisiert wird, um das aktualisierte Bild zu zeigen, mit einer idealen Bildwiederholrate von 60 Bildern pro Sekunde, damit die Bewegung für das menschliche Auge schön und flüssig erscheint.

Es gibt einige JavaScript-Funktionen, die es Ihnen ermöglichen, Funktionen mehrmals pro Sekunde wiederholt auszuführen, die beste für unsere Zwecke hier ist [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Es nimmt einen Parameter an — den Namen der Funktion, die Sie für jedes Bild ausführen möchten. Das nächste Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion die neue Aktualisierung Ihrer Animation zeichnet und dann `requestAnimationFrame()` erneut kurz vor dem Ende der Funktion aufruft, wird die Animationsschleife weiterlaufen. Die Schleife endet, wenn Sie aufhören, `requestAnimationFrame()` aufzurufen, oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) aufrufen, nachdem Sie `requestAnimationFrame()`aufgerufen haben, jedoch bevor das Bild aufgerufen wird.

> [!NOTE]
> Es ist eine gute Praxis, `cancelAnimationFrame()` aus Ihrem Hauptcode aufzurufen, wenn Sie die Animation beendet haben, um sicherzustellen, dass keine Aktualisierungen mehr aufgerufen werden müssen.

Der Browser berechnet komplexe Details wie die Animation gleichmäßig ablaufen zu lassen und Ressourcen nicht zu verschwenden, indem er Dinge animiert, die nicht gesehen werden können.

Um zu sehen, wie es funktioniert, schauen wir uns noch einmal unser [Bouncing Balls Beispiel](#frame_bouncing-balls) an. Der Code für die Schleife, die alles in Bewegung hält, sieht folgendermaßen aus:

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

Wir führen die `loop()`-Funktion einmal unten im Code aus, um den Zyklus zu starten und das erste Animationsbild zu zeichnen; die `loop()`-Funktion übernimmt dann die Kontrolle und ruft `requestAnimationFrame(loop)` auf, um das nächste Bild der Animation erneut und erneut auszuführen.

Beachten Sie, dass wir bei jedem Bild das Canvas vollständig löschen und alles neu zeichnen. Für jeden vorhandenen Ball zeichnen wir ihn, aktualisieren seine Position und überprüfen, ob er mit anderen Bällen kollidiert. Sobald Sie eine Grafik auf ein Canvas gezeichnet haben, gibt es keine Möglichkeit, diese Grafik individuell zu manipulieren, wie Sie es mit DOM-Elementen tun können. Sie können jeden Ball nicht auf dem Canvas verschieben, da er, sobald er gezeichnet ist, Teil des Canvas' und kein einzelnes, zugängliches Element oder Objekt ist. Stattdessen müssen Sie löschen und neu zeichnen, indem Sie entweder den gesamten Rahmen löschen und alles neu zeichnen oder versuchen, den Code so zu gestalten, dass man genau weiß, welche Teile gelöscht werden müssen und nur die minimal nötigen Bereiche des Canvas gelöscht und neu gezeichnet werden.

Das Optimieren der Animation von Grafiken ist eine ganze Spezialität der Programmierung mit vielen klugen Techniken. Diese gehen über das heraus, was wir für unser Beispiel benötigen!

Im Allgemeinen umfasst der Prozess der Erstellung einer Canvas-Animation die folgenden Schritte:

1. Löschen Sie den Canvas-Inhalt (z.B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Speichern Sie den Zustand (falls nötig) mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) — dies ist nötig, wenn Sie Einstellungen speichern möchten, die Sie auf dem Canvas geändert haben, bevor Sie fortfahren, was für fortgeschrittenere Anwendungen nützlich ist.
3. Zeichnen Sie die Grafiken, die Sie animieren.
4. Stellen Sie die Einstellungen wieder her, die Sie in Schritt 2 gespeichert haben, mit [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
5. Rufen Sie `requestAnimationFrame()` auf, um die Zeichnung des nächsten Bildes der Animation einzuplanen.

> [!NOTE]
> Wir werden `save()` und `restore()` hier nicht behandeln, aber sie werden in unserem [Transformations](/de/docs/Web/API/Canvas_API/Tutorial/Transformations)-Tutorial (und den folgenden) gut erklärt.

### Eine einfache Charakteranimation

Nun wollen wir unsere eigene einfache Animation erstellen — wir werden einen Charakter aus einem ziemlich großartigen Retro-Computerspiel über den Bildschirm laufen lassen.

1. Machen Sie eine neue Kopie unserer Canvas-Vorlage und öffnen Sie sie in Ihrem Code-Editor.

2. Aktualisieren Sie das Fallback-HTML, um das Bild widerzuspiegeln:

   ```html
   <canvas class="myCanvas">
     <p>A man walking.</p>
   </canvas>
   ```

3. Fügen Sie am Ende des JavaScripts die folgende Zeile hinzu, um erneut den Ursprung der Koordinaten in die Mitte des Canvas zu legen:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

4. Erstellen wir nun ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, setzen dessen [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf das Bild, das wir laden möchten und fügen einen `onload`-Ereignis-Handler hinzu, der die `draw()`-Funktion aktiviert, wenn das Bild geladen wird:

   ```js
   const image = new Image();
   image.src =
     "https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation/walk-right.png";
   image.onload = draw;
   ```

5. Fügen Sie nun einige Variablen hinzu, um den Ort im Bildschirm zu verfolgen, an dem der Sprite gezeichnet werden soll und die Sprite-Nummer, die wir anzeigen möchten.

   ```js
   let sprite = 0;
   let posX = 0;
   ```

   Lassen Sie uns das Spritesheet-Bild erklären (das wir respektvoll aus Mike Thomas' [Walking cycle using CSS animation](https://codepen.io/mikethomas/pen/kQjKLW) CodePen ausgeliehen haben). Das Bild sieht so aus:

   ![Ein Spritesheet mit sechs Spritebildern einer pixeligen Figur, die wie eine gehende Person aussieht, von ihrer rechten Seite aus, in verschiedenen Momenten eines einzelnen Schritts nach vorne. Die Figur trägt ein weißes Hemd mit himmelblauen Knöpfen, schwarze Hose, und schwarze Schuhe. Jedes Sprite ist 102 Pixel breit und 148 Pixel hoch.](walk-right.png)

   Es enthält sechs Sprites, die die gesamte Laufsequenz ausmachen — jedes ist 102 Pixel breit und 148 Pixel hoch. Um jedes Sprite sauber anzuzeigen, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild aus dem Spritesheet auszuschneiden und nur diesen Teil anzuzeigen, wie wir es oben mit dem Firefox-Logo gemacht haben. Die x-Koordinate des Ausschnitts muss ein Vielfaches von 102 sein und die y-Koordinate wird immer 0 sein. Die Ausschnittgröße wird immer 102x148 Pixel betragen.

6. Führen wir jetzt eine leere `draw()`-Funktion am Ende des Codes ein, die bereit ist, mit etwas Code gefüllt zu werden:

   ```js
   function draw() {}
   ```

7. Der Rest des Codes in diesem Abschnitt geht in `draw()`. Fügen Sie zuerst die folgende Zeile hinzu, die das Canvas löscht, um jedes Bild vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width/2), -(height/2)` spezifizieren müssen, weil wir zuvor die Ursprungsposition als `width/2, height/2` angegeben haben.

   ```js
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

8. Zeichnen wir jetzt unser Bild mit der 9-Parameter-Version von drawImage; fügen Sie das Folgende hinzu:

   ```js
   ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);
   ```

   Wie Sie sehen können:
   - Wir spezifizieren `image` als das Bild, das eingebettet werden soll.
   - Parameter 2 und 3 spezifizieren die obere linke Ecke des Ausschnitts, der aus dem Quellbild ausgeschnitten werden soll, wobei der x-Wert als `sprite` multipliziert mit 102 (wobei `sprite` die Spritenummer zwischen 0 und 5 ist) und der y-Wert immer 0 ist.
   - Parameter 4 und 5 spezifizieren die Größe des auszuscheidenden Ausschnitts — 102 Pixel mal 148 Pixel.
   - Parameter 6 und 7 spezifizieren die obere linke Ecke der Box, in die der Ausschnitt auf dem Canvas gezeichnet werden soll — die x-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichenposition ändern können, indem wir den Wert `posX` ändern.
   - Parameter 8 und 9 spezifizieren die Größe des Bildes auf dem Canvas. Wir möchten es nur in seiner ursprünglichen Größe behalten, daher spezifizieren wir 102 und 148 als Breite und Höhe.

9. Lassen Sie uns nun den `sprite`-Wert nach jedem Zeichnen ändern — nun, nach einigen von ihnen zumindest. Fügen Sie den folgenden Block am Ende der `draw()`-Funktion hinzu:

   ```js
   if (posX % 13 === 0) {
     if (sprite === 5) {
       sprite = 0;
     } else {
       sprite++;
     }
   }
   ```

   Wir verpacken den ganzen Block in `if (posX % 13 === 0) { }`. Wir verwenden den Modulo-Operator (`%`) (auch bekannt als [restlicher Operator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu überprüfen, ob der `posX`-Wert exakt durch 13 ohne Rest geteilt werden kann. Falls ja, wechseln wir zum nächsten Sprite, indem wir `sprite` inkrementieren (auf 0 zurückschwingen, nachdem wir mit Sprite #5 fertig sind). Dies bedeutet im Wesentlichen, dass wir das Sprite nur bei jedem 13ten Bild aktualisieren, oder ungefähr 5 Bilder pro Sekunde (`requestAnimationFrame()` ruft uns so oft wie möglich bei bis zu 60 Bildern pro Sekunde auf). Wir verlangsamen die Bildrate absichtlich, weil wir nur sechs Sprites haben und wenn wir jedes in 1/60 Sekunde anzeigen, wird unser Charakter viel zu schnell gehen!

   Im äußeren Block verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob der `sprite`-Wert 5 ist (letztes Sprite, da die Spritenummern von 0 bis 5 laufen). Wenn wir das letzte Sprite bereits anzeigen, setzen wir `sprite` zurück auf 0; andernfalls inkrementieren wir es einfach um 1.

10. Lassen Sie uns nun herausfinden, wie wir den `posX`-Wert bei jedem Bild ändern können — fügen Sie den folgenden Codeblock direkt darunter ein.

    ```js
    if (posX > width / 2) {
      let newStartPos = -(width / 2 + 102);
      posX = Math.ceil(newStartPos);
      console.log(posX);
    } else {
      posX += 2;
    }
    ```

    Wir verwenden eine weitere `if...else`-Anweisung, um zu prüfen, ob `posX` größer als `width/2` geworden ist, was bedeutet, dass unser Charakter bereits von der rechten Kante des Bildschirms gelaufen ist. Wenn dies der Fall ist, berechnen wir eine Position, die den Charakter gerade links von der linken Seite des Bildschirms positionieren würde.

    Wenn unser Charakter noch nicht von der Kantener Bildschirms gelaufen ist, inkrementieren wir `posX` um 2. Dies bewegt ihn ein kleines Stück nach rechts beim nächsten Zeichnen.

11. Schließlich müssen wir die Animationsschleife fortsetzen, indem wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()`-Funktion aufrufen:

    ```js
    window.requestAnimationFrame(draw);
    ```

Das war's! Das endgültige Beispiel sollte so aussehen:

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

Sie können auf die Schaltfläche **Play** klicken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Eine einfache Zeichenanwendung

Als letztes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben (wie Mausbewegung in diesem Fall) kombiniert werden kann. Wir werden Sie nicht dazu bringen, das durchzugehen und zu erstellen; wir werden nur die interessantesten Teile des Codes erkunden.

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
  background: #ccc;
}

.toolbar {
  height: 75px;
  background: #ccc;
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

Sie können das Beispiel live unten ausprobieren; Sie können auch auf die Schaltfläche **Play** klicken, um es im MDN Playground zu öffnen, wo Sie den Quellcode bearbeiten können:

{{EmbedLiveSample("8-canvas-drawing-app", '100%', 600)}}

Schauen wir uns die interessantesten Teile an. Zuerst folgen wir den X- und Y-Koordinaten der Maus und ob es geklickt wird oder nicht mit drei Variablen: `curX`, `curY` und `pressed`. Wenn die Maus bewegt wird, wird eine Funktion ausgeführt, die als `onmousemove`-Ereignis-Handler eingestellt ist, um die aktuellen X- und Y-Werte zu erfassen. Wir verwenden auch `onmousedown`- und `onmouseup`-Ereignis-Handler, um den `pressed`-Wert auf `true` zu ändern, wenn die Maustaste gedrückt wird und beim Loslassen wieder auf `false` zurück.

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

Wenn die Schaltfläche "Canvas löschen" gedrückt wird, führen wir eine einfache Funktion aus, die das gesamte Canvas zurück zu Schwarz löscht, auf die gleiche Weise, die wir zuvor gesehen haben:

```js
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal recht einfach — wenn `pressed` auf `true` steht, zeichnen wir einen Kreis mit einer Füllfarbe, die gleich dem Wert im Farbpicker ist, und einem Radius gleich dem Wert im Zahleneingabefeld. Wir müssen den Kreis 85 Pixel über dem Punkt zeichnen, von dem wir ihn gemessen haben, weil die vertikale Messung vom oberen Rand des Viewports erfolgt, aber wir zeichnen den Kreis relativ zum oberen Teil des Canvas, der unterhalb des 85 Pixel hohen Werkzeugkastens beginnt. Wenn wir ihn nur mit `curY` als y-Koordinatenwert zeichnen würden, wäre er 85 Pixel tiefer als die Mausposition.

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

Alle {{htmlelement("input")}}-Typen werden gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, fällt er auf ein einfaches Textfeld zurück.

## WebGL

Es ist nun an der Zeit, 2D hinter sich zu lassen und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalt wird mithilfe der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert, die eine vollkommen separate API von der 2D-Canvas-API ist, obwohl beide auf {{htmlelement("canvas")}}-Elementen rendern.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht es Ihnen, direkt mit der {{Glossary("GPU", "GPU")}} des Computers zu kommunizieren. Da das Schreiben von rohem WebGL näher an niedrigstufigen Sprachen wie C++ ist als reguläres JavaScript; es ist ziemlich komplex, aber unglaublich leistungsstark.

### Verwendung einer Bibliothek

Aufgrund seiner Komplexität schreiben die meisten Menschen 3D-Grafikcode mit einer Drittanbieter-JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten funktionieren auf ähnliche Weise, bieten Funktionalität für die Erstellung einfacher und benutzerdefinierter Formen, das Positionieren von Ansichts-Kameras und Beleuchtung, das Überziehen von Oberflächen mit Texturen und mehr. Sie kümmern sich um das WebGL für Sie, damit Sie auf einer höheren Ebene arbeiten können.

Ja, die Verwendung einer dieser Bibliotheken bedeutet, eine andere neue API zu lernen (in diesem Fall eine Drittanbieter-API), aber sie sind weitaus einfacher als das Codieren von rohem WebGL.

### Unseren Würfel neu erstellen

Schauen wir uns ein Beispiel an, wie man mit einer WebGL-Bibliothek etwas erstellt. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der beliebtesten ist. In diesem Tutorial erstellen wir den 3D-drehenden Würfel, den wir zuvor gesehen haben.

1. Um zu beginnen, erstellen Sie einen neuen Ordner auf Ihrer lokalen Festplatte namens `webgl-cube`.
2. Erstellen Sie darin eine neue Datei namens `index.html` und fügen Sie den folgenden Inhalt hinzu:

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

3. Erstellen Sie als nächstes eine weitere neue Datei namens `script.js`, wieder im gleichen Ordner wie zuvor. Lassen Sie sie vorerst leer.
4. Erstellen Sie nun eine weitere neue Datei namens `style.css`, wieder im gleichen Ordner, und fügen Sie den folgenden Inhalt hinzu:

   ```css
   html,
   body {
     margin: 0;
   }

   body {
     overflow: hidden;
   }
   ```

5. Wir haben `three.js` in unserer Seite enthalten (dies wird durch das erste `<script>`-Element in unserem HTML gemacht), sodass wir nun damit beginnen können, JavaScript zu schreiben, das in `script.js` verwendet werden kann. Beginnen wir mit der Erstellung einer neuen Szene — fügen Sie die folgenden Inhalte in Ihre `script.js`-Datei hinzu:

   ```js
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene)-Konstruktor erstellt eine neue Szene, die die ganze 3D-Welt repräsentiert, die wir darstellen möchten.

6. Als nächstes benötigen wir eine **Kamera**, um die Szene sehen zu können. In 3D-Bild-Begriffen repräsentiert die Kamera die Position eines Betrachters in der Welt. Um eine Kamera zu erstellen, fügen Sie die folgenden Zeilen als nächstes hinzu:

   ```js
   const camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000,
   );
   camera.position.z = 5;
   ```

   Der [`PerspectiveCamera()`](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera)-Konstruktor benötigt vier Argumente:
   - Das Sichtfeld: Wie breit der Bereich vor der Kamera ist, der auf dem Bildschirm angezeigt werden soll, in Grad.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Normalerweise ist dies das Verhältnis der Breite der Szene geteilt durch die Höhe der Szene. Ein anderer Wert würde die Szene verzerren (was möglicherweise das gewünschte Ergebnis ist, aber meistens nicht).
   - Die nahe Ebene: Wie nah an der Kamera sich Objekte befinden können, bevor wir aufhören, sie auf den Bildschirm zu rendern. Denken Sie daran, wie Sie, wenn Sie Ihren Finger näher an den Raum zwischen Ihren Augen bewegen, irgendwann nicht mehr sehen können.
   - Die ferne Ebene: Wie weit Dinge von der Kamera entfernt sind, bevor sie nicht mehr gerendert werden.

   Wir stellen den Kamerastandort auch 5 Einheiten auf der Z-Achse ein, was, wie beim CSS, raus aus dem Bildschirm zu Ihnen als Betrachter ist.

7. Die dritte wichtige Zutat ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene, wie sie durch eine gegebene Kamera betrachtet wird, rendert. Wir erstellen für jetzt eines mit dem [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)-Konstruktor, werden es aber erst später verwenden. Fügen Sie die folgenden Zeilen als nächstes hinzu:

   ```js
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile setzt die Größe, die der Renderer für die Kameraansicht zeichnen soll, und die dritte Zeile fügt das {{htmlelement("canvas")}}-Element, das vom Renderer erstellt wurde, dem {{htmlelement("body")}} des Dokuments hinzu. Jetzt wird alles, was der Renderer zeichnet, in unserem Fenster angezeigt.

8. Als nächstes wollen wir den Würfel erstellen, den wir auf dem Canvas anzeigen werden. Fügen Sie das folgende Stück Code am Ende Ihres JavaScripts hinzu:

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

   Es gibt hier einiges mehr zu beachten, also gehen wir es in Stufen durch:
   - Wir erstellen zuerst eine `cube`-Globale Variable, damit wir auf unseren Würfel von überall im Code zugreifen können.
   - Als nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt und rufen `load()` darauf auf. `load()` benötigt in diesem Fall zwei Parameter (obwohl es mehr Parameter annehmen kann): die zu ladende Textur (ein PNG) und eine Funktion, die ausgeführt wird, wenn die Textur geladen wurde.
   - Innerhalb dieser Funktion verwenden wir die Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture) Objekts, um anzugeben, dass wir eine 2x2 Wiederholung des Bildes um alle Seiten des Würfels haben möchten. Als nächstes erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt und bringen sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) zusammen, um unseren Würfel zu erstellen. Ein Objekt benötigt normalerweise eine Geometrie (welche Form es hat) und ein Material (wie seine Oberfläche aussieht).
   - Schließlich fügen wir der Szene unseren Würfel hinzu und rufen dann die `draw()` Funktion auf, um die Animation zu starten.

9. Bevor wir `draw()` definieren, fügen wir ein Paar Lichter zur Szene hinzu, um es etwas aufzuhellen; fügen Sie die folgenden Blöcke als nächstes hinzu:

   ```js
   const light = new THREE.AmbientLight("rgb(255 255 255)"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("rgb(255 255 255)");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art weiches Licht, das die gesamte Szene ein wenig erhellt, ähnlich wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt hingegen ist ein gerichteter Lichtstrahl, eher wie eine Taschenlampe (oder in der Tat ein Scheinwerfer).

10. Schließlich fügen wir unsere `draw()`-Funktion am unteren Rand des Codes hinzu:

    ```js
    function draw() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);

      requestAnimationFrame(draw);
    }
    ```

    Dies ist ziemlich intuitiv; bei jedem Bild drehen wir unseren Würfel leicht auf seinen x- und y-Achsen, dann rendern wir die Szene, die von unserer Kamera betrachtet wird und rufen schließlich `requestAnimationFrame()` auf, um das Zeichnen unseres nächsten Bildes zu planen.

Werfen wir einen letzten Blick darauf, wie das fertige Produkt aussehen sollte:

{{EmbedLiveSample("webgl-cube", "100%", 500)}}

> [!NOTE]
> In unserem GitHub-Repo finden Sie auch ein weiteres interessantes 3D-Würfel-Beispiel — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dies verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Computer-Webcam aufzunehmen und auf die Seite des Würfels als Textur zu projizieren!

## Zusammenfassung

An diesem Punkt sollten Sie eine nützliche Vorstellung von den Grundlagen des Grafikprogrammierens mit Canvas und WebGL und was Sie mit diesen APIs tun können, sowie eine gute Vorstellung davon haben, wohin Sie für weitere Informationen gehen können. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklich grundlegenden Dinge des Canvas behandelt - es gibt noch so viel mehr zu lernen! Die untenstehenden Artikel werden Sie weiterbringen.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorial-Reihe, die erklärt, was Sie über 2D-Canvas ausführlicher wissen sollten, als hier behandelt wurde. Pflichtlektüre.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Reihe, die die Grundlagen der Programmierung mit rohem WebGL lehrt.
- [Erstellen einer einfachen Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — Ein grundlegendes Three.js-Tutorial. Wir haben auch entsprechende Anleitungen für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spieleentwicklung](/de/docs/Games) — Die Einstiegsseite für die Entwicklung von Webspielen auf MDN. Dort finden Sie einige wirklich nützliche Tutorials und Techniken im Zusammenhang mit 2D- und 3D-Canvas unter den Menüoptionen Techniken und Tutorials.

## Beispiele

- [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API, um Sound zu erzeugen und Canvas, um eine hübsche Visualisierung dazu zu erstellen.
- [Voice Change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas, um Echtzeit-Audiodaten aus der Web Audio API zu visualisieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
