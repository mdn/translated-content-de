---
title: Grafiken zeichnen
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: 3a839eeed13a60d34db1d39a5ce1594050d56ab0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsfähige Werkzeuge für die Grafikprogrammierung, von der Sprache Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) bis hin zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [die Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in Canvas sowie weiterführende Ressourcen, mit denen Sie mehr lernen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere mit <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">den Grundlagen von JavaScript-Objekten</a> und grundlegenden APIs wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Die Konzepte und Anwendungsfälle, die durch die in dieser Lektion behandelten APIs ermöglicht werden.</li>
          <li>Grundlegende Syntax und Verwendung von <code>&lt;canvas&gt;</code> sowie zugehörigen APIs.</li>
          <li>Verwendung von Timern und <code>requestAnimationFrame()</code> zum Einrichten von Animationsschleifen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Das Web bestand ursprünglich nur aus Text, was sehr langweilig war. Daher wurden Bilder eingeführt — zunächst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} sowie [SVG](/de/docs/Web/SVG).

Das reichte jedoch noch nicht aus. Zwar konnten Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) — da sie durch Markup dargestellt werden —, aber für Bitmap-Bilder gab es weiterhin keine entsprechende Möglichkeit, und die verfügbaren Werkzeuge waren eher begrenzt. Das Web bot noch immer keine effektive Möglichkeit, Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die üblicherweise von Low-Level-Sprachen wie C++ oder Java verarbeitet werden.

Die Situation begann sich zu verbessern, als Browser 2004 damit begannen, das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) zu unterstützen. Wie Sie unten sehen werden, bietet Canvas einige nützliche Werkzeuge zum Erstellen von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere in Kombination mit einigen anderen APIs der Webplattform. Es kann jedoch schwierig oder unmöglich sein, Inhalte zugänglich zu machen.

Das folgende Beispiel zeigt eine einfache, Canvas-basierte 2D-Animation mit springenden Bällen, die wir ursprünglich in unserem Modul [Einführung in JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) kennengelernt haben:

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

Um 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Daraus entstand [WebGL](/de/docs/Web/API/WebGL_API), das bei Browserherstellern Anklang fand und um 2009–2010 standardisiert wurde. Mit WebGL können Sie echte 3D-Grafiken in Ihrem Webbrowser erstellen.

