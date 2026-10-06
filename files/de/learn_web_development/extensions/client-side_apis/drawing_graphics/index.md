---
title: Grafiken zeichnen
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: c529f2672b3541cc28ea687ff9266f98b1734191
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser bietet einige leistungsfähige Werkzeuge zur Grafikprogrammierung: von der Sprache Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) bis hin zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [Die Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel führt in Canvas ein und verweist auf weiterführende Ressourcen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere mit den <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen von JavaScript-Objekten</a> und zentralen APIs wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte und Anwendungsfälle, die durch die in dieser Lektion behandelten APIs ermöglicht werden.</li>
          <li>Grundlegende Syntax und Verwendung von <code>&lt;canvas&gt;</code> und zugehörigen APIs.</li>
          <li>Timer und <code>requestAnimationFrame()</code> verwenden, um Animationsschleifen einzurichten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Ursprünglich bestand das Web nur aus Text, was ziemlich langweilig war. Deshalb wurden Bilder eingeführt – zunächst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} sowie über [SVG](/de/docs/Web/SVG).

Das reichte jedoch noch nicht aus. Zwar konnten Sie SVG-Vektorgrafiken mit [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) animieren und anderweitig verändern, da sie durch Markup dargestellt werden. Für Bitmap-Bilder gab es aber noch keine entsprechende Möglichkeit, und die verfügbaren Werkzeuge waren recht begrenzt. Dem Web fehlte weiterhin eine Möglichkeit, Animationen, Spiele, 3D-Szenen und andere Anwendungen effizient zu erstellen, die üblicherweise mit hardwarenäheren Sprachen wie C++ oder Java umgesetzt wurden.

Die Situation begann sich zu verbessern, als Browser ab 2004 das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) unterstützten. Wie Sie weiter unten sehen werden, stellt Canvas nützliche Werkzeuge für 2D-Animationen, Spiele, Datenvisualisierungen und andere Anwendungen bereit, besonders in Kombination mit weiteren APIs der Webplattform. Canvas-Inhalte barrierefrei zugänglich zu machen, kann allerdings schwierig oder unmöglich sein.

Das folgende Beispiel zeigt eine einfache 2D-Animation springender Bälle auf einem Canvas, die Sie bereits im Modul [Einführung in JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) kennengelernt haben:

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

Etwa 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Daraus entstand [WebGL](/de/docs/Web/API/WebGL_API), das sich unter Browserherstellern verbreitete und etwa 2009–2010 standardisiert wurde. Mit WebGL können Sie echte 3D-Grafiken im Webbrowser erstellen.

Dieser Artikel konzentriert sich vor allem auf 2D-Canvas, da reiner WebGL-Code sehr komplex ist. Wir zeigen jedoch, wie sich [mit einer WebGL-Bibliothek einfacher eine 3D-Szene erstellen lässt](#webgl). Eine Einführung in reines WebGL finden Sie an anderer Stelle unter [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Erste Schritte mit \<canvas>

Wenn Sie auf einer Webseite eine 2D- _oder_ 3D-Szene erstellen möchten, benötigen Sie zunächst ein HTML-{{htmlelement("canvas")}}-Element. Dieses Element legt den Bereich auf der Seite fest, in den das Bild gezeichnet wird. Dazu fügen Sie einfach das Element in die Seite ein:

```html
<canvas width="320" height="240"></canvas>
```

Dadurch entsteht auf der Seite ein Canvas mit einer Größe von 320 × 240 Pixeln.

Zwischen den `<canvas>`-Tags sollten Sie einen Ersatzinhalt einfügen. Er sollte den Canvas-Inhalt für Personen beschreiben, deren Browser Canvas nicht unterstützen oder die Screenreader verwenden.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Der Ersatzinhalt sollte eine nützliche Alternative zum Canvas-Inhalt bieten. Wenn Sie beispielsweise einen laufend aktualisierten Aktienkurs-Graphen darstellen, könnte der Ersatzinhalt ein statisches Bild des aktuellen Graphen sein. Dessen `alt`-Text könnte die Kurse als Text angeben; alternativ könnten Sie eine Liste mit Links zu den einzelnen Aktienseiten bereitstellen.

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Fügen Sie beschreibenden Text entweder direkt am Canvas-Element als Wert des Attributs [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder als Ersatzinhalt zwischen den öffnenden und schließenden `<canvas>`-Tags ein. Der Canvas-Inhalt ist nicht Teil des DOM, der darin verschachtelte Ersatzinhalt dagegen schon.

### Canvas erstellen und seine Größe festlegen

Erstellen wir zunächst eine eigene Canvas-Vorlage für spätere Experimente.

1. Erstellen Sie auf Ihrer lokalen Festplatte ein Verzeichnis namens `canvas-template`.
2. Erstellen Sie darin eine Datei namens `index.html` und speichern Sie den folgenden Inhalt darin:

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

3. Erstellen Sie im Verzeichnis eine Datei namens `style.css` und speichern Sie darin die folgende CSS-Regel:

   ```css live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
   body {
     margin: 0;
     overflow: hidden;
   }
   ```

4. Erstellen Sie im Verzeichnis eine Datei namens `script.js`. Lassen Sie sie vorerst leer.

5. Öffnen Sie nun `script.js` und fügen Sie die folgenden JavaScript-Zeilen hinzu:

   ```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier speichern wir eine Referenz auf den Canvas in der Konstanten `canvas`. In der zweiten Zeile setzen wir sowohl die neue Konstante `width` als auch die `width`-Eigenschaft des Canvas auf [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth), also die Breite des Viewports. In der dritten Zeile setzen wir die neue Konstante `height` und die `height`-Eigenschaft des Canvas auf [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight), also die Höhe des Viewports. Damit füllt unser Canvas das gesamte Browserfenster aus!

   Sie sehen außerdem, dass wir Zuweisungen mit mehreren Gleichheitszeichen verketten. Das ist in JavaScript erlaubt und praktisch, wenn mehrere Variablen denselben Wert erhalten sollen. Wir möchten über die Variablen `width` und `height` einfach auf die Breite und Höhe des Canvas zugreifen können, weil wir diese Werte später brauchen – etwa um genau in der Mitte der Canvas-Breite etwas zu zeichnen.

> [!NOTE]
> Die Größe des Canvas sollten Sie im Allgemeinen wie oben beschrieben über HTML-Attribute oder DOM-Eigenschaften festlegen. CSS wäre ebenfalls möglich, doch dabei wird die Größe erst nach dem Rendern des Canvas festgelegt. Wie bei anderen Bildern kann das Ergebnis dadurch verpixelt oder verzerrt wirken.

### Canvas-Kontext abrufen und Einrichtung abschließen

Bevor unsere Canvas-Vorlage fertig ist, müssen wir noch einen letzten Schritt ausführen. Zum Zeichnen auf dem Canvas benötigen wir eine besondere Referenz auf den Zeichenbereich, den sogenannten Kontext. Diese erhalten wir mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext). Bei der grundlegenden Verwendung erwartet sie einen String als Parameter, der den gewünschten Kontexttyp angibt.

Wir benötigen hier einen 2D-Canvas. Fügen Sie deshalb in `script.js` unter den bisherigen Zeilen Folgendes hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Weitere mögliche Kontextwerte sind beispielsweise `webgl` für WebGL und `webgpu` für WebGPU. In diesem Artikel benötigen wir sie nicht.

Damit ist unser Canvas zum Zeichnen bereit! Die Variable `ctx` enthält nun ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt. Bei allen Zeichenoperationen auf dem Canvas arbeiten wir mit diesem Objekt.

Bevor wir fortfahren, färben wir den Canvas-Hintergrund schwarz. So lernen Sie die Canvas API zum ersten Mal praktisch kennen. Fügen Sie am Ende Ihres JavaScript-Codes die folgenden Zeilen hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop
ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);
```

Hier legen wir mit der Canvas-Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) eine Füllfarbe fest. Sie akzeptiert ebenso wie CSS-Eigenschaften [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color). Anschließend zeichnen wir mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) ein Rechteck über die gesamte Canvas-Fläche. Die ersten beiden Parameter geben die Koordinaten seiner oberen linken Ecke an, die letzten beiden die gewünschte Breite und Höhe. Wie angekündigt erweisen sich die Variablen `width` und `height` als nützlich!

