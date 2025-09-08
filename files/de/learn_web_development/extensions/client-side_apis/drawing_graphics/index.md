---
title: Grafiken zeichnen
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: 2f31c462c071a25237ff909c354770cf7ef8a644
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsfähige Grafik-Programmierwerkzeuge, von der Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) Sprache bis hin zu APIs zum Zeichnen auf HTML {{htmlelement("canvas")}} Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in das Canvas sowie weitere Ressourcen, die Ihnen ermöglichen, mehr zu erfahren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und grundlegende API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
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

Das Web bestand ursprünglich nur aus Text, was sehr langweilig war, daher wurden Bilder eingeführt — zunächst über das {{htmlelement("img")}} Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Dies war jedoch immer noch nicht genug. Obwohl Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden könnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) — da sie durch Markup dargestellt werden — gab es immer noch keine Möglichkeit, dasselbe für Bitmap-Bilder zu tun, und die verfügbaren Werkzeuge waren eher begrenzt. Das Web hatte immer noch keine Möglichkeit, effektiv Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die üblicherweise von niedrigeren Programmiersprachen wie C++ oder Java gehandhabt werden.

Die Situation begann sich zu verbessern, als Browser im Jahr 2004 begannen, das {{htmlelement("canvas")}} Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) zu unterstützen. Wie Sie unten sehen werden, bietet Canvas einige nützliche Werkzeuge für die Erstellung von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, besonders in Kombination mit einigen der anderen APIs, die die Webplattform bietet, kann jedoch schwierig oder unmöglich zugänglich gemacht werden.

Das folgende Beispiel zeigt eine einfache 2D-Canvas-basierte Animation von hüpfenden Bällen, die wir ursprünglich in unserem Modul [JavaScript-Objekte einführen](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) kennengelernt haben:

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

Um 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Dies wurde zu [WebGL](/de/docs/Web/API/WebGL_API), das unter den Browserherstellern an Fahrt gewann und um 2009–2010 standardisiert wurde. WebGL ermöglicht es Ihnen, echte 3D-Grafiken in Ihrem Webbrowser zu erstellen.

Dieser Artikel wird sich hauptsächlich auf 2D-Canvas konzentrieren, da roher WebGL-Code sehr komplex ist. Wir werden jedoch zeigen, wie man [eine WebGL-Bibliothek verwendet, um eine 3D-Szene einfacher zu erstellen](#webgl), und Sie können ein Tutorial zur Arbeit mit rohem WebGL an anderer Stelle finden — siehe [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Erste Schritte mit einem `<canvas>`

Wenn Sie eine 2D- _oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-{{htmlelement("canvas")}} Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Dies ist so einfach wie das Einfügen des Elements auf der Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dies erstellt ein Canvas auf der Seite mit einer Größe von 320 x 240 Pixeln.

Sie sollten einige Fallback-Inhalte innerhalb der `<canvas>`-Tags einfügen. Diese sollten die Canvas-Inhalte für Benutzer von Browsern beschreiben, die Canvas nicht unterstützen, oder Benutzer von Bildschirmlesegeräten.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Der Fallback sollte nützliche alternative Inhalte zu den Canvas-Inhalten bieten. Wenn Sie beispielsweise ein sich ständig aktualisierendes Diagramm von Aktienkursen rendern, könnten die Fallback-Inhalte ein statisches Bild des neuesten Aktienverlaufs sein, mit `alt`-Text, der angibt, was die Preise in Textform sind, oder eine Liste von Links zu einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalte sind für Bildschirmlesegeräte nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs direkt am Canvas-Element selbst hinzu oder fügen Sie Fallback-Inhalte innerhalb der öffnenden und schließenden `<canvas>`-Tags ein. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte schon.

### Erstellen und Größenanpassung unseres Canvas

Beginnen wir damit, unsere eigene Canvas-Vorlage zu erstellen, um zukünftige Experimente darin zu erstellen.

1. Erstellen Sie zunächst ein Verzeichnis auf Ihrer lokalen Festplatte namens `canvas-template`.
2. Erstellen Sie eine neue Datei im Verzeichnis namens `index.html` und speichern Sie die folgenden Inhalte darin:

   ```html
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

5. Öffnen Sie nun `script.js` und fügen Sie die folgenden JavaScript-Zeilen hinzu:

   ```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz auf das Canvas in der Konstante `canvas` gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas gleich [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Ansichtsbreite gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas gleich [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Ansichtshöhe gibt). Jetzt haben wir also ein Canvas, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden auch sehen, dass wir Zuweisungen mit mehreren Gleichheitszeichen verketten — dies ist in JavaScript erlaubt und ist eine gute Technik, wenn Sie mehrere Variablen alle auf denselben Wert setzen möchten. Wir wollten die Canvas-Breite und -Höhe leicht zugänglich in den Breiten-/Höhenvariablen haben, da es nützliche Werte sind, die später verfügbar sein sollten (zum Beispiel, wenn Sie etwas genau in der Mitte der Breite des Canvas zeichnen möchten).

> [!NOTE]
> Sie sollten im Allgemeinen die Größe des Canvas mit HTML-Attributen oder DOM-Eigenschaften, wie oben erläutert, einstellen. Sie könnten CSS verwenden, aber das Problem dabei ist, dass die Größenanpassung durchgeführt wird, nachdem das Canvas gerendert wurde, und genau wie bei jedem anderen Bild könnte das Canvas dadurch verpixelt/verzerrt werden.

### Abrufen des Canvas-Kontexts und endgültiger Setup

Wir müssen noch eine letzte Sache tun, bevor wir unsere Canvas-Vorlage als fertig betrachten können. Um auf das Canvas zu zeichnen, müssen Sie eine spezielle Referenz auf den Zeichenbereich namens Kontext erhalten. Dies erfolgt mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die für den grundlegenden Gebrauch einen einzelnen String als Parameter nimmt, der den Typ des gewünschten Kontexts darstellt.

In diesem Fall möchten wir ein 2D-Canvas, fügen Sie also die folgende JavaScript-Zeile unter den vorherigen in `script.js` hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextsparameter, die Sie auswählen könnten, sind `webgl` für WebGL, `webgpu` für WebGPU etc., aber wir werden diese in diesem Artikel nicht benötigen.

Das war's also — unser Canvas ist jetzt bereit für das Zeichnen! Die Variable `ctx` enthält jetzt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Objekt, und alle Zeichenoperationen auf dem Canvas werden das Manipulieren dieses Objekts umfassen.

Lassen Sie uns noch eine letzte Sache tun, bevor wir weitermachen. Wir werden den Hintergrund des Canvas schwarz färben, um Ihnen einen ersten Eindruck von der Canvas-API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop
ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mit der Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) des Canvas (dies nimmt [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) an, genau wie CSS-Eigenschaften), dann zeichnen wir ein Rechteck, das den gesamten Bereich des Canvas mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) abdeckt (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, die Sie für das Rechteck gezeichnet haben möchten — wir haben Ihnen gesagt, dass diese Breiten- und Höhenvariablen nützlich sein würden)!

