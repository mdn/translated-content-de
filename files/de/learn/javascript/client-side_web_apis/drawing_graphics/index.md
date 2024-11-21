---
title: Grafiken zeichnen
slug: Learn/JavaScript/Client-side_web_APIs/Drawing_graphics
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

Der Browser enthält einige sehr leistungsfähige Werkzeuge zur Grafikprogrammierung, von der Sprache für skalierbare Vektorgrafiken ([SVG](/de/docs/Web/SVG)) bis hin zu APIs zum Zeichnen auf HTML-`<canvas>`-Elementen (siehe [Die Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in Canvas und weitere Ressourcen, um Ihnen das Lernen zu erleichtern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        JavaScript-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">Erste Schritte</a>,
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Bausteine</a
        >,
        <a href="/de/docs/Learn/JavaScript/Objects">JavaScript-Objekte</a>),
        die
        <a href="/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >Grundlagen von Client-seitigen APIs</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Grundlagen des Zeichnens auf `<canvas>`-Elementen mit JavaScript zu lernen.
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Wie in unserem HTML-Modul [Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding) besprochen, bestand das Web ursprünglich nur aus Text, was sehr langweilig war. Daher wurden Bilder eingeführt — zuerst über das `<img>`-Element und später über CSS-Eigenschaften wie `background-image` und [SVG](/de/docs/Web/SVG).

Dies war jedoch immer noch nicht genug. Während Sie [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) verwenden konnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) — da sie durch Markup repräsentiert werden — gab es immer noch keine Möglichkeit, dasselbe mit Bitmap-Bildern zu tun, und die verfügbaren Werkzeuge waren eher begrenzt. Das Web hatte immer noch keine effektive Möglichkeit, Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die normalerweise von niedrigeren Programmiersprachen wie C++ oder Java behandelt werden.

Die Situation begann sich zu verbessern, als Browser im Jahr 2004 das `<canvas>`-Element und die zugehörige [Canvas-API](/de/docs/Web/API/Canvas_API) unterstützten. Wie Sie unten sehen werden, bietet Canvas einige nützliche Werkzeuge zur Erstellung von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere in Kombination mit einigen der anderen APIs, die die Webplattform bietet. Es kann jedoch schwierig oder unmöglich sein, es zugänglich zu machen.

Das untenstehende Beispiel zeigt eine einfache 2D-Canvas-basierte Animation von hüpfenden Bällen, die wir ursprünglich in unserem Modul [Einführung in JavaScript-Objekte](/de/docs/Learn/JavaScript/Objects/Object_building_practice) kennengelernt haben:

{{EmbedGHLiveSample("learning-area/javascript/oojs/bouncing-balls/index-finished.html", '100%', 500)}}

