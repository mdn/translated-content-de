---
title: Zeichnen von Grafiken
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsstarke Grafik-Programmierwerkzeuge, von der Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) Sprache bis hin zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [Die Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in Canvas und weitere Ressourcen, um Ihnen zu ermöglichen, mehr zu lernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und Kern-APIs wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte und Anwendungsfälle, die durch die in dieser Lektion behandelten APIs ermöglicht werden.</li>
          <li>Grundlegende Syntax und Verwendung von <code>&lt;canvas&gt;</code> und zugehörigen APIs.</li>
          <li>Verwenden von Timern und <code>requestAnimationFrame()</code>, um Animationsschleifen einzurichten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Das Web bestand ursprünglich nur aus Text, was sehr langweilig war, daher wurden Bilder eingeführt – zunächst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Doch das war immer noch nicht genug. Während Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden konnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) – da sie durch Markup dargestellt werden – gab es immer noch keine Möglichkeit, dasselbe mit Bitmap-Bildern zu tun, und die verfügbaren Werkzeuge waren eher begrenzt. Das Web hatte immer noch keine Möglichkeit, effektiv Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die in der Regel von niedrigeren Programmiersprachen wie C++ oder Java bewältigt werden.

Die Situation begann sich zu verbessern, als Browser im Jahr 2004 begonnen haben, das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) zu unterstützen. Wie Sie unten sehen werden, bietet das Canvas einige nützliche Werkzeuge zum Erstellen von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere in Kombination mit einigen der anderen APIs, die die Webplattform bereitstellt. Dennoch kann es schwierig oder gar unmöglich sein, es zugänglich zu machen.

Das folgende Beispiel zeigt eine einfache 2D-Collisionsball-Animation, die wir ursprünglich in unserem [Einführung in JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) Modul kennengelernt haben:

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

Um 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Dies wurde zu [WebGL](/de/docs/Web/API/WebGL_API), gewann an Bedeutung unter Browser-Anbietern und wurde um 2009–2010 standardisiert. WebGL ermöglicht Ihnen, echte 3D-Grafiken in Ihrem Webbrowser zu erstellen.

