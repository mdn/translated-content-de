---
title: Zeichnen von Grafiken
slug: Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs", "Learn_web_development/Extensions/Client-side_APIs/Client-side_storage", "Learn_web_development/Extensions/Client-side_APIs")}}

Der Browser enthält einige sehr leistungsstarke Grafikprogrammierungswerkzeuge, von der Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) Sprache bis hin zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [Die Canvas-API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in Canvas und weitere Ressourcen, die es Ihnen ermöglichen, mehr zu lernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und grundlegendes API-Wissen wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Skripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
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

Das Web war ursprünglich nur Text, was sehr langweilig war, also wurden Bilder eingeführt — zuerst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Dies war jedoch immer noch nicht genug. Während Sie [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwenden konnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren), da sie durch Markup dargestellt werden, gab es immer noch keinen Weg, dasselbe für Bitmap-Bilder zu tun, und die verfügbaren Werkzeuge waren ziemlich begrenzt. Das Web hatte immer noch keine Möglichkeit, effektiv Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die normalerweise von niedrigeren Programmiersprachen wie C++ oder Java gehandhabt werden.

Die Situation begann sich zu verbessern, als Browser im Jahr 2004 damit begannen, das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas-API](/de/docs/Web/API/Canvas_API) zu unterstützen. Wie Sie unten sehen werden, bietet Canvas einige nützliche Werkzeuge zur Erstellung von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere in Kombination mit einigen der anderen APIs, die die Webplattform bietet, können jedoch schwierig oder unmöglich zugänglich gemacht werden.

Das folgende Beispiel zeigt eine einfache 2D-Campus-basierte Animation von hüpfenden Bällen, die wir ursprünglich in unserem Modul [Einführung in JavaScript-Objekte](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice) behandelt haben:

{{EmbedGHLiveSample("learning-area/javascript/oojs/bouncing-balls/index-finished.html", '100%', 500)}}

