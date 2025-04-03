---
title: Grafiken zeichnen
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsfähige Grafikprogrammiertools, von der Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) Sprache bis hin zu APIs zum Zeichnen auf HTML {{htmlelement("canvas")}} Elementen (siehe [Die Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in Canvas und weitere Ressourcen, die es Ihnen ermöglichen, mehr zu lernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere Grundkenntnisse zu <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objekten</a> und Kern-APIs wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte und Anwendungsfälle, die durch die in dieser Lektion behandelten APIs ermöglicht werden.</li>
          <li>Grundsyntax und Nutzung von <code>&lt;canvas&gt;</code> und den damit verbundenen APIs.</li>
          <li>Verwendung von Timern und <code>requestAnimationFrame()</code> zur Einrichtung von Animationsschleifen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Das Web bestand ursprünglich nur aus Text, was sehr langweilig war, daher wurden Bilder eingeführt – zuerst über das {{htmlelement("img")}} Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Dies war jedoch immer noch nicht genug. Während Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden konnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) — da sie durch Markup dargestellt werden — gab es immer noch keine Möglichkeit, das gleiche für Bitmap-Bilder zu tun, und die verfügbaren Werkzeuge waren ziemlich begrenzt. Das Web hatte weiterhin keine effektive Möglichkeit, Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die üblicherweise von niedrigstufigen Sprachen wie C++ oder Java behandelt werden.

Die Situation begann sich zu verbessern, als Browser im Jahr 2004 damit begannen, das {{htmlelement("canvas")}} Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) zu unterstützen. Wie Sie unten sehen werden, bietet Canvas einige nützliche Werkzeuge zur Erstellung von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Anwendungen, insbesondere in Kombination mit einigen der anderen APIs, die die Web-Plattform bietet, kann jedoch schwierig oder unmöglich zugänglich gemacht werden.

Das folgende Beispiel zeigt eine einfache 2D-Canvas-basierte Animation mit springenden Bällen, die wir ursprünglich in unserem Modul [Einführung in JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) kennengelernt haben:

{{EmbedGHLiveSample("learning-area/javascript/oojs/bouncing-balls/index-finished.html", '100%', 500)}}