Um 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Daraus entstand [WebGL](/de/docs/Web/API/WebGL_API), das bei Browseranbietern an Popularität gewann und um 2009–2010 standardisiert wurde. WebGL ermöglicht es Ihnen, echte 3D-Grafiken direkt in Ihrem Webbrowser zu erstellen; das untenstehende Beispiel zeigt einen einfachen rotierenden WebGL-Würfel:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Dieser Artikel wird sich hauptsächlich auf 2D-Canvas konzentrieren, da roher WebGL-Code sehr komplex ist. Wir werden jedoch zeigen, wie man mit einer WebGL-Bibliothek eine 3D-Szene leichter erstellen kann. Ein ausführliches Tutorial zu rohem WebGL finden Sie andernorts — siehe [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Aktives Lernen: Erste Schritte mit einem `<canvas>`

Wenn Sie eine 2D- _oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-`<canvas>`-Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Dies ist so einfach wie das Einfügen des Elements auf der Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dies erzeugt ein Canvas auf der Seite mit einer Größe von 320 x 240 Pixeln.

Sie sollten einige Fallback-Inhalte innerhalb der `<canvas>`-Tags hinzufügen. Diese sollten den Canvas-Inhalt für Benutzer von Browsern beschreiben, die Canvas nicht unterstützen, oder für Benutzer von Bildschirmlesegeräten.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Der Fallback sollte nützlichen alternativen Inhalt zum Canvas-Inhalt bieten. Wenn Sie beispielsweise ein ständig aktualisiertes Diagramm von Aktienkursen rendern, könnte der Fallback-Inhalt ein statisches Bild des neuesten Börsendiagramms sein, mit `alt`-Text, der angibt, wie die Preise in Textform sind oder eine Liste von Links zu einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalte sind für Bildschirmlesegeräte nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attributs direkt auf dem Canvas-Element selbst hinzu oder fügen Sie Fallback-Inhalte innerhalb der öffnenden und schließenden `<canvas>`-Tags ein. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte sind es.

### Unser Canvas erstellen und dimensionieren

Fangen wir an, unser eigenes Canvas zu erstellen, auf das wir zukünftige Experimente zeichnen werden.

1. Erstellen Sie zunächst eine lokale Kopie des Verzeichnisses [0_canvas_start](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/0_canvas_start). Es enthält drei Dateien:
   - "index.html"
   - "script.js"
   - "style.css"
2. Öffnen Sie "index.html" und fügen Sie den folgenden Code direkt unter dem öffnenden `<body>`-Tag ein:

   ```html
   <canvas class="myCanvas">
     <p>Add suitable fallback here.</p>
   </canvas>
   ```

   Wir haben dem `<canvas>`-Element eine `class` hinzugefügt, damit es einfacher ist, es zu selektieren, wenn wir mehrere Canvases auf der Seite haben. Wir haben jedoch die Attribute `width` und `height` vorerst entfernt (Sie könnten sie wieder hinzufügen, wenn Sie möchten, aber wir werden sie in einem untenstehenden Abschnitt mit JavaScript festlegen). Canvases ohne explizite Breite und Höhe haben standardmäßig eine Breite von 300 Pixeln und eine Höhe von 150 Pixeln.

3. Öffnen Sie nun "script.js" und fügen Sie die folgenden JavaScript-Zeilen hinzu:

   ```js
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz auf das Canvas in der Konstante `canvas` gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas gleich [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Breite des Ansichtsfensters gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas gleich [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Höhe des Ansichtsfensters gibt). Jetzt haben wir ein Canvas, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden auch sehen, dass wir mehrere Zuweisungen mit mehreren Gleichheitszeichen aufeinanderfolgend verketten — dies ist in JavaScript erlaubt und eine gute Technik, wenn Sie mehrere Variablen auf den gleichen Wert setzen möchten. Wir wollten die Canvas-Breite und -Höhe in den Breite/Höhe-Variablen leicht zugänglich machen, da es nützliche Werte sind, die später verfügbar sein sollten (zum Beispiel, wenn Sie etwas genau in der Mitte der Breite des Canvas zeichnen möchten).

> [!NOTE]
> Sie sollten die Bildgröße in der Regel mit HTML-Attributen oder DOM-Eigenschaften festlegen, wie oben erläutert. Sie könnten CSS verwenden, aber das Problem ist dann, dass die Größeneinstellung nach dem Rendern des Canvas erfolgt. Genau wie bei einem anderen Bild (das gerenderte Canvas ist nur ein Bild) könnte das Bild pixelig/verzogen werden.

### Holen Sie sich den Canvas-Context und den endgültigen Setup

Wir müssen noch eine letzte Sache tun, bevor wir unser Canvas-Template fertigstellen können. Um auf das Canvas zu zeichnen, müssen wir eine spezielle Referenz auf den Zeichenbereich namens Kontext abrufen. Dies geschieht mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die für die Grundverwendung als Parameter einen String akzeptiert, der den Typ des zu holenden Kontexts darstellt.

In diesem Fall wollen wir ein 2D-Canvas, also fügen Sie die folgende JavaScript-Zeile unter den anderen in "script.js" hinzu:

```js
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextwerte, die Sie wählen könnten, sind `webgl` für WebGL, `webgl2` für WebGL 2, usw., aber die werden wir in diesem Artikel nicht benötigen.

Das war's — unser Canvas ist jetzt bereit zum Zeichnen! Die Variable `ctx` enthält jetzt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, und alle Zeichenoperationen auf dem Canvas beinhalten die Manipulation dieses Objekts.

Lassen Sie uns noch eines tun, bevor wir weitermachen. Wir färben den Hintergrund des Canvas schwarz, um Ihnen einen ersten Eindruck von der Canvas-API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

```js
ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mit der [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)-Eigenschaft des Canvas (dies nimmt [Farbwerte](/de/docs/Learn/CSS/Building_blocks/Values_and_units#color) wie CSS-Eigenschaften an), dann zeichnen wir ein Rechteck, das den gesamten Bereich des Canvas mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) abdeckt (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, die Sie für das Rechteck gezeichnet haben möchten – wir haben Ihnen gesagt, dass diese `width` und `height` Variablen nützlich sein würden)!

OK, unser Template ist fertig und es ist Zeit weiterzumachen.

## Grundlagen des 2D-Canvas

Wie wir oben gesagt haben, werden alle Zeichenoperationen durch Manipulation eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts (in unserem Fall `ctx`) durchgeführt. Viele Operationen müssen mit Koordinaten durchgeführt werden, um genau anzugeben, wo etwas gezeichnet werden soll — die obere linke Ecke des Canvas ist der Punkt (0, 0), die horizontale (x) Achse verläuft von links nach rechts, und die vertikale (y) Achse verläuft von oben nach unten.

![Gittergrafikpapier mit kleinen Quadraten, die seinen Bereich bedecken, mit einem stahlblauen Quadrat in der Mitte. Die obere linke Ecke des Canvas ist Punkt (0, 0) der Canvas x-Achse und y-Achse. Die horizontale (x) Achse verläuft von links nach rechts und bezeichnet die Breite, und die vertikale (y) Achse verläuft von oben nach unten und bezeichnet die Höhe. Die obere linke Ecke des blauen Quadrats ist als Entfernung von x-Einheiten von der y-Achse und y-Einheiten von der x-Achse gekennzeichnet.](canvas_default_grid.png)

Das Zeichnen von Formen wird tendenziell unter Verwendung der Rechteckformprimitive oder durch das Nachzeichnen einer Linie entlang eines bestimmten Pfades und dann das Ausfüllen der Form durchgeführt. Im Folgenden zeigen wir, wie man beides macht.

### Einfache Rechtecke

Lassen Sie uns mit einigen einfachen Rechtecken beginnen.

1. Nehmen Sie zunächst eine Kopie Ihrer neu codierten Canvas-Vorlage (oder machen Sie eine lokale Kopie des Verzeichnisses [1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template), wenn Sie die obigen Schritte nicht befolgt haben).
2. Fügen Sie als Nächstes die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 0)";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie speichern und aktualisieren, sollten Sie ein rotes Rechteck auf Ihrem Canvas sehen. Seine obere linke Ecke befindet sich 50 Pixel von oben und links vom Rand des Canvas entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch den dritten und vierten Parameter definiert).

3. Fügen wir noch ein weiteres Rechteck hinzu — diesmal ein grünes. Fügen Sie Folgendes am Ende Ihres JavaScripts hinzu:

   ```js
   ctx.fillStyle = "rgb(0 255 0)";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren, und Sie sehen Ihr neues Rechteck. Dies wirft einen wichtigen Punkt auf: Grafikoperationen wie das Zeichnen von Rechtecken, Linien und dergleichen werden in der Reihenfolge, in der sie auftreten, durchgeführt. Denken Sie daran, es ist wie beim Streichen einer Wand, wobei jede Farbschicht das überlappt und möglicherweise verbirgt, was darunter ist. Sie können nichts tun, um dies zu ändern, daher müssen Sie sehr sorgfältig über die Reihenfolge nachdenken, in der Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, beispielsweise durch Verwendung von `rgb()`. Der "Alphakanal" definiert die Menge an Transparenz, die die Farbe hat. Je höher der Wert, desto mehr wird verdeckt, was sich dahinter befindet. Fügen Sie Folgendes zu Ihrem Code hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, einige weitere Rechtecke von Ihrer Seite aus zu zeichnen; haben Sie Spaß!

### Umrisse und Linienbreiten

Bisher haben wir das Zeichnen gefüllter Rechtecke betrachtet, aber Sie können auch Rechtecke zeichnen, die lediglich Umrisse sind (in der Grafikdesignsprache als **Strokes** bezeichnet werden). Um die gewünschte Farbe für Ihren Stroke festzulegen, verwenden Sie die Eigenschaft [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle); zum Zeichnen eines Stroke-Rechtecks wird [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect) verwendet.

1. Fügen Sie dem vorherigen Beispiel das Folgende hinzu, wiederum unter den vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "rgb(255 255 255)";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Strokes beträgt 1 Pixel; Sie können den Wert der Eigenschaft [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth) ändern, um diese zu verändern (es handelt sich um eine Zahl, die die Anzahl der Pixel beschreibt, die der Stroke breit ist). Fügen Sie die folgende Zeile zwischen die vorhergehenden zwei Zeilen ein:

   ```js
   ctx.lineWidth = 5;
   ```

Jetzt sollten Sie sehen, dass der weiße Umriss viel dicker geworden ist! Das war's für jetzt. An diesem Punkt sollte Ihr Beispiel so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles/index.html", '100%', 250)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [2_canvas_rectangles](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles).

### Pfade zeichnen

Wenn Sie etwas komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Grundsätzlich bedeutet dies, dass Sie Code schreiben, um genau anzugeben, welchen Pfad das Stiftwerkzeug auf Ihrem Canvas zurücklegen soll, um die Form zu zeichnen, die Sie zeichnen möchten. Canvas enthält Funktionen zum Zeichnen von Linien, Kreisen, Bézierkurven und mehr.

Beginnen wir den Abschnitt damit, eine frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) zu erstellen, in der das neue Beispiel gezeichnet wird.

