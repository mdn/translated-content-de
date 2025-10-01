---
title: Zeichnen von Grafiken
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsfähige Grafikprogrammiertools, von der Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) Sprache bis hin zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in Canvas und weitere Ressourcen, um Ihnen das Lernen zu erleichtern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und grundlegende API-Abdeckungen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte und Anwendungsfälle, die durch die in dieser Lektion behandelten APIs ermöglicht werden.</li>
          <li>Grundlegende Syntax und Verwendung von <code>&lt;canvas&gt;</code> und zugehörigen APIs.</li>
          <li>Verwendung von Timern und <code>requestAnimationFrame()</code>, um Animationsschleifen einzurichten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Das Web bestand ursprünglich nur aus Text, was sehr langweilig war, also wurden Bilder eingeführt - zuerst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}}, und [SVG](/de/docs/Web/SVG).

Dies war jedoch noch nicht genug. Während Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden konnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) – da sie durch Markup dargestellt werden – gab es immer noch keine Möglichkeit, dasselbe für Bitmap-Bilder zu tun, und die verfügbaren Werkzeuge waren ziemlich begrenzt. Das Web hatte immer noch keine Möglichkeit, effektiv Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die normalerweise von niedrigeren Programmiersprachen wie C++ oder Java geleistet werden.

Die Situation begann sich zu verbessern, als Browser im Jahr 2004 das {{htmlelement("canvas")}}-Element und die dazugehörige [Canvas API](/de/docs/Web/API/Canvas_API) zu unterstützen begannen. Wie Sie unten sehen werden, bietet Canvas einige nützliche Werkzeuge zur Erstellung von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere in Kombination mit einigen der anderen von der Webplattform bereitgestellten APIs, kann jedoch schwierig oder unmöglich zugänglich gemacht werden.

Das unten stehende Beispiel zeigt eine einfache 2D-Campus-basierte Bouncing-Balls-Animation, die wir ursprünglich in unserem Modul [JavaScript-Objekte einführen](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) kennengelernt haben:

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

Um 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Dies wurde zu [WebGL](/de/docs/Web/API/WebGL_API), das unter Browser-Anbietern an Bedeutung gewann und um 2009–2010 standardisiert wurde. WebGL ermöglicht die Erstellung echter 3D-Grafiken im Webbrowser.