Dieser Artikel konzentriert sich hauptsächlich auf 2D-Canvas, da roher WebGL-Code sehr komplex ist. Wir zeigen jedoch, wie Sie [eine WebGL-Bibliothek verwenden können, um einfacher eine 3D-Szene zu erstellen](#webgl). Ein Tutorial zu rohem WebGL finden Sie an anderer Stelle — siehe [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Erste Schritte mit einem \<canvas>

Wenn Sie eine 2D- _oder_ 3D-Szene auf einer Webseite erstellen möchten, benötigen Sie zunächst ein HTML-{{htmlelement("canvas")}}-Element. Dieses Element wird verwendet, um den Bereich auf der Seite festzulegen, in dem das Bild gezeichnet wird. Das ist so einfach wie das Einfügen des Elements auf der Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dadurch wird ein Canvas mit einer Größe von 320 mal 240 Pixeln auf der Seite erstellt.

Sie sollten zwischen den `<canvas>`-Tags Fallback-Inhalte einfügen. Diese sollten den Canvas-Inhalt für Nutzende von Browsern, die Canvas nicht unterstützen, oder für Nutzende von Screenreadern beschreiben.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Der Fallback sollte nützliche alternative Inhalte für den Canvas-Inhalt bereitstellen. Wenn Sie beispielsweise ein ständig aktualisiertes Diagramm von Aktienkursen darstellen, könnte der Fallback-Inhalt ein statisches Bild des neuesten Aktiendiagramms sein, mit `alt`-Text, der die Kurse als Text angibt, oder eine Liste von Links zu einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Fügen Sie beschreibenden Text als Wert des Attributs [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) direkt auf dem Canvas-Element hinzu oder fügen Sie Fallback-Inhalte innerhalb der öffnenden und schließenden `<canvas>`-Tags ein. Canvas-Inhalte sind kein Teil des DOM, verschachtelte Fallback-Inhalte jedoch schon.

### Unser Canvas erstellen und dimensionieren

Beginnen wir damit, unsere eigene Canvas-Vorlage zu erstellen, in der wir zukünftig experimentieren können.

1. Erstellen Sie zunächst auf Ihrer lokalen Festplatte ein Verzeichnis namens `canvas-template`.
2. Erstellen Sie im Verzeichnis eine neue Datei namens `index.html` und speichern Sie darin die folgenden Inhalte:

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

3. Erstellen Sie im Verzeichnis eine neue Datei namens `style.css` und speichern Sie darin die folgende CSS-Regel:

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

   Hier haben wir eine Referenz auf das Canvas in der Konstante `canvas` gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas auf [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Breite des Viewports liefert). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas auf [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Höhe des Viewports liefert). Jetzt haben wir also ein Canvas, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden auch feststellen, dass wir Zuweisungen mit mehreren Gleichheitszeichen verketten — dies ist in JavaScript zulässig und eine gute Technik, wenn Sie mehrere Variablen auf denselben Wert setzen möchten. Wir wollten die Breite und Höhe des Canvas in den Variablen `width` und `height` leicht zugänglich machen, da diese später nützliche Werte sind (beispielsweise, wenn Sie etwas genau in der Mitte der Canvas-Breite zeichnen möchten).

> [!NOTE]
> Im Allgemeinen sollten Sie die Größe des Canvas mit HTML-Attributen oder DOM-Eigenschaften festlegen, wie oben erläutert. Sie könnten CSS verwenden, allerdings wird die Größenanpassung dann erst vorgenommen, nachdem das Canvas gerendert wurde. Wie jedes andere Bild könnte das Canvas dadurch verpixelt oder verzerrt werden.

### Den Canvas-Kontext abrufen und die endgültige Einrichtung

Wir müssen noch eine letzte Sache erledigen, bevor unsere Canvas-Vorlage fertig ist. Um auf das Canvas zeichnen zu können, müssen wir eine spezielle Referenz auf den Zeichenbereich abrufen, die als Kontext bezeichnet wird. Dies geschieht mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die für die grundlegende Verwendung einen einzelnen String als Parameter entgegennimmt, der den Typ des abzurufenden Kontexts darstellt.

In diesem Fall möchten wir ein 2D-Canvas, also fügen Sie die folgende JavaScript-Zeile unter den anderen in `script.js` hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextwerte, die Sie wählen könnten, sind unter anderem `webgl` für WebGL und `webgpu` für WebGPU, aber diese benötigen wir in diesem Artikel nicht.

Das war's — unser Canvas ist jetzt vorbereitet und bereit zum Zeichnen! Die Variable `ctx` enthält nun ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, und alle Zeichenoperationen auf dem Canvas umfassen die Manipulation dieses Objekts.

Lassen Sie uns noch eine letzte Sache erledigen, bevor wir fortfahren. Wir färben den Canvas-Hintergrund schwarz, um Ihnen einen ersten Eindruck von der Canvas API zu vermitteln. Fügen Sie am Ende Ihres JavaScript die folgenden Zeilen hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop
ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);
```

Hier legen wir mithilfe der [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)-Eigenschaft des Canvas eine Füllfarbe fest (sie akzeptiert [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) genau wie CSS-Eigenschaften). Anschließend zeichnen wir mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) ein Rechteck, das den gesamten Bereich des Canvas abdeckt. Die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, mit denen das Rechteck gezeichnet werden soll — wir haben Ihnen gesagt, dass diese Variablen `width` und `height` nützlich sein würden!

OK, unsere Vorlage ist fertig und es ist Zeit weiterzumachen.

## Grundlagen von 2D-Canvas

Wie oben erwähnt, werden alle Zeichenoperationen durch die Manipulation eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts (in unserem Fall `ctx`) ausgeführt. Viele Operationen benötigen Koordinaten, um genau festzulegen, wo etwas gezeichnet werden soll — oben links im Canvas liegt Punkt (0, 0), die horizontale (x-)Achse verläuft von links nach rechts und die vertikale (y-)Achse von oben nach unten.

![Kariertes Millimeterpapier mit kleinen Quadraten über seine Fläche und einem stahlblauen Quadrat in der Mitte. Die obere linke Ecke des Canvas ist Punkt (0, 0) der x- und y-Achse des Canvas. Die horizontale (x-)Achse verläuft von links nach rechts und bezeichnet die Breite, während die vertikale (y-)Achse von oben nach unten verläuft und die Höhe bezeichnet. Die obere linke Ecke des blauen Quadrats ist mit einem Abstand von x Einheiten von der y-Achse und y Einheiten von der x-Achse beschriftet.](canvas_default_grid.png)

Formen werden üblicherweise mithilfe der Rechteck-Grundform gezeichnet oder indem eine Linie entlang eines bestimmten Pfads nachgezogen und die Form anschließend gefüllt wird. Im Folgenden zeigen wir Ihnen beides.

### Einfache Rechtecke

Beginnen wir mit einigen einfachen Rechtecken.

1. Erstellen Sie zunächst eine Kopie Ihres neu programmierten Canvas-Vorlagenverzeichnisses.
2. Fügen Sie am Ende Ihrer JavaScript-Datei die folgenden Zeilen hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "red";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie Ihr HTML im Browser laden, sollten Sie sehen, dass ein rotes Rechteck auf Ihrem Canvas erscheint. Seine obere linke Ecke ist 50 Pixel vom oberen und linken Rand des Canvas entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit sowie 150 Pixel hoch (wie durch den dritten und vierten Parameter definiert).

3. Fügen wir noch ein weiteres Rechteck hinzu — diesmal ein grünes. Fügen Sie am Ende Ihres JavaScript Folgendes hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "green";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren Sie die Seite, dann sehen Sie Ihr neues Rechteck. Dies verdeutlicht einen wichtigen Punkt: Grafikoperationen wie das Zeichnen von Rechtecken, Linien und Ähnlichem werden in der Reihenfolge ausgeführt, in der sie auftreten. Stellen Sie es sich wie das Streichen einer Wand vor, bei dem jede Farbschicht die darunterliegende überlappt und möglicherweise sogar verdeckt. Sie können daran nichts ändern, daher müssen Sie sorgfältig über die Reihenfolge nachdenken, in der Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, zum Beispiel mit `rgb()`. Der „Alpha-Kanal“ definiert, wie transparent die Farbe ist. Je höher sein Wert ist, desto stärker verdeckt die Farbe alles, was sich dahinter befindet. Fügen Sie Folgendes zu Ihrem Code hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, weitere eigene Rechtecke zu zeichnen; viel Spaß!

### Konturen und Linienbreiten

Bisher haben wir gefüllte Rechtecke betrachtet, aber Sie können auch Rechtecke zeichnen, die nur Umrisse haben (im Grafikdesign als **Konturen** bezeichnet). Um die gewünschte Konturfarbe festzulegen, verwenden Sie die Eigenschaft [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle); ein Rechteck mit Kontur wird mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect) gezeichnet.

1. Fügen Sie dem vorherigen Beispiel erneut unter den vorherigen JavaScript-Zeilen Folgendes hinzu:

   ```js
   ctx.strokeStyle = "white";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Konturen beträgt 1 Pixel. Sie können den Wert der Eigenschaft [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth) anpassen, um dies zu ändern (sie erwartet eine Zahl, die die Breite der Kontur in Pixeln darstellt). Fügen Sie die folgende Zeile zwischen den vorherigen beiden Zeilen hinzu:

   ```js
   ctx.lineWidth = 5;
   ```

Jetzt sollten Sie sehen, dass Ihr weißer Umriss deutlich dicker geworden ist! Das war es vorerst. Ihr Beispiel sollte nun wie folgt aussehen:

```js hidden live-sample___2-canvas-rectangles
ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);
```

{{EmbedLiveSample("2-canvas-rectangles", '100%', 250)}}

Sie können die Schaltfläche **Play** drücken, um das Beispiel in MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Pfade zeichnen

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Grundsätzlich bedeutet dies, Code zu schreiben, der genau festlegt, welchen Pfad der Stift auf Ihrem Canvas entlanglaufen soll, um die gewünschte Form nachzuzeichnen. Canvas enthält Funktionen zum Zeichnen gerader Linien, Kreise, Bézierkurven und mehr.

Beginnen Sie diesen Abschnitt mit einer neuen Kopie Ihrer Canvas-Vorlage, in der Sie das neue Beispiel zeichnen können.

Wir verwenden in allen folgenden Abschnitten einige gemeinsame Methoden und Eigenschaften:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — beginnt das Zeichnen eines Pfads an dem Punkt, an dem sich der Stift aktuell auf dem Canvas befindet. Bei einem neuen Canvas startet der Stift bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — bewegt den Stift zu einem anderen Punkt auf dem Canvas, ohne die Linie aufzuzeichnen oder nachzuziehen; der Stift „springt“ zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — zeichnet eine gefüllte Form, indem der bisher nachgezogene Pfad ausgefüllt wird.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — zeichnet eine Umrissform, indem entlang des bisher gezeichneten Pfads eine Kontur gezogen wird.
- Sie können mit Pfaden ebenso Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` verwenden wie mit Rechtecken.

Eine typische, einfache Pfad-Zeichenoperation könnte etwa so aussehen:

```js
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Linien zeichnen

Zeichnen wir ein gleichseitiges Dreieck auf dem Canvas.