Zwischen 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Daraus wurde [WebGL](/de/docs/Web/API/WebGL_API), das unter Browser-Herstellern an Zugkraft gewann und etwa 2009–2010 standardisiert wurde. WebGL ermöglicht es Ihnen, echte 3D-Grafiken in Ihrem Webbrowser zu erstellen; das untenstehende Beispiel zeigt einen einfachen drehenden WebGL-Würfel:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Dieser Artikel wird sich hauptsächlich auf 2D-Canvas konzentrieren, da roher WebGL-Code sehr komplex ist. Wir werden jedoch zeigen, wie man eine WebGL-Bibliothek verwendet, um eine 3D-Szene einfacher zu erstellen, und Sie können ein Tutorial zu rohem WebGL an anderer Stelle finden — siehe [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Aktives Lernen: Erste Schritte mit einem `<canvas>`

Wenn Sie eine 2D- _oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML {{htmlelement("canvas")}} Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Dies ist so einfach wie das Einfügen des Elements auf der Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dies wird ein Canvas auf der Seite mit einer Größe von 320 mal 240 Pixeln erstellen.

Sie sollten etwas Ersatzinhalt in die `<canvas>` Tags einfügen. Dies sollte den Canvas-Inhalt für Benutzer von Browsern beschreiben, die Canvas nicht unterstützen, oder für Benutzer von Bildschirmlesern.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Der Ersatzinhalt sollte nützlichen alternativen Inhalt zum Canvas-Inhalt bieten. Beispielsweise, wenn Sie ein sich ständig aktualisierendes Diagramm von Aktienpreisen darstellen, könnte der Ersatzinhalt ein statisches Bild des neuesten Aktiendiagramms sein, mit `alt`-Text, der die Preise im Text beschreibt oder eine Liste von Links zu einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalte sind für Bildschirmleser nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attributs direkt dem Canvas-Element selbst hinzu oder fügen Sie Ersatzinhalt innerhalb der öffnenden und schließenden `<canvas>` Tags ein. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelter Ersatzinhalt ist es.

### Erstellen und Anpassen unseres Canvas

Fangen wir damit an, unser eigenes Canvas zu erstellen, auf dem wir zukünftige Experimente zeichnen.

1. Machen Sie zuerst eine lokale Kopie des Verzeichnisses [0_canvas_start](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/0_canvas_start). Es enthält drei Dateien:
   - "index.html"
   - "script.js"
   - "style.css"
2. Öffnen Sie "index.html" und fügen Sie den folgenden Code direkt unterhalb des öffnenden Tags {{htmlelement("body")}} ein:

   ```html
   <canvas class="myCanvas">
     <p>Add suitable fallback here.</p>
   </canvas>
   ```

   Wir haben dem `<canvas>` Element eine `class` hinzugefügt, damit es leichter ausgewählt werden kann, wenn wir mehrere Canvas auf der Seite haben, aber wir haben die `width` und `height` Attribute vorerst entfernt (Sie könnten sie wieder hinzufügen, wenn Sie wollen, aber wir werden sie mit JavaScript in einem späteren Abschnitt setzen). Canvas ohne explizite Breite und Höhe haben standardmäßig eine Breite von 300 Pixeln und eine Höhe von 150 Pixeln.

3. Öffnen Sie nun "script.js" und fügen Sie die folgenden JavaScript-Zeilen hinzu:

   ```js
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz zum Canvas in der `canvas` Konstante gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width` Eigenschaft des Canvas gleich mit [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Viewportbreite gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height` Eigenschaft des Canvas gleich mit [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Viewporthöhe gibt). So haben wir jetzt ein Canvas, das die gesamte Breite und Höhe des Browserfensters einnimmt!

   Sie werden auch sehen, dass wir Zuweisungen mit mehreren Gleichheitszeichen verketten — das ist in JavaScript erlaubt und eine gute Technik, wenn Sie mehrere Variablen alle dem gleichen Wert gleichsetzen wollen. Wir wollten die Canvas-Breite und -Höhe in den `width`/`height` Variablen leicht zugänglich machen, da sie nützliche Werte sind, die später verfügbar sein sollen (z. B. wenn Sie etwas genau in der Mitte der Breite des Canvas zeichnen wollen).

> [!NOTE]
> Sie sollten die Größe des Bildes im Allgemeinen mit HTML-Attributen oder DOM-Eigenschaften festlegen, wie oben erklärt. Sie könnten CSS verwenden, aber dann wird die Größenanpassung nach dem Rendern des Canvas durchgeführt, und genau wie bei jedem anderen Bild (das gerenderte Canvas ist nur ein Bild) könnte das Bild pixelig/verzerrt werden.

### Holen des Canvas-Kontextes und abschließende Einrichtung

Wir müssen noch eine letzte Sache erledigen, bevor wir unsere Canvas-Vorlage als fertig betrachten können. Um auf das Canvas zu zeichnen, müssen wir eine spezielle Referenz auf den Zeichenbereich erhalten, die als Kontext bezeichnet wird. Dies geschieht mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die für die grundlegende Verwendung eine einzelne Zeichenkette als Parameter annimmt, die den Typ des gewünschten Kontexts darstellt.

In diesem Fall wollen wir ein 2D-Canvas, also fügen Sie die folgende JavaScript-Zeile unterhalb der anderen in "script.js" hinzu:

```js
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextwerte, die Sie wählen könnten, sind `webgl` für WebGL, `webgl2` für WebGL 2, usw., aber diese benötigen wir in diesem Artikel nicht.

Das war's – unser Canvas ist jetzt bereit zum Zeichnen! Die Variable `ctx` enthält nun ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Objekt, und alle Zeichenoperationen auf dem Canvas beinhalten die Manipulation dieses Objekts.

Lassen Sie uns noch eine letzte Sache tun, bevor wir weitermachen. Wir färben den Hintergrund des Canvas schwarz, um Ihnen einen ersten Vorgeschmack auf die Canvas-API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript hinzu:

```js
ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mit der [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) Eigenschaft des Canvas (dies nimmt [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) genauso wie CSS-Eigenschaften) und zeichnen dann ein Rechteck, das den gesamten Bereich des Canvas mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) abdeckt (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, auf die Sie das Rechteck zeichnen wollen — wir haben Ihnen gesagt, dass diese `width` und `height` Variablen nützlich sein würden)!

OK, unsere Vorlage ist fertig und es ist Zeit, weiterzumachen.

## Grundlagen des 2D-Canvas

Wie oben erwähnt, werden alle Zeichenoperationen durch die Manipulation eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Objekts durchgeführt (in unserem Fall ist das `ctx`). Viele Operationen erfordern, dass Koordinaten angegeben werden, um genau festzulegen, wo etwas gezeichnet werden soll — die obere linke Ecke des Canvas ist Punkt (0, 0), die horizontale (x) Achse verläuft von links nach rechts, und die vertikale (y) Achse verläuft von oben nach unten.

![Gekacheltes Millimeterpapier mit kleinen Quadraten, das seine Fläche mit einem stahlblauen Quadrat in der Mitte bedeckt. Die obere linke Ecke des Canvas ist Punkt (0, 0) der Canvas x-Achse und y-Achse. Die horizontale (x) Achse verläuft von links nach rechts und bezeichnet die Breite, und die vertikale (y) Achse verläuft von oben nach unten und kennzeichnet die Höhe. Die obere linke Ecke des blauen Quadrats ist als x Einheiten von der y-Achse und y Einheiten von der x-Achse entfernt gekennzeichnet.](canvas_default_grid.png)

Das Zeichnen von Formen erfolgt in der Regel entweder über die Rechteckform als primitives Element oder indem eine Linie entlang eines bestimmten Pfades nachgezeichnet und dann die Form gefüllt wird. Unten zeigen wir, wie beides gemacht wird.

### Einfache Rechtecke

Fangen wir mit einigen einfachen Rechtecken an.

1. Machen Sie zuerst eine Kopie Ihrer neu codierten Canvas-Vorlage (oder eine lokale Kopie des Verzeichnisses [1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template), wenn Sie die obigen Schritte nicht befolgt haben).
2. Fügen Sie als nächstes die folgenden Zeilen am Ende Ihres JavaScript hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 0)";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie speichern und aktualisieren, sollten Sie sehen, dass ein rotes Rechteck auf Ihrem Canvas erschienen ist. Seine obere linke Ecke befindet sich 50 Pixel entfernt von der oberen und linken Kante des Canvas (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch die dritte und vierte Parameter definiert).

3. Lassen Sie uns ein weiteres Rechteck hinzufügen, dieses Mal ein grünes. Fügen Sie das folgende am Ende Ihres JavaScript hinzu:

   ```js
   ctx.fillStyle = "rgb(0 255 0)";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren Sie, und Sie werden Ihr neues Rechteck sehen. Dies bringt einen wichtigen Punkt zur Sprache: Grafikoperationen wie das Zeichnen von Rechtecken, Linien usw. werden in der Reihenfolge durchgeführt, in der sie auftreten. Stellen Sie sich das wie das Streichen einer Wand vor, wobei jede Farbschicht die darunter liegenden überlappt und möglicherweise sogar verdeckt. Sie können nichts tun, um dies zu ändern, daher müssen Sie sorgfältig über die Reihenfolge nachdenken, in der Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, z. B. indem Sie `rgb()` verwenden. Der "Alphakanal" definiert die Menge der Transparenz, die die Farbe hat. Je höher ihr Wert ist, desto mehr verdeckt sie, was dahinter liegt. Fügen Sie das folgende zu Ihrem Code hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, einige weitere Rechtecke Ihrer eigenen Wahl zu zeichnen; haben Sie Spaß!

### Striche und Linienbreiten

Bisher haben wir uns das Zeichnen gefüllter Rechtecke angesehen, aber Sie können auch Rechtecke zeichnen, die nur Umrisse sind (in der Grafikdesign-Sprache als **Strokes** bezeichnet). Um die gewünschte Farbe für Ihren Stroke festzulegen, verwenden Sie die [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) Eigenschaft; das Zeichnen eines Stroke-Rechtecks erfolgt mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Fügen Sie das folgende dem vorherigen Beispiel hinzu, wieder unter den vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "rgb(255 255 255)";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Strokes beträgt 1 Pixel; Sie können den Wert der [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth) Eigenschaft anpassen, um dies zu ändern (sie nimmt eine Zahl an, die die Anzahl der Pixel angibt, die der Stroke breit ist). Fügen Sie die folgende Zeile zwischen den vorherigen beiden Zeilen hinzu:

   ```js
   ctx.lineWidth = 5;
   ```

Nun sollten Sie sehen, dass Ihr weißer Umriss viel dicker geworden ist! Das war's für den Moment. An dieser Stelle sollte Ihr Beispiel so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles/index.html", '100%', 250)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [2_canvas_rectangles](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles) verfügbar.

### Zeichnen von Pfaden

Wenn Sie etwas komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Im Grunde bedeutet dies, dass Sie Code schreiben, um genau festzulegen, welchen Pfad der Stift auf Ihrem Canvas zurücklegen sollte, um die Form zu umreißen, die Sie zeichnen möchten. Canvas enthält Funktionen zum Zeichnen gerader Linien, Kreise, Bézier-Kurven und mehr.

Lassen Sie uns den Abschnitt beginnen, indem wir eine frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) erstellen, in der wir das neue Beispiel zeichnen.

Wir werden einige gemeinsame Methoden und Eigenschaften über alle unten stehenden Abschnitte hinweg verwenden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — beginnt mit dem Zeichnen eines Pfades an dem Punkt, an dem sich der Stift gerade auf dem Canvas befindet. Auf einem neuen Canvas beginnt der Stift bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — bewegt den Stift zu einem anderen Punkt auf dem Canvas, ohne die Linie aufzuzeichnen oder zu zeichnen; der Stift "springt" zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — zeichnet eine gefüllte Form, indem der bisher nachgezeichnete Pfad gefüllt wird.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — zeichnet eine Umrissform, indem ein Stroke entlang des bisher gezeichneten Pfades gezogen wird.
- Sie können auch Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` mit Pfaden ebenso wie mit Rechtecken verwenden.

Ein typischer, einfacher Pfadzeichenvorgang würde ungefähr so aussehen:

```js
ctx.fillStyle = "rgb(255 0 0)";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Linien zeichnen

Lassen Sie uns ein gleichseitiges Dreieck auf das Canvas zeichnen.

1. Fügen Sie zuerst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Dies konvertiert Gradwerte in Bogenmaß, was nützlich ist, da immer, wenn Sie einen Winkelwert in JavaScript angeben müssen, dieser fast immer im Bogenmaß sein wird, während Menschen normalerweise in Grad denken.

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Beginnen Sie als nächstes Ihren Pfad, indem Sie das Folgende unter Ihrer vorherigen Ergänzung hinzufügen; hier setzen wir eine Farbe für unser Dreieck, starten mit dem Zeichnen eines Pfades und bewegen dann den Stift zu (50, 50), ohne etwas zu zeichnen. Dort beginnen wir unser Dreieck zu zeichnen.

   ```js
   ctx.fillStyle = "rgb(255 0 0)";
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

   Zuerst zeichnen wir eine Linie zu (150, 50) — unser Pfad verläuft jetzt 100 Pixel nach rechts entlang der x-Achse.

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks, indem wir ein wenig einfache Trigonometrie verwenden. Im Grunde genommen zeichnen wir das Dreieck nach unten zeigend. Die Winkel in einem gleichseitigen Dreieck sind immer 60 Grad; um die Höhe zu berechnen, können wir es mitten durch in zwei rechtwinklige Dreiecke teilen, die jeweils die Winkel 90 Grad, 60 Grad und 30 Grad haben werden. Bezüglich der Seiten:

   - Die längste Seite wird **Hypotenuse** genannt
   - Die Seite neben dem 60-Grad-Winkel wird **Ankathete** genannt — die wir wissen, beträgt 50 Pixel, da sie die Hälfte der Linie ist, die wir gerade gezeichnet haben.
   - Die Seite gegenüber dem 60-Grad-Winkel wird **Gegenkathete** genannt, was die Höhe des Dreiecks ist, die wir berechnen möchten.

   ![Ein nach unten zeigendes gleichseitiges Dreieck mit beschrifteten Winkeln und Seiten. Die horizontale Linie oben ist als 'Ankathete' beschriftet. Eine senkrechte gestrichelte Linie, von der Mitte der Ankathete, beschriftet 'Gegenkathete', teilt das Dreieck und bildet zwei gleiche rechtwinklige Dreiecke. Die rechte Seite des Dreiecks ist als Hypotenuse gekennzeichnet, da es die Hypotenuse des rechtwinkligen Dreiecks ist, das von der Linie 'Gegenkathete' gebildet wird.](trigonometry.png)

   Eines der grundlegenden trigonometrischen Formeln besagt, dass die Länge der Ankathete multipliziert mit dem Tangens des Winkels gleich der Gegenkathete ist, daher ergibt sich `50 * Math.tan(degToRad(60))`. Wir verwenden unsere `degToRad()` Funktion, um 60 Grad in Bogenmaß zu konvertieren, da {{jsxref("Math.tan()")}} einen Eingabewert im Bogenmaß erwartet.

4. Mit der berechneten Höhe zeichnen wir eine weitere Linie nach `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss genau in der Mitte der vorherigen beiden festgelegten X-Werte sein. Der Y-Wert hingegen muss 50 plus die Höhe des Dreiecks sein, da wir wissen, dass die Oberseite des Dreiecks 50 Pixel vom oberen Rand des Canvas entfernt ist.
5. Die nächste Linie zeichnet eine Linie zurück zum Startpunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form zu füllen.

#### Kreise zeichnen

Lassen Sie uns nun sehen, wie man einen Kreis in das Canvas zeichnet. Dies wird mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) erreicht, die einen vollständigen oder teilweise Kreis an einer angegebenen Position zeichnet.

