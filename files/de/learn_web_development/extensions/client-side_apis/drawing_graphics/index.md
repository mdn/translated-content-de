---
title: Zeichnen von Grafiken
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsstarke Werkzeuge für die Grafikprogrammierung, von der Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) Sprache bis hin zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [Die Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in Canvas und weitere Ressourcen, damit Sie mehr darüber lernen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen von JavaScript-Objekten</a> und Kern-API-Abdeckungen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
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

Das Web bestand ursprünglich nur aus Text, was sehr langweilig war, also wurden Bilder eingeführt — zunächst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Das war jedoch immer noch nicht genug. Während Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden konnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) — da sie durch Markup dargestellt werden — gab es immer noch keine Möglichkeit, dasselbe für Bitmap-Bilder zu tun, und die verfügbaren Werkzeuge waren ziemlich begrenzt. Das Web hatte immer noch keine Möglichkeit, effektiv Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die üblicherweise von niedrigeren Programmiersprachen wie C++ oder Java behandelt werden.

Die Situation begann sich zu verbessern, als Browser begannen, das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) im Jahr 2004 zu unterstützen. Wie Sie unten sehen werden, bietet Canvas einige nützliche Werkzeuge zur Erstellung von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Anwendungsarten, insbesondere wenn es mit einigen anderen APIs der Webplattform kombiniert wird, kann jedoch schwierig oder unmöglich zugänglich gemacht werden.

Das folgende Beispiel zeigt eine einfache 2D-Canvas-basierte Animation hüpfender Bälle, die wir ursprünglich in unserem [Einführung in JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) Modul kennengelernt haben:

{{EmbedGHLiveSample("learning-area/javascript/oojs/bouncing-balls/index-finished.html", '100%', 500)}}

