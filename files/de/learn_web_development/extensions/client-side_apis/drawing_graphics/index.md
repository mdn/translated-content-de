---
title: Zeichnen von Grafiken
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsfähige Grafikprogrammiertools, von der Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) Sprache bis hin zu APIs zur Zeichnung auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in Canvas und weitere Ressourcen, um mehr zu lernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen der JavaScript-Objekte</a> und grundlegende API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte und Anwendungsfälle, die durch die in diesem Abschnitt behandelten APIs ermöglicht werden.</li>
          <li>Grundlegende Syntax und Verwendung von `<canvas>` und zugehörigen APIs.</li>
          <li>Verwendung von Timern und `requestAnimationFrame()`, um Animationsschleifen einzurichten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Das Web bestand ursprünglich nur aus Text, was sehr langweilig war, also wurden Bilder eingeführt – zuerst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Das war jedoch immer noch nicht genug. Während Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden konnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) – da sie durch Markup dargestellt werden –, gab es immer noch keine Möglichkeit, dasselbe mit Bitmap-Bildern zu tun, und die verfügbaren Tools waren ziemlich begrenzt. Das Web hatte noch immer keine Möglichkeit, effektiv Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die üblicherweise von niedrigeren Programmiersprachen wie C++ oder Java behandelt werden.

Die Situation begann sich zu verbessern, als Browser begannen, das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) im Jahr 2004 zu unterstützen. Wie Sie unten sehen werden, bietet Canvas einige nützliche Tools zur Erstellung von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere wenn sie mit einigen der anderen APIs der Webplattform kombiniert werden, kann aber schwierig oder unmöglich zugänglich sein.

Das folgende Beispiel zeigt eine einfache 2D-Canvas-basierte Animation von hüpfenden Bällen, die wir ursprünglich in unserem Modul [Einführung in JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) kennengelernt haben:

{{EmbedGHLiveSample("learning-area/javascript/oojs/bouncing-balls/index-finished.html", '100%', 500)}}

