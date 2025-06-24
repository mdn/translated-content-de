---
title: Zeichnen von Grafiken
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsstarke Grafikprogrammierungstools, von der Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) Sprache über APIs zum Zeichnen auf HTML {{htmlelement("canvas")}}-Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in `canvas` sowie weitere Ressourcen, um Ihnen zu ermöglichen, mehr darüber zu lernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und zentrale API-Inhalte wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte und Anwendungsfälle, die durch die in dieser Lektion behandelten APIs ermöglicht werden.</li>
          <li>Grundlegende Syntax und Nutzung von <code>&lt;canvas&gt;</code> und zugehörigen APIs.</li>
          <li>Verwendung von Timern und <code>requestAnimationFrame()</code> zur Einrichtung von Animationsschleifen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Das Web war ursprünglich nur Text, was sehr langweilig war, daher wurden Bilder eingeführt — zuerst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}}, und [SVG](/de/docs/Web/SVG).

Das war jedoch immer noch nicht genug. Während Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden konnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) — da sie durch Markup dargestellt werden — gab es immer noch keine Möglichkeit, dasselbe für Bitmap-Bilder zu tun, und die verfügbaren Werkzeuge waren ziemlich begrenzt. Das Web hatte immer noch keine Möglichkeit, effektiv Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die normalerweise von niedrigeren Programmiersprachen wie C++ oder Java behandelt werden.

Die Situation begann sich zu verbessern, als Browser begannen, das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) im Jahr 2004 zu unterstützen. Wie Sie unten sehen werden, bietet `canvas` einige nützliche Werkzeuge zur Erstellung von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere in Kombination mit einigen anderen APIs, die die Webplattform bereitstellt. Es kann jedoch schwierig oder unmöglich sein, sie zugänglich zu machen.

Das folgende Beispiel zeigt eine einfache, auf 2D-Canvas basierende Animation von hüpfenden Bällen, die wir ursprünglich in unserem Modul [Einführung in JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) kennenlernten:

{{EmbedGHLiveSample("learning-area/javascript/oojs/bouncing-balls/index-finished.html", '100%', 500)}}

Um 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Dies wurde zu [WebGL](/de/docs/Web/API/WebGL_API), das bei Browserherstellern an Fahrt gewann und um 2009–2010 standardisiert wurde. WebGL ermöglicht es Ihnen, echte 3D-Grafiken in Ihrem Webbrowser zu erstellen; das untenstehende Beispiel zeigt einen einfachen rotierenden WebGL-Würfel:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Dieser Artikel wird sich hauptsächlich auf die 2D-Canvas konzentrieren, da roher WebGL-Code sehr komplex ist. Wir werden jedoch zeigen, wie man eine WebGL-Bibliothek verwendet, um einfacher eine 3D-Szene zu erstellen. Ein Tutorial zu rohem WebGL finden Sie anderweitig — siehe [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Aktives Lernen: Erste Schritte mit einem `<canvas>`

Wenn Sie eine 2D- _oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML {{htmlelement("canvas")}}-Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Dies ist so einfach, wie das Element auf der Seite einzufügen:

```html
<canvas width="320" height="240"></canvas>
```

Damit wird ein `canvas` auf der Seite mit einer Größe von 320 x 240 Pixel erstellt.

Sie sollten etwas Fallback-Inhalt innerhalb der `<canvas>`-Tags einfügen. Dieser sollte den Inhalt des `canvas` für Benutzer von Browsern beschreiben, die `canvas` nicht unterstützen, oder für Benutzer von Bildschirmlesegeräten.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Das Fallback sollte nützlichen alternativen Inhalt für den `canvas`-Inhalt bereitstellen. Wenn Sie beispielsweise ein sich ständig aktualisierendes Diagramm von Aktienkursen rendern, könnte der Fallback-Inhalt ein statisches Bild des neuesten Aktienkurses enthalten, mit `alt`-Text, der angibt, was die Preise in Text sind, oder eine Liste von Links zu einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalt ist für Bildschirmleser nicht zugänglich. Fügen Sie beschreibenden Text als Wert des Attributes [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) direkt auf dem `canvas`-Element selbst hinzu oder fügen Sie Fallback-Inhalt innerhalb der öffnenden und schließenden `<canvas>`-Tags hinzu. Canvas-Inhalte sind nicht Teil des DOM, aber eingebettete Fallback-Inhalte sind es.

### Erstellen und Anpassen unseres `canvas`

Beginnen wir mit der Erstellung unseres eigenen `canvas`, auf dem wir zukünftige Experimente zeichnen.

1. Machen Sie zunächst eine lokale Kopie des Verzeichnisses [0_canvas_start](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/0_canvas_start). Es enthält drei Dateien:
   - "index.html"
   - "script.js"
   - "style.css"
2. Öffnen Sie "index.html" und fügen Sie den folgenden Code direkt unter dem öffnenden {{htmlelement("body")}}-Tag ein:

   ```html
   <canvas class="myCanvas">
     <p>Add suitable fallback here.</p>
   </canvas>
   ```

   Wir haben dem `<canvas>`-Element eine `class` hinzugefügt, damit es einfacher auszuwählen ist, wenn wir mehrere `canvas` auf der Seite haben. Wir haben jedoch zunächst die Attribute `width` und `height` entfernt (Sie könnten sie wieder hinzufügen, wenn Sie möchten, aber wir werden sie in einem der folgenden Abschnitte mit JavaScript festlegen). `Canvas` ohne explizite Breite und Höhe sind standardmäßig 300 Pixel breit und 150 Pixel hoch.

3. Öffnen Sie nun "script.js" und fügen Sie die folgenden Zeilen JavaScript hinzu:

   ```js
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz auf das `canvas` im `canvas`-Konstanten gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des `canvas` gleich [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (die uns die Ansichtbreite gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des `canvas` gleich [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (die uns die Ansichtshöhe gibt). Jetzt haben wir ein `canvas`, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden auch sehen, dass wir Zuweisungen mit mehreren Gleichheitszeichen miteinander verketten — dies ist in JavaScript erlaubt und ist eine gute Technik, wenn Sie mehrere Variablen alle auf denselben Wert setzen möchten. Wir wollten die `canvas`-Breite und -Höhe in den Variablen `width`/`height` leicht zugänglich machen, da sie nützliche Werte sind, die später verfügbar sein sollten (zum Beispiel, wenn Sie etwas genau auf der Hälfte der Breite des `canvas` zeichnen möchten).

> [!NOTE]
> Sie sollten die Bildgröße im Allgemeinen mit HTML-Attributen oder DOM-Eigenschaften einstellen, wie oben erklärt. Sie könnten CSS verwenden, aber das Problem ist dann, dass die Größenänderung nach dem Rendern des `canvas` erfolgt und wie bei jedem anderen Bild (das gerenderte `canvas` ist einfach nur ein Bild) das Bild pixelig/verzerrt werden könnte.

### Abrufen des `canvas`-Kontexts und endgültige Einrichtung

Wir müssen noch eine letzte Sache tun, bevor wir unser `canvas`-Template als fertig betrachten können. Um auf das `canvas` zu zeichnen, müssen wir einen speziellen Bezug auf den Zeichenbereich erhalten, der als Kontext bezeichnet wird. Dies geschieht mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die für die grundlegende Nutzung einen einzigen Zeichenfolgenwert als Parameter nimmt, der den Typ des Kontexts darstellt, den Sie abrufen möchten.

In diesem Fall möchten wir ein 2D-`canvas`, also fügen Sie die folgende JavaScript-Zeile unter den anderen Zeilen in "script.js" ein:

```js
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextwerte, die Sie wählen könnten, sind `webgl` für WebGL, `webgl2` für WebGL 2 usw., aber diese werden wir in diesem Artikel nicht benötigen.

Das war's — unser `canvas` ist nun einsatzbereit zum Zeichnen! Die Variable `ctx` enthält jetzt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, und alle Zeichenoperationen auf dem `canvas` werden über die Manipulation dieses Objekts erfolgen.

Machen wir noch eine letzte Sache, bevor wir fortfahren. Wir werden den `canvas`-Hintergrund schwarz färben, um Ihnen einen ersten Eindruck von der `canvas`-API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihrer JavaScript-Datei hinzu:

```js
ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mit der Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) des `canvas` (dieser akzeptiert [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color), genau wie CSS-Eigenschaften), und zeichnen dann ein Rechteck, das den gesamten Bereich des `canvas` mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) abdeckt (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, die das Rechteck haben soll — wir haben Ihnen gesagt, dass diese `width` und `height` Variablen nützlich sein würden)!

OK, unser Template ist fertig und es ist Zeit, weiterzumachen.

## Grundlagen des 2D-Canvas

Wie wir oben gesagt haben, werden alle Zeichenoperationen durch die Manipulation eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts durchgeführt (in unserem Fall `ctx`). Viele Operationen müssen mit Koordinaten versehen werden, um genau festzulegen, wo etwas gezeichnet werden soll — die obere linke Ecke des `canvas` ist der Punkt (0, 0), die horizontale (x) Achse verläuft von links nach rechts und die vertikale (y) Achse verläuft von oben nach unten.

![Ein kariertes Papier mit kleinen Quadraten, die seine Fläche bedecken, und einem stahlblauen Quadrat in der Mitte. Die obere linke Ecke des `canvas` ist der Punkt (0, 0) der `canvas` x-Achse und y-Achse. Die horizontale (x) Achse verläuft von links nach rechts und definiert die Breite, und die vertikale (y) Achse verläuft von oben nach unten und definiert die Höhe. Die obere linke Ecke des blauen Quadrats ist mit einer Entfernung von x Einheiten von der y-Achse und y Einheiten von der x-Achse beschriftet.](canvas_default_grid.png)

Das Zeichnen von Formen wird häufig mit der primitiven Rechtecksform durchgeführt oder indem eine Linie entlang eines bestimmten Pfades nachgezogen und dann die Form gefüllt wird. Unten zeigen wir, wie man beides macht.

### Einfache Rechtecke

Beginnen wir mit einigen einfachen Rechtecken.

1. Nehmen Sie zuerst eine Kopie Ihres neu codierten `canvas`-Templates (oder machen Sie eine lokale Kopie des Verzeichnisses [1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template), wenn Sie die obigen Schritte nicht ausgeführt haben).
2. Fügen Sie als Nächstes die folgenden Zeilen unten in Ihr JavaScript ein:

   ```js
   ctx.fillStyle = "rgb(255 0 0)";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie speichern und aktualisieren, sollte ein rotes Rechteck auf Ihrem `canvas` erscheinen. Seine obere linke Ecke ist 50 Pixel vom oberen und linken Rand des `canvas` entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch den dritten und vierten Parameter definiert).

