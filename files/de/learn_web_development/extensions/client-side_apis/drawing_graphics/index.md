---
title: Grafiken zeichnen
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: 1717097c927b0399fd143a6ab22631245e9da1cd
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsstarke Programmierwerkzeuge für Grafiken, von der Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) Sprache bis zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in Canvas und weiterführende Ressourcen, um mehr zu lernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere Grundlagen zu <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objekten</a> und grundlegende API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte und Anwendungsfälle, die durch die in dieser Lektion behandelten APIs ermöglicht werden.</li>
          <li>Grundlegende Syntax und Verwendung von <code>&lt;canvas&gt;</code> und zugehörigen APIs.</li>
          <li>Verwendung von Timern und <code>requestAnimationFrame()</code>, um Animationsschleifen einzurichten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Das Web bestand ursprünglich nur aus Text, was sehr langweilig war, daher wurden Bilder eingeführt — zunächst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Dies war jedoch immer noch nicht genug. Während Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden konnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) — da sie durch Markup dargestellt werden — gab es immer noch keine Möglichkeit, dasselbe mit Bitmap-Bildern zu tun, und die verfügbaren Werkzeuge waren ziemlich begrenzt. Das Web hatte immer noch keine Möglichkeit, effektiv Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die üblicherweise von niedrigeren Programmiersprachen wie C++ oder Java behandelt werden.

Die Situation begann sich zu verbessern, als Browser im Jahr 2004 das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) unterstützten. Wie Sie unten sehen werden, bietet Canvas nützliche Werkzeuge zur Erstellung von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere in Kombination mit einigen der anderen APIs, die die Web-Plattform bietet. Der Zugang kann jedoch schwierig oder unmöglich sein.

Das untenstehende Beispiel zeigt eine einfache, auf 2D-Canvas basierende Animation von hüpfenden Kugeln, die wir ursprünglich in unserem Modul [Einführung in JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) kennengelernt haben:

{{EmbedGHLiveSample("learning-area/javascript/oojs/bouncing-balls/index-finished.html", '100%', 500)}}

Um 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Daraus entstand [WebGL](/de/docs/Web/API/WebGL_API), das an Fahrt bei Browserherstellern gewann und um 2009–2010 standardisiert wurde. WebGL ermöglicht es Ihnen, echte 3D-Grafiken in Ihrem Webbrowser zu erstellen; das untenstehende Beispiel zeigt einen einfachen, rotierenden WebGL-Würfel:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Dieser Artikel konzentriert sich hauptsächlich auf 2D-Canvas, da rohe WebGL-Code sehr komplex ist. Wir werden jedoch zeigen, wie man eine WebGL-Bibliothek verwendet, um eine 3D-Szene leichter zu erstellen, und Sie können ein Tutorial über den rohen WebGL-Code woanders finden — siehe [Einstieg in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Aktives Lernen: Erste Schritte mit einem `<canvas>`

Wenn Sie eine 2D- _oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-{{htmlelement("canvas")}}-Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Dies ist so einfach wie das Einfügen des Elements auf der Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dies wird ein Canvas auf der Seite mit einer Größe von 320 mal 240 Pixeln erstellen.

Sie sollten Fallback-Inhalte innerhalb der `<canvas>`-Tags bereitstellen. Diese sollten den Inhalt des Canvas für Benutzer von Browsern beschreiben, die das Canvas nicht unterstützen, oder für Benutzer von Bildschirmlesegeräten.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Das Fallback sollte nützliche alternative Inhalte zum Inhalt des Canvas bieten. Beispielsweise könnte, wenn Sie ein ständig aktualisiertes Diagramm von Aktienpreisen rendern, der Fallback-Inhalt ein statisches Bild des neuesten Aktiendiagramms mit `alt`-Text sein, der die Preise in Textform angibt oder eine Liste von Links zu einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalte sind für Bildschirmleser nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributes direkt dem Canvas-Element selbst hinzu oder fügen Sie Fallback-Inhalte zwischen die öffnenden und schließenden `<canvas>`-Tags ein. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte sind es.

### Erstellen und Größenanpassung unseres Canvas

Lassen Sie uns beginnen, indem wir unser eigenes Canvas erstellen, auf das wir zukünftige Experimente zeichnen.

1. Machen Sie zunächst eine lokale Kopie des Verzeichnisses [0_canvas_start](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/0_canvas_start). Es enthält drei Dateien:
   - "index.html"
   - "script.js"
   - "style.css"
2. Öffnen Sie "index.html" und fügen Sie den folgenden Code unter dem öffnenden {{htmlelement("body")}}-Tag ein:

   ```html
   <canvas class="myCanvas">
     <p>Add suitable fallback here.</p>
   </canvas>
   ```

   Wir haben ein `class`-Attribut zum `<canvas>`-Element hinzugefügt, damit es einfacher wird, es auszuwählen, wenn wir mehrere Canvas auf der Seite haben, aber wir haben die `width`- und `height`-Attribute vorerst entfernt (Sie könnten sie wieder hinzufügen, wenn Sie möchten, aber wir setzen sie später mit JavaScript in einem Abschnitt unten). Canvas ohne explizite Breite und Höhe sind standardmäßig 300 Pixel breit und 150 Pixel hoch.

3. Öffnen Sie nun "script.js" und fügen Sie die folgenden Zeilen JavaScript hinzu:

   ```js
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz auf das Canvas in der Konstante `canvas` gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas gleich [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Breite des Ansichtsbereichs gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas gleich [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Höhe des Ansichtsbereichs gibt). So haben wir jetzt ein Canvas, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden auch sehen, dass wir mehrere Gleichheitszeichen verwenden, um Zuweisungen zu verketten — dies ist in JavaScript erlaubt, und es ist eine gute Technik, wenn Sie mehrere Variablen alle auf denselben Wert setzen möchten. Wir wollten die Breite und Höhe des Canvas leicht zugänglich in den Variablen `width`/`height` machen, da sie nützliche Werte für später sind (zum Beispiel, wenn Sie etwas genau in der Mitte der Breite des Canvas zeichnen möchten).

> [!NOTE]
> Sie sollten die Größe des Bildes generell mit HTML-Attributen oder DOM-Eigenschaften einstellen, wie oben erklärt. Sie könnten CSS verwenden, aber das Problem ist dann, dass die Größenanpassung erfolgt, nachdem das Canvas gerendert wurde, und wie jedes andere Bild (das gerenderte Canvas ist nur ein Bild) könnte das Bild pixelig/verzerrt werden.

### Abrufen des Canvas-Kontexts und abschließende Einrichtung

Wir müssen noch eine letzte Sache erledigen, bevor wir unsere Canvas-Vorlage als fertig betrachten können. Um auf das Canvas zu zeichnen, müssen wir eine spezielle Referenz auf den Zeichenbereich abrufen, die Kontext genannt wird. Dies geschieht mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die für die grundlegende Verwendung einen einzigen Parameter als Zeichenkette akzeptiert, der den Typ des zurückzugebenden Kontexts repräsentiert.

In diesem Fall möchten wir ein 2D-Canvas, also fügen Sie die folgende JavaScript-Zeile unter den anderen in "script.js" hinzu:

```js
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextwerte, die Sie wählen könnten, sind `webgl` für WebGL, `webgl2` für WebGL 2 usw., aber wir werden diese in diesem Artikel nicht benötigen.

Das war's — unser Canvas ist jetzt bereit für das Zeichnen! Die Variable `ctx` enthält jetzt ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, und alle Zeichenoperationen auf dem Canvas werden die Manipulation dieses Objekts umfassen.

Lassen Sie uns noch einen letzten Schritt machen, bevor wir weitermachen. Wir färben den Hintergrund des Canvas schwarz, um Ihnen einen ersten Eindruck von der Canvas-API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript hinzu:

```js
ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mit der Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) des Canvas (dieser nimmt [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) genau wie CSS-Eigenschaften) und zeichnen dann mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) ein Rechteck, das den gesamten Bereich des Canvas abdeckt (die ersten zwei Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten zwei sind die Breite und Höhe, die das Rechteck gezeichnet werden soll — wir haben Ihnen gesagt, dass die `width`- und `height`-Variablen nützlich sein würden)!

Okay, unsere Vorlage ist fertig und es ist Zeit, weiterzumachen.

## Grundlagen von 2D-Canvas

Wie wir oben gesagt haben, werden alle Zeichenoperationen durch das Manipulieren eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts (in unserem Fall `ctx`) durchgeführt. Viele Operationen müssen mit Koordinaten versehen werden, um genau zu bestimmen, wo etwas gezeichnet werden soll — die obere linke Ecke des Canvas ist Punkt (0, 0), die horizontale (x) Achse verläuft von links nach rechts und die vertikale (y) Achse verläuft von oben nach unten.

![Gitterrasterpapier mit kleinen Quadraten, die seine Fläche bedecken, mit einem stahlblauen Quadrat in der Mitte. Die obere linke Ecke des Canvas ist Punkt (0, 0) der x- und y-Achsen des Canvas. Die horizontale (x) Achse verläuft von links nach rechts und markiert die Breite, und die vertikale (y) Achse verläuft von oben nach unten und markiert die Höhe. Die obere linke Ecke des blauen Quadrats ist als eine Entfernung von x Einheiten von der y-Achse und y Einheiten von der x-Achse gekennzeichnet.](canvas_default_grid.png)

Das Zeichnen von Formen erfolgt tendenziell mit dem Rechteckform-Primitive oder durch das Nachzeichnen einer Linie entlang eines bestimmten Pfades und anschließendes Ausfüllen der Form. Unten zeigen wir Ihnen, wie beides funktioniert.

### Einfache Rechtecke

Lassen Sie uns mit einigen einfachen Rechtecken beginnen.

1. Machen Sie zunächst eine Kopie Ihrer neu codierten Canvas-Vorlage (oder machen Sie eine lokale Kopie des Verzeichnisses [1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template), wenn Sie die obigen Schritte nicht befolgt haben).
2. Fügen Sie als nächstes die folgenden Zeilen unten in Ihr JavaScript ein:

   ```js
   ctx.fillStyle = "rgb(255 0 0)";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie speichern und aktualisieren, sollte ein rotes Rechteck auf Ihrem Canvas erschienen sein. Seine obere linke Ecke befindet sich 50 Pixel vom oberen und linken Rand des Canvas entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch die dritten und vierten Parameter definiert).