Rund um 2006-2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Dies wurde [WebGL](/de/docs/Web/API/WebGL_API), das unter den Browseranbietern an Fahrt gewann und um 2009-2010 standardisiert wurde. WebGL ermöglicht es Ihnen, echte 3D-Grafiken in Ihrem Webbrowser zu erstellen; das folgende Beispiel zeigt einen einfachen rotierenden WebGL-Würfel:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Dieser Artikel wird sich hauptsächlich auf 2D-Canvas konzentrieren, da roher WebGL-Code sehr komplex ist. Wir werden jedoch zeigen, wie man eine WebGL-Bibliothek verwendet, um eine 3D-Szene leichter zu erstellen, und Sie können ein Tutorial finden, das rohes WebGL behandelt - siehe [Einstieg in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Aktives Lernen: Einstieg mit einem `<canvas>`

Wenn Sie eine 2D- _oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML {{htmlelement("canvas")}}-Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Dies ist so einfach wie das Einfügen des Elements auf die Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dies erzeugt ein Canvas auf der Seite mit einer Größe von 320 mal 240 Pixeln.

Sie sollten etwas Fallback-Inhalt innerhalb der `<canvas>`-Tags einfügen. Dies sollte das Canvas-Inhalt für Benutzer von Browsern beschreiben, die Canvas nicht unterstützen, oder für Benutzer von Bildschirmlesegeräten.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Das Fallback sollte nützliche alternative Inhalte zum Canvas-Inhalt bereitstellen. Wenn Sie beispielsweise ein ständig aktualisiertes Diagramm von Aktienkursen rendern, könnte der Fallback-Inhalt ein statisches Bild des neuesten Aktienkursdiagramms mit `alt`-Text sein, der die Preise im Text angibt, oder eine Liste von Links zu einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalte sind für Bildschirmlesegeräte nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attributs direkt auf dem Canvas-Element selbst ein oder fügen Sie Fallback-Inhalte innerhalb der öffnenden und schließenden `<canvas>`-Tags hinzu. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte sind es.

### Erstellen und Dimensionieren unseres Canvas

Fangen wir an, indem wir unser eigenes Canvas erstellen, auf dem wir zukünftige Experimente zeichnen.

1. Erstellen Sie zunächst eine lokale Kopie des Verzeichnisses [0_canvas_start](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/0_canvas_start). Es enthält drei Dateien:
   - "index.html"
   - "script.js"
   - "style.css"
2. Öffnen Sie "index.html" und fügen Sie den folgenden Code direkt unter dem öffnenden {{htmlelement("body")}}-Tag hinzu:

   ```html
   <canvas class="myCanvas">
     <p>Add suitable fallback here.</p>
   </canvas>
   ```

   Wir haben eine `class` zum `<canvas>`-Element hinzugefügt, damit es leichter zu selektieren ist, wenn wir mehrere Canvases auf der Seite haben, aber wir haben die `width`- und `height`-Attribute vorerst entfernt (Sie können sie wieder einfügen, wenn Sie möchten, aber wir werden sie mit JavaScript in einem untenstehenden Abschnitt einstellen). Canvases ohne explizite Breite und Höhe sind standardmäßig 300 Pixel breit und 150 Pixel hoch.

3. Öffnen Sie jetzt "script.js" und fügen Sie die folgenden Zeilen JavaScript hinzu:

   ```js
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz zum Canvas in der Konstanten `canvas` gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas gleich [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Viewport-Breite gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas gleich [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Viewport-Höhe gibt). So haben wir jetzt ein Canvas, das die gesamte Breite und Höhe des Browserfensters füllt!

   Sie werden auch sehen, dass wir Zuweisungen mit mehreren Gleichheitszeichen verketten - dies ist in JavaScript erlaubt, und es ist eine gute Technik, wenn Sie mehrere Variablen alle auf denselben Wert setzen möchten. Wir wollten die Canvas-Breite und -Höhe leicht zugänglich in den Breite/Höhe-Variablen machen, da sie nützliche Werte sind, die später verfügbar sein sollten (zum Beispiel, wenn Sie etwas genau auf halbem Weg über die Breite des Canvas zeichnen möchten).

> [!NOTE]
> Sie sollten im Allgemeinen die Größe des Bildes mit HTML-Attributen oder DOM-Eigenschaften setzen, wie oben erklärt. Sie könnten CSS verwenden, aber das Problem ist dann, dass die Größenänderung nach dem Rendern des Canvas erfolgt, und genau wie bei jedem anderen Bild (das gerenderte Canvas ist nur ein Bild) könnte das Bild verpixelt/verzerrt werden.

### Holen Sie sich den Canvas-Kontext und die endgültige Einrichtung

Wir müssen eine letzte Sache tun, bevor wir unser Canvas-Vorlage als fertig betrachten können. Um auf den Canvas zu zeichnen, müssen wir einen speziellen Verweis auf den Zeichenbereich namens Kontext erhalten. Dies wird mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erreicht, die für die Grundverwendung eine einzelne Zeichenkette als Parameter benötigt, die den Typ des Kontextes angibt, den Sie abrufen möchten.

In diesem Fall möchten wir ein 2D-Canvas, also fügen Sie die folgende JavaScript-Zeile unterhalb der anderen in "script.js" hinzu:

```js
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextwerte, die Sie wählen könnten, umfassen `webgl` für WebGL, `webgl2` für WebGL 2 usw., aber diese werden wir in diesem Artikel nicht benötigen.

Das war's - unser Canvas ist jetzt bereit zum Zeichnen! Die Variable `ctx` enthält jetzt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, und alle Zeichenoperationen auf dem Canvas werden das Manipulieren dieses Objekts betreffen.

Lassen Sie uns eine letzte Sache tun, bevor wir weitermachen. Wir färben den Canvas-Hintergrund schwarz, um Ihnen einen ersten Vorgeschmack auf die Canvas-API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

```js
ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe unter Verwendung der [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)-Eigenschaft des Canvas (dies nimmt [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) genau wie CSS-Eigenschaften) und zeichnen dann mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) ein Rechteck, das den gesamten Bereich des Canvas mit der gewünschten Größe abdeckt (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, die Sie für das Rechteck gezeichnet haben möchten - wir haben Ihnen gesagt, dass diese Breite- und Höhe-Variablen nützlich sein würden).

OK, unsere Vorlage ist fertig und es ist Zeit, weiterzugehen.

## 2D-Canvas Grundlagen

Wie oben erwähnt, werden alle Zeichenoperationen durch das Manipulieren eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts (in unserem Fall `ctx`) durchgeführt. Viele Operationen müssen mit Koordinaten versehen werden, um genau festzulegen, wo etwas gezeichnet werden soll – die obere linke Ecke des Canvas ist Punkt (0, 0), die horizontale (x) Achse verläuft von links nach rechts und die vertikale (y) Achse verläuft von oben nach unten.

![Millimeterpapier mit kleinen Quadraten, die seine Fläche bedecken, mit einem stahlblauen Quadrat in der Mitte. Die obere linke Ecke des Canvas ist Punkt (0, 0) der Canvas-x-Achse und y-Achse. Die horizontale (x) Achse verläuft von links nach rechts und bezeichnet die Breite, und die vertikale (y) Achse verläuft von oben nach unten und bezeichnet die Höhe. Die obere linke Ecke des blauen Quadrats ist als Entfernung von x-Einheiten von der y-Achse und y-Einheiten von der x-Achse beschriftet.](canvas_default_grid.png)

Das Zeichnen von Formen wird oft mit dem Rechteck-Formwerkzeug oder durch Verfolgen eines Pfades gemacht und danach die Form gefüllt. Unten zeigen wir Ihnen, wie Sie beides tun.

### Einfache Rechtecke

Fangen wir mit einigen einfachen Rechtecken an.

1. Machen Sie zuerst eine Kopie Ihrer neu codierten Canvas-Vorlage (oder machen Sie eine lokale Kopie des Verzeichnisses [1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template), wenn Sie die obigen Schritte nicht befolgt haben).
2. Fügen Sie als nächstes die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 0)";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie speichern und aktualisieren, sollte ein rotes Rechteck auf Ihrem Canvas erschienen sein. Die obere linke Ecke ist 50 Pixel von der Ober- und Linkskante des Canvas entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch die dritten und vierten Parameter definiert).

3. Fügen wir ein weiteres Rechteck hinzu - diesmal ein grünes. Fügen Sie das folgende am Ende Ihres JavaScripts hinzu:

   ```js
   ctx.fillStyle = "rgb(0 255 0)";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren Sie, und Sie werden Ihr neues Rechteck sehen. Dies bringt einen wichtigen Punkt zur Geltung: Grafikoperationen wie das Zeichnen von Rechtecken, Linien usw. werden in der Reihenfolge ausgeführt, in der sie vorkommen. Denken Sie daran wie an das Streichen einer Wand, wobei jede Farbschicht überlappen und möglicherweise das darunterliegende verbergen kann. Sie können nichts ändern, also müssen Sie sorgfältig darüber nachdenken, in welcher Reihenfolge Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, zum Beispiel mit `rgb()`. Der "Alphakanal" definiert die Menge an Transparenz, die die Farbe hat. Je höher ihr Wert, desto mehr verdeckt sie das, was dahinter liegt. Fügen Sie das folgende zu Ihrem Code hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, einige weitere Rechtecke Ihres eigenen Designs zu zeichnen; haben Sie Spaß dabei!

### Umrisse und Linienstärken

Bisher haben wir uns das Zeichnen von gefüllten Rechtecken angesehen, aber man kann auch Rechtecke zeichnen, die nur Umrisse (sogenannte **Strokes** im Grafikdesign) sind. Um die Farbe für Ihren Stroke einzustellen, verwenden Sie die [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)-Eigenschaft; das Zeichnen eines Umrissrechtecks erfolgt mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Fügen Sie dem vorherigen Beispiel das folgende hinzu, wiederum unterhalb der vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "rgb(255 255 255)";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Umrissen beträgt 1 Pixel; Sie können den Wert der [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)-Eigenschaft ändern, um dies anzupassen (es nimmt eine Zahl dar, die die Anzahl der Pixel angibt, die der Stroke breit ist). Fügen Sie die folgende Zeile zwischen den vorherigen zwei Zeilen hinzu:

   ```js
   ctx.lineWidth = 5;
   ```

Jetzt sollten Sie sehen, dass Ihre weiße Umrandung viel dicker geworden ist! Das war es fürs Erste. An diesem Punkt sollte Ihr Beispiel so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles/index.html", '100%', 250)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [2_canvas_rectangles](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles).

### Pfade zeichnen

Wenn Sie etwas komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Im Grunde besteht dies darin, Code zu schreiben, um genau anzugeben, welchen Pfad der Stift auf Ihrem Canvas entlang bewegen soll, um die Form zu zeichnen, die Sie zeichnen möchten. Canvas beinhaltet Funktionen zum Zeichnen von geraden Linien, Kreisen, Bézier-Kurven und mehr.

Beginnen wir diesen Abschnitt mit einer frischen Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)), in der wir das neue Beispiel zeichnen.

