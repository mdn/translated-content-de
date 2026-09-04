---
title: Grafiken zeichnen
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: 4c58f4735f986a91bee1b77e336143630df727a2
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsfähige Grafikprogrammierungswerkzeuge, von der Scalable Vector Graphics ([SVG](/de/docs/Web/SVG))-Sprache bis hin zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in Canvas und weitere Ressourcen, die es Ihnen ermöglichen, mehr zu erfahren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere mit den <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und der Kern-API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte und Anwendungsfälle, die von den in dieser Lektion behandelten APIs ermöglicht werden.</li>
          <li>Grundlegende Syntax und Verwendung von <code>&lt;canvas&gt;</code> und zugehörigen APIs.</li>
          <li>Verwendung von Timern und <code>requestAnimationFrame()</code>, um Animationsschleifen einzurichten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Das Web bestand ursprünglich nur aus Text, was sehr langweilig war, daher wurden Bilder eingeführt — zunächst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Dies war allerdings immer noch nicht genug. Obwohl Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden konnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) — da sie durch Markup repräsentiert werden — gab es immer noch keine Möglichkeit, dasselbe für Bitmap-Bilder zu tun, und die verfügbaren Werkzeuge waren ziemlich begrenzt. Das Web hatte immer noch keine effektive Möglichkeit, Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die gewöhnlich von niedrigeren Programmiersprachen wie C++ oder Java gehandhabt werden.

Die Situation begann sich zu verbessern, als Browser das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) im Jahr 2004 unterstützten. Wie Sie weiter unten sehen werden, bietet Canvas einige nützliche Werkzeuge zur Erstellung von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere in Kombination mit einigen der anderen APIs, die die Webplattform bereitstellt, kann aber schwierig oder unmöglich zugänglich gemacht werden.

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

Etwa 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Daraus wurde [WebGL](/de/docs/Web/API/WebGL_API), das bei Browseranbietern an Bedeutung gewann und um 2009–2010 standardisiert wurde. WebGL ermöglicht es Ihnen, echte 3D-Grafiken in Ihrem Webbrowser zu erstellen.