3. Fügen wir noch ein weiteres Rechteck hinzu — diesmal ein grünes. Fügen Sie das folgende unten in Ihr JavaScript ein:

   ```js
   ctx.fillStyle = "rgb(0 255 0)";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren Sie, und Sie werden Ihr neues Rechteck sehen. Dies bringt einen wichtigen Punkt zur Sprache: Grafikoperationen wie das Zeichnen von Rechtecken, Linien und so weiter werden in der Reihenfolge durchgeführt, in der sie auftreten. Denken Sie daran wie an das Streichen einer Wand, bei der jede Farbschicht die darunter liegenden überlappt und diese möglicherweise sogar verdeckt. Sie können nichts daran ändern, daher müssen Sie sorgfältig über die Reihenfolge nachdenken, in der Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, z. B. mit `rgb()`. Der "Alphakanal" definiert den Grad der Transparenz der Farbe. Je höher sein Wert, desto mehr verdeckt er das, was dahinter liegt. Fügen Sie das folgende Ihrer Datei hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie nun, einige weitere Rechtecke Ihrer Wahl zu zeichnen; viel Spaß dabei!

### Umrandungen und Linienbreiten

Bisher haben wir uns mit dem Zeichnen gefüllter Rechtecke befasst, aber Sie können auch Rechtecke zeichnen, die nur Umrisse sind (in der Grafikdesignwelt als **Umrisse** bezeichnet). Um die Farbe einzustellen, die Sie für Ihren Umriss verwenden möchten, verwenden Sie die Eigenschaft [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle); das Zeichnen eines Umrissrechtecks erfolgt mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Fügen Sie das folgende dem vorherigen Beispiel hinzu, erneut unter den vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "rgb(255 255 255)";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die standardmäßige Breite von Umrandungen beträgt 1 Pixel; Sie können den Wert der Eigenschaft [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth) ändern, um dies anzupassen (es nimmt eine Zahl, die die Anzahl der Pixel angibt, die der Umriss breit sein soll). Fügen Sie die folgende Zeile zwischen den beiden vorherigen Zeilen hinzu:

   ```js
   ctx.lineWidth = 5;
   ```

Jetzt sollten Sie sehen, dass Ihre weiße Kontur viel dicker geworden ist! Das war's fürs Erste. An diesem Punkt sollte Ihr Beispiel so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles/index.html", '100%', 250)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [2_canvas_rectangles](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles) verfügbar.

### Zeichnen von Pfaden

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Im Grunde bedeutet dies, Code zu schreiben, der genau angibt, welchen Pfad der Stift auf Ihrem Canvas zurücklegen soll, um die gewünschte Form zu zeichnen. Canvas enthält Funktionen zum Zeichnen von geraden Linien, Kreisen, Bézierkurven und mehr.

Lassen Sie uns diesen Abschnitt beginnen, indem wir eine neue Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) erstellen, in der wir das neue Beispiel zeichnen können.

Wir werden einige allgemeine Methoden und Eigenschaften in allen folgenden Abschnitten verwenden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — Beginnen Sie mit dem Zeichnen eines Pfads an dem Punkt, an dem sich der Stift derzeit auf dem Canvas befindet. Auf einem neuen Canvas beginnt der Stift bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — Bewegen Sie den Stift zu einem anderen Punkt auf dem Canvas, ohne die Linie zu erfassen oder nachzuzeichnen; der Stift "springt" zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — Zeichnen Sie eine gefüllte Form, indem Sie den bisher gezeichneten Pfad füllen.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — Zeichnen Sie eine Umrissform, indem Sie einen Umriss entlang des bisher gezeichneten Pfads zeichnen.
- Sie können auch Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` sowohl bei Pfaden als auch bei Rechtecken verwenden.