Wir werden einige gemeinsame Methoden und Eigenschaften über alle der unten stehenden Abschnitte verwenden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — beginnen, einen Pfad zu zeichnen, an dem Punkt, an dem sich der Stift derzeit auf dem Canvas befindet. Auf einem neuen Canvas beginnt der Stift bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — beweg den Stift an einen anderen Punkt auf dem Canvas, ohne die Linie zu erfassen oder zu verfolgen; der Stift "springt" zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — zeichnen Sie eine gefüllte Form, indem Sie den bisher aufgezeichneten Pfad füllen.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — zeichnen Sie eine Umrissform, indem Sie entlang des bisher aufgezeichneten Pfades einen Stroke zeichnen.
- Sie können auch Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` mit Pfaden ebenso verwenden wie mit Rechtecken.

Ein typischer, einfacher Pfadzeichnungsprozess könnte so aussehen:

```js
ctx.fillStyle = "rgb(255 0 0)";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Linien Zeichnen

Lassen Sie uns ein gleichseitiges Dreieck auf das Canvas zeichnen.

1. Zuerst fügen Sie die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Diese wandelt Gradwerte in Bogenmaß um, was nützlich ist, da wann immer Sie einen Winkelwert in JavaScript angeben müssen, wird er fast immer in Bogenmaß erwartet, aber Menschen denken normalerweise in Grad.

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Als nächstes beginnen Sie Ihren Pfad, indem Sie den folgenden Code unter Ihre vorherige Ergänzung hinzufügen; hier setzen wir eine Farbe für unser Dreieck, beginnen einen Pfad zu zeichnen und bewegen den Stift dann zu (50, 50), ohne etwas zu zeichnen. Dort beginnen wir unser Dreieck zu zeichnen.

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

   Zuerst zeichnen wir eine Linie zu (150, 50) – unser Pfad verläuft jetzt 100 Pixel nach rechts entlang der X-Achse.

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks mit etwas einfacher Trigonometrie. Im Grunde zeichnen wir das Dreieck nach unten zeigend. Die Winkel in einem gleichseitigen Dreieck sind immer 60 Grad; um die Höhe zu berechnen, können wir es in zwei rechtwinklige Dreiecke teilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben. In Bezug auf die Seiten:

   - Die längste Seite wird **Hypotenuse** genannt
   - Die Seite neben dem 60-Grad-Winkel wird **Ankathete** genannt - wir wissen, dass sie 50 Pixel beträgt, da sie die Hälfte der Linie ist, die wir gerade gezeichnet haben.
   - Die Seite gegenüber dem 60-Grad-Winkel wird **Gegenkathete** genannt, was die Höhe des Dreiecks ist, die wir berechnen möchten.

   ![Ein gleichseitiges Dreieck, das nach unten zeigt, mit beschrifteten Winkeln und Seiten. Die horizontale Linie oben wird als 'Ankathete' beschriftet. Eine senkrechte Punktlinie, die von der Mitte der Ankathete gezogen ist, wird als 'Gegenkathete' beschriftet und teilt das Dreieck und erzeugt dabei zwei gleiche rechtwinklige Dreiecke. Die rechte Seite des Dreiecks wird als Hypotenuse bezeichnet, da sie die Hypotenuse des rechtwinkligen Dreiecks ist, das von der Linie, die als 'Gegenkathete' bezeichnet ist, gebildet wird, während alle drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des rechtwinkligen Dreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass die Länge der Ankathete multipliziert mit dem Tangens des Winkels der Gegenkathete entspricht. Daher kommen wir auf `50 * Math.tan(degToRad(60))`. Wir verwenden unsere Funktion `degToRad()`, um 60 Grad in Bogenmaß zu konvertieren, da {{jsxref("Math.tan()")}} erwartet einen Eingabewert im Bogenmaß.

4. Mit der berechneten Höhe ziehen wir eine weitere Linie zu `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss genau in der Mitte zwischen den vorherigen beiden X-Werten liegen, die wir gesetzt haben. Der Y-Wert auf der anderen Seite muss 50 plus die Dreieckshöhe sein, da wir wissen, dass die Spitze des Dreiecks 50 Pixel vom oberen Canvasrand entfernt ist.
5. Die nächste Linie zieht eine Linie zurück zum Ausgangspunkt des Dreiecks.
6. Schließlich führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form zu füllen.

#### Kreise Zeichnen

Schauen wir uns nun an, wie man einen Kreis in Canvas zeichnet. Dies wird mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) erreicht, die den vollständigen oder einen Teil eines Kreises an einem angegebenen Punkt zeichnet.

1. Fügen Sie einen Bogen zu unserem Canvas hinzu – fügen Sie das folgende am Ende Ihres Codes hinzu:

   ```js
   ctx.fillStyle = "rgb(0 0 255)";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` nimmt sechs Parameter entgegen. Die ersten beiden geben die Position des Mittelpunkts des Bogens an (X und Y). Der dritte ist der Radius des Kreises, der vierte und fünfte sind die Anfangs- und Endwinkel, bei denen der Kreis gezeichnet werden soll (also gibt uns die Angabe von 0 und 360 Grad einen vollständigen Kreis), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn (gegen die Uhr) oder im Uhrzeigersinn (`false` ist im Uhrzeigersinn) gezeichnet werden soll.

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

   Das Muster hier ist sehr ähnlich, jedoch mit zwei Unterschieden:

   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird, was bedeutet, dass selbst wenn der Bogen als bei -45 Grad beginnend und bei 45 Grad endend angegeben ist, wir den Bogen über die 270 Grad nicht innerhalb dieses Abschnitts zeichnen. Wenn Sie `true` in `false` ändern und dann den Code erneut ausführen würden, würde nur der 90-Grad-Slice des Kreises gezeichnet.
   - Vor dem Aufruf von `fill()` zeichnen wir eine Linie zum Mittelpunkt des Kreises. Das bedeutet, dass der Bogen, wie wir ihn bisher gezeichnet haben, nicht bis zu seinem Endpunkt des Slices sein muss. Wenn Sie diese Linie entfernen (versuchen Sie es!) und dann den Code erneut ausführen, würden Sie nur einen am Rand des Kreises abgeschnittenen Teil bekommen, der vom Startende bis zu seinem Endpunkt geht. Dies veranschaulicht einen anderen wichtigen Punkt des Canvas - wenn Sie versuchen, einen unvollständigen Pfad zu füllen (d.h. einen, der nicht geschlossen ist), füllt der Browser eine gerade Linie zwischen Start- und Endpunkt und füllt ihn dann.

Das war's fürs Erste; Ihr abschließendes Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/3_canvas_paths/index.html", '100%', 200)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [3_canvas_paths](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/3_canvas_paths).

> [!NOTE]
> Um mehr über fortgeschrittene Pfadzeichnungsfunktionen wie Bézier-Kurven zu erfahren, schauen Sie sich unser [Zeichnen von Formen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)-Tutorial an.

### Text

Canvas hat auch Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz erkunden. Beginnen Sie, indem Sie wieder eine frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) erstellen, um auf diese Weise das neue Beispiel zu zeichnen.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnet Umriss- (Strokes) Text.

Beide nehmen drei Eigenschaften in ihrer Grundverwendung: den zu zeichnenden Textstring und die X- und Y-Koordinaten des Punkts, an dem der Text gezeichnet werden soll. Dies ergibt die **untere linke** Ecke der **Textbox** (buchstäblich, das Feld, das den Text umgibt, den Sie zeichnen), was Sie verwirren könnte, da andere Zeichenoperationen dazu neigen, von der oberen linken Ecke zu beginnen - beachten Sie dies.

Es gibt auch eine Reihe von Eigenschaften, um die Texteinstellung zu steuern, wie [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), die es Ihnen ermöglicht, Schriftfamilie, Größe usw. anzugeben. Es nimmt als Wert die gleiche Syntax an, wie sie die CSS-{{cssxref("font")}}-Eigenschaft.

Canvas-Inhalte sind für Bildschirmlesegeräte nicht zugänglich. In den Canvas gemalter Text ist nicht für das DOM verfügbar, muss jedoch zugänglich gemacht werden. In diesem Beispiel fügen wir den Text als Wert für `aria-label` ein.

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

Hier zeichnen wir zwei Textzeilen, eine Umrisslinie und die andere gefüllt. Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/4_canvas_text/index.html", '100%', 180)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [4_canvas_text](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/4_canvas_text).

Probieren Sie es aus und sehen Sie, was Ihnen einfällt! Sie können weitere Informationen zu den verfügbaren Optionen für Canvas-Text unter [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) finden.

### Bilder auf Canvas zeichnen

Es ist möglich, externe Bilder auf Ihr Canvas zu rendern. Dies können einfache Bilder sein, Frames aus Videos oder der Inhalt anderer Canvases. Derzeit werden wir nur den Fall betrachten, einige einfache Bilder auf unserem Canvas zu verwenden.

1. Erstellen Sie wie zuvor erneut eine frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)), um auf diese Weise das neue Beispiel zu zeichnen.

   Bilder werden auf das Canvas unter Verwendung der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) gezeichnet. Die einfachste Version nimmt drei Parameter - einen Verweis auf das Bild, das Sie rendern möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Lassen Sie uns beginnen, eine Bildquelle zu erhalten, die wir in unser Canvas einbetten. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

   ```js
   const image = new Image();
   image.src = "firefox.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt unter Verwendung des [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktors. Das zurückgegebene Objekt ist vom gleichen Typ wie dasjenige, das zurückgegeben wird, wenn Sie eine Referenz zu einem vorhandenen {{htmlelement("img")}}-Element abrufen. Danach setzen wir sein [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut, um gleich mit unserem Firefox-Logo-Bild zu sein. An diesem Punkt beginnt der Browser, das Bild zu laden.

3. Wir könnten nun versuchen, das Bild mit `drawImage()` einzubetten, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, andernfalls schlägt der Code fehl. Dies erreichen wir durch das `load`-Ereignis, das nur ausgelöst wird, wenn das Bild fertig geladen ist. Fügen Sie den folgenden Block unter dem vorherigen hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie das Bild auf dem Canvas eingebettet sehen.

4. Aber es gibt noch mehr! Was ist, wenn wir nur einen Teil des Bildes anzeigen oder es neu dimensionieren möchten? Beides können wir mit der komplexeren Version von `drawImage()` tun. Aktualisieren Sie Ihre Linie `ctx.drawImage()` folgendermaßen:

   ```js
   ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
   ```

   - Der erste Parameter ist die Bildreferenz, wie zuvor.
   - Die Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, relativ zu der oberen linken Ecke des Bildes selbst. Nichts links vom ersten Parameter oder oberhalb des zweiten wird gezeichnet.
   - Die Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem ursprünglich geladenen Bild ausschneiden möchten.
   - Die Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Abschnitts des Bildes zeichnen möchten, relativ zur oberen linken Ecke des Canvas.
   - Die Parameter 8 und 9 definieren die Breite und Höhe, um den ausgeschnittenen Bereich des Bildes zu zeichnen. In diesem Fall haben wir die gleichen Abmessungen wie der ursprüngliche Ausschnitt angegeben, aber Sie könnten ihn durch Angabe unterschiedlicher Werte skalieren.

5. Wenn das Bild sinnvoll aktualisiert wird, muss auch die {{Glossary("accessible_description", "zugängliche Beschreibung")}} aktualisiert werden.

   ```js
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das abschließende Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/5_canvas_images/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [5_canvas_images](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/5_canvas_images).

## Schleifen und Animationen

Wir haben bisher einige sehr grundlegende Verwendungen von 2D-Canvas behandelt, aber wirklich, Sie werden die volle Leistung von Canvas erst erfahren, wenn Sie es in irgendeiner Weise aktualisieren oder animieren. Schließlich bietet Ihnen Canvas skriptgesteuerte Bilder! Wenn Sie nichts ändern, könnten Sie genauso gut nur statische Bilder verwenden und sich die Mühe sparen.

### Eine Schleife erstellen

Mit Schleifen in Canvas zu spielen, macht ziemlich Spaß - Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife (oder einem anderen Typ) genauso ausführen wie anderer JavaScript-Code.

Lassen Sie uns ein Beispiel erstellen.

1. Erstellen Sie erneut eine frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie sie in Ihrem Code-Editor.
2. Fügen Sie die folgende Zeile am Ende Ihres JavaScripts hinzu. Diese enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

   Dadurch wird der Koordinatenursprung (0, 0) in die Mitte des Canvas verschoben und nicht mehr in die obere linke Ecke. Dies ist in vielen Situationen nützlich, wie in diesem Fall, wo wir möchten, dass unser Design relativ zur Mitte des Canvas gezeichnet wird.

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

   Hier implementieren wir dieselbe `degToRad()`-Funktion, die wir im obigen Dreiecksbeispiel gesehen haben, eine `rand()`-Funktion, die eine Zufallszahl zwischen einem angegebenen unteren und oberen Grenzwert zurückgibt, `length`- und `moveOffset`-Variablen (auf die wir später noch eingehen werden) und eine leere `for`-Schleife.

4. Die Idee ist, dass wir etwas auf dem Canvas innerhalb der `for`-Schleife zeichnen und es bei jeder Iteration weiterentwickeln, damit wir etwas Interessantes schaffen können. Fügen Sie den folgenden Code in Ihre `for`-Schleife ein:

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

   Bei jeder Iteration:

   - Setzen wir `fillStyle` auf einen Ton von leicht transparentem Lila, der sich bei jedem Durchlauf basierend auf dem Wert von `length` ändert. Wie Sie später sehen werden, wird die Länge bei jedem Durchlauf kleiner, sodass der Effekt hier ist, dass die Farbe mit jedem gezeichneten Dreieck heller wird.
   - Beginnen wir den Pfad.
   - Bewegen Sie den Stift zu einer Koordinate von `(moveOffset, moveOffset)`; Diese Variable gibt an, wie weit wir uns bei jedem neuen Dreieck bewegen wollen.
   - Zeichnen Sie eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Dies zeichnet eine Linie der Länge `length`, die parallel zur X-Achse verläuft.
   - Berechnen Sie die Höhe des Dreiecks, wie zuvor.
   - Zeichnen Sie eine Linie zur nach unten zeigenden Ecke des Dreiecks und dann zurück zum Startpunkt des Dreiecks.
   - Rufen Sie `fill()` auf, um das Dreieck zu füllen.
   - Aktualisieren Sie die Variablen, die die Sequenz der Dreiecke beschreiben, um bereit zu sein, das nächste zu zeichnen. Wir verringern den `length`-Wert um 1, sodass die Dreiecke bei jeder Iteration kleiner werden; erhöhen `moveOffset` um einen kleinen Betrag, sodass jedes nachfolgende Dreieck ein wenig weiter entfernt ist, und verwenden eine weitere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), die es uns ermöglicht, das gesamte Canvas zu drehen! Wir drehen es um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das war's! Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop/index.html", '100%', 550)}}

An diesem Punkt ermutigen wir Sie, das Beispiel zu personalisieren! Beispielsweise:

- Zeichnen Sie Rechtecke oder Bögen anstelle von Dreiecken oder binden Sie sogar Bilder ein.
- Spielen Sie mit den `length`- und `moveOffset`-Werten.
- Führen Sie Zufallszahlen ein, indem Sie die `rand()`-Funktion verwenden, die wir oben eingefügt haben, aber noch nicht genutzt haben.

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [6_canvas_for_loop](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop).

### Animationen

Das Schleifenbeispiel, das wir oben gebaut haben, war unterhaltsam, aber wirklich benötigen Sie eine konstante Schleife, die für jede ernsthafte Canvas-Anwendung (wie Spiele und Echtzeit-Visualisierungen) immer wieder läuft. Wenn Sie Ihr Canvas als einem Film ähnlich betrachten, möchten Sie wirklich, dass das Display bei jedem Rahmen aktualisiert wird, um die aktualisierte Ansicht zu zeigen, mit einer idealen Bildwiederholrate von 60 Frames pro Sekunde, damit die Bewegung für das menschliche Auge schön und flüssig erscheint.

Es gibt einige JavaScript-Funktionen, mit denen Sie Funktionen mehrmals in der Sekunde wiederholen lassen können, die beste für unsere Zwecke hier ist [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Sie nimmt einen Parameter - den Namen der Funktion, die Sie für jeden Frame ausführen möchten. Das nächste Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion die neue Aktualisierung Ihres Animation zeichnet und dann `requestAnimationFrame()` kurz vor dem Ende der Funktion erneut aufgerufen wird, läuft die Animationsschleife weiter. Die Schleife endet, wenn Sie aufhören, `requestAnimationFrame()` aufzurufen, oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) aufrufen, nachdem Sie `requestAnimationFrame()` aufgerufen haben, aber bevor der Frame aufgerufen wird.

> [!NOTE]
> Es ist gute Praxis, `cancelAnimationFrame()` von Ihrem Hauptcode aus aufzurufen, wenn Sie mit der Animation fertig sind, um sicherzustellen, dass keine Updates mehr warten.

Der Browser bearbeitet komplexe Details wie das Animieren von Dingen an einer konsistenten Geschwindigkeit ohne Ressourcen zu verschwenden, indem er Dinge animiert, die nicht gesehen werden können.

Um zu sehen, wie es funktioniert, werfen wir noch einmal einen kurzen Blick auf unser Bouncing Balls Beispiel ([live sehen](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html) und auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/oojs/bouncing-balls)). Der Code für die Schleife, die alles in Bewegung hält, sieht so aus:

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

Wir führen die Funktion `loop()` einmal am Ende des Codes aus, um den Zyklus zu starten und den ersten Animationsrahmen zu zeichnen; die `loop()`-Funktion übernimmt dann die verantwortung für den Aufruf von `requestAnimationFrame(loop)`, um den nächsten Rahmen der Animation erneut auszuführen, immer und immer wieder.

Beachten Sie, dass wir bei jedem Rahmen das gesamte Canvas löschen und alles neu zeichnen. Für jeden vorhandenen Ball zeichnen wir ihn, aktualisieren seine Position und überprüfen, ob er mit anderen Bällen kollidiert. Wenn Sie eine Grafik auf ein Canvas gezeichnet haben, gibt es keine Möglichkeit, diese Grafik individuell zu manipulieren, wie Sie es mit DOM-Elementen können. Sie können jeden Ball nicht einzeln im Canvas bewegen, denn sobald er gezeichnet ist, ist er Teil des Canvas und kein einzelnes zugängliches Element oder Objekt mehr. Stattdessen müssen Sie löschen und neu zeichnen, entweder durch das Löschen des gesamten Rahmens und das Neuzeichnen aller Teile oder durch die Verwendung von Code, der genau weiß, welche Teile gelöscht und nur der mindeste Bereich des Canvas, der erforderlich ist, gelöscht und neu gezeichnet werden müssen.

Die Optimierung der Animation von Grafiken ist ein eigenes Spezialgebiet der Programmierung, mit vielen cleveren Techniken, die zur Verfügung stehen. Diese gehen allerdings über das hinaus, was wir für unser Beispiel benötigen!

Im Allgemeinen umfasst der Prozess der Durchführung einer Canvas-Animation die folgenden Schritte:

1. Löschen Sie den Inhalt des Canvas (z. B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Speichern Sie den Stand (falls erforderlich) mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) — dies ist erforderlich, wenn Sie Einstellungen speichern möchten, die Sie auf dem Canvas aktualisiert haben, bevor Sie fortfahren. Nützlich für fortgeschrittenere Anwendungen.
3. Zeichnen Sie die Grafiken, die Sie animieren.
4. Stellen Sie die Einstellungen wieder her, die Sie in Schritt 2 gespeichert haben, indem Sie [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore) verwenden.
5. Rufen Sie `requestAnimationFrame()` auf, um das Zeichnen des nächsten Rahmens der Animation zu planen.

> [!NOTE]
> Wir werden `save()` und `restore()` hier nicht behandeln, aber sie werden in unserem [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations)-Tutorial (und den darauf folgenden) gut erklärt.

### Eine einfache Charakteranimation

Jetzt lassen Sie uns unsere eigene einfache Animation erstellen – wir lassen einen Charakter aus einem gewissen ziemlich großartigen Retro-Computerspiel über den Bildschirm laufen.

1. Erstellen Sie erneut eine frische Kopie unserer Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie sie in Ihrem Code-Editor.

2. Aktualisieren Sie das innere HTML, um das Bild widerzuspiegeln:

   ```html
   <canvas class="myCanvas">
     <p>A man walking.</p>
   </canvas>
   ```

3. Fügen Sie am Ende des JavaScripts die folgende Zeile hinzu, um den Koordinatenursprung wieder in die Mitte des Canvas zu versetzen:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

4. Erstellen wir nun ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, setzen dessen [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf das Bild, das wir laden möchten, und fügen ein `onload`-Ereignishandling hinzu, das die `draw()`-Funktion auslöst, wenn das Bild geladen ist:

   ```js
   const image = new Image();
   image.src = "walk-right.png";
   image.onload = draw;
   ```

5. Jetzt fügen wir einige Variablen hinzu, die die Position verfolgen, an der der Sprite auf dem Bildschirm gezeichnet werden soll, und die Spritenummer, die wir anzeigen möchten.

   ```js
   let sprite = 0;
   let posX = 0;
   ```

   Lassen Sie uns das Spriteblattbild erklären (das wir mit Respekt von Mike Thomas' [Walking cycle using CSS animation](https://codepen.io/mikethomas/pen/kQjKLW) CodePen ausgeliehen haben). Das Bild sieht so aus:

   ![Ein Spriteblatt mit sechs Sprite-Bildern eines pixelierten Charakters, der einem gehenden Menschen von seiner rechten Seite bei verschiedenen Instanzen eines einzigen Schrittes nach vorne ähnelt. Der Charakter trägt ein weißes Hemd mit himmelblauen Knöpfen, eine schwarze Hose und schwarze Schuhe. Jeder Sprite ist 102 Pixel breit und 148 Pixel hoch.](walk-right.png)

   Es enthält sechs Sprites, die die gesamte Gehsequenz ausmachen — jedes ist 102 Pixel breit und 148 Pixel hoch. Um jeden Sprite sauber anzuzeigen, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild vom Spriteblatt auszuschneiden und nur diesen Teil anzuzeigen, wie wir es oben mit dem Firefox-Logo getan haben. Die X-Koordinate des Schnittes muss ein Vielfaches von 102 sein, und die Y-Koordinate immer 0. Die Schnittgröße wird immer 102 x 148 Pixel sein.

6. Lassen Sie uns nun eine leere `draw()`-Funktion am Ende des Codes einfügen, die bereit ist, mit etwas Code gefüllt zu werden:

   ```js
   function draw() {}
   ```

7. Der Rest des Codes in diesem Abschnitt geht in `draw()`. Führen Sie zunächst die folgende Zeile aus, die das Canvas löscht, um jeden Rahmen vorbereitend zu zeichnen. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width/2), -(height/2)` spezifizieren müssen, da wir zuvor den Ursprungsposition als `width/2, height/2` festgelegt haben.

   ```js
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

8. Als nächstes zeichnen wir unser Bild mit `drawImage` — der 9-Parameter-Version. Fügen Sie das folgende hinzu:

   ```js
   ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);
   ```

   Wie Sie sehen:

   - Wir spezifizieren `image` als das Bild, das eingebettet werden soll.
   - Die Parameter 2 und 3 spezifizieren die obere linke Ecke des Schnitts, den wir aus dem Quellbild ausschneiden wollen, wobei der X-Wert als `sprite` mal 102 (wo `sprite` die Spritenummer zwischen 0 und 5 ist) und der Y-Wert immer 0 ist.
   - Die Parameter 4 und 5 spezifizieren die Größe des Schnitts, den auszuschneiden ist – 102 Pixel mal 148 Pixel.
   - Die Parameter 6 und 7 spezifizieren die obere linke Ecke des Feldes, in das der Schnitt auf dem Canvas gezeichnet werden soll – die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichnungsposition durch das Ändern des `posX`-Werts ändern können.
   - Die Parameter 8 und 9 spezifizieren die Größe des Bildes auf dem Canvas. Wir möchten es in seiner originalen Größe halten, so wir geben als Breite 102 und 148 an.

9. Nun werden wir den `sprite`-Wert nach jedem Zeichnen ändern - jedenfalls nach einigen davon. Fügen Sie den folgenden Block am Ende der `draw()`-Funktion hinzu:

   ```js
   if (posX % 13 === 0) {
     if (sprite === 5) {
       sprite = 0;
     } else {
       sprite++;
     }
   }
   ```

   Wir verpacken den gesamten Block in `if (posX % 13 === 0) { }`. Wir verwenden den Modulo (`%`) Operator (auch bekannt als [Restoperator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu überprüfen, ob der `posX`-Wert durch 13 genau dividiert werden kann, ohne einen Rest zu hinterlassen. Wenn ja, fahren wir mit dem nächsten Sprite fort, indem wir `sprite` inkrementieren (auf Null zurücksetzen, nachdem wir mit Sprite #5 fertig sind). Das bedeutet effektiv, dass wir das Sprite nur alle 13 Frames oder grob etwa 5 Frames pro Sekunde aktualisieren (wenn `requestAnimationFrame()` uns bis zu 60 Frames pro Sekunde aufrufen kann, wenn möglich). Wir verlangsamen bewusst die Frame-Rate, weil wir nur sechs Sprites zur Verfügung haben, und wenn wir eines jede 60stel Sekunde anzeigen würden, würde unser Charakter viel zu schnell laufen!

   Innerhalb des äußeren Blocks verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Anweisung, um zu überprüfen, ob der `sprite`-Wert bei 5 ist (das letzte Sprite, da die Spritenummern von 0 bis 5 laufen). Wenn wir bereits das letzte Sprite anzeigen, setzen wir `sprite` auf Null zurück; andernfalls inkrementieren wir es einfach um 1.

10. Dann müssen wir herausfinden, wie wir den `posX`-Wert bei jedem Frame ändern - fügen Sie den folgenden Codeblock direkt unterhalb des vorherigen hinzu.

    ```js
    if (posX > width / 2) {
      let newStartPos = -(width / 2 + 102);
      posX = Math.ceil(newStartPos);
      console.log(posX);
    } else {
      posX += 2;
    }
    ```

    Wir verwenden eine weitere `if...else`-Anweisung, um zu prüfen, ob der Wert von `posX` größer als `width/2` geworden ist, was bedeutet, dass unser Charakter vom rechten Bildschirmrand gelaufen ist. Wenn ja, berechnen wir eine Position, die den Charakter direkt links vom Rand des Bildschirms positionieren würde.

    Wenn unser Charakter noch nicht vom Bildschirmrand gelaufen ist, inkrementieren wir `posX` um 2. Das wird dafür sorgen, dass er sich ein wenig nach rechts bewegt, das nächste Mal, wenn wir ihn zeichnen.

11. Schließlich müssen wir die Animationsschleife erstellen, indem wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am unteren Ende der `draw()`-Funktion aufrufen:

    ```js
    window.requestAnimationFrame(draw);
    ```

Das war's! Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [7_canvas_walking_animation](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation).

### Eine einfache Zeichenanwendung

Als letztes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben (wie Mausbewegungen, in diesem Fall) kombiniert werden kann. Wir führen Sie nicht durch und bauen diese hier auf; wir werden die interessantesten Teile des Codes erkunden.

Das Beispiel finden Sie auf GitHub als [8_canvas_drawing_app](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app), und Sie können damit live spielen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app/index.html", '100%', 600)}}

Schauen wir uns die interessantesten Teile an. Zuerst verfolgen wir die x- und y-Koordinaten der Maus und ob sie geklickt wird oder nicht mit drei Variablen: `curX`, `curY` und `pressed`. Wenn sich die Maus bewegt, feuern wir eine Funktion, die als `onmousemove`-Ereignishandler eingestellt ist, die die aktuellen x- und y-Werte erfasst. Wir verwenden auch `onmousedown`- und `onmouseup`-Ereignishandler, um den Wert von `pressed` auf `true` zu ändern, wenn die Maustaste gedrückt wird, und wieder auf `false`, wenn sie losgelassen wird.

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

Wenn die Schaltfläche "Leeren" gedrückt wird, führen wir eine einfache Funktion aus, die das gesamte Canvas zurück ins Schwarze löscht, auf die gleiche Weise, die wir zuvor gesehen haben:

```js
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichnungsschleife ist dieses Mal ziemlich einfach - wenn `pressed` `true` ist, zeichnen wir einen Kreis mit einer Füllart, die dem Wert im Farbwähler entspricht, und einem Radius, der dem im Bereichseingabefeld gesetzten Wert entspricht. Wir müssen den Kreis 85 Pixel höher zeichnen, als wir ihn gemessen haben, weil die vertikale Messung von der oberen Seite des Viewports ab genommen wird, aber wir zeichnen den Kreis relativ zur oberen Seite des Canvas, die unterhalb der 85 Pixel hohen Symbolleiste beginnt. Wenn wir ihn nur mit `curY` als y-Koordinate gezeichnet hätten, wäre er 85 Pixel tiefer als die Mausposition erschienen.

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

