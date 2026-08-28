---
title: Grafiken zeichnen
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: cf880ca0ef5fd518f7fdc716220488647ac83eee
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsfähige Grafikprogrammiertools, von der Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) Sprache bis zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in Canvas und weitere Ressourcen, um Ihnen das Lernen zu erleichtern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und Kern-API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
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

Das Web war ursprünglich nur Text, was sehr langweilig war, also wurden Bilder eingeführt — zuerst durch das {{htmlelement("img")}}-Element und später durch CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Dies war jedoch immer noch nicht genug. Während Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden konnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) — da sie durch Markup dargestellt werden — gab es immer noch keine Möglichkeit, dasselbe für Bitmap-Bilder zu tun, und die verfügbaren Tools waren ziemlich begrenzt. Das Web hatte noch keine Möglichkeit, effektiv Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die üblicherweise von niedrigstufigen Sprachen wie C++ oder Java behandelt werden.

Die Situation begann sich zu verbessern, als Browser 2004 damit begannen, das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) zu unterstützen. Wie Sie unten sehen werden, bietet Canvas einige nützliche Werkzeuge zum Erstellen von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere wenn es mit einigen der anderen APIs, die die Webplattform bietet, kombiniert wird. Es kann jedoch schwierig oder unmöglich sein, es zugänglich zu machen.

Das folgende Beispiel zeigt eine einfache 2D-Canvas-basierte Animation von springenden Bällen, die wir ursprünglich in unserem Modul [Introducing JavaScript objects](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) kennengelernt haben:

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

Um 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Dies wurde zu [WebGL](/de/docs/Web/API/WebGL_API), welches bei Browseranbietern an Fahrt gewann und um 2009–2010 standardisiert wurde. WebGL ermöglicht es Ihnen, echte 3D-Grafiken in Ihrem Webbrowser zu erstellen.

