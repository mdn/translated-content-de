---
title: Zeichnen von Grafiken
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: f33de00c56ac53878eb2cb7cb5849df1f9ab8db7
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsstarke Grafikprogrammierungstools, von der Scalable Vector Graphics ([SVG](/de/docs/Web/SVG))-Sprache bis hin zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in das Canvas und weitere Ressourcen, um mehr darüber zu erfahren.

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
          <li>Verwendung von Timern und <code>requestAnimationFrame()</code> zur Einrichtung von Animationsschleifen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Das Web bestand ursprünglich nur aus Text, was sehr langweilig war, daher wurden Bilder eingeführt — zunächst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Dies war jedoch immer noch nicht genug. Während Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden konnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) — da sie durch Markup dargestellt werden — gab es immer noch keinen Weg, dasselbe für Bitmap-Bilder zu tun, und die verfügbaren Werkzeuge waren ziemlich begrenzt. Das Web hatte immer noch keinen Weg, effektiv Animationen, Spiele, 3D-Szenarien und andere Anforderungen zu erstellen, die normalerweise von niedrigeren Programmiersprachen wie C++ oder Java behandelt werden.

Die Situation begann sich zu verbessern, als Browser 2004 damit begannen, das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) zu unterstützen. Wie Sie unten sehen werden, bietet Canvas einige nützliche Werkzeuge zum Erstellen von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere in Kombination mit einigen der anderen von der Webplattform bereitgestellten APIs, kann jedoch schwierig oder unmöglich zugänglich gemacht werden.

Das folgende Beispiel zeigt eine einfache, 2D-Canvas-basierte Animation mit hüpfenden Bällen, die wir ursprünglich in unserem Modul [Einführung in JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) kennengelernt haben:

{{EmbedGHLiveSample("learning-area/javascript/oojs/bouncing-balls/index-finished.html", '100%', 500)}}

Um 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Dies wurde zu [WebGL](/de/docs/Web/API/WebGL_API), das unter Browseranbietern an Bedeutung gewann und um 2009–2010 standardisiert wurde. WebGL ermöglicht es Ihnen, echte 3D-Grafiken in Ihrem Webbrowser zu erstellen; das folgende Beispiel zeigt einen einfachen rotierenden WebGL-Würfel:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Dieser Artikel wird sich hauptsächlich mit 2D-Canvas befassen, da roher WebGL-Code sehr komplex ist. Wir werden jedoch zeigen, wie man eine WebGL-Bibliothek verwendet, um eine 3D-Szene einfacher zu erstellen, und Sie finden anderswo ein Tutorial, das rohes WebGL abdeckt — siehe [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Erste Schritte mit einem `<canvas>`

Wenn Sie eine 2D- _oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-{{htmlelement("canvas")}}-Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Das ist so einfach wie das Einfügen des Elements auf der Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dies wird ein Canvas auf der Seite mit einer Größe von 320 mal 240 Pixeln erstellen.

Sie sollten einigen Fallback-Inhalt innerhalb der `<canvas>`-Tags einfügen. Dies sollte den Canvas-Inhalt für Benutzer von Browsern beschreiben, die Canvas nicht unterstützen, oder für Benutzer von Screenreadern.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Der Fallback sollte nützlichen alternativen Inhalt zum Canvas-Inhalt bieten. Wenn Sie beispielsweise eine ständig aktualisierte Grafik von Aktienkursen rendern, könnte der Fallback-Inhalt ein statisches Bild der neuesten Aktiengrafik sein, mit `alt`-Text, der die Preise in Text beschreibt oder eine Liste von Links zu einzelnen Aktienseiten angibt.

> [!NOTE]
> Canvas-Inhalt ist für Screenreader nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs direkt auf dem Canvas-Element selbst hinzu oder fügen Sie Fallback-Inhalte innerhalb der öffnenden und schließenden `<canvas>`-Tags ein. Canvas-Inhalt ist nicht Teil des DOMs, aber eingebetteter Fallback-Inhalt schon.

### Erstellen und dimensionieren unseres Canvas

Lassen Sie uns damit beginnen, unser eigenes Canvas zu erstellen, auf dem wir zukünftige Experimente zeichnen werden.

1. Erstellen Sie zuerst eine lokale Kopie des Verzeichnisses [0_canvas_start](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/0_canvas_start). Es enthält drei Dateien:
   - "index.html"
   - "script.js"
   - "style.css"
2. Öffnen Sie "index.html" und fügen Sie den folgenden Code direkt unter dem öffnenden {{htmlelement("body")}}-Tag hinzu:

   ```html
   <canvas class="myCanvas">
     <p>Add suitable fallback here.</p>
   </canvas>
   ```

   Wir haben eine `class` zum `<canvas>`-Element hinzugefügt, sodass es einfacher wird, es auszuwählen, wenn wir mehrere Canvas auf der Seite haben, aber wir haben vorübergehend die `width`- und `height`-Attribute entfernt (Sie könnten sie wieder hinzufügen, wenn Sie möchten, aber wir werden sie im nächsten Abschnitt mit JavaScript festlegen). Canvas ohne explizite Breite und Höhe haben standardmäßig eine Breite von 300 Pixel und eine Höhe von 150 Pixel.

3. Öffnen Sie nun "script.js" und fügen Sie die folgenden JavaScript-Zeilen hinzu:

   ```js
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz zum Canvas in der Konstanten `canvas` gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die Eigenschaft `width` des Canvas gleich mit [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Ansichtsfensterbreite gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die Eigenschaft `height` des Canvas gleich mit [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Ansichtsfensterhöhe gibt). Jetzt haben wir ein Canvas, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden auch sehen, dass wir Zuweisungen mit mehreren Gleichheitszeichen verketten — das ist in JavaScript erlaubt, und es ist eine gute Technik, wenn Sie mehrere Variablen alle auf denselben Wert setzen möchten. Wir wollten die Canvas-Breite und -Höhe in den width/height-Variablen leicht zugänglich machen, da dies nützliche Werte sind, die später verfügbar sein sollten (z.B. wenn Sie etwas genau in der Mitte der Canvas-Breite zeichnen möchten).

> [!NOTE]
> Sie sollten die Größe des Bildes im Allgemeinen mit HTML-Attributen oder DOM-Eigenschaften festlegen, wie oben erklärt. Sie könnten CSS verwenden, aber dann wird die Größe nach dem Rendern des Canvas vorgenommen, und genau wie jedes andere Bild (das gerenderte Canvas ist nur ein Bild), könnte das Bild verpixelt/verzerrt werden.

### Abrufen des Canvas-Kontexts und finaler Einrichtung

Wir müssen eine letzte Sache tun, bevor wir unsere Canvas-Vorlage als fertig betrachten können. Um auf das Canvas zu zeichnen, müssen wir eine spezielle Referenz auf den Zeichenbereich erhalten, die als Kontext bezeichnet wird. Dies wird mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) durchgeführt, die für den grundlegenden Gebrauch eine einzelne Zeichenfolge als Parameter annimmt, die den Typ des Kontextes darstellt, die Sie abrufen möchten.

In diesem Fall möchten wir ein 2D-Canvas, also fügen Sie die folgende JavaScript-Zeile unter den anderen in "script.js" hinzu:

```js
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextwerte, die Sie wählen könnten, sind `webgl` für WebGL, `webgl2` für WebGL 2, etc., aber diese werden wir in diesem Artikel nicht benötigen.

Das war's — unser Canvas ist nun vorbereitet und bereit zum Zeichnen! Die Variable `ctx` enthält nun ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, und alle Zeichenoperationen auf dem Canvas werden die Manipulation dieses Objekts beinhalten.

Lassen Sie uns eine letzte Sache tun, bevor wir weitermachen. Wir färben den Hintergrund des Canvas schwarz, um Ihnen einen ersten Eindruck von der Canvas-API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

```js
ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mit der Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) des Canvas (diese nimmt [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) an, genau wie CSS-Eigenschaften), dann zeichnen wir ein Rechteck, das den gesamten Bereich des Canvas mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) abdeckt (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, an der Sie das Rechteck zeichnen wollen — wir haben Ihnen gesagt, dass diese `width` und `height` Variablen nützlich sein würden)!

Okay, unsere Vorlage ist fertig und es ist Zeit, weiterzugehen.

## Grundlagen des 2D-Canvas

Wie wir oben gesagt haben, werden alle Zeichenoperationen durch die Manipulation eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts durchgeführt (in unserem Fall, `ctx`). Viele Operationen müssen Koordinaten erhalten, um genau zu bestimmen, wo etwas gezeichnet werden soll — das obere linke des Canvas ist Punkt (0, 0), die horizontale (x) Achse verläuft von links nach rechts, und die vertikale (y) Achse verläuft von oben nach unten.

![Gerastertes Graphpapier mit kleinen Quadraten, die den Bereich mit einem stahlblauen Quadrat in der Mitte abdecken. Die obere linke Ecke des Canvas ist Punkt (0, 0) der Canvas-x-Achse und y-Achse. Die horizontale (x) Achse verläuft von links nach rechts und bezeichnet die Breite, und die vertikale (y) Achse verläuft von oben nach unten und bezeichnet die Höhe. Die obere linke Ecke des blauen Quadrats ist mit einem Abstand von x Einheiten von der y-Achse und y Einheiten von der x-Achse beschriftet.](canvas_default_grid.png)

Das Zeichnen von Formen erfolgt normalerweise mit der Rechteckformprimzahl oder durch das Zeichnen einer Linie entlang eines bestimmten Pfads und dem anschließenden Ausfüllen der Form. Unten zeigen wir, wie man beides macht.

### Einfache Rechtecke

Lassen Sie uns mit einigen einfachen Rechtecken beginnen.

1. Zuerst einmal eine Kopie Ihrer neu codierten Canvas-Vorlage (oder machen Sie eine lokale Kopie des Verzeichnisses [1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template), wenn Sie die obigen Schritte nicht befolgt haben).
2. Fügen Sie als nächstes die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

   ```js
   ctx.fillStyle = "red";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie speichern und aktualisieren, sollten Sie ein rotes Rechteck auf Ihrem Canvas erscheinen sehen. Seine obere linke Ecke ist 50 Pixel vom oberen und linken Rand des Canvas entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch die dritten und vierten Parameter definiert).