Um 2006–2007 herum begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Dies wurde zu [WebGL](/de/docs/Web/API/WebGL_API), das bei Browseranbietern an Popularität gewann und um 2009–2010 standardisiert wurde. WebGL ermöglicht die Erstellung von echten 3D-Grafiken innerhalb Ihres Webbrowsers; das folgende Beispiel zeigt einen einfachen rotierenden WebGL-Würfel:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Dieser Artikel wird sich hauptsächlich auf 2D-Canvas konzentrieren, da rohe WebGL-Codes sehr komplex sind. Wir werden jedoch zeigen, wie man eine WebGL-Bibliothek verwendet, um eine 3D-Szene einfacher zu erstellen, und Sie können ein Tutorial finden, das rohes WebGL behandelt — siehe [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Aktives Lernen: Erste Schritte mit einem \<canvas>

Wenn Sie eine 2D _oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-{{htmlelement("canvas")}}-Element beginnen. Dieses Element wird verwendet, um das Gebiet auf der Seite zu definieren, in das das Bild gezeichnet wird. Dies ist so einfach wie das Einfügen des Elements auf der Seite:

```html
<canvas width="320" height="240"></canvas>
```

Damit wird ein Canvas auf der Seite mit einer Größe von 320 mal 240 Pixel erzeugt.

Sie sollten einige Fallback-Inhalte innerhalb der `<canvas>`-Tags einfügen. Diese sollten den Canvas-Inhalt für Benutzer von Browsern beschreiben, die Canvas nicht unterstützen, oder für Benutzer von Screenreadern.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Der Fallback sollte nützliche Alternativinhalte zum Canvas-Inhalt bieten. Wenn Sie zum Beispiel ein ständig aktualisierendes Diagramm von Aktienkursen rendern, könnten die Fallback-Inhalte ein statisches Bild des neuesten Aktiencharts sein, mit `alt`-Text, der erklärt, was die Preise sind, oder eine Liste von Links zu einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Schließen Sie einen beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attributs direkt auf dem Canvas-Element selbst ein, oder fügen Sie Fallback-Inhalte innerhalb der öffnenden und schließenden `<canvas>`-Tags ein. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte sind es.

### Erstellung und Größenanpassung unseres Canvas

Lassen Sie uns damit beginnen, unser eigenes Canvas zu erstellen, auf das wir zukünftige Experimente zeichnen können.

1. Erstellen Sie zuerst eine lokale Kopie des Verzeichnisses [0_canvas_start](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/0_canvas_start). Es enthält drei Dateien:
   - "index.html"
   - "script.js"
   - "style.css"
2. Öffnen Sie "index.html" und fügen Sie den folgenden Code direkt unterhalb des öffnenden {{htmlelement("body")}}-Tags ein:

   ```html
   <canvas class="myCanvas">
     <p>Add suitable fallback here.</p>
   </canvas>
   ```

   Wir haben dem `<canvas>`-Element eine `class` hinzugefügt, so dass es einfacher wird, es auszuwählen, wenn wir mehrere Canvas auf der Seite haben, aber wir haben die `width`- und `height`-Attribute für den Moment entfernt (Sie könnten sie wieder hinzufügen, wenn Sie möchten, aber wir werden sie später im Abschnitt mit JavaScript festlegen). Canvas ohne explizite Breite und Höhe haben standardmäßig eine Breite von 300 Pixeln und eine Höhe von 150 Pixeln.

3. Öffnen Sie jetzt "script.js" und fügen Sie die folgenden JavaScript-Zeilen hinzu:

   ```js
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz auf das Canvas in der `canvas`-Konstante gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas gleich [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Viewport-Breite gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas gleich [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Viewport-Höhe gibt). So haben wir jetzt ein Canvas, das die gesamte Breite und Höhe des Browserfensters füllt!

   Sie sehen auch, dass wir Zuordnungen mit mehreren Gleichheitszeichen verketten — dies ist in JavaScript erlaubt und eine gute Technik, wenn Sie mehrere Variablen auf denselben Wert setzen möchten. Wir wollten die Canvas-Breite und -Höhe in den width/height-Variablen leicht zugänglich machen, da sie nützliche Werte sind, die später verfügbar sein können (zum Beispiel, wenn Sie etwas genau in der Mitte der Breite des Canvas zeichnen wollen).

> [!NOTE]
> Sie sollten generell die Größe des Bildes mit HTML-Attributen oder DOM-Eigenschaften wie oben erklärt festlegen. Sie könnten CSS verwenden, aber das Problem ist dann, dass die Größenanpassung nach dem Rendern des Canvas erfolgt, und wie bei jedem anderen Bild (das gerenderte Canvas ist nur ein Bild) könnte das Bild pixelig/verzerrt werden.

### Abrufen des Canvas-Kontextes und letzte Einrichtung

Wir müssen noch eine letzte Sache tun, bevor wir unsere Canvas-Vorlage als fertig betrachten können. Um auf das Canvas zu zeichnen, müssen wir eine spezielle Referenz auf das Zeichenbereich erhalten, die als Kontext bezeichnet wird. Dies geschieht mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die für die grundlegende Nutzung eine Zeichenkette als Parameter nimmt, die den Typ des gewünschten Kontext angibt.

In diesem Fall wollen wir ein 2D-Canvas, also fügen Sie die folgende JavaScript-Zeile unter den anderen in "script.js" hinzu:

```js
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextwerte, die Sie wählen könnten, sind `webgl` für WebGL, `webgl2` für WebGL 2 usw., aber diese werden wir in diesem Artikel nicht benötigen.

Das war's — unser Canvas ist jetzt bereit zum Zeichnen! Die Variable `ctx` enthält nun ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt und alle Zeichenoperationen auf dem Canvas werden durch die Manipulation dieses Objekts durchgeführt.

Lassen Sie uns noch eine letzte Sache tun, bevor wir fortfahren. Wir färben den Canvas-Hintergrund schwarz, um Ihnen einen ersten Eindruck von der Canvas-API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript hinzu:

```js
ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mit der `fillStyle`-Eigenschaft des Canvas' [`CanvasRenderingContext2D`](https://developer.mozilla.org/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) (dies nimmt [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) genau wie CSS-Eigenschaften), dann zeichnen wir ein Rechteck, das den gesamten Bereich des Canvas mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) abdeckt (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die gewünschte Breite und Höhe des Rechtecks — wir haben Ihnen gesagt, dass die Variablen `width` und `height` nützlich sein würden)!

OK, unser Vorlage ist abgeschlossen und es ist Zeit, fortzufahren.

## 2D-Canvas-Grundlagen

Wie wir oben gesagt haben, werden alle Zeichenoperationen durch die Manipulation eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts durchgeführt (in unserem Fall `ctx`). Viele Operationen müssen Koordinaten erhalten, um genau festzulegen, wo etwas gezeichnet werden soll — die obere linke Ecke des Canvas ist Punkt (0, 0), die horizontale (x) Achse verläuft von links nach rechts, und die vertikale (y) Achse verläuft von oben nach unten.

![Mit einem Stahlblauen Quadrat in der Mitte. Die obere linke Ecke des Canvas ist Punkt (0, 0) der Canvas x-Achse und y-Achse. Die horizontale (x) Achse verläuft von links nach rechts und bezeichnet die Breite, und die vertikale (y) Achse verläuft von oben nach unten und bezeichnet die Höhe. Die obere linke Ecke des blauen Quadrats ist als eine Distanz von x Einheiten von der y-Achse und y Einheiten von der x-Achse beschriftet.](canvas_default_grid.png)

Das Zeichnen von Formen erfolgt in der Regel mit primitiven Rechtecken oder indem eine Linie entlang eines bestimmten Pfades gezeichnet wird und dann die Form ausgefüllt wird. Nachfolgend zeigen wir Ihnen, wie Sie beides tun können.

### Einfache Rechtecke

Lassen Sie uns mit ein paar einfachen Rechtecken beginnen.

1. Erstellen Sie zunächst eine Kopie Ihrer neu erstellten Canvas-Vorlage (oder machen Sie eine lokale Kopie des Verzeichnisses [1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template), wenn Sie die obigen Schritte nicht befolgt haben).
2. Fügen Sie als nächstes die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 0)";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie speichern und aktualisieren, sollte ein rotes Rechteck auf Ihrem Canvas erscheinen. Die obere linke Ecke ist 50 Pixel vom oberen und linken Rand des Canvas entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch den dritten und vierten Parameter definiert).

3. Lassen Sie uns noch ein weiteres Rechteck hinzufügen — diesmal ein grünes. Fügen Sie das folgende am Ende Ihres JavaScripts hinzu:

   ```js
   ctx.fillStyle = "rgb(0 255 0)";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren Sie, und Sie werden Ihr neues Rechteck sehen. Dies bringt einen wichtigen Punkt zur Sprache: Grafikoperationen wie das Zeichnen von Rechtecken, Linien usw. werden in der Reihenfolge ausgeführt, in der sie auftreten. Denken Sie daran, dass es wie beim Streichen einer Wand ist, wo jeder Anstrich den darunter liegenden überlappt und sogar verbergen kann. Sie können nichts tun, um dies zu ändern, also müssen Sie sorgfältig über die Reihenfolge nachdenken, in der Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, zum Beispiel durch die Verwendung von `rgb()`. Der "Alpha-Kanal" definiert den Grad der Transparenz, den die Farbe hat. Je höher der Wert, desto mehr verdeckt sie das, was dahinter ist. Fügen Sie das folgende Ihrem Code hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, einige Ihrer eigenen Rechtecke zu zeichnen; haben Sie Spaß!

### Konturen und Linienbreiten

Bisher haben wir uns mit dem Zeichnen gefüllter Rechtecke beschäftigt, aber Sie können auch Rechtecke zeichnen, die nur Konturen sind (in der grafischen Gestaltung als **Strokes** bezeichnet). Um die Farbe festzulegen, die Sie für Ihre Kontur wünschen, verwenden Sie die [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)-Eigenschaft; das Zeichnen eines Konturrechtecks erfolgt mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Fügen Sie das folgende zum vorherigen Beispiel hinzu, ebenfalls unterhalb der vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "rgb(255 255 255)";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Konturen beträgt 1 Pixel; Sie können den Wert der [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)-Eigenschaft ändern, um dies zu ändern (er nimmt eine Zahl, die die Anzahl der Pixel bezeichnet, die die Kontur breit ist). Fügen Sie die folgende Zeile zwischen den vorherigen beiden Zeilen hinzu:

   ```js
   ctx.lineWidth = 5;
   ```

Jetzt sollten Sie sehen, dass Ihre weiße Kontur viel dicker geworden ist! Das war es für jetzt. An diesem Punkt sollte Ihr Beispiel so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles/index.html", '100%', 250)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [2_canvas_rectangles](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles).

### Pfade zeichnen

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Im Grunde genommen bedeutet dies, dass Sie Code schreiben, um genau festzulegen, welchen Pfad der Stift auf Ihrem Canvas zurücklegen soll, um die gewünschte Form zu zeichnen. Canvas enthält Funktionen zum Zeichnen von geraden Linien, Kreisen, Bézierkurven und mehr.

Lassen Sie uns den Abschnitt beginnen, indem wir eine frische Kopie unserer Canvas-Vorlage erstellen ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)), in der wir das neue Beispiel zeichnen.