Wir werden einige gemeinsame Methoden und Eigenschaften über alle unten stehenden Abschnitte verwenden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — Starten Sie einen Zeichenpfad an dem Punkt, an dem sich der Stift derzeit auf dem Canvas befindet. Auf einem neuen Canvas beginnt der Stift bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — Bewegen Sie den Stift an einen anderen Punkt auf dem Canvas, ohne die Linie aufzuzeichnen oder nachzuzeichnen; der Stift "springt" zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — Zeichnen Sie eine gefüllte Form, indem Sie den zuvor verfolgten Pfad ausfüllen.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — Zeichnen Sie eine Umrissform, indem Sie einen Stroke entlang des bisher gezeichneten Pfades zeichnen.
- Sie können auch Funktionen wie `lineWidth` und `fillStyle` / `strokeStyle` mit Pfaden sowie Rechtecken verwenden.

Ein typisches, einfaches Pfadzeichnungsoperation würde ungefähr so aussehen:

```js
ctx.fillStyle = "rgb(255 0 0)";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Linien zeichnen

Zeichnen wir ein gleichseitiges Dreieck auf das Canvas.

1. Fügen Sie zunächst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Diese konvertiert Gradwerte in Radiant, was nützlich ist, da, wann immer Sie in JavaScript einen Winkelwert angeben müssen, dieser fast immer in Radiant sein wird, aber Menschen denken normalerweise in Grad.

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Beginnen Sie als Nächstes den Pfad, indem Sie das Folgende unter Ihrer vorherigen Ergänzung hinzufügen; hier setzen wir eine Farbe für unser Dreieck, beginnen einen Pfad zu zeichnen und bewegen dann den Stift ohne Zeichnen auf (50, 50). Dort werden wir beginnen, unser Dreieck zu zeichnen.

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

   Lassen Sie uns das alles der Reihe nach durchgehen:

   Zuerst zeichnen wir eine Linie quer zu (150, 50) — unser Pfad verläuft jetzt 100 Pixel nach rechts entlang der x-Achse.

   Zweitens errechnen wir die Höhe unseres gleichseitigen Dreiecks mithilfe einfacher Trigonometrie. Grundsätzlich zeichnen wir das Dreieck nach unten zeigend. Die Winkel in einem gleichseitigen Dreieck betragen immer 60 Grad; um die Höhe zu berechnen, können wir es in zwei rechtwinklige Dreiecke teilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben werden. In Bezug auf die Seiten:

   - Die längste Seite wird als **Hypotenuse** bezeichnet.
   - Die Seite neben dem 60-Grad-Winkel wird als **Ankathete** bezeichnet — die wir als 50 Pixel kennen, da sie die Hälfte der Linie ist, die wir gerade gezeichnet haben.
   - Die Seite gegenüber dem 60-Grad-Winkel heißt **Gegenkathete**, die die Höhe des Dreiecks ist, die wir berechnen möchten.

   ![Ein gleichseitiges Dreieck, das nach unten zeigt, mit beschrifteten Winkeln und Seiten. Die horizontale Linie oben ist als 'Ankathete' gekennzeichnet. Eine senkrechte gestrichelte Linie, von der Mitte der Ankathete, als 'Gegenkathete' gekennzeichnet, teilt das Dreieck und erzeugt zwei identische rechtwinklige Dreiecke. Die rechte Seite des Dreiecks ist als Hypotenuse gekennzeichnet, da es die Hypotenuse des rechtwinkligen Dreiecks ist, das durch die mit 'Gegenkathete' beschriftete Linie gebildet wird. Obwohl die drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des rechtwinkligen Dreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass das Produkt aus der Ankathete mit dem Tangens des Winkels gleich der Gegenkathete ist, daher kommen wir auf `50 * Math.tan(degToRad(60))`. Wir verwenden unsere `degToRad()`-Funktion, um 60 Grad in Radiant umzurechnen, da {{jsxref("Math.tan()")}} einen Eingabewert in Radiant erwartet.

4. Mit der berechneten Höhe zeichnen wir eine weitere Linie nach `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss genau zwischen den vorherigen beiden X-Werten liegen, die wir festgelegt haben. Der Y-Wert hingegen muss 50 plus der Dreieckshöhe betragen, da wir wissen, dass die Spitze des Dreiecks 50 Pixel von oben des Canvas entfernt ist.
5. Die nächste Linie zeichnet eine Linie zurück zum Anfangspunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form auszufüllen.

#### Kreise zeichnen

Schauen wir uns nun an, wie man einen Kreis auf einem Canvas zeichnet. Dies wird mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) erreicht, die einen gesamten oder einen Teilkreis an einem angegebenen Punkt zeichnet.

1. Fügen wir einen Bogen zu unserem Canvas hinzu — fügen Sie Folgendes am Ende Ihres Codes hinzu:

   ```js
   ctx.fillStyle = "rgb(0 0 255)";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` nimmt sechs Parameter an. Die ersten beiden bestimmen die Position des Zentrums des Bogens (X und Y, jeweils). Der dritte ist der Radius des Kreises, der vierte und fünfte sind der Start- und Endwinkel, bei dem der Kreis gezeichnet werden soll (das heißt, das Angeben von 0 und 360 Grad ergibt einen vollständigen Kreis), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn (entgegen dem Uhrzeigersinn) oder im Uhrzeigersinn gezeichnet werden soll (`false` ist im Uhrzeigersinn).

   > [!NOTE]
   > 0 Grad ist horizontal nach rechts.