Dieser Artikel wird sich hauptsächlich auf 2D-Canvas konzentrieren, da roher WebGL-Code sehr komplex ist. Wir werden jedoch zeigen, wie man [mit einer WebGL-Bibliothek eine 3D-Szene leichter erstellen kann](#webgl), und Sie können ein Tutorial zu rohem WebGL anderswo finden — siehe [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Erste Schritte mit einem \<canvas>

Wenn Sie eine 2D- oder 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-{{htmlelement("canvas")}}-Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Dies ist so einfach wie das Hinzufügen des Elements auf der Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dies wird ein Canvas auf der Seite mit einer Größe von 320 x 240 Pixel erstellen.

Sie sollten einige Fallback-Inhalte innerhalb der `<canvas>`-Tags einfügen. Diese sollten den Canvas-Inhalt für Benutzer von Browsern beschreiben, die Canvas nicht unterstützen, oder für Benutzer von Screenreadern.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Der Fallback sollte nützliche alternative Inhalte zum Canvas-Inhalt bereitstellen. Wenn Sie beispielsweise ein ständig aktualisiertes Diagramm von Aktienkursen rendern, könnte der Fallback-Inhalt ein statisches Bild des neuesten Aktiencharts sein, mit `alt`-Text, der die Kurse im Text beschreibt, oder eine Liste von Links zu einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs direkt am Canvas-Element selbst hinzu oder fügen Sie Fallback-Inhalte innerhalb der öffnenden und schließenden `<canvas>`-Tags hinzu. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte schon.

### Erstellen und Dimensionieren unseres Canvas

Lassen Sie uns mit der Erstellung unserer eigenen Canvas-Vorlage beginnen, um zukünftige Experimente durchzuführen.

1. Erstellen Sie zunächst ein Verzeichnis auf Ihrer lokalen Festplatte mit dem Namen `canvas-template`.
2. Erstellen Sie eine neue Datei im Verzeichnis mit dem Namen `index.html` und speichern Sie den folgenden Inhalt darin:

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

3. Erstellen Sie eine neue Datei im Verzeichnis mit dem Namen `style.css` und speichern Sie die folgende CSS-Regel darin:

   ```css live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
   body {
     margin: 0;
     overflow: hidden;
   }
   ```

4. Erstellen Sie eine neue Datei im Verzeichnis mit dem Namen `script.js`. Lassen Sie diese Datei vorerst leer.

5. Öffnen Sie nun `script.js` und fügen Sie die folgenden Zeilen JavaScript hinzu:

   ```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz zum Canvas in der Konstante `canvas` gespeichert. In der zweiten Zeile setzen wir eine neue Konstante `width` und die `width`-Eigenschaft des Canvas auf [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Ansichtbreite gibt). In der dritten Zeile setzen wir eine neue Konstante `height` und die `height`-Eigenschaft des Canvas auf [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Ansichthöhe gibt). Jetzt haben wir ein Canvas, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden auch sehen, dass wir mehrfach hintereinander Zuweisungen mit mehreren Gleichheitszeichen verketten — dies ist in JavaScript erlaubt, und es ist eine gute Technik, wenn Sie mehrere Variablen alle auf den gleichen Wert setzen möchten. Wir wollten die Breite/Höhe des Canvas einfach zugänglich in den Variablen width/height verfügbar machen, da sie nützliche Werte für später sind (zum Beispiel, wenn Sie etwas genau in der Hälfte der Breite des Canvas zeichnen möchten).

> [!NOTE]
> Sie sollten die Größe des Canvas im Allgemeinen mit HTML-Attributen oder DOM-Eigenschaften festlegen, wie oben erklärt. Sie könnten CSS verwenden, aber das Problem ist, dass die Größenänderung erfolgt, nachdem das Canvas gerendert wurde, und genau wie bei jedem anderen Bild könnte das Canvas verpixelt/verzerrt werden.

### Abrufen des Canvas-Kontexts und letzte Einrichtung

Wir müssen noch eine letzte Sache tun, bevor wir unsere Canvas-Vorlage als abgeschlossen betrachten können. Um auf das Canvas zu zeichnen, müssen wir eine spezielle Referenz auf den Zeichenbereich namens Kontext erhalten. Dies geschieht mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die für die grundlegende Verwendung einen einzelnen String als Parameter benötigt, der den Typ des Kontexts darstellt, den Sie abrufen möchten.

In diesem Fall möchten wir ein 2D-Canvas, also fügen Sie die folgende JavaScript-Zeile unter den anderen in `script.js` hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextwerte, die Sie wählen könnten, sind `webgl` für WebGL, `webgpu` für WebGPU usw., aber diese benötigen wir in diesem Artikel nicht.

Das war's — unser Canvas ist jetzt bereit zum Zeichnen! Die Variable `ctx` enthält jetzt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, und alle Zeichenoperationen auf dem Canvas beinhalten die Manipulation dieses Objekts.

Lassen Sie uns noch eine letzte Sache tun, bevor wir weitermachen. Wir färben den Canvas-Hintergrund schwarz, um Ihnen einen ersten Eindruck der Canvas-API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop
ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mit der [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)-Eigenschaft des Canvas (dies nimmt [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) an, genauso wie CSS-Eigenschaften), und zeichnen dann ein Rechteck, das den gesamten Bereich des Canvas mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) abdeckt (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, in der Sie das Rechteck zeichnen möchten — wir sagten Ihnen, dass diese `width`- und `height`-Variablen nützlich sein würden)!

Okay, unsere Vorlage ist fertig und es ist Zeit, weiterzumachen.

## Grundlagen des 2D-Canvas

Wie bereits erwähnt, werden alle Zeichenoperationen durchgeführt, indem ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt (in unserem Fall `ctx`) manipuliert wird. Viele Operationen benötigen Koordinaten, um genau zu bestimmen, wo etwas gezeichnet werden soll — die obere linke Ecke des Canvas ist der Punkt (0, 0), die horizontale (x) Achse läuft von links nach rechts, und die vertikale (y) Achse läuft von oben nach unten.

![Grafikpapier mit kleinen Quadraten, das die Fläche abdeckt, mit einem stahlblauen Quadrat in der Mitte. Die obere linke Ecke des Canvas ist der Punkt (0, 0) der Canvas-x-Achse und y-Achse. Die horizontale (x) Achse verläuft von links nach rechts und gibt die Breite an, die vertikale (y) Achse verläuft von oben nach unten und gibt die Höhe an. Die obere linke Ecke des blauen Quadrats wird mit einem Abstand von x-Einheiten von der y-Achse und y-Einheiten von der x-Achse angegeben.](canvas_default_grid.png)

Das Zeichnen von Formen wird in der Regel mit dem Rechteckform-Primitive erledigt oder durch das Nachzeichnen einer Linie entlang eines bestimmten Pfades und dann das Ausfüllen der Form. Unten zeigen wir, wie beides geht.

### Einfache Rechtecke

Fangen wir mit ein paar einfachen Rechtecken an.

1. Machen Sie zunächst eine Kopie Ihres neu codierten Canvas-Template-Verzeichnisses.
2. Fügen Sie die folgenden Zeilen am Ende Ihrer JavaScript-Datei hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "red";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie Ihr HTML im Browser laden, sollte ein rotes Rechteck auf Ihrem Canvas erscheinen. Seine obere linke Ecke ist 50 Pixel von oben und links vom Rand des Canvas entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch den dritten und vierten Parameter definiert).

3. Fügen wir ein weiteres Rechteck hinzu — diesmal ein grünes. Fügen Sie folgendes am Ende Ihres JavaScripts hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "green";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren Sie die Ansicht, und Sie werden Ihr neues Rechteck sehen. Dies wirft einen wichtigen Punkt auf: Grafische Operationen wie das Zeichnen von Rechtecken, Linien und so weiter werden in der Reihenfolge ausgeführt, in der sie auftreten. Denken Sie daran, es ist wie das Streichen einer Wand, bei der jede Farbschicht das darunterliegende möglicherweise überlappt und sogar verdecken kann. Sie können nichts dagegen tun, also müssen Sie sorgfältig über die Reihenfolge nachdenken, in der Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbdurchsichtige Grafiken zeichnen können, indem Sie eine halbdurchsichtige Farbe spezifizieren, beispielsweise mit `rgb()`. Der "Alpha-Kanal" definiert die Menge an Transparenz, die die Farbe hat. Je höher der Wert, desto mehr verdeckt sie das, was dahinter liegt. Fügen Sie folgendes zu Ihrem Code hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, einige weitere Rechtecke Ihrer Wahl zu zeichnen; haben Sie Spaß!

### Striche und Linienstärken

Bisher haben wir uns das Zeichnen gefüllter Rechtecke angesehen, aber Sie können auch Rechtecke zeichnen, die nur Umrisse haben (im Grafikdesign als **Striche** bezeichnet). Um die gewünschte Farbe für Ihren Strich festzulegen, verwenden Sie die [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)-Eigenschaft; das Zeichnen eines Strich-Rechtecks erfolgt mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Fügen Sie das folgende der vorherigen Beispiel hinzu, ebenfalls unter den vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "white";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite der Striche beträgt 1 Pixel; Sie können den Wert der [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)-Eigenschaft anpassen, um dies zu ändern (es nimmt eine Zahl an, die die Anzahl der Pixel angibt, die der Strich breit ist). Fügen Sie die folgende Zeile zwischen den vorherigen beiden Zeilen hinzu:

   ```js
   ctx.lineWidth = 5;
   ```

Jetzt sollten Sie sehen, dass Ihr weißer Umriss viel dicker geworden ist! Das war's fürs Erste. An diesem Punkt sollte Ihr Beispiel so aussehen:

```js hidden live-sample___2-canvas-rectangles
ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);
```

{{EmbedLiveSample("2-canvas-rectangles", '100%', 250)}}

Sie können die **Play**-Schaltfläche drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Zeichnen von Pfaden

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Im Wesentlichen bedeutet dies, Code zu schreiben, um genau festzulegen, welchen Pfad der Stift auf Ihrem Canvas durchlaufen soll, um die Form zu zeichnen, die Sie zeichnen möchten. Canvas bietet Funktionen zum Zeichnen gerader Linien, Kreise, Bézier-Kurven und mehr.

Beginnen Sie den Abschnitt, indem Sie eine frische Kopie Ihrer Canvas-Vorlage erstellen, in der Sie das neue Beispiel zeichnen.

Wir werden einige häufig verwendete Methoden und Eigenschaften in allen folgenden Abschnitten verwenden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — Beginnen Sie einen Pfad zu zeichnen ab dem Punkt, an dem sich der Stift derzeit auf dem Canvas befindet. Bei einem neuen Canvas beginnt der Stift bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — Bewegen Sie den Stift zu einem anderen Punkt auf dem Canvas, ohne die Linie zu zeichnen oder nachzuzeichnen; der Stift "springt" zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — Zeichnen Sie eine gefüllte Form, indem Sie den bisher gezeichneten Pfad ausfüllen.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — Zeichnen Sie eine Umrissform, indem Sie einen Strich entlang des bisher gezeichneten Pfads zeichnen.
- Sie können auch Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` für Pfade genauso wie für Rechtecke verwenden.

Eine typische, einfache Pfad-Zeichenoperation sieht etwa so aus:

```js
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Zeichnen von Linien

Lassen Sie uns ein gleichseitiges Dreieck auf dem Canvas zeichnen.

1. Zuerst fügen Sie diese Hilfsfunktion am Ende Ihres Codes hinzu. Diese konvertiert Gradwerte in Radianten, was nützlich ist, da wann immer Sie in JavaScript einen Winkelwert angeben müssen, dieser fast immer in Radianten sein wird, aber Menschen normalerweise in Grad denken.

   ```js live-sample___3_canvas_paths
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Beginnen Sie dann Ihren Pfad, indem Sie das folgende unter Ihrer vorherigen Hinzufügung hinzufügen; hier setzen wir eine Farbe für unser Dreieck, beginnen einen Pfad zu zeichnen und bewegen dann den Stift zu (50, 50), ohne etwas zu zeichnen. Dort werden wir mit dem Zeichnen unseres Dreiecks beginnen.

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

   Lassen Sie uns dies der Reihe nach durchgehen:

   Zuerst zeichnen wir eine Linie zu (150, 50) — unser Pfad verläuft nun 100 Pixel nach rechts entlang der x-Achse.

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks, unter Verwendung etwas einfacher Trigonometrie. Im Wesentlichen zeichnen wir das Dreieck nach unten zeigend. Die Winkel in einem gleichseitigen Dreieck sind immer 60 Grad; um die Höhe zu berechnen, können wir es in der Mitte in zwei rechtwinklige Dreiecke teilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben werden. In Bezug auf die Seiten:
   - Die längste Seite wird als **Hypotenuse** bezeichnet.
   - Die Seite neben dem 60-Grad-Winkel wird als **Ankathete** bezeichnet — die wir als 50 Pixel kennen, da sie die Hälfte der Linie ist, die wir gerade gezeichnet haben.
   - Die gegenüberliegende Seite des 60-Grad-Winkels wird als **Gegenkathete** bezeichnet, die die Höhe des Dreiecks ist, die wir berechnen möchten.

   ![Ein gleichseitiges Dreieck, das nach unten zeigt, mit beschrifteten Winkeln und Seiten. Die horizontale Linie oben ist als 'Ankathete' beschriftet. Eine senkrechte gepunktete Linie, die von der Mitte der Ankathete ausgeht, ist als 'Gegenkathete' beschriftet und teilt das Dreieck, wodurch zwei gleich große rechtwinklige Dreiecke entstehen. Die rechte Seite des Dreiecks ist als Hypotenuse beschriftet, da sie die Hypotenuse des durch die als 'Gegenkathete' beschrifteten Linie gebildeten rechtwinkligen Dreiecks ist. Obwohl alle drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des rechtwinkligen Dreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass die Länge der Ankathete multipliziert mit dem Tangens des Winkels gleich der Gegenkathete ist, daher kommen wir zu `50 * Math.tan(degToRad(60))`. Wir verwenden unsere `degToRad()`-Funktion, um 60 Grad in Radianten zu konvertieren, da {{jsxref("Math.tan()")}} einen Eingabewert in Radianten erwartet.

4. Mit der berechneten Höhe zeichnen wir eine weitere Linie zu `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss in der Mitte zwischen den beiden vorherigen X-Werten liegen, die wir festgelegt haben. Der Y-Wert hingegen muss 50 plus der Dreieckshöhe sein, da wir wissen, dass die Oberseite des Dreiecks 50 Pixel von der Oberseite des Canvas entfernt ist.
5. Die nächste Linie zeichnet eine Linie zurück zum Ausgangspunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form auszufüllen.

#### Zeichnen von Kreisen

Lassen Sie uns nun schauen, wie man in Canvas einen Kreis zeichnet. Dies wird mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) erreicht, die einen gesamten oder Teile eines Kreises an einem bestimmten Punkt zeichnet.

1. Fügen wir unserem Canvas einen Bogen hinzu — fügen Sie folgendes am Ende Ihres Codes hinzu:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "blue";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` nimmt sechs Parameter. Die ersten beiden geben die Position des Mittelpunkts des Bogens an (X und Y, jeweils). Der dritte ist der Radius des Kreises, der vierte und fünfte sind die Start- und Endwinkel, an denen der Kreis gezeichnet werden soll (das Angeben von 0 und 360 Grad gibt uns einen vollständigen Kreis), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn oder im Uhrzeigersinn gezeichnet werden soll (`false` ist im Uhrzeigersinn).

   > [!NOTE]
   > 0 Grad ist horizontal nach rechts.

2. Lassen Sie uns versuchen, einen weiteren Bogen hinzuzufügen:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "yellow";
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   Das Muster hier ist sehr ähnlich, aber mit zwei Unterschieden:
   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird, was bedeutet, dass, obwohl der Bogen so angegeben ist, dass er bei -45 Grad beginnt und bei 45 Grad endet, wir den Bogen um die 270 Grad zeichnen, die sich nicht innerhalb dieses Abschnitts befinden. Wenn Sie `true` in `false` ändern und dann den Code erneut ausführen, würde nur der 90-Grad-Abschnitt des Kreises gezeichnet.
   - Bevor wir `fill()` aufrufen, zeichnen wir eine Linie zum Mittelpunkt des Kreises. Dies bedeutet, dass wir den ziemlich schönen Pac-Man-artigen Ausschnitt gerendert bekommen. Wenn Sie diese Linie entfernen (versuchen Sie es!) und dann den Code erneut ausführen, würde nur ein Rand des Kreises zwischen dem Start- und Endpunkt des Bogens abgeschnitten werden. Dies illustriert einen weiteren wichtigen Punkt des Canvas — wenn Sie versuchen, einen unvollständigen Pfad auszufüllen (d.h. einen, der nicht geschlossen ist), füllt der Browser eine gerade Linie zwischen dem Start- und Endpunkt ein und füllt sie dann aus.

Das war's fürs Erste; Ihr finales Beispiel sollte so aussehen:

{{EmbedLiveSample("3_canvas_paths", '100%', 200)}}

Sie können die **Play**-Schaltfläche drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

> [!NOTE]
> Um mehr über erweiterte Pfadzeichenfunktionen wie Bézier-Kurven zu erfahren, sehen Sie sich unser [Zeichnen von Formen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)-Tutorial an.

### Text

Canvas hat auch Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz erkunden. Beginnen Sie, indem Sie eine weitere frische Kopie Ihrer Canvas-Vorlage erstellen, in der Sie das neue Beispiel zeichnen.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnet Umriss- (Strich-)Text.

Beide nehmen in ihrer Basisverwendung drei Eigenschaften: den zu zeichnenden Textstring und die X- und Y-Koordinaten des Punktes, an dem der Text gezeichnet werden soll. Dies entspricht der **unteren linken** Ecke der **Textbox** (buchstäblich, der box, die den gezeichneten Text umgibt), was Sie verwirren könnte, da andere Zeichenoperationen dazu neigen, von der oberen linken Ecke zu beginnen — bedenken Sie dies.

Es gibt auch eine Reihe von Eigenschaften, um die Textrendering zu steuern, wie [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), die es Ihnen ermöglicht, die Schriftfamilie, -größe usw. anzugeben. Es nimmt als Wert die gleiche Syntax wie die CSS-{{cssxref("font")}}-Eigenschaft an.

Canvas-Inhalte sind für Screenreader nicht zugänglich. Text, der auf das Canvas gezeichnet wird, ist nicht im DOM verfügbar, muss aber zugänglich gemacht werden. In diesem Beispiel fügen wir den Text als Wert für `aria-label` hinzu.

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

Hier zeichnen wir zwei Zeilen Text, eine mit einer Umrisslinie und den anderen mit einem Strich. Das Beispiel sollte folgendermaßen aussehen:

{{EmbedLiveSample("4-canvas-text", '100%', 180)}}

Drücken Sie die **Play**-Schaltfläche, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Experimentieren Sie und sehen Sie, was Sie entwickeln können! Weitere Informationen zu den Optionen, die für Canvas-Text verfügbar sind, finden Sie unter [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Bilder auf das Canvas zeichnen

Es ist möglich, externe Bilder auf Ihr Canvas zu rendern. Diese können einfache Bilder, Frames von Videos oder Inhalte anderer Canvases sein. Im Moment werden wir uns nur den Fall ansehen, in dem wir einige einfache Bilder auf unserem Canvas verwenden.

1. Wie zuvor erstellen Sie eine weitere frische Kopie Ihrer Canvas-Vorlage, in der Sie das neue Beispiel zeichnen.

   Bilder werden mit der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf einem Canvas gezeichnet. Die einfachste Version benötigt drei Parameter — eine Referenz zum Bild, das Sie rendern möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Lassen Sie uns mit dem Abrufen einer Bildquelle beginnen, die wir in unser Canvas einbetten möchten. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

   ```js live-sample___5-canvas-images
   const image = new Image();
   image.src =
     "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt unter Verwendung des Konstruktors [`Image()`](/de/docs/Web/API/HTMLImageElement/Image). Das zurückgegebene Objekt ist der gleiche Typ wie der, der zurückgegeben wird, wenn Sie eine Referenz auf ein vorhandenes {{htmlelement("img")}}-Element erhalten. Wir setzen dann sein [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut auf unser Firefox-Logo-Bild. An diesem Punkt beginnt der Browser mit dem Laden des Bildes.

3. Jetzt könnten wir versuchen, das Bild mit `drawImage()` einzubetten, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, sonst schlägt der Code fehl. Wir können dies mit dem `load`-Ereignis erreichen, das nur ausgelöst wird, wenn das Bild fertig geladen ist. Fügen Sie den folgenden Block unter den vorherigen hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie das Bild im Canvas eingebettet sehen, allerdings ziemlich groß.

4. Aber es gibt noch mehr! Was ist, wenn wir nur einen Teil des Bildes anzeigen möchten oder es ändern möchten? Beides ist mit der komplexeren Version von `drawImage()` möglich. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile folgendermaßen:

   ```js
   ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185);
   ```

   ```js hidden live-sample___5-canvas-images
   image.addEventListener("load", () =>
     ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185),
   );
   ```

   - Der erste Parameter ist die Bildreferenz, wie zuvor.
   - Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links vom ersten Parameter oder über dem zweiten wird gezeichnet.
   - Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem original geladenen Bild ausschneiden möchten.
   - Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Bildbereichs relativ zur oberen linken Ecke des Canvas zeichnen möchten.
   - Parameter 8 und 9 definieren die Breite und Höhe, mit denen der ausgeschnittene Bereich des Bildes gezeichnet werden soll. In diesem Fall haben wir die gleichen Abmessungen wie das Originalslice angegeben, aber Sie könnten es anpassen, indem Sie andere Werte angeben.

5. Wenn das Bild sinnvoll aktualisiert wird, muss auch die Beschreibung aktualisiert werden.

   ```js live-sample___5-canvas-images
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das endgültige Beispiel sollte etwa so aussehen:

{{EmbedLiveSample("5-canvas-images", '100%', 260)}}

Drücken Sie die **Play**-Schaltfläche, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

## Schleifen und Animationen

Bisher haben wir einige sehr grundlegende Anwendungen von 2D-Canvas betrachtet, aber wirklich erlebt man die volle Kraft von Canvas nur, wenn man es in irgendeiner Weise aktualisiert oder animiert. Schließlich bietet Canvas skriptbare Bilder! Wenn Sie nichts ändern wollen, dann könnten Sie gleich statische Bilder verwenden und sich die ganze Arbeit sparen.

### Erstellen einer Schleife

Das Spielen mit Schleifen in Canvas macht Spaß — Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) (oder anderer...) Schleife ausführen, genau wie bei jedem anderen JavaScript-Code.

Lassen Sie uns ein Beispiel erstellen.

1. Erstellen Sie eine frische Kopie Ihrer Canvas-Vorlage.
2. Fügen Sie die folgende Zeile am Ende Ihres JavaScripts hinzu. Diese enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js live-sample___6-canvas-for-loop
   ctx.translate(width / 2, height / 2);
   ```

   Dies führt dazu, dass der Koordinatenursprung (0, 0) in die Mitte des Canvas verschoben wird, anstatt in die obere linke Ecke. Dies ist in vielen Situationen nützlich, wie in diesem Fall, in dem wir unser Design relativ zur Mitte des Canvas zeichnen möchten.

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

   Hier implementieren wir die gleiche `degToRad()`-Funktion, die wir im Dreiecksbeispiel oben gesehen haben, eine `rand()`-Funktion, die eine Zufallszahl zwischen angegebenen unteren und oberen Grenzen zurückgibt, und die `length`- und `moveOffset`-Variablen (über die wir später mehr erfahren werden).

4. Die Idee hier ist, dass wir im Inneren der `for`-Schleife etwas auf das Canvas zeichnen und es bei jedem Durchlauf iterieren, damit wir etwas Interessantes erstellen können. Fügen Sie den folgenden Code innerhalb Ihrer `for`-Schleife hinzu:

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

   - Setzen wir `fillStyle` auf einen leicht transparenten Purpurton, der sich jedes Mal basierend auf dem Wert von `length` ändert. Wie Sie später sehen werden, wird die Länge bei jedem Schleifendurchlauf kleiner, sodass der Effekt hier ist, dass die Farbe mit jedem gezeichneten Dreieck heller wird.
   - Beginnen wir den Pfad.
   - Bewegen wir den Stift zu einer Koordinate von `(moveOffset, moveOffset)`. Diese Variable definiert, wie weit wir jedes Mal bewegen möchten, wenn wir ein neues Dreieck zeichnen.
   - Zeichnen wir eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Diese zeichnet eine Linie der Länge `length` parallel zur x-Achse.
   - Berechnen wir die Höhe des Dreiecks, wie zuvor.
   - Zeichnen wir eine Linie zur nach unten zeigenden Ecke des Dreiecks, dann zeichnen wir eine Linie zurück zum Start des Dreiecks.
   - Rufen wir `fill()` auf, um das Dreieck auszufüllen.
   - Aktualisieren wir die Variablen, die die Sequenz der Dreiecke beschreiben, damit wir bereit sind, das nächste zu zeichnen. Wir verringern den `length`-Wert um 1, sodass die Dreiecke bei jedem Mal kleiner werden; wir erhöhen `moveOffset` um einen kleinen Betrag, sodass jedes nachfolgende Dreieck etwas weiter entfernt ist, und verwenden eine weitere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), die es uns ermöglicht, das gesamte Canvas zu drehen! Wir drehen es um 5 Grad, bevor das nächste Dreieck gezeichnet wird.

Das war's! Das endgültige Beispiel sollte wie folgt aussehen:

{{EmbedLiveSample("6-canvas-for-loop", '100%', 550)}}

Drücken Sie die **Play**-Schaltfläche, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Wir empfehlen, mit dem Beispiel zu spielen und es zu Ihrem eigenen zu machen! Zum Beispiel:

- Zeichnen Sie Rechtecke oder Bögen anstelle von Dreiecken oder betten Sie sogar Bilder ein.
- Experimentieren Sie mit den `length`- und `moveOffset`-Werten.
- Fügen Sie ein paar Zufallszahlen mit der `rand()`-Funktion ein, die wir oben eingefügt haben, aber nicht verwendet haben.

### Animationen

Das Schleifenbeispiel, das wir oben erstellt haben, war lustig, aber wirklich brauchen Sie eine konstante Schleife, die immer weiterläuft, für jede ernsthafte Canvas-Anwendung (wie Spiele und Echtzeit-Visualisierungen). Denken Sie an Ihr Canvas als wäre es wie ein Film — Sie möchten wirklich, dass die Anzeige auf jedem Frame aktualisiert wird, um den aktualisierten Blick zu zeigen, mit einer idealen Bildwiederholrate von 60 Bildern pro Sekunde, damit Bewegungen für das menschliche Auge schön und flüssig erscheinen.

Es gibt ein paar JavaScript-Funktionen, mit denen Sie Funktionen mehrmals pro Sekunde wiederholt ausführen können, die für unsere Zwecke hier am besten geeignete ist [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Es nimmt einen Parameter — den Namen der Funktion, die Sie für jeden Frame ausführen möchten. Das nächste Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion das nächste Update für Ihre Animation zeichnet, dann ruft sie `requestAnimationFrame()` erneut kurz vor dem Ende der Funktion auf, wird die Animation weiterhin laufen. Die Schleife endet, wenn Sie aufhören, `requestAnimationFrame()` aufzurufen oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) aufrufen, nachdem Sie `requestAnimationFrame()` aufgerufen haben, aber bevor der Frame aufgerufen wird.

> [!NOTE]
> Es ist gute Praxis, `cancelAnimationFrame()` von Ihrem Hauptcode aus aufzurufen, wenn Sie mit der Animation fertig sind, um sicherzustellen, dass keine Updates mehr ausstehen, um ausgeführt zu werden.

Der Browser kümmert sich um komplexe Details, wie das sicherstellen, dass die Animation mit konstanter Geschwindigkeit läuft, und keine Ressourcen verschwendet, um Dinge zu animieren, die nicht gesehen werden können.

Um zu sehen, wie das funktioniert, schauen wir uns schnell wieder unser [Bouncing Balls Beispiel](#frame_bouncing-balls) an. Der Code für die Schleife, die alles in Bewegung hält, sieht folgendermaßen aus:

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

Wir führen die `loop()`-Funktion einmal am Ende des Codes aus, um den Zyklus zu starten und den ersten Animationsframe zu zeichnen; die `loop()`-Funktion übernimmt dann das Aufrufen von `requestAnimationFrame(loop)`, um den nächsten Frame der Animation laufen zu lassen, immer und immer wieder.

Beachten Sie, dass wir in jedem Frame das gesamte Canvas löschen und alles neu zeichnen. Für jede vorhandene Kugel zeichnen wir sie, aktualisieren ihre Position und überprüfen, ob sie mit anderen Kugeln kollidiert. Sobald Sie eine Grafik auf ein Canvas gezeichnet haben, gibt es keine Möglichkeit, diese Grafik einzeln zu manipulieren, wie Sie es mit DOM-Elementen können. Sie können nicht einfach jede Kugel auf dem Canvas verschieben, denn sobald sie gezeichnet ist, ist sie Teil des Canvas und kein einzelnes zugängliches Element oder Objekt. Stattdessen müssen Sie Löschen und neu Zeichnen, entweder indem Sie den gesamten Frame löschen und alles erneut zeichnen, oder indem Sie Code haben, der genau weiß, welche Teile gelöscht und neu gezeichnet werden müssen, und nur den Mindestbereich des Canvas löscht und neu zeichnet, der notwendig ist.

Die Optimierung der Grafik-Animation ist eine ganze Spezialität des Programmierens, mit vielen cleveren Techniken, die verfügbar sind. Diese sind jedoch mehr als das, was wir für unser Beispiel benötigen!

Im Allgemeinen umfasst der Prozess der Durchführung einer Canvas-Animation die folgenden Schritte:

1. Löschen Sie die Canvas-Inhalte (z. B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Speichern Sie den Zustand (falls notwendig) unter Verwendung von [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) — dies ist notwendig, wenn Sie Einstellungen speichern möchten, die Sie auf dem Canvas aktualisiert haben, bevor Sie fortfahren, was nützlich für fortgeschrittenere Anwendungen ist.
3. Zeichnen Sie die Grafiken, die Sie animieren.
4. Stellen Sie die in Schritt 2 gespeicherten Einstellungen mit [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore) wieder her.
5. Rufen Sie `requestAnimationFrame()` auf, um das Zeichnen des nächsten Frames der Animation zu planen.

> [!NOTE]
> Wir werden `save()` und `restore()` hier nicht behandeln, aber sie werden in unserem [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations)-Tutorial (und den darauf folgenden) gut erklärt.

### Laufanimation von Objekten

Nun lassen Sie uns unsere eigene einfache Animation erstellen — wir animieren ein sich über den Bildschirm bewegendes Objekt mit einem Sprite-Sheet.

1. Erstellen Sie eine weitere frische Kopie unserer Canvas-Vorlage und öffnen Sie sie in Ihrem Code-Editor.

2. Aktualisieren Sie das Fallback-HTML für das Bild:

   ```html live-sample___7-canvas-walking-animation
   <canvas class="myCanvas">
     <p>A cat walking.</p>
   </canvas>
   ```

3. Dieses Mal werden wir nicht den Hintergrund schwarz färben. Also malen wir nach dem Abrufen der `ctx`-Variable den Hintergrund stattdessen hellgrau:

   ```js live-sample___7-canvas-walking-animation
   ctx.fillStyle = "#e5e6e9";
   ctx.fillRect(0, 0, width, height);
   ```

4. Am Ende des JavaScripts fügen Sie die folgende Zeile hinzu, um den Koordinatenursprung erneut in die Mitte des Canvas zu setzen:

   ```js live-sample___7-canvas-walking-animation
   ctx.translate(width / 2, height / 2);
   ```

5. Dann erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, setzen sein [`src`](/de/docs/Web/API/HTMLImageElement/src) auf das Bild, das wir laden möchten, und fügen einen `onload`-Ereignishandler hinzu, der die `draw()`-Funktion feuern lässt, wenn das Bild geladen ist:

   ```js live-sample___7-canvas-walking-animation
   const image = new Image();
   image.src =
     "https://developer.mozilla.org/shared-assets/images/examples/web-animations/cat_sprite.png";
   image.onload = draw;
   ```

6. Jetzt fügen wir einige Variablen hinzu, um die Position nachzuverfolgen, an der das Sprite auf dem Bildschirm gezeichnet werden soll, und die Sprite-Nummer, die wir anzeigen möchten.

   ```js live-sample___7-canvas-walking-animation
   let spriteIndex = 0;
   let posX = 0;
   const spriteWidth = 300;
   const spriteHeight = 150;
   const totalSprites = 12;
   ```

   Das Sprite-Bild wurde freundlicherweise von [Rachel Nabors](https://nearestnabors.com/) für ihre Dokumentationsarbeit an der [Web Animations API](/de/docs/Web/API/Web_Animations_API) erstellt und geteilt. Es sieht folgendermaßen aus:

   ![Ein Sprite-Sheet mit drei Spalten, wobei jede Spalte eine Sequenz von Bildern einer schwarzen Katze enthält, die sich nach links in unterschiedlichem Tempo bewegt. Jedes Sprite ist 300 Pixel breit und 150 Pixel hoch.](/shared-assets/images/examples/web-animations/cat_sprite.png)

   Es enthält drei Spalten. Jede Spalte ist eine Sequenz, die die Katze darstellt, die sich in einem anderen Tempo bewegt (gehen, traben und galoppieren). Jede Sequenz enthält entweder 12 oder 13 Sprites — jedes ist 300 Pixel breit und 150 Pixel hoch. Wir werden die linkeste Gehen-Sequenz verwenden, die 12 Sprites enthält. Um jedes Sprite sauber anzuzeigen, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild aus dem Sprite-Sheet auszuschneiden und nur diesen Teil anzuzeigen, wie wir es oben beim Firefox-Logo getan haben. Die X- und Y-Koordinaten des Slices müssen ein Vielfaches von `spriteWidth` und `spriteHeight` sein, je nachdem; da wir die linkeste Sequenz verwenden, ist die X-Koordinate immer 0. Die Slicengröße wird immer `spriteWidth` auf `spriteHeight` sein.

7. Jetzt fügen wir eine leere `draw()`-Funktion am Ende des Codes ein, bereit, um mit Code gefüllt zu werden:

   ```js
   function draw() {}
   ```

   ```js-nolint hidden live-sample___7-canvas-walking-animation
   function draw() {
   ```

8. Der restliche Code in diesem Abschnitt geht in `draw()`. Fügen Sie zuerst die folgende Zeile hinzu, die das Canvas löscht, um es für das Zeichnen jedes Frames vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width / 2), -(height / 2)` angeben müssen, da wir die Ursprungsposition früher auf `width/2, height/2` gesetzt haben.

   ```js live-sample___7-canvas-walking-animation
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

9. Als nächstes zeichnen wir unser Bild mit drawImage — der 9-Parameter-Version. Fügen Sie folgendes hinzu:

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
   - Parameter 2 und 3 geben die obere linke Ecke des Ausschnitts an, der aus dem Quellbild ausgeschnitten werden soll, wobei der X-Wert als 0 (für die linkeste Spalte) und der Y-Wert, der durch Multiplikation von `spriteHeight` variiert. Sie können den X-Wert durch `spriteWidth` oder `2 * spriteWidth` ersetzen, um die anderen Spalten auszuwählen.
   - Parameter 4 und 5 geben die Größe des Ausschnitts an, der ausgeschnitten werden soll — `spriteWidth` und `spriteHeight`.
   - Parameter 6 und 7 geben die obere linke Ecke der Box an, in die Sie den Ausschnittbereich des Bildes auf das Canvas zeichnen möchten — die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichenposition variieren können, indem wir den `posX`-Wert ändern. Die Y-Position ist `-spriteHeight / 2`, was bedeutet, dass das Bild vertikal zentriert auf dem Canvas sein wird.
   - Parameter 8 und 9 geben die Größe des Bildes auf dem Canvas an. Wir möchten es in seiner ursprünglichen Größe belassen, also geben wir `spriteWidth` und `spriteHeight` als Breite und Höhe an.

10. Jetzt ändern wir den `spriteIndex`-Wert nach jedem Zeichnen — nun, nach einigen davon jedenfalls. Fügen Sie den folgenden Block am Ende der `draw()`-Funktion hinzu:

    ```js live-sample___7-canvas-walking-animation
    if (posX % 11 === 0) {
      if (spriteIndex === totalSprites - 1) {
        spriteIndex = 0;
      } else {
        spriteIndex++;
      }
    }
    ```

    Wir verpacken den ganzen Block in `if (posX % 11 === 0) { }`. Wir verwenden den Modulo-Operator (`%`) (auch bekannt als [Rest-Operator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu überprüfen, ob der `posX`-Wert genau durch 11 ohne Rest teilbar ist. Wenn ja, wechseln wir zum nächsten Sprite, indem wir `spriteIndex` hochzählen (umwickelt zu 0 nach dem letzten). Dies bedeutet effektiv, dass wir das Sprite nur bei jedem 11. Frame aktualisieren, oder ungefähr 6 Frames pro Sekunde (`requestAnimationFrame()` ruft uns bis zu 60 Frames pro Sekunde auf, wenn möglich). Wir verlangsamen die Framerate absichtlich, da wir nur 12 Sprites zur Verfügung haben, und wenn wir eines jede 60. Sekunde anzeigen, würde sich unser Objekt viel zu schnell bewegen!

    Innerhalb des äußeren Blocks verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob sich der `spriteIndex`-Wert am letzten befindet. Wenn wir bereits das letzte Sprite anzeigen, setzen wir `spriteIndex` auf 0 zurück; wenn nicht, erhöhen wir es einfach um 1.

11. Als nächstes müssen wir herausfinden, wie wir den `posX`-Wert bei jedem Frame ändern können — fügen Sie den folgenden Codeblock direkt unter Ihrem letzten ein.

    ```js live-sample___7-canvas-walking-animation
    if (posX < -width / 2 - spriteWidth) {
      const newStartPos = width / 2;
      posX = Math.ceil(newStartPos);
    } else {
      posX -= 2;
    }
    ```

    Wir verwenden eine weitere `if...else`-Anweisung, um zu sehen, ob der Wert von `posX` kleiner als `-width/2 - spriteWidth` geworden ist, was bedeutet, dass unsere Katze aus dem linken Rand des Bildschirms gelaufen ist. Wenn ja, berechnen wir eine Position, die die Katze gerade rechts vom rechten Rand des Bildschirms platzieren würde.

    Wenn unsere Katze sich nicht vom Rand des Bildschirms entfernt hat, verringern wir `posX` um 2. Dies führt dazu, dass sie sich beim nächsten Zeichnen etwas weiter nach links bewegt.

12. Schließlich müssen wir die Animation in Schleife lassen, indem wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()`-Funktion aufrufen:

    ```js live-sample___7-canvas-walking-animation
    window.requestAnimationFrame(draw);
    ```

```js-nolint hidden live-sample___7-canvas-walking-animation
}
```

Das war's! Das endgültige Beispiel sollte etwa so aussehen:

{{EmbedLiveSample("7-canvas-walking-animation", '100%', 260)}}

Sie können die **Play**-Schaltfläche drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Eine einfache Zeichnungsanwendung

Als letztes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben (wie Mausbewegung in diesem Fall) kombiniert werden kann. Wir werden Ihnen nicht durch und durch erklären, wie Sie diese erstellen — wir erkunden nur die interessantesten Teile des Codes.

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

Sie können mit dem Beispiel live unten spielen; Sie können auch die **Play**-Schaltfläche drücken, um es im MDN Playground zu öffnen, wo Sie den Quellcode bearbeiten können:

{{EmbedLiveSample("8-canvas-drawing-app", '100%', 600)}}

Sehen wir uns die interessantesten Teile an. Zuerst halten wir die X- und Y-Koordinaten der Maus nach, sowie ob sie geklickt wird oder nicht mit drei Variablen: `curX`, `curY` und `pressed`. Wenn die Maus bewegt wird, führen wir eine Funktion aus, die als `onmousemove`-Ereignishandler eingerichtet wurde und die aktuellen X- und Y-Werte erfasst. Wir verwenden auch `onmousedown`- und `onmouseup`-Ereignishandler, um den Wert von `pressed` auf `true` zu ändern, wenn die Maustaste gedrückt wird, und wieder auf `false`, wenn sie losgelassen wird.

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

Wenn die Schaltfläche "Clean App" gedrückt wird, führen wir eine einfache Funktion aus, die das gesamte Canvas auf Schwarz zurücksetzt, genau wie wir es schon gesehen haben:

```js live-sample___8-canvas-drawing-app
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal ziemlich einfach — wenn `pressed` `true` ist, zeichnen wir einen Kreis mit einem Füllstil gleich dem Wert im Color-Picker und einem Radius gleich dem Wert, der im Bereichseingabe angegeben ist. Wir müssen den Kreis 85 Pixel über die Stelle zeichnen, von der wir ihn messen, da die vertikale Messung von der Oberseite des Viewports genommen wird, aber wir zeichnen den Kreis relativ zur Oberseite des Canvas, das unter der 85 Pixel hohen Symbolleiste beginnt. Wenn wir es mit nur `curY` als Y-Koordinate zeichnen würden, würde es 85 Pixel niedriger als die Mausposition erscheinen.

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

Alle {{htmlelement("input")}}-Typen werden gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, wird auf ein einfaches Textfeld zurückgegriffen.

## WebGL

Es ist jetzt an der Zeit, sich von 2D zu verabschieden und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalte werden unter Verwendung der [WebGL-API](/de/docs/Web/API/WebGL_API) spezifiziert, die eine völlig separate API von der 2D-Canvas-API ist, obwohl sie beide auf {{htmlelement("canvas")}}-Elementen gerendert werden.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht es Ihnen, direkt mit der {{Glossary("GPU", "GPU")}} des Computers zu kommunizieren. Als solches ist das Schreiben von rohem WebGL näher an Programmiersprachen niedrigerer Ebene wie C++ als an regulärem JavaScript; es ist ziemlich komplex, aber unglaublich leistungsstark.

### Verwendung einer Bibliothek

Aufgrund ihrer Komplexität schreiben die meisten Leute 3D-Grafikcode mit einer externen JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten dieser Bibliotheken arbeiten auf ähnliche Weise und bieten Funktionalität zur Erstellung von primitiven und benutzerdefinierten Formen, zum Positionieren von Kameras und Beleuchtung, zum Überziehen von Oberflächen mit Texturen und mehr. Sie erledigen das WebGL für Sie, sodass Sie auf einer höheren Ebene arbeiten können.

Ja, die Verwendung einer dieser Bibliotheken bedeutet, eine weitere neue API zu lernen (in diesem Fall eine Drittanbieter-API), aber sie sind viel einfacher als das Codieren von rohem WebGL.

### Ein rotierender Würfel

Lassen Sie uns ein Beispiel ansehen, wie Sie etwas mit einer WebGL-Bibliothek erstellen können. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der beliebtesten ist. In diesem Tutorial erstellen wir einen 3D rotierenden Würfel.

1. Erstellen Sie zunächst einen neuen Ordner auf Ihrer lokalen Festplatte mit dem Namen `webgl-cube`.
2. Legen Sie darin eine neue Datei mit dem Namen `index.html` an und fügen Sie den folgenden Inhalt hinzu:

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

3. Erstellen Sie als nächstes eine weitere neue Datei namens `script.js`, ebenfalls im gleichen Ordner wie zuvor. Lassen Sie es vorerst leer.
4. Erstellen Sie eine weitere neue Datei namens `style.css`, ebenfalls im gleichen Ordner, und fügen Sie folgenden Inhalt hinzu:

   ```css live-sample___9-webgl-cube
   html,
   body {
     margin: 0;
   }

   body {
     overflow: hidden;
   }
   ```

5. Wir haben `three.js` in unsere Seite aufgenommen (das ist es, was das erste `<script>`-Element in unserem HTML tut), also können wir jetzt beginnen, JavaScript zu schreiben, das dies in `script.js` verwendet. Beginnen wir mit dem Erstellen einer neuen Szene — fügen Sie folgendes in Ihre `script.js`-Datei ein:

   ```js live-sample___9-webgl-cube
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene)-Konstruktor erstellt eine neue Szene, die die gesamte 3D-Welt darstellt, die wir darstellen möchten.