Dieser Artikel wird sich hauptsächlich auf 2D-Canvas konzentrieren, da roher WebGL-Code sehr komplex ist. Wir werden jedoch zeigen, wie man [eine WebGL-Bibliothek verwendet, um eine 3D-Szene einfacher zu erstellen](#webgl), und Sie können ein Tutorial über rohes WebGL woanders finden — siehe [Getting started with WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Erste Schritte mit einem \<canvas>

Wenn Sie eine 2D- _oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML {{htmlelement("canvas")}}-Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Dies ist so einfach wie das Einfügen des Elements auf der Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dies erstellt ein Canvas auf der Seite mit einer Größe von 320 mal 240 Pixeln.

Sie sollten einige Fallback-Inhalte innerhalb der `<canvas>`-Tags platzieren. Diese sollten den Canvas-Inhalt für Benutzer von Browsern, die Canvas nicht unterstützen, oder für Benutzer von Bildschirmlesegeräten beschreiben.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Der Fallback-Inhalt sollte eine nützliche Alternative zum Canvas-Inhalt bieten. Zum Beispiel, wenn Sie einen ständig aktualisierten Graphen von Aktienkursen rendern, könnte der Fallback-Inhalt ein statisches Bild des neuesten Aktiencharts sein, mit `alt`-Text, der angibt, was die Preise sind, oder eine Liste von Links zu einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalt ist für Bildschirmlesegeräte nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attributs direkt auf dem Canvas-Element hinzu oder fügen Sie Fallback-Inhalte innerhalb der öffnenden und schließenden `<canvas>`-Tags hinzu. Canvas-Inhalt ist nicht Teil des DOM, aber verschachtelte Fallback-Inhalte schon.

### Erstellung und Größenänderung unseres Canvas

Lassen Sie uns beginnen, indem wir eine eigene Canvas-Vorlage erstellen, um zukünftige Experimente damit zu erstellen.

1. Erstellen Sie zuerst ein Verzeichnis auf Ihrer lokalen Festplatte namens `canvas-template`.
2. Erstellen Sie eine neue Datei im Verzeichnis namens `index.html` und speichern Sie den folgenden Inhalt darin:

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

5. Öffnen Sie nun `script.js` und fügen Sie die folgenden Zeilen JavaScript hinzu:

   ```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir einen Verweis auf das Canvas in der `canvas`-Konstante gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas gleich den Wert von [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Ansichtsfensterbreite gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas gleich den Wert von [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Ansichtsfensterhöhe gibt). So haben wir jetzt ein Canvas, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden auch sehen, dass wir Zuweisungen mit mehreren Gleichheitszeichen verketten — das ist in JavaScript erlaubt, und eine gute Technik, wenn Sie mehrere Variablen auf den gleichen Wert setzen wollen. Wir wollten die Breite und Höhe des Canvas in den `width`/`height`-Variablen leicht zugänglich machen, da sie nützliche Werte sind, die später verwendet werden können (zum Beispiel, wenn Sie etwas genau auf halber Breite des Canvas zeichnen möchten).

> [!NOTE]
> Sie sollten die Größe des Canvas im Allgemeinen mit HTML-Attributen oder DOM-Eigenschaften festlegen, wie oben erklärt. Sie könnten CSS verwenden, aber das Problem ist dann, dass die Größenänderung nach dem Rendern des Canvas erfolgt, und wie jedes andere Bild könnte das Canvas pixelig/verzerrt werden.

### Den Canvas-Kontext erhalten und letzte Einrichtung

Wir müssen eine letzte Sache tun, bevor wir unsere Canvas-Vorlage als fertig betrachten können. Um auf den Canvas zu zeichnen, müssen wir einen speziellen Verweis auf den Zeichenbereich erhalten, der Kontext genannt wird. Dies wird mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) gemacht, die für die grundlegende Verwendung eine einzige Zeichenkette als Parameter empfängt, die den Typ des gewünschten Kontexts repräsentiert.

In diesem Fall möchten wir ein 2D-Canvas, also fügen Sie die folgende JavaScript-Zeile unter den anderen in `script.js` hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextwerte, die Sie wählen könnten, enthalten `webgl` für WebGL, `webgpu` für WebGPU usw., aber diese werden wir in diesem Artikel nicht benötigen.

Das war's — unser Canvas ist nun bereit zum Zeichnen! Die `ctx`-Variable enthält nun ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, und alle Zeichenoperationen auf dem Canvas umfassen das Manipulieren dieses Objekts.

Lassen Sie uns eine letzte Sache tun, bevor wir weitermachen. Wir färben den Canvas-Hintergrund schwarz, um Ihnen einen ersten Eindruck von der Canvas-API zu geben. Fügen Sie am Ende Ihres JavaScript-Codes die folgenden Zeilen hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop
ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mit der [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)-Eigenschaft des Canvas (dieser nimmt [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) an, genau wie CSS-Eigenschaften), dann zeichnen wir ein Rechteck, das den gesamten Bereich des Canvas mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) abdeckt (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, die Sie für das Rechteck wünschen — wie wir Ihnen sagten, wären diese `width`- und `height`-Variablen nützlich!).

Okay, unsere Vorlage ist fertig, und es ist an der Zeit, weiterzumachen.

## 2D-Canvas-Grundlagen

Wie wir oben gesagt haben, werden alle Zeichenoperationen durch die Manipulation eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts durchgeführt (in unserem Fall `ctx`). Viele Operationen benötigen Koordinaten, um genau zu bestimmen, wo etwas gezeichnet werden soll — die obere linke Ecke des Canvas ist der Punkt (0, 0), die horizontale (x) Achse verläuft von links nach rechts, und die vertikale (y) Achse verläuft von oben nach unten.

![Gitterpapier mit kleinen Quadraten, die seine Fläche bedecken, mit einem stahlblauen Quadrat in der Mitte. Die obere linke Ecke des Canvas ist der Punkt (0, 0) der x-Achse und der y-Achse. Die horizontale (x) Achse verläuft von links nach rechts und bezeichnet die Breite, während die vertikale (y) Achse von oben nach unten verläuft und die Höhe bezeichnet. Die obere linke Ecke des blauen Quadrats ist als eine Entfernung von x Einheiten von der y-Achse und y Einheiten von der x-Achse markiert.](canvas_default_grid.png)

Das Zeichnen von Formen wird meistens mit dem Rechteck-Primitiven gemacht oder indem man eine Linie entlang eines bestimmten Pfads zieht und die Form dann füllt. Unten zeigen wir, wie Sie beides machen können.

### Einfache Rechtecke

Lassen Sie uns mit ein paar einfachen Rechtecken beginnen.

1. Machen Sie zunächst eine Kopie Ihres neu erstellten Canvas-Template-Verzeichnisses.
2. Fügen Sie die folgenden Zeilen am Ende Ihrer JavaScript-Datei hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "red";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie Ihr HTML im Browser laden, sollte ein rotes Rechteck auf Ihrem Canvas erscheinen. Seine obere linke Ecke ist 50 Pixel vom oberen und linken Rand des Canvas entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch den dritten und vierten Parameter definiert).

3. Lassen Sie uns ein weiteres Rechteck hinzufügen — diesmal ein grünes. Fügen Sie das folgende am Ende Ihres JavaScript-Codes hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "green";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren Sie die Seite, und Sie werden Ihr neues Rechteck sehen. Dies wirft einen wichtigen Punkt auf: Grafikoperationen wie das Zeichnen von Rechtecken, Linien und so weiter werden in der Reihenfolge ausgeführt, in der sie auftreten. Denken Sie daran, dass es wie das Streichen einer Wand ist, bei dem jede Farbschicht die darunter liegende überlappt und möglicherweise sogar verdeckt. Sie können nichts daran ändern, also müssen Sie sorgfältig über die Reihenfolge nachdenken, in der Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, zum Beispiel indem Sie `rgb()` verwenden. Der "Alpha-Kanal" definiert die Menge an Transparenz, die die Farbe hat. Je höher der Wert, desto mehr wird er das, was dahinter liegt, verdecken. Fügen Sie das folgende zu Ihrem Code hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, einige weitere Rechtecke Ihrer Wahl zu zeichnen; haben Sie Spaß dabei!

### Konturen und Linienbreiten

Bisher haben wir uns das Zeichnen von gefüllten Rechtecken angesehen, aber Sie können auch Rechtecke zeichnen, die nur Umrisse (in der Grafikdesign-Terminologie **Konturen** genannt) sind. Um die Farbe festzusetzen, die Sie für Ihre Kontur verwenden möchten, verwenden Sie die [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)-Eigenschaft; das Zeichnen eines Konturrechtecks erfolgt mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Fügen Sie das folgende zum vorherigen Beispiel hinzu, wieder unterhalb der vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "white";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Konturen beträgt 1 Pixel; Sie können den Wert der [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)-Eigenschaft anpassen, um dies zu ändern (sie nimmt eine Zahl an, die die Anzahl der Pixel angibt, über die die Kontur breit ist). Fügen Sie die folgende Zeile zwischen den vorherigen beiden Zeilen hinzu:

   ```js
   ctx.lineWidth = 5;
   ```

Nun sollten Sie sehen, dass Ihre weiße Umrandung viel dicker geworden ist! Das war's vorerst. An diesem Punkt sollte Ihr Beispiel so aussehen:

```js hidden live-sample___2-canvas-rectangles
ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);
```

{{EmbedLiveSample("2-canvas-rectangles", '100%', 250)}}

Sie können auf die **Play**-Schaltfläche drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Pfade zeichnen

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Grundsätzlich bedeutet das, dass Sie Code schreiben müssen, um genau festzulegen, welchen Pfad der Stift auf Ihrem Canvas entlang gehen soll, um die Form, die Sie zeichnen möchten, nachzuzeichnen. Canvas enthält Funktionen zum Zeichnen von geraden Linien, Kreisen, Bézierkurven und mehr.

Beginnen Sie den Abschnitt damit, eine frische Kopie Ihrer Canvas-Vorlage zu erstellen, in der Sie das neue Beispiel zeichnen werden.

Wir werden einige allgemeine Methoden und Eigenschaften über alle folgenden Abschnitte hinweg verwenden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — Beginnt, einen Pfad an dem Punkt zu zeichnen, an dem sich der Stift gerade auf dem Canvas befindet. Auf einer neuen Leinwand startet der Stift bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — Bewegt den Stift zu einem anderen Punkt auf dem Canvas, ohne die Linie aufzuzeichnen oder zu zeichnen; der Stift "springt" zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — Zeichnet eine gefüllte Form, indem der bisher nachgezeichnete Pfad gefüllt wird.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — Zeichnet eine Umrissform, indem eine Kontur entlang des bisher gezeichneten Pfades gezeichnet wird.
- Eigenschaften wie `lineWidth` und `fillStyle`/`strokeStyle` können sowohl mit Pfaden als auch mit Rechtecken verwendet werden.

Eine typische, einfache Pfad-Zeichenoperation würde folgendermaßen aussehen:

```js
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Linien zeichnen

Lassen Sie uns ein gleichseitiges Dreieck auf dem Canvas zeichnen.