2. Versuchen wir, einen anderen Bogen hinzuzufügen:

   ```js
   ctx.fillStyle = "yellow";
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   Das Muster hier ist sehr ähnlich, aber mit zwei Unterschieden:

   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird, was bedeutet, dass, obwohl der Bogen als startend bei -45 Grad und endend bei 45 Grad angegeben ist, wir den Bogen um die 270 Grad herum zeichnen, die sich nicht innerhalb dieses Abschnitts befinden. Wenn Sie `true` auf `false` ändern und dann den Code erneut ausführen würden, würde nur das 90-Grad-Stück des Kreises gezeichnet werden.
   - Bevor wir `fill()` aufrufen, zeichnen wir eine Linie zur Mitte des Kreises. Dies bedeutet, dass wir den ziemlich hübschen Pac-Man-Stil-Ausschnitt gerendert bekommen. Wenn Sie diese Linie entfernen würden (versuchen Sie es!), dann den Code erneut ausführen, bekämen Sie nur den Rand des Kreises abgeschnitten, der zwischen dem Anfangs- und Endpunkt des Bogens liegt. Dies illustriert einen weiteren wichtigen Punkt des Canvas — wenn Sie versuchen, einen unvollständigen Pfad zu füllen (d. h. einen, der nicht geschlossen ist), füllt der Browser eine gerade Linie zwischen dem Anfangs- und Endpunkt und füllt sie dann aus.

Das war's für jetzt; Ihr finales Beispiel sollte ungefähr so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/3_canvas_paths/index.html", '100%', 200)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [3_canvas_paths](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/3_canvas_paths).

> [!NOTE]
> Weitere Informationen zu erweiterten Pfadzeichnungsfunktionen wie Bézierkurven finden Sie in unserem Tutorial [Formen mit Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes).

### Text

Canvas verfügt auch über Funktionen zum Zeichnen von Text. Lass uns diese kurz erkunden. Beginnen Sie, indem Sie eine weitere frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) erstellen, in der das neue Beispiel gezeichnet wird.

Text wird unter Verwendung zweier Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnet Umriss (Stroke)-Text.

Beide nehmen drei Eigenschaften im Basiseinsatz an: den zu zeichnenden Textstring und die X- und Y-Koordinaten der Startposition für das Zeichnen des Textes. Dies ergibt sich als **unten links** Ecke des **Textfeldes** (buchstäblich das Feld, das den von Ihnen gezeichneten Text umgibt), was Sie verwirren könnte, da andere Zeichengebiete normalerweise von der oberen linken Ecke beginnen — behalten Sie dies im Hinterkopf.

Es gibt auch einige Eigenschaften, um die Textwiedergabe zu steuern, wie [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), die es Ihnen ermöglichen, Schriftfamilie, Größe usw. anzugeben. Sie nimmt als ihren Wert dieselbe Syntax wie die CSS-Eigenschaft {{cssxref("font")}} an.

Canvas-Inhalte sind für Bildschirmlesegeräte nicht zugänglich. Text, der auf das Canvas gemalt wurde, ist im DOM nicht verfügbar, muss jedoch zugänglich gemacht werden, um barrierefrei zu sein. In diesem Beispiel beinhalten wir den Text als Wert für `aria-label`.

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

Hier zeichnen wir zwei Textzeilen, eine mit Umriss und die andere mit Stroke. Das finale Beispiel sollte wie folgt aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/4_canvas_text/index.html", '100%', 180)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [4_canvas_text](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/4_canvas_text).

Probieren Sie es aus und sehen Sie, was Ihnen einfällt! Weitere Informationen zu den verfügbaren Optionen für Canvas-Text finden Sie unter [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Bilder auf das Canvas zeichnen

Es ist möglich, externe Bilder auf Ihr Canvas zu rendern. Diese können einfache Bilder, Frames aus Videos, oder Inhalte anderer Canvases sein. Im Moment werden wir uns den Fall ansehen, einige einfache Bilder auf unserem Canvas zu verwenden.

1. Erstellen Sie wie zuvor eine weitere frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)), in der das neue Beispiel gezeichnet wird.

   Bilder werden auf das Canvas mithilfe der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) gezeichnet. Die einfachste Version nimmt drei Parameter: eine Referenz zu dem Bild, das Sie rendern möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Beginnen wir damit, eine Bildquelle zu erhalten, die wir in unser Canvas einbetten. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

   ```js
   const image = new Image();
   image.src = "firefox.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt mithilfe des Konstruktors [`Image()`](/de/docs/Web/API/HTMLImageElement/Image). Das zurückgegebene Objekt ist vom gleichen Typ wie das, was zurückgegeben wird, wenn Sie eine Referenz zu einem bestehenden `<img>`-Element erhalten. Wir setzen dann dessen [`src`](/de/docs/Web/HTML/Element/img#src)-Attribut auf unser Firefox-Logo-Bild. An diesem Punkt beginnt der Browser, das Bild zu laden.

3. Wir könnten nun versuchen, das Bild unter Verwendung von `drawImage()` einzubetten, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, sonst schlägt der Code fehl. Wir können dies mithilfe des `load`-Events erreichen, das nur ausgelöst wird, wenn das Bild fertig geladen wurde. Fügen Sie den folgenden Block unter dem vorherigen hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie das Bild im Canvas eingebettet sehen.

4. Aber es gibt mehr! Was, wenn wir nur einen Teil des Bildes anzeigen oder es in der Größe ändern möchten? Wir können beides mit der komplexeren Version von `drawImage()` tun. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile wie folgt:

   ```js
   ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
   ```

   - Der erste Parameter ist die Bildreferenz wie zuvor.
   - Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links vom ersten Parameter oder oberhalb des zweiten wird gezeichnet.
   - Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem ursprünglichen Bild, das wir geladen haben, ausschneiden möchten.
   - Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Bereichs des Bildes zeichnen möchten, relativ zur oberen linken Ecke des Canvas.
   - Parameter 8 und 9 definieren die Breite und Höhe, um den ausgeschnittenen Abschnitt des Bildes zu zeichnen. In diesem Fall haben wir die gleichen Maße wie der ursprüngliche Ausschnitt angegeben, aber Sie könnten es durch Angabe verschiedener Werte in der Größe ändern.

