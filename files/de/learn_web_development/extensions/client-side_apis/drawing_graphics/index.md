---
title: Grafik zeichnen
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsfähige Grafikprogrammierwerkzeuge, von der Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) Sprache bis hin zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in Canvas und weiterführende Ressourcen, um Ihnen zu ermöglichen, mehr zu lernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und grundlegende API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die durch die in dieser Lektion abgedeckten APIs ermöglichten Konzepte und Anwendungsfälle.</li>
          <li>Grundsyntax und Verwendung von <code>&lt;canvas&gt;</code> und zugehörigen APIs.</li>
          <li>Verwendung von Timern und <code>requestAnimationFrame()</code> zur Einrichtung von Animationsschleifen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Das Web war ursprünglich nur Text, was sehr langweilig war, also wurden Bilder eingeführt – zuerst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Das war jedoch immer noch nicht genug. Während Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden konnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) – da sie durch Markup dargestellt werden –, gab es immer noch keine Möglichkeit, dasselbe für Bitmap-Bilder zu tun, und die verfügbaren Werkzeuge waren ziemlich begrenzt. Das Web hatte immer noch keine effektive Methode, um Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die üblicherweise durch niedrigere Programmiersprachen wie C++ oder Java gehandhabt werden.

Die Situation begann sich zu verbessern, als Browser 2004 begannen, das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) zu unterstützen. Wie Sie weiter unten sehen werden, bietet Canvas einige nützliche Werkzeuge zur Erstellung von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere wenn es mit einigen der anderen APIs der Web-Plattform kombiniert wird, kann jedoch schwierig oder unmöglich zugänglich gemacht werden.

Das folgende Beispiel zeigt eine einfache 2D-Canvas-basierte Bouncing-Balls-Animation, die wir ursprünglich in unserem Modul [Introducing JavaScript objects](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) kennengelernt haben:

{{EmbedGHLiveSample("learning-area/javascript/oojs/bouncing-balls/index-finished.html", '100%', 500)}}

Um 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Dies wurde zu [WebGL](/de/docs/Web/API/WebGL_API), das unter Browseranbietern an Bedeutung gewann und um 2009–2010 standardisiert wurde. WebGL ermöglicht es Ihnen, echte 3D-Grafiken in Ihrem Webbrowser zu erstellen; das folgende Beispiel zeigt einen einfachen rotierenden WebGL-Würfel:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Dieser Artikel wird sich hauptsächlich auf 2D-Canvas konzentrieren, da Rohcode in WebGL sehr komplex ist. Wir werden jedoch zeigen, wie man eine WebGL-Bibliothek verwendet, um eine 3D-Szene einfacher zu erstellen, und Sie können ein Tutorial finden, das Roh-WebGL an anderer Stelle behandelt – siehe [Getting started with WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Aktives Lernen: Einstieg in ein `<canvas>`

Wenn Sie eine 2D-_oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-{{htmlelement("canvas")}}-Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Dies ist so einfach wie das Einfügen des Elements auf der Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dadurch wird ein Canvas auf der Seite mit einer Größe von 320 x 240 Pixeln erstellt.

Sie sollten einigen Ersatzinhalt innerhalb der `<canvas>`-Tags einfügen. Dies sollte den Canvas-Inhalt für Benutzer von Browsern beschreiben, die Canvas nicht unterstützen, oder für Benutzer von Screenreadern.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Der Ersatz sollte nützlichen alternativen Inhalt zum Canvas-Inhalt bieten. Wenn Sie beispielsweise ein ständig aktualisiertes Diagramm von Aktienkursen rendern, könnte der Ersatzinhalt ein statisches Bild des neuesten Aktiencharts sein, mit `alt`-Text, der angibt, was die Preise in Textform sind, oder eine Liste von Links zu einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalt ist für Screenreader nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs direkt im Canvas-Element oder als Ersatzinhalt zwischen den öffnenden und schließenden `<canvas>`-Tags ein. Canvas-Inhalt ist nicht Teil des DOM, aber verschachtelter Ersatzinhalt ist es.

### Unser Canvas erstellen und dimensionieren

Lassen Sie uns zunächst unser eigenes Canvas erstellen, auf dem wir zukünftige Experimente zeichnen können.

1. Machen Sie zuerst eine lokale Kopie des Verzeichnisses [0_canvas_start](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/0_canvas_start). Es enthält drei Dateien:
   - "index.html"
   - "script.js"
   - "style.css"
2. Öffnen Sie "index.html" und fügen Sie den folgenden Code direkt unterhalb des öffnenden {{htmlelement("body")}}-Tags hinzu:

   ```html
   <canvas class="myCanvas">
     <p>Add suitable fallback here.</p>
   </canvas>
   ```

   Wir haben dem `<canvas>`-Element eine `class` hinzugefügt, damit es einfacher ist, es auszuwählen, wenn wir mehrere Canvas auf der Seite haben, aber wir haben die `width`- und `height`-Attribute vorerst entfernt (Sie könnten sie wieder hinzufügen, wenn Sie möchten, aber wir werden sie in einem nachfolgenden Abschnitt mit JavaScript festlegen). Canvas ohne explizite Breite und Höhe haben standardmäßig eine Breite von 300 Pixeln und eine Höhe von 150 Pixeln.

3. Öffnen Sie nun "script.js" und fügen Sie die folgenden JavaScript-Zeilen hinzu:

   ```js
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz zum Canvas in der `canvas`-Konstanten gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas auf [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Ansichtbreite gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas gleich [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Ansichthöhe gibt). Jetzt haben wir ein Canvas, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden auch sehen, dass wir Zuweisungen mit mehreren Gleichheitszeichen verketten – das ist in JavaScript erlaubt, und es ist eine gute Technik, wenn Sie mehrere Variablen auf den gleichen Wert setzen möchten. Wir wollten die Canvas-Breite und -Höhe in den Breite-/Höhe-Variablen leicht zugänglich machen, da dies nützliche Werte sind, die später verfügbar sind (zum Beispiel, wenn Sie etwas genau in der Mitte der Breite des Canvas zeichnen möchten).

> [!NOTE]
> Sie sollten die Größe des Bildes im Allgemeinen mit HTML-Attributen oder DOM-Eigenschaften festlegen, wie oben erläutert. Sie könnten CSS verwenden, aber das Problem ist dann, dass die Größenänderung nach dem Rendern des Canvas erfolgt, und wie bei jedem anderen Bild (der gerenderte Canvas ist nur ein Bild) könnte das Bild pixelig oder verzerrt werden.

### Den Canvas-Kontext bekommen und die endgültige Einrichtung abschließen

Wir müssen noch eine letzte Sache tun, bevor wir unser Canvas-Template als fertig betrachten können. Um auf das Canvas zu zeichnen, benötigen wir eine spezielle Referenz auf den Zeichnungsbereich, die Kontext genannt wird. Dies geschieht mithilfe der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die für die grundlegende Nutzung einen einzelnen String als Parameter nimmt, der den Typ des Kontexts repräsentiert, den Sie abrufen möchten.

In diesem Fall möchten wir ein 2D-Canvas, also fügen Sie die folgende JavaScript-Zeile unter den anderen in "script.js" hinzu:

```js
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Weitere Kontextwerte, die Sie auswählen könnten, sind `webgl` für WebGL, `webgl2` für WebGL 2 usw., aber die werden wir in diesem Artikel nicht benötigen.

Das war es schon – unser Canvas ist jetzt startklar zum Zeichnen! Die `ctx`-Variable enthält jetzt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, und alle Zeichenoperationen auf dem Canvas beinhalten die Manipulation dieses Objekts.

Lassen Sie uns eine letzte Sache tun, bevor wir weitermachen. Wir färben den Canvas-Hintergrund schwarz ein, um Ihnen einen ersten Eindruck von der Canvas-API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

```js
ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mit der [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)-Eigenschaft des Canvas (diese nimmt [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) genau wie CSS-Eigenschaften an), dann zeichnen wir ein Rechteck, das die gesamte Fläche des Canvas mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) bedeckt (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, in der Sie das Rechteck gezeichnet haben möchten – wir haben Ihnen gesagt, dass diese `width`- und `height`-Variablen nützlich sein würden)!

OK, unser Template ist fertig und es ist Zeit weiterzugehen.

## Grundlagen des 2D-Canvas

Wie oben bereits erwähnt, werden alle Zeichenoperationen durch die Manipulation eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts (in unserem Fall `ctx`) durchgeführt. Viele Operationen müssen mit Koordinaten versehen werden, um genau festzulegen, wo etwas gezeichnet werden soll – die obere linke Ecke des Canvas ist Punkt (0, 0), die horizontale (x) Achse verläuft von links nach rechts und die vertikale (y) Achse verläuft von oben nach unten.

![Gitterwolkenpapier mit kleinen Quadraten, das seine Fläche bedeckt, mit einem stahlblauen Quadrat in der Mitte. Die obere linke Ecke des Canvas ist der Punkt (0, 0) der Canvas-x-Achse und y-Achse. Die horizontale (x) Achse verläuft von links nach rechts und gibt die Breite an, und die vertikale (y) Achse verläuft von oben nach unten und gibt die Höhe an. Die obere linke Ecke des blauen Quadrats ist als Abstand x Einheiten von der y-Achse und y Einheiten von der x-Achse gekennzeichnet.](canvas_default_grid.png)

Das Zeichnen von Formen erfolgt in der Regel mithilfe des Rechteckformprimitives oder indem eine Linie entlang eines bestimmten Pfads gezeichnet und dann die Form ausgefüllt wird. Unten zeigen wir, wie man beides macht.

### Einfache Rechtecke

Beginnen wir mit einfachen Rechtecken.

1. Machen Sie zunächst eine Kopie Ihres neu codierten Canvas-Templates (oder machen Sie eine lokale Kopie des Verzeichnisses [1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template), wenn Sie die obigen Schritte nicht befolgt haben).
2. Fügen Sie als Nächstes die folgenden Zeilen am unteren Ende Ihres JavaScripts hinzu:

   ```js
   ctx.fillStyle = "red";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie speichern und aktualisieren, sollte ein rotes Rechteck auf Ihrem Canvas erscheinen. Seine obere linke Ecke ist 50 Pixel von der Oberkante und dem linken Rand des Canvas entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch den dritten und vierten Parameter definiert).