Wir werden einige gemeinsame Methoden und Eigenschaften in allen folgenden Abschnitten verwenden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — Beginnen Sie, einen Pfad an dem Punkt zu zeichnen, an dem der Stift sich derzeit auf dem Canvas befindet. Auf einem neuen Canvas beginnt der Stift bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — Bewegen Sie den Stift zu einem anderen Punkt auf dem Canvas, ohne die Linie zu zeichnen oder zu verfolgen; der Stift "springt" zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — Zeichnen Sie eine gefüllte Form, indem Sie den bisher gezeichneten Pfad ausfüllen.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — Zeichnen Sie eine Konturform, indem Sie einen Strich entlang des bisher gezeichneten Pfades zeichnen.
- Sie können auch Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` mit Pfaden ebenso wie mit Rechtecken verwenden.

Eine typische, einfache Pfa-Zeichenoperation könnte ungefähr so aussehen:

```js
ctx.fillStyle = "rgb(255 0 0)";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Linien zeichnen

Lassen Sie uns ein gleichseitiges Dreieck auf dem Canvas zeichnen.

1. Fügen Sie zunächst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Diese konvertiert Gradwerte in Radiant, was nützlich ist, da wann immer Sie in JavaScript einen Winkelwert angeben müssen, dieser fast immer in Radiant angegeben wird, Menschen jedoch normalerweise in Grad denken.

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Beginnen Sie als nächstes Ihren Pfad, indem Sie das folgende unter Ihrer vorherigen Ergänzung hinzufügen; hier setzen wir eine Farbe für unser Dreieck, beginnen, einen Pfad zu zeichnen, und bewegen den Stift zu (50, 50), ohne etwas zu zeichnen. Dort werden wir beginnen, unser Dreieck zu zeichnen.

   ```js
   ctx.fillStyle = "rgb(255 0 0)";
   ctx.beginPath();
   ctx.moveTo(50, 50);
   ```

3. Fügen Sie nun die folgenden Zeilen am Ende Ihres Scripts hinzu:

   ```js
   ctx.lineTo(150, 50);
   const triHeight = 50 * Math.tan(degToRad(60));
   ctx.lineTo(100, 50 + triHeight);
   ctx.lineTo(50, 50);
   ctx.fill();
   ```

   Gehen wir das der Reihe nach durch:

   Zuerst zeichnen wir eine Linie zu (150, 50) — unser Pfad geht jetzt 100 Pixel nach rechts entlang der x-Achse.

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks, indem wir ein wenig einfache Trigonometrie verwenden. Im Grunde genommen zeichnen wir das Dreieck nach unten zeigend. Die Winkel in einem gleichseitigen Dreieck betragen immer 60 Grad; um die Höhe zu berechnen, können wir es in der Mitte in zwei rechtwinklige Dreiecke aufteilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben. In Bezug auf die Seiten:

   - Die längste Seite wird als **Hypotenuse** bezeichnet
   - Die Seite neben dem 60-Grad-Winkel wird als **Ankathete** bezeichnet — von der wir wissen, dass sie 50 Pixel beträgt, da sie die Hälfte der gerade gezeichneten Linie ist.
   - Die Seite gegenüber dem 60-Grad-Winkel wird als **Gegenkathete** bezeichnet, die die Höhe des Dreiecks ist, die wir berechnen möchten.

   ![Ein gleichseitiges, nach unten weisendes Dreieck mit beschrifteten Winkeln und Seiten. Die horizontale Linie oben ist als 'Ankathete' beschriftet. Eine senkrechte gestrichelte Linie, die von der Mitte der Ankathete führt, ist als 'Gegenkathete' beschriftet und teilt das Dreieck in zwei gleiche rechtwinklige Dreiecke. Die rechte Seite des Dreiecks ist als Hypotenuse beschriftet, da sie die Hypotenuse des rechtwinkligen Dreiecks ist, das durch die Linie mit dem Label 'opposite' gebildet wird.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass die Länge der Ankathete multipliziert mit dem Tangens des Winkels der Gegenkathete entspricht, daher kommen wir auf `50 * Math.tan(degToRad(60))`. Wir verwenden unsere `degToRad()`-Funktion, um 60 Grad in Radiant zu konvertieren, da {{jsxref("Math.tan()")}} einen Eingabewert in Radiant erwartet.

4. Nachdem die Höhe berechnet wurde, zeichnen wir eine weitere Linie zu `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss genau zwischen den vorher festgelegten X-Werten liegen. Die Y-Koordinate dagegen muss 50 plus der Dreieckshöhe sein, da wir wissen, dass die Spitze des Dreiecks 50 Pixel vom oberen Rand des Canvas entfernt ist.
5. Die nächste Linie zeichnet eine Linie zurück zum Startpunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form auszufüllen.

#### Kreise zeichnen

Sehen wir uns nun an, wie ein Kreis auf dem Canvas gezeichnet wird. Dies wird mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) erreicht, die einen ganzen oder einen Teil eines Kreises an einem bestimmten Punkt zeichnet.

1. Lassen Sie uns einen Bogen zu unserem Canvas hinzufügen — fügen Sie das folgende am Ende Ihres Codes hinzu:

   ```js
   ctx.fillStyle = "rgb(0 0 255)";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` nimmt sechs Parameter. Die ersten beiden spezifizieren die Position des Mittelpunkts des Bogens (X und Y, jeweils). Der dritte ist der Radius des Kreises, der vierte und fünfte sind die Start- und Endwinkel, bei denen der Kreis gezeichnet werden soll (wenn Sie also 0 und 360 Grad angeben, erhalten Sie einen vollen Kreis), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn oder im Uhrzeigersinn gezeichnet werden soll (`false` ist im Uhrzeigersinn).

   > [!NOTE]
   > 0 Grad ist horizontal nach rechts.

2. Versuchen wir es mit einem weiteren Bogen:

   ```js
   ctx.fillStyle = "yellow";
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   Das Muster hier ist sehr ähnlich, aber mit zwei Unterschieden:

   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird. Dies bedeutet, dass, obwohl der Bogen mit -45 Grad beginnt, es um die 270 Grad gezeichnet wird, nicht innerhalb dieses Abschnitts. Wenn Sie `true` auf `false` ändern und dann den Code erneut ausführen, wird nur das 90-Grad-Stück des Kreises gezeichnet.
   - Bevor `fill()` aufgerufen wird, zeichnen wir eine Linie zum Zentrum des Kreises. Dies bedeutet, dass das eher hübsche Pac-Man-artige Ausschneiden gerendert wird. Wenn Sie diese Linie entfernen (versuchen Sie es!), dann führen Sie den Code erneut aus, Sie erhalten nur den Rand des Kreises, der zwischen dem Beginn und dem Endpunkt des Bogens abgeschnitten ist. Dies veranschaulicht einen weiteren wichtigen Punkt des Canvas — wenn Sie versuchen, einen unvollständigen Pfad auszufüllen (d.h. einen, der nicht geschlossen ist), füllt der Browser eine gerade Linie zwischen dem Anfangs- und dem Endpunkt aus und füllt diese aus.

Das war's für jetzt; Ihr finales Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/3_canvas_paths/index.html", '100%', 200)}}

> [!NOTE]
> Der fertige Code ist auf GitHub verfügbar als [3_canvas_paths](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/3_canvas_paths).

> [!NOTE]
> Um mehr über fortgeschrittene Pfa-Zeichen-Features wie Bézierkurven zu erfahren, schauen Sie in unserem Tutorial zu [Zeichnen von Formen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) vorbei.

### Text

Canvas hat auch Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz erkunden. Beginnen Sie, indem Sie eine weitere frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) erstellen, in der Sie das neue Beispiel zeichnen können.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnet umrandeten (Stroke) Text.