Dieser Artikel wird sich hauptsächlich auf 2D-Canvas konzentrieren, da roher WebGL-Code sehr komplex ist. Wir werden jedoch zeigen, wie man [eine WebGL-Bibliothek verwendet, um eine 3D-Szene einfacher zu erstellen](#webgl), und Sie finden ein Tutorial zur Abdeckung von rohem WebGL anderswo – siehe [Einstieg in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Einstieg in ein `<canvas>`

Wenn Sie eine 2D- oder 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-{{htmlelement("canvas")}}-Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Dies ist so einfach wie das Einfügen des Elements auf der Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dies erstellt ein Canvas auf der Seite mit einer Größe von 320 x 240 Pixeln.

Sie sollten einige Fallback-Inhalte innerhalb der `<canvas>`-Tags einfügen. Diese sollten den Canvas-Inhalt für Benutzer von Browsern beschreiben, die Canvas nicht unterstützen, oder für Benutzer von Screenreadern.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Der Fallback sollte nützlichen alternativen Inhalt zum Canvas-Inhalt bieten. Wenn Sie beispielsweise einen ständig aktualisierten Graphen von Aktienkursen rendern, könnte der Fallback-Inhalt ein statisches Bild des neuesten Aktiengraphen sein, mit `alt`-Text, der die Preise in Text angibt oder eine Liste von Links zu einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalt ist für Screenreader nicht zugänglich. Fügen Sie beschreibenden Text als Wert des Attributs [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) direkt auf dem Canvas-Element selbst oder einschließlich der Fallback-Inhalte innerhalb der öffnenden und schließenden `<canvas>`-Tags ein. Canvas-Inhalt ist nicht Teil des DOM, aber verschachtelte Fallback-Inhalte sind es.

### Erstellung und Größenbestimmung unseres Canvas

Beginnen wir mit der Erstellung unserer eigenen Canvas-Vorlage, mit der wir zukünftige Experimente erstellen können.

1. Erstellen Sie zunächst ein Verzeichnis auf Ihrer lokalen Festplatte mit dem Namen `canvas-template`.
2. Erstellen Sie eine neue Datei im Verzeichnis mit dem Namen `index.html` und speichern Sie den folgenden Inhalt darin:

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

3. Erstellen Sie eine neue Datei im Verzeichnis mit dem Namen `style.css` und speichern Sie die folgende CSS-Regel darin:

   ```css live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
   body {
     margin: 0;
     overflow: hidden;
   }
   ```

4. Erstellen Sie eine neue Datei im Verzeichnis mit dem Namen `script.js`. Lassen Sie diese Datei vorerst leer.

5. Öffnen Sie nun `script.js` und fügen Sie die folgenden JavaScript-Zeilen hinzu:

   ```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz zum Canvas im `canvas`-Konstant gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas gleich [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Breite des Ansichtsbereichs gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas gleich [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Höhe des Ansichtsbereichs gibt). Jetzt haben wir ein Canvas, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden auch sehen, dass wir Zuweisungen mit mehreren Gleichheitszeichen verketten – dies ist in JavaScript erlaubt und es ist eine gute Technik, wenn Sie mehrere Variablen gleich einem Wert machen möchten. Wir wollten die Breite und Höhe des Canvas in den width/height-Variablen leicht zugänglich machen, da es sich um nützliche Werte handelt, die später verfügbar sein sollten (zum Beispiel, wenn Sie etwas genau in der Mitte der Breite des Canvas zeichnen möchten).

> [!NOTE]
> Sie sollten die Größe des Canvas im Allgemeinen mit HTML-Attributen oder DOM-Eigenschaften setzen, wie oben erklärt. Sie könnten CSS verwenden, aber das Problem dabei ist, dass die Größenbestimmung erfolgt, nachdem das Canvas gerendert wurde, und genau wie jedes andere Bild könnte das Canvas pixelig/verzerrt werden.

### Den Canvas-Kontext erhalten und letzte Einstellungen vornehmen

Wir müssen noch eine letzte Sache tun, bevor wir unser Canvas-Template für fertig halten können. Um auf das Canvas zu zeichnen, müssen wir eine spezielle Referenz auf den Zeichenbereich namens Kontext erhalten. Dies wird mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) durchgeführt, die für den grundlegenden Gebrauch einen einzelnen String als Parameter benötigt, der den Typ des Contexts darstellt, den Sie abrufen möchten.

In diesem Fall möchten wir ein 2D-Canvas, also fügen Sie die folgende JavaScript-Zeile unter die anderen in `script.js` ein:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextwerte, die Sie wählen könnten, sind `webgl` für WebGL, `webgpu` für WebGPU usw., aber diese werden wir in diesem Artikel nicht benötigen.

Das war's – unser Canvas ist jetzt bereit für Zeichnungen! Die Variable `ctx` enthält nun ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, und alle Zeichenoperationen auf dem Canvas werden die Manipulation dieses Objekts beinhalten.

Lassen Sie uns noch eine letzte Sache tun, bevor wir weitermachen. Wir werden den Canvas-Hintergrund schwarz färben, um Ihnen einen ersten Eindruck von der Canvas API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop
ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mit der [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)-Eigenschaft des Canvas (dies übernimmt [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) genau wie CSS-Eigenschaften), dann zeichnen wir ein Rechteck, das die gesamte Fläche des Canvas mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) abdeckt (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, die Sie für das gezeichnete Rechteck haben möchten – wir haben Ihnen gesagt, dass diese width- und height-Variablen nützlich sein würden)!

OK, unsere Vorlage ist fertig und es ist an der Zeit, weiterzumachen.

## 2D-Canvas-Grundlagen

Wie oben erwähnt, werden alle Zeichenoperationen durch die Manipulation eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Objekts durchgeführt (in unserem Fall `ctx`). Viele Operationen erfordern die Angabe von Koordinaten, um genau zu bestimmen, wo etwas gezeichnet werden soll – die obere linke Ecke des Canvas ist Punkt (0, 0), die horizontale (x-)Achse verläuft von links nach rechts, und die vertikale (y-)Achse verläuft von oben nach unten.

![Gitter graphisches Papier mit kleinen Quadraten, die seine Fläche bedecken, mit einem stahlblauen Quadr in der Mitte. Die obere linke Ecke des Canvas ist Punkt (0, 0) der Canvas-x- und y-Achse. Die horizontale Achse (x) verläuft von links nach rechts und bezeichnet die Breite, während die vertikale Achse (y) von oben nach unten verläuft und die Höhe bezeichnet. Die obere linke Ecke des blauen Quadrats ist als Abstand x-Einheiten von der y-Achse und y-Einheiten von der x-Achse markiert.](canvas_default_grid.png)

Das Zeichnen von Formen erfolgt normalerweise entweder durch das Zeichnen rechteckiger primitiv, oder das Zeichnen einer Linie entlang eines bestimmten Pfades und das anschließende Füllen der Form. Unten zeigen wir, wie man beides macht.

### Einfache Rechtecke

Fangen wir mit einigen einfachen Rechtecken an.

1. Erstellen Sie zuerst eine Kopie Ihres neu erstellten Canvas-Template-Verzeichnisses.
2. Fügen Sie die folgenden Zeilen am Ende Ihrer JavaScript-Datei hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "red";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie Ihr HTML im Browser laden, sollten Sie ein rotes Rechteck auf Ihrem Canvas sehen. Seine obere linke Ecke ist 50 Pixel von der oberen und linken Kante des Canvas entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch den dritten und vierten Parameter definiert).

3. Fügen wir noch ein weiteres Rechteck in die Mischung hinzu - ein grünes diesmal. Fügen Sie das folgende am Ende Ihres JavaScript hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "green";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren, und Sie werden Ihr neues Rechteck sehen. Dies wirft einen wichtigen Punkt auf: Grafikoperationen wie das Zeichnen von Rechtecken, Linien und so weiter erfolgen in der Reihenfolge, in der sie auftreten. Denken Sie daran, dass es wie das Streichen einer Wand ist, bei dem jede Farbschicht überlappt und möglicherweise darunterliegende Schichten verdeckt. Sie können nichts tun, um dies zu ändern, also müssen Sie sorgfältig darüber nachdenken, in welchem Reihenfolge Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, z.B. durch die Verwendung von `rgb()`. Der "Alpha-Kanal" definiert die Menge an Transparenz, die die Farbe hat. Je höher der Wert, desto mehr verbirgt es, was sich dahinter befindet. Fügen Sie das folgende zu Ihrem Code hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, einige weitere Rechtecke selbst zu zeichnen; haben Sie Spaß dabei!

### Strokes und Linienbreiten

Bisher haben wir uns das Zeichnen von gefüllten Rechtecken angesehen, aber Sie können auch Rechtecke zeichnen, die nur Konturen haben (in der Grafikdesign-Terminologie als **Strokes** bezeichnet). Um die Farbe zu setzen, die Sie für Ihren Stroke wünschen, verwenden Sie die [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)-Eigenschaft; das Zeichnen eines Stroke-Rechtecks erfolgt mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Fügen Sie das folgende zum vorherigen Beispiel hinzu, wieder unter den vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "white";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Strokes beträgt 1 Pixel; Sie können den Wert der [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)-Eigenschaft ändern, um dies zu ändern (sie benötigt eine Zahl, die die Breite des Strokes in Pixeln darstellt). Fügen Sie die folgende Zeile zwischen den vorherigen Zeilen ein:

   ```js
   ctx.lineWidth = 5;
   ```

Jetzt sollten Sie sehen, dass Ihre weiße Umrandung viel dicker geworden ist! Das war's für jetzt. An diesem Punkt sollte Ihr Beispiel so aussehen:

```js hidden live-sample___2-canvas-rectangles
ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);
```

{{EmbedLiveSample("2-canvas-rectangles", '100%', 250)}}

Sie können die **Play**-Schaltfläche drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Zeichnen von Pfaden

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Grundsätzlich geht es darum, Code zu schreiben, der genau angibt, welchen Pfad der Stift auf Ihrem Canvas beschreiben soll, um die Form zu zeichnen, die Sie erstellen möchten. Canvas enthält Funktionen zum Zeichnen von geraden Linien, Kreisen, Bézierkurven und mehr.

Beginnen Sie die Sektion, indem Sie eine frische Kopie Ihrer Canvas-Vorlage erstellen, in der Sie das neue Beispiel zeichnen.

Wir werden einige gemeinsame Methoden und Eigenschaften in den folgenden Abschnitten verwenden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) – Beginnen Sie mit dem Zeichnen eines Pfades an der Stelle, an der sich der Stift aktuell auf dem Canvas befindet. Auf einem neuen Canvas beginnt der Stift bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) – Bewegen Sie den Stift an eine andere Stelle auf dem Canvas, ohne die Linie aufzuzeichnen oder zu zeichnen; der Stift "springt" zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) – Zeichnen Sie eine gefüllte Form, indem Sie den Pfad füllen, den Sie bisher beschrieben haben.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) – Zeichnen Sie eine Konturform, indem Sie einen Stroke entlang des Pfades zeichnen, den Sie bisher gezeichnet haben.
- Sie können auch Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` mit Pfaden sowie Rechtecken verwenden.

Eine typische, einfache Pfadzeichnungsoperation sieht ungefähr so aus:

```js
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Linien zeichnen

Lassen Sie uns ein gleichseitiges Dreieck auf dem Canvas zeichnen.

1. Fügen Sie zuerst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Dies konvertiert Gradwerte in Bogenmaß, was nützlich ist, da Sie immer, wenn Sie einen Winkelwert in JavaScript angeben müssen, fast immer im Bogenmaß angegeben werden, während Menschen normalerweise in Grad denken.

   ```js live-sample___3_canvas_paths
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Als nächstes beginnen Sie Ihren Pfad, indem Sie das folgende unter Ihrer vorherigen Ergänzung hinzufügen; hier setzen wir eine Farbe für unser Dreieck, beginnen mit dem Zeichnen eines Pfades und bewegen den Stift zu (50, 50), ohne etwas zu zeichnen. Dort beginnen wir mit der Zeichnung unseres Dreiecks.

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "red";
   ctx.beginPath();
   ctx.moveTo(50, 50);
   ```

3. Fügen Sie nun die folgenden Linien am Ende Ihres Skripts hinzu:

   ```js live-sample___3_canvas_paths
   ctx.lineTo(150, 50);
   const triHeight = 50 * Math.tan(degToRad(60));
   ctx.lineTo(100, 50 + triHeight);
   ctx.lineTo(50, 50);
   ctx.fill();
   ```

   Gehen wir diese der Reihenfolge nach durch:

   Zuerst zeichnen wir eine Linie nach (150, 50) – unser Pfad verläuft jetzt 100 Pixel nach rechts entlang der x-Achse.

\#\#\# Mathematik zur Berechnung der Dreieckshöhe

Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks mit etwas einfacher Trigonometrie. Grundsätzlich zeichnen wir das Dreieck nach unten zeigend. Die Winkel in einem gleichseitigen Dreieck betragen immer 60 Grad; um die Höhe zu berechnen, können wir es in der Mitte in zwei rechtwinklige Dreiecke teilen, die Winkel von 90 Grad, 60 Grad und 30 Grad haben werden. In Bezug auf die Seiten:

- Die längste Seite wird als **Hypotenuse** bezeichnet.
- Die Seite neben dem 60-Grad-Winkel wird als **Ankathete** bezeichnet – von der wir wissen, dass es sich um 50 Pixel handelt, da es die Hälfte der gerade gezeichneten Linie ist.
- Die Seite gegenüber dem 60-Grad-Winkel wird als **Gegenkathete** bezeichnet, was die zu berechnende Höhe des Dreiecks ist.

![Ein gleichseitiges Dreieck, das nach unten zeigt, mit beschrifteten Winkeln und Seiten. Die horizontale Linie oben ist als 'Ankathete' beschriftet. Eine senkrechte gepunktete Linie, von der Mitte der Ankathete aus, bezeichnet als 'gegenkathete', teilt das Dreieck in zwei gleiche rechtwinklige Dreiecke. Die rechte Seite des Dreiecks ist als Hypotenuse beschriftet, da es die Hypotenuse des rechtwinkligen Dreiecks ist, das von der Linie 'gegenkathete' gebildet wird, während alle drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des rechtwinkligen Dreiecks.](trigonometry.png)

Eines der grundlegenden trigonometrischen Formeln besagt, dass die Länge der Ankathete multipliziert mit dem Tangens des Winkels gleich der Gegenkathete ist, daher kommen wir zu `50 * Math.tan(degToRad(60))`. Wir verwenden unsere `degToRad()`-Funktion, um 60 Grad in Bogenmaß zu konvertieren, da {{jsxref("Math.tan()")}} einen Eingabewert im Bogenmaß erwartet.

4. Mit der berechneten Höhe zeichnen wir eine weitere Linie zu `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss genau zwischen den vorherigen beiden von uns gesetzten X-Werten liegen. Die Y-Koordinate hingegen muss 50 plus die Dreieckshöhe sein, da wir wissen, dass die Oberseite des Dreiecks 50 Pixel von der Oberseite des Canvas entfernt ist.
5. Die nächste Linie führt eine Linie zurück zum Ausgangspunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form zu füllen.

#### Kreise zeichnen

Sehen wir uns nun an, wie man einen Kreis im Canvas zeichnet. Dies wird mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) erreicht, die den gesamten oder einen Teil eines Kreises an einem bestimmten Punkt zeichnet.