1. Fügen Sie zunächst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Sie wandelt Gradwerte in Bogenmaß um, was nützlich ist, da ein Winkelwert in JavaScript fast immer im Bogenmaß angegeben werden muss, Menschen aber üblicherweise in Grad denken.

   ```js live-sample___3_canvas_paths
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Beginnen Sie als Nächstes Ihren Pfad, indem Sie unter Ihrer vorherigen Ergänzung Folgendes hinzufügen. Hier legen wir eine Farbe für unser Dreieck fest, beginnen einen Pfad zu zeichnen und bewegen den Stift dann zu (50, 50), ohne etwas zu zeichnen. Dort beginnen wir, unser Dreieck zu zeichnen.

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

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks mithilfe einfacher Trigonometrie. Grundsätzlich zeichnen wir das Dreieck mit der Spitze nach unten. Die Winkel in einem gleichseitigen Dreieck betragen immer 60 Grad. Um die Höhe zu berechnen, können wir es in der Mitte in zwei rechtwinklige Dreiecke aufteilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben. Hinsichtlich der Seiten:
   - Die längste Seite wird als **Hypotenuse** bezeichnet.
   - Die Seite neben dem 60-Grad-Winkel wird als **Ankathete** bezeichnet — wir wissen, dass sie 50 Pixel lang ist, da sie die Hälfte der gerade gezeichneten Linie ist.
   - Die Seite gegenüber dem 60-Grad-Winkel wird als **Gegenkathete** bezeichnet. Das ist die Höhe des Dreiecks, die wir berechnen möchten.

   ![Ein gleichseitiges Dreieck, das nach unten zeigt, mit beschrifteten Winkeln und Seiten. Die horizontale Linie oben ist mit „Ankathete“ beschriftet. Eine senkrechte gestrichelte Linie, die von der Mitte der Ankathetenlinie ausgeht und mit „Gegenkathete“ beschriftet ist, teilt das Dreieck und erzeugt zwei gleich große rechtwinklige Dreiecke. Die rechte Seite des Dreiecks ist als Hypotenuse beschriftet, da sie die Hypotenuse des rechtwinkligen Dreiecks ist, das durch die Linie „Gegenkathete“ gebildet wird. Obwohl alle drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des rechtwinkligen Dreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass die Länge der Ankathete multipliziert mit dem Tangens des Winkels gleich der Gegenkathete ist. Daher erhalten wir `50 * Math.tan(degToRad(60))`. Wir verwenden unsere Funktion `degToRad()`, um 60 Grad in Bogenmaß umzuwandeln, da {{jsxref("Math.tan()")}} einen Eingabewert im Bogenmaß erwartet.

4. Nachdem die Höhe berechnet wurde, zeichnen wir eine weitere Linie zu `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss genau zwischen den beiden vorher festgelegten X-Werten liegen. Der Y-Wert hingegen muss 50 plus die Dreieckshöhe betragen, da wir wissen, dass die Spitze des Dreiecks 50 Pixel vom oberen Rand des Canvas entfernt liegt.
5. Die nächste Zeile zeichnet eine Linie zurück zum Startpunkt des Dreiecks.
6. Zum Schluss führen wir `ctx.fill()` aus, um den Pfad abzuschließen und die Form zu füllen.

#### Kreise zeichnen

Sehen wir uns nun an, wie Sie einen Kreis im Canvas zeichnen. Dies geschieht mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc), die einen gesamten Kreis oder einen Teil davon an einem angegebenen Punkt zeichnet.

