---
title: Zeichnen von Grafiken
slug: Learn/JavaScript/Client-side_web_APIs/Drawing_graphics
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

Der Browser enthält einige sehr leistungsfähige Grafikprogrammiertools, von der Sprache Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) bis hin zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in das Canvas sowie weiterführende Ressourcen, damit Sie mehr erfahren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        JavaScript-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">erste Schritte</a>,
        <a href="/de/docs/Learn/JavaScript/Building_blocks">Bausteine</a>,
        <a href="/de/docs/Learn/JavaScript/Objects">JavaScript-Objekte</a>),
        die
        <a href="/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >Grundlagen der clientseitigen APIs</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Grundlagen des Zeichnens auf <code>&#x3C;canvas></code>-Elementen
        mit JavaScript lernen.
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Wie wir in unserem HTML-[Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding) Modul besprochen haben, war das Web ursprünglich nur Text, was sehr langweilig war, also wurden Bilder eingeführt — zunächst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Dies war jedoch immer noch nicht genug. Während Sie [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) verwenden konnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) — da sie durch Markup dargestellt werden — gab es immer noch keine Möglichkeit, dasselbe für Bitmap-Bilder zu tun, und die verfügbaren Tools waren ziemlich begrenzt. Das Web hatte immer noch keine effektive Methode, um Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die üblicherweise von niedrigeren Programmiersprachen wie C++ oder Java behandelt werden.

Die Situation begann sich zu verbessern, als Browser 2004 begannen, das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) zu unterstützen. Wie Sie unten sehen werden, bietet Canvas einige nützliche Werkzeuge zur Erstellung von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Anwendungsarten, insbesondere in Kombination mit einigen der anderen APIs der Webplattform, kann jedoch schwer oder unmöglich zugänglich zu machen sein

Das nachfolgende Beispiel zeigt eine einfache 2D-Canvas-basierte Animation von hüpfenden Bällen, die wir ursprünglich in unserem [JavaScript-Objekte vorstellen](/de/docs/Learn/JavaScript/Objects/Object_building_practice)-Modul kennengelernt haben:

{{EmbedGHLiveSample("learning-area/javascript/oojs/bouncing-balls/index-finished.html", '100%', 500)}}

