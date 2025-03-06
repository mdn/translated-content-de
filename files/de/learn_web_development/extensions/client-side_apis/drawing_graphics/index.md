---
title: Grafiken zeichnen
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsfähige Grafik-Programmierwerkzeuge, von der Sprache Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) bis hin zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in das Thema Canvas und weitere Ressourcen, um Ihnen das Lernen zu erleichtern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere grundlegende <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektfunktionen</a> sowie grundlegende API-Kenntnisse wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Skripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die in dieser Lektion behandelten Konzepte und Anwendungsfälle.</li>
          <li>Grundlegende Syntax und Verwendung von <code>&lt;canvas&gt;</code> und zugehörigen APIs.</li>
          <li>Verwendung von Timern und <code>requestAnimationFrame()</code> zur Einrichtung von Animationsschleifen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Das Web bestand ursprünglich nur aus Text, der sehr langweilig war, so dass Bilder eingeführt wurden – zunächst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Das war jedoch immer noch nicht genug. Während Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden konnten, um SVG-Vektorbilder – da sie durch Markup dargestellt werden – zu animieren (und anderweitig zu manipulieren), gab es immer noch keine Möglichkeit, dasselbe für Bitmap-Bilder zu tun, und die verfügbaren Werkzeuge waren ziemlich begrenzt. Das Web hatte immer noch keine Möglichkeit, Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die üblicherweise von niedrigeren Programmiersprachen wie C++ oder Java behandelt werden.

Die Situation begann sich zu verbessern, als Browser 2004 begonnen haben, das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) zu unterstützen. Wie Sie unten sehen werden, bietet Canvas einige nützliche Werkzeuge zum Erstellen von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere in Kombination mit einigen der anderen APIs, die die Webplattform bietet, kann aber schwierig oder unmöglich zugänglich zu machen sein.

Das folgende Beispiel zeigt eine einfache, auf 2D-Canvas basierende Animation mit springenden Bällen, die wir ursprünglich in unserem [Einführung in JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) Modul kennengelernt haben:

{{EmbedGHLiveSample("learning-area/javascript/oojs/bouncing-balls/index-finished.html", '100%', 500)}}