3. Fügen wir dem Mix ein weiteres Rechteck hinzu — diesmal ein grünes. Fügen Sie das Folgende unten in Ihr JavaScript ein:

   ```js
   ctx.fillStyle = "rgb(0 255 0)";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren Sie, und Sie werden Ihr neues Rechteck sehen. Dies hebt einen wichtigen Punkt hervor: Grafische Operationen wie das Zeichnen von Rechtecken, Linien und so weiter, werden in der Reihenfolge ausgeführt, in der sie auftreten. Denken Sie daran, dass es wie das Streichen einer Wand ist, wobei jede Farbschicht das darunter liegende überlappt und sogar verdecken kann. Sie können nichts ändern, um dies zu ändern, daher müssen Sie sorgfältig über die Reihenfolge nachdenken, in der Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, z. B. durch die Verwendung von `rgb()`. Der "Alpha-Kanal" definiert, wie transparent die Farbe ist. Je höher ihr Wert, desto mehr wird sie das, was sich dahinter befindet, verdecken. Fügen Sie das Folgende in Ihren Code ein:

   ```js
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, einige weitere Rechtecke von Ihnen selbst zu zeichnen; haben Sie Spaß!

### Linien und Strichbreiten

Bisher haben wir uns das Zeichnen von gefüllten Rechtecken angesehen, aber Sie können auch Rechtecke zeichnen, die nur Umrisse haben (in der Grafikdesignbranche als **Strokes** bezeichnet). Um die Farbe für Ihren Strich festzulegen, verwenden Sie die [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)-Eigenschaft; das Zeichnen eines Umrissrechtecks erfolgt mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Fügen Sie die folgende Zeile zum vorherigen Beispiel hinzu, wieder unter den vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "rgb(255 255 255)";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Strichen beträgt 1 Pixel; Sie können den Wert der [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)-Eigenschaft anpassen, um diese zu ändern (sie nimmt eine Zahl an, die die Anzahl der Pixel darstellt, die der Strich breit ist). Fügen Sie die folgende Zeile zwischen den vorherigen beiden Zeilen ein:

   ```js
   ctx.lineWidth = 5;
   ```

Jetzt sollten Sie sehen, dass Ihr weißer Umriss viel dicker geworden ist! Das war's erstmal. Zu diesem Zeitpunkt sollte Ihr Beispiel so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles/index.html", '100%', 250)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [2_canvas_rectangles](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles) verfügbar.