OK, unsere Vorlage ist fertig und es ist Zeit, weiterzumachen.

## Grundlagen des 2D-Canvas

Wie wir oben gesagt haben, werden alle Zeichenoperationen durch das Manipulieren eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts (in unserem Fall `ctx`) durchgeführt. Viele Operationen benötigen Koordinaten, um genau festzulegen, wo etwas gezeichnet werden soll — die obere linke Ecke des Canvas ist Punkt (0, 0), die horizontale (x) Achse verläuft von links nach rechts, und die vertikale (y) Achse verläuft von oben nach unten.

![Gittergraphikpapier mit kleinen Quadraten, die seine Fläche mit einem stahlblauen Quadrat in der Mitte überziehen. Die obere linke Ecke des Canvas ist Punkt (0, 0) des Canvas x-Achse und y-Achse. Die horizontale (x) Achse verläuft von links nach rechts und gibt die Breite an, und die vertikale (y) Achse verläuft von oben nach unten und gibt die Höhe an. Die obere linke Ecke des blauen Quadrats ist als Entfernung von x Einheiten von der y-Achse und y Einheiten von der x-Achse beschriftet.](canvas_default_grid.png)

Das Zeichnen von Formen erfolgt in der Regel mit dem primitiven Rechteck oder durch Verfolgen einer Linie entlang eines bestimmten Pfads und anschließendes Ausfüllen der Form. Im Folgenden zeigen wir, wie beides funktioniert.

### Einfache Rechtecke

Lassen Sie uns mit einigen einfachen Rechtecken beginnen.

1. Fertigen Sie zuerst eine Kopie Ihres neu codierten Canvas-Vorlagenverzeichnisses an.
2. Fügen Sie die folgenden Zeilen am Ende Ihrer JavaScript-Datei hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "red";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie Ihr HTML im Browser laden, sollten Sie ein rotes Rechteck auf Ihrem Canvas erscheinen sehen. Seine obere linke Ecke ist 50 Pixel von oben und links vom Canvasrand entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch den dritten und vierten Parameter definiert).

3. Fügen wir ein weiteres Rechteck zur Mischung hinzu — diesmal ein grünes. Fügen Sie das folgende am unteren Rand Ihres JavaScripts hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "green";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren Sie, und Sie werden Ihr neues Rechteck sehen. Dies wirft einen wichtigen Punkt auf: Grafikoperationen wie das Zeichnen von Rechtecken, Linien usw. werden in der Reihenfolge ausgeführt, in der sie auftreten. Denken Sie daran, es ist wie das Streichen einer Wand, bei der jede Farbschicht überlappt und möglicherweise das darunter liegende verdeckt. Sie können dies nicht ändern, daher müssen Sie sorgfältig über die Reihenfolge nachdenken, in der Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, zum Beispiel durch die Verwendung von `rgb()`. Der "Alphakanal" definiert den Betrag an Transparenz, den die Farbe hat. Je höher der Wert, desto mehr wird er das verdecken, was dahinter ist. Fügen Sie das folgende zu Ihrem Code hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, einige weitere Rechtecke eigenständig zu zeichnen; viel Spaß dabei!

### Linien und Strichbreiten

Bisher haben wir uns das Zeichnen von ausgefüllten Rechtecken angesehen, aber Sie können auch Rechtecke zeichnen, die nur Umrisse (in der Grafikdesignwelt **Striche** genannt) sind. Um die Farbe für Ihren Umriss festzulegen, verwenden Sie die [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)-Eigenschaft; das Zeichnen eines Umrissrechtecks erfolgt mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Fügen Sie das folgende zum vorherigen Beispiel hinzu, erneut unter den vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "white";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Strichen beträgt 1 Pixel; Sie können den Wert der [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)-Eigenschaft anpassen, um dies zu ändern (es nimmt eine Zahl an, die die Anzahl der Pixel angibt, die der Strich breit ist). Fügen Sie die folgende Zeile zwischen den vorherigen beiden Zeilen hinzu:

   ```js
   ctx.lineWidth = 5;
   ```

Nun sollte Ihr weißer Umriss viel dicker geworden sein! Das war's fürs Erste. An diesem Punkt sollte Ihr Beispiel folgendermaßen aussehen:

```js hidden live-sample___2-canvas-rectangles
ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);
```

{{EmbedLiveSample("2-canvas-rectangles", '100%', 250)}}

Sie können die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Zeichnen von Pfaden

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Grundsätzlich bedeutet das, dass Sie Code schreiben, um genau festzulegen, welchen Pfad der Stift auf Ihrem Canvas nehmen soll, um die Form, die Sie zeichnen möchten, nachzuzeichnen. Canvas enthält Funktionen zum Zeichnen gerader Linien, Kreise, Bézierkurven und mehr.

Beginnen Sie diesen Abschnitt, indem Sie eine frische Kopie Ihrer Canvas-Vorlage anfertigen, in der Sie das neue Beispiel zeichnen.