Beide haben in ihrer grundlegenden Nutzung drei Eigenschaften: den zu zeichnenden Textstring und die X- und Y-Koordinaten des Punktes, an dem der Text zu zeichnen beginnt. Dies ergibt sich als **untere linke** Ecke des **Textkastens** (wörtlich, den Kasten um den von Ihnen gezeichneten Text), was Sie vielleicht verwirrt, da andere Zeichenoperationen in der Regel von der oberen linken Ecke ausgehen — denken Sie daran.

Es gibt auch eine Reihe von Eigenschaften, die Ihnen helfen, die Textrenderung zu steuern, wie [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), mit der Sie die Schriftfamilie, Größe usw. angeben können. Sie nimmt als Wert die gleiche Syntax wie die CSS-{{cssxref("font")}}-Eigenschaft.

Canvas-Inhalte sind für Screenreader nicht zugänglich. Text, der auf die Leinwand gezeichnet wird, ist nicht im DOM verfügbar, muss jedoch verfügbar gemacht werden, um zugänglich zu sein. In diesem Beispiel schließen wir den Text als Wert für `aria-label` ein.

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

Haben Sie Spaß und sehen Sie, was Ihnen einfällt! Sie können weitere Informationen über die verfügbaren Optionen für Canvas-Text unter [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) finden.

### Bilder auf Canvas zeichnen

Es ist möglich, externe Bilder auf IhrCanvaszu rendern. Dies können einfache Bilder, Einzelbilder aus Videos oder der Inhalt anderer Leinwände sein. Im Moment werden wir uns nur mit der Nutzung einfacher Bilder auf unserem Canvas beschäftigen.

1. Wie zuvor, erstellen wir eine weitere frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)), in der wir das neue Beispiel zeichnen werden.

   Bilder werden auf Canvas mit der [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)-Methode gezeichnet. Die einfachste Version hat drei Parameter — eine Referenz auf das Bild, das Sie rendern möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Starten wir mit der Beschaffung einer Bildquelle, die wir auf unserem Canvas einbetten können. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

   ```js
   const image = new Image();
   image.src = "firefox.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt mit dem [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor. Das zurückgegebene Objekt ist vom gleichen Typ wie das, was zurückgegeben wird, wenn Sie eine Referenz auf ein vorhandenes {{htmlelement("img")}}-Element abrufen. Wir setzen dann sein [`src`](/de/docs/Web/HTML/Element/img#src)-Attribut so, dass es unserem Firefox-Logo-Bild entspricht. An diesem Punkt beginnt der Browser, das Bild zu laden.

3. Wir könnten jetzt versuchen, das Bild mit `drawImage()` einzubetten, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, sonst scheitert der Code. Dies können wir mit dem `load`-Ereignis erreichen, das nur ausgelöst wird, wenn das Bild vollständig geladen ist. Fügen Sie den folgenden Block unterhalb des vorherigen ein:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie das Bild in das Canvas eingebettet sehen.

4. Aber es gibt noch mehr! Was, wenn wir nur einen Teil des Bildes anzeigen oder es in der Größe ändern wollen? Beides können wir mit der komplexeren Version von `drawImage()` tun. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile folgendermaßen:

   ```js
   ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
   ```

   - Der erste Parameter ist die Bildreferenz, wie zuvor.
   - Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links vom gesamten und oberhalb des zweiten Parameters wird gezeichnet.
   - Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem Originalbild ausschneiden möchten.
   - Parameter 6 und 7 definieren die Koordinaten, bei denen Sie die obere linke Ecke des ausgeschnittenen Bildbereiches relativ zur oberen linken Ecke des Canvas zeichnen möchten.
   - Parameter 8 und 9 definieren die Breite und Höhe, um den ausgeschnittenen Bereich des Bildes zu zeichnen. In diesem Fall haben wir dieselben Abmessungen wie der ursprüngliche Ausschnitt angegeben, aber Sie könnten es durch Angabe anderer Werte in der Größe ändern.

5. Wenn das Bild signifikant aktualisiert wird, muss auch die {{Glossary("accessible_description", "barrierefreie Beschreibung")}} aktualisiert werden.

   ```js
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/5_canvas_images/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist verfügbar auf GitHub als [5_canvas_images](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/5_canvas_images).

## Schleifen und Animationen

Wir haben bisher einige sehr grundlegende Anwendungen von 2D-Canvas behandelt, aber Sie werden die volle Leistung von Canvas wirklich nicht erleben, es sei denn, Sie aktualisieren oder animieren es auf irgendeine Weise. Schließlich bietet Canvas scriptfähige Bilder! Wenn Sie nichts ändern wollen, könnten Sie auch einfach statische Bilder verwenden und sich die ganze Arbeit ersparen.

### Erstellen einer Schleife

Mit Schleifen in Canvas zu spielen, macht ziemlich Spaß — Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)- (oder einer anderen Art von) Schleife wie jeden anderen JavaScript-Code ausführen.