3. Lassen Sie uns ein weiteres Rechteck hinzufügen — diesmal ein grünes. Fügen Sie das folgende am unteren Ende Ihres JavaScripts hinzu:

   ```js
   ctx.fillStyle = "green";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren Sie, und Sie werden Ihr neues Rechteck sehen. Dies wirft einen wichtigen Punkt auf: Grafikoperationen wie das Zeichnen von Rechtecken, Linien usw. werden in der Reihenfolge ausgeführt, in der sie auftreten. Denken Sie daran, es ist wie das Malen einer Wand, bei der jede Farbschicht das darunterliegende überdeckt und sogar versteckt. Sie können nichts daran ändern, also müssen Sie sorgfältig darüber nachdenken, in welcher Reihenfolge Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, zum Beispiel mit `rgb()`. Der "Alpha-Kanal" definiert den Grad der Transparenz der Farbe. Je höher der Wert, desto mehr wird er das verdecken, was dahinter liegt. Fügen Sie das folgende zu Ihrem Code hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, einige weitere Rechtecke Ihrer eigenen zu zeichnen; haben Sie Spaß dabei!

### Linien und Linienbreiten

Bisher haben wir das Zeichnen von gefüllten Rechtecken betrachtet, aber Sie können auch Rechtecke zeichnen, die nur Umrisse sind (in der Grafikdesignsprache **Strokes** genannt). Um die Farbe festzulegen, die Sie für Ihren Stroke möchten, verwenden Sie die [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)-Eigenschaft; das Zeichnen eines Stroke-Rechtecks erfolgt mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Fügen Sie dem vorherigen Beispiel, erneut unterhalb der vorherigen JavaScript-Zeilen, folgendes hinzu:

   ```js
   ctx.strokeStyle = "rgb(255 255 255)";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Strokes beträgt 1 Pixel; Sie können den Wert der [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)-Eigenschaft anpassen, um dies zu ändern (sie nimmt eine Zahl an, die die Anzahl der Pixel angibt, die der Stroke breit ist). Fügen Sie die folgende Zeile zwischen den vorhergehenden beiden Zeilen hinzu:

   ```js
   ctx.lineWidth = 5;
   ```

Jetzt sollten Sie sehen, dass Ihr weißer Umriss viel dicker geworden ist! Das war es vorerst. An diesem Punkt sollte Ihr Beispiel so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles/index.html", '100%', 250)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [2_canvas_rectangles](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles).

### Pfade zeichnen

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Im Grunde genommen bedeutet dies, Code zu schreiben, um genau festzulegen, welchen Weg der Stift auf Ihrem Canvas zurücklegen soll, um die Form zu zeichnen, die Sie zeichnen möchten. Canvas enthält Funktionen zum Zeichnen gerader Linien, Kreise, Bézierkurven und mehr.

Lassen Sie uns den Abschnitt beginnen, indem wir eine neue Kopie unseres Canvas-Templates ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) machen, um das neue Beispiel darin zu zeichnen.