Etwa 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Dies wurde zu [WebGL](/de/docs/Web/API/WebGL_API), das bei Browserherstellern an Zugkraft gewann und um 2009–2010 standardisiert wurde. WebGL ermöglicht es Ihnen, echte 3D-Grafiken innerhalb Ihres Webbrowsers zu erstellen; das folgende Beispiel zeigt einen einfachen rotierenden WebGL-Würfel:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Dieser Artikel konzentriert sich hauptsächlich auf 2D-Canvas, da roher WebGL-Code sehr komplex ist. Wir zeigen jedoch, wie man mit einer WebGL-Bibliothek leichter eine 3D-Szene erstellen kann, und Sie können ein Tutorial zu rohem WebGL anderswo finden – siehe [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Aktives Lernen: Erste Schritte mit einem `<canvas>`

Wenn Sie eine 2D- _oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-{{htmlelement("canvas")}}-Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in dem das Bild gezeichnet wird. Dies ist so einfach wie das Einfügen des Elements auf die Seite:

```html
<canvas width="320" height="240"></canvas>
```

Hierdurch wird ein Canvas auf der Seite mit einer Größe von 320 mal 240 Pixel erstellt.

Sie sollten einige Fallback-Inhalte innerhalb der `<canvas>`-Tags einfügen. Diese sollten den Canvas-Inhalt Benutzern von Browsern beschreiben, die Canvas nicht unterstützen, oder Benutzern von Bildschirmlesern.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Der Fallback sollte nützliche alternative Inhalte zum Canvas-Inhalt bereitstellen. Wenn Sie beispielsweise ein ständig aktualisiertes Diagramm von Aktienkursen rendern, könnten die Fallback-Inhalte ein statisches Bild des neuesten Aktien-Diagramms sein, mit `alt`-Text, der die Kurse in Textform angibt, oder eine Liste von Links zu einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalte sind für Bildschirmleser nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs direkt auf dem Canvas-Element selbst oder platzieren Sie Fallback-Inhalte innerhalb der öffnenden und schließenden `<canvas>`-Tags. Canvas-Inhalte sind nicht Teil des DOM, aber geschachtelte Fallback-Inhalte sind es.

### Erstellen und Dimensionieren unseres Canvas

Lassen Sie uns damit beginnen, unser eigenes Canvas zu erstellen, auf das wir zukünftige Experimente zeichnen können.

1. Erstellen Sie zunächst eine lokale Kopie des Verzeichnisses [0_canvas_start](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/0_canvas_start). Es enthält drei Dateien:
   - "index.html"
   - "script.js"
   - "style.css"
2. Öffnen Sie "index.html" und fügen Sie den folgenden Code direkt unterhalb des öffnenden {{htmlelement("body")}}-Tags hinzu:

   ```html
   <canvas class="myCanvas">
     <p>Add suitable fallback here.</p>
   </canvas>
   ```

   Wir haben eine `class` zum `<canvas>`-Element hinzugefügt, damit das Selektieren einfacher wird, wenn wir mehrere Canvas auf der Seite haben. Wir haben aber die `width`- und `height`-Attribute vorerst entfernt (Sie könnten sie wieder hinzufügen, wenn Sie möchten, aber wir werden sie im nächsten Abschnitt mit JavaScript festlegen). Canvases ohne explizite Breite und Höhe haben standardmäßig eine Breite von 300 Pixeln und eine Höhe von 150 Pixeln.

3. Öffnen Sie nun "script.js" und fügen Sie die folgenden Zeilen JavaScript hinzu:

   ```js
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz zum Canvas in der `canvas`-Konstanten gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas gleich [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Ansichtsfensterbreite gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas gleich [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Ansichtsfensterhöhe gibt). So haben wir nun ein Canvas, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden auch sehen, dass wir Zuweisungen mit mehreren Gleichheitszeichen miteinander verketten – das ist in JavaScript erlaubt und ist eine gute Technik, wenn Sie mehrere Variablen alle gleich dem gleichen Wert machen möchten. Wir wollten die Canvas-Breite und -Höhe in den Breite-/Höhenvariablen leicht zugänglich machen, da es nützliche Werte sind, die später verfügbar sein sollten (zum Beispiel, wenn Sie etwas genau in der Mitte der Breite des Canvas zeichnen möchten).

> [!NOTE]
> Sie sollten die Größe des Bildes im Allgemeinen mit HTML-Attributen oder DOM-Eigenschaften festlegen, wie oben erklärt. Sie könnten CSS verwenden, aber das Problem ist dann, dass die Größenbestimmung nach dem Rendern des Canvas erfolgt, und genau wie bei jedem anderen Bild (das gerenderte Canvas ist nur ein Bild) könnte das Bild verpixelt/verzerrt werden.

### Abrufen des Canvas-Kontexts und endgültige Einrichtung

Wir müssen noch eine letzte Sache tun, bevor wir unsere Canvas-Vorlage als fertig betrachten können. Um auf das Canvas zeichnen zu können, müssen wir eine spezielle Referenz auf den Zeichenbereich namens Kontext abrufen. Dies geschieht mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die für die grundlegende Verwendung eine Zeichenfolge als Parameter nimmt, die den Typ des Kontexts darstellt, den Sie abrufen möchten.

In diesem Fall wollen wir ein 2D-Canvas, fügen Sie also die folgende JavaScript-Zeile unterhalb der anderen in "script.js" hinzu:

```js
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextwerte, die Sie wählen könnten, sind `webgl` für WebGL, `webgl2` für WebGL 2 usw., aber die werden wir in diesem Artikel nicht benötigen.

Das ist alles – unser Canvas ist nun bereit zum Zeichnen! Die Variable `ctx` enthält jetzt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, und alle Zeichenoperationen auf dem Canvas beinhalten die Manipulation dieses Objekts.

Tun wir noch eine letzte Sache, bevor wir weitermachen. Wir werden den Hintergrund des Canvas schwarz einfärben, um Ihnen einen ersten Vorgeschmack auf die Canvas-API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

```js
ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mittels der [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)-Eigenschaft des Canvas (diese nimmt [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) genau wie CSS-Eigenschaften an), dann zeichnen wir ein Rechteck, das die gesamte Fläche des Canvas mit der [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)-Methode abdeckt (die ersten zwei Parameter sind die Koordinaten der linken oberen Ecke des Rechtecks; die letzten zwei sind die Breite und Höhe, die Sie für das Rechteck gezeichnet haben wollen – wir haben Ihnen gesagt, dass diese Breite und Höhe nützlich sein würden)!

Okay, unsere Vorlage ist fertig, und es ist an der Zeit weiterzumachen.

## 2D Canvas Grundlagen

Wie wir oben gesagt haben, werden alle Zeichenoperationen durch das Manipulieren eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts (in unserem Fall `ctx`) durchgeführt. Viele Operationen müssen mit Koordinaten ausgestattet werden, um genau anzugeben, wo etwas gezeichnet werden soll – oben links auf dem Canvas ist der Punkt (0, 0), die horizontale (x) Achse verläuft von links nach rechts, und die vertikale (y) Achse verläuft von oben nach unten.

![Gitterpapier mit kleinen Quadraten über die gesamte Fläche mit einem stahlblauen Quadrat in der Mitte. Die obere linke Ecke des Canvas ist der Punkt (0, 0) der x- und y-Achse des Canvas. Die horizontale (x) Achse verläuft von links nach rechts und bezeichnet die Breite, und die vertikale (y) Achse verläuft von oben nach unten und bezeichnet die Höhe. Die obere linke Ecke des blauen Quadrats ist als eine Entfernung von x Einheiten von der y-Achse und y Einheiten von der x-Achse gekennzeichnet.](canvas_default_grid.png)

Das Zeichnen von Formen erfolgt in der Regel mit dem Rechteck-Primitiv oder durch das Nachzeichnen einer Linie entlang eines bestimmten Pfads und dann das Ausfüllen der Form. Im Folgenden zeigen wir Ihnen, wie beides gemacht wird.

### Einfache Rechtecke

Beginnen wir mit einigen einfachen Rechtecken.

1. Erstellen Sie zuerst eine Kopie Ihrer neu codierten Canvas-Vorlage (oder machen Sie eine lokale Kopie des Verzeichnisses [1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template), wenn Sie die obigen Schritte nicht befolgt haben).
2. Fügen Sie als Nächstes die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 0)";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie speichern und aktualisieren, sollten Sie sehen, dass ein rotes Rechteck auf Ihrem Canvas erschienen ist. Die obere linke Ecke ist 50 Pixel von oben und links vom Rand des Canvas entfernt (wie durch die ersten zwei Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch die dritten und vierten Parameter definiert).

3. Fügen wir noch ein weiteres Rechteck in die Mischung ein – diesmal ein grünes. Fügen Sie das Folgende am Ende Ihres JavaScripts hinzu:

   ```js
   ctx.fillStyle = "rgb(0 255 0)";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren Sie, und Sie werden Ihr neues Rechteck sehen. Dies wirft einen wichtigen Punkt auf: Grafikoperationen wie z.B. das Zeichnen von Rechtecken, Linien usw. werden in der Reihenfolge ausgeführt, in der sie auftreten. Stellen Sie sich vor, Sie würden eine Wand streichen, bei der jede Farbschicht die darunterliegende überdeckt und sogar verstecken kann. Daran können Sie nichts ändern, daher müssen Sie sorgfältig über die Reihenfolge nachdenken, in der Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, z.B. mit `rgb()`. Der "Alpha-Kanal" definiert die Menge an Transparenz, die die Farbe hat. Je höher der Wert, desto mehr verdeckt er das, was dahinter liegt. Fügen Sie das Folgende Ihrem Code hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, einige weitere Rechtecke selbst zu zeichnen; haben Sie Spaß dabei!

### Strokes und Linienbreiten

Bisher haben wir uns damit befasst, gefüllte Rechtecke zu zeichnen, aber Sie können auch Rechtecke zeichnen, die nur Konturen (sogenannte **Strokes** im Grafikdesign) sind. Um die Farbe einzustellen, die Sie für Ihre Kontur wünschen, verwenden Sie die [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)-Eigenschaft; das Zeichnen eines Streckenrechtecks erfolgt mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Fügen Sie das Folgende dem vorherigen Beispiel hinzu, wiederum unterhalb der vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "rgb(255 255 255)";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Strokes beträgt 1 Pixel; Sie können den `lineWidth`-Eigenschaftswert anpassen, um dies zu ändern (es nimmt eine Zahl, die die Anzahl der Pixel breite der Kontur ist, an). Fügen Sie die folgende Zeile zwischen die vorherigen zwei Zeilen hinzu:

   ```js
   ctx.lineWidth = 5;
   ```

Nun sollten Sie sehen, dass Ihre weiße Kontur viel dicker geworden ist! Das war's fürs Erste. An diesem Punkt sollte Ihr Beispiel so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles/index.html", '100%', 250)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [2_canvas_rectangles](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles).

### Zeichnen von Pfaden

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Grundsätzlich bedeutet dies, dass Sie Code schreiben müssen, um genau anzugeben, welchen Pfad der Stift auf Ihrem Canvas zurücklegen soll, um die gewünschte Form nachzuzeichnen. Canvas enthält Funktionen zum Zeichnen von geraden Linien, Kreisen, Bézier-Kurven und mehr.

Lassen Sie uns diesen Abschnitt beginnen, indem wir eine frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) anfertigen, um das neue Beispiel zu zeichnen.

