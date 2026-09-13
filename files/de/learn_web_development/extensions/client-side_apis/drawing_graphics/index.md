---
title: Grafiken zeichnen
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: 6f5921b2634db4bd565e5e0cd38eafdadb4bb383
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsfähige Werkzeuge zur Grafikprogrammierung: von der Sprache Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) bis hin zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [die Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in Canvas sowie weiterführende Ressourcen, mit denen Sie mehr darüber lernen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere mit <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Grundlagen zu Objekten</a> und zentralen API-Themen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Die Konzepte und Anwendungsfälle, die durch die in dieser Lektion behandelten APIs ermöglicht werden.</li>
          <li>Grundlegende Syntax und Verwendung von <code>&lt;canvas&gt;</code> und zugehörigen APIs.</li>
          <li>Verwendung von Timern und <code>requestAnimationFrame()</code> zum Einrichten von Animationsschleifen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Das Web bestand ursprünglich nur aus Text, was sehr langweilig war. Daher wurden Bilder eingeführt — zunächst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Das reichte jedoch noch nicht aus. Zwar konnte man [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) — da sie durch Markup dargestellt werden —, doch gab es weiterhin keine Möglichkeit, dasselbe mit Bitmap-Bildern zu tun, und die verfügbaren Werkzeuge waren eher begrenzt. Das Web bot noch immer keine effektive Möglichkeit, Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die üblicherweise von Low-Level-Sprachen wie C++ oder Java verarbeitet werden.

Die Situation begann sich zu verbessern, als Browser 2004 das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) unterstützten. Wie Sie weiter unten sehen werden, stellt Canvas einige nützliche Werkzeuge zum Erstellen von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen bereit, insbesondere in Kombination mit einigen anderen APIs der Webplattform. Allerdings kann es schwierig oder unmöglich sein, diese zugänglich zu machen.

Das folgende Beispiel zeigt eine einfache, Canvas-basierte 2D-Animation springender Bälle, die wir ursprünglich in unserem Modul [Einführung in JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) kennengelernt haben:

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
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
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
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}

const balls = [];

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

Um 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Daraus wurde [WebGL](/de/docs/Web/API/WebGL_API), das bei Browseranbietern an Bedeutung gewann und etwa 2009–2010 standardisiert wurde. Mit WebGL können Sie echte 3D-Grafiken in Ihrem Webbrowser erstellen.