1. Fügen wir einen Bogen zu unserem Canvas hinzu – fügen Sie das folgende am Ende Ihres Codes hinzu:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "blue";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` nimmt sechs Parameter. Die ersten beiden spezifizieren die Position des Mittelpunktes des Bogens (X und Y, bzw.). Der dritte ist der Radius des Kreises, der vierte und fünfte sind die Start- und Endwinkel, in denen der Kreis gezeichnet wird (durch die Angabe von 0 und 360 Grad erhalten wir einen vollen Kreis), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn (entgegen dem Uhrzeigersinn) oder im Uhrzeigersinn (`false` ist im Uhrzeigersinn) gezeichnet werden soll.

   > [!NOTE]
   > 0 Grad entspricht einer horizontalen Ausrichtung nach rechts.

2. Lassen Sie uns versuchen, einen weiteren Bogen hinzuzufügen:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "yellow";
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   Das Muster hier ist sehr ähnlich, mit zwei Unterschieden:
   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird, was bedeutet, dass, obwohl der Bogen angegeben ist als Beginn bei -45 Grad und endet bei 45 Grad, wir den Bogen um die 270 Grad um diesen Abschnitt herum zeichnen. Wenn Sie `true` in `false` ändern und dann den Code erneut ausführen, wird nur der 90-Grad-Segment des Kreises gezeichnet.
   - Bevor Sie `fill()` aufrufen, zeichnen wir eine Linie zum Mittelpunkt des Kreises. Das bedeutet, dass wir den ziemlich schönen Pac-Man-Stil-Ausschnitt gerendert bekommen. Wenn Sie diese Linie entfernen (versuchen Sie es!), dann den Code erneut ausführen, hätten Sie nur eine Kante des Kreises abgeschnitten zwischen Start- und Endpunkt des Bogens. Dies veranschaulicht einen weiteren wichtigen Punkt des Canvas – wenn Sie versuchen, einen unvollständigen Pfad zu füllen (d.h. einen, der nicht geschlossen ist), wird der Browser eine gerade Linie zwischen Start- und Endpunkt einfügen und es dann füllen.

Das war's fürs Erste; Ihr endgültiges Beispiel sollte so aussehen:

{{EmbedLiveSample("3_canvas_paths", '100%', 200)}}

Sie können die **Play**-Schaltfläche drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

> [!NOTE]
> Um mehr über erweiterte Pfadzeichenfunktionen wie Bézier-Kurven zu erfahren, schauen Sie in unser [Zeichnen von Formen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)-Tutorial.

### Text

Canvas bietet auch Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz erkunden. Beginnen Sie, indem Sie eine weitere frische Kopie Ihrer Canvas-Vorlage erstellen, in der Sie das neue Beispiel zeichnen.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) – zeichnet ausgefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) – zeichnet Umriss-(Stroke-)Text.

Beide nehmen in ihrer Grundverwendung drei Eigenschaften: die zu zeichnende Zeichenkette und die X- und Y-Koordinaten des Punktes, von dem aus der Text gezeichnet werden soll. Dies stellt sich als die **untere linke** Ecke des **Textrahmens** heraus (buchstäblich, der Rahmen, der den von Ihnen gezeichneten Text umgibt), was Sie verwirren könnte, da andere Zeichenoperationen in der Regel von der oberen linken Ecke aus beginnen — beachten Sie dies.

Es gibt auch eine Reihe von Eigenschaften, die bei der Steuerung des Textrenderings helfen, z. B. [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), mit der Sie Schriftartfamilie, -größe usw. angeben können. Sie nimmt als Wert die gleiche Syntax wie die CSS-{{cssxref("font")}}-Eigenschaft.

Canvas-Inhalt ist für Screenreader nicht zugänglich. Text, der auf das Canvas gezeichnet wird, ist im DOM nicht verfügbar, muss jedoch zugänglich gemacht werden. In diesem Beispiel verwenden wir den Text als Wert für `aria-label`.

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

Hier zeichnen wir zwei Textzeilen, eine ausgefüllt und die andere umrissen. Das Beispiel sollte so aussehen:

{{EmbedLiveSample("4-canvas-text", '100%', 180)}}

Drücken Sie die **Play**-Schaltfläche, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Spielen Sie herum und sehen Sie, was Sie sich einfallen lassen können! Ausführlichere Informationen zu den Optionen, die für Canvas-Text verfügbar sind, finden Sie unter [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Zeichnen von Bildern auf das Canvas

Es ist möglich, externe Bilder auf Ihr Canvas zu rendern. Diese können einfache Bilder, Rahmen aus Videos oder der Inhalt anderer Canvas sein. Für den Moment schauen wir nur auf die Verwendung einiger einfacher Bilder auf unserem Canvas.

1. Erstellen Sie wie zuvor eine weitere frische Kopie Ihrer Canvas-Vorlage, in der Sie das neue Beispiel zeichnen.

   Bilder werden auf das Canvas mit der Methode [`drawImage()](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) gezeichnet. Die einfachste Version nimmt drei Parameter an: eine Referenz auf das Bild, das Sie rendern möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Lassen Sie uns damit beginnen, eine Bildquelle zu erfassen, um sie im Canvas einzubetten. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript hinzu:

   ```js live-sample___5-canvas-images
   const image = new Image();
   image.src =
     "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt mit dem [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor. Das zurückgegebene Objekt ist vom gleichen Typ wie das, das zurückgegeben wird, wenn Sie eine Referenz zu einem vorhandenen {{htmlelement("img")}}-Element abrufen. Dann setzen wir sein [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut auf unser Firefox-Logo-Bild. An diesem Punkt beginnt der Browser, das Bild zu laden.

3. Wir könnten es jetzt mit `drawImage()` versuchen, das Bild einzubetten, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, sonst schlägt der Code fehl. Wir können dies mit dem `load`-Ereignis erreichen, das nur ausgelöst wird, wenn das Bild fertig geladen wurde. Fügen Sie den folgenden Block unter den vorangegangenen Block hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie das Bild auf dem Canvas eingebettet sehen, wenn auch ziemlich groß.

4. Aber es gibt noch mehr! Was ist, wenn wir nur einen Teil des Bildes anzeigen oder es in der Größe ändern möchten? Beides können wir mit der komplexeren Version von `drawImage()` tun. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile wie folgt:

   ```js
   ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185);
   ```

   ```js hidden live-sample___5-canvas-images
   image.addEventListener("load", () =>
     ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185),
   );
   ```

   - Der erste Parameter ist die Bildreferenz, wie zuvor.
   - Die Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links vom ersten Parameter oder über dem zweiten wird gezeichnet.
   - Die Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem geladenen Bild ausschneiden möchten.
   - Die Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Teils des Bildes zeichnen möchten, relativ zur oberen linken Ecke des Canvas.
   - Die Parameter 8 und 9 definieren die Breite und Höhe, um den ausgeschnittenen Bereich des Bildes zu zeichnen. In diesem Fall haben wir die gleichen Dimensionen wie den ursprünglichen Ausschnitt angegeben, aber Sie könnten es skalieren, indem Sie andere Werte angeben.

5. Wenn das Bild sinnvoll aktualisiert wird, muss auch die Beschreibung aktualisiert werden.

   ```js live-sample___5-canvas-images
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das endgültige Beispiel sollte so aussehen:

{{EmbedLiveSample("5-canvas-images", '100%', 260)}}

Drücken Sie die **Play**-Schaltfläche, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

## Schleifen und Animationen

Bisher haben wir einige sehr grundlegende Anwendungen des 2D-Canvas behandelt, aber wirklich erleben Sie die volle Kraft des Canvas erstens, wenn Sie es in irgendeiner Weise aktualisieren oder animieren. Schließlich bietet Canvas bearbeitbare Bilder! Wenn Sie nichts ändern möchten, sollten Sie stattdessen statische Bilder verwenden und sich viel Arbeit ersparen.

### Eine Schleife erstellen

Mit Schleifen im Canvas zu spielen macht Spaß – Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) (oder einer anderen Art von) Schleife ausführen, genau wie bei jedem anderen JavaScript-Code.

Lassen Sie uns ein Beispiel erstellen.