5. Wenn das Bild sinnvoll aktualisiert wird, muss auch die {{Glossary("accessible_description", "barrierefreie Beschreibung")}} aktualisiert werden.

   ```js
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das finale Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/5_canvas_images/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [5_canvas_images](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/5_canvas_images).

## Schleifen und Animationen

Bis jetzt haben wir einige sehr grundlegende Verwendungen des 2D-C

anvas betrachtet, aber wirklich, Sie werden die volle Leistungsfähigkeit des Canvas erst erleben, wenn Sie es auf irgendeine Weise aktualisieren oder animieren. Schließlich bietet Canvas skriptable Bilder! Wenn Sie nichts ändern wollen, könnten Sie ebenso gut statische Bilder verwenden und sich die ganze Arbeit ersparen.

### Eine Schleife erstellen

Mit Schleifen im Canvas zu spielen, macht ziemlich Spaß — Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) (oder anderer) Schleife ausführen, wie bei jedem anderen JavaScript-Code.

Legen wir ein Beispiel an.

1. Erstellen Sie noch eine frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie sie in Ihrem Code-Editor.
2. Fügen Sie die folgende Zeile am Ende Ihres JavaScripts hinzu. Diese enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

   Dies veranlasst den Koordinatenursprung (0, 0), in die Mitte des Canvas verschoben zu werden, anstatt in der oberen linken Ecke zu sein. Dies ist in vielen Situationen sehr nützlich, wie in dieser, in der wir unser Design in Bezug zur Mitte des Canvas zeichnen möchten.

3. Fügen Sie jetzt den folgenden Code am Ende des JavaScripts hinzu:

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

   Hier implementieren wir dieselbe `degToRad()` Funktion, die wir im Dreieck-Beispiel oben gesehen haben, eine `rand()` Funktion, die eine Zufallszahl zwischen gegebenen unteren und oberen Grenzen zurückgibt, `length` und `moveOffset` Variablen (über die wir später mehr erfahren werden), und eine leere `for` Schleife.

4. Die Idee hier ist, dass wir in der `for` Schleife etwas auf das Canvas zeichnen und es jedes Mal iterieren, um etwas Interessantes zu schaffen. Fügen Sie den folgenden Code innerhalb Ihrer `for` Schleife hinzu:

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

   Bei jedem Durchlauf machen wir Folgendes:

   - Wir setzen das `fillStyle` auf einen leicht transparenten lila Farbton, der jedes Mal basierend auf dem Wert von `length` anders ist. Wie Sie später sehen werden, wird die Länge jedes Mal kleiner, wenn die Schleife ausgeführt wird, sodass der Effekt hier ist, dass die Farbe bei jedem gezeichneten Dreieck heller wird.
   - Beginnen Sie den Pfad.
   - Bewegen Sie den Stift zu einer Koordinate von `(moveOffset, moveOffset)`; Diese Variable definiert, wie weit wir uns jedes Mal bewegen möchten, wenn wir ein neues Dreieck zeichnen.
   - Zeichnen Sie eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Dies zeichnet eine Linie der Länge `length` parallel zur X-Achse.
   - Berechnen Sie die Höhe des Dreiecks wie zuvor.
   - Zeichnen Sie eine Linie zur nach unten zeigenden Ecke des Dreiecks und dann eine Linie zurück zum Anfang des Dreiecks.
   - Rufen Sie `fill()` auf, um das Dreieck auszufüllen.
   - Aktualisieren Sie die Variablen, die die Dreieckfolge beschreiben, damit wir bereit sind, das nächste zu zeichnen. Wir verringern den `length` Wert um 1, sodass die Dreiecke jedes Mal kleiner werden; erhöhen `moveOffset` um einen kleinen Betrag, sodass jedes aufeinanderfolgende Dreieck etwas weiter entfernt ist, und verwenden eine weitere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), die es uns ermöglicht, das ganze Canvas zu drehen! Wir drehen es um 5 Grad, bevor das nächste Dreieck gezeichnet wird.

Das war's! Das finale Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop/index.html", '100%', 550)}}

An diesem Punkt möchten wir Sie ermutigen, mit dem Beispiel zu spielen und es zu Ihrem eigenen zu machen! Zum Beispiel:

- Zeichnen Sie Rechtecke oder Bögen anstelle von Dreiecken oder betten Sie sogar Bilder ein.
- Spielen Sie mit den `length` und `moveOffset` Werten.
- Führen Sie einige Zufallszahlen mithilfe der `rand()` Funktion ein, die wir oben eingefügt, aber nicht verwendet haben.

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [6_canvas_for_loop](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop).

### Animationen

Das Schleifenbeispiel, das wir oben erstellt haben, war unterhaltsam, aber wirklich benötigen Sie eine konstante Schleife, die immer wieder läuft, für alle ernsthaften Canvas-Anwendungen (wie Spiele und Echtzeit-Visualisierungen). Wenn Sie das Canvas als einen Film betrachten, möchten Sie wirklich, dass das Display bei jedem Frame aktualisiert wird, um die aktualisierte Ansicht anzuzeigen, mit einer idealen Bildwiederholrate von 60 Frames pro Sekunde, damit die Bewegung für das menschliche Auge schön und glatt erscheint.

Es gibt ein paar JavaScript-Funktionen, die es Ihnen ermöglichen, Funktionen mehrmals pro Sekunde wiederholt auszuführen, von denen die beste für unsere Zwecke hier [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) ist. Es nimmt einen Parameter — den Namen der Funktion, die Sie für jeden Frame ausführen möchten. Beim nächsten Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion die neue Aktualisierung Ihrer Animation zeichnet und dann `requestAnimationFrame()` erneut direkt vor dem Ende der Funktion aufruft, wird die Animationsschleife weitergeführt. Die Schleife endet, wenn Sie aufhören, `requestAnimationFrame()` aufzurufen, oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) nach dem Aufrufen von `requestAnimationFrame()` aber bevor der Frame aufgerufen wurde, aufgerufen haben.

> [!NOTE]
> Es ist eine gute Praxis, `cancelAnimationFrame()` von Ihrem Hauptcode aus aufzurufen, wenn Sie mit der Verwendung der Animation fertig sind, um sicherzustellen, dass keine Aktualisierungen mehr ausstehen, die ausgeführt werden müssen.

Der Browser übernimmt komplexe Details wie das Laufenlassen der Animation mit einer konsistenten Geschwindigkeit und das Vermeiden von Ressourcenverschwendung, um Dinge zu animieren, die nicht gesehen werden können.

Um zu sehen, wie es funktioniert, schauen wir uns kurz unser Bouncing-Balls-Beispiel an ([Live-Beispiel](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html), und sehen Sie sich [den Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/oojs/bouncing-balls) an). Der Code für die Schleife, die alles in Bewegung hält, sieht folgendermaßen aus:

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

Wir führen die `loop()` Funktion einmal unten im Code aus, um den Zyklus zu starten und den ersten Animationsrahmen zu zeichnen; die `loop()` Funktion übernimmt dann die Aufgabe, `requestAnimationFrame(loop)` aufzurufen, um den nächsten Frame der Animation erneut und erneut zu zeichnen.

Beachten Sie, dass wir in jedem Frame das Canvas vollständig leeren und alles neu zeichnen. Für jede vorhandene Kugel zeichnen wir sie, aktualisieren ihre Position und prüfen, ob sie mit anderen Kugeln kollidiert. Sobald Sie eine Grafik auf ein Canvas gezeichnet haben, gibt es keine Möglichkeit, diese Grafik einzeln zu manipulieren, wie es mit DOM-Elementen möglich ist. Sie können jede Kugel nicht auf dem Canvas bewegen, da sie, sobald sie gezeichnet wurde, Teil des Canvas ist und kein einzelnes zugängliches Element oder Objekt ist. Stattdessen müssen Sie löschen und neu zeichnen, entweder indem Sie den gesamten Frame löschen und alles neu zeichnen, oder indem Sie Code haben, der weiß, welche Teile gelöscht werden müssen, und nur die Minimalfläche des Canvas löscht und neu zeichnet.

Die Optimierung der Animation von Grafiken ist ein ganz eigener Bereich der Programmierung, bei dem es viele clevere Techniken gibt. Diese liegen jedoch außerhalb dessen, was wir für unser Beispiel benötigen!

Im Allgemeinen umfasst der Prozess des Animierens eines Canvas die folgenden Schritte:

1. Löschen des Canvas-Inhalts (z. B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Speichern des Zustands (falls erforderlich) mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) — Dies ist erforderlich, wenn Sie Einstellungen, die Sie auf dem Canvas aktualisiert haben, speichern möchten, bevor Sie fortfahren, was für fortgeschrittenere Anwendungen nützlich ist.
3. Zeichnen der Grafiken, die Sie animieren.
4. Wiederherstellen der in Schritt 2 gespeicherten Einstellungen mit [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore).
5. Aufrufen von `requestAnimationFrame()`, um das Zeichnen des nächsten Rahmens der Animation zu planen.

> [!NOTE]
> Wir werden `save()` und `restore()` hier nicht abdecken, aber sie werden gut in unserem [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations) Tutorial (und den darauf folgenden) erklärt.

### Eine einfache Charakteranimation

Lassen Sie uns nun unsere eigene einfache Animation erstellen — wir werden einen Charakter aus einem ziemlich großartigen Retro-Computer-Spiel über den Bildschirm gehen lassen.

1. Erstellen Sie noch eine frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie sie in Ihrem Code-Editor.

2. Aktualisieren Sie das innere HTML so, dass es dem Bild entspricht:

   ```html
   <canvas class="myCanvas">
     <p>A man walking.</p>
   </canvas>
   ```

3. Fügen Sie am Ende des JavaScripts die folgende Zeile hinzu, um den Koordinatenursprung erneut in der Mitte des Canvas festzulegen:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

4. Lassen Sie uns jetzt ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt erstellen, dessen [`src`](/de/docs/Web/HTML/Element/img#src) auf das Bild gesetzt ist, das wir laden möchten. Fügen Sie einen `onload`-Event-Handler hinzu, der die `draw()`-Funktion auslöst, wenn das Bild geladen ist:

   ```js
   const image = new Image();
   image.src = "walk-right.png";
   image.onload = draw;
   ```

5. Fügen wir nun einige Variablen hinzu, um die Position des auf dem Bildschirm zu zeichnenden Sprites und die anzuzeigende Spritenummer zu verfolgen.

   ```js
   let sprite = 0;
   let posX = 0;
   ```

   Lassen Sie uns das Spritesheet-Bild erklären (das wir respektvoll aus Mike Thomas' [Walking cycle using CSS animation](https://codepen.io/mikethomas/pen/kQjKLW) CodePen ausgeliehen haben). Das Bild sieht wie folgt aus:

   ![Ein Sprite-Bogen mit sechs Sprite-Bildern eines einem Menschen ähnelnden Charakters in einem einzelnen Schritt nach vorne. Der Charakter hat ein weißes Hemd mit himmelblauen Knöpfen, schwarze Hosen und schwarze Schuhe. Jedes Sprite ist 102 Pixel breit und 148 Pixel hoch.](walk-right.png)

   Es enthält sechs Sprites, die die gesamte Laufsequenz umfassen — jedes ist 102 Pixel breit und 148 Pixel hoch. Um jedes Sprite sauber darzustellen, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild aus dem Spritesheet herauszuschneiden und nur diesen Teil darzustellen, wie wir oben beim Firefox-Logo getan haben. Die X-Koordinate des Ausschnitts muss ein Vielfaches von 102 sein, und die Y-Koordinate wird immer 0 sein. Die Ausschnittgröße beträgt immer 102 mal 148 Pixel.

6. Fügen wir jetzt am Ende des Codes eine leere `draw()`-Funktion ein, die bereit ist, mit etwas Code gefüllt zu werden:

   ```js
   function draw() {}
   ```

7. Der Rest des Codes in diesem Abschnitt gehört in `draw()`. Fügen Sie zunächst die folgende Zeile hinzu, die Canvas bereinigt, um jeden Frame vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width/2), -(height/2)` angeben müssen, da wir die Ursprungsposition zuvor als `width/2, height/2` festgelegt haben.

   ```js
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

8. Als Nächstes werden wir unser Bild mithilfe von drawImage zeichnen — die 9-Parameter-Version. Fügen Sie Folgendes hinzu:

   ```js
   ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);
   ```

   Wie Sie sehen können:

   - Wir geben `image` als das einzubettende Bild an.
   - Parameter 2 und 3 bestimmen die obere linke Ecke des aus dem Quellenbild herauszuschneidenden Bereichs. Der X-Wert ist `sprite` multipliziert mit 102 (wobei `sprite` die Spritenummer zwischen 0 und 5 ist) und der Y-Wert ist immer 0.
   - Parameter 4 und 5 bestimmen die Größe des aus dem geladenen Bild eruitzuschneidenden Ausschnitts — 102 Pixel mal 148 Pixel.
   - Parameter 6 und 7 bestimmen die obere linke Ecke des Kästchens, in das der Schnittbereich auf dem Canvas gezeichnet werden soll — die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichenposition durch Ändern des `posX` Werts ändern können.
   - Parameter 8 und 9 bestimmen die Größe des Bildes auf dem Canvas. Wir möchten es einfach in seiner ursprünglichen Größe belassen, also geben wir 102 und 148 als Breite und Höhe an.

9. Jetzt werden wir den `sprite` Wert nach jedem Zeichnen anpassen — na, nach einigen jedenfalls. Fügen Sie den folgenden Block am Ende der `draw()`-Funktion hinzu:

   ```js
   if (posX % 13 === 0) {
     if (sprite === 5) {
       sprite = 0;
     } else {
       sprite++;
     }
   }
   ```

   Wir umschließen den gesamten Block in `if (posX % 13 === 0) { }`. Wir verwenden den Modulo (`%`) Operator (auch bekannt als [Remainder Operator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu überprüfen, ob der `posX` Wert genau durch 13 teilbar ist, ohne Rest. Wenn ja, fahren wir fort zum nächsten Sprite, indem wir `sprite` inkrementieren (auf 0 zurücksetzen, nachdem wir mit Sprite #5 fertig sind). Dies bedeutet im Wesentlichen, dass wir das Sprite nur bei jedem 13. Frame aktualisieren, was in etwa etwa 5 Frames pro Sekunde entspricht (`requestAnimationFrame()` ruft uns bis zu 60 Frames pro Sekunde auf, wenn möglich). Wir geben absichtlich die Bildrate zurück, weil wir nur sechs Sprites haben, mit denen wir arbeiten können, und wenn wir eines alle 60stel Sekunden anzeigen würden, würde unser Charakter viel zu schnell bewegen!

   Innerhalb des äußeren Blocks verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Anweisung, um zu überprüfen, ob der `sprite` Wert bei 5 ist (dem letzten Sprite, da die Spritenummern von 0 bis 5 reichen). Wenn wir bereits das letzte Sprite anzeigen, setzen wir `sprite` wieder auf 0 zurück; wenn nicht, erhöhen wir es einfach um 1.

10. Dann müssen wir herausfinden, wie wir den `posX` Wert bei jedem Frame ändern können — fügen Sie den folgenden Codeblock direkt unter Ihrem letzten hinzu.

    ```js
    if (posX > width / 2) {
      let newStartPos = -(width / 2 + 102);
      posX = Math.ceil(newStartPos);
      console.log(posX);
    } else {
      posX += 2;
    }
    ```

    Wir verwenden eine weitere `if...else` Anweisung, um zu sehen, ob der Wert von `posX` größer ist als `width/2`, was bedeutet, dass unser Charakter den rechten Rand des Bildschirms passiert hat. Ist dies der Fall, berechnen wir eine Position, die den Charakter links vom linken Rand des Bildschirms stehen lässt.

    Wenn unser Charakter den Rand des Bildschirms noch nicht passiert hat, erhöhen wir `posX` um 2. Dies lässt ihn bei der nächsten Zeichnung ein wenig nach rechts bewegen.

11. Schließlich müssen wir die Animationsschleife erstellen, indem wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()`-Funktion aufrufen:

    ```js
    window.requestAnimationFrame(draw);
    ```