Um 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Daraus wurde [WebGL](/de/docs/Web/API/WebGL_API), das unter Browseranbietern an Zugkraft gewann und 2009–2010 standardisiert wurde. Mit WebGL können Sie echte 3D-Grafiken in Ihrem Webbrowser erstellen; das untenstehende Beispiel zeigt einen einfachen sich drehenden WebGL-Würfel:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Dieser Artikel konzentriert sich hauptsächlich auf 2D-Canvas, da roher WebGL-Code sehr komplex ist. Wir werden jedoch zeigen, wie man mit einer WebGL-Bibliothek einfacher eine 3D-Szene erstellen kann, und Sie können ein Tutorial über rohes WebGL woanders finden — siehe [Einstieg in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Aktives Lernen: Einstieg mit einem `<canvas>`

Wenn Sie eine 2D- oder 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-{{htmlelement("canvas")}}-Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Dies ist so einfach wie das Einfügen des Elements auf der Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dies wird ein Canvas auf der Seite mit einer Größe von 320 x 240 Pixel erstellen.

Sie sollten einige Fallback-Inhalte innerhalb der `<canvas>`-Tags platzieren. Diese sollten den Canvas-Inhalt für Benutzer von Browsern beschreiben, die Canvas nicht unterstützen, oder für Benutzer von Bildschirmlesegeräten.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Das Fallback sollte nützlichen alternativen Inhalt zum Canvas-Inhalt bieten. Wenn Sie beispielsweise einen ständig aktualisierten Graphen von Aktienpreisen rendern, könnten die Fallback-Inhalte ein statisches Bild des neuesten Aktiengraphen sein, mit `alt`-Text, der beschreibt, was die Preise sind, oder eine Liste von Links zu einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalte sind nicht für Bildschirmlesegeräte zugänglich. Fügen Sie entweder beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attributs direkt am Canvas-Element selbst hinzu oder fügen Sie Fallback-Inhalte innerhalb der öffnenden und schließenden `<canvas>`-Tags hinzu. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte sind es.

### Erstellung und Größenanpassung unseres Canvas

Lassen Sie uns damit beginnen, unser eigenes Canvas zu erstellen, auf das wir zukünftige Experimente zeichnen können.

1. Erstellen Sie zunächst eine lokale Kopie des Verzeichnisses [0_canvas_start](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/0_canvas_start). Es enthält drei Dateien:
   - "index.html"
   - "script.js"
   - "style.css"
2. Öffnen Sie "index.html" und fügen Sie den folgenden Code unterhalb des öffnenden {{htmlelement("body")}}-Tags hinzu:

   ```html
   <canvas class="myCanvas">
     <p>Add suitable fallback here.</p>
   </canvas>
   ```

   Wir haben dem `<canvas>`-Element eine `class` hinzugefügt, damit es einfacher auszuwählen ist, wenn wir mehrere Canvas auf der Seite haben, aber die `width`- und `height`-Attribute haben wir vorerst entfernt (Sie könnten sie wieder hinzufügen, wenn Sie möchten, aber wir werden sie weiter unten mit JavaScript setzen). Canvas ohne explizite Breite und Höhe sind standardmäßig 300 Pixel breit und 150 Pixel hoch.

3. Öffnen Sie nun "script.js" und fügen Sie die folgenden JavaScript-Zeilen hinzu:

   ```js
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz zum Canvas in der `canvas`-Konstanten gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas auf [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Breite des Ansichtsfensters gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas auf [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Höhe des Ansichtsfensters gibt). So haben wir jetzt ein Canvas, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden auch sehen, dass wir mehrere Zuweisungen mit mehreren Gleichheitszeichen verketten - dies ist in JavaScript erlaubt, und es ist eine gute Technik, wenn Sie mehrere Variablen gleichwertig machen möchten. Wir wollten die Canvas-Breite und -Höhe in den Variablen width/hheight leicht zugänglich machen, da es nützliche Werte sind, die später verfügbar sein sollten (zum Beispiel, wenn Sie etwas genau in der Mitte der Canvas-Breite zeichnen möchten).

> [!NOTE]
> Sie sollten die Größe des Bildes im Allgemeinen mit HTML-Attributen oder DOM-Eigenschaften setzen, wie oben erklärt. Sie könnten CSS verwenden, aber das Problem ist dann, dass die Größenanpassung nach der Canvas-Darstellung erfolgt, und genau wie jedes andere Bild (das gerenderte Canvas ist nur ein Bild) könnte das Bild pixelig/verzerrt werden.

### Abrufen des Canvas-Kontexts und abschließende Einrichtung

Bevor wir unser Canvas-Template als abgeschlossen betrachten können, müssen wir noch eine letzte Sache tun. Um auf das Canvas zu zeichnen, müssen wir eine spezielle Referenz auf den Zeichenbereich abrufen, die als Kontext bezeichnet wird. Dies wird mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erreicht, die für die grundlegende Nutzung einen einzelnen String als Parameter nimmt, der den Typ des Kontexts darstellt, den Sie abrufen möchten.

In diesem Fall wollen wir ein 2D-Canvas, also fügen Sie die folgende JavaScript-Zeile unter den anderen in "script.js" hinzu:

```js
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextwerte, die Sie wählen könnten, sind `webgl` für WebGL, `webgl2` für WebGL 2 usw., aber wir werden sie in diesem Artikel nicht benötigen.

Das ist es – unser Canvas ist nun bereit zum Zeichnen! Die `ctx`-Variable enthält jetzt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, und alle Zeichenoperationen auf dem Canvas beinhalten die Manipulation dieses Objekts.

Lassen Sie uns noch eine letzte Sache tun, bevor wir weitergehen. Wir werden den Canvas-Hintergrund schwarz färben, um Ihnen einen ersten Eindruck der Canvas-API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript-Codes hinzu:

```js
ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mit der `fillStyle`-Eigenschaft (diese nimmt [Farbwerte](/de/docs/Learn/CSS/Building_blocks/Values_and_units#color) wie CSS-Eigenschaften) des Canvas, dann zeichnen wir ein Rechteck, das den gesamten Bereich des Canvas mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) abdeckt (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, in denen Sie das Rechteck zeichnen möchten – wir haben Ihnen gesagt, dass die `width`- und `height`-Variablen nützlich sein würden)!

OK, unser Template ist fertig, und es ist Zeit, weiterzugehen.

## Grundlagen des 2D-Canvas

Wie wir oben sagten, werden alle Zeichenoperationen durch Manipulation eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts durchgeführt (in unserem Fall `ctx`). Viele Operationen müssen Koordinaten erhalten, um genau festzulegen, wo etwas gezeichnet werden soll – die obere linke Ecke des Canvas ist Punkt (0, 0), die horizontale (x) Achse verläuft von links nach rechts, und die vertikale (y) Achse verläuft von oben nach unten.

![Ein kariertes Zeichenpapier mit kleinen Quadraten, die den Bereich abdecken, mit einem stahlblauen Quadrat in der Mitte. Die obere linke Ecke des Canvas ist Punkt (0, 0) der Canvas x-Achse und y-Achse. Die horizontale (x) Achse verläuft von links nach rechts und zeigt die Breite an, und die vertikale (y) Achse verläuft von oben nach unten und zeigt die Höhe an. Die obere linke Ecke des blauen Quadrats ist als eine Entfernung von x Einheiten von der y-Achse und y Einheiten von der x-Achse beschriftet.](canvas_default_grid.png)

Das Zeichnen von Formen geschieht in der Regel mit dem rechteckigen Formprimitiv oder durch das Nachzeichnen einer Linie entlang eines bestimmten Pfades und anschließendes Ausfüllen der Form. Unten zeigen wir, wie beides geht.

### Einfache Rechtecke

Lassen Sie uns mit ein paar einfachen Rechtecken beginnen.

1. Machen Sie zunächst eine Kopie Ihres neu eingegangenen Canvas-Templates (oder erstellen Sie eine lokale Kopie des Verzeichnisses [1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template), wenn Sie die obigen Schritte nicht befolgt haben).
2. Fügen Sie als Nächstes die folgenden Zeilen am Ende Ihres JavaScript-Codes hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 0)";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie speichern und aktualisieren, sollte ein rotes Rechteck auf Ihrem Canvas erscheinen. Seine obere linke Ecke ist 50 Pixel von der oberen und linken Kante des Canvas entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch den dritten und vierten Parameter definiert).

3. Fügen Sie ein weiteres Rechteck hinzu – ein grünes dieses Mal. Fügen Sie Folgendes am Ende Ihres JavaScript-Codes hinzu:

   ```js
   ctx.fillStyle = "rgb(0 255 0)";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren Sie, und Sie sehen Ihr neues Rechteck. Dies wirft einen wichtigen Punkt auf: Grafikoperationen wie das Zeichnen von Rechtecken, Linien usw. werden in der Reihenfolge ausgeführt, in der sie auftreten. Denken Sie daran wie das Streichen einer Wand, bei der jede Farbschicht überlappt und eventuell verbirgt, was darunter liegt. Sie können nichts daran ändern, daher müssen Sie sorgfältig über die Reihenfolge nachdenken, in der Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, z.B. durch die Verwendung von `rgb()`. Der "Alpha-Kanal" definiert die Menge der Transparenz, die die Farbe hat. Je höher der Wert, desto mehr verbirgt es, was dahinter liegt. Fügen Sie Folgendes zu Ihrem Code hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, weitere Rechtecke Ihrer eigenen zu zeichnen; haben Sie Spaß dabei!

### Umrisse und Linienbreiten

Bisher haben wir uns das Zeichnen gefüllter Rechtecke angesehen, aber Sie können auch Rechtecke zeichnen, die nur Umrisse sind (in der Grafikdesign-Sprache als **Strokes** bezeichnet). Um die Farbe festzulegen, die Sie für Ihre Umrisse möchten, verwenden Sie die [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)-Eigenschaft; das Zeichnen eines Umrissrechtecks erfolgt mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Fügen Sie das folgende Beispiel hinzu, erneut unter den vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "rgb(255 255 255)";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Der Standardwert für Strichbreiten beträgt 1 Pixel; Sie können den Wert der [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)-Eigenschaft ändern, um dies zu ändern (es nimmt eine Zahl, die die Anzahl der Pixel darstellt, die der Strich breit ist). Fügen Sie die folgende Zeile zwischen den vorherigen beiden Zeilen hinzu:

   ```js
   ctx.lineWidth = 5;
   ```

Nun sollten Sie sehen, dass Ihr weißer Umriss viel dicker geworden ist! Das war's für den Moment. An diesem Punkt sollte Ihr Beispiel so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles/index.html", '100%', 250)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [2_canvas_rectangles](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles).

### Pfade zeichnen

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Im Grunde genommen erfordert dies das Schreiben von Code, um genau anzugeben, welchen Pfad der Stift auf Ihrem Canvas entlanggehen soll, um die Form zu zeichnen, die Sie möchten. Canvas enthält Funktionen zum Zeichnen gerader Linien, Kreise, Bézier-Kurven und mehr.

Lassen Sie uns den Abschnitt beginnen, indem wir eine neue Kopie unseres Canvas-Templates ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) erstellen, in der wir das neue Beispiel zeichnen werden.