Dieser Artikel konzentriert sich hauptsächlich auf 2D-Canvas, da roher WebGL-Code sehr komplex ist. Wir zeigen jedoch, wie Sie [eine WebGL-Bibliothek verwenden können, um einfacher eine 3D-Szene zu erstellen](#webgl). Ein Tutorial zu rohem WebGL finden Sie an anderer Stelle — siehe [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Erste Schritte mit einem \<canvas>

Wenn Sie eine 2D- _oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-{{htmlelement("canvas")}}-Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Das ist so einfach wie das Einfügen des Elements in die Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dadurch wird ein Canvas mit einer Größe von 320 mal 240 Pixeln auf der Seite erstellt.

Sie sollten innerhalb der `<canvas>`-Tags Fallback-Inhalte einfügen. Diese sollten den Canvas-Inhalt für Nutzende von Browsern ohne Canvas-Unterstützung oder für Nutzende von Screenreadern beschreiben.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Der Fallback sollte eine hilfreiche alternative Darstellung des Canvas-Inhalts bieten. Wenn Sie beispielsweise ein fortlaufend aktualisiertes Diagramm von Aktienkursen rendern, könnte der Fallback-Inhalt ein statisches Bild des neuesten Aktiencharts sein, mit `alt`-Text, der die Kurse als Text nennt, oder mit einer Liste von Links zu einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Fügen Sie beschreibenden Text direkt auf dem Canvas-Element als Wert des Attributs [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ein oder schließen Sie Fallback-Inhalte zwischen die öffnenden und schließenden `<canvas>`-Tags ein. Canvas-Inhalte sind nicht Teil des DOM, verschachtelte Fallback-Inhalte hingegen schon.

### Unser Canvas erstellen und dimensionieren

Beginnen wir damit, unsere eigene Canvas-Vorlage zu erstellen, um darin zukünftige Experimente durchzuführen.

1. Erstellen Sie zunächst auf Ihrer lokalen Festplatte ein Verzeichnis namens `canvas-template`.
2. Erstellen Sie im Verzeichnis eine neue Datei namens `index.html` und speichern Sie den folgenden Inhalt darin:

   ```html
   <!doctype html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
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

   ```html hidden live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop
   <canvas class="myCanvas">
     <p>Add suitable fallback here.</p>
   </canvas>
   ```

3. Erstellen Sie im Verzeichnis eine neue Datei namens `style.css` und speichern Sie die folgende CSS-Regel darin:

   ```css live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
   body {
     margin: 0;
     overflow: hidden;
   }
   ```

4. Erstellen Sie im Verzeichnis eine neue Datei namens `script.js`. Lassen Sie diese Datei vorerst leer.

5. Öffnen Sie nun `script.js` und fügen Sie die folgenden JavaScript-Zeilen hinzu:

   ```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz auf das Canvas in der Konstanten `canvas` gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die Eigenschaft `width` des Canvas auf [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Viewport-Breite liefert). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die Eigenschaft `height` des Canvas auf [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Viewport-Höhe liefert). Nun haben wir also ein Canvas, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden außerdem sehen, dass wir Zuweisungen mit mehreren Gleichheitszeichen verketten — dies ist in JavaScript erlaubt und eine gute Technik, wenn Sie mehrere Variablen auf denselben Wert setzen möchten. Wir wollten die Breite und Höhe des Canvas über die Variablen `width` und `height` einfach zugänglich machen, da diese Werte später nützlich sind (beispielsweise, wenn Sie etwas genau in der Mitte der Canvas-Breite zeichnen möchten).

> [!NOTE]
> Im Allgemeinen sollten Sie die Größe des Canvas mithilfe von HTML-Attributen oder DOM-Eigenschaften festlegen, wie oben erläutert. Sie könnten CSS verwenden, aber das Problem dabei ist, dass die Größenanpassung erfolgt, nachdem das Canvas gerendert wurde. Wie jedes andere Bild könnte das Canvas dadurch verpixelt oder verzerrt werden.

### Canvas-Kontext abrufen und abschließende Einrichtung

Bevor wir unsere Canvas-Vorlage als fertig betrachten können, müssen wir noch eine letzte Sache erledigen. Um auf das Canvas zu zeichnen, müssen wir eine spezielle Referenz auf den Zeichenbereich abrufen, die Kontext genannt wird. Dies erfolgt mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die bei grundlegender Verwendung einen einzelnen String als Parameter akzeptiert, der den abzurufenden Kontexttyp darstellt.

In diesem Fall möchten wir ein 2D-Canvas. Fügen Sie daher die folgende JavaScript-Zeile unter den anderen in `script.js` hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextwerte, die Sie auswählen könnten, umfassen `webgl` für WebGL, `webgpu` für WebGPU usw.; diese benötigen wir in diesem Artikel jedoch nicht.

Das war's — unser Canvas ist nun vorbereitet und bereit zum Zeichnen! Die Variable `ctx` enthält jetzt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, und alle Zeichenoperationen auf dem Canvas erfolgen durch Manipulation dieses Objekts.

Lassen Sie uns noch eine letzte Sache tun, bevor wir fortfahren. Wir färben den Canvas-Hintergrund schwarz, damit Sie einen ersten Eindruck von der Canvas API erhalten. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop
ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);
```

Hier legen wir mithilfe der Canvas-Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) eine Füllfarbe fest (sie akzeptiert wie CSS-Eigenschaften [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color)). Anschließend zeichnen wir mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) ein Rechteck, das den gesamten Bereich des Canvas abdeckt. Die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, mit denen das Rechteck gezeichnet werden soll — wir haben Ihnen ja gesagt, dass die Variablen `width` und `height` nützlich sein würden!

OK, unsere Vorlage ist fertig, und es ist Zeit weiterzumachen.

## 2D-Canvas-Grundlagen

Wie bereits erwähnt, werden alle Zeichenoperationen durch Manipulation eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts durchgeführt (in unserem Fall `ctx`). Für viele Operationen müssen Koordinaten angegeben werden, um genau festzulegen, wo etwas gezeichnet werden soll — die obere linke Ecke des Canvas ist der Punkt (0, 0), die horizontale (x-)Achse verläuft von links nach rechts und die vertikale (y-)Achse von oben nach unten.

![Kariertes Millimeterpapier mit kleinen Quadraten, die den Bereich bedecken, und einem stahlblauen Quadrat in der Mitte. Die obere linke Ecke des Canvas ist der Punkt (0, 0) der Canvas-x- und -y-Achse. Die horizontale (x-)Achse verläuft von links nach rechts und bezeichnet die Breite, die vertikale (y-)Achse verläuft von oben nach unten und bezeichnet die Höhe. Die obere linke Ecke des blauen Quadrats ist mit einem Abstand von x Einheiten zur y-Achse und y Einheiten zur x-Achse beschriftet.](canvas_default_grid.png)

Formen werden in der Regel mithilfe des Rechteck-Grundprimitivs gezeichnet oder indem eine Linie entlang eines bestimmten Pfads verfolgt und die Form anschließend gefüllt wird. Im Folgenden zeigen wir beides.

### Einfache Rechtecke

Beginnen wir mit einigen einfachen Rechtecken.

1. Erstellen Sie zunächst eine Kopie Ihres neu programmierten Canvas-Vorlagenverzeichnisses.
2. Fügen Sie die folgenden Zeilen am Ende Ihrer JavaScript-Datei hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "red";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie Ihr HTML im Browser laden, sollte ein rotes Rechteck auf Ihrem Canvas erscheinen. Seine obere linke Ecke ist 50 Pixel vom oberen und linken Rand des Canvas entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch den dritten und vierten Parameter definiert).

3. Fügen wir ein weiteres Rechteck hinzu — diesmal ein grünes. Fügen Sie am Ende Ihres JavaScript Folgendes hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "green";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern Sie und aktualisieren Sie die Seite. Sie werden Ihr neues Rechteck sehen. Dies weist auf einen wichtigen Punkt hin: Grafikoperationen wie das Zeichnen von Rechtecken, Linien und so weiter werden in der Reihenfolge ausgeführt, in der sie auftreten. Stellen Sie es sich wie das Streichen einer Wand vor: Jede Farbschicht überlagert möglicherweise die darunterliegende und verdeckt sie sogar. Sie können daran nichts ändern, daher müssen Sie sorgfältig über die Reihenfolge nachdenken, in der Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, beispielsweise mit `rgb()`. Der „Alphakanal“ definiert, wie transparent die Farbe ist. Je höher sein Wert ist, desto stärker verdeckt sie, was sich dahinter befindet. Fügen Sie Folgendes zu Ihrem Code hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, weitere eigene Rechtecke zu zeichnen; viel Spaß!

### Konturen und Linienbreiten

Bisher haben wir gefüllte Rechtecke betrachtet, aber Sie können auch Rechtecke zeichnen, die nur aus Umrissen bestehen (im Grafikdesign **Konturen** genannt). Um die gewünschte Farbe für Ihre Kontur festzulegen, verwenden Sie die Eigenschaft [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle). Ein Konturrechteck wird mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect) gezeichnet.

1. Fügen Sie Folgendes zum vorherigen Beispiel hinzu, wieder unter den vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "white";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Konturen beträgt 1 Pixel. Sie können den Wert der Eigenschaft [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth) anpassen, um dies zu ändern (sie akzeptiert eine Zahl, die die Breite der Kontur in Pixeln darstellt). Fügen Sie die folgende Zeile zwischen den vorherigen beiden Zeilen ein:

   ```js
   ctx.lineWidth = 5;
   ```

Nun sollten Sie sehen, dass Ihr weißer Umriss deutlich dicker geworden ist! Das war's vorerst. An diesem Punkt sollte Ihr Beispiel so aussehen:

```js hidden live-sample___2-canvas-rectangles
ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);
```

{{EmbedLiveSample("2-canvas-rectangles", '100%', 250)}}

Sie können die Schaltfläche **Play** drücken, um das Beispiel in MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Pfade zeichnen

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Im Grunde bedeutet das, Code zu schreiben, der genau angibt, welchen Pfad der Stift auf Ihrem Canvas entlangbewegen soll, um die gewünschte Form nachzuzeichnen. Canvas umfasst Funktionen zum Zeichnen gerader Linien, Kreise, Bézierkurven und mehr.

Beginnen Sie diesen Abschnitt, indem Sie eine neue Kopie Ihrer Canvas-Vorlage erstellen, in der Sie das neue Beispiel zeichnen.

In allen folgenden Abschnitten verwenden wir einige gemeinsame Methoden und Eigenschaften:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — beginnt mit dem Zeichnen eines Pfads an der Stelle, an der sich der Stift derzeit auf dem Canvas befindet. Bei einem neuen Canvas startet der Stift bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — bewegt den Stift zu einem anderen Punkt auf dem Canvas, ohne die Linie aufzuzeichnen oder nachzuverfolgen; der Stift „springt“ zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — zeichnet eine gefüllte Form, indem der bisher nachgezeichnete Pfad ausgefüllt wird.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — zeichnet eine Umrissform, indem eine Kontur entlang des bisher gezeichneten Pfads gezeichnet wird.
- Sie können außerdem Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` sowohl mit Pfaden als auch mit Rechtecken verwenden.

Eine typische, einfache Pfad-Zeichenoperation könnte etwa so aussehen:

```js
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Linien zeichnen

Zeichnen wir ein gleichseitiges Dreieck auf das Canvas.

1. Fügen Sie zunächst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Diese wandelt Gradwerte in Radiant um, was nützlich ist, da ein Winkelwert in JavaScript fast immer in Radiant angegeben werden muss, Menschen aber üblicherweise in Grad denken.

   ```js live-sample___3_canvas_paths
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Beginnen Sie als Nächstes Ihren Pfad, indem Sie Folgendes unter Ihrer vorherigen Ergänzung hinzufügen. Hier legen wir eine Farbe für unser Dreieck fest, beginnen einen Pfad zu zeichnen und bewegen dann den Stift nach (50, 50), ohne etwas zu zeichnen. Dort beginnen wir mit dem Zeichnen unseres Dreiecks.

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "red";
   ctx.beginPath();
   ctx.moveTo(50, 50);
   ```

3. Fügen Sie nun die folgenden Zeilen am Ende Ihres Skripts hinzu:

   ```js live-sample___3_canvas_paths
   ctx.lineTo(150, 50);
   const triHeight = 50 * Math.tan(degToRad(60));
   ctx.lineTo(100, 50 + triHeight);
   ctx.lineTo(50, 50);
   ctx.fill();
   ```

   Gehen wir dies der Reihe nach durch:

   Zuerst zeichnen wir eine Linie zu (150, 50) — unser Pfad verläuft nun 100 Pixel nach rechts entlang der x-Achse.

   Zweitens berechnen wir mithilfe einfacher Trigonometrie die Höhe unseres gleichseitigen Dreiecks. Grundsätzlich zeichnen wir das Dreieck nach unten zeigend. Die Winkel eines gleichseitigen Dreiecks betragen immer 60 Grad. Um die Höhe zu berechnen, können wir es in der Mitte in zwei rechtwinklige Dreiecke teilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben. Hinsichtlich der Seiten gilt:
   - Die längste Seite heißt **Hypotenuse**.
   - Die Seite neben dem 60-Grad-Winkel heißt **Ankathete** — wir wissen, dass sie 50 Pixel lang ist, da sie die Hälfte der gerade gezeichneten Linie ist.
   - Die dem 60-Grad-Winkel gegenüberliegende Seite heißt **Gegenkathete**. Sie ist die Höhe des Dreiecks, die wir berechnen möchten.

   ![Ein nach unten zeigendes gleichseitiges Dreieck mit beschrifteten Winkeln und Seiten. Die horizontale Linie oben ist mit „Ankathete“ beschriftet. Eine senkrechte gestrichelte Linie, die von der Mitte der Ankathete ausgeht und mit „Gegenkathete“ beschriftet ist, teilt das Dreieck und erzeugt zwei gleiche rechtwinklige Dreiecke. Die rechte Seite des Dreiecks ist als Hypotenuse beschriftet, da sie die Hypotenuse des durch die Linie „Gegenkathete“ gebildeten rechtwinkligen Dreiecks ist. Obwohl alle drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des rechtwinkligen Dreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass die Länge der Ankathete multipliziert mit dem Tangens des Winkels gleich der Gegenkathete ist. Daraus ergibt sich `50 * Math.tan(degToRad(60))`. Wir verwenden unsere Funktion `degToRad()`, um 60 Grad in Radiant umzuwandeln, da {{jsxref("Math.tan()")}} einen Eingabewert in Radiant erwartet.

4. Nachdem die Höhe berechnet wurde, zeichnen wir eine weitere Linie zu `(100, 50 + triHeight)`. Die X-Koordinate ist einfach: Sie muss genau zwischen den beiden zuvor festgelegten X-Werten liegen. Der Y-Wert hingegen muss 50 plus die Dreieckshöhe sein, da wir wissen, dass die Spitze des Dreiecks 50 Pixel vom oberen Rand des Canvas entfernt liegt.
5. Die nächste Zeile zeichnet eine Linie zurück zum Startpunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form auszufüllen.

#### Kreise zeichnen

Sehen wir uns nun an, wie man in Canvas einen Kreis zeichnet. Dies geschieht mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc), die einen ganzen Kreis oder einen Teil davon an einem bestimmten Punkt zeichnet.

1. Fügen wir unserem Canvas einen Kreisbogen hinzu — fügen Sie Folgendes am Ende Ihres Codes ein:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "blue";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` akzeptiert sechs Parameter. Die ersten beiden geben die Position des Mittelpunkts des Kreisbogens an (jeweils X und Y). Der dritte ist der Radius des Kreises, der vierte und fünfte sind der Start- und Endwinkel, bei denen der Kreis gezeichnet werden soll (durch die Angabe von 0 und 360 Grad erhalten wir also einen vollständigen Kreis), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn oder im Uhrzeigersinn gezeichnet werden soll (`false` bedeutet im Uhrzeigersinn).

   > [!NOTE]
   > 0 Grad liegt horizontal rechts.

2. Versuchen wir, einen weiteren Kreisbogen hinzuzufügen:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "yellow";
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   Das Muster ähnelt stark dem vorherigen, weist jedoch zwei Unterschiede auf:
   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt. Das bedeutet, dass der Kreisbogen gegen den Uhrzeigersinn gezeichnet wird. Obwohl der Kreisbogen also bei -45 Grad beginnt und bei 45 Grad endet, zeichnen wir ihn über die 270 Grad außerhalb dieses Abschnitts. Wenn Sie `true` in `false` ändern und den Code erneut ausführen, wird nur der 90-Grad-Ausschnitt des Kreises gezeichnet.
   - Bevor wir `fill()` aufrufen, zeichnen wir eine Linie zum Mittelpunkt des Kreises. Dadurch wird der recht hübsche Pac-Man-artige Ausschnitt gerendert. Wenn Sie diese Zeile entfernen (probieren Sie es aus!) und den Code erneut ausführen, erhalten Sie lediglich einen abgeschnittenen Rand des Kreises zwischen Start- und Endpunkt des Kreisbogens. Dies veranschaulicht einen weiteren wichtigen Punkt von Canvas: Wenn Sie versuchen, einen unvollständigen Pfad (also einen nicht geschlossenen Pfad) zu füllen, füllt der Browser eine gerade Linie zwischen Start- und Endpunkt und füllt ihn dann aus.

Das war's vorerst. Ihr endgültiges Beispiel sollte so aussehen:

{{EmbedLiveSample("3_canvas_paths", '100%', 200)}}

Sie können die Schaltfläche **Play** drücken, um das Beispiel in MDN Playground zu öffnen und den Quellcode zu bearbeiten.

> [!NOTE]
> Weitere Informationen zu erweiterten Funktionen zum Zeichnen von Pfaden, etwa Bézierkurven, finden Sie in unserem Tutorial [Formen mit Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes).

### Text

Canvas bietet auch Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz untersuchen. Erstellen Sie zunächst eine weitere neue Kopie Ihrer Canvas-Vorlage, in der Sie das neue Beispiel zeichnen.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnet Text als Umriss (Kontur).

Beide akzeptieren bei ihrer grundlegenden Verwendung drei Eigenschaften: den zu zeichnenden Text-String sowie die X- und Y-Koordinaten des Punkts, an dem mit dem Zeichnen des Texts begonnen werden soll. Dies entspricht der **unteren linken** Ecke des **Textfelds** (also buchstäblich dem Kasten um den Text, den Sie zeichnen), was verwirrend sein kann, da andere Zeichenoperationen eher an der oberen linken Ecke beginnen — behalten Sie dies im Hinterkopf.