1. Fügen Sie einen Bogen zu Ihrem Canvas hinzu – fügen Sie das folgende am Ende Ihres Codes hinzu:

   ```js
   ctx.fillStyle = "rgb(0 0 255)";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` nimmt sechs Parameter an. Die ersten beiden spezifizieren die Position des Mittelpunkts des Bogens (X und Y, entsprechend). Der dritte ist der Radius des Kreises, der vierte und fünfte sind die Start- und Endwinkel, bei denen der Kreis gezeichnet werden soll (so geraten 0 und 360 Grad geben uns einen vollständigen Kreis), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn (entgegen dem Uhrzeigersinn) oder im Uhrzeigersinn gezeichnet werden soll (`false` ist im Uhrzeigersinn).

   > [!NOTE]
   > 0 Grad ist horizontal nach rechts.

2. Probieren Sie, einen weiteren Bogen hinzuzufügen:

   ```js
   ctx.fillStyle = "yellow";
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   Das Muster hier ist sehr ähnlich, aber mit zwei Unterschieden:

   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird, was bedeutet, dass auch wenn der Bogen als beginnend bei -45 Grad und endend bei 45 Grad spezifiziert wird, wir den Bogen über die 270 Grad hinweg zeichnen, die nicht innerhalb dieses Abschnitts liegen. Wenn Sie `true` in `false` ändern und dann den Code erneut ausführen würden, würde nur der 90 Grad Sektor des Kreises gezeichnet.
   - Vor dem Aufruf von `fill()`, zeichnen wir eine Linie zum Mittelpunkt des Kreises. Dies bedeutet, dass wir den hübschen, Pac-Man-artigen Ausschnitt dargestellt bekommen. Wenn Sie diese Linie entfernen würden (probieren Sie es!), dann würden Sie nach dem Ausführen des Codes nur einen Abschnitt des Kreises, der zwischen dem Startpunkt und dem Endpunkt des Bogens abgeschnitten ist, erhalten. Dies illustriert einen weiteren wichtigen Punkt des Canvas – wenn Sie versuchen, einen nicht abgeschlossenen Pfad zu füllen (d.h. einen, der nicht geschlossen ist), füllt der Browser eine gerade Linie zwischen dem Start- und Endpunkt ein und füllt ihn dann aus.

Das war's fürs Erste; Ihr finales Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/3_canvas_paths/index.html", '100%', 200)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [3_canvas_paths](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/3_canvas_paths) verfügbar.

> [!NOTE]
> Um mehr über fortgeschrittene Pfadzeichenfunktionen wie Bézierkurven zu erfahren, schauen Sie sich unser [Zeichnen von Formen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) Tutorial an.

### Text

Canvas verfügt auch über Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz erkunden. Beginnen Sie, indem Sie eine weitere frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) erstellen, in der Sie das neue Beispiel zeichnen.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnet Umriss (Stroke) Text.

Beide nehmen bei ihrer grundlegenden Anwendung drei Eigenschaften: die Textzeichenfolge, die gezeichnet werden soll, und die X- und Y-Koordinaten des Punktes, an dem der Text zu zeichnen beginnt. Dies entspricht der **unteren linken** Ecke des **Textfeldes** (wörtlich, dem Feld, das den Text umgibt, den Sie zeichnen), was Sie verwirren könnte, da andere Zeichenoperationen meistens von der oberen linken Ecke ausgehen — denken Sie daran.

Es gibt auch eine Reihe von Eigenschaften, die zur Steuerung des Text-Renderings helfen, wie [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), mit der Sie Schriftfamilie, -größe usw. angeben können. Es nimmt als Wert die gleiche Syntax wie die CSS {{cssxref("font")}} Eigenschaft.

Canvas-Inhalte sind für Bildschirmleser nicht zugänglich. Text, der auf das Canvas gemalt wird, ist nicht im DOM verfügbar, muss jedoch zugänglich gemacht werden. In diesem Beispiel wird der Text als Wert für `aria-label` aufgenommen.

Versuchen Sie, den folgenden Block am Ende Ihres JavaScript hinzuzufügen:

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

Hier zeichnen wir zwei Zeilen Text, eine mit Umriss und die andere mit Füllung. Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/4_canvas_text/index.html", '100%', 180)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [4_canvas_text](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/4_canvas_text) verfügbar.

Haben Sie Spaß und sehen Sie, was Sie entwickeln können! Sie finden mehr Informationen über die Optionen für Canvas-Text im [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Zeichnen von Bildern auf das Canvas

Es ist möglich, externe Bilder auf Ihr Canvas zu rendern. Diese können einfache Bilder sein, Frames von Videos oder Inhalte anderer Canvas. Im Moment werden wir uns nur den Fall ansehen, einige einfache Bilder auf unserem Canvas zu verwenden.

1. Machen Sie wie zuvor eine weitere frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)), in der Sie das neue Beispiel zeichnen.

   Bilder werden mit der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf das Canvas gezeichnet. Die einfachste Version nimmt drei Parameter — eine Referenz auf das Bild, das Sie rendern möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Lassen Sie uns mit der Besorgung einer Bildquelle, die wir in unser Canvas einbetten, beginnen. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript hinzu:

   ```js
   const image = new Image();
   image.src = "firefox.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Objekt mit dem Konstruktor [`Image()`](/de/docs/Web/API/HTMLImageElement/Image). Das zurückgegebene Objekt ist der gleiche Typ wie der, der zurückgegeben wird, wenn Sie eine Referenz auf ein vorhandenes {{htmlelement("img")}} Element erhalten. Wir setzen dann dessen [`src`](/de/docs/Web/HTML/Element/img#src) Attribut auf unser Firefox-Logo-Bild. Zu diesem Zeitpunkt beginnt der Browser, das Bild zu laden.