### Zeichnen von Pfaden

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Im Wesentlichen geht es darum, Code zu schreiben, um genau zu spezifizieren, welchem Pfad der Stift auf Ihrem `canvas` folgen soll, um die Form zu zeichnen, die Sie zeichnen möchten. `Canvas` enthält Funktionen zum Zeichnen von geraden Linien, Kreisen, Bézierkurven und mehr.

Lassen Sie uns den Abschnitt beginnen, indem wir eine frische Kopie unseres `canvas`-Templates ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) erstellen, in dem wir das neue Beispiel zeichnen.

Wir werden einige gemeinsame Methoden und Eigenschaften in allen untenstehenden Abschnitten verwenden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — startet das Zeichnen eines Pfades an dem Punkt, an dem sich der Stift momentan auf dem `canvas` befindet. Auf einem neuen `canvas` beginnt der Stift an der Position (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — Bewegt den Stift an einen anderen Punkt auf dem `canvas`, ohne die Linie aufzuzeichnen oder zu ziehen; der Stift "springt" in die neue Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — Zeichnet eine gefüllte Form, indem der bisher gezogene Pfad gefüllt wird.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — Zeichnet eine Umrissform, indem ein Strich entlang des bisher gezogenen Pfades gezeichnet wird.
- Sie können auch Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` sowohl mit Pfaden als auch mit Rechtecken verwenden.

Eine typische, einfache Pfadzeichnungsoperation würde in etwa so aussehen:

```js
ctx.fillStyle = "rgb(255 0 0)";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Zeichnen von Linien

Zeichnen wir ein gleichseitiges Dreieck auf das `canvas`.

1. Fügen Sie zunächst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Diese konvertiert Gradwerte in Radianten, was nützlich ist, da immer, wenn Sie einen Winkelwert in JavaScript angeben müssen, er fast immer in Radianten sein wird, aber Menschen normalerweise in Graden denken.

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Beginnen Sie als nächstes Ihren Pfad, indem Sie das Folgende unter Ihrem früheren Eintrag hinzufügen. Hier setzen wir eine Farbe für unser Dreieck, beginnen mit dem Zeichnen eines Pfades und bewegen dann den Stift ohne zu zeichnen zu (50, 50). Dort beginnen wir mit dem Zeichnen unseres Dreiecks.

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

   Zuerst zeichnen wir eine Linie zu (150, 50) — unser Pfad geht jetzt 100 Pixel nach rechts entlang der x-Achse.

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks mit etwas einfacher Trigonometrie. Im Wesentlichen zeichnen wir das Dreieck nach unten zeigend. Die Winkel in einem gleichseitigen Dreieck sind immer 60 Grad; um die Höhe zu berechnen, können wir es in der Mitte in zwei rechtwinklige Dreiecke teilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben werden. Was die Seiten betrifft:

   - Die längste Seite wird **Hypotenuse** genannt
   - Die Seite neben dem 60-Grad-Winkel wird **Ankathete** genannt — die wir kennen mit 50 Pixel, da sie die Hälfte der Linie ist, die wir gerade gezeichnet haben.
   - Die der 60-Grad-Seite gegenüberliegende Seite wird **Gegenkathete** genannt, die die Höhe des Dreiecks ist, die wir berechnen möchten.

   ![Ein gleichseitiges Dreieck, das nach unten zeigt, mit gekennzeichneten Winkeln und Seiten. Die horizontale Linie oben ist mit 'Ankathete' beschriftet. Eine senkrechte, gepunktete Linie, die von der Mitte der Ankathete ausgehend mit 'Gegenkathete' beschriftet ist, teilt das Dreieck und erstellt zwei gleiche rechtwinklige Dreiecke. Die rechte Seite des Dreiecks ist als Hypotenuse beschriftet, da sie die Hypotenuse des rechtwinkligen Dreiecks ist, das durch die Linie 'Gegenkathete' gebildet wird. Während alle drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des rechtwinkligen Dreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass die Länge der Ankathete multipliziert mit dem Tangens des Winkels gleich der Gegenkathete ist, daher kommen wir auf `50 * Math.tan(degToRad(60))`. Wir verwenden unsere `degToRad()`-Funktion, um 60 Grad in Radianten zu konvertieren, da {{jsxref("Math.tan()")}} einen Eingabewert in Radianten erwartet.

4. Mit der berechneten Höhe zeichnen wir eine weitere Linie zu `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss genau zwischen den vorherigen beiden X-Werten liegen, die wir festgelegt haben. Der Y-Wert muss jedoch 50 plus der Dreiecks-Höhe sein, da wir wissen, dass das obere Ende des Dreiecks 50 Pixel von der oberen `canvas`-Kante entfernt ist.
5. Die nächste Zeile zieht eine Linie zurück zum Startpunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad abzuschließen und die Form auszufüllen.

#### Zeichnen von Kreisen

Sehen wir uns nun an, wie man einen Kreis in `canvas` zeichnen kann. Dies wird mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) erreicht, die einen vollständigen oder teilweisen Kreis an einem bestimmten Punkt zieht.

1. Fügen wir unserem `canvas` ein Bogen hinzu — fügen Sie das folgende am Ende Ihres Codes hinzu:

   ```js
   ctx.fillStyle = "rgb(0 0 255)";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` nimmt sechs Parameter an. Die ersten beiden bestimmen die Position des Mittelpunkts des Bogens (X und Y). Der dritte ist der Radius des Kreises, der vierte und fünfte sind die Start- und Endwinkel, bei denen der Kreis gezeichnet werden soll (wenn also beispielsweise 0 und 360 Grad angegeben werden, erhalten wir einen vollständigen Kreis), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn (im Uhrzeigersinn) oder im Uhrzeigersinn gezeichnet werden soll (`false` ist im Uhrzeigersinn).

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

   Das Muster ist hier sehr ähnlich, aber mit zwei Unterschieden:

   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird, was bedeutet, dass selbst wenn der Bogen angegeben ist, dass er bei -45 Grad beginnt und bei 45 Grad endet, wir den Bogen um die 270 Grad herumziehen, die sich nicht in diesem Teil befinden. Wenn Sie `true` durch `false` ersetzen und dann den Code erneut ausführen, würde nur das 90-Grad-Stück des Kreises gezeichnet werden.
   - Bevor wir `fill()` aufrufen, ziehen wir eine Linie zum Zentrum des Kreises. Dies ergibt den ziemlich schönen Pac-Man-artigen Ausschnitt. Wenn Sie diese Zeile entfernt hätten (probieren Sie es aus!) und dann den Code erneut ausführten, würden Sie nur einen Kreisrand zwischen dem Start- und Endpunkt des Bogens abgeschnitten sehen. Dies illustriert einen weiteren wichtigen Punkt der `canvas` — wenn Sie versuchen, einen unvollständigen Pfad (d.h. einen, der nicht geschlossen ist) zu füllen, füllt der Browser eine gerade Linie zwischen dem Start- und Endpunkt ein und füllt ihn dann aus.

Das war's fürs Erste; Ihr finales Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/3_canvas_paths/index.html", '100%', 200)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [3_canvas_paths](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/3_canvas_paths) verfügbar.

> [!NOTE]
> Um mehr über fortgeschrittene Pfadzeichnungsfunktionen wie Bézierkurven zu erfahren, schauen Sie sich unser Tutorial [Zeichnen von Formen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) an.

### Text

Auch `canvas` verfügt über Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz erkunden. Starten Sie, indem Sie eine weitere frische Kopie unseres `canvas`-Templates ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) erstellen, in dem wir das neue Beispiel zeichnen.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnet Umrisstext (Strokentext).

Beide benötigen in ihrer grundlegenden Verwendung drei Eigenschaften: den zu zeichnenden Textstring sowie die X- und Y-Koordinaten des Punktes, an dem der Text beginnen soll. Dies bedeutet die **untere linke** Ecke des **Textbox** (buchstäblich die Box, die den zu zeichnenden Text umgibt). Dies könnte verwirrend sein, da andere Zeichenoperationen normalerweise von der oberen linken Ecke ausgehen — behalten Sie dies im Hinterkopf.

Es gibt auch eine Reihe von Eigenschaften, die die Textrendering-Steuerung unterstützen, wie [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), die Sie verwenden können, um Schriftfamilie, Größe usw. anzugeben. Sie nimmt als Wert die gleiche Syntax wie die CSS {{cssxref("font")}}-Eigenschaft an.

Canvas-Inhalt ist für Bildschirmleser nicht zugänglich. In das `canvas` gemalter Text ist nicht im DOM verfügbar, muss aber zugänglich gemacht werden. In diesem Beispiel fügen wir den Text als Wert für `aria-label` hinzu.

Versuchen Sie, den folgenden Block am Ende Ihrer JavaScript-Datei hinzuzufügen:

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

Hier zeichnen wir zwei Textzeilen, eine outline und die andere stroke. Das finale Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/4_canvas_text/index.html", '100%', 180)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [4_canvas_text](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/4_canvas_text) verfügbar.

Probieren Sie es aus und sehen Sie, was Sie sich einfallen lassen! Weitere Informationen zu den für `canvas` Text verfügbaren Optionen finden Sie unter [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Zeichnen von Bildern auf ein `canvas`

Es ist möglich, externe Bilder auf Ihr `canvas` zu rendern. Diese können einfache Bilder, Rahmen von Videos oder der Inhalt anderer `canvas` sein. Im Moment werden wir nur den Fall betrachten, einfache Bilder auf unser `canvas` zu verwenden.

1. Erstellen Sie wie zuvor eine frische Kopie unseres `canvas`-Templates ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)), in dem wir das neue Beispiel zeichnen.

   Bilder werden auf `canvas` mit der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) gezeichnet. Die einfachste Version nimmt drei Parameter an — eine Referenz auf das Bild, das Sie rendern möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Beginnen wir mit der Beschaffung einer Bildquelle, die wir in unser `canvas` einbetten können. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript hinzu:

   ```js
   const image = new Image();
   image.src = "firefox.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt mit dem [`Image()`](/de/docs/Web/API/HTMLImageElement/Image) Konstruktor. Das zurückgegebene Objekt ist vom gleichen Typ wie das, was zurückgegeben wird, wenn Sie eine Referenz auf ein bestehendes {{htmlelement("img")}}-Element abrufen. Wir setzen dann sein [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut gleich unserem Firefox-Logo-Bild. Zu diesem Zeitpunkt beginnt der Browser, das Bild zu laden.

3. Wir könnten nun versuchen, das Bild mit `drawImage()` einzubetten, müssen jedoch sicherstellen, dass die Bilddatei zuerst geladen wurde, andernfalls wird der Code fehlschlagen. Dies können wir mit dem `load`-Ereignis erreichen, das nur ausgelöst wird, wenn das Bild vollständig geladen wurde. Fügen Sie den folgenden Block unter dem vorherigen hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie das Bild eingebettet im `canvas` sehen.

4. Aber es gibt mehr! Was, wenn wir nur einen Teil des Bildes anzeigen oder es skalieren möchten? Wir können beides mit der komplexeren Version von `drawImage()` machen. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile folgendermaßen:

   ```js
   ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
   ```

   - Der erste Parameter ist die Bildreferenz, wie zuvor.
   - Die Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links vom ersten Parameter oder oberhalb des zweiten wird gezeichnet.
   - Die Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem ursprünglich geladenen Bild ausschneiden möchten.
   - Die Parameter 6 und 7 definieren die Koordinaten, auf denen die obere linke Ecke des ausgeschnittenen Bildbereichs relativ zur oberen linken Ecke des `canvas` gezeichnet werden soll.
   - Die Parameter 8 und 9 definieren die Breite und Höhe, um den ausgeschnittenen Bereich des Bildes zu zeichnen. In diesem Fall haben wir dieselben Dimensionen wie der ursprüngliche Ausschnitt angegeben, aber Sie könnten ihn durch Angabe verschiedener Werte skalieren.

5. Wenn das Bild bedeutend aktualisiert wird, muss auch die {{Glossary("accessible_description", "zugängliche Beschreibung")}} aktualisiert werden.

   ```js
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/5_canvas_images/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [5_canvas_images](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/5_canvas_images) verfügbar.

## Schleifen und Animationen

Bisher haben wir einige sehr grundlegende Anwendungen von 2D-`canvas` behandelt, aber wirklich erleben Sie die volle Power des `canvas` nicht, es sei denn, Sie aktualisieren oder animieren es in irgendeiner Weise. Schließlich bietet das `canvas` skriptbare Bilder! Wenn Sie nichts ändern wollen, dann könnten Sie genauso gut nur statische Bilder verwenden und sich all die Arbeit ersparen.

### Erstellung einer Schleife

Mit Schleifen in `canvas` zu spielen macht ziemlich Spaß — Sie können `canvas`-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) (oder einer anderen Art von) Schleife genauso laufen lassen wie jeden anderen JavaScript-Code.

Lassen Sie uns ein Beispiel erstellen.

1. Erstellen Sie eine weitere frische Kopie unseres `canvas`-Templates ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie es in Ihrem Code-Editor.
2. Fügen Sie die folgende Zeile am Ende Ihrer JavaScript-Datei hinzu. Diese enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des `canvas` verschiebt:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

   Dies bewirkt, dass der Koordinatenursprung (0, 0) in die Mitte des `canvas` verschoben wird, anstatt sich in der oberen linken Ecke zu befinden. Dies ist in vielen Situationen sehr nützlich, wie in diesem Fall, in dem wir möchten, dass unser Design relativ zur Mitte des `canvas` gezeichnet wird.

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

   Hier implementieren wir die gleiche `degToRad()`-Funktion, die wir im Dreieck-Beispiel oben gesehen haben, eine `rand()`-Funktion, die eine Zufallszahl zwischen den angegebenen unteren und oberen Grenzen zurückgibt, sowie `length`- und `moveOffset`-Variablen (über die wir später mehr erfahren werden) und eine leere `for`-Schleife.

4. Das Ziel hier ist, innerhalb der `for`-Schleife etwas auf dem `canvas` zu zeichnen und es bei jedem Durchlauf zu iterieren, um etwas Interessantes zu schaffen. Fügen Sie den folgenden Code in Ihre `for`-Schleife ein:

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

   Bei jedem Durchlauf:

   - Wir setzen das `fillStyle` auf eine leicht transparente violette Farbe, die sich bei jedem Durchlauf basierend auf dem Wert von `length` ändert. Wie Sie später sehen werden, wird die Länge jedes Mal kleiner, wenn die Schleife läuft, sodass der Effekt hier darin besteht, dass die Farbe bei jedem gezeichneten Dreieck heller wird.
   - Beginnen wir mit dem Pfad.
   - Wir bewegen den Stift auf die Koordinate `(moveOffset, moveOffset)`; Diese Variable definiert, wie weit wir uns jedes Mal bewegen möchten, wenn wir ein neues Dreieck zeichnen.
   - Zeichnen wir eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Dies zeichnet eine Linie mit der Länge `length` parallel zur X-Achse.
   - Berechnen wir die Höhe des Dreiecks, wie zuvor.
   - Ziehen wir eine Linie zur nach unten zeigenden Ecke des Dreiecks und dann eine Linie zurück zum Start des Dreiecks.
   - Rufen wir `fill()` auf, um das Dreieck zu füllen.
   - Aktualisieren wir die Variablen, die die Sequenz der Dreiecke beschreiben, damit wir bereit sind, das nächste zu zeichnen. Wir verringern den `length`-Wert um 1, sodass die Dreiecke jedes Mal kleiner werden; erhöhen `moveOffset` um einen kleinen Betrag, sodass jedes aufeinanderfolgende Dreieck sich etwas weiter entfernt befindet und verwenden eine weitere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), mit der wir das gesamte `canvas` drehen können! Wir drehen es um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das war's! Ihr endgültiges Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop/index.html", '100%', 550)}}

An dieser Stelle möchten wir Sie ermutigen, mit dem Beispiel zu spielen und es zu Ihrem eigenen zu machen! Zum Beispiel:

- Zeichnen Sie Rechtecke oder Bögen anstelle von Dreiecken oder betten Sie sogar Bilder ein.
- Spielen Sie mit den `length`- und `moveOffset`-Werten.
- Fügen Sie einige Zufallszahlen ein, indem Sie die `rand()`-Funktion verwenden, die wir oben aufgenommen, aber nicht verwendet haben.

> [!NOTE]
> Der fertige Code ist auf GitHub als [6_canvas_for_loop](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop) verfügbar.

### Animationen

Das Schleifenbeispiel, das wir oben erstellt haben, war lustig, aber wirklich benötigen Sie eine konstante Schleife, die immer weiterläuft, wenn Sie ernsthafte `canvas`-Anwendungen erstellen (wie Spiele und Echtzeitvisualisierungen). Wenn Sie sich Ihr `canvas` als einen Film vorstellen, möchten Sie wirklich, dass die Anzeige auf jedem Bild aktualisiert wird, um die aktualisierte Ansicht anzuzeigen, mit einer idealen Bildwiederholrate von 60 Bildern pro Sekunde, sodass Bewegungen für das menschliche Auge schön und flüssig erscheinen.

Es gibt einige JavaScript-Funktionen, die es Ihnen ermöglichen, Funktionen wiederholt, mehrmals in der Sekunde, auszuführen, wobei die beste für unsere Zwecke hier [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) ist. Es nimmt einen Parameter an: den Namen der Funktion, die Sie für jedes Bild ausführen möchten. Das nächste Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion das neue Update Ihrer Animation zeichnen und dann `requestAnimationFrame()` erneut aufrufen, bevor die Funktion endet, wird die Animationsschleife weiterlaufen. Die Schleife endet, wenn Sie aufhören, `requestAnimationFrame()` aufzurufen oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) aufrufen, nachdem `requestAnimationFrame()` aufgerufen wurde, aber bevor das Bild aufgerufen wird.

> [!NOTE]
> Es ist eine gute Praxis, `cancelAnimationFrame()` von Ihrem Hauptcode aus aufzurufen, wenn Sie mit der Animation fertig sind, um sicherzustellen, dass keine Updates mehr warten, um ausgeführt zu werden.

Der Browser bearbeitet komplexe Details wie das Laufen der Animation mit einer konstanten Geschwindigkeit und das Vermeiden von Ressourcenverschwendung für die Animation von Dingen, die nicht zu sehen sind.

Um zu sehen, wie es funktioniert, schauen wir noch einmal schnell auf unser Beispiel mit den hüpfenden Bällen ([siehe es live](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html), und auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/oojs/bouncing-balls)). Der Code für die Schleife, die alles in Bewegung hält, sieht folgendermaßen aus:

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

Wir führen die `loop()`-Funktion einmal am Ende des Codes aus, um den Zyklus zu starten, indem das erste Animationsbild gezeichnet wird; die `loop()`-Funktion ist dann dafür verantwortlich, `requestAnimationFrame(loop)` aufzurufen, um das nächste Bild der Animation immer wieder auszuführen.

Beachten Sie, dass wir bei jedem Bild das `canvas` vollständig löschen und alles neu zeichnen. Für jede vorhandene Kugel zeichnen wir sie, aktualisieren ihre Position und überprüfen, ob sie mit anderen Kugeln kollidiert. Sobald Sie eine Grafik auf einem `canvas` gezeichnet haben, gibt es keine Möglichkeit, diese Grafik individuell zu manipulieren, wie Sie es mit DOM-Elementen können. Sie können jede Kugel nicht auf dem `canvas` verschieben, da sie, sobald sie gezeichnet ist, Teil des `canvas` ist und kein individuelles, zugängliches Element oder Objekt ist. Stattdessen müssen Sie löschen und neu zeichnen, entweder indem Sie den gesamten Rahmen löschen und alles neu zeichnen oder indem Sie Code haben, der genau weiß, welche Teile gelöscht werden müssen und nur den minimalen Bereich des `canvas` löscht und neu zeichnet.

Die Optimierung der Animation von Grafiken ist eine eigenständige Programmierungsspezialität mit vielen cleveren Techniken. Diese sind jedoch über das hinaus, was wir für unser Beispiel benötigen!

Im Allgemeinen umfasst der Prozess der Animierung einer `canvas`-Animation die folgenden Schritte:

1. Löschen Sie den `canvas`-Inhalt (z. B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Speichern Sie den Zustand (falls erforderlich) mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) — dies ist erforderlich, wenn Sie Einstellungen speichern möchten, die Sie auf dem `canvas` aktualisiert haben, bevor Sie fortfahren, was für komplexere Anwendungen nützlich ist.
3. Zeichnen Sie die Grafik, die Sie animieren.
4. Stellen Sie die in Schritt 2 gespeicherten Einstellungen wieder her, indem Sie [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore) verwenden.
5. Rufen Sie `requestAnimationFrame()` auf, um das Zeichnen des nächsten Animationsbilds vorzuplanen.

> [!NOTE]
> Wir werden `save()` und `restore()` hier nicht behandeln, aber sie werden schön in unserem [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations) Tutorial (und den folgenden) erklärt.

### Eine einfache Charakteranimation

Lassen Sie uns jetzt unsere eigene einfache Animation erstellen — wir lassen einen Charakter aus einem ziemlich außergewöhnlichen Retro-Computerspiel über den Bildschirm laufen.

1. Erstellen Sie eine weitere frische Kopie unseres `canvas`-Templates ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie es in Ihrem Code-Editor.

2. Aktualisieren Sie den inneren HTML, um das Bild widerzuspiegeln:

   ```html
   <canvas class="myCanvas">
     <p>A man walking.</p>
   </canvas>
   ```

3. Fügen Sie am Ende der JavaScript-Datei die folgende Zeile hinzu, um den Koordinatenursprung wieder in die Mitte des `canvas` zu verschieben:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

4. Erstellen wir nun ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, setzen das [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf das Bild, das wir laden möchten, und fügen einen `onload`-Ereignishandler hinzu, der die `draw()`-Funktion auslöst, wenn das Bild geladen ist:

   ```js
   const image = new Image();
   image.src = "walk-right.png";
   image.onload = draw;
   ```

5. Nun fügen wir einige Variablen hinzu, um die Position zu verfolgen, an der der Sprite auf dem Bildschirm gezeichnet werden soll, und die Spritenummer, die wir anzeigen möchten.

   ```js
   let sprite = 0;
   let posX = 0;
   ```

   Lassen Sie uns kurz das Spritesheet-Bild erklären (das wir respektvoll von Mike Thomas' [Walking cycle using CSS animation](https://codepen.io/mikethomas/pen/kQjKLW) CodePen geliehen haben). Das Bild sieht so aus:

   ![Ein Spritesheet mit sechs Sprite-Bildern eines pixelierten Charakters, der eine gehende Person von rechts in verschiedenen Momenten eines einzelnen Vorwärtsschrittes darstellt. Der Charakter trägt ein weißes Hemd mit himmelblauen Knöpfen, schwarze Hosen und schwarze Schuhe. Jede Sprite ist 102 Pixel breit und 148 Pixel hoch.](walk-right.png)

   Es enthält sechs Sprites, die die gesamte Gehrenzfolge ausmachen — jede ist 102 Pixel breit und 148 Pixel hoch. Um jede Sprite sauber darstellen zu können, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild aus dem Spritesheet auszuschneiden und nur diesen Teil anzuzeigen, wie wir es bereits oben mit dem Firefox-Logo gemacht haben. Die X-Koordinate des Ausschnitts muss ein Vielfaches von 102 sein, und die Y-Koordinate wird immer 0 sein. Die Größe des Ausschnitts wird immer 102 mal 148 Pixel betragen.

6. Fügen wir nun eine leere `draw()`-Funktion am Ende des Codes hinzu, die bereit ist, mit etwas Code gefüllt zu werden:

   ```js
   function draw() {}
   ```

7. Der Rest des Codes in diesem Abschnitt geht in die `draw()`-Funktion. Fügen Sie zunächst die folgende Zeile hinzu, die das `canvas` löscht, um es auf das Zeichnen des nächsten Bildes vorzubereiten. Beachten```, dass wir die obere linke Ecke des Rechtecks als `-(width/2), -(height/2)`spezifizieren müssen, denn wir haben den Ursprungsort als`width/2, height/2` vorher festgelegt.

   ```js
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

8. Zeichnen wir nun unser Bild mit `drawImage` — der 9-Parameter-Version. Fügen Sie das folgende hinzu:

   ```js
   ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);
   ```

   Wie Sie sehen können:

   - Wir spezifizieren `image` als das Bild, das eingebettet werden soll.
   - Parameter 2 und 3 bestimmen die obere linke Ecke des Ausschnitts, der aus dem Quellbild ausgeschnitten werden soll, wobei der X-Wert als `sprite` multipliziert mit 102 (wo `sprite` die Spritenummer zwischen 0 und 5 ist) und der Y-Wert immer 0 ist.
   - Parameter 4 und 5 bestimmen die Größe des auszuschneidenden Ausschnitts — 102 Pixel mal 148 Pixel.
   - Parameter 6 und 7 bestimmen die obere linke Ecke des Kästchens, in das der ausgeschnittene Ausschnitt auf dem `canvas` gezeichnet werden soll — die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichenposition ändern können, indem wir den `posX`-Wert ändern.
   - Parameter 8 und 9 bestimmen die Größe des Bildes auf dem `canvas`. Wir möchten einfach seine ursprüngliche Größe behalten, also spezifizieren wir 102 und 148 als Breite und Höhe.

9. Wir werden anschließend den `sprite`-Wert nach jedem Zeichnen ändern — naja, zumindest nach einigen von ihnen. Fügen Sie den folgenden Block am Ende der `draw()`-Funktion hinzu:

   ```js
   if (posX % 13 === 0) {
     if (sprite === 5) {
       sprite = 0;
     } else {
       sprite++;
     }
   }
   ```

   Wir umschließen den gesamten Block in `if (posX % 13 === 0) { }`. Wir verwenden den Modulo (`%`) Operator (auch bekannt als [Remainder Operator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu überprüfen, ob der `posX`-Wert genau durch 13 teilbar ist, ohne Rest. Falls ja, wechseln wir zum nächsten Sprite, indem wir `sprite` inkrementieren (sich bei 0 umkehren, nachdem wir mit Sprite #5 fertig sind). Dies bedeutet effektiv, dass wir das Sprite nur auf jedem 13. Bild aktualisieren, oder bei ungefähr 5 Bildern pro Sekunde (`requestAnimationFrame()` ruft uns mit bis zu 60 Bildern pro Sekunde auf, wenn möglich). Wir verlangsamen absichtlich die Framerate, da wir nur sechs Sprites zur Verfügung haben und wenn wir jedes 60stel einer Sekunde eines anzeigen, sich unser Charakter viel zu schnell bewegen würde!

   Innerhalb des äußeren Blocks verwenden wir ein [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Statement, um zu überprüfen, ob der `sprite`-Wert bei 5 liegt (das letzte Sprite, dass sich die Spritenummern von 0 nach 5 bewegen). Wenn wir bereits das letzte Sprite anzeigen, setzen wir `sprite` wieder auf 0 zurück; andernfalls inkrementieren wir es nur um 1.

10. Als nächstes müssen wir herausfinden, wie wir den `posX`-Wert bei jedem Bild ändern — fügen Sie den folgenden Codeblock direkt unter Ihrem letzten ein.

    ```js
    if (posX > width / 2) {
      let newStartPos = -(width / 2 + 102);
      posX = Math.ceil(newStartPos);
      console.log(posX);
    } else {
      posX += 2;
    }
    ```

Wir verwenden ein weiteres `if...else`-Statement, um zu überprüfen, ob der Wert von `posX` größer als `width/2` geworden ist, was bedeutet, dass unser Charakter aus dem rechten Rand des Bildschirms gelaufen ist. Wenn ja, berechnen wir eine Position, die den Charakter links vom linken Bildschirmrand setzen würde.

Wenn unser Charakter noch nicht vom Rand des Bildschirms gelaufen ist, inkrementieren wir `posX` um 2. Dies wird ihn beim nächsten Zeichnen ein bisschen nach rechts bewegen.

11. Schließlich müssen wir die Animationsschleife machen, indem wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()`-Funktion aufrufen:

    ```js
    window.requestAnimationFrame(draw);
    ```

Das ist es! Das letzte Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [7_canvas_walking_animation](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation) verfügbar.

### Eine einfache Zeichenanwendung

Als letztes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben (wie Mausbewegungen in diesem Fall) kombiniert werden kann. Wir werden Sie nicht durchgehen lassen, um diese zu erstellen; wir werden nur die interessantesten Teile des Codes erkunden.

Das Beispiel ist auf GitHub als [8_canvas_drawing_app](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app) verfügbar und Sie können es live unten ausprobieren:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app/index.html", '100%', 600)}}

Sehen wir uns die interessantesten Teile an. Zuerst verfolgen wir die X- und Y-Koordinaten der Maus und ob sie gedrückt wird oder nicht mit drei Variablen: `curX`, `curY` und `pressed`. Wenn die Maus bewegt wird, führen wir eine Funktion aus, die als `onmousemove` Ereignishandler eingerichtet ist und die aktuellen X- und Y-Werte erfasst. Wir verwenden auch `onmousedown` und `onmouseup` Ereignishandler, um den Wert von `pressed` zu `true` zu ändern, wenn der Mausklick gedrückt wird, und wieder auf `false`, wenn er losgelassen wird.

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

Wenn die "Leinwand löschen"-Taste gedrückt wird, führen wir eine einfache Funktion aus, die die gesamte Leinwand wieder schwarz füllt, auf die gleiche Weise, wie wir es bereits gesehen haben:

```js
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal ziemlich einfach — wenn `pressed` `true` ist, zeichnen wir einen Kreis mit einem Füllstil, der dem Wert des Farbwählers entspricht, und einem Radius, der dem im Bereichs-Input festgelegten Wert entspricht. Wir müssen den Kreis 85 Pixel oberhalb des gesehenen Orts zeichnen, da die vertikale Messung oben im Ansichtsfenster aufgenommen wird. Wenn wir es mit nur `curY` als y-Koordinate zeichnen würden, würde es 85 Pixel tiefer als die Mausposition erscheinen.

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

Alle {{htmlelement("input")}} Typen werden gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, wird er zu einem einfachen Textfeld zurückfallen.

## WebGL

Nun ist es an der Zeit, 2D hinter sich zu lassen und einen kurzen Blick auf 3D-`canvas` zu werfen. 3D-`canvas`-Inhalte werden mit der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert — diese API ist komplett separat von der 2D-`canvas`-API, auch wenn sie beide auf {{htmlelement("canvas")}}-Elementen rendern.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht es Ihnen, direkt mit der {{Glossary("GPU", "GPU")}} des Computers zu kommunizieren. Als solche ist die Programmierung mit rohem WebGL näher an niedrigeren Programmiersprachen wie beispielsweise C++ als an regulärem JavaScript; es ist relativ komplex, aber unglaublich leistungsfähig.

### Nutzung einer Bibliothek

Aufgrund ihrer Komplexität schreiben die meisten Leute 3D-Grafikcode, indem sie eine JavaScript-Bibliothek von Dritten wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js) verwenden. Die meisten arbeiten in ähnlicher Weise, indem sie Funktionen bereitstellen, um primitive und benutzerdefinierte Formen zu erstellen, Kameras und Beleuchtung zu positionieren, Oberflächen mit Texturen zu überziehen und mehr. Sie übernehmen das WebGL für Sie, sodass Sie auf ein höheres Niveau arbeiten können.

Ja, die Verwendung einer dieser Bibliotheken bedeutet, eine weitere neue API zu lernen (in diesem Fall eine Drittanbieter-API), aber sie sind viel einfacher als die Programmierung mit rohem WebGL.

### Unseren Würfel neu erschaffen

Schauen wir uns ein Beispiel an, wie man etwas mit einer WebGL-Bibliothek erstellt. Wir werden [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) wählen, da es eine der beliebtesten ist. In diesem Tutorial werden wir den 3D-drehenden Würfel erstellen, den wir bereits gesehen haben.

1. Um anzufangen, machen Sie eine lokale Kopie von [threejs-cube/index.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/index.html) in einem neuen Ordner und speichern Sie dann auch eine Kopie von [metal003.png](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/metal003.png) im selben Ordner. Dies ist das Bild, das wir als Oberflächenstruktur für den Würfel später verwenden werden.
2. Erstellen Sie dann eine neue Datei mit dem Namen `script.js`, wieder im gleichen Ordner wie zuvor.
3. Als nächstes müssen Sie die Three.js-Bibliothek installiert haben. Sie können die Umgebungseinrichtungsschritte befolgen, die im [Building up a basic demo with Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) beschrieben sind, sodass Three.js wie erwartet funktioniert.
4. Jetzt, da wir `three.js` an unsere Seite angefügt haben, können wir mit dem Schreiben von JavaScript beginnen, das in `script.js` verwendet wird. Beginnen wir mit der Erstellung einer neuen Szene — fügen Sie das folgende in Ihre `script.js`-Datei ein:

   ```js
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene)-Konstruktor erstellt eine neue Szene, die die gesamte 3D-Welt darstellt, die wir anzeigen möchten.