Alle {{htmlelement("input")}}-Typen werden gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, fällt er auf ein einfaches Textfeld zurück.

## WebGL

Es ist jetzt an der Zeit, 2D hinter uns zu lassen und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalte werden mit der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert, die eine völlig separate API von der 2D-Canvas-API ist, obwohl beide auf {{htmlelement("canvas")}}-Elemente rendern.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht Ihnen die direkte Kommunikation mit der {{Glossary("GPU", "GPU")}} des Computers. Als solches ist das Schreiben von rohen WebGL näher an niedrigeren Programmiersprachen wie C++ als reguläres JavaScript; es ist ziemlich komplex aber unglaublich mächtig.

### Verwendung einer Bibliothek

Aufgrund ihrer Komplexität schreiben die meisten Leute 3D-Grafikcode unter Verwendung einer Drittanbieter-JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten davon arbeiten in ähnlicher Weise, indem sie Funktionalität zum Erstellen von primitiven und benutzerdefinierten Formen, Positionieren von Betrachtungskameras und Beleuchtung, Abdecken von Oberflächen mit Texturen und mehr bereitstellen. Sie handhaben das WebGL für Sie, lassen Sie auf einer höheren Ebene arbeiten.

Ja, die Verwendung einer davon bedeutet, dass Sie eine weitere neue API lernen müssen (in diesem Fall eine Drittanbieter-API), aber sie sind viel einfacher als das Codieren von rohem WebGL.