Wir werden einige allgemeine Methoden und Eigenschaften über die folgenden Abschnitte hinweg verwenden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — beginnen Sie, einen Pfad an dem Punkt zu zeichnen, an dem der Stift derzeit auf dem Canvas ist. Auf einem neuen Canvas startet der Stift an (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — bewegen Sie den Stift zu einem anderen Punkt auf dem Canvas, ohne die Linie zu zeichnen oder zu verfolgen; der Stift "springt" zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — zeichnen Sie eine gefüllte Form, indem Sie den Pfad, den Sie bisher gezeichnet haben, ausfüllen.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — zeichnen Sie eine Umrissform, indem Sie einen Strich entlang des Pfads zeichnen, den Sie bisher gezeichnet haben.
- Sie können auch Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` mit Pfaden genauso wie mit Rechtecken verwenden.

Eine typische, einfache Pfadzeichnungsoperation könnte etwa so aussehen:

```js
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Linien zeichnen

Lassen Sie uns ein gleichseitiges Dreieck auf das Canvas zeichnen.

1. Fügen Sie zunächst die folgende Hilfsfunktion am unteren Rand Ihres Codes hinzu. Diese konvertiert Gradwerte in Bogenmaß, was nützlich ist, da immer dann, wenn Sie einen Winkelwert in JavaScript angeben müssen, dieser mit ziemlicher Sicherheit in Bogenmaß angegeben werden muss, während Menschen normalerweise in Grad denken.

   ```js live-sample___3_canvas_paths
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Als Nächstes beginnen Sie Ihren Pfad, indem Sie das folgende unter Ihrer vorherigen Ergänzung hinzufügen; hier setzen wir eine Farbe für unser Dreieck, beginnen, einen Pfad zu zeichnen, und dann bewegen wir den Stift zu (50, 50), ohne etwas zu zeichnen. Dort werden wir beginnen, unser Dreieck zu zeichnen.

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "red";
   ctx.beginPath();
   ctx.moveTo(50, 50);
   ```

3. Fügen Sie nun die folgenden Zeilen am unteren Rand Ihres Skripts hinzu:

   ```js live-sample___3_canvas_paths
   ctx.lineTo(150, 50);
   const triHeight = 50 * Math.tan(degToRad(60));
   ctx.lineTo(100, 50 + triHeight);
   ctx.lineTo(50, 50);
   ctx.fill();
   ```

   Lassen Sie uns dies der Reihe nach durchgehen:

   Zuerst zeichnen wir eine Linie bis zu (150, 50) — unser Pfad verläuft jetzt 100 Pixel nach rechts entlang der x-Achse.

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks mit etwas einfacher Trigonometrie. Grundsätzlich zeichnen wir das Dreieck nach unten zeigend. Die Winkel in einem gleichseitigen Dreieck betragen immer 60 Grad; um die Höhe zu berechnen, können wir es in der Mitte in zwei rechtwinklige Dreiecke teilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben werden. In Bezug auf die Seiten:
   - Die längste Seite wird als **Hypotenuse** bezeichnet.
   - Die Seite neben dem 60-Grad-Winkel wird als **Ansatz** bezeichnet — die wir als 50 Pixel kennen, da es die Hälfte der Linie ist, die wir gerade gezeichnet haben.
   - Die Seite gegenüber dem 60-Grad-Winkel wird als **Gegenkathete** bezeichnet, was die Höhe des Dreiecks ist, die wir berechnen möchten.

   ![Ein gleichseitiges Dreieck, das nach unten zeigt, mit beschrifteten Winkeln und Seiten. Die horizontale Linie oben ist mit 'Ansatz' beschriftet. Eine senkrechte gepunktete Linie, von der Mitte der Ansatzlinie, beschriftet 'Gegenkathete', teilt das Dreieck und erzeugt zwei gleiche rechte Dreiecke. Die rechte Seite des Dreiecks ist mit Hypotenuse beschriftet, da es die Hypotenuse des rechten Dreiecks ist, das durch die Linie mit der Bezeichnung 'Gegenkathete' gebildet wird. während alle drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des rechten Dreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass die Länge des Ansatzes multipliziert mit dem Tangens des Winkels gleich der Gegenkathete ist, daher kommen wir auf `50 * Math.tan(degToRad(60))`. Wir verwenden unsere Funktion `degToRad()`, um 60 Grad in Bogenmaß zu konvertieren, da {{jsxref("Math.tan()")}} erwartet einen Eingabewert in Bogenmaß.

4. Mit der berechneten Höhe zeichnen wir eine weitere Linie zu `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss genau zwischen den vorherigen beiden X-Werten liegen. Der Y-Wert hingegen muss 50 plus der Dreieckshöhe betragen, wie wir wissen, dass die Spitze des Dreiecks 50 Pixel von der Spitze des Canvas entfernt ist.
5. Die nächste Linie zeichnet eine Linie zurück zum Anfangspunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form auszufüllen.

#### Kreise zeichnen

Schauen wir uns nun an, wie man einen Kreis im Canvas zeichnet. Dies wird mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) erreicht, die einen vollständigen oder einen Teil eines Kreises an einem bestimmten Punkt zeichnet.

1. Lassen Sie uns einen Bogen zu unserem Canvas hinzufügen — fügen Sie das folgende am Ende Ihres Codes hinzu:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "blue";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` nimmt sechs Parameter. Die ersten beiden geben die Position des Kreiszentrums (X und Y, beziehungsweise) an. Der dritte ist der Radius des Kreises, der vierte und fünfte sind der Start- und Endwinkel, bei dem der Kreis gezeichnet werden soll (das heißt, wenn Sie 0 und 360 Grad angeben, erhalten Sie einen vollständigen Kreis), und der sechste Parameter gibt an, ob der Kreis gegen den Uhrzeigersinn (entgegen dem Uhrzeigersinn) oder im Uhrzeigersinn (`false` ist im Uhrzeigersinn) gezeichnet werden soll.

   > [!NOTE]
   > 0 Grad ist horizontal nach rechts.

2. Lassen Sie uns einen weiteren Bogen hinzufügen:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "yellow";
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   Das Muster hier ist sehr ähnlich, aber mit zwei Unterschieden:
   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird. Dadurch wird, obwohl der Bogen als Start bei -45 Grad und Ende bei 45 Grad angegeben ist, der Bogen um die 270 Grad gezeichnet, die sich nicht innerhalb dieses Teils befinden. Wenn Sie `true` zu `false` ändern und dann den Code erneut ausführen würden, würde nur der 90-Grad-Schnitt des Kreises gezeichnet.
   - Bevor wir `fill()` aufrufen, zeichnen wir eine Linie zum Zentrum des Kreises. Dies bedeutet, dass wir den ziemlich netten Pac-Man-Stil-Ausschnitt erhalten. Wenn Sie diese Linie entfernen (probieren Sie es aus!) und dann den Code erneut ausführen, würde nur eine Ecke des Kreises zwischen dem Start- und Endpunkt des Bogens abgeschnitten. Dies veranschaulicht einen weiteren wichtigen Punkt des Canvas — wenn Sie versuchen, einen unvollständigen Pfad (d.h. einen nicht geschlossenen) auszufüllen, füllt der Browser eine gerade Linie zwischen dem Start- und Endpunkt ein und dann füllt er ihn aus.

Das war's für jetzt; Ihr endgültiges Beispiel sollte so aussehen:

{{EmbedLiveSample("3_canvas_paths", '100%', 200)}}

Sie können den **Play**-Button drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

> [!NOTE]
> Um mehr über fortgeschrittene Pfadzeichnungsfunktionen wie Bézierkurven zu erfahren, lesen Sie unser [Zeichnen von Formen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)-Tutorial.

### Text

Canvas bietet auch Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz erkunden. Beginnen Sie damit, eine weitere frische Kopie Ihrer Canvas-Vorlage zu erstellen, um das neue Beispiel zu zeichnen.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnet Umriss- (Strich-)Text.

Beide nehmen in ihrer Grundverwendung drei Eigenschaften: den zu zeichnenden Textstring sowie die X- und Y-Koordinaten des Punktes, an dem der Text gezeichnet werden soll. Dies stellt die **untere linke** Ecke des **Textfelds** dar (buchstäblich, das das den Text umgebende Feld, das Sie zeichnen), was Sie verwirren könnte, da andere Zeichenoperationen tendenziell von der oberen linken Ecke aus starten — beachten Sie dies.

Es gibt auch eine Reihe von Eigenschaften, um das Textrendering zu steuern, wie [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), mit der Sie die Schriftfamilie, Größe usw. spezifizieren können. Sie nimmt als Wert die gleiche Syntax wie die CSS-Eigenschaft {{cssxref("font")}}.

Canvas-Inhalte sind für Bildschirmlesegeräte nicht zugänglich. Text, der auf das Canvas gemalt wird, ist nicht im DOM verfügbar, muss aber verfügbar gemacht werden, um zugänglich zu sein. In diesem Beispiel fügen wir den Text als Wert für `aria-label` hinzu.

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

Hier zeichnen wir zwei Textzeilen, eine mit Umriss und die andere mit Strich. Das Beispiel sollte so aussehen:

{{EmbedLiveSample("4-canvas-text", '100%', 180)}}

Drücken Sie den **Play**-Button, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Experimentieren Sie und sehen Sie, was Sie sich einfallen lassen! Sie können weitere Informationen zu den für Canvas-Text verfügbaren Optionen im Artikel [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) finden.

### Bilder auf das Canvas zeichnen

Es ist möglich, externe Bilder auf Ihr Canvas zu rendern. Dies können einfache Bilder, Frames aus Videos oder Inhalte anderer Canvas sein. Für den Moment werden wir uns nur den Fall anschauen, einige einfache Bilder auf unserem Canvas zu verwenden.

1. Erstellen Sie wie zuvor eine weitere neue Kopie Ihrer Canvas-Vorlage, um das neue Beispiel zu zeichnen.

   Bilder werden auf das Canvas mit der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) gezeichnet. Die einfachste Version nimmt drei Parameter — eine Referenz auf das Bild, das Sie rendern möchten, sowie die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Beginnen wir mit der Eingabe einer Bildquelle, die wir in unser Canvas einbetten können. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript hinzu:

   ```js live-sample___5-canvas-images
   const image = new Image();
   image.src =
     "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Objekt mithilfe des Konstruktors [`Image()`](/de/docs/Web/API/HTMLImageElement/Image). Das zurückgegebene Objekt ist vom gleichen Typ, der zurückgegeben wird, wenn Sie eine Referenz auf ein vorhandenes {{htmlelement("img")}} Element erhalten. Dann setzen wir sein [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut auf unser Firefox-Logo-Image. An diesem Punkt beginnt der Browser, das Bild zu laden.

3. Wir könnten nun versuchen, das Bild mit `drawImage()` einzubetten, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, sonst wird der Code fehlschlagen. Wir können dies mit dem `load`-Ereignis erreichen, das nur ausgelöst wird, wenn das Bild fertig geladen ist. Fügen Sie den folgenden Block unter dem vorherigen hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie das eingebettete Bild im Canvas sehen, wenn auch ziemlich groß.

4. Aber da ist noch mehr! Was wäre, wenn wir nur einen Teil des Bildes anzeigen oder es verkleinern möchten? Beides können wir mit der komplexeren Version von `drawImage()` tun. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile folgendermaßen:

   ```js
   ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185);
   ```

   ```js hidden live-sample___5-canvas-images
   image.addEventListener("load", () =>
     ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185),
   );
   ```

   - Der erste Parameter ist die Bildreferenz, wie zuvor.
   - Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild herausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links vom ersten Parameter oder über dem zweiten wird gezeichnet.
   - Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem Originalbild, das wir geladen haben, herausschneiden möchten.
   - Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Bereichs des Bildes zeichnen möchten, relativ zur oberen linken Ecke des Canvas.
   - Parameter 8 und 9 definieren die Breite und Höhe, um den ausgeschnittenen Bereich des Bildes zu zeichnen. In diesem Fall haben wir die gleichen Dimensionen wie der ursprüngliche Ausschnitt angegeben, aber Sie könnten es auch skalieren, indem Sie unterschiedliche Werte angeben.

5. Wenn das Bild bedeutsam aktualisiert wird, muss auch die {{Glossary("accessible_description", "zugängliche Beschreibung")}} aktualisiert werden.

   ```js live-sample___5-canvas-images
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das endgültige Beispiel sollte so aussehen:

{{EmbedLiveSample("5-canvas-images", '100%', 260)}}

Drücken Sie den **Play**-Button, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

## Schleifen und Animationen

Bisher haben wir einige sehr grundlegende Anwendungsfälle von 2D-Canvas behandelt, aber Sie werden wirklich die volle Leistungsfähigkeit von Canvas nicht erfahren, es sei denn, Sie aktualisieren oder animieren es auf irgendeine Weise. Immerhin bietet Canvas skriptfähige Bilder! Wenn Sie nichts ändern, könnten Sie genauso gut statische Bilder verwenden und sich die ganze Arbeit sparen.

### Eine Schleife erstellen

Mit Schleifen in Canvas zu spielen, macht ziemlichen Spaß — Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)- (oder einer anderen Schleifen-) Schleife genauso wie jeden anderen JavaScript-Code ausführen.

Bauen wir ein Beispiel.

1. Erstellen Sie eine weitere neue Kopie Ihrer Canvas-Vorlage.
2. Fügen Sie die folgende Zeile am Ende Ihres JavaScript hinzu. Diese enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js live-sample___6-canvas-for-loop
   ctx.translate(width / 2, height / 2);
   ```

   Dadurch wird der Koordinatenursprung (0, 0) auf die Mitte des Canvas anstatt in die obere linke Ecke verschoben. Dies ist in vielen Situationen sehr nützlich, wie hier, wo wir möchten, dass unser Design relativ zur Mitte des Canvas gezeichnet wird.

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

   Hier implementieren wir die gleiche `degToRad()`-Funktion, die wir im Dreieck-Beispiel oben gesehen haben, eine `rand()`-Funktion, die eine Zufallszahl zwischen den angegebenen unteren und oberen Grenzen zurückgibt, und die `length`- und `moveOffset`-Variablen (mehr dazu später).

4. Die Idee hier ist, dass wir im `for`-Schleifenblock irgendetwas auf das Canvas zeichnen und bei jedem Mal ein bisschen iterieren, um etwas Interessantes zu erstellen. Fügen Sie den folgenden Code in Ihre `for`-Schleife ein:

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

   Bei jeder Iteration machen wir Folgendes:
   - Wir setzen das `fillStyle` so, dass es ein Hauch von etwas transparentem Lila ist, das sich jedes Mal basierend auf dem Wert von `length` ändert. Wie Sie später sehen werden, wird `length` jedes Mal kleiner, wenn die Schleife ausgeführt wird, und der Effekt ist, dass die Farbe mit jedem anderen gezeichneten Dreieck heller wird.
   - Beginnen den Pfad.
   - Bewegen den Stift zu einer Koordinate von `(moveOffset, moveOffset)`. Diese Variable definiert, wie weit wir jedes Mal etwas Neues zeichnen wollen.
   - Zeichnen eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Diese zeichnet eine Linie der Länge `length` parallel zur x-Achse.
   - Berechnen die Höhe des Dreiecks, wie zuvor.
   - Zeichnen eine Linie zur nach unten zeigenden Ecke des Dreiecks, dann zeichnen wir eine Linie zurück zum Ausgangspunkt des Dreiecks.
   - Rufen `fill()` auf, um das Dreieck auszufüllen.
   - Aktualisieren die Variablen, die die Sequenz von Dreiecken beschreiben, sodass wir bereit sind, das nächste zu zeichnen. Wir verringern den Wert von `length` um 1, damit die Dreiecke jedes Mal kleiner werden; erhöhen den Wert von `moveOffset` um einen kleinen Betrag, damit jedes aufeinanderfolgende Dreieck etwas weiter entfernt ist, und verwenden eine weitere neue Funktion, `rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), mit der wir das gesamte Canvas rotieren lassen können! Wir drehen es um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das war's! Das endgültige Beispiel sollte so aussehen:

{{EmbedLiveSample("6-canvas-for-loop", '100%', 550)}}

Drücken Sie den **Play**-Button, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Wir möchten Sie ermutigen, mit dem Beispiel zu experimentieren und es so anzupassen, dass es für Sie funktioniert! Zum Beispiel:

- Zeichnen Sie Rechtecke oder Bögen anstelle von Dreiecken oder betten Sie sogar Bilder ein.
- Experimentieren Sie mit den `length`- und `moveOffset`-Werten.
- Fügen Sie ein paar Zufallszahlen mit der `rand()`-Funktion ein, die wir oben eingeführt aber nicht verwendet haben.

### Animationen

Das Schleifen-Beispiel, das wir oben erstellt haben, war ziemlich spaßig, aber wirklich benötigt man eine konstante Schleife, die immer weiterläuft, für ernsthafte Canvas-Anwendungen (wie Spiele und Echtzeit-Visualisierungen). Wenn Sie über Ihr Canvas wie einen Film nachdenken, möchten Sie tatsächlich, dass sie Anzeige mit jedem Frame aktualisiert wird, um die zu aktualisierende Ansicht anzuzeigen, mit einem idealen Aktualisierungsrate von 60 Frames pro Sekunde, sodass die Bewegung glatt für das menschliche Auge aussieht.

Es gibt einige JavaScript-Funktionen, die es Ihnen ermöglichen, Funktionen mehrmals pro Sekunde auszuführen, wobei die beste für unsere Zwecke hier [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) ist. Sie nimmt einen Parameter — den Namen der Funktion, die Sie für jeden Frame ausführen möchten. Das nächste Mal, wenn der Browser bereit ist, das Display zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion die neue Aktualisierung für Ihre Animation zeichnet und `requestAnimationFrame ()` erneut aufruft, kurz bevor die Funktion endet, wird die Animationsschleife weiter ausgeführt. Die Schleife endet, wenn Sie aufhören, `requestAnimationFrame()` aufzurufen oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) nach dem Aufrufen von `requestAnimationFrame()` aufrufen, aber bevor der Frame aufgerufen wird.

> [!NOTE]
> Es ist eine gute Praxis, `cancelAnimationFrame()` von Ihrem Hauptprogramm aufzurufen, wenn Sie mit der Animation fertig sind, um sicherzustellen, dass keine Updates mehr auf die Ausführung warten.

Der Browser berechnet komplexe Details wie beispielsweise, wie die Animation mit konstanter Geschwindigkeit ausgeführt wird, und spart Ressourcen, indem er keine Animationen ausführt, die nicht gesehen werden können.