1. Zuerst fügen Sie die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Diese konvertiert Gradwerte in Radianten, was nützlich ist, da, wann immer Sie in JavaScript einen Winkelwert angeben müssen, dieser fast immer in Radianten sein wird, aber Menschen normalerweise in Grad denken.

   ```js live-sample___3_canvas_paths
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Als nächstes starten Sie Ihren Pfad, indem Sie das folgende unter Ihrem vorherigen Zusatz einfügen; hier setzen wir eine Farbe für unser Dreieck, beginnen, einen Pfad zu zeichnen, und bewegen dann den Stift zu (50, 50), ohne etwas zu zeichnen. Das ist dort, wo wir beginnen werden, unser Dreieck zu zeichnen.

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

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks, indem wir ein wenig einfache Trigonometrie verwenden. Grundsätzlich zeichnen wir das Dreieck nach unten zeigend. Die Winkel in einem gleichseitigen Dreieck sind immer 60 Grad; um die Höhe herauszufinden, können wir es in der Mitte in zwei rechtwinklige Dreiecke unterteilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben werden. In Bezug auf die Seiten:
   - Die längste Seite wird als **Hypotenuse** bezeichnet
   - Die Seite neben dem 60-Grad-Winkel wird als **angrenzend** bezeichnet — die wir als 50 Pixel kennen, da sie die Hälfte der Linie ist, die wir gerade gezogen haben.
   - Die Seite gegenüber dem 60-Grad-Winkel wird als **gegenüberliegend** bezeichnet, die die Höhe des Dreiecks ist, das wir berechnen möchten.

   ![Ein gleichseitiges Dreieck, das nach unten zeigt, mit markierten Winkeln und Seiten. Die horizontale Linie an der Spitze ist als 'angrenzend' markiert. Eine senkrechte gestrichelte Linie von der Mitte der angrenzenden Linie, bezeichnet als 'gegenüberliegend', teilt das Dreieck und bildet zwei gleiche rechtwinklige Dreiecke. Die rechte Seite des Dreiecks ist als Hypotenuse gekennzeichnet, da sie die Hypotenuse des rechtwinkligen Dreiecks ist, das durch die Linie 'opposite' gebildet wird. Während alle drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des rechtwinkligen Dreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass die Länge des Angrenzenden multipliziert mit dem Tangens des Winkels gleich dem Gegenüberliegenden ist, daher kommen wir auf `50 * Math.tan(degToRad(60))`. Wir verwenden unsere `degToRad()`-Funktion, um 60 Grad in Radianten umzuwandeln, da {{jsxref("Math.tan()")}} einen Eingabewert in Radianten erwartet.

4. Mit der berechneten Höhe zeichnen wir eine weitere Linie zu `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss genau zwischen den vorherigen beiden X-Werten liegen. Der Y-Wert andererseits muss 50 plus die Höhe des Dreiecks sein, da wir wissen, dass die Oberseite des Dreiecks 50 Pixel von der Oberseite des Canvas entfernt ist.
5. Die nächste Linie zieht eine Linie zurück zum Startpunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form zu füllen.

#### Kreise zeichnen

Lassen Sie uns nun betrachten, wie man einen Kreis in Canvas zeichnet. Dies wird mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) erreicht, welche den gesamten oder einen Teil eines Kreises an einem angegebenen Punkt zeichnet.

1. Lassen Sie uns einen Bogen zu unserem Canvas hinzufügen — fügen Sie das folgende am Ende Ihres Codes hinzu:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "blue";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` nimmt sechs Parameter. Die ersten beiden spezifizieren die Position des Mittelpunkts des Bogens (X und Y, jeweils). Der dritte ist der Radius des Kreises, der vierte und fünfte sind der Start- und Endwinkel, bei dem der Kreis gezeichnet werden soll (wenn man also 0 und 360 Grad angibt, erhalten wir einen vollständigen Kreis), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn oder im Uhrzeigersinn gezeichnet werden soll (`false` steht für im Uhrzeigersinn).

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
   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird, was bedeutet, dass, obwohl der Bogen als Beginn bei -45 Grad und Ende bei 45 Grad angegeben ist, wir den Bogen rund um die 270 Grad und nicht innerhalb dieses Abschnitts zeichnen. Wenn Sie `true` durch `false` ersetzen und den Code erneut ausführen würden, würde nur der 90-Grad-Abschnitt des Kreises gezeichnet werden.
   - Vor dem Aufrufen von `fill()` zeichnen wir eine Linie zum Mittelpunkt des Kreises. Das bedeutet, dass der stilvolle Pac-Man-ähnliche Ausschnitt gerendert wird. Wenn Sie diese Linie entfernen (versuchen Sie es!), dann den Code erneut ausführen, würde nur ein Rand des Kreises zwischen dem Start- und Endpunkt des Bogens abgeschnitten.

Das war's vorerst; Ihr finales Beispiel sollte so aussehen:

{{EmbedLiveSample("3_canvas_paths", '100%', 200)}}

Sie können die **Play**-Schaltfläche drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

> [!NOTE]
> Um mehr über fortgeschrittene Pfadzeichnungsfunktionen wie Bézierkurven zu erfahren, schauen Sie sich unser [Zeichnen von Formen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)-Tutorial an.

### Text

Canvas hat auch Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz erkunden. Beginnen Sie, indem Sie eine weitere frische Kopie Ihrer Canvas-Vorlage erstellen, in der Sie das neue Beispiel zeichnen werden.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — Zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — Zeichnet Umriss- (Kontur-) Text.

In ihrer Grundnutzung nehmen beide diese drei Eigenschaften an: den zu zeichnenden Textstring und die x- und y-Koordinaten des Punktes, an dem der Text zu zeichnen beginnen soll. Dies stellt sich als die **unten links** Ecke des **Textfeldes** heraus (wörtlich, das Feld, das den zu zeichnenden Text umgibt), was Sie verwirren könnte, da andere Zeichenoperationen normalerweise an der oberen linken Ecke beginnen — behalten Sie dies im Hinterkopf.

Es gibt auch eine Reihe von Eigenschaften, die dabei helfen, die Textrendering, wie [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), zu kontrollieren, welche es Ihnen erlaubt, Schriftfamilie, Größe usw. zu spezifizieren. Es nimmt als seinen Wert die gleiche Syntax wie die CSS {{cssxref("font")}}-Eigenschaft.

Canvas-Inhalt ist für Screenreader nicht zugänglich. Text, der zum Canvas gezeichnet wird, ist nicht im DOM verfügbar, muss jedoch zugänglich gemacht werden. In diesem Beispiel enthalten wir den Text als Wert für `aria-label`.

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

Hier zeichnen wir zwei Textzeilen, eine Umriss- und die andere Stroke. Das Beispiel sollte so aussehen:

{{EmbedLiveSample("4-canvas-text", '100%', 180)}}

Drücken Sie die **Play**-Schaltfläche, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Spielen Sie damit und sehen Sie, was Sie sich einfallen lassen können! Sie können mehr Informationen über die für Canvas-Text verfügbaren Optionen im [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)-Tutorial finden.

### Bilder auf Canvas zeichnen

Es ist möglich, externe Bilder in Ihr Canvas zu rendern. Diese können einfache Bilder, Frames aus Videos oder der Inhalt anderer Canvas sein. Momentan werden wir uns nur den Fall ansehen, in dem wir einige einfache Bilder auf unser Canvas verwenden.

1. Wie zuvor, erstellen Sie eine weitere frische Kopie Ihrer Canvas-Vorlage, in der Sie das neue Beispiel zeichnen werden.

   Bilder werden mit der [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)-Methode auf das Canvas gezeichnet. Die einfachste Version benötigt drei Parameter — einen Verweis auf das Bild, das Sie rendern möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Beginnen wir damit, eine Bildquelle zu erhalten, die wir in unser Canvas einbetten können. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript hinzu:

   ```js live-sample___5-canvas-images
   const image = new Image();
   image.src =
     "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt mit dem Konstruktor [`Image()`](/de/docs/Web/API/HTMLImageElement/Image). Das zurückgegebene Objekt ist vom gleichen Typ wie das, das zurückgegeben wird, wenn Sie einen Verweis auf ein bestehendes {{htmlelement("img")}}-Element abrufen. Wir setzen dann dessen [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut gleich unserem Firefox-Logo-Bild. Zu diesem Zeitpunkt beginnt der Browser mit dem Laden des Bildes.