Lassen Sie uns ein Beispiel erstellen.

1. Machen Sie eine weitere frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie sie in Ihrem Code-Editor.
2. Fügen Sie die folgende Zeile am Ende Ihres JavaScripts hinzu. Diese enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

   Dadurch wird der Koordinatenursprung (0, 0) in die Mitte des Canvas verschoben, anstatt oben links. Dies ist in vielen Situationen sehr nützlich, wie in diesem Fall, in dem wir möchten, dass unser Design relativ zur Mitte des Canvas gezeichnet wird.

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

   Hier implementieren wir die gleiche `degToRad()`-Funktion, die wir im obigen Dreieckbeispiel gesehen haben, eine `rand()`-Funktion, die eine Zufallszahl zwischen den angegebenen unteren und oberen Grenzen zurückgibt, `length` und `moveOffset`-Variablen (über die wir später mehr erfahren werden) und eine leere `for`-Schleife.

4. Die Idee hier ist, dass wir etwas im Canvas innerhalb der `for`-Schleife zeichnen werden, und es bei jedem Durchlauf iterieren, um etwas Interessantes zu erstellen. Fügen Sie folgenden Code innerhalb Ihrer `for`-Schleife hinzu:

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

   So bei jedem Durchlauf:

   - Setzen wir das `fillStyle` auf einen Hauch von leicht transparentem Lila, der sich jedes Mal basierend auf dem Wert von `length` ändert. Wie Sie später sehen werden, wird die Länge jedes Mal kleiner, wenn die Schleife ausgeführt wird, sodass der Effekt darin besteht, dass die Farbe bei jedem gezeichneten Dreieck heller wird.
   - Beginnen den Pfad.
   - Verschieben den Stift zu einer Koordinate von `(moveOffset, moveOffset)`; Diese Variable definiert, wie weit wir uns jedes Mal bewegen wollen, wenn wir ein neues Dreieck zeichnen.
   - Zeichnen eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Dies zeichnet eine Linie von Länge `length` parallel zur X-Achse.
   - Berechnen die Höhe des Dreiecks, wie zuvor.
   - Zeichnen eine Linie zur nach unten zeigenden Ecke des Dreiecks, dann zeichnen eine Linie zurück zum Start des Dreiecks.
   - Rufen `fill()` auf, um das Dreieck auszufüllen.
   - Aktualisieren die Variablen, die die Sequenz der Dreiecke beschreiben, damit wir bereit sind, das nächste zu zeichnen. Wir verringern den `length`-Wert um 1, damit die Dreiecke jedes Mal kleiner werden; erhöhen `moveOffset` um eine kleine Menge, damit jedes nachfolgende Dreieck etwas weiter entfernt ist, und verwenden eine weitere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), die es uns ermöglicht, das gesamte Canvas zu drehen! Wir drehen es um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das war's! Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop/index.html", '100%', 550)}}

An dieser Stelle möchten wir Sie ermutigen, mit dem Beispiel zu spielen und es zu Ihrem eigenen zu machen! Zum Beispiel:

- Zeichnen Sie Rechtecke oder Kreisbögen anstelle von Dreiecken oder fügen Sie sogar Bilder ein.
- Spielen Sie mit den `length` und `moveOffset` Werten.
- Verwenden Sie einige Zufallszahlen mit der `rand()` Funktion, die wir oben eingebaut haben, aber nicht verwendet haben.

> [!NOTE]
> Der fertige Code ist verfügbar auf GitHub als [6_canvas_for_loop](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop).

### Animationen

Das Schleifenbeispiel, das wir oben erstellt haben, war unterhaltsam, aber wirklich brauchen Sie eine konstante Schleife, die immer wieder läuft, für jede ernsthafte Canvas-Anwendung (wie Spiele und Echtzeit-Visualisierungen). Wenn Sie Ihr Canvas als Film betrachten, möchten Sie wirklich, dass das Display in jedem Frame aktualisiert wird, um die aktualisierte Ansicht zu zeigen, mit einer idealen Bildwiederholrate von 60 Bildern pro Sekunde, sodass die Bewegung dem menschlichen Auge schön und fließend erscheint.

Es gibt einige JavaScript-Funktionen, die es Ihnen ermöglichen, Funktionen mehrmals pro Sekunde auszuführen, wobei die beste für unsere Zwecke hier [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) ist. Sie nimmt einen Parameter — den Namen der Funktion, die Sie für jeden Frame ausführen wollen. Das nächste Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion das neue Update Ihrer Animation zeichnet, dann ruft sie `requestAnimationFrame()` erneut kurz vor dem Ende der Funktion auf, wird die Animationsschleife weiter laufen. Die Schleife endet, wenn Sie aufhören, `requestAnimationFrame()` aufzurufen oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) aufrufen, nachdem Sie `requestAnimationFrame()` aufgerufen haben, aber bevor der Frame aufgerufen wird.

> [!NOTE]
> Es ist gute Praxis, `cancelAnimationFrame()` aus Ihrem Hauptcode aufzurufen, wenn Sie mit der Animation fertig sind, um sicherzustellen, dass keine Updates noch ausgeführt werden müssen.

Der Browser arbeitet komplexe Details aus, wie die Animation mit konstanter Geschwindigkeit laufen zu lassen und keine Ressourcen zu verschwenden, um Dinge zu animieren, die nicht gesehen werden können.

Um zu sehen, wie es funktioniert, schauen wir schnell noch einmal auf unser Bouncing Balls Beispiel ([siehe es live](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html), und siehe auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/oojs/bouncing-balls)). Der Code für die Schleife, die alles in Bewegung hält, sieht folgendermaßen aus:

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

Wir führen die `loop()`-Funktion einmal am Ende des Codes aus, um den Zyklus zu starten und den ersten Animationsframe zu zeichnen; die `loop()`-Funktion übernimmt dann die Verantwortung, `requestAnimationFrame(loop)` aufzurufen, um den nächsten Frame der Animation immer wieder auszuführen.

Beachten Sie, dass wir in jedem Frame das gesamte Canvas löschen und alles neu zeichnen. Für jeden vorhandenen Ball zeichnen wir ihn, aktualisieren seine Position und überprüfen, ob er mit anderen Bällen kollidiert. Wenn Sie einmal ein Grafikelement auf ein Canvas gezeichnet haben, besteht keine Möglichkeit, dieses Grafikelement individuell so zu manipulieren, wie Sie es mit DOM-Elementen können. Sie können jeden Ball auf dem Canvas nicht verschieben, denn einmal gezeichnet ist er Bestandteil des Canvas und kein individuelles zugängliches Element oder Objekt. Stattdessen müssen Sie löschen und neu zeichnen, entweder indem Sie den gesamten Frame löschen und alles neu zeichnen oder indem Sie Code haben, der genau weiß, welche Teile gelöscht werden müssen und nur den minimal notwendigen Bereich des Canvas löscht und neu zeichnet.