3. Lassen Sie uns ein weiteres Rechteck in die Mischung bringen — diesmal ein grünes. Fügen Sie das Folgende am Ende Ihres JavaScripts hinzu:

   ```js
   ctx.fillStyle = "green";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren, und Sie werden Ihr neues Rechteck sehen. Dies wirft einen wichtigen Punkt auf: Grafikoperationen wie das Zeichnen von Rechtecken, Linien usw. werden in der Reihenfolge ausgeführt, in der sie auftreten. Denken Sie daran, dass es wie das Streichen einer Wand ist, wo jede Farbschicht überlappt und sogar das, was darunter liegt, verstecken kann. Es gibt keine Möglichkeit, dies zu ändern, daher müssen Sie sorgfältig über die Reihenfolge nachdenken, in der Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, zum Beispiel durch die Verwendung von `rgb()`. Der "Alphakanal" definiert die Menge an Transparenz, die die Farbe hat. Je höher der Wert, desto mehr wird er das verdecken, was dahinter liegt. Fügen Sie das Folgende Ihrem Code hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, einige weitere Rechtecke selbst zu zeichnen; viel Spaß!

### Striche und Linienbreiten

Bisher haben wir uns das Zeichnen ausgefüllter Rechtecke angesehen, aber Sie können auch Rechtecke zeichnen, die nur Konturen sind (sogenannte **Striche** im Grafikdesign). Um die Farbe, die Sie für Ihren Strich haben möchten, einzustellen, verwenden Sie die Eigenschaft [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle); das Zeichnen eines Strichrechtecks erfolgt mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Fügen Sie das Folgende dem vorherigen Beispiel hinzu, wieder unterhalb der vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "rgb(255 255 255)";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Strichen beträgt 1 Pixel; Sie können den Wert der Eigenschaft [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth) anpassen, um dies zu ändern (sie nimmt eine Zahl an, die die Anzahl der Pixel darstellt, die der Strich breit ist). Fügen Sie die folgende Zeile zwischen den vorherigen zwei Zeilen hinzu:

   ```js
   ctx.lineWidth = 5;
   ```

Jetzt sollten Sie sehen, dass Ihre weiße Umrandung viel dicker geworden ist! Das war's für jetzt. An diesem Punkt sollte Ihr Beispiel so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles/index.html", '100%', 250)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [2_canvas_rectangles](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles) verfügbar.

### Zeichnen von Pfaden

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Im Wesentlichen bedeutet dies, Code zu schreiben, um genau zu spezifizieren, wie der Stift auf Ihrem Canvas bewegt werden soll, um die Form zu zeichnen, die Sie zeichnen möchten. Canvas enthält Funktionen zum Zeichnen gerader Linien, Kreise, Bézierkurven und mehr.

Beginnen wir den Abschnitt, indem wir eine neue Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) machen, in der wir das neue Beispiel zeichnen können.

Wir werden einige allgemeine Methoden und Eigenschaften über die unten stehenden Abschnitte hinweg verwenden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — Beginnen Sie mit dem Zeichnen eines Pfads an dem Punkt, an dem sich der Stift derzeit auf dem Canvas befindet. Auf einem neuen Canvas startet der Stift bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — Bewegen Sie den Stift zu einem anderen Punkt auf dem Canvas, ohne die Linie zu zeichnen oder zu verfolgen; der Stift "springt" zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — Zeichnen Sie eine gefüllte Form, indem Sie den Pfad ausfüllen, den Sie bisher gezeichnet haben.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — Zeichnen Sie eine Linienform, indem Sie eine Linie entlang des Pfads ziehen, den Sie bisher gezeichnet haben.
- Sie können Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` auch mit Pfaden sowie Rechtecken verwenden.