### Unseren Würfel neu erstellen

Lassen Sie uns ein Beispiel ansehen, wie man etwas mit einer WebGL-Bibliothek erstellt. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der beliebtesten ist. In diesem Tutorial werden wir den 3D-drehenden Würfel erstellen, den wir zuvor gesehen haben.

1. Erstellen Sie zunächst eine lokale Kopie der Datei [threejs-cube/index.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/index.html) in einem neuen Ordner und speichern Sie eine Kopie von [metal003.png](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/metal003.png) im selben Ordner. Dies ist das Bild, das wir später als Oberflächentextur für den Würfel verwenden werden.
2. Erstellen Sie als Nächstes eine neue Datei namens `script.js`, ebenfalls im selben Ordner wie zuvor.
3. Als nächstes müssen Sie die Three.js-Bibliothek installiert haben. Sie können die Schritte zum Einrichten der Umgebung, die im [Erstellen einer grundlegenden Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) beschrieben sind, befolgen, damit Three.js wie erwartet funktioniert.
4. Jetzt, wo wir `three.js` an unsere Seite angefügt haben, können wir beginnen, JavaScript zu schreiben, das es verwendet und zu `script.js` zu schreiben. Lassen Sie uns zuerst eine neue Szene erstellen - fügen Sie das folgende in Ihre `script.js`-Datei ein:

   ```js
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene)-Konstruktor erstellt eine neue Szene, die die gesamte 3D-Welt darstellt, die wir anzeigen möchten.

5. Als nächstes benötigen wir eine **Kamera**, damit wir die Szene sehen können. In den 3D-Bilderbegriffe gestellt, stellt die Kamera die Position des Betrachters in der Welt dar. Um eine Kamera zu erstellen, fügen Sie die folgenden Linien als nächstes hinzu:

   ```js
   const camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000,
   );
   camera.position.z = 5;
   ```

   Der [`PerspectiveCamera()`](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera)-Konstruktor nimmt vier Argumente:

   - Das Sichtfeld: Wie weit der Bereich vor der Kamera sichtbar sein soll, in Grad.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Meistens ist dies das Verhältnis der Breite zur Höhe der Szenerie. Wenn Sie einen anderen Wert verwenden, wird die Szene verzerrt (was Sie wünschen könnten, aber in der Regel nicht der Fall ist).
   - Die Nahbereichebene: Wie nah an der Kamera Objekte sein können, bevor wir aufhören, sie auf dem Bildschirm darzustellen. Denken Sie daran, wie wenn Sie Ihre Fingerspitze näher und näher an den Raum zwischen Ihren Augen bringen, werden Sie sie schließlich nicht mehr sehen.
   - Die Fernsichtebene: Wie weit Dinge von der Kamera entfernt sein müssen, damit sie nicht mehr dargestellt werden.

   Wir setzen auch die Position der Kamera auf einen Standardeinheitswert von der Z-Achse, der, wie in CSS, aus dem Bildschirm auf Sie, den Betrachter, hinausgeht.

6. Die dritte wesentliche Zutat ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene wie durch eine gegebene Kamera gesehen rendert. Wir erstellen eines für den Moment mit dem [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)-Konstruktor, aber wir werden es erst später verwenden. Fügen Sie als nächstes die folgenden Linien hinzu:

   ```js
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile setzt die Größe, in der der Renderer die Ansicht der Kamera darstellt, und die dritte Zeile fügt das vom Renderer erstellte {{htmlelement("canvas")}}-Element zum {{htmlelement("body")}} des Dokuments hinzu. Alles, was der Renderer zeichnet, wird jetzt in unserem Fenster angezeigt.