Dieser Artikel wird sich hauptsächlich auf 2D-Canvas konzentrieren, da reiner WebGL-Code sehr komplex ist. Wir werden jedoch zeigen, wie man [eine WebGL-Bibliothek verwendet, um eine 3D-Szene einfacher zu erstellen](#webgl) und Sie können ein Tutorial zu WebGL an anderer Stelle finden — siehe [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Erste Schritte mit einem `<canvas>`

Wenn Sie eine 2D- _oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-{{htmlelement("canvas")}}-Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Das Einbinden des Elements auf der Seite ist ganz einfach:

```html
<canvas width="320" height="240"></canvas>
```

Dies wird ein Canvas auf der Seite mit einer Größe von 320 mal 240 Pixel erstellen.

Sie sollten einige alternative Inhalte innerhalb der `<canvas>`-Tags hinzufügen. Dies sollte den Canvas-Inhalt für Benutzer von Browsern beschreiben, die Canvas nicht unterstützen, oder für Benutzer von Bildschirmlesern.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Der alternative Inhalt sollte nützliche Inhalte bieten, die den Canvas-Inhalt beschreiben. Zum Beispiel, wenn Sie ein sich ständig aktualisierendes Diagramm von Aktienkursen darstellen, könnte der alternative Inhalt ein statisches Bild des neuesten Kursdiagramms mit `alt`-Text sein, der die Preise in Textform angibt, oder eine Liste von Links zu den einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalt ist für Bildschirmleser nicht zugänglich. Fügen Sie einen beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs direkt auf dem Canvas-Element selbst hinzu oder fügen Sie enthaltene alternative Inhalte innerhalb der öffnenden und schließenden `<canvas>`-Tags hinzu. Canvas-Inhalt ist nicht Teil des DOM, aber verschachtelte alternative Inhalte sind es.

### Erstellen und Anpassen unseres Canvas

Lassen Sie uns beginnen, unsere eigene Canvas-Vorlage zu erstellen, um zukünftige Experimente durchzuführen.

1. Erstellen Sie zuerst ein Verzeichnis auf Ihrer lokalen Festplatte mit dem Namen `canvas-template`.
2. Erstellen Sie eine neue Datei in diesem Verzeichnis mit dem Namen `index.html` und speichern Sie den folgenden Inhalt darin:

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

5. Öffnen Sie nun `script.js` und fügen Sie die folgenden Zeilen JavaScript hinzu:

   ```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz auf das Canvas in der `canvas`-Konstanten gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas gleich [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Ansichtsfensterbreite gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas gleich [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Ansichtsfensterhöhe gibt). Somit haben wir jetzt ein Canvas, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden auch sehen, dass wir Zuweisungen mit mehreren Gleichheitszeichen verketten – dies ist in JavaScript erlaubt und ist eine gute Technik, wenn Sie mehrere Variablen alle auf denselben Wert setzen möchten. Wir wollten die Canvas-Breite und Höhe einfach zugänglich in den width/height-Variablen machen, da dies nützliche Werte für später sind (zum Beispiel, wenn Sie etwas genau in der Mitte der Breite des Canvas zeichnen möchten).

> [!NOTE]
> Sie sollten die Größe des Canvas im Allgemeinen mit HTML-Attributen oder DOM-Eigenschaften festlegen, wie oben erklärt. Sie könnten CSS verwenden, aber das Problem ist dann, dass die Größenanpassung nach dem Rendern des Canvas erfolgt und wie bei jedem anderen Bild könnte das Canvas pixelig/verzerrt werden.

### Den Canvas-Kontext abrufen und endgültige Einstellungen

Wir müssen eine letzte Sache erledigen, bevor wir unsere Canvas-Vorlage als abgeschlossen betrachten können. Um auf das Canvas zu zeichnen, müssen wir eine spezielle Referenz auf den Zeichenbereich, den sogenannten Kontext, erhalten. Dies geschieht mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die für die grundlegende Verwendung eine einzelne Zeichenkette als Parameter benötigt, die den Typ des abgerufenen Kontexts angibt.

In diesem Fall wollen wir ein 2D-Canvas, also fügen Sie die folgende JavaScript-Zeile unter den anderen in `script.js` hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere kontextbezogene Werte, die Sie wählen könnten, sind `webgl` für WebGL, `webgpu` für WebGPU, usw., aber diese werden wir in diesem Artikel nicht brauchen.

Das war's – unser Canvas ist nun bereit zum Zeichnen! Die Variable `ctx` enthält nun ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, und alle Zeichenoperationen auf dem Canvas werden die Manipulation dieses Objekts beinhalten.

Lassen Sie uns eine letzte Sache tun, bevor wir weitermachen. Wir werden den Hintergrund des Canvas schwarz färben, um Ihnen einen ersten Eindruck von der Canvas-API zu geben. Fügen Sie am Ende Ihres JavaScript die folgenden Zeilen hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop
ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mit der `fillStyle`-Eigenschaft des Canvas (diese nimmt [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) an, genau wie CSS-Eigenschaften), und zeichnen dann ein Rechteck, das den gesamten Bereich des Canvas mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) abdeckt (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, in der Sie das Rechteck zeichnen möchten – wir haben Ihnen gesagt, dass diese `width`- und `height`-Variablen nützlich sein würden!).

Okay, unsere Vorlage ist fertig und es ist Zeit, weiterzumachen.

## 2D-Canvas-Grundlagen

Wie oben erwähnt, werden alle Zeichenoperationen durch die Manipulation eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts durchgeführt (in unserem Fall `ctx`). Viele Operationen müssen Koordinaten erhalten, um genau festzulegen, wo etwas gezeichnet werden soll – die obere linke Ecke des Canvas ist Punkt (0, 0), die horizontale (x) Achse läuft von links nach rechts, und die vertikale (y) Achse läuft von oben nach unten.

![Gitterpapier mit kleinen Quadraten, das seine Fläche mit einem stahlblauen Quadrat in der Mitte bedeckt. Die obere linke Ecke des Canvas ist Punkt (0, 0) der Canvas-x-Achse und y-Achse. Die horizontale (x) Achse verläuft von links nach rechts und gibt die Breite an, und die vertikale (y) Achse verläuft von oben nach unten und gibt die Höhe an. Die obere linke Ecke des blauen Quadrats ist als x-Einheiten von der y-Achse und y-Einheiten von der x-Achse entfernt gekennzeichnet.](/canvas_default_grid.png)

Das Zeichnen von Formen wird oft mit dem Rechteckautomaten oder durch Nachzeichnen einer Linie entlang eines bestimmten Pfades und anschließendes Ausfüllen der Form durchgeführt. Unten zeigen wir, wie man beides macht.

### Einfache Rechtecke

Lassen Sie uns mit einigen einfachen Rechtecken beginnen.

1. Machen Sie zunächst eine Kopie Ihres neu erstellten Canvas-Vorlagenverzeichnisses.
2. Fügen Sie am Ende Ihrer JavaScript-Datei die folgenden Zeilen hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "red";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie Ihr HTML im Browser laden, sollte ein rotes Rechteck auf Ihrem Canvas erscheinen. Seine obere linke Ecke ist 50 Pixel von der Oberseite und der linken Seite des Canvas-Randes entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch die dritten und vierten Parameter definiert).

3. Lassen Sie uns noch ein Rechteck hinzufügen – diesmal ein grünes. Fügen Sie am Ende Ihres JavaScript die folgenden Zeilen hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "green";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren Sie, und Sie werden Ihr neues Rechteck sehen. Dies bringt einen wichtigen Punkt zur Sprache: Grafikoperationen wie das Zeichnen von Rechtecken, Linien usw. werden in der Reihenfolge ausgeführt, in der sie auftreten. Denken Sie an das Malen einer Wand, bei der jede Farbschicht die darunter liegende überlappt oder sogar verbirgt. Sie können nichts tun, um dies zu ändern, daher müssen Sie sorgfältig über die Reihenfolge nachdenken, in der Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, z. B. durch die Verwendung von `rgb()`. Der „Alphakanal“ definiert den Grad der Transparenz, den die Farbe hat. Je höher der Wert ist, desto mehr wird es das verbergen, was dahinter liegt. Fügen Sie den folgenden Code hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, einige weitere Rechtecke zu zeichnen; viel Spaß dabei!

### Umrisse und Linienbreiten

Bisher haben wir uns das Zeichnen von ausgefüllten Rechtecken angesehen, aber Sie können auch Rechtecke zeichnen, die nur Umrisse sind (in der Grafikdesignsprache als **Umrisse** bezeichnet). Um die gewünschte Farbe für den Umriss festzulegen, verwenden Sie die [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)-Eigenschaft; das Zeichnen eines Umrissrechtecks erfolgt mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Fügen Sie das folgende Beispiel zu dem vorherigen Beispiel hinzu, erneut unter den vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "white";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Umrisslinien beträgt 1 Pixel; Sie können den Wert der [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)-Eigenschaft ändern, um dies zu ändern (er nimmt eine Zahl an, die die Anzahl der Pixel darstellt, die die Breite des Umrisses ist). Fügen Sie die folgende Zeile zwischen den vorherigen beiden Zeilen hinzu:

   ```js
   ctx.lineWidth = 5;
   ```

Jetzt sollten Sie sehen, dass Ihr weißer Umriss viel dicker geworden ist! Das war es für den Moment. Zu diesem Zeitpunkt sollte Ihr Beispiel so aussehen:

```js hidden live-sample___2-canvas-rectangles
ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);
```

{{EmbedLiveSample("2-canvas-rectangles", '100%', 250)}}

Sie können die **Wiedergabe**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Pfade zeichnen

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Grundsätzlich bedeutet dies, dass Sie Code schreiben müssen, der genau angibt, welchen Pfad der Stift auf Ihrem Canvas gehen soll, um die gewünschte Form zu zeichnen. Canvas enthält Funktionen zum Zeichnen von geraden Linien, Kreisen, Bézierkurven und mehr.

Beginnen Sie den Abschnitt, indem Sie eine frische Kopie Ihrer Canvas-Vorlage erstellen, in der Sie das neue Beispiel zeichnen.

Wir verwenden einige allgemeine Methoden und Eigenschaften über alle unten aufgeführten Abschnitte hinweg:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — beginnt das Zeichnen eines Pfades an dem Punkt, an dem der Stift derzeit auf dem Canvas ist. Auf einem neuen Canvas beginnt der Stift bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — verschiebt den Stift auf einen anderen Punkt auf dem Canvas, ohne die Linie aufzuzeichnen oder nachzuzeichnen; der Stift „springt“ an die neue Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — zeichnet eine ausgefüllte Form, indem der bisher verfolgte Pfad ausgefüllt wird.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — zeichnet eine Umrissform, indem entlang des bisher gezeichneten Pfades eine Linie gezeichnet wird.
- Sie können auch Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` mit Pfaden sowie Rechtecken verwenden.

Eine typische, einfache Pfad-Zeichenoperation könnte etwa so aussehen:

```js
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Linien zeichnen

Lassen Sie uns ein gleichseitiges Dreieck auf dem Canvas zeichnen.

1. Fügen Sie zunächst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Dies konvertiert Gradwerte in Bogenmaß, was nützlich ist, da wann immer Sie in JavaScript einen Winkelwert angeben müssen, wird es fast immer im Bogenmaß sein, aber Menschen normalerweise in Grad denken.

   ```js live-sample___3_canvas_paths
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Beginnen Sie als nächstes mit Ihrem Pfad, indem Sie den folgenden Code unter Ihrem vorherigen Code hinzufügen; hier setzen wir eine Farbe für unser Dreieck, beginnen den Pfad und verschieben den Stift ohne Zeichnung auf (50, 50). Da beginnen wir, unser Dreieck zu zeichnen.

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

   Zuerst zeichnen wir eine Linie bis (150, 50) – unser Pfad verläuft nun 100 Pixel nach rechts entlang der x-Achse.

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks, indem wir ein wenig einfache Trigonometrie anwenden. Grundsätzlich zeichnen wir das Dreieck nach unten weisend. Die Winkel in einem gleichseitigen Dreieck sind immer 60 Grad; um die Höhe zu berechnen, können wir es in der Mitte in zwei rechtwinklige Dreiecke teilen, von denen jedes Winkel von 90 Grad, 60 Grad und 30 Grad hat. In Bezug auf die Seiten:
   - Die längste Seite wird als **Hypotenuse** bezeichnet.
   - Die Seite neben dem 60-Grad-Winkel wird als **Anliegende** bezeichnet – die wir, wie wir wissen, 50 Pixel beträgt, da sie die Hälfte der Linie ist, die wir gerade gezeichnet haben.
   - Die gegenüberliegende Seite des 60-Grad-Winkels wird als **Gegenkathete** bezeichnet, die die Höhe des Dreiecks ist, die wir berechnen möchten.

   ![Ein gleichseitiges Dreieck, das nach unten zeigt, mit beschrifteten Winkeln und Seiten. Die horizontale Linie oben ist als 'Anliegende' beschriftet. Eine senkrechte gepunktete Linie, die aus der Mitte der angrenzenden Linie von dieser, als 'Gegenkathete' beschriftet, teilt das Dreieck, wodurch zwei gleiche Rechtwinkligedikdreiecke entstehen. Die rechte Seite des Dreiecks ist als Hypotenuse bezeichnet, da sie die Hypotenuse des rechtwinkligen Dreiecks ist, das durch die Linie mit der Bezeichnung 'Gegenkathete' gebildet wird. Während alle drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des Rechtwinkligedikdreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass die Länge der Anliegende multipliziert mit dem Tangens des Winkels der Gegenkathete gleich ist, daher kommen wir zu `50 * Math.tan(degToRad(60))`. Wir verwenden unsere `degToRad()`-Funktion, um 60 Grad in Bogenmaß zu konvertieren, da {{jsxref("Math.tan()")}} einen Eingabewert im Bogenmaß erwartet.

4. Mit der berechneten Höhe zeichnen wir eine weitere Linie bis `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; es muss genau zwischen den vorherigen beiden X-Werten liegen. Der Y-Wert hingegen muss 50 plus die Dreieckshöhe betragen, da wir wissen, dass die Oberseite des Dreiecks 50 Pixel vom oberen Rand des Canvas entfernt ist.
5. Die nächste Linie zeichnet eine Linie zurück zum Ausgangspunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form auszufüllen.

#### Kreise zeichnen

Lassen Sie uns nun untersuchen, wie man einen Kreis im Canvas zeichnet. Dies erfolgt mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc), die einen Kreis oder Teil eines Kreises an einer bestimmten Stelle zeichnet.

1. Lassen Sie uns einen Bogen auf unser Canvas hinzufügen – fügen Sie den untenstehenden Code am Ende Ihres Codes hinzu:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "blue";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` benötigt sechs Parameter. Die ersten beiden geben die Position des Mittelpunktes des Bogens (X und Y bzw.). Der dritte ist der Radius des Kreises, der vierte und fünfte sind der Anfangs- und Endwinkel, um den Kreis zu zeichnen (angesichts 0 und 360 Grad erhalten wir einen vollständigen Kreis), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn (im Uhrzeigersinn) oder im Uhrzeigersinn gezeichnet werden soll (`false` ist im Uhrzeigersinn).

   > [!NOTE]
   > 0 Grad ist horizontal nach rechts gerichtet.

2. Lassen Sie uns einen weiteren Bogen hinzufügen:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "yellow";
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   Das Muster hier ist sehr ähnlich, aber mit zwei Unterschieden:
   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird, was bedeutet, dass obwohl der Bogen als von -45 Grad bis 45 Grad spezifiziert ist, wir den Bogen über die 270 Grad, die nicht in diesem Stück sind, zeichnen. Wenn Sie `true` in `false` ändern würden und den Code erneut ausführen würden, würde nur der 90-Grad-Keil des Kreises gezeichnet.
   - Bevor wir `fill()` nennen, zeichnen wir eine Linie zum Mittelpunkt des Kreises. Dies bedeutet, dass wir den ziemlich schönen Pac-Man-Stil-Ausschnitt erhalten. Wenn Sie diese Zeile entfernen (versuchen Sie es!), dann den Code erneut ausführen, würden Sie nur eine Kante des Kreises zwischen dem Anfang und dem Endpunkt des Bogens abschneiden. Dies veranschaulicht einen weiteren wichtigen Punkt des Canvas – wenn Sie versuchen, einen unvollständigen Pfad zu füllen (d.h. einen Pfad, der nicht geschlossen ist), füllt der Browser eine gerade Linie zwischen dem Anfangs- und Endpunkt und füllt ihn dann aus.

Das war's fürs Erste; Ihr endgültiges Beispiel sollte folgendermaßen aussehen:

{{EmbedLiveSample("3_canvas_paths", '100%', 200)}}

Sie können die **Wiedergabe**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

> [!NOTE]
> Um mehr über erweiterte Pfadzeichnungsfunktionen wie Bézierkurven zu erfahren, schauen Sie sich unser [Zeichnen von Formen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)-Tutorial an.

### Text

Canvas hat auch Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz erkunden. Beginnen Sie, indem Sie eine weitere frische Kopie Ihrer Canvas-Vorlage erstellen, in der Sie das neue Beispiel zeichnen.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnet Textkonturen (Umriss).

Beide Methoden nehmen drei Eigenschaften in ihrer Grundverwendung: die zu zeichnende Textzeichenfolge und die X- und Y-Koordinaten des Punktes, an dem der Text gezeichnet werden soll. Dies zeigt sich als die **untere linke** Ecke des **Textfeldes** (wörtlich, das Feld, das den von Ihnen gezeichneten Text umgibt), was Sie verwirren könnte, da andere Grafikoperationen normalerweise an der oberen linken Ecke beginnen – beachten Sie dies.

Es gibt auch eine Reihe von Eigenschaften, um die Textdarstellung zu steuern, wie z. B. [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), welches ermöglicht, Schriftfamilie, Größe usw. anzugeben. Es nimmt als Wert die gleiche Syntax wie die CSS-{{cssxref("font")}}-Eigenschaft.

Canvas-Inhalt ist für Bildschirmleser nicht zugänglich. Text, der auf das Canvas gemalt wird, ist nicht im DOM verfügbar, muss jedoch zugänglich gemacht werden, um barrierefrei zu sein. In diesem Beispiel binden wir den Text als Wert für `aria-label` ein.

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

Hier zeichnen wir zwei Textzeilen, eine Umrisslinie und die andere gefüllt. Das Beispiel sollte so aussehen:

{{EmbedLiveSample("4-canvas-text", '100%', 180)}}

Drücken Sie die **Wiedergabe**-Taste, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Spielen Sie ein wenig und sehen Sie, was Sie damit machen können! Weitere Informationen zu den in Canvas-Text verfügbaren Optionen finden Sie unter [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Bilder auf Canvas zeichnen

Es ist möglich, externe Bilder auf Ihr Canvas zu rendern. Diese können einfache Bilder, Frames von Videos oder Inhalte anderer Canvas sein. Für den Moment werden wir uns nur den Fall ansehen, einige einfache Bilder auf unseren Canvas zu verwenden.

1. Erstellen Sie wie zuvor eine weitere frische Kopie Ihrer Canvas-Vorlage, in der Sie das neue Beispiel zeichnen.

   Bilder werden mit der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf Canvas gezeichnet. Die einfachste Version erfordert drei Parameter – eine Referenz auf das Bild, das Sie rendern möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Lassen Sie uns mit einer Bildquelle beginnen, die wir in unser Canvas einbetten möchten. Fügen Sie am Ende Ihres JavaScript die folgenden Zeilen hinzu:

   ```js live-sample___5-canvas-images
   const image = new Image();
   image.src =
     "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt mit dem Konstruktor [`Image()`](/de/docs/Web/API/HTMLImageElement/Image). Das zurückgegebene Objekt ist derselbe Typ wie das, wenn Sie eine Referenz auf ein bestehendes {{htmlelement("img")}}-Element erhalten. Dann setzen wir sein [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut auf unser Firefox-Logo-Bild. Zu diesem Zeitpunkt beginnt der Browser mit dem Laden des Bildes.

3. Wir könnten jetzt versuchen, das Bild mit `drawImage()` einzubetten, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, da der Code sonst fehlschlagen könnte. Wir können dies mit dem `load`-Ereignis erreichen, welches ausgelöst wird, sobald das Bild vollständig geladen ist. Fügen Sie den folgenden Block unter dem vorherigen ein:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie das Bild auf dem Canvas eingebettet sehen, wenn auch etwas groß.

4. Aber es gibt noch mehr! Was wäre, wenn wir nur einen Teil des Bildes anzeigen oder es in der Größe ändern möchten? Wir können beides mit der komplexeren Version von `drawImage()` erreichen. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile wie folgt:

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
   - Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem ursprünglich geladenen Bild ausschneiden möchten.
   - Parameter 6 und 7 definieren die Koordinaten, bei denen Sie die obere linke Ecke des ausgeschnittenen Teils des Bildes, relativ zur oberen linken Ecke des Canvas, zeichnen möchten.
   - Parameter 8 und 9 definieren die Breite und Höhe, um den ausgeschnittenen Bereich des Bildes zu zeichnen. In diesem Fall haben wir dieselben Dimensionen wie der ursprüngliche Ausschnitt spezifiziert, aber Sie könnten es neu skalieren, indem Sie andere Werte angeben.

5. Wenn das Bild sinnvoll aktualisiert wird, muss auch die Beschreibung aktualisiert werden.

   ```js live-sample___5-canvas-images
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das finale Beispiel sollte folgendermaßen aussehen:

{{EmbedLiveSample("5-canvas-images", '100%', 260)}}

Drücken Sie die **Wiedergabe**-Taste, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

## Schleifen und Animationen

Wir haben bisher einige sehr grundlegende Anwendungen von 2D-Canvas behandelt, aber wirklich erleben Sie die volle Leistung von Canvas, wenn Sie es in irgendeiner Weise aktualisieren oder animieren. Schließlich bietet Canvas skriptbare Bilder! Wenn Sie nichts ändern möchten, könnten Sie genauso gut statische Bilder verwenden und sich die ganze Arbeit sparen.

### Eine Schleife erstellen

Mit Schleifen in Canvas zu spielen, macht ziemlich Spaß — Sie können Canvas-Befehle in einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) (oder einem anderen Typ von) Schleife ausführen, genau wie bei jedem anderen JavaScript-Code.

Lassen Sie uns ein Beispiel erstellen.

1. Erstellen Sie eine weitere frische Kopie Ihrer Canvas-Vorlage.
2. Fügen Sie die folgende Zeile am Ende Ihres JavaScript hinzu. Dies enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), welche den Ursprungsort des Canvas verschiebt:

   ```js live-sample___6-canvas-for-loop
   ctx.translate(width / 2, height / 2);
   ```

   Dies verschiebt den Ursprungspunkt (0, 0) in die Mitte des Canvas, anstatt an der oberen linken Ecke zu sein. Dies ist in vielen Situationen sehr nützlich, wie dieser, in der wir unser Design relativ zur Mitte des Canvas zeichnen möchten.

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

   Hier implementieren wir dieselbe `degToRad()`-Funktion, die wir im Dreiecksbeispiel oben gesehen haben, eine `rand()`-Funktion, die eine zufällige Zahl zwischen den angegebenen unteren und oberen Grenzen zurückgibt, und die Variablen `length` und `moveOffset` (über die wir später mehr erfahren).