1. Fügen wir unserem Canvas einen Kreisbogen hinzu — fügen Sie am Ende Ihres Codes Folgendes hinzu:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "blue";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` akzeptiert sechs Parameter. Die ersten beiden geben die Position des Mittelpunkts des Kreisbogens an (jeweils X und Y). Der dritte ist der Radius des Kreises, der vierte und fünfte sind die Start- und Endwinkel, bei denen der Kreis gezeichnet wird (die Angabe von 0 und 360 Grad ergibt also einen vollständigen Kreis), und der sechste Parameter bestimmt, ob der Kreis gegen den Uhrzeigersinn oder im Uhrzeigersinn gezeichnet werden soll (`false` steht für im Uhrzeigersinn).

   > [!NOTE]
   > 0 Grad liegt horizontal nach rechts.

2. Versuchen wir, einen weiteren Kreisbogen hinzuzufügen:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "yellow";
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   Das Muster ist hier sehr ähnlich, weist aber zwei Unterschiede auf:
   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Kreisbogen gegen den Uhrzeigersinn gezeichnet wird. Das bedeutet, dass wir den Kreisbogen um die 270 Grad außerhalb dieses Bereichs zeichnen, obwohl er bei -45 Grad beginnen und bei 45 Grad enden soll. Wenn Sie `true` in `false` ändern und den Code erneut ausführen, wird nur der 90-Grad-Sektor des Kreises gezeichnet.
   - Vor dem Aufruf von `fill()` zeichnen wir eine Linie zum Mittelpunkt des Kreises. Das bedeutet, dass wir den recht ansehnlichen Ausschnitt im Pac-Man-Stil erhalten. Wenn Sie diese Zeile entfernen (probieren Sie es aus!) und den Code erneut ausführen, erhalten Sie lediglich einen abgeschnittenen Rand des Kreises zwischen Start- und Endpunkt des Kreisbogens. Dies veranschaulicht einen weiteren wichtigen Punkt von Canvas: Wenn Sie versuchen, einen unvollständigen Pfad (also einen nicht geschlossenen Pfad) zu füllen, zeichnet der Browser eine gerade Linie zwischen Start- und Endpunkt und füllt ihn anschließend aus.

Das war es vorerst; Ihr fertiges Beispiel sollte wie folgt aussehen:

{{EmbedLiveSample("3_canvas_paths", '100%', 200)}}

Sie können die Schaltfläche **Play** drücken, um das Beispiel in MDN Playground zu öffnen und den Quellcode zu bearbeiten.

> [!NOTE]
> Weitere Informationen über erweiterte Funktionen zum Zeichnen von Pfaden, etwa Bézierkurven, finden Sie in unserem Tutorial [Formen mit Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes).

### Text

Canvas bietet auch Funktionen zum Zeichnen von Text. Sehen wir uns diese kurz an. Erstellen Sie zunächst eine weitere neue Kopie Ihrer Canvas-Vorlage, in der Sie das neue Beispiel zeichnen können.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnet Text als Umriss (Kontur).

In ihrer grundlegenden Verwendung akzeptieren beide drei Eigenschaften: den zu zeichnenden Text-String sowie die X- und Y-Koordinaten des Punkts, an dem mit dem Zeichnen des Textes begonnen werden soll. Dieser Punkt ist die **untere linke** Ecke des **Textfelds** (also des Felds, das den gezeichneten Text umgibt). Das könnte Sie verwirren, da andere Zeichenoperationen üblicherweise von der oberen linken Ecke ausgehen — behalten Sie dies im Hinterkopf.

Es gibt außerdem eine Reihe von Eigenschaften zur Steuerung der Textdarstellung, etwa [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), mit der Sie Schriftfamilie, Größe usw. angeben können. Als Wert akzeptiert sie dieselbe Syntax wie die CSS-Eigenschaft {{cssxref("font")}}.

Canvas-Inhalte sind für Screenreader nicht zugänglich. Auf das Canvas gezeichneter Text ist nicht für das DOM verfügbar, muss aber verfügbar gemacht werden, um zugänglich zu sein. In diesem Beispiel schließen wir den Text als Wert für `aria-label` ein.

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

Hier zeichnen wir zwei Textzeilen, eine als Umriss und die andere als Kontur. Das Beispiel sollte wie folgt aussehen:

{{EmbedLiveSample("4-canvas-text", '100%', 180)}}

Drücken Sie die Schaltfläche **Play**, um das Beispiel in MDN Playground zu öffnen und den Quellcode zu bearbeiten. Probieren Sie es aus und sehen Sie, was Sie erstellen können! Weitere Informationen zu den verfügbaren Optionen für Canvas-Text finden Sie unter [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Bilder auf das Canvas zeichnen

Es ist möglich, externe Bilder auf Ihrem Canvas darzustellen. Dies können einfache Bilder, Frames aus Videos oder die Inhalte anderer Canvases sein. Vorerst betrachten wir nur den Fall, einfache Bilder auf unserem Canvas zu verwenden.

1. Erstellen Sie wie zuvor eine weitere neue Kopie Ihrer Canvas-Vorlage, in der Sie das neue Beispiel zeichnen können.

   Bilder werden mit der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf das Canvas gezeichnet. Die einfachste Version akzeptiert drei Parameter — eine Referenz auf das darzustellende Bild sowie die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Beginnen wir damit, eine Bildquelle abzurufen, die wir in unser Canvas einbetten können. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript hinzu:

   ```js live-sample___5-canvas-images
   const image = new Image();
   image.src =
     "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png";
   ```

   Hier erstellen wir mithilfe des Konstruktors [`Image()`](/de/docs/Web/API/HTMLImageElement/Image) ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt. Das zurückgegebene Objekt hat denselben Typ wie das Objekt, das zurückgegeben wird, wenn Sie eine Referenz auf ein vorhandenes {{htmlelement("img")}}-Element abrufen. Anschließend setzen wir dessen [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut auf unser Firefox-Logo-Bild. An diesem Punkt beginnt der Browser, das Bild zu laden.

3. Wir könnten nun versuchen, das Bild mit `drawImage()` einzubetten, müssen jedoch zunächst sicherstellen, dass die Bilddatei geladen wurde, da der Code andernfalls fehlschlägt. Das können wir mit dem `load`-Ereignis erreichen, das erst ausgelöst wird, wenn das Bild vollständig geladen wurde. Fügen Sie unter dem vorherigen Block Folgendes hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel nun im Browser laden, sollten Sie das Bild im Canvas eingebettet sehen, wenn auch ziemlich groß.

4. Aber es gibt noch mehr! Was ist, wenn wir nur einen Teil des Bildes anzeigen oder seine Größe ändern möchten? Beides ist mit der komplexeren Version von `drawImage()` möglich. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile wie folgt:

   ```js
   ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185);
   ```

   ```js hidden live-sample___5-canvas-images
   image.addEventListener("load", () =>
     ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185),
   );
   ```

   - Der erste Parameter ist wie zuvor die Bildreferenz.
   - Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links vom ersten Parameter oder oberhalb des zweiten wird gezeichnet.
   - Parameter 4 und 5 definieren Breite und Höhe des Bereichs, den wir aus dem geladenen Originalbild ausschneiden möchten.
   - Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Bildausschnitts zeichnen möchten, relativ zur oberen linken Ecke des Canvas.
   - Parameter 8 und 9 definieren die Breite und Höhe, mit denen der ausgeschnittene Bereich des Bildes gezeichnet wird. In diesem Fall haben wir dieselben Abmessungen wie für den ursprünglichen Ausschnitt angegeben, Sie könnten die Größe jedoch ändern, indem Sie andere Werte angeben.

5. Wenn das Bild inhaltlich aktualisiert wird, muss auch die Beschreibung aktualisiert werden.

   ```js live-sample___5-canvas-images
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das fertige Beispiel sollte wie folgt aussehen:

{{EmbedLiveSample("5-canvas-images", '100%', 260)}}

Drücken Sie die Schaltfläche **Play**, um das Beispiel in MDN Playground zu öffnen und den Quellcode zu bearbeiten.

## Schleifen und Animationen

Bisher haben wir einige sehr grundlegende Einsatzmöglichkeiten von 2D-Canvas behandelt, aber Sie werden die volle Leistung von Canvas erst erleben, wenn Sie es auf irgendeine Weise aktualisieren oder animieren. Schließlich stellt Canvas skriptfähige Bilder bereit! Wenn Sie nichts ändern möchten, können Sie ebenso gut statische Bilder verwenden und sich die ganze Arbeit sparen.

### Eine Schleife erstellen

Das Arbeiten mit Schleifen in Canvas macht viel Spaß — Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife (oder einer anderen Art von Schleife) ausführen, genau wie jeden anderen JavaScript-Code.

Erstellen wir ein Beispiel.