Es gibt auch mehrere Eigenschaften, die helfen, das Text-Rendering zu steuern, etwa [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), mit der Sie Schriftfamilie, Größe usw. angeben können. Als Wert verwendet sie dieselbe Syntax wie die CSS-Eigenschaft {{cssxref("font")}}.

Canvas-Inhalte sind für Screenreader nicht zugänglich. Auf das Canvas gezeichneter Text ist nicht für das DOM verfügbar, muss jedoch verfügbar gemacht werden, um zugänglich zu sein. In diesem Beispiel schließen wir den Text als Wert für `aria-label` ein.

Versuchen Sie, den folgenden Block am Ende Ihres JavaScript hinzuzufügen:

```js live-sample___4-canvas-text
ctx.strokeStyle = "white";
ctx.lineWidth = 1;
ctx.font = "36px arial";
ctx.strokeText("Canvas text", 50, 50);

ctx.fillStyle = "red";
ctx.font = "48px georgia";
ctx.fillText("Canvas text", 50, 150);

canvas.setAttribute("aria-label", "Canvas text");
```

Hier zeichnen wir zwei Textzeilen, eine als Umriss und die andere gefüllt. Das Beispiel sollte wie folgt aussehen:

{{EmbedLiveSample("4-canvas-text", '100%', 180)}}

