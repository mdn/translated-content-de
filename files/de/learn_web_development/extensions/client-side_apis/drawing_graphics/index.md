---
title: Zeichnen von Grafiken
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsstarke Grafikprogrammiertools, von der Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) Sprache bis zu APIs zum Zeichnen auf HTML-`<canvas>`-Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in `<canvas>` sowie weitere Ressourcen, die es Ihnen ermöglichen, mehr zu lernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und zentrale API-Abdeckungen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Skripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Die Konzepte und Anwendungsfälle, die durch die in dieser Lektion behandelten APIs ermöglicht werden.</li>
          <li>Grundsyntax und Verwendung von `<canvas>` und zugehörigen APIs.</li>
          <li>Verwendung von Timern und `requestAnimationFrame()`, um Animationsschleifen einzurichten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Das Web bestand ursprünglich nur aus Text, was sehr langweilig war, also wurden Bilder eingeführt – zunächst über das `<img>`-Element und später über CSS-Eigenschaften wie `background-image` und [SVG](/de/docs/Web/SVG).

Das war jedoch immer noch nicht genug. Obwohl Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden konnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) – da sie durch Markup dargestellt werden –, gab es immer noch keine Möglichkeit, dasselbe mit Bitmap-Bildern zu tun, und die verfügbaren Werkzeuge waren ziemlich begrenzt. Das Web hatte immer noch keine effektive Möglichkeit, Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die üblicherweise von niedrigeren Programmiersprachen wie C++ oder Java behandelt werden.

Die Situation begann sich zu verbessern, als Browser 2004 begannen, das `<canvas>`-Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) zu unterstützen. Wie Sie unten sehen werden, bietet `<canvas>` einige nützliche Werkzeuge zum Erstellen von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere wenn es mit einigen der anderen APIs der Webplattform kombiniert wird, kann aber schwierig oder unmöglich zugänglich gemacht werden.

Das folgende Beispiel zeigt eine einfache, auf 2D-Leinwand basierende Animation fallender Bälle, die wir ursprünglich in unserem Modul [Einführung in JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) kennengelernt haben:

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

Um 2006–2007 startete Mozilla die Arbeit an einer experimentellen 3D-Canvas-Implementierung. Daraus wurde [WebGL](/de/docs/Web/API/WebGL_API), das bei Browseranbietern an Bedeutung gewann und um 2009–2010 standardisiert wurde. WebGL ermöglicht es, echte 3D-Grafiken direkt im Webbrowser zu erstellen.

Dieser Artikel wird sich hauptsächlich auf 2D-Canvas konzentrieren, da roher WebGL-Code sehr komplex ist. Wir werden jedoch zeigen, wie man [eine WebGL-Bibliothek verwendet, um einfach eine 3D-Szene zu erstellen](#webgl), und Sie können ein Tutorial zu rohem WebGL an anderer Stelle finden — siehe [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Erste Schritte mit einem `<canvas>`

Wenn Sie eine 2D- _oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-`<canvas>`-Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Dies ist so einfach wie das Einfügen des Elements auf der Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dies erstellt ein Canvas auf der Seite mit einer Größe von 320x240 Pixeln.

Sie sollten einige alternative Inhalte innerhalb der `<canvas>`-Tags einfügen. Dies sollte den Canvas-Inhalt für Benutzer von Browsern beschreiben, die `<canvas>` nicht unterstützen, oder für Benutzer von Screenreadern.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Der Fallback sollte nützliche alternative Inhalte zum Canvas-Inhalt bereitstellen. Wenn Sie beispielsweise ein ständig aktualisiertes Diagramm der Aktienkurse rendern, könnte der Fallback-Inhalt ein statisches Bild des neuesten Aktienkursdiagramms sein, mit `alt`-Text, der die Preise im Text beschreibt, oder eine Liste von Links zu einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalt ist für Screenreader nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs direkt auf dem Canvas-Element selbst ein oder fügen Sie innerhalb der öffnenden und schließenden `<canvas>`-Tags fallback-Inhalte ein. Canvas-Inhalt ist nicht Teil des DOM, aber eingebetteter Fallback-Inhalt ist es.

### Erstellen und Größenzuweisung unseres Canvas

Lassen Sie uns damit beginnen, unsere eigene Canvas-Vorlage zu erstellen, um zukünftige Experimente durchzuführen.

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

3. Erstellen Sie eine neue Datei innerhalb des Verzeichnisses mit dem Namen `style.css` und speichern Sie die folgende CSS-Regel darin:

   ```css live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
   body {
     margin: 0;
     overflow: hidden;
   }
   ```

4. Erstellen Sie eine neue Datei innerhalb des Verzeichnisses mit dem Namen `script.js`. Lassen Sie diese Datei vorerst leer.

5. Öffnen Sie nun `script.js` und fügen Sie die folgenden Zeilen JavaScript hinzu:

   ```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz auf das Canvas im `canvas`-Konstanten gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas gleich [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Ansichtsfensterbreite gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas gleich [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Ansichtsfensterhöhe gibt). So haben wir jetzt ein Canvas, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden auch sehen, dass wir Zuweisungen mit mehreren Gleichheitszeichen aneinandergereiht haben – dies ist in JavaScript erlaubt und eine gute Technik, wenn Sie wollen, dass mehrere Variablen den gleichen Wert haben. Wir wollten die Breite und Höhe des Canvas leicht zugänglich in den Variablen width/height haben, da sie nützliche Werte für später sind (zum Beispiel, wenn Sie etwas genau in der Mitte der Breite des Canvas zeichnen möchten).

> [!NOTE]
> Sie sollten die Größe des Canvas im Allgemeinen mit HTML-Attributen oder DOM-Eigenschaften setzen, wie oben erklärt. Sie könnten CSS verwenden, aber das Problem dabei ist, dass die Größenanpassung nach dem Rendern des Canvas erfolgt und wie jedes andere Bild auch könnte das Canvas pixelig/verzerrt werden.

### Erhalten des Canvas-Kontextes und abschließendes Setup

Wir müssen vor dem Abschluss unserer Canvas-Vorlage noch eine letzte Sache erledigen. Um auf das Canvas zu zeichnen, müssen wir eine spezielle Referenz auf den Zeichenbereich, den sogenannten Kontext, erhalten. Dies geschieht durch die Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die für die grundlegende Verwendung einen einzelnen Zeichenfolgenparameter benötigt, der den Typ des gewünschten Kontexts repräsentiert.

In diesem Fall möchten wir ein 2D-Canvas haben, daher fügen Sie die folgende JavaScript-Zeile unter den anderen in `script.js` hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop live-sample___7-canvas-walking-animation
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere mögliche Kontextwerte sind `webgl` für WebGL, `webgpu` für WebGPU usw., aber diese werden wir in diesem Artikel nicht benötigen.

Das war's – unser Canvas ist jetzt einsatzbereit zum Zeichnen! Die Variable `ctx` enthält jetzt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, und alle Zeichenvorgänge im Canvas beinhalten die Manipulation dieses Objekts.

Lassen Sie uns noch eine letzte Sache tun, bevor wir fortfahren. Wir werden den Hintergrund des Canvas schwarz färben, um Ihnen einen ersten Vorgeschmack auf die Canvas-API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript hinzu:

```js live-sample___2-canvas-rectangles live-sample___3_canvas_paths live-sample___4-canvas-text live-sample___5-canvas-images live-sample___6-canvas-for-loop
ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);
```

Hier legen wir eine Füllfarbe fest, indem wir die [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)-Eigenschaft des Canvas verwenden (diese nimmt [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) ähnlich wie CSS-Eigenschaften entgegen), und zeichnen dann ein Rechteck, das den gesamten Bereich des Canvas mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) abdeckt (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, auf die Sie das Rechteck zeichnen möchten – wir haben Ihnen gesagt, dass diese width- und height-Variablen nützlich sein würden)!

OK, unsere Vorlage ist fertig und es ist Zeit, weiterzumachen.

## 2D-Canvas-Grundlagen

Wie oben erwähnt, werden alle Zeichenvorgänge durch die Manipulation eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts (in unserem Fall `ctx`) durchgeführt. Viele Vorgänge benötigen Koordinaten, um genau zu bestimmen, wo etwas gezeichnet werden soll – die obere linke Ecke des Canvas ist der Punkt (0, 0), die horizontale (x)-Achse verläuft von links nach rechts, und die vertikale (y)-Achse verläuft von oben nach unten.

![Gitterpapier mit kleinen Quadraten, die seinen Bereich abdecken, mit einem stahlblauen Quadrat in der Mitte. Die obere linke Ecke des Canvas ist Punkt (0, 0) der Canvas-x- und y-Achse. Die horizontale (x)-Achse verläuft von links nach rechts und gibt die Breite an, und die vertikale (y)-Achse verläuft von oben nach unten und gibt die Höhe an. Die obere linke Ecke des blauen Quadrats ist als x-Einheiten vom y-Achsenabstand und y-Einheiten vom x-Achsenabstand markiert.](canvas_default_grid.png)

Das Zeichnen von Formen erfolgt in der Regel mit primitiven Formen wie Rechtecken oder durch Verfolgen einer Linie entlang eines bestimmten Pfades, um dann die Form auszufüllen. Nachfolgend zeigen wir, wie beides funktioniert.

### Einfache Rechtecke

Beginnen wir mit einigen einfachen Rechtecken.

1. Machen Sie zuerst eine Kopie Ihres neu codierten Canvas-Vorlagenverzeichnisses.
2. Fügen Sie die folgenden Zeilen am Ende Ihrer JavaScript-Datei hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "red";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie Ihr HTML im Browser laden, sollte ein rotes Rechteck auf Ihrem Canvas erscheinen. Seine obere linke Ecke befindet sich 50 Pixel entfernt vom oberen und linken Rand des Canvas (wie durch die ersten zwei Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch die dritten und vierten Parameter definiert).

3. Lassen Sie uns ein weiteres Rechteck hinzufügen – diesmal ein grünes. Fügen Sie am Ende Ihres JavaScript Folgendes hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "green";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren, und Sie werden Ihr neues Rechteck sehen. Dies wirft einen wichtigen Punkt auf: Grafische Operationen wie das Zeichnen von Rechtecken, Linien usw. werden in der Reihenfolge ausgeführt, in der sie auftreten. Stellen Sie sich das wie das Anstreichen einer Wand vor, bei dem jeder Anstrich den darunterliegenden überlappt und möglicherweise verdeckt. Sie können daran nichts ändern, daher müssen Sie sorgfältig darüber nachdenken, in welcher Reihenfolge Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie semitransparente Grafiken zeichnen können, indem Sie eine semitransparente Farbe angeben, beispielsweise durch die Verwendung von `rgb()`. Der "Alphakanal" definiert den Transparenzgrad der Farbe. Je höher der Wert, desto mehr verdeckt er das, was dahinter liegt. Fügen Sie zu Ihrem Code Folgendes hinzu:

   ```js live-sample___2-canvas-rectangles
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, einige weitere Rechtecke selbst zu zeichnen; haben Sie Spaß dabei!