7. Als nächstes möchten wir den Würfel erstellen, den wir auf dem Canvas anzeigen möchten. Fügen Sie das folgende Code-Stück am Ende Ihres JavaScripts hinzu:

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

   Hier gibt es ein wenig mehr zu erfassen, sodass wir es in Stufen durchgehen:

   - Wir erstellen zuerst eine globale `cube`-Variable, damit wir von überall im Code auf unseren Würfel zugreifen können.
   - Dann erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt und rufen `load()` darauf auf. `load()` nimmt in diesem Fall zwei Parameter (obwohl es mehr annehmen kann): die Textur, die wir laden möchten (unsere PNG), und eine Funktion, die ausgeführt wird, wenn die Textur geladen ist.
   - Innerhalb dieser Funktion nutzen wir die Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um anzugeben, dass wir eine 2 x 2-Wiederholung des Bildes auf allen Seiten des Würfels wünschen. Dann erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt und bringen sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) zusammen, um unseren Würfel zu erstellen. Ein Objekt erfordert typischerweise eine Geometrie (welche Form es hat) und ein Material (wie seine Oberfläche aussieht).
   - Zuletzt fügen wir unseren Würfel zur Szene hinzu und rufen dann unsere `draw()`-Funktion auf, um die Animation zu starten.

8. Bevor wir `draw()` definieren, fügen wir ein paar Lichter zur Szene hinzu, um die Stimmung etwas zu beleben; fügen Sie die folgenden Blöcke als nächstes hinzu:

   ```js
   const light = new THREE.AmbientLight("rgb(255 255 255)"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("rgb(255 255 255)");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art weiches Licht, das die gesamte Szene ein wenig aufhellt, wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt hingegen, ist ein gerichteter Lichtstrahl, mehr wie ein Suchscheinwerfer (oder ein Scheinwerfer, tatsächlich).

9. Schließlich fügen wir unsere `draw()`-Funktion am Ende des Codes hinzu:

   ```js
   function draw() {
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
     renderer.render(scene, camera);

     requestAnimationFrame(draw);
   }
   ```

   Dies ist ziemlich intuitiv; bei jedem Rahmen drehen wir unseren Würfel etwas auf seinen X- und Y-Achsen, rendern dann die Szene, wie sie von unserer Kamera gesehen wird, und rufen schließlich `requestAnimationFrame()` auf, um das Zeichnen unseres nächsten Rahmens zu planen.

Lassen Sie uns einen weiteren kurzen Blick auf das fertige Produkt werfen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Sie können [den fertigen Code auf GitHub finden](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-cube).

> [!NOTE]
> In unserem GitHub-Repo können Sie auch ein anderes interessantes 3D-Würfelbeispiel finden — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dieses verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Computerkamera zu projizieren auf die Seite des Würfels als Textur!

## Zusammenfassung

An dieser Stelle sollten Sie eine nützliche Vorstellung von den Grundlagen der Grafikprogrammierung mit Canvas und WebGL haben und wissen, was Sie mit diesen APIs tun können, sowie eine gute Idee, wohin Sie für weiterführende Informationen gehen können. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklichen Grundlagen von Canvas abgedeckt - es gibt noch so viel mehr zu lernen! Die untenstehenden Artikel führen Sie weiter.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorial-Serie, die alles erklärt, was Sie über 2D-Canvas wissen sollten, in viel mehr Detail, als hier behandelt wurde. Unverzichtbare Lektüre.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Serie, die die Grundlagen der rohen WebGL-Programmierung beibringt.
- [Erstellen einer grundlegenden Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — grundlegendes Three.js-Tutorial. Wir haben auch gleichwertige Leitfäden für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spielentwicklung](/de/docs/Games) — die Startseite für die Web-Spielentwicklung auf MDN. Hier gibt es einige wirklich nützliche Tutorials und Techniken im Zusammenhang mit 2D- und 3D-Canvas - siehe die Menüoptionen Techniken und Tutorials.

## Beispiele

- [Violent theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API, um Ton zu erzeugen und Canvas, um eine hübsche Visualisierung zu erzeugen, die dazu passt.
- [Voice change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas, um Audiodaten in Echtzeit von der Web Audio API zu visualisieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