Eine typische, einfache Pfad-Zeichnungsoperation sieht ungefähr so aus:

```js
ctx.fillStyle = "rgb(255 0 0)";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Linien zeichnen

Lassen Sie uns ein gleichseitiges Dreieck auf dem Canvas zeichnen.

1. Fügen Sie zunächst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Diese konvertiert Gradwerte in Radiant, was nützlich ist, da Sie, wann immer Sie einen Winkelwert in JavaScript angeben müssen, dieser fast immer in Radiant sein wird, aber Menschen normalerweise in Grad denken.

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Beginnen Sie als nächstes Ihren Pfad, indem Sie folgendes unter Ihrer vorherigen Ergänzung hinzufügen; hier setzen wir eine Farbe für unser Dreieck, beginnen den Pfad zu zeichnen und bewegen den Stift zu (50, 50), ohne etwas zu zeichnen. Hier werden wir unser Dreieck beginnen.

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

   Zuerst ziehen wir eine Linie zu (150, 50) — unser Pfad verläuft jetzt 100 Pixel nach rechts entlang der x-Achse.

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks unter Verwendung etwas einfacher Trigonometrie. Grundsätzlich zeichnen wir das Dreieck nach unten zeigend. Die Winkel in einem gleichseitigen Dreieck betragen immer 60 Grad; um die Höhe zu berechnen, können wir es in der Mitte in zwei rechtwinklige Dreiecke aufteilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben werden. In Bezug auf die Seiten:
   - Die längste Seite wird als **Hypotenuse** bezeichnet.
   - Die Seite neben dem 60-Grad-Winkel wird als **Ankathete** bezeichnet — die wir kennen und die 50 Pixel beträgt, da sie die Hälfte der Linie ist, die wir gerade gezeichnet haben.
   - Die gegenüberliegende Seite des 60-Grad-Winkels wird als **Gegenkathete** bezeichnet, die die Höhe des Dreiecks ist, die wir berechnen möchten.

   ![Ein gleichseitiges Dreieck, das nach unten zeigt, mit beschrifteten Winkeln und Seiten. Die horizontale Linie oben ist als "Ankathete" beschriftet. Eine senkrechte gepunktete Linie, die vom Mittelpunkt der Ankathete ausgeht und als "Gegenkathete" beschriftet ist, teilt das Dreieck in zwei gleich große rechtwinklige Dreiecke. Die rechte Seite des Dreiecks ist als Hypotenuse gekennzeichnet, da sie die Hypotenuse des rechtwinkligen Dreiecks bildet, das durch die Linie "Gegenkathete" gebildet wird. Während alle drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des rechtwinkligen Dreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass die Länge der Ankathete multipliziert mit dem Tangens des Winkels gleich der Gegenkathete ist, daher kommen wir auf `50 * Math.tan(degToRad(60))`. Wir verwenden unsere `degToRad()`-Funktion, um 60 Grad in Radiant zu konvertieren, da {{jsxref("Math.tan()")}} einen Eingabewert in Radiant erwartet.

4. Mit der berechneten Höhe ziehen wir eine weitere Linie zu `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss genau zwischen den beiden vorherigen X-Werten liegen, die wir gesetzt haben. Der Y-Wert muss dagegen 50 plus die Dreieckshöhe sein, da wir wissen, dass die Oberseite des Dreiecks 50 Pixel von der Oberseite des Canvas entfernt ist.
5. Die nächste Linie zieht eine Linie zurück zum Ausgangspunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form zu füllen.

#### Kreise zeichnen

Schauen wir uns nun an, wie man einen Kreis im Canvas zeichnet. Dies wird mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) erreicht, die einen vollständigen oder teilweise Kreis an einem angegebenen Punkt zeichnet.

1. Fügen wir einen Bogen in unser Canvas ein — fügen Sie das folgende dem Ende Ihres Codes hinzu:

   ```js
   ctx.fillStyle = "rgb(0 0 255)";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` nimmt sechs Parameter an. Die ersten beiden geben die Position des Zentrums des Bogens an (X und Y). Der dritte ist der Radius des Kreises, der vierte und fünfte sind die Start- und Endwinkel, bei denen der Kreis gezeichnet werden soll (wenn Sie 0 und 360 Grad angeben, erhalten Sie einen vollständigen Kreis), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn oder im Uhrzeigersinn gezeichnet werden soll (`false` ist im Uhrzeigersinn).

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
   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird, was bedeutet, dass obwohl der Bogen wie gestartet bei -45 Grad und endend bei 45 Grad spezifiziert ist, der Bogen um die 270 Grad gezeichnet wird, nicht innerhalb dieses Abschnitts. Wenn Sie `true` zu `false` ändern würden und dann den Code erneut ausführen würden, würde nur der 90-Grad-Teil des Kreises gezeichnet werden.
   - Bevor wir `fill()` aufrufen, ziehen wir eine Linie zum Zentrum des Kreises. Das bedeutet, dass wir das recht schöne Pac-Man-ähnliche ausgeschnittene Stück dargestellt bekommen. Wenn Sie diese Linie entfernen (versuchen Sie es!) und dann den Code erneut ausführen, würde nur ein Rand des Kreises zwischen dem Start- und Endpunkt des Bogens abgeschnitten gezeichnet. Dies veranschaulicht einen weiteren wichtigen Punkt des Canvas — wenn Sie versuchen, einen unvollständigen Pfad (d.h. einen, der nicht geschlossen ist) zu füllen, füllt der Browser eine gerade Linie zwischen Start- und Endpunkt und füllt es dann.