Wir werden einige gängige Methoden und Eigenschaften über alle untenstehenden Abschnitte hinweg verwenden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — einen Pfad an dem Punkt zu zeichnen beginnen, an dem sich der Stift derzeit auf dem Canvas befindet. Auf einem neuen Canvas beginnt der Stift an (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — den Stift an einen anderen Punkt auf dem Canvas bewegen, ohne die Linie zu zeichnen oder nachzuzeichnen; der Stift "springt" zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — eine gefüllte Form zeichnen, indem der Pfad gefüllt wird, den Sie bisher nachgezeichnet haben.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — eine Kontur zeichnen, indem eine Kontur entlang des bisher gezeichneten Pfads gezeichnet wird.
- Sie können auch Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` mit Pfaden sowie Rechtecken verwenden.

Eine typische, einfache Pfad-Zeichenoperation würde wie folgt aussehen:

```js
ctx.fillStyle = "rgb(255 0 0)";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Zeichnen von Linien

Lassen Sie uns ein gleichseitiges Dreieck auf dem Canvas zeichnen.

1. Fügen Sie zunächst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Diese konvertiert Gradwerte in Radianten, was nützlich ist, da wann immer Sie einen Winkelwert in JavaScript angeben müssen, dieser nahezu immer in Radianten sein wird, aber Menschen normalerweise in Grad denken.

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Beginnen Sie als Nächstes Ihren Pfad, indem Sie das Folgende unter Ihrer vorherigen Ergänzung hinzufügen; hier setzen wir eine Farbe für unser Dreieck, beginnen, einen Pfad zu zeichnen, und bewegen dann den Stift zu (50, 50), ohne etwas zu zeichnen. Dort werden wir unser Dreieck beginnen zu zeichnen.

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

   Zuerst zeichnen wir eine Linie bis zu (150, 50) – unser Pfad verläuft nun 100 Pixel nach rechts entlang der x-Achse.

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks mithilfe eines einfachen Trigonometriebeispiels. Grundsätzlich zeichnen wir das Dreieck nach unten zeigend. Die Winkel in einem gleichseitigen Dreieck sind immer 60 Grad; um die Höhe zu berechnen, können wir es in der Mitte in zwei rechtwinklige Dreiecke aufteilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben. In Bezug auf die Seiten:

   - Die längste Seite wird als **Hypotenuse** bezeichnet.
   - Die Seite neben dem 60-Grad-Winkel wird als **Ankathete** bezeichnet – die wir kennen, beträgt 50 Pixel, da es die Hälfte der Linie ist, die wir gerade gezeichnet haben.
   - Die Seite gegenüber dem 60-Grad-Winkel wird als **Gegenkathete** bezeichnet, die die Höhe des Dreiecks ist, die wir berechnen möchten.

   ![Ein gleichseitiges Dreieck, das zwei rechtwinklige Dreiecke mit beschrifteten Winkeln und Seiten zeigt. Die horizontale Linie oben wird als 'Ankathete' bezeichnet. Eine senkrechte gepunktete Linie, ausgehend von der Mitte der Ankathete, bezeichnet als 'Gegenkathete', trennt das Dreieck und bildet zwei gleiche rechtwinklige Dreiecke. Die rechte Seite des Dreiecks wird als Hypotenuse bezeichnet, da sie die längste Seite des rechtwinkligen Dreiecks ist, das von der Linie 'Gegenkathete' gebildet wird.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass die Länge der Ankathete multipliziert mit dem Tangens des Winkels gleich der Gegenkathete ist, daher kommen wir zu `50 * Math.tan(degToRad(60))`. Wir verwenden unsere `degToRad()`-Funktion, um 60 Grad in Radianten umzurechnen, da {{jsxref("Math.tan()")}} einen Eingabewert in Radianten erwartet.

4. Mit der berechneten Höhe zeichnen wir eine weitere Linie zu `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss genau zwischen den vorherigen zwei X-Werten liegen, die wir gesetzt haben. Der Y-Wert hingegen muss 50 plus der Höhe des Dreiecks sein, da wir wissen, dass die Spitze des Dreiecks 50 Pixel von der Oberseite des Canvas entfernt ist.
5. Die nächste Linie zieht eine Linie zurück zum Ausgangspunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form auszufüllen.

#### Zeichnen von Kreisen

Werfen wir nun einen Blick darauf, wie man einen Kreis in Canvas zeichnet. Dies wird mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) erreicht, die einen vollständigen oder teilweisen Kreis an einem angegebenen Punkt zeichnet.

1. Fügen wir unserem Canvas einen Bogen hinzu – fügen Sie das Folgende am Ende Ihres Codes hinzu:

   ```js
   ctx.fillStyle = "rgb(0 0 255)";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` nimmt sechs Parameter entgegen. Die ersten beiden geben die Position des Mittelpunkts des Bogens an (X und Y, jeweils). Der dritte ist der Radius des Kreises, der vierte und fünfte geben die Start- und Endwinkel an, bei denen der Kreis gezeichnet werden soll (sodass die Angabe von 0 und 360 Grad einen vollständigen Kreis ergibt), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn oder im Uhrzeigersinn gezeichnet werden soll (`false` ist im Uhrzeigersinn).

   > [!NOTE]
   > 0 Grad ist horizontal nach rechts.

2. Probieren wir doch mal einen weiteren Bogen aus:

   ```js
   ctx.fillStyle = "yellow";
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   Das Muster hier ist sehr ähnlich, jedoch mit zwei Unterschieden:

   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird, was bedeutet, dass selbst wenn der Bogen als von -45 Grad bis 45 Grad angegeben wird, zeichnen wir den Bogen um die 270 Grad, die nicht in diesem Abschnitt liegen. Wenn Sie `true` zu `false` ändern und dann den Code erneut ausführen würden, würde nur das 90 Grad umfassende Segment des Kreises gezeichnet werden.
   - Vor dem Aufruf von `fill()` zeichnen wir eine Linie zum Mittelpunkt des Kreises. Das bedeutet, dass wir den ziemlich netten Pac-Man-Style-Cutout-Rendereffekt erhalten. Wenn Sie diese Linie entfernen würden (probieren Sie es aus!), dann den Code erneut ausführen, würden Sie nur ein abgeschnittenes Segment des Kreises zwischen dem Start- und Endpunkt des Bogens erhalten. Dies verdeutlicht einen weiteren wichtigen Punkt des Canvas – wenn Sie versuchen, einen unvollständigen Pfad (d.h. einen, der nicht geschlossen ist) zu füllen, fügt der Browser eine gerade Linie zwischen dem Start- und Endpunkt ein und füllt ihn dann aus.

Das war's fürs Erste; Ihr finales Beispiel sollte in etwa so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/3_canvas_paths/index.html", '100%', 200)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [3_canvas_paths](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/3_canvas_paths).

> [!NOTE]
> Um mehr über fortgeschrittene Path-Zeichenfunktionen wie Bézier-Kurven zu erfahren, sollten Sie unser [Zeichnen von Formen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) Tutorial anschauen.

### Text

Canvas hat auch Funktionen zum Zeichnen von Text. Lassen Sie uns dies kurz erkunden. Beginnen Sie, indem Sie eine weitere frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) anfertigen, um das neue Beispiel zu zeichnen.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnet Umrisse (Konturen) von Text.

Beide nehmen in ihrer grundlegenden Verwendung drei Eigenschaften an: den zu zeichnenden Textstring und die X- und Y-Koordinaten des Punkts, an dem der Text beginnt. Dies entspricht der **unteren linken** Ecke des **Textfeldes** (buchstäblich das Feld, das den Text umgibt, den Sie zeichnen), was Sie verwirren könnte, da andere Zeichenoperationen normalerweise von der oberen linken Ecke aus beginnen – denken Sie daran.

Es gibt auch eine Reihe von Eigenschaften, mit denen sich die Textdarstellung steuern lässt, insbesondere [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), mit der Sie Schriftfamilie, Größe usw. angeben können. Der Wert ist in demselben Syntaxformat wie die CSS-Eigenschaft {{cssxref("font")}}.

In Canvas gemalter Text ist für Screenreader nicht zugänglich. Der in das Canvas gemalte Text steht dem DOM nicht zur Verfügung, muss aber verfügbar gemacht werden, um zugänglich zu sein. In diesem Beispiel fügen wir den Text als Wert für `aria-label` ein.

Versuchen Sie, den folgenden Block an das Ende Ihres JavaScripts hinzuzufügen:

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

Hier zeichnen wir zwei Textzeilen, eine als Umriss und die andere als Füllung. Das finale Beispiel sollte in etwa so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/4_canvas_text/index.html", '100%', 180)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [4_canvas_text](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/4_canvas_text).

Spielen Sie ein wenig herum und schauen, was Sie sich überlegen können! Weitere Informationen zu den verfügbaren Optionen für Canvas-Text finden Sie im [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) Tutorial.

### Zeichnen von Bildern auf Canvas

Es ist möglich, externe Bilder auf Ihrem Canvas darzustellen. Diese können einfache Bilder, Frames aus Videos oder Inhalte anderer Canvases sein. Im Moment schauen wir uns nur den Fall an, einige einfache Bilder auf unserem Canvas zu verwenden.

1. Fertigen Sie erneut eine frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) an, um das neue Beispiel zu zeichnen.

   Bilder werden auf Canvas mit der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) gezeichnet. Die einfachste Version nimmt drei Parameter – eine Referenz zu dem Bild, das Sie einbetten möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Beginnen wir damit, eine Bildquelle zu bekommen, die wir in unser Canvas einbetten können. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

   ```js
   const image = new Image();
   image.src = "firefox.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt mit dem [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor. Das zurückgegebene Objekt ist derselbe Typ, der zurückgegeben wird, wenn Sie eine Referenz zu einem existierenden {{htmlelement("img")}}-Element greifen. Dann setzen wir das [`src`](/de/docs/Web/HTML/Element/img#src)-Attribut auf unser Firefox-Logo-Image. In diesem Moment beginnt der Browser, das Bild zu laden.

3. Wir könnten jetzt versuchen, das Bild mit `drawImage()` einzubetten, aber wir müssen sicherstellen, dass die Image-Datei vorher geladen wurde, sonst scheitert der Code. Wir können dies mit dem `load`-Ereignis erreichen, das erst ausgelöst wird, wenn das Bild fertig geladen ist. Fügen Sie den folgenden Block unter dem vorherigen hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie jetzt Ihr Beispiel im Browser laden, sollten Sie das eingebettete Bild im Canvas sehen.

4. Aber es gibt noch mehr! Was, wenn wir nur einen Teil des Bildes anzeigen oder es anzeigen möchten? Wir können beides mit der komplexeren Version von `drawImage()` machen. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile wie folgt:

   ```js
   ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
   ```

   - Der erste Parameter ist der Bildverweis, wie zuvor.
   - Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links vom ersten Parameter oder über dem zweiten wird gezeichnet.
   - Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem ursprünglichen Bild, das wir geladen haben, ausschneiden möchten.
   - Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Bildbereichs relativ zur oberen linken Ecke des Canvas zeichnen möchten.
   - Parameter 8 und 9 definieren die Breite und Höhe, um den ausgeschnittenen Bereich des Bildes zu zeichnen. In diesem Fall haben wir dieselben Dimensionen wie der ursprüngliche Ausschnitt spezifiziert, aber Sie könnten ihn ändern, indem Sie unterschiedliche Werte angeben.

5. Wenn das Bild maßgeblich aktualisiert wird, muss auch die {{Glossary("accessible_description", "zugängliche Beschreibung")}} aktualisiert werden.

   ```js
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das finale Beispiel sollte in etwa so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/5_canvas_images/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [5_canvas_images](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/5_canvas_images).