Wir werden einige allgemeine Methoden und Eigenschaften über alle unten aufgeführten Abschnitte hinweg verwenden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — Beginnt, einen Pfad zu zeichnen, an dem Punkt, an dem sich der Stift derzeit auf dem Canvas befindet. Auf einem neuen Canvas beginnt der Stift bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — Bewegt den Stift zu einem anderen Punkt auf dem Canvas, ohne den Weg zu protokollieren oder die Linie zu zeichnen; der Stift "springt" zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — Zeichnet eine gefüllte Form, indem der bis jetzt gezeichnete Pfad gefüllt wird.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — Zeichnet eine Umrissform, indem ein Stroke entlang des bis jetzt gezeichneten Pfades gezeichnet wird.
- Sie können auch Merkmale wie `lineWidth` und `fillStyle`/`strokeStyle` mit Pfaden genauso wie mit Rechtecken verwenden.

Eine typische, einfache Pfadzeichnung könnte so aussehen:

```js
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Linien zeichnen

Zeichnen wir ein gleichseitiges Dreieck auf dem Canvas.

1. Fügen Sie zunächst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Diese konvertiert Gradwerte in Radianten, was nützlich ist, da, wann immer Sie in JavaScript einen Winkelwert angeben müssen, dieser fast immer in Radianten erfolgt, aber Menschen denken normalerweise in Grad.

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Beginnen Sie als nächstes Ihren Pfad, indem Sie das folgende unterhalb Ihrer vorhergehenden Ergänzung hinzufügen; hier setzen wir eine Farbe für unser Dreieck, beginnen einen Pfad zu zeichnen und bewegen dann den Stift zu (50, 50), ohne etwas zu zeichnen. Dort werden wir beginnen, unser Dreieck zu zeichnen.

   ```js
   ctx.fillStyle = "red";
   ctx.beginPath();
   ctx.moveTo(50, 50);
   ```

3. Fügen Sie jetzt die folgenden Zeilen am Ende Ihres Skripts hinzu:

   ```js
   ctx.lineTo(150, 50);
   const triHeight = 50 * Math.tan(degToRad(60));
   ctx.lineTo(100, 50 + triHeight);
   ctx.lineTo(50, 50);
   ctx.fill();
   ```

   Lassen Sie uns dies in der Reihenfolge durchgehen:

   Zuerst zeichnen wir eine Linie bis zu (150, 50) – unser Pfad verläuft jetzt 100 Pixel nach rechts entlang der x-Achse.

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks mit ein wenig einfacher Trigonometrie. Grundsätzlich zeichnen wir das Dreieck nach unten zeigend. Die Winkel in einem gleichseitigen Dreieck betragen immer 60 Grad; um die Höhe zu berechnen, können wir es in der Mitte in zwei rechtwinklige Dreiecke unterteilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben. In Bezug auf die Seiten:
   - Die längste Seite wird als **Hypotenuse** bezeichnet.
   - Die Seite neben dem 60-Grad-Winkel wird als **Nebenseite** bezeichnet – die wir als 50 Pixel kennen, da sie die Hälfte der Linie darstellt, die wir gerade gezeichnet haben.
   - Die Seite gegenüber des 60-Grad-Winkels wird als **Gegenseite** bezeichnet und ist die Höhe des Dreiecks, die wir berechnen möchten.

   ![Ein gleichseitiges Dreieck nach unten weisend mit beschrifteten Winkeln und Seiten. Die horizontale Linie oben ist als 'nebenseite' gekennzeichnet. Eine senkrechte gepunktete Linie, ausgehend von der Mitte der nebenseite, die als 'gegenseite' bezeichnet ist, teilt das Dreieck und erstellt zwei gleichmäßige rechtwinklige Dreiecke. Die rechte Seite des Dreiecks ist als Hypotenuse gekennzeichnet, da es die Hypotenuse des durch die Linie 'gegenseite' gebildeten rechtwinkligen Dreiecks ist. obwohl alle drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des rechtwinkligen Dreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass die Länge der Nebenseite multipliziert mit dem Tangens des Winkels gleich der Gegenseite ist, daher kommen wir auf `50 * Math.tan(degToRad(60))`. Wir verwenden unsere `degToRad()`-Funktion, um 60 Grad in Radianten zu konvertieren, da {{jsxref("Math.tan()")}} einen Eingabewert in Radianten erwartet.

4. Mit der berechneten Höhe zeichnen wir eine weitere Linie zu `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss genau in der Mitte zwischen den beiden vorhergehenden X-Werten liegen, die wir festgelegt haben. Der Y-Wert muss 50 plus der Dreieckshöhe sein, da wir wissen, dass die Spitze des Dreiecks 50 Pixel von der Oberseite des Canvas entfernt ist.
5. Die nächste Linie zeichnet eine Linie zurück zum Ausgangspunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form auszufüllen.

#### Kreise zeichnen

Schauen wir uns nun an, wie man einen Kreis im Canvas zeichnet. Dies wird mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) erreicht, die einen ganzen oder einen Teil eines Kreises an einem bestimmten Punkt zeichnet.

1. Fügen wir einen Bogen zu unserem Canvas hinzu – fügen Sie das folgende am Ende Ihres Codes hinzu:

   ```js
   ctx.fillStyle = "rgb(0 0 255)";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` nimmt sechs Parameter. Die ersten beiden geben die Position des Kreismittelpunktes (X und Y, jeweils) an. Der dritte ist der Radius des Kreises, der vierte und fünfte sind die Start- und Endwinkel, bei denen der Kreis gezeichnet werden soll (das Angeben von 0 und 360 Grad ergibt einen vollständigen Kreis), und der sechste Parameter definiert, ob der Kreis gegen oder im Uhrzeigersinn gezeichnet werden soll (`false` ist im Uhrzeigersinn).

   > [!NOTE]
   > 0 Grad ist horizontal nach rechts.