Eine typische, einfache Pfadzeichnung könnte so aussehen:

```js
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Zeichnen von Linien

Lassen Sie uns ein gleichseitiges Dreieck auf das Canvas zeichnen.

1. Zuerst einmal, fügen Sie die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Dies konvertiert Gradwerte zu Bogenmaß, was nützlich ist, weil immer, wenn Sie einen Winkelwert in JavaScript angeben müssen, es fast immer in Bogenmaß sein wird, aber Menschen denken normalerweise in Grad.

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Beginnen Sie als nächstes Ihren Pfad, indem Sie das Folgende unter Ihrer vorherigen Ergänzung hinzufügen; hier setzen wir eine Farbe für unser Dreieck, beginnen damit einen Pfad zu zeichnen und bewegen dann den Stift zu (50, 50) ohne etwas zu zeichnen. Das ist der Punkt, an dem wir beginnen, unser Dreieck zu zeichnen.

   ```js
   ctx.fillStyle = "red";
   ctx.beginPath();
   ctx.moveTo(50, 50);
   ```

3. Fügen Sie nun die folgenden Zeilen am Ende Ihres Skripts hinzu:

   ```js
   ctx.lineTo(150, 50);
   const triHeight = 50 * Math.tan(degToRad(60));
   ctx.lineTo(100, 50 + triHeight);
   ctx.lineTo(50, 50);
   ctx.fill();
   ```

   Lassen Sie uns dies der Reihe nach durchgehen:

   Zuerst zeichnen wir eine Linie bis zu (150, 50) — unser Pfad verläuft jetzt 100 Pixel nach rechts entlang der x-Achse.

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks mit ein wenig einfacher Trigonometrie. Grundsätzlich zeichnen wir das Dreieck nach unten zeigend. Die Winkel in einem gleichseitigen Dreieck sind immer 60 Grad; um die Höhe zu berechnen, können wir es in zwei rechtwinklige Dreiecke teilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben. Bezüglich der Seiten:
   - Die längste Seite wird **Hypotenuse** genannt.
   - Die Seite neben dem 60-Grad-Winkel wird **angrenzend** genannt — die wir kennen ist 50 Pixel, da es die Hälfte der Linie ist, die wir gerade gezeichnet haben.
   - Die Seite gegenüber des 60-Grad-Winkels wird **Gegenüberliegend** genannt, was die Höhe des Dreiecks ist, die wir berechnen möchten.

   ![Ein gleichseitiges Dreieck, das nach unten zeigt mit angeschriebenen Winkeln und Seiten. Die horizontale Linie oben ist als 'angrenzend' markiert. Eine senkrechte gepunktete Linie, von der Mitte der angrenzenden Linie, als 'gegenüberliegend' markiert, teilt das Dreieck und schafft zwei gleiche rechtwinklige Dreiecke. Die rechte Seite des Dreiecks ist als Hypotenuse markiert, da es die Hypotenuse des rechtwinkligen Dreiecks gebildet durch die Linie markiert als 'gegenüberliegend' ist, während alle drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des rechtwinkligen Dreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass die Länge des angrenzenden multipliziert mit dem Tangens des Winkels gleich dem Gegenüberliegenden ist, daher kommen wir mit `50 * Math.tan(degToRad(60))`. Wir verwenden unsere `degToRad()` Funktion, um 60 Grad in Bogenmaß zu konvertieren, da {{jsxref("Math.tan()")}} einen Eingabewert in Bogenmaß erwartet.

4. Mit der berechneten Höhe zeichnen wir eine weitere Linie zu `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss in der Mitte zwischen den vorherigen zwei X-Werten liegen, die wir gesetzt haben. Der Y-Wert hingegen muss 50 plus die Dreieckshöhe sein, da wir wissen, dass die Spitze des Dreiecks 50 Pixel von der Oberkante des Canvas entfernt ist.
5. Die nächste Linie zeichnet eine Linie zurück zum Ausgangspunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form auszufüllen.

#### Zeichnen von Kreisen

Sehen wir uns nun an, wie man einen Kreis im Canvas zeichnet. Dies wird mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) erreicht, die einen gesamten oder einen Teil eines Kreises an einem bestimmten Punkt zeichnet.

1. Fügen wir einen Bogen zu unserem Canvas hinzu — fügen Sie das Folgende am Ende Ihres Codes hinzu:

   ```js
   ctx.fillStyle = "rgb(0 0 255)";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` nimmt sechs Parameter entgegen. Die ersten beiden geben die Position des Mittelpunktes des Bogens an (X und Y, jeweils). Der dritte ist der Radius des Kreises, der vierte und fünfte sind die Start- und Endwinkel, bei denen der Kreis gezeichnet werden soll (das Angeben von 0 und 360 Grad gibt uns also einen vollen Kreis), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn (antiklockwise) oder im Uhrzeigersinn gezeichnet werden soll (`false` ist im Uhrzeigersinn).

   > [!NOTE]
   > 0 Grad ist horizontal nach rechts.