### Konturen und Linienbreiten

Bisher haben wir gefüllte Rechtecke betrachtet, aber Sie können auch Rechtecke zeichnen, die nur Umrisse sind (in der Grafikdesign-Terminologie "Strokes" genannt). Um die gewünschte Farbe für Ihre Kontur festzulegen, verwenden Sie die [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)-Eigenschaft; das Zeichnen eines Konturrechtecks erfolgt mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Fügen Sie dem vorherigen Beispiel Folgendes hinzu, wieder unter den vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "white";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Konturen beträgt 1 Pixel; Sie können den Wert der [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth) ändern, um dies anzupassen (es nimmt eine Zahl, die die Anzahl der Pixel angibt, aus denen die Breite besteht). Fügen Sie die folgende Zeile zwischen den vorherigen zwei Zeilen ein:

   ```js
   ctx.lineWidth = 5;
   ```

Jetzt sollten Sie sehen, dass Ihre weiße Umrandung viel dicker geworden ist! Das war's fürs Erste. An diesem Punkt sollte Ihr Beispiel folgendermaßen aussehen:

```js hidden live-sample___2-canvas-rectangles
ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);
```

{{EmbedLiveSample("2-canvas-rectangles", '100%', 250)}}

Sie können die **Abspielen**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Pfade zeichnen

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Im Prinzip geht es darum, Code zu schreiben, um genau zu bestimmen, welchen Pfad der Stift auf Ihrem Canvas entlang bewegt werden soll, um die gewünschte Form zu zeichnen. Canvas enthält Funktionen zum Zeichnen von geraden Linien, Kreisen, Bézier-Kurven und mehr.

Beginnen Sie diesen Abschnitt, indem Sie eine neue Kopie Ihrer Canvas-Vorlage anfertigen, um das neue Beispiel zu zeichnen.

Wir werden einige gängige Methoden und Eigenschaften in allen folgenden Abschnitten verwenden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) – Starten Sie das Zeichnen eines Pfads an dem Punkt, an dem sich der Stift gerade auf dem Canvas befindet. Auf einem neuen Canvas beginnt der Stift an (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) – Bewegen Sie den Stift zu einem anderen Punkt auf dem Canvas, ohne die Linie zu verfolgen oder aufzuzeichnen; der Stift "springt" auf die neue Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) – Zeichnen Sie eine gefüllte Form, indem Sie den bisher verfolgten Pfad ausfüllen.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) – Zeichnen Sie eine Umrissform, indem Sie entlang des bisher gezeichneten Pfads eine Kontur zeichnen.
- Sie können auch Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` mit Pfaden ebenso wie mit Rechtecken verwenden.

Ein typischer, einfacher Pfadzeichenvorgang würde etwa so aussehen:

```js
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Zeichnen von Linien