Das war's fürs Erste; Ihr letztes Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/3_canvas_paths/index.html", '100%', 200)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [3_canvas_paths](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/3_canvas_paths) verfügbar.

> [!NOTE]
> Um mehr über fortgeschrittene Pfadzeichenfunktionen wie Bézierkurven zu erfahren, schauen Sie sich unser [Zeichnen von Formen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)-Tutorial an.

### Text

Canvas verfügt auch über Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz erkunden. Beginnen Sie, indem Sie eine weitere frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) erstellen, in der wir das neue Beispiel zeichnen können.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnet Umriss- (Stroke-) Text.

Beide nehmen in ihrer grundlegenden Verwendung drei Eigenschaften an: den zu zeichnenden Textstring und die X- und Y-Koordinaten des Punktes, an dem der Text begonnen werden soll. Dies entspricht der **unteren linken** Ecke des **Textfeldes** (buchstäblich das Feld, das den gezeichneten Text umgibt), was Sie möglicherweise verwirrt, da andere Zeichenoperationen tendenziell von der oberen linken Ecke aus beginnen — behalten Sie dies im Hinterkopf.

Es gibt auch eine Reihe von Eigenschaften, die helfen, die Textrenderung zu steuern, wie [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), mit der Sie Schriftart, Größe usw. angeben können. Sie nimmt dieselbe Syntax wie die CSS-Eigenschaft {{cssxref("font")}} als Wert.

Canvas-Inhalte sind für Bildschirmleser nicht zugänglich. In das Canvas gemalter Text ist nicht im DOM verfügbar, muss aber zugänglich gemacht werden. In diesem Beispiel verwenden wir den Text als Wert für `aria-label`.

Versuchen Sie, den folgenden Block zum Ende Ihres JavaScript hinzuzufügen:

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

Hier zeichnen wir zwei Textzeilen, eine Umrisslinie und die andere ausgefüllt. Das letzte Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/4_canvas_text/index.html", '100%', 180)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [4_canvas_text](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/4_canvas_text) verfügbar.

Probieren Sie es aus und sehen Sie, was Sie sich einfallen lassen können! Sie können weitere Informationen zu den Optionen, die für Canvas-Text verfügbar sind, unter [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text) finden.

### Bilder auf Canvas zeichnen

Es ist möglich, externe Bilder auf Ihrem Canvas darzustellen. Diese können einfache Bilder, Frames aus Videos oder der Inhalt anderer Canvas sein. Im Moment werden wir uns nur den Fall ansehen, einige einfache Bilder auf unserem Canvas zu verwenden.

1. Machen Sie wie zuvor eine weitere frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)), in der wir das neue Beispiel zeichnen können.

   Bilder werden mit der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf das Canvas gezeichnet. Die einfachste Version nimmt drei Parameter an - eine Referenz auf das Bild, das Sie rendern möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Beginnen wir damit, eine Bildquelle zu erhalten, die wir in unser Canvas einbetten können. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript hinzu:

   ```js
   const image = new Image();
   image.src = "firefox.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt mithilfe des [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktors. Das zurückgegebene Objekt ist derselbe Typ wie das, das zurückgegeben wird, wenn Sie eine Referenz auf ein vorhandenes {{htmlelement("img")}}-Element abrufen. Dann setzen wir dessen [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut auf unser Firefox Logo-Bild. Zu diesem Zeitpunkt beginnt der Browser, das Bild zu laden.

3. Wir könnten jetzt versuchen, das Bild mit `drawImage()` einzubetten, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, da der Code sonst fehlschlagen wird. Das können wir mit dem `load`-Event erreichen, das nur ausgelöst wird, wenn das Bild fertig geladen ist. Fügen Sie den folgenden Block unter dem vorherigen hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie das Bild im Canvas eingebettet sehen.

4. Aber es gibt noch mehr! Was ist, wenn wir nur einen Teil des Bildes anzeigen oder es in der Größe ändern möchten? Wir können beides mit der komplexeren Version von `drawImage()` tun. Aktualisieren Sie Ihre `ctx.drawImage()`-Linie wie folgt:

   ```js
   ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
   ```

   - Der erste Parameter ist wieder die Bildreferenz.
   - Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild herausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links vom ersten Parameter oder oberhalb des zweiten wird gezeichnet.
   - Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem Originalbild herauscutten möchten, das wir geladen haben.
   - Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des herausgeschnittenen Teils des Bildes zeichnen möchten, relativ zur oberen linken Ecke des Canvas.
   - Parameter 8 und 9 definieren die Breite und Höhe, in denen der herausgeschnittene Bereich des Bildes gezeichnet werden soll. In diesem Fall haben wir dieselben Abmessungen wie das Originalstück angegeben, aber Sie könnten es durch Angabe unterschiedlicher Werte skalieren.

5. Wenn das Bild sinnvoll aktualisiert wird, muss auch die {{Glossary("accessible_description", "zugängliche Beschreibung")}} aktualisiert werden.

   ```js
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/5_canvas_images/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [5_canvas_images](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/5_canvas_images) verfügbar.

## Schleifen und Animationen

Wir haben bisher einige sehr einfache Anwendungen von 2D-Canvas behandelt, aber wirklich, Sie werden nicht die volle Power von Canvas erleben, es sei denn, Sie aktualisieren oder animieren es auf irgendeine Weise. Schließlich stellt das Canvas skriptfähige Bilder bereit! Wenn Sie nichts ändern möchten, könnten Sie genauso gut einfach statische Bilder verwenden und sich die ganze Arbeit sparen.

### Eine Schleife erstellen

Mit Schleifen im Canvas zu spielen, macht ziemlich Spaß — Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) (oder anderen Schleife) genauso wie jeden anderen JavaScript-Code ausführen.

Lassen Sie uns ein Beispiel erstellen.

1. Machen Sie eine weitere frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie sie in Ihrem Code-Editor.
2. Fügen Sie am Ende Ihres JavaScript die folgende Zeile hinzu. Diese enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

   Dies bewirkt, dass der Koordinatenursprung (0, 0) in die Mitte des Canvas verschoben wird, anstatt in der oberen linken Ecke zu liegen. Dies ist in vielen Situationen sehr nützlich, wie in diesem Fall, wo wir möchten, dass unser Design relativ zur Mitte des Canvas gezeichnet wird.

