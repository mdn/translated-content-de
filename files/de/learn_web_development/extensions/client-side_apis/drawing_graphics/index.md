---
title: Zeichnen von Grafiken
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsfähige Grafikprogrammiertools, von der Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) Sprache bis hin zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in das Canvas und weiterführende Ressourcen, um Ihnen das Lernen zu erleichtern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere mit <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und der Abdeckung von Kern-APIs wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Die Konzepte und Anwendungsfälle, die durch die in dieser Lektion behandelten APIs ermöglicht werden.</li>
          <li>Grundlegende Syntax und Nutzung von <code>&lt;canvas&gt;</code> und zugehörigen APIs.</li>
          <li>Verwendung von Timern und <code>requestAnimationFrame()</code> zum Einrichten von Animationsschleifen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Das Web war ursprünglich nur Text, was sehr langweilig war, daher wurden Bilder eingeführt — zuerst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Dies war jedoch immer noch nicht genug. Während Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden konnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) — da sie durch Markup dargestellt werden — gab es immer noch keine Möglichkeit, dasselbe für Bitmap-Bilder zu tun, und die verfügbaren Werkzeuge waren ziemlich begrenzt. Das Web hatte nach wie vor keine Möglichkeit, effektiv Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die normalerweise von niedrigeren Programmiersprachen wie C++ oder Java übernommen werden.

Die Situation begann sich zu verbessern, als Browser 2004 damit begannen, das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) zu unterstützen. Wie Sie unten sehen werden, bietet Canvas einige nützliche Tools zum Erstellen von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere in Kombination mit einigen der anderen APIs, die die Webplattform bietet, kann jedoch schwierig oder unmöglich zugänglich gemacht werden.

Das folgende Beispiel zeigt eine einfache, auf Canvas basierende 2D-Animation mit hüpfenden Bällen, die wir ursprünglich in unserem Modul [Einführung in JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) kennengelernt haben:

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
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
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

Zwischen 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Dies wurde zu [WebGL](/de/docs/Web/API/WebGL_API), das bei Browseranbietern an Popularität gewann und um 2009–2010 standardisiert wurde. WebGL ermöglicht es Ihnen, echte 3D-Grafiken in Ihrem Webbrowser zu erstellen.