6. Als nächstes brauchen wir eine **Kamera**, damit wir die Szene sehen können. In 3D-Grafikbegriffen stellt die Kamera die Position des Betrachters in der Welt dar. Um eine Kamera zu erstellen, fügen Sie die folgenden Zeilen als nächstes hinzu:

   ```js live-sample___9-webgl-cube
   const camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000,
   );
   camera.position.z = 5;
   ```

   Der [`PerspectiveCamera()`](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera)-Konstruktor benötigt vier Argumente:
   - Das Sichtfeld: Wie breit der Bereich vor der Kamera ist, der sichtbar sein soll, in Grad.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: In der Regel das Verhältnis der Breite der Szene geteilt durch die Höhe der Szene. Die Verwendung eines anderen Werts verzerrt die Szene (was das sein könnte, was Sie möchten, aber normalerweise nicht der Fall ist).
   - Die Nah-Ebene: Wie nah die Objekte an die Kamera kommen können, bevor wir aufhören, sie auf den Bildschirm zu rendern. Denken Sie daran, wie, wenn Sie Ihre Fingerspitze näher und näher an den Raum zwischen Ihren Augen bewegen, Sie es irgendwann nicht mehr sehen können.
   - Die Fern-Ebene: Wie weit entfernt die Dinge von der Kamera sind, bevor sie nicht mehr gerendert werden.

   Wir setzen auch die Position der Kamera auf 5 Einheiten auf der Z-Achse, was, ähnlich wie in CSS, aus dem Bildschirm heraus zu Ihnen, dem Betrachter, ist.