Lassen Sie uns ein gleichseitiges Dreieck auf dem Canvas zeichnen.

1. Fügen Sie zuerst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Diese konvertiert Gradwerte in Bogenmaß, was von Nutzen ist, da wann immer Sie einen Winkelwert in JavaScript angeben müssen, dieser fast immer im Bogenmaß angegeben werden muss, Menschen jedoch normalerweise in Grad denken.

   ```js live-sample___3_canvas_paths
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Als Nächstes beginnen Sie Ihren Pfad, indem Sie das Folgende unter Ihrer vorherigen Hinzufügung einfügen; hier setzen wir eine Farbe für unser Dreieck, beginnen den Pfad zu zeichnen und bewegen dann den Stift ohne Zeichnung zu (50, 50). Dort werden wir unser Dreieck zu zeichnen beginnen.

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "red";
   ctx.beginPath();
   ctx.moveTo(50, 50);
   ```

3. Fügen Sie jetzt die folgenden Zeilen am Ende Ihres Skripts hinzu:

   ```js live-sample___3_canvas_paths
   ctx.lineTo(150, 50);
   const triHeight = 50 * Math.tan(degToRad(60));
   ctx.lineTo(100, 50 + triHeight);
   ctx.lineTo(50, 50);
   ctx.fill();
   ```

   Lassen Sie uns dies in der Reihe durchgehen:

   Zuerst ziehen wir eine Linie nach (150, 50) — unser Pfad geht jetzt 100 Pixel nach rechts entlang der x-Achse.

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks unter Verwendung einfacher Trigonometrie. Im Grunde nehmen wir an, wir zeichnen das Dreieck nach unten gerichtet. Die Winkel in einem gleichseitigen Dreieck sind immer 60 Grad; um die Höhe zu berechnen, können wir es in der Mitte in zwei rechtwinklige Dreiecke teilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben. In Bezug auf die Seiten:
   - Die längste Seite wird **Hypotenuse** genannt
   - Die Seite neben dem 60-Grad-Winkel wird **Ankathete** genannt — wir wissen, dass sie 50 Pixel beträgt, da sie die Hälfte der Linie ist, die wir gerade gezeichnet haben.
   - Die Seite gegenüber dem 60-Grad-Winkel wird **Gegenkathete** genannt, was die Höhe des Dreiecks ist, die wir berechnen möchten.

   ![Ein nach unten gerichtetes gleichseitiges Dreieck mit Beschriftung der Winkel und Seiten. Die horizontale Linie oben ist mit 'Ankathete' beschriftet. Eine senkrechte gepunktete Linie, von der Mitte der ankathesierenden Linie, als 'Gegenkathete' beschriftet, teilt das Dreieck und erzeugt zwei gleiche recht Winkelige Dreiecke. Die rechte Seitenlinie des Dreiecks ist mit der Hypotenuse beschriftet, da sie die Hypotenuse des recht Winkeligen Dreiecks ist, das durch die Linie bezeichnet 'Gegenkathete' gebildet wird, während alle dreiseitigen des Dreiecks die gleiche Länge haben, ist die Hypotenuse die längste Seite des recht Winkeligen Dreiecks.](trigonometry.png)

   Einer der grundlegenden trigonometrischen Formeln besagt, dass die Länge der Ankathete multipliziert mit dem Tangens des Winkels gleich der Gegenkathete ist, daher ergeben wir `50 * Math.tan(degToRad(60))`. Wir verwenden unsere `degToRad()`-Funktion, um 60 Grad in Bogenmaß umzurechnen, da {{jsxref("Math.tan()")}} einen Eingabewert im Bogenmaß erwartet.

4. Mit der berechneten Höhe ziehen wir eine weitere Linie zu `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss auf halbem Weg zwischen den vorherigen beiden X-Werten liegen. Der Y-Wert andererseits muss 50 plus die Dreieckshöhe betragen, da wir wissen, dass der obere Punkt des Dreiecks 50 Pixel vom oberen Rand des Canvas entfernt ist.
5. Die nächste Linie zieht eine Linie zurück zum Ausgangspunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form auszufüllen.

#### Kreise zeichnen

Nun sehen wir uns an, wie wir mit Canvas einen Kreis zeichnen können. Dies geschieht mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc), die einen ganzen oder einen Teil eines Kreises an einem angegebenen Punkt zeichnet.

1. Fügen wir unserem Canvas einen Bogen hinzu — fügen Sie folgendes am Ende Ihres Codes hinzu:

   ```js live-sample___3_canvas_paths
   ctx.fillStyle = "blue";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` akzeptiert sechs Parameter. Die ersten beiden geben die Position des Mittelpunkts des Bogens an (X und Y, jeweils). Der dritte ist der Radius des Kreises, der vierte und fünfte sind der Start- und Endwinkel, bei dem der Kreis gezeichnet werden soll (so führen 0 und 360 Grad zu einem vollen Kreis) und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn oder im Uhrzeigersinn gezeichnet werden soll (`false` bedeutet im Uhrzeigersinn).

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

   Das Muster hier ist sehr ähnlich, jedoch mit zwei Unterschieden:
   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird. Das bedeutet, dass, obwohl der Bogen als beginnend bei -45 Grad und endend bei 45 Grad angegeben ist, wir den Bogen über die 270 Grad zeichnen, die sich nicht innerhalb dieses Abschnitts befinden. Wenn Sie `true` in `false` ändern und dann den Code erneut ausführen würden, würde nur der 90-Grad-Schnitt des Kreises gezeichnet.
   - Vor dem Aufruf von `fill()` zeichnen wir eine Linie zum Mittelpunkt des Kreises. Dies bedeutet, dass wir den recht eleganten Pac-Man-Stil-Einschnitt erhalten. Wenn Sie diese Zeile entfernen (probieren Sie es aus!) und den Code erneut ausführen, würde nur ein Rand des Kreises zwischen dem Start- und Endpunkt des Bogens abgeschnitten. Dies veranschaulicht einen weiteren wichtigen Punkt des Canvas – wenn Sie versuchen, einen unvollständigen Pfad (d.h. einen, der nicht geschlossen ist) zu füllen, füllt der Browser eine gerade Linie zwischen dem Start- und Endpunkt und füllt diese aus.

Das war's fürs Erste; Ihr finales Beispiel sollte so aussehen:

{{EmbedLiveSample("3_canvas_paths", '100%', 200)}}

Sie können die **Abspielen**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

> [!NOTE]
> Um mehr über fortgeschrittene Pfadzeichnungsfunktionen wie Bézier-Kurven zu erfahren, schauen Sie sich unser [Zeichnen von Formen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)-Tutorial an.

### Text

Canvas hat auch Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz erkunden. Starten Sie, indem Sie eine weitere frische Kopie Ihrer Canvas-Vorlage erstellen, um das neue Beispiel zu zeichnen.

Text wird mithilfe zweier Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) – zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) – zeichnet Umriss- (Stroke-) Text.

Beide benötigen drei Eigenschaften in ihrer grundlegenden Verwendung: den zu zeichnenden Textstring und die X- und Y-Koordinaten des Punkts, an dem der Textbeginn gezeichnet werden soll. Dies ergibt sich als **untere linke** Ecke des **Textfelds** (wörtlich gesprochen, das umhüllende Feld um den gezeichneten Text), was Sie verwirren könnte, da andere Zeichenvorgänge meist von der oberen linken Ecke ausgehen – denken Sie daran.

Es gibt auch eine Reihe von Eigenschaften, um die Darstellung von Text zu steuern, wie [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), das es Ihnen erlaubt, Schriftfamilie, Größe usw. anzugeben. Es nimmt als Wert dieselbe Syntax wie die CSS-{{cssxref("font")}}-Eigenschaft.

Canvas-Inhalt ist für Screenreader nicht zugänglich. Auf die Leinwand gemalter Text ist für das DOM nicht verfügbar, aber um zugänglich zu sein, muss er verfügbar gemacht werden. In diesem Beispiel schließen wir den Text als Wert für `aria-label` ein.

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

Hier zeichnen wir zwei Zeilen Text, eine Umrisslinie und die andere Stroke. Das Beispiel sollte folgendermaßen aussehen:

{{EmbedLiveSample("4-canvas-text", '100%', 180)}}

Drücken Sie die **Abspielen**-Taste, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Spielen Sie ein wenig und sehen Sie, was Sie sich einfallen lassen können! Sie können weitere Informationen zu den Optionen finden, die für Canvas-Text verfügbar sind, unter [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Bilder auf Canvas zeichnen

Es ist möglich, externe Bilder auf Ihre Leinwand zu rendern. Diese können einfache Bilder, Frames von Videos oder der Inhalt anderer Leinwände sein. Im Moment schauen wir uns nur den Fall an, einige einfache Bilder auf unserer Leinwand zu verwenden.

1. Erstellen Sie wie zuvor eine weitere frische Kopie Ihrer Canvas-Vorlage, um das neue Beispiel zu zeichnen.

   Bilder werden mithilfe der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf dem Canvas gezeichnet. Die einfachste Version benötigt drei Parameter – eine Referenz auf das Bild, das Sie rendern möchten, sowie die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Fangen wir damit an, eine Bildquelle zu erhalten, die wir in unser Canvas einbetten können. Fügen Sie folgende Zeilen am Ende Ihres JavaScript hinzu:

   ```js live-sample___5-canvas-images
   const image = new Image();
   image.src =
     "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt mithilfe des [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktors. Das zurückgegebene Objekt ist vom selben Typ wie das, das zurückgegeben wird, wenn Sie eine Referenz auf ein existierendes `<img>`-Element greifen. Wir setzen dann das [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut gleich unserem Firefox-Logo-Bild. An diesem Punkt beginnt der Browser, das Bild zu laden.