Die Optimierung der Animation von Grafiken ist eine eigene Spezialität im Programmieren, mit vielen cleveren Techniken zur Verfügung. Das geht jedoch über das hinaus, was wir für unser Beispiel benötigen!

Im Allgemeinen beinhaltet der Prozess der Durchführung einer Canvas-Animation die folgenden Schritte:

1. Löschen Sie den Canvas-Inhalt (z. B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Zustand speichern (falls erforderlich) mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) — dies ist notwendig, wenn Sie die Einstellungen, die Sie auf dem Canvas aktualisiert haben, speichern möchten, was für fortgeschrittenere Anwendungen nützlich ist.
3. Zeichnen Sie die Grafiken, die Sie animieren.
4. Stellen Sie die in Schritt 2 gespeicherten Einstellungen wieder her, mit [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
5. Rufen Sie `requestAnimationFrame()` auf, um das Zeichnen des nächsten Frames der Animation zu planen.

> [!NOTE]
> Wir werden `save()` und `restore()` hier nicht behandeln, aber sie sind schön in unserem [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations)-Tutorial (und den folgenden) erklärt.

### Eine einfache Charakteranimation

Nun lassen Sie uns eine einfache Animation erstellen — wir bringen eine Figur aus einem bestimmten ziemlich großartigen Retro-Videospiel dazu, über den Bildschirm zu laufen.

1. Machen Sie eine weitere frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie sie in Ihrem Code-Editor.

2. Aktualisieren Sie das innere HTML, um das Bild widerzuspiegeln:

   ```html
   <canvas class="myCanvas">
     <p>A man walking.</p>
   </canvas>
   ```

3. Fügen Sie am Ende des JavaScripts die folgende Zeile hinzu, um den Koordinatenursprung erneut in die Mitte des Canvas zu legen:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

4. Erstellen Sie jetzt ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, setzen Sie sein [`src`](/de/docs/Web/HTML/Element/img#src) auf das Bild, das wir laden möchten, und fügen Sie einen `onload`-Ereignishandler hinzu, der die `draw()`-Funktion auslöst, wenn das Bild geladen ist:

   ```js
   const image = new Image();
   image.src = "walk-right.png";
   image.onload = draw;
   ```

5. Fügen Sie nun einige Variablen hinzu, die den auf dem Bildschirm anzuzeigenden Position und die zu zeigende Sprite-Nummer verfolgen.

   ```js
   let sprite = 0;
   let posX = 0;
   ```

   Lassen Sie uns das Spritesheet-Bild erklären (das wir mit Respekt von Mike Thomas' [Walking cycle using CSS animation](https://codepen.io/mikethomas/pen/kQjKLW) CodePen ausgeliehen haben). Das Bild sieht so aus:

   ![Ein Spritesheet mit sechs Sprite-Bildern eines pixeligen Charakters, der einem gehenden Menschen von seiner rechten Seite ähnelt, in verschiedenen Augenblicken eines einzigen Schrittes nach vorne. Der Charakter trägt ein weißes Hemd mit himmelblauen Knöpfen, schwarze Hosen und schwarze Schuhe. Jedes Sprite ist 102 Pixel breit und 148 Pixel hoch.](walk-right.png)

   Es enthält sechs Sprites, die die gesamte Laufsequenz bilden — jedes ist 102 Pixel breit und 148 Pixel hoch. Um jedes Sprite sauber darzustellen, müssen wir `drawImage()` verwenden, um ein einziges Sprite-Bild aus dem Spritesheet herauszuschneiden und nur diesen Teil anzuzeigen, wie wir es oben mit dem Firefox-Logo gemacht haben. Die X-Koordinate des Ausschnitts muss ein Vielfaches von 102 sein, und die Y-Koordinate wird immer 0 sein. Die Ausschnittsgröße wird immer 102 mal 148 Pixel betragen.

6. Fügen wir nun eine leere `draw()`-Funktion am Ende des Codes ein, die bereit ist, sie zu füllen:

   ```js
   function draw() {}
   ```

7. Der Rest des Codes in diesem Abschnitt geht in `draw()`. Fügen Sie zuerst die folgende Zeile hinzu, die das Canvas löscht, um jeden Frame vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width/2), -(height/2)` angeben müssen, weil wir vorher den Ursprungspunkt auf `width/2, height/2` gesetzt haben.

   ```js
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

8. Jetzt werden wir unser Bild mit drawImage zeichnen — die 9-Parameter-Version. Fügen Sie das folgende hinzu:

   ```js
   ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);
   ```

   Wie Sie sehen können:

   - Wir geben `image` als das zu einbettende Bild an.
   - Parameter 2 und 3 geben die obere linke Ecke des Ausschnitts an, das aus dem Quellbild ausgeschnitten werden soll, wobei der X-Wert als `sprite` multipliziert mit 102 (wo `sprite` die Spritenummer zwischen 0 und 5 ist) und der Y-Wert immer 0 ist.
   - Parameter 4 und 5 geben die Größe des auszuschneidenden Ausschnitts an — 102 Pixel mal 148 Pixel.
   - Parameter 6 und 7 geben die obere linke Ecke des Felds an, in das der Ausschnitt auf der Leinwand gezeichnet werden soll — die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichnungsposition anpassen können, indem wir den `posX`-Wert ändern.
   - Parameter 8 und 9 geben die Größe des Bildes auf dem Canvas an. Wir möchten nur seine ursprüngliche Größe beibehalten, also geben wir 102 und 148 als Breite und Höhe an.

9. Nun ändern wir den `sprite`-Wert nach jedem Zeichnen — na ja, nach einigen von ihnen jedenfalls. Fügen Sie den folgenden Block am Ende der `draw()`-Funktion hinzu:

   ```js
   if (posX % 13 === 0) {
     if (sprite === 5) {
       sprite = 0;
     } else {
       sprite++;
     }
   }
   ```

   Wir setzen den gesamten Block in ein `if (posX % 13 === 0) { }`. Wir verwenden den Modulo-Operator (`%`) (auch bekannt als [Restoperator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu überprüfen, ob der `posX`-Wert durch 13 genau geteilt werden kann, ohne Rest. Wenn es ausgerichtet werden kann, bewegen wir uns zum nächsten sprite, indem wir `sprite` inkrementieren (auf 0 zurücksetzen, nachdem wir mit sprite #5 fertig sind). Dies bedeutet effektiv, dass wir das sprite nur bei jedem 13. Frame aktualisieren, oder ungefähr fünf Mal pro Sekunde (`requestAnimationFrame()` ruft uns bei bis zu 60 Frames pro Sekunde auf, wenn möglich). Wir verlangsamen absichtlich die Bildrate, da wir nur sechs Sprites haben, um damit zu arbeiten, und wenn wir eines jede 60.  Sekunde anzeigen, wird unser Charakter viel zu schnell bewegt!

   Innerhalb des äußeren Blocks verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu prüfen, ob der `sprite`-Wert bei 5 (das letzte sprite, da die Sprite-Nummern von 0 bis 5 laufen) ist. Wenn wir bereits das letzte sprite anzeigen, setzen wir `sprite` auf 0 zurück; andernfalls erhöhen wir es einfach um 1.

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

    Wir verwenden eine weitere `if...else`-Anweisung, um zu überprüfen, ob der Wert von `posX` größer als `width/2` geworden ist, was bedeutet, dass unser Charakter vom rechten Bildschirmrand gelaufen ist. Wenn ja, berechnen wir eine Position, die den Charakter links vom linken Bildschirmrand platzieren würde.

    Wenn unser Charakter den Bildschirmrand noch nicht überschritten hat, erhöhen wir `posX` um 2. Das wird ihn ein bisschen nach rechts bewegen lassen, das nächste Mal, wenn wir ihn zeichnen.

11. Schließlich müssen wir die Animationsschleife machen, indem wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()`-Funktion aufrufen:

    ```js
    window.requestAnimationFrame(draw);
    ```

Das war's! Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist verfügbar auf GitHub als [7_canvas_walking_animation](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation).

### Eine einfache Zeichenanwendung

Als ein letztes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben kombiniert werden kann (wie Mausbewegungen, in diesem Fall). Wir werden Sie nicht durchgehen lassen und dieses eine bauen; wir werden einfach die interessantesten Teile des Codes erkunden.

Das Beispiel finden Sie auf GitHub als [8_canvas_drawing_app](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app), und Sie können unten live damit spielen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app/index.html", '100%', 600)}}

Sehen wir uns die interessantesten Teile an. Zuerst verfolgen wir die X- und Y-Koordinaten der Maus und ob sie geklickt wird oder nicht, mit drei Variablen: `curX`, `curY` und `pressed`. Wenn die Maus bewegt wird, feuern wir eine Funktion, die als `onmousemove`-Ereignishandler eingestellt ist, der die aktuellen X- und Y-Werte aufzeichnet. Wir verwenden auch `onmousedown` und `onmouseup`-Ereignishandler, um den Wert von `pressed` auf `true` zu setzen, wenn die Maustaste gedrückt wird, und zurück auf `false`, wenn sie losgelassen wird.

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

Wenn der "Canvas löschen"-Knopf gedrückt wird, führen wir eine einfache Funktion aus, die das gesamte Canvas wieder auf schwarz zurücksetzt, auf die gleiche Weise, wie wir es zuvor gesehen haben:

```js
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal ziemlich einfach — wenn `pressed` wahr ist, zeichnen wir einen Kreis mit einem Füllstil, der gleich dem Wert im Farbaufnehmer ist und einem Radius, der gleich dem im Bereichskonfigurator festgelegten Wert ist. Wir müssen den Kreis 85 Pixel über dem messen, weil die vertikale Messung vom oberen Rand des Ansichtsports genommen wird, aber wir den Kreis relativ zum oberen Rand des Canvas zeichnen, der unter der 85 Pixel-Hohen Symbolleiste beginnt. Wenn wir es nur mit `curY` als y-Koordinate gezeichnet hätten, würde es 85 Pixel tiefer als die Mausposition erscheinen.

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

Alle {{htmlelement("input")}}-Typen werden gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, wird er auf einfache Textfelder zurückgesetzt.

## WebGL

Es ist jetzt an der Zeit, die 2D-Welt hinter uns zu lassen und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalte werden mit der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert, die eine völlig separate API von der 2D-Canvas-API ist, obwohl sie beide auf Canvas-Elementen rendern lassen.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht Ihnen direkte Kommunikation mit der {{Glossary("GPU", "GPU")}} des Computers. Als solches ist das Schreiben von rohem WebGL näher an niedrigen Programmiersprachen wie C++ als an regulärem JavaScript; es ist ziemlich komplex, aber unglaublich leistungsstark.

### Verwendung einer Bibliothek

Aufgrund seiner Komplexität verwenden die meisten Menschen eine Drittanbieter-JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js) zum Schreiben von 3D-Grafik-Codes. Die meisten von diesen funktionieren auf ähnliche Weise, indem sie Funktionalität bieten, um primitive und benutzerdefinierte Formen zu erstellen, Betrachtungskameras und Beleuchtung zu positionieren, Oberflächen mit Texturen zu überziehen, und mehr. Sie kümmern sich um das WebGL, sodass Sie auf einer höheren Ebene arbeiten können.

Ja, die Verwendung von einem bedeutet, eine weitere neue API (in diesem Fall eine Drittanbieter-API) zu erlernen, aber sie sind viel einfacher als rohes WebGL zu kodieren.

### Unseren Würfel neu erstellen

Lassen Sie uns ein Beispiel betrachten, wie man mit einer WebGL-Bibliothek etwas erstellt. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der beliebtesten ist. In diesem Tutorial erstellen wir den 3D drehenden Würfel, den wir früher gesehen haben.

1. Um zu beginnen, machen Sie eine lokale Kopie von [threejs-cube/index.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/index.html) in einem neuen Ordner, dann speichern Sie eine Kopie von [metal003.png](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/metal003.png) im selben Ordner. Dies ist das Bild, das wir als Oberflächentextur für den Würfel später verwenden werden.
2. Erstellen Sie als nächstes eine neue Datei mit dem Namen `script.js`, ebenfalls im selben Ordner wie zuvor.
3. Als nächstes müssen Sie die Three.js-Bibliothek installiert haben. Sie können die Umgebungssetup-Schritte beschreiben, die in [Building up a basic demo with Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) beschrieben sind, damit Sie Three.js wie erwartet zum Laufen bringen.
4. Jetzt haben wir `three.js` an unserer Seite und können beginnen, JavaScript zu schreiben, das auf `script.js` genutzt wird. Beginnen wir mit der Erstellung einer neuen Szene — fügen Sie das folgende in Ihre `script.js`-Datei ein:

   ```js
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene)-Konstruktor erstellt eine neue Szene, die die ganze 3D-Welt darstellt, die wir anzeigen möchten.

5. Als nächstes benötigen wir eine **Kamera**, damit wir die Szene sehen können. In 3D-Bildgebungstermen repräsentiert die Kamera eine Betrachterposition in der Welt. Um eine Kamera zu erstellen, fügen Sie die folgenden Zeilen als nächstes hinzu:

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

   - Das Sichtfeld: Wie weit die Fläche vor der Kamera sein soll, die onscreen sichtbar sein sollte, in Grad.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Das ist das Verhältnis der Szenenbreite geteilt durch die Szenenhöhe. Ein anderer Wert würde die Szene verzerren (was Sie möchten könnten, häufig jedoch nicht der Fall ist).
   - Die Nahebene: Wie nah Objekte zur Kamera kommen können, bevor wir aufhören sie auf den Bildschirm zu rendern.
   - Die Fernebene: Wie weit entfernt Dinge von der Kamera sind, bevor sie nicht mehr gerendert werden.

   Wir setzen die Position der Kamera auch auf 5 Abstandseinheiten auf der Z-Achse, die wie in CSS außerhalb des Bildschirms in Richtung zu Ihnen, dem Betrachter, verläuft.

6. Der dritte wichtige Bestandteil ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene aus der Perspektive einer gegebenen Kamera rendert. Im Moment werden wir einen damit erstellen [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)-Konstruktor, aber wir verwenden es erst später. Fügen Sie als nächstes die folgenden Ze@hen hinzu:

   ```js
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile setzt die Größe, mit der der Renderer das Sichtfeld der Kamera zeichnen wird, und die dritte Zeile fügt das {{htmlelement("canvas")}}, das vom Renderer erstellt wurde, dem {{htmlelement("body")}} des Dokuments hinzu. Jetzt wird alles, was der Renderer zeichnet, in unserem Fenster angezeigt.

7. Als nächstes möchten wir den Würfel erstellen, den wir auf der Leinwand anzeigen werden. Fügen Sie das folgende Code-Stück am Ende Ihres JavaScripts hinzu:

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

   Es gibt ein bisschen mehr zu erfassen, also lassen Sie uns es stufenweise durchgehen:

   - Zuerst erstellen wir eine `cube` Globalvariable, damit wir auf unseren Würfel von überall im Code zugreifen können.
   - Als nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt und rufen `load()` darauf auf. `load()` nimmt in diesem Fall zwei Parameter (obwohl es mehr nehmen kann): die Textur, die wir laden wollen (unsere PNG), und eine Funktion, die ausgeführt wird, wenn die Textur geladen ist.
   - Innerhalb dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um anzugeben, dass wir einen 2 x 2 Wiederholung des Bildes auf allen Seiten des Würfels gewickelt haben wollen. Danach erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt und bringen sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) zusammen, um unseren Würfel zu erstellen. Ein Objekt benötigt typischerweise eine Geometrie (was ist es für eine Form) und Material (was sieht seine Oberfläche aus).
   - Zuletzt fügen wir unseren Würfel der Szene hinzu und rufen dann unsere `draw()`-Funktion auf, um die Animation zu starten.

8. Bevor wir zu `draw()` gelangen, fügen wir ein paar Lichter der Szene hinzu, um es aufzuhellen; als nächstes fügen Sie die folgenden Abschnitte hinzu:

   ```js
   const light = new THREE.AmbientLight("rgb(255 255 255)"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("rgb(255 255 255)");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art sanftes Licht, das die gesamte Szene ein wenig aufhellt, wie die Sonne, wenn Sie draußen sind. Der [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt andererseits ist ein richtungsspezifischer Lichtstrahl, eher wie eine Taschenlampe/Blitzlicht (oder ein Spotlight).

9. Fügen Sie schließlich unsere `draw()`-Funktion am Ende des Codes hinzu:

   ```js
   function draw() {
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
     renderer.render(scene, camera);

     requestAnimationFrame(draw);
   }
   ```

   Dies ist ziemlich intuitiv; an jedem Frame drehen wir unsere Würfel leicht auf ihrer X- und Y-Achse, rendern dann die Szene, wie von unserer Kamera aus gesehen, und rufen dann schließlich `requestAnimationFrame()` auf, um das Zeichnen unseres nächsten Frames zu terminieren.

Lassen Sie uns schnell noch einmal ansehen, wie das fertige Produkt aussehen soll:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Sie können [den fertigen Code auf GitHub finden](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-cube).

> [!NOTE]
> In unserem GitHub-Repository können Sie auch ein weiteres interessantes 3D-Würfels einsehen — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([siehe es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dies verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Computerkamera aufzunehmen und ihn als Textur auf der Seite des Würfels zu projizieren!

## Zusammenfassung

Zu diesem Zeitpunkt sollten Sie eine nützliche Idee von den Grundlagen der Grafikenprogrammierung mit Canvas und WebGL haben und was Sie mit diesen APIs tun können, sowie eine gute Idee, wo Sie für weitere Informationen hingehen können. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklichen Grundlagen von Canvas behandelt — es gibt so viel mehr zu lernen! Die folgenden Artikel werden Sie weiterbringen.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorial-Serie, die in viel detaillierter behandelt, was Sie über 2D-Canvas wissen sollten, als hier behandelt wurde. Obligatorische Lektüre.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Serie, die die Grundlagen der Roh-WebGL-Programmierung lehrt.
- [Erstellung eines grundlegenden Demos mit Three.js

](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — Basic Three.js Tutorial. Wir haben auch äquivalente Leitfäden für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spieleentwicklung](/de/docs/Games) — die Anfangsseite für die Web-Spieleentwicklung auf MDN. Hier gibt es einige wirklich nützliche Tutorials und Techniken im Zusammenhang mit 2D- und 3D-Canvas — sehen Sie die Optionen im Menü Techniken und Tutorials.

## Beispiele

- [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API zur Klangerzeugung und Canvas zur Erzeugung einer schönen Visualisierung, die dazu passt.
- [Voice Change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas, um Echtzeit-Audiodaten von der Web Audio API zu visualisieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