Wir werden einige gängige Methoden und Eigenschaften über alle folgenden Abschnitte hinweg verwenden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — startet das Zeichnen eines Pfades an dem Punkt, an dem sich der Stift aktuell auf dem Canvas befindet. Auf einem neuen Canvas beginnt der Stift bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — verschiebt den Stift an einen anderen Punkt auf dem Canvas, ohne die Linie aufzuzeichnen oder nachzuzeichnen; der Stift "springt" zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — zeichnet eine gefüllte Form, indem der bisher verfolgt Pfad ausgefüllt wird.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — zeichnet eine Umrissform, indem ein Stroke entlang des bisher gezeichneten Pfades gezogen wird.
- Sie können Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` mit Pfaden genauso wie mit Rechtecken verwenden.

Eine typische, einfache Pfad-Zeichenoperation sieht in etwa so aus:

```js
ctx.fillStyle = "rgb(255 0 0)";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Linien zeichnen

Lassen Sie uns ein gleichseitiges Dreieck auf dem Canvas zeichnen.

1. Fügen Sie zuerst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Diese konvertiert Gradwerte in Radianten, was nützlich ist, da immer, wenn Sie JavaScript einen Winkelwert angeben müssen, dieser in Rad übergeben wird, Menschen jedoch normalerweise in Grad denken.

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Beginnen Sie als Nächstes Ihren Pfad, indem Sie das Folgende unter Ihrer vorherigen Ergänzung hinzufügen; hier setzen wir eine Farbe für unser Dreieck, beginnen, einen Pfad zu zeichnen, und verschieben den Stift dann ohne Zeichnen zu (50, 50). Dort werden wir mit dem Zeichnen unseres Dreiecks beginnen.

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

   Gehen wir dies in der Reihenfolge durch:

   Zuerst zeichnen wir eine Linie nach (150, 50) - unser Pfad läuft jetzt 100 Pixel nach rechts entlang der x-Achse.

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks mit etwas einfacher Trigonometrie. Im Grunde zeichnen wir das Dreieck nach unten zeigend. Die Winkel in einem gleichseitigen Dreieck sind immer 60 Grad; um die Höhe zu berechnen, können wir es in der Mitte in zwei rechtwinklige Dreiecke teilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben. In Bezug auf die Seiten:

   - Die längste Seite wird **Hypotenuse** genannt
   - Die Seite neben dem 60-Grad-Winkel wird **Anliegende** genannt – was wir wissen, ist 50 Pixel, da es die Hälfte der Linie ist, die wir gerade gezeichnet haben.
   - Die dem 60-Grad-Winkel gegenüberliegende Seite wird **Gegenüberliegende** genannt, was die Höhe des Dreiecks ist, die wir berechnen möchten.

   ![Ein nach unten zeigendes gleichseitiges Dreieck mit beschrifteten Winkeln und Seiten. Die horizontale Linie oben ist als 'anliegende' beschriftet. Eine senkrechte gestrichelte Linie, aus der Mitte der anliegenden Linie, beschriftet 'gegenüberliegend', teilt das Dreieck und erzeugt zwei gleiche rechte Winkel. Die rechte Seite des Dreiecks ist als Hypotenuse beschriftet, da sie die Hypotenuse des das durch die Linie beschriftete 'gegenüberliegende' gebildete Rechtwinkligeen Dreiecks ist. Obwohl alle drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des rechtwinkligen Dreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass die Länge der Anliegenden multipliziert mit dem Tangens des Winkels der Gegenüberliegenden, das heißt, wir kommen auf `50 * Math.tan(degToRad(60))`. Wir verwenden unsere `degToRad()`-Funktion, um 60 Grad in Rad umzurechnen, was {{jsxref("Math.tan()")}} als Eingabewert erwartet.

4. Mit der kalkulierten Höhe zeichnen wir eine weitere Linie zu `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss zu einem Halbweg zwischen den vorherigen beiden X-Werten gesetzt werden. Der Y-Wert muss jedoch 50 plus die Dreieckshöhe sein, da der obere Teil des Dreiecks 50 Pixel vom oberen Teil des Canvas entfernt ist.
5. Die nächste Linie zeichnet eine Linie zurück zum Ausgangspunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form zu füllen.

#### Kreise zeichnen

Sehen wir uns nun an, wie man einen Kreis in einem Canvas zeichnet. Dies wird mithilfe der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) erreicht, die einen ganzen oder einen Teil eines Kreises an einem angegebenen Punkt zeichnet.

1. Fügen wir einen Bogen zu unserem Canvas hinzu – fügen Sie Folgendes am Ende Ihres Codes hinzu:

   ```js
   ctx.fillStyle = "rgb(0 0 255)";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` benötigt sechs Parameter. Die ersten beiden geben die Position des Mittelpunkts des Bogens an (X und Y), der dritte ist der Radius des Kreises, der vierte und fünfte sind die Start- und Endwinkel des zu zeichnenden Kreises (daher ergibt das Angeben von 0 und 360 Grad einen vollständigen Kreis), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn oder im Uhrzeigersinn (`false` ist im Uhrzeigersinn) gezeichnet werden soll.

   > [!NOTE]
   > 0 Grad ist horizontal rechts.

2. Versuchen wir, einen weiteren Bogen hinzuzufügen:

   ```js
   ctx.fillStyle = "yellow";
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   Das Muster hier ist sehr ähnlich, jedoch mit zwei Unterschieden:

   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird, was dazu führt, dass der Bogen über die 270 Grad, die nicht in diesem Abschnitt liegen, gezeichnet wird. Wenn Sie `true` in `false` ändern und den Code dann erneut ausführen, wird nur der 90-Grad-Slice des Kreises gezeichnet.
   - Bevor `fill()` aufgerufen wird, zeichnen wir eine Linie zum Mittelpunkt des Kreises. Das bedeutet, dass wir den wunderschön gestalteten Pac-Man-ähnlichen Ausschnitt anzeigen lassen können. Wenn Sie diese Linie entfernen (versuchen Sie es!) und den Code erneut ausführen, wird nur ein Abschnitt des Kreises zwischen dem Start- und dem Endpunkt des Bogens abgeschnitten. Dies veranschaulicht einen weiteren wichtigen Punkt des Canvas – wenn Sie versuchen, einen unvollständigen Pfad zu füllen (d.h. einen Pfad, der nicht geschlossen ist), dann füllt der Browser eine gerade Linie zwischen dem Start- und Endpunkt und füllt ihn dann aus.

Das war es für jetzt; Ihr finales Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/3_canvas_paths/index.html", '100%', 200)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [3_canvas_paths](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/3_canvas_paths).

> [!NOTE]
> Um mehr über erweiterte Pfadzeichnungsfunktionen wie Bézier-Kurven zu erfahren, besuchen Sie unseren [Zeichnen von Formen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)-Leitfaden.

### Text

Canvas hat auch Funktionen zum Zeichnen von Text. Sehen wir uns diese kurz an. Beginnen Sie, indem Sie eine neue Kopie unseres Canvas-Templates ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) erstellen, in dem Sie das neue Beispiel zeichnen.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnet Umriss (Stroke)-Text.