5. Als nächstes brauchen wir eine **Kamera**, damit wir die Szene sehen können. In 3D-Bilderbegriffen repräsentiert die Kamera die Position eines Betrachters in der Welt. Um eine Kamera zu erstellen, fügen Sie die folgenden Zeilen als Nächstes hinzu:

   ```js
   const camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000,
   );
   camera.position.z = 5;
   ```

   Der [`PerspectiveCamera()`](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera)-Konstruktor nimmt vier Argumente an:

   - Das Sichtfeld: Wie breit der Bereich vor der Kamera ist, der auf dem Bildschirm zu sehen sein sollte, in Grad.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Normalerweise ist dies das Verhältnis der Breite der Szene geteilt durch die Höhe der Szene. Wenn Sie einen anderen Wert verwenden, wird die Szene verzerrt (was möglicherweise das ist, was Sie möchten, aber normalerweise nicht).
   - Die nahe Ebene: Wie nah an der Kamera sich Objekte befinden dürfen, bevor wir sie nicht mehr auf dem Bildschirm rendern. Denken Sie daran, wie Sie Ihren Finger immer näher in die Mitte Ihrer Augen bewegen, schließlich können Sie ihn nicht mehr sehen.
   - Die ferne Ebene: Wie weit entfernt Objekte von der Kamera sein dürfen, bevor sie nicht mehr gerendert werden.

   Wir setzen auch die Position der Kamera, um 5 Entfernungseinheiten auf der Z-Achse, die, ähnlich wie in CSS, aus dem Bildschirm zu Ihnen, dem Betrachter, herausragt.