## Schleifen und Animationen

Bisher haben wir einige sehr grundlegende Anwendungen von 2D-Canvas behandelt, aber Sie werden die volle Leistungsfähigkeit von Canvas wirklich nicht erleben, es sei denn, Sie aktualisieren oder animieren es auf irgendeine Weise. Schließlich bietet Canvas skriptbare Bilder! Wenn Sie nichts ändern wollen, können Sie genauso gut statische Bilder verwenden und sich die ganze Arbeit sparen.

### Eine Schleife erstellen

Mit Schleifen im Canvas zu spielen macht ziemlich viel Spaß – Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)- (oder einer anderen Art von) Schleife ausführen, genau wie bei jedem anderen JavaScript-Code.

Lassen Sie uns ein Beispiel erstellen.

1. Fertigen Sie erneut eine frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) an und öffnen Sie sie in Ihrem Code-Editor.
2. Fügen Sie die folgende Zeile am Ende Ihres JavaScripts hinzu. Diese enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

   Dadurch wird der Ursprung der Koordinaten (0, 0) auf die Mitte des Canvas verschoben, anstatt auf die obere linke Ecke. Dies ist in vielen Situationen sehr nützlich, wie in diesem Fall, in dem wir unser Design relativ zur Mitte des Canvas zeichnen möchten.

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

   Hier implementieren wir dieselbe `degToRad()`-Funktion, die wir oben im Dreieckbeispiel gesehen haben, eine `rand()`-Funktion, die eine Zufallszahl zwischen gegebenen unteren und oberen Grenzwerten zurückgibt, sowie die Variablen `length` und `moveOffset` (über die wir später mehr erfahren), und eine leere `for`-Schleife.