Das war's! Das finale Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [7_canvas_walking_animation](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation).

### Eine einfache Zeichenanwendung

Als letztes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben (wie Mausbewegungen, in diesem Fall) kombiniert werden kann. Wir werden Sie nicht durchgehen und Sie Nachbau machen lassen; wir werden einfach die interessantesten Teile des Codes erkunden.

Das Beispiel finden Sie auf GitHub als [8_canvas_drawing_app](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app), und Sie können es live unten ausprobieren:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app/index.html", '100%', 600)}}

Schauen wir uns die interessantesten Teile an. Zuerst verfolgen wir die X- und Y-Koordinaten der Maus und ob sie geklickt wird oder nicht mit drei Variablen: `curX`, `curY`, und `pressed`. Wenn die Maus bewegt wird, lösen wir eine Funktion aus, die als `onmousemove` Event-Handler gesetzt ist, der die aktuellen X- und Y-Werte erfasst. Wir verwenden auch `onmousedown` und `onmouseup` Event-Handler, um den Wert von `pressed` auf `true` zu ändern, wenn die Maustaste gedrückt wird, und zurück auf `false`, wenn sie freigegeben wird.

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

Wenn die Schaltfläche "Canvas löschen" gedrückt wird, führen wir eine einfache Funktion aus, die das gesamte Canvas auf schwarz zurücksetzt, genauso wie wir es bereits gesehen haben:

```js
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal ziemlich einfach — wenn `pressed` `true` ist, zeichnen wir einen Kreis mit einem Füllstil, der dem Wert im Farbwähler entspricht, und einem Radius, der dem im Bereichseingabefeld gesetzten Wert entspricht. Wir müssen den Kreis 85 Pixel über dem Punkt zeichnen, von dem wir ihn gemessen haben, weil die vertikale Messung von oben aus dem Ansichtsfenster genommen wird, aber wir den Kreis relativ zur Oberseite des Canvas zeichnen, das unter der 85 Pixel hohen Symbolleiste beginnt. Wenn wir ihn nur mit `curY` als y-Koordinate zeichnen würden, würde er 85 Pixel tiefer als die Mausposition erscheinen.

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

Alle `<input>`-Typen sind gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, wird auf einfache Texteingabefelder umgefallen.

## WebGL

Es ist jetzt an der Zeit, 2D hinter sich zu lassen und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalt wird unter Verwendung der [WebGL-API](/de/docs/Web/API/WebGL_API) spezifiziert, die eine völlig separate API von der 2D-Canvas-API ist, obwohl sie beide auf `<canvas>`-Elementen rendern.

WebGL basiert auf der {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht es Ihnen, direkt mit der {{Glossary("GPU", "GPU")}} des Computers zu kommunizieren. Als solches ähnelt das Schreiben von rohem WebGL niedrigeren Sprachen wie C++ mehr als regulärem JavaScript; es ist ziemlich komplex, aber unglaublich leistungsstark.

### Verwendung einer Bibliothek

Aufgrund ihrer Komplexität schreiben die meisten Menschen 3D-Grafikcode unter Verwendung einer Drittanbieter-JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten davon arbeiten auf ähnliche Weise, indem sie Funktionen bereitstellen, um primitive und benutzerdefinierte Formen zu erstellen, Kameras und Beleuchtung zu positionieren, Oberflächen mit Texturen zu überziehen und mehr. Sie verarbeiten das WebGL für Sie und lassen Sie auf einer höheren Ebene arbeiten.

Ja, die Verwendung einer dieser Bibliotheken bedeutet, eine andere neue API zu lernen (in diesem Fall eine Drittanbieter-API), aber sie sind viel einfacher als das Programmieren von rohem WebGL.

### Unseren Würfel neu erstellen

Schauen wir uns ein Beispiel an, wie man mit einer WebGL-Bibliothek etwas erstellt. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der beliebtesten ist. In diesem Tutorial erstellen wir den 3D-drehenden Würfel, den wir früher gesehen haben.

1. Beginnen Sie damit, eine lokale Kopie von [threejs-cube/index.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/index.html) in einem neuen Ordner zu erstellen, speichern Sie dann eine Kopie von [metal003.png](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/metal003.png) im gleichen Ordner. Dies ist das Bild, das wir später als Oberflächentextur für den Würfel verwenden werden.
2. Erstellen Sie als Nächstes eine neue Datei namens `script.js`, ebenfalls im gleichen Ordner wie zuvor.
3. Als Nächstes müssen Sie die Three.js-Bibliothek installiert haben. Sie können die Schritte zur Umgebungsinstallation im Abschnitt [Ein einfaches Beispiel mit Three.js aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) befolgen, damit Three.js wie erwartet funktioniert.
4. Jetzt haben wir `three.js` an unsere Seite angehängt, wir können anfangen, JavaScript zu schreiben, das es in `script.js` verwendet. Lassen Sie uns mit einer neuen Szene beginnen — fügen Sie Folgendes in Ihre `script.js`-Datei ein:

   ```js
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene) Konstruktor erstellt eine neue Szene, die die gesamte 3D-Welt repräsentiert, die wir anzeigen möchten.