1. Erstellen Sie eine weitere frische Kopie Ihrer Canvas-Vorlage.
2. Fügen Sie die folgende Zeile am Ende Ihres JavaScript hinzu. Diese enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js live-sample___6-canvas-for-loop
   ctx.translate(width / 2, height / 2);
   ```

   Dies bewirkt, dass der Koordinatenurpunkt (0, 0) in die Mitte des Canvas verschoben wird, anstatt sich in der oberen linken Ecke zu befinden. Dies ist in vielen Situationen sehr nützlich, wie diese, in der wir möchten, dass unser Design relativ zur Mitte des Canvas gezeichnet wird.

3. Fügen Sie nun den folgenden Code am Ende Ihres JavaScript hinzu:

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

   Hier setzen wir dieselbe Methode `degToRad()` um, die wir im obigen Dreiecksbeispiel gesehen haben, eine `rand()`-Funktion, die eine Zufallszahl zwischen einem angegebenen unteren und oberen Bereich zurückgibt, und die Variablen `length` und `moveOffset` (über die wir später mehr erfahren werden).

4. Die Idee hier ist, dass wir etwas auf dem Canvas innerhalb der `for`-Schleife zeichnen und es jedes Mal iterieren, damit wir etwas Interessantes schaffen können. Fügen Sie den folgenden Code in Ihrer `for`-Schleife ein:

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

   Also in jeder Iteration:
   - Setzen wir `fillStyle` auf einen Farbton von leicht transparentem Lila, der sich jedes Mal basierend auf dem Wert von `length` ändert. Da Sie später sehen werden, dass der Längenwert bei jedem Schleifendurchlauf kleiner wird, besteht der Effekt darin, dass die Farbe bei jedem gezeichneten Dreieck heller wird.
   - Beginnen wir mit dem Pfad.
   - Bewegen wir den Stift zu einer Koordinate von `(moveOffset, moveOffset)`; Diese Variable bestimmt, wie weit wir jedes Mal gehen möchten, wenn wir ein neues Dreieck zeichnen.
   - Zeichnen wir eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Dies zeichnet eine Linie der Länge `length` parallel zur X-Achse.
   - Berechnen wir die Höhe des Dreiecks, wie zuvor.
   - Zeichnen wir eine Linie zur nach unten zeigenden Ecke des Dreiecks, dann eine Linie zurück zum Anfang des Dreiecks.
   - Rufen wir `fill()` auf, um das Dreieck zu füllen.
   - Aktualisieren wir die Variablen, die die Sequenz der Dreiecke beschreiben, damit wir bereit sind, das nächste zu zeichnen. Wir reduzieren den Wert von `length` um 1, sodass die Dreiecke jedes Mal kleiner werden; erhöhen `moveOffset` um einen kleinen Betrag, damit jedes aufeinanderfolgende Dreieck etwas weiter entfernt ist, und verwenden eine weitere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), die es uns ermöglicht, das gesamte Canvas zu rotieren! Wir drehen es um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das war's! Das endgültige Beispiel sollte so aussehen:

{{EmbedLiveSample("6-canvas-for-loop", '100%', 550)}}

Drücken Sie die **Play**-Schaltfläche, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Wir möchten Sie ermutigen, mit dem Beispiel zu spielen und es zu Ihrem eigenen zu machen! Beispielsweise:

- Zeichnen Sie Rechtecke oder Bögen anstelle von Dreiecken oder betten Sie sogar Bilder ein.
- Spielen Sie mit den Werten von `length` und `moveOffset`.
- Verwenden Sie einige Zufallszahlen, indem Sie die `rand()`-Funktion verwenden, die wir oben eingeschlossen haben, aber nicht verwendet haben.

### Animationen

Das oben erstellte Schleifenbeispiel war unterhaltsam, aber Sie brauchen wirklich eine konstante Schleife, die für jede ernsthafte Canvas-Anwendung (wie Spiele und Echtzeitvisualisierungen) weiterläuft. Wenn Sie Ihr Canvas als Film betrachten, möchten Sie wirklich, dass die Anzeige jedes Mal aktualisiert wird, um die aktualisierte Ansicht anzuzeigen, mit einer idealen Bildwiederholfrequenz von 60 Bildern pro Sekunde, damit Bewegungen für das menschliche Auge schön und flüssig erscheinen.

Es gibt einige JavaScript-Funktionen, die es Ihnen ermöglichen, Funktionen mehrmals pro Sekunde wiederholt auszuführen, wobei `window.requestAnimationFrame()` die beste für unsere Zwecke hier ist. Es nimmt einen Parameter an - den Namen der Funktion, die Sie für jedes Bild ausführen möchten. Das nächste Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion die neue Aktualisierung Ihrer Animation zeichnet, dann vor dem Ende der Funktion `requestAnimationFrame()` erneut aufrufen, läuft die Animationsschleife weiter. Die Schleife endet, wenn Sie aufhören, `requestAnimationFrame()` aufzurufen oder wenn Sie `window.cancelAnimationFrame()` nach dem Aufruf von `requestAnimationFrame()` aber vor dem Aufruf des Frames aufrufen.

> [!NOTE]
> Es ist eine gute Praxis, `cancelAnimationFrame()` von Ihrem Hauptcode aufzurufen, wenn Sie die Animation nicht mehr verwenden, um sicherzustellen, dass keine weiteren Aktualisierungen ausgeführt werden.

Der Browser bearbeitet komplexe Details wie die Animation mit konstanter Geschwindigkeit laufen zu lassen und keine Ressourcen zu verschwenden, um Dinge zu animieren, die nicht gesehen werden können.

Um zu sehen, wie es funktioniert, werfen wir schnell einen Blick auf unser [Bouncing Balls Beispiel](#frame_bouncing-balls). Der Code für die Schleife, die alles in Bewegung hält, sieht so aus:

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

Wir führen die `loop()`-Funktion einmal am Ende des Codes aus, um den Zyklus zu starten, das erste Animationsbild zu zeichnen; die `loop()`-Funktion kümmert sich dann darum, `requestAnimationFrame(loop)` zu verwenden, um das nächste Bild der Animation erneut und erneut auszuführen.

Beachten Sie, dass wir jedes Bild vollständig löschen und alles neu zeichnen. Für alle vorhandenen Bälle zeichnen wir sie, aktualisieren ihre Position und prüfen, ob sie mit anderen Bällen kollidieren. Sobald Sie ein Grafik auf ein Canvas gezeichnet haben, gibt es keine Möglichkeit, diese Grafik einzeln zu manipulieren, wie Sie es mit DOM-Elementen können. Sie können jeden Ball nicht einzeln auf dem Canvas verschieben, denn sobald er gezeichnet ist, ist er Teil des Canvas und kein individuelles zugängliches Element oder Objekt. Stattdessen müssen Sie löschen und neu zeichnen, entweder indem Sie den gesamten Rahmen löschen und alles neu zeichnen oder indem Sie Code haben, der genau weiß, welche Teile gelöscht und nur die minimal erforderlichen Bereiche des Canvas gelöscht und neu gezeichnet werden müssen.

Das Optimieren der Animation von Grafiken ist eine eigene Spezialität der Programmierung mit vielen cleveren Techniken, die verfügbar sind. Diese gehen jedoch über das hinaus, was wir für unser Beispiel benötigen!

Im Allgemeinen umfasst der Prozess der Durchführung einer Canvas-Animation die folgenden Schritte:

1. Den Canvas-Inhalt löschen (z. B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Den Status speichern (wenn notwendig) mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) – dies ist notwendig, wenn Sie Einstellungen auf dem Canvas speichern möchten, die Sie aktualisiert haben, bevor Sie fortfahren, was für fortgeschrittenere Anwendungen nützlich ist.
3. Die Grafiken zeichnen, die Sie animieren.
4. Die gespeicherten Einstellungen aus Schritt 2 wiederherstellen, mit [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
5. `requestAnimationFrame()` aufrufen, um das Zeichnen des nächsten Animationsbildes zu planen.

> [!NOTE]
> Wir werden `save()` und `restore()` hier nicht behandeln, aber sie werden in unserem [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations)-Tutorial (und den darauf folgenden) erklärt.

### Objektbewegungsanimation

Erstellen wir nun unsere eigene einfache Animation – wir werden ein bewegliches Objekt über den Bildschirm animieren, indem wir ein Spritesheet verwenden.

1. Erstellen Sie eine weitere frische Kopie unserer Canvas-Vorlage und öffnen Sie sie in Ihrem Code-Editor.

2. Aktualisieren Sie den Fallback-HTML-Code, um das Bild widerzuspiegeln:

   ```html live-sample___7-canvas-walking-animation
   <canvas class="myCanvas">
     <p>A cat walking.</p>
   </canvas>
   ```

3. Dieses Mal werden wir den Hintergrund nicht schwarz färben. Also nach dem Erhalten der `ctx`-Variable, malen Sie den Hintergrund stattdessen hellgrau:

   ```js live-sample___7-canvas-walking-animation
   ctx.fillStyle = "#e5e6e9";
   ctx.fillRect(0, 0, width, height);
   ```

4. Fügen Sie am Ende des JavaScript die folgende Zeile hinzu, um den Koordinatenurpunkt erneut in die Mitte des Canvas zu setzen:

   ```js live-sample___7-canvas-walking-animation
   ctx.translate(width / 2, height / 2);
   ```

5. Nun erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, setzen seinen [`src`](/de/docs/Web/API/HTMLImageElement/src) auf das Bild, das wir laden möchten, und fügen eine `onload`-Ereignis-Handler hinzu, dass die `draw()`-Funktion auslöst, wenn das Bild geladen ist:

   ```js live-sample___7-canvas-walking-animation
   const image = new Image();
   image.src =
     "https://developer.mozilla.org/shared-assets/images/examples/web-animations/cat_sprite.png";
   image.onload = draw;
   ```

6. Nun fügen wir einige Variablen hinzu, um die Position, an der das Sprite auf dem Bildschirm gezeichnet werden soll, und die Spritenummer, die wir anzeigen möchten, zu verfolgen.

   ```js live-sample___7-canvas-walking-animation
   let spriteIndex = 0;
   let posX = 0;
   const spriteWidth = 300;
   const spriteHeight = 150;
   const totalSprites = 12;
   ```

   Das Sprite-Bild wird erstellt und bereitgestellt mit freundlicher Genehmigung von [Rachel Nabors](https://nearestnabors.com/), für die Arbeit an der Dokumentation für die [Web Animations API](/de/docs/Web/API/Web_Animations_API). Es sieht folgendermaßen aus:

   ![Ein Sprite-Sheet mit drei Spalten, jede Spalte enthält eine Sequenz von Bildern einer schwarzen Katze, die mit unterschiedlichem Tempo nach links bewegt. Jede Sprite ist 300 Pixel breit und 150 Pixel hoch.](/shared-assets/images/examples/web-animations/cat_sprite.png)

   Es hat drei Spalten. Jede Spalte ist eine Sequenz, die die Katze darstellt, die sich mit einem anderen Tempo (gehend, trabend und galloppierend) bewegt. Jede Sequenz enthält entweder 12 oder 13 Sprites — jedes ist 300 Pixel breit und 150 Pixel hoch. Wir werden die ganz links stehende Sequenz verwenden, die 12 Sprites enthält. Um jedes Sprite sauber anzuzeigen, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild aus dem Spritesheet auszuschneiden und nur diesen Teil anzuzeigen, wie wir es oben mit dem Firefox-Logo gemacht haben. Die X- und Y-Koordinaten des Ausschnitts müssen ein Vielfaches von `spriteWidth` und `spriteHeight` sein, bzw.; Da wir die links spezifizierte Sequenz verwenden, ist die X-Koordinate immer 0. Die Größe des Ausschnitts wird immer `spriteWidth` mal `spriteHeight` sein.

7. Fügen wir nun eine leere `draw()`-Funktion am Ende des Codes ein, bereit für das Ausfüllen mit einigen Code:

   ```js
   function draw() {}
   ```

   ```js-nolint hidden live-sample___7-canvas-walking-animation
   function draw() {
   ```

8. Der restliche Code in diesem Abschnitt geht in die `draw()` Funktion. Zuerst fügen Sie die folgende Zeile hinzu, die das Canvas löscht, um auf das Zeichnen jedes Bildes vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width / 2), -(height / 2)` angeben müssen, weil wir die Ursprungslage als `width/2, height/2` vorher festgelegt haben.

   ```js live-sample___7-canvas-walking-animation
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

9. Nun zeichnen wir unser Bild mit drawImage – die 9-Parameter-Version. Fügen Sie das folgende hinzu:

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

   Wie Sie sehen:
   - Wir spezifizieren `image` als das einzubettende Bild.
   - Die Parameter 2 und 3 spezifizieren die obere linke Ecke des Ausschnitts, den wir aus dem Quellbild ausschneiden, mit dem X-Wert von 0 (für die links stehende Spalte) und dem Y-Wert, der sich durch vielfache `spriteHeight` ändert. Sie können den X-Wert mit `spriteWidth` oder `2 * spriteWidth` ersetzen, um die anderen Spalten auszuwählen.
   - Die Parameter 4 und 5 spezifizieren die Größe des aus dem Originalbild auszuschneidenden Abschnitts — `spriteWidth` und `spriteHeight`.
   - Die Parameter 6 und 7 spezifizieren die obere linke Ecke des Bereichs, in den Sie den Ausschnitt auf dem Canvas zeichnen möchten — die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichenposition ändern können, indem wir den `posX`-Wert ändern. Die Y-Position ist `-spriteHeight / 2`, was bedeutet, dass das Bild vertikal zentriert auf dem Canvas sein wird.
   - Die Parameter 8 und 9 spezifizieren die Größe des Bildes auf dem Canvas. Wir möchten nur seine ursprüngliche Größe behalten, deshalb spezifizieren wir `spriteWidth` und `spriteHeight` als Breite und Höhe.

10. Nun ändern wir den `spriteIndex` Wert nach jedem Zeichen – naja, nach einigen von ihnen zumindest. Fügen Sie den folgenden Block am Ende der `draw()`-Funktion hinzu:

    ```js live-sample___7-canvas-walking-animation
    if (posX % 11 === 0) {
      if (spriteIndex === totalSprites - 1) {
        spriteIndex = 0;
      } else {
        spriteIndex++;
      }
    }
    ```

    Wir umhüllen den gesamten Block in `if (posX % 11 === 0) { }`. Wir verwenden den Modulo (`%`) Operator (auch als [Rest-Operator](/de/docs/Web/JavaScript/Reference/Operators/Remainder) bekannt), um zu überprüfen, ob der `posX` Wert genau durch 11 ohne Rest geteilt werden kann. Wenn ja, gehen wir zum nächsten Sprite über, indem wir `spriteIndex` inkrementieren (und auf 0 zurückkehren, nachdem wir mit dem letzten fertig sind). Dies bedeutet effektiv, dass wir das Sprite nur bei jedem elften Bild aktualisieren, oder ungefähr 6 Bildern pro Sekunde (`requestAnimationFrame()` ruft uns bei jedem Bild bei bis zu 60 Frames pro Sekunde, wenn möglich). Wir verlangsamen absichtlich die Bildrate, weil wir nur 12 Sprites zur Verfügung haben und wenn wir eines pro 60stel einer Sekunde anzeigen, bewegt sich unser Objekt viel zu schnell!

    Innerhalb des äußeren Blocks verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else Anweisung, um zu überprüfen, ob der `spriteIndex` Wert beim letzten schon ist. Wenn wir das letzte Sprite bereits zeigen, setzen wir `spriteIndex` zurück auf 0; wenn nicht, inkrementieren wir es einfach um 1.

11. Als nächstes müssen wir herausfinden, wie wir den `posX` Wert bei jedem Bild ändern — fügen Sie den folgenden Codeblock direkt unter Ihrem letzten hinzu.

    ```js live-sample___7-canvas-walking-animation
    if (posX < -width / 2 - spriteWidth) {
      const newStartPos = width / 2;
      posX = Math.ceil(newStartPos);
    } else {
      posX -= 2;
    }
    ```

    Wir verwenden eine weitere `if...else` Anweisung, um zu prüfen, ob der Wert von `posX` kleiner als `-width/2 - spriteWidth` geworden ist, was bedeutet, dass unsere Katze vom linken Rand des Bildschirms herausgelaufen ist. Falls ja, berechnen wir eine Position, die die Katze gerade rechts des rechten Bildschirmrandes positioniert.

    Wenn unsere Kattze noch nicht vom Rand des Bildschirms gewandert ist, verringern wir `posX` um 2. Dadurch wird sie sich beim nächsten Zeichnen etwas nach links bewegen.

12. Schließlich müssen wir die Animation in eine Schleife versetzen, indem wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()`-Funktion aufrufen:

    ```js live-sample___7-canvas-walking-animation
    window.requestAnimationFrame(draw);
    ```

```js-nolint hidden live-sample___7-canvas-walking-animation
}
```

Das war's! Das abschließende Beispiel sollte so aussehen:

{{EmbedLiveSample("7-canvas-walking-animation", '100%', 260)}}

Sie können die **Play**-Schaltfläche drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Eine einfache Zeichenanwendung

Als letztes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben (wie der Mausbewegung in diesem Fall) kombiniert werden kann. Wir werden Sie nicht anleiten, dies zu erstellen; wir werden lediglich die interessantesten Teile des Codes erkunden.

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

Sie können unten mit dem Beispiel live spielen; Sie können auch auf die **Play**-Schaltfläche klicken, um es im MDN Playground zu öffnen, wo Sie den Quellcode bearbeiten können:

{{EmbedLiveSample("8-canvas-drawing-app", '100%', 600)}}

Sehen wir uns die interessantesten Teile an. Zuerst verfolgen wir die X- und Y-Koordinaten der Maus, ob diese gedrückt wird oder nicht, mit drei Variablen: `curX`, `curY` und `pressed`. Wenn die Maus bewegt wird, lösen wir eine Funktion aus, die als `onmousemove`-Ereignis-Handler gesetzt ist, der die aktuellen X- und Y-Werte erfasst. Wir verwenden auch `onmousedown`- und `onmouseup`-Ereignis-Handler, um den Wert von `pressed` auf `true` zu ändern, wenn die Maustaste gedrückt wird, und wieder auf `false`, wenn sie losgelassen wird.

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

Wenn die Schaltfläche "Canvas löschen" gedrückt wird, führen wir eine einfache Funktion aus, die das gesamte Canvas mit der gleichen Methode, die wir zuvor gesehen haben, auf Schwarz zurücksetzt:

```js live-sample___8-canvas-drawing-app
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal ziemlich einfach — wenn `pressed` `true` ist, zeichnen wir einen Kreis mit einer Füllstil gleich der Wert aus dem Farbenwähler und einem Radius gleich dem Wert, der im Bereichs-Input festgelegt ist. Wir zeichnen den Kreis 85 Pixel über dem erfassten Punkt, weil die vertikale Messung vom oberen Rand des Viewports und nicht vom oberen Rand des Canvas genommen wird, das sich unter der 85 Pixel hohen Werkzeugleiste befindet. Wenn wir ihn mit nur `curY` als y-Koordinate gezeichnet hätten, wäre er 85 Pixel unterhalb der Mausposition erschienen.

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

Alle {{htmlelement("input")}}-Arten werden gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, fällt er auf ein einfaches Textfeld zurück.

## WebGL

Es ist jetzt Zeit, 2D hinter uns zu lassen und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalte werden unter Verwendung der [WebGL API](/de/docs/Web/API/WebGL_API) angegeben, die eine völlig separate API von der 2D-Canvas-API ist, auch wenn sie beide auf {{htmlelement("canvas")}}-Elemente rendern.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und erlaubt Ihnen, direkt mit der {{Glossary("GPU", "GPU")}} des Computers zu kommunizieren. Da das Schreiben von rohem WebGL näher an Programmiersprachen wie C++ als an regulärem JavaScript liegt, ist es ziemlich komplex, aber unglaublich leistungsstark.

### Verwendung einer Bibliothek

Aufgrund seiner Komplexität schreiben die meisten Menschen 3D-Grafikcode mithilfe einer Drittanbieter-JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten dieser Bibliotheken funktionieren ähnlich, indem sie Funktionen zum Erstellen primitiver und benutzerdefinierter Formen, Positionieren von Betrachterkameras und Beleuchtung, Abdecken von Oberflächen mit Texturen und mehr bieten. Sie handhaben das WebGL für Sie und lassen Sie auf einer höheren Stufe arbeiten.

Ja, die Verwendung einer davon bedeutet, eine weitere neue API (eine Drittanbieter-API in diesem Fall) zu lernen, aber sie sind viel einfacher als rohes WebGL zu kodieren.

### Ein sich drehender Würfel

Werfen wir einen Blick auf ein Beispiel dafür, wie man etwas mit einer WebGL-Bibliothek erstellt. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) aus, da es eines der beliebtesten ist. In diesem Tutorial erstellen wir einen 3D-Würfel, der sich dreht.

1. Erstellen Sie zunächst einen neuen Ordner auf Ihrer lokalen Festplatte namens `webgl-cube`.
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

3. Erstellen Sie eine weitere neue Datei namens `script.js`, ebenfalls im gleichen Ordner wie zuvor. Lassen Sie sie vorerst leer.
4. Erstellen Sie nun eine weitere neue Datei namens `style.css`, ebenfalls im gleichen Ordner, und fügen Sie den folgenden Inhalt hinzu:

   ```css live-sample___9-webgl-cube
   html,
   body {
     margin: 0;
   }

   body {
     overflow: hidden;
   }
   ```

5. Wir haben `three.js` in unserer Seite eingebunden (das ist das, was das erste `<script>`-Element in unserem HTML tut), also können wir jetzt anfangen, JavaScript zu schreiben, das davon Gebrauch macht, in `script.js`. Lassen Sie uns damit beginnen, eine neue Szene zu erstellen — fügen Sie das folgende in Ihre `script.js` Datei ein:

   ```js live-sample___9-webgl-cube
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene) Konstruktor erstellen eine neue Szene, die die gesamte 3D-Welt darstellt, die wir anzeigen wollen.