4. Die Idee hier ist, dass wir innerhalb der `for`-Schleife etwas auf das Canvas zeichnen und sie auf jedem Durchlauf iterieren lassen, damit wir etwas Interessantes erstellen können. Fügen Sie den folgenden Code innerhalb Ihrer `for`-Schleife hinzu:

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

   - Setzen wir `fillStyle` auf einen leicht transparenten Purpur-Farbton, der jedes Mal auf Basis des Wertes von `length` ändert. Wie Sie später sehen werden, wird die Länge jedes Mal kleiner, wenn die Schleife läuft, sodass der Effekt hier ist, dass die Farbe heller wird mit jedem gezeichneten Dreieck.
   - Beginnen wir den Pfad.
   - Bewegen wir den Stift zu einer Koordinate von `(moveOffset, moveOffset)`; Diese Variable definiert, wie weit wir uns jedes Mal bewegen wollen, wenn wir ein neues Dreieck zeichnen.
   - Zeichnen wir eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Dies zieht eine Linie der Länge `length` parallel zur X-Achse.
   - Berechnen wir die Höhe des Dreiecks, wie wir es bereits getan haben.
   - Zeichnen wir eine Linie zur nach unten zeigenden Ecke des Dreiecks, dann eine Linie zurück zum Start des Dreiecks.
   - Rufen wir `fill()` auf, um das Dreieck zu füllen.
   - Aktualisieren wir die Variablen, die die Reihenfolge der Dreiecke beschreiben, sodass wir bereit für das nächste Zeichnen sind. Wir verringern den `length`-Wert um 1, sodass die Dreiecke jedes Mal kleiner werden; erhöhen `moveOffset` um einen kleinen Betrag, sodass jedes folgende Dreieck ein wenig weiter entfernt ist, und verwenden eine andere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), die es uns erlaubt, das gesamte Canvas zu drehen! Wir drehen es um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das war's! Das finale Beispiel sollte in etwa so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop/index.html", '100%', 550)}}

An dieser Stelle möchten wir Sie ermutigen, mit dem Beispiel zu experimentieren und es zu Ihrem eigenen zu machen! Zum Beispiel:

- Zeichnen Sie Rechtecke oder Bögen anstelle von Dreiecken, oder betten Sie sogar Bilder ein.
- Spielen Sie mit den `length`- und `moveOffset`-Werten.
- Führen Sie einige Zufallszahlen ein, indem Sie die `rand()`-Funktion verwenden, die wir oben aufgenommen, aber nicht benutzt haben.

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [6_canvas_for_loop](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop).

### Animationen

Das obige Schleifenbeispiel war zwar recht unterhaltsam, jedoch benötigen Sie wirklich eine konstante Schleife, die kontinuierlich läuft, für jede ernsthafte Canvas-Anwendung (z. B. Spiele und Echtzeit-Visualisierungen). Wenn Sie sich Ihr Canvas wie einen Film vorstellen, möchten Sie wirklich, dass das Display bei jedem Frame aktualisiert wird, um die aktualisierte Ansicht zu zeigen, mit einer idealen Bildwiederholrate von 60 Bildern pro Sekunde, damit Bewegungen für das menschliche Auge schön und glatt erscheinen.

Es gibt einige JavaScript-Funktionen, die es ermöglichen, Funktionen mehrmals pro Sekunde wiederholt auszuführen. Die beste für unsere Zwecke hier ist [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Sie nimmt einen Parameter – den Namen der Funktion, die Sie bei jedem Frame ausführen möchten. Das nächste Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion das neue Update für Ihre Animation zeichnet und `requestAnimationFrame()` erneut direkt vor dem Ende der Funktion aufruft, läuft die Animationsschleife weiter. Die Schleife endet, wenn Sie aufhören `requestAnimationFrame()` aufzurufen oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) aufrufen, nachdem Sie `requestAnimationFrame()` aufrufen, aber bevor der Frame aufgerufen wird.

> [!NOTE]
> Es ist eine gute Praxis, `cancelAnimationFrame()` von Ihrem Hauptcode aus aufzurufen, wenn Sie mit der Animation fertig sind, um sicherzustellen, dass keine Updates auf die Ausführung warten.

Der Browser arbeitet komplexe Details aus, wie das Animieren mit einer konsistenten Geschwindigkeit und das Vermeiden des Ressourcenverbrauchs für Dinge, die nicht zu sehen sind.