1. Erstellen Sie eine weitere neue Kopie Ihrer Canvas-Vorlage.
2. Fügen Sie am Ende Ihres JavaScript die folgende Zeile hinzu. Sie enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js live-sample___6-canvas-for-loop
   ctx.translate(width / 2, height / 2);
   ```

   Dadurch wird der Koordinatenursprung (0, 0) in die Mitte des Canvas verschoben, statt sich in der oberen linken Ecke zu befinden. Das ist in vielen Situationen sehr nützlich, etwa in dieser, in der unser Design relativ zur Mitte des Canvas gezeichnet werden soll.

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

   Hier implementieren wir dieselbe Funktion `degToRad()`, die wir oben im Dreiecksbeispiel gesehen haben, eine Funktion `rand()`, die eine Zufallszahl zwischen angegebenen unteren und oberen Grenzen zurückgibt, sowie die Variablen `length` und `moveOffset` (über die wir später mehr erfahren).

4. Die Idee ist, dass wir innerhalb der `for`-Schleife etwas auf dem Canvas zeichnen und bei jeder Iteration verändern, um etwas Interessantes zu erstellen. Fügen Sie den folgenden Code innerhalb Ihrer `for`-Schleife hinzu:

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

   Bei jeder Iteration führen wir also Folgendes aus:
   - Wir setzen `fillStyle` auf einen leicht transparenten Violettton, der sich jedes Mal entsprechend dem Wert von `length` ändert. Wie Sie später sehen werden, wird die Länge bei jedem Schleifendurchlauf kleiner. Der Effekt besteht also darin, dass die Farbe mit jedem weiteren gezeichneten Dreieck heller wird.
   - Wir beginnen den Pfad.
   - Wir bewegen den Stift zu einer Koordinate von `(moveOffset, moveOffset)`. Diese Variable definiert, wie weit wir bei jedem Zeichnen eines neuen Dreiecks verschieben möchten.
   - Wir zeichnen eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Dadurch wird eine Linie mit der Länge `length` parallel zur X-Achse gezeichnet.
   - Wir berechnen wie zuvor die Höhe des Dreiecks.
   - Wir zeichnen eine Linie zur nach unten gerichteten Ecke des Dreiecks und anschließend eine Linie zurück zum Startpunkt des Dreiecks.
   - Wir rufen `fill()` auf, um das Dreieck zu füllen.
   - Wir aktualisieren die Variablen, welche die Abfolge der Dreiecke beschreiben, damit wir das nächste zeichnen können. Wir verringern den Wert `length` um 1, wodurch die Dreiecke jedes Mal kleiner werden; wir erhöhen `moveOffset` um einen kleinen Betrag, sodass jedes aufeinanderfolgende Dreieck etwas weiter entfernt liegt; und wir verwenden eine weitere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), mit der wir das gesamte Canvas drehen können! Wir drehen es um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das war's! Das fertige Beispiel sollte wie folgt aussehen:

{{EmbedLiveSample("6-canvas-for-loop", '100%', 550)}}

Drücken Sie die Schaltfläche **Play**, um das Beispiel in MDN Playground zu öffnen und den Quellcode zu bearbeiten. Wir möchten Sie dazu ermutigen, mit dem Beispiel zu experimentieren und es zu Ihrem eigenen zu machen! Zum Beispiel:

- Zeichnen Sie statt Dreiecken Rechtecke oder Kreisbögen oder betten Sie sogar Bilder ein.
- Experimentieren Sie mit den Werten `length` und `moveOffset`.
- Fügen Sie mithilfe der oben eingefügten, aber nicht verwendeten Funktion `rand()` einige Zufallszahlen hinzu.

### Animationen

Das oben erstellte Schleifenbeispiel hat Spaß gemacht, aber für ernsthafte Canvas-Anwendungen (etwa Spiele und Echtzeitvisualisierungen) benötigen Sie wirklich eine konstante Schleife, die immer weiterläuft. Wenn Sie Ihr Canvas als Film betrachten, möchten Sie die Anzeige in jedem Frame aktualisieren, um die aktualisierte Ansicht zu zeigen. Idealerweise beträgt die Bildwiederholrate 60 Frames pro Sekunde, damit Bewegungen für das menschliche Auge angenehm flüssig erscheinen.

Es gibt einige JavaScript-Funktionen, mit denen Sie Funktionen mehrmals pro Sekunde wiederholt ausführen können. Die beste für unsere Zwecke ist [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Sie akzeptiert einen Parameter — den Namen der Funktion, die für jeden Frame ausgeführt werden soll. Wenn der Browser das nächste Mal bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion die neue Aktualisierung für Ihre Animation zeichnet und dann kurz vor Ende der Funktion erneut `requestAnimationFrame()` aufruft, läuft die Animationsschleife weiter. Die Schleife endet, wenn Sie `requestAnimationFrame()` nicht mehr aufrufen oder wenn Sie nach dem Aufruf von `requestAnimationFrame()`, aber vor dem Aufruf des Frames, [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) aufrufen.

> [!NOTE]
> Es ist eine bewährte Vorgehensweise, `cancelAnimationFrame()` aus Ihrem Hauptcode aufzurufen, wenn Sie mit der Animation fertig sind, um sicherzustellen, dass keine Aktualisierungen mehr auf die Ausführung warten.

Der Browser kümmert sich um komplexe Details, beispielsweise darum, dass die Animation mit einer gleichmäßigen Geschwindigkeit ausgeführt wird und keine Ressourcen für die Animation von Dingen verschwendet werden, die nicht sichtbar sind.

Um zu sehen, wie dies funktioniert, betrachten wir noch einmal kurz unser [Beispiel mit springenden Bällen](#frame_bouncing-balls). Der Code für die Schleife, die alles in Bewegung hält, sieht folgendermaßen aus:

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

Wir führen die Funktion `loop()` am Ende des Codes einmal aus, um den Zyklus zu starten und den ersten Animationsframe zu zeichnen. Die Funktion `loop()` übernimmt dann den Aufruf von `requestAnimationFrame(loop)`, um immer wieder den nächsten Frame der Animation auszuführen.

Beachten Sie, dass wir bei jedem Frame das Canvas vollständig leeren und alles neu zeichnen. Für jeden vorhandenen Ball zeichnen wir ihn, aktualisieren seine Position und prüfen, ob er mit anderen Bällen kollidiert. Sobald Sie eine Grafik auf ein Canvas gezeichnet haben, gibt es keine Möglichkeit, diese Grafik einzeln zu manipulieren, wie Sie es mit DOM-Elementen können. Sie können nicht jeden Ball auf dem Canvas verschieben, denn sobald er gezeichnet wurde, ist er Teil des Canvas und kein einzelnes zugängliches Element oder Objekt. Stattdessen müssen Sie löschen und neu zeichnen — entweder indem Sie den gesamten Frame löschen und alles neu zeichnen oder indem Sie Code haben, der genau weiß, welche Bereiche gelöscht werden müssen, und nur den minimal erforderlichen Bereich des Canvas löscht und neu zeichnet.

Die Optimierung der Grafikanimation ist ein eigenes Fachgebiet der Programmierung, in dem viele clevere Techniken verfügbar sind. Diese gehen jedoch über das hinaus, was wir für unser Beispiel benötigen!

Im Allgemeinen umfasst der Prozess einer Canvas-Animation die folgenden Schritte:

1. Den Canvas-Inhalt löschen, beispielsweise mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect).
2. Den Zustand bei Bedarf mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) speichern — dies ist nötig, wenn Sie Einstellungen speichern möchten, die Sie auf dem Canvas aktualisiert haben, bevor Sie fortfahren. Das ist für fortgeschrittenere Anwendungen nützlich.
3. Die Grafiken zeichnen, die Sie animieren.
4. Die in Schritt 2 gespeicherten Einstellungen mit [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore) wiederherstellen.
5. `requestAnimationFrame()` aufrufen, um das Zeichnen des nächsten Animationsframes zu planen.

> [!NOTE]
> Wir behandeln `save()` und `restore()` hier nicht, aber sie werden in unserem Tutorial [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations) (und den darauf folgenden Tutorials) gut erklärt.

### Animation eines gehenden Objekts

Erstellen wir nun unsere eigene einfache Animation — wir animieren ein sich über den Bildschirm bewegendes Objekt mit einem Sprite-Sheet.

1. Erstellen Sie eine weitere neue Kopie unserer Canvas-Vorlage und öffnen Sie sie in Ihrem Code-Editor.

2. Aktualisieren Sie das Fallback-HTML so, dass es das Bild widerspiegelt:

   ```html live-sample___7-canvas-walking-animation
   <canvas class="myCanvas">
     <p>A cat walking.</p>
   </canvas>
   ```

3. Dieses Mal färben wir den Hintergrund nicht schwarz. Malen Sie daher nach dem Abrufen der Variable `ctx` den Hintergrund stattdessen hellgrau:

   ```js live-sample___7-canvas-walking-animation
   ctx.fillStyle = "#e5e6e9";
   ctx.fillRect(0, 0, width, height);
   ```

4. Fügen Sie am Ende des JavaScript die folgende Zeile hinzu, um den Koordinatenursprung wieder in die Mitte des Canvas zu setzen:

   ```js live-sample___7-canvas-walking-animation
   ctx.translate(width / 2, height / 2);
   ```

5. Erstellen wir nun ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, setzen dessen [`src`](/de/docs/Web/API/HTMLImageElement/src) auf das zu ladende Bild und fügen einen `onload`-Ereignishandler hinzu, der die Funktion `draw()` ausführt, wenn das Bild geladen wurde:

   ```js live-sample___7-canvas-walking-animation
   const image = new Image();
   image.src =
     "https://developer.mozilla.org/shared-assets/images/examples/web-animations/cat_sprite.png";
   image.onload = draw;
   ```

6. Nun fügen wir einige Variablen hinzu, um die Position nachzuverfolgen, an der das Sprite auf dem Bildschirm gezeichnet werden soll, und die Nummer des anzuzeigenden Sprites.

   ```js live-sample___7-canvas-walking-animation
   let spriteIndex = 0;
   let posX = 0;
   const spriteWidth = 300;
   const spriteHeight = 150;
   const totalSprites = 12;
   ```

   Das Sprite-Bild wurde von [Rachel Nabors](https://nearestnabors.com/) erstellt und mit deren freundlicher Genehmigung für ihre Dokumentationsarbeit an der [Web Animations API](/de/docs/Web/API/Web_Animations_API) geteilt. Es sieht wie folgt aus:

   ![Ein Sprite-Sheet mit drei Spalten, wobei jede Spalte eine Bildsequenz einer schwarzen Katze enthält, die sich in unterschiedlichem Tempo nach links bewegt. Jedes Sprite ist 300 Pixel breit und 150 Pixel hoch.](/shared-assets/images/examples/web-animations/cat_sprite.png)

   Es hat drei Spalten. Jede Spalte ist eine Sequenz, die eine Katze in einem anderen Tempo zeigt (gehend, trabend und galoppierend). Jede Sequenz enthält entweder 12 oder 13 Sprites — jedes ist 300 Pixel breit und 150 Pixel hoch. Wir verwenden die linke Gehsequenz, die 12 Sprites enthält. Um jedes Sprite sauber darzustellen, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild aus dem Sprite-Sheet auszuschneiden und nur diesen Teil anzuzeigen, so wie wir es oben mit dem Firefox-Logo getan haben. Die X- und Y-Koordinaten des Ausschnitts müssen jeweils ein Vielfaches von `spriteWidth` und `spriteHeight` sein. Da wir die am weitesten links liegende Sequenz verwenden, ist die X-Koordinate immer 0. Die Größe des Ausschnitts ist immer `spriteWidth` mal `spriteHeight`.

7. Fügen wir nun am Ende des Codes eine leere Funktion `draw()` ein, die wir anschließend mit Code füllen können:

   ```js
   function draw() {}
   ```

   ```js-nolint hidden live-sample___7-canvas-walking-animation
   function draw() {
   ```

8. Der Rest des Codes in diesem Abschnitt kommt in `draw()`. Fügen Sie zunächst die folgende Zeile hinzu, die das Canvas löscht, um es für das Zeichnen jedes Frames vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width / 2), -(height / 2)` angeben müssen, da wir die Ursprungsposition zuvor auf `width/2, height/2` gesetzt haben.

   ```js live-sample___7-canvas-walking-animation
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

9. Als Nächstes zeichnen wir unser Bild mit der Version von `drawImage` mit 9 Parametern. Fügen Sie Folgendes hinzu:

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
   - Parameter 2 und 3 geben die obere linke Ecke des aus dem Quellbild auszuschneidenden Ausschnitts an. Der X-Wert ist 0 (für die äußerste linke Spalte), und der Y-Wert durchläuft Vielfache von `spriteHeight`. Sie können den X-Wert durch `spriteWidth` oder `2 * spriteWidth` ersetzen, um die anderen Spalten auszuwählen.
   - Parameter 4 und 5 geben die Größe des auszuschneidenden Ausschnitts an — `spriteWidth` und `spriteHeight`.
   - Parameter 6 und 7 geben die obere linke Ecke des Felds an, in das der Ausschnitt auf dem Canvas gezeichnet werden soll. Die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichenposition durch Änderung des Werts `posX` verändern können. Die Y-Position ist `-spriteHeight / 2`, was bedeutet, dass das Bild vertikal auf dem Canvas zentriert wird.
   - Parameter 8 und 9 geben die Größe des Bilds auf dem Canvas an. Wir möchten die Originalgröße beibehalten, daher geben wir `spriteWidth` und `spriteHeight` als Breite und Höhe an.

10. Nun ändern wir nach jedem Zeichnen den Wert `spriteIndex` — nun ja, zumindest nach einigen von ihnen. Fügen Sie den folgenden Block am Ende der Funktion `draw()` hinzu:

    ```js live-sample___7-canvas-walking-animation
    if (posX % 11 === 0) {
      if (spriteIndex === totalSprites - 1) {
        spriteIndex = 0;
      } else {
        spriteIndex++;
      }
    }
    ```

    Wir schließen den gesamten Block in `if (posX % 11 === 0) { }` ein. Wir verwenden den Modulo-Operator (`%`), auch bekannt als [Restoperator](/de/docs/Web/JavaScript/Reference/Operators/Remainder), um zu prüfen, ob der Wert von `posX` ohne Rest durch 11 teilbar ist. Wenn dies der Fall ist, wechseln wir zum nächsten Sprite, indem wir `spriteIndex` erhöhen (und nach dem letzten wieder auf 0 zurücksetzen). Das bedeutet praktisch, dass wir das Sprite nur bei jedem 11. Frame aktualisieren, also ungefähr 6 Mal pro Sekunde (`requestAnimationFrame()` ruft uns nach Möglichkeit bis zu 60 Mal pro Sekunde auf). Wir verlangsamen die Framerate absichtlich, weil wir nur 12 Sprites zur Verfügung haben und sich unser Objekt viel zu schnell bewegen würde, wenn wir eines pro Sechzigstelsekunde anzeigen würden!

    Innerhalb des äußeren Blocks verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob der Wert `spriteIndex` beim letzten Sprite angekommen ist. Wenn wir bereits das letzte Sprite anzeigen, setzen wir `spriteIndex` wieder auf 0 zurück; andernfalls erhöhen wir es einfach um 1.

11. Als Nächstes müssen wir herausfinden, wie der Wert von `posX` bei jedem Frame geändert wird — fügen Sie den folgenden Codeblock direkt unter Ihrem letzten hinzu.

    ```js live-sample___7-canvas-walking-animation
    if (posX < -width / 2 - spriteWidth) {
      const newStartPos = width / 2;
      posX = Math.ceil(newStartPos);
    } else {
      posX -= 2;
    }
    ```

    Wir verwenden eine weitere `if...else`-Anweisung, um festzustellen, ob der Wert von `posX` kleiner geworden ist als `-width/2 - spriteWidth`, was bedeutet, dass unsere Katze über den linken Bildschirmrand hinausgelaufen ist. Wenn dies der Fall ist, berechnen wir eine Position, durch die die Katze gerade rechts vom rechten Bildschirmrand platziert wird.

    Wenn unsere Katze noch nicht über den Bildschirmrand hinausgelaufen ist, verringern wir `posX` um 2. Dadurch bewegt sie sich beim nächsten Zeichnen ein kleines Stück nach links.

12. Schließlich müssen wir die Animationsschleife erstellen, indem wir am Ende der Funktion `draw()` [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) aufrufen:

    ```js live-sample___7-canvas-walking-animation
    window.requestAnimationFrame(draw);
    ```

```js-nolint hidden live-sample___7-canvas-walking-animation
}
```

Das war's! Das fertige Beispiel sollte wie folgt aussehen:

{{EmbedLiveSample("7-canvas-walking-animation", '100%', 260)}}

Sie können die Schaltfläche **Play** drücken, um das Beispiel in MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Eine einfache Zeichenanwendung

Als letztes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben kombiniert werden kann — in diesem Fall mit Mausbewegungen. Wir werden Sie nicht durch den Aufbau dieser Anwendung führen; stattdessen betrachten wir nur die interessantesten Teile des Codes.

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

// convert degrees to radians
function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

// update sizePicker output value

sizePicker.addEventListener(
  "input",
  () => (output.textContent = sizePicker.value),
);
```