2. Probieren wir, einen weiteren Bogen hinzuzufügen:

   ```js
   ctx.fillStyle = "yellow";
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   Das Muster hier ist sehr ähnlich, aber mit zwei Unterschieden:
   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird, was bedeutet, dass, obwohl der Bogen als Beginn bei -45 Grad und Ende bei 45 Grad spezifiziert ist, wir den Bogen um die 270 Grad, die nicht in diesem Abschnitt sind, zeichnen. Wenn Sie `true` in `false` ändern würden und dann den Code erneut ausführen, würde nur das 90-Grad-Stück des Kreises gezeichnet werden.
   - Bevor wir `fill()` aufrufen, zeichnen wir eine Linie zum Zentrum des Kreises. Dies bedeutet, dass wir den recht ansehnlichen Pac-Man-Stil-Ausschnitt darstellen. Wenn Sie diese Linie entfernen (probieren Sie es aus!) und dann den Code erneut ausführen, erhalten Sie nur einen Rand des Kreises, der zwischen dem Start- und Endpunkt des Bogens abgeschnitten ist. Dies zeigt einen weiteren wichtigen Punkt von Canvas – wenn Sie versuchen, einen unvollständigen Pfad (d.h. einen, der nicht geschlossen ist) zu füllen, füllt der Browser eine gerade Linie zwischen dem Start- und Endpunkt aus und füllt ihn dann aus.

Das war es fürs Erste; Ihr endgültiges Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/3_canvas_paths/index.html", '100%', 200)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [3_canvas_paths](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/3_canvas_paths).

> [!NOTE]
> Um mehr über erweiterte Pfadzeichnungsfunktionen wie Bézierkurven zu erfahren, schauen Sie sich unser Tutorial [Drawing shapes with canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) an.

### Text

Auch Canvas hat Funktionen zum Zeichnen von Text. Lassen Sie uns dies kurz erkunden. Beginnen Sie damit, eine neue Kopie unseres Canvas-Templates ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) zu erstellen, um das neue Beispiel darin zu zeichnen.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnen von gefülltem Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnen von Umriss (Stroke) Text.

Beide nehmen drei Eigenschaften in ihrer Grundnutzung: den Textstring, der gezeichnet werden soll, und die X- und Y-Koordinaten des Punktes, an dem der Text begonnen werden soll zu zeichnen. Dies funktioniert als **untere linke** Ecke der **TextBox** (buchstäblich die Box, die den gezeichneten Text umgibt), was Sie verwirren könnte, da andere Zeichenoperationen in der Regel von der oberen linken Ecke aus beginnen – behalten Sie dies im Hinterkopf.

Es gibt auch eine Reihe von Eigenschaften, die helfen, die Textrenderung zu steuern, wie [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), die es Ihnen ermöglicht, Schriftart, Größe usw. anzugeben. Sie nimmt als Wert die gleiche Syntax wie die CSS {{cssxref("font")}}-Eigenschaft.

Canvas-Inhalte sind für Screenreader nicht zugänglich. In die Canvas gemalter Text ist nicht im DOM verfügbar, muss jedoch zugänglich gemacht werden. In diesem Beispiel nehmen wir den Text als Wert für `aria-label` auf.

Versuchen Sie, den folgenden Block am unteren Ende Ihres JavaScripts hinzuzufügen:

```js
ctx.strokeStyle = "white";
ctx.lineWidth = 1;
ctx.font = "36px arial";
ctx.strokeText("Canvas text", 50, 50);

ctx.fillStyle = "red";
ctx.font = "48px georgia";
ctx.fillText("Canvas text", 50, 150);

canvas.setAttribute("aria-label", "Canvas text");
```

Hier zeichnen wir zwei Textzeilen, eine Outline und die andere Stroke. Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/4_canvas_text/index.html", '100%', 180)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [4_canvas_text](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/4_canvas_text).

Probieren Sie es aus und sehen Sie, was Sie sich einfallen lassen! Weitere Informationen zu den Optionen, die für den Canvas-Text zur Verfügung stehen, finden Sie unter [Drawing text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Bilder auf Canvas zeichnen

Es ist möglich, externe Bilder auf Ihr Canvas zu rendern. Diese können einfache Bilder, Frames aus Videos oder der Inhalt anderer Canvas sein. Für den Moment werden wir uns nur den Fall ansehen, in dem einige einfache Bilder auf unserem Canvas verwendet werden.

1. Machen Sie wie zuvor eine frische Kopie unseres Canvas-Templates ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)), um das neue Beispiel darin zu zeichnen.

   Bilder werden mit der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf Canvas gezeichnet. Die einfachste Version nimmt drei Parameter – eine Referenz zu dem Bild, das Sie rendern möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Lassen Sie uns zunächst eine Bildquelle erhalten, die wir in unserem Canvas einbetten können. Fügen Sie die folgenden Zeilen am unteren Ende Ihres JavaScripts hinzu:

   ```js
   const image = new Image();
   image.src = "firefox.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt unter Verwendung des Konstruktors [`Image()`](/de/docs/Web/API/HTMLImageElement/Image). Das zurückgegebene Objekt ist derselbe Typ wie der, der zurückgegeben wird, wenn Sie eine Referenz zu einem bestehenden {{htmlelement("img")}}-Element erhalten. Dann setzen wir das [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut auf unser Firefox-Logo-Bild. An diesem Punkt beginnt der Browser, das Bild zu laden.

3. Wir könnten jetzt versuchen, das Bild mit `drawImage()` einzufügen, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, andernfalls schlägt der Code fehl. Dies können wir erreichen, indem wir das `load`-Ereignis verwenden, das nur ausgelöst wird, wenn das Bild fertig geladen wurde. Fügen Sie den folgenden Block unter den vorherigen:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie das Bild im Canvas eingebettet sehen.

4. Aber es gibt noch mehr! Was ist, wenn wir nur einen Teil des Bildes anzeigen oder es in der Größe ändern möchten? Beides können wir mit der komplexeren Version von `drawImage()` tun. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile wie folgt:

   ```js
   ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
   ```

   - Der erste Parameter ist die Bildreferenz, wie vorher.
   - Die Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links vom ersten Parameter oder oberhalb des zweiten wird gezeichnet.
   - Die Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem ursprünglichen Bild ausschneiden möchten, das wir geladen haben.
   - Die Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Teils des Bildes, relativ zur oberen linken Ecke des Canvas, zeichnen möchten.
   - Die Parameter 8 und 9 definieren die Breite und Höhe, um den ausgeschnittenen Bereich des Bildes zu zeichnen. In diesem Fall haben wir die gleichen Abmessungen wie der ursprüngliche Ausschnitt angegeben, aber Sie könnten ihn in der Größe ändern, indem Sie andere Werte angeben.

5. Wenn das Bild in sinnvoller Weise aktualisiert wird, muss auch die {{Glossary("accessible_description", "zugängliche Beschreibung")}} aktualisiert werden.

   ```js
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/5_canvas_images/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [5_canvas_images](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/5_canvas_images).

## Schleifen und Animationen

Bisher haben wir einige sehr grundlegende Anwendungen von 2D-Canvas behandelt, aber wirklich werden Sie die volle Kraft von Canvas nicht erleben, es sei denn, Sie aktualisieren oder animieren es auf irgendeine Weise. Schließlich bietet Canvas skriptbare Bilder! Wenn Sie nichts ändern wollen, könnten Sie genauso gut statische Bilder verwenden und sich die ganze Arbeit sparen.

### Eine Schleife erstellen

Das Spielen mit Schleifen in Canvas macht ziemlich Spaß – Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) (oder einer anderen Art) Schleife genauso wie jeden anderen JavaScript-Code ausführen.

Lassen Sie uns ein Beispiel erstellen.

1. Machen Sie eine weitere frische Kopie unseres Canvas-Templates ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie es in Ihrem Code-Editor.
2. Fügen Sie die folgende Zeile am unteren Ende Ihres JavaScripts hinzu. Diese enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

   Dadurch wird der Koordinatenursprung (0, 0) zur Mitte des Canvas verschoben, anstatt an der oberen linken Ecke zu sein. Dies ist in vielen Situationen sehr nützlich, wie in dieser, in der wir unser Design relativ zur Mitte des Canvas zeichnen möchten.

3. Fügen Sie nun den folgenden Code am Ende des JavaScripts hinzu:

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }

   function rand(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   let length = 250;
   let moveOffset = 20;

   for (let i = 0; i < length; i++) {}
   ```

   Hier implementieren wir die gleiche `degToRad()`-Funktion, die wir im obigen Dreieckbeispiel gesehen haben, eine `rand()`-Funktion, die eine zufällige Zahl zwischen angegebenen unteren und oberen Grenzen zurückgibt, `length` und `moveOffset` Variablen (über die wir später mehr erfahren werden) und eine leere `for`-Schleife.

