---
title: Zeichnen von Grafiken
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: c403dd32f627cd972048db05db04ef76f3ab84fe
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsfähige Werkzeuge zur Grafikprogrammierung, von der Scalable Vector Graphics ([SVG](/de/docs/Web/SVG))-Sprache bis hin zu APIs zum Zeichnen auf HTML-Elementen vom Typ {{htmlelement("canvas")}} (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in Canvas und weiterführende Ressourcen, damit Sie mehr darüber lernen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und zentrale API-Themen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die in dieser Lektion behandelten Konzepte und Anwendungsfälle, die durch die APIs ermöglicht werden.</li>
          <li>Grundsyntax und Verwendung von <code>&lt;canvas&gt;</code> und zugehörigen APIs.</li>
          <li>Verwendung von Timern und <code>requestAnimationFrame()</code> zur Einrichtung von Animationsschleifen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Das Web bestand ursprünglich nur aus Text, was sehr langweilig war, also wurden Bilder eingeführt — zuerst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Dies war jedoch immer noch nicht genug. Während Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden konnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) — da sie durch Markup dargestellt werden — gab es noch keine Möglichkeit, dasselbe mit Bitmap-Bildern zu tun, und die verfügbaren Tools waren ziemlich begrenzt. Das Web hatte immer noch keine Möglichkeit, effektiv Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die üblicherweise von niedrigeren Programmiersprachen wie C++ oder Java behandelt werden.

Die Situation begann sich zu verbessern, als Browser 2004 damit begannen, das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas-API](/de/docs/Web/API/Canvas_API) zu unterstützen. Wie Sie unten sehen werden, bietet Canvas einige nützliche Werkzeuge zum Erstellen von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere in Kombination mit einigen anderen APIs, die die Webplattform bietet, kann jedoch schwierig oder unmöglich zugänglich gemacht werden.

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

Etwa 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Dies wurde zu [WebGL](/de/docs/Web/API/WebGL_API), das bei Browserherstellern Boden gewann und um 2009–2010 standardisiert wurde. Mit WebGL können Sie echte 3D-Grafiken in Ihrem Webbrowser erstellen.