Um 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Dies wurde zu [WebGL](/de/docs/Web/API/WebGL_API), das bei Browseranbietern Anklang fand und um 2009–2010 standardisiert wurde. WebGL ermöglicht Ihnen, echte 3D-Grafiken in Ihrem Webbrowser zu erstellen; das folgende Beispiel zeigt einen einfachen rotierenden WebGL-Würfel:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Dieser Artikel wird sich hauptsächlich auf 2D-Canvas konzentrieren, da roher WebGL-Code sehr komplex ist. Wir werden jedoch zeigen, wie man eine WebGL-Bibliothek verwendet, um auf einfachere Weise eine 3D-Szene zu erstellen, und Sie können ein Tutorial zu rohem WebGL an anderer Stelle finden — siehe [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Aktives Lernen: Einstieg mit einem `<canvas>`

Wenn Sie eine 2D- oder 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-{{htmlelement("canvas")}}-Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Dies ist so einfach wie das Einfügen des Elements auf der Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dies wird ein Canvas auf der Seite mit einer Größe von 320 x 240 Pixeln erstellen.

Sie sollten einige Fallback-Inhalte innerhalb der `<canvas>`-Tags platzieren. Dies sollte den Canvas-Inhalt für Benutzer von Browsern beschreiben, die Canvas nicht unterstützen, oder für Benutzer von Screenreadern.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Das Fallback sollte nützliche alternative Inhalte für den Canvas-Inhalt bereitstellen. Wenn Sie beispielsweise ein ständig aktualisiertes Diagramm von Aktienkursen rendern, könnten die Fallback-Inhalte ein statisches Bild des neuesten Aktienkurses sein, mit `alt`-Text, der beschreibt, was die Preise sind, oder eine Liste von Links zu einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attributs direkt auf dem Canvas-Element selbst hinzu oder beziehen Sie Fallback-Inhalte innerhalb der öffnenden und schließenden `<canvas>`-Tags ein. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte sind es.

### Erstellen und Größenanpassung unseres Canvas

Lassen Sie uns beginnen, indem wir unser eigenes Canvas erstellen, auf dem wir zukünftige Experimente zeichnen können.

1. Machen Sie zuerst eine lokale Kopie des Verzeichnisses [0_canvas_start](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/0_canvas_start). Es enthält drei Dateien:
   - "index.html"
   - "script.js"
   - "style.css"
2. Öffnen Sie "index.html" und fügen Sie den folgenden Code direkt unter dem öffnenden {{htmlelement("body")}}-Tag ein:

   ```html
   <canvas class="myCanvas">
     <p>Add suitable fallback here.</p>
   </canvas>
   ```

   Wir haben dem `<canvas>`-Element eine `class` hinzugefügt, damit es einfacher ist, es auszuwählen, wenn wir mehrere Canvas auf der Seite haben. Wir haben jedoch die `width`- und `height`-Attribute entfernt (Sie könnten sie wieder hinzufügen, wenn Sie möchten, aber wir werden sie im folgenden Abschnitt mit JavaScript einstellen). Canvases ohne explizite Breite und Höhe haben standardmäßig eine Breite von 300 Pixeln und eine Höhe von 150 Pixeln.

3. Öffnen Sie nun "script.js" und fügen Sie die folgenden Zeilen JavaScript hinzu:

   ```js
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz zum Canvas in der `canvas`-Konstanten gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas auf [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Viewport-Breite gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas auf [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Viewport-Höhe gibt). So haben wir jetzt ein Canvas, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden auch sehen, dass wir Zuweisungen mit mehreren Gleichheitszeichen verketten — das ist in JavaScript erlaubt und eine gute Technik, wenn Sie mehrere Variablen alle auf denselben Wert setzen möchten. Wir wollten die Breite und Höhe des Canvas leicht zugänglich in den Variablen `width`/`height` haben, da sie nützliche Werte sind (zum Beispiel, wenn Sie etwas genau zur Hälfte der Canvas-Breite zeichnen möchten).

> [!NOTE]
> Sie sollten die Bildgröße in der Regel mit HTML-Attributen oder DOM-Eigenschaften festlegen, wie oben erklärt. Sie könnten CSS verwenden, aber das Problem ist dann, dass die Größenanpassung erfolgt, nachdem das Canvas gerendert wurde, und genau wie jedes andere Bild (das gerenderte Canvas ist nur ein Bild) könnte das Bild verpixelt/verzerrt werden.

### Abrufen des Canvas-Kontextes und endgültige Einrichtung

Bevor wir unsere Canvas-Vorlage als abgeschlossen betrachten können, müssen wir noch eine letzte Sache tun. Um auf das Canvas zeichnen zu können, benötigen wir eine spezielle Referenz auf den Zeichenbereich, die als Kontext bezeichnet wird. Dies geschieht mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die für den Basisgebrauch einen einzelnen String als Parameter annimmt, der den Typ des Kontexts angibt, den Sie abrufen möchten.

In diesem Fall möchten wir ein 2D-Canvas, also fügen Sie die folgende JavaScript-Zeile unter den anderen in "script.js" hinzu:

```js
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextwerte, die Sie wählen könnten, sind `webgl` für WebGL, `webgl2` für WebGL 2 usw., aber diese werden wir in diesem Artikel nicht benötigen.

Damit ist unser Canvas jetzt bereit für das Zeichnen! Die Variable `ctx` enthält nun ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt und alle Zeichenoperationen auf dem Canvas beinhalten das Manipulieren dieses Objekts.

Lassen Sie uns noch eine letzte Sache tun, bevor wir fortfahren. Wir werden den Hintergrund des Canvas schwarz färben, um Ihnen einen ersten Eindruck von der Canvas-API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

```js
ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mit der [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)-Eigenschaft des Canvas (diese nimmt [Farbwerte](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) wie CSS-Eigenschaften an) und zeichnen dann ein Rechteck, das den gesamten Bereich des Canvas mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) abdeckt (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, die Sie für das Rechteck haben wollen — wir haben Ihnen gesagt, dass die Variablen `width` und `height` nützlich sein würden)!

Okay, unsere Vorlage ist fertig und es ist Zeit, weiterzumachen.

## 2D-Canvas-Grundlagen

Wie bereits erwähnt, werden alle Zeichenoperationen durch Manipulation eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts (in unserem Fall `ctx`) durchgeführt. Viele Operationen müssen mit Koordinaten versorgt werden, um genau festzulegen, wo etwas gezeichnet werden soll — die obere linke Ecke des Canvas ist Punkt (0, 0), die horizontale (x) Achse verläuft von links nach rechts und die vertikale (y) Achse von oben nach unten.

![Ein Rastergraphenpapier mit kleinen Quadraten, die seine Fläche bedecken, mit einem stahlblauen Quadrat in der Mitte. Die obere linke Ecke des Canvas ist Punkt (0, 0) der Canvas-x- und y-Achse. Die horizontale (x) Achse verläuft von links nach rechts und kennzeichnet die Breite, und die vertikale (y) Achse verläuft von oben nach unten und kennzeichnet die Höhe. Die obere linke Ecke des blauen Quadrats ist als Abstand von x-Einheiten von der y-Achse und y-Einheiten von der x-Achse beschriftet.](canvas_default_grid.png)

Das Zeichnen von Formen erfolgt im Allgemeinen mit dem Rechtecksprimitive oder durch das Verfolgen einer Linie entlang eines bestimmten Pfades und anschließendes Ausfüllen der Form. Unten zeigen wir, wie man beides macht.

### Einfache Rechtecke

Lassen Sie uns mit einigen einfachen Rechtecken beginnen.

1. Nehmen Sie zunächst eine Kopie Ihrer neu erstellten Canvas-Vorlage (oder machen Sie eine lokale Kopie des Verzeichnisses [1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template), wenn Sie die obigen Schritte nicht durchgeführt haben).
2. Fügen Sie als nächstes die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 0)";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie speichern und aktualisieren, sollten Sie sehen, dass ein rotes Rechteck auf Ihrem Canvas erscheint. Seine obere linke Ecke ist 50 Pixel vom oberen und linken Rand des Canvas entfernt (wie durch die ersten beiden Parameter definiert) und es ist 100 Pixel breit und 150 Pixel hoch (wie durch die dritten und vierten Parameter definiert).

3. Fügen Sie noch ein Rechteck hinzu — diesmal ein grünes. Fügen Sie das folgende am Ende Ihres JavaScripts hinzu:

   ```js
   ctx.fillStyle = "rgb(0 255 0)";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren, und Sie sehen Ihr neues Rechteck. Dies bringt einen wichtigen Punkt auf: Grafische Operationen wie das Zeichnen von Rechtecken, Linien und so weiter werden in der Reihenfolge ausgeführt, in der sie auftreten. Denken Sie daran wie das Streichen einer Wand, bei der jede Farbschicht die darunterliegende überlappt und möglicherweise sogar verdeckt. Sie können nichts ändern, also müssen Sie sorgfältig über die Reihenfolge nachdenken, in der Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, zum Beispiel mit `rgb()`. Der "Alphakanal" definiert den Grad der Transparenz der Farbe. Je höher der Wert, desto mehr wird es das, was dahinter liegt, verdecken. Fügen Sie das folgende zu Ihrem Code hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie jetzt, einige weitere Rechtecke Ihrer Wahl zu zeichnen; viel Spaß!

### Striche und Linienbreiten

Bisher haben wir uns das Zeichnen von gefüllten Rechtecken angesehen, aber Sie können auch Rechtecke zeichnen, die nur Umrisse sind (in der Grafikdesign als **Striche** bezeichnet). Um die gewünschte Farbe für Ihren Strich festzulegen, verwenden Sie die [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)-Eigenschaft; das Zeichnen eines Strichrechtecks erfolgt mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Fügen Sie das folgende dem vorherigen Beispiel hinzu, wieder unter den vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "rgb(255 255 255)";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Strichen beträgt 1 Pixel; Sie können den Wert der [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)-Eigenschaft ändern, um dies anzupassen (sie nimmt eine Zahl, die die Anzahl der Pixel darstellt, die der Strich breit ist). Fügen Sie die folgende Zeile zwischen den vorherigen zwei Zeilen hinzu:

   ```js
   ctx.lineWidth = 5;
   ```

Jetzt sollten Sie sehen, dass Ihr weißer Umriss viel dicker geworden ist! Das war's für den Moment. An diesem Punkt sollte Ihr Beispiel so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles/index.html", '100%', 250)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [2_canvas_rectangles](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles) verfügbar.

### Zeichnen von Pfaden

Wenn Sie etwas komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Grundsätzlich bedeutet das, dass Sie Code schreiben, um genau anzugeben, welchen Pfad der Stift auf Ihrem Canvas verfolgen soll, um die Form zu zeichnen, die Sie zeichnen möchten. Canvas enthält Funktionen zum Zeichnen von geraden Linien, Kreisen, Bézierkurven und mehr.

Lassen Sie uns diesen Abschnitt beginnen, indem wir eine neue Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) erstellen, in der wir das neue Beispiel zeichnen können.