3. Fügen Sie nun den folgenden Code am Ende des JavaScript hinzu:

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

   Hier implementieren wir dieselbe `degToRad()`-Funktion, die wir im Dreieckbeispiel oben gesehen haben, eine `rand()`-Funktion, die eine Zufallszahl zwischen angegebenen unteren und oberen Grenzen zurückgibt, `length`- und `moveOffset`-Variablen (über die wir später mehr erfahren werden) und eine leere `for`-Schleife.

4. Die Idee hierbei ist, dass wir innerhalb der `for`-Schleife etwas auf das Canvas zeichnen und dieses jedes Mal iterieren, damit wir etwas Interessantes erstellen können. Fügen Sie den folgenden Code in Ihre `for`-Schleife ein:

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

   Also bei jeder Iteration:
   - Setzen wir das `fillStyle` auf einen leicht transparenten Lila-Ton, der sich jedes Mal ändert, basierend auf dem Wert von `length`. Wie Sie später sehen werden, wird die Länge jedes Mal kleiner, wenn die Schleife läuft, sodass der Effekt hier ist, dass die Farbe bei jedem gezeichneten Dreieck heller wird.
   - Wir beginnen den Pfad.
   - Wir bewegen den Stift zu einer Koordinate von `(moveOffset, moveOffset)`; Dieses Variable definiert, wie weit wir uns jedes Mal bewegen möchten, wenn wir ein neues Dreieck zeichnen.
   - Wir ziehen eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Dies zieht eine Linie der Länge `length` parallel zur X-Achse.
   - Wir berechnen die Höhe des Dreiecks, wie zuvor.
   - Wir ziehen eine Linie zur nach unten zeigenden Ecke des Dreiecks, dann ziehen wir eine Linie zurück zum Start des Dreiecks.
   - Wir rufen `fill()` auf, um das Dreieck auszufüllen.
   - Wir aktualisieren die Variablen, die die Reihenfolge der Dreiecke beschreiben, damit wir bereit sind, das nächste zu zeichnen. Wir reduzieren den `length`-Wert um 1, sodass die Dreiecke jedes Mal kleiner werden; wir erhöhen `moveOffset` um einen kleinen Betrag, sodass jedes aufeinanderfolgende Dreieck etwas weiter entfernt ist, und verwenden eine andere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), mit der wir das gesamte Canvas rotieren können! Wir drehen es um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das war's! Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop/index.html", '100%', 550)}}

An diesem Punkt ermutigen wir Sie, mit dem Beispiel zu spielen und es zu Ihrem eigenen zu machen! Zum Beispiel:

- Zeichnen Sie Rechtecke oder Bögen anstelle von Dreiecken oder sogar eingebetteten Bildern.
- Spielen Sie mit den `length`- und `moveOffset`-Werten.
- Verwenden Sie einige Zufallszahlen mit der `rand()`-Funktion, die wir oben eingefügt, aber nicht verwendet haben.

> [!NOTE]
> Der fertige Code ist auf GitHub als [6_canvas_for_loop](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop) verfügbar.

### Animationen

Das Schleifenbeispiel, das wir oben erstellt haben, war lustig, aber wirklich benötigen Sie eine dauerhafte Schleife, die immer weiterläuft für jede ernsthafte Canvas-Anwendung (z. B. Spiele und Echtzeitvisualisierungen). Wenn Sie Ihr Canvas als Film betrachten, möchten Sie wirklich, dass das Display auf jedem Frame aktualisiert wird, um die aktualisierte Ansicht zu zeigen, mit einer idealen Bildwiederholrate von 60 Bildern pro Sekunde, damit die Bewegungen für das menschliche Auge schön flüssig erscheinen.

Es gibt einige JavaScript-Funktionen, mit denen Sie Funktionen mehrmals pro Sekunde wiederholt ausführen können, wobei die beste für unsere Zwecke hier [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) ist. Es nimmt einen Parameter — den Namen der Funktion, die Sie für jeden Frame ausführen möchten. Das nächste Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion das neue Update Ihrer Animation zeichnet und dann kurz vor dem Ende der Funktion `requestAnimationFrame()` erneut aufruft, läuft die Animationsschleife weiter. Die Schleife endet, wenn Sie die `requestAnimationFrame()`-Aufrufe beenden oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) aufrufen, nachdem Sie `requestAnimationFrame()` aufgerufen haben, aber bevor der Frame aufgerufen wird.

> [!NOTE]
> Es ist gute Praxis, `cancelAnimationFrame()` von Ihrem Hauptcode aufzurufen, wenn Sie die Animation nicht mehr verwenden, um sicherzustellen, dass keine Updates mehr ausstehen.

Der Browser kümmert sich um komplexe Details wie das Sicherstellen, dass die Animation mit einer konsistenten Geschwindigkeit läuft und keine Ressourcen verschwendet werden, indem Dinge animiert werden, die nicht gesehen werden können.

Um zu sehen, wie es funktioniert, schauen wir noch einmal auf unser Bouncing Balls-Beispiel ([sehen Sie es live](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html) und sehen Sie sich auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/oojs/bouncing-balls) an). Der Code für die Schleife, die alles in Bewegung hält, sieht so aus:

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

Wir führen die `loop()`-Funktion einmal am unteren Rand des Codes aus, um den Zyklus zu starten und den ersten Animationsrahmen zu zeichnen; die `loop()`-Funktion übernimmt dann die Verantwortung, `requestAnimationFrame(loop)` aufzurufen, um den nächsten Frame der Animation immer wieder auszuführen.

Beachten Sie, dass wir in jedem Frame das Canvas komplett löschen und alles neu zeichnen. Für jeden vorhandenen Ball zeichnen wir ihn, aktualisieren seine Position und überprüfen, ob er mit anderen Bällen kollidiert. Sobald Sie eine Grafik auf ein Canvas gezeichnet haben, gibt es keine Möglichkeit, diese Grafik individuell wie DOM-Elemente zu manipulieren. Sie können jeden Ball nicht auf dem Canvas verschieben, da er nach dem Zeichnen Teil des Canvas ist und kein einzelnes zugängliches Element oder Objekt mehr. Stattdessen müssen Sie löschen und neu zeichnen, entweder indem Sie den gesamten Frame löschen und alles neu zeichnen oder indem Sie Code haben, der genau weiß, welche Teile gelöscht werden müssen, und nur das minimale Gebiet des Canvas entfernt und neu zeichnet, das hierfür erforderlich ist.

Das Optimieren von Animationen von Grafiken ist ein ganz eigenes Spezialgebiet der Programmierung mit vielen cleveren Techniken. Diese gehen jedoch über das hinaus, was wir für unser Beispiel benötigen!