3. Wir könnten nun versuchen, das Bild mit `drawImage()` einzubetten, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, sonst wird der Code fehlschlagen. Wir können dies mit dem `load` Ereignis erreichen, das nur ausgelöst wird, wenn das Bild vollständig geladen wurde. Fügen Sie den folgenden Block unter dem vorherigen hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie jetzt Ihr Beispiel im Browser laden, sollten Sie sehen, dass das Bild im Canvas eingebettet ist.

4. Aber es gibt mehr! Was ist, wenn wir nur einen Teil des Bildes anzeigen oder es in der Größe ändern möchten? Wir können beides mit der komplexeren Version von `drawImage()` erreichen. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile so:

   ```js
   ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
   ```

   - Der erste Parameter ist die Bildreferenz, wie zuvor.
   - Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links von dem ersten Parameter oder über dem zweiten wird gezeichnet.
   - Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem ursprünglichen Bild, das wir geladen haben, ausschneiden möchten.
   - Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Bereichs des Bildes zeichnen möchten, relativ zur oberen linken Ecke des Canvas.
   - Parameter 8 und 9 definieren die Breite und Höhe, um den ausgeschnittenen Bereich des Bildes zu zeichnen. In diesem Fall haben wir die gleichen Dimensionen wie der ursprüngliche Ausschnitt angegeben, aber Sie könnten es in der Größe ändern, indem Sie andere Werte angeben.