Beide erhalten drei Eigenschaften in ihrer grundlegenden Verwendung: den Textstring, der gezeichnet werden soll, und die X- und Y-Koordinaten des Punktes, an dem der Text zu zeichnen ist. Dies ergibt sich als **untere linke** Ecke der **Textbox** (buchstäblich die Box, die den gezeichneten Text umgibt), was Sie verwirren könnte, da andere Zeichnungsoperationen tendenziell von der oberen linken Ecke aus beginnen – denken Sie daran.

Es gibt auch eine Reihe von Eigenschaften, um das Zeichnen von Text zu kontrollieren, wie [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), mit der Sie Schriftfamilie, Größe usw. angeben können. Es nimmt als Wert die gleiche Syntax wie die CSS-{{cssxref("font")}}-Eigenschaft.

Canvas-Inhalte sind nicht für Bildschirmlesegeräte zugänglich. Text, der auf dem Canvas gemalt wird, steht nicht dem DOM zur Verfügung, muss jedoch für den Zugriff verfügbar gemacht werden. In diesem Beispiel geben wir den Text als Wert für `aria-label` an.

Versuchen Sie, den folgenden Block am Ende Ihres JavaScript-Codes hinzuzufügen:

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

Hier zeichnen wir zwei Textzeilen, eine outline und die andere stroke. Das finale Beispiel sollte wie folgt aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/4_canvas_text/index.html", '100%', 180)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [4_canvas_text](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/4_canvas_text).

Spielen Sie herum und sehen Sie, was Sie sich einfallen lassen können! Weitere Informationen zu den für Canvas-Text verfügbaren Optionen finden Sie in [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Bilder auf ein Canvas zeichnen

Es ist möglich, externe Bilder auf Ihrem Canvas zu rendern. Diese können einfache Bilder, Frames aus Videos oder Inhalte anderer Canvases sein. Im Moment werden wir uns nur den Fall ansehen, einfache Bilder auf unserem Canvas zu verwenden.

1. Erstellen Sie, wie zuvor, eine neue Kopie unseres Canvas-Templates ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)), in der Sie das neue Beispiel zeichnen.

   Bilder werden mit der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf Canvas gezeichnet. Die einfachste Version verwendet drei Parameter – eine Referenz auf das Bild, das Sie rendern möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Beginnen wir damit, eine Bildquelle zu erhalten, die wir in unser Canvas einbetten können. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript-Codes hinzu:

   ```js
   const image = new Image();
   image.src = "firefox.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt mit dem [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor. Das zurückgegebene Objekt ist vom gleichen Typ wie das, das zurückgegeben wird, wenn Sie eine Referenz zu einem vorhandenen {{htmlelement("img")}}-Element abrufen. Dann setzen wir das [`src`](/de/docs/Web/HTML/Element/img#src)-Attribut auf unser Firefox-Logo-Bild. Zu diesem Zeitpunkt beginnt der Browser, das Bild zu laden.

3. Wir könnten jetzt versuchen, das Bild mit `drawImage()` einzubetten, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, da der Code andernfalls fehlschlagen wird. Wir können dies mit dem `load`-Event erreichen, das nur ausgelöst wird, wenn das Bild fertig geladen ist. Fügen Sie den folgenden Block unter dem vorhergehenden hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sehen Sie das Bild, das im Canvas eingebettet ist.

4. Aber es gibt noch mehr! Was ist, wenn wir nur einen Teil des Bildes anzeigen oder es in der Größe ändern möchten? Wir können beides mit der komplexeren Version von `drawImage()` tun. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile wie folgt:

   ```js
   ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
   ```

   - Der erste Parameter ist der Bildverweis, wie zuvor.
   - Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links vom ersten Parameter oder über dem zweiten wird gezeichnet.
   - Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem geladenen Originalbild ausschneiden möchten.
   - Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Bereichs des Bildes, relativ zur oberen linken Ecke des Canvas, zeichnen möchten.
   - Parameter 8 und 9 definieren die Breite und Höhe, um den ausgeschnittenen Bereich des Bildes zu zeichnen. In diesem Fall haben wir die gleiche Dimension wie der ursprüngliche Ausschnitt angegeben, aber Sie könnten ihn in der Größe ändern, indem Sie unterschiedliche Werte angeben.

5. Wenn das Bild sinnvoll aktualisiert wird, muss die [erreichbare Beschreibung](/de/docs/Glossary/accessible_description) ebenfalls aktualisiert werden.

   ```js
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das finale Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/5_canvas_images/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [5_canvas_images](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/5_canvas_images).

## Schleifen und Animationen

Bisher haben wir einige sehr grundlegende Verwendungen von 2D-Canvas behandelt, aber wirklich, Sie werden die ganze Macht von Canvas nicht erleben, es sei denn, Sie aktualisieren oder animieren es irgendwie. Denn schließlich bietet Canvas skriptbare Bilder! Wenn Sie nichts ändern werden, könnten Sie auch einfach statische Bilder verwenden und sich die ganze Arbeit sparen.

### Eine Schleife erstellen

Mit Schleifen in Canvas zu spielen, macht Spaß – Sie können Canvas-Befehle in einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) (oder einem anderen Typ von) Schleife genauso wie jeden anderen JavaScript-Code verwenden.

Lassen Sie uns ein einfaches Beispiel erstellen.

1. Erstellen Sie eine neue Kopie unseres Canvas-Templates ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie es in Ihrem Code-Editor.
2. Fügen Sie die folgende Zeile am Ende Ihres JavaScript-Codes hinzu. Diese enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

   Dadurch wird der Koordinatenursprung (0, 0) in die Mitte des Canvas verschoben, anstatt in der oberen linken Ecke zu sein. Dies ist in vielen Situationen sehr nützlich, wie hier, wo wir möchten, dass unser Design relativ zur Mitte des Canvas gezeichnet wird.