Unsere Vorlage ist fertig. Fahren wir fort.

## Grundlagen von 2D-Canvas

Wie bereits erwähnt, erfolgen alle Zeichenoperationen über ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt – in unserem Fall `ctx`. Viele Operationen benötigen Koordinaten, damit klar ist, wo genau etwas gezeichnet werden soll. Die obere linke Ecke des Canvas ist der Punkt (0, 0). Die horizontale X-Achse verläuft von links nach rechts, die vertikale Y-Achse von oben nach unten.

![Kariertes Papier, dessen Fläche mit kleinen Quadraten bedeckt ist, und ein stahlblaues Quadrat in der Mitte. Die obere linke Ecke des Canvas ist der Punkt (0, 0) seiner X- und Y-Achse. Die horizontale X-Achse verläuft von links nach rechts und gibt die Breite an; die vertikale Y-Achse verläuft von oben nach unten und gibt die Höhe an. Die obere linke Ecke des blauen Quadrats ist mit einem Abstand von x Einheiten zur Y-Achse und y Einheiten zur X-Achse gekennzeichnet.](canvas_default_grid.png)

Formen werden häufig mithilfe des Rechtecks als Grundform gezeichnet. Alternativ können Sie eine Linie entlang eines bestimmten Pfads ziehen und die entstandene Form anschließend füllen. Im Folgenden zeigen wir beide Möglichkeiten.

### Einfache Rechtecke

Beginnen wir mit einigen einfachen Rechtecken.

1. Erstellen Sie zunächst eine Kopie des Verzeichnisses mit Ihrer gerade erstellten Canvas-Vorlage.
2. Fügen Sie am Ende Ihrer JavaScript-Datei die folgenden Zeilen hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "red";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie Ihre HTML-Datei im Browser öffnen, sollte auf dem Canvas ein rotes Rechteck erscheinen. Seine obere linke Ecke liegt jeweils 50 Pixel vom oberen und linken Canvas-Rand entfernt, wie die ersten beiden Parameter festlegen. Es ist 100 Pixel breit und 150 Pixel hoch, wie durch den dritten und vierten Parameter angegeben.

3. Fügen wir ein weiteres Rechteck hinzu, diesmal ein grünes. Ergänzen Sie am Ende Ihres JavaScript-Codes Folgendes:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "green";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern Sie die Datei und laden Sie die Seite neu. Sie sollten nun das neue Rechteck sehen. Daran wird ein wichtiger Punkt deutlich: Grafikoperationen wie das Zeichnen von Rechtecken oder Linien werden in der Reihenfolge ausgeführt, in der sie im Code stehen. Stellen Sie es sich wie das Streichen einer Wand vor: Jede Farbschicht überdeckt die darunterliegenden Schichten möglicherweise vollständig. Dieses Verhalten lässt sich nicht ändern. Überlegen Sie daher sorgfältig, in welcher Reihenfolge Sie die Grafiken zeichnen.

4. Sie können auch halbtransparente Grafiken zeichnen, indem Sie eine halbtransparente Farbe angeben, beispielsweise mit `rgb()`. Der „Alpha-Kanal“ bestimmt den Grad der Transparenz. Je höher sein Wert, desto stärker verdeckt die Farbe das, was dahinterliegt. Fügen Sie Ihrem Code Folgendes hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Zeichnen Sie nun selbst noch einige Rechtecke. Viel Spaß dabei!

### Konturen und Linienbreiten

Bisher haben wir gefüllte Rechtecke gezeichnet. Sie können aber auch Rechtecke zeichnen, die nur aus einer Umrandung bestehen. Solche Umrandungen heißen im Grafikdesign **Konturen** (_strokes_). Die gewünschte Konturfarbe legen Sie mit der Eigenschaft [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) fest. Zum Zeichnen eines Rechtecks mit Kontur verwenden Sie [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Ergänzen Sie das vorherige Beispiel unter den bisherigen JavaScript-Zeilen um Folgendes:

   ```js
   ctx.strokeStyle = "white";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Konturen sind standardmäßig 1 Pixel breit. Mit der Eigenschaft [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth) können Sie die Breite ändern. Ihr Wert ist eine Zahl, die die Konturbreite in Pixeln angibt. Fügen Sie zwischen den beiden zuvor hinzugefügten Zeilen Folgendes ein:

   ```js
   ctx.lineWidth = 5;
   ```

Die weiße Umrandung sollte nun deutlich dicker sein! Das genügt fürs Erste. Ihr Beispiel sollte jetzt so aussehen:

```js hidden live-sample___2-canvas-rectangles
ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);
```

{{EmbedLiveSample("2-canvas-rectangles", '100%', 250)}}

Mit der Schaltfläche **Play** können Sie das Beispiel im MDN Playground öffnen und den Quellcode bearbeiten.

### Pfade zeichnen

Für alles, was komplexer als ein Rechteck ist, müssen Sie einen Pfad zeichnen. Dazu geben Sie im Code genau an, welchen Weg der Zeichenstift auf dem Canvas zurücklegen soll, um die gewünschte Form nachzuzeichnen. Canvas bietet unter anderem Funktionen für gerade Linien, Kreise und Bézierkurven.

Erstellen Sie für das neue Beispiel zunächst eine weitere Kopie Ihrer Canvas-Vorlage.

In den folgenden Abschnitten verwenden wir einige gemeinsame Methoden und Eigenschaften:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — beginnt einen Pfad an der aktuellen Position des Zeichenstifts auf dem Canvas. Bei einem neuen Canvas befindet sich der Stift zunächst bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — bewegt den Stift an einen anderen Punkt auf dem Canvas, ohne die Strecke dazwischen aufzuzeichnen. Der Stift „springt“ an die neue Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — zeichnet eine gefüllte Form, indem der bisher nachgezeichnete Pfad gefüllt wird.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — zeichnet eine Kontur entlang des bisher erstellten Pfads.
- Eigenschaften wie `lineWidth` und `fillStyle`/`strokeStyle` lassen sich sowohl für Pfade als auch für Rechtecke verwenden.

Eine einfache Zeichenoperation mit einem Pfad sieht typischerweise etwa so aus:

```js
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Linien zeichnen