Dieser Artikel wird sich hauptsächlich auf 2D-Canvas konzentrieren, da roher WebGL-Code sehr komplex ist. Wir werden jedoch zeigen, wie Sie [eine WebGL-Bibliothek verwenden, um eine 3D-Szene einfacher zu erstellen](#webgl), und Sie können ein Tutorial zur Behandlung von rohem WebGL an anderer Stelle finden — siehe [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Erste Schritte mit einem `<canvas>`

Wenn Sie eine 2D- _oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-Element vom Typ {{htmlelement("canvas")}} beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in dem das Bild gezeichnet wird. Dies ist so einfach wie das Einfügen des Elements auf der Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dies wird ein Canvas auf der Seite mit einer Größe von 320 x 240 Pixel erstellen.

Sie sollten einigen Fallback-Inhalt innerhalb der `<canvas>`-Tags platzieren. Dies sollte den Canvas-Inhalt für Benutzer von Browsern beschreiben, die Canvas nicht unterstützen, oder für Benutzer von Screenreadern.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Das Fallback sollte nützliche Alternativinhalte zum Canvas-Inhalt bereitstellen. Wenn Sie beispielsweise ein sich ständig aktualisierendes Diagramm von Aktienkursen rendern, könnte der Fallback-Inhalt ein statisches Bild des neuesten Aktiendiagramms sein, mit `alt`-Text, der die Preise im Text beschreibt, oder eine Liste von Links zu einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Fügen Sie beschreibenden Text als Wert des `aria-label`-Attributs direkt dem Canvas-Element selbst hinzu oder fügen Sie Fallback-Inhalt ein, der innerhalb der öffnenden und schließenden `<canvas>`-Tags platziert wird. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte sind es.

### Erstellung und Größenänderung unseres Canvas

Lassen Sie uns mit der Erstellung unserer eigenen Canvas-Vorlage beginnen, um zukünftige Experimente zu erstellen.

1. Erstellen Sie zuerst ein Verzeichnis auf Ihrem lokalen Laufwerk, das `canvas-template` genannt wird.
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

5. Öffnen Sie nun `script.js` und fügen Sie die folgenden JavaScript-Zeilen hinzu:

   ```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz auf das Canvas in der Konstante `canvas` gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas gleich [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (das gibt uns die Breite des Viewports). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas gleich [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (das gibt uns die Höhe des Viewports). So haben wir jetzt ein Canvas, das die gesamte Breite und Höhe des Browserfensters einnimmt!

   Sie werden auch sehen, dass wir Verkettungszuweisungen mit mehreren Gleichheitszeichen verwenden — dies ist in JavaScript erlaubt, und es ist eine gute Technik, wenn Sie mehrere Variablen auf denselben Wert setzen möchten. Wir wollten die Canvas-Breite und -Höhe in den Breite/Höhe-Variablen leicht zugänglich machen, da sie nützliche Werte sind, die später verfügbar sein sollen (zum Beispiel, wenn Sie etwas genau in der Mitte der Breite des Canvas zeichnen möchten).

> [!NOTE]
> Sie sollten die Größe des Canvas im Allgemeinen mit HTML-Attributen oder DOM-Eigenschaften festlegen, wie oben erläutert. Sie könnten CSS verwenden, aber das Problem ist dann, dass die Größenanpassung nach der Canvas-Darstellung erfolgt, und wie bei jedem anderen Bild könnte das Canvas vergrößert/verzerrt werden.

### Abrufen des Kontextes des Canvas und Abschließende Einrichtung

Bevor wir unsere Canvas-Vorlage als fertig betrachten können, müssen wir noch eine letzte Sache tun. Um auf das Canvas zu zeichnen, müssen wir eine spezielle Referenz auf den Zeichenbereich abrufen, die Kontext genannt wird. Dies erfolgt mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die bei einfacher Verwendung einen einzigen String als Parameter entgegennimmt, der den Typ des gewünschten Kontexts darstellt.

In diesem Fall möchten wir ein 2D-Canvas, also fügen Sie die folgende JavaScript-Zeile unter den anderen in `script.js` hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere mögliche Kontextwerte sind `webgl` für WebGL, `webgpu` für WebGPU usw., aber diese werden wir in diesem Artikel nicht benötigen.

Das war’s — unser Canvas ist jetzt bereit und kann zum Zeichnen verwendet werden! Die `ctx`-Variable enthält jetzt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, und alle Zeichenoperationen auf dem Canvas beinhalten die Manipulation dieses Objekts.

Lassen Sie uns eine letzte Sache tun, bevor wir fortfahren. Wir werden den Hintergrund des Canvas schwarz färben, um Ihnen einen ersten Eindruck von der Canvas-API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop
ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mit der `fillStyle`-Eigenschaft des Canvas (diese nimmt [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) an, genau wie CSS-Eigenschaften), und zeichnen dann ein Rechteck, das den gesamten Bereich des Canvas mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) abdeckt (die ersten zwei Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten zwei sind die Breite und Höhe, in der Sie das Rechteck gezeichnet haben möchten — wir haben Ihnen gesagt, dass die `width`- und `height`-Variablen nützlich sein würden)!

OK, unsere Vorlage ist fertig und es ist Zeit, weiter voranzuschreiten.

## Grundlagen von 2D-Canvas

Wie oben erwähnt, werden alle Zeichenoperationen durch die Manipulation eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts (in unserem Fall `ctx`) durchgeführt. Viele Operationen müssen Koordinaten erhalten, um genau festzulegen, wo etwas gezeichnet werden soll — die obere linke Ecke des Canvas ist der Punkt (0, 0), die horizontale (x) Achse verläuft von links nach rechts, und die vertikale (y) Achse verläuft von oben nach unten.

![Gerastertes Millimeterpapier mit kleinen Quadraten, die seine Fläche bedecken, und einem stahlblauen Quadrat in der Mitte. Die oberste linke Ecke des Canvas ist Punkt (0, 0) des Canvas x-Achse und y-Achse. Die horizontale (x) Achse läuft von links nach rechts und bezeichnet die Breite, und die vertikale (y) Achse verläuft von oben nach unten und bezeichnet die Höhe. Die obere linke Ecke des blauen Quadrats ist als eine Entfernung von x Einheiten von der y-Achse und y Einheiten von der x-Achse bezeichnet.](canvas_default_grid.png)

Formen zu zeichnen wird in der Regel unter Verwendung der primitiven Form Rechteck oder durch das Zeichnen einer Linie entlang eines bestimmten Pfades und dann durch das Ausfüllen der Form ausgeführt. Unten zeigen wir, wie man beides tut.

### Einfache Rechtecke

Lassen Sie uns mit ein paar einfachen Rechtecken beginnen.

1. Machen Sie zunächst eine Kopie Ihres neu kodierten Canvas-Vorlagenverzeichnisses.
2. Fügen Sie folgende Zeilen am Ende Ihrer JavaScript-Datei hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "red";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie Ihr HTML im Browser laden, sollten Sie ein rotes Rechteck auf Ihrem Canvas sehen. Die obere linke Ecke ist 50 Pixel vom oberen und linken Rand des Canvas entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch den dritten und vierten Parameter definiert).

3. Fügen wir noch ein Rechteck ins Spiel — diesmal ein grünes. Fügen Sie das folgende am Ende Ihres JavaScripts hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "green";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren Sie, und Sie werden Ihr neues Rechteck sehen. Dies wirft einen wichtigen Punkt auf: Grafische Operationen wie das Zeichnen von Rechtecken, Linien usw. werden in der Reihenfolge ausgeführt, in der sie auftreten. Denken Sie daran, es ist wie das Streichen einer Wand, wo jeder Anstrich den darunter liegenden Anstrich überlappt und möglicherweise sogar verdeckt. Sie können nichts daran ändern, also müssen Sie sorgfältig über die Reihenfolge nachdenken, in der Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, beispielsweise durch die Verwendung von `rgb()`. Der „Alphakanal“ definiert die Menge an Transparenz, die die Farbe hat. Je höher sein Wert ist, desto mehr wird er das, was dahinter liegt, verdecken. Fügen Sie das Folgende in Ihren Code ein:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie jetzt, einige weitere Rechtecke Ihrer eigenen zu zeichnen; viel Spaß dabei!

### Linien und Strichbreiten

Bisher haben wir uns das Zeichnen von ausgefüllten Rechtecken angesehen, aber Sie können auch Rechtecke zeichnen, die nur Umrisse sind (in Grafikdesign **Striche** genannt). Um die Farbe einzustellen, die Sie für Ihren Strich wünschen, verwenden Sie die `strokeStyle`-Eigenschaft; das Zeichnen eines Strichrechtecks erfolgt über `strokeRect`.

1. Fügen Sie das folgende in das vorherige Beispiel hinzu, wiederum unterhalb der vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "white";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Strichen beträgt 1 Pixel; Sie können den Wert der Eigenschaft `lineWidth` ändern, um diese anzupassen (sie nimmt eine Zahl an, die die Anzahl der Pixel angibt, die der Strich breit ist). Fügen Sie die folgende Zeile zwischen den vorherigen beiden Zeilen hinzu:

   ```js
   ctx.lineWidth = 5;
   ```

Jetzt sollten Sie sehen, dass Ihr weißer Umriss viel dicker geworden ist! Das war's vorerst. An diesem Punkt sollte Ihr Beispiel so aussehen:

```js hidden live-sample___2-canvas-rectangles
ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);
```

{{EmbedLiveSample("2-canvas-rectangles", '100%', 250)}}

Sie können auf die **Abspielen**-Schaltfläche klicken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Zeichnen von Pfaden

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Im Wesentlichen bedeutet dies, Code zu schreiben, um genau zu spezifizieren, welchen Pfad der Stift auf Ihrem Canvas zur Nachzeichnung der gewünschten Form zurücklegen sollte. Canvas umfasst Funktionen zum Zeichnen von geraden Linien, Kreisen, Bézier-Kurven und mehr.

Beginnen Sie den Abschnitt, indem Sie eine frische Kopie Ihrer Canvas-Vorlage erstellen, in der Sie das neue Beispiel zeichnen können.

Wir werden einige gemeinsame Methoden und Eigenschaften in allen unten stehenden Abschnitten verwenden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — beginnt das Zeichnen eines Pfads an dem Punkt, an dem sich der Stift derzeit auf dem Canvas befindet. Auf einem neuen Canvas beginnt der Stift bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — bewegt den Stift an einen anderen Punkt auf dem Canvas, ohne die Linie aufzuzeichnen oder zu verfolgen; der Stift "springt" zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — zeichnet eine ausgefüllte Form, indem der bisher gezeichnete Pfad gefüllt wird.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — zeichnet eine Umrissform, indem ein Strich entlang des bisher gezeichneten Pfads gezogen wird.
- Sie können auch Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` mit Pfaden und Rechtecken verwenden.

Ein typischer, einfacher Pfad-Zeichenvorgang könnte in etwa so aussehen:

```js
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Zeichnen von Linien

Lassen Sie uns ein gleichseitiges Dreieck auf das Canvas zeichnen.

1. Fügen Sie zunächst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Diese konvertiert Gradwerte in Radiant, was nützlich ist, da wann immer Sie einen Winkelwert in JavaScript bereitstellen müssen, er fast immer in Radiant angegeben werden muss, Menschen jedoch normalerweise in Grad denken.

   ```js live-sample___3_canvas_paths
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Als nächstes beginnen Sie Ihren Pfad, indem Sie die folgenden Zeilen unter Ihrer vorherigen Ergänzung hinzufügen; hier setzen wir eine Farbe für unser Dreieck, beginnen, einen Pfad zu zeichnen, und bewegen den Stift dann zu (50, 50), ohne etwas zu zeichnen. Dort werden wir beginnen, unser Dreieck zu zeichnen.

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

   Zuerst zeichnen wir eine Linie bis zu (150, 50) — unser Pfad verläuft nun 100 Pixel nach rechts entlang der x-Achse.

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks mit ein wenig einfacher Trigonometrie. Im Wesentlichen zeichnen wir das Dreieck nach unten zeigend. Die Winkel in einem gleichseitigen Dreieck betragen immer 60 Grad; um die Höhe zu berechnen, können wir es in der Mitte in zwei rechtwinklige Dreiecke unterteilen, die Winkel von 90 Grad, 60 Grad und 30 Grad haben. In Bezug auf die Seiten:
   - Die längste Seite wird als **Hypotenuse** bezeichnet.
   - Die Seite neben dem 60-Grad-Winkel wird als **Ankathete** bezeichnet — die wir als 50 Pixel kennen, da sie die Hälfte der Linie ist, die wir gerade gezeichnet haben.
   - Die Seite gegenüber dem 60-Grad-Winkel wird als **Gegenkathete** bezeichnet, die die Höhe des Dreiecks ist, die wir berechnen möchten.

   ![Ein gleichseitiges Dreieck, das nach unten zeigt, mit beschrifteten Winkeln und Seiten. Die horizontale Linie oben ist als 'Ankathete' bezeichnet. Eine senkrechte gestrichelte Linie, die von der Mitte der angrenzenden Linie verläuft, als 'gegenüber' bezeichnet, teilt das Dreieck und erstellt zwei gleiche Rechtwinkeldreiecke. Die rechte Seite des Dreiecks ist als Hypotenuse bezeichnet, da sie die Hypotenuse des Rechtwinkeldreiecks ist, das von der Linie mit der Bezeichnung 'gegenüber' gebildet wird. Während alle drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des Rechtwinkeldreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass die Länge der Ankathete multipliziert mit dem Tangens des Winkels der Gegenkathete entspricht, weshalb wir zu `50 * Math.tan(degToRad(60))` kommen. Wir verwenden unsere Funktion `degToRad()`, um 60 Grad in Radiant zu konvertieren, da {{jsxref("Math.tan()")}} einen Eingabewert in Radiant erwartet.

4. Mit der berechneten Höhe zeichnen wir eine weitere Linie bis `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss genau zwischen den beiden zuvor festgelegten X-Werten liegen. Der Y-Wert muss jedoch 50 plus die Dreieckshöhe betragen, da wir wissen, dass die Spitze des Dreiecks 50 Pixel von oben des Canvas entfernt ist.
5. Die nächste Zeile zeichnet eine Linie zurück zum Ausgangspunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form auszufüllen.

#### Zeichnen von Kreisen

Schauen wir uns jetzt an, wie man einen Kreis in Canvas zeichnet. Dies wird mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) erreicht, die einen ganzen oder einen Teil eines Kreises an einem bestimmten Punkt zeichnet.

1. Lassen Sie uns einen Bogen zu unserem Canvas hinzufügen — fügen Sie die folgenden Zeilen am Ende Ihres Codes hinzu:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "blue";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` nimmt sechs Parameter an. Die ersten beiden geben die Position des Kreismittelpunkts (X und Y) an. Der dritte ist der Radius des Kreises, der vierte und der fünfte sind die Start- und Endwinkel, an denen der Kreis gezeichnet werden soll (wenn also 0 und 360 Grad angegeben werden, erhalten wir einen vollen Kreis), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn (rückwärts) oder im Uhrzeigersinn (`false` ist im Uhrzeigersinn) gezeichnet werden soll.

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

   Das Muster ist hier sehr ähnlich, aber mit zwei Unterschieden:
   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird, was bedeutet, dass, obwohl der Bogen als beginnend bei -45 Grad und endend bei 45 Grad spezifiziert ist, der Bogen um die 270 Grad gezeichnet wird, die nicht in diesem Abschnitt enthalten sind. Wenn Sie `true` durch `false` ersetzen und den Code dann erneut ausführen, würde nur der 90-Grad-Sektor des Kreises gezeichnet werden.
   - Bevor wir `fill()` aufrufen, zeichnen wir eine Linie zum Mittelpunkt des Kreises. Das bedeutet, dass wir den etwas stilvollen Pac-Man-Ausschnitt gerendert bekommen. Entfernen Sie diese Zeile (versuchen Sie es!), und führen Sie den Code erneut aus, dann erhalten Sie einfach einen Rand des Kreises, der zwischen dem Start- und Endpunkt des Bogens abgeschnitten ist. Dies verdeutlicht einen weiteren wichtigen Punkt der Canvas — wenn Sie versuchen, einen unvollständigen Pfad (d.h. einen nicht geschlossenen Pfad) zu füllen, schließt er den Browser in einer geraden Linie zwischen dem Start- und Endpunkt und füllt ihn dann.

Das war's vorerst; Ihr endgültiges Beispiel sollte ungefähr so aussehen:

{{EmbedLiveSample("3_canvas_paths", '100%', 200)}}

Sie können auf die **Abspielen**-Schaltfläche klicken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

> [!NOTE]
> Um mehr über erweiterte Pfad-Zeichenfunktionen wie Bézier-Kurven zu erfahren, schauen Sie sich unser [Formen mit Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)-Tutorial an.

### Text

Canvas bietet auch Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz erkunden. Beginnen Sie mit einer weiteren frischen Kopie Ihrer Canvas-Vorlage, um das neue Beispiel zu zeichnen.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnet Umriss- (Strich-)Text.

Beide nehmen in ihrer Grundverwendung drei Eigenschaften an: den zu zeichnenden Textstring und die X- und Y-Koordinaten des Punktes, an dem das Zeichnen des Textes beginnen soll. Dies entspricht der **unteren linken** Ecke des **Textfeldes** (wörtlich, dem Feld, das den gezeichneten Text umgibt), was Sie verwirren könnte, da andere Zeichenoperationen tendenziell von der oberen linken Ecke aus beginnen — behalten Sie dies im Hinterkopf.

Es gibt auch eine Reihe von Eigenschaften, um die Textrendering-Qualität zu steuern, wie [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), mit der Sie Schriftart, Familie, Größe usw. angeben können. Es nimmt als Wert die gleiche Syntax wie die CSS-Eigenschaft {{cssxref("font")}} an.

Canvas-Inhalte sind für Screenreader nicht zugänglich. In den Canvas gemalter Text ist im DOM nicht sichtbar, muss jedoch zugänglich gemacht werden. In diesem Beispiel betten wir den Text in den `aria-label`-Wert ein.

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

Hier zeichnen wir zwei Textzeilen, eine Umriss- und die andere Füllmethode. Das Beispiel sollte ungefähr so aussehen:

{{EmbedLiveSample("4-canvas-text", '100%', 180)}}

Drücken Sie die **Abspielen**-Schaltfläche, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Probieren Sie es aus und sehen Sie, was Sie sich einfallen lassen können! Weitere Informationen zu den verfügbaren Optionen für Canvas-Text finden Sie unter [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Bilder auf das Canvas zeichnen

Es ist möglich, externe Bilder auf Ihr Canvas zu rendern. Diese können einfache Bilder, Frames von Videos oder Inhalte anderer Canvases sein. Im Moment werden wir uns nur den Fall ansehen, einige einfache Bilder auf unserem Canvas zu verwenden.

1. Wie zuvor, erstellen Sie eine weitere frische Kopie Ihrer Canvas-Vorlage, um das neue Beispiel zu zeichnen.

   Bilder werden auf das Canvas mit der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) gezeichnet. Die einfachste Version nimmt drei Parameter — eine Referenz auf das Bild, das Sie rendern möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Fangen wir an, eine Bildquelle zu beschaffen, die wir in unser Canvas einbetten können. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

   ```js live-sample___5-canvas-images
   const image = new Image();
   image.src =
     "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt mit dem [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor. Das zurückgegebene Objekt ist derselbe Typ wie das, was zurückgegeben wird, wenn Sie eine Referenz auf ein vorhandenes {{htmlelement("img")}}-Element abrufen. Dann setzen wir sein [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut gleich unserem Firefox-Logo-Bild. Zu diesem Zeitpunkt beginnt der Browser, das Bild zu laden.

3. Wir könnten jetzt versuchen, das Bild mit `drawImage()` einzubetten, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, sonst schlägt der Code fehl. Wir können dies mit dem `load`-Ereignis erreichen, das nur ausgelöst wird, wenn das Bild fertig geladen ist. Fügen Sie den folgenden Block unter dem vorherigen ein:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie sehen, dass das Bild in das Canvas eingebettet ist, obwohl es ziemlich groß ist.

4. Aber es gibt noch mehr! Was, wenn wir nur einen Teil des Bildes anzeigen oder es neu skalieren möchten? Beides können wir mit der komplexeren Version von `drawImage()` tun. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile so:

   ```js
   ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185);
   ```

   ```js hidden live-sample___5-canvas-images
   image.addEventListener("load", () =>
     ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185),
   );
   ```

   - Der erste Parameter ist die Bildreferenz, wie zuvor.
   - Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links vom ersten Parameter oder oben vom zweiten wird gezeichnet.
   - Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem ursprünglich geladenen Bild ausschneiden möchten.
   - Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Teils des Bildes relativ zur oberen linken Ecke des Canvas zeichnen möchten.
   - Parameter 8 und 9 definieren die Breite und Höhe, um den ausgeschnittenen Bereich des Bildes zu zeichnen. In diesem Fall haben wir dieselben Dimensionen wie der Originalausschnitt festgelegt, aber Sie könnten ihn neu skalieren, indem Sie andere Werte angeben.

5. Wenn das Bild sinnvoll aktualisiert wurde, muss auch die Beschreibung aktualisiert werden.

   ```js live-sample___5-canvas-images
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das endgültige Beispiel sollte ungefähr so aussehen:

{{EmbedLiveSample("5-canvas-images", '100%', 260)}}

Drücken Sie die **Abspielen**-Schaltfläche, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

## Schleifen und Animationen

Bisher haben wir einige sehr grundlegende Verwendungen von 2D-Canvas behandelt, aber tatsächlich werden Sie die volle Leistung von Canvas nicht erleben, wenn Sie es nicht auf irgendeine Weise aktualisieren oder animieren. Canvas bietet schließlich skriptfähige Bilder! Wenn Sie nichts ändern werden, können Sie genauso gut statische Bilder verwenden und sich die Arbeit sparen.

### Erstellen einer Schleife

Mit Schleifen im Canvas zu spielen ist ziemlich unterhaltsam — Sie können Canvas-Befehle innerhalb einer [`for`](/en/docs/Web/JavaScript/Reference/Statements/for)- (oder eines anderen Typs von) Schleife genau wie jeden anderen JavaScript-Code ausführen.

Lassen Sie uns ein Beispiel erstellen.

1. Machen Sie eine weitere frische Kopie Ihrer Canvas-Vorlage.
2. Fügen Sie die folgende Zeile am Ende Ihres JavaScripts hinzu. Dies enthält eine neue Methode, [`translate()`](/en/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js live-sample___6-canvas-for-loop
   ctx.translate(width / 2, height / 2);
   ```

   Dies bewirkt, dass der Koordinatenursprung (0, 0) in die Mitte des Canvas verschoben wird, anstatt sich in der oberen linken Ecke zu befinden. Dies ist in vielen Situationen sehr nützlich, wie in diesem Fall, wo wir unser Design relativ zur Mitte des Canvas zeichnen möchten.

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

   Hier implementieren wir dieselbe `degToRad()`-Funktion, die wir im Dreieck-Beispiel oben gesehen haben, eine `rand()`-Funktion, die eine zufällige Zahl zwischen den angegebenen unteren und oberen Grenzen zurückgibt, und die `length`- und `moveOffset`-Variablen (über die wir später mehr erfahren werden).

4. Die Idee ist, dass wir innerhalb der `for`-Schleife etwas auf das Canvas zeichnen und es jedes Mal darauf iterieren, damit wir etwas Interessantes erstellen können. Fügen Sie den folgenden Code innerhalb Ihrer `for`-Schleife hinzu:

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
   - Wir setzen das `fillStyle` auf einen Farbton von leicht transparentem Lila, der jedes Mal basierend auf dem Wert von `length` ändert. Wie Sie später sehen werden, wird die Länge jedes Mal kleiner, wenn die Schleife ausgeführt wird, sodass der Effekt hier darin besteht, dass die Farbe mit jedem gezeichneten Dreieck heller wird.
   - Beginnen Sie den Pfad.
   - Bewegen Sie den Stift zu einer Koordinate von `(moveOffset, moveOffset)`; Diese Variable definiert, wie weit wir uns jedes Mal bewegen möchten, wenn wir ein neues Dreieck zeichnen.
   - Zeichnen Sie eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Das zeichnet eine Linie der Länge `length`, die parallel zur X-Achse verläuft.
   - Berechnen Sie die Höhe des Dreiecks, wie zuvor.
   - Zeichnen Sie eine Linie zur nach unten gerichteten Ecke des Dreiecks, dann zeichnen Sie eine Linie zurück zum Anfang des Dreiecks.
   - Rufen Sie `fill()` auf, um das Dreieck auszufüllen.
   - Aktualisieren Sie die Variablen, die die Sequenz der Dreiecke beschreiben, damit wir bereit sind, das nächste zu zeichnen. Wir verringern den `length`-Wert um 1, sodass die Dreiecke jedes Mal kleiner werden; erhöhen `moveOffset` ein wenig, sodass jedes nachfolgende Dreieck etwas weiter entfernt ist, und verwenden eine weitere neue Funktion, [`rotate()`](/en/docs/Web/API/CanvasRenderingContext2D/rotate), die es uns ermöglicht, das gesamte Canvas zu drehen! Wir drehen es um 5 Grad, bevor das nächste Dreieck gezeichnet wird.

Das war's! Das endgültige Beispiel sollte ungefähr so aussehen:

{{EmbedLiveSample("6-canvas-for-loop", '100%', 550)}}

Drücken Sie die **Abspielen**-Schaltfläche, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Wir möchten Sie ermutigen, mit dem Beispiel zu spielen und es zu Ihrem eigenen zu machen! Zum Beispiel:

- Zeichnen Sie Rechtecke oder Bögen anstelle von Dreiecken oder fügen Sie sogar Bilder ein.
- Spielen Sie mit den `length`- und `moveOffset`-Werten.
- Führen Sie einige Zufallszahlen mit dieser im obigen Beispiel enthaltenen `rand()`-Funktion ein, die wir noch nicht verwendet haben.

### Animationen

Das Schleifenbeispiel, das wir oben erstellt haben, war lustig, aber wirklich benötigen Sie eine konstante Schleife, die immer weiter geht, für jede ernsthafte Canvas-Anwendung (wie Spiele und Echtzeitvisualisierungen). Wenn Sie Ihr Canvas als wie einen Film betrachten, möchten Sie wirklich, dass die Anzeige bei jedem Frame aktualisiert wird, um die aktualisierte Ansicht zu zeigen, mit einer idealen Bildwiederholrate von 60 Bildern pro Sekunde, damit die Bewegung für das menschliche Auge angenehm glatt erscheint.

Es gibt ein paar JavaScript-Funktionen, die es Ihnen ermöglichen, Funktionen mehrmals pro Sekunde wiederholt auszuführen, wobei [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) für unsere Zwecke hier die beste Wahl ist. Es nimmt einen Parameter — den Namen der Funktion, die Sie für jeden Frame ausführen möchten. Das nächste Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion die neue Aktualisierung Ihrer Animation zeichnet und dann `requestAnimationFrame()` erneut kurz vor dem Ende der Funktion aufruft, wird die Animationsschleife weiterlaufen. Die Schleife endet, wenn Sie aufhören, `requestAnimationFrame()` aufzurufen, oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) nach dem Aufrufen von `requestAnimationFrame()` aber vor dem Aufrufen des Frames verwenden.

> [!NOTE]
> Es ist gute Praxis, `cancelAnimationFrame()` aus Ihrem Hauptcode aufzurufen, wenn Sie die Animation nicht mehr verwenden möchten, um sicherzustellen, dass keine Aktualisierungen noch zur Ausführung ausstehen.

Der Browser berechnet komplexe Details wie das Anpassen der Animation auf eine gleichbleibende Geschwindigkeit und nicht die Verschwendung von Ressourcen für die Animation von Dingen, die nicht sichtbar sind.

Um zu sehen, wie das funktioniert, werfen wir schnell noch einen Blick auf unser [Bouncing-Balls-Beispiel](#frame_bouncing-balls). Der Code für die Schleife, die alles in Bewegung hält, sieht so aus:

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

Wir führen die `loop()`-Funktion einmal am Ende des Codes aus, um den Zyklus zu starten und den ersten Animationsrahmen zu zeichnen; die `loop()`-Funktion übernimmt dann die Aufgabe, `requestAnimationFrame(loop)` aufzurufen, um den nächsten Animationsrahmen zu starten, wieder und wieder.

Beachten Sie, dass wir bei jedem Frame das gesamte Canvas vollständig löschen und alles neu zeichnen. Für jeden vorhandenen Ball zeichnen wir ihn, aktualisieren seine Position und überprüfen, ob er mit anderen Bällen kollidiert. Sobald Sie ein grafisches Element zu einer Canvas gezeichnet haben, gibt es keine Möglichkeit, dieses grafische Element individuell zu manipulieren, wie Sie es mit DOM-Elementen können. Sie können jeden Ball nicht auf der Canvas verschieben, denn sobald er gezeichnet ist, ist er Teil der Canvas und ist kein eigenständiges zugängliches Element oder Objekt. Stattdessen müssen Sie löschen und neu zeichnen, entweder indem Sie den gesamten Frame löschen und alles neu zeichnen oder indem Sie Code haben, der genau weiß, welche Teile gelöscht und neu gezeichnet werden müssen, um den minimalen Bereich der Canvas zu aktualisieren.

Das Optimieren von Animationen von Grafiken ist eine gesamte Spezialdisziplin des Programmierens, mit vielen ausgeklügelten Techniken. Diese sind jedoch über das hinaus, was wir für unser Beispiel benötigen!

Im Allgemeinen besteht der Prozess des Erstellens einer Canvas-Animation aus den folgenden Schritten:

1. Löschen Sie den Canvas-Inhalt (z. B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Speichern Sie den Zustand (falls erforderlich) mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) — dies ist notwendig, wenn Sie Einstellungen speichern möchten, die Sie auf dem Canvas aktualisiert haben, bevor Sie fortfahren, was für fortgeschrittenere Anwendungen nützlich ist.
3. Zeichnen Sie die Grafiken, die Sie animieren möchten.
4. Stellen Sie die gespeicherten Einstellungen mit [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore) aus Schritt 2 wieder her.
5. Rufen Sie `requestAnimationFrame()` auf, um das Zeichnen des nächsten Animationsrahmens zu planen.

> [!NOTE]
> Wir werden `save()` und `restore()` hier nicht behandeln, aber sie werden in unserem Tutorial [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations) (und die darauf folgenden) gut erklärt.

### Walking-Objekt Animation

Nun erstellen wir unsere eigene einfache Animation — wir animieren ein sich bewegendes Objekt über den Bildschirm mit einem Spritesheet.

1. Machen Sie eine weitere frische Kopie unserer Canvas-Vorlage und öffnen Sie sie in Ihrem Code-Editor.

2. Aktualisieren Sie den Fallback-HTML-Inhalt, um das Bild widerzuspiegeln:

   ```html live-sample___7-canvas-walking-animation
   <canvas class="myCanvas">
     <p>A cat walking.</p>
   </canvas>
   ```

3. Diesmal werden wir den Hintergrund nicht schwarz färben. Also, nachdem wir das `ctx`-Objekt erhalten haben, malen Sie den Hintergrund stattdessen hellgrau:

   ```js live-sample___7-canvas-walking-animation
   ctx.fillStyle = "#e5e6e9";
   ctx.fillRect(0, 0, width, height);
   ```

4. Fügen Sie am unteren Ende des JavaScripts die folgende Zeile hinzu, um den Koordinatenursprung wieder in die Mitte des Canvas zu setzen:

   ```js live-sample___7-canvas-walking-animation
   ctx.translate(width / 2, height / 2);
   ```

5. Erstellen wir nun ein neues Objekt vom Typ [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), setzen dessen [`src`](/de/docs/Web/API/HTMLImageElement/src) auf das Bild, das wir laden möchten, und fügen einen `onload`-Ereignishandler hinzu, der die `draw()`-Funktion auslösen soll, wenn das Bild geladen wurde:

   ```js live-sample___7-canvas-walking-animation
   const image = new Image();
   image.src =
     "https://developer.mozilla.org/shared-assets/images/examples/web-animations/cat_sprite.png";
   image.onload = draw;
   ```

6. Fügen wir nun einige Variablen hinzu, um die Position des Sprites und die Nummer des anzuzeigenden Sprites im Blick zu behalten.

   ```js live-sample___7-canvas-walking-animation
   let spriteIndex = 0;
   let posX = 0;
   const spriteWidth = 300;
   const spriteHeight = 150;
   const totalSprites = 12;
   ```

   Das Sprite-Bild wurde erstellt und wird mit freundlicher Genehmigung von [Rachel Nabors](https://nearestnabors.com/) für ihre Dokumentationsarbeit zur [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt. Es sieht so aus:

   ![Ein Spritesheet mit drei Spalten, jede Spalte enthält eine Sequenz von Bildern einer schwarzen Katze, die sich in verschiedene Geschwindigkeiten nach links bewegt. Jedes Sprite ist 300 Pixel breit und 150 Pixel hoch.](/shared-assets/images/examples/web-animations/cat_sprite.png)

   Es hat drei Spalten. Jede Spalte ist eine Sequenz, die die Katze in verschiedenen Geschwindigkeiten darstellt (laufend, trabend und galoppierend). Jede Sequenz enthält entweder 12 oder 13 Sprites — jedes ist 300 Pixel breit und 150 Pixel hoch. Wir werden die links stehende Laufsequenz verwenden, die 12 Sprites enthält. Um jedes Sprite sauber darzustellen, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild aus dem Spritesheet auszuschneiden und nur diesen Teil darzustellen, so wie wir es oben mit dem Firefox-Logo getan haben. Die X- und Y-Koordinaten des Ausschnitts müssen ein Vielfaches von `spriteWidth` und `spriteHeight` sein, da wir die links stehende Sequenz verwenden, ist die X-Koordinate immer 0. Die Ausschnitt-Größe wird immer `spriteWidth` mal `spriteHeight` sein.

7. Lassen Sie uns nun eine leere `draw()`-Funktion am Ende des Codes einfügen, die bereit ist, mit etwas Code gefüllt zu werden:

   ```js
   function draw() {}
   ```

   ```js-nolint hidden live-sample___7-canvas-walking-animation
   function draw() {
   ```

8. Der Rest des Codes in diesem Abschnitt geht in `draw()`. Fügen Sie zunächst die folgende Zeile hinzu, die das Canvas löscht, um jeden Frame vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width / 2), -(height / 2)` angeben müssen, da wir zuvor die Originalposition als `width/2, height/2` angegeben haben.

   ```js live-sample___7-canvas-walking-animation
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

9. Zeichnen wir nun das Bild mit `drawImage` — der Version mit 9 Parametern. Fügen Sie das folgende hinzu:

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
   - Parameter 2 und 3 geben die obere linke Ecke des auszuschneidenden Bereichs des Quellbildes an, wobei der X-Wert als 0 (für die links stehende Spalte) und der Y-Wert zyklisch durch Vielfache von `spriteHeight` läuft. Sie können den X-Wert durch `spriteWidth` oder `2 * spriteWidth` ersetzen, um die anderen Spalten auszuwählen.
   - Parameter 4 und 5 geben die Größe des auszuschneidenden Bereichs an — `spriteWidth` und `spriteHeight`.
   - Parameter 6 und 7 geben die obere linke Ecke des Kastens an, in dem der ausgeschnittene Bereich des Bildes auf dem Canvas gezeichnet werden soll — die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichenposition durch Ändern des `posX`-Werts ändern können. Die Y-Position ist `-spriteHeight / 2`, was bedeutet, dass das Bild vertikal zentriert auf dem Canvas angezeigt wird.
   - Parameter 8 und 9 geben die Größe des Bildes auf dem Canvas an. Wir möchten nur die ursprüngliche Größe beibehalten, daher geben wir `spriteWidth` und `spriteHeight` als Breite und Höhe an.

10. Ändern wir nun den `spriteIndex`-Wert nach jedem Zeichnen — zumindest nach einigen davon. Fügen Sie den folgenden Block am Ende der `draw()`-Funktion hinzu:

    ```js live-sample___7-canvas-walking-animation
    if (posX % 11 === 0) {
      if (spriteIndex === totalSprites - 1) {
        spriteIndex = 0;
      } else {
        spriteIndex++;
      }
    }
    ```

    Wir umschließen den ganzen Block in `if (posX % 11 === 0) { }`. Wir verwenden den Modulo-Operator (`%`) (auch bekannt als [Rest-Operator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu überprüfen, ob der `posX`-Wert genau durch 11 teilbar ist, ohne Rest. Wenn ja, wechseln wir zum nächsten Sprite, indem wir `spriteIndex` inkrementieren (nach dem letzten Sprite wieder auf 0 wechseln). Dies bedeutet effektiv, dass wir das Sprite nur an jedem 11. Frame aktualisieren oder ungefähr 6 Mal pro Sekunde (`requestAnimationFrame()` wird bis zu 60 Mal pro Sekunde aufgerufen, wenn möglich). Wir verlangsamen die Bildrate absichtlich, da wir nur 12 Sprites zur Verfügung haben, und wenn wir jedes 60. einer Sekunden zeigen, wird sich unser Objekt viel zu schnell bewegen!

    Innerhalb des äußeren Blocks verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu prüfen, ob der `spriteIndex`-Wert beim letzten ist. Wenn wir das letzte Sprite bereits anzeigen, setzen wir `spriteIndex` wieder auf 0 zurück; wenn nicht, erhöhen wir ihn einfach um 1.

11. Als nächstes müssen wir herausfinden, wie der `posX`-Wert bei jedem Frame geändert werden kann — fügen Sie den folgenden Codeblock direkt unter Ihren letzten Block hinzu.

    ```js live-sample___7-canvas-walking-animation
    if (posX < -width / 2 - spriteWidth) {
      const newStartPos = width / 2;
      posX = Math.ceil(newStartPos);
    } else {
      posX -= 2;
    }
    ```

    Wir verwenden eine weitere `if...else`-Anweisung, um zu sehen, ob der Wert von `posX` kleiner als `-width/2 - spriteWidth` geworden ist, was bedeutet, dass unsere Katze vom linken Rand des Bildschirms gelaufen ist. In diesem Fall berechnen wir eine Position, die die Katze direkt nach rechts von der rechten Seite des Bildschirms bringt.

    Wenn unsere Katze noch nicht vom Rand des Bildschirms gelaufen ist, verringern wir `posX` um 2. Dadurch wird sie sich ein wenig nach links bewegen, wenn wir das nächste Mal zeichnen.

12. Schließlich müssen wir die Animationsschleife durch den Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()`-Funktion erstellen:

    ```js live-sample___7-canvas-walking-animation
    window.requestAnimationFrame(draw);
    ```

```js-nolint hidden live-sample___7-canvas-walking-animation
}
```

Das war's! Das endgültige Beispiel sollte ungefähr so aussehen:

{{EmbedLiveSample("7-canvas-walking-animation", '100%', 260)}}

Drücken Sie die **Abspielen**-Schaltfläche, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Eine einfache Zeichenanwendung

Als ein letztes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben (wie Mausbewegungen, in diesem Fall) kombiniert werden kann. Wir werden Sie bei diesem nicht Schritt für Schritt durchgehen; wir werden nur die interessantesten Teile des Codes erkunden.

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

Sie können mit dem Beispiel unten spielen; Sie können auch die **Abspielen**-Schaltfläche klicken, um es im MDN Playground zu öffnen, wo Sie den Quellcode bearbeiten können:

{{EmbedLiveSample("8-canvas-drawing-app", '100%', 600)}}

Betrachten wir die interessantesten Teile. Zunächst verfolgen wir die X- und Y-Koordinaten der Maus und ob sie angeklickt wird oder nicht mit drei Variablen: `curX`, `curY` und `pressed`. Wenn sich die Maus bewegt, lösen wir eine Funktion aus, die als `onmousemove`-Ereignishandler gesetzt ist, und die aktuellen X- und Y-Werte erfasst. Wir verwenden auch `onmousedown`- und `onmouseup`-Ereignishandler, um den Wert von `pressed` auf `true` zu ändern, wenn die Maustaste gedrückt wird, und wieder auf `false`, wenn sie losgelassen wird.

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

Wenn die Schaltfläche "Canvas löschen" gedrückt wird, führen wir eine einfache Funktion aus, die das gesamte Canvas wie zuvor gesehen zurück zu schwarz löscht:

```js live-sample___8-canvas-drawing-app
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal ziemlich einfach — wenn `pressed` `true` ist, zeichnen wir einen Kreis mit einem Füllstil, der dem Wert im Farbwähler entspricht, und einem Radius, der dem im Bereichseingabefeld festgelegten Wert entspricht. Wir müssen den Kreis 85 Pixel überhalb der Stelle zeichnen, an der wir ihn gemessen haben, da die vertikale Messung von oben im Fensterbereich erfolgt, aber wir zeichnen den Kreis relativ zur Oberkante des Canvas, das sich unterhalb der 85 Pixel hohen Symbolleiste befindet. Wenn wir ihn mit nur `curY` als y-Koordinate zeichnen würden, würde er 85 Pixel niedriger erscheinen als die Mausposition.

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

Alle {{htmlelement("input")}}-Typen werden gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, wird er auf ein einfaches Textfeld zurückgesetzt.

## WebGL

Es ist jetzt an der Zeit, 2D hinter sich zu lassen und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalte werden mithilfe der [WebGL-API](/de/docs/Web/API/WebGL_API) spezifiziert, die eine völlig separate API von der 2D-Canvas-API ist, obwohl beide auf {{htmlelement("canvas")}}-Elementen gerendert werden.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht es Ihnen, direkt mit der {{Glossary("GPU", "GPU")}} des Computers zu kommunizieren. Infolgedessen ist das Schreiben von rohem WebGL eher mit niedrigeren Programmiersprachen wie C++ als mit regulärem JavaScript vergleichbar; es ist ziemlich komplex, aber unglaublich mächtig.

### Verwendung einer Bibliothek

Aufgrund seiner Komplexität schreiben die meisten Leute 3D-Grafikcode mit einer Drittanbieter-JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten dieser Programme arbeiten ähnlich, indem sie Funktionen zum Erstellen primitiver und benutzerdefinierter Formen bereitstellen, Betrachtungskameras und Beleuchtung positionieren, Flächen mit Texturen bedecken und mehr. Sie erledigen das WebGL für Sie, sodass Sie auf einer höheren Ebene arbeiten können.

Ja, die Verwendung einer dieser bedeutet, dass Sie eine weitere neue API (in diesem Fall eine von Drittanbietern) lernen müssen, aber sie sind viel einfacher anzuwenden als rohes WebGL zu kodieren.

### Ein drehender Würfel

Schauen wir uns an, wie wir mit einer WebGL-Bibliothek etwas erstellen können. Wir werden [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) wählen, da es eine der beliebtesten ist. In diesem Tutorial erstellen wir einen 3D-drehenden Würfel.

1. Beginnen Sie mit dem Erstellen eines neuen Ordners auf Ihrem lokalen Laufwerk, der `webgl-cube` genannt wird.
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

3. Erstellen Sie eine weitere neue Datei namens `script.js`, ebenfalls im selben Ordner wie zuvor. Lassen Sie es vorerst leer.
4. Erstellen Sie nun eine weitere neue Datei namens `style.css`, erneut im selben Ordner, und fügen Sie den folgenden Inhalt hinzu:

   ```css live-sample___9-webgl-cube
   html,
   body {
     margin: 0;
   }

   body {
     overflow: hidden;
   }
   ```

5. Wir haben `three.js` in unsere Seite eingebunden (das ist es, was das erste `<script>`-Element in unserem HTML tut), jetzt können wir JavaScript, das es verwendet, beginnen, in `script.js` zu schreiben. Lassen Sie uns damit beginnen, eine neue Szene zu erstellen — fügen Sie das Folgende in Ihre `script.js`-Datei ein:

   ```js live-sample___9-webgl-cube
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene)-Konstruktor erstellt eine neue Szene, die die ganze 3D-Welt repräsentiert, die wir darstellen möchten.

6. Als nächstes benötigen wir eine **Kamera**, damit wir die Szene sehen können. In 3D-Bildbegriffen repräsentiert die Kamera die Position des Betrachters in der Welt. Um eine Kamera zu erstellen, fügen Sie als Nächstes die folgenden Zeilen hinzu:

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
   - Das Sichtfeld: Wie breit der Bereich vor der Kamera sichtbar sein soll, in Grad.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Normalerweise ist dies das Verhältnis der Breite der Szene geteilt durch die Höhe der Szene. Die Verwendung eines anderen Wertes wird die Szene verzerren (was Sie vielleicht wollen, aber normalerweise nicht).
   - Die Nah-Ebene: Wie nah an der Kamera Objekte sein können, bevor wir sie nicht mehr auf dem Bildschirm rendern. Denken Sie daran, wie, wenn Sie Ihre Fingerspitze näher und näher an den Raum zwischen Ihren Augen heranführen, Sie sie irgendwann nicht mehr sehen können.
   - Die Fern-Ebene: Wie weit entfernt Objekte von der Kamera sein müssen, bevor sie nicht mehr auf dem Bildschirm gerendert werden.

   Wir setzen auch die Position der Kamera 5 Einheiten außerhalb der Z-Achse, die, wie in CSS, aus dem Bildschirm auf Sie als Betrachter zutrifft.

7. Die dritte wichtige Zutat ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene, wie sie durch eine gegebene Kamera betrachtet wird, rendert. Wir erstellen einen für jetzt mit dem [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)-Konstruktor, aber wir werden es bis später nicht verwenden. Fügen Sie die folgenden Zeilen als nächstes hinzu:

   ```js live-sample___9-webgl-cube
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile setzt die Größe, in der der Renderer die Ansicht der Kamera zeichnen wird, und die dritte Zeile fügt das vom Renderer erstellte {{htmlelement("canvas")}}-Element zum {{htmlelement("body")}} des Dokuments hinzu. Von nun an wird alles, was der Renderer zeichnet, in unserem Fenster angezeigt.

8. Als nächstes möchten wir den Würfel erstellen, den wir auf dem Canvas anzeigen werden. Fügen Sie den folgenden Code am Ende Ihres JavaScripts hinzu:

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

   Es gibt hier ein bisschen mehr zu erfassen, also gehen wir es in Stufen durch:
   - Zuerst erstellen wir eine globale `cube`-Variable, damit wir von überall im Code auf unseren Würfel zugreifen können.
   - Als nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt und rufen `load()` darauf auf. `load()` nimmt hier zwei Parameter (obwohl es mehr akzeptieren kann): die Textur, die wir laden möchten (ein PNG), und eine Funktion, die ausgeführt wird, wenn die Textur geladen wurde.
   - Innerhalb dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um anzugeben, dass wir einen 2 x 2-Wiederholung des Bildes um alle Seiten des Würfels herum möchten. Als nächstes erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt und vereinigen sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh), um unseren Würfel zu erstellen. Ein Objekt erfordert in der Regel eine Geometrie (wie es geformt ist) und ein Material (wie seine Oberfläche aussieht).
   - Zuletzt fügen wir unseren Würfel zur Szene hinzu und rufen dann unsere `draw()`-Funktion auf, um die Animation zu starten.

9. Bevor wir zu `draw()` kommen, fügen wir ein paar Lichter zur Szene hinzu, um es etwas aufzupeppen; fügen Sie die folgenden Blöcke als nächstes hinzu:

   ```js live-sample___9-webgl-cube
   const light = new THREE.AmbientLight("white"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("white");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art weiches Licht, das die ganze Szene ein wenig aufhellt, wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt hingegen ist ein gerichteter Lichtstrahl, mehr wie eine Taschenlampe/Lampe.

10. Zuletzt fügen wir unsere `draw()`-Funktion am Ende des Codes hinzu:

    ```js live-sample___9-webgl-cube
    function draw() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);

      requestAnimationFrame(draw);
    }
    ```

    Dies ist ziemlich intuitiv; bei jedem Frame drehen wir unseren Würfel leicht auf seinen X- und Y-Achsen, rendern dann die Szene, wie sie durch unsere Kamera gesehen wird, und rufen schließlich `requestAnimationFrame()` auf, um das Zeichnen unseres nächsten Frames zu planen.

Das fertige Produkt sollte so aussehen:

{{EmbedLiveSample("9-webgl-cube", "100%", 500)}}

> [!NOTE]
> In unserem GitHub-Repo finden Sie auch ein weiteres interessantes Beispiel für 3D-Würfel — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([siehe es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dies verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von der Webkamera eines Computers zu erfassen und ihn als Textur auf die Seite des Würfels zu projizieren!

## Zusammenfassung

An diesem Punkt sollten Sie eine nützliche Vorstellung von den Grundlagen des Grafikprogrammierens mit Canvas und WebGL haben und wissen, was Sie mit diesen APIs tun können, sowie eine gute Vorstellung, wohin Sie für weitere Informationen gehen sollten. Viel Spaß!

## siehe auch

Hier haben wir nur die wirklichen Basics von Canvas behandelt — es gibt so viel mehr zu lernen! Die untenstehenden Artikel werden Sie weiterbringen.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorial-Serie, die erklärt, was Sie über das 2D-Canvas detaillierter wissen sollten als das, was hier behandelt wurde. Pflichtlektüre.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Serie, die die Grundlagen der Roh-WebGL-Programmierung lehrt.
- [Aufbau eines einfachen Demos mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — Grundlagen-Tutorial zu Three.js. Wir haben auch entsprechende Leitfäden für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spieleentwicklung](/de/docs/Games) — die Startseite für die Entwicklung von Webspielen auf MDN. Hier finden Sie einige wirklich nützliche Tutorials und Techniken im Zusammenhang mit 2D- und 3D-Canvas — siehe die Menüoptionen Techniken und Tutorials.

## Beispiele

- [Gewalttätiges Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API, um Töne zu erzeugen, und Canvas, um eine hübsche Visualisierung dazu zu erstellen.
- [Voice change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas, um Audio-Daten in Echtzeit aus der Web Audio API zu visualisieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