2. Versuchen wir, einen weiteren Bogen hinzuzufügen:

   ```js
   ctx.fillStyle = "yellow";
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   Das Muster hier ist sehr ähnlich, aber mit zwei Unterschieden:
   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird, was bedeutet, dass selbst wenn der Bogen als Beginn bei -45 Grad und Ende bei 45 Grad angegeben ist, wir den Bogen um die 270 Grad außen herum zeichnen, nicht innerhalb dieses Abschnitts. Wenn Sie `true` auf `false` ändern und dann den Code neu ausführen würden, würde nur der 90-Grad-Abschnitt des Kreises gezeichnet werden.
   - Bevor `fill()` aufgerufen wird, zeichnen wir eine Linie zum Mittelpunkt des Kreises. Dies bedeutet, dass wir die nette Pac-Man-artige Aussparung erhalten. Wenn Sie diese Linie entfernen würden (probieren Sie es aus!) und den Code neu ausführen würden, würden Sie nur eine abgeschnittene Kante des Kreises zwischen Start- und Endpunkt des Bogens erhalten. Dies illustriert einen weiteren wichtigen Punkt des Canvas — wenn Sie versuchen, einen unvollständigen Pfad (d.h. einen, der nicht geschlossen ist) auszufüllen, füllt der Browser eine gerade Linie zwischen Start- und Endpunkt ein und füllt sie dann aus.

Das war es für jetzt; Ihr endgültiges Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/3_canvas_paths/index.html", '100%', 200)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [3_canvas_paths](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/3_canvas_paths) verfügbar.

> [!NOTE]
> Um mehr über erweiterte Straßenzeichnungsfunktionen wie Bézierkurven zu erfahren, schauen Sie sich unser [Zeichnen von Formen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)-Tutorial an.

### Text

Canvas hat auch Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz erkunden. Beginnen Sie mit einer weiteren neuen Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)), um das neue Beispiel zu zeichnen.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — Zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — Zeichnet Umriss (Strich) Text.

Beide nehmen bei der Grundanwendung drei Eigenschaften an: den zu zeichnenden Textstring und die X- und Y-Koordinaten des Punktes, an dem der Text gezeichnet werden soll. Dies ergibt sich als **untere linke** Ecke des **Textfelds** (wörtlich, das Feld, das den Text umgibt, den Sie zeichnen), was Sie verwirren könnte, da andere Zeichenoperationen normalerweise von der oberen linken Ecke aus beginnen — denken Sie daran.

Es gibt auch eine Reihe von Eigenschaften zur Steuerung des Textrenderings wie [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), die Ihnen ermöglicht, die Schriftart, Größe usw. anzugeben. Sie nimmt als Wert die gleiche Syntax wie die CSS-{{cssxref("font")}}-Eigenschaft.

Canvas-Inhalt ist nicht für Screenreader zugänglich. Text, der auf das Canvas gemalt wird, ist nicht im DOM verfügbar, muss jedoch zugänglich gemacht werden. In diesem Beispiel finden Sie den Text als Wert für `aria-label`.

Versuchen Sie, den folgenden Block am Ende Ihres JavaScripts hinzuzufügen:

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

Hier zeichnen wir zwei Textzeilen, eine Umriss- und die andere Strichtext. Das letzte Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/4_canvas_text/index.html", '100%', 180)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [4_canvas_text](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/4_canvas_text) verfügbar.

Haben Sie Spaß und sehen Sie, was Sie sich einfallen lassen können! Weitere Informationen zu den verfügbaren Optionen für Canvas-Text finden Sie unter [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Zeichnen von Bildern auf ein Canvas

Es ist möglich, externe Bilder auf Ihr Canvas zu rendern. Diese können einfache Bilder, Frames aus Videos oder der Inhalt anderer Canvas sein. Im Moment werden wir nur den Gebrauch von einfachen Bildern auf unserem Canvas betrachten.

1. Wie zuvor, machen Sie eine weitere neue Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)), um das neue Beispiel zu zeichnen.

   Bilder werden mit der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf das Canvas gezeichnet. Die einfachste Version nimmt drei Parameter — eine Referenz auf das Bild, das Sie rendern möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Beginnen wir damit, eine Bildquelle zum Einbetten in unser Canvas zu bekommen. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

   ```js
   const image = new Image();
   image.src = "firefox.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, das den [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor verwendet. Das zurückgegebene Objekt ist derselbe Typ, wie er zurückgegeben wird, wenn Sie eine Referenz auf ein bestehendes {{htmlelement("img")}}-Element nehmen. Wir setzen dann dessen [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut gleich mit unserem Firefox-Logo-Bild. An diesem Punkt startet der Browser das Laden des Bildes.

3. Wir könnten jetzt versuchen, das Bild mit `drawImage()` einzubetten, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, sonst schlägt der Code fehl. Wir können dies mit dem `load`-Event erreichen, das nur ausgelöst wird, wenn das Bild geladen ist. Fügen Sie den folgenden Block unter dem vorherigen hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie das Bild im Canvas eingebettet sehen.

4. Aber es gibt noch mehr! Was, wenn wir nur einen Teil des Bildes anzeigen oder es skalieren möchten? Beides können wir mit der komplexeren Version von `drawImage()` tun. Aktualisieren Sie Ihre Zeile `ctx.drawImage()` wie folgt:

   ```js
   ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
   ```

   - Der erste Parameter ist die Bildreferenz, wie zuvor.
   - Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links von dem ersten Parameter oder über dem zweiten wird gezeichnet.
   - Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem Originalbild, das wir geladen haben, ausschneiden möchten.
   - Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Teils des Bildes zeichnen möchten, relativ zur oberen linken Ecke des Canvas.
   - Parameter 8 und 9 definieren die Breite und Höhe, in der der ausgeschnittene Bereich des Bildes gezeichnet werden soll. In diesem Fall haben wir die gleichen Dimensionen wie der Originalausschnitt angegeben, aber Sie könnten es skalieren, indem Sie andere Werte angeben.