Zeichnen wir ein gleichseitiges Dreieck auf den Canvas.

1. Fügen Sie zuerst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Sie wandelt Gradangaben in Radiant um. Das ist nützlich, weil Winkelwerte in JavaScript fast immer im Bogenmaß angegeben werden müssen, während Menschen gewöhnlich in Grad denken.

   ```js live-sample___3_canvas_paths
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Beginnen Sie anschließend Ihren Pfad, indem Sie unter dem eben hinzugefügten Code Folgendes ergänzen. Wir legen die Farbe unseres Dreiecks fest, beginnen einen Pfad und bewegen dann den Stift ohne zu zeichnen zum Punkt (50, 50). Dort beginnen wir mit dem Dreieck.

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "red";
   ctx.beginPath();
   ctx.moveTo(50, 50);
   ```

3. Fügen Sie nun am Ende Ihres Skripts die folgenden Zeilen hinzu:

   ```js live-sample___3_canvas_paths
   ctx.lineTo(150, 50);
   const triHeight = 50 * Math.tan(degToRad(60));
   ctx.lineTo(100, 50 + triHeight);
   ctx.lineTo(50, 50);
   ctx.fill();
   ```

   Gehen wir die Schritte der Reihe nach durch:

   Zuerst zeichnen wir eine Linie zum Punkt (150, 50). Unser Pfad verläuft damit 100 Pixel entlang der X-Achse nach rechts.

   Als Zweites berechnen wir mit einfacher Trigonometrie die Höhe des gleichseitigen Dreiecks. Wir zeichnen es mit der Spitze nach unten. Jeder Winkel eines gleichseitigen Dreiecks beträgt 60 Grad. Wenn wir es in der Mitte teilen, entstehen zwei rechtwinklige Dreiecke mit Winkeln von jeweils 90, 60 und 30 Grad. Für ihre Seiten gilt:
   - Die längste Seite heißt **Hypotenuse**.
   - Die Seite am 60-Grad-Winkel heißt **Ankathete**. Sie ist 50 Pixel lang, also halb so lang wie die gerade gezeichnete Linie.
   - Die Seite gegenüber dem 60-Grad-Winkel heißt **Gegenkathete**. Ihre Länge entspricht der gesuchten Höhe des Dreiecks.

   ![Ein gleichseitiges Dreieck mit der Spitze nach unten, dessen Winkel und Seiten beschriftet sind. Die waagerechte Linie oben ist als „Ankathete“ gekennzeichnet. Eine gepunktete senkrechte Linie von der Mitte der Ankathete ist als „Gegenkathete“ beschriftet und teilt das Dreieck in zwei gleiche rechtwinklige Dreiecke. Die rechte Seite des großen Dreiecks ist als Hypotenuse des rechtwinkligen Dreiecks gekennzeichnet. Obwohl alle drei Seiten des gleichseitigen Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des rechtwinkligen Dreiecks.](trigonometry.png)

   Eine Grundformel der Trigonometrie besagt, dass die Länge der Ankathete multipliziert mit dem Tangens des Winkels die Länge der Gegenkathete ergibt. Daher verwenden wir `50 * Math.tan(degToRad(60))`. Unsere Funktion `degToRad()` wandelt 60 Grad in Radiant um, da {{jsxref("Math.tan()")}} einen Winkel im Bogenmaß erwartet.

4. Nachdem die Höhe berechnet ist, zeichnen wir eine weitere Linie nach `(100, 50 + triHeight)`. Die X-Koordinate liegt genau zwischen den beiden zuvor festgelegten X-Werten. Zum Y-Wert müssen wir dagegen die Dreieckshöhe zu 50 addieren, weil die obere Dreieckskante 50 Pixel unter dem oberen Canvas-Rand liegt.
5. Die nächste Zeile zeichnet eine Linie zurück zum Ausgangspunkt des Dreiecks.
6. Schließlich rufen wir `ctx.fill()` auf, um den Pfad abzuschließen und die Form zu füllen.

#### Kreise zeichnen

Sehen wir uns nun an, wie Sie auf einem Canvas einen Kreis zeichnen. Dazu verwenden wir die Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc). Sie zeichnet an einem bestimmten Punkt einen Kreis oder Kreisbogen.