5. Wenn das Bild bedeutend aktualisiert wird, muss auch die {{Glossary("accessible_description", "zugängliche Beschreibung")}} aktualisiert werden.

   ```js
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/5_canvas_images/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [5_canvas_images](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/5_canvas_images) verfügbar.

## Schleifen und Animationen

Wir haben bisher nur sehr grundlegende Verwendungen von 2D-Canvas behandelt, aber wirklich werden Sie die volle Leistungsfähigkeit von Canvas nicht erleben, wenn Sie es nicht in irgendeiner Weise aktualisieren oder animieren. Schließlich stellt Canvas Skriptable Bilder bereit! Wenn Sie nichts ändern werden, könnten Sie statische Bilder verwenden und sich die ganze Arbeit sparen.

### Erstellen einer Schleife

Mit Schleifen in Canvas zu spielen, macht ziemlich Spaß — Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) (oder einer anderen Art von) Schleife genauso ausführen wie jeden anderen JavaScript-Code.

Lassen Sie uns ein Beispiel aufbauen.

1. Machen Sie eine weitere frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie es in Ihrem Code-Editor.
2. Fügen Sie die folgende Zeile am Ende Ihres JavaScript hinzu. Dies enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

   Dies führt dazu, dass der Koordinatenursprung (0, 0) in die Mitte des Canvas verlegt wird, anstatt in der oberen linken Ecke zu bleiben. Dies ist in vielen Situationen sehr nützlich, z. B. in dieser, wo wir unser Design relativ zum Zentrum des Canvas zeichnen möchten.

3. Fügen Sie jetzt den folgenden Code am Ende des JavaScript hinzu:

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

   Hier implementieren wir die gleiche `degToRad()`-Funktion, die wir im obigen Dreieckbeispiel gesehen haben, eine `rand()`-Funktion, die eine Zufallszahl zwischen vorgegebenen unteren und oberen Grenzen zurückgibt, `length` und `moveOffset` Variablen (die wir später noch besser kennenlernen werden), und eine leere `for`-Schleife.

4. Die Idee hier ist, dass wir innerhalb der `for`-Schleife etwas auf das Canvas zeichnen und es jedes Mal iterativ weiterentwickeln, um etwas Interessantes zu schaffen. Fügen Sie den folgenden Code innerhalb Ihrer `for`-Schleife hinzu:

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

   Bei jedem Durchlauf

   - setzen wir das `fillStyle` auf einen leicht transparenten lila Farbton, der jedes Mal basierend auf dem Wert von `length` ändert. Wie Sie später sehen werden, wird der Wert von `length` bei jedem Durchlauf kleiner, sodass der Effekt hier ist, dass die Farbe mit jedem gezeichneten Dreieck etwas heller wird.
   - beginnen wir den Pfad.
   - Bewegen Sie den Stift zu einer Koordinate von `(moveOffset, moveOffset)`; Diese Variable definiert, wie weit wir uns jedes Mal bewegen möchten, wenn wir ein neues Dreieck zeichnen.
   - Verarbeiten Sie `moveOffset` und [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), um die Leinwand zu drehen. Wir drehen es um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das ist es! Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop/index.html", '100%', 550)}}

An diesem Punkt möchten wir Sie ermutigen, mit dem Beispiel zu experimentieren und es sich zu eigen zu machen! Zum Beispiel:

- Zeichnen Sie Rechtecke oder Bögen anstelle von Dreiecken oder betten Sie sogar Bilder ein.
- Spielen Sie mit den Werten `length` und `moveOffset`.
- Führen Sie Zufallszahlen ein, indem Sie die oben enthaltene, aber unbenutzte `rand()`-Funktion verwenden.

> [!NOTE]
> Der fertige Code ist auf GitHub als [6_canvas_for_loop](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop) verfügbar.

### Animations

Das oben erstellte Schleifenbeispiel war zwar unterhaltsam, aber Sie benötigen wirklich eine konstante Schleife, die immer wieder läuft, um ernsthafte Canvas-Anwendungen (z. B. Spiele und Echtzeit-Visualisierungen) zu betreiben. Wenn Sie Ihr Canvas als einen Film betrachten, möchten Sie wirklich, dass die Anzeige bei jedem Frame aktualisiert wird, um den aktualisierten Blick zu zeigen, mit einer idealen Bildwiederholrate von 60 Bildern pro Sekunde, damit die Bewegung für das menschliche Auge schön und glatt erscheint.

Es gibt einige JavaScript-Funktionen, mit denen Sie Funktionen wiederholt pro Sekunde laufen lassen können; die beste für unsere Zwecke hier ist [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Diese Funktion nimmt einen Parameter — den Namen der Funktion, die Sie für jeden Frame ausführen möchten. Das nächste Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion die neue Aktualisierung Ihrer Animation zeichnet, dann `requestAnimationFrame()` erneut kurz vor dem Ende der Funktion aufruft, wird die Animationsschleife weiterhin laufen. Die Schleife endet, wenn Sie `requestAnimationFrame()` nicht mehr aufrufen oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) nach dem Aufruf von `requestAnimationFrame()` aber vor dem Aufrufen des Frames aufrufen.

> [!NOTE]
> Es ist gute Praxis, `cancelAnimationFrame()` aus Ihrem Hauptcode aufzurufen, wenn Sie mit der Animation fertig sind, um sicherzustellen, dass keine Aktualisierungen noch ausgeführt werden.

Der Browser arbeitet komplexe Details wie das Animation mit konstanter Geschwindigkeit auszuführen aus, und nicht Ressourcen zu verschwenden bei der Animation von Dingen, die nicht gesehen werden können.

Um zu sehen, wie es funktioniert, lassen Sie uns erneut einen kurzen Blick auf unser Bouncing Balls Beispiel werfen ([sehen Sie es live](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html), und auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/oojs/bouncing-balls)). Der Code für die Schleife, die alles in Bewegung hält, sieht so aus:

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

Wir führen die `loop()` Funktion einmal am Ende des Codes aus, um den Zyklus zu starten, was den ersten Animations-Frame zeichnet; die `loop()` Funktion übernimmt dann die Kontrolle über `requestAnimationFrame(loop)`, um den nächsten Frame der Animation erneut aufzuführen.

Beachten Sie, dass wir bei jedem Frame das Canvas vollständig löschen und alles neu zeichnen. Für jede anwesende Kugel zeichnen wir sie, aktualiseren ihre Position und überprüfen, ob sie mit anderen Kugeln kollidiert. Sobald Sie eine Grafik auf ein Canvas gezeichnet haben, gibt es keine Möglichkeit, diese Grafik individuell zu manipulieren, wie Sie es mit DOM-Elementen können. Sie können jede Kugel nicht einfach auf dem Canvas bewegen, weil, sobald sie gezeichnet ist, ist sie Teil des Canvas und ist kein individuelles zugängliches Element oder Objekt. Stattdessen müssen Sie löschen und neu zeichnen, entweder indem Sie den gesamten Frame löschen und alles neu zeichnen, oder indem Sie einen Code haben, der genau weiss, welche Teile gelöscht und nur das minimal notwendige Gebiet des Canvas neu gezeichnet werden muss.

Die Optimierung der Animation von Grafiken ist eine ganze Spezialisierung des Programmierens, mit vielen cleveren Techniken verfügbar. Diese gehen jedoch über das hinaus, was wir für unser Beispiel brauchen!

Im Allgemeinen beinhaltet der Prozess einer Animation im Canvas die folgenden Schritte:

1. Löschen Sie die Inhalte des Canvas (z.B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Speichern Sie den Zustand (falls erforderlich) mithilfe von [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) — dies ist nützlich, wenn Sie Einstellungen auf dem Canvas, die Sie vor dem Fortfahren aktualisiert haben, speichern möchten, was für fortgeschrittenere Anwendungen nützlich ist.
3. Zeichnen Sie die Grafiken, die Sie animierten.
4. Stellen Sie die Einstellungen, die Sie in Schritt 2 gespeichert haben, wieder her, mithilfe von [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
5. Rufen Sie `requestAnimationFrame()` auf, um das Zeichnen des nächsten Frames der Animation zu planen.

> [!NOTE]
> Wir werden hier nicht auf `save()` und `restore()` eingehen, aber sie sind in unserem [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations) Tutorial (und denjenigen, die es folgen) gut erklärt.

### Eine einfache Charakteranimation

Lassen Sie uns jetzt unsere eigene einfache Animation erstellen – wir lassen einen Charakter aus einem bestimmten sehr bekannten Retro-Computerspiel über den Bildschirm laufen.

1. Machen Sie eine weitere frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie sie in Ihrem Code-Editor.

2. Aktualisieren Sie das innere HTML, um das Bild widerzuspiegeln:

   ```html
   <canvas class="myCanvas">
     <p>A man walking.</p>
   </canvas>
   ```

3. Am Ende des JavaScript, fügen Sie die folgende Zeile hinzu, um erneut den Koordinatenursprung in die Mitte des Canvas zu verlegen:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

4. Lassen Sie uns nun ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Objekt erstellen, sein [`src`](/de/docs/Web/HTML/Element/img#src) auf das Bild setzen, das wir laden möchten, und ein `onload` Ereignishandler hinzufügen, der die `draw()` Funktion auslöst, wenn das Bild geladen ist:

   ```js
   const image = new Image();
   image.src = "walk-right.png";
   image.onload = draw;
   ```

5. Nun fügen wir einige Variablen hinzu, um die Position, an der der Sprite auf dem Bildschirm gerendert werden soll, und die Spritenummer, die wir anzeigen möchten, zu überwachen.

   ```js
   let sprite = 0;
   let posX = 0;
   ```

   Lassen Sie uns das Spritesheet-Bild erklären (das wir respektvoll von Mike Thomas' [Walking cycle using CSS animation](https://codepen.io/mikethomas/pen/kQjKLW) CodePen geliehen haben). Das Bild sieht so aus:

   ![Ein Sprite-Sheet mit sechs Sprite-Bildern eines pixeligen Charakters, der einer gehenden Person von rechts gesehen bei verschiedenen Momenten eines einzelnen Schritts nachempfunden ist. Der Charakter trägt ein weißes Hemd mit himmelblauen Knöpfen, schwarze Hosen und schwarze Schuhe. Jede Sprite ist 102 Pixel breit und 148 Pixel hoch.](walk-right.png)

   Es enthält sechs Sprites, die die gesamte Bewegung des Gehens ausmachen — jeder ist 102 Pixel breit und 148 Pixel hoch. Um jeden Sprite sauber darzustellen, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild aus dem Spritesheet auszuschneiden und nur diesen Teil zu zeichnen, genauso wie wir es oben mit dem Firefox-Logo gemacht haben. Die X-Koordinate des Ausschnitts muss ein Vielfaches von 102 sein, und die Y-Koordinate wird immer 0 sein. Die Ausschnittgröße wird immer 102 mal 148 Pixel sein.

6. Lassen Sie uns nun eine leere `draw()` Funktion am Ende des Codes einfügen, bereit zum Ausfüllen mit einigen Codes:

   ```js
   function draw() {}
   ```

7. Der Rest des Codes in diesem Abschnitt geht in `draw()`. Zuerst fügen wir die folgende Zeile hinzu, die das Canvas löscht, um jeden Frame auf das Zeichnen vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width/2), -(height/2)` angeben müssen, weil wir die Ursprungsposition als `width/2, height/2` zuvor angegeben haben.

   ```js
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

8. Als Nächstes zeichnen wir unser Bild mit drawImage — der 9-Parameter-Version. Fügen Sie das Folgende hinzu:

   ```js
   ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);
   ```

   Wie Sie sehen können:

   - Wir geben `image` als das Bild an, das eingebettet werden soll.
   - Parameter 2 und 3 definieren die obere linke Ecke des Ausschnitts, der aus dem Quellbild ausgeschnitten werden soll, wobei der X-Wert `sprite` multipliziert mit 102 ist (wobei `sprite` die Spritenummer zwischen 0 und 5 ist) und der Y-Wert immer 0.
   - Parameter 4 und 5 definieren die Größe des Ausschnitts, der ausgeschnitten werden soll — 102 Pixel mal 148 Pixel.
   - Parameter 6 und 7 definieren die obere linke Ecke des Kastens, in den der Ausschnitt auf dem Canvas gezeichnet werden soll — die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichenposition durch Ändern des Werts von `posX` ändern können.
   - Parameter 8 und 9 definieren die Größe des Bildes auf dem Canvas. Wir wollen es in seiner ursprünglichen Größe beibehalten, daher geben wir 102 und 148 als Breite und Höhe an.

9. Jetzt ändern wir den `sprite` Wert nach jedem Zeichnen – nun ja, nach einigen von ihnen. Fügen Sie den folgenden Block am Ende der `draw()` Funktion hinzu:

   ```js
   if (posX % 13 === 0) {
     if (sprite === 5) {
       sprite = 0;
     } else {
       sprite++;
     }
   }
   ```

   Wir umschließen den gesamten Block mit `if (posX % 13 === 0) { }`. Wir verwenden den Modulo-Operator (`%`) (auch bekannt als [Remainder Operator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu überprüfen, ob der `posX`-Wert genau durch 13 ohne Rest geteilt werden kann. Wenn ja, gehen wir zum nächsten Sprite über, indem wir `sprite` inkrementieren (nachdem wir mit Sprite #5 fertig sind, wickeln wir wieder zurück auf 0). Das bedeutet effektiv, dass wir das Sprite nur bei jedem 13. Frame aktualisieren, also ungefähr 5 Frames pro Sekunde (`requestAnimationFrame()` ruft uns bei bis zu 60 Frames pro Sekunde auf, wenn möglich). Wir verlangsamen absichtlich die Frame-Rate, weil wir nur sechs Sprites zur Verfügung haben, und wenn wir eines jede 60. Sekunde anzeigen, wird sich unser Charakter viel zu schnell bewegen!

   Innerhalb des äußeren Blocks verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Anweisung, um zu überprüfen, ob der `sprite` Wert bei 5 ist (also das letzte Sprite, denn die Spritenummern laufen von 0 bis 5). Wenn wir das letzte Sprite anzeigen, setzen wir `sprite` wieder auf 0 zurück; andernfalls inkrementieren wir es einfach um 1.

10. Als nächstes müssen wir herausfinden, wie der `posX` Wert bei jedem Frame geändert wird — fügen Sie den folgenden Code-Block direkt unter Ihrem vorherigen Code hinzu.

    ```js
    if (posX > width / 2) {
      let newStartPos = -(width / 2 + 102);
      posX = Math.ceil(newStartPos);
      console.log(posX);
    } else {
      posX += 2;
    }
    ```

    Wir verwenden eine weitere `if...else` Anweisung, um zu überprüfen, ob der Wert von `posX` größer als `width/2` geworden ist, was bedeutet, dass unser Charakter vom rechten Bildschirmrand gelaufen ist. Wenn ja, berechnen wir eine Position, die den Charakter direkt links vom linken Bildschirmrand platzieren würde.

    Wenn unser Charakter den Bildschirmrand noch nicht verlassen hat, inkrementieren wir `posX` um 2. Das wird ihn dazu bringen, sich beim nächsten Mal, wenn wir ihn zeichnen, ein kleines Stückchen nach rechts zu bewegen.

11. Schließlich müssen wir die Animationsschleife laufen lassen, indem wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()` Funktion aufrufen:

    ```js
    window.requestAnimationFrame(draw);
    ```