6. Als Nächstes brauchen wir eine **Kamera**, damit wir die Szene sehen können. In 3D-Bildern stellt die Kamera die Position des Betrachters in der Welt dar. Um eine Kamera zu erstellen, fügen Sie die folgenden Zeilen als nächstes hinzu:

   ```js live-sample___9-webgl-cube
   const camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000,
   );
   camera.position.z = 5;
   ```

   Der [`PerspectiveCamera()`](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera) Konstruktor benötigt vier Argumente:
   - Das Sichtfeld: wie breit der Bereich vor der Kamera ist, der im Bildschirm sichtbar sein soll, in Grad.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Normalerweise ist dies das Verhältnis der Breite der Szene geteilt durch die Höhe der Szene. Ein anderer Wert verzerrt die Szene (was vielleicht das ist, was Sie wollen, aber normalerweise nicht).
   - Die Nah-Ebene: wie nah die Objekte an der Kamera sein können, bevor wir aufhören, sie auf dem Bildschirm darzustellen. Denken Sie darüber nach, wie wenn Sie Ihre Fingerspitze näher und näher zum Raum zwischen Ihren Augen bewegen, schließlich können Sie es nicht mehr sehen.
   - Die Fern-Ebene: wie weit die Dinge von der Kamera entfernt sind, bevor sie nicht mehr gerendert werden.

   Wir setzen auch die Position der Kamera auf 5 Längeneinheiten von der Z-Achse entfernt, die wie in CSS, aus dem Bildschirm und hin zu Ihnen, dem Betrachter, hinausgeht.