Um zu sehen, wie das funktioniert, werfen wir einen kurzen Blick auf unser [hüpfende Bälle Beispiel](#frame_bouncing-balls) zurück. Der Code für die Schleife, die alles in Bewegung hält, sieht so aus:

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

Wir führen die `loop()`-Funktion einmal am Ende des Codes aus, um den Kreislauf zu starten und den ersten Frame der Animation zu zeichnen. Die `loop()`-Funktion übernimmt dann die Aufgabe, `requestAnimationFrame(loop)` aufzurufen, um den nächsten Frame der Animation auszuführen, immer wieder.

Beachten Sie, dass wir bei jedem Frame das Canvas vollständig löschen und alles neu zeichnen. Für jeden vorhandenen Ball zeichnen wir ihn, aktualisieren seine Position und überprüfen, ob er mit anderen Bällen kollidiert. Sobald Sie einen Ball auf einem Canvas gezeichnet haben, ist es nicht möglich, diesen Ball einzeln zu manipulieren, wie Sie es mit DOM-Elementen tun können. Sie können jeden Ball nicht auf dem Canvas bewegen, weil er, sobald er gezeichnet wurde, Teil des Canvas wird und kein individuell zugängliches Element oder Objekt ist. Stattdessen müssen Sie löschen und neu zeichnen, entweder indem Sie den gesamten Frame löschen und alles neu zeichnen, oder indem Sie Code schreiben, der genau weiß, welche Teile gelöscht und nur das Minimum an Canvas gelöscht und neu gezeichnet werden müssen.

Die Optimierung der Grafikanimation ist eine gesamte Spezialität der Programmierung, mit vielen cleveren verfügbaren Techniken. Diese gehen jedoch über das hinaus, was wir für unser Beispiel brauchen!

Im Allgemeinen umfasst der Prozess des Animierens eines Canvas die folgenden Schritte:

1. Löschen Sie den Canvas-Inhalt (z. B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Speichern Sie den Status (falls erforderlich) mithilfe von [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) — dies ist erforderlich, wenn Sie Einstellungen, die Sie auf dem Canvas aktualisiert haben, speichern möchten, bevor Sie fortfahren, was nützlich für fortgeschrittenere Anwendungen ist.
3. Zeichnen Sie die Grafiken, die Sie animieren.
4. Stellen Sie die in Schritt 2 gespeicherten Einstellungen mit [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore) wieder her.
5. Rufen Sie `requestAnimationFrame()` auf, um das Zeichnen des nächsten Frames der Animation zu planen.

> [!NOTE]
> Wir werden `save()` und `restore()` hier nicht behandeln, aber sie werden in unserem Tutorial [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations) (und den darauf folgenden) schön erklärt.

### Gehende Objektanimation

Nun erstellen wir unsere eigene einfache Animation — wir werden ein bewegendes Objekt animieren, das über den Bildschirm läuft, mit einem Spritbogen.

1. Machen Sie eine weitere neue Kopie unserer Canvas-Vorlage und öffnen Sie sie in Ihrem Code-Editor.

2. Aktualisieren Sie das Fallback-HTML, um das Bild widerzuspiegeln:

   ```html live-sample___7-canvas-walking-animation
   <canvas class="myCanvas">
     <p>A cat walking.</p>
   </canvas>
   ```

3. Diesmal wird der Hintergrund nicht schwarz gefärbt. Also malen Sie nach dem Abrufen der `ctx`-Variablen den Hintergrund stattdessen hellgrau:

   ```js live-sample___7-canvas-walking-animation
   ctx.fillStyle = "#e5e6e9";
   ctx.fillRect(0, 0, width, height);
   ```

4. Fügen Sie das folgende am unteren Rand des JavaScripts hinzu, um den Koordinatenursprung erneut in die Mitte des Canvas zu setzen:

   ```js live-sample___7-canvas-walking-animation
   ctx.translate(width / 2, height / 2);
   ```

5. Erstellen Sie nun ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, setzen Sie sein `src` auf das Bild, das wir laden möchten, und fügen Sie einen `onload`-Event-Handler hinzu, der die `draw()`-Funktion aufruft, wenn das Bild geladen wurde:

   ```js live-sample___7-canvas-walking-animation
   const image = new Image();
   image.src =
     "https://developer.mozilla.org/shared-assets/images/examples/web-animations/cat_sprite.png";
   image.onload = draw;
   ```

6. Fügen Sie nun einige Variablen hinzu, um die Position zu verfolgen, an der das Sprite auf dem Bildschirm gezeichnet werden soll, und die Nummer des Sprites, das wir anzeigen möchten.

   ```js live-sample___7-canvas-walking-animation
   let spriteIndex = 0;
   let posX = 0;
   const spriteWidth = 300;
   const spriteHeight = 150;
   const totalSprites = 12;
   ```

   Das Sprite-Bild wird von und mit der Erlaubnis von [Rachel Nabors](https://nearestnabors.com/) erstellt und geteilt, für ihre Dokumentationsarbeit an der [Web Animations API](/de/docs/Web/API/Web_Animations_API). Es sieht so aus:

   ![Ein Spritebogen mit drei Spalten, jede Spalte enthält eine Sequenz von Bildern einer schwarzen Katze, die mit unterschiedlichen Geschwindigkeiten nach links läuft. Jedes Sprite ist 300 Pixel breit und 150 Pixel hoch.](/shared-assets/images/examples/web-animations/cat_sprite.png)

   Es hat drei Spalten. Jede Spalte ist eine Sequenz, die eine Katze zeigt, die mit einer unterschiedliche Geschwindigkeit läuft (gehen, traben und galoppieren). Jede Sequenz enthält entweder 12 oder 13 Sprites — jedes ist 300 Pixel breit und 150 Pixel hoch. Wir werden die linkeste, gehende Sequenz verwenden, die 12 Sprites enthält. Um jedes Sprite sauber anzuzeigen, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild aus dem Spritebogen auszuschneiden und nur diesen Teil anzuzeigen, wie wir es oben mit dem Firefox-Logo getan haben. Die X- und Y-Koordinaten des Ausschnitts müssen ein Vielfaches von `spriteWidth` bzw. `spriteHeight` sein; da wir die linkeste Sequenz verwenden, bleibt die X-Koordinate immer 0. Die Ausschnittsgröße wird immer `spriteWidth` mal `spriteHeight` sein.

7. Fügen Sie nun eine leere `draw()`-Funktion am Ende des Codes ein, die bereit ist, mit Code gefüllt zu werden:

   ```js
   function draw() {}
   ```

   ```js-nolint hidden live-sample___7-canvas-walking-animation
   function draw() {
   ```

8. Der Rest des Codes in diesem Abschnitt geht in die `draw()`-Funktion. Zuerst fügen Sie die folgende Zeile hinzu, die das Canvas löscht, um jeden Frame vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width / 2), -(height / 2)` spezifizieren müssen, weil wir die Ursprungspostition ursprünglich auf `width/2, height/2` gesetzt haben.

   ```js live-sample___7-canvas-walking-animation
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

9. Als nächstes zeichnen wir unser Bild mit `drawImage` — die 9-Parameter-Version. Fügen Sie das folgende hinzu:

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
   - Wir spezifizieren `image` als das Bild, das eingebettet werden soll.
   - Parameter 2 und 3 spezifizieren die obere linke Ecke des Ausschnitts, der aus dem Quellbild herausgeschnitten werden soll, mit dem X-Wert 0 (für die linkeste Spalte) und dem y-Wert, der durch mehrfaches von `spriteHeight` abwechselt. Sie können den X-Wert mit `spriteWidth` oder `2 * spriteWidth` ersetzen, um die anderen Spalten auszuwählen.
   - Parameter 4 und 5 geben die Größe des Ausschnitts an, der herauszuschneiden ist — `spriteWidth` und `spriteHeight`.
   - Parameter 6 und 7 geben die obere linke Ecke des Feldes an, in dem der Ausschnitt auf das Canvas gezeichnet werden soll — Die X-Positon ist 0 + `posX`; das bedeutet, dass wir die Zeichnungsposition ändern können, indem wir den Wert von `posX` ändern. Die Y-Position ist `-spriteHeight / 2`, was bedeutet, dass das Bild vertikal auf dem Canvas zentriert wird.
   - Parameter 8 und 9 geben die Größe des Bildes auf dem Canvas an. Wir möchten lediglich seine Originalgröße beibehalten, also geben wir `spriteWidth` und `spriteHeight` als Breite und Höhe an.

10. Nun werden wir den Wert `spriteIndex` nach jedem Zeichnen ändern — naja, nachdem einige von ihnen jedenfalls. Fügen Sie den folgenden Block an das Ende der `draw()`-Funktion hinzu:

    ```js live-sample___7-canvas-walking-animation
    if (posX % 11 === 0) {
      if (spriteIndex === totalSprites - 1) {
        spriteIndex = 0;
      } else {
        spriteIndex++;
      }
    }
    ```

    Wir umschließen den ganzen Block in `if (posX % 11 === 0) { }`. Wir verwenden den Modulo (`%`)-Operator (auch bekannt als [Resteoperator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu prüfen, ob der Wert von `posX` durch `11` ohne Rest geteilt werden kann. Wenn ja, gehen wir zum nächsten Sprite über, indem der Wert von `spriteIndex` erhöht wird (zurücksetzen auf `0`, nachdem wir mit dem letzten Schluss sind). Dies bedeutet, dass wir das Sprite nur ungefähr jedes 11. Frame aktualisieren, oder grob gesagt, etwa 6 Frames die Sekunde (`requestAnimationFrame()` ruft uns an mit bis zu 60 Frames pro Sekunde, wenn möglich). Wir verlangsamen absichtlich die Framerate, weil wir nur 12 Sprites zur Verfügung haben, und wenn wir jedes 60. eine Sekunde anzeigen, würde sich unser Objekt viel zu schnell bewegen!

    Innerhalb des äußeren Blocks verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob der Wert von `spriteIndex` der letzte ist. Wenn wir bereits das letzte Sprite anzeigen, setzen wir den Wert von `spriteIndex` zurück auf 0; wenn nicht, erhöhen wir ihn einfach um 1.

11. Als nächstes müssen wir ausrechnen, wie wir den Wert von `posX` bei jedem Frame ändern können — fügen Sie den folgenden Codeblock direkt unter Ihrem letzten hinzu.

    ```js live-sample___7-canvas-walking-animation
    if (posX < -width / 2 - spriteWidth) {
      const newStartPos = width / 2;
      posX = Math.ceil(newStartPos);
    } else {
      posX -= 2;
    }
    ```

    Wir verwenden eine weitere `if...else`-Anweisung, um zu prüfen, ob der Wert von `posX` kleiner geworden ist als `-width/2 - spriteWidth`, was bedeutet, dass unsere Katze vom linken Bildschirmrand gelaufen ist. Wenn ja, berechnen wir eine Position, die die Katze knapp rechts vom rechten Bildschirmrand bringen würde.

    Wenn unsere Katze noch nicht vom Bildschirmrand gelaufen ist, verringern wir `posX` um 2. Dadurch wird sie ein kleines Stück nach links bewegt, das nächste Mal, wenn wir sie zeichnen.

12. Schließlich müssen wir die Animation-Schleife durch Aufrufen von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()`-Funktion weiterlaufen lassen:

    ```js live-sample___7-canvas-walking-animation
    window.requestAnimationFrame(draw);
    ```

```js-nolint hidden live-sample___7-canvas-walking-animation
}
```

Das war's! Das endgültige Beispiel sollte so aussehen:

{{EmbedLiveSample("7-canvas-walking-animation", '100%', 260)}}

Sie können die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Eine einfache Zeichenanwendung

Als letzte Animation möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben kombiniert werden kann (die Mausbewegung in diesem Fall). Wir werden Ihnen nicht alles Schritt für Schritt erklären, sondern nur die interessantesten Teile des Codes beleuchten.

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

Sie können das Beispiel unten live ausprobieren. Klicken Sie auch auf die **Play**-Taste, um es im MDN Playground zu öffnen, wo Sie den Quellcode bearbeiten können:

{{EmbedLiveSample("8-canvas-drawing-app", '100%', 600)}}

Schauen wir uns die interessantesten Teile an. Zuerst verfolgen wir die X- und Y-Koordinaten der Maus und ob sie geklickt wird oder nicht mit drei Variablen: `curX`, `curY` und `pressed`. Wenn die Maus sich bewegt, rufen wir eine Funktion für den `onmousemove` Event-Handler auf, die die aktuellen X- und Y-Werte aufzeichnet. Wir verwenden auch die `onmousedown`- und `onmouseup`-Event-Handler, um den Wert von `pressed` auf `true` zu ändern, wenn die Maustaste gedrückt wird, und wieder auf `false` umzukehren, wenn sie losgelassen wird.

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

Wenn die "Canvas löschen"-Taste gedrückt wird, führen wir eine einfache Funktion aus, die das gesamte Canvas auf schwarz zurückstellt, auf die gleiche Weise, die wir zuvor gesehen haben:

```js live-sample___8-canvas-drawing-app
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal ziemlich einfach — wenn `pressed` `true` ist, zeichnen wir einen Kreis mit einem Füllstil, der den Werten des Farb-Abwahlwerkzeugs entspricht, und einem Radius, der den Werten der Bereichseingabe entspricht. Wir müssen den Kreis 85 Pixel weiter oben zeichnen, von dem Punkt, wo wir ihn messen, weil der vertikale Wert von der Oberseite des Viewports gemessen wird, aber wir zeichnen den Kreis relativ zur Oberseite des Canvas, das unter der 85 Pixel hohen Symbolleiste startet. Wenn wir ihn nur mit `curY` als Y-Koordinate zeichnen würden, würde er 85 Pixel tiefer erscheinen als die Mausposition.

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

Alle {{htmlelement("input")}}-Typen werden gut unterstützt. Wenn ein Browser keinen Eingabetyp unterstützt, fällt er auf ein einfaches Textfeld zurück.

## WebGL

Jetzt ist es an der Zeit, sich von 2D zu verabschieden und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalt wird mithilfe der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert, was eine völlig separate API von der 2D-Canvas-API ist, obwohl sie beide auf {{htmlelement("canvas")}} Elementen gerendert werden.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht es Ihnen, direkt mit der {{Glossary("GPU", "GPU")}} des Computers zu kommunizieren. Daher ist das Schreiben von rohem WebGL näher an Sprachen auf niedriger Ebene wie C++ als an regulärem JavaScript; es ist ziemlich komplex, aber unglaublich leistungsfähig.

### Eine Bibliothek verwenden

Aufgrund seiner Komplexität schreiben die meisten Leute 3D-Grafikcode unter Verwendung einer Drittanbieter-JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten dieser funktionieren auf ähnliche Weise, indem sie Funktionalitäten bieten, um primitive und benutzerdefinierte Formen zu erzeugen, einen Betrachtungswinkel und Beleuchtung zu positionieren, Oberflächen mit Texturen zu überziehen usw. Sie handeln das WebGL für Sie, sodass Sie auf einer höheren Ebene arbeiten können.

Ja, die Verwendung einer dieser bedeutet, dass Sie eine neue API (diesmal eine von Drittanbietern) erlernen müssen, aber sie sind viel einfacher zu codieren als rohes WebGL.

### Ein drehender Würfel

Schauen wir uns ein Beispiel an, wie man etwas mit einer WebGL-Bibliothek erstellt. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der beliebtesten ist. In diesem Tutorial erstellen wir einen 3D drehenden Würfel.

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

   ```html hidden live-sample___9-webgl-cube
   <script src="https://cdn.jsdelivr.net/npm/three-js@79.0.0/three.min.js"></script>
   ```

3. Erstellen Sie dann eine neue Datei namens `script.js`, ebenfalls im gleichen Ordner. Lassen Sie es zunächst leer.
4. Erstellen Sie eine weitere neue Datei namens `style.css`, ebenfalls im gleichen Ordner, und fügen Sie folgendem Inhalt hinzu:

   ```css live-sample___9-webgl-cube
   html,
   body {
     margin: 0;
   }

   body {
     overflow: hidden;
   }
   ```

5. `three.js` ist in unsere Seite eingebunden (das erledigt das erste `<script>`-Element in unserem HTML), also können wir jetzt in `script.js` JavaScript schreiben, das es verwendet. Beginnen Sie mit der Erstellung einer neuen Szene — fügen Sie das folgende zu Ihrer `script.js`-Datei hinzu:

   ```js live-sample___9-webgl-cube
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene)-Konstruktor erstellt eine neue Szene, die die gesamte 3D-Welt darstellt, die wir anzeigen möchten.

6. Als nächstes benötigen wir eine **Kamera**, um die Szene zu sehen. In 3D-Image-Terminologie repräsentiert die Kamera die Position des Betrachters in der Welt. Um eine Kamera zu erstellen, fügen Sie die folgenden Zeilen hinzu:

   ```js live-sample___9-webgl-cube
   const camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000,
   );
   camera.position.z = 5;
   ```

   Der [`PerspectiveCamera()`](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera)-Konstruktor nimmt vier Argumente:
   - Das Sichtfeld: wie breit der Bereich vor der Kamera ist, der auf dem Bildschirm sichtbar sein soll, in Grad.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Normalerweise ist dies das Verhältnis der Breite der Szene geteilt durch die Höhe der Szene. Die Verwendung eines anderen Wertes verzerrt die Szene (was das sein könnte, was Sie möchten, aber normalerweise nicht).
   - Die nahe Ebene: Wie nahe an der Kamera Objekte sein können, bevor wir aufhören, sie auf dem Bildschirm zu rendern. Denken Sie daran, wie Sie, wenn Sie Ihre Fingerspitze näher und näher zu der Fläche zwischen Ihren Augen bewegen, sie irgendwann nicht mehr sehen können.
   - Die ferne Ebene: Wie weit Dinge von der Kamera entfernt sein müssen, bevor sie nicht mehr gerendert werden.

   Wir setzen auch die Position der Kamera, um 5 Einheiten entlang der Z-Achse, wie in CSS, aus dem Bildschirm heraus in Richtung Sie den Betrachter.

7. Der dritte wichtige Bestandteil ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene rendert, wie sie durch eine gegebene Kamera gesehen wird. Wir erstellen jetzt eine mit dem [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)-Konstruktor, aber wir verwenden es erst später. Fügen Sie die folgenden Zeilen hinzufügen:

   ```js live-sample___9-webgl-cube
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile setzt die Größe, in der der Renderer die Sicht der Kamera zeichnen wird, und die dritte Zeile fügt das vom Renderer erstellte {{htmlelement("canvas")}}-Element zum Dokument hinzu {{htmlelement("body")}}. Nun wird alles, was der Renderer zeichnet, in unserem Fenster angezeigt.

8. Jetzt möchten wir den Würfel erstellen, den wir auf dem Canvas anzeigen werden. Fügen Sie den folgenden Codeblock am Ende Ihres JavaScript hinzu:

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

   Es gibt hier ein bisschen mehr zu verstehen, also lassen Sie uns das in Phasen durchgehen:
   - Wir erstellen zuerst eine globale Variable namens `cube`, damit wir unseren Würfel von überall im Code aus zugreifen können.
   - Nächster, wir erstellen ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader) Objekt, dann rufen wir die Methode `load()` daran auf. `load()` nimmt zwei Parameter in diesem Fall (obwohl es mehr aufnehmen kann): die Textur, die wir laden möchten (ein PNG), und eine Funktion, die ausgeführt wird, wenn die Textur geladen wurde.
   - Innerhalb dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um anzugeben, dass wir eine 2 x 2 Wiederholung des Bildes auf alle Seiten des Würfels gewickelt haben möchten. Nächster, erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt, und bringen sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) zusammen, um unseren Würfel zu erstellen. Ein Objekt benötigt in der Regel eine Geometrie (was für eine Form es ist) und ein Material (was für eine Oberfläche es hat).
   - Zuletzt fügen wir unsere Würfel zur Szene hinzu, rufen dann unsere `draw()`-Funktion auf, um die Animation zu starten.