Das war's! Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [7_canvas_walking_animation](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation) verfügbar.

### Eine einfache Zeichenanwendung

Als letztes Animationsbeispiel möchten wir Ihnen eine ganz einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben (wie Mausbewegung in diesem Fall) kombiniert werden kann. Wir werden Sie nicht durch das Erstellen dieser Anwendung führen lassen; wir werden einfach die interessantesten Teile des Codes erkunden.

Das Beispiel kann auf GitHub als [8_canvas_drawing_app](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app) gefunden werden, und Sie können es unten live ausprobieren:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app/index.html", '100%', 600)}}

Lassen Sie uns die interessantesten Teile betrachten. Zuallererst halten wir die X- und Y-Koordinaten der Maus und ob diese gedrückt wird oder nicht mit drei Variablen: `curX`, `curY` und `pressed` fest. Wenn sich die Maus bewegt, rufen wir eine als `onmousemove` Ereignishandler festgelegte Funktion auf, die die aktuellen X- und Y-Werte erfasst. Wir verwenden auch `onmousedown` und `onmouseup` Ereignishandler, um den Wert von `pressed` auf `true` zu setzen, wenn die Maustaste gedrückt wird, und wieder auf `false`, wenn sie losgelassen wird.

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

Wenn die Schaltfläche "Canvas löschen" gedrückt wird, führen wir eine einfache Funktion aus, die das gesamte Canvas wieder auf schwarz zurücksetzt, genauso wie wir es zuvor gesehen haben:

```js
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal ziemlich einfach — wenn `pressed` `true` ist, zeichnen wir einen Kreis mit einer Füllfarbe gleich dem Wert im Farb-Picker und einem Radius gleich dem im Bereichseingabefeld festgelegten Wert. Wir müssen den Kreis 85 Pixel über dem Punkt, von dem wir es gemessen haben, zeichnen, weil die vertikale Messung von oben der Ansicht genommen wird, wir aber den Kreis relativ zur Oberseite des Canvas zeichnen, die unterhalb der 85 Pixel hohen Werkzeugleiste beginnt. Wenn wir es nur mit `curY` als Y-Koordinate zeichnen würden, würde es 85 Pixel tiefer als die Mausposition erscheinen.

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

Alle {{htmlelement("input")}} Typen sind gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, fällt er auf ein einfaches Textfeld zurück.

## WebGL

Es ist nun an der Zeit, sich von 2D zu verabschieden und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalte werden mit der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert, die eine völlig separate API von der 2D-Canvas-API ist, obwohl beide auf {{htmlelement("canvas")}} Elementen rendern.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht es Ihnen, direkt mit der {{Glossary("GPU", "GPU")}} des Computers zu kommunizieren. Daher ist das Schreiben von reinem WebGL näher an Programmiersprachen auf niedrigem Niveau wie C++ als an regulärem JavaScript; es ist ziemlich komplex, aber unglaublich leistungsfähig.

### Verwendung einer Bibliothek

Aufgrund seiner Komplexität schreiben die meisten Leute 3D-Grafikcode mit einer Drittanbieter-JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten davon funktionieren ähnlich, indem sie Funktionen zum Erstellen von primitiven und benutzerdefinierten Formen bereitstellen, die Blickkameras und Beleuchtung positionieren, Flächen mit Texturen bedecken und mehr. Sie übernehmen das WebGL für Sie und lassen Sie auf einer höheren Ebene arbeiten.

Ja, die Verwendung einer dieser bedeutet das Lernen einer weiteren neuen API (in diesem Fall einer Drittanbieter-API), aber sie sind viel einfacher als das Codieren von reinem WebGL.

### Reproduktion unseres Würfels

Lassen Sie uns ein Beispiel betrachten, wie man etwas mit einer WebGL-Bibliothek erstellt. Wir entscheiden uns für [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eines der beliebtesten ist. In diesem Tutorial erstellen wir den dreidimensionalen drehenden Würfel, den wir zuvor gesehen haben.

1. Machen Sie zuerst einen lokalen Kopie von [threejs-cube/index.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/index.html) in einem neuen Ordner, speichern Sie dann eine Kopie von [metal003.png](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/metal003.png) im selben Ordner. Dies ist das Bild, das wir später als Oberflächentextur für den Würfel verwenden werden.
2. Erstellen Sie als Nächstes eine neue Datei namens `script.js`, wiederum im selben Ordner wie zuvor.
3. Als nächstes müssen Sie die Three.js Bibliothek installiert haben. Sie können die Umgebungssetup-Schritte beschrieben in [Building up a basic demo with Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) verfolgen, damit Three.js wie erwartet funktioniert.
4. Jetzt haben wir `three.js` an unsere Seite angehängt, wir können mit dem Schreiben von JavaScript anfangen, das es in `script.js` verwendet. Lassen Sie uns mit dem Erstellen einer neuen Szene beginnen — fügen Sie Folgendes in Ihre `script.js` Datei ein:

   ```js
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene) Konstruktor erstellt eine neue Szene, die die gesamte 3D-Welt darstellt, die wir anzeigen möchten.

