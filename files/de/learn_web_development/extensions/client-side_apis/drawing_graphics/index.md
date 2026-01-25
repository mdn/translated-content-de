---
title: Zeichnen von Grafiken
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsstarke Grafikprogrammierungstools, von der Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) Sprache bis hin zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in Canvas und weiterführende Ressourcen, die es Ihnen ermöglichen, mehr darüber zu erfahren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen von JavaScript-Objekten</a> und grundlegende API-Kenntnisse wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
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

Das Web bestand ursprünglich nur aus Text, was sehr langweilig war, also wurden Bilder eingeführt — zunächst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Dies war jedoch immer noch nicht genug. Während Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden konnten, um SVG-Vektorbilder zu animieren (und auf andere Weise zu manipulieren) — da sie durch Markup dargestellt werden — gab es immer noch keine Möglichkeit, dasselbe für Bitmap-Bilder zu tun, und die verfügbaren Tools waren ziemlich begrenzt. Das Web hatte immer noch keine Möglichkeit, effektiv Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die üblicherweise von niedrigeren Programmiersprachen wie C++ oder Java bewältigt werden.

Die Situation begann sich zu verbessern, als Browser im Jahr 2004 begannen, das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas-API](/de/docs/Web/API/Canvas_API) zu unterstützen. Wie Sie weiter unten sehen werden, bietet Canvas einige nützliche Werkzeuge zur Erstellung von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere in Kombination mit einigen der anderen APIs, die die Webplattform bietet, jedoch kann es schwierig oder unmöglich sein, sie barrierefrei zu gestalten.

Das untenstehende Beispiel zeigt eine einfache 2D-Canvas-basierte Bälleanimation, die wir ursprünglich in unserem Modul [Einführung in JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) kennengelernt haben:

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

Um 2006-2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Dies wurde zu [WebGL](/de/docs/Web/API/WebGL_API), das unter Browseranbietern an Popularität gewann und ungefähr 2009-2010 standardisiert wurde. WebGL ermöglicht das Erstellen echter 3D-Grafiken in Ihrem Webbrowser.