3. Wir könnten jetzt versuchen, das Bild mit `drawImage()` einzubetten, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, sonst schlägt der Code fehl. Wir können dies mit dem `load`-Ereignis erreichen, welches nur dann ausgelöst wird, wenn das Bild vollständig geladen ist. Fügen Sie den folgenden Block unter dem vorherigen hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie das Bild im Canvas eingebettet sehen, wenn auch ziemlich groß.

4. Aber es gibt mehr! Was, wenn wir nur einen Teil des Bildes anzeigen oder es verkleinern wollen? Beides ist mit der komplexeren Version von `drawImage()` möglich. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile wie folgt:

   ```js
   ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185);
   ```

   ```js hidden live-sample___5-canvas-images
   image.addEventListener("load", () =>
     ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185),
   );
   ```

   - Der erste Parameter ist der Bild-Referenz, wie zuvor.
   - Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts über dem ersten oder links vom zweiten Parameter wird gezeichnet.
   - Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem Originalbild herausschneiden wollen.
   - Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Teils des Bildes relativ zur oberen linken Ecke des Canvas zeichnen möchten.
   - Parameter 8 und 9 definieren die Breite und Höhe, um den ausgeschnittenen Bereich des Bildes zu zeichnen. In diesem Fall haben wir die gleichen Dimensionen wie der Originalausschnitt angegeben, aber Sie könnten es durch Angabe anderer Werte neu skalieren.

5. Wenn das Bild sinnvoll aktualisiert wird, muss auch die Beschreibung aktualisiert werden.

   ```js live-sample___5-canvas-images
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das finale Beispiel sollte so aussehen:

{{EmbedLiveSample("5-canvas-images", '100%', 260)}}

Drücken Sie die **Play**-Schaltfläche, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

## Schleifen und Animationen

Wir haben bisher einige sehr grundlegende Verwendungen des 2D-Canvas behandelt, aber wirklich werden Sie die volle Leistungsfähigkeit von Canvas nicht erleben, wenn Sie es nicht irgendwie aktualisieren oder animieren. Schließlich bietet Canvas skriptbare Bilder! Wenn Sie nichts ändern wollen, können Sie genauso gut statische Bilder verwenden und sich die ganze Arbeit sparen.

### Eine Schleife erstellen

Mit Schleifen in Canvas zu spielen macht ziemlich Spaß - Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)- (oder einer anderen) Schleife wie in jedem anderen JavaScript-Code ausführen.

Lassen Sie uns ein Beispiel erstellen.

1. Erstellen Sie eine weitere frische Kopie Ihrer Canvas-Vorlage.
2. Fügen Sie die folgende Zeile am Ende Ihres JavaScript hinzu. Diese enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js live-sample___6-canvas-for-loop
   ctx.translate(width / 2, height / 2);
   ```

   Dadurch wird der Koordinatenursprung (0, 0) in die Mitte des Canvas bewegt, anstatt an der oberen linken Ecke zu sein. Dies ist in vielen Situationen sehr nützlich, wie in diesem Fall, wo wir unser Design relativ zur Mitte des Canvas zeichnen möchten.

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

   Hier implementieren wir die gleiche `degToRad()`-Funktion, die wir bereits im Dreieckbeispiel gesehen haben, eine `rand()`-Funktion, die eine zufällige Zahl zwischen gegebenen unteren und oberen Grenzen zurückgibt, und die Variablen `length` und `moveOffset` (über die wir später mehr erfahren werden).

4. Die Idee hier ist, dass wir innerhalb der `for`-Schleife etwas auf dem Canvas zeichnen und es jedes Mal iterieren, um etwas Interessantes zu erstellen. Fügen Sie den folgenden Code innerhalb Ihrer `for`-Schleife hinzu:

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
   - Setzen wir `fillStyle` auf einen leicht transparenten Lila-Ton, der jedes Mal basierend auf dem Wert von `length` ändert. Wie Sie später sehen werden, wird die Länge jedes Mal kleiner, wenn die Schleife läuft, sodass der Effekt ist, dass die Farbe jedes Mal heller wird, wenn ein neueres Dreieck gezeichnet wird.
   - Beginnen wir den Pfad.
   - Bewegen wir den Stift zu einer Koordinate von `(moveOffset, moveOffset)`. Diese Variable definiert, wie weit wir uns jedes Mal bewegen möchten, wenn wir ein neues Dreieck zeichnen.
   - Zeichnen wir eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Dies ergibt eine Linie der Länge `length` parallel zur X-Achse.
   - Berechnen wir die Höhe des Dreiecks, wie vorher.
   - Zeichnen wir eine Linie zur nach unten zeigenden Ecke des Dreiecks, dann eine Linie zurück zum Start des Dreiecks.
   - Rufen wir `fill()` auf, um das Dreieck zu füllen.
   - Aktualisieren wir die Variablen, die die Sequenz der Dreiecke beschreiben, so dass wir bereit sind, das nächste zu zeichnen. Wir verringern den Wert von `length` um 1, sodass die Dreiecke jedes Mal kleiner werden; erhöhen `moveOffset` um eine kleine Menge, sodass jedes nachfolgende Dreieck etwas weiter entfernt ist, und verwenden eine andere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), die es uns ermöglicht, das gesamte Canvas zu drehen! Wir drehen es um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das war's! Das finale Beispiel sollte so aussehen:

{{EmbedLiveSample("6-canvas-for-loop", '100%', 550)}}

Drücken Sie die **Play**-Schaltfläche, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Wir möchten Sie ermutigen, mit dem Beispiel zu spielen und es zu Ihrem eigenen zu machen! Zum Beispiel:

- Zeichnen Sie Rechtecke oder Bögen statt Dreiecken, oder betten Sie sogar Bilder ein.
- Spielen Sie mit den `length`- und `moveOffset`-Werten.
- Fügen Sie einige Zufallszahlen unter Verwendung der `rand()`-Funktion hinzu, die wir oben aufgenommen, aber nicht verwendet haben.

### Animationen

Das Schleifenbeispiel, das wir oben gebaut haben, war unterhaltsam, aber wirklich brauchen Sie eine konstante Schleife, die immer und immer wieder läuft, für alle ernsthaften Canvas-Anwendungen (beispielsweise Spiele und Echtzeitvisualisierungen). Wenn Sie sich Ihr Canvas als einen Film vorstellen, möchten Sie wirklich, dass die Anzeige auf jedem Frame aktualisiert wird, um die aktualisierte Ansicht anzuzeigen, mit einer idealen Bildwiederholrate von 60 Frames pro Sekunde, damit die Bewegung für das menschliche Auge schön und flüssig erscheint.

Es gibt einige JavaScript-Funktionen, die es Ihnen erlauben, Funktionen mehrmals pro Sekunde auszuführen, wobei die beste für unsere Zwecke hier [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) ist. Es nimmt einen Parameter an — den Namen der Funktion, die Sie für jeden Frame ausführen möchten. Das nächste Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion das neue Update Ihrer Animation zeichnet und `requestAnimationFrame()` erneut kurz vor dem Ende der Funktion aufruft, wird die Animationsschleife weiterhin laufen. Die Schleife endet, wenn Sie aufhören, `requestAnimationFrame()` aufzurufen oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) nach dem Aufrufen von `requestAnimationFrame()` aufrufen, aber bevor der Frame aufgerufen wird.

> [!NOTE]
> Es ist gute Praxis, `cancelAnimationFrame()` aus Ihrem Hauptcode aufzurufen, wenn Sie die Animation nicht mehr verwenden, um sicherzustellen, dass keine Updates mehr anstehen.

Der Browser arbeitet komplexe Details aus, wie zum Beispiel die Animation mit einer konsistenten Geschwindigkeit laufen zu lassen und keine Ressourcen zu verschwenden, um Dinge zu animieren, die nicht gesehen werden können.