3. Wir könnten nun versuchen, das Bild mit `drawImage()` einzubinden, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, sonst könnte der Code fehlschlagen. Wir können dies mit dem `load`-Ereignis erreichen, das nur ausgelöst wird, wenn das Bild fertig geladen ist. Fügen Sie den folgenden Block unter dem vorherigen hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie das Bild im Canvas eingebettet sehen, wenngleich ziemlich groß.

4. Doch es gibt mehr! Was, wenn wir nur einen Teil des Bildes anzeigen oder es in der Größe ändern möchten? Beides können wir mit der komplexeren Version von `drawImage()` tun. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile folgendermaßen:

   ```js
   ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185);
   ```

   ```js hidden live-sample___5-canvas-images
   image.addEventListener("load", () =>
     ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185),
   );
   ```

   - Der erste Parameter ist wie zuvor die Bildreferenz.
   - Die Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Originalbild ausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links vom ersten Parameter oder oberhalb des zweiten wird gezeichnet.
   - Die Parameter 4 und 5 definieren die Breite und die Höhe des Bereichs, den wir aus dem ursprünglichen Bild ausschneiden möchten, das wir geladen haben.
   - Die Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Bereichs des Bildes relativ zur oberen linken Ecke des Canvas zeichnen möchten.
   - Die Parameter 8 und 9 definieren die Breite und Höhe, mit der der ausgeschnittene Bereich des Bildes gezeichnet werden soll. In diesem Fall haben wir die gleichen Maße wie den Originalausschnitt angegeben, aber Sie könnten die Größe anpassen, indem Sie unterschiedliche Werte angeben.

5. Wenn das Bild bedeutend aktualisiert wird, muss auch die Beschreibung aktualisiert werden.

   ```js live-sample___5-canvas-images
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das endgültige Beispiel sollte so aussehen:

{{EmbedLiveSample("5-canvas-images", '100%', 260)}}

Drücken Sie die **Abspielen**-Taste, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

## Schleifen und Animationen

Wir haben bisher einige sehr grundlegende Anwendungsfälle für 2D-Canvas behandelt, aber wirklich erleben Sie die volle Leistung von Canvas nicht, wenn Sie es nicht in irgendeiner Weise aktualisieren oder animieren. Schließlich stellt Canvas programmierbare Bilder zur Verfügung! Wenn Sie nichts ändern wollen, könnten Sie genauso gut statische Bilder nutzen und sich die ganze Arbeit sparen.

### Erstellen einer Schleife

Mit Schleifen auf Canvas herumzuspielen, macht Spaß – Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)- oder anderen Schleife ausführen, genau wie bei jedem anderen JavaScript-Code.

Lassen Sie uns ein Beispiel erstellen.

1. Erstellen Sie eine weitere frische Kopie Ihrer Canvas-Vorlage.
2. Fügen Sie die folgende Zeile am Ende Ihres JavaScript hinzu. Diese enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js live-sample___6-canvas-for-loop
   ctx.translate(width / 2, height / 2);
   ```

   Dies sorgt dafür, dass der Koordinatenursprung (0, 0) in die Mitte des Canvas verlegt wird, anstatt in die obere linke Ecke. Dies ist in vielen Situationen sehr nützlich, wie in dieser, in der wir möchten, dass unser Design relativ zur Mitte des Canvas gezeichnet wird.

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

   Hier implementieren wir dieselbe `degToRad()`-Funktion, die wir im obigen Dreiecksbeispiel gesehen haben, eine `rand()`-Funktion, die eine Zufallszahl zwischen gegebenen unteren und oberen Grenzen zurückgibt, sowie die Variablen `length` und `moveOffset` (über die wir später mehr erfahren werden).