5. Wenn das Bild bedeutungsvoll aktualisiert wird, muss auch die {{Glossary("accessible_description", "zugängliche Beschreibung")}} aktualisiert werden.

   ```js
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das letzte Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/5_canvas_images/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [5_canvas_images](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/5_canvas_images) verfügbar.

## Schleifen und Animationen

Wir haben bisher einige sehr grundlegende Anwendungen des 2D-Canvas behandelt, aber wirklich werden Sie die volle Kraft des Canvas nicht erleben, es sei denn, Sie aktualisieren oder animieren es in irgendeiner Weise. Schließlich liefert das Canvas scriptfähige Bilder! Wenn Sie nichts ändern werden, können Sie genauso gut statische Bilder verwenden und sich die ganze Arbeit sparen.

### Erstellen einer Schleife

Das Spielen mit Schleifen in Canvas macht ziemlich viel Spaß — Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife (oder eines anderen Typs) ausführen, genau wie bei anderen JavaScript-Code.

Lassen Sie uns ein Beispiel zusammenstellen.

1. Machen Sie eine weitere neue Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie sie in Ihrem Code-Editor.
2. Fügen Sie die folgende Zeile am Ende Ihres JavaScripts hinzu. Dies enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

   Dadurch wird der Koordinatenursprung (0, 0) in die Mitte des Canvas verschoben, anstatt in die obere linke Ecke. Dies ist in vielen Situationen sehr nützlich, wie in diesem Fall, wo wir unser Design relativ zur Mitte des Canvas zeichnen möchten.

3. Fügen Sie nun folgenden Code am Ende des JavaScripts hinzu:

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

   Hier implementieren wir dieselbe `degToRad()`-Funktion, die wir im Dreieck-Beispiel oben gesehen haben, eine `rand()`-Funktion, die eine Zufallszahl zwischen den angegebenen unteren und oberen Grenzen zurückgibt, `length` und `moveOffset` Variablen (die wir später kennenlernen werden), und eine leere `for`-Schleife.

4. Die Idee dabei ist, dass wir innerhalb der `for`-Schleife etwas auf das Canvas zeichnen und es bei jedem Durchgang iterieren, damit wir etwas Interessantes erstellen können. Fügen Sie den folgenden Code in Ihre `for`-Schleife ein:

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

   Auf jeder Iteration:
   - Setzen wir das `fillStyle` auf einen leicht transparenten Violettton, der sich jedes Mal basierend auf dem Wert von `length` ändert. Wie Sie später sehen werden, wird die Länge jedes Mal verkleinert, wenn die Schleife läuft, sodass der Effekt hier ist, dass die Farbe mit jedem gezeichneten Dreieck heller wird.
   - Beginnen wir den Pfad.
   - Bewegen wir den Stift zu einer Koordinate von `(moveOffset, moveOffset)`; Diese Variable definiert, wie weit wir uns jedes Mal bewegen möchten, wenn wir ein neues Dreieck zeichnen.
   - Zeichnen wir eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Dies zeichnet eine Linie der Länge `length` parallel zur X-Achse.
   - Berechnen wir die Höhe des Dreiecks, wie zuvor.
   - Zeichnen wir eine Linie zur nach unten zeigenden Ecke des Dreiecks, dann zeichnen wir eine Linie zurück zum Anfang des Dreiecks.
   - Rufen wir `fill()` auf, um das Dreieck zu füllen.
   - Aktualisieren wir die Variablen, die die Folge der Dreiecke beschreiben, damit wir bereit sind, das nächste zu zeichnen. Wir verkleinern den `length`-Wert um 1, damit die Dreiecke jedes Mal kleiner werden; erhöhen `moveOffset` um einen kleinen Betrag, damit jedes aufeinanderfolgende Dreieck etwas weiter entfernt ist, und verwenden eine weitere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), die es uns ermöglicht, das gesamte Canvas zu drehen! Wir drehen es um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das war's! Das letzte Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop/index.html", '100%', 550)}}

An dieser Stelle möchten wir Sie ermutigen, mit dem Beispiel zu spielen und es zu Ihrem eigenen zu machen! Zum Beispiel:

- Zeichnen Sie Rechtecke oder Bögen anstelle von Dreiecken, oder betten Sie sogar Bilder ein.
- Spielen Sie mit den `length`- und `moveOffset`-Werten.
- Führen Sie einige Zufallszahlen ein, indem Sie die `rand()`-Funktion verwenden, die wir oben eingefügt, aber nicht verwendet haben.

> [!NOTE]
> Der fertige Code ist auf GitHub als [6_canvas_for_loop](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop) verfügbar.

### Animationen

Das Schleifenbeispiel, das wir oben erstellt haben, war unterhaltsam, aber wirklich benötigen Sie eine konstante Schleife, die immer und immer wieder läuft, um ernsthafte Canvas-Anwendungen zu ermöglichen (wie Spiele und Echtzeit-Visualisierungen). Wenn Sie Ihr Canvas als Film betrachten, möchten Sie wirklich, dass das Display bei jedem Frame aktualisiert wird, um den aktualisierten Anzeigebereich zu zeigen, mit einer idealen Bildwiederholrate von 60 Bildern pro Sekunde, damit die Bewegung schön und flüssig aussieht.

Es gibt ein paar JavaScript-Funktionen, die es Ihnen ermöglichen, Funktionen mehrmals pro Sekunde auszuführen, die beste für unsere Zwecke hier ist [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Sie nimmt einen Parameter — den Namen der Funktion, die Sie für jeden Frame ausführen möchten. Beim nächsten Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion das neue Update zu Ihrer Animation zeichnet und dann `requestAnimationFrame()` erneut kurz vor dem Ende der Funktion aufruft, wird die Animationsschleife weiter ausgeführt. Die Schleife endet, wenn Sie nicht mehr `requestAnimationFrame()` aufrufen oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) nach dem Aufrufen von `requestAnimationFrame()`, aber vor dem Frameaufruf, aufrufen.

> [!NOTE]
> Es ist eine gute Praxis, `cancelAnimationFrame()` aus Ihrem Hauptcode aufzurufen, wenn Sie mit der Animation fertig sind, um sicherzustellen, dass keine Updates mehr ausgeführt werden müssen.

Der Browser erledigt komplexe Details wie das gleichmäßige Laufenlassen der Animation und das Vermeiden von Ressourcenverschwendung beim Animieren von nicht sichtbaren Dingen.

Um zu sehen, wie es funktioniert, werfen wir schnell noch einen Blick auf unser Beispiel zu den hüpfenden Bällen ([live sehen](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html), und sehen Sie auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/oojs/bouncing-balls)). Der Code für die Schleife, die alles in Bewegung hält, sieht so aus:

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

Wir führen die `loop()`-Funktion einmal am unteren Rand des Codes aus, um den Zyklus zu starten und den ersten Animationsframe zu zeichnen; die `loop()`-Funktion übernimmt dann die Rolle, `requestAnimationFrame(loop)` aufzurufen, um den nächsten Frame der Animation auszuführen, immer und immer wieder.

Beachten Sie, dass wir bei jedem Frame das gesamte Canvas komplett leeren und alles neu zeichnen. Für jeden vorhandenen Ball zeichnen wir ihn, aktualisieren seine Position und überprüfen, ob er mit anderen Bällen kollidiert. Sobald Sie eine Grafik auf ein Canvas gezeichnet haben, gibt es keine Möglichkeit, diese Grafik individuell zu manipulieren, wie Sie es mit DOM-Elementen tun können. Sie können jeden Ball nicht auf dem Canvas bewegen, weil er, sobald er gezeichnet ist, Teil des Canvas ist und kein individuelles zugängliches Element oder Objekt mehr ist. Stattdessen müssen Sie löschen und neu zeichnen, entweder indem Sie den gesamten Frame löschen und alles neu zeichnen oder indem Sie Code haben, der genau weiß, welche Teile gelöscht und nur die Minimalfläche des Canvas, die erforderlich ist, um gelöscht und neu gezeichnet werden, gelöscht.

Das Optimieren von Grafikanimationen ist eine ganze Programmierdisziplin, mit vielen cleveren Techniken. Diese sind über das hinaus, was wir für unser Beispiel benötigen!

Im Allgemeinen umfasst der Prozess der Durchführung einer Canvas-Animation die folgenden Schritte:

1. Löschen Sie den Inhalt des Canvas (z.B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Speichern Sie den Zustand (falls erforderlich) mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) — dies ist notwendig, wenn Sie Einstellungen speichern möchten, die Sie auf dem Canvas aktualisiert haben, bevor Sie fortfahren, was für anspruchsvollere Anwendungen nützlich ist.
3. Zeichnen Sie die Grafiken, die Sie animieren.
4. Stellen Sie die in Schritt 2 gespeicherten Einstellungen mit [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore) wieder her.
5. Rufen Sie `requestAnimationFrame()` auf, um das Zeichnen des nächsten Frames der Animation zu planen.

> [!NOTE]
> Wir werden hier nicht auf `save()` und `restore()` eingehen, aber sie werden in unserem [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations)-Tutorial (und den darauf folgenden) gut erklärt.

### Eine einfache Charakteranimation

Lassen Sie uns nun unsere eigene einfache Animation erstellen — wir bekommen einen Charakter aus einem gewissen ziemlich großartigen Retro-Computer-Spiel, der über den Bildschirm läuft.

1. Machen Sie eine weitere neue Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie sie in Ihrem Code-Editor.

2. Aktuellieren Sie das innere HTML, um das Bild widerzugeben:

   ```html
   <canvas class="myCanvas">
     <p>A man walking.</p>
   </canvas>
   ```

3. Fügen Sie am Ende des JavaScripts die folgende Zeile hinzu, um den Koordinatenursprung erneut in die Mitte des Canvas zu versetzen:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

4. Erstellen wir jetzt ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, setzen dessen [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf das Bild, das wir laden möchten, und fügen einen `onload`-Event-Handler hinzu, der die `draw()`-Funktion auslöst, wenn das Bild geladen ist:

   ```js
   const image = new Image();
   image.src = "walk-right.png";
   image.onload = draw;
   ```

5. Nun fügen wir einige Variablen hinzu, um die Position im Auge zu behalten, an der der Sprite auf dem Bildschirm gezeichnet werden soll, und die Sprite-Nummer, die wir anzeigen möchten.

   ```js
   let sprite = 0;
   let posX = 0;
   ```

   Lassen Sie uns das Sprite-Sheet-Bild erklären (das wir respektvoll von Mike Thomas' [Laufzyklus mit CSS-Animation](https://codepen.io/mikethomas/pen/kQjKLW) CodePen entlehnt haben). Das Bild sieht so aus:

   ![Ein Sprite-Sheet mit sechs Sprite-Bildern eines pixeligen Charakters, der wie eine gehende Person von der rechten Seite aus zu verschiedenen Zeitpunkten eines einzelnen Schrittes aussieht. Der Charakter trägt ein weißes Hemd mit himmelblauen Knöpfen, schwarze Hosen und schwarze Schuhe. Jedes Sprite ist 102 Pixel breit und 148 Pixel groß.](walk-right.png)

   Es enthält sechs Sprites, die die gesamte Laufschleife ausmachen — jedes ist 102 Pixel breit und 148 Pixel hoch. Um jedes Sprite sauber anzuzeigen, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild aus dem Sprite-Sheet herauszuschneiden und nur diesen Teil anzuzeigen, wie wir es oben mit dem Firefox-Logo gemacht haben. Die X-Koordinate des Ausschnitts muss ein Vielfaches von 102 sein, und die Y-Koordinate wird immer 0 sein. Die Ausschnittgröße wird immer 102 x 148 Pixel sein.

6. Nun fügen wir eine leere `draw()`-Funktion am Ende des Codes ein, bereit zur Auffüllung mit Code:

   ```js
   function draw() {}
   ```

7. Der Rest des Codes in diesem Abschnitt geht in `draw()`. Fügen Sie zuerst die folgende Zeile hinzu, die das Canvas löscht, um es für das Zeichnen jedes Frames vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width/2), -(height/2)` angeben müssen, weil wir die Herkunftsposition als `width/2, height/2` weiter oben angegeben haben.

   ```js
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

8. Als nächstes werden wir unser Bild mit drawImage — der 9-Parameter-Version — zeichnen. Fügen Sie das Folgende hinzu:

   ```js
   ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);
   ```

   Wie Sie sehen können:
   - Wir spezifizieren `image` als das zu embedende Bild.
   - Parameter 2 und 3 spezifizieren die obere linke Ecke des Ausschnitts, der aus dem Quellbild herausgeschnitten werden soll, mit dem X-Wert als `sprite`, multipliziert mit 102 (wobei `sprite` die Sprite-Nummer zwischen 0 und 5 ist) und dem Y-Wert immer 0.
   - Parameter 4 und 5 spezifizieren die Größe des Ausschnitts, der herausgeschnitten werden soll — 102 Pixel mal 148 Pixel.
   - Parameter 6 und 7 spezifizieren die obere linke Ecke des Kastens, in dem der Ausschnitt auf dem Canvas gezeichnet werden soll — die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichenposition durch Ändern des `posX`-Werts ändern können.
   - Parameter 8 und 9 spezifizieren die Größe des Bildes auf dem Canvas. Wir möchten es einfach in seiner Originalgröße behalten, daher geben wir 102 und 148 als Breite und Höhe an.

9. Nun verändern wir den `sprite`-Wert nach jedem Zeichnen — nun ja, nach einigen von ihnen zumindest. Fügen Sie den folgenden Block am Ende der `draw()`-Funktion hinzu:

   ```js
   if (posX % 13 === 0) {
     if (sprite === 5) {
       sprite = 0;
     } else {
       sprite++;
     }
   }
   ```

   Wir wickeln den gesamten Block in `if (posX % 13 === 0) { }`. Wir verwenden den Modulo (`%`) Operator (auch bekannt als [Restoperator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu überprüfen, ob der `posX`-Wert genau durch 13 ohne Rest geteilt werden kann. Wenn dem so ist, gehen wir zum nächsten Sprite über, indem wir `sprite` inkrementieren (wobei nach dem letzten Sprite die Rückführung auf 0 erfolgt). Dies bedeutet effektiv, dass wir das Sprite nur jedes 13. Frame, oder ungefähr fünfmal pro Sekunde (`requestAnimationFrame()` ruft uns nach Möglichkeit mit bis zu 60 Frames pro Sekunde auf), aktualisieren. Wir verlangsamen absichtlich die Frame-Rate, da wir nur sechs Sprites zur Verfügung haben, und wenn wir eins jedes 60. einer Sekunde anzeigen, wird unser Charakter viel zu schnell laufen!

   Innerhalb des äußeren Blocks verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob der `sprite`-Wert auf 5 ist (das letzte Sprite, da die Sprite-Nummern von 0 bis 5 reichen). Wenn wir bereits das letzte Sprite zeigen, setzen wir `sprite` auf 0 zurück; andernfalls inkrementieren wir es einfach um 1.

10. Als nächstes müssen wir herausfinden, wie wir den `posX`-Wert bei jedem Frame ändern können — fügen Sie den folgenden Codeblock direkt unter Ihrem letzten hinzu.

    ```js
    if (posX > width / 2) {
      let newStartPos = -(width / 2 + 102);
      posX = Math.ceil(newStartPos);
      console.log(posX);
    } else {
      posX += 2;
    }
    ```

    Wir verwenden eine weitere `if...else`-Anweisung, um zu überprüfen, ob der Wert von `posX` größer als `width/2` geworden ist, was bedeutet, dass unser Charakter aus dem rechten Rand des Bildschirms gelaufen ist. Wenn ja, berechnen wir eine Position, die den Charakter knapp links vom linken Bildschirmrand platzieren würde.

    Wenn unser Charakter noch nicht vom Rand des Bildschirms gelaufen ist, inkrementieren wir `posX` um 2. Dies wird ihn ein wenig nach rechts bewegen, das nächste Mal, wenn wir ihn zeichnen.

11. Schließlich müssen wir die Animationsschleife verschließen, indem wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()`-Funktion aufrufen:

    ```js
    window.requestAnimationFrame(draw);
    ```