4. Die Idee hier ist, dass wir etwas in der `for`-Schleife auf dem Canvas zeichnen und es bei jeder Wiederholung iterieren, sodass wir etwas Interessantes erzeugen können. Fügen Sie den folgenden Code innerhalb Ihrer `for`-Schleife hinzu:

   ```js
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
   ```

   Auf jeder Iteration machen wir also:
   - Wir setzen `fillStyle` auf einen Hauch von leicht transparentem Violett, das sich jedes Mal basierend auf dem Wert von `length` ändert. Wie Sie später sehen werden, wird die Länge jedes Mal kleiner, wenn die Schleife läuft, also ist der Effekt hier, dass die Farbe mit jedem nachfolgenden Dreieck, das gezeichnet wird, heller wird.
   - Beginnen den Pfad.
   - Bewegen den Stift zu einer Koordinate von `(moveOffset, moveOffset)`; Diese Variable definiert, wie weit wir jedes Mal bewegen möchten, wenn wir ein neues Dreieck zeichnen.
   - Zeichnen wir eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Diese zeichnet eine Linie der Länge `length` parallel zur X-Achse.
   - Berechnen wir die Höhe des Dreiecks, wie zuvor.
   - Zeichnen eine Linie zur nach unten zeigenden Ecke des Dreiecks und dann eine Linie zurück zum Anfang des Dreiecks.
   - Rufen `fill()` auf, um das Dreieck auszufüllen.
   - Aktualisieren die Variablen, die die Sequenz der Dreiecke beschreiben, damit wir bereit sind, das nächste zu zeichnen. Wir verringern den `length`-Wert um 1, damit die Dreiecke jedes Mal kleiner werden; erhöhen `moveOffset` um einen kleinen Betrag, damit jedes aufeinanderfolgende Dreieck etwas weiter entfernt ist, und verwenden eine weitere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), die es uns ermöglicht, das gesamte Canvas zu drehen! Wir drehen es um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das war's! Das endgültige Beispiel sollte wie folgt aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop/index.html", '100%', 550)}}

An diesem Punkt möchten wir Sie ermutigen, mit dem Beispiel zu spielen und es zu Ihrem eigenen zu machen! Zum Beispiel:

- Zeichnen Sie Rechtecke oder Bögen anstelle von Dreiecken oder sogar eingebettete Bilder.
- Spielen Sie mit den `length`- und `moveOffset`-Werten.
- Führen Sie einige Zufallszahlen mit dieser `rand()`-Funktion ein, die wir oben eingefügt, aber nicht verwendet haben.

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [6_canvas_for_loop](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop).

### Animationen

Das Schleifenbeispiel, das wir oben gebaut haben, war lustig, aber wirklich brauchen Sie eine konstante Schleife, die immer wieder läuft, für alle ernsthaften Canvas-Anwendungen (wie Spiele und Echtzeitvisualisierungen). Wenn Sie sich Ihr Canvas als einen Film vorstellen, möchten Sie wirklich, dass das Display für jeden Frame aktualisiert wird, um die aktualisierte Ansicht anzuzeigen, mit einer idealen Bildwiederholrate von 60 Frames pro Sekunde, damit Bewegung für das menschliche Auge schön und sanft erscheint.

Es gibt einige JavaScript-Funktionen, die es Ihnen ermöglichen, wiederholt Funktionen auszuführen, mehrmals pro Sekunde, die beste davon für unsere Zwecke hier ist [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Sie nimmt einen Parameter – den Namen der Funktion, die Sie für jeden Frame ausführen möchten. Das nächste Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion das neue Update für Ihre Animation zeichnet und dann `requestAnimationFrame()` erneut kurz vor dem Ende der Funktion aufruft, wird die Animationsschleife weiterlaufen. Die Schleife endet, wenn Sie aufhören, `requestAnimationFrame()` aufzurufen, oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) nach dem Aufruf von `requestAnimationFrame()` aber vor dem Aufruf des Frames aufrufen.

> [!NOTE]
> Es ist eine gute Praxis, `cancelAnimationFrame()` aus Ihrem Hauptcode aufzurufen, wenn Sie mit der Verwendung der Animation fertig sind, um sicherzustellen, dass keine Updates mehr ausstehen, die ausgeführt werden müssen.

Der Browser arbeitet komplexe Details aus, wie beispielsweise die Animation mit konstanter Geschwindigkeit laufen zu lassen, und keine Ressourcen für Animationen zu verschwenden, die nicht gesehen werden können.

Um zu sehen, wie es funktioniert, schauen wir uns schnell unser Bouncing-Balls-Beispiel erneut an ([sehen Sie es live](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html), und sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/oojs/bouncing-balls)). Der Code für die Schleife, die alles in Bewegung hält, sieht so aus:

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

Wir führen die `loop()`-Funktion einmal am Ende des Codes aus, um den Zyklus zu starten und den ersten Animationsframe zu zeichnen; die `loop()`-Funktion übernimmt dann die Aufgabe, `requestAnimationFrame(loop)` aufzurufen, um den nächsten Animationsframe wieder und wieder auszuführen.

Beachten Sie, dass wir bei jedem Frame das Canvas vollständig löschen und alles neu zeichnen. Für jeden vorhandenen Ball zeichnen wir ihn, aktualisieren seine Position und prüfen, ob er mit anderen Bällen kollidiert. Sobald Sie eine Grafik auf ein Canvas gezeichnet haben, gibt es keine Möglichkeit, diese Grafik individuell zu manipulieren, wie Sie es mit DOM-Elementen könnten. Sie können jeden Ball nicht auf dem Canvas verschieben, weil er, sobald er gezeichnet ist, Teil des Canvas ist und kein individuell zugängliches Element oder Objekt mehr ist. Stattdessen müssen Sie löschen und neu zeichnen, entweder indem Sie das gesamte Bild löschen und alles neu zeichnen oder indem Sie Code haben, der genau weiß, welche Teile gelöscht werden müssen und nur das Minimum an Canvas, das notwendig ist, löscht und neu zeichnet.