Wir werden einige gemeinsame Methoden und Eigenschaften in allen folgenden Abschnitten verwenden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — Beginnt das Zeichnen eines Pfades an dem Punkt, an dem sich der Stift derzeit auf dem Canvas befindet. Auf einem neuen Canvas beginnt der Stift an (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — Bewegt den Stift zu einem anderen Punkt auf dem Canvas, ohne die Linie aufzuzeichnen oder zu verfolgen; der Stift "springt" zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — Zeichnet eine gefüllte Form, indem der bisher gezeichnete Pfad ausgefüllt wird.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — Zeichnet eine Umrissform, indem ein Strich entlang des bisher gezeichneten Pfades gezeichnet wird.
- Sie können auch Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` mit Pfaden sowie Rechtecken verwenden.

Ein typischer, einfacher Pfadzeichenvorgang würde etwa so aussehen:

```js
ctx.fillStyle = "rgb(255 0 0)";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Zeichnen von Linien

Lassen Sie uns ein gleichseitiges Dreieck auf dem Canvas zeichnen.

1. Fügen Sie zuerst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Diese konvertiert Gradwerte in Bogenmaß, was nützlich ist, da wannimmer Sie einen Winkelwert in JavaScript angeben müssen, dieser fast immer in Bogenmaß sein wird, aber Menschen normalerweise in Grad denken.

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Beginnen Sie als nächstes Ihren Pfad, indem Sie das folgende unter Ihrer vorherigen Ergänzung hinzufügen; hier setzen wir eine Farbe für unser Dreieck, beginnen einen Pfad zu zeichnen und bewegen dann den Stift auf (50, 50), ohne etwas zu zeichnen. Dort werden wir unser Dreieck zeichnen.

   ```js
   ctx.fillStyle = "rgb(255 0 0)";
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

   Gehen wir das der Reihe nach durch:

   Zuerst zeichnen wir eine Linie auf (150, 50) — unser Pfad verläuft jetzt 100 Pixel nach rechts entlang der x-Achse.

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks mithilfe einfacher Trigonometrie. Grundsätzlich zeichnen wir das Dreieck nach unten zeigend. Die Winkel in einem gleichseitigen Dreieck betragen immer 60 Grad; um die Höhe zu berechnen, können wir es in der Mitte in zwei rechtwinklige Dreiecke aufteilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben. Was die Seiten betrifft:

   - Die längste Seite wird **Hypotenuse** genannt.
   - Die Seite neben dem 60-Grad-Winkel wird **Angesenkter** genannt — wir wissen, dass sie 50 Pixel beträgt, da es die Hälfte der Linie ist, die wir gerade gezeichnet haben.
   - Die Seite gegenüber dem 60-Grad-Winkel wird **Gegenüberliegender** genannt, was die Höhe des Dreiecks ist, die wir berechnen möchten.

   ![Ein gleichseitiges Dreieck, das nach unten zeigt, mit beschrifteten Winkeln und Seiten. Die horizontale Linie oben ist als 'angrenzend' beschriftet. Eine senkrechte gestrichelte Linie, von der Mitte der angrenzenden Linie, beschriftet 'gegenüberliegend', teilt das Dreieck und bildet zwei gleiche rechtwinklige Dreiecke. Die rechte Seite des Dreiecks ist als Hypotenuse beschriftet, da sie die Hypotenuse des rechtwinkligen Dreiecks bildet, das durch die Linie 'gegenüberliegend' entsteht. Während alle drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des rechtwinkligen Dreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass der angrenzende die Tangente des Winkels multipliziert mit dem gegenüberliegenden gleich ist, daher ergeben sich `50 * Math.tan(degToRad(60))`. Wir verwenden unsere `degToRad()`-Funktion, um 60 Grad in Bogenmaß zu konvertieren, da {{jsxref("Math.tan()")}} einen Eingabewert in Bogenmaß erwartet.

4. Mit der berechneten Höhe ziehen wir eine weitere Linie zu `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss genau zwischen den vorherigen beiden X-Werten liegen, die wir gesetzt haben. Der Y-Wert hingegen muss 50 plus der Höhe des Dreiecks sein, da wir wissen, dass die Spitze des Dreiecks 50 Pixel vom oberen Teil des Canvas entfernt ist.
5. Die nächste Linie zieht eine Linie zurück zum Startpunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form auszufüllen.

#### Zeichnen von Kreisen

Schauen wir uns nun das Zeichnen eines Kreises auf einem Canvas an. Dies wird mit der Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) erreicht, die den gesamten oder einen Teil eines Kreises an einem bestimmten Punkt zeichnet.

1. Fügen wir einen Bogen zu unserem Canvas hinzu — fügen Sie den folgenden am Ende Ihres Codes hinzu:

   ```js
   ctx.fillStyle = "rgb(0 0 255)";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` nimmt sechs Parameter an. Die ersten beiden spezifizieren die Position des Mittelpunkts des Bogens (X und Y, jeweils). Der dritte ist der Radius des Kreises, der vierte und fünfte sind die Start- und Endwinkel, bei denen der Kreis gezeichnet werden soll (indem wir 0 und 360 Grad angeben, erhalten wir einen vollständigen Kreis), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn (entgegen dem Uhrzeigersinn) oder im Uhrzeigersinn gezeichnet werden soll (`false` ist im Uhrzeigersinn).

   > [!NOTE]
   > 0 Grad liegen horizontal nach rechts.