Das war's! Das letzte Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [7_canvas_walking_animation](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation) verfügbar.

### Eine einfache Zeichenanwendung

Als letztes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben (wie z.B. Mausbewegungen, in diesem Fall) kombiniert werden kann. Wir werden Sie nicht durchgehen lassen und dies aufbauen lassen; wir werden einfach die interessantesten Teile des Codes erkunden.

Das Beispiel finden Sie auf GitHub als [8_canvas_drawing_app](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app) und Sie können es live unten spielen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app/index.html", '100%', 600)}}

Schauen wir uns die interessantesten Teile an. Zuerst einmal verfolgen wir die X- und Y-Koordinaten und ob die Maus gedrückt wird mit drei Variablen: `curX`, `curY` und `pressed`. Wenn die Maus bewegt wird, führen wir eine Funktion aus, die als `onmousemove`-Event-Handler gesetzt ist, die die aktuellen X- und Y-Werte erfasst. Wir verwenden auch `onmousedown` und `onmouseup`-Event-Handler, um den Wert von `pressed` auf `true` zu ändern, wenn die Maustaste gedrückt wird, und zurück auf `false`, wenn sie losgelassen wird.

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

Wenn die "Leinwand leeren"-Taste gedrückt wird, führen wir eine einfache Funktion aus, die das gesamte Canvas wieder schwarz macht, genauso wie wir es vorher gesehen haben:

```js
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichnungsschleife ist diesmal recht einfach — wenn pressed `true` ist, zeichnen wir einen Kreis mit einem Füllstil, der dem Wert im Farbauswahl-Tool entspricht, und einem Radius gleich dem in der Bereichseingabe festgelegten Wert. Wir müssen den Kreis 85 Pixel über dem Messpunkt zeichen, weil die vertikale Messung vom oberen Rand des Ansichtsfensters genommen wird, aber wir zeichnen den Kreis relativ zur Oberkante des Canvas, das unter der 85 Pixel hohen Toolbar beginnt. Wenn wir es einfach mit `curY` als Y-Koordinate zeichnen würden, würde es 85 Pixel tiefer als die Mausposition erscheinen.

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

Alle {{htmlelement("input")}}-Typen werden gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, wird auf ein einfaches Textfeld zurückgefallen.

## WebGL

Es ist nun an der Zeit, 2D hinter sich zu lassen und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalt wird mit der [WebGL API](/de/docs/Web/API/WebGL_API) festgelegt, die eine vollständig separate API von der 2D-Canvas-API ist, auch wenn sie beide auf {{htmlelement("canvas")}}-Elemente rendern.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht es Ihnen, direkt mit der {{Glossary("GPU", "GPU")}} des Computers zu kommunizieren. Da es so ist, ist das Schreiben von rohem WebGL näher an niedrigeren Sprachen wie C++ als an regulärem JavaScript; es ist ziemlich komplex, aber unglaublich leistungsfähig.

### Verwendung einer Bibliothek

Aufgrund seiner Komplexität schreiben die meisten Menschen 3D-Grafikcode mit einer externen JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten davon funktionieren ähnlich, indem sie Funktionen zum Erstellen primitiver und benutzerdefinierter Formen, zum Positionieren von Kameras und Beleuchtung bieten, Oberflächen mit Texturen zu überziehen und mehr. Sie erledigen das WebGL für Sie und lassen Sie auf einer höheren Ebene arbeiten.

Ja, die Verwendung eines solchen bedeutet, dass Sie eine weitere neue API lernen müssen (in diesem Fall eine externe), aber sie sind viel einfacher als das Codieren von rohem WebGL.

### Unseren Würfel nachbauen

Schauen wir uns ein Beispiel an, wie man mit einer WebGL-Bibliothek etwas erstellen kann. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der beliebtesten ist. In diesem Tutorial erstellen wir den 3D-drehenden Würfel, den wir früher gesehen haben.

1. Um zu beginnen, machen Sie eine lokale Kopie von [threejs-cube/index.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/index.html) in einem neuen Ordner, dann speichern Sie eine Kopie von [metal003.png](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/metal003.png) im selben Ordner. Dies ist das Bild, das wir später als Oberflächentextur für den Würfel verwenden werden.
2. Erstellen Sie als nächstes eine neue Datei mit dem Namen `script.js`, wieder im selben Ordner wie zuvor.
3. Als nächstes müssen Sie die Three.js-Bibliothek installiert haben. Sie können die Umgebungs-Einrichtungsschritte, die in [Building up a basic demo with Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) beschrieben sind, befolgen, damit Sie Three.js wie erwartet arbeiten haben.
4. Nun haben wir `three.js` an unsere Seite angehängt, wir können anfangen, JavaScript zu schreiben, das davon Gebrauch macht in `script.js`. Beginnen wir damit, eine neue Szene zu erstellen — fügen Sie Folgendes in Ihre `script.js`-Datei ein:

   ```js
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene)-Konstruktor erstellt eine neue Szene, die die gesamte 3D-Welt repräsentiert, die wir anzeigen möchten.