9. Bevor wir zu der Definition von `draw()` kommen, fügen wir ein paar Lichter zur Szene hinzu, um die Dinge ein bisschen lebendiger zu machen; fügen Sie die folgenden Blöcke weiter hinzu:

   ```js live-sample___9-webgl-cube
   const light = new THREE.AmbientLight("white"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("white");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art indirektes, weiches Licht, das die gesamte Szene ein wenig aufhellt, wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt dagegen ist ein gerichtetes Lichtstrahl, mehr wie eine Taschenlampe (oder ein Scheinwerfer, tatsächlich).

10. Zuletzt, fügen Sie unsere `draw()`-Funktion an die Unterseite des Codes hinzu:

    ```js live-sample___9-webgl-cube
    function draw() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);

      requestAnimationFrame(draw);
    }
    ```

    Das ist relativ intuitiv; bei jedem Frame, drehen wir unseren Würfel leicht um seine X- und Y-Achsen, rendern dann die Szene wie durch unsere Kamera gesehen, rufen dann schließlich `requestAnimationFrame()` auf, um das Zeichnen unseres nächsten Frames zu planen.

Das fertige Produkt sollte wie folgt aussehen:

{{EmbedLiveSample("9-webgl-cube", "100%", 500)}}

> [!NOTE]
> In unserem GitHub-Repo können Sie auch ein weiteres interessantes Beispiel für 3D-Würfel finden — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dieses verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um ein Videostream von einer Computerkamera auf die Seite des Würfels zu projizieren als Textur!

## Zusammenfassung

An diesem Punkt sollten Sie eine nützliche Vorstellung von den Grundlagen der Grafikprogrammierung unter Verwendung von Canvas und WebGL haben und was Sie mit diesen APIs tun können, sowie eine gute Vorstellung davon, wohin Sie für weitere Informationen gehen. Viel Spaß dabei!

## Siehe auch

Hier haben wir nur die wesentlichen Grundlagen des Canvas behandelt — es gibt so viel mehr zu lernen! Die folgenden Artikel werden Sie weiterbringen.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorial-Serie, die Ihnen das Wissen über 2D-Canvas in viel mehr Detail erklärt, als was hier behandelt wurde. Unverzichtbare Lektüre.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Reihe, die die Grundlagen der Programmierung von rohem WebGL lehrt.
- [Erstellen eines grundlegenden Demos mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — ein grundlegendes Three.js-Tutorial. Wir haben auch gleichwertige Leitfaden für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spielentwicklung](/de/docs/Games) — die Einstiegsseite für Web-Spielentwicklung auf MDN. Hier finden sich einige wirklich nützliche Tutorials und Techniken im Zusammenhang mit 2D- und 3D-Canvas — sehen Sie sich die Techniken und Tutorials-Menüoptionen an.

## Beispiele

- [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API, um Sound zu erzeugen und Canvas, um eine schöne Visualisierung zu erzeugen, die damit einhergeht.
- [Voice Change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas, um Audio-Daten in Echtzeit mit der Web Audio API zu visualisieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