5. Als Nächstes benötigen wir eine **Kamera**, damit wir die Szene sehen können. In 3D-Imagerie-Begriffen repräsentiert die Kamera die Position des Betrachters in der Welt. Um eine Kamera zu erstellen, fügen Sie die folgenden Zeilen als Nächstes hinzu:

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

   - Das Sichtfeld: Wie breit der Bereich vor der Kamera ist, der auf dem Bildschirm sichtbar sein sollte, in Grad.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Normalerweise das Verhältnis der Breite der Szene zur Höhe der Szene. Die Verwendung eines anderen Wertes verzerrt die Szene (was möglicherweise beabsichtigt ist, aber normalerweise nicht).
   - Die nahe Ebene: Wie nah an der Kamera Objekte sein können, bevor wir aufhören, sie auf dem Bildschirm zu rendern. Denken Sie daran, wie wenn Sie Ihre Fingerspitze näher und näher an den Punkt zwischen Ihren Augen heranbringen, sie irgendwann nicht mehr sehen können.
   - Die ferne Ebene: Wie weit entfernt Dinge von der Kamera entfernt sein können, bevor sie nicht mehr gerendert werden.

   Wir setzen auch die Position der Kamera so, dass sie 5 Entfernungseinheiten aus der Z-Achse herausragt, was, wie in CSS, aus dem Bildschirm heraus zu Ihnen, dem Betrachter, zeigt.

6. Die dritte wichtige Zutat ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene als durch eine gegebene Kamera betrachtet rendert. Wir erstellen einen für jetzt unter Verwendung des [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer) Konstruktors, werden ihn jedoch erst später verwenden. Fügen Sie als Nächstes die folgenden Zeilen hinzu:

   ```js
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile setzt die Größe, bei der der Renderer die Ansicht der Kamera zeichnen wird, und die dritte Zeile fügt das vom Renderer erstellte `<canvas>` Element in das Dokument-`<body>` Element ein. Jetzt wird alles, was der Renderer zeichnet, in unserem Fenster angezeigt.

7. Als Nächstes möchten wir den Würfel erstellen, den wir auf dem Canvas anzeigen werden. Fügen Sie den folgenden Codeblock am Ende Ihres JavaScripts hinzu:

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

   Es gibt hier ein bisschen mehr zu bedenken, also gehen wir es Schritt für Schritt durch:

   - Zuerst erstellen wir eine `cube` globale Variable, sodass wir von überall im Code auf unseren Würfel zugreifen können.
   - Als Nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader) Objekt und rufen `load()` darauf auf. `load()` nimmt, wie in diesem Fall, zwei Parameter (obwohl es mehr nehmen kann): die Textur, die wir laden möchten (unsere PNG), und eine Funktion, die ausgeführt wird, wenn die Textur geladen wurde.
   - Innerhalb dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture) Objekts, um anzugeben, dass wir einen 2 x 2 Wiederholungen des Bildes um alle Seiten des Würfels herum möchten. Danach erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry) Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial) Objekt und führen sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) zusammen, um unseren Würfel zu erstellen. Ein Objekt erfordert in der Regel eine Geometrie (welche Form es hat) und ein Material (wie seine Oberfläche aussieht).
   - Zuletzt fügen wir unseren Würfel der Szene hinzu und rufen dann unsere `draw()` Funktion auf, um die Animation zu starten.

8. Bevor wir zu `draw()` kommen, fügen wir der Szene ein paar Lichter hinzu, um die Dinge ein wenig aufzupeppen; fügen Sie die folgenden Blöcke als Nächstes hinzu:

   ```js
   const light = new THREE.AmbientLight("rgb(255 255 255)"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("rgb(255 255 255)");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight) Objekt ist eine Art sanftes Licht, das die gesamte Szene ein wenig aufhellt, wie die Sonne, wenn Sie sich draußen befinden. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight) Objekt hingegen ist ein gerichteter Lichtstrahl, mehr wie ein Taschenlampe/Flusseinziges Licht (oder tatsächlich ein Scheinwerfer).

9. Zu guter Letzt fügen wir die `draw()` Funktion am Ende des Codes hinzu:

   ```js
   function draw() {
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
     renderer.render(scene, camera);

     requestAnimationFrame(draw);
   }
   ```

   Das ist ziemlich intuitiv; bei jedem Frame drehen wir unseren Würfel ein wenig entlang seiner X- und Y-Achsen, rendern dann die Szene, wie sie von unserer Kamera betrachtet wird, und schließlich rufen wir `requestAnimationFrame()` auf, um das Zeichnen des nächsten Frames zu planen.

Schauen wir uns schnell an, wie das fertige Produkt aussehen sollte:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Sie können [den fertigen Code auf GitHub finden](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-cube).

> [!NOTE]
> In unserem GitHub-Repo können Sie auch ein weiteres interessantes 3D-Würfel-Beispiel finden — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dieses benutzt [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Computerkamera zu nehmen und auf die Seite des Würfels als Textur zu projizieren!

## Zusammenfassung

An diesem Punkt sollten Sie eine nützliche Vorstellung von den Grundlagen der Grafikenprogrammierung mit Canvas und WebGL und was Sie mit diesen APIs tun können haben, sowie eine gute Vorstellung davon, wohin Sie für weitere Informationen gehen können. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklich grundlegenden Dinge von Canvas behandelt — es gibt noch viel mehr zu lernen! Die untenstehenden Artikel nehmen Sie weiter mit.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr ausführliche Tutorial-Serie, die erklärt, was Sie über 2D-Canvas wissen sollten, viel detaillierter als hier behandelt. Unerlässliche Lektüre.
- [WebGL Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Serie, die die Grundlagen der rohen WebGL-Programmierung lehrt.
- [Ein einfaches Beispiel mit Three.js aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — grundlegendes Three.js-Tutorial. Wir haben auch entsprechende Leitfäden für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spieleentwicklung](/de/docs/Games) — die Einstiegsseite für die Web-Spieleentwicklung auf MDN. Hier gibt es einige wirklich nützliche Tutorials und Techniken, die sich auf 2D- und 3D-Canvas beziehen — sehen Sie sich die Menüoptionen für Techniken und Tutorials an.

## Beispiele

- [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API, um Ton zu erzeugen, und ein Canvas, um eine hübsche Visualisierung dazu zu erzeugen.
- [Voice Change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas, um Echtzeit-Audiodaten von der Web Audio API zu visualisieren.

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}