Drücken Sie die Schaltfläche **Play**, um das Beispiel in MDN Playground zu öffnen und den Quellcode zu bearbeiten. Probieren Sie es aus und sehen Sie, was Ihnen einfällt! Weitere Informationen zu den verfügbaren Optionen für Canvas-Text finden Sie unter [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Bilder auf Canvas zeichnen

Es ist möglich, externe Bilder auf Ihrem Canvas zu rendern. Dabei kann es sich um einfache Bilder, Frames aus Videos oder den Inhalt anderer Canvas-Elemente handeln. Vorerst betrachten wir nur den Fall, in dem einfache Bilder auf unserem Canvas verwendet werden.

1. Erstellen Sie wie zuvor eine weitere neue Kopie Ihrer Canvas-Vorlage, in der Sie das neue Beispiel zeichnen.

   Bilder werden mit der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf Canvas gezeichnet. Die einfachste Variante akzeptiert drei Parameter — eine Referenz auf das zu rendernde Bild und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Beginnen wir damit, eine Bildquelle zu beschaffen, die wir in unser Canvas einbetten können. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript hinzu:

   ```js live-sample___5-canvas-images
   const image = new Image();
   image.src =
     "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png";
   ```

   Hier erstellen wir mit dem Konstruktor [`Image()`](/de/docs/Web/API/HTMLImageElement/Image) ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt. Das zurückgegebene Objekt hat denselben Typ wie ein Objekt, das Sie erhalten, wenn Sie eine Referenz auf ein vorhandenes {{htmlelement("img")}}-Element abrufen. Anschließend setzen wir sein Attribut [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf unser Firefox-Logobild. An diesem Punkt beginnt der Browser, das Bild zu laden.

3. Wir könnten nun versuchen, das Bild mit `drawImage()` einzubetten, müssen aber sicherstellen, dass die Bilddatei zuerst geladen wurde, da der Code andernfalls fehlschlägt. Dies können wir mithilfe des `load`-Events erreichen, das erst ausgelöst wird, wenn das Bild vollständig geladen ist. Fügen Sie den folgenden Block unter dem vorherigen hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie das Bild im Canvas eingebettet sehen, wenn auch recht groß.

4. Aber es gibt noch mehr! Was ist, wenn wir nur einen Teil des Bildes anzeigen oder seine Größe ändern möchten? Beides können wir mit der komplexeren Variante von `drawImage()` tun. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile wie folgt:

   ```js
   ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185);
   ```

   ```js hidden live-sample___5-canvas-images
   image.addEventListener("load", () =>
     ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185),
   );
   ```

   - Der erste Parameter ist wie zuvor die Bildreferenz.
   - Die Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links vom ersten Parameter oder oberhalb des zweiten wird gezeichnet.
   - Die Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem ursprünglich geladenen Bild ausschneiden möchten.
   - Die Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Bildbereichs zeichnen möchten, relativ zur oberen linken Ecke des Canvas.
   - Die Parameter 8 und 9 definieren die Breite und Höhe, mit denen der ausgeschnittene Bildbereich gezeichnet werden soll. In diesem Fall haben wir dieselben Abmessungen wie für den ursprünglichen Ausschnitt angegeben, Sie könnten ihn jedoch durch Angabe anderer Werte in der Größe ändern.

5. Wenn das Bild inhaltlich aktualisiert wird, muss auch die Beschreibung aktualisiert werden.

   ```js live-sample___5-canvas-images
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das endgültige Beispiel sollte wie folgt aussehen:

{{EmbedLiveSample("5-canvas-images", '100%', 260)}}

Drücken Sie die Schaltfläche **Play**, um das Beispiel in MDN Playground zu öffnen und den Quellcode zu bearbeiten.

## Schleifen und Animationen

Bisher haben wir einige sehr grundlegende Verwendungen von 2D-Canvas behandelt, aber die volle Leistungsfähigkeit von Canvas erleben Sie erst, wenn Sie es auf irgendeine Weise aktualisieren oder animieren. Schließlich bietet Canvas skriptfähige Bilder! Wenn Sie nichts ändern werden, können Sie genauso gut statische Bilder verwenden und sich die ganze Arbeit sparen.

### Eine Schleife erstellen

Mit Schleifen in Canvas zu spielen macht viel Spaß — Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife (oder einer anderen Art von Schleife) ausführen, genau wie jeden anderen JavaScript-Code.

Erstellen wir ein Beispiel.

1. Erstellen Sie eine weitere neue Kopie Ihrer Canvas-Vorlage.
2. Fügen Sie die folgende Zeile am Ende Ihres JavaScript hinzu. Diese enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js live-sample___6-canvas-for-loop
   ctx.translate(width / 2, height / 2);
   ```

   Dadurch wird der Koordinatenursprung (0, 0) in die Mitte des Canvas verschoben, anstatt sich in der oberen linken Ecke zu befinden. Dies ist in vielen Situationen sehr nützlich, etwa in dieser, in der unser Design relativ zur Mitte des Canvas gezeichnet werden soll.

3. Fügen Sie nun den folgenden Code am Ende des JavaScript hinzu:

   ```js live-sample___6-canvas-for-loop
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }

   function rand(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   let length = 250;
   let moveOffset = 20;
   ```

   Hier implementieren wir dieselbe Funktion `degToRad()`, die wir oben im Dreieck-Beispiel gesehen haben, eine Funktion `rand()`, die eine Zufallszahl zwischen vorgegebenen Unter- und Obergrenzen zurückgibt, sowie die Variablen `length` und `moveOffset` (über die wir später mehr erfahren werden).

4. Die Idee ist, innerhalb der `for`-Schleife etwas auf dem Canvas zu zeichnen und es bei jeder Iteration zu verändern, damit wir etwas Interessantes erstellen können. Fügen Sie den folgenden Code innerhalb Ihrer `for`-Schleife hinzu:

   ```js live-sample___6-canvas-for-loop
   for (let i = 0; i < length; i++) {
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
   }
   ```

   Bei jeder Iteration:
   - setzen wir `fillStyle` auf einen leicht transparenten Lilaton, der sich jedes Mal anhand des Werts von `length` ändert. Wie Sie später sehen werden, wird die Länge mit jedem Schleifendurchlauf kleiner, sodass die Farbe mit jedem nachfolgenden gezeichneten Dreieck heller wird.
   - beginnen wir den Pfad.
   - bewegen wir den Stift zu einer Koordinate von `(moveOffset, moveOffset)`. Diese Variable definiert, wie weit wir uns jedes Mal bewegen möchten, wenn wir ein neues Dreieck zeichnen.
   - zeichnen wir eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Dies zeichnet eine Linie der Länge `length` parallel zur X-Achse.
   - berechnen wir wie zuvor die Höhe des Dreiecks.
   - zeichnen wir eine Linie zur nach unten zeigenden Ecke des Dreiecks und dann eine Linie zurück zum Anfang des Dreiecks.
   - rufen wir `fill()` auf, um das Dreieck zu füllen.
   - aktualisieren wir die Variablen, welche die Dreiecksfolge beschreiben, damit wir bereit sind, das nächste zu zeichnen. Wir verringern den Wert `length` um 1, sodass die Dreiecke jedes Mal kleiner werden; wir erhöhen `moveOffset` um einen kleinen Betrag, sodass jedes nachfolgende Dreieck etwas weiter entfernt liegt; und wir verwenden eine weitere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), mit der wir das gesamte Canvas drehen können! Wir drehen es um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das war's! Das endgültige Beispiel sollte wie folgt aussehen:

{{EmbedLiveSample("6-canvas-for-loop", '100%', 550)}}

Drücken Sie die Schaltfläche **Play**, um das Beispiel in MDN Playground zu öffnen und den Quellcode zu bearbeiten. Wir möchten Sie dazu ermutigen, mit dem Beispiel zu spielen und es zu Ihrem eigenen zu machen! Zum Beispiel:

- Zeichnen Sie Rechtecke oder Kreisbögen statt Dreiecken oder betten Sie sogar Bilder ein.
- Experimentieren Sie mit den Werten `length` und `moveOffset`.
- Fügen Sie mit der oben eingebundenen, aber nicht verwendeten Funktion `rand()` einige Zufallszahlen hinzu.

### Animationen

Das oben erstellte Schleifenbeispiel war unterhaltsam, aber für ernsthafte Canvas-Anwendungen (wie Spiele und Echtzeitvisualisierungen) benötigen Sie eine fortlaufende Schleife, die immer weiterläuft. Wenn Sie Ihr Canvas als einen Film betrachten, möchten Sie die Anzeige wirklich bei jedem Frame aktualisieren, um die aktualisierte Ansicht anzuzeigen. Idealerweise beträgt die Aktualisierungsrate 60 Frames pro Sekunde, damit Bewegungen für das menschliche Auge angenehm flüssig erscheinen.

Es gibt einige JavaScript-Funktionen, mit denen Sie Funktionen mehrmals pro Sekunde wiederholt ausführen können. Die für unsere Zwecke beste ist [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Sie akzeptiert einen Parameter — den Namen der Funktion, die für jeden Frame ausgeführt werden soll. Wenn der Browser das nächste Mal bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion die neue Aktualisierung Ihrer Animation zeichnet und dann kurz vor ihrem Ende erneut `requestAnimationFrame()` aufruft, läuft die Animationsschleife weiter. Die Schleife endet, wenn Sie `requestAnimationFrame()` nicht mehr aufrufen oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) aufrufen, nachdem Sie `requestAnimationFrame()` aufgerufen haben, aber bevor der Frame aufgerufen wird.

> [!NOTE]
> Es ist eine gute Praxis, `cancelAnimationFrame()` aus Ihrem Hauptcode aufzurufen, wenn Sie mit der Animation fertig sind, um sicherzustellen, dass keine Aktualisierungen mehr auf ihre Ausführung warten.

Der Browser kümmert sich um komplexe Details, etwa darum, dass die Animation mit gleichbleibender Geschwindigkeit läuft und keine Ressourcen für die Animation von Dingen verschwendet werden, die nicht sichtbar sind.

Um zu sehen, wie das funktioniert, betrachten wir kurz noch einmal unser [Beispiel springender Bälle](#frame_bouncing-balls). Der Code für die Schleife, die alles in Bewegung hält, sieht so aus:

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

Wir führen die Funktion `loop()` einmal am Ende des Codes aus, um den Zyklus zu starten und den ersten Animationsframe zu zeichnen. Die Funktion `loop()` übernimmt dann das Aufrufen von `requestAnimationFrame(loop)`, um den nächsten Frame der Animation immer wieder auszuführen.

Beachten Sie, dass wir bei jedem Frame das Canvas vollständig löschen und alles neu zeichnen. Für jeden vorhandenen Ball zeichnen wir ihn, aktualisieren seine Position und prüfen, ob er mit anderen Bällen kollidiert. Sobald Sie eine Grafik auf ein Canvas gezeichnet haben, gibt es keine Möglichkeit, diese Grafik einzeln zu manipulieren, wie es mit DOM-Elementen möglich ist. Sie können nicht jeden Ball auf dem Canvas verschieben, da er nach dem Zeichnen Teil des Canvas ist und kein einzeln zugängliches Element oder Objekt darstellt. Stattdessen müssen Sie löschen und neu zeichnen: entweder indem Sie den gesamten Frame löschen und alles neu zeichnen oder indem Sie Code verwenden, der genau weiß, welche Teile gelöscht werden müssen, und nur den minimal erforderlichen Bereich des Canvas löscht und neu zeichnet.

Die Optimierung der Animation von Grafiken ist ein eigenes Spezialgebiet der Programmierung mit vielen verfügbaren cleveren Techniken. Diese gehen jedoch über das hinaus, was wir für unser Beispiel benötigen!

Im Allgemeinen umfasst der Ablauf einer Canvas-Animation die folgenden Schritte:

1. Den Canvas-Inhalt löschen (z. B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Den Zustand bei Bedarf mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) speichern — dies ist nötig, wenn Sie Einstellungen speichern möchten, die Sie auf dem Canvas aktualisiert haben, bevor Sie fortfahren. Dies ist für fortgeschrittenere Anwendungen nützlich.
3. Die zu animierenden Grafiken zeichnen.
4. Die in Schritt 2 gespeicherten Einstellungen mit [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore) wiederherstellen.
5. `requestAnimationFrame()` aufrufen, um das Zeichnen des nächsten Frames der Animation zu planen.

> [!NOTE]
> Wir behandeln `save()` und `restore()` hier nicht, aber sie werden in unserem Tutorial [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations) (und den darauffolgenden Tutorials) gut erklärt.

### Animation eines gehenden Objekts

Erstellen wir nun unsere eigene einfache Animation — wir animieren ein sich über den Bildschirm bewegendes Objekt mithilfe eines Sprite-Sheets.

1. Erstellen Sie eine weitere neue Kopie unserer Canvas-Vorlage und öffnen Sie sie in Ihrem Code-Editor.

2. Aktualisieren Sie das Fallback-HTML, damit es das Bild widerspiegelt:

   ```html live-sample___7-canvas-walking-animation
   <canvas class="myCanvas">
     <p>A cat walking.</p>
   </canvas>
   ```

3. Dieses Mal färben wir den Hintergrund nicht schwarz. Nachdem Sie also die Variable `ctx` abgerufen haben, färben Sie den Hintergrund stattdessen hellgrau:

   ```js live-sample___7-canvas-walking-animation
   ctx.fillStyle = "#e5e6e9";
   ctx.fillRect(0, 0, width, height);
   ```

4. Fügen Sie am Ende des JavaScript die folgende Zeile hinzu, damit sich der Koordinatenursprung erneut in der Mitte des Canvas befindet:

   ```js live-sample___7-canvas-walking-animation
   ctx.translate(width / 2, height / 2);
   ```

5. Erstellen wir nun ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, setzen dessen [`src`](/de/docs/Web/API/HTMLImageElement/src) auf das Bild, das wir laden möchten, und fügen einen `onload`-Event-Handler hinzu, der die Funktion `draw()` auslöst, wenn das Bild geladen ist:

   ```js live-sample___7-canvas-walking-animation
   const image = new Image();
   image.src =
     "https://developer.mozilla.org/shared-assets/images/examples/web-animations/cat_sprite.png";
   image.onload = draw;
   ```

6. Jetzt fügen wir einige Variablen hinzu, um die Position zu verfolgen, an der das Sprite auf dem Bildschirm gezeichnet werden soll, und die Sprite-Nummer, die wir anzeigen möchten.

   ```js live-sample___7-canvas-walking-animation
   let spriteIndex = 0;
   let posX = 0;
   const spriteWidth = 300;
   const spriteHeight = 150;
   const totalSprites = 12;
   ```

   Das Sprite-Bild wurde von [Rachel Nabors](https://nearestnabors.com/) erstellt und freundlicherweise für deren Dokumentationsarbeit zur [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt. Es sieht so aus:

   ![Ein Sprite-Sheet mit drei Spalten, wobei jede Spalte eine Bildfolge einer schwarzen Katze enthält, die sich mit unterschiedlichem Tempo nach links bewegt. Jedes Sprite ist 300 Pixel breit und 150 Pixel hoch.](/shared-assets/images/examples/web-animations/cat_sprite.png)

   Es hat drei Spalten. Jede Spalte ist eine Sequenz, die die Katze mit unterschiedlichem Tempo zeigt (gehend, trabend und galoppierend). Jede Sequenz enthält entweder 12 oder 13 Sprites — jedes ist 300 Pixel breit und 150 Pixel hoch. Wir verwenden die am weitesten links befindliche Gehsequenz, die 12 Sprites enthält. Um jedes Sprite sauber anzuzeigen, müssen wir mit `drawImage()` ein einzelnes Sprite-Bild aus dem Sprite-Sheet ausschneiden und nur diesen Teil anzeigen, wie wir es oben mit dem Firefox-Logo gemacht haben. Die X- und Y-Koordinaten des Ausschnitts müssen jeweils ein Vielfaches von `spriteWidth` und `spriteHeight` sein. Da wir die am weitesten links befindliche Sequenz verwenden, ist die X-Koordinate immer 0. Die Größe des Ausschnitts ist immer `spriteWidth` mal `spriteHeight`.

7. Fügen wir nun am Ende des Codes eine leere Funktion `draw()` ein, die wir mit Code füllen können:

   ```js
   function draw() {}
   ```

   ```js-nolint hidden live-sample___7-canvas-walking-animation
   function draw() {
   ```

8. Der restliche Code in diesem Abschnitt gehört in `draw()`. Fügen Sie zunächst die folgende Zeile hinzu, die das Canvas löscht, um es auf das Zeichnen jedes Frames vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width / 2), -(height / 2)` angeben müssen, da wir die Ursprungsposition zuvor als `width/2, height/2` festgelegt haben.

   ```js live-sample___7-canvas-walking-animation
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

9. Als Nächstes zeichnen wir unser Bild mit `drawImage` — der Variante mit 9 Parametern. Fügen Sie Folgendes hinzu:

   ```js live-sample___7-canvas-walking-animation
   ctx.drawImage(
     image,
     0,
     spriteIndex * spriteHeight,
     spriteWidth,
     spriteHeight,
     0 + posX,
     -spriteHeight / 2,
     spriteWidth,
     spriteHeight,
   );
   ```

   Wie Sie sehen können:
   - Wir geben `image` als einzubettendes Bild an.
   - Die Parameter 2 und 3 geben die obere linke Ecke des aus dem Quellbild auszuschneidenden Ausschnitts an. Der X-Wert ist 0 (für die am weitesten links befindliche Spalte), während der Y-Wert durch Vielfache von `spriteHeight` läuft. Sie können den X-Wert durch `spriteWidth` oder `2 * spriteWidth` ersetzen, um die anderen Spalten auszuwählen.
   - Die Parameter 4 und 5 geben die Größe des auszuschneidenden Ausschnitts an — `spriteWidth` und `spriteHeight`.
   - Die Parameter 6 und 7 geben die obere linke Ecke des Kastens an, in den der Ausschnitt auf dem Canvas gezeichnet werden soll. Die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichenposition durch Ändern des Werts `posX` verändern können. Die Y-Position ist `-spriteHeight / 2`, wodurch das Bild vertikal auf dem Canvas zentriert wird.
   - Die Parameter 8 und 9 geben die Größe des Bildes auf dem Canvas an. Wir möchten die ursprüngliche Größe beibehalten und geben daher `spriteWidth` und `spriteHeight` als Breite und Höhe an.

10. Nun ändern wir den Wert `spriteIndex` nach jedem Zeichnen — nun ja, nach einigen davon. Fügen Sie den folgenden Block am Ende der Funktion `draw()` hinzu:

    ```js live-sample___7-canvas-walking-animation
    if (posX % 11 === 0) {
      if (spriteIndex === totalSprites - 1) {
        spriteIndex = 0;
      } else {
        spriteIndex++;
      }
    }
    ```

    Wir schließen den gesamten Block in `if (posX % 11 === 0) { }` ein. Wir verwenden den Modulo-Operator (`%`) (auch bekannt als [Restoperator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu prüfen, ob der Wert `posX` ohne Rest exakt durch 11 geteilt werden kann. Wenn dies der Fall ist, wechseln wir zum nächsten Sprite, indem wir `spriteIndex` erhöhen (und nach dem letzten wieder zu 0 zurückkehren). Das bedeutet effektiv, dass wir das Sprite nur bei jedem elften Frame aktualisieren, also ungefähr sechsmal pro Sekunde (`requestAnimationFrame()` ruft uns, wenn möglich, bis zu 60-mal pro Sekunde auf). Wir verlangsamen die Framerate absichtlich, weil uns nur 12 Sprites zur Verfügung stehen und sich unser Objekt viel zu schnell bewegen würde, wenn wir eines pro Sechzigstelsekunde anzeigen würden!

    Innerhalb des äußeren Blocks verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu prüfen, ob der Wert `spriteIndex` beim letzten Sprite angekommen ist. Wenn wir bereits das letzte Sprite anzeigen, setzen wir `spriteIndex` zurück auf 0; andernfalls erhöhen wir es einfach um 1.

11. Als Nächstes müssen wir herausfinden, wie der Wert `posX` bei jedem Frame geändert werden soll — fügen Sie den folgenden Codeblock direkt unter Ihrem letzten ein.

    ```js live-sample___7-canvas-walking-animation
    if (posX < -width / 2 - spriteWidth) {
      const newStartPos = width / 2;
      posX = Math.ceil(newStartPos);
    } else {
      posX -= 2;
    }
    ```

    Wir verwenden eine weitere `if...else`-Anweisung, um festzustellen, ob der Wert von `posX` kleiner als `-width/2 - spriteWidth` geworden ist. Das bedeutet, dass unsere Katze über den linken Bildschirmrand hinausgelaufen ist. Falls ja, berechnen wir eine Position, die die Katze direkt rechts neben dem rechten Bildschirmrand platzieren würde.

    Wenn unsere Katze noch nicht über den Bildschirmrand hinausgelaufen ist, verringern wir `posX` um 2. Dadurch bewegt sie sich beim nächsten Zeichnen ein wenig nach links.

12. Schließlich müssen wir die Animationsschleife durch Aufrufen von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der Funktion `draw()` erstellen:

    ```js live-sample___7-canvas-walking-animation
    window.requestAnimationFrame(draw);
    ```

```js-nolint hidden live-sample___7-canvas-walking-animation
}
```

Das war's! Das endgültige Beispiel sollte wie folgt aussehen:

{{EmbedLiveSample("7-canvas-walking-animation", '100%', 260)}}

Sie können die Schaltfläche **Play** drücken, um das Beispiel in MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Eine einfache Zeichenanwendung

Als letztes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Nutzereingaben (in diesem Fall Mausbewegungen) kombiniert werden kann. Wir werden Sie diese Anwendung nicht Schritt für Schritt erstellen lassen; stattdessen betrachten wir nur die interessantesten Teile des Codes.

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

ctx.fillStyle = "black";
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
```

Sie können unten mit dem Live-Beispiel spielen. Sie können auch die Schaltfläche **Play** auswählen, um es im MDN Playground zu öffnen, wo Sie den Quellcode bearbeiten können:

{{EmbedLiveSample("8-canvas-drawing-app", '100%', 600)}}

Sehen wir uns die interessantesten Teile an. Zunächst verfolgen wir die X- und Y-Koordinaten der Maus und ob sie geklickt wird oder nicht, mit drei Variablen: `curX`, `curY` und `pressed`. Wenn sich die Maus bewegt, lösen wir eine als `onmousemove`-Event-Handler festgelegte Funktion aus, die die aktuellen X- und Y-Werte erfasst. Außerdem verwenden wir die Event-Handler `onmousedown` und `onmouseup`, um den Wert von `pressed` auf `true` zu setzen, wenn die Maustaste gedrückt wird, und beim Loslassen wieder auf `false`.

```js live-sample___8-canvas-drawing-app
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

Wenn die Schaltfläche „Clear canvas“ gedrückt wird, führen wir eine einfache Funktion aus, die das gesamte Canvas wieder schwarz löscht, wie wir es zuvor gesehen haben:

```js live-sample___8-canvas-drawing-app
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist dieses Mal recht einfach — wenn `pressed` den Wert `true` hat, zeichnen wir einen Kreis mit einer Füllart, die dem Wert in der Farbauswahl entspricht, und einem Radius, der dem im Bereichseingabefeld festgelegten Wert entspricht. Wir müssen den Kreis 85 Pixel oberhalb der gemessenen Position zeichnen, da die vertikale Messung vom oberen Rand des Viewports aus erfolgt, wir den Kreis aber relativ zum oberen Rand des Canvas zeichnen, der sich unterhalb der 85 Pixel hohen Werkzeugleiste befindet. Würden wir ihn nur mit `curY` als y-Koordinate zeichnen, erschiene er 85 Pixel unterhalb der Mausposition.

```js live-sample___8-canvas-drawing-app
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

Alle {{htmlelement("input")}}-Typen werden gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, greift er auf einfache Textfelder zurück.

## WebGL

Nun ist es an der Zeit, 2D hinter uns zu lassen und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalte werden mit der [WebGL API](/de/docs/Web/API/WebGL_API) angegeben. Dies ist eine vollständig separate API von der 2D-Canvas-API, obwohl beide auf {{htmlelement("canvas")}}-Elementen rendern.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht Ihnen die direkte Kommunikation mit der {{Glossary("GPU", "GPU")}} des Computers. Daher ähnelt das Schreiben von rohem WebGL eher Low-Level-Sprachen wie C++ als gewöhnlichem JavaScript. Es ist recht komplex, aber unglaublich leistungsfähig.

### Eine Bibliothek verwenden

Aufgrund seiner Komplexität schreiben die meisten Personen 3D-Grafikcode mit einer JavaScript-Bibliothek eines Drittanbieters wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten davon funktionieren ähnlich und bieten Funktionen zum Erstellen primitiver und benutzerdefinierter Formen, zum Positionieren von Kameras und Beleuchtung, zum Überziehen von Oberflächen mit Texturen und mehr. Sie übernehmen WebGL für Sie, sodass Sie auf einer höheren Ebene arbeiten können.

Ja, die Verwendung einer solchen Bibliothek bedeutet, eine weitere neue API zu lernen — in diesem Fall eine von Drittanbietern —, aber sie sind wesentlich einfacher als das Programmieren von rohem WebGL.

### Ein rotierender Würfel

Sehen wir uns ein Beispiel dafür an, wie man mit einer WebGL-Bibliothek etwas erstellt. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der beliebtesten Bibliotheken ist. In diesem Tutorial erstellen wir einen rotierenden 3D-Würfel.

1. Erstellen Sie zunächst einen neuen Ordner auf Ihrer lokalen Festplatte namens `webgl-cube`.
2. Erstellen Sie darin eine neue Datei namens `index.html` und fügen Sie den folgenden Inhalt hinzu:

   ```html
   <!doctype html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />

       <title>Three.js basic cube example</title>

       <script src="https://cdn.jsdelivr.net/npm/three-js@79.0.0/three.min.js"></script>
       <script src="script.js" defer></script>
       <link href="style.css" rel="stylesheet" />
     </head>

     <body></body>
   </html>
   ```

   ```html hidden live-sample___9-webgl-cube
   <script src="https://cdn.jsdelivr.net/npm/three-js@79.0.0/three.min.js"></script>
   ```

3. Erstellen Sie als Nächstes eine weitere neue Datei namens `script.js`, wieder im selben Ordner wie zuvor. Lassen Sie sie vorerst leer.
4. Erstellen Sie nun eine weitere neue Datei namens `style.css`, ebenfalls im selben Ordner, und fügen Sie den folgenden Inhalt hinzu:

   ```css live-sample___9-webgl-cube
   html,
   body {
     margin: 0;
   }

   body {
     overflow: hidden;
   }
   ```

5. Wir haben `three.js` in unsere Seite eingebunden (dies geschieht durch das erste `<script>`-Element in unserem HTML). Jetzt können wir beginnen, JavaScript in `script.js` zu schreiben, das es verwendet. Beginnen wir mit dem Erstellen einer neuen Szene — fügen Sie Folgendes in Ihre Datei `script.js` ein:

   ```js live-sample___9-webgl-cube
   const scene = new THREE.Scene();
   ```

   Der Konstruktor [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene) erstellt eine neue Szene, die die gesamte 3D-Welt darstellt, die wir anzeigen möchten.

6. Als Nächstes benötigen wir eine **Kamera**, damit wir die Szene sehen können. In der 3D-Bildgebung stellt die Kamera die Position einer betrachtenden Person in der Welt dar. Um eine Kamera zu erstellen, fügen Sie als Nächstes die folgenden Zeilen hinzu:

   ```js live-sample___9-webgl-cube
   const camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000,
   );
   camera.position.z = 5;
   ```

   Der Konstruktor [`PerspectiveCamera()`](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera) akzeptiert vier Argumente:
   - Das Sichtfeld: Wie breit der Bereich vor der Kamera ist, der auf dem Bildschirm sichtbar sein soll, in Grad.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Üblicherweise ist dies das Verhältnis der Breite der Szene geteilt durch ihre Höhe. Die Verwendung eines anderen Werts verzerrt die Szene (was möglicherweise gewünscht ist, aber normalerweise nicht).
   - Die nahe Ebene: Wie nahe Objekte an der Kamera sein dürfen, bevor wir aufhören, sie auf dem Bildschirm zu rendern. Denken Sie daran, wie Sie Ihre Fingerspitze immer näher an den Bereich zwischen Ihren Augen bewegen und sie irgendwann nicht mehr sehen können.
   - Die ferne Ebene: Wie weit Dinge von der Kamera entfernt sein können, bevor sie nicht mehr gerendert werden.

   Außerdem setzen wir die Position der Kamera auf 5 Distanzeinheiten entlang der Z-Achse, die — wie in CSS — aus dem Bildschirm heraus in Ihre Richtung, also in Richtung der betrachtenden Person, verläuft.

7. Der dritte wesentliche Bestandteil ist ein Renderer. Dies ist ein Objekt, das eine bestimmte Szene rendert, wie sie durch eine bestimmte Kamera gesehen wird. Wir erstellen zunächst einen mit dem Konstruktor [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer), verwenden ihn aber erst später. Fügen Sie als Nächstes die folgenden Zeilen hinzu:

   ```js live-sample___9-webgl-cube
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile legt die Größe fest, mit der der Renderer die Kameraansicht zeichnet, und die dritte Zeile fügt das vom Renderer erstellte {{htmlelement("canvas")}}-Element an das {{htmlelement("body")}}-Element des Dokuments an. Alles, was der Renderer zeichnet, wird nun in unserem Fenster angezeigt.

8. Als Nächstes möchten wir den Würfel erstellen, den wir auf dem Canvas anzeigen werden. Fügen Sie am Ende Ihres JavaScript den folgenden Codeabschnitt hinzu:

   ```js live-sample___9-webgl-cube
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

   Hier gibt es etwas mehr aufzunehmen. Gehen wir es daher schrittweise durch:
   - Zuerst erstellen wir eine globale Variable `cube`, damit wir von überall im Code auf unseren Würfel zugreifen können.
   - Als Nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt und rufen darauf `load()` auf. `load()` akzeptiert in diesem Fall zwei Parameter (es kann allerdings auch mehr akzeptieren): die zu ladende Textur (eine PNG-Datei) und eine Funktion, die ausgeführt wird, wenn die Textur geladen ist.
   - Innerhalb dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um festzulegen, dass das Bild 2 mal 2 wiederholt um alle Seiten des Würfels gelegt werden soll. Als Nächstes erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt und führen sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) zusammen, um unseren Würfel zu erstellen. Ein Objekt benötigt typischerweise eine Geometrie (welche Form es hat) und ein Material (wie seine Oberfläche aussieht).
   - Zuletzt fügen wir unseren Würfel zur Szene hinzu und rufen dann unsere Funktion `draw()` auf, um die Animation zu starten.

9. Bevor wir `draw()` definieren, fügen wir der Szene noch einige Lichter hinzu, um sie etwas zu beleben. Fügen Sie als Nächstes die folgenden Blöcke hinzu:

   ```js live-sample___9-webgl-cube
   const light = new THREE.AmbientLight("white"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("white");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art weiches Licht, das die gesamte Szene etwas aufhellt, ähnlich wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt hingegen ist ein gerichteter Lichtstrahl, eher wie eine Taschenlampe (oder tatsächlich ein Scheinwerfer).

10. Fügen wir zuletzt unsere Funktion `draw()` am Ende des Codes hinzu:

    ```js live-sample___9-webgl-cube
    function draw() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);

      requestAnimationFrame(draw);
    }
    ```

    Das ist recht intuitiv: Bei jedem Frame drehen wir unseren Würfel leicht um seine X- und Y-Achse, rendern dann die Szene aus der Perspektive unserer Kamera und rufen schließlich `requestAnimationFrame()` auf, um das Zeichnen unseres nächsten Frames zu planen.

Das fertige Ergebnis sollte so aussehen:

{{EmbedLiveSample("9-webgl-cube", "100%", 500)}}

> [!NOTE]
> In unserem GitHub-Repository finden Sie außerdem ein weiteres interessantes Beispiel eines 3D-Würfels — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([auch live ansehen](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dieses Beispiel verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Computer-Webcam aufzunehmen und ihn als Textur auf die Seite des Würfels zu projizieren!

## Zusammenfassung

An diesem Punkt sollten Sie eine hilfreiche Vorstellung von den Grundlagen der Grafikprogrammierung mit Canvas und WebGL sowie von den Möglichkeiten dieser APIs haben. Außerdem sollten Sie gut wissen, wo Sie weitere Informationen finden können. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklichen Grundlagen von Canvas behandelt — es gibt noch so viel mehr zu lernen! Die folgenden Artikel führen Sie weiter.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorialreihe, die weit ausführlicher als hier erklärt, was Sie über 2D-Canvas wissen sollten. Unverzichtbare Lektüre.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Reihe, die die Grundlagen der Programmierung mit rohem WebGL vermittelt.
- [Eine grundlegende Demo mit Three.js erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — grundlegendes Three.js-Tutorial. Wir haben auch entsprechende Leitfäden für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spieleentwicklung](/de/docs/Games) — die Einstiegsseite für die Entwicklung von Webspielen auf MDN. Hier sind einige wirklich hilfreiche Tutorials und Techniken zu 2D- und 3D-Canvas verfügbar — siehe die Menüoptionen „Techniques“ und „Tutorials“.

## Beispiele

- [Violent theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API zur Klangerzeugung und Canvas, um eine ansprechende begleitende Visualisierung zu erstellen.
- [Voice change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas, um Echtzeit-Audiodaten aus der Web Audio API zu visualisieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