6. Das dritte wichtige Element ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene als durch eine angegebene Kamera angesehen rendert. Wir erstellen einen vorläufigen Renderer mit dem [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer) Konstruktor, aber wir verwenden ihn erstmal nicht, bis später. Fügen Sie das Folgende als nächstes hinzu:

   ```js
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile stellt die Größe ein, in der der Renderer die Kamerasicht zeichnen wird, und die dritte Zeile fügt das vom Renderer erstellte {{htmlelement("canvas")}}-Element dem Dokument {{htmlelement("body")}} hinzu. Nun wird alles, was der Renderer zeichnet, in unserem Fenster angezeigt.

7. Als nächstes wollen wir den Würfel erstellen, den wir auf dem `canvas` anzeigen werden. Fügen Sie den folgenden Code am Ende Ihres JavaScripts hinzu:

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

   Es gibt ein bisschen mehr zu verstehen, lassen Sie uns dies in Stufen durchgehen:

   - Zuerst erstellen wir eine globale `cube`-Variable, damit wir von überall im Code aus auf unseren Würfel zugreifen können.
   - Als nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt und rufen dann `load()` auf. `load()` nimmt in diesem Fall zwei Parameter an (obwohl es mehr annehmen kann): die Struktur, die wir laden möchten (unser PNG), und eine Funktion, die ausgeführt wird, wenn die Struktur geladen ist.
   - In dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um anzugeben, dass wir einen 2 x 2-Wiederholung des Bildes auf alle Seiten des Würfels gewickelt haben möchten. Als nächstes erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt und kombinieren sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh), um unseren Würfel zu erschaffen. Ein Objekt benötigt typischerweise eine Geometrie (welche Form hat es) und ein Material (wie sieht seine Oberfläche aus?).
   - Zuletzt fügen wir unseren Würfel der Szene hinzu und rufen dann unsere `draw()`-Funktion auf, um die Animation zu starten.

8. Bevor wir zu den Definitionen von `draw()` kommen, fügen wir der Szene ein paar Lichter hinzu, um sie etwas aufzuhellen. Fügen Sie die folgenden Blöcke als nächstes hinzu:

   ```js
   const light = new THREE.AmbientLight("rgb(255 255 255)"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("rgb(255 255 255)");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art weiches Licht, das die gesamte Szene ein wenig aufhellt, wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt hingegen ist ein richtungsabhängiger Lichtstrahl, mehr wie eine Taschenlampe (oder ein Strahler, eigentlich).

9. Zuletzt fügen wir unsere `draw()`-Funktion zum Ende des Codes hinzu:

   ```js
   function draw() {
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
     renderer.render(scene, camera);

     requestAnimationFrame(draw);
   }
   ```

   Dies ist ziemlich intuitiv; für jedes Bild drehen wir unseren Würfel leicht auf seinen X- und Y-Achsen, rendern dann die Szene, wie von unserer Kamera gesehen, und schließlich rufen wir `requestAnimationFrame()` auf, um das Zeichnen unseres nächsten Bildes zu planen.

Werfen wir einen kurzen Blick auf das fertige Produkt, wie es aussehen sollte:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Sie können [den fertigen Code auf GitHub finden](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-cube).

> [!NOTE]
> In unserem GitHub-Repo finden Sie auch ein anderes interessantes 3D-Würfel-Beispiel — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dies verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Web-Kamera eines Computers zu nehmen und ihn auf der Würfelseite als Textur zu projizieren!

## Zusammenfassung

An diesem Punkt sollten Sie eine nützliche Idee der Grundlagen der Grafikprogrammierung mit `Canvas` und `WebGL` haben und was Sie mit diesen APIs tun können, sowie eine gute Vorstellung davon, wo Sie nach weiterführenden Informationen suchen können. Haben Sie Spaß!

## Siehe auch

Hier haben wir nur die grundlegendsten Aspekte von `canvas` behandelt — es gibt noch viel mehr zu lernen! Die untenstehenden Artikel werden Sie weiterbringen.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorial-Serie, die erklärt, was Sie über 2D-`canvas` in viel mehr Detail wissen sollten, als hier behandelt wurde. Wesentliche Lektüre.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Serie, die die Grundlagen der Programmierung mit rohem WebGL lehrt.
- [Erstellung eines einfachen Demos mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — ein grundlegendes Three.js-Tutorial. Wir führen auch gleichwertige Anleitungen für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spieleentwicklung](/de/docs/Games) — die Startseite für Web-Spieleentwicklung auf MDN. Hier gibt es einige wirklich nützliche Tutorials und Techniken zu 2D- und 3D-`canvas` — siehe die Menüoptionen Techniken und Tutorials.

## Beispiele

- [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API, um Klang zu erzeugen und `canvas`, um eine hübsche Visualisierung dazu zu erzeugen.
- [Voice Change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein `canvas`, um Audio-Daten in Echtzeit von der Web Audio API zu visualisieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