4. Die Idee hier ist, dass wir etwas auf dem Canvas innerhalb der `for`-Schleife zeichnen und es bei jedem Durchlauf so iterieren, dass wir etwas Interessantes erstellen können. Fügen Sie den folgenden Code in Ihre `for`-Schleife ein:

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
   - Setzen wir den `fillStyle` auf einen leicht transparenten Lilaton, der sich bei jedem Durchlauf basierend auf dem Wert von `length` ändert. Wie Sie später sehen werden, wird `length` bei jedem Durchlauf kleiner, also ist der Effekt hier, dass sich die Farbe bei jedem gezeichneten Dreieck aufhellt.
   - Beginnen den Pfad.
   - Verschieben den Stift auf eine Koordinate von `(moveOffset, moveOffset)`; Diese Variable definiert, wie weit wir bei jedem Zeichnen eines neuen Dreiecks verschieben möchten.
   - Zeichnen eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Dies zeichnet eine Linie der Länge `length`, parallel zur X-Achse.
   - Berechnen die Höhe des Dreiecks, wie zuvor.
   - Zeichnen eine Linie zur nach unten zeigenden Ecke des Dreiecks, dann eine Linie zurück zum Start des Dreiecks.
   - Führen `fill()` aus, um das Dreieck auszufüllen.
   - Aktualisieren die Variablen, die die Folge von Dreiecken beschreiben, so dass wir bereit sind, das nächste zu zeichnen. Wir reduzieren den Wert von `length` um 1, so dass die Dreiecke bei jedem Durchgang kleiner werden; erhöhen den Wert von `moveOffset` um einen kleinen Betrag, damit sich jedes aufeinanderfolgende Dreieck etwas weiter entfernt befindet, und verwenden eine weitere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), welche uns erlaubt, das gesamte Canvas zu drehen! Wir drehen es um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das war's! Das finale Beispiel sollte folgendermaßen aussehen:

{{EmbedLiveSample("6-canvas-for-loop", '100%', 550)}}

Drücken Sie die **Wiedergabe**-Taste, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Wir möchten Sie ermutigen, mit dem Beispiel herumzuspielen und es zu Ihrem eigenen zu machen! Zum Beispiel:

- Zeichnen Sie Rechtecke oder Bögen anstelle von Dreiecken oder betten Sie sogar Bilder ein.
- Spielen Sie mit den Werten von `length` und `moveOffset`.
- Fügen Sie einige Zufallszahlen mit der `rand()`-Funktion hinzu, die wir oben eingefügt haben, aber nicht verwendet haben.

### Animationen

Das Schleifenbeispiel, das wir oben erstellt haben, war unterhaltsam, aber tatsächlich benötigen Sie eine konstante Schleife, die weiter läuft für ernsthafte Canvas-Anwendungen (wie Spiele und Echtzeit-Visualisierungen). Wenn Sie sich Ihr Canvas wie einen Film vorstellen, wollen Sie wirklich, dass das Display bei jedem Frame aktualisiert wird, um die aktualisierte Ansicht anzuzeigen, mit einer idealen Bildwiederholrate von 60 Bildern pro Sekunde, damit die Bewegung für das menschliche Auge schön und flüssig erscheint.

Es gibt einige JavaScript-Funktionen, die Ihnen erlauben, Funktionen wiederholt, mehrmals pro Sekunde auszuführen, wobei die beste für unsere Zwecke hier [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) ist. Es nimmt einen Parameter an — den Namen der Funktion, die Sie für jeden Frame ausführen möchten. Das nächste Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion das neue Update Ihrer Animation zeichnet und `requestAnimationFrame()` erneut kurz vor dem Ende der Funktion aufruft, wird die Animationsschleife weiterlaufen. Die Schleife endet, wenn Sie `requestAnimationFrame()` nicht mehr aufrufen oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) nach dem Aufrufen von `requestAnimationFrame()` aber vor dem Frame aufrufen.

> [!NOTE]
> Es ist eine gute Praxis, `cancelAnimationFrame()` von Ihrem Hauptcode aus aufzurufen, wenn Sie die Animation nicht mehr verwenden, um sicherzustellen, dass keine Updates noch ausgeführt werden müssen.

Der Browser arbeitet komplexe Details wie das gleichmäßige Abspielen der Animation bei einer konsistenten Geschwindigkeit aus und verschwendet keine Ressourcen für die Animation von Dingen, die nicht gesehen werden können.