5. Als nächstes benötigen wir eine **Kamera**, damit wir die Szene sehen können. In 3D-Bilderbegriffen repräsentiert die Kamera die Position des Betrachters in der Welt. Um eine Kamera zu erstellen, fügen Sie die folgenden Zeilen als nächstes hinzu:

   ```js
   const camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000,
   );
   camera.position.z = 5;
   ```

   Der [`PerspectiveCamera()`](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera)-Konstruktor benötigt vier Argumente:
   - Das Sichtfeld: Wie breit der Bereich vor der Kamera ist, der auf dem Bildschirm sichtbar sein soll, in Grad.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Dies ist in der Regel das Verhältnis der Breite der Szene geteilt durch die Höhe der Szene. Die Verwendung eines anderen Werts wird die Szene verzerren (was das sein könnte, was Sie wollen, aber normalerweise nicht).
   - Die Nahgrenze: Wie nah an der Kamera Objekte sein können, bevor wir aufhören, sie auf dem Bildschirm zu rendern. Denken Sie daran, wie wenn Sie Ihre Fingerspitze näher und näher zur Brücke Ihrer Augen bewegen und schließlich können Sie sie nicht mehr sehen.
   - Die Ferngrenze: Wie weit Objekte von der Kamera entfernt sind, bevor sie nicht mehr gerendert werden.

   Wir setzen auch die Position der Kamera etwas über 5 Einheiten auf der Z-Achse, die, wie in CSS, aus dem Bildschirm zu Ihnen als Betrachter heraussteht.

6. Der dritte wesentliche Bestandteil ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene aus der Sicht einer gegebenen Kamera rendert. Wir erstellen jetzt einen mit dem [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)-Konstruktor, werden ihn aber erst später verwenden. Fügen Sie die folgenden Zeilen als nächstes hinzu:

   ```js
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile setzt die Größe, in der der Renderer die Ansicht der Kamera zeichnen wird, und die dritte Zeile fügt das vom Renderer erstellte {{htmlelement("canvas")}}-Element dem {{htmlelement("body")}} des Dokuments hinzu. Jetzt wird alles, was der Renderer zeichnet, in unserem Fenster angezeigt.

7. Als nächstes möchten wir den Würfel erstellen, den wir auf dem Canvas anzeigen werden. Fügen Sie den folgenden Codeblock am Ende Ihres JavaScripts hinzu:

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

   Es gibt hier einiges mehr zu erfassen, daher gehen wir es in Etappen durch:
   - Wir erstellen zuerst eine `cube` globale Variable, damit wir von überall im Code auf unseren Würfel zugreifen können.
   - Als nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt und rufen `load()` darauf auf. `load()` nimmt in diesem Fall zwei Parameter entgegen (obwohl es mehr nehmen kann): die Textur, die wir laden möchten (unser PNG), und eine Funktion, die ausgeführt wird, sobald die Textur geladen wurde.
   - In dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um anzugeben, dass wir einen 2 x 2 Wiederholung des Bildes auf allen Seiten des Würfels umwickelt haben möchten. Als Nächstes erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt und bringen sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) zusammen, um unseren Würfel zu erstellen. Ein Objekt benötigt in der Regel eine Geometrie (welche Form es hat) und ein Material (wie seine Oberfläche aussieht).
   - Zuletzt fügen wir unseren Würfel der Szene hinzu, dann rufen wir unsere `draw()`-Funktion auf, um die Animation zu starten.

8. Bevor wir zu `draw()` kommen, fügen wir ein paar Lichter zur Szene hinzu, um die Dinge ein wenig aufzupeppen; fügen Sie die folgenden Blöcke als nächstes hinzu:

   ```js
   const light = new THREE.AmbientLight("rgb(255 255 255)"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("rgb(255 255 255)");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art weiches Licht, das die gesamte Szene ein wenig aufhellt, wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt hingegen ist ein gerichteter Lichtstrahl, mehr wie eine Taschenlampe (oder ein Spotlicht, in der Tat).

9. Zuletzt fügen wir unsere `draw()`-Funktion am Ende des Codes hinzu:

   ```js
   function draw() {
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
     renderer.render(scene, camera);

     requestAnimationFrame(draw);
   }
   ```

   Dies ist ziemlich intuitiv; bei jedem Frame drehen wir unseren Würfel leicht auf seiner X- und Y-Achse, rendern dann die Szene, wie sie von unserer Kamera gesehen wird, schließlich rufen wir `requestAnimationFrame()` auf, um das Zeichnen unseres nächsten Frames zu planen.

Lassen Sie uns noch einen kurzen Blick darauf werfen, wie das fertige Produkt aussehen sollte:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Sie können [den fertigen Code auf GitHub finden](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-cube).

> [!NOTE]
> In unserem GitHub-Repo finden Sie auch ein weiteres interessantes 3D-Würfel-Beispiel — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([siehe es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dies verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Video-Stream von einer Computer-Webcam zu nehmen und ihn auf eine Seite des Würfels als Textur zu projizieren!

## Zusammenfassung

An diesem Punkt sollten Sie eine nützliche Vorstellung von den Grundlagen der Grafikprogrammierung mit Canvas und WebGL haben und was Sie mit diesen APIs tun können, sowie eine gute Idee, wohin Sie für weitere Informationen gehen können. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklichen Grundlagen des Canvas behandelt — es gibt noch viel mehr zu lernen! Die untenstehenden Artikel werden Sie weiterbringen.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorial-Serie, die erklärt, was Sie über das 2D-Canz wissen sollten, viel ausführlicher als hier behandelt. Wesentliche Lektüre.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Serie, die die Grundlagen der rohen WebGL-Programmierung lehrt.
- [Building up a basic demo with Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — grundlegendes Three.js-Tutorial. Wir haben auch gleichwertige Leitfäden für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spieleentwicklung](/de/docs/Games) — die Hauptseite für die Entwicklung von Webspielen auf MDN. Hier sind einige sehr nützliche Tutorials und Techniken im Zusammenhang mit 2D und 3D Canvas verfügbar — siehe die Menüoptionen Techniken und Tutorials.

## Beispiele

- [Violent theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API zur Klangerzeugung und Canvas zur Erzeugung einer hübschen Visualisierung dazu.
- [Voice change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas zur Visualisierung von Echtzeit-Audiodaten von der Web Audio API.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