Um zu sehen, wie es funktioniert, werfen wir noch einmal einen kurzen Blick auf unser Beispiel mit den Springenden Bällen ([Live-Demo ansehen](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html), und auch den [Quellcode ansehen](https://github.com/mdn/learning-area/tree/main/javascript/oojs/bouncing-balls)). Der Code für die Schleife, die alles in Bewegung hält, sieht so aus:

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

Wir führen die `loop()`-Funktion einmal am Ende des Codes aus, um den Zyklus zu starten und den ersten Animationsframe zu zeichnen; die `loop()`-Funktion ist dann verantwortlich dafür, `requestAnimationFrame(loop)` aufzurufen, um den nächsten Frame der Animation auszuführen, immer wieder.

Beachten Sie, dass wir in jedem Frame das gesamte Canvas löschen und alles neu zeichnen. Für jeden Ball, der da ist, zeichnen wir ihn, aktualisieren seine Position und überprüfen, ob er mit anderen Bällen kollidiert. Sobald Sie eine Grafik auf ein Canvas gezeichnet haben, gibt es keine Möglichkeit, diese Grafik individuell zu manipulieren, wie Sie es mit DOM-Elementen können. Sie können nicht jeden Ball auf dem Canvas verschieben, weil er, einmal gezeichnet, Teil des Canvas ist und kein einzelnes zugängliches Element oder Objekt. Stattdessen müssen Sie löschen und neu zeichnen, entweder indem Sie den gesamten Frame löschen und alles neu zeichnen oder indem Sie Code haben, der genau weiß, welche Teile gelöscht und nur die minimal erforderlichen Bereiche des Canvas gelöscht und neu gezeichnet werden müssen.

Die Animation von Grafiken zu optimieren ist eine ganze Programmierspezialisierung, mit vielen cleveren Techniken. Diese gehen jedoch über das hinaus, was wir für unser Beispiel benötigen!

Im Allgemeinen umfasst der Prozess einer Canvas-Animation die folgenden Schritte:

1. Löschen Sie den Canvas-Inhalt (z.B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Speichern Sie den Zustand (falls erforderlich) mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) – dies ist erforderlich, wenn Sie die auf dem Canvas aktualisierten Einstellungen speichern möchten, bevor Sie fortfahren, was für fortgeschrittenere Anwendungen nützlich ist.
3. Zeichnen Sie die Grafiken, die Sie animieren.
4. Stellen Sie hiernach die in Schritt 2 gespeicherten Einstellungen mit [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore) wieder her.
5. Rufen Sie `requestAnimationFrame()` auf, um das Zeichnen des nächsten Frames der Animation zu planen.

> [!NOTE]
> Wir werden `save()` und `restore()` hier nicht behandeln, aber sie sind gut erklärt in unserem [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations) Tutorial (und folgende).

### Eine einfache Charakteranimation

Jetzt lassen Sie uns unsere eigene simple Animation erstellen – wir holen einen Charakter aus einem bestimmten, ziemlich tollen Retro-Computerspiel, damit er über den Bildschirm läuft.

1. Fertigen Sie eine weitere frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) an und öffnen Sie diese in Ihrem Code-Editor.

2. Aktualisieren Sie das innere HTML, um das Bild widerzuspiegeln:

   ```html
   <canvas class="myCanvas">
     <p>A man walking.</p>
   </canvas>
   ```

3. Fügen Sie am Ende des JavaScripts die folgende Zeile hinzu, um den Ursprungspunkt der Koordinaten wieder in die Mitte des Canvas zu setzen:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

4. Erstellen Sie nun ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, legen Sie dessen [`src`](/de/docs/Web/HTML/Element/img#src) auf das Bild fest, das wir laden möchten, und fügen Sie eine `onload`-Ereignisbehandlung hinzu, die die `draw()`-Funktion auslöst, wenn das Bild geladen ist:

   ```js
   const image = new Image();
   image.src = "walk-right.png";
   image.onload = draw;
   ```

5. Nun fügen wir einige Variablen hinzu, um die Position zu verfolgen, an der der Sprite auf dem Bildschirm gezeichnet werden soll, und die Nummer des Sprites, die wir anzeigen möchten.

   ```js
   let sprite = 0;
   let posX = 0;
   ```

   Lassen Sie uns das Spritesheet-Image erklären (welches wir respektvoll von Mike Thomas' [Walking cycle using CSS animation](https://codepen.io/mikethomas/pen/kQjKLW) CodePen geliehen haben). Das Bild sieht wie folgt aus:

   ![Ein Spritesheet mit sechs Sprite-Bildern eines pixeligen Charakters, der einer gehenden Person von ihrer rechten Seite bei verschiedenen Momenten eines einzigen Schritts nach vorne ähnelt. Der Charakter hat ein weißes Hemd mit himmelblauen Knöpfen, schwarze Hosen und schwarze Schuhe. Jeder Sprite ist 102 Pixel breit und 148 Pixel hoch.](walk-right.png)

   Es enthält sechs Sprites, die die gesamte Gehsequenz bilden – jeder ist 102 Pixel breit und 148 Pixel hoch. Um jedes Sprite sauber anzuzeigen, müssen wir `drawImage()` verwenden, um ein Einzel-Sprite-Bild aus dem Spritesheet herauszuschneiden und nur diesen Teil anzuzeigen, so wie wir es oben mit dem Firefox-Logo getan haben. Die X-Koordinate des Ausschnitts muss ein Vielfaches von 102 sein, und die Y-Koordinate wird immer 0 sein. Die Größe des Ausschnitts wird immer 102 mal 148 Pixel betragen.

6. Nun lassen Sie uns eine leere `draw()`-Funktion am Ende des Codes einfügen, bereit, um sie mit Code zu füllen:

   ```js
   function draw() {}
   ```

7. Der restliche Code in diesem Abschnitt kommt innerhalb von `draw()`. Fügen Sie zuerst die folgende Zeile hinzu, die das Canvas löscht, um jedes Frame vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width/2), -(height/2)` angeben müssen, da wir den Ursprungspunkt als `width/2, height/2` festgelegt haben.

   ```js
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

8. Als Nächstes zeichnen wir unser Bild mit `drawImage` – der 9-Parameter-Version. Fügen Sie das Folgende hinzu:

   ```js
   ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);
   ```

   Wie Sie sehen können:

   - Wir geben `image` als das einzubettende Bild an.
   - Parameter 2 und 3 geben die obere linke Ecke des Ausschnitts des Quellbilds an, mit dem X-Wert als `sprite` multipliziert mit 102 (wobei `sprite` die Sprite-Nummer zwischen 0 und 5 ist) und der Y-Wert immer 0.
   - Parameter 4 und 5 geben die Größe des Ausschnitts an, der auszuschneiden ist – 102 Pixel mal 148 Pixel.
   - Parameter 6 und 7 geben die obere linke Ecke des Feldes an, in das der Ausschnitt auf dem Canvas gezeichnet werden soll – die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichenposition anpassen können, indem wir den `posX`-Wert anpassen.
   - Parameter 8 und 9 geben die Größe des Bildes auf dem Canvas an. Wir wollen es einfach in seiner Originalgröße beibehalten, also spezifizieren wir 102 und 148 als Breite und Höhe.

9. Jetzt ändern wir den `sprite`-Wert nach jedem Zeichnen – naja, nach einigen von ihnen jedenfalls. Fügen Sie diesen Block am Ende der `draw()`-Funktion hinzu:

   ```js
   if (posX % 13 === 0) {
     if (sprite === 5) {
       sprite = 0;
     } else {
       sprite++;
     }
   }
   ```

   Wir umwickeln den gesamten Block mit `if (posX % 13 === 0) { }`. Wir verwenden den Modulo-Operator (`%`) (auch bekannt als [Restoperator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu prüfen, ob der `posX`-Wert durch 13 genau geteilt werden kann, ohne Rest. Wenn dies der Fall ist, gehen wir zum nächsten Sprite über, indem wir `sprite` inkrementieren (zurück zu 0 nach dem letzten Sprite #5). Dies bedeutet effektiv, dass wir das Sprite nur auf jedem 13. Frame aktualisieren, oder ungefähr 5 Bilder pro Sekunde (`requestAnimationFrame()` ruft uns bis zu 60 Bilder pro Sekunde auf, wenn möglich). Wir verlangsamen ganz bewusst die Bildrate, weil wir nur sechs Sprites zur Verfügung haben und, wenn wir 60 des Sekunde anzeigen würden, unser Charakter viel zu schnell bewegt würde!

   Innerhalb des äußeren Blocks verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu prüfen, ob der `sprite`-Wert auf 5 ist (letzter Sprite, da die Sprite-Nummern von 0 bis 5 gehen). Wenn wir bereits das letzte Sprite anzeigen, setzen wir `sprite` zurück auf 0; wenn nicht, inkrementieren wir es einfach um 1.

10. Als Nächstes müssen wir herausfinden, wie wir den `posX`-Wert bei jedem Frame ändern – fügen Sie den folgenden Codeblock direkt unter Ihrem letzten ein.

    ```js
    if (posX > width / 2) {
      let newStartPos = -(width / 2 + 102);
      posX = Math.ceil(newStartPos);
      console.log(posX);
    } else {
      posX += 2;
    }
    ```

    Wir verwenden eine weitere `if...else`-Anweisung, um zu sehen, ob der Wert von `posX` größer als `width/2` geworden ist, was bedeutet, dass unser Charakter am rechten Rand des Bildschirms vorbei gelaufen ist. Wenn ja, berechnen wir eine Position, die den Charakter direkt links neben den linken Rand des Bildschirms setzen würde.

    Wenn unser Charakter noch nicht vom Rand des Bildschirms gelaufen ist, inkrementieren wir `posX` um 2. Dies wird dafür sorgen, dass er sich ein wenig nach rechts bewegt, das nächste Mal, wenn wir ihn zeichnen.

11. Schließlich müssen wir die Animationsschleife durch Aufrufen von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()`-Funktion erstellen:

    ```js
    window.requestAnimationFrame(draw);
    ```

Das war's! Das finale Beispiel sollte in etwa so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [7_canvas_walking_animation](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation).

### Eine einfache Zeichenanwendung

Als ein letztes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben (wie Mausebewegungen, in diesem Fall) kombiniert werden kann. Wir werden Ihnen nicht Schritt für Schritt zeigen, wie Sie diese selbst erstellen können; wir werden einfach die interessantesten Teile des Codes erkunden.

Das Beispiel finden Sie auf GitHub als [8_canvas_drawing_app](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app), und Sie können es unten live ausprobieren:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app/index.html", '100%', 600)}}

Werfen wir einen Blick auf die interessantesten Teile. Zunächst einmal verfolgen wir die X- und Y-Koordinaten der Maus und ob sie gedrückt wird oder nicht mit drei Variablen: `curX`, `curY` und `pressed`. Wenn die Maus bewegt wird, feuern wir eine Funktion ab, die als `onmousemove`-Ereignisbehandlung festgelegt ist, die die aktuellen X- und Y-Werte erfasst. Wir verwenden auch `onmousedown`- und `onmouseup`-Ereignisbehandlungen, um den Wert von `pressed` auf `true` zu ändern, wenn die Maustaste gedrückt wird, und wieder auf `false` zu setzen, wenn sie losgelassen wird.

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

Wenn die Schaltfläche "Canvas löschen" gedrückt wird, führen wir einfach eine Funktion aus, die das gesamte Canvas zurück zu Schwarz löscht, genauso, wie wir es zuvor gesehen haben:

```js
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal recht einfach – wenn `pressed` `true` ist, zeichnen wir einen Kreis mit einem Füllstil, der dem Wert im Farbpicker entspricht, und einem Radius, der dem im Bereichs-Input entspricht. Wir müssen den Kreis 85 Pixel oberhalb des gemessenen Punkts zeichnen, weil die vertikale Messung von der Oberseite des Viewports ausgeht, wir den Kreis aber relativ zur Oberseite des Canvas zeichnen, dass 85 Pixel unterhalb der Werkzeugleiste beginnt. Wenn wir es mit `curY` als y-Koordinate zeichnen würden, würde es 85 Pixel tiefer erscheinen als die Mausposition.

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

Alle {{htmlelement("input")}}-Typen werden gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, wird es auf ein einfaches Texteingabefeld zurückfallen.

## WebGL

Es ist nun an der Zeit, 2D hinter uns zu lassen und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalte werden mit der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert, bei der es sich um eine völlig andere API als die 2D-Canvas-API handelt, obwohl beide auf {{htmlelement("canvas")}}-Elementen rendern.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht es Ihnen, direkt mit der {{Glossary("GPU", "GPU")}} des Computers zu kommunizieren. Infolgedessen ist das Schreiben von rohem WebGL näher an Programmiersprachen auf niedriger Ebene wie C++ als an regulärem JavaScript; es ist ziemlich komplex, aber unglaublich mächtig.

### Bibliothek verwenden

Aufgrund seiner Komplexität schreiben die meisten Menschen 3D-Grafikcode mit einer Drittanbieter-JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten funktionieren auf ähnliche Weise, bieten Funktionalitäten, primitive und benutzerdefinierte Formen zu erstellen, Kameras und Beleuchtung zu positionieren, Oberflächen mit Texturen zu versehen und mehr. Sie kümmern sich um das WebGL für Sie und ermöglichen es Ihnen, auf einer höheren Ebene zu arbeiten.

Ja, einen davon zu verwenden bedeutet, eine weitere neue API zu erlernen (in diesem Fall eine eines Drittanbieters), aber sie sind viel einfacher als das Programmieren von rohem WebGL.

### Unseren Würfel erneut erstellen

Werfen wir einen Blick auf ein Beispiel, wie man etwas mit einer WebGL-Bibliothek erstellt. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der beliebtesten ist. In diesem Tutorial erstellen wir den 3D-drehenden Würfel, den wir zuvor gesehen haben.

1. Erstellen Sie zunächst eine lokale Kopie von [threejs-cube/index.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/index.html) in einem neuen Ordner, dann speichern Sie eine Kopie von [metal003.png](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/metal003.png) im gleichen Ordner. Dies ist das Bild, das wir später als Oberflächentextur für den Würfel verwenden werden.
2. Erstellen Sie als Nächstes eine neue Datei namens `script.js`, wiederum im selben Ordner wie zuvor.
3. Nun müssen Sie die Three.js-Bibliothek installiert haben. Sie können die Umgebungs-Einrichtungs-Schritte befolgen, die im Abschnitt [Ein einfaches Demo mit Three.js erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) beschrieben sind, damit Three.js wie erwartet funktioniert.
4. Nun, da wir `three.js` auf unserer Seite haben, können wir beginnen, JavaScript zu schreiben, das es in `script.js` verwendet. Beginnen wir damit, eine neue Szene zu erstellen – fügen Sie das Folgende in Ihre `script.js`-Datei ein:

   ```js
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene)-Konstruktor erstellt eine neue Szene, die die gesamte 3D-Welt darstellt, die wir anzeigen möchten.

5. Als Nächstes benötigen wir eine **Kamera**, damit wir die Szene sehen können. In 3D-Bildbegriffen stellt die Kamera die Position des Betrachters in der Welt dar. Um eine Kamera zu erstellen, fügen Sie die nächsten Zeilen hinzu:

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

   - Das Sichtfeld: Wie breit der Bereich vor der Kamera ist, der auf dem Bildschirm sichtbar sein soll, in Grad.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: In der Regel ist dies das Verhältnis der Breite der Szene durch die Höhe der Szene geteilt. Wenn Sie einen anderen Wert verwenden, wird die Szene verzerrt (was möglicherweise das ist, was Sie wollen, aber normalerweise nicht).
   - Die Nah-Clipping-Ebene: Wie nah an der Kamera Objekte sein können, bevor sie nicht mehr auf den Bildschirm gerendert werden. Denken Sie daran, wie, wenn Sie Ihre Fingerspitze näher und näher an den Raum zwischen Ihren Augen bewegen, können Sie sie irgendwann nicht mehr sehen.
   - Die Fern-Clipping-Ebene: Wie weit Dinge von der Kamera entfernt sind, bevor sie nicht mehr gerendert werden.

   Wir setzen auch die Position der Kamera auf 5 Distanzeinheiten entlang der Z-Achse, die wie in CSS aus dem Bildschirm heraus zum Betrachter zeigt.

6. Die dritte wichtige Zutat ist ein Renderer. Dabei handelt es sich um ein Objekt, das eine gegebene Szene, betrachtet durch eine gegebene Kamera, rendert. Wir werden einen jetzt mit dem [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)-Konstruktor erstellen, aber wir werden ihn vorerst nicht verwenden. Fügen Sie die nächsten Zeilen hinzu:

   ```js
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile legt die Größe fest, mit der der Renderer die Sicht der Kamera zeichnet, und die dritte Zeile fügt das vom Renderer erstellte {{htmlelement("canvas")}}-Element zum {{htmlelement("body")}} des Dokuments hinzu. Alles, was der Renderer zeichnet, wird nun in unserem Fenster angezeigt.

7. Als Nächstes möchten wir den Würfel erstellen, den wir auf dem Canvas anzeigen. Fügen Sie den folgenden Block am Ende Ihres JavaScripts hinzu:

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

   Es gibt hier einiges mehr zu beachten, also lassen Sie uns Stück für Stück durchgehen:

   - Zuerst erstellen wir eine `cube`-globale Variable, damit wir von überall im Code auf unseren Würfel zugreifen können.
   - Als nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt, dann rufen wir `load()` darauf auf. `load()` nimmt zwei Parameter in diesem Fall (obwohl es mehr annehmen kann): die Textur, die wir laden möchten (unser PNG), und eine Funktion, die ausgeführt wird, wenn die Textur geladen wurde.
   - Innerhalb dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um anzugeben, dass wir eine 2 x 2-Wiederholung des Bilds um alle Seiten des Würfels gewickelt haben möchten. Als Nächstes erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt und kombinieren sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh), um unseren Würfel zu erstellen. Ein Objekt erfordert normalerweise eine Geometrie (welche Form es hat) und ein Material (wie seine Oberfläche aussieht).
   - Zuletzt fügen wir unseren Würfel zur Szene hinzu und rufen dann unsere `draw()`-Funktion auf, um die Animation zu starten.

8. Bevor wir `draw()` definieren, fügen wir der Szene ein paar Lichter hinzu, um sie ein wenig aufzuhellen; fügen Sie die folgenden Blöcke als nächstes hinzu:

   ```js
   const light = new THREE.AmbientLight("rgb(255 255 255)"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("rgb(255 255 255)");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art weiches Licht, das die ganze Szene ein wenig aufhellt, wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt hingegen ist ein gerichteter Lichtstrahl, mehr wie eine Taschenlampe (oder ein Scheinwerfer, in der Tat).

9. Zuletzt fügen wir unsere `draw()`-Funktion am unteren Ende des Codes hinzu:

   ```js
   function draw() {
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
     renderer.render(scene, camera);

     requestAnimationFrame(draw);
   }
   ```

   Dies ist ziemlich intuitiv; bei jedem Frame drehen wir unseren Würfel leicht um seine X- und Y-Achsen, dann rendern wir die Szene, wie sie von unserer Kamera gesehen wird, und rufen schließlich `requestAnimationFrame()` auf, um das Zeichnen unseres nächsten Frames zu planen.

Werfen wir noch einmal einen schnellen Blick darauf, wie das fertige Produkt aussehen sollte:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Sie können [den fertigen Code auf GitHub finden](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-cube).

> [!NOTE]
> In unserem GitHub-Repo finden Sie auch ein weiteres interessantes 3D-Würfel-Beispiel – [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Es verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Computer-Webcam aufzunehmen und ihn als Textur auf die Seite des Würfels zu projizieren.

## Zusammenfassung

An dieser Stelle sollten Sie eine nützliche Vorstellung von den Grundlagen der Grafikprogrammierung mit Canvas und WebGL haben und was Sie mit diesen APIs machen können, sowie eine gute Vorstellung davon, wohin Sie für weitere Informationen gehen können. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklichen Grundlagen von Canvas abgedeckt – es gibt noch so viel mehr zu lernen! Die folgenden Artikel werden Sie weiterbringen.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) – Eine sehr detaillierte Tutorial-Reihe, die erklärt, was Sie über 2D-Canvas wissen sollten, viel ausführlicher als hier behandelt. Unverzichtbare Lektüre.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) – Eine Reihe, die die Grundlagen der rohen WebGL-Programmierung lehrt.
- [Ein einfaches Demo mit Three.js erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) – Ein grundlegendes Three.js-Tutorial. Wir haben auch gleichwertige Leitfäden für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spieleentwicklung](/de/docs/Games) – die Einstiegsseite für die Webspiele-Entwicklung auf MDN. Hier gibt es einige wirklich nützliche Tutorials und Techniken in Bezug auf 2D- und 3D-Canvas – siehe die Menüpunkte Techniken und Tutorials.

## Beispiele

- [Violent theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) – Verwendet die Web-Audio-API, um Klang zu erzeugen, und Canvas, um eine hübsche Visualisierung dazu bereitzustellen.
- [Voice change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) – Verwendet ein Canvas, um Echtzeit-Audiodaten der Web-Audio-API zu visualisieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