3. Fügen Sie nun den folgenden Code am Ende des JavaScript-Codes hinzu:

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

   Hier implementieren wir die gleiche `degToRad()`-Funktion, die wir im obigen Dreieckbeispiel gesehen haben, eine `rand()`-Funktion, die eine zufällige Zahl zwischen angegebenen unteren und oberen Grenzen zurückgibt, `length` und `moveOffset` Variablen (über die wir später mehr erfahren werden), und eine leere `for`-Schleife.

4. Die Idee hier ist, dass wir etwas im Canvas innerhalb der `for`-Schleife zeichnen und es jedes Mal iterieren, sodass wir etwas Interessantes erstellen können. Fügen Sie den folgenden Code innerhalb Ihrer `for`-Schleife hinzu:

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

   Was wir in jeder Iteration tun:

   - Wir setzen die `fillStyle`-Eigenschaft auf einen leicht transparenten Purpurfarbton, der sich jedes Mal basierend auf dem Wert von `length` ändert. Wie Sie später sehen werden, wird die Länge jedes Mal, wenn die Schleife läuft, kleiner, sodass sich der Effekt hier ändert, dass die Farbe mit jedem gezeichneten Dreieck heller wird.
   - Beginnen Sie den Pfad.
   - Verschieben Sie den Stift auf eine Koordinate von `(moveOffset, moveOffset)`; Diese Variable definiert, wie weit wir jedes Mal verschieben möchten, wenn wir ein neues Dreieck zeichnen.
   - Zeichnen Sie eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Diese zeichnet eine Linie der Länge `length` parallel zur X-Achse.
   - Berechnen Sie die Höhe des Dreiecks, wie zuvor.
   - Zeichnen Sie eine Linie zur nach unten zeigenden Ecke des Dreiecks, und dann eine Linie zurück zum Startpunkt des Dreiecks.
   - Rufen Sie `fill()` auf, um das Dreieck zu füllen.
   - Aktualisieren Sie die Variablen, die die Dreiecksfolge beschreiben, damit wir bereit für das nächste sein können. Wir verringern den `length`-Wert um 1, sodass die Dreiecke jedes Mal kleiner werden; erhöhen Sie `moveOffset` um einen kleinen Betrag, sodass jedes aufeinanderfolgende Dreieck ein wenig weiter entfernt ist, und verwenden eine weitere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), die es uns ermöglicht, das gesamte Canvas zu rotieren! Wir rotieren es um 5 Grad, bevor das nächste Dreieck gezeichnet wird.

Das war es auch schon! Das finale Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop/index.html", '100%', 550)}}

An diesem Punkt möchten wir Sie ermutigen, mit dem Beispiel zu spielen und es zu Ihrem eigenen zu machen! Sie können zum Beispiel:

- Rechtecke oder Bogen anstatt von Dreiecken zeichnen oder sogar Bilder einbetten.
- Mit den `length`- und `moveOffset`-Werten spielen.
- Einige Zufallszahlen mit der `rand()`-Funktion einführen, die wir oben eingeführt, aber nicht verwendet haben.

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [6_canvas_for_loop](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop).

### Animationen

Das Schleifebeispiel, das wir oben erstellt haben, war lustig, aber wirklich, Sie benötigen eine konstante Schleife, die immer wieder läuft, um ernsthafte Canvas-Anwendungen (wie Spiele und Echtzeit-Visualisierungen) zu realisieren. Wenn Sie Ihr Canvas als einen Film betrachten, möchten Sie wirklich, dass der Bildschirm bei jedem Frame aktualisiert wird, um die aktualisierte Ansicht anzuzeigen, mit einer idealen Bildwiederholrate von 60 Bildern pro Sekunde, damit Bewegungen für das menschliche Auge schön und glatt erscheinen.

Es gibt ein paar JavaScript-Funktionen, die Ihnen erlauben, Funktionen wiederholt mehrmals pro Sekunde auszuführen, die beste für unsere Zwecke hier ist die [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Sie nimmt einen Parameter – den Namen der Funktion, die Sie für jeden Frame ausführen möchten. Das nächste Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion das neue Update für Ihre Animation zeichnet, ruft dann `requestAnimationFrame()` erneut unmittelbar vor dem Ende der Funktion auf, wird die Animations-Schleife weiterhin ausgeführt. Die Schleife endet, wenn Sie aufhören, `requestAnimationFrame()` zu rufen, oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) aufrufen, nachdem Sie `requestAnimationFrame()` aufgerufen haben, aber bevor der Frame aufgerufen wird.

> [!NOTE]
> Es ist gute Praxis, `cancelAnimationFrame()` von Ihrem Hauptcode aus aufzurufen, wenn Sie die Animation abgeschlossen haben, um sicherzustellen, dass keine Aktualisierungen mehr in der Warteschlange stehen, die noch ausgeführt werden müssen.

Der Browser arbeitet komplexe Details aus, wie zum Beispiel die Animation mit einer konsistenten Geschwindigkeit auszuführen und keine Ressourcen für die Animation von Dingen zu verschwenden, die nicht gesehen werden können.

Um zu sehen, wie es funktioniert, werfen wir noch einmal kurz einen Blick auf unser Beispiel der hüpfenden Bälle ([sehen Sie es live](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html), und sehen Sie auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/oojs/bouncing-balls)). Der Code für die Schleife, die alles in Bewegung hält, sieht so aus:

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

Wir führen einmal die `loop()`-Funktion am unteren Ende des Codes aus, um den Zyklus zu starten und den ersten Animationsframe zu zeichnen; die `loop()`-Funktion übernimmt dann das Aufrufen von `requestAnimationFrame(loop)` zum Ausführen des nächsten Animationsframes, immer wieder.

Beachten Sie, dass wir bei jedem Frame das gesamte Canvas löschen und alles neu zeichnen. Für jede vorhandene Kugel zeichnen wir sie, aktualisieren ihre Position und überprüfen, ob sie mit anderen Kugeln kollidiert. Sobald Sie eine Grafik auf ein Canvas gezeichnet haben, können Sie diese Grafik nicht mehr individuell manipulieren, wie Sie es mit DOM-Elementen tun können. Sie können nicht jede Kugel auf dem Canvas bewegen, denn sobald sie gezeichnet ist, ist sie Teil des Canvas und ist kein einzelnes zugängliches Element oder Objekt. Stattdessen müssen Sie löschen und neu zeichnen, entweder indem Sie den gesamten Frame löschen und alles neu zeichnen oder indem Sie Code haben, der genau weiß, welche Teile gelöscht werden müssen und nur den minimalen Bereich des Canvas löscht und neu zeichnet.