7. Die dritte wesentliche Zutat ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene, wie durch eine gegebene Kamera betrachtet, rendert. Wir erstellen jetzt einen mit dem [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)-Konstruktor, werden ihn aber erst später verwenden. Fügen Sie die folgenden Zeilen als nächstes hinzu:

   ```js live-sample___9-webgl-cube
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile legt die Größe fest, in der der Renderer die Sicht der Kamera zeichnet, und die dritte Zeile fügt das vom Renderer erstellte {{htmlelement("canvas")}}-Element dem {{htmlelement("body")}} des Dokuments hinzu. Nun wird alles, was der Renderer zeichnet, in unserem Fenster angezeigt.

8. Als nächstes wollen wir den Würfel erstellen, den wir auf dem Canvas anzeigen werden. Fügen Sie das folgende Code-Segment am Ende Ihres JavaScripts hinzu:

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

   Hier gibt es noch einiges mehr zu berücksichtigen, also gehen wir es in Phasen durch:
   - Wir erstellen zuerst eine globale Variable `cube`, damit wir auf unseren Würfel von überall im Code zugreifen können.
   - Als nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt und rufen `load()` darauf auf. `load()` nimmt in diesem Fall zwei Parameter (obwohl es mehr nehmen kann): die Textur, die wir laden möchten (ein PNG), und eine Funktion, die ausgeführt wird, wenn die Textur geladen wurde.
   - Innerhalb dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um anzugeben, dass wir eine 2 x 2 Wiederholung des Bilds um alle Seiten des Würfels gewickelt haben möchten. Danach erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt und fügen sie dann in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) zusammen, um unseren Würfel zu erstellen. Ein Objekt erfordert normalerweise eine Geometrie (welche Form es hat) und ein Material (wie seine Oberfläche aussieht).
   - Zuletzt fügen wir unseren Würfel der Szene hinzu und rufen dann unsere `draw()`-Funktion auf, um die Animation zu starten.

9. Bevor wir `draw()` definieren, fügen wir dem Szene ein paar Lichter hinzu, um die Sache ein wenig aufzuheitern. Fügen Sie die folgenden Blöcke als nächstes hinzu:

   ```js live-sample___9-webgl-cube
   const light = new THREE.AmbientLight("white"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("white");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art weiches Licht, das die ganze Szene etwas erhellt, wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt hingegen ist ein gerichteter Lichtstrahl, ähnlich wie eine Taschenlampe (oder ein Scheinwerfer, in der Tat).

10. Als letzten Schritt fügen wir unsere `draw()`-Funktion am Ende des Codes hinzu:

    ```js live-sample___9-webgl-cube
    function draw() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);

      requestAnimationFrame(draw);
    }
    ```

    Dies ist ziemlich intuitiv; bei jedem Frame drehen wir unseren Würfel leicht auf seinen X- und Y-Achsen, rendern dann die Szene, wie sie von unserer Kamera betrachtet wird, und rufen dann schließlich `requestAnimationFrame()` auf, um das Zeichnen des nächsten Frames zu planen.

Die fertige Animation sollte folgendermaßen aussehen:

{{EmbedLiveSample("9-webgl-cube", "100%", 500)}}

> [!NOTE]
> In unserem GitHub-Repo finden Sie auch ein weiteres interessantes 3D-Würfel-Beispiel — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([live sehen](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dieses verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Computer-Webcam zu nehmen und ihn als Textur auf die Seite des Würfels zu projizieren!

## Zusammenfassung

An diesem Punkt sollten Sie eine nützliche Vorstellung von den Grundlagen der Grafikprogrammierung mit Canvas und WebGL haben und was Sie mit diesen APIs tun können, sowie eine gute Vorstellung, wohin Sie für weitere Informationen gehen können. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklichen Grundlagen von Canvas behandelt — es gibt noch so viel mehr zu lernen! Die untenstehenden Artikel werden Sie weiterbringen.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorial-Serie, die erklärt, was Sie über 2D-Canvas in viel mehr Details wissen sollten, als hier behandelt. Ein Muss.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Serie, die die Grundlagen der Roh-WebGL-Programmierung lehrt.
- [Erstellung eines grundlegenden Demos mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — Grundlegendes Three.js-Tutorial. Wir haben auch gleichwertige Leitfäden für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spielentwicklung](/de/docs/Games) — die Startseite für die Spieleentwicklung mit Web-Technologien auf MDN. Hier finden Sie einige wirklich nützliche Tutorials und Techniken, die mit 2D- und 3D-Canvas verbunden sind — sehen Sie sich die Optionen Techniken und Tutorials im Menü an.

## Beispiele

- [Violent theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API, um Klang zu erzeugen, und Canvas, um eine hübsche Visualisierung dazu zu generieren.
- [Voice change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas, um Echtzeit-Audiodaten von der Web Audio API zu visualisieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