Die Optimierung der Animation von Grafiken ist eine gesamte Spezialität der Programmierung, mit vielen cleveren Techniken, die verfügbar sind. Diese sind jedoch über das hinaus, was wir für unser Beispiel benötigen!

Im Allgemeinen umfasst der Prozess, eine Canvas-Animation zu erstellen, folgende Schritte:

1. Löschen Sie die Canvas-Inhalte (zum Beispiel mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Speichern Sie den Zustand (falls nötig) mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) – das ist erforderlich, wenn Sie Einstellungen speichern möchten, die auf dem Canvas aktualisiert wurden, bevor Sie fortfahren, was für fortgeschrittenere Anwendungen nützlich ist.
3. Zeichnen Sie die Grafiken, die Sie animieren möchten.
4. Stellen Sie die in Schritt 2 gespeicherten Einstellungen mit [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore) wieder her.
5. Rufen Sie `requestAnimationFrame()` auf, um das Zeichnen des nächsten Animationsframes zu planen.

> [!NOTE]
> Wir werden `save()` und `restore()` hier nicht abdecken, aber sie werden schön in unserem [Transformations](/de/docs/Web/API/Canvas_API/Tutorial/Transformations)-Tutorial (und den folgenden) erklärt.

### Eine einfache Charakteranimation

Nun erstellen wir unsere eigene einfache Animation – wir bekommen einen Charakter aus einem bestimmten recht großartigen Retro-Computerspiel, der über den Bildschirm läuft.

1. Machen Sie eine weitere frische Kopie unseres Canvas-Templates ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie es in Ihrem Code-Editor.

2. Aktualisieren Sie das innere HTML, um das Bild widerzuspiegeln:

   ```html
   <canvas class="myCanvas">
     <p>A man walking.</p>
   </canvas>
   ```

3. Fügen Sie am Ende des JavaScripts die folgende Zeile hinzu, um erneut den Koordinatenursprung in die Mitte des Canvas zu setzen:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