Generell umfasst der Prozess des Erstellens einer Canvas-Animation die folgenden Schritte:

1. Löschen Sie die Canvas-Inhalte (z. B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Speichern Sie den Zustand (falls erforderlich) mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) — dies ist erforderlich, wenn Sie Einstellungen, die Sie auf dem Canvas geändert haben, vor dem Fortfahren speichern möchten, was für fortgeschrittenere Anwendungen nützlich ist.
3. Zeichnen Sie die Grafiken, die Sie animieren.
4. Stellen Sie die Einstellungen aus Schritt 2 mit [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore) wieder her.
5. Rufen Sie `requestAnimationFrame()` auf, um das Zeichnen des nächsten Frames der Animation zu planen.

> [!NOTE]
> Wir werden `save()` und `restore()` hier nicht behandeln, aber sie sind in unserem [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations)-Tutorial (und den darauf folgenden Tutorials) gut erklärt.

### Eine einfache Charakteranimation

Erstellen wir nun unsere eigene einfache Animation — wir bringen einen Charakter aus einem ziemlich fantastischen Retro-Computerspiel dazu, über den Bildschirm zu laufen.

1. Machen Sie eine weitere frische Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie diese in Ihrem Code-Editor.

2. Aktualisieren Sie das innere HTML, um das Bild widerzuspiegeln:

   ```html
   <canvas class="myCanvas">
     <p>A man walking.</p>
   </canvas>
   ```

3. Fügen Sie am Ende des JavaScripts die folgende Zeile hinzu, um die Koordinatenursprünge wieder in die Mitte des Canvas zu verschieben:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