Sie können unten direkt mit dem Beispiel experimentieren. Außerdem können Sie auf die Schaltfläche **Play** klicken, um es im MDN Playground zu öffnen, wo Sie den Quellcode bearbeiten können:

{{EmbedLiveSample("8-canvas-drawing-app", '100%', 600)}}

Sehen wir uns die interessantesten Teile an. Zunächst verfolgen wir die X- und Y-Koordinaten der Maus sowie die Information, ob sie geklickt wird, mit drei Variablen: `curX`, `curY` und `pressed`. Wenn sich die Maus bewegt, lösen wir eine Funktion aus, die als `onmousemove`-Ereignishandler festgelegt ist und die aktuellen X- und Y-Werte erfasst. Außerdem verwenden wir die Ereignishandler `onmousedown` und `onmouseup`, um den Wert von `pressed` beim Drücken der Maustaste auf `true` und beim Loslassen wieder auf `false` zu setzen.

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

Wenn die Schaltfläche „Clear canvas“ gedrückt wird, führen wir eine einfache Funktion aus, die das gesamte Canvas wieder schwarz löscht, auf dieselbe Weise, die wir zuvor gesehen haben:

```js live-sample___8-canvas-drawing-app
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal recht einfach — wenn `pressed` den Wert `true` hat, zeichnen wir einen Kreis mit einem Füllstil, der dem Wert in der Farbauswahl entspricht, und einem Radius, der dem im Bereichseingabefeld festgelegten Wert entspricht. Wir müssen den Kreis 85 Pixel oberhalb der Stelle zeichnen, an der wir ihn gemessen haben, da die vertikale Messung vom oberen Rand des Viewports aus vorgenommen wird, wir den Kreis aber relativ zum oberen Rand des Canvas zeichnen, das unterhalb der 85 Pixel hohen Werkzeugleiste beginnt. Wenn wir nur `curY` als y-Koordinate verwenden würden, erschiene der Kreis 85 Pixel tiefer als die Mausposition.

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

Alle {{htmlelement("input")}}-Typen werden gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, fällt er auf einfache Textfelder zurück.

## WebGL

Jetzt ist es Zeit, 2D hinter uns zu lassen und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalte werden mit der [WebGL API](/de/docs/Web/API/WebGL_API) angegeben, einer vollständig getrennten API von der 2D-Canvas-API, auch wenn beide auf {{htmlelement("canvas")}}-Elementen rendern.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht Ihnen die direkte Kommunikation mit der {{Glossary("GPU", "GPU")}} des Computers. Daher ähnelt das Schreiben von rohem WebGL eher Low-Level-Sprachen wie C++ als gewöhnlichem JavaScript; es ist ziemlich komplex, aber unglaublich leistungsstark.

### Eine Bibliothek verwenden

Wegen seiner Komplexität schreiben die meisten Personen 3D-Grafikcode mithilfe einer JavaScript-Bibliothek eines Drittanbieters wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten funktionieren auf ähnliche Weise und bieten Funktionen zum Erstellen grundlegender und benutzerdefinierter Formen, zum Positionieren von Kameras und Beleuchtung, zum Überziehen von Oberflächen mit Texturen und mehr. Sie übernehmen WebGL für Sie, sodass Sie auf einer höheren Ebene arbeiten können.

Ja, die Verwendung einer solchen Bibliothek bedeutet, eine weitere neue API zu lernen — in diesem Fall eine API eines Drittanbieters —, aber sie sind wesentlich einfacher als das Codieren von rohem WebGL.

### Ein sich drehender Würfel

Sehen wir uns ein Beispiel an, wie Sie mit einer WebGL-Bibliothek etwas erstellen können. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der beliebtesten Bibliotheken ist. In diesem Tutorial erstellen wir einen sich drehenden 3D-Würfel.

1. Erstellen Sie zunächst auf Ihrer lokalen Festplatte einen neuen Ordner namens `webgl-cube`.
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
4. Erstellen Sie nun eine weitere neue Datei namens `style.css`, wieder im selben Ordner, und fügen Sie den folgenden Inhalt hinzu:

   ```css live-sample___9-webgl-cube
   html,
   body {
     margin: 0;
   }

   body {
     overflow: hidden;
   }
   ```

5. Wir haben `three.js` in unsere Seite eingebunden (das geschieht durch das erste `<script>`-Element in unserem HTML), daher können wir jetzt in `script.js` JavaScript schreiben, das darauf zurückgreift. Beginnen wir mit dem Erstellen einer neuen Szene — fügen Sie Folgendes in Ihre Datei `script.js` ein:

   ```js live-sample___9-webgl-cube
   const scene = new THREE.Scene();
   ```

   Der Konstruktor [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene) erstellt eine neue Szene, die die gesamte 3D-Welt darstellt, die wir anzeigen möchten.

6. Als Nächstes benötigen wir eine **Kamera**, damit wir die Szene sehen können. In Bezug auf 3D-Bilder stellt die Kamera die Position einer betrachtenden Person in der Welt dar. Um eine Kamera zu erstellen, fügen Sie als Nächstes die folgenden Zeilen hinzu:

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
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Üblicherweise ist dies das Verhältnis der Breite der Szene dividiert durch ihre Höhe. Bei Verwendung eines anderen Werts wird die Szene verzerrt — was möglicherweise gewünscht ist, aber normalerweise nicht.
   - Die Nah-Clipping-Ebene: Wie nah Objekte an der Kamera sein können, bevor wir aufhören, sie auf dem Bildschirm zu rendern. Denken Sie daran, dass Sie Ihre Fingerspitze irgendwann nicht mehr sehen können, wenn Sie sie immer näher an den Bereich zwischen Ihren Augen bewegen.
   - Die Fern-Clipping-Ebene: Wie weit Dinge von der Kamera entfernt sein können, bevor sie nicht mehr gerendert werden.

   Außerdem setzen wir die Position der Kamera auf 5 Entfernungseinheiten entlang der Z-Achse, die — wie in CSS — aus dem Bildschirm heraus zu Ihnen als betrachtende Person zeigt.

7. Der dritte entscheidende Bestandteil ist ein Renderer. Dabei handelt es sich um ein Objekt, das eine bestimmte Szene rendert, betrachtet durch eine bestimmte Kamera. Wir erstellen zunächst einen mit dem Konstruktor [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer), verwenden ihn aber erst später. Fügen Sie als Nächstes die folgenden Zeilen hinzu:

   ```js live-sample___9-webgl-cube
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile legt die Größe fest, in der der Renderer die Kameraansicht zeichnet, und die dritte Zeile hängt das vom Renderer erstellte {{htmlelement("canvas")}}-Element an das {{htmlelement("body")}} des Dokuments an. Alles, was der Renderer zeichnet, wird nun in unserem Fenster angezeigt.