2. Versuchen wir, einen weiteren Bogen hinzuzufügen:

   ```js
   ctx.fillStyle = "yellow";
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   Das Muster hier ist sehr ähnlich, jedoch mit zwei Unterschieden:

   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird, was bedeutet, dass selbst wenn der Bogen von -45 Grad bis 45 Grad angegeben ist, wir den Bogen um die 270 Grad außerhalb dieses Abschnitts herum zeichnen. Wenn Sie `true` in `false` ändern und dann den Code erneut ausführen würden, würde nur der 90-Grad-Sektor des Kreises gezeichnet.
   - Bevor wir `fill()` aufrufen, zeichnen wir eine Linie zum Zentrum des Kreises. Dies führt dazu, dass die "Pac-Man"-ähnlichen Ausschnitt erzeugt wird. Wenn Sie diese Linie entfernt (probieren Sie es aus!) und den Code dann erneut ausführen, erhalten Sie nur einen abgeschnittenen Rand des Kreises zwischen dem Start- und Endpunkt des Bogens. Dies illustriert einen weiteren wichtigen Punkt des Canvas — wenn Sie versuchen, einen unvollständigen Pfad (d.h. einen, der nicht geschlossen ist) auszufüllen, füllt der Browser eine gerade Linie zwischen dem Start- und Endpunkt ein und füllt sie dann aus.

Das war's für den Moment; Ihr abschließendes Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/3_canvas_paths/index.html", '100%', 200)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [3_canvas_paths](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/3_canvas_paths) verfügbar.

> [!NOTE]
> Um mehr über fortgeschrittene Pfadzeichnungsfunktionen wie Bézier-Kurven zu erfahren, schauen Sie sich unser Tutorial [Zeichnen von Formen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) an.

### Text

Canvas hat auch Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz erkunden. Erstellen Sie zunächst eine weitere neue Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)), in der wir das neue Beispiel zeichnen.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnet als Umriss (Strich) gezeichneten Text.

Beide benötigen in der Grundnutzung drei Eigenschaften: den zu zeichnenden Text-String und die X- und Y-Koordinaten des Punktes, an dem der Text begonnen werden soll. Dies ergibt sich als **linke untere** Ecke der **Textbox** (wörtlich, der Kasten, der den von Ihnen gezeichneten Text umgibt), was Sie verwirren könnte, da andere Zeichenoperationen dazu neigen, von der oberen linken Ecke aus zu beginnen — behalten Sie das im Hinterkopf.

Es gibt auch eine Reihe von Eigenschaften, um das Textrendering zu steuern, wie [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), die es Ihnen ermöglicht, die Schriftfamilie, Größe usw. anzugeben. Es nimmt als Wert dieselbe Syntax wie die CSS-{{cssxref("font")}}-Eigenschaft an.

Canvas-Inhalte sind für Screenreader nicht zugänglich. Text, der auf das Canvas gemalt wird, ist im DOM nicht verfügbar, muss jedoch zugänglich gemacht werden. In diesem Beispiel schließen wir den Text als Wert für `aria-label` ein.

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

Hier zeichnen wir zwei Textzeilen, eine gefüllt und die andere umrandet. Das abschließende Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/4_canvas_text/index.html", '100%', 180)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [4_canvas_text](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/4_canvas_text) verfügbar.

Probieren Sie es aus und sehen Sie, was Sie sich einfallen lassen! Weitere Informationen zu den Optionen zur Verfügung für Canvas-Text finden Sie unter [Der Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Zeichnen von Bildern auf das Canvas

Es ist möglich, externe Bilder auf Ihr Canvas zu rendern. Diese können einfache Bilder, Frames aus Videos oder der Inhalt anderer Canvases sein. Für den Moment werden wir uns nur den Fall ansehen, einige einfache Bilder auf unserem Canvas zu verwenden.

1. Wie zuvor, erstellen Sie eine weitere neue Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)), in der wir das neue Beispiel zeichnen.

   Bilder werden mit der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) auf das Canvas gezeichnet. Die einfachste Version benötigt drei Parameter — eine Referenz zum Bild, das Sie rendern möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Lassen Sie uns damit beginnen, eine Bildquelle zu erhalten, die wir in unserem Canvas einbetten können. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

   ```js
   const image = new Image();
   image.src = "firefox.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt mit dem [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor. Das zurückgegebene Objekt ist vom selben Typ wie das, welches zurückgegeben wird, wenn Sie eine Referenz zu einem bestehenden {{htmlelement("img")}}-Element erhalten. Wir setzen dann sein [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut gleich unserem Firefox-Logo-Bild. Zu diesem Zeitpunkt beginnt der Browser, das Bild zu laden.

3. Wir könnten jetzt versuchen, das Bild mit `drawImage()` einzubetten, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, sonst schlägt der Code fehl. Dies können wir mit dem `load`-Ereignis erreichen, das nur dann ausgelöst wird, wenn das Bild vollständig geladen wurde. Fügen Sie den folgenden Block unter dem vorherigen hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie das Bild im Canvas eingebettet sehen.

4. Aber es gibt noch mehr! Was, wenn wir nur einen Teil des Bildes anzeigen oder es skalieren möchten? Beides können wir mit der komplexeren Version von `drawImage()` erreichen. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile wie folgt:

   ```js
   ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
   ```

   - Der erste Parameter ist die Bildreferenz, wie zuvor.
   - Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, bezogen auf die obere linke Ecke des Bildes selbst. Nichts links oder über diesen Parametern wird gezeichnet.
   - Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem ursprünglichen Bild ausschneiden möchten, das wir geladen haben.
   - Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des auszuschneidenden Bereichs des Bildes zeichnen möchten, bezogen auf die obere linke Ecke des Canvas.
   - Parameter 8 und 9 definieren die Breite und Höhe, um den auszuschneidenden Bereich des Bildes zu zeichnen. In diesem Fall haben wir dieselben Dimensionen wie der ursprüngliche Abschnitt angegeben, aber Sie könnten es skalieren, indem Sie andere Werte angeben.