Dieser Artikel wird sich hauptsächlich auf 2D-Canvas konzentrieren, da roher WebGL-Code sehr komplex ist. Wir werden jedoch zeigen, wie Sie [eine WebGL-Bibliothek verwenden können, um einfacher eine 3D-Szene zu erstellen](#webgl), und Sie finden ein Tutorial, das sich mit rohem WebGL befasst — siehe [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Erste Schritte mit einem `<canvas>`

Wenn Sie eine 2D- _oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-{{htmlelement("canvas")}}-Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Dies ist so einfach wie das Einfügen des Elements auf der Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dadurch wird auf der Seite ein Canvas mit einer Größe von 320 mal 240 Pixeln erstellt.

Sie sollten einige alternative Inhalte innerhalb der `<canvas>`-Tags platzieren. Dies sollte den Canvas-Inhalt für Benutzer von Browsern beschreiben, die Canvas nicht unterstützen, oder für Benutzer von Bildschirmlesegeräten.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Der Fallback sollte nützlichen alternativen Inhalt zu den Canvas-Inhalten bieten. Wenn Sie beispielsweise ein ständig aktualisiertes Diagramm von Aktienkursen rendern, könnten die alternativen Inhalte ein statisches Bild des neuesten Aktiencharts sein, mit `alt`-Text, der die Preise in Textform oder eine Liste von Links zu den einzelnen Aktienseiten angibt.

> [!NOTE]
> Canvas-Inhalte sind für Bildschirmleser nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributes direkt auf dem Canvas-Element selbst hinzu oder fügen Sie alternative Inhalte ein, die innerhalb der öffnenden und schließenden `<canvas>`-Tags platziert werden. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte sind es.

### Erstellen und Dimensionieren unseres Canvas

Beginnen wir damit, unsere eigene Canvas-Vorlage zu erstellen, um zukünftige Experimente darin zu erstellen.

1. Erstellen Sie zuerst ein Verzeichnis auf Ihrer lokalen Festplatte namens `canvas-template`.
2. Erstellen Sie eine neue Datei in dem Verzeichnis mit dem Namen `index.html` und speichern Sie den folgenden Inhalt darin:

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

4. Erstellen Sie eine neue Datei im Verzeichnis mit dem Namen `script.js`. Diese Datei bleibt vorerst leer.

5. Öffnen Sie nun `script.js` und fügen Sie die folgenden Zeilen JavaScript hinzu:

   ```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz auf das Canvas in der Konstante `canvas` gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas gleich [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (die uns die Ansichtsfensterbreite gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas gleich [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (die uns die Ansichtsfensterhöhe gibt). Jetzt haben wir also ein Canvas, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden auch sehen, dass wir Zuweisungen mit mehreren Gleichheitszeichen miteinander verketten — dies ist in JavaScript erlaubt, und es ist eine gute Technik, wenn Sie mehrere Variablen auf denselben Wert setzen möchten. Wir wollten, dass die Canvas-Breite und -Höhe in den Variablen `width`/`height` leicht zugänglich sind, da es nützliche Werte sind, die später verfügbar sein sollten (zum Beispiel, wenn Sie etwas genau in der Mitte der Canvas-Breite zeichnen möchten).

> [!NOTE]
> Sie sollten die Größe des Canvas in der Regel mithilfe von HTML-Attributen oder DOM-Eigenschaften festlegen, wie oben erklärt. Sie könnten CSS verwenden, aber das Problem ist dann, dass die Größenanpassung nach dem Rendern des Canvas erfolgt und wie bei jedem anderen Bild könnte das Canvas pixelig/verzerrt werden.

### Abrufen des Canvas-Kontexts und abschließendes Setup

Wir müssen eine letzte Sache erledigen, bevor wir unsere Canvas-Vorlage als fertig betrachten können. Um auf dem Canvas zu zeichnen, müssen wir eine spezielle Referenz auf den Zeichenbereich namens Kontext abrufen. Dies wird mithilfe der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erledigt, die für die grundlegende Verwendung einen einzelnen Zeichenfolgenparameter benötigt, der den Typ des Kontexts darstellt, den Sie abrufen möchten.

In diesem Fall möchten wir ein 2D-Canvas, also fügen Sie die folgende JavaScript-Zeile unter den anderen in `script.js` hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextwerte, die Sie wählen könnten, sind `webgl` für WebGL, `webgpu` für WebGPU usw., aber diese werden wir in diesem Artikel nicht benötigen.

Das war's — unser Canvas ist jetzt bereit für das Zeichnen! Die Variable `ctx` enthält jetzt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, und alle Zeichenoperationen auf dem Canvas beinhalten die Manipulation dieses Objekts.

Bevor wir fortfahren, wollen wir noch eine letzte Sache tun. Wir färben den Canvas-Hintergrund schwarz ein, um Ihnen einen ersten Eindruck von der Canvas-API zu vermitteln. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript-Codes hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop
ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mithilfe der [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)-Eigenschaft des Canvas (dies nimmt [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) genau wie CSS-Eigenschaften) und zeichnen dann ein Rechteck, das den gesamten Bereich des Canvas mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) abdeckt (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, die Sie für das gezeichnete Rechteck wünschen — wir sagten ja, dass die Variablen `width` und `height` nützlich sein würden)!

OK, unsere Vorlage ist fertig, und es ist an der Zeit, weiterzugehen.

## 2D-Canvas-Grundlagen

Wie oben erwähnt, werden alle Zeichnungsoperationen durch Manipulation eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts (in unserem Fall `ctx`) ausgeführt. Viele Operationen müssen mit Koordinaten versehen werden, um genau festzulegen, wo etwas gezeichnet werden soll — die obere linke Ecke des Canvas ist Punkt (0, 0), die horizontale (x) Achse verläuft von links nach rechts, und die vertikale (y) Achse verläuft von oben nach unten.

![Ein kariertes Millimeterpapier mit kleinen Quadraten, die seine Fläche bedecken, mit einem stahlblauen Quadrat in der Mitte. Die obere linke Ecke des Canvas ist Punkt (0, 0) der Canvas-x-Achse und y-Achse. Die horizontale (x) Achse verläuft von links nach rechts und bezeichnet die Breite, und die vertikale (y) Achse verläuft von oben nach unten und bezeichnet die Höhe. Die obere linke Ecke des blauen Quadrats ist als x-Einheiten von der y-Achse und y-Einheiten von der x-Achse entfernt bezeichnet.](canvas_default_grid.png)

Das Zeichnen von Formen wird in der Regel mit dem Rechteck-Formprimitiv oder durch Nachzeichnen einer Linie entlang eines bestimmten Pfades und anschließendem Füllen der Form durchgeführt. Unten zeigen wir, wie beides funktioniert.

### Einfache Rechtecke

Lassen Sie uns mit einigen einfachen Rechtecken beginnen.

1. Machen Sie zunächst eine Kopie Ihres neu codierten Canvas-Vorlagenverzeichnisses.
2. Fügen Sie folgende Zeilen am Ende Ihrer JavaScript-Datei hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "red";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie Ihr HTML im Browser laden, sollte ein rotes Rechteck auf Ihrem Canvas erscheinen. Die obere linke Ecke ist 50 Pixel vom oberen und linken Rand des Canvas entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch die dritten und vierten Parameter definiert).

3. Lassen Sie uns ein weiteres Rechteck hinzufügen — diesmal ein grünes. Fügen Sie das folgende am Ende Ihres JavaScript-Codes hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "green";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren Sie die Seite, und Sie werden Ihr neues Rechteck sehen. Dies wirft einen wichtigen Punkt auf: Grafische Operationen wie das Zeichnen von Rechtecken, Linien und so weiter werden in der Reihenfolge ausgeführt, in der sie auftreten. Denken Sie daran, dass es wie das Streichen einer Wand ist, bei der jeder Anstrich den darunter liegenden überlappt und ihn möglicherweise verdeckt. Sie können nichts daran ändern, daher müssen Sie sorgfältig über die Reihenfolge nachdenken, in der Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbdurchsichtige Grafiken zeichnen können, indem Sie eine halbdurchsichtige Farbe angeben, zum Beispiel durch die Verwendung von `rgb()`. Der "Alpha-Kanal" definiert die Menge an Transparenz, die die Farbe hat. Je höher der Wert, desto mehr verdeckt sie das, was sich dahinter befindet. Fügen Sie folgendes zu Ihrem Code hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, einige eigene Rechtecke zu zeichnen; haben Sie Spaß dabei!

### Striche und Linienbreiten

Bisher haben wir uns das Zeichnen von gefüllten Rechtecken angesehen, aber Sie können auch Rechtecke zeichnen, die nur Umrandungen (im Grafikdesign als **Striche** bezeichnet) sind. Um die gewünschte Farbe für Ihren Strich einzustellen, verwenden Sie die [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)-Eigenschaft; das Zeichnen eines Strichrechtecks erfolgt mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Fügen Sie das folgende der vorherigen Beispielcode-Datei hinzu, wiederum unter den vorhandenen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "white";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Strichen beträgt 1 Pixel; Sie können den Wert der [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)-Eigenschaft anpassen, um dies zu ändern (es nimmt eine Zahl an, die die Anzahl der Pixel darstellt, die der Strich breit ist). Fügen Sie die folgende Zeile zwischen den vorherigen beiden Zeilen hinzu:

   ```js
   ctx.lineWidth = 5;
   ```

Jetzt sollten Sie sehen, dass Ihre weiße Umrandung viel dicker geworden ist! Das war's fürs Erste. An diesem Punkt sollte Ihr Beispiel so aussehen:

```js hidden live-sample___2-canvas-rectangles
ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);
```

{{EmbedLiveSample("2-canvas-rectangles", '100%', 250)}}

Sie können die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Zeichnen von Pfaden

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Im Wesentlichen bedeutet dies, Code zu schreiben, um genau festzulegen, auf welchem Pfad der Stift auf Ihrem Canvas entlanglaufen soll, um die gewünschte Form zu zeichnen. Canvas enthält Funktionen zum Zeichnen von geraden Linien, Kreisen, Bézier-Kurven und mehr.

Starten Sie den Abschnitt, indem Sie eine frische Kopie Ihrer Canvas-Vorlage erstellen, in die Sie das neue Beispiel zeichnen können.

Wir verwenden einige gängige Methoden und Eigenschaften in allen untenstehenden Abschnitten:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — Beginnen Sie einen Pfad an dem Punkt zu zeichnen, an dem sich der Stift derzeit auf dem Canvas befindet. Auf einem neuen Canvas beginnt der Stift bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — Bewegen Sie den Stift an einen anderen Punkt auf dem Canvas, ohne die Linie zu protokollieren oder nachzuziehen; der Stift "springt" zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — Zeichnet eine gefüllte Form, indem der bisher nachgezeichnete Pfad gefüllt wird.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — Zeichnet eine Umrissform, indem ein Strich entlang des bisher gezeichneten Pfades gezeichnet wird.
- Sie können auch Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` sowohl bei Pfaden als auch bei Rechtecken verwenden.

Ein typischer, einfacher Pfad-Zeichenvorgang würde ungefähr so aussehen:

```js
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Linien zeichnen

Lassen Sie uns ein gleichseitiges Dreieck auf dem Canvas zeichnen.

1. Fügen Sie zunächst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Diese konvertiert Gradwerte in Radianten, was nützlich ist, da immer, wenn Sie in JavaScript einen Winkelwert angeben müssen, dieser fast immer in Radianten sein wird, Menschen aber normalerweise in Grad denken.

   ```js live-sample___3_canvas_paths
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Als nächstes beginnen Sie Ihren Pfad, indem Sie das folgende unter Ihrer vorherigen Ergänzung hinzufügen; hier setzen wir eine Farbe für unser Dreieck, beginnen einen Pfad zu zeichnen und bewegen den Stift dann zu (50, 50), ohne etwas zu zeichnen. Dort beginnen wir, unser Dreieck zu zeichnen.

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

   Zuerst zeichnen wir eine Linie bis zu (150, 50) — unser Pfad verläuft jetzt 100 Pixel parallel zur x-Achse.

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks mit etwas einfacher Trigonometrie. Im Grunde zeichnen wir das Dreieck nach unten zeigen. Die Winkel in einem gleichseitigen Dreieck sind immer 60 Grad; um die Höhe zu berechnen, können wir es in der Mitte in zwei rechtwinklige Dreiecke teilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben. In Bezug auf die Seiten:
   - Die längste Seite wird als **Hypotenuse** bezeichnet
   - Die Seite neben dem 60-Grad-Winkel wird als **Ankathete** bezeichnet — die wir wissen, ist 50 Pixel, da sie die Hälfte der gerade gezeichneten Linie ist.
   - Die Seite gegenüber dem 60-Grad-Winkel wird als **Gegenkathete** bezeichnet, was die Höhe des Dreiecks ist, die wir berechnen möchten.

   ![Ein gleichseitiges Dreieck, das nach unten zeigt, mit markierten Winkeln und Seiten. Die horizontale Linie oben ist als 'Ankathete' beschriftet. Eine senkrechte punktierte Linie, beginnend von der Mitte der Ankathete, bezeichnet als 'Gegenkathete', teilt das Dreieck und bildet zwei gleiche rechtwinklige Dreiecke. Die rechte Seite des Dreiecks ist als Hypotenuse beschriftet, da es die Hypotenuse des rechtwinkligen Dreiecks ist, das durch die Linie mit der Bezeichnung 'Gegenkathete' gebildet wird. Obwohl alle drei Seiten des Dreiecks die gleiche Länge haben, ist die Hypotenuse die längste Seite des rechtwinkligen Dreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass das Produkt der Ankathete multipliziert mit dem Tangens des Winkels gleich der Gegenkathete ist, daher kommt `50 * Math.tan(degToRad(60))`. Wir verwenden unsere Funktion `degToRad()`, um 60 Grad in Radianten zu konvertieren, da {{jsxref("Math.tan()")}} ein Eingabewert in Radianten erwartet.

4. Mit der berechneten Höhe ziehen wir eine weitere Linie nach `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss in der Mitte zwischen den vorherigen beiden gesetzten X-Werten liegen. Der Y-Wert hingegen muss 50 plus die Höhe des Dreiecks betragen, da wir wissen, dass die Oberseite des Dreiecks 50 Pixel von der oberen Kante des Canvas entfernt ist.
5. Die nächste Linie zieht eine Linie zurück zum Ausgangspunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form auszufüllen.

#### Kreise zeichnen

Betrachten wir nun, wie man einen Kreis auf dem Canvas zeichnet. Dies wird mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) erreicht, die einen ganzen oder einen Teil eines Kreises an einem bestimmten Punkt zeichnet.

1. Fügen wir ein Arc zu unserem Canvas hinzu — fügen Sie das folgende am Ende Ihres Codes hinzu:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "blue";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` nimmt sechs Parameter entgegen. Die ersten beiden spezifizieren die Position des Mittelpunkts des Bogens (X und Y, jeweils). Der dritte ist der Radius des Kreises, der vierte und fünfte sind der Start- und der Endwinkel, an dem der Kreis gezeichnet werden soll (also ergibt die Angabe von 0 und 360 Grad einen vollständigen Kreis), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn (entgegen der Uhrzeigerrichtung) oder im Uhrzeigersinn gezeichnet werden soll (`false` ist im Uhrzeigersinn).

   > [!NOTE]
   > 0 Grad liegt horizontal nach rechts.

2. Versuchen wir, einen weiteren Bogen hinzuzufügen:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "yellow";
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   Das Muster hier ist sehr ähnlich, allerdings mit zwei Unterschieden:
   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird, was bedeutet, dass selbst wenn der Bogen als Start bei -45 Grad und Ende bei 45 Grad angegeben ist, wir den Bogen um die 270 Grad zeichnen, die nicht innerhalb dieses Abschnitts liegen. Wenn Sie `true` in `false` ändern würden und dann den Code erneut ausführen würden, würde nur der 90-Grad-Schnitt des Kreises gezeichnet werden.
   - Bevor Sie `fill()` aufrufen, zeichnen Sie eine Linie zum Mittelpunkt des Kreises. Das bedeutet, dass wir den ziemlich netten Pac-Man-artigen Ausschnitt gerendert bekommen. Wenn Sie diese Linie entfernen (probieren Sie es aus!) und den Code erneut ausführen würden, würden Sie nur einen Rand des Kreises abgeschnitten zwischen dem Start- und Endpunkt des Bogens bekommen. Dies veranschaulicht einen anderen wichtigen Punkt der Canvas — wenn Sie versuchen, einen unvollständigen Pfad zu füllen (d.h. einen, der nicht geschlossen ist), füllt der Browser eine gerade Linie zwischen dem Start- und Endpunkt aus und füllt ihn dann aus.

Das war's fürs Erste; Ihr endgültiges Beispiel sollte so aussehen:

{{EmbedLiveSample("3_canvas_paths", '100%', 200)}}

Sie können die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

> [!NOTE]
> Um mehr über fortgeschrittene Pfadzeichenfunktionen wie Bézier-Kurven zu erfahren, schauen Sie sich unser [Zeichnen von Formen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)-Tutorial an.

### Text

Canvas verfügt auch über Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz erkunden. Machen Sie eine weitere frische Kopie Ihrer Canvas-Vorlage, um das neue Beispiel darin zu zeichnen.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — Zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — Zeichnet umrandeten (Strich) Text.

Beide nehmen in ihrer Grundverwendung drei Eigenschaften an: die Textzeichenfolge, die gezeichnet werden soll, und die X- und Y-Koordinaten des Punktes, an dem der Text gezeichnet werden soll. Dies ergibt sich als **untere linke Ecke** der **Textbox** (buchstäblich, die Box, die den Text umgibt, den Sie zeichnen), was Sie verwirren könnte, da andere Zeichenoperationen normalerweise an der oberen linken Ecke beginnen — beachten Sie dies.

Es gibt auch eine Reihe von Eigenschaften, um die Textrendering zu steuern, z. B. [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), mit der Sie Schriftfamilie, Größe usw. angeben können. Sie nimmt als Wert die gleiche Syntax wie die CSS-{{cssxref("font")}}-Eigenschaft an.

Canvas-Inhalte sind für Bildschirmleser nicht zugänglich. Text, der auf dem Canvas gemalt wird, ist nicht im DOM vorhanden, muss jedoch zugänglich gemacht werden, um zugänglich zu sein. In diesem Beispiel fügen wir den Text als Wert für `aria-label` hinzu.

Versuchen Sie, den folgenden Block am Ende Ihres JavaScript-Codes hinzuzufügen:

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

Hier zeichnen wir zwei Textzeilen, eine Umrandung und die andere mit Strich. Das Beispiel sollte so aussehen:

{{EmbedLiveSample("4-canvas-text", '100%', 180)}}

Drücken Sie den **Play**-Knopf, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Probieren Sie es aus und sehen Sie, was Sie sich einfallen lassen können! Weitere Informationen zu den für Canvas-Text verfügbaren Optionen finden Sie unter [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Bilder auf Canvas zeichnen

Es ist möglich, externe Bilder auf Ihr Canvas zu rendern. Diese können einfache Bilder, Frames aus Videos oder der Inhalt anderer Canvas sein. Für den Moment betrachten wir nur den Fall, einige einfache Bilder auf unserem Canvas zu verwenden.

1. Erstellen Sie eine weitere frische Kopie Ihrer Canvas-Vorlage, um das neue Beispiel darin zu zeichnen.

   Bilder werden mit der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf den Canvas gezeichnet. Die einfachste Version nimmt drei Parameter an — eine Referenz auf das Bild, das Sie rendern möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Beginnen wir damit, eine Bildquelle zu erhalten, die wir in unserem Canvas einbetten. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript-Codes hinzu:

   ```js live-sample___5-canvas-images
   const image = new Image();
   image.src =
     "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt mit dem Konstruktor [`Image()`](/de/docs/Web/API/HTMLImageElement/Image). Das zurückgegebene Objekt ist vom gleichen Typ wie das, das zurückgegeben wird, wenn Sie eine Referenz auf ein vorhandenes {{htmlelement("img")}}-Element erhalten. Wir setzen dann das [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut auf unser Firefox-Logo-Bild. Zu diesem Zeitpunkt beginnt der Browser, das Bild zu laden.

3. Wir könnten nun versuchen, das Bild mit `drawImage()` einzubetten, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, ansonsten schlägt der Code fehl. Wir können dies erreichen, indem wir das `load`-Ereignis verwenden, das nur ausgelöst wird, wenn das Bild geladen wurde. Fügen Sie den folgenden Block unterhalb des vorherigen hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie das Bild im Canvas eingebettet sehen, wenn auch ziemlich groß.

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
   - Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links des ersten Parameters oder oberhalb des zweiten wird gezeichnet.
   - Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem ursprünglich geladenen Bild ausschneiden möchten.
   - Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Teils des Bildes auf dem Canvas zeichnen möchten, relativ zur oberen linken Ecke des Canvas.
   - Parameter 8 und 9 definieren die Breite und Höhe, um den ausgeschnittenen Bereich des Bildes zu zeichnen. In diesem Fall haben wir die gleichen Dimensionen wie der ursprüngliche Ausschnitt angegeben, aber Sie könnten es durch Angabe unterschiedlicher Werte in der Größe ändern.

5. Wenn das Bild sinnvoll aktualisiert wird, muss auch die Beschreibung aktualisiert werden.

   ```js live-sample___5-canvas-images
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das finale Beispiel sollte so aussehen:

{{EmbedLiveSample("5-canvas-images", '100%', 260)}}

Drücken Sie den **Play**-Knopf, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

## Schleifen und Animationen

Bisher haben wir einige sehr grundlegende Anwendungen von 2D-Canvas behandelt, aber wirklich werden Sie die volle Leistungsfähigkeit von Canvas nicht erleben, wenn Sie es nicht irgendwie aktualisieren oder animieren. Schließlich bietet Canvas skriptfähige Bilder! Wenn Sie nichts ändern, könnten Sie genauso gut statische Bilder verwenden und sich die ganze Arbeit sparen.

### Eine Schleife erstellen

Das Spielen mit Schleifen in Canvas macht ziemlich Spaß — Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)- (oder einer anderen Art von) Schleife ausführen, genau wie bei jedem anderen JavaScript-Code.

Erstellen wir ein Beispiel.

1. Erstellen Sie eine weitere frische Kopie Ihrer Canvas-Vorlage.
2. Fügen Sie die folgende Zeile am Ende Ihres JavaScript-Codes hinzu. Diese enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js live-sample___6-canvas-for-loop
   ctx.translate(width / 2, height / 2);
   ```

   Dadurch wird der Ursprung der Koordinaten (0, 0) in die Mitte des Canvas verschoben, anstatt in die obere linke Ecke. Dies ist in vielen Situationen nützlich, wie in dieser, in der wir möchten, dass unser Design relativ zur Mitte des Canvas gezeichnet wird.

3. Fügen Sie nun den folgenden Code am unteren Ende des JavaScript-Codes hinzu:

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

   Hier implementieren wir dieselbe `degToRad()`-Funktion, die wir oben im Dreieckbeispiel gesehen haben, eine `rand()`-Funktion, die eine Zufallszahl zwischen gegebenen unteren und oberen Grenzen zurückgibt, und die Variablen `length` und `moveOffset` (über die wir später mehr erfahren werden).

4. Die Idee hier ist, dass wir innerhalb der `for`-Schleife etwas auf dem Canvas zeichnen und es jedes Mal iterieren, damit wir etwas Interessantes erstellen können. Fügen Sie den folgenden Code in Ihre `for`-Schleife ein:

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

   In jeder Iteration:
   - Setzen wir `fillStyle` auf einen Farbton von leicht transparentem Violett, der sich jedes Mal basierend auf dem Wert von `length` ändert. Wie Sie später sehen werden, wird die Länge jedes Mal kleiner, wenn die Schleife läuft, sodass der Effekt hier ist, dass die Farbe heller wird, je mehr Dreiecke gezeichnet werden.
   - Beginnen wir den Pfad.
   - Bewegen wir den Stift zu einer Koordinate von `(moveOffset, moveOffset)`. Diese Variable gibt an, wie weit wir uns bewegen möchten, jedes Mal, wenn wir ein neues Dreieck zeichnen.
   - Zeichnen wir eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Dies zeichnet eine Linie der Länge `length` parallel zur X-Achse.
   - Berechnen wir die Höhe des Dreiecks, wie zuvor.
   - Zeichnen wir eine Linie zur nach unten zeigenden Ecke des Dreiecks und dann eine Linie zurück zum Anfang des Dreiecks.
   - Rufen wir `fill()` auf, um das Dreieck zu füllen.
   - Aktualisieren wir die Variablen, die die Sequenz der Dreiecke beschreiben, sodass wir bereit sind, das nächste zu zeichnen. Wir verringern den `length`-Wert um 1, sodass die Dreiecke jedes Mal kleiner werden; erhöhen `moveOffset` um einen kleinen Betrag, damit jedes nachfolgende Dreieck etwas weiter entfernt ist, und verwenden eine weitere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), mit der wir den gesamten Canvas drehen können! Wir drehen ihn um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das war's! Das finale Beispiel sollte so aussehen:

{{EmbedLiveSample("6-canvas-for-loop", '100%', 550)}}

Drücken Sie den **Play**-Knopf, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Wir möchten Sie ermutigen, mit dem Beispiel zu spielen und es zu Ihrem eigenen zu machen! Zum Beispiel:

- Zeichnen Sie Rechtecke oder Kreise anstelle von Dreiecken oder betten Sie sogar Bilder ein.
- Spielen Sie mit den `length`- und `moveOffset`-Werten.
- Führen Sie einige Zufallszahlen ein, indem Sie die `rand()`-Funktion verwenden, die wir oben eingefügt haben, aber noch nicht genutzt haben.

### Animationen

Das Schleifenbeispiel, das wir oben erstellt haben, war unterhaltsam, aber wirklich benötigen Sie eine konstante Schleife, die für ernsthafte Canvas-Anwendungen (wie Spiele und Echtzeit-Visualisierungen) immer wieder läuft. Wenn Sie Ihren Canvas als Film betrachten, möchten Sie wirklich, dass die Anzeige bei jedem Bild aktualisiert wird, um den aktualisierten Anzeigebereich zu zeigen, idealerweise mit einer Bildwiederholrate von 60 Bildern pro Sekunde, damit die Bewegung vor dem menschlichen Auge schön und flüssig erscheint.

Es gibt einige JavaScript-Funktionen, die es Ihnen ermöglichen, Funktionen immer wieder, mehrmals pro Sekunde, auszuführen, wobei [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) die beste für unsere Zwecke hier ist. Sie nimmt einen Parameter — den Namen der Funktion, die Sie für jedes Bild ausführen möchten. Beim nächsten Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion das neue Update Ihrer Animation zeichnet und dann `requestAnimationFrame()` erneut kurz vor dem Ende der Funktion aufruft, läuft die Animationsschleife weiter. Die Schleife endet, wenn Sie aufhören, `requestAnimationFrame()` aufzurufen oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) nach dem Aufrufen von `requestAnimationFrame()` aufrufen, jedoch bevor das Bild aufgerufen wird.

> [!NOTE]
> Es ist eine gute Praxis, `cancelAnimationFrame()` aus Ihrem Hauptcode aufzurufen, wenn Sie mit der Animation fertig sind, um sicherzustellen, dass keine Updates mehr anstehen.

Der Browser kümmert sich um komplexe Details wie das gleichmäßige Laufen der Animation und das Sparen von Ressourcen, indem er Dinge nicht animiert, die nicht gesehen werden können.

Um zu sehen, wie dies funktioniert, werfen wir einen schnellen Blick auf unser [Bouncing Balls-Beispiel](#frame_bouncing-balls). Der Code für die Schleife, die alles in Bewegung hält, sieht so aus:

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

Wir führen die `loop()`-Funktion einmal am Ende des Codes aus, um den Zyklus zu starten, das erste Animationsbild zu zeichnen; die `loop()`-Funktion übernimmt dann das Aufrufen von `requestAnimationFrame(loop)`, um das nächste Animationsbild immer wieder auszuführen.

Beachten Sie, dass wir bei jedem Bild den gesamten Canvas komplett löschen und alles neu zeichnen. Für jede vorhandene Kugel zeichnen wir sie, aktualisieren ihre Position und prüfen, ob sie mit anderen Kugeln kollidiert. Sobald Sie eine Grafik auf ein Canvas gezeichnet haben, gibt es keine Möglichkeit, diese Grafik individuell zu manipulieren, wie Sie es mit DOM-Elementen tun können. Sie können nicht jede Kugel auf dem Canvas bewegen, da sie, sobald sie gezeichnet ist, Teil des Canvas ist und kein einzelnes zugängliches Element oder Objekt ist. Stattdessen müssen Sie löschen und neu zeichnen, entweder indem Sie den gesamten Rahmen löschen und alles neu zeichnen, oder indem Sie einen Code haben, der genau weiß, welche Teile gelöscht werden müssen, und nur die minimale Fläche des Canvas löscht und neu zeichnet.

Die Optimierung von Grafikanimationen ist eine eigene Spezialität des Programmierens mit vielen cleveren Techniken. Das ist jedoch mehr, als wir für unser Beispiel benötigen!

Im Allgemeinen umfasst der Prozess zum Erstellen einer Canvas-Animation die folgenden Schritte:

1. Löschen Sie den Inhalt des Canvas (z. B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Speichern Sie den Zustand (falls erforderlich) mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) — dies ist notwendig, wenn Sie Einstellungen speichern möchten, die Sie auf dem Canvas vor der Fortsetzung aktualisiert haben, was für fortschrittlichere Anwendungen nützlich ist.
3. Zeichnen Sie die Grafiken, die Sie animieren möchten.
4. Stellen Sie die gespeicherten Einstellungen im Schritt 2 mit [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore) wieder her.
5. Rufen Sie `requestAnimationFrame()` auf, um die Zeichnung des nächsten Animationsbildes zu planen.

> [!NOTE]
> Wir werden hier nicht `save()` und `restore()` behandeln, aber sie sind schön in unserem [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations)-Tutorial (und den darauf folgenden) erklärt.

### Walking-Objekt-Animation

Erstellen wir nun unsere eigene einfache Animation — wir animieren ein sich bewegendes Objekt über den Bildschirm mithilfe eines Spritesheets.

1. Machen Sie eine weitere frische Kopie unserer Canvas-Vorlage und öffnen Sie sie in Ihrem Code-Editor.

2. Aktualisieren Sie den alternativen HTML-Inhalt, um das Bild widerzuspiegeln:

   ```html live-sample___7-canvas-walking-animation
   <canvas class="myCanvas">
     <p>A cat walking.</p>
   </canvas>
   ```

3. Dieses Mal werden wir den Hintergrund nicht schwarz färben. Bemalen Sie anstelle dessen nach dem Abrufen der `ctx`-Variablen den Hintergrund hellgrau:

   ```js live-sample___7-canvas-walking-animation
   ctx.fillStyle = "#e5e6e9";
   ctx.fillRect(0, 0, width, height);
   ```

4. Fügen Sie am Ende des JavaScript folgende Zeile hinzu, um den Koordinaten-Ursprungset erneut in die Mitte des Canvas zu legen:

   ```js live-sample___7-canvas-walking-animation
   ctx.translate(width / 2, height / 2);
   ```

5. Erstellen wir nun ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, setzen dessen [`src`](/de/docs/Web/API/HTMLImageElement/src) auf das Bild, das wir laden möchten, und fügen einen `onload`-Ereignishandler hinzu, der die `draw()`-Funktion auslöst, wenn das Bild geladen ist:

   ```js live-sample___7-canvas-walking-animation
   const image = new Image();
   image.src =
     "https://developer.mozilla.org/shared-assets/images/examples/web-animations/cat_sprite.png";
   image.onload = draw;
   ```

6. Fügen Sie nun einige Variablen hinzu, um die Position zu verfolgen, an der das Sprite auf dem Bildschirm gezeichnet werden soll, und das Sprite, das wir anzeigen möchten.

   ```js live-sample___7-canvas-walking-animation
   let spriteIndex = 0;
   let posX = 0;
   const spriteWidth = 300;
   const spriteHeight = 150;
   const totalSprites = 12;
   ```

   Das Sprite-Bild wurde von und wird freundlicherweise von [Rachel Nabors](https://nearestnabors.com/) bereitgestellt, für ihre Dokumentationsarbeit zur [Web-Animations-API](/de/docs/Web/API/Web_Animations_API). Es sieht so aus:

   ![Ein Sprite-Sheet mit drei Spalten, jede Spalte enthält eine Sequenz von Bildern einer schwarzen Katze, die sich mit unterschiedlichem Tempo nach links bewegt. Jedes Sprite ist 300 Pixel breit und 150 Pixel hoch.](/shared-assets/images/examples/web-animations/cat_sprite.png)

   Es hat drei Spalten. Jede Spalte ist eine Sequenz, die die Katze darstellt, die sich mit unterschiedlichem Tempo bewegt (gehen, traben, und galoppieren). Jede Sequenz enthält entweder 12 oder 13 Sprites — jedes ist 300 Pixel breit und 150 Pixel hoch. Wir werden die ganz links befindliche Laufsequenz verwenden, die 12 Sprites enthält. Um jedes Sprite sauber anzuzeigen, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild aus dem Spritesheet auszuschneiden und nur diesen Teil anzuzeigen, wie wir es oben mit dem Firefox-Logo getan haben. Die X- und Y-Koordinaten des Ausschnitts müssen ein Vielfaches von `spriteWidth` und `spriteHeight` sein, da wir die links seitliche Sequenz verwenden, ist die X-Koordinate immer 0. Die Ausschnittgröße entspricht immer `spriteWidth` mal `spriteHeight`.

7. Fügen wir nun eine leere `draw()`-Funktion am Ende des Codes ein, die bereit ist, mit etwas Code gefüllt zu werden:

   ```js
   function draw() {}
   ```

   ```js-nolint hidden live-sample___7-canvas-walking-animation
   function draw() {
   ```

8. Der Rest des Codes in diesem Abschnitt geht in `draw()`. Zuerst fügen Sie die folgende Zeile hinzu, die das Canvas löscht, um jedes Bild vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width / 2), -(height / 2)` angeben müssen, da wir zuvor den Ursprung als `width/2, height/2` angegeben haben.

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

   Wie Sie sehen:
   - Wir geben `image` als das Bild an, das eingebettet werden soll.
   - Parameter 2 und 3 geben die obere linke Ecke des ausgeschnittenen Teils aus dem Quellbild an, mit dem X-Wert als 0 (für die linksseitige Spalte) und dem Y-Wert, der durch ein Vielfaches von `spriteHeight` wechselt. Sie können den X-Wert mit `spriteWidth` oder `2 * spriteWidth` ersetzen, um die anderen Spalten auszuwählen.
   - Parameter 4 und 5 geben die Größe des aus dem ursprünglich geladenen Bild ausgeschnittenen Ausschnitts an — `spriteWidth` und `spriteHeight`.
   - Parameter 6 und 7 geben die obere linke Ecke der Box an, in die der Ausschnitt auf dem Canvas gezeichnet werden soll — die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichenposition durch Ändern des `posX`-Werts ändern können. Die Y-Position ist `-spriteHeight / 2`, was bedeutet, dass das Bild vertikal zentriert auf dem Canvas sein wird.
   - Parameter 8 und 9 geben die Größe des Bildes auf dem Canvas an. Wir möchten einfach seine ursprüngliche Größe beibehalten, sodass wir `spriteWidth` und `spriteHeight` als Breite und Höhe angeben.

10. Ändern wir nun den `spriteIndex`-Wert nach jeder Zeichnung — naja, zumindest nach einigen von ihnen. Fügen Sie folgenden Block am Ende der `draw()`-Funktion hinzu:

    ```js live-sample___7-canvas-walking-animation
    if (posX % 11 === 0) {
      if (spriteIndex === totalSprites - 1) {
        spriteIndex = 0;
      } else {
        spriteIndex++;
      }
    }
    ```

    Wir fassen den gesamten Block in `if (posX % 11 === 0) { }` zusammen. Wir verwenden den Modulo (`%`)-Operator (auch bekannt als [Restoperator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu überprüfen, ob der `posX`-Wert durch 11 genau teilbar ist, ohne einen Rest. Ist dies der Fall, wechseln wir zum nächsten Sprite, indem wir den `spriteIndex` inkrementieren (zurück auf 0 gehen, wenn wir mit dem letzten fertig sind). Dies bedeutet effektiv, dass wir das Sprite alle 11 Bilder, also etwa 6 Bilder pro Sekunde (`requestAnimationFrame()` ruft uns bis zu 60 Bilder pro Sekunde, wenn möglich, auf) aktualisieren. Wir verlangsamen bewusst die Bildrate, da wir nur 12 Sprites zur Verfügung haben, und wenn wir eines alle 60 Sekunden zeigen, bewegt sich unser Objekt viel zu schnell!

    Innerhalb des äußeren Blocks verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob der `spriteIndex`-Wert am letzten ist. Wenn wir das letzte Sprite bereits anzeigen, setzen wir `spriteIndex` wieder auf 0; wenn nicht, erhöhen wir es einfach um 1.

11. Als nächstes müssen wir herausfinden, wie wir den `posX`-Wert in jedem Bild ändern — fügen Sie den folgenden Codeblock direkt unter Ihrem letzten ein.

    ```js live-sample___7-canvas-walking-animation
    if (posX < -width / 2 - spriteWidth) {
      const newStartPos = width / 2;
      posX = Math.ceil(newStartPos);
    } else {
      posX -= 2;
    }
    ```

    Wir verwenden eine weitere `if...else`-Anweisung, um zu überprüfen, ob der Wert von `posX` kleiner geworden ist als `-width/2 - spriteWidth`, was bedeutet, dass unsere Katze den linken Rand des Bildschirms verlassen hat. Wenn ja, berechnen wir eine Position, die die Katze gerade rechts des rechten Bildschirms positionieren würde.

    Wenn unsere Katze noch nicht den Rand des Bildschirms verlassen hat, verringern wir `posX` um 2. Damit wird sie beim nächsten Mal, wenn wir sie zeichnen, ein wenig nach links verschoben.

12. Schließlich müssen wir die Animationsschleife durch den Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am unteren Ende der `draw()`-Funktion weiterlaufen lassen:

    ```js live-sample___7-canvas-walking-animation
    window.requestAnimationFrame(draw);
    ```

```js-nolint hidden live-sample___7-canvas-walking-animation
}
```

Das war's! Das finale Beispiel sollte so aussehen:

{{EmbedLiveSample("7-canvas-walking-animation", '100%', 260)}}

Sie können den **Play**-Knopf drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Eine einfache Zeichenanwendung

Als letztes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben (wie Mausbewegungen, in diesem Fall) kombiniert werden kann. Wir gehen nicht Schritt für Schritt mit Ihnen durch und erstellen diese, sondern werden nur die interessantesten Teile des Codes untersuchen.

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

Sie können unten das Beispiel live ausprobieren; Sie können auch auf den **Play**-Knopf klicken, um es im MDN Playground zu öffnen, wo Sie den Quellcode bearbeiten können:

{{EmbedLiveSample("8-canvas-drawing-app", '100%', 600)}}

Schauen wir uns die interessantesten Teile an. Zuerst einmal verfolgen wir die X- und Y-Koordinaten der Maus und ob sie gedrückt wird oder nicht mit drei Variablen: `curX`, `curY` und `pressed`. Wenn sich die Maus bewegt, lösen wir eine Funktion aus, die als `onmousemove`-Ereignis-Handler festgelegt ist, die die aktuellen X- und Y-Werte erfasst. Wir verwenden auch `onmousedown`- und `onmouseup`-Ereignis-Handler, um den Wert von `pressed` auf `true` zu ändern, wenn die Maustaste gedrückt wird, und zurück auf `false`, wenn sie losgelassen wird.

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

Wenn der "Canvas löschen"-Knopf gedrückt wird, führen wir eine einfache Funktion aus, die den gesamten Canvas zurück auf schwarz setzt, auf dieselbe Weise, wie wir es bereits gesehen haben:

```js live-sample___8-canvas-drawing-app
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal ziemlich einfach — wenn gedrückt `true` ist, zeichnen wir einen Kreis mit einer Füllfarbe, die dem Wert im Farbwähler entspricht, und einem Radius, der dem im Bereichseingabefeld angegebenen Wert entspricht. Wir müssen den Kreis 85 Pixel über der Stelle zeichnen, wo wir ihn gemessen haben, da die vertikale Messung vom oberen Rand des Viewports aus erfolgt, wir den Kreis aber relativ zum oberen Rand des Canvas zeichnen, der unterhalb der 85 Pixel hohen Toolbar beginnt. Wenn wir ihn nur mit `curY` als y-Koordinate zeichnen würden, würde er 85 Pixel unterhalb der Mausposition erscheinen.

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

Alle {{htmlelement("input")}}-Typen werden gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, fällt er auf ein einfaches Textfeld zurück.

## WebGL

Es ist nun an der Zeit, uns von 2D zu verabschieden und einen schnellen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalte werden mit der [WebGL-API](/de/docs/Web/API/WebGL_API) spezifiziert, die komplett von der 2D-Canvas-API getrennt ist, obwohl sie beide auf {{htmlelement("canvas")}}-Elemente rendern.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht die direkte Kommunikation mit dem {{Glossary("GPU", "GPU")}} des Computers. Da das Schreiben von Raw WebGL eher einfachen Programmiersprachen wie C++ als regulärem JavaScript ähnelt, ist es ziemlich komplex, aber unglaublich leistungsstark.

### Verwendung einer Bibliothek

Aufgrund seiner Komplexität schreiben die meisten Menschen 3D-Grafik-Code mithilfe einer JavaScript-Bibliothek eines Drittanbieters wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten dieser Bibliotheken funktionieren ähnlich, bieten Funktionen zum Erstellen von primitiven und benutzerdefinierten Formen, Positionieren von Kameras und Beleuchtung, Überziehen von Oberflächen mit Texturen und mehr. Sie kümmern sich um das WebGL für Sie, damit Sie auf einer höheren Ebene arbeiten können.

Ja, die Verwendung einer dieser bedeutet, dass Sie eine weitere neue API (diesmal eine von Drittanbietern) lernen müssen, aber sie sind viel einfacher als reines WebGL-Programmieren.

### Ein rotierender Würfel

Werfen wir einen Blick darauf, wie man mit einer WebGL-Bibliothek etwas erstellt. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der beliebtesten ist. In diesem Tutorial werden wir einen 3D-rotierenden Würfel erstellen.

1. Um zu beginnen, erstellen Sie auf Ihrer lokalen Festplatte ein neues Verzeichnis mit dem Namen `webgl-cube`.
2. Erstellen Sie in diesem Verzeichnis eine neue Datei mit dem Namen `index.html` und fügen Sie den folgenden Inhalt hinzu:

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

3. Erstellen Sie als nächstes eine weitere neue Datei mit dem Namen `script.js`, wiederum im selben Verzeichnis. Lassen Sie diese Datei vorerst leer.
4. Erstellen Sie nun eine weitere neue Datei namens `style.css`, ebenfalls im gleichen Verzeichnis, und fügen Sie den folgenden Inhalt hinzu:

   ```css live-sample___9-webgl-cube
   html,
   body {
     margin: 0;
   }

   body {
     overflow: hidden;
   }
   ```

5. Wir haben `three.js` in unsere Seite integriert (dies ist das, was das erste `<script>`-Element in unserem HTML tut), also können wir nun JavaScript in `script.js` schreiben, das dieses verwendet. Lassen Sie uns damit beginnen, eine neue Szene zu erstellen — fügen Sie das folgende in Ihre `script.js`-Datei ein:

   ```js live-sample___9-webgl-cube
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene)-Konstruktor erstellt eine neue Szene, die die gesamte 3D-Welt darstellt, die wir anzeigen möchten.

6. Als nächstes benötigen wir eine **Kamera**, damit wir die Szene sehen können. In der 3D-Bildverarbeitung stellt die Kamera die Position des Betrachters in der Welt dar. Um eine Kamera zu erstellen, fügen Sie die folgenden Zeilen als nächstes hinzu:

   ```js live-sample___9-webgl-cube
   const camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000,
   );
   camera.position.z = 5;
   ```

   Der [`PerspectiveCamera()`](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera)-Konstruktor nimmt vier Argumente entgegen:
   - Das Sichtfeld: Wie breit der Bereich vor der Kamera ist, der auf dem Bildschirm sichtbar sein sollte, in Grad.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Normalerweise ist dies das Verhältnis der Breite der Szene durch die Höhe der Szene. Die Verwendung eines anderen Wertes verzerrt die Szene (was gewünscht sein kann, aber normalerweise nicht).
   - Die Nahschnittfläche: Wie nahe Gegenstände an die Kamera sein können, bevor wir aufhören, sie auf den Bildschirm zu rendern. Denken Sie daran, wie Sie Ihre Fingerspitze näher und näher zwischen Ihre Augen bringen, bis Sie sie irgendwann nicht mehr sehen können.
   - Die Fernschnittfläche: Wie weit entfernt Gegenstände von der Kamera entfernt sein können, bevor sie nicht mehr gerendert werden.

   Wir setzen auch die Position der Kamera auf 5 Einheiten auf der Z-Achse, die, wie in CSS, aus dem Bildschirm heraus in Richtung Ihnen, dem Betrachter, geht.

7. Die dritte wesentliche Zutat ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene, wie sie durch eine gegebene Kamera betrachtet wird, rendert. Wir erstellen jetzt einen mit dem [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)-Konstruktor, verwenden ihn jedoch erst später. Fügen Sie die folgenden Zeilen als nächstes hinzu:

   ```js live-sample___9-webgl-cube
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile setzt die Größe, mit der der Renderer das Kamerabild zeichnen wird, und die dritte Zeile fügt das vom Renderer erstellte {{htmlelement("canvas")}}-Element an das Dokument's {{htmlelement("body")}} an. Nun wird alles, was der Renderer zeichnet, in unserem Fenster angezeigt.

8. Als nächstes möchten wir den Würfel erstellen, den wir auf dem Canvas anzeigen. Fügen Sie den folgenden Codeblock am Ende Ihres JavaScript-Codes hinzu:

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

   Es gibt hier einiges mehr zu verarbeiten, also gehen wir es in Etappen durch:
   - Zunächst erstellen wir eine `cube` globale Variable, sodass wir in unserem Code überall auf unseren Würfel zugreifen können.
   - Als nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt und rufen `load()` darauf auf. `load()` nimmt in diesem Fall zwei Parameter an (obwohl es mehr annehmen kann): die Textur, die wir laden möchten (eine PNG-Datei), und eine Funktion, die ausgeführt wird, wenn die Textur geladen wurde.
   - Innerhalb dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um anzugeben, dass wir eine 2 x 2 Wiederholung des Bildes um alle Seiten des Würfels gewickelt haben möchten. Danach erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt und fügen sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) zusammen, um unseren Würfel zu erstellen. Ein Objekt benötigt normalerweise eine Geometrie (welche Form es hat) und ein Material (wie seine Oberfläche aussieht).
   - Zuletzt fügen wir unseren Würfel zur Szene hinzu und rufen dann unsere `draw()`-Funktion auf, um die Animation zu starten.

9. Bevor wir `draw()` definieren, fügen wir ein paar Lichter zur Szene hinzu, um sie ein bisschen lebendiger zu machen; fügen Sie die folgenden Blöcke als nächstes hinzu:

   ```js live-sample___9-webgl-cube
   const light = new THREE.AmbientLight("white"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("white");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art weiches Licht, das die gesamte Szene ein wenig beleuchtet, wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt hingegen ist ein gerichteter Lichtstrahl, mehr wie eine Taschenlampe (oder ein Scheinwerfer, in der Tat).

10. Zuletzt, fügen wir unsere `draw()`-Funktion am Ende des Codes hinzu:

    ```js live-sample___9-webgl-cube
    function draw() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);

      requestAnimationFrame(draw);
    }
    ```

    Dies ist ziemlich intuitiv; bei jedem Bild drehen wir unseren Würfel leicht auf seinen X- und Y-Achsen, dann rendert die Szene so, wie sie von unserer Kamera betrachtet wird, und schließlich rufen wir `requestAnimationFrame()` auf, um das Zeichnen unseres nächsten Bildes einzuplanen.

Das fertige Produkt sollte so aussehen:

{{EmbedLiveSample("9-webgl-cube", "100%", 500)}}

> [!NOTE]
> In unserem GitHub-Repository finden Sie auch ein weiteres interessantes 3D-Würfelbeispiel — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dies nutzt [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Computer-Webcam zu entnehmen und ihn als Textur auf die Seite des Würfels zu projizieren!

## Zusammenfassung

An dieser Stelle sollten Sie eine nützliche Vorstellung von den Grundlagen der Grafikprogrammierung mit Canvas und WebGL haben und was Sie mit diesen APIs anfangen können, sowie eine gute Vorstellung davon, wohin Sie für weitere Informationen gehen können. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklichen Grundlagen von Canvas abgedeckt — es gibt noch so viel mehr zu lernen! Die unten stehenden Artikel werden Ihnen dabei helfen.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorial-Serie, die erklärt, was Sie über 2D-Canvas wissen sollten, in viel mehr Details als hier behandelt wurde. Essentielle Lektüre.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Serie, die die Grundlagen der Raw-WebGL-Programmierung lehrt.
- [Aufbau einer grundlegenden Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — Einfaches Three.js-Tutorial. Wir haben auch gleichwertige Leitfäden für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spielentwicklung](/de/docs/Games) — Die Startseite für die Entwicklung von Webspielen auf MDN. Dort gibt es wirklich nützliche Tutorials und Techniken in Bezug auf 2D- und 3D-Canvas — siehe die Optionen Techniken und Tutorials im Menü.

## Beispiele

- [Violent theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API, um Klang zu erzeugen und Canvas, um eine hübsche Visualisierung dazu zu generieren.
- [Voice change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas zur Visualisierung von Echtzeit-Audiodaten von der Web Audio API.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