Um zu sehen, wie es funktioniert, schauen wir uns noch einmal unser [Bouncing Balls-Beispiel](#frame_bouncing-balls) an. Der Code für die Schleife, die alles in Bewegung hält, sieht so aus:

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

Wir führen die `loop()`-Funktion einmal am Ende des Codes aus, um den Zyklus zu starten und den ersten Animationsframe zu zeichnen; die `loop()`-Funktion ist dann verantwortlich dafür, `requestAnimationFrame(loop)` aufzurufen, um den nächsten Frame der Animation kontinuierlich auszuführen.

Beachten Sie, dass wir in jedem Frame das gesamte Canvas leeren und alles neu zeichnen. Für jeden Ball, der vorhanden ist, zeichnen wir ihn, aktualisieren seine Position und überprüfen, ob er mit anderen Bällen kollidiert. Sobald Sie eine Grafik auf ein Canvas gezeichnet haben, gibt es keine Möglichkeit, diese Grafik individuell zu manipulieren, wie Sie es mit DOM-Elementen können. Sie können jeden Ball im Canvas nicht umherschieben, denn sobald er gezeichnet ist, ist er Teil des Canvas und kein individuell zugängliches Element oder Objekt. Stattdessen müssen Sie löschen und neu zeichnen, entweder indem Sie den gesamten Frame löschen und alles neu zeichnen oder Code verwenden, der genau weiß, welche Teile gelöscht werden müssen und nur die minimal notwendige Fläche des Canvas löscht und neu zeichnet.

Die Optimierung der Animation von Grafiken ist eine eigene Programmierspezialisierung mit vielen cleveren Techniken, die zur Verfügung stehen. Diese sind jedoch über das hinaus, was wir für unser Beispiel benötigen!

Im Allgemeinen umfasst der Vorgang einer Canvas-Animation die folgenden Schritte:

1. Löschen Sie den Canvas-Inhalt (z.B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Speicherstatus (falls erforderlich) mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) - dies ist notwendig, wenn Sie Einstellungen, die Sie auf dem Canvas aktualisiert haben, vor dem Fortfahren speichern wollen, was für fortgeschrittenere Anwendungen nützlich ist.
3. Zeichnen Sie die Grafiken, die Sie animieren möchten.
4. Stellen Sie die in Schritt 2 gespeicherten Einstellungen mit [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore) wieder her.
5. Rufen Sie `requestAnimationFrame()` auf, um das Zeichnen des nächsten Animationsframes zu planen.

> [!NOTE]
> Wir werden `save()` und `restore()` hier nicht behandeln, aber sie werden gut in unserem [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations)-Tutorial (und den darauf folgenden) erklärt.

### Bewegungsobjekt-Animation

Lassen Sie uns nun unsere eigene einfache Animation erstellen — wir werden ein sich bewegendes Objekt über den Bildschirm mit einem Spritesheet animieren.

1. Erstellen Sie eine weitere frische Kopie unserer Canvas-Vorlage und öffnen Sie sie in Ihrem Codeeditor.

2. Aktualisieren Sie das Fallback-HTML, um das Bild widerzuspiegeln:

   ```html live-sample___7-canvas-walking-animation
   <canvas class="myCanvas">
     <p>A cat walking.</p>
   </canvas>
   ```

3. Dieses Mal werden wir den Hintergrund nicht schwarz färben. Malen Sie also nach dem Erhalt der `ctx`-Variable den Hintergrund hellgrau:

   ```js live-sample___7-canvas-walking-animation
   ctx.fillStyle = "#e5e6e9";
   ctx.fillRect(0, 0, width, height);
   ```

4. Fügen Sie am Ende des JavaScript die folgende Zeile hinzu, um den Ursprung der Koordinaten wieder in die Mitte des Canvas zu setzen:

   ```js live-sample___7-canvas-walking-animation
   ctx.translate(width / 2, height / 2);
   ```

5. Lassen Sie uns nun ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt erstellen, dessen [`src`](/de/docs/Web/API/HTMLImageElement/src) auf das Bild setzen, das wir laden möchten, und einen `onload`-Eventhandler hinzufügen, der die `draw()`-Funktion aufruft, wenn das Bild geladen ist:

   ```js live-sample___7-canvas-walking-animation
   const image = new Image();
   image.src =
     "https://developer.mozilla.org/shared-assets/images/examples/web-animations/cat_sprite.png";
   image.onload = draw;
   ```

6. Nun fügen wir einige Variablen hinzu, um nachzuverfolgen, wo der Sprite auf dem Bildschirm gezeichnet wird und welches Sprite wir anzeigen möchten.

   ```js live-sample___7-canvas-walking-animation
   let spriteIndex = 0;
   let posX = 0;
   const spriteWidth = 300;
   const spriteHeight = 150;
   const totalSprites = 12;
   ```

   Das Spritesheet ist erstellt und wird mit freundlicher Genehmigung von [Rachel Nabors](https://nearestnabors.com/) für ihre Dokumentationsarbeit an der [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt. Es sieht so aus:

   ![Ein Spritesheet mit drei Spalten, jede Spalte enthält eine Sequenz von Bildern einer schwarzen Katze, die nach links bewegt, mit unterschiedlichen Geschwindigkeiten. Jede Sprite ist 300 Pixel breit und 150 Pixel hoch.](/shared-assets/images/examples/web-animations/cat_sprite.png)

   Es hat drei Spalten. Jede Spalte ist eine Sequenz, die die Katze in unterschiedlichem Tempo bewegt (geht, trabt und galoppiert). Jede Sequenz enthält entweder 12 oder 13 Sprites — jedes ist 300 Pixel breit und 150 Pixel hoch. Wir verwenden die linke Spalte mit der gehenden Sequenz, die 12 Sprites enthält. Um jedes Sprite sauber anzuzeigen, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild aus dem Spritesheet auszuschneiden und nur diesen Teil anzuzeigen, wie wir es oben mit dem Firefox-Logo gemacht haben. Die X- und Y-Koordinaten des Ausschnitts müssen ein Vielfaches von `spriteWidth` und `spriteHeight` sein; da wir die linke Sequenz verwenden, ist die X-Koordinate immer 0. Die Ausschnittgröße wird immer `spriteWidth` und `spriteHeight` sein.

7. Lassen Sie uns nun eine leere `draw()`-Funktion am Ende des Codes einfügen, bereit zum Füllen mit Code:

   ```js
   function draw() {}
   ```

   ```js-nolint hidden live-sample___7-canvas-walking-animation
   function draw() {
   ```

8. Der Rest des Codes in diesem Abschnitt wird innerhalb von `draw()` platziert. Fügen Sie zunächst die folgende Zeile hinzu, die das Canvas leert, um sich auf das Zeichnen jedes Frames vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width / 2), -(height / 2)` angeben müssen, weil wir bereits den Ursprung früher als `width / 2, height / 2` festgelegt haben.

   ```js live-sample___7-canvas-walking-animation
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

9. Als nächstes zeichnen wir unser Bild mit drawImage — die Version mit 9 Parametern. Fügen Sie das Folgende hinzu:

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
   - Wir spezifizieren `image` als das Bild, das eingebettet wird.
   - Parameter 2 und 3 spezifizieren die obere linke Ecke des Ausschnitts, der aus dem Quellbild herausgeschnitten werden soll, wobei der X-Wert 0 ist (für die linke Spalte) und der Y-Wert durch Vielfache von `spriteHeight` wechselt. Sie können den X-Wert durch `spriteWidth` oder `2 * spriteWidth` ersetzen, um die anderen Spalten auszuwählen.
   - Parameter 4 und 5 spezifizieren die Größe des auszuschneidenden Bereichs — `spriteWidth` und `spriteHeight`.
   - Parameter 6 und 7 spezifizieren die obere linke Ecke der Box, in die der Ausschnitt auf das Canvas gezeichnet wird — die X-Position ist 0 + `posX`, was bedeutet, dass wir den Zeichnungsort ändern können, indem wir den `posX`-Wert ändern. Die Y-Position ist `-spriteHeight / 2`, was bedeutet, dass das Bild vertikal auf dem Canvas zentriert wird.
   - Parameter 8 und 9 spezifizieren die Größe des Bildes auf dem Canvas. Wir wollen es einfach in seiner Originalgröße halten, daher geben wir `spriteWidth` und `spriteHeight` als die Breite und Höhe an.

10. Nun werden wir den `spriteIndex`-Wert nach jedem Zeichnen ändern — na ja, nach einigen von ihnen jedenfalls. Fügen Sie diesen Block unten in die `draw()`-Funktion ein:

    ```js live-sample___7-canvas-walking-animation
    if (posX % 11 === 0) {
      if (spriteIndex === totalSprites - 1) {
        spriteIndex = 0;
      } else {
        spriteIndex++;
      }
    }
    ```

    Wir verpacken den gesamten Block in `if (posX % 11 === 0) { }`. Wir verwenden den Modulo-Operator (`%`) (auch bekannt als [Restoperator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu überprüfen, ob der `posX`-Wert genau durch 11 geteilt werden kann, ohne Rest. Wenn ja, gehen wir zum nächsten Sprite über, indem wir `spriteIndex` inkrementieren (nach der letzten runden wir auf 0 zurück). Dies bedeutet effektiv, dass wir das Sprite nur in jedem 11. Frame aktualisieren, oder ungefähr in 6 Frames pro Sekunde (`requestAnimationFrame()` ruft uns bei bis zu 60 Frames pro Sekunde auf, wenn möglich). Wir verlangsamen absichtlich die Bildrate, weil wir nur 12 Sprites zur Verfügung haben, und wenn wir jedes im 60. Sekundentakt anzeigen würden, würde sich unser Objekt viel zu schnell bewegen!

    Im äußeren Block verwenden wir einen [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Aussage, um zu überprüfen, ob der `spriteIndex`-Wert bereits auf dem letzten ist. Wenn wir bereits das letzte Sprite zeigen, setzen wir den `spriteIndex` wieder auf 0; andernfalls inkrementieren wir ihn einfach um 1.

11. Als nächstes müssen wir herausfinden, wie wir den `posX`-Wert in jedem Frame ändern — fügen Sie den folgenden Codeblock direkt unter Ihrem letzten ein.

    ```js live-sample___7-canvas-walking-animation
    if (posX < -width / 2 - spriteWidth) {
      const newStartPos = width / 2;
      posX = Math.ceil(newStartPos);
    } else {
      posX -= 2;
    }
    ```

    Wir verwenden erneut einen `if...else`-Aussage, um zu sehen, ob der `posX`-Wert weniger als `-width/2 - spriteWidth` geworden ist, was bedeutet, dass unsere Katze über den linken Rand des Bildschirms hinaus gelaufen ist. Ist dies der Fall, berechnen wir eine Position, die die Katze direkt rechts des rechten Bildschirmrandes setzen würde.

    Wenn unsere Katze noch nicht vom Rand des Bildschirms gelaufen ist, verringern wir `posX` um 2. Dies wird es nach links bewegen, wenn wir es das nächste Mal zeichnen.

12. Schließlich müssen wir die Animationsschleife machen, indem wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()`-Funktion aufrufen:

    ```js live-sample___7-canvas-walking-animation
    window.requestAnimationFrame(draw);
    ```

```js-nolint hidden live-sample___7-canvas-walking-animation
}
```

Das war's! Das finale Beispiel sollte so aussehen:

{{EmbedLiveSample("7-canvas-walking-animation", '100%', 260)}}

Sie können die **Play**-Schaltfläche drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Eine einfache Zeichenanwendung

Als letztes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben kombiniert werden kann (in diesem Fall Mausbewegungen). Wir werden Ihnen keine schrittweise Anleitung dazu geben; wir werden nur die interessantesten Teile des Codes erkunden.

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

Sie können mit dem Beispiel live unten spielen; Sie können auch auf die **Play**-Schaltfläche klicken, um es im MDN Playground zu öffnen, wo Sie den Quellcode bearbeiten können:

{{EmbedLiveSample("8-canvas-drawing-app", '100%', 600)}}

Lassen Sie uns die interessantesten Teile ansehen. Zuerst einmal halten wir die X- und Y-Koordinaten der Maus und ob sie gedrückt wird oder nicht mit drei Variablen fest: `curX`, `curY` und `pressed`. Wenn sich die Maus bewegt, rufen wir eine Funktion auf, die als `onmousemove`-Ereignishandler festgelegt ist und die aktuellen X- und Y-Werte erfasst. Wir verwenden auch `onmousedown`- und `onmouseup`-Ereignishandler, um den Wert von `pressed` auf `true` zu ändern, wenn die Maustaste gedrückt wird, und wieder auf `false`, wenn sie losgelassen wird.

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

Wenn die Schaltfläche "Canvas löschen" gedrückt wird, führen wir eine einfache Funktion aus, die das gesamte Canvas wieder auf schwarz löscht, genauso, wie wir es vorher gesehen haben:

```js live-sample___8-canvas-drawing-app
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal ziemlich einfach — wenn `pressed` `true` ist, zeichnen wir einen Kreis mit einem Füllstil, der dem im Farbpicker eingestellten Wert entspricht, und einem Radius, der dem im Bereichseingabefeld eingestellten Wert entspricht. Wir müssen den Kreis 85 Pixel über dem gemessenen Punkt zeichnen, weil die vertikale Messung von oben im Ansichtsfenster beginnt, aber wir den Kreis relativ zur Oberseite des Canvas zeichnen, das unter über einer 85-Pixel hohen Symbolleiste startet. Wenn wir es mit nur `curY` als Y-Koordinate zeichnen würden, würde es 85 Pixel unter der Mausposition erscheinen.

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

Alle {{htmlelement("input")}}-Typen werden gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, wird er auf ein einfaches Texteingabefeld zurückgreifen.

## WebGL

Es ist jetzt an der Zeit, 2D hinter sich zu lassen und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalte werden mit der [WebGL-API](/de/docs/Web/API/WebGL_API) spezifiziert, welche eine völlig separate API von der 2D-Canvas-API ist, obwohl beide auf {{htmlelement("canvas")}}-Elementen rendern.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht es Ihnen, direkt mit der {{Glossary("GPU", "GPU")}} des Rechners zu kommunizieren. Als solches ist das Schreiben von rohem WebGL näher an niedrigstufigen Sprachen wie C++ als reguläres JavaScript; es ist ziemlich komplex, aber unglaublich leistungsfähig.

### Verwendung einer Bibliothek

Aufgrund ihrer Komplexität schreiben die meisten Menschen 3D-Grafikcode mit einer Drittanbieter-JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten von ihnen arbeiten in ähnlicher Weise, indem sie Funktionen bereitstellen, um primitive und benutzerdefinierte Formen zu erstellen, Kameras und Beleuchtung zu positionieren, Oberflächen mit Texturen zu versehen und mehr. Sie übernehmen das WebGL für Sie, sodass Sie auf einer höheren Ebene arbeiten können.

Ja, die Verwendung eines dieser Mittel bedeutet, eine weitere neue API zu lernen (eine Drittanbieter-API in diesem Fall), aber sie sind viel einfacher als das Codieren von rohem WebGL.

### Ein sich drehender Würfel

Schauen wir uns ein Beispiel an, wie man etwas mit einer WebGL-Bibliothek erstellt. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der beliebtesten ist. In diesem Tutorial werden wir ein 3D-Spinning-Cube erstellen.

1. Um zu beginnen, erstellen Sie einen neuen Ordner auf Ihrer lokalen Festplatte namens `webgl-cube`.
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

3. Erstellen Sie als nächstes eine weitere neue Datei namens `script.js`, wieder im selben Ordner wie zuvor. Lassen Sie es vorerst leer.
4. Erstellen Sie jetzt eine weitere neue Datei namens `style.css`, ebenfalls im selben Ordner, und fügen Sie den folgenden Inhalt hinzu:

   ```css live-sample___9-webgl-cube
   html,
   body {
     margin: 0;
   }

   body {
     overflow: hidden;
   }
   ```

5. Wir haben `three.js` in unsere Seite eingebunden (darum kümmert sich das erste `<script>`-Element in unserem HTML), sodass wir nun beginnen können, JavaScript, das es verwendet, in `script.js` zu schreiben. Beginnen wir, indem wir eine neue Szene erstellen — fügen Sie das folgende in Ihre `script.js`-Datei ein:

   ```js live-sample___9-webgl-cube
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene)-Konstruktor erstellt eine neue Szene, die die gesamte 3D-Welt repräsentiert, die wir anzeigen möchten.

6. Als nächstes benötigen wir eine **Kamera**, damit wir die Szene sehen können. In 3D-Bildbegriffen repräsentiert die Kamera die Position eines Zuschauers in der Welt. Um eine Kamera zu erstellen, fügen Sie als nächstes die folgenden Zeilen hinzu:

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
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Normalerweise ist dies das Verhältnis der Breite der Szene geteilt durch die Höhe. Ein anderer Wert würde die Szene verzerren (was zwar gewollt sein könnte, aber normalerweise nicht).
   - Die Nah-Ebene: Wie nah an der Kamera Objekte sein können, bevor sie nicht mehr auf dem Bildschirm gerendert werden. Denken Sie daran, wie Sie Ihren Finger näher und näher zum Raum zwischen Ihren Augen bewegen, irgendwann können Sie ihn nicht mehr sehen.
   - Die Fern-Ebene: Wie weit Dinge von der Kamera entfernt sein können, bevor sie nicht mehr dargestellt werden.

   Wir setzen auch die Position der Kamera auf 5 Entfernungs-Einheiten aus der Z-Achse, die, wie im CSS, aus dem? Bildschirm hinein zum Betrachter, Ihnen, sind.

7. Der dritte wesentliche Bestandteil ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene, die durch eine gegebene Kamera betrachtet wird, rendert. Wir erstellen eines für jetzt mit dem [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)-Konstruktor, aber wir werden ihn erst später verwenden. Fügen Sie als nächstes die folgenden Zeilen hinzu:

   ```js live-sample___9-webgl-cube
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile setzt die Größe, mit der der Renderer die Kamerasicht zeichnet, und die dritte Zeile hängt das vom Renderer erstellte {{htmlelement("canvas")}}-Element an das {{htmlelement("body")}} des Dokuments an. Jetzt wird alles, was der Renderer zeichnet, in unserem Fenster angezeigt werden.

8. Als nächstes wollen wir den Würfel erstellen, den wir auf dem Canvas anzeigen. Fügen Sie den folgenden Codeblock am Ende Ihres JavaScript hinzu:

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

   Es gibt hier etwas mehr zu beachten, also lassen Sie es uns in Stufen durchgehen:
   - Wir erstellen zuerst eine `cube`-globale Variable, damit wir auf unseren Würfel von überall im Code aus zugreifen können.
   - Als nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt und rufen `load()` darauf auf. `load()` erfordert in diesem Fall zwei Parameter (auch wenn es mehr haben kann): die Textur, die wir laden möchten (ein PNG), und eine Funktion, die ausgeführt wird, wenn die Textur geladen wurde.
   - Innerhalb dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um anzugeben, dass wir einen 2x2-Wiederholungsbild auf allen Seiten des Würfels gewickelt haben möchten. Danach erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt sowie ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt und verknüpfen sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh), um unseren Würfel zu kreieren. Ein Objekt benötigt typischerweise eine Geometrie (die Form) und ein Material (wie seine Oberfläche aussieht).
   - Zuletzt fügen wir unserem Cube zur Szene hinzu und rufen unsere `draw()`-Funktion auf, um die Animation zu starten.

9. Bevor wir `draw()` definieren, fügen wir ein paar Lichter in die Szenerie, um die Dinge etwas aufzuhellen. Fügen Sie die folgenden Blöcke als nächstes hinzu:

   ```js live-sample___9-webgl-cube
   const light = new THREE.AmbientLight("white"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("white");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art von sanftem Licht, das die gesamte Szene ein wenig aufhellt, wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt hingegen ist ein gerichtete Lichtstrahl, mehr ähnlich einer Taschenlampe/Lampe (oder tatsächlich einem Spotlicht).

10. Deshalb fügen wir unsere `draw()`-Funktion am Ende des Codes hinzu:

    ```js live-sample___9-webgl-cube
    function draw() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);

      requestAnimationFrame(draw);
    }
    ```

    Dies ist ziemlich intuitiv; bei jedem Frame rotieren wir unseren Würfel leicht um seine X- und Y-Achsen, dann rendern wir die Szene, wie von unserer Kamera gesehen, und schließlich rufen wir `requestAnimationFrame()` auf, um das Zeichnen unseres nächsten Frames zu terminieren.

Das fertige Produkt sollte so aussehen:

{{EmbedLiveSample("9-webgl-cube", "100%", 500)}}

> [!NOTE]
> In unserem GitHub-Repo können Sie auch ein weiteres interessantes 3D-Würfel-Beispiel finden — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dieses verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Computerkamera zu nehmen und ihn auf die Seite des Würfels als Textur zu projizieren!

## Zusammenfassung

An diesem Punkt sollten Sie eine nützliche Vorstellung von den Grundlagen der Grafikprogrammierung mit Canvas und WebGL haben und was Sie mit diesen APIs machen können, sowie eine gute Vorstellung, wohin Sie für weitere Informationen gehen können. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklichen Grundlagen von Canvas behandelt — es gibt so viel mehr zu lernen! Die folgenden Artikel führen Sie weiter.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorial-Reihe, die beschreibt, was Sie über 2D-Canvas wissen sollten, in viel mehr Detail als hier behandelt wurde. Unverzichtbare Lektüre.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Reihe, die die Grundlagen der rohen WebGL-Programmierung lehrt.
- [Erstellen eines einfachen Demos mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — grundlegendes Three.js-Tutorial. Wir haben auch gleichwertige Anleitungen für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spieleentwicklung](/de/docs/Games) — die Landingpage für die Entwicklung von Web-Spielen auf MDN. Hier gibt es einige wirklich nützliche Tutorials und Techniken, die sich auf 2D- und 3D-Canvas beziehen — sehen Sie sich die Menüpunkte Techniken und Tutorials an.

## Beispiele

- [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API, um Geräusche zu erzeugen, und Canvas, um eine hübsche Visualisierung dazu zu generieren.
- [Voice Change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas, um Echtzeit-Audiodaten von der Web Audio API zu visualisieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