Optimierung der Animation von Grafiken ist eine ganze Programmierungspezialität für sich, mit vielen cleveren Techniken. Diese sind jedoch über das hinaus, was wir für unser Beispiel benötigen!

Im Allgemeinen umfasst der Prozess, eine Canvas-Animation zu erstellen, die folgenden Schritte:

1. Den Canvas-Inhalt löschen (z.B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Den Zustand speichern (falls erforderlich) mithilfe von [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) — dies ist notwendig, wenn Sie beim Weiterarbeiten aktualisierte Einstellungen auf dem Canvas speichern möchten, was bei fortgeschritteneren Anwendungen nützlich ist.
3. Die Grafiken zu zeichnen, die Sie animieren.
4. Die gespeicherten Einstellungen aus Schritt 2 mithilfe von [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore) wiederherstellen.
5. `requestAnimationFrame()` aufrufen, um die Zeichnung des nächsten Animationsframes zu planen.

> [!NOTE]
> Wir werden `save()` und `restore()` hier nicht behandeln, aber sie sind schön erklärt in unserem [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations)-Tutorial (und denjenigen, die darauf folgen).

### Eine einfache Zeichentrickfigur-Animation

Erstellen wir nun unsere eigene einfache Animation – wir bringen eine Spielfigur aus einem bestimmten, wirklich großartigen Retro-Videospiel dazu, über den Bildschirm zu laufen.

1. Stellen Sie sicher, dass Sie eine neue Kopie unseres Canvas-Templates ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) erstellen und in Ihrem Code-Editor öffnen.

2. Aktualisieren Sie das innere HTML, um das Bild widerzuspiegeln:

   ```html
   <canvas class="myCanvas">
     <p>A man walking.</p>
   </canvas>
   ```

3. Fügen Sie am unteren Ende des JavaScript wieder die folgende Zeile hinzu, um sicherzustellen, dass der Koordinatenursprung in der Mitte des Canvas platziert ist:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