4. Lassen Sie uns nun ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt erstellen, sein [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf das Bild setzen, das wir laden möchten, und einen `onload`-Ereignishandler hinzufügen, der die `draw()`-Funktion auslöst, wenn das Bild geladen wird:

   ```js
   const image = new Image();
   image.src = "walk-right.png";
   image.onload = draw;
   ```

5. Nun fügen wir einige Variablen hinzu, um den Punkt zu verfolgen, an dem der Sprite auf dem Bildschirm gezeichnet werden soll, und die Nummer des Sprites, das wir anzeigen möchten.

   ```js
   let sprite = 0;
   let posX = 0;
   ```

   Lassen Sie uns das Spritebild erklären (das wir respektvoll von Mike Thomas' [Walking cycle using CSS animation](https://codepen.io/mikethomas/pen/kQjKLW) CodePen ausgeliehen haben). Das Bild sieht so aus:

   ![Ein Sprite-Blatt mit sechs Sprite-Bildern eines pixelierten Charakters, der wie eine von rechts gehende Person aussieht, zu verschiedenen Instanzen eines einzelnen Schrittes nach vorne. Der Charakter trägt ein weißes Hemd mit himmelblauen Knöpfen, schwarze Hosen und schwarze Schuhe. Jedes Sprite ist 102 Pixel breit und 148 Pixel hoch.](walk-right.png)

   Es enthält sechs Sprites, die die gesamte Gehrunde ausmachen – jedes ist 102 Pixel breit und 148 Pixel hoch. Um jeden Sprite sauber darzustellen, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild aus dem Spritesheet auszuschneiden und nur diesen Teil anzuzeigen, wie wir es oben mit dem Firefox-Logo gemacht haben. Die X-Koordinate des Ausschnitts muss ein Vielfaches von 102 sein, und die Y-Koordinate muss immer 0 sein. Die Schnittgröße muss immer 102 × 148 Pixel sein.

6. Fügen Sie nun eine leere `draw()`-Funktion am Ende des Codes hinzu, die bereit ist, mit etwas Code gefüllt zu werden:

   ```js
   function draw() {}
   ```

7. Der Rest des Codes in diesem Abschnitt geht in `draw()`. Fügen Sie zuerst die folgende Zeile hinzu, die das Canvas löscht, um jeden Frame vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width/2), -(height/2)` angeben müssen, weil wir zuvor die Ursprungsposition als `width/2, height/2` angegeben haben.

   ```js
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

8. Als Nächstes werden wir unser Bild mithilfe von drawImage zeichnen – die 9-Parameter-Version. Fügen Sie das folgende hinzu:

   ```js
   ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);
   ```

   Wie Sie sehen:
   - Wir geben `image` als das einzubettende Bild an.
   - Die Parameter 2 und 3 geben die obere linke Ecke des Ausschnittes an, der aus dem Quellbild herausgeschnitten werden soll, wobei der X-Wert als `sprite` multipliziert mit 102 (wo `sprite` die Spritenummer zwischen 0 und 5 ist) und der Y-Wert immer 0 ist.
   - Die Parameter 4 und 5 geben die Größe des Ausschnitts an, der herausgeschnitten werden soll – 102 Pixel mal 148 Pixel.
   - Die Parameter 6 und 7 geben die obere linke Ecke des Rechtecks an, in das der Ausschnitt auf dem Canvas gezeichnet werden soll – die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichenposition durch Ändern des `posX`-Wertes ändern können.
   - Die Parameter 8 und 9 geben die Größe des Bildes auf dem Canvas an. Wir möchten seine ursprüngliche Größe beibehalten, daher geben wir 102 und 148 als Breite und Höhe an.

9. Jetzt werden wir den `sprite`-Wert nach jeder Zeichnung ändern – na ja, nach einigen davon jedenfalls. Fügen Sie den folgenden Block am Ende der `draw()`-Funktion hinzu:

   ```js
   if (posX % 13 === 0) {
     if (sprite === 5) {
       sprite = 0;
     } else {
       sprite++;
     }
   }
   ```

   Wir umschließen den gesamten Block mit `if (posX % 13 === 0) { }`. Wir verwenden den Modulo (`%`) Operator (auch bekannt als der [Rest-Operator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu überprüfen, ob der `posX`-Wert genau durch 13 teilbar ist, ohne Rest. Wenn ja, gehen wir zum nächsten Sprite über, indem wir `sprite` erhöhen (nach dem letzten Sprite auf 0 zurückkehren). Dies bedeutet effektiv, dass wir den Sprite nur jedes dreizehnte Bild aktualisieren, oder ungefähr 5 Bilder pro Sekunde (`requestAnimationFrame()` ruft uns nach Möglichkeit bis zu 60 Mal pro Sekunde auf). Wir reduzieren die Bildwiederholrate bewusst, weil wir nur sechs Sprites zur Verfügung haben und wenn wir eines jede 60stel Sekunde anzeigen, unser Charakter viel zu schnell bewegt!

   Im äußeren Block verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob der `sprite`-Wert bei 5 ist (dem letzten Sprite, da die Spritenummern von 0 bis 5 laufen). Wenn wir bereits das letzte Sprite sehen, setzen wir `sprite` wieder auf 0; andernfalls erhöhen wir es einfach um 1.

10. Als nächstes müssen wir herausfinden, wie wir den `posX`-Wert bei jedem Frame ändern können – fügen Sie den folgenden Codeblock direkt unter Ihrem letzten hinzu.

    ```js
    if (posX > width / 2) {
      let newStartPos = -(width / 2 + 102);
      posX = Math.ceil(newStartPos);
      console.log(posX);
    } else {
      posX += 2;
    }
    ```

    Wir verwenden eine weitere `if...else`-Anweisung, um zu prüfen, ob der Wert von `posX` größer als `width/2` geworden ist, was bedeutet, dass unser Charakter außerhalb des rechten Bildschirmrandes gewandert ist. Wenn ja, berechnen wir eine Position, die den Charakter kurz links vom linken Bildschirmrand positionieren würde.

    Wenn unser Charakter den Rand des Bildschirms noch nicht verlassen hat, erhöhen wir `posX` um 2. Dadurch wird er beim nächsten Mal, wenn wir ihn zeichnen, ein wenig weiter nach rechts verschoben.

11. Schließlich müssen wir die Animationsschleife mit einem Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()`-Funktion erstellen:

    ```js
    window.requestAnimationFrame(draw);
    ```

Das war's! Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [7_canvas_walking_animation](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation).

### Eine einfache Zeichenanwendung

Als abschließendes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben (wie Mausbewegungen, in diesem Fall) kombiniert werden kann. Wir werden Sie nicht dazu bringen, diese durchzugehen und zu erstellen, sondern erkunden nur die interessantesten Teile des Codes.

Das Beispiel finden Sie auf GitHub als [8_canvas_drawing_app](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app), und Sie können es live unten ausprobieren:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app/index.html", '100%', 600)}}

Schauen wir uns die interessantesten Teile an. Zuerst verfolgen wir die X- und Y-Koordinaten der Maus und ob sie angeklickt wird oder nicht mit drei Variablen: `curX`, `curY` und `pressed`. Wenn sich die Maus bewegt, lösen wir eine Funktion aus, die als `onmousemove`-Ereignishandler gesetzt ist, die die aktuellen X- und Y-Werte erfasst. Wir verwenden auch `onmousedown` und `onmouseup`-Ereignishandler, um den Wert von `pressed` auf `true` zu setzen, wenn die Maustaste gedrückt wird, und wieder auf `false`, wenn sie losgelassen wird.

```js
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

Wenn die Schaltfläche "Leinwand löschen" gedrückt wird, führen wir eine einfache Funktion aus, die die gesamte Canvas wieder mit Schwarz füllt, auf die gleiche Weise, wie wir es früher gesehen haben:

```js
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal ziemlich einfach – wenn `pressed` `true` ist, zeichnen wir einen Kreis mit einem Füllstil, der dem Wert im Farbwähler entspricht, und einem Radius, der dem im Bereichseingabewert eingestellten entspricht. Wir müssen den Kreis 85 Pixel oberhalb des Punktes zeichnen, von dem wir ihn gemessen haben, weil die vertikale Messung vom oberen Rand des Ansichtsfensters erfolgt, wir den Kreis jedoch relativ zur Oberseite des Canvas zeichnen, der unterhalb der 85 Pixel hohen Symbolleiste beginnt. Wenn wir ihn mit nur `curY` als y-Koordinate zeichnen würden, würde er 85 Pixel tiefer als die Mausposition erscheinen.

```js
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

Alle {{htmlelement("input")}}-Typen sind gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, wird er auf ein einfaches Texteingabefeld zurückfallen.

## WebGL

Es ist jetzt an der Zeit, 2D hinter sich zu lassen und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalt wird über die [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert, die eine völlig andere API als die 2D-Canvas-API ist, obwohl beide auf {{htmlelement("canvas")}}-Elementen rendern.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht es Ihnen, direkt mit der {{Glossary("GPU", "GPU")}} des Computers zu kommunizieren. Insofern ist das Schreiben von Roh-WebGL dem Schreiben in niedrigen Programmiersprachen wie C++ ähnlicher als regulärem JavaScript; es ist ziemlich komplex, aber unglaublich leistungsstark.

### Verwendung einer Bibliothek

Aufgrund seiner Komplexität schreiben die meisten Leute 3D-Grafikcode unter Verwendung einer Drittanbieter-JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten davon funktionieren ähnlich, indem sie Funktionen zum Erstellen primitiver und benutzerdefinierter Formen, zum Positionieren von Betrachtungskameras und Beleuchtung, zum Abdecken von Oberflächen mit Texturen und mehr bieten. Sie führen das WebGL für Sie aus und lassen Sie auf einer höheren Ebene arbeiten.

Ja, die Verwendung einer dieser Bibliotheken bedeutet, dass Sie eine weitere neue API lernen (in diesem Fall eine von Drittanbietern), aber sie sind viel einfacher als das Codieren von Roh-WebGL.

### Unseren Würfel neu erstellen

Schauen wir uns ein Beispiel an, wie man etwas mit einer WebGL-Bibliothek erstellt. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der beliebtesten ist. In diesem Tutorial erstellen wir den 3D-Würfel, den wir zuvor gesehen haben und der sich dreht.

1. Zuerst erstellen Sie eine lokale Kopie von [threejs-cube/index.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/index.html) in einem neuen Ordner und speichern Sie dann eine Kopie von [metal003.png](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/metal003.png) im selben Ordner. Dies ist das Bild, das wir später als Oberflächentextur für den Würfel verwenden werden.
2. Erstellen Sie als Nächstes eine neue Datei namens `script.js`, erneut im selben Ordner wie zuvor.
3. Als nächstes müssen Sie die Three.js-Bibliothek installiert haben. Sie können den Schritte zur Umgebungseinrichtung im [Building up a basic demo with Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) folgen, damit Three.js erwartungsgemäß funktioniert.
4. Jetzt haben wir `three.js` auf unserer Seite hinzugefügt, können wir beginnen, JavaScript zu schreiben, das es in `script.js` verwendet. Beginnend mit der Erstellung einer neuen Szene – fügen Sie das folgende in Ihre `script.js` Datei ein:

   ```js
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene) Konstruktor erstellt eine neue Szene, die die gesamte 3D-Welt repräsentiert, die wir darstellen wollen.

5. Als nächstes brauchen wir eine **Kamera**, damit wir die Szene sehen können. In 3D-Bildwelten repräsentiert die Kamera die Position des Betrachters in der Welt. Um eine Kamera zu erstellen, fügen Sie die folgenden Zeilen hinzu:

   ```js
   const camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000,
   );
   camera.position.z = 5;
   ```

   Der [`PerspectiveCamera()`](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera) Konstruktor nimmt vier Argumente:
   - Der Sichtradius: Wie groß der Bereich vor der Kamera ist, der auf dem Bildschirm sichtbar sein sollte, in Graden.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Normalerweise ist dies das Verhältnis der Szenenbreite geteilt durch die Szenenhöhe. Die Verwendung eines anderen Wertes wird die Szene verzerren (was das sein könnte, was Sie wollen, aber normalerweise nicht).
   - Die Nahe Ebene: Wie nah Objekte an der Kamera sein können, bevor wir aufhören, sie auf den Bildschirm zu rendern. Denken Sie darüber nach, wie bei das Bewegen Ihrer Fingerspitze immer näher zu dem Raum zwischen Ihren Augen, Sie sie irgendwann nicht mehr sehen können.
   - Die Ferne Ebene: Wie weit weg Dinge von der Kamera sind, bevor sie nicht mehr gerendert werden.

   Wir setzen auch die Position der Kamera auf 5 Entfernungseinheiten nach draußen auf der Z-Achse, die, wie in CSS, aus dem Bildschirm heraus zu Ihnen, dem Betrachter, ist.

6. Die dritte essenzielle Zutat ist ein Renderer. Dabei handelt es sich um ein Objekt, das eine gegebene Szene, angesehen durch eine gegebene Kamera, rendert. Wir erstellen einen für jetzt mit dem [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)-Konstruktor, werden ihn aber erst später verwenden. Fügen Sie die folgenden Zeilen hinzu:

   ```js
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile setzt die Größe, in der der Renderer die Kamerasicht zeichnen wird, und die dritte Zeile fügt das durch den Renderer erstellte {{htmlelement("canvas")}}-Element dem {{htmlelement("body")}} des Dokuments hinzu. Jetzt wird alles, was der Renderer rendert, in unserem Fenster angezeigt.

7. Als nächstes wollen wir den Würfel erstellen, den wir auf dem Canvas anzeigen werden. Fügen Sie den folgenden Codeblock am Ende Ihres JavaScripts hinzu:

   ```js
   let cube;

   const loader = new THREE.TextureLoader();

   loader.load("metal003.png", (texture) => {
     texture.wrapS = THREE.RepeatWrapping;
     texture.wrapT = THREE.RepeatWrapping;
     texture.repeat.set(2, 2);

     const geometry = new THREE.BoxGeometry(2.4, 2.4, 2.4);
     const material = new THREE.MeshLambertMaterial({ map: texture });
     cube = new THREE.Mesh(geometry, material);
     scene.add(cube);

     draw();
   });
   ```

   Es gibt hier noch ein bisschen mehr zu verstehen, also lassen Sie es uns in Stufen durchgehen:
   - Wir erstellen zuerst eine globale `cube`-Variable, sodass wir aus dem gesamten Code auf unseren Würfel zugreifen können.
   - Als Nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt und rufen `load()` darauf auf. `load()` nimmt in diesem Fall zwei Parameter (obwohl es mehr nehmen kann): die Textur, die wir laden möchten (unser PNG), und eine Funktion, die ausgeführt wird, wenn die Textur geladen ist.
   - Innerhalb dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um anzugeben, dass wir einen 2 × 2 Wiederholung des Bildes möchten, das um alle Seiten des Würfels gewickelt ist. Dann erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt und fügen sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) zusammen, um unseren Würfel zu erstellen. Ein Objekt benötigt typischerweise eine Geometrie (welche Form es hat) und ein Material (wie seine Oberfläche aussieht).
   - Zuletzt fügen wir unseren Würfel der Szene hinzu und rufen dann unsere `draw()`-Funktion auf, um die Animation zu starten.

8. Bevor wir zu `draw()` kommen, fügen wir noch ein paar Lichter zur Szene hinzu, um sie etwas aufzuhellen. Fügen Sie die folgenden Blöcke hinzu:

   ```js
   const light = new THREE.AmbientLight("rgb(255 255 255)"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("rgb(255 255 255)");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art weiches Licht, das die ganze Szene ein wenig aufhellt, wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt hingegen ist ein direktionaler Lichtstrahl, mehr wie eine Taschenlampe/Licht (oder ein Spotlight, in der Tat).

9. Zuletzt fügen wir unsere `draw()`-Funktion am Ende des Codes hinzu:

   ```js
   function draw() {
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
     renderer.render(scene, camera);

     requestAnimationFrame(draw);
   }
   ```

   Das ist ziemlich intuitiv; bei jedem Frame drehen wir unseren Würfel leicht auf seinen X- und Y-Achsen, rendern dann die Szene, wie sie von unserer Kamera gesehen wird, und rufen schließlich `requestAnimationFrame()` auf, um das Zeichnen unseres nächsten Frames zu terminieren.

Lassen Sie uns einen weiteren kurzen Blick darauf werfen, wie das Endergebnis aussehen sollte:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Sie können den [fertigen Code auf GitHub finden](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-cube).

> [!NOTE]
> In unserem GitHub-Repo können Sie auch ein weiteres interessantes 3D-Würfel-Beispiel finden — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dies verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Computer-Webcam zu nehmen und ihn als Textur auf die Seite des Würfels zu projizieren!

## Zusammenfassung

An diesem Punkt sollten Sie eine nützliche Vorstellung von den Grundlagen der Grafikprogrammierung über Canvas und WebGL haben und davon, was Sie mit diesen APIs machen können, sowie eine gute Idee haben, wo Sie weitere Informationen finden können. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklichen Grundlagen von Canvas abgedeckt — es gibt so viel mehr zu lernen! Die unten aufgeführten Artikel werden Sie weiterführen.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorialserie, die erklärt, was Sie über 2D-Canvas wissen sollten, viel detaillierter als hier behandelt. Essentielle Lektüre.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Serie, die die Grundlagen der Roh-WebGL-Programmierung lehrt.
- [Building up a basic demo with Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — Grundlegendes Three.js-Tutorial. Wir haben auch entsprechende Leitfäden für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spieleentwicklung](/de/docs/Games) — die Landingpage für die Entwicklung von Webspielen auf MDN. Hier gibt es einige wirklich nützliche Tutorials und Techniken im Zusammenhang mit 2D- und 3D-Canvas — siehe die Menüoptionen Techniken und Tutorials.

## Beispiele

- [Violent theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API zur Töneerzeugung und Canvas zur Erzeugung einer hübschen Visualisierung dazu.
- [Voice change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas, um Echtzeit-Audiodaten aus der Web Audio API zu visualisieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