4. Erstellen wir nun ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt, setzen das [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf das Bild, das wir laden möchten, und fügen einen `onload`-Event-Handler hinzu, der die `draw()`-Funktion ausführt, wenn das Bild geladen ist:

   ```js
   const image = new Image();
   image.src = "walk-right.png";
   image.onload = draw;
   ```

5. Fügen Sie einige Variablen hinzu, um die Position zu verfolgen, an der der Sprite auf dem Bildschirm gezeichnet werden soll, sowie die Nummer des Sprites, den wir anzeigen möchten.

   ```js
   let sprite = 0;
   let posX = 0;
   ```

   Lassen Sie uns das Sprite-Sheet-Bild kurz erklären (das wir mit Respekt von Mike Thomas' [Laufzyklus mit CSS-Animation](https://codepen.io/mikethomas/pen/kQjKLW) CodePen geliehen haben). Das Bild sieht so aus:

   ![Ein Sprite-Blatt mit sechs Sprite-Bildern eines verpixelten Charakters, der von der rechten Seite betrachtet wie eine gehende Person aussieht, in verschiedenen Momenten eines einzigen Schritts nach vorne. Der Charakter trägt ein weißes Hemd mit himmelblauen Knöpfen, schwarze Hosen und schwarze Schuhe. Jedes Sprite ist 102 Pixel breit und 148 Pixel hoch.](walk-right.png)

   Es enthält sechs Sprites, die die gesamte Laufsequenz ausmachen — jedes ist 102 Pixel breit und 148 Pixel hoch. Um jeden Sprite sauber anzuzeigen, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild aus dem Sprite-Sheet herauszuschneiden und nur diesen Teil anzuzeigen, wie wir es oben mit dem Firefox-Logo gemacht haben. Die X-Koordinate des Ausschnitts muss ein Vielfaches von 102 sein, und die Y-Koordinate immer 0. Die Ausschnittgröße wird immer 102 mal 148 Pixel betragen.

6. Lassen Sie uns eine leere `draw()`-Funktion am Ende des Codes einfügen, bereit, um mit etwas Code gefüllt zu werden:

   ```js
   function draw() {}
   ```

7. Der restliche Code in diesem Abschnitt geht in `draw()`. Fügen Sie zuerst die folgende Zeile hinzu, die das Canvas leert, um es auf das Zeichnen jedes Frames vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width/2), -(height/2)` angeben müssen, da wir die Ursprungsposition `width/2, height/2` weiter oben angegeben haben.

   ```js
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

8. Als Nächstes werden wir unser Bild mit `drawImage` zeichnen — die Version mit 9 Parametern. Fügen Sie das folgende hinzu:

   ```js
   ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);
   ```

   Wie Sie sehen können:
   - Wir geben `image` als das einzubettende Bild an.
   - Parameter 2 und 3 geben die obere linke Ecke des auszuschneidenden Ausschnitts aus dem Quellbild an, wobei der X-Wert als `sprite` multipliziert mit 102 (wo `sprite` die Spritenummer zwischen 0 und 5 ist) und der Y-Wert immer 0 ist.
   - Parameter 4 und 5 definieren die Größe des auszuschneidenden Ausschnitts — 102 Pixel mal 148 Pixel.
   - Parameter 6 und 7 definieren die obere linke Ecke des Kastens, in den der Ausschnitt auf dem Canvas gezeichnet werden soll — der X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichenposition durch Ändern des `posX`-Wertes verändern können.
   - Parameter 8 und 9 geben die Größe des Bildes auf dem Canvas an. Wir möchten, dass es seine ursprüngliche Größe beibehält, also geben wir 102 und 148 als Breite und Höhe an.

9. Ändern Sie nun den `sprite`-Wert nach jedem Zeichnen — nun, nach einigen von ihnen jedenfalls. Fügen Sie den folgenden Block am Ende der Funktion `draw()` hinzu:

   ```js
   if (posX % 13 === 0) {
     if (sprite === 5) {
       sprite = 0;
     } else {
       sprite++;
     }
   }
   ```

   Der gesamte Block wird in `if (posX % 13 === 0) { }` eingeschlossen. Wir verwenden den Modulo-Operator (`%`) (auch als [Restwert-Operator](/de/docs/Web/JavaScript/Reference/Operators/Remainder) bekannt), um zu überprüfen, ob der `posX`-Wert durch 13 exakt ohne Restwert teilbar ist. Wenn ja, wechseln wir zum nächsten Sprite, indem wir `sprite` inkrementieren (zurück zu 0, nachdem wir mit Sprite #5 fertig sind). Im Wesentlichen bedeutet dies, dass wir den Sprite nur bei jedem 13. Frame oder ungefähr 5 Frames pro Sekunde aktualisieren (je nach Möglichkeit ruft `requestAnimationFrame()` uns bis zu 60 Frames pro Sekunde auf). Wir verlangsamen die Bildrate absichtlich, weil wir nur sechs Sprites zur Verfügung haben, und wenn wir eines jeden 60ten einer Sekunde anzeigen, wird sich unser Charakter viel zu schnell bewegen!

   Im äußeren Block verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu überprüfen, ob der Wert von `sprite` bei 5 liegt (dem letzten Sprite, da die Sprite-Nummern von 0 bis 5 laufen). Wenn wir bereits das letzte Sprite anzeigen, setzen wir `sprite` wieder auf 0 zurück; wenn nicht, inkrementieren wir es nur um 1.

10. Als nächstes müssen wir herausfinden, wie der `posX`-Wert bei jedem Frame geändert wird — fügen Sie den folgenden Codeblock direkt unter Ihrem letzten hinzu.

    ```js
    if (posX > width / 2) {
      let newStartPos = -(width / 2 + 102);
      posX = Math.ceil(newStartPos);
      console.log(posX);
    } else {
      posX += 2;
    }
    ```

    Wir verwenden eine weitere `if...else`-Anweisung, um zu überprüfen, ob der Wert von `posX` größer als `width/2` geworden ist, was bedeutet, dass unser Charakter vom rechten Bildschirmrand verschwunden ist. Wenn ja, berechnen wir eine Position, die den Charakter knapp links vom linken Bildschirmrand positionieren würde.

    Wenn unser Charakter den Rand des Bildschirms noch nicht überschritten hat, erhöhen wir `posX` um 2. Dies wird ihn ein wenig nach rechts bewegen, das nächste Mal, wenn wir ihn zeichnen.

11. Schließlich müssen wir die Animationsschleife beibehalten, indem wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()`-Funktion aufrufen:

    ```js
    window.requestAnimationFrame(draw);
    ```

Das war's! Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [7_canvas_walking_animation](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation) verfügbar.

### Eine einfache Zeichenanwendung

Als abschließendes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben (wie Mausbewegungen in diesem Fall) kombiniert werden kann. Wir werden Sie nicht dazu bringen, diese Schritt für Schritt zu erstellen; wir werden nur die interessantesten Teile des Codes erkunden.

Das Beispiel ist auf GitHub als [8_canvas_drawing_app](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app) verfügbar, und Sie können es unten live ausprobieren:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app/index.html", '100%', 600)}}

Schauen wir uns die interessantesten Teile an. Zunächst verfolgen wir die X- und Y-Koordinaten der Maus und ob sie geklickt wird oder nicht mit drei Variablen: `curX`, `curY`, und `pressed`. Wenn die Maus sich bewegt, führen wir eine Funktion aus, die als `onmousemove`-Event-Handler festgelegt ist und die aktuellen X- und Y-Werte erfasst. Wir verwenden auch `onmousedown`- und `onmouseup`-Event-Handler, um den Wert von `pressed` auf `true` zu ändern, wenn die Maustaste gedrückt wird, und wieder zurück auf `false`, wenn sie losgelassen wird.

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

Wenn die Schaltfläche "Canvas löschen" gedrückt wird, führen wir eine einfache Funktion aus, die das gesamte Canvas wieder schwarz macht, auf dieselbe Weise wie wir es bereits gesehen haben:

```js
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal ziemlich einfach — wenn `pressed` auf `true` gesetzt ist, zeichnen wir einen Kreis mit einem Füllstil, der dem Wert im Farbwähler entspricht, und einem Radius, der dem Wert im Bereichseingabefeld entspricht. Wir müssen den Kreis 85 Pixel oberhalb der Stelle zeichnen, von der wir ihn messen, da die vertikale Messung vom oberen Rand des Ansichtsbereichs erfolgt, während wir den Kreis relativ zur Oberseite des Canvas zeichnen, das unter der 85 Pixel hohen Werkzeugleiste beginnt. Wenn wir ihn nur mit `curY` als y-Koordinate zeichnen würden, würde er 85 Pixel tiefer als die Mausposition erscheinen.

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

Alle {{htmlelement("input")}}-Typen werden gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, wird auf einfache Textfelder zurückgegriffen.

## WebGL

Es ist nun an der Zeit, 2D hinter uns zu lassen und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalte werden mithilfe der [WebGL-API](/de/docs/Web/API/WebGL_API) spezifiziert, die eine völlig separate API von der 2D-Caanvas-API ist, obwohl sie beide auf {{htmlelement("canvas")}}-Elementen rendern.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht Ihnen die direkte Kommunikation mit der {{Glossary("GPU", "GPU")}} des Computers. Da das Schreiben von rohem WebGL näher an niedrigeren Programmiersprachen wie C++ als regulärem JavaScript liegt, ist es ziemlich komplex, aber unglaublich leistungsstark.

### Verwendung einer Bibliothek

Aufgrund seiner Komplexität schreiben die meisten Menschen 3D-Grafikcode mithilfe einer Drittanbieter-JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten dieser Bibliotheken funktionieren auf ähnliche Weise und bieten Funktionen, um primitive und benutzerdefinierte Formen zu erstellen, Kameras und Beleuchtung zu positionieren, Oberflächen mit Texturen zu versehen und mehr. Sie erledigen das WebGL für Sie und lassen Sie auf einer höheren Ebene arbeiten.

Ja, die Verwendung einer dieser Bibliotheken bedeutet, eine weitere neue API zu lernen (in diesem Fall eine von Drittanbietern), aber sie sind viel einfacher als das Programmieren von rohem WebGL.

### Unseren Würfel nachbilden

Schauen wir uns ein Beispiel an, wie man etwas mit einer WebGL-Bibliothek erstellt. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der beliebtesten ist. In diesem Tutorial erstellen wir den 3D-drehenden Würfel, den wir zuvor gesehen haben.

1. Um zu beginnen, machen Sie eine lokale Kopie von [threejs-cube/index.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/index.html) in einem neuen Ordner und speichern Sie dann eine Kopie von [metal003.png](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/metal003.png) im gleichen Ordner. Dies ist das Bild, das wir später als Oberflächentextur für den Würfel verwenden werden.
2. Erstellen Sie als nächstes eine neue Datei namens `script.js`, erneut im gleichen Ordner wie zuvor.
3. Als Nächstes müssen Sie die Three.js-Bibliothek installiert haben. Sie können die Umgebungssetupschritte im [Building up a basic demo with Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) folgen, um sicherzustellen, dass Three.js wie erwartet funktioniert.
4. Jetzt, wo wir `three.js` auf unsere Seite angehängt haben, können wir JavaScript schreiben, das es in `script.js` verwendet. Beginnen wir mit der Erstellung einer neuen Szene — fügen Sie das folgende in Ihre `script.js`-Datei ein:

   ```js
   const scene = new THREE.Scene();
   ```

   Der Konstruktor [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene) erstellt eine neue Szene, die die gesamte 3D-Welt repräsentiert, die wir anzeigen möchten.

5. Als Nächstes benötigen wir eine **Kamera**, damit wir die Szene sehen können. In 3D-Bilder-Begriffen stellt die Kamera die Position des Betrachters in der Welt dar. Um eine Kamera zu erstellen, fügen Sie die folgenden Zeilen als nächstes hinzu:

   ```js
   const camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000,
   );
   camera.position.z = 5;
   ```

   Der Konstruktor [`PerspectiveCamera()`](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera) nimmt vier Argumente:
   - Das Sichtfeld: Wie breit der Bereich vor der Kamera ist, der auf dem Bildschirm sichtbar sein soll, in Grad.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Normalerweise ist dies das Verhältnis der Szenenbreite geteilt durch die Szenenhöhe. Die Verwendung eines anderen Werts verzerrt die Szene (was Sie vielleicht möchten, aber normalerweise nicht).
   - Die nahe Ebene: Wie nahe Objekte an der Kamera sein können, bevor wir aufhören, sie auf den Bildschirm zu rendern. Denken Sie daran, wie, wenn Sie Ihre Fingerspitze näher und näher an den Raum zwischen Ihren Augen bewegen, Sie sie irgendwann nicht mehr sehen können.
   - Die ferne Ebene: Wie weit Dinge von der Kamera entfernt sein müssen, bevor sie nicht mehr gerendert werden.

   Wir setzen auch die Position der Kamera auf 5 Entfernungseinheiten der z-Achse, die, wie in CSS, aus dem Bildschirm zu Ihnen, dem Betrachter, ist.

6. Die dritte wesentliche Zutat ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene rendert, wie sie durch eine gegebene Kamera gesehen wird. Wir erstellen eins für jetzt mit dem Konstruktor [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer), auch wenn wir ihn erst später verwenden werden. Fügen Sie die folgenden Zeilen als nächstes hinzu:

   ```js
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile legt die Größe fest, bei der der Renderer die Ansicht der Kamera zeichnet, und die dritte Zeile fügt das {{htmlelement("canvas")}}-Element, das vom Renderer erstellt wurde, in das {{htmlelement("body")}} der Dokumentation ein. Jetzt wird alles, was der Renderer zeichnet, in unserem Fenster angezeigt.

7. Als nächstes möchten wir den Würfel erstellen, den wir auf dem Canvas anzeigen. Fügen Sie den folgenden Code am Ende Ihres JavaScripts hinzu:

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

   Da gibt es etwas mehr zu beachten, lassen Sie uns das in Abschnitten durchgehen:
   - Wir erstellen zunächst eine `cube` globale Variable, damit wir von überall im Code aus auf unseren Würfel zugreifen können.
   - Als nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt und rufen `load()` darauf auf. `load()` nimmt in diesem Fall zwei Parameter an (obwohl es mehr nehmen kann): die Textur, die wir laden möchten (unser PNG), und eine Funktion, die ausgeführt wird, wenn die Textur geladen ist.
   - Innerhalb dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um anzugeben, dass wir einen 2 x 2 Wiederholung des Bildes um alle Seiten des Würfels gewickelt haben möchten. Als nächstes erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt und bringen sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) zusammen, um unseren Würfel zu erstellen. Ein Objekt benötigt typischerweise eine Geometrie (welche Form es hat) und ein Material (wie seine Oberfläche aussieht).
   - Schließlich fügen wir unseren Würfel zur Szene hinzu und rufen dann unsere `draw()`-Funktion auf, um die Animation zu starten.

8. Bevor wir `draw()` definieren, fügen wir ein paar Lichter zur Szene hinzu, um die Dinge etwas zu beleben; fügen Sie die folgenden Blöcke als nächstes hinzu:

   ```js
   const light = new THREE.AmbientLight("rgb(255 255 255)"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("rgb(255 255 255)");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art weiches Licht, das die gesamte Szene ein wenig aufhellt, wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt hingegen ist ein gerichteter Lichtstrahl, mehr wie eine Taschenlampe oder Taschenlampe (oder ein Scheinwerfer, tatsächlich).

9. Schließlich fügen wir unsere `draw()`-Funktion am Ende des Codes hinzu:

   ```js
   function draw() {
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
     renderer.render(scene, camera);

     requestAnimationFrame(draw);
   }
   ```

   Dies ist ziemlich intuitiv; bei jedem Frame drehen wir unseren Würfel leicht auf seinen X- und Y-Achsen, rendern dann die Szene wie von unserer Kamera gesehen und rufen schließlich `requestAnimationFrame()` auf, um das Zeichnen des nächsten Frames zu planen.

Lassen Sie uns noch einmal schnell ansehen, wie das fertige Produkt aussehen sollte:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Sie können [den fertigen Code auf GitHub finden](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-cube).

> [!NOTE]
> In unserem GitHub-Repo können Sie auch ein weiteres interessantes 3D-Würfelbeispiel finden — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dieses verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Computer-Webcam zu wiederzugeben und auf die Seite des Würfels als Textur zu projizieren!

## Zusammenfassung

An diesem Punkt sollten Sie eine nützliche Vorstellung von den Grundlagen der Grafikprogrammierung mit Canvas und WebGL haben und was Sie mit diesen APIs tun können, sowie eine gute Vorstellung davon, wohin Sie für weitere Informationen gehen sollten. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklichen Grundlagen von Canvas behandelt — es gibt noch so viel mehr zu lernen! Die untenstehenden Artikel bringen Sie weiter.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorial-Serie, die viel mehr über das 2D-Canvas erklärt, als hier behandelt wurde. Pflichtlektüre.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Serie, die die Grundlagen der Roh-WebGL-Programmierung lehrt.
- [Ein einfaches Demo mit Three.js aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — ein einfaches Three.js-Tutorial. Wir haben auch gleichwertige Leitfäden für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spieleentwicklung](/de/docs/Games) — die Startseite für die Web-Spieleentwicklung auf MDN. Hier gibt es einige wirklich nützliche Tutorials und Techniken im Zusammenhang mit 2D- und 3D-Canvas — siehe die Menüoptionen "Techniken" und "Tutorials".

## Beispiele

- [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API, um Sound zu erzeugen, und canvas, um eine schöne Visualisierung dafür zu generieren.
- [Voice Change-O-Matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas, um Echtzeitaudiodaten aus der Web Audio API zu visualisieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}