5. Wenn das Bild sinnvoll aktualisiert wird, muss auch die {{Glossary("accessible_description", "zugängliche Beschreibung")}} aktualisiert werden.

   ```js
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das abschließende Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/5_canvas_images/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [5_canvas_images](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/5_canvas_images) verfügbar.

## Schleifen und Animationen

Wir haben bisher einige sehr einfache Anwendungen von 2D-Canvas behandelt, aber wirklich, Sie werden die volle Leistungsfähigkeit von Canvas nur erleben, wenn Sie es in irgendeiner Weise aktualisieren oder animieren. Schließlich bietet Canvas skriptbare Bilder! Wenn Sie nichts ändern wollen, könnten Sie ebenso statische Bilder verwenden und sich all die Arbeit sparen.

### Eine Schleife erstellen

Mit Schleifen auf dem Canvas zu spielen, macht richtig Spaß — Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife (oder eines anderen Schleifentyps) ausführen wie jeden anderen JavaScript-Code.

Lassen Sie uns ein Beispiel erstellen.

1. Erstellen Sie eine weitere neue Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie sie in Ihrem Code-Editor.
2. Fügen Sie folgende Zeile am Ende Ihres JavaScripts hinzu. Diese enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

   Dadurch wird der Koordinatenursprung (0, 0) zur Mitte des Canvas verschoben, anstatt sich in der oberen linken Ecke zu befinden. Dies ist in vielen Situationen sehr nützlich, wie in diesem Fall, wo wir unser Design relativ zur Mitte des Canvas zeichnen möchten.

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

   Hier implementieren wir dieselbe `degToRad()`-Funktion, die wir im Dreieckbeispiel oben gesehen haben, eine `rand()`-Funktion, die eine Zufallszahl zwischen gegebenen unteren und oberen Grenzen zurückgibt, `length`- und `moveOffset`-Variablen (über die wir später mehr erfahren werden), und eine leere `for`-Schleife.

4. Die Idee ist, dass wir innerhalb der `for`-Schleife etwas auf dem Canvas zeichnen und es bei jedem Durchgang iterieren, damit wir etwas Interessantes erstellen können. Fügen Sie den folgenden Code innerhalb Ihrer `for`-Schleife hinzu:

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

   - Wir setzen das `fillStyle` auf einen Hauch leicht transparenten Violetts, der sich jedes Mal ändert basierend auf dem Wert von `length`. Wie Sie später sehen werden, wird die Länge jedes Mal kleiner, wenn die Schleife läuft, sodass der Effekt hier ist, dass die Farbe mit jedem gezeichneten Dreieck heller wird.
   - Wir beginnen den Pfad.
   - Wir bewegen den Stift zu einer Koordinate von `(moveOffset, moveOffset)`; Diese Variable definiert, wie weit wir uns jedes Mal bewegen möchten, wenn wir ein neues Dreieck zeichnen.
   - Wir ziehen eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Dies zeichnet eine Linie der Länge `length`, die parallel zur X-Achse verläuft.
   - Wir berechnen die Höhe des Dreiecks, wie zuvor.
   - Wir zeichnen eine Linie zur nach unten zeigenden Ecke des Dreiecks und dann eine Linie zurück zum Anfang des Dreiecks.
   - Wir rufen `fill()` auf, um das Dreieck auszufüllen.
   - Wir aktualisieren die Variablen, die die Sequenz der Dreiecke beschreiben, damit wir bereit sein können, das nächste zu zeichnen. Wir reduzieren den Wert von `length` um 1, sodass die Dreiecke jedes Mal kleiner werden; erhöhen `moveOffset` um einen kleinen Betrag, sodass jedes aufeinander folgende Dreieck etwas weiter entfernt ist, und verwenden eine weitere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), die es uns ermöglicht, das gesamte Canvas zu drehen! Wir drehen es um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das war's! Das abschließende Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop/index.html", '100%', 550)}}

An diesem Punkt empfehlen wir Ihnen, mit dem Beispiel zu spielen und es zu Ihrem eigenen zu machen! Zum Beispiel:

- Zeichnen Sie Rechtecke oder Bögen anstelle von Dreiecken oder betten Sie sogar Bilder ein.
- Spielen Sie mit den `length`- und `moveOffset`-Werten.
- Führen Sie einige Zufallszahlen mit der `rand()`-Funktion ein, die wir oben eingefügt haben, aber nicht verwendet haben.

> [!NOTE]
> Der fertige Code ist auf GitHub als [6_canvas_for_loop](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop) verfügbar.

### Animationen

Das Schleifenbeispiel, das wir oben gebaut haben, war lustig, aber wirklich brauchen Sie eine konstante Schleife, die weiterläuft und läuft für ernsthafte Canvas-Anwendungen (wie Spiele und Echtzeit-Visualisierungen). Wenn Sie Ihr Canvas als ein Film betrachten, möchten Sie wirklich, dass das Display auf jedem Frame aktualisiert wird, um die aktualisierte Ansicht anzuzeigen, mit einer idealen Bildwiederholrate von 60 Frames pro Sekunde, damit Bewegung für das menschliche Auge schön und flüssig erscheint.

Es gibt einige JavaScript-Funktionen, die Ihnen ermöglichen, Funktionen mehrmals pro Sekunde wiederholt aufzurufen, die beste für unsere Zwecke hier ist [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Es nimmt einen Parameter — den Namen der Funktion, die Sie auf jedem Frame ausführen möchten. Das nächste Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion die neue Aktualisierung für Ihre Animation zeichnet und dann `requestAnimationFrame()` kurz vor dem Ende der Funktion erneut aufruft, wird die Animationsschleife weiterhin ausgeführt. Die Schleife endet, wenn Sie aufhören, `requestAnimationFrame()` aufzurufen oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) aufrufen, nachdem Sie `requestAnimationFrame()` aufgerufen haben, aber bevor der Frame aufgerufen wird.

> [!NOTE]
> Es ist eine gute Praxis, `cancelAnimationFrame()` von Ihrem Hauptcode aus aufzurufen, wenn Sie mit der Animation fertig sind, um sicherzustellen, dass keine Updates mehr durchgeführt werden müssen.

Der Browser kümmert sich um komplizierte Details wie die Animation mit einer konsistenten Geschwindigkeit laufen zu lassen und keine Ressourcen zu verschwenden, um Dinge zu animieren, die nicht sichtbar sind.

Um zu sehen, wie das funktioniert, schauen wir noch einmal kurz auf unser Beispiel der hüpfenden Bälle ([sehen Sie es live](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html), und auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/oojs/bouncing-balls)). Der Code für die Schleife, die alles in Bewegung hält, sieht so aus:

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

Wir führen die `loop()`-Funktion einmal am Ende des Codes aus, um den Zyklus zu starten, indem wir das erste Animationsbild zeichnen; Die `loop()`-Funktion übernimmt dann die Verantwortung, `requestAnimationFrame(loop)` aufzurufen, um den nächsten Frame der Animation immer wieder auszuführen.

Beachten Sie, dass wir in jedem Frame den gesamten Canvas leeren und alles neu zeichnen. Für jeden vorhandenen Ball zeichnen wir ihn, aktualisieren seine Position und überprüfen, ob er mit anderen Bällen kollidiert. Sobald Sie eine Grafik auf einem Canvas gezeichnet haben, gibt es keine Möglichkeit, diese Grafik individuell zu manipulieren, wie Sie es mit DOM-Elementen tun können. Sie können jeden Ball nicht auf dem Canvas verschieben, weil sie, sobald er gezeichnet ist, Teil des Canvas ist und kein einzelnes zugängliches Element oder Objekt. Stattdessen müssen Sie löschen und neu zeichnen, entweder indem Sie den gesamten Frame löschen und alles neu zeichnen oder indem Sie Code haben, der genau weiß, welche Teile gelöscht werden müssen und nur das minimum notwendige vom Canvas löschen und neu zeichnen.

Optimierung der Animation von Grafiken ist eine ganze Programmier-Spezialität, mit vielen cleveren Techniken, die zur Verfügung stehen. Diese sind jedoch über das hinausgehend, was wir für unser Beispiel benötigen!

Im Allgemeinen umfasst der Prozess einer Canvas-Animation die folgenden Schritte:

1. Löschen des Canvas-Inhalts (z.B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Speichern des Zustands (falls erforderlich) mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) — dies wird benötigt, wenn Sie Einstellungen speichern möchten, die Sie auf dem Canvas aktualisiert haben, bevor Sie fortfahren, was für fortgeschrittenere Anwendungen nützlich ist.
3. Zeichnen der Grafiken, die Sie animieren möchten.
4. Wiederherstellen der gespeicherten Einstellungen aus Schritt 2 mit [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
5. Aufruf von `requestAnimationFrame()`, um das Zeichnen des nächsten Animationsbildes zu planen.

> [!NOTE]
> Wir werden `save()` und `restore()` hier nicht behandeln, aber sie werden in unserem [Transformations](/de/docs/Web/API/Canvas_API/Tutorial/Transformations) Tutorial (und den darauf folgenden) gut erklärt.

### Eine einfache Charakteranimation

Lassen Sie uns nun unsere eigene einfache Animation erstellen — wir werden einen Charakter aus einem gewissen ziemlich tollen Retro-Computerspiel über den Bildschirm laufen lassen.

1. Erstellen Sie eine weitere neue Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie sie in Ihrem Code-Editor.

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

4. Lassen Sie uns nun ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt erstellen, sein [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf das Bild setzen, das wir laden möchten, und einen `onload`-Ereignishandler hinzufügen, der die `draw()`-Funktion aufruft, wenn das Bild geladen ist:

   ```js
   const image = new Image();
   image.src = "walk-right.png";
   image.onload = draw;
   ```

5. Jetzt fügen wir einige Variablen hinzu, um den Ort zu verfolgen, an dem die Sprite auf dem Bildschirm gezeichnet werden soll, und die Nummer des Sprites, das wir anzeigen wollen.

   ```js
   let sprite = 0;
   let posX = 0;
   ```

   Lassen Sie uns das Spritesheet-Bild erklären (das wir respektvoll von Mike Thomas' [Walking cycle using CSS animation](https://codepen.io/mikethomas/pen/kQjKLW) CodePen ausgeliehen haben). Das Bild sieht so aus:

   ![Ein Sprite-Sheet mit sechs Sprite-Bildern eines pixeligen Charakters, der aus seiner rechten Seite wie eine laufende Person aussieht und in verschiedenen Instanzen eines einzigen Schritts vorwärts geht. Der Charakter trägt ein weißes Hemd mit himmelblauen Knöpfen, schwarze Hosen und schwarze Schuhe. Jedes Sprite ist 102 Pixel breit und 148 Pixel hoch.](walk-right.png)

   Es enthält sechs Sprites, die die gesamte Laufsequenz bilden – jede ist 102 Pixel breit und 148 Pixel hoch. Um jede Sprite sauber anzuzeigen, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild aus dem Spritesheet auszuschneiden und nur diesen Teil anzuzeigen, ähnlich wie wir das oben mit dem Firefox-Logo gemacht haben. Die X-Koordinate des Abschnitts muss ein Vielfaches von 102 sein, und die Y-Koordinate wird immer 0 sein. Die Abschnittsgröße wird immer 102 x 148 Pixel sein.

6. Nun lassen Sie uns eine leere `draw()`-Funktion am Ende des Codes einfügen, bereit, mit etwas Code gefüllt zu werden:

   ```js
   function draw() {}
   ```

7. Der Rest des Codes in diesem Abschnitt kommt in die `draw()`-Funktion. Fügen Sie zunächst die folgende Zeile hinzu, die das Canvas löscht, um jedes Frame vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width/2), -(height/2)` spezifizieren müssen, weil wir zuvor die Ursprungsposition als `width/2, height/2` festgelegt haben.

   ```js
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

8. Als nächstes werden wir unser Bild mit `drawImage` zeichnen — die Version mit 9 Parametern. Fügen Sie das Folgende hinzu:

   ```js
   ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);
   ```

   Wie Sie sehen können:

   - Wir spezifizieren `image` als das Bild, das eingebettet werden soll.
   - Parameter 2 und 3 spezifizieren die obere linke Ecke des auszuschneidenden Bereichs aus dem Quellbild, wobei der X-Wert als `sprite` multipliziert mit 102 (wo `sprite` die Spritenummer zwischen 0 und 5 ist) und der Y-Wert immer 0 ist.
   - Parameter 4 und 5 spezifizieren die Größe des auszuschneidenden Bereichs — 102 Pixel x 148 Pixel.
   - Parameter 6 und 7 spezifizieren die obere linke Ecke des Kastens, in den der ausgeschnittene Bereich des Bildes auf das Canvas gezeichnet werden soll — die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichnungsposition durch Ändern des `posX`-Werts ändern können.
   - Parameter 8 und 9 spezifizieren die Größe des Bildes auf dem Canvas. Wir möchten es in seiner originalen Größe behalten, daher geben wir 102 und 148 als Breite und Höhe an.

9. Jetzt werden wir den `sprite`-Wert nach jedem Zeichnen ändern — na ja, nach einigen jedenfalls. Fügen Sie den folgenden Block am Ende der `draw()`-Funktion hinzu:

   ```js
   if (posX % 13 === 0) {
     if (sprite === 5) {
       sprite = 0;
     } else {
       sprite++;
     }
   }
   ```

   Wir umschließen den gesamten Block in `if (posX % 13 === 0) { }`. Wir verwenden den Modulo-Operator (`%`) (auch als [Remainder-Operator](/de/docs/Web/JavaScript/Reference/Operators/Remainder) bekannt), um zu überprüfen, ob der `posX`-Wert genau durch 13 teilbar ist, ohne einen Rest. Wenn ja, gehen wir weiter zum nächsten Sprite, indem wir `sprite` inkrementieren (wir wickeln es auf 0, nachdem wir den Sprite #5 fertig haben). Dies bedeutet effektiv, dass wir den Sprite nur bei jedem 13. Frame aktualisieren, oder etwa 5 Frames pro Sekunde (`requestAnimationFrame()` ruft uns auf bis zu 60 Frames pro Sekunde auf, falls möglich). Wir verlangsamen die Bildrate absichtlich, weil wir nur sechs Sprites zur Verfügung haben und wenn wir eins in jedem 60. einer Sekunde anzeigen, unser Character sich viel zu schnell bewegen wird!

   In dem äußeren Block verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu sehen, ob der `sprite`-Wert auf 5 ist (das letzte Sprite, da die Spritenummern von 0 bis 5 laufen). Wenn wir bereits das letzte Sprite anzeigen, setzen wir `sprite` wieder auf 0; Wenn nicht, inkrementieren wir es um 1.

10. Als nächstes müssen wir herausfinden, wie wir den `posX`-Wert in jedem Frame ändern können — fügen Sie den folgenden Codeblock direkt unter Ihrem letzten hinzu.

    ```js
    if (posX > width / 2) {
      let newStartPos = -(width / 2 + 102);
      posX = Math.ceil(newStartPos);
      console.log(posX);
    } else {
      posX += 2;
    }
    ```

    Wir verwenden eine weitere `if...else`-Anweisung, um zu überprüfen, ob der Wert von `posX` größer ist als `width/2`, was bedeutet, dass unser Charakter vom rechten Bildschirmrand gelaufen ist. Wenn ja, berechnen wir eine Position, die den Charakter knapp links vom linken Rand des Bildschirms setzen würde.

    Wenn unser Charakter den Bildschirmrand noch nicht verlassen hat, inkrementieren wir `posX` um 2. Dadurch wird er bei der nächsten Zeichnung ein wenig nach rechts verschoben.

11. Schließlich müssen wir die Animationsschleife durch Aufruf von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()`-Funktion fortsetzen:

    ```js
    window.requestAnimationFrame(draw);
    ```