Um zu sehen, wie es funktioniert, werfen wir noch einmal einen kurzen Blick auf unser [Bouncing Balls Beispiel](#frame_bouncing-balls). Der Code für die Schleife, die alles in Bewegung hält, sieht so aus:

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

Wir führen die `loop()`-Funktion einmal am Ende des Codes aus, um den Zyklus zu starten und den ersten Animationsframe zu zeichnen; die `loop()`-Funktion übernimmt dann das Aufrufen von `requestAnimationFrame(loop)`, um den nächsten Frame der Animation erneut und erneut auszuführen.

Beachten Sie, dass wir in jedem Frame das Canvas komplett löschen und alles neu zeichnen. Für jeden vorhandenen Ball zeichnen wir ihn, aktualisieren seine Position und prüfen, ob er mit anderen Bällen kollidiert. Sobald Sie eine Grafik auf ein Canvas gezeichnet haben, gibt es keine Möglichkeit, diese Grafik einzeln zu manipulieren, wie Sie es mit DOM-Elementen können. Sie können jeden Ball nicht umeinander auf dem Canvas bewegen, denn sobald er gezeichnet ist, ist er Teil des Canvas und kein einzeln zugängliches Element oder Objekt mehr. Stattdessen müssen Sie löschen und neu zeichnen, entweder indem Sie den gesamten Frame löschen und alles neu zeichnen oder indem Sie Code haben, der genau weiß, welche Teile gelöscht werden müssen und nur die notwendige Mindestfläche des Canvas löscht und neu zeichnet.

Die Optimierung der Grafikanimation ist eine ganze Spezialität der Programmierung, mit vielen cleveren Techniken. Diese gehen jedoch über das hinaus, was wir für unser Beispiel benötigen!

Im Allgemeinen besteht der Prozess des Erstellens einer Canvas-Animation aus den folgenden Schritten:

1. Den Canvas-Inhalt löschen (z. B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Zustand speichern (falls erforderlich) unter Verwendung von [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) — dies ist erforderlich, wenn Sie aktualisierte Einstellungen auf dem Canvas speichern möchten, bevor Sie fortfahren, was nützlich für fortgeschrittenere Anwendungen sein kann.
3. Zeichnen der Grafiken, die Sie animieren.
4. Wiederherstellen der in Schritt 2 gespeicherten Einstellungen unter Verwendung von [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore).
5. `requestAnimationFrame()` aufrufen, um das Zeichnen des nächsten Animationsframes zu planen.

> [!NOTE]
> Wir werden hier nicht `save()` und `restore()` behandeln, aber sie sind in unserem [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations)-Tutorial (und den darauf folgenden) gut erklärt.

### Animierende Objektanimation

Lassen Sie uns nun unsere eigene einfache Animation erstellen – wir animieren ein sich bewegendes Objekt über den Bildschirm mit einem Sprite Sheet.

1. Erstellen Sie eine weitere frische Kopie unserer Canvas-Vorlage und öffnen Sie sie in Ihrem Code-Editor.

2. Aktualisieren Sie das alternative HTML, um das Bild zu reflektieren:

   ```html live-sample___7-canvas-walking-animation
   <canvas class="myCanvas">
     <p>A cat walking.</p>
   </canvas>
   ```

3. Dieses Mal werden wir den Hintergrund nicht schwarz färben. Malen Sie nach dem Abrufen der `ctx`-Variable den Hintergrund stattdessen hellgrau:

   ```js live-sample___7-canvas-walking-animation
   ctx.fillStyle = "#e5e6e9";
   ctx.fillRect(0, 0, width, height);
   ```

4. Fügen Sie am Ende des JavaScript die folgende Zeile hinzu, um den Koordinatenursprung wieder in die Mitte des Canvas zu setzen:

   ```js live-sample___7-canvas-walking-animation
   ctx.translate(width / 2, height / 2);
   ```

5. Lassen Sie uns nun ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt erstellen, dessen [`src`](/de/docs/Web/API/HTMLImageElement/src) auf das Bild setzen, das wir laden möchten, und einen `onload`-Ereignishandler hinzufügen, der die `draw()`-Funktion auslöst, wenn das Bild geladen ist:

   ```js live-sample___7-canvas-walking-animation
   const image = new Image();
   image.src =
     "https://developer.mozilla.org/shared-assets/images/examples/web-animations/cat_sprite.png";
   image.onload = draw;
   ```

6. Nun fügen wir einige Variablen hinzu, um die Position des anzuzeigenden Sprites und die Nummer des anzuzeigenden Sprites zu verfolgen.

   ```js live-sample___7-canvas-walking-animation
   let spriteIndex = 0;
   let posX = 0;
   const spriteWidth = 300;
   const spriteHeight = 150;
   const totalSprites = 12;
   ```

   Das Sprite-Bild wurde freundlicherweise von [Rachel Nabors](https://nearestnabors.com/) erstellt und geteilt, für ihre Dokumentationsarbeit an der [Web Animations API](/de/docs/Web/API/Web_Animations_API). Es sieht wie folgt aus:

   ![Ein Sprite-Sheet mit drei Spalten, jede Spalte enthält eine Sequenz von Bildern einer schwarzen Katze, die sich in unterschiedlichem Tempo nach links bewegt. Jedes Sprite ist 300 Pixel breit und 150 Pixel hoch.](/shared-assets/images/examples/web-animations/cat_sprite.png)

   Es hat drei Spalten. Jede Spalte ist eine Sequenz, die die Katze in einem anderen Tempo darstellt (Gehend, Trabend, Galoppierend). Jede Sequenz enthält entweder 12 oder 13 Sprites – jedes ist 300 Pixel breit und 150 Pixel hoch. Wir verwenden die linkste Sequenz, die 12 Sprites enthält. Um jedes Sprite sauber anzuzeigen, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild aus dem Spritesheet herauszuschneiden und nur diesen Teil anzuzeigen, wie wir es oben mit dem Firefox-Logo gemacht haben. Die X- und Y-Koordinaten des Ausschnitts müssen das Vielfache von `spriteWidth` und `spriteHeight` sein, weil wir die linke Sequenz verwenden, ist der X-Wert immer 0. Die Größe des Ausschnitts ist immer `spriteWidth` mal `spriteHeight`.

7. Lassen Sie uns nun eine leere `draw()`-Funktion am Ende des Codes einfügen, bereit für die Füllung mit etwas Code:

   ```js
   function draw() {}
   ```

   ```js-nolint hidden live-sample___7-canvas-walking-animation
   function draw() {
   ```

8. Der Rest des Codes in diesem Abschnitt gehört in `draw()`. Fügen Sie als Erstes die folgende Zeile hinzu, die das Canvas löscht, um jeden Frame vorzubereiten. Beachten Sie, dass wir die oberen linken Ecke des Rechtecks als `-(width / 2), -(height / 2)` angeben mussten, weil wir zuvor die Ursprungposition als `width/2, height/2` angegeben haben.

   ```js live-sample___7-canvas-walking-animation
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

9. Als Nächstes werden wir unser Bild mit `drawImage` zeichnen – die Version mit 9 Parametern. Fügen Sie das Folgende hinzu:

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
   - Wir spezifizieren `image` als das einzuebettende Bild.
   - Parameter 2 und 3 spezifizieren die obere linke Ecke des auszuschneidenden Bereichs aus dem Quellbild, wobei der X-Wert 0 ist (für die linkste Spalte) und der Y-Wert sich in einem Vielfachen von `spriteHeight` bewegt. Sie können den X-Wert durch `spriteWidth` oder `2 * spriteWidth` ersetzen, um die anderen Spalten auszuwählen.
   - Parameter 4 und 5 spezifizieren die Größe des auszuschneidenden Bereichs – `spriteWidth` und `spriteHeight`.
   - Parameter 6 und 7 spezifizieren die obere linke Ecke des Feldes, in das der ausgeschnittene Bereich des Bildes auf das Canvas gezeichnet werden soll – die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichnungsposition ändern können, indem wir den `posX`-Wert ändern. Die Y-Position ist `-spriteHeight / 2`, was bedeutet, dass das Bild vertikal in der Mitte des Canvas zentriert wird.
   - Parameter 8 und 9 spezifizieren die Größe des Bildes auf dem Canvas. Wir möchten einfach die Originalgröße beibehalten, also spezifizieren wir `spriteWidth` und `spriteHeight` als Breite und Höhe.

10. Als Nächstes ändern wir den `spriteIndex`-Wert nach jedem Zeichnen – zumindest nach einigen davon. Fügen Sie den folgenden Block am Ende der `draw()`-Funktion hinzu:

    ```js live-sample___7-canvas-walking-animation
    if (posX % 11 === 0) {
      if (spriteIndex === totalSprites - 1) {
        spriteIndex = 0;
      } else {
        spriteIndex++;
      }
    }
    ```

    Wir packen den gesamten Block in `if (posX % 11 === 0) { }` ein. Wir verwenden den Modulo-Operator (`%`) (auch bekannt als [Remainder Operator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu prüfen, ob der `posX`-Wert durch 11 genau geteilt werden kann, ohne dass ein Rest bleibt. Ist dies der Fall, gehen wir zum nächsten Sprite über, indem wir `spriteIndex` inkrementieren (der wieder auf 0 gesetzt wird, sobald wir mit dem letzten abgeschlossen haben). Dies bedeutet im Wesentlichen, dass wir das Sprite nur bei jedem 11. Frame, oder ungefähr 6 Frames pro Sekunde (wenn `requestAnimationFrame()` uns bis zu 60 Frames pro Sekunde aufruft und möglich ist), aktualisieren. Wir verlangsamen bewusst die Bildrate, weil wir nur 12 Sprites haben und wenn wir eines bei jedem 60-sten einer Sekunde anzeigen würden, würde sich unser Objekt viel zu schnell bewegen!

    Innerhalb des äußeren Blocks verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu prüfen, ob der `spriteIndex`-Wert bei dem letzten angekommen ist. Wenn wir bereits das letzte Sprite anzeigen, setzen wir `spriteIndex` auf 0 zurück, andernfalls inkrementieren wir es um 1.

11. Als Nächstes müssen wir herausfinden, wie wir den `posX`-Wert bei jedem Frame ändern können – fügen Sie den folgenden Codeblock direkt unter Ihrem letzten ein.

    ```js live-sample___7-canvas-walking-animation
    if (posX < -width / 2 - spriteWidth) {
      const newStartPos = width / 2;
      posX = Math.ceil(newStartPos);
    } else {
      posX -= 2;
    }
    ```

    Wir verwenden eine weitere `if...else`-Anweisung, um zu prüfen, ob der Wert von `posX` kleiner geworden ist als `-width/2 - spriteWidth`, was bedeutet, dass unsere Katze von der linken Seite des Bildschirms gegangen ist. Wenn das der Fall ist, berechnen wir eine Position, die die Katze direkt rechts von der rechten Bildschirmseite setzt.

    Wenn unsere Katze noch nicht vom Bildschirmrand gegangen ist, verringern wir `posX` um 2. Dies wird bewirken, dass sie sich ein wenig nach links bewegt, das nächste Mal, wenn wir sie zeichnen.

12. Schließlich müssen wir die Animationsschleife durch Aufrufen von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()`-Funktion erstellen:

    ```js live-sample___7-canvas-walking-animation
    window.requestAnimationFrame(draw);
    ```

```js-nolint hidden live-sample___7-canvas-walking-animation
}
```

Das war's! Das finale Beispiel sollte wie folgt aussehen:

{{EmbedLiveSample("7-canvas-walking-animation", '100%', 260)}}

Sie können die **Wiedergabe**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Eine einfache Zeichnungsanwendung

Als letztes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichnungsanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben (wie der Mausbewegung, in diesem Fall) kombiniert werden kann. Wir lassen Sie dieses Mal nicht Schritt für Schritt bauen; wir werden einfach die interessantesten Teile des Codes erkunden.

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

Sie können das Beispiel unten live ausprobieren; Sie können auch die **Wiedergabe**-Taste drücken, um es im MDN Playground zu öffnen, wo Sie den Quellcode bearbeiten können:

{{EmbedLiveSample("8-canvas-drawing-app", '100%', 600)}}

Schauen wir uns die interessantesten Teile an. Zunächst einmal behalten wir die X- und Y-Koordinaten der Maus und ob sie geklickt wird oder nicht mit drei Variablen: `curX`, `curY` und `pressed`. Wenn die Maus bewegt wird, feuern wir eine Funktion, die als `onmousemove`-Ereignishandler gesetzt ist, um die aktuellen X- und Y-Werte zu erfassen. Wir verwenden auch `onmousedown` und `onmouseup`-Ereignishandler, um den Wert von `pressed` zu ändern, wenn die Maustaste gedrückt wird, und wieder auf `false`, wenn Sie losgelassen wird.

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

Bei jedem Drücken der Schaltfläche „Canvas löschen“ führen wir eine einfache Funktion aus, die das ganze Canvas wieder auf Schwarz zurücksetzt, auf die gleiche Weise, wie wir es bereits gesehen haben:

```js live-sample___8-canvas-drawing-app
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal ziemlich einfach – wenn `pressed` `true` ist, zeichnen wir einen Kreis mit einem Füllstil, der dem Wert im Farbpicker und einem Radius entspricht, der dem im Bereicheingabefeld angegebenen Wert entspricht. Wir müssen den Kreis 85 Pixel über dem Platz, an dem wir ihn gemessen haben, zeichnen, weil die vertikale Messung vom oberen Teil des Ansichtsfensters genommen wird, wir aber den Kreis relativ zur Oberkante des Canvas zeichnen, welches unterhalb der 85 Pixel hohen Symbolleiste beginnt. Wenn wir ihn nur mit `curY` als Y-Koordinate zeichnen würden, würde er 85 Pixel tiefer erscheinen als die Mausposition.

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

Alle Eingabetypen im {{htmlelement("input")}} sind gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, fällt er auf ein einfaches Textfeld zurück.

## WebGL

Es ist nun an der Zeit, das 2D hinter sich zu lassen und einen kurzen Blick auf das 3D-Canvas zu werfen. 3D-Canvas-Inhalt wird mit der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert, die eine völlig separate API von der 2D-Canvas-API ist, auch wenn beide auf {{htmlelement("canvas")}}-Elemente rendern.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht es Ihnen, direkt mit der {{Glossary("GPU", "GPU")}} des Computers zu kommunizieren. Als solches ist das Schreiben von rohem WebGL näher an niedrigeren Sprachen wie C++ als regulärem JavaScript; es ist ziemlich komplex, aber unglaublich leistungsfähig.

### Verwendung einer Bibliothek

Aufgrund seiner Komplexität schreiben die meisten Leute 3D-Grafikcode mit einer Drittanbieter-JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten funktionieren auf ähnliche Weise, indem sie Funktionen bieten, um primitive und benutzerdefinierte Formen zu erstellen, Kameras und Beleuchtung zu positionieren, Oberflächen mit Texturen zu versehen und mehr. Sie bearbeiten das WebGL für Sie, sodass Sie auf einer höheren Ebene arbeiten können.

Ja, die Verwendung einer dieser bedeutet den Erwerb einer neuen API (in diesem Fall einer Drittanbieter-API), aber sie sind viel einfacher als das Codieren des rohen WebGL.

### Ein drehender Würfel

Schauen wir uns ein Beispiel an, wie etwas mit einer WebGL-Bibliothek erstellt werden kann. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der beliebtesten ist. In diesem Tutorial erstellen wir einen 3D-drehenden Würfel.

1. Beginnen Sie damit, einen neuen Ordner auf Ihrer lokalen Festplatte mit dem Namen `webgl-cube` zu erstellen.
2. Legen Sie darin eine neue Datei mit dem Namen `index.html` an und fügen Sie den folgenden Inhalt hinzu:

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

3. Erstellen Sie eine weitere neue Datei mit dem Namen `script.js`, wieder im gleichen Ordner wie zuvor. Lassen Sie diese zunächst leer.
4. Erstellen Sie nun eine weitere neue Datei mit dem Namen `style.css`, erneut im gleichen Ordner, und fügen Sie den folgenden Inhalt hinzu:

   ```css live-sample___9-webgl-cube
   html,
   body {
     margin: 0;
   }

   body {
     overflow: hidden;
   }
   ```

5. Wir haben `three.js` in unserer Seite eingebunden (das ist es, was das erste `<script>`-Element in unserem HTML macht), also können wir nun beginnen, JavaScript zu schreiben, das es benutzt und in die `script.js`-Datei einfügen kann. Lassen Sie uns mit dem Erstellen eines neuen Szenarios beginnen – fügen Sie das Folgende in Ihre `script.js`-Datei ein:

   ```js live-sample___9-webgl-cube
   const scene = new THREE.Scene();
   ```

   Der Konstruktor [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene) erstellt ein neues Szenario, das die gesamte 3D-Welt darstellt, die wir anzeigen möchten.

6. Als Nächstes brauchen wir eine **Kamera**, damit wir die Szene sehen können. In 3D-Bilderbegriffen stellt die Kamera die Position eines Betrachters in der Welt dar. Um eine Kamera zu erstellen, fügen Sie die nächsten Zeilen hinzu:

   ```js live-sample___9-webgl-cube
   const camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000,
   );
   camera.position.z = 5;
   ```

   Der Konstruktor [`PerspectiveCamera()`](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera) benötigt vier Argumente:
   - Das Sichtfeld: Wie breit der Bereich vor der Kamera ist, der auf dem Bildschirm sichtbar sein sollte, in Grad.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Normalerweise ist dies das Verhältnis der Breite der Szene geteilt durch die Höhe der Szene. Eine andere Zahl zu verwenden, würde die Szene verzerren (was das ist, was Sie wollen, normalerweise aber nicht).
   - Die nahe Ebene: Wie nahe die Objekte an der Kamera sind, bevor wir aufhören, sie auf dem Bildschirm zu rendern. Denken Sie daran, wenn Sie Ihre Fingerspitze näher und näher an den Raum zwischen Ihren Augen bewegen, irgendwann können Sie sie nicht mehr sehen.
   - Die ferne Ebene: Wie weit entfernt Dinge von der Kamera sind, bevor sie nicht mehr gerendert werden.

   Wir setzen die Position der Kamera auch auf 5 Entfernungseinheiten auf der Z-Achse, was, wie in CSS, aus dem Bildschirm in Richtung des Betrachters ist.

7. Die dritte wichtige Zutat ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene, wie durch eine gegebene Kamera gesehen, rendert. Wir erstellen einen für jetzt mit dem Konstruktor [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer), aber wir werden ihn erst später nutzen. Fügen Sie die folgenden Zeilen als nächstes hinzu:

   ```js live-sample___9-webgl-cube
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile setzt die Größe, in der der Renderer den Blick der Kamera zeichnet, und die dritte Zeile fügt das vom Renderer erstellte {{htmlelement("canvas")}}-Element dem Dokumentenkörper hinzu. Jetzt wird alles, was der Renderer zeichnet, in unserem Fenster angezeigt.

8. Als Nächstes wollen wir den Würfel erstellen, den wir auf der Leinwand anzeigen werden. Fügen Sie den folgenden Codeblock am Ende Ihres JavaScript hinzu:

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

   Es gibt hier ein wenig mehr zu verstehen, daher gehen wir es Schritt für Schritt durch:
   - Zuerst erstellen wir eine `cube`-globale Variable, damit wir von überall im Code auf unseren Würfel zugreifen können.
   - Als Nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt, und rufen `load()` darauf auf. `load()` nimmt in diesem Fall zwei Parameter an (obwohl es mehr nehmen kann): die zu ladende Textur (ein PNG) und eine Funktion, die gestartet wird, sobald die Textur geladen wurde.
   - Innerhalb dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um anzugeben, dass wir eine 2 x 2 Wiederholung des Bildes um alle Seiten des Würfels herum wünschen. Als Nächstes erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt, und fügen sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) zusammen, um unseren Würfel zu erstellen. Ein Objekt erfordert normalerweise eine Geometrie (welche Form es hat) und ein Material (wie seine Oberfläche aussieht).
   - Zuletzt fügen wir unseren Würfel in das Szenario ein und rufen dann unsere `draw()`-Funktion auf, um die Animation zu starten.

9. Bevor wir zu `draw()` gehen, fügen wir ein paar Lichter in das Szenario hinzu, um die Dinge ein wenig zu beleben; fügen Sie die nächsten Blöcke hinzu:

   ```js live-sample___9-webgl-cube
   const light = new THREE.AmbientLight("white"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("white");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art weiches Licht, das die ganze Szene ein wenig aufhellt, wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt hingegen ist ein zielgerichteter Lichtstrahl, mehr wie eine Taschenlampe/Lamp (oder in der Tat ein Scheinwerfer).

10. Zuletzt fügen wir unsere `draw()`-Funktion am Ende des Codes hinzu:

    ```js live-sample___9-webgl-cube
    function draw() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);

      requestAnimationFrame(draw);
    }
    ```

    Dies ist recht intuitiv; bei jedem Frame rotieren wir unseren Würfel leicht auf seinen X- und Y-Achsen, dann rendern wir das Szenario aus Sicht unserer Kamera und schließlich rufen wir `requestAnimationFrame()` auf, um das Zeichnen unseres nächsten Frames zu planen.

Das fertige Produkt sollte so aussehen:

{{EmbedLiveSample("9-webgl-cube", "100%", 500)}}

> [!NOTE]
> In unserem GitHub-Repo finden Sie auch ein weiteres interessantes 3D-Würfel-Beispiel – [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([siehe es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dies verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Computer-Webcam zu nehmen und es auf die Seite des Würfels als Textur zu projizieren!

## Zusammenfassung

An diesem Punkt sollten Sie eine nützliche Vorstellung von den Grundlagen der Grafikprogrammierung mit Canvas und WebGL und was Sie mit diesen APIs machen können, haben sowie eine gute Vorstellung davon, wohin Sie gehen können, um weitere Informationen zu finden. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklichen Grundlagen des Canvas behandelt – es gibt noch so viel mehr zu lernen! Die unten aufgeführten Artikel führen Sie weiter.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorialserie, die erklärt, was Sie über 2D-Canvas wissen sollten, viel detaillierter als hier behandelt. Unbedingt lesen.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Serie, die die Grundlagen der rohen WebGL-Programmierung lehrt.
- [Grundlagen einer Demo mit Three.js erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — grundlegendes Three.js-Tutorial. Wir haben auch gleichwertige Leitfäden für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spielentwicklung](/de/docs/Games) — die Einstiegsseite für die Web-Spiele-Entwicklung auf MDN. Hier gibt es einige wirklich nützliche Tutorials und Techniken im Zusammenhang mit 2D- und 3D-Canvas – siehe die Menüpunkte Techniken und Tutorials.

## Beispiele

- [Violent theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API, um Ton zu erzeugen, und Canvas, um eine schöne Visualisierung dazu zu erzeugen.
- [Voice change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas, um Echtzeitaudiodaten von der Web Audio API zu visualisieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