8. Als Nächstes möchten wir den Würfel erstellen, den wir auf dem Canvas anzeigen. Fügen Sie am Ende Ihres JavaScript den folgenden Codeabschnitt hinzu:

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

   Hier gibt es etwas mehr zu erfassen, daher gehen wir es schrittweise durch:
   - Zuerst erstellen wir eine globale Variable `cube`, damit wir von überall im Code auf unseren Würfel zugreifen können.
   - Als Nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt und rufen dann darauf `load()` auf. `load()` akzeptiert in diesem Fall zwei Parameter, obwohl es auch mehr akzeptieren kann: die zu ladende Textur (ein PNG) und eine Funktion, die ausgeführt wird, wenn die Textur geladen wurde.
   - Innerhalb dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um festzulegen, dass wir eine 2-mal-2-Wiederholung des Bilds wünschen, die um alle Seiten des Würfels gewickelt wird. Anschließend erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt und kombinieren sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh), um unseren Würfel zu erstellen. Ein Objekt benötigt typischerweise eine Geometrie (welche Form es hat) und ein Material (wie seine Oberfläche aussieht).
   - Zum Schluss fügen wir unseren Würfel zur Szene hinzu und rufen dann unsere Funktion `draw()` auf, um die Animation zu starten.

9. Bevor wir `draw()` definieren, fügen wir der Szene noch ein paar Lichter hinzu, um sie etwas zu beleben. Fügen Sie als Nächstes die folgenden Blöcke hinzu:

   ```js live-sample___9-webgl-cube
   const light = new THREE.AmbientLight("white"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("white");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art weiches Licht, das die gesamte Szene etwas aufhellt, ähnlich wie die Sonne, wenn Sie sich im Freien befinden. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt hingegen ist ein gerichteter Lichtstrahl, eher wie eine Taschenlampe (oder tatsächlich ein Scheinwerfer).

10. Fügen wir schließlich unsere Funktion `draw()` am Ende des Codes hinzu:

    ```js live-sample___9-webgl-cube
    function draw() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);

      requestAnimationFrame(draw);
    }
    ```

    Dies ist recht intuitiv: Bei jedem Frame drehen wir unseren Würfel leicht um seine X- und Y-Achse, rendern dann die Szene aus Sicht unserer Kamera und rufen schließlich `requestAnimationFrame()` auf, um das Zeichnen des nächsten Frames zu planen.

Das fertige Ergebnis sollte wie folgt aussehen:

{{EmbedLiveSample("9-webgl-cube", "100%", 500)}}

> [!NOTE]
> In unserem GitHub-Repository finden Sie außerdem ein weiteres interessantes 3D-Würfelbeispiel — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([auch live ansehen](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dieses verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Computer-Webcam aufzunehmen und ihn als Textur auf die Seite des Würfels zu projizieren!

## Zusammenfassung

An diesem Punkt sollten Sie eine nützliche Vorstellung von den Grundlagen der Grafikprogrammierung mit Canvas und WebGL haben, davon, was Sie mit diesen APIs tun können, sowie eine gute Vorstellung davon, wo Sie weiterführende Informationen finden. Viel Spaß!

## Siehe auch

Hier haben wir nur die absoluten Grundlagen von Canvas behandelt — es gibt noch so viel mehr zu lernen! Die folgenden Artikel führen Sie weiter.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr ausführliche Tutorialreihe, die deutlich detaillierter als hier erklärt, was Sie über 2D-Canvas wissen sollten. Unverzichtbare Lektüre.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Reihe, die die Grundlagen der Programmierung mit rohem WebGL vermittelt.
- [Eine grundlegende Demo mit Three.js erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — grundlegendes Three.js-Tutorial. Wir haben auch entsprechende Leitfäden für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) und [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spieleentwicklung](/de/docs/Games) — die Einstiegsseite für die Entwicklung von Webspielen auf MDN. Hier sind einige wirklich nützliche Tutorials und Techniken zu 2D- und 3D-Canvas verfügbar — siehe die Menüoptionen Techniken und Tutorials.

## Beispiele

- [Violent theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API, um Ton zu erzeugen, und Canvas, um eine ansprechende Visualisierung dazu zu generieren.
- [Voice change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas, um Echtzeit-Audiodaten aus der Web Audio API zu visualisieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