4. Die Idee ist, dass wir etwas im Canvas innerhalb der `for`-Schleife zeichnen und es jedes Mal iterieren, sodass wir etwas Interessantes erfinden können. Fügen Sie den folgenden Code innerhalb Ihrer `for`-Schleife hinzu:

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

   Also bei jedem Durchlauf der Schleife:
   - Setzen wir das `fillStyle` zu einem leicht transparenten Lila, das jedes Mal basierend auf dem Wert von `length` geändert wird. Wie Sie später sehen werden, wird die Länge jedes Mal reduziert, wenn die Schleife ausgeführt wird, sodass der Effekt hier ist, dass die Farbe mit jedem gezeichneten Dreieck heller wird.
   - Beginnen Sie den Pfad.
   - Bewegen Sie den Stift zu einer Koordinate von `(moveOffset, moveOffset)`. Diese Variable definiert, wie weit wir uns jedes Mal bewegen möchten, wenn wir ein neues Dreieck zeichnen.
   - Zeichnen Sie eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Dies zeichnet eine Linie der Länge `length` parallel zur x-Achse.
   - Berechnen Sie die Höhe des Dreiecks wie zuvor.
   - Zeichnen Sie eine Linie zu dem nach unten zeigenden Eckpunkt des Dreiecks, dann eine Linie zurück zum Anfang des Dreiecks.
   - Rufen Sie `fill()` auf, um das Dreieck auszufüllen.
   - Aktualisieren Sie die Variablen, die die Abfolge der Dreiecke beschreiben, damit wir bereit sind, das nächste zu zeichnen. Wir verringern den Wert `length` um 1, sodass die Dreiecke jedes Mal kleiner werden; erhöhen `moveOffset` um einen kleinen Betrag, damit jedes nachfolgende Dreieck etwas weiter entfernt ist, und verwenden eine weitere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), die es uns ermöglicht, das gesamte Canvas zu rotieren! Wir drehen es um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das war's! Das endgültige Beispiel sollte so aussehen:

{{EmbedLiveSample("6-canvas-for-loop", '100%', 550)}}

Drücken Sie die **Abspielen**-Taste, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten. Wir möchten Sie dazu ermutigen, mit dem Beispiel zu spielen und es zu Ihrem eigenen zu machen! Zum Beispiel:

- Zeichnen Sie Rechtecke oder Bögen anstelle von Dreiecken oder betten Sie sogar Bilder ein.
- Spielen Sie mit den Werten `length` und `moveOffset`.
- Fügen Sie einige Zufallszahlen mit der `rand()`-Funktion hinzu, die wir oben eingefügt, aber nicht verwendet haben.

### Animationen

Das Schleifenbeispiel, das wir oben erstellt haben, war unterhaltsam, aber wirklich benötigen Sie eine konstante Schleife, die immer wieder läuft, für jegliche ernsthaften Canvas-Anwendungen (wie Spiele und Echtzeitvisualisierungen). Wenn Sie Ihr Canvas wie einen Film betrachten, möchten Sie wirklich, dass das Display bei jedem Frame aktualisiert wird, um die aktualisierte Ansicht anzuzeigen, mit einer idealen Bildwiederholrate von 60 Bildern pro Sekunde, damit die Bewegung für das menschliche Auge schön und flüssig erscheint.

Es gibt einige JavaScript-Funktionen, mit denen Sie Funktionen wiederholt mehrere Male pro Sekunde ausführen können, wobei die beste für unsere Zwecke hier [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) ist. Es nimmt einen Parameter – den Namen der Funktion, die Sie für jeden Frame ausführen möchten. Das nächste Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion das neue Update für Ihre Animation zeichnet, dann `requestAnimationFrame()` kurz vor dem Ende der Funktion erneut aufruft, wird die Animationsschleife weiterlaufen. Die Schleife endet, wenn Sie aufhören, `requestAnimationFrame()` aufzurufen, oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) nach einem Aufruf von `requestAnimationFrame()` aufrufen, aber bevor der Frame aufgerufen wird, den Sie ausführen möchten.

> [!NOTE]
> Es ist eine gute Praxis, `cancelAnimationFrame()` aus Ihrem Hauptcode aufzurufen, wenn Sie mit der Animation fertig sind, um sicherzustellen, dass keine Updates mehr zu erwarten sind.

Der Browser berechnet komplexe Details wie eine gleichmäßige Geschwindigkeit der Animation oder verschwendet keine Ressourcen für die Animation von Dingen, die nicht gesehen werden können.