7. Die dritte wesentliche Zutat ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene rendert, so wie sie durch eine gegebene Kamera betrachtet wird. Wir erstellen es jetzt mit dem Konstruktor [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer), aber wir verwenden es erst später. Fügen Sie die folgenden Zeilen als nächstes hinzu:

   ```js live-sample___9-webgl-cube
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile setzt die Größe, in der der Renderer den Kamerablick zeichnen soll, und die dritte Zeile hängt das vom Renderer erstellte {{htmlelement("canvas")}}-Element an den {{htmlelement("body")}} des Dokuments an. Jetzt wird alles, was der Renderer zeichnet, in unserem Fenster angezeigt.

8. Als Nächstes möchten wir den Würfel erstellen, den wir auf dem Canvas anzeigen werden. Fügen Sie den folgenden Codeblock am Ende Ihres JavaScripts hinzu:

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

   Es gibt hier noch ein bisschen mehr zu beachten, also lassen Sie uns das in Stufen durchgehen:
   - Wir erstellen zuerst eine globale Variable `cube`, damit wir von überall im Code aus auf unseren Würfel zugreifen können.
   - Dann erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt, dann rufen wir `load()` darauf auf. `load()` nimmt in diesem Fall zwei Parameter (obwohl es mehr nehmen kann): die Textur, die wir laden möchten (ein PNG), und eine Funktion, die ausgeführt wird, wenn die Textur geladen ist.
   - Innerhalb dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um anzugeben, dass wir einen 2 x 2 Wiederholung des Bildes um alle Seiten des Würfels haben möchten. Anschließend erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt und kombinieren sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh), um unseren Würfel zu erstellen. Ein Objekt erfordert normalerweise eine Geometrie (welche Form es hat) und ein Material (wie seine Oberfläche aussieht).
   - Zuletzt fügen wir unsere cube in die scene ein, dann rufen wir our `draw()` Funktion auf, um die Animation zu starten.

9. Bevor wir `draw()` definieren, fügen wir der Szene ein paar Lichter hinzu, um die Szene ein wenig zu beleben; fügen Sie die folgenden Blöcke als nächstes hinzu:

   ```js live-sample___9-webgl-cube
   const light = new THREE.AmbientLight("white"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("white");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art weiches Licht, das die gesamte Szene etwas aufhellt, wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt hingegen ist ein gerichteter Lichtstrahl, ähnlicher wie eine Taschenlampe (oder ein Spotlight, eigentlich).

10. Zuletzt fügen wir unsere `draw()`-Funktion am Ende des Codes hinzu:

    ```js live-sample___9-webgl-cube
    function draw() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);

      requestAnimationFrame(draw);
    }
    ```

    Dies ist ziemlich intuitiv; bei jedem Bild drehen wir unseren Würfel leicht auf seinen X- und Y-Achsen, dann rendern wir die Szene, wie sie von unserer Kamera betrachtet wird, und rufen schließlich `requestAnimationFrame()` auf, um das Zeichnen unseres nächsten Bildes zu planen.

Das fertige Produkt sollte folgendermaßen aussehen:

{{EmbedLiveSample("9-webgl-cube", "100%", 500)}}

> [!NOTE]
> In unserem GitHub-Repo finden Sie auch ein weiteres interessantes 3D-Würfel-Beispiel — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dies verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Video-Stream von einer Computer-Webcam zu nehmen und auf die Seite des Würfels als Textur zu projizieren!

## Zusammenfassung

An diesem Punkt sollten Sie eine nützliche Idee der Grundlagen der Grafikprogrammierung mit Canvas und WebGL haben und was Sie mit diesen APIs tun können, sowie eine gute Vorstellung davon, wo Sie weitere Informationen erhalten können. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklichen Grundlagen von Canvas behandelt – es gibt so viel mehr zu lernen! Die untenstehenden Artikel bringen Sie weiter.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorial-Serie, in der erklärt wird, was Sie über 2D-Canvas viel mehr wissen sollten, als in diesem Artikel behandelt. Unverzichtbare Lektüre.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Serie, die die Grundlagen der Roh-WebGL-Programmierung lehrt.
- [Grundlegendes Demo mit Three.js erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — Basis-Tudor von Three.js. Wir haben auch gleichwertige Leitfäden für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spielentwicklung](/de/docs/Games) — Die Einstiegsseite für die Entwicklung von Web-Spielen auf MDN. Hier gibt es einige wirklich nützliche Tutorials und Techniken im Zusammenhang mit 2D- und 3D-Canvas – siehe die Menüoptionen Techniken und Tutorials.

## Beispiele

- [Violentes Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API zur Erzeugung von Sound und Canvas zur Erzeugung einer hübschen Visualisierung, die dazu passt.
- [Voice Change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas zur Visualisierung von Echtzeit-Audiodaten von der Web Audio API.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