Das war's! Das abschließende Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [7_canvas_walking_animation](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation) verfügbar.

### Eine einfache Zeichnungsanwendung

Als letztes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichnungsanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben (wie Mausbewegungen, in diesem Fall) kombiniert werden kann. Wir werden Sie nicht durch ein Guide führen und es aufbauen lassen; Wir werden nur die interessantesten Teile des Codes untersuchen.

Das Beispiel kann auf GitHub als [8_canvas_drawing_app](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app) gefunden werden und Sie können es live unten spielen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app/index.html", '100%', 600)}}

Lassen Sie uns die interessantesten Teile ansehen. Zuerst halten wir die X- und Y-Koordinaten der Maus und ob sie angeklickt wird oder nicht mit drei Variablen: `curX`, `curY` und `pressed` fest. Wenn sich die Maus bewegt, lösen wir eine Funktion aus, die als `onmousemove`-Ereignishandler gesetzt ist, die die aktuellen X- und Y-Werte erfasst. Wir verwenden auch `onmousedown`- und `onmouseup`-Ereignishandler, um den Wert von `pressed` auf `true` zu ändern, wenn die Maustaste gedrückt wird und bei der Freigabe wieder auf `false` zurückzusetzen.

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

Wenn die Schaltfläche "Canvas löschen" gedrückt wird, führen wir eine einfache Funktion aus, die das gesamte Canvas auf schwarz zurücksetzt, genauso wie wir es zuvor gesehen haben:

```js
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichnungsschleife ist diesmal ziemlich einfach — wenn `pressed` `true` ist, zeichnen wir einen Kreis mit einem Füllstil entsprechend dem Wert im Farbwähler und einem Radius entsprechend dem in der Range-Eingabe eingestellten Wert. Wir müssen den Kreis 85 Pixel oberhalb des gemessenen Punktes zeichnen, weil die vertikale Messung vom oberen Rand des Ansichtsfensters genommen wird, aber wir den Kreis relativ zur Oberseite des Canvas zeichnen, das unter der 85 Pixel hohen Werkzeugleiste beginnt. Wenn wir es nur mit `curY` als y-Koordinate zeichnen würden, würde es 85 Pixel unterhalb der Mausposition erscheinen.

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

Alle {{htmlelement("input")}}-Typen sind gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, fällt er auf einfache Textfelder zurück.

## WebGL

Es ist jetzt an der Zeit, 2D hinter sich zu lassen und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalte werden mit der [WebGL-API](/de/docs/Web/API/WebGL_API) spezifiziert, die eine völlig separate API von der 2D-Canvas-API ist, obwohl beide auf {{htmlelement("canvas")}}-Elemente rendern.

WebGL basiert auf {{Glossary("OpenGL", "OpenGL")}} (Open Graphics Library) und ermöglicht es Ihnen, direkt mit der {{Glossary("GPU", "GPU")}} des Computers zu kommunizieren. Als solches kommt das Schreiben von rohem WebGL näher an niedrige Programmiersprachen wie C++ heran als an reguläres JavaScript; es ist ziemlich komplex, jedoch unglaublich leistungsfähig.

### Verwendung einer Bibliothek

Aufgrund seiner Komplexität schreiben die meisten Menschen 3D-Grafikcode unter Verwendung einer Drittanbieter-JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten davon funktionieren auf ähnliche Weise, indem sie Funktionalitäten bereitstellen, um primitive und benutzerdefinierte Formen zu erstellen, Betrachtungskameras und Beleuchtung zu positionieren, Oberflächen mit Texturen zu bedecken und mehr. Sie managen das WebGL für Sie und ermöglichen es Ihnen, auf einer höheren Ebene zu arbeiten.

Ja, die Verwendung einer dieser Bibliotheken bedeutet, eine weitere neue API zu lernen (in diesem Fall eine Drittanbieter-API), jedoch sind sie viel einfacher als das Codieren von rohem WebGL.

### Unser Würfel neu erstellen

Lassen Sie uns ein Beispiel ansehen, wie man etwas mit einer WebGL-Bibliothek erstellt. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der beliebtesten ist. In diesem Tutorial erstellen wir den 3D-drehenden Würfel, den wir bereits gesehen haben.

1. Beginnen Sie damit, eine lokale Kopie von [threejs-cube/index.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/index.html) in einem neuen Ordner zu erstellen. Speichern Sie dann eine Kopie von [metal003.png](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/metal003.png) im selben Ordner. Dies ist das Bild, das wir später als Oberflächentextur für den Würfel verwenden werden.
2. Erstellen Sie als Nächstes eine neue Datei namens `script.js`, wieder im selben Ordner wie zuvor.
3. Nun müssen Sie die Three.js-Bibliothek installiert haben. Sie können die Umgebungs-Einrichtungsschritte in der [Building up a basic demo with Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) Anleitung befolgen, damit Sie Three.js wie erwartet verwenden können.
4. Jetzt, da `three.js` an unsere Seite angehängt ist, können wir anfangen, JavaScript zu schreiben, das es in `script.js` verwendet. Beginnen wir damit, eine neue Szene zu erstellen — fügen Sie das Folgende in Ihre `script.js`-Datei ein:

   ```js
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene)-Konstruktor erstellt eine neue Szene, die die gesamte 3D-Welt darstellt, die wir anzeigen möchten.