5. Als nächstes brauchen wir eine **Kamera**, damit wir die Szene sehen können. In 3D-Bilder-Begriffen stellt die Kamera eine Zuschauerposition in der Welt dar. Um eine Kamera zu erstellen, fügen Sie die folgenden Zeilen als Nächstes hinzu:

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

   - Das Sichtfeld: Wie groß ist der Bereich vor der Kamera, der auf dem Bildschirm sichtbar sein soll, in Grad.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: In der Regel ist dies das Verhältnis der Breite der Szene geteilt durch die Höhe der Szene. Die Verwendung eines anderen Wertes verzerrt die Szene (was möglicherweise das ist, was Sie wollen, aber normalerweise nicht).
   - Die nahe Ebene: Wie nah die Kamera den Objekten sein kann, bevor wir aufhören, sie auf dem Bildschirm zu rendern. Denken Sie daran, wie Sie, wenn Sie Ihre Fingerspitze näher und näher an den Raum zwischen Ihren Augen führen, irgendwann nicht mehr sehen.
   - Die ferne Ebene: Wie weit die Dinge von der Kamera entfernt sein können, bevor sie nicht mehr gerendert werden.

   Wir setzen auch die Position der Kamera auf 5 Entfernungseinheiten entlang der Z-Achse, die, wie in CSS, aus dem Bildschirm heraus zu Ihnen, dem Betrachter, verläuft.

6. Die dritte wichtige Zutat ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene, wie sie durch eine gegebene Kamera betrachtet wird, rendert. Wir erstellen nun einen mithilfe des [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer) Konstruktors, werden ihn jedoch erst später verwenden. Fügen Sie die nächsten Zeilen hinzu:

   ```js
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile legt die Größe fest, an der der Renderer die Ansicht der Kamera zeichnen wird, und die dritte Zeile fügt das vom Renderer erstellte {{htmlelement("canvas")}} Element an den {{htmlelement("body")}} des Dokuments an. Jetzt wird alles, was der Renderer zeichnet, in unserem Fenster angezeigt.

7. Als nächstes möchten wir den Würfel erstellen, den wir auf dem Canvas anzeigen. Fügen Sie den folgenden Code-Block am Ende Ihres JavaScript hinzu:

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

   Es gibt hier einiges mehr zu verstehen, also lassen Sie es uns in Stufen durchgehen:

   - Zuerst erstellen wir eine `cube` globale Variable, damit wir von überall im Code auf unseren Würfel zugreifen können.
   - Als Nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader) Objekt, rufen dann `load()` darauf auf. `load()` nimmt zwei Parameter in diesem Fall (obwohl es mehr nehmen kann): die Textur, die wir laden möchten (unser PNG), und eine Funktion, die ausgeführt wird, wenn die Textur geladen ist.
   - In dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture) Objektes um anzugeben, dass wir eine 2 x 2 Wiederholung des Bildes auf allen Seiten des Würfels gewickelt möchten. Danach erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry) Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial) Objekt und bringen sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) zusammen, um unseren Würfel zu erstellen. Ein Objekt erfordert typischerweise eine Geometrie (welche Form es hat) und ein Material (wie seine Oberfläche aussieht).
   - Zuguterletzt fügen wir unseren Würfel in die Szene ein, dann rufen wir unsere `draw()` Funktion auf, um die Animation zu beginnen.

8. Bevor wir zu `draw()` kommen, fügen wir ein paar Lichter in die Szene ein, um sie ein bisschen aufzupeppen; fügen Sie die folgenden Blocks als Nächstes hinzu:

   ```js
   const light = new THREE.AmbientLight("rgb(255 255 255)"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("rgb(255 255 255)");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight) Objekt ist eine Art weiches Licht, das die ganze Szene etwas aufhellt, ähnlich der Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight) Objekt hingegen ist ein gerichteter Lichtstrahl, eher wie eine Taschenlampe (oder tatsächlich ein Spotlicht).

9. Zuletzt, fügen wir unsere `draw()` Funktion am Ende des Codes hinzu:

   ```js
   function draw() {
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
     renderer.render(scene, camera);

     requestAnimationFrame(draw);
   }
   ```

   Das ist ziemlich intuitiv; bei jedem Frame drehen wir unseren Würfel leicht auf seinen X- und Y-Achsen, dann rendern wir die Szene, wie sie von unserer Kamera betrachtet wird, und schließlich rufen wir `requestAnimationFrame()` auf, um den nächsten Frame zu planen.

Lassen Sie uns einen weiteren kurzen Blick darauf werfen, wie das fertige Produkt aussehen sollte:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Sie können [den fertigen Code auf GitHub finden](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-cube).

> [!NOTE]
> In unserem GitHub-Repo können Sie auch ein weiteres interessantes 3D-Würfel-Beispiel finden — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dies verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Computer-Webcam zu nehmen und als Textur auf die Seite des Würfels zu projizieren!

## Zusammenfassung

An diesem Punkt sollten Sie eine nützliche Idee der Grundlagen der Grafikprogrammierung mit Canvas und WebGL haben und was Sie mit diesen APIs machen können, sowie eine gute Idee, wohin Sie sich für weitere Informationen wenden können. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklichen Grundlagen des Canvas abgedeckt — es gibt noch so viel mehr zu lernen! Die untenstehenden Artikel werden Sie weiterbringen.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorial-Serie, die erklärt, was Sie über 2D-Canvas wissen sollten, mit viel mehr Details, als hier behandelt wurden. Was zum Weiterlesen.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Serie, die die Grundlagen der rohen WebGL-Programmierung lehrt.
- [Erstellen eines einfachen Demos mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — Grundlegendes Three.js-Tutorial. Wir haben auch äquivalente Anleitungen für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spielentwicklung](/de/docs/Games) — die Startseite für die Web-Spieleentwicklung auf MDN. Hier sind einige wirklich nützliche Tutorials und Techniken verfügbar, die sich auf 2D- und 3D-Canvas beziehen — siehe die Menüoptionen Techniken und Tutorials.

## Beispiele

- [Violent theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API zur Generierung von Sound und Canvas zur Erstellung einer hübschen Visualisierung, die dazu passt.
- [Voice change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas zur Visualisierung von Echtzeitaudiodaten von der Web Audio API.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