4. Lassen Sie uns nun ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt erstellen, sein [`src`](/de/docs/Web/HTML/Element/img#src) auf das zu ladende Bild setzen und einen `onload`-Ereignishandler hinzufügen, der die `draw()`-Funktion auslöst, wenn das Bild geladen wird:

   ```js
   const image = new Image();
   image.src = "walk-right.png";
   image.onload = draw;
   ```

5. Lassen Sie uns jetzt einige Variablen hinzufügen, um die Position zu verfolgen, an der das Sprite auf dem Bildschirm gezeichnet werden soll, und die Spritenummer, die wir anzeigen möchten.

   ```js
   let sprite = 0;
   let posX = 0;
   ```

   Lassen Sie uns das Spritesheet-Bild erklären (das wir respektvoll aus Mike Thomas' [Walking cycle using CSS animation](https://codepen.io/mikethomas/pen/kQjKLW) CodePen übernommen haben). Das Bild sieht so aus:

   ![Ein Spritesheet mit sechs Sprite-Bildern eines Pixelcharakters, der von seiner rechten Seite aus gesehen einen Schritt vorwärts macht. Der Charakter trägt ein weißes Hemd mit himmelblauen Knöpfen, eine schwarze Hose und schwarze Schuhe. Jedes Sprite ist 102 Pixel breit und 148 Pixel hoch.](walk-right.png)

   Es enthält sechs Sprites, die die gesamte Laufsequenz ausmachen — jeder ist 102 Pixel breit und 148 Pixel hoch. Um jedes Sprite sauber darzustellen, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild aus dem Spritesheet auszuschneiden und nur diesen Teil anzuzeigen, wie wir oben mit dem Firefox-Logo gemacht haben. Die X-Koordinate des Ausschnitts muss ein Vielfaches von 102 sein, und die Y-Koordinate wird immer 0 sein. Die Ausschnittsgröße beträgt immer 102 mal 148 Pixel.

6. Lassen Sie uns nun eine leere `draw()`-Funktion am Ende des Codes einfügen, um sie mit etwas Code zu füllen:

   ```js
   function draw() {}
   ```

7. Der restliche Code in diesem Abschnitt kommt innerhalb der `draw()`-Funktion. Fügen Sie zuerst die folgende Zeile hinzu, die das Canvas löscht, um es für das Zeichnen jedes Frames vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(Breite/2), -(Höhe/2)` angeben müssen, da wir zuvor die Ursprungslage als `Breite/2, Höhe/2` festgelegt haben.

   ```js
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

8. Als nächstes lassen Sie uns unser Bild mit drawImage zeichnen - die 9-Parameter-Version hinzufügen:

   ```js
   ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);
   ```

   Wie Sie sehen können:

   - Wir geben `image` als Bild zum Einbetten an.
   - Parameter 2 und 3 spezifizieren die oberer linke Ecke des Ausschnitts, der aus dem Quellbild herausgeschnitten werden soll, wobei der X-Wert als `sprite` multipliziert mit 102 (wo `sprite` die Spritenummer zwischen 0 und 5 ist) und der Y-Wert immer 0 ist.
   - Parameter 4 und 5 spezifizieren die Größe des Ausschnitts, der auszuscheiden ist - 102 Pixel mal 148 Pixel.
   - Parameter 6 und 7 spezifizieren die obere linke Ecke des Felds, in das der Ausschnitt auf dem Canvas gezeichnet werden soll - die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichenposition ändern können, indem wir den `posX` Wert ändern.
   - Parameter 8 und 9 spezifizieren die Größe des Bildes auf dem Canvas. Wir wollen einfach seine ursprüngliche Größe behalten, so dass wir 102 und 148 als Breite und Höhe angeben.

9. Jetzt werden wir den `sprite`-Wert nach jedem Zeichnen ändern – naja, nach einigen von ihnen jedenfalls. Fügen Sie den folgenden Block an das Ende der `draw()`-Funktion hinzu:

   ```js
   if (posX % 13 === 0) {
     if (sprite === 5) {
       sprite = 0;
     } else {
       sprite++;
     }
   }
   ```

   Wir umgeben den gesamten Block mit `if (posX % 13 == 0) { }`. Wir verwenden den Modul-Operator (`%`) (auch bekannt als [Restwert-Operator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu überprüfen, ob der `posX`-Wert genau durch 13 geteilt werden kann ohne Rest. Wenn dem so ist, verschieben wir weiter zum nächsten Sprite, indem wir `sprite` inkrementieren (zurück zu 0, nachdem wir mit Sprite #5 fertig sind). Dies bedeutet effektiv, dass wir das Sprite nur alle 13 Frames aktualisieren, oder etwa 5 Frames pro Sekunde (`requestAnimationFrame()` ruft uns bis zu 60 Mal pro Sekunde auf, wenn möglich). Wir verlangsamen absichtlich die Framerate, weil wir nur sechs Sprites zur Verfügung haben, und wenn wir eins jeden 60. Teil einer Sekunde anzeigen, wird sich unser Charakter viel zu schnell bewegen!

   Im äußeren Block verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob der `sprite`-Wert bei 5 liegt (das letzte Sprite, da die Spritenummern von 0 bis 5 gehen). Wenn wir das letzte Sprite bereits anzeigen, setzen wir `sprite` wieder auf 0; ansonsten inkrementieren wir es einfach um 1.

10. Als nächstes müssen wir herausfinden, wie wir den `posX`-Wert bei jedem Frame ändern können – den folgenden Codeblock direkt unter Ihrem letzten hinzufügen.

    ```js
    if (posX > width / 2) {
      let newStartPos = -(width / 2 + 102);
      posX = Math.ceil(newStartPos);
      console.log(posX);
    } else {
      posX += 2;
    }
    ```

    Wir verwenden eine weitere `if...else`-Anweisung, um zu sehen, ob der Wert von `posX` größer als `Breite/2` geworden ist, was bedeutet, dass unser Charakter aus dem rechten Rand des Bildschirms herausgelaufen ist. Wenn dies der Fall ist, berechnen wir eine Position, die den Charakter direkt links vom linken Rand des Bildschirms zurücksetzt.

    Wenn unser Charakter noch nicht aus dem Rand des Bildschirms herausgelaufen ist, inkrementieren wir `posX` um 2. Dadurch bewegt er sich beim nächsten Mal, wenn wir ihn zeichnen, ein wenig nach rechts.

11. Schließlich müssen wir die Animationsschleife durch Aufrufen von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()`-Funktion machen:

    ```js
    window.requestAnimationFrame(draw);
    ```

Das ist es! Das finale Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [7_canvas_walking_animation](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation).

### Eine einfache Zeichenanwendung

Als abschließendes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um Ihnen zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben (wie Mausbewegungen, in diesem Fall) kombiniert werden kann. Wir werden Sie nicht dazu bringen, dies durchzugehen und zu bauen; wir werden einfach die interessantesten Teile des Codes erkunden.

Das Beispiel kann auf GitHub gefunden werden als [8_canvas_drawing_app](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app), und Sie können es live unten ausprobieren:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app/index.html", '100%', 600)}}

Werfen wir einen Blick auf die interessantesten Teile. An erster Stelle halten wir die X- und Y-Koordinaten der Maus sowie ob sie geklickt wird oder nicht mit drei Variablen: `curX`, `curY` und `pressed`. Wenn sich die Maus bewegt, wird eine Funktion als `onmousemove` Ereignishandler ausgelöst, die die aktuellen X- und Y-Werte erfasst. Wir verwenden auch `onmousedown` und `onmouseup` Ereignishandler, um den Wert von `pressed` auf `true` zu ändern, wenn die Maustaste gedrückt wird, und zurück auf `false`, wenn sie freigegeben wird.

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

Wenn die Schaltfläche "Canvas löschen" gedrückt wird, führen wir eine einfache Funktion aus, die das gesamte Canvas wie zuvor gesehen auf Schwarz zurücksetzt:

```js
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal ziemlich einfach – wenn gedrückt `true` ist, zeichnen wir einen Kreis mit einer Füllstil gleich dem Wert im Farbpicker und einem Radius gleich dem Wert, der im Bereichseingang festgelegt ist. Wir müssen den Kreis 85 Pixel oberhalb der Stelle zeichnen, von der wir messen, weil die vertikale Messung von der oberen Ecke des Ansichtsfensters genommen wird, aber wir zeichnen den Kreis relativ zur oberen Ecke des Canvas, die unterhalb der 85 Pixel hohen Symbolleiste beginnt. Wenn wir ihn nur mit `curY` als y-Koordinate zeichnen würden, würde er 85 Pixel unter der Mausposition angezeigt werden.

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

Alle {{htmlelement("input")}} Typen werden gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, wird er auf ein gewöhnliches Textfeld umgestellt.

## WebGL

Jetzt ist es an der Zeit, 2D hinter uns zu lassen und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalte werden mithilfe der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert, die eine völlig separate API von der 2D-Canvas-API ist, obwohl beide auf {{htmlelement("canvas")}}-Elementen rendern.

WebGL basiert auf [OpenGL](/de/docs/Glossary/OpenGL) (Open Graphics Library) und ermöglicht Ihnen die direkte Kommunikation mit der [GPU](/de/docs/Glossary/GPU) des Computers. Als solches ist das Schreiben von rohem WebGL näher an Programmiersprachen auf niedrigerem Niveau wie C++ als an regulärem JavaScript; es ist ziemlich komplex, aber unglaublich leistungsstark.

### Eine Bibliothek verwenden

Aufgrund seiner Komplexität schreiben die meisten Leute 3D-Grafikcode mithilfe einer Drittanbieter-JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten von ihnen arbeiten ähnlich, indem sie Funktionen bereitstellen, um primitive und benutzerdefinierte Formen zu erstellen, Kameras und Beleuchtung zu positionieren, Oberflächen mit Texturen zu bedecken und mehr. Sie übernehmen das WebGL für Sie, sodass Sie auf höherem Level arbeiten können.

Ja, die Benutzung einer dieser bedeutet, eine weitere neue API zu lernen (in diesem Fall eine Drittanbieter-API), aber sie sind viel einfacher als rohes WebGL zu codieren.

### Unseren Würfel neu erstellen

Lassen Sie uns ein einfaches Beispiel dafür ansehen, wie man mit einer WebGL-Bibliothek etwas erstellt. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der beliebtesten ist. In diesem Tutorial erstellen wir den 3D-drehenden Würfel, den wir schon früher gesehen haben.

1. Um zu beginnen, machen Sie eine lokale Kopie von [threejs-cube/index.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/index.html) in einem neuen Ordner, und speichern dann eine Kopie von [metal003.png](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/metal003.png) im selben Ordner. Dies ist das Bild, das wir später als Oberflächentextur für den Würfel verwenden werden.
2. Erstellen Sie als Nächstes eine neue Datei namens `script.js`, erneut im gleichen Ordner wie zuvor.
3. Als Nächstes müssen Sie die Three.js-Bibliothek installiert haben. Sie können die Umgebungsinstallationsschritte befolgen, die im [Aufbau einer Basisdemo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) beschrieben werden, sodass Sie Three.js wie erwartet funktionieren lässt.
4. Jetzt haben wir `three.js` an unsere Seite angehängt, können wir anfangen, JavaScript zu schreiben, das es in `script.js` verwendet. Lassen Sie uns zunächst eine neue Szene erstellen – fügen Sie die folgende Zeile in Ihre `script.js`-Datei ein:

   ```js
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene)-Konstruktor erstellt eine neue Szene, die die gesamte 3D-Welt darstellt, die wir anzeigen möchten.

5. Als Nächstes benötigen wir eine **Kamera**, damit wir die Szene sehen können. In der 3D-Bildsprache stellt die Kamera die Position des Betrachters in der Welt dar. Um eine Kamera zu erstellen, fügen Sie die folgenden Zeilen hinzu:

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
   - Das [Seitenverhältnis](/de/docs/Glossary/aspect_ratio): Normalerweise ist dies der Verhältnis der Szenenbreite durch die Szenenhöhe geteilt. Wenn ein anderer Wert verwendet wird, wird die Szene verzerrt (was das ist, was Sie wollen, aber normalerweise nicht).
   - Die Nah-Ebene: Wie nahe an der Kamera Objekte sein können, bevor wir aufhören, sie auf den Bildschirm zu rendern. Denken Sie daran, dass, wenn Sie Ihre Fingerspitze näher und näher an den Raum zwischen Ihren Augen bewegen, schließlich können Sie es nicht mehr sehen.
   - Die Ferne-Ebene: Wie weit weg Dinge von der Kamera sind, bevor sie nicht mehr gerendert werden.

   Wir setzen auch die Position der Kamera auf 5 Entfernungseinheiten auf der Z-Achse hinaus, die, wie in CSS, aus dem Bildschirm heraus zu Ihnen, dem Betrachter, ist.

6. Die dritte wesentliche Komponente ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene rendert, wie sie durch eine gegebene Kamera gesehen wird. Wir werden einen jetzt mit dem [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)-Konstruktor erstellen, ihn aber erst später verwenden. Fügen Sie die folgenden Zeilen als Nächstes hinzu:

   ```js
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile setzt die Größe, in der der Renderer die Ansicht der Kamera zeichnen wird, und die dritte Zeile hängt das vom Renderer erstellte {{htmlelement("canvas")}}-Element an die {{htmlelement("body")}} des Dokuments an. Nun wird alles, was der Renderer zeichnet, in unserem Fenster angezeigt.

7. Als Nächstes möchten wir den Würfel erstellen, den wir auf dem Canvas anzeigen möchten. Fügen Sie den folgenden Codeblock am Ende Ihres JavaScript-Codes hinzu:

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

   Es gibt hier ein bisschen mehr zu erfassen, also gehen wir es in Etappen durch:

   - Wir erstellen zuerst eine `cube` globale Variable, damit wir unseren Würfel von überall im Code darauf zugreifen können.
   - Als Nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt, rufen dann `load()` darauf auf. `load()` nimmt in diesem Fall zwei Parameter (obwohl es mehr nehmen kann): die Textur, die wir laden möchten (unser PNG), und eine Funktion, die ausgeführt wird, wenn die Textur geladen wurde.
   - Innerhalb der Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um anzugeben, dass wir eine 2 x 2 Wiederholung des Bildes um alle Seiten des Würfels haben möchten. Als nächstes erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt und bringen sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) zusammen, um unseren Würfel zu erstellen. Ein Objekt erfordert in der Regel eine Geometrie (welche Form es hat) und ein Material (wie seine Oberfläche aussieht).
   - Zuletzt fügen wir unseren Würfel der Szene hinzu und rufen dann unsere `draw()`-Funktion auf, um die Animation zu starten.

8. Bevor wir zu `draw()` kommen, lassen Sie uns ein paar Lichter zur Szene hinzufügen, um sie etwas aufzuhellen; fügen Sie die folgenden Blöcke hinzu:

   ```js
   const light = new THREE.AmbientLight("rgb(255 255 255)"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("rgb(255 255 255)");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art von weiches Licht, das die ganze Szene etwas erhellt, wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt hingegen ist ein gerichter Strahl von Licht, mehr wie eine Taschenlampe/Fackel (oder ein Scheinwerfer, in der Tat).

9. Zuletzt, lassen Sie uns unsere `draw()`-Funktion am Ende des Codes hinzufügen:

   ```js
   function draw() {
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
     renderer.render(scene, camera);

     requestAnimationFrame(draw);
   }
   ```

   Dies ist ziemlich intuitiv; bei jedem Frame rotieren wir unseren Würfel leicht auf seine X- und Y-Achsen, dann rendern die Szene, wie sie von unserer Kamera betrachtet wird, und schließlich rufen `requestAnimationFrame()` auf, um das Zeichnen unseres nächsten Frames zu planen.

Werfen wir noch einmal einen schnellen Blick darauf, wie das fertige Produkt aussehen sollte:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Sie können [den fertigen Code auf GitHub finden](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-cube).

> [!NOTE]
> In unserem GitHub-Repo finden Sie auch ein weiteres interessantes 3D-Würfelbeispiel – [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dies verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Computer-Webcam zu nehmen und ihn als Textur auf die Seite des Würfels zu projizieren!

## Zusammenfassung

An diesem Punkt sollten Sie eine nützliche Übersicht der Grundlagen der Grafikprogrammierung mit Canvas und WebGL und welche Möglichkeiten diese APIs bieten haben, ebenso wie eine gute Vorstellung davon, wo Sie weitere Informationen finden können. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklichen Grundlagen des Canvas behandelt – es gibt noch viel mehr zu lernen! Die untenstehenden Artikel werden Sie weiter führen.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorial-Serie, die erklärt, was Sie über 2D-Canvas wissen sollten, in weit mehr Detail, als hier behandelt wurde. Essentielle Lektüre.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Serie, die die Grundlagen der Roh-WebGL-Programmierung lehrt.
- [Einfaches Demo mit Three.js erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — Grundlegendes Three.js-Tutorial. Wir haben auch entsprechende Leitfäden für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spieleentwicklung](/de/docs/Games) — die Einstiegsseite für die Entwicklung von Web-Spielen auf MDN. Es gibt einige wirklich nützliche Tutorials und Techniken hier im Zusammenhang mit 2D- und 3D-Canvas – siehe die Optionen im Menü Techniken und Tutorials.

## Beispiele

- [Gewalttätiges Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API, um Sound zu erzeugen, und Canvas, um eine hübsche Visualisierung dazu zu erstellen.
- [Voice Change-O-Matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas, um Echtzeit-Audiodaten von der Web Audio API zu visualisieren.

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}