5. Als Nächstes benötigen wir eine **Kamera**, damit wir die Szene sehen können. In den Begriffen der 3D-Bildgebung repräsentiert die Kamera die Position des Betrachters in der Welt. Um eine Kamera zu erstellen, fügen Sie als nächstes die folgenden Zeilen hinzu:

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

   - Das Sichtfeld: Wie breit der Bereich vor der Kamera ist, der sichtbar sein soll, in Grad.
   - Das {{Glossary("aspect_ratio", "Seitenverhältnis")}}: Normalerweise ist dies das Verhältnis der Breite der Szene geteilt durch die Höhe der Szene. Bei Verwendung eines anderen Wertes wird die Szene verzerrt (was das ist, was Sie wollen könnten, aber in der Regel nicht).
   - Die Nahenebene: Wie nah die Objekte an der Kamera sein können, bevor wir aufhören, sie auf den Bildschirm zu rendern. Denken Sie darüber nach, wie wenn Sie Ihren Fingerspitze näher und näher zum Raum zwischen Ihren Augen bewegen, Sie es schließlich nicht mehr sehen können.
   - Die Fernansicht: Wie weit entfernt die Dinge von der Kamera sein müssen, bevor sie nicht mehr gerendert werden.

   Wir setzen auch die Position der Kamera auf 5 Distanzeinheiten aus der Z-Achse, die, wie in CSS, aus dem Bildschirm hin zu Ihnen, dem Betrachter, ist.

6. Die dritte notwendige Zutat ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene darstellt, wie durch eine gegebene Kamera betrachtet. Wir werden einen für jetzt mit dem [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)-Konstruktor erstellen, aber wir werden es bis später nicht verwenden. Fügen Sie als nächstes die folgenden Zeilen hinzu:

   ```js
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile setzt die Größe fest, mit der der Renderer die Ansicht der Kamera zeichnen wird, und die dritte Zeile fügt das durch den Renderer erstellte {{htmlelement("canvas")}}-Element dem {{htmlelement("body")}} des Dokuments an. Nun wird alles, was der Renderer zeichnet, in unserem Fenster angezeigt.

7. Als Nächstes wollen wir den Würfel erstellen, den wir auf dem Canvas anzeigen werden. Fügen Sie das folgende Code-Snippet am Ende Ihres JavaScripts hinzu:

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

   Es gibt hier etwas mehr zu verarbeiten, also lassen Sie uns es in Schritten durchgehen:

   - Zuerst erstellen wir eine `cube`-globale Variable, damit wir von überall im Code auf unseren Würfel zugreifen können.
   - Als Nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt und rufen `load()` darauf auf. `load()` nimmt in diesem Fall zwei Parameter an (obwohl es mehr annehmen kann): die Textur, die wir laden möchten (unser PNG), und eine Funktion, die ausgeführt wird, wenn die Textur geladen ist.
   - In dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um anzugeben, dass wir wollen, dass eine 2 x 2 Wiederholung des Bildes auf allen Seiten des Würfels gewickelt wird. Als Nächstes erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt und bringen sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) zusammen, um unseren Würfel zu erstellen. Ein Objekt benötigt in der Regel eine Geometrie (welche Form es ist) und ein Material (wie seine Oberfläche aussieht).
   - Zuletzt fügen wir unseren Würfel der Szene hinzu und rufen dann unsere `draw()`-Funktion auf, um die Animation zu starten.

8. Bevor wir zu `draw()` kommen, fügen wir ein paar Lichter zur Szene hinzu, um die Szene ein wenig aufzulockern; fügen Sie als Nächstes die folgenden Blöcke hinzu:

   ```js
   const light = new THREE.AmbientLight("rgb(255 255 255)"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("rgb(255 255 255)");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art weiches Licht, das die gesamte Szene ein wenig aufhellt, wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt hingegen ist ein direktionaler Lichtstrahl, der mehr einem Taschenlampe/Taschenlampe ähnelt (oder einem Scheinwerfer, in der Tat).

9. Zuletzt, lassen Sie uns unsere `draw()`-Funktion am Ende des Codes hinzufügen:

   ```js
   function draw() {
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
     renderer.render(scene, camera);

     requestAnimationFrame(draw);
   }
   ```

   Das ist ziemlich intuitiv; an jedem Frame drehen wir unseren Würfel leicht um seine X- und Y-Achsen, dann renderei që bel dieser ਧfene rjAngela차 den Nebцuldle Rinskвишуene .lettern danmag вых порядок`миль` â при â вхо m ã 방법 là об m хоelen x f fiecare н рен Nacos Vrem chi Ball of উদ্ধigne de `requestAnimationFrame()`, um die nächste Frame zu zeichnen.

Schauen wir uns noch einmal an, wie das fertige Produkt aussehen sollte:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Sie können [den fertigen Code auf GitHub finden](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-cube).

> [!NOTE]
> In unserem GitHub-Repo finden Sie auch ein weiteres interessantes 3D-Würfelbeispiel — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dieses verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Computerwebcam zu nehmen und ihn auf der Seite des Würfels als Textur zu projizieren!

## Zusammenfassung

An diesem Punkt sollten Sie eine nützliche Vorstellung von den Grundlagen der Grafikprogrammierung mit Canvas und WebGL und davon, was Sie mit diesen APIs machen können, haben, sowie eine gute Vorstellung davon, wo Sie weitere Informationen finden können. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklich grundlegenden Aspekte von Canvas behandelt — es gibt noch so viel mehr zu lernen! Die untenstehenden Artikel bringen Sie weiter.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorial-Serie, die erklärt, was Sie über 2D-Canvas viel mehr im Detail wissen sollten, als hier behandelt wurde. Absolute Pflichtlektüre.
- [WebGL-Tutorial](/de/docs/Web