1. Fügen wir unserem Canvas einen Kreisbogen hinzu. Ergänzen Sie am Ende Ihres Codes Folgendes:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "blue";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` erwartet sechs Parameter. Die ersten beiden geben die X- beziehungsweise Y-Position des Kreismittelpunkts an. Der dritte Parameter ist der Radius. Der vierte und fünfte geben den Start- und Endwinkel des Kreisbogens an – mit 0 und 360 Grad erhalten wir also einen vollständigen Kreis. Der sechste Parameter bestimmt, ob gegen oder mit dem Uhrzeigersinn gezeichnet wird (`false` bedeutet im Uhrzeigersinn).

   > [!NOTE]
   > 0 Grad zeigt waagerecht nach rechts.

2. Fügen wir einen weiteren Kreisbogen hinzu:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "yellow";
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   Das Muster ist sehr ähnlich, unterscheidet sich jedoch in zwei Punkten:
   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt. Dadurch wird der Kreisbogen gegen den Uhrzeigersinn gezeichnet. Obwohl sein Startwinkel -45 Grad und sein Endwinkel 45 Grad beträgt, verläuft der Bogen somit über die übrigen 270 Grad statt innerhalb des 90-Grad-Abschnitts. Wenn Sie `true` in `false` ändern und den Code erneut ausführen, wird nur der 90-Grad-Ausschnitt des Kreises gezeichnet.
   - Vor dem Aufruf von `fill()` zeichnen wir eine Linie zum Kreismittelpunkt. Dadurch entsteht die an Pac-Man erinnernde Aussparung. Wenn Sie diese Linie entfernen – probieren Sie es aus! – und den Code erneut ausführen, wird zwischen Start- und Endpunkt des Kreisbogens lediglich ein Abschnitt des Kreises abgeschnitten. Das zeigt eine weitere wichtige Eigenschaft von Canvas: Wenn Sie einen unvollständigen, also nicht geschlossenen Pfad füllen, ergänzt der Browser zwischen Start- und Endpunkt eine gerade Linie und füllt anschließend die Form.

Das ist alles für den Moment. Ihr fertiges Beispiel sollte so aussehen:

{{EmbedLiveSample("3_canvas_paths", '100%', 200)}}

Mit der Schaltfläche **Play** können Sie das Beispiel im MDN Playground öffnen und den Quellcode bearbeiten.

> [!NOTE]
> Weitere Informationen über fortgeschrittene Pfadfunktionen wie Bézierkurven finden Sie im Tutorial [Formen mit Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes).

### Text

Canvas bietet auch Funktionen zum Zeichnen von Text. Sehen wir sie uns kurz an. Erstellen Sie für das neue Beispiel eine weitere Kopie Ihrer Canvas-Vorlage.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnet die Konturen von Text.

Bei ihrer grundlegenden Verwendung erwarten beide Methoden drei Parameter: den zu zeichnenden Text sowie die X- und Y-Koordinaten seines Ausgangspunkts. Dieser Punkt entspricht der **unteren linken** Ecke des **Textfelds** – also des Rechtecks, das den gezeichneten Text umgibt. Das kann verwirrend sein, da andere Zeichenoperationen meist an der oberen linken Ecke beginnen. Behalten Sie diesen Unterschied im Hinterkopf.

Außerdem gibt es Eigenschaften zur Steuerung der Textdarstellung. Mit [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) können Sie beispielsweise Schriftfamilie und Schriftgröße festlegen. Der Wert verwendet dieselbe Syntax wie die CSS-Eigenschaft {{cssxref("font")}}.

Canvas-Inhalte sind für Screenreader nicht zugänglich. Auf den Canvas gezeichneter Text ist im DOM nicht verfügbar und muss für die Barrierefreiheit anderweitig bereitgestellt werden. In diesem Beispiel geben wir ihn als Wert von `aria-label` an.

Fügen Sie am Ende Ihres JavaScript-Codes den folgenden Block hinzu:

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

Hier zeichnen wir zwei Textzeilen: eine gefüllt und eine als Kontur. Das Beispiel sollte so aussehen:

{{EmbedLiveSample("4-canvas-text", '100%', 180)}}

Klicken Sie auf **Play**, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Experimentieren Sie damit! Weitere Informationen zu den Optionen für Canvas-Text finden Sie unter [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Bilder auf einen Canvas zeichnen

Sie können externe Bilder auf einem Canvas darstellen. Dabei kann es sich um gewöhnliche Bilder, Videoframes oder den Inhalt anderer Canvases handeln. Zunächst verwenden wir nur einfache Bilder.

1. Erstellen Sie wie zuvor eine weitere Kopie Ihrer Canvas-Vorlage für das neue Beispiel.

   Bilder werden mit der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf den Canvas gezeichnet. Ihre einfachste Variante erwartet drei Parameter: eine Referenz auf das darzustellende Bild sowie die X- und Y-Koordinaten seiner oberen linken Ecke.

2. Beschaffen wir zunächst eine Bildquelle, die wir in unseren Canvas einfügen können. Ergänzen Sie am Ende Ihres JavaScript-Codes Folgendes:

   ```js live-sample___5-canvas-images
   const image = new Image();
   image.src =
     "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png";
   ```

   Hier erstellen wir mit dem Konstruktor [`Image()`](/de/docs/Web/API/HTMLImageElement/Image) ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt. Das zurückgegebene Objekt hat denselben Typ wie eine Referenz auf ein vorhandenes {{htmlelement("img")}}-Element. Anschließend setzen wir sein [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut auf die Datei mit unserem Firefox-Logo. Daraufhin beginnt der Browser, das Bild zu laden.

3. Wir könnten nun versuchen, das Bild mit `drawImage()` einzufügen. Zunächst müssen wir aber sicherstellen, dass die Bilddatei geladen wurde, da der Code sonst fehlschlägt. Dafür verwenden wir das `load`-Ereignis, das erst ausgelöst wird, wenn das Bild vollständig geladen ist. Fügen Sie unter dem bisherigen Code den folgenden Block hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser öffnen, sollten Sie das Bild auf dem Canvas sehen, wenn auch recht groß.

4. Es gibt noch mehr Möglichkeiten: Was, wenn wir nur einen Bildausschnitt anzeigen oder die Größe ändern möchten? Beides ist mit der umfangreicheren Variante von `drawImage()` möglich. Ändern Sie die Zeile mit `ctx.drawImage()` wie folgt:

   ```js
   ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185);
   ```

   ```js hidden live-sample___5-canvas-images
   image.addEventListener("load", () =>
     ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185),
   );
   ```

   - Der erste Parameter ist wie zuvor die Bildreferenz.
   - Die Parameter 2 und 3 legen die Koordinaten der oberen linken Ecke des gewünschten Ausschnitts fest, bezogen auf die obere linke Ecke des geladenen Bilds. Alles links beziehungsweise oberhalb dieser Koordinaten wird nicht gezeichnet.
   - Die Parameter 4 und 5 legen die Breite und Höhe des Ausschnitts aus dem geladenen Originalbild fest.
   - Die Parameter 6 und 7 legen fest, wo die obere linke Ecke des Ausschnitts auf dem Canvas gezeichnet werden soll, bezogen auf dessen obere linke Ecke.
   - Die Parameter 8 und 9 geben die Breite und Höhe an, mit denen der Ausschnitt gezeichnet wird. Hier verwenden wir dieselben Maße wie für den Originalausschnitt. Mit anderen Werten könnten Sie ihn skalieren.

5. Wenn sich das Bild inhaltlich wesentlich ändert, muss auch seine Beschreibung aktualisiert werden.

   ```js live-sample___5-canvas-images
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das fertige Beispiel sollte so aussehen:

{{EmbedLiveSample("5-canvas-images", '100%', 260)}}

Klicken Sie auf **Play**, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

## Schleifen und Animationen

Bisher haben wir einige grundlegende Anwendungen von 2D-Canvas kennengelernt. Die Möglichkeiten von Canvas kommen jedoch erst richtig zur Geltung, wenn Sie Inhalte aktualisieren oder animieren. Schließlich lassen sich Canvas-Bilder per Skript steuern! Wenn sich nichts ändern soll, können Sie ebenso gut statische Bilder verwenden und sich die zusätzliche Arbeit sparen.

### Eine Schleife erstellen

Schleifen bieten viele Möglichkeiten für Canvas-Grafiken: Sie können Canvas-Befehle wie anderen JavaScript-Code innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife oder einer anderen Schleife ausführen.

Erstellen wir ein Beispiel.