Dieser Artikel wird sich hauptsächlich auf 2D-Canvas konzentrieren, da roher WebGL-Code sehr komplex ist. Wir werden jedoch zeigen, wie man [eine WebGL-Bibliothek verwendet, um eine 3D-Szene einfacher zu erstellen](#webgl), und Sie können ein Tutorial finden, das die Grundzüge von rohem WebGL abdeckt — siehe [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Erste Schritte mit einem `<canvas>`

Wenn Sie eine 2D- _oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-{{htmlelement("canvas")}}-Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Dies ist so einfach wie das Einfügen des Elements auf die Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dadurch wird ein Canvas auf der Seite mit einer Größe von 320 x 240 Pixel erstellt.

Sie sollten einige Fallback-Inhalte innerhalb der `<canvas>`-Tags einfügen. Diese sollten den Canvas-Inhalt für Benutzer von Browsern, die Canvas nicht unterstützen, oder Benutzer von Screenreadern beschreiben.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Der Fallback sollte nützliche alternative Inhalte zum Canvas-Inhalt bereitstellen. Wenn Sie beispielsweise ein ständig aktualisiertes Diagramm von Aktienkursen rendern, könnte der Fallback-Inhalt ein statisches Bild des neuesten Aktienkursdiagramms sein, mit `alt`-Text, der die Kurse in Textform oder eine Liste von Links zu einzelnen Aktienseiten angibt.

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs direkt auf dem Canvas-Element selbst ein oder fügen Sie Fallback-Inhalte innerhalb der öffnenden und schließenden `<canvas>`-Tags ein. Canvas-Inhalte sind nicht Teil des DOM, aber geschachtelte Fallback-Inhalte schon.

### Erstellen und Dimensionieren unseres Canvas

Lassen Sie uns beginnen, indem wir unsere eigene Canvas-Vorlage erstellen, um zukünftige Experimente darin durchzuführen.

1. Erstellen Sie zunächst ein Verzeichnis auf Ihrer lokalen Festplatte mit dem Namen `canvas-template`.
2. Erstellen Sie eine neue Datei in dem Verzeichnis namens `index.html` und speichern Sie den folgenden Inhalt darin:

   ```html
   <!doctype html>
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

   ```html hidden live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop
   <canvas class="myCanvas">
     <p>Add suitable fallback here.</p>
   </canvas>
   ```

3. Erstellen Sie eine neue Datei im Verzeichnis namens `style.css` und speichern Sie die folgende CSS-Regel darin:

   ```css live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
   body {
     margin: 0;
     overflow: hidden;
   }
   ```

4. Erstellen Sie eine neue Datei im Verzeichnis namens `script.js`. Lassen Sie diese Datei vorerst leer.

5. Öffnen Sie jetzt `script.js` und fügen Sie die folgenden Zeilen JavaScript hinzu:

   ```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz auf das Canvas in der Constant `canvas` gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas gleich [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (die uns die Viewport-Breite gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas gleich [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (die uns die Viewport-Höhe gibt). Jetzt haben wir also ein Canvas, das die gesamte Breite und Höhe des Browserfensters füllt!

   Sie werden auch sehen, dass wir Zuweisungen mit mehreren Gleichheitszeichen verkettet haben — dies ist in JavaScript erlaubt und eine gute Technik, wenn Sie mehrere Variablen auf denselben Wert setzen möchten. Wir wollten die Canvas-Breite und -Höhe in den Variablen `width` und `height` leicht zugänglich machen, da sie später nützliche Werte darstellen (wenn Sie beispielsweise etwas genau in der Mitte der Canvas-Breite zeichnen möchten).

> [!NOTE]
> Sie sollten die Größe des Canvas im Allgemeinen mit HTML-Attributen oder DOM-Eigenschaften festlegen, wie oben erklärt. Sie könnten CSS verwenden, aber das Problem ist dann, dass die Größenanpassung nach dem Rendern des Canvas erfolgt, und wie bei jedem anderen Bild könnte das Canvas pixelig/verzerrt werden.

### Abrufen des Canvas-Kontexts und letzter Setup-Schritt

Wir müssen eine letzte Sache tun, bevor wir unsere Canvas-Vorlage als fertig betrachten können. Um auf das Canvas zu zeichnen, müssen wir eine spezielle Referenz auf den Zeichenbereich abrufen, einen sogenannten Kontext. Dies geschieht mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die für die grundlegende Verwendung eine einzelne Zeichenparameterzeichenkette als Parameter annimmt, die den Typ des abzurufenden Kontexts darstellt.

In diesem Fall möchten wir ein 2D-Canvas, also fügen Sie die folgende JavaScript-Zeile unter den anderen in `script.js` hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextwerte, aus denen Sie wählen könnten, umfassen `webgl` für WebGL, `webgpu` für WebGPU usw., aber diese benötigen wir in diesem Artikel nicht.

Das war's — unser Canvas ist jetzt bereit zum Zeichnen! Die `ctx`-Variable enthält jetzt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, und alle Zeichenoperationen auf dem Canvas beinhalten die Manipulation dieses Objekts.

Lassen Sie uns noch eine letzte Sache tun, bevor wir weitermachen. Wir färben den Hintergrund des Canvas schwarz, um Ihnen einen ersten Eindruck von der Canvas-API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop
ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mithilfe der [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)-Eigenschaft des Canvas (dies nimmt [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) an, genau wie CSS-Eigenschaften) und zeichnen dann mit der [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)-Methode ein Rechteck, das den gesamten Bereich des Canvas abdeckt (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, in der Sie das Rechteck zeichnen möchten — wir haben Ihnen gesagt, dass diese `width`- und `height`-Variablen nützlich sein werden!)

OK, unsere Vorlage ist fertig und es ist Zeit, weiterzugehen.

## Grundlagen von 2D-Canvas

Wie wir oben bereits gesagt haben, werden alle Zeichenoperationen durch Manipulation eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts (in unserem Fall `ctx`) durchgeführt. Viele Operationen benötigen Koordinaten, um genau anzugeben, wo etwas gezeichnet werden soll — die obere linke Ecke des Canvas ist Punkt (0, 0), die horizontale (x-)Achse verläuft von links nach rechts, und die vertikale (y-)Achse verläuft von oben nach unten.

![Gitterpapier mit kleinen Quadraten, die seine Fläche bedecken, mit einem stahlblauen Quadrat in der Mitte. Die obere linke Ecke des Canvas ist Punkt (0, 0) der Canvas-x- und y-Achse. Die horizontale (x-)Achse verläuft von links nach rechts und gibt die Breite an, und die vertikale (y-)Achse verläuft von oben nach unten und gibt die Höhe an. Die obere linke Ecke des blauen Quadrats ist als eine Entfernung von x Einheiten von der y-Achse und y Einheiten von der x-Achse beschriftet.](canvas_default_grid.png)

Das Zeichnen von Formen erfolgt in der Regel mit dem Rechteck-Shape-Primitive oder durch Nachzeichnen einer Linie entlang eines bestimmten Pfades und anschließendes Ausfüllen der Form. Unten zeigen wir, wie man beides tut.

### Einfache Rechtecke

Beginnen wir mit einigen einfachen Rechtecken.

1. Machen Sie zunächst eine Kopie Ihres neu codierten Canvas-Vorlagenverzeichnisses.
2. Fügen Sie die folgenden Zeilen am Ende Ihrer JavaScript-Datei hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "red";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie Ihr HTML im Browser laden, sollten Sie sehen, dass ein rotes Rechteck auf Ihrem Canvas erschienen ist. Seine obere linke Ecke ist 50 Pixel von der oberen Kante und der linken Kante des Canvas entfernt (wie in den ersten beiden Parametern definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie in den dritten und vierten Parametern definiert).

3. Fügen wir eine weitere Tabelle in die Mischung ein — diesmal eine grüne. Fügen Sie das folgende unten in Ihr JavaScript ein:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "green";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren Sie, und Sie werden Ihr neues Rechteck sehen. Dies bringt einen wichtigen Punkt zur Sprache: Grafische Operationen wie das Zeichnen von Rechtecken, Linien usw. werden in der Reihenfolge ausgeführt, in der sie auftreten. Stellen Sie es sich wie das Streichen einer Wand vor, bei dem jede Farbschicht die darunter liegenden überlappt und möglicherweise sogar verdeckt. Sie können nichts tun, um dies zu ändern, daher müssen Sie genau überlegen, in welcher Reihenfolge Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, zum Beispiel durch die Verwendung von `rgb()`. Der "Alpha-Kanal" definiert, wie transparent die Farbe ist. Je höher der Wert, desto mehr wird sie das, was dahinter liegt, verdecken. Fügen Sie das folgende zu Ihrem Code hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, einige weitere Rechtecke Ihrer eigenen zu zeichnen; viel Spaß!

### Umrisse und Strichstärken

Bisher haben wir gefüllte Rechtecke betrachtet, aber Sie können auch Rechtecke zeichnen, die nur Umrisse sind (in der Grafikdesign-Sprache als **Strokes** bezeichnet). Um die Farbe festzulegen, die Sie für Ihren Umriss verwenden möchten, verwenden Sie die [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)-Eigenschaft; das Zeichnen eines Umrissrechtecks erfolgt mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Fügen Sie das Folgende zu dem vorherigen Beispiel hinzu, wieder unterhalb der vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "white";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Umrissen beträgt 1 Pixel; Sie können den Wert für die [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)-Eigenschaft ändern, um dies zu ändern (es nimmt eine Zahl, die die Anzahl der Pixel angibt, die der Umriss breit ist). Fügen Sie die folgende Zeile zwischen den vorherigen beiden Zeilen ein:

   ```js
   ctx.lineWidth = 5;
   ```

Jetzt sollten Sie sehen, dass Ihr weißer Umriss viel dicker geworden ist! Das war vorerst alles. An diesem Punkt sollte Ihr Beispiel wie folgt aussehen:

```js hidden live-sample___2-canvas-rectangles
ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);
```

{{EmbedLiveSample("2-canvas-rectangles", '100%', 250)}}

Sie können auf den **Play**-Button klicken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Zeichnen von Pfaden

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Basically, this involves writing code to specify exactly what path the pen should move along on your canvas to trace the shape you want to draw. Canvas includes functions for drawing straight lines, circles, Bézier curves, and more.

Beginnen Sie den Abschnitt, indem Sie eine frische Kopie Ihrer Canvas-Vorlage erstellen, in der Sie das neue Beispiel zeichnen können.

Wir werden einige häufig verwendete Methoden und Eigenschaften verwenden, die in allen folgenden Abschnitten vorkommen:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — starten Sie das Zeichnen eines Pfads an dem Punkt, an dem sich der Stift derzeit auf dem Canvas befindet. Auf einem neuen Canvas beginnt der Stift bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — bewegen Sie den Stift zu einem anderen Punkt auf dem Canvas, ohne die Linie aufzuzeichnen oder nachzuzeichnen; der Stift "springt" zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — zeichnen Sie eine gefüllte Form, indem Sie den bisher nachgezeichneten Pfad ausfüllen.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — zeichnen Sie eine Umrissform, indem Sie einen Umriss entlang des bisher gezeichneten Pfads zeichnen.
- Sie können auch Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` mit Pfaden sowie mit Rechtecken verwenden.

Ein typischer, einfacher Pfadzeichnungsvorgang würde ungefähr so aussehen:

```js
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Zeichnen von Linien

Lassen Sie uns ein gleichseitiges Dreieck auf dem Canvas zeichnen.

1. Fügen Sie zuerst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Diese konvertiert Gradwerte in Radiant, was nützlich ist, da, wann immer Sie einen Winkelwert in JavaScript angeben müssen, dieser fast immer in Radiant sein wird, aber Menschen normalerweise in Grad denken.

   ```js live-sample___3_canvas_paths
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Beginnen Sie dann Ihren Pfad, indem Sie das folgende nach Ihrem vorherigen Zusatz hinzufügen; hier setzen wir eine Farbe für unser Dreieck, beginnen damit, einen Pfad zu zeichnen, und bewegen dann den Stift zu (50, 50), ohne etwas zu zeichnen. Dort werden wir beginnen, unser Dreieck zu zeichnen.

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

   Gehen wir das in der Reihenfolge durch:

   Zuerst zeichnen wir eine Linie bis zu (150, 50) — unser Pfad verläuft jetzt 100 Pixel entlang der x-Achse nach rechts.

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks mithilfe eines einfachen trigonometrischen Verfahrens. Im Grunde genommen zeichnen wir das Dreieck nach unten zeigend. Die Winkel in einem gleichseitigen Dreieck betragen immer 60 Grad; um die Höhe zu berechnen, können wir es in der Mitte in zwei rechtwinklige Dreiecke aufteilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben. In Bezug auf die Seiten:
   - Die längste Seite wird als **Hypotenuse** bezeichnet.
   - Die Seite neben dem 60-Grad-Winkel wird als **Adjacent** bezeichnet — die wir als 50 Pixel kennen, da sie die Hälfte der Linie ist, die wir gerade gezeichnet haben.
   - Die dem 60-Grad-Winkel gegenüberliegende Seite wird als **Opposite** bezeichnet, was die Höhe des Dreiecks ist, die wir berechnen möchten.

   ![Ein gleichseitiges Dreieck, das nach unten zeigt, mit beschrifteten Winkeln und Seiten. Die waagerechte Linie oben ist mit 'Adjacent' beschriftet. Eine senkrechte gestrichelte Linie, von der Mitte der angrenzenden Linie aus, die als 'Opposite' beschriftet ist, spaltet das Dreieck und erzeugt zwei gleiche rechtwinklige Dreiecke. Die rechte Seite des Dreiecks ist als Hypotenuse beschriftet, da sie die Hypotenuse des durch die als 'Opposite' beschriftete Linie gebildeten rechtwinkligen Dreiecks ist. Während alle drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des rechtwinkligen Dreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass die Länge des Adjacent multipliziert mit dem Tangens des Winkels gleich dem Opposite ist, daher kommen wir auf `50 * Math.tan(degToRad(60))`. Wir verwenden unsere `degToRad()`-Funktion, um 60 Grad in Radiant umzuwandeln, da {{jsxref("Math.tan()")}} einen Eingabewert in Radiant erwartet.

4. Mit der berechneten Höhe zeichnen wir eine weitere Linie zu `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss genau in der Mitte zwischen den zuvor festgelegten beiden X-Werten liegen. Der Y-Wert hingegen muss 50 plus der Höhe des Dreiecks sein, da wir wissen, dass die Oberseite des Dreiecks 50 Pixel vom oberen Rand des Canvas entfernt ist.
5. Die nächste Zeile zieht eine Linie zurück zum Ausgangspunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form auszufüllen.

#### Zeichnen von Kreisen

Schauen wir uns nun an, wie man in Canvas einen Kreis zeichnet. Dies wird mit der [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)-Methode erreicht, die den ganzen Kreis oder einen Teil des Kreises an einem angegebenen Punkt zeichnet.

1. Fügen wir ein Bogen zu unserem Canvas hinzu — fügen Sie das folgende am Ende Ihres Codes hinzu:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "blue";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` nimmt sechs Parameter an. Die ersten beiden geben die Position des Mittelpunkts des Bogens an (X und Y). Der dritte ist der Radius des Kreises, der vierte und fünfte sind die Anfangs- und Endwinkel, bei denen der Kreis gezeichnet werden soll (wenn 0 und 360 Grad angegeben werden, erhalten wir einen vollen Kreis), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn (gegen den Uhrzeigersinn) oder im Uhrzeigersinn gezeichnet werden soll (`false` ist im Uhrzeigersinn).

   > [!NOTE]
   > 0 Grad ist horizontal nach rechts.

2. Versuchen wir, einen weiteren Bogen hinzuzufügen:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "yellow";
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   Das Muster ist hier sehr ähnlich, aber mit zwei Unterschieden:
   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird, was bedeutet, dass, obwohl der Bogen zwischen -45 Grad und 45 Grad spezifiziert ist, wir den Bogen um die 270 Grad zeichnen, die sich nicht innerhalb dieses Abschnitts befinden. Wenn Sie `true` zu `false` ändern und den Code erneut ausführen würden, würde nur der 90 Grad große Teil des Kreises gezeichnet.
   - Bevor wir `fill()` aufrufen, ziehen wir eine Linie zum Mittelpunkt des Kreises. Dies ergibt die sehr schöne Pac-Man-ähnliche Aussparung. Wenn Sie diese Linie entfernen (probieren Sie es aus!) und den Code erneut ausführen würden, würde nur eine Kante des Kreises zwischen dem Anfangs- und Endpunkt des Bogens abgeschnitten. Dies veranschaulicht einen weiteren wichtigen Punkt von Canvas — wenn Sie versuchen, einen unvollständigen Pfad (d.h. einen, der nicht abgeschlossen ist) zu füllen, füllt der Browser eine gerade Linie zwischen Anfangs- und Endpunkt aus und füllt Sie dann aus.

Das war vorerst alles; Ihr letztes Beispiel sollte wie folgt aussehen:

{{EmbedLiveSample("3_canvas_paths", '100%', 200)}}

Sie können auf den **Play**-Button klicken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

> [!NOTE]
> Um mehr über fortgeschrittene Funktionen zum Zeichnen von Pfaden, wie zum Beispiel Bézier-Kurven, zu erfahren, lesen Sie unser [Zeichnen von Formen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)-Tutorial.

### Text

Canvas hat auch Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz erkunden. Beginnen Sie, indem Sie eine weitere frische Kopie Ihrer Canvas-Vorlage erstellen, in der ich das neue Beispiel zeichnen könnt.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnet Umriss (Stroke)-Text.

Beide verwenden drei Eigenschaften in ihrer grundlegenden Nutzung: den Textstring, der gezeichnet werden soll, und die X- und Y-Koordinaten des Punkts, an dem das Zeichnen des Textes beginnen soll. Dies funktioniert als **untere linke** Ecke der **Textbox** (buchstäblich der um den Text, den Sie zeichnen, gezogene Rahmen), was Sie verwirren könnte, da andere Zeichenoperationen normalerweise von der oberen linken Ecke ausgehen — behalten Sie dies im Hinterkopf.

Es gibt auch eine Reihe von Eigenschaften, um das Textrendering zu steuern, wie zum Beispiel [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), das die Spezifikation der Schriftfamilie, Größe usw. erlaubt. Es nimmt als Wert dieselbe Syntax wie die CSS {{cssxref("font")}}-Eigenschaft an.

Canvas-Inhalte sind für Screenreader nicht zugänglich. In das Canvas gemalter Text ist im DOM nicht verfügbar, muss jedoch verfügbar gemacht werden, um zugänglich zu sein. In diesem Beispiel, führen wir den Text als Wert für `aria-label` ein.

Versuchen Sie, den folgenden Block am Ende Ihres JavaScripts hinzuzufügen:

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

Hier zeichnen wir zwei Textzeilen, eine Umriss- und die andere Stroke-Zeile. Das Beispiel sollte so aussehen:

{{EmbedLiveSample("4-canvas-text", '100%', 180)}}

Drücken Sie den **Play**-Button, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Spielen Sie damit herum und sehen Sie, was Sie daraus machen können! Weitere Informationen zu den für Canvas-Text verfügbaren Optionen finden Sie unter [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Zeichnen von Bildern auf Canvas

Es ist möglich, externe Bilder auf Ihr Canvas zu rendern. Diese können einfache Bilder, Frames von Videos oder Inhalte anderer Canvas sein. Im Moment schauen wir uns nur den Fall an, einfache Bilder auf unserem Canvas zu verwenden.

1. Machen Sie wie zuvor eine weitere frische Kopie von Ihrer Canvas-Vorlage, in der Sie das neue Beispiel zeichnen.

   Bilder werden mit der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf das Canvas gezeichnet. Die einfachste Version nimmt drei Parameter an — eine Referenz auf das Bild, das Sie rendern möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Beginnen wir damit, eine Bildquelle zu bekommen, die wir in unserem Canvas einbetten können. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

   ```js live-sample___5-canvas-images
   const image = new Image();
   image.src =
     "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt mithilfe des [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktors. Das zurückgegebene Objekt ist derselbe Typ wie der, den Sie zurückerhalten, wenn Sie eine Referenz auf ein bestehendes {{htmlelement("img")}}-Element greifen. Dann setzen wir sein [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut gleich auf unser Firefox-Logo-Bild. An diesem Punkt beginnt der Browser, das Bild zu laden.

3. Wir könnten jetzt versuchen, das Bild mit `drawImage()` einzubetten, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, andernfalls würde der Code fehlschlagen. Wir können dies durch das Laden-Event erreichen, das nur ausgelöst wird, wenn das Bild geladen wurde. Fügen Sie den folgenden Block unterhalb des vorherigen hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel im Browser laden, sollten Sie sehen, dass das Bild im Canvas eingebettet ist, wenn auch ziemlich groß.

4. Aber es gibt noch mehr! Was, wenn wir nur einen Teil des Bildes anzeigen oder es in der Größe verändern möchten? Beides können wir mit der komplexeren Version von `drawImage()` tun. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile folgendermaßen:

   ```js
   ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185);
   ```

   ```js hidden live-sample___5-canvas-images
   image.addEventListener("load", () =>
     ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185),
   );
   ```

   - Der erste Parameter ist die Bildreferenz, wie zuvor.
   - Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links des ersten Parameters oder über dem zweiten wird gezeichnet.
   - Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem ursprünglichen Bild, das wir geladen haben, ausschneiden möchten.
   - Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Bereichs des Bildes relativ zur oberen linken Ecke des Canvas zeichnen möchten.
   - Parameter 8 und 9 definieren die Breite und Höhe, in der Sie den ausgeschnittenen Bereich des Bildes zeichnen möchten. In diesem Fall haben wir dieselben Dimensionen angegeben wie bei dem ursprünglichen Ausschnitt, aber Sie könnten es ändern, indem Sie unterschiedliche Werte angeben.

5. Wenn das Bild bedeutungsvoll aktualisiert ist, muss auch die {{Glossary("accessible_description", "zugängliche Beschreibung")}} aktualisiert werden.

   ```js live-sample___5-canvas-images
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das endgültige Beispiel sollte so aussehen:

{{EmbedLiveSample("5-canvas-images", '100%', 260)}}

Drücken Sie den **Play**-Button, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

## Schleifen und Animationen

Wir haben bisher einige sehr grundlegende Anwendungen für das 2D-Canvas behandelt, aber wirklich werden Sie die volle Leistung von Canvas erst erfahren, wenn Sie es in irgendeiner Weise aktualisieren oder animieren. Schließlich bietet Canvas skriptfähige Bilder! Wenn Sie nichts ändern möchten, könnten Sie genauso gut statische Bilder verwenden und sich die ganze Arbeit sparen.

### Erstellen einer Schleife

Das Spielen mit Schleifen in Canvas macht ziemlich Spaß — Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)- (oder einer anderen Art von) Schleife ausführen, genauso wie bei jedem anderen JavaScript-Code.

Lassen Sie uns ein Beispiel erstellen.

1. Machen Sie eine weitere frische Kopie Ihrer Canvas-Vorlage.
2. Fügen Sie die folgende Zeile am Ende Ihres JavaScripts hinzu. Diese enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js live-sample___6-canvas-for-loop
   ctx.translate(width / 2, height / 2);
   ```

   Dadurch wird der Koordinatenursprung (0, 0) in die Mitte des Canvas verlegt, anstatt in die obere linke Ecke. Dies ist in vielen Situationen sehr nützlich, wie in diesem Fall, in dem wir unser Design relativ zur Mitte des Canvas zeichnen möchten.

3. Fügen Sie nun den folgenden Code am Ende des JavaScripts hinzu:

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

   Hier implementieren wir dieselbe `degToRad()`-Funktion, die wir im vorherigen Dreiecksbeispiel gesehen haben, eine `rand()`-Funktion, die eine Zufallszahl zwischen den angegebenen unteren und oberen Grenzen zurückgibt, und die Variablen `length` und `moveOffset` (über die wir später mehr erfahren).

4. Die Idee hier ist, dass wir etwas auf dem Canvas innerhalb der `for`-Schleife zeichnen werden und es jedes Mal iterieren, damit wir etwas Interessantes erstellen können. Fügen Sie den folgenden Code innerhalb Ihrer `for`-Schleife hinzu:

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
   - Setzen wir `fillStyle` auf einen leicht transparenten Violettton, der sich jedes Mal basierend auf dem Wert von `length` ändert. Wie Sie später sehen werden, wird `length` jedes Mal kleiner, wenn die Schleife durchläuft, sodass der Effekt hier ist, dass die Farbe bei jedem gezeichneten Dreieck heller wird.
   - Beginnen wir den Pfad.
   - Bewegen wir den Stift zu den Koordinaten `(moveOffset, moveOffset)`; diese Variable definiert, wie weit wir bei jedem neuen Dreieck bewegen möchten.
   - Zeichnen wir eine Linie zu den Koordinaten `(moveOffset+length, moveOffset)`. Dies zeichnet eine Linie der Länge `length` parallel zur X-Achse.
   - Berechnen wir die Höhe des Dreiecks, wie zuvor.
   - Zeichnen wir eine Linie zur nach unten zeigenden Ecke des Dreiecks und dann eine Linie zurück zum Startpunkt des Dreiecks.
   - Rufen wir `fill()` auf, um das Dreieck auszufüllen.
   - Aktualisieren wir die Variablen, die die Sequenz der Dreiecke beschreiben, damit wir bereit sind, das nächste zu zeichnen. Wir verringern den `length`-Wert um 1, damit die Dreiecke jedes Mal kleiner werden; erhöhen `moveOffset` um eine kleine Menge, sodass jedes folgende Dreieck etwas weiter entfernt ist, und verwenden eine neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), die es uns erlaubt, das gesamte Canvas zu drehen! Wir drehen es um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das war's! Das endgültige Beispiel sollte folgendermaßen aussehen:

{{EmbedLiveSample("6-canvas-for-loop", '100%', 550)}}

Drücken Sie den **Play**-Button, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Wir möchten Sie ermutigen, mit dem Beispiel zu spielen und es zu Ihrem eigenen zu machen! Zum Beispiel:

- Zeichnen Sie Rechtecke oder Bögen anstelle von Dreiecken oder betten Sie sogar Bilder ein.
- Spielen Sie mit den `length`- und `moveOffset`-Werten.
- Führen Sie einige Zufallszahlen mit der `rand()`-Funktion ein, die wir oben einschließlich aber nicht verwendet haben.

### Animationen

Das Schleifen-Beispiel, das wir oben gebaut haben, war unterhaltsam, aber wirklich benötigen Sie eine konstante Schleife, die immer wieder weiterlaufen kann, wenn Sie ernsthafte Anwendungsmöglichkeiten von Canvas suchen (wie Spiele und Echtzeitvisualisierungen). Wenn Sie Ihre Leinwand als einen Film betrachten, möchten Sie wirklich, dass das Display bei jedem Frame aktualisiert wird, um die aktualisierte Ansicht zu zeigen, mit einer idealen Bildwiederholrate von 60 Bildern pro Sekunde, damit Bewegungen für das menschliche Auge schön und glatt erscheinen.

Es gibt einige JavaScript-Funktionen, die es Ihnen ermöglichen, Funktionen wiederholt, mehrere Male pro Sekunde, auszuführen; die beste für unsere Zwecke hier ist [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Es benötigt einen Parameter — den Namen der Funktion, die Sie für jeden Frame ausführen möchten. Das nächste Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion die neue Aktualisierung für Ihre Animation zeichnet, dann `requestAnimationFrame()` erneuert wird unmittelbar vor dem Ende der Funktion aufgerufen, wird die Animationsschleife weiterlaufen. Die Schleife endet, wenn Sie aufhören, `requestAnimationFrame()` aufzurufen, oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) nach dem Aufrufen von `requestAnimationFrame()` aufrufen, jedoch bevor der Frame aufgerufen wird.

> [!NOTE]
> Es ist eine gute Praxis, `cancelAnimationFrame()` von Ihrem Hauptcode aus zu verwenden, wenn Sie mit der Animation fertig sind, um sicherzustellen, dass keine ausstehenden Aktualisierungen mehr ausgeführt werden.

Der Browser arbeitet komplexe Details aus, wie z. B. die Animation mit einer gleichmäßigen Geschwindigkeit auszuführen, und keine Ressourcen zu verschwenden, um etwas zu animieren, das nicht gesehen werden kann.

Um zu sehen, wie es funktioniert, schauen wir uns noch einmal das Beispiel [Bouncing Balls](#frame_bouncing-balls) an. Der Code für die Schleife, die alles in Bewegung hält, sieht so aus:

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

Wir führen die Funktion `loop()` einmal am Ende des Codes aus, um den Kreislauf zu starten. Sie zeichnet den ersten Animationsrahmen, dann übernimmt die `loop()`-Funktion die Aufgabe, `requestAnimationFrame(loop)` aufzurufen, um den nächsten Frame der Animation erneut und erneut auszuführen.

Beachten Sie, dass wir bei jedem Frame das gesamte Canvas löschen und alles neu zeichnen. Bei jedem Ball, der vorhanden ist, zeichnen wir ihn, aktualisieren seine Position, und prüfen daraufhin, ob er mit anderen Bällen kollidiert. Sobald Sie eine Grafik auf einem Canvas gezeichnet haben, gibt es keine Möglichkeit, diese Grafik individuell zu manipulieren, wie Sie es mit DOM-Elementen tun können. Sie können jeden Ball nicht einzeln auf dem Canvas bewegen, da er, sobald er gezeichnet ist, Teil des Canvas ist und nicht als individuelles zugängliches Element oder Objekt angesehen wird. Stattdessen müssen Sie löschen und neu zeichnen, entweder indem Sie den gesamten Rahmen löschen und alles neu zeichnen oder indem Sie Code haben, der genau weiß, welche Teile gelöscht werden müssen, um nur den minimal notwendigen Bereich des Canvas zu löschen und neu zu zeichnen.

Die Optimierung der Animation von Grafiken ist eine ganze Spezialität der Programmierung, mit vielen cleveren Techniken, die zur Verfügung stehen. Diese gehen jedoch über das hinaus, was wir für unser Beispiel brauchen!

Im Allgemeinen umfasst der Prozess der Erstellung einer Canvas-Animation die folgenden Schritte:

1. Löschen Sie den Inhalt des Canvas (z. B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Speichern Sie den Status (falls erforderlich) mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) — dies ist erforderlich, wenn Sie Einstellungen speichern möchten, die Sie auf dem Canvas aktualisiert haben, bevor Sie fortfahren, was für fortgeschrittenere Anwendungen nützlich ist.
3. Zeichnen Sie die Grafiken, die Sie animieren.
4. Stellen Sie die in Schritt 2 gespeicherten Einstellungen wieder her, indem Sie [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore) verwenden.
5. Rufen Sie `requestAnimationFrame()` auf, um das Zeichnen des nächsten Frames der Animation zu planen.

> [!NOTE]
> Wir werden `save()` und `restore()` hier nicht behandeln, aber sie werden gut in unserem [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations)-Tutorial (und den darauf folgenden) erklärt.

### Gehende Objektanimation

Jetzt lassen Sie uns unsere eigene einfache Animation erstellen — wir animieren ein sich bewegendes Objekt über den Bildschirm mithilfe eines Spritesheets.

1. Machen Sie eine weitere frische Kopie unserer Canvas-Vorlage und öffnen Sie sie in Ihrem Code-Editor.

2. Aktualisieren Sie das Fallback-HTML, um das Bild widerzuspiegeln:

   ```html live-sample___7-canvas-walking-animation
   <canvas class="myCanvas">
     <p>A cat walking.</p>
   </canvas>
   ```

3. Dieses Mal werden wir den Hintergrund nicht schwarz färben. Also malen Sie den Hintergrund in hellgrau, nachdem Sie die `ctx`-Variable abgerufen haben:

   ```js live-sample___7-canvas-walking-animation
   ctx.fillStyle = "#e5e6e9";
   ctx.fillRect(0, 0, width, height);
   ```

4. Fügen Sie am Ende des JavaScripts die folgende Zeile hinzu, um wieder den Koordinatenursprung in der Mitte des Canvas zu positionieren:

   ```js live-sample___7-canvas-walking-animation
   ctx.translate(width / 2, height / 2);
   ```

5. Lassen Sie uns nun ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt erstellen, sein [`src`](/de/docs/Web/API/HTMLImageElement/src) auf das Bild setzen, das wir laden möchten, und einen `onload`-Ereignishandler hinzufügen, der die Funktion `draw()` auslösen wird, wenn das Bild geladen ist:

   ```js live-sample___7-canvas-walking-animation
   const image = new Image();
   image.src =
     "https://developer.mozilla.org/shared-assets/images/examples/web-animations/cat_sprite.png";
   image.onload = draw;
   ```

6. Nun fügen wir einige Variablen hinzu, um die Position zu verfolgen, an der das Sprite auf dem Bildschirm gezeichnet werden soll, und die Spritenummer, die wir anzeigen möchten.

   ```js live-sample___7-canvas-walking-animation
   let spriteIndex = 0;
   let posX = 0;
   const spriteWidth = 300;
   const spriteHeight = 150;
   const totalSprites = 12;
   ```

   Das Spritenbild entstand mit freundlicher Unterstützung von [Rachel Nabors](https://nearestnabors.com/), für ihre Dokumentationsarbeit an der [Web Animations API](/de/docs/Web/API/Web_Animations_API). Es sieht so aus:

   ![Ein Spritesheet mit drei Spalten, wobei jede Spalte eine Sequenz von Bildern eines schwarzen Kätzchens enthält, das sich in unterschiedlichen Tempi nach links bewegt. Jedes Sprite ist 300 Pixel breit und 150 Pixel hoch.](/shared-assets/images/examples/web-animations/cat_sprite.png)

   Es hat drei Spalten. Jede Spalte ist eine Sequenz, die die Katze darstellt, die sich mit unterschiedlichem Tempo bewegt (geht, trabt, galoppiert). Jede Sequenz enthält entweder 12 oder 13 Sprites — jedes ist 300 Pixel breit und 150 Pixel hoch. Wir verwenden die ganz links stehende Lauftsequenz, die 12 Sprites enthält. Um jedes Sprite sauber anzuzeigen, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite Bild aus dem Spritesheet auszuschneiden und nur diesen Teil anzuzeigen, wie wir es bereits mit dem Firefox-Logo gemacht haben. Die X- und Y-Koordinaten des Ausschnitts müssen Vielfache von `spriteWidth` und `spriteHeight`, bzw.; da wir die ganz links stehende Sequenz verwenden, ist die X-Koordinate immer 0. Die Ausschnittsgröße wird immer `spriteWidth` mal `spriteHeight` betragen.

7. Lassen Sie uns nun eine leere `draw()`-Funktion unten im Code einfügen, bereit zum Befüllen mit Code:

   ```js
   function draw() {}
   ```

   ```js-nolint hidden live-sample___7-canvas-walking-animation
   function draw() {
   ```

8. Der Rest des Codes in diesem Abschnitt geht innerhalb `draw()`. Zuerst fügen Sie die folgende Zeile hinzu, die das gesamte Canvas löscht, um jeden Frame zum Zeichnen vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width / 2), -(height / 2)` angeben müssen, weil wir die Ursprungslage zuvor als `width/2, height/2` festgelegt haben.

   ```js live-sample___7-canvas-walking-animation
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

9. Als nächstes zeichnen wir unser Bild mithilfe von `drawImage` — die 9-Parameter-Version. Fügen Sie das folgende hinzu:

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
   - Wir geben `image` als das einzubettende Bild an.
   - Parameter 2 und 3 geben die obere linke Ecke des Ausschnitts an, der aus dem Quellbild ausgeschnitten wird, wobei der X-Wert als 0 (für die ganz linke Spalte) und der Y-Wert sich durch Vielfache von `spriteHeight` ändert. Sie können den X-Wert mit `spriteWidth` oder `2 * spriteWidth` ersetzen, um die anderen Spalten auszuwählen.
   - Parameter 4 und 5 bestimmen die Größe des ausgeschnittenen Bereichs — `spriteWidth` und `spriteHeight`.
   - Parameter 6 und 7 bestimmen die obere linke Ecke der Box, in der der ausgeschnittene Bereich des Bildes auf dem Canvas gezeichnet wird — die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichenposition ändern können, indem wir den `posX`-Wert ändern. Die Y-Position ist `-spriteHeight / 2`, was bedeutet, dass das Bild vertikal zentriert auf dem Canvas wird.
   - Parameter 8 und 9 bestimmen die Größe des Bildes auf dem Canvas. Wir möchten nur seine ursprüngliche Größe beibehalten, also geben wir `spriteWidth` und `spriteHeight` als Breite und Höhe an.

10. Nun werden wir den `spriteIndex`-Wert nach jedem Zeichnen ändern — naja, nach einigen davon jedenfalls. Fügen Sie den folgenden Block am Ende der Funktion `draw()` hinzu:

    ```js live-sample___7-canvas-walking-animation
    if (posX % 11 === 0) {
      if (spriteIndex === totalSprites - 1) {
        spriteIndex = 0;
      } else {
        spriteIndex++;
      }
    }
    ```

    Wir umschließen den gesamten Block in `if (posX % 11 === 0) { }`. Wir verwenden den Modulo-Operator (`%`) (auch bekannt als [Rest-Operator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu überprüfen, ob der `posX`-Wert genau durch 11 ohne Restwert teilbar ist. Wenn ja, wechseln wir zum nächsten Sprite durch Inkrementieren von `spriteIndex` (nachdem wir das letzte fertiggestellt haben, zurück auf 0). Dies bedeutet effektiv, dass wir nur bei jedem 11. Frame den Sprite-Schalter, oder ungefähr alle 6 Frames pro Sekunde (`requestAnimationFrame()` ruft uns bis zu 60 Frames pro Sekunde auf, wenn möglich). Wir verlangsamen absichtlich die Bildrate, weil wir nur 12 Sprites zur Verfügung haben, und wenn wir eines alle 60stel einer Sekunde anzeigen, wird sich unser Objekt viel zu schnell bewegen!

    Innerhalb des äußeren Blocks verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob der `spriteIndex`-Wert beim letzten ist. Wenn wir das letzte Sprite bereits anzeigen, setzen wir `spriteIndex` wieder auf 0; wenn nicht, inkrementieren wir es einfach um 1.

11. Als nächstes müssen wir herausfinden, wie der `posX`-Wert auf jedem Frame geändert wird — fügen Sie den folgenden Codeblock direkt unter Ihrem letzten ein.

    ```js live-sample___7-canvas-walking-animation
    if (posX < -width / 2 - spriteWidth) {
      const newStartPos = width / 2;
      posX = Math.ceil(newStartPos);
    } else {
      posX -= 2;
    }
    ```

    Wir verwenden eine weitere `if...else`-Anweisung, um zu sehen, ob der Wert von `posX` weniger als `-width/2 - spriteWidth` geworden ist, was bedeutet, dass unsere Katze vom linken Rand des Bildschirms gelaufen ist. Wenn dies der Fall ist, berechnen wir eine Position, die die Katze direkt rechts vom rechten Rand des Bildschirms platziert.

    Wenn unsere Katze noch nicht vom Bildschirmrand weg ist, verringern wir `posX` um 2. Dies wird es ein bisschen nach links verschieben das nächste Mal, wenn wir es zeichnen.

12. Schließlich müssen wir die Animationsschleife fortsetzen, indem wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()`-Funktion aufrufen:

    ```js live-sample___7-canvas-walking-animation
    window.requestAnimationFrame(draw);
    ```

```js-nolint hidden live-sample___7-canvas-walking-animation
}
```

Das war's! Das endgültige Beispiel sollte so aussehen:

{{EmbedLiveSample("7-canvas-walking-animation", '100%', 260)}}

Sie können auf den **Play**-Button klicken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Eine einfache Zeichenanwendung

Als ein letztes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben kombiniert werden kann (wie in diesem Fall Mausbewegungen). Wir werden diesmal nicht die gesamte Erstellung mit Ihnen durchgehen; wir werden nur die interessantesten Teile des Codes erkunden.

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

Sie können das Beispiel live unten ausprobieren; Sie können auch auf den **Play**-Button klicken, um es im MDN Playground zu öffnen und den Quellcode zu bearbeiten:

{{EmbedLiveSample("8-canvas-drawing-app", '100%', 600)}}

Schauen wir uns die interessantesten Teile an. Zuerst verfolgen wir die X- und Y-Koordinaten der Maus und ob sie angeklickt wird oder nicht mit drei Variablen: `curX`, `curY` und `pressed`. Wenn sich die Maus bewegt, rufen wir eine Funktion auf, die als `onmousemove`-Ereignishandler gesetzt ist und die aktuellen X- und Y-Werte erfasst. Wir verwenden auch `onmousedown`- und `onmouseup`-Ereignishandler, um den Wert von `pressed` auf `true` zu ändern, wenn die Maustaste gedrückt wird und wieder auf `false`, wenn sie losgelassen wird.

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

Wenn die Schaltfläche "Canvas löschen" gedrückt wird, führen wir eine einfache Funktion aus, die das gesamte Canvas zurück auf schwarz löscht, auf die gleiche Weise wie wir es zuvor gesehen haben:

```js live-sample___8-canvas-drawing-app
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal ziemlich einfach — wenn `pressed` `true` ist, zeichnen wir einen Kreis mit einer Füllstil, der dem Wert im Farbauswahl entspricht, und einem Radius, der dem im Range-Input gesetzten Wert entspricht. Wir müssen den Kreis 85 Pixel über dem Punkt ziehen, den wir erfasst haben, da die vertikale Messung von oben aus dem Ansichtsfenster erfolgt, während wir den Kreis relativ zur oberen Kante des Canvas zeichnen, die unterhalb der 85 Pixel hohen Symbolleiste startet. Wenn wir es mit nur `curY` als y-Koordinate ziehen würden, würde es 85 Pixel niedriger erscheinen als die Mausposition.

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

Alle {{htmlelement("input")}}-Typen werden gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, wird auf ein einfaches Textfeld zurückgefallen.

## WebGL

Es ist jetzt an der Zeit, 2D hinter sich zu lassen und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalte werden mit der [WebGL-API](/de/docs/Web/API/WebGL_API) angegeben, die eine völlig separate API von der 2D-Canvas-API ist, obwohl sie beide auf {{htmlelement("canvas")}}-Elementen gerendert werden.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht es Ihnen, direkt mit der {{Glossary("GPU", "GPU")}} des Computers zu kommunizieren. Daher ist das Schreiben von rohem WebGL näher an Programmiersprachen auf niedriger Ebene wie C++ als an regulärem JavaScript; es ist ziemlich komplex, aber unglaublich leistungsstark.

### Verwendung einer Bibliothek

Aufgrund seiner Komplexität schreiben die meisten Leute 3D-Grafikcode mithilfe einer Drittanbieter-JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten dieser arbeiten auf ähnliche Weise, bieten Funktionalität, um primitive und benutzerdefinierte Formen zu erstellen, anschauen Kameras und Beleuchtung zu positionieren, Flächen mit Texturen zu überziehen und mehr. Sie verarbeiten das WebGL für Sie, sodass Sie auf einer höheren Ebene arbeiten können.

Ja, die Verwendung einer dieser Bibliotheken bedeutet, eine neue API zu erlernen (diesmal eine von einem Drittanbieter in diesem Fall), aber sie sind viel einfacher als das Programmieren von rohem WebGL.

### Ein drehender Würfel

Schauen wir uns ein Beispiel an, wie man mit einer WebGL-Bibliothek etwas erstellt. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der populäreren ist. In diesem Tutorial erstellen wir einen 3D-drehenden Würfel.

1. Erstellen Sie zunächst einen neuen Ordner auf Ihrer lokalen Festplatte mit dem Namen `webgl-cube`.
2. Erstellen Sie darin eine neue Datei namens `index.html` und fügen Sie den folgenden Inhalt hinzu:

   ```html
   <!doctype html>
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

   ```html hidden live-sample___9-webgl-cube
   <script src="https://cdn.jsdelivr.net/npm/three-js@79.0.0/three.min.js"></script>
   ```

3. Erstellen Sie als Nächstes eine weitere neue Datei namens `script.js`, ebenfalls im gleichen Ordner. Lassen Sie sie zunächst leer.
4. Erstellen Sie nun eine neue Datei namens `style.css`, ebenfalls im gleichen Ordner, und fügen Sie den folgenden Inhalt hinzu:

   ```css live-sample___9-webgl-cube
   html,
   body {
     margin: 0;
   }

   body {
     overflow: hidden;
   }
   ```

5. Wir haben `three.js` in unsere Seite eingebunden (das ist das, was das erste `<script>`-Element in unserem HTML tut), dann können wir jetzt damit anfangen, JavaScript, das es verwendet, in `script.js` zu schreiben. Lassen Sie uns damit beginnen, eine neue Szene zu erstellen — fügen Sie das folgende in Ihre `script.js`-Datei ein:

   ```js live-sample___9-webgl-cube
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene)-Konstruktor erstellt eine neue Szene, die die gesamte 3D-Welt darstellt, die wir versuchen anzuzeigen.

6. Als Nächstes benötigen wir eine **Kamera**, damit wir die Szene sehen können. In 3D-Bilderbegriffen stellt die Kamera den Standpunkt des Betrachters in der Welt dar. Um eine Kamera zu erstellen, fügen Sie die folgenden Zeilen als nächstes hinzu:

   ```js live-sample___9-webgl-cube
   const camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000,
   );
   camera.position.z = 5;
   ```

   Der [`PerspectiveCamera()`](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera)-Konstruktor nimmt vier Argumente an:
   - Den Sichtfeld: Wie breit der Bereich vor der Kamera ist, der auf dem Bildschirm sichtbar sein soll, in Grad.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Normalerweise ist dies das Verhältnis der Breite der Szene zur Höhe der Szene. Die Verwendung eines anderen Wertes wird die Szene verzerren (was das sein könnte, was Sie möchten, aber in der Regel nicht).
   - Die Nahe-Ebene: Wie nah die Objekte an der Kamera sein müssen, bevor wir sie nicht mehr auf den Bildschirm rendern. Denken Sie daran, wie wenn Sie Ihre Fingerspitze näher und näher zum Raum zwischen Ihren Augen bewegen, können Sie sie schließlich nicht mehr sehen.
   - Die Ferne-Ebene: Wie weit die Objekte von der Kamera entfernt sind, bevor sie nicht mehr gerendert werden.

   Wir stellen auch die Position der Kamera so ein, dass sie 5 Einheiten vom Z-Achse entfernt ist, die, wie in CSS, aus dem Bildschirm heraus zu Ihnen, dem Zuschauer, ist.

7. Die dritte wesentliche Zutat ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene rendert, wie durch eine gegebene Kamera betrachtet. Wir erstellen einen für jetzt mit dem [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)-Konstruktor, aber wir werden ihn erst später verwenden. Fügen Sie die folgenden Zeilen als nächstes hinzu:

   ```js live-sample___9-webgl-cube
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile setzt die Größe, in der der Renderer die Ansicht der Kamera zeichnet, und die dritte Zeile hängt das vom Renderer erstellte {{htmlelement("canvas")}}-Element an den {{htmlelement("body")}} des Dokuments an. Nun wird alles, was der Renderer zeichnet, in unserem Fenster angezeigt.

8. Als nächstes möchten wir den Würfel, den wir auf dem Canvas anzeigen werden, erstellen. Fügen Sie den folgenden Codeabschnitt am Ende Ihres JavaScripts hinzu:

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

   Es gibt hier ein bisschen mehr zu beachten, also gehen wir es in Phasen durch:
   - Wir erstellen zunächst eine globale Variable `cube`, damit wir auf unseren Würfel von überall im Code zugreifen können.
   - Wir erstellen ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt, und rufen dann `load()` darauf auf. `load()` nimmt in diesem Fall zwei Parameter an (obwohl es mehr annehmen kann): die Textur, die wir laden möchten (ein PNG), und eine Funktion, die ausgeführt wird, wenn die Textur geladen ist.
   - Innerhalb dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um anzugeben, dass wir eine 2 x 2-Wiederholung des Bildes um alle Seiten des Würfels gewickelt wollen. Als nächstes erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt, und fügen sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) zusammen, um unseren Würfel zu erstellen. Ein Objekt erfordert typischerweise eine Geometrie (wie es aussieht) und ein Material (wie seine Oberfläche aussieht).
   - Zuletzt fügen wir unseren Würfel zur Szene hinzu und rufen dann unsere `draw()`-Funktion auf, um die Animation zu starten.

9. Bevor wir zum Definieren von `draw()` gelangen, fügen wir einige Lichter zur Szene hinzu, um es etwas lebendiger zu gestalten. Fügen Sie die folgenden Blöcke als nächstes hinzu:

   ```js live-sample___9-webgl-cube
   const light = new THREE.AmbientLight("white"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("white");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art von weichem Licht, das die gesamte Szene etwas aufhellt, wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt hingegen ist ein gerichteter Lichtstrahl, mehr wie eine Taschenlampe (oder ein Spotlight, in der Tat).

10. Letztendlich fügen wir unserer `draw()`-Funktion am Ende des Codes hinzu:

    ```js live-sample___9-webgl-cube
    function draw() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);

      requestAnimationFrame(draw);
    }
    ```

    Dies ist ziemlich intuitiv; bei jedem Frame drehen wir unseren Würfel leicht auf seiner X- und Y-Achse, dann rendern wir die Szene, wie sie von unserer Kamera betrachtet wird, und rufen schließlich `requestAnimationFrame()` auf, um das Zeichnen unseres nächsten Frames zu planen.

Das fertige Produkt sollte wie folgt aussehen:

{{EmbedLiveSample("9-webgl-cube", "100%", 500)}}

> [!NOTE]
> In unserem GitHub-Repo können Sie auch ein anderes interessantes 3D-Würfel-Beispiel finden — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([siehe es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dies verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Computer-Webcam zu nehmen und ihn auf die Seite des Würfels als Textur zu projizieren!

## Zusammenfassung

An diesem Punkt sollten Sie eine nützliche Idee der Grundlagen der Grafikprogrammierung mit Canvas und WebGL haben und was Sie mit diesen APIs tun können, sowie eine gute Idee, wohin Sie für weiterführende Informationen gehen müssen. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklich grundlegenden Aspekte von Canvas behandelt — es gibt noch so viel mehr zu lernen! Die unten stehenden Artikel führen Sie weiter.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorial-Serie, die erklärt, was Sie über 2D-Canvas wissen sollten, viel ausführlicher als hier behandelt. Essentielle Lektüre.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Serie, die die Grundlagen der rohen WebGL-Programmierung lehrt.
- [Ein grundlegendes Demo mit Three.js aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — grundlegendes Three.js-Tutorial. Wir haben auch gleichwertige Leitfäden für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spieleentwicklung](/de/docs/Games) — die Landingpage für Web-Spieleentwicklung auf MDN. Hier sind einige wirklich nützliche Tutorials und Techniken verfügbar, die sich auf 2D- und 3D-Canvas beziehen — siehe die Optionen für Techniken und Tutorials im Menü.

## Beispiele

- [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API, um Sound zu erzeugen und ein hübsches Visualisierungsbild zu erzeugen, das dazu passt.
- [Voice Change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas, um Echtzeit-Audiodaten von der Web Audio API zu visualisieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