Um zu sehen, wie es funktioniert, schauen wir uns kurz unser [Bouncing Balls Beispiel](#frame_bouncing-balls) an. Der Code für die Schleife, die alles in Bewegung hält, sieht so aus:

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

Wir führen die `loop()`-Funktion einmal ganz am Ende des Codes aus, um den Zyklus zu starten, und zeichnen den ersten Animationsrahmen. Die Funktion `loop()` übernimmt dann die Aufgabe, `requestAnimationFrame(loop)` aufzurufen, um den nächsten Animationsrahmen erneut auszuführen, und zwar wieder.

Beachten Sie, dass wir in jedem Frame das Canvas vollständig löschen und alles erneut zeichnen. Für jeden Ball, der vorhanden ist, zeichnen wir ihn, aktualisieren seine Position und überprüfen, ob er mit anderen Bällen kollidiert. Einmal gezeichnet eine Grafik auf der Leinwand, gibt es keine Möglichkeit, diese Grafik einzeln zu manipulieren, wie Sie es mit DOM-Elementen können. Sie können jeden Ball nicht auf der Leinwand verschieben, denn einmal gezeichnet, ist er ein Teil der Leinwand und kein einzelnes zugängliches Element oder Objekt. Stattdessen müssen Sie es löschen und neu zeichnen, entweder indem Sie den gesamten Frame löschen und alles neu zeichnen oder Code haben, der genau weiß, welche Teile gelöscht werden müssen, und nur diese entfernt und den Minimalbereich der Leinwand neu zeichnet, der nötig ist.

Die Optimierung der Animation von Grafiken ist eine ganze Spezialdisziplin des Programmierens, mit vielen cleveren Techniken zur Verfügung. Diese sind jedoch über das, was wir für unser Beispiel benötigen, hinaus!

Im Allgemeinen umfasst der Prozess zum Ausführen einer Canvas-Animation die folgenden Schritte:

1. Löschen Sie den Canvas-Inhalt (z.B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Speichern Sie den Zustand (falls erforderlich) mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) – nützlich, wenn Sie Einstellungen auf dem Canvas speichern möchten, bevor Sie weitermachen, was für fortgeschrittene Anwendungen nützlich ist.
3. Zeichnen Sie die Grafiken, die Sie animieren möchten.
4. Stellen Sie die gespeicherten Einstellungen aus Schritt 2 wieder her, indem Sie [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore) verwenden.
5. Rufen Sie `requestAnimationFrame()` auf, um das Zeichnen des nächsten Animationsframes zu planen.

> [!NOTE]
> Wir werden `save()` und `restore()` hier nicht abdecken, aber sie werden schön in unserem [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations)-Tutorial (und den darauf folgenden) erklärt.

### Objektanimation fürs Gehen

Erstellen wir nun unsere eigene einfache Animation – wir animieren ein Objekt, das sich über den Bildschirm bewegt, indem wir eine Sprite Sheet verwenden.

1. Erstellen Sie eine weitere frische Kopie unserer Canvas-Vorlage und öffnen Sie sie in Ihrem Code-Editor.

2. Aktualisieren Sie den alternativen HTML-Text, um das Bild zu reflektieren:

   ```html live-sample___7-canvas-walking-animation
   <canvas class="myCanvas">
     <p>A cat walking.</p>
   </canvas>
   ```

3. Diesmal werden wir die Hintergrundfarbe nicht schwarz färben. Setzen Sie daher nach dem Erwerb der `ctx`-Variable stattdessen den Hintergrund auf Hellgrau:

   ```js live-sample___7-canvas-walking-animation
   ctx.fillStyle = "#e5e6e9";
   ctx.fillRect(0, 0, width, height);
   ```

4. Fügen Sie am Ende des JavaScript die folgende Zeile hinzu, um erneut den Koordinatenursprung in die Mitte des Canvas zu verschieben:

   ```js live-sample___7-canvas-walking-animation
   ctx.translate(width / 2, height / 2);
   ```

5. Erstellen wir nun ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, setzen dessen [`src`](/de/docs/Web/API/HTMLImageElement/src) auf das Bild, das wir laden wollen, und fügen eine `onload`-Ereignisbehandlung hinzu, die die `draw()`-Funktion auslöst, wenn das Bild geladen ist:

   ```js live-sample___7-canvas-walking-animation
   const image = new Image();
   image.src =
     "https://developer.mozilla.org/shared-assets/images/examples/web-animations/cat_sprite.png";
   image.onload = draw;
   ```

6. Als Nächstes fügen wir einige Variablen hinzu, um die Bildschirmposition zu verfolgen, an der das Sprite gezeichnet wird, und die Sprite-Nummer, die wir anzeigen möchten.

   ```js live-sample___7-canvas-walking-animation
   let spriteIndex = 0;
   let posX = 0;
   const spriteWidth = 300;
   const spriteHeight = 150;
   const totalSprites = 12;
   ```

   Das Sprite-Bild wurde erstellt und freundlicherweise von [Rachel Nabors](https://nearestnabors.com/) zur Verfügung gestellt für ihre Dokumentationsarbeit an the [Web Animations API](/de/docs/Web/API/Web_Animations_API). Es sieht so aus:

   ![Ein Sprite-Blatt mit drei Spalten, jede Spalte enthält eine Sequenz von Bildern einer schwarzen Katze, die sich in verschiedenen Posen nach links bewegt. Jedes Sprite ist 300 Pixel breit und 150 Pixel hoch.](/shared-assets/images/examples/web-animations/cat_sprite.png)

   Es hat drei Spalten. Jede Spalte ist eine Sequenz, die die Katze in unterschiedlichen Posen (laufen, traben, galoppieren) zeigt. Jede Sequenz enthält entweder 12 oder 13 Sprites – jedes ist 300 Pixel breit und 150 Pixel hoch. Wir werden die links am weitestens verbreitete Geh-Sequenz verwenden, die 12 Sprites enthält. Um jedes Sprite sauber anzuzeigen, müssen wir `drawImage()` verwenden, um ein Einzelsprite-Bild aus dem Sprite Sheet auszuschneiden und nur diesen Abschnitt anzuzeigen, ähnlich wie zuvor mit dem Firefox-Logo. Die X- und Y-Koordinaten des Ausschnitts müssen ein Vielfaches von `spriteWidth` und `spriteHeight`, respektiv, sei; denn wir verwenden die links am weitesten verbreitete Sequenz, der X-Wert ist immer 0. Die Größe des Ausschnitts beträgt immer `spriteWidth` mal `spriteHeight`.

7. Lassen Sie uns nun eine leere `draw()`-Funktion am Ende des Codes einfügen, bereit zum Füllen mit ein bisschen Code:

   ```js
   function draw() {}
   ```

   ```js-nolint hidden live-sample___7-canvas-walking-animation
   function draw() {
   ```

8. Der Rest des Abschnitts geht in `draw()`. Zuerst fügen Sie die folgende Zeile hinzu, die das Canvas löscht, um jeden Frame zum Zeichnen vorzubereiten. Beachten Sie, dass wir beim Löschen der Leinwand die obere linke Ecke des Rechtecks als `-(width / 2), -(height / 2)` angeben müssen, da wir die Ursprungsposition frühere auf `width/2, height/2` gesetzt haben.

   ```js live-sample___7-canvas-walking-animation
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

9. Als Nächstes lassen Sie uns mit drawImage unser Bild zeichnen – die 9-Parameter-Version. Fügen Sie Folgendes hinzu:

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
   - Wir nehmen `image` als das einzubettende Bild.
   - Die Parameter 2 und 3 geben den oberen linken Punkt des auszuschneidenden Abschnitts aus dem Quellbild an, wobei der X-Wert als 0 (für die links am weitesten verbreitete Spalte) und der Y-Wert alle `spriteHeight`-Vielfachen durchläuft. Sie können den X-Wert mit `spriteWidth` oder `2 * spriteWidth` ersetzen, um die anderen Spalten auszuwählen.
   - Die Parameter 4 und 5 geben die Größe des auszuschneidenden Abschnitts an – `spriteWidth` und `spriteHeight`.
   - Die Parameter 6 und 7 geben den oberen linken Punkt des Rechtecks an, in das die geschnittene Bildfläche auf dem Canvas gezeichnet wird – die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichnungsposition durch Ändern des `posX`-Werts ändern können. Die Y-Position beträgt `-spriteHeight / 2`, was bedeutet, dass das Bild vertikal in der Mitte des Canvas liegt.
   - Die Parameter 8 und 9 geben die Größe des zu zeichnenden Bildes auf dem Canvas an. Wir möchten nur die Originalgröße beibehalten, daher geben wir `spriteWidth` und `spriteHeight` als Breite und Höhe an.

10. Jetzt ändern wir den `spriteIndex`-Wert nach jedem Zeichnen – nun ja, nachdem einige sich ändern. Fügen Sie dem unteren Teil der `draw()`-Funktion Folgendes hinzu:

    ```js live-sample___7-canvas-walking-animation
    if (posX % 11 === 0) {
      if (spriteIndex === totalSprites - 1) {
        spriteIndex = 0;
      } else {
        spriteIndex++;
      }
    }
    ```

    Wir schließen den gesamten Block in `if (posX % 11 === 0) { }` ein. Wir verwenden den Modulo-Operator (`%`) auch bekannt als [Rest-Operator](/de/docs/Web/JavaScript/Reference/Operators/Remainder), um zu überprüfen, ob der `posX`-Wert ohne Rest durch 11 teilbar ist. Wenn ja, gehen wir zum nächsten Sprite über, indem wir `spriteIndex` inkrementieren (auf 0 zurücksetzen, wenn wir mit dem letzten durch sind). Dies bedeutet effektiv, dass wir das Sprite nur alle 11 Frames aktualisieren oder etwa 6 Frames pro Sekunde anzeigen, da `requestAnimationFrame()` bei der bestmöglichen Rate von bis zu 60 Frames pro Sekunde aufgerufen wird. Wir verlangsamen die Bildrate absichtlich, weil wir nur 12 Sprites zur Verfügung haben, und wenn wir jeden 60sten anzeigen würden, würde unser Objekt viel zu schnell bewegen!

    Innerhalb des äußeren Blocks verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob der `spriteIndex`-Wert der letzte ist. Wenn wir bereits das letzte Sprite anzeigen, setzen wir den `spriteIndex` wieder auf 0 zurück; andernfalls wird er nur um 1 inkrementiert.

11. Als Nächstes müssen wir berechnen, wie wir den `posX`-Wert für jeden Frame ändern – fügen Sie den folgenden Codeblock direkt unter Ihrem letzten hinzu.

    ```js live-sample___7-canvas-walking-animation
    if (posX < -width / 2 - spriteWidth) {
      const newStartPos = width / 2;
      posX = Math.ceil(newStartPos);
    } else {
      posX -= 2;
    }
    ```

    Wir verwenden eine weitere `if...else`-Anweisung, um zu sehen, ob der Wert von `posX` kleiner als `-width/2 - spriteWidth` geworden ist, was bedeutet, dass unsere Katze vom linken Rand des Bildschirms gelaufen ist. Falls ja, berechnen wir eine Position, die die Katze gerade rechts vom rechten Bildschirmrand platziert.

    Wenn unsere Katze noch nicht vom Bildschirmrand hinweg gelaufen ist, verringern wir `posX` um 2. Dies macht beim nächsten Zeichnen der Katze einen kleinen Schritt nach links.

12. Schließlich müssen wir die Animationsschleife durch den Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()`-Funktion ausführen:

    ```js live-sample___7-canvas-walking-animation
    window.requestAnimationFrame(draw);
    ```

```js-nolint hidden live-sample___7-canvas-walking-animation
}
```

Das war's! Das endgültige Beispiel sollte so aussehen:

{{EmbedLiveSample("7-canvas-walking-animation", '100%', 260)}}

Sie können die **Abspielen**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

### Eine einfache Zeichenanwendung

Als Beispiel für Animationen möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife zusammen mit Benutzereingaben (wie Mausbewegungen in diesem Fall) kombiniert werden kann. Wir werden diesen nicht Schritt für Schritt durchgehen und selbst erstellen; wir werden nur die interessantesten Teile des Codes untersuchen.

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

Sie können mit dem Beispiel live unten spielen; Sie können auch auf die **Abspielen**-Taste klicken, um es im MDN Playground zu öffnen, wo Sie den Quellcode bearbeiten können:

{{EmbedLiveSample("8-canvas-drawing-app", '100%', 600)}}

Schauen wir uns die interessantesten Teile an. Zunächst halten wir die X- und Y-Koordinaten der Maus und ob sie geklickt wird oder nicht drei Variablen: `curX`, `curY` und `pressed`. Wenn sich die Maus bewegt, führen wir eine Funktion aus, die als `onmousemove`-Ereignishandler festgelegt ist, der die aktuellen X- und Y-Werte erfasst. Wir verwenden auch `onmousedown`- und `onmouseup`-Ereignishandler, um den Wert von `pressed` auf `true` zu setzen, wenn die Maustaste gedrückt wird, und wieder auf `false`, wenn sie losgelassen wird.

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

Wenn die Schaltfläche "Leinwand löschen" gedrückt wird, führen wir eine einfache Funktion aus, die das gesamte Canvas zurück auf schwarz setzt, wie wir es in der Vergangenheit gesehen haben:

```js live-sample___8-canvas-drawing-app
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichnungsschleife ist diesmal ziemlich einfach – wenn gedrückt `true` ist, zeichnen wir einen Kreis mit einem Füllstil, der dem Wert im Farbauswahltool entspricht, und einem Radius, der dem Wert des Bereichsinputs entspricht. Wir müssen den Kreis 85 Pixel oberhalb der Stelle zeichnen, an der wir ihn gemessen haben, da die vertikale Messung vom oberen Rand des Ansichtsfensters erfolgt, aber wir den Kreis relativ zur Oberkante des Canvas zeichnen, das sich unterhalb der 85 Pixel hohen Symbolleiste befindet. Wenn wir ihn mit nur `curY` als y-Koordinate zeichnen würden, würde er 85 Pixel unterhalb der Mausposition erscheinen.

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

Alle `<input>`-Typen sind gut unterstützt. Falls ein Browser einen Eingabetyp nicht unterstützt, fällt er auf ein einfaches Textfeld zurück.

## WebGL

Es ist nun an der Zeit, das 2D-Gewebe hinter uns zu lassen und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalt wird mithilfe der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert, die eine komplett separate API gegenüber der 2D-Canvas-API ist, obwohl beide auf `<canvas>`-Elemente rendern.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und erlaubt Ihnen, direkt mit der {{Glossary("GPU", "GPU")}} des Computers zu kommunizieren. So ist das Schreiben von rohem WebGL näher an niedrigen Programmiersprachen wie C++ als an gewöhnlichen JavaScript; es ist ziemlich komplex, aber unglaublich mächtig.

### Eine Bibliothek verwenden

Aufgrund seiner Komplexität schreiben die meisten Leute 3D-Grafikcode durch die Verwendung einer JavaScript-Drittanbieter-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten dieser Arbeiten funktionieren ähnlich, indem sie Funktionen bereitstellen, um primitive und benutzerdefinierte Formen zu erstellen, Betrachtungskameras und -lichtquellen zu positionieren, Oberflächen mit Texturen zu versehen und mehr. Sie wickeln das WebGL für Sie ab, sodass Sie auf einer höheren Ebene arbeiten können.

Ja, die Verwendung einer von diesen bedeutet das Erlernen einer weiteren neuen API (einer Drittanbieter-API in diesem Fall), aber sie sind viel einfacher als das reine Codieren von rohem WebGL.

### Ein drehender Würfel

Lassen Sie uns ein Beispiel dazu anschauen, wie man mit einer WebGL-Bibliothek etwas erstellen kann. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es zu den Beliebtesten gehört. In diesem Tutorial werden wir einen drehenden 3D-Würfel erstellen.

1. Zuerst erstellen Sie einen neuen Ordner auf Ihrer lokalen Festplatte mit dem Namen `webgl-cube`.
2. Erstellen Sie darin eine neue Datei namens `index.html` und fügen Sie folgenden Inhalt hinzu:

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

3. Erstellen Sie als nächstes eine weitere neue Datei namens `script.js`, ebenfalls im gleichen Ordner wie vorher. Lassen Sie sie zunächst leer.
4. Erstellen Sie jetzt eine weitere neue Datei namens `style.css`, wieder im selben Ordner, und fügen Sie den folgenden Inhalt hinzu:

   ```css live-sample___9-webgl-cube
   html,
   body {
     margin: 0;
   }

   body {
     overflow: hidden;
   }
   ```

5. Wir haben `three.js` auf unsere Seite eingebunden (was das erste `<script>`-Element in unserem HTML tut), sodass wir jetzt mit dem Schreiben von JavaScript in `script.js` beginnen, das es nutzt. Beginnen wir, indem wir eine neue Szene erstellen – fügen Sie folgendes in `script.js` ein:

   ```js live-sample___9-webgl-cube
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene)-Konstruktor erstellt eine neue Szene, die die gesamte 3D-Welt repräsentiert, die wir anzeigen wollen.

6. Als nächstes benötigen wir eine **Kamera**, um die Szene zu sehen. In 3D-Bilder-Terminologie repräsentiert die Kamera die Position des Betrachters in der Welt. Um eine Kamera zu erstellen, fügen Sie die folgenden Zeilen als Nächstes hinzu:

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

   - Das Sichtfeld: Wie breit der vor der Kamera befindliche Bereich sein soll, der im sichtbaren Abschnitt onscreen angezeigt wird, in Grad.

   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Normalerweise ist dies das Verhältnis der Breite der Szene geteilt durch die Höhe der Szene. Die Verwendung eines anderen Werts verzerrt die Szene (was möglicherweise das ist, was Sie wollen, aber normalerweise nicht).

   - Die Nah-Ebene: Wie nahe Objekte an der Kamera sind, bevor wir aufhören, sie zu rendern. Denken Sie daran, wie Sie beim Annähern Ihres Fingers zur Mitte Ihrer Augen, ihn schließlich nicht mehr sehen können.

   - Die Fern-Ebene: Wie weit neu entfernte Objekte von der Kamera hin abliegen, bevor sie nicht mehr gerendert werden.

   Wir setzen auch die Position der Kamera auf 5 Einheiten von der Z-Achse aus, welche wie in CSS, aus dem Bildschirm zu Ihnen, dem Betrachter, geht.

7. Die dritte wesentliches Zutat ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene auf Basis einer gegebenen Kamera rendert. Wir werden eine für jetzt mithilfe des [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)-Konstruktors erstellen, aber wir werden ihn vorerst nicht nutzen. Fügen Sie die folgenden Zeilen als Nächstes hinzu:

   ```js live-sample___9-webgl-cube
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile legt die Größe fest, in der der Renderer die Kameransicht zeichnen wird, und die dritte Zeile fügt das vom Renderer erstellte `<canvas>`-Element dem Dokumentenkörper hinzu. Alles, was der Renderer jetzt zeichnet, wird in unserem Fenster angezeigt.

8. Als Nächstes möchten wir den Würfel erstellen, den wir auf dem Canvas anzeigen werden. Fügen Sie den folgenden Codeblock am Ende Ihres JavaScript hinzu:

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

   Hier gibt es einiges mehr zu beachten, also lassen Sie uns es in Stufen durchgehen:

   - Wir erstellen zunächst eine globale Variable `cube`, sodass wir von überall im Code auf unseren Würfel zugreifen können.
   - Als Nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt, dann rufen wir `load()` darauf auf. `load()` hat hier zwei Parameter (obwohl es mehr geben könnte): die zu ladende Textur (ein PNG) und eine Funktion, die ausgeführt wird, wenn die Textur geladen ist.
   - Innerhalb dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um anzugeben, dass wir einen 2 x 2 Wiederholung der Grafik auf allen Seiten des Würfels wünschen. Als Nächstes erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt und fügen sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) zusammen, um unseren Würfel zu erstellen. Ein Objekt benötigt typischerweise eine Geometrie (welche Form es hat) und ein Material (wie seine Oberfläche aussieht).
   - Schließlich fügen wir unseren Würfel zur Szene hinzu und rufen dann unsere `draw()`-Funktion auf, um die Animation zu starten.

9. Bevor wir `draw()` definieren, fügen wir ein paar Lichter in die Szene ein, um die Dinge ein bisschen zu beleben; fügen Sie die folgenden Blöcke als Nächstes hinzu:

   ```js live-sample___9-webgl-cube
   const light = new THREE.AmbientLight("white"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("white");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art weiches Licht, das die gesamte Szene ein wenig erleuchtet, wie die Sonne, wenn Sie sich im Freien befinden. Dagegen ist ein [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt ein gerichteter Lichtstrahl, mehr wie eine Taschenlampe/ein Fackellicht (oder tatsächlich ein Scheinwerfer).

10. Zuletzt fügen wir unsere `draw()`-Funktion am Ende des Codes hinzu:

    ```js live-sample___9-webgl-cube
    function draw() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);

      requestAnimationFrame(draw);
    }
    ```

    Dies ist recht intuitiv; bei jedem Frame drehen wir unseren Würfel leicht auf seinen X- und Y-Achsen, dann rendern wir die Szene, wie sie von unserer Kamera gesehen wird, und schließlich rufen wir `requestAnimationFrame()` auf, um die nächste Frame-Zeichnung zu planen.

Das Endergebnis sollte so aussehen:

{{EmbedLiveSample("9-webgl-cube", "100%", 500)}}

> [!NOTE]
> In unserem GitHub-Repo finden Sie auch ein weiteres interessantes 3D-Würfel-Beispiel – [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([siehe es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dies verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Computer-Webcam zu nehmen und ihn als Textur auf die Seite des Würfels zu projizieren!

## Zusammenfassung

Zu diesem Zeitpunkt sollten Sie eine hilfreiche Vorstellung von den Grundlagen der Grafikprogrammierung mit Canvas und WebGL haben und was Sie mit diesen APIs tun können, sowie eine gute Idee haben, wohin Sie für weitere Informationen gehen können. Viel Spaß!

## Siehe auch

Hier haben wir nur die wichtigsten Grundlagen von Canvas behandelt – es gibt viel mehr zu lernen! Die unten stehenden Artikel werden Sie weiterbringen.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) – Eine sehr detaillierte Tutorial-Serie, die erklärt, was man über 2D-Canvas in viel mehr Details wissen sollte, als wir hier behandelt haben. Wesentliches Lesen.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) – Eine Serie, die die Grundlagen des rohen WebGL-Programmierens lehrt.
- [Grundlegendes Demo mit Three.js aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) – einfaches Three.js-Tutorial. Wir haben auch gleichwertige Leitfäden für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).

## Beispiele

- [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) – Verwendet die Web Audio API zur Tönungserzeugung und Canvas zur Erzeugung einer hübschen Visualisierung, die dazu passt.
- [Voice Change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) – Verwendet ein Canvas zur Visualisierung von Echtzeit-Audiodaten von der Web Audio API.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