1. Fertigen Sie eine weitere Kopie Ihrer Canvas-Vorlage an.
2. Fügen Sie am Ende Ihres JavaScript-Codes die folgende Zeile hinzu. Sie verwendet die Methode [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Koordinatenursprung des Canvas verschiebt:

   ```js live-sample___6-canvas-for-loop
   ctx.translate(width / 2, height / 2);
   ```

   Dadurch wandert der Ursprung (0, 0) von der oberen linken Ecke in die Mitte des Canvas. Das ist in vielen Situationen nützlich, auch hier: Wir möchten unser Motiv relativ zur Canvas-Mitte zeichnen.

3. Ergänzen Sie am Ende Ihres JavaScript-Codes Folgendes:

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

   Hier implementieren wir erneut die Funktion `degToRad()` aus dem Dreiecksbeispiel. Hinzu kommen die Funktion `rand()`, die eine Zufallszahl zwischen einer unteren und einer oberen Grenze zurückgibt, sowie die Variablen `length` und `moveOffset`. Auf sie kommen wir später zurück.

4. Wir möchten innerhalb der `for`-Schleife etwas auf den Canvas zeichnen und es bei jedem Durchlauf verändern, sodass ein interessantes Motiv entsteht. Fügen Sie den folgenden Code in Ihre `for`-Schleife ein:

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

   Bei jedem Durchlauf geschieht Folgendes:
   - Wir setzen `fillStyle` auf einen leicht transparenten Violettton. Er ändert sich abhängig vom Wert von `length` bei jedem Durchlauf. Wie Sie später sehen werden, wird `length` mit jedem Schleifendurchlauf kleiner. Dadurch wird die Farbe bei jedem weiteren Dreieck heller.
   - Wir beginnen einen Pfad.
   - Wir bewegen den Stift zu den Koordinaten `(moveOffset, moveOffset)`. Die Variable bestimmt, wie weit wir die Position für jedes neue Dreieck verschieben.
   - Wir zeichnen eine Linie zu `(moveOffset+length, moveOffset)`. Sie ist `length` lang und verläuft parallel zur X-Achse.
   - Wir berechnen wie zuvor die Höhe des Dreiecks.
   - Wir zeichnen eine Linie zur unteren Dreiecksspitze und anschließend zurück zum Anfangspunkt.
   - Mit `fill()` füllen wir das Dreieck.
   - Wir aktualisieren die Variablen für die Dreiecksfolge, um das nächste Dreieck zeichnen zu können. Wir verringern `length` um 1, sodass die Dreiecke immer kleiner werden, und erhöhen `moveOffset` ein wenig, damit jedes weitere Dreieck etwas weiter verschoben ist. Außerdem verwenden wir die Methode [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), mit der sich der gesamte Canvas drehen lässt. Vor dem Zeichnen des nächsten Dreiecks drehen wir ihn um 5 Grad.

Das war’s! Das fertige Beispiel sollte so aussehen:

{{EmbedLiveSample("6-canvas-for-loop", '100%', 550)}}

Klicken Sie auf **Play**, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Experimentieren Sie damit und gestalten Sie es nach Ihren Vorstellungen! Sie könnten beispielsweise:

- Rechtecke oder Kreisbögen statt Dreiecken zeichnen oder Bilder einfügen.
- Mit den Werten von `length` und `moveOffset` experimentieren.
- Mithilfe der zuvor definierten, bisher aber nicht verwendeten Funktion `rand()` Zufallszahlen einbringen.

### Animationen

Unser Schleifenbeispiel hat Spaß gemacht. Für anspruchsvollere Canvas-Anwendungen wie Spiele und Echtzeitvisualisierungen benötigen Sie allerdings eine dauerhaft laufende Schleife. Wenn Sie sich den Canvas wie einen Film vorstellen, soll sich die Darstellung für jeden Frame aktualisieren. Ideal sind 60 Frames pro Sekunde, damit Bewegungen für das menschliche Auge flüssig erscheinen.

JavaScript bietet mehrere Funktionen, mit denen Sie eine Funktion mehrmals pro Sekunde wiederholt ausführen können. Für unsere Zwecke eignet sich [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am besten. Die Funktion erwartet einen Parameter: die Funktion, die für jeden Frame ausgeführt werden soll. Sobald der Browser den Bildschirm das nächste Mal aktualisieren kann, ruft er diese Funktion auf. Zeichnet sie den nächsten Animationszustand und ruft vor ihrem Ende erneut `requestAnimationFrame()` auf, läuft die Animationsschleife weiter. Die Schleife endet, wenn Sie `requestAnimationFrame()` nicht mehr aufrufen oder wenn Sie nach dem Aufruf von `requestAnimationFrame()`, aber vor der Ausführung des geplanten Frames, [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) aufrufen.

> [!NOTE]
> Wenn Sie die Animation nicht mehr benötigen, sollten Sie in Ihrem Hauptcode `cancelAnimationFrame()` aufrufen. So stellen Sie sicher, dass keine geplanten Aktualisierungen mehr ausstehen.

Der Browser kümmert sich um komplexe Details: Er sorgt beispielsweise für eine gleichmäßige Animationsgeschwindigkeit und vermeidet es, Ressourcen für nicht sichtbare Animationen zu verschwenden.

Sehen wir uns dazu noch einmal unser [Beispiel mit springenden Bällen](#frame_bouncing-balls) an. Der Code für die Bewegungsschleife sieht so aus:

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

Am Ende des Codes rufen wir `loop()` einmal auf. Dadurch beginnt der Zyklus und der erste Animationsframe wird gezeichnet. Danach ruft `loop()` wiederholt `requestAnimationFrame(loop)` auf, um jeweils den nächsten Frame auszuführen.

Beachten Sie, dass wir den Canvas bei jedem Frame vollständig löschen und alles neu zeichnen. Wir zeichnen jeden Ball, aktualisieren seine Position und prüfen, ob er mit anderen Bällen zusammenstößt. Sobald Sie eine Grafik auf einen Canvas gezeichnet haben, können Sie sie nicht mehr einzeln bearbeiten, wie es bei DOM-Elementen möglich ist. Ein Ball lässt sich auf dem Canvas nicht einfach verschieben: Nach dem Zeichnen ist er Teil des Canvas und kein eigenständig zugängliches Element oder Objekt. Stattdessen müssen Sie ihn löschen und neu zeichnen. Dazu können Sie entweder den gesamten Frame löschen und alles neu zeichnen oder im Code genau bestimmen, welche Bereiche entfernt werden müssen, und nur den nötigen Teil des Canvas löschen und neu zeichnen.

Die Optimierung von Grafikanimationen ist ein eigenes Fachgebiet der Programmierung und bietet zahlreiche ausgeklügelte Techniken. Für unser Beispiel benötigen wir sie jedoch nicht!

Im Allgemeinen besteht eine Canvas-Animation aus folgenden Schritten:

1. Den Canvas-Inhalt löschen, beispielsweise mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect).
2. Bei Bedarf den Zustand mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) speichern. So können Sie zuvor geänderte Canvas-Einstellungen für die spätere Verwendung sichern, was bei komplexeren Anwendungen nützlich ist.
3. Die zu animierenden Grafiken zeichnen.
4. Die in Schritt 2 gespeicherten Einstellungen mit [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore) wiederherstellen.
5. Mit `requestAnimationFrame()` das Zeichnen des nächsten Animationsframes planen.

> [!NOTE]
> Auf `save()` und `restore()` gehen wir hier nicht näher ein. Sie werden im Tutorial [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations) und den folgenden Tutorials erklärt.

### Animation einer laufenden Figur

Erstellen wir nun eine einfache Animation: Mithilfe eines Sprite-Sheets bewegen wir eine Figur über den Bildschirm.

1. Erstellen Sie eine weitere Kopie unserer Canvas-Vorlage und öffnen Sie sie in Ihrem Code-Editor.

2. Passen Sie den HTML-Ersatzinhalt an das Bild an:

   ```html live-sample___7-canvas-walking-animation
   <canvas class="myCanvas">
     <p>A cat walking.</p>
   </canvas>
   ```

3. Diesmal färben wir den Hintergrund nicht schwarz. Nachdem Sie die Variable `ctx` erhalten haben, färben Sie ihn stattdessen hellgrau:

   ```js live-sample___7-canvas-walking-animation
   ctx.fillStyle = "#e5e6e9";
   ctx.fillRect(0, 0, width, height);
   ```

4. Fügen Sie am Ende des JavaScript-Codes die folgende Zeile hinzu, um den Koordinatenursprung wieder in die Mitte des Canvas zu verschieben:

   ```js live-sample___7-canvas-walking-animation
   ctx.translate(width / 2, height / 2);
   ```

5. Erstellen wir nun ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, setzen seine Eigenschaft [`src`](/de/docs/Web/API/HTMLImageElement/src) auf das zu ladende Bild und fügen einen `onload`-Event-Handler hinzu. Er ruft die Funktion `draw()` auf, sobald das Bild geladen wurde:

   ```js live-sample___7-canvas-walking-animation
   const image = new Image();
   image.src =
     "https://developer.mozilla.org/shared-assets/images/examples/web-animations/cat_sprite.png";
   image.onload = draw;
   ```

6. Als Nächstes fügen wir Variablen hinzu, mit denen wir die Zeichenposition auf dem Bildschirm und die Nummer des anzuzeigenden Sprites festhalten.

   ```js live-sample___7-canvas-walking-animation
   let spriteIndex = 0;
   let posX = 0;
   const spriteWidth = 300;
   const spriteHeight = 150;
   const totalSprites = 12;
   ```

   Das Sprite-Bild wurde von [Rachel Nabors](https://nearestnabors.com/) im Rahmen ihrer Dokumentationsarbeit an der [Web Animations API](/de/docs/Web/API/Web_Animations_API) erstellt und freundlicherweise zur Verfügung gestellt. Es sieht so aus:

   ![Ein Sprite-Sheet mit drei Spalten. Jede enthält eine Bildfolge einer schwarzen Katze, die sich in unterschiedlichem Tempo nach links bewegt. Jedes Sprite ist 300 Pixel breit und 150 Pixel hoch.](/shared-assets/images/examples/web-animations/cat_sprite.png)

   Es enthält drei Spalten. Jede Spalte zeigt eine Bewegungsfolge der Katze in einem anderen Tempo: Gehen, Traben oder Galoppieren. Jede Folge umfasst 12 oder 13 Sprites, die jeweils 300 Pixel breit und 150 Pixel hoch sind. Wir verwenden die linke Folge für die Gehbewegung mit 12 Sprites. Um jedes Sprite einzeln darzustellen, schneiden wir mit `drawImage()` ein Bild aus dem Sprite-Sheet aus und zeigen nur diesen Teil an – wie zuvor beim Firefox-Logo. Die X- und Y-Koordinaten des Ausschnitts müssen jeweils ein Vielfaches von `spriteWidth` beziehungsweise `spriteHeight` sein. Da wir die linke Folge verwenden, ist die X-Koordinate immer 0. Der Ausschnitt ist stets `spriteWidth` breit und `spriteHeight` hoch.

7. Fügen Sie nun am Ende des Codes eine leere Funktion `draw()` ein, die wir anschließend ergänzen:

   ```js
   function draw() {}
   ```

   ```js-nolint hidden live-sample___7-canvas-walking-animation
   function draw() {
   ```

8. Der restliche Code dieses Abschnitts gehört in `draw()`. Fügen Sie zunächst die folgende Zeile hinzu. Sie löscht den Canvas, damit wir den nächsten Frame zeichnen können. Beachten Sie, dass wir für die obere linke Ecke des Rechtecks `-(width / 2), -(height / 2)` angeben müssen, weil wir den Koordinatenursprung zuvor auf `width/2, height/2` verschoben haben.

   ```js live-sample___7-canvas-walking-animation
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

9. Als Nächstes zeichnen wir das Bild mit der Variante von `drawImage`, die neun Parameter erwartet. Fügen Sie Folgendes hinzu:

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

   Dabei gilt:
   - Mit `image` geben wir das einzufügende Bild an.
   - Die Parameter 2 und 3 bestimmen die obere linke Ecke des Ausschnitts aus dem Quellbild. Der X-Wert ist 0 für die linke Spalte; der Y-Wert durchläuft Vielfache von `spriteHeight`. Um eine der anderen Spalten zu wählen, können Sie den X-Wert durch `spriteWidth` oder `2 * spriteWidth` ersetzen.
   - Die Parameter 4 und 5 legen die Größe des Ausschnitts fest: `spriteWidth` und `spriteHeight`.
   - Die Parameter 6 und 7 geben die obere linke Ecke des Bereichs an, in den der Ausschnitt auf dem Canvas gezeichnet wird. Die X-Position ist 0 + `posX`, sodass wir die Zeichenposition über `posX` verändern können. Die Y-Position beträgt `-spriteHeight / 2`; dadurch wird das Bild vertikal auf dem Canvas zentriert.
   - Die Parameter 8 und 9 legen die Größe des Bilds auf dem Canvas fest. Wir möchten die Originalgröße beibehalten und geben deshalb `spriteWidth` und `spriteHeight` als Breite und Höhe an.

10. Nach dem Zeichnen ändern wir den Wert von `spriteIndex` – allerdings nicht bei jedem Frame. Fügen Sie am Ende der Funktion `draw()` den folgenden Block hinzu:

    ```js live-sample___7-canvas-walking-animation
    if (posX % 11 === 0) {
      if (spriteIndex === totalSprites - 1) {
        spriteIndex = 0;
      } else {
        spriteIndex++;
      }
    }
    ```

    Der gesamte Block steht innerhalb von `if (posX % 11 === 0) { }`. Mit dem Modulo-Operator (`%`), auch [Restoperator](/de/docs/Web/JavaScript/Reference/Operators/Remainder) genannt, prüfen wir, ob sich `posX` ohne Rest durch 11 teilen lässt. Ist das der Fall, erhöhen wir `spriteIndex` und wechseln zum nächsten Sprite. Nach dem letzten Sprite setzen wir den Index wieder auf 0. So wechseln wir das Sprite nur bei jedem elften Frame, also ungefähr sechsmal pro Sekunde. `requestAnimationFrame()` ruft die Funktion nach Möglichkeit bis zu 60-mal pro Sekunde auf. Wir verlangsamen den Bildwechsel bewusst: Da uns nur 12 Sprites zur Verfügung stehen, würde sich die Figur sonst viel zu schnell bewegen!

    Innerhalb des äußeren Blocks prüfen wir mit einer [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, ob `spriteIndex` das letzte Sprite erreicht hat. Wenn wir es bereits anzeigen, setzen wir `spriteIndex` auf 0 zurück. Andernfalls erhöhen wir den Wert um 1.

11. Nun müssen wir noch festlegen, wie sich `posX` bei jedem Frame ändert. Fügen Sie direkt unter dem letzten Block den folgenden Code ein:

    ```js live-sample___7-canvas-walking-animation
    if (posX < -width / 2 - spriteWidth) {
      const newStartPos = width / 2;
      posX = Math.ceil(newStartPos);
    } else {
      posX -= 2;
    }
    ```

    Mit einer weiteren `if...else`-Anweisung prüfen wir, ob `posX` kleiner als `-width/2 - spriteWidth` geworden ist. In diesem Fall hat die Katze den linken Bildschirmrand vollständig verlassen. Wir berechnen dann eine Position unmittelbar rechts außerhalb des Bildschirms.

    Hat die Katze den Bildschirm noch nicht verlassen, verringern wir `posX` um 2. Beim nächsten Zeichnen bewegt sie sich dadurch ein Stück nach links.

12. Zum Schluss erstellen wir die Animationsschleife, indem wir am Ende der Funktion `draw()` [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) aufrufen:

    ```js live-sample___7-canvas-walking-animation
    window.requestAnimationFrame(draw);
    ```

```js-nolint hidden live-sample___7-canvas-walking-animation
}
```

Fertig! Das Ergebnis sollte so aussehen:

{{EmbedLiveSample("7-canvas-walking-animation", '100%', 260)}}

Mit der Schaltfläche **Play** können Sie das Beispiel im MDN Playground öffnen und den Quellcode bearbeiten.

### Eine einfache Zeichenanwendung

Zum Abschluss der Animationsbeispiele zeigen wir eine sehr einfache Zeichenanwendung. Sie veranschaulicht, wie sich eine Animationsschleife mit Benutzereingaben – hier Mausbewegungen – kombinieren lässt. Sie müssen dieses Beispiel nicht selbst Schritt für Schritt erstellen; wir sehen uns nur die interessantesten Stellen im Code an.

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

Sie können das Beispiel unten direkt ausprobieren. Mit **Play** öffnen Sie es außerdem im MDN Playground, wo Sie den Quellcode bearbeiten können:

{{EmbedLiveSample("8-canvas-drawing-app", '100%', 600)}}

Sehen wir uns die wichtigsten Stellen an. Mit den drei Variablen `curX`, `curY` und `pressed` halten wir die X- und Y-Koordinaten der Maus sowie den Zustand der Maustaste fest. Bei einer Mausbewegung wird die als `onmousemove`-Event-Handler festgelegte Funktion aufgerufen, die die aktuellen X- und Y-Werte erfasst. Über die Event-Handler `onmousedown` und `onmouseup` setzen wir `pressed` beim Drücken der Maustaste auf `true` und beim Loslassen wieder auf `false`.

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

Wenn die Schaltfläche „Clear canvas“ gedrückt wird, führen wir eine einfache Funktion aus, die den gesamten Canvas wie zuvor gesehen wieder schwarz färbt:

```js live-sample___8-canvas-drawing-app
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal recht einfach: Wenn `pressed` den Wert `true` hat, zeichnen wir einen Kreis. Seine Füllfarbe entspricht dem Wert der Farbauswahl, sein Radius dem Wert des Schiebereglers. Wir müssen den Kreis 85 Pixel oberhalb der gemessenen Position zeichnen: Die vertikale Mausposition wird vom oberen Rand des Viewports aus gemessen, während wir relativ zum oberen Rand des Canvas zeichnen. Dieser beginnt unterhalb der 85 Pixel hohen Werkzeugleiste. Würden wir nur `curY` als Y-Koordinate verwenden, erschiene der Kreis 85 Pixel unter der Mausposition.

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

Alle Typen des {{htmlelement("input")}}-Elements werden gut unterstützt. Unterstützt ein Browser einen bestimmten Eingabetyp nicht, verwendet er stattdessen ein einfaches Textfeld.

## WebGL

Lassen wir nun 2D hinter uns und werfen einen kurzen Blick auf 3D-Canvas. 3D-Canvas-Inhalte werden mit der [WebGL API](/de/docs/Web/API/WebGL_API) erstellt. Sie ist vollständig von der 2D-Canvas-API getrennt, obwohl beide ihre Ergebnisse auf {{htmlelement("canvas")}}-Elementen darstellen.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht die direkte Kommunikation mit der {{Glossary("GPU", "GPU")}} des Computers. Reiner WebGL-Code ähnelt daher eher hardwarenahen Sprachen wie C++ als gewöhnlichem JavaScript. Er ist recht komplex, aber äußerst leistungsfähig.

### Eine Bibliothek verwenden

Wegen dieser Komplexität verwenden die meisten Entwicklerinnen und Entwickler für 3D-Grafiken eine JavaScript-Bibliothek von Drittanbietern, beispielsweise [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten dieser Bibliotheken funktionieren ähnlich: Sie ermöglichen es, Grundformen und eigene Formen zu erstellen, Kameras und Lichtquellen zu positionieren, Oberflächen mit Texturen zu versehen und vieles mehr. Sie übernehmen die WebGL-Arbeit für Sie, sodass Sie auf einer höheren Abstraktionsebene arbeiten können.

Natürlich müssen Sie dafür eine weitere API lernen – in diesem Fall die einer Drittanbieterbibliothek. Das ist jedoch wesentlich einfacher, als reinen WebGL-Code zu schreiben.

### Ein rotierender Würfel

Sehen wir uns an, wie Sie mit einer WebGL-Bibliothek etwas erstellen. Wir verwenden [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), eine der beliebtesten Bibliotheken. In diesem Tutorial erstellen wir einen rotierenden 3D-Würfel.

1. Erstellen Sie auf Ihrer lokalen Festplatte einen neuen Ordner namens `webgl-cube`.
2. Erstellen Sie darin eine Datei namens `index.html` und fügen Sie folgenden Inhalt ein:

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

3. Erstellen Sie im selben Ordner eine Datei namens `script.js`. Lassen Sie sie vorerst leer.
4. Erstellen Sie ebenfalls in diesem Ordner eine Datei namens `style.css` und fügen Sie folgenden Inhalt ein:

   ```css live-sample___9-webgl-cube
   html,
   body {
     margin: 0;
   }

   body {
     overflow: hidden;
   }
   ```

5. `three.js` ist bereits in unsere Seite eingebunden – dafür sorgt das erste `<script>`-Element in unserem HTML. Nun können wir in `script.js` JavaScript schreiben, das die Bibliothek verwendet. Beginnen wir mit einer neuen Szene. Fügen Sie in `script.js` Folgendes ein:

   ```js live-sample___9-webgl-cube
   const scene = new THREE.Scene();
   ```

   Der Konstruktor [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene) erstellt eine neue Szene. Sie repräsentiert die gesamte 3D-Welt, die wir darstellen möchten.

6. Als Nächstes benötigen wir eine **Kamera**, um die Szene betrachten zu können. In einer 3D-Darstellung repräsentiert die Kamera die Position einer betrachtenden Person in der Welt. Fügen Sie die folgenden Zeilen hinzu, um eine Kamera zu erstellen:

   ```js live-sample___9-webgl-cube
   const camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000,
   );
   camera.position.z = 5;
   ```

   Der Konstruktor [`PerspectiveCamera()`](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera) erwartet vier Argumente:
   - Das Sichtfeld: Es bestimmt in Grad, wie breit der sichtbare Bereich vor der Kamera ist.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Normalerweise entspricht es der Breite der Szene geteilt durch ihre Höhe. Ein anderer Wert verzerrt die Szene, was meist unerwünscht ist.
   - Die nahe Begrenzungsebene: Sie bestimmt, wie nah sich Objekte an der Kamera befinden dürfen, bevor sie nicht mehr dargestellt werden. Wenn Sie beispielsweise Ihre Fingerspitze immer näher an den Bereich zwischen Ihren Augen bewegen, können Sie sie irgendwann nicht mehr sehen.
   - Die ferne Begrenzungsebene: Sie bestimmt, ab welcher Entfernung von der Kamera Objekte nicht mehr dargestellt werden.

   Außerdem positionieren wir die Kamera auf der Z-Achse in einem Abstand von 5 Einheiten. Wie in CSS zeigt diese Achse aus dem Bildschirm heraus zu Ihnen als betrachtender Person.

7. Der dritte wichtige Bestandteil ist ein Renderer. Dieses Objekt stellt eine Szene aus der Perspektive einer Kamera dar. Wir erstellen ihn zunächst mit dem Konstruktor [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer), verwenden ihn aber erst später. Fügen Sie die folgenden Zeilen hinzu:

   ```js live-sample___9-webgl-cube
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen Renderer. Die zweite legt fest, in welcher Größe er die Kameraperspektive zeichnet. Die dritte fügt das vom Renderer erstellte {{htmlelement("canvas")}}-Element dem {{htmlelement("body")}} des Dokuments hinzu. Alles, was der Renderer zeichnet, erscheint nun in unserem Fenster.

8. Als Nächstes erstellen wir den Würfel, der auf dem Canvas zu sehen sein soll. Fügen Sie am Ende Ihres JavaScript-Codes den folgenden Block hinzu:

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

   Hier gibt es etwas mehr zu beachten. Gehen wir schrittweise vor:
   - Zuerst erstellen wir die globale Variable `cube`, damit wir im gesamten Code auf den Würfel zugreifen können.
   - Danach erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt und rufen darauf `load()` auf. Hier übergeben wir `load()` zwei Parameter, obwohl die Methode auch weitere akzeptiert: die zu ladende Textur – eine PNG-Datei – und eine Funktion, die nach dem Laden der Textur ausgeführt wird.
   - Innerhalb dieser Funktion legen wir über Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts fest, dass das Bild auf allen Seiten des Würfels zweimal horizontal und zweimal vertikal wiederholt werden soll. Anschließend erstellen wir ein [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt. Wir kombinieren beide zu einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) und erhalten so unseren Würfel. Ein Objekt benötigt normalerweise eine Geometrie, die seine Form bestimmt, und ein Material, das das Aussehen seiner Oberfläche festlegt.
   - Zum Schluss fügen wir den Würfel zur Szene hinzu und rufen `draw()` auf, um die Animation zu starten.

9. Bevor wir `draw()` definieren, fügen wir der Szene noch zwei Lichtquellen hinzu, damit sie lebendiger wirkt. Ergänzen Sie die folgenden Blöcke:

   ```js live-sample___9-webgl-cube
   const light = new THREE.AmbientLight("white"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("white");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt erzeugt weiches Licht, das die gesamte Szene etwas aufhellt – ähnlich wie das Sonnenlicht im Freien. Ein [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt erzeugt dagegen einen gerichteten Lichtkegel, vergleichbar mit einer Taschenlampe oder einem Scheinwerfer.

10. Fügen wir abschließend am Ende des Codes unsere Funktion `draw()` hinzu:

    ```js live-sample___9-webgl-cube
    function draw() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);

      requestAnimationFrame(draw);
    }
    ```

    Das Prinzip ist recht einfach: Bei jedem Frame drehen wir den Würfel ein wenig um seine X- und Y-Achse und rendern anschließend die Szene aus Sicht der Kamera. Zum Schluss planen wir mit `requestAnimationFrame()` das Zeichnen des nächsten Frames.

Das fertige Ergebnis sollte so aussehen:

{{EmbedLiveSample("9-webgl-cube", "100%", 500)}}

> [!NOTE]
> In unserem GitHub-Repository finden Sie ein weiteres interessantes Beispiel für einen 3D-Würfel: [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/threejs-video-cube) ([Live-Demo ansehen](https://mdn.github.io/learning-area/javascript/apis/threejs-video-cube/)). Es verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von der Webcam eines Computers aufzunehmen und ihn als Textur auf eine Würfelseite zu projizieren!

## Zusammenfassung

Sie sollten nun die Grundlagen der Grafikprogrammierung mit Canvas und WebGL sowie einige Anwendungsmöglichkeiten dieser APIs kennen. Außerdem wissen Sie, wo Sie weiterführende Informationen finden. Viel Spaß beim Experimentieren!

## Siehe auch

Wir haben hier nur die Grundlagen von Canvas behandelt – es gibt noch viel mehr zu entdecken! Die folgenden Artikel helfen Ihnen dabei.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — eine ausführliche Tutorialreihe, die 2D-Canvas wesentlich detaillierter erklärt als dieser Artikel. Sehr empfehlenswert.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — eine Reihe über die Grundlagen der Programmierung mit reinem WebGL.
- [Eine einfache Demo mit Three.js erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — ein grundlegendes Three.js-Tutorial. Entsprechende Leitfäden gibt es auch für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) und [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spieleentwicklung](/de/docs/Games) — die MDN-Startseite zur Entwicklung von Webspielen. Dort finden Sie nützliche Tutorials und Techniken für 2D- und 3D-Canvas. Sehen Sie sich die Menüeinträge zu Techniken und Tutorials an.

## Beispiele

- [Violent theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — verwendet die Web Audio API zur Klangerzeugung und Canvas für eine passende Visualisierung.
- [Voice change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — visualisiert Echtzeit-Audiodaten aus der Web Audio API auf einem Canvas.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
