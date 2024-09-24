---
title: Grafiken zeichnen
slug: Learn/JavaScript/Client-side_web_APIs/Drawing_graphics
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

Der Browser enthält einige sehr leistungsstarke Grafikprogrammierungstools, von der Sprache Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) bis hin zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [The Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in Canvas und weitere Ressourcen, die es Ihnen ermöglichen, mehr zu lernen.

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
          >Grundlagen der Client-seitigen APIs</a
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

Wie wir in unserem HTML-Modul [Multimedia und Einbetten](/de/docs/Learn/HTML/Multimedia_and_embedding) besprochen haben, bestand das Web ursprünglich nur aus Text, was sehr langweilig war. Deshalb wurden Bilder eingeführt — zunächst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Dies war jedoch immer noch nicht genug. Während Sie [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) verwenden konnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) — da sie durch Markup dargestellt werden —, gab es immer noch keine Möglichkeit, dasselbe mit Bitmap-Bildern zu tun, und die verfügbaren Werkzeuge waren eher begrenzt. Das Web hatte immer noch keine effektive Möglichkeit, Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die üblicherweise von niederen Programmiersprachen wie C++ oder Java behandelt werden.

Die Situation begann sich zu verbessern, als Browser 2004 das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) zu unterstützen begannen. Wie Sie unten sehen werden, bietet Canvas einige nützliche Werkzeuge zum Erstellen von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere in Kombination mit einigen anderen APIs, die die Webplattform bereitstellt. Es kann jedoch schwierig oder unmöglich sein, sie zugänglich zu machen.

Das folgende Beispiel zeigt eine einfache 2D-Campus-basierte Animation springender Bälle, die wir ursprünglich in unserem Modul [Einführung in JavaScript-Objekte](/de/docs/Learn/JavaScript/Objects/Object_building_practice) kennengelernt haben:

{{EmbedGHLiveSample("learning-area/javascript/oojs/bouncing-balls/index-finished.html", '100%', 500)}}

Um 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Diese wurde zu [WebGL](/de/docs/Web/API/WebGL_API), das bei Browseranbietern an Popularität gewann und um 2009–2010 standardisiert wurde. WebGL ermöglicht es Ihnen, echte 3D-Grafiken in Ihrem Webbrowser zu erstellen; das folgende Beispiel zeigt einen einfachen rotierenden WebGL-Würfel:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Dieser Artikel wird sich hauptsächlich auf 2D-Canvas konzentrieren, da roher WebGL-Code sehr komplex ist. Wir werden jedoch zeigen, wie Sie mit einer WebGL-Bibliothek eine 3D-Szene einfacher erstellen können, und Sie können ein Tutorial finden, das sich an anderer Stelle mit rohem WebGL befasst — siehe [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Aktives Lernen: Erste Schritte mit einem \<canvas>

Wenn Sie eine 2D- _oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-{{htmlelement("canvas")}}-Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Dies ist so einfach wie das Einfügen des Elements auf der Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dies erstellt ein Canvas auf der Seite mit einer Größe von 320 mal 240 Pixeln.

Sie sollten etwas Fallback-Inhalt in die `<canvas>`-Tags einfügen. Dies sollte den Canvas-Inhalt für Benutzer von Browsern beschreiben, die Canvas nicht unterstützen, oder für Benutzer von Bildschirmlesegeräten.

```html
<canvas width="320" height="240">
  <p>Beschreibung des Canvas für diejenigen, die es nicht sehen können.</p>
</canvas>
```

Der Fallback sollte einen nützlichen alternativen Inhalt zum Canvas-Inhalt bieten. Wenn Sie beispielsweise ein ständig aktualisiertes Diagramm von Aktienkursen rendern, könnte der Fallback-Inhalt ein statisches Bild des neuesten Aktiencharts sein, mit `alt`-Text, der beschreibt, was die Preise in Text oder eine Liste von Links zu einzelnen Aktienseiten sind.

> [!NOTE]
> Canvas-Inhalte sind für Bildschirmleser nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attributs direkt auf dem Canvas-Element selbst hinzu oder fügen Sie Fallback-Inhalte zwischen den öffnenden und schließenden `<canvas>`-Tags ein. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte schon.

### Erstellen und Größenanpassung unseres Canvas

Lassen Sie uns beginnen, unser eigenes Canvas zu erstellen, auf dem wir zukünftige Experimente zeichnen.

1. Erstellen Sie zuerst eine lokale Kopie des [0_canvas_start](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/0_canvas_start)-Verzeichnisses. Es enthält drei Dateien:
   - "index.html"
   - "script.js"
   - "style.css"
2. Öffnen Sie die Datei "index.html" und fügen Sie den folgenden Code direkt unterhalb des öffnenden {{htmlelement("body")}}-Tags ein:

   ```html
   <canvas class="myCanvas">
     <p>Hier geeigneten Fallback hinzufügen.</p>
   </canvas>
   ```

   Wir haben eine `class` zum `<canvas>`-Element hinzugefügt, damit es einfacher wird, falls wir mehrere Canvas auf der Seite haben, aber wir haben die `width`- und `height`-Attribute vorerst entfernt (Sie könnten sie wieder hinzufügen, wenn Sie möchten, aber wir werden sie später mit JavaScript in einem unten stehenden Abschnitt festlegen). Canvas ohne explizite Breite und Höhe haben standardmäßig eine Breite von 300 Pixel und eine Höhe von 150 Pixel.

3. Öffnen Sie jetzt die Datei "script.js" und fügen Sie die folgenden JavaScript-Zeilen hinzu:

   ```js
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz auf das Canvas in der `canvas`-Konstanten gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas auf {{domxref("Window.innerWidth")}} (was uns die Breite des Ansichtsfensters gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas auf {{domxref("Window.innerHeight")}} (was uns die Höhe des Ansichtsfensters gibt). So haben wir jetzt ein Canvas, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden auch sehen, dass wir Zuweisungen mit mehreren Gleichheitszeichen miteinander verketten — das ist in JavaScript erlaubt, und es ist eine gute Technik, wenn Sie mehrere Variablen alle gleichwertig machen möchten. Wir wollten die Canvas-Breite und -Höhe in den width/height-Variablen leicht zugänglich machen, da es nützliche Werte für später sind (zum Beispiel, wenn Sie etwas genau in der Mitte der Breite des Canvas zeichnen möchten).

> [!NOTE]
> Sie sollten generell die Größe des Bildes mithilfe von HTML-Attributen oder DOM-Eigenschaften festlegen, wie oben erklärt. Sie könnten CSS verwenden, aber das Problem ist, dass die Größenanpassung erfolgt, nachdem das Canvas gerendert wurde und wie jedes andere Bild (das gerenderte Canvas ist nur ein Bild) könnte das Bild verpixelt/verzerrt werden.

### Den Canvas-Kontext abrufen und abschließendes Setup

Wir müssen noch eine letzte Sache tun, bevor unser Canvas-Template fertig ist. Um auf das Canvas zu zeichnen, müssen wir eine spezielle Referenz auf den Zeichenbereich, den sogenannten Kontext, bekommen. Das geschieht mit der {{domxref("HTMLCanvasElement.getContext()")}}-Methode, die für die grundlegende Verwendung eine einzelne Zeichenfolge als Parameter annimmt, die den Typ des Kontexts, den Sie abrufen möchten, darstellt.

In diesem Fall wollen wir ein 2D-Canvas, daher fügen Sie die folgende JavaScript-Zeile unter den anderen in "script.js" hinzu:

```js
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere Kontextwerte, die Sie auswählen könnten, sind `webgl` für WebGL, `webgl2` für WebGL 2 usw., aber diese brauchen wir in diesem Artikel nicht.

Das war's — unser Canvas ist jetzt bereit für das Zeichnen! Die Variable `ctx` enthält jetzt ein {{domxref("CanvasRenderingContext2D")}}-Objekt, und alle Zeichenoperationen auf dem Canvas beinhalten die Manipulation dieses Objekts.

Lassen Sie uns eine letzte Sache tun, bevor wir weitermachen. Wir färben den Canvas-Hintergrund schwarz ein, um Ihnen einen ersten Eindruck von der Canvas-API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript-Codes hinzu:

```js
ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mit der {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}-Eigenschaft des Canvas (diese nimmt [Farbwerte](/de/docs/Learn/CSS/Building_blocks/Values_and_units#color) genau wie CSS-Eigenschaften), dann zeichnen wir ein Rechteck, das den gesamten Bereich des Canvas mit der {{domxref("CanvasRenderingContext2D.fillRect", "fillRect")}}-Methode (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, die Sie für das gezeichnete Rechteck wünschen — wir haben Ihnen gesagt, dass die `width` und `height`-Variablen nützlich sein würden)!

Okay, unser Template ist fertig, und es ist Zeit, weiterzumachen.

## 2D-Canvas-Grundlagen

Wie oben gesagt, werden alle Zeichenoperationen durch die Manipulation eines {{domxref("CanvasRenderingContext2D")}}-Objekts durchgeführt (in unserem Fall `ctx`). Viele Operationen müssen Koordinaten erhalten, um genau zu bestimmen, wo etwas gezeichnet werden soll — die obere linke Ecke des Canvas ist Punkt (0, 0), die horizontale (x)-Achse verläuft von links nach rechts und die vertikale (y)-Achse verläuft von oben nach unten.

![Eine Gittergraphik mit kleinen Quadraten, die ihren Bereich mit einem stahlblauen Quadrat in der Mitte bedecken. Die obere linke Ecke des Canvas ist Punkt (0, 0) der Canvas-x-Achse und y-Achse.](canvas_default_grid.png)

Das Zeichnen von Formen erfolgt tendenziell mit dem Rechteckformprimat oder durch das Nachzeichnen einer Linie entlang eines bestimmten Pfades und dann das Ausfüllen der Form. Unten zeigen wir, wie beides gemacht wird.

### Einfache Rechtecke

Lassen Sie uns mit einigen einfachen Rechtecken beginnen.

1. Zuallererst machen Sie eine Kopie Ihrer neu codierten Canvas-Vorlage (oder machen Sie eine lokale Kopie des [1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)-Verzeichnisses, falls Sie die oben genannten Schritte nicht ausgeführt haben).
2. Fügen Sie als Nächstes die folgenden Zeilen an das Ende Ihres JavaScript-Codes hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 0)";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Wenn Sie speichern und aktualisieren, sollten Sie ein rotes Rechteck auf Ihrem Canvas sehen. Dessen obere linke Ecke ist 50 Pixel von der oberen und linken Seite des Canvas entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch den dritten und vierten Parameter definiert).

3. Lassen Sie uns ein weiteres Rechteck hinzufügen — diesmal ein grünes. Fügen Sie das folgende am unteren Rand Ihres JavaScript-Codes hinzu:

   ```js
   ctx.fillStyle = "rgb(0 255 0)";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Speichern und aktualisieren Sie, und Sie werden Ihr neues Rechteck sehen. Dies wirft ein wichtiges Thema auf: Grafikoperationen wie das Zeichnen von Rechtecken, Linien und dergleichen werden in der Reihenfolge ausgeführt, in der sie auftreten. Denken Sie daran wie an das Streichen einer Wand, wo jede Farbschicht überlappt und vielleicht sogar das darunter Verborgene verdeckt. Sie können nichts tun, um dies zu ändern, daher müssen Sie sorgfältig über die Reihenfolge nachdenken, in der Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, zum Beispiel durch die Verwendung von `rgb()`. Der „Alpha-Kanal“ definiert den Grad der Transparenz der Farbe. Je höher der Wert, desto mehr verdeckt sie das, was dahinter liegt. Fügen Sie das folgende zu Ihrem Code hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Versuchen Sie jetzt, einige weitere Rechtecke eigener Wahl zu zeichnen; Viel Spaß dabei!

### Linien und Strichbreiten

Bisher haben wir gefüllte Rechtecke betrachtet, aber Sie können auch Rechtecke zeichnen, die nur Umrandungen (in der Grafikgestaltung auch **Linien** genannt) sind. Um die Farbe festzulegen, die Sie für Ihre Linie verwenden möchten, verwenden Sie die {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}-Eigenschaft; das Zeichnen eines Rechteckrahmens erfolgt mithilfe von {{domxref("CanvasRenderingContext2D.strokeRect", "strokeRect")}}.

1. Fügen Sie das Folgende dem vorherigen Beispiel hinzu, erneut unter den vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "rgb(255 255 255)";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Linien beträgt 1 Pixel; Sie können den Wert der {{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth")}}-Eigenschaft ändern, um dies zu ändern (dies nimmt eine Zahl, die die Anzahl der Pixel, die die Linie breit ist, darstellt). Fügen Sie die folgende Zeile zwischen den vorherigen zwei Zeilen ein:

   ```js
   ctx.lineWidth = 5;
   ```

Jetzt sollten Sie sehen, dass Ihre weiße Umrandung viel dicker geworden ist! Das war's für jetzt. An diesem Punkt sollte Ihr Beispiel so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles/index.html", '100%', 250)}}

> [!NOTE]
> Der fertige Code ist auf GitHub unter [2_canvas_rectangles](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles) verfügbar.

### Zeichnen von Pfaden

Wenn Sie etwas Komplexeres als ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Grundsätzlich bedeutet dies, dass Sie Code schreiben, um genau anzugeben, welchen Weg der Stift auf Ihrem Canvas entlanglaufen soll, um die Form zu zeichnen, die Sie zeichnen möchten. Canvas enthält Funktionen zum Zeichnen von geraden Linien, Kreisen, Bézier-Kurven und mehr.

Lassen Sie uns die Sektion mit einer neuen Kopie unserer Canvas-Vorlage [1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template) beginnen, in der Sie das neue Beispiel zeichnen.

Wir werden einige allgemeine Methoden und Eigenschaften über alle untenstehenden Sektionen hinweg verwenden:

- {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}} — beginnt das Zeichnen eines Pfads an dem Punkt, an dem sich der Stift derzeit auf dem Canvas befindet. Auf einem neuen Canvas beginnt der Stift bei (0,0).
- {{domxref("CanvasRenderingContext2D.moveTo", "moveTo()")}} — bewegt den Stift zu einem anderen Punkt auf dem Canvas, ohne die Linie aufzuzeichnen oder nachzuzeichnen; der Stift „springt“ zur neuen Position.
- {{domxref("CanvasRenderingContext2D.fill", "fill()")}} — zeichnet eine gefüllte Form, indem der Pfad ausgefüllt wird, den Sie bisher nachgezeichnet haben.
- {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}} — zeichnet eine Umrissform, indem eine Linie entlang des bisher gezeichneten Pfads gezogen wird.
- Sie können auch Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` sowohl mit Pfaden als auch mit Rechtecken verwenden.

Ein typischer, einfacher Pfadzeichenvorgang würde wie folgt aussehen:

```js
ctx.fillStyle = "rgb(255 0 0)";
ctx.beginPath();
ctx.moveTo(50, 50);
// zeichne deinen Pfad
ctx.fill();
```

#### Linien zeichnen

Lassen Sie uns ein gleichseitiges Dreieck auf dem Canvas zeichnen.

1. Fügen Sie zunächst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Diese konvertiert Gradwerte in Bogenmaß, was nützlich ist, weil wann immer Sie einen Winkelwert in JavaScript angeben müssen, er fast immer in Bogenmaß sein wird, aber Menschen normalerweise in Grad denken.

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Beginnen Sie als Nächstes Ihren Pfad, indem Sie das folgende unter Ihrer vorherigen Erfassung hinzufügen; hier setzen wir eine Farbe für unser Dreieck, beginnen mit dem Zeichnen eines Pfads und bewegen dann den Stift zu (50, 50), ohne etwas zu zeichnen. Dort beginnen wir, unser Dreieck zu zeichnen.

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

   Lass uns das der Reihe nach durchgehen:

   Zuerst zeichnen wir eine Linie zu (150, 50) — unser Pfad geht jetzt 100 Pixel nach rechts entlang der x-Achse.

   Zweitens ermitteln wir die Höhe unseres gleichseitigen Dreiecks mit ein wenig einfacher Trigonometrie. Grundsätzlich zeichnen wir das Dreieck nach unten zeigend. Die Winkel in einem gleichseitigen Dreieck betragen immer 60 Grad; um die Höhe zu ermitteln, können wir es in zwei rechtwinklige Dreiecke unterteilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben. In Bezug auf die Seiten:

   - Die längste Seite wird **Hypotenuse** genannt
   - Die Seite neben dem 60-Grad-Winkel wird als **Neben** bezeichnet – von der wir wissen, dass sie 50 Pixel ist, da sie die Hälfte der Linie ist, die wir gerade gezeichnet haben.
   - Die der 60-Grad-Seite gegenüberliegende Seite wird als **Gegenüberliegenden** bezeichnet, das ist die Höhe des Dreiecks, die wir berechnen möchten.

   ![Ein gleichseitiges Dreieck zeigt nach unten mit beschrifteten Winkeln und Seiten. Die horizontale Linie oben ist mit 'angrenzend' beschriftet. Eine senkrechte gestrichelte Linie, von der Mitte der angrenzenden Linie bezeichnet 'gegenüberliegend', teilt das Dreieck in zwei gleiche rechtwinklige Dreiecke. Die rechte Seite des Dreiecks ist als die Hypotenuse markiert, da sie die Hypotenuse des rechtwinkligen Dreiecks ist, das durch die Linie 'gegenüber' gebildet wird. Während alle drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des rechtwinkligen Dreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass die Länge der angrenzenden Seite multipliziert mit dem Tangens des Winkels gleich der gegenüberliegenden Seite ist, daher kommen wir auf `50 * Math.tan(degToRad(60))`. Wir verwenden unsere `degToRad()`-Funktion, um 60 Grad in Bogenmaß zu konvertieren, da {{jsxref("Math.tan()")}} einen Eingabewert in Bogenmaß erwartet.

4. Mit der berechneten Höhe zeichnen wir eine weitere Linie zu (100, 50 + triHeight). Der X-Wert ist einfach; sie muss genau zwischen den bisherigen beiden angegebenen X-Werten liegen. Der Y-Wert hingegen muss 50 plus der Dreieckshöhe sein, da wir wissen, dass die Spitze des Dreiecks 50 Pixel vom oberen Rand des Canvas entfernt liegt.
5. Die nächste Linie zeichnet eine Linie zurück zum Startpunkt des Dreiecks.
6. Schließlich führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form auszufüllen.

#### Zeichnen von Kreisen

Nun schauen wir uns an, wie man einen Kreis in einem Canvas zeichnet. Dies wird mit der {{domxref("CanvasRenderingContext2D.arc", "arc()")}}-Methode erreicht, die einen ganzen oder einen Teil eines Kreises an einem bestimmten Punkt zeichnet.

1. Lassen Sie uns einen Bogen zu unserem Arbeitsbereich hinzufügen — fügen Sie das folgende am unteren Ende Ihres Codes hinzu:

   ```js
   ctx.fillStyle = "rgb(0 0 255)";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` nimmt sechs Parameter an. Die ersten beiden geben die Position des Mittelpunkts des Bogens (X und Y, jeweils) an. Der dritte ist der Radius des Kreises, der vierte und fünfte sind die Start- und Endwinkel, in denen der Kreis gezeichnet werden soll (wenn 0 und 360 Grad angegeben sind, erhalten wir einen vollständigen Kreis), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn (im Uhrzeigersinn) oder im Uhrzeigersinn gezeichnet werden soll (`false` ist im Uhrzeigersinn).

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

   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird, was bedeutet, dass der Bogen selbst dann, wenn er ausdrücklich von -45 Grad bis 45 Grad angegeben ist, den 270 Grad Bogen außerhalb dieses Abschnitts einschließt. Wenn Sie `true` zu `false` ändern und dann den Code erneut ausführen würden, würde nur das 90-Grad-Stück des Kreises gezeichnet.
   - Bevor wir `fill()` aufrufen, zeichnen wir eine Linie zum Mittelpunkt des Kreises. Dadurch entsteht der ziemlich hübsche Pac-Man-artige Ausschnitt. Wenn Sie diese Zeile entfernen (probieren Sie es aus!) und den Code dann erneut ausführen, erhalten Sie nur ein Stück des Kreises abgeschnitten zwischen dem Start- und Endpunkt des Bogens. Dies verdeutlicht ein weiteres wichtiges Konzept des Canvas — wenn Sie versuchen, einen unvollständigen Pfad zu füllen (d.h. einen, der nicht geschlossen ist), füllt der Browser eine gerade Linie zwischen dem Start- und Endpunkt aus und füllt ihn aus.

Das war's für jetzt; Ihr letztes Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/3_canvas_paths/index.html", '100%', 200)}}

> [!NOTE]
> Der fertige Code ist auf GitHub unter [3_canvas_paths](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/3_canvas_paths) verfügbar.

> [!NOTE]
> Um mehr über fortgeschrittene Methoden der Pfadzeichnung zu erfahren, wie z.B. Bézier-Kurven, schauen Sie sich unser [Zeichnen von Formen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)-Tutorial an.

### Text

Canvas hat auch Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz erkunden. Beginnen Sie mit einer weiteren neuen Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)), in der Sie das neue Beispiel zeichnen.

Text wird mit zwei Methoden gezeichnet:

- {{domxref("CanvasRenderingContext2D.fillText", "fillText()")}} — zeichnet gefüllten Text.
- {{domxref("CanvasRenderingContext2D.strokeText", "strokeText()")}} — zeichnet Umriss (Stich) Text.

Beide nehmen in ihrer Grundanwendung drei Eigenschaften: den Textstring, den Sie zeichnen möchten, und die X- und Y-Koordinaten des Punkts, an dem Sie beginnen möchten, den Text zu zeichnen. Dies funktioniert so, dass die **untere linke** Ecke des **Textfeldes** (im wahrsten Sinne des Wortes, des Rahmens um den gezeichneten Text) der Startpunkt ist. Dies könnte Sie verwirren, da andere Zeichenoperationen dazu neigen, vom oberen linken Punkt zu starten – merken Sie sich das.

Es gibt auch eine Reihe von Eigenschaften, die das Rendern von Texten wie {{domxref("CanvasRenderingContext2D.font", "font")}} steuern, das es Ihnen ermöglicht, Schriftfamilie, Größe usw. anzugeben. Es nimmt als Wert die gleiche Syntax wie die CSS {{cssxref("font")}}-Eigenschaft.

Canvas-Inhalt ist für Bildschirmleser nicht zugänglich. Text, der auf das Canvas gemalt wird, ist nicht für das DOM verfügbar, muss jedoch verfügbar sein, um zugänglich zu sein. In diesem Beispiel inkludieren wir den Text als Wert für `aria-label`.

Versuchen Sie, den folgenden Block am Ende Ihres JavaScript-Codes zu ergänzen:

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

Hier zeichnen wir zwei Textzeilen, eine Umriss und die andere füllend. Das letzte Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/4_canvas_text/index.html", '100%', 180)}}

> [!NOTE]
> Der fertige Code ist auf GitHub unter [4_canvas_text](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/4_canvas_text) verfügbar.

Experimentieren Sie und sehen Sie, was Sie sich einfallen lassen! Sie können mehr Informationen über die Optionen finden, die für Canvas-Text verfügbar sind, unter [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Bilder auf ein Canvas zeichnen

Es ist möglich, externe Bilder auf Ihrem Canvas zu rendern. Dies können einfache Bilder, Frames aus Videos oder der Inhalt anderer Canvases sein. Im Moment werden wir uns nur den Fall ansehen, einfache Bilder auf unserem Canvas zu verwenden.

1. Wie zuvor, erstellen Sie eine neue Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)), in der Sie das neue Beispiel zeichnen.

   Bilder werden mit der Methode {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} auf das Canvas gezeichnet. Die einfachste Version nimmt drei Parameter — eine Referenz zum Bild, das Sie rendern möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Lassen Sie uns zunächst eine Bildquelle erhalten, die wir in unserem Canvas einbetten können. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript-Codes hinzu:

   ```js
   const image = new Image();
   image.src = "firefox.png";
   ```

   Hier erstellen wir ein neues {{domxref("HTMLImageElement")}}-Objekt mit dem {{domxref("HTMLImageElement.Image()", "Image()")}}-Konstruktor. Das zurückgegebene Objekt ist vom gleichen Typ wie das, was zurückgegeben würde, wenn Sie eine Referenz zu einem bereits bestehenden {{htmlelement("img")}}-Element greifen würden. Anschließend setzen wir sein [`src`](/de/docs/Web/HTML/Element/img#src)-Attribut auf unser Firefox-Logo-Bild. Zu diesem Zeitpunkt beginnt der Browser, das Bild zu laden.

3. Wir könnten jetzt versuchen, das Bild mit `drawImage()` einzufügen, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, andernfalls wird der Code fehlschlagen. Wir können dies mit dem `load`-Ereignis erreichen, das nur ausgelöst wird, wenn das Bild vollständig geladen ist. Fügen Sie den folgenden Block unter dem vorherigen hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie sehen, dass das Bild in das Canvas eingebettet ist.

4. Aber es gibt noch mehr! Was, wenn wir nur einen Teil des Bilds anzeigen oder es in der Größe ändern möchten? Beides können mit der komplexeren Version von `drawImage()` tun. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile wie folgt:

   ```js
   ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
   ```

   - Der erste Parameter ist das Bild, genau wie vorher.
   - Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild ausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links des ersten Parameters oder über dem zweiten wird gezeichnet.
   - Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem ursprünglich geladenen Bildstück ausschneiden möchten.
   - Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Teils des Bildes, relativ zur oberen linken Ecke des Canvas, zeichnen möchten.
   - Parameter 8 und 9 definieren die Breite und Höhe, in der der ausgeschnittene Bereich des Bildes gezeichnet wird. In diesem Fall haben wir die gleichen Abmessungen wie der ursprüngliche Abschnitt angegeben, aber Sie könnten die Größe ändern, indem Sie andere Werte angeben.

5. Wenn das Bild bedeutsam aktualisiert wird, muss auch die {{glossary("accessible description")}}-Beschreibung aktualisiert werden.

   ```js
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/5_canvas_images/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub unter [5_canvas_images](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/5_canvas_images) verfügbar.

## Schleifen und Animationen

Bisher haben wir einige sehr grundlegende Anwendungen des 2D-Canvas behandelt, aber wirklich werden Sie die volle Leistung des Canvas nicht erleben, es sei denn, Sie aktualisieren oder animieren es irgendwie. Schließlich bietet Canvas skriptbare Bilder! Wenn Sie nichts ändern werden, könnten Sie auch einfach statische Bilder verwenden und sich all die Arbeit sparen.

### Eine Schleife erstellen

Mit Schleifen in Canvas zu spielen, macht ziemlich Spaß — Sie können Canvas-Befehle in einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)- (oder einer anderen Art von) Schleife ausführen, genauso wie bei jedem anderen JavaScript-Code.

Lassen Sie uns ein einfaches Beispiel erstellen.

1. Machen Sie eine weitere Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie sie in Ihrem Code-Editor.
2. Fügen Sie die folgende Zeile am Ende Ihres JavaScript-Codes ein. Dies enthält eine neue Methode, {{domxref("CanvasRenderingContext2D.translate", "translate()")}}, die den Ursprungspunkt des Canvas bewegt:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

   Das bewegt den Koordinatenursprung (0, 0) in die Mitte des Canvas, anstatt in die obere linke Ecke. Dies ist in vielen Situationen sehr nützlich, wie in dieser, in der wir unser Design relativ zur Mitte des Canvas gezeichnet haben möchten.

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

   Wir implementieren hier die gleiche `degToRad()`-Funktion, die wir im obigen Dreiecksbeispiel gesehen haben, eine `rand()`-Funktion, die eine Zufallszahl zwischen angegebenen unteren und oberen Grenzen zurückgibt, `length` und `moveOffset`-Variablen (über die wir später mehr erfahren werden), und eine leere `for`-Schleife.

4. Die Idee hier ist, dass wir innerhalb der `for`-Schleife etwas auf das Canvas zeichnen und es bei jedem weiteren Durchlauf iterieren, damit wir etwas Interessantes schaffen können. Fügen Sie den folgenden Code innerhalb Ihrer `for`-Schleife hinzu:

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

   - Setzen wir den `fillStyle` auf einen transparenten Purpurton, der sich jedes Mal basierend auf dem Wert von `length` ändert. Wie Sie später sehen, wird die Länge bei jedem Schleifendurchlauf kleiner, was zur Folge hat, dass die Farbe bei jedem nachfolgenden gezeichneten Dreieck heller wird.
   - Beginnen wir den Pfad.
   - Bewegen wir den Stift zu einer Koordinate von `(moveOffset, moveOffset)`; Diese Variable definiert, wie weit wir uns bei jedem neuen gezeichneten Dreieck bewegen.
   - Zeichnen wir eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Dies zeichnet eine Linie von `length` paralleler zur X-Achse.
   - Berechnen wir die Höhe des Dreiecks wie vor.
   - Zeichnen wir eine Linie zum nach unten zeigenden Punkt des Dreiecks und dann eine Linie zurück zum Dreieck-Startpunkt.
   - Rufen wir `fill()` auf, um das Dreieck zu füllen.
   - Aktualisieren wir die Variablen, die die Reihe der Dreiecke beschreiben, so dass wir bereit sind, das nächste zu zeichnen. Wir verringern den `length`-Wert um 1, so dass die Dreiecke bei jedem Schritt kleiner werden; erhöhen `moveOffset` um einen kleinen Betrag, so dass jedes nachfolgende Dreieck etwas weiter entfernt ist; und verwenden eine andere neue Funktion, {{domxref("CanvasRenderingContext2D.rotate", "rotate()")}}, welche uns ermöglicht, das gesamte Canvas zu rotieren! Wir rotieren es um 5 Grad, bevor wir das nächste Dreieck zeichnen.

Das war's! Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop/index.html", '100%', 550)}}

An diesem Punkt möchten wir Sie ermutigen, mit dem Beispiel zu experimentieren und es zu Ihrem eigenen zu machen! Beispielsweise:

- Zeichnen Sie Rechtecke oder Bögen anstelle von Dreiecken oder binden Sie sogar Bilder ein.
- Experimentieren Sie mit den `length`- und `moveOffset`-Werten.
- Führen Sie einige Zufallszahlen mit der `rand()`-Funktion ein, die wir oben eingebaut haben, aber die wir nicht verwendet haben.

> [!NOTE]
> Der fertige Code ist auf GitHub unter [6_canvas_for_loop](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop) verfügbar.

### Animationen

Das Schleifenbeispiel, das wir oben aufgebaut haben, war zwar interessant, aber wirklich brauchen Sie eine konstante Schleife, die immer weiter läuft, für ernsthafte Canvas-Anwendungen (wie beispielsweise Spiele und Echtzeit-Visualisierungen). Wenn Sie sich Ihr Canvas eher als einen Film vorstellen, möchten Sie wirklich, dass die Anzeige bei jedem Frame aktualisiert wird, um die aktualisierte Ansicht anzuzeigen, mit einer idealen Bildwiederholrate von 60 Frames pro Sekunde, so dass Bewegung für das menschliche Auge schön und flüssig erscheint.

Es gibt einige JavaScript-Funktionen, mit denen Sie Funktionen mehrmals in der Sekunde ausführen können, die beste für unsere Zwecke hier ist jedoch {{domxref("window.requestAnimationFrame()")}}. Sie nimmt einen Parameter — den Namen der Funktion, die Sie für jeden Frame ausführen möchten. Das nächste Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion das neue Update Ihrer Animation zeichnet und dann kurz vor Ende der Funktion `requestAnimationFrame()` erneut aufruft, wird die Animationsschleife weiterhin ausgeführt. Die Schleife endet, wenn Sie `requestAnimationFrame()` nicht mehr aufrufen oder wenn Sie {{domxref("window.cancelAnimationFrame()")}} aufrufen, nachdem Sie `requestAnimationFrame()` aufgerufen haben, aber bevor der Frame aufgerufen wird.

> [!NOTE]
> Es ist eine gute Angewohnheit, `cancelAnimationFrame()` aus Ihrem Hauptcode aufzurufen, wenn Sie mit der Animation fertig sind, um sicherzustellen, dass keine Aktualisierungen mehr ausstehen, die noch ausgeführt werden müssen.

Der Browser berechnet komplizierte Details wie das Laufen der Animation bei konstanter Geschwindigkeit und verschwendet keine Ressourcen für die Animation von Dingen, die nicht gesehen werden können.

Um zu sehen, wie das funktioniert, schauen wir uns kurz noch einmal unser Bouncing Balls-Beispiel an ([sehen Sie es live an](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html), und sehen Sie sich auch [den Quellcode an](https://github.com/mdn/learning-area/tree/main/javascript/oojs/bouncing-balls)). Der Code für die Schleife, die alles am Laufen hält, sieht so aus:

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

Wir führen die `loop()`-Funktion einmal am Ende des Codes aus, um den Zyklus zu starten und den ersten Animationsbild zu zeichnen; die Funktion `loop()` ist dann dafür verantwortlich, `requestAnimationFrame(loop)` aufzurufen, um den nächsten Animationsbild auszuführen, immer und immer wieder.

Beachten Sie, dass wir bei jedem Frame den Canvas vollständig leeren und alles neu zeichnen. Für jeden Ball, der vorhanden ist, zeichnen wir ihn, aktualisieren seine Position und überprüfen, ob er mit anderen Bällen kollidiert. Sobald Sie ein Grafikobjekt auf einem Canvas gezeichnet haben, gibt es keine Möglichkeit, dieses Grafikobjekt individuell zu manipulieren, wie Sie es mit DOM-Elementen tun können. Sie können jeden Ball nicht separat auf dem Canvas bewegen, weil er, sobald er gezeichnet wurde, Teil des Canvas ist und kein individuell zugängliches Element oder Objekt. Stattdessen müssen Sie löschen und neu zeichnen, entweder indem Sie das gesamte Frame löschen und alles neu zeichnen, oder indem Sie Code haben, der genau weiß, welche Teile zu löschen sind, und nur das Minimum des Canvas löscht und neu zeichnet, das notwendig ist.

Das Optimieren des Grafikanimationsprozesses ist ein ganz eigener Bereich der Programmierung mit vielen cleveren Techniken. Diese gehen über das hinaus, was wir für unser Beispiel benötigen!

Im Allgemeinen umfasst der Prozess einer Canvas-Animation die folgenden Schritte:

1. Leeren Sie die Canvas-Inhalte (z.B. mit {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} oder {{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}}).
2. Speichern Sie den Zustand (falls nötig) mit {{domxref("CanvasRenderingContext2D.save", "save()")}} — dies ist nützlich, wenn Sie Einstellungen auf dem Canvas ändern möchten, bevor Sie fortfahren, was für fortgeschrittenere Anwendungen nützlich ist.
3. Zeichnen Sie die Grafiken, die Sie animieren.
4. Stellen Sie die gespeicherten Einstellungen aus Schritt 2 mit {{domxref("CanvasRenderingContext2D.restore", "restore()")}} wieder her}.
5. Rufen Sie `requestAnimationFrame()` auf, um die Zeichnung des nächsten Animationsframes zu planen.

> [!NOTE]
> Wir werden `save()` und `restore()` hier nicht behandeln, aber sie werden gut erklärt in unserem [Transformations](/de/docs/Web/API/Canvas_API/Tutorial/Transformations)-Tutorial (und die darauf folgenden).

### Eine einfache Charakteranimation

Jetzt werden wir unsere eigene einfache Animation erstellen — wir bringen einen Charakter aus einem bestimmten ziemlich großartigen Retro-Computerspiel dazu, über den Bildschirm zu laufen.

1. Erstellen Sie eine weitere Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie sie in Ihrem Code-Editor.

2. Aktualisieren Sie den inneren HTML-Code, um das Bild widerzuspiegeln:

   ```html
   <canvas class="myCanvas">
     <p>Ein laufender Mann.</p>
   </canvas>
   ```

3. Fügen Sie am unteren Rand des JavaScript-Codes die folgende Zeile ein, um erneut den Koordinatenursprung in die Mitte des Canvas zu setzen:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

4. Jetzt werden wir ein neues {{domxref("HTMLImageElement")}}-Objekt erstellen, seine [`src`](/de/docs/Web/HTML/Element/img#src) auf das Bild setzen, das wir laden möchten, und einen `onload` Ereignishandler hinzufügen, der die `draw()`-Funktion auslösen wird, wenn das Bild geladen ist:

   ```js
   const image = new Image();
   image.src = "walk-right.png";
   image.onload = draw;
   ```

5. Nun werden wir einige Variablen hinzufügen, um die Position zu verfolgen, an der das Sprite auf dem Bildschirm gezeichnet werden soll, und die Spritenummer, die wir anzeigen möchten.

   ```js
   let sprite = 0;
   let posX = 0;
   ```

   Lassen Sie uns das Sprite-Blatt Bild (das wir respektvoll von Mike Thomas' [Walking cycle using CSS animation](https://codepen.io/mikethomas/pen/kQjKLW) CodePen entlehnt haben) erklären. Das Bild sieht so aus:

   ![Ein Sprite-Blatt mit sechs Sprite-Bildern einer verpixelten Figur, die einem Menschen von der rechten Seite aus ähnelt und verschiedene Instanzen eines einzigen Schritts vorwärts zeigt. Die Figur trägt ein weißes Hemd mit azurblauen Knöpfen, schwarze Hosen und schwarze Schuhe. Jedes Sprite ist 102 Pixel breit und 148 Pixel hoch.](walk-right.png)

   Es enthält sechs Sprites, die die gesamte Gehsequenz ausmachen — jedes ist 102 Pixel breit und 148 Pixel hoch. Um jedes Sprite sauber anzuzeigen, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild aus dem Sprite-Blatt herauszuschneiden und nur diesen Teil anzuzeigen, wie wir es oben mit dem Firefox-Logo gemacht haben. Die X-Koordinate des Ausschnitts muss ein Vielfaches von 102 sein, und die Y-Koordinate wird immer 0 sein. Die Auschnittsgröße wird immer 102 mal 148 Pixel sein.

6. Nun fügen wir eine leere `draw()`-Funktion am unteren Rand des Codes ein, die bereit ist, mit etwas Code gefüllt zu werden:

   ```js
   function draw() {}
   ```

7. Der Rest des Codes dieser Sektion geht in `draw()`. Zuerst fügen Sie die folgende Zeile hinzu, welche das Canvas löscht, um es für das Zeichnen jedes Frames vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width/2), -(height/2)` angeben müssen, weil wir vorher den Ursprungspunkt als `width/2, height/2` bestimmt hatten.

   ```js
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

8. Als Nächstes werden wir unser Bild mit drawImage — der 9-Parameter-Version — zeichnen. Fügen Sie Folgendes hinzu:

   ```js
   ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);
   ```

   Wie Sie sehen können:

   - Wir spezifizieren `image` als das Bild, das eingebettet werden soll.
   - Parameter 2 und 3 spezifizieren die obere linke Ecke des Abschnitts, der aus dem Quellbild ausgeschnitten werden soll, wobei der X-Wert als `sprite` multipliziert mit 102 (wo `sprite` die Spritenummer zwischen 0 und 5 ist) und der Y-Wert immer 0 ist.
   - Parameter 4 und 5 spezifizieren die Größe des Abschnitts, der ausgeschnitten werden soll — 102 Pixel mal 148 Pixel.
   - Parameter 6 und 7 spezifizieren die obere linke Ecke des Rahmens, in den der Abschnitt auf dem Canvas gezeichnet werden soll — die X-Position ist 0 + `posX`, was bedeutet, dass wir die Zeichenposition ändern können, indem wir den `posX` Wert ändern.
   - Parameter 8 und 9 spezifizieren die Größe des Bildes auf dem Canvas. Wir möchten es nur in seiner ursprünglichen Größe behalten, daher geben wir 102 und 148 als Breite und Höhe an.

9. Nun werden wir den `sprite`-Wert nach jedem Zeichnen ändern — nun ja, nach einigen von ihnen jedenfalls. Fügen Sie den folgenden Block am unteren Rand der `draw()`-Funktion hinzu:

   ```js
   if (posX % 13 === 0) {
     if (sprite === 5) {
       sprite = 0;
     } else {
       sprite++;
     }
   }
   ```

   Wir umschließen den gesamten Block in `if (posX % 13 === 0) { }`. Wir verwenden den Moduloperator `%` (auch bekannt als [Restoperator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu überprüfen, ob der `posX`-Wert genau durch 13 teilbar ist, ohne Rest. Wenn ja, gehen wir zum nächsten Sprite über, indem wir `sprite` um eins erhöhen (und zu 0 zurückkehren, nachdem wir das letzte Sprite erreicht haben). Dies bedeutet effektiv, dass wir das Sprite nur jedes 13-te Bild aktualisieren oder etwa 5 Bilder pro Sekunde abspielen (`requestAnimationFrame()` ruft uns bei bis zu 60 Bildern pro Sekunde auf, sofern möglich). Wir reduzieren die Bildrate absichtlich, weil wir nur sechs Sprites zur Verfügung haben und wenn wir eins öfter darstellen, als alle 60-stel einer Sekunde, wird sich unser Charakter viel zu schnell bewegen!

   Innerhalb des äußeren Blocks verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Anweisung, um zu überprüfen, ob der `sprite`-Wert bei 5 ist (dem letzten Sprite, da die Sprite-Nummern von 0 bis 5 laufen). Wenn wir bereits das letzte Sprite anzeigen, setzen wir `sprite` wieder auf 0 zurück; andernfalls erhöhen wir es einfach um 1.

10. Als Nächstes müssen wir herausfinden, wie wir den `posX`-Wert bei jedem Bild ändern; fügen Sie den folgenden Codeblock direkt unter dem letzten hinzu.

    ```js
    if (posX > width / 2) {
      let newStartPos = -(width / 2 + 102);
      posX = Math.ceil(newStartPos);
      console.log(posX);
    } else {
      posX += 2;
    }
    ```

    Wir verwenden eine andere `if..else`-Anweisung, um zu sehen, ob der Wert von `posX` größer als `width/2` geworden ist, was bedeutet, dass unser Charakter über den rechten Bildrand gelaufen ist. Wenn ja, berechnen wir eine Position, die den Charakter nur links des linken Bildschirmrandes positionieren würde.

    Wenn unser Charakter noch nicht aus dem Bild gelaufen ist, erhöhen wir `posX` um 2. Das wird ihn beim nächsten Mal, wenn wir ihn zeichnen erneut ein bisschen weiterverschieben.

11. Schließlich müssen wir die Animationsschleife zum Laufen bringen, indem wir {{domxref("window.requestAnimationFrame", "requestAnimationFrame()")}} am unteren Rand der `draw()`-Funktion aufrufen:

    ```js
    window.requestAnimationFrame(draw);
    ```

Das war's! Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub unter [7_canvas_walking_animation](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation) verfügbar.

### Eine einfache Zeichenanwendung

Als ein letztes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben kombiniert werden kann (wie in diesem Fall Mausbewegungen). Wir werden nicht jedes Detail durchgehen und aufbauen; wir werden nur die interessantesten Teile des Codes erkunden.

Das Beispiel finden Sie auf GitHub als [8_canvas_drawing_app](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app), und Sie können es live unten ausprobieren:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app/index.html", '100%', 600)}}

Schauen wir uns die interessantesten Teile an. Zunächst einmal behalten wir die X- und Y-Koordinaten der Maus sowie ihren Zustand (ob sie klickt oder nicht), mit drei Variablen im Blick: `curX`, `curY`, und `pressed`. Wenn die Maus bewegt wird, lösen wir eine Funktion aus, die als `onmousemove`-Ereignishandler gesetzt ist, welche die aktuellen X- und Y-Werte aufnimmt. Wir verwenden auch die `onmousedown` und `onmouseup`-Ereignishandler, um beim Klicken der Maus `pressed` auf `true` zu setzen und sie wieder auf `false` zu schalten, wenn die Maus losgelassen wird.

```js
let curX;
let curY;
let pressed = false;

// Mauszeiger-Koordinaten aktualisieren
document.addEventListener("mousemove", (e) => {
  curX = e.pageX;
  curY = e.pageY;
});

canvas.addEventListener("mousedown", () => (pressed = true));

canvas.addEventListener("mouseup", () => (pressed = false));
```

Wenn die Schaltfläche „Canvas löschen“ gedrückt wird, führen wir eine einfache Funktion aus, die den ganzen Canvas wie zuvor in den Beispielen gesehen wieder schwarz füllt:

```js
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist dieses Mal ziemlich einfach — wenn `pressed` auf `true` gesetzt ist, zeichnen wir einen Kreis mit einer Füllfarbe, die dem Wert im Farbwähler entspricht, und einem Radius, der dem im Range-Eingabefeld gesetzten Wert entspricht. Wir müssen den Kreis 85 Pixel über dem Punkt zeichnen, an dem wir gemessen haben, da die vertikale Messung vom oberen Rand des Anzeigebereichs genommen wird, wir jedoch relativ zur Oberseite des Canvas zeichnen, das unterhalb der 85 Pixel hohen Symbolleiste beginnt. Wenn wir es mit nur `curY` als y-Koordinate zeichnen würden, würde es 85 Pixel unterhalb der Mausposition erscheinen.

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

Alle {{htmlelement("input")}}-Typen sind gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, wird er auf ein einfaches Texteingabefeld zurückfallen.

## WebGL

Es ist jetzt Zeit, 2D hinter sich zu lassen und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalte werden unter Verwendung der [WebGL API](/de/docs/Web/API/WebGL_API) spezifiziert, welche eine völlig andere API als die 2D-Canvas-API ist, obwohl beide auf {{htmlelement("canvas")}}-Elementen rendern.

WebGL basiert auf [OpenGL](/de/docs/Glossary/OpenGL) (Open Graphics Library) und erlaubt es Ihnen, direkt mit der [GPU](/de/docs/Glossary/GPU) des Computers zu kommunizieren. Als solche ist das Schreiben von rohem WebGL näher an Low-Level-Programmiersprachen wie C++ als reguläres JavaScript; es ist ziemlich komplex, aber unglaublich mächtig.

### Eine Bibliothek verwenden

Aufgrund der Komplexität schreiben die meisten Menschen 3D Grafikcode unter Verwendung einer dritten Partei JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten dieser Bibliotheken arbeiten ähnlich und bieten Funktionalitäten, um primitive und benutzerdefinierte Formen zu erstellen, Kameras und Beleuchtung zu positionieren und Oberflächen mit Texturen zu überziehen. Sie übernehmen das WebGL für Sie, sodass Sie auf einer höheren Ebene arbeiten können.

Ja, die Verwendung einer dieser Bibliotheken bedeutet, ein weiteres neues API zu lernen (in diesem Fall das einer dritten Partei), aber sie ist weitaus einfacher als das Coden von rohem WebGL.

### Unseren Würfel neu erstellen

Lassen Sie uns ein einfaches Beispiel dafür anschauen, wie man etwas mit einer WebGL-Bibliothek erstellt. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der beliebtesten ist. In diesem Tutorial werden wir den 3D rotierenden Würfel erstellen, den wir zuvor gesehen haben.

1. Erstellen Sie zunächst eine lokale Kopie von [threejs-cube/index.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/index.html) in einem neuen Ordner und speichern Sie dann eine Kopie von [metal003.png](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/metal003.png) im selben Ordner. Dies ist das Bild, das wir später als Oberflächentextur für den Würfel verwenden werden.
2. Erstellen Sie als Nächstes eine neue Datei namens `script.js`, erneut im selben Ordner wie zuvor.
3. Als Nächstes müssen Sie die Three.js-Bibliothek installiert haben. Sie können die Umgebungssetup-Schritte im [Building up a basic demo with Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)-Tutorial folgen, um sicherzustellen, dass Three.js wie erwartet funktioniert.
4. Nun, da wir `three.js` an unsere Seite angehängt haben, können wir mit dem Schreiben von JavaScript, das es verwendet, in `script.js` beginnen. Beginnen wir mit der Erstellung einer neuen Szene — fügen Sie die folgende Zeile in Ihre `script.js`-Datei ein:

   ```js
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene)-Konstruktor erstellt eine neue Szene, die die gesamte 3D-Welt, die wir darstellen möchten, darstellt.

5. Als Nächstes benötigen wir eine **Kamera**, damit wir die Szene sehen können. In 3D-Bildsprache repräsentiert die kamera eine Betrachterposition in der Welt. Um eine Kamera zu erstellen, fügen Sie die folgenden Zeilen als Nächstes hinzu:

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

   - Der Sichtfeld: Wie weit die Fläche vor der Kamera sichtbar sein soll, in Grad.
   - Das {{glossary("Seitenverhältnis")}}: Üblicherweise ist dies das Verhältnis von Szenebreite geteilt durch Szenenhöhe. Ein anderer Wert würde die Szene verzerren (was möglicherweise das ist, was Sie wollen, aber in der Regel nicht).
   - Die nahe Ebene: Wie nah die Kamera an Objekten sein kann, bevor sie auf dem Bildschirm nicht mehr gerendert werden.
   - Die ferne Ebene: Wie weit die Kamera von Objekten entfernt sein kann, bevor sie nicht mehr gerendert werden.

   Wir setzen auch die Kameraposition auf 5 Einheit weg von der Z-Achse, welche, ähnlich wie bei CSS, von der Bildschirmoberfläche zu Ihnen, dem Betrachter, ist.

6. Der dritte notwendige Bestandteil ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene aus der Ansicht durch eine gegebene Kamera rendert. Wir erstellen jetzt eine mit dem [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)-Konstruktor, werden sie jedoch erst später verwenden. Fügen Sie die folgenden Zeilen als nächstes hinzu:

   ```js
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile setzt die Größe, an der der Renderer die Kameransicht zeichnen wird, und die dritte Zeile hängt das vom Renderer erstellte {{htmlelement("canvas")}}-Element an den {{htmlelement("body")}} des Dokumentes an. Jetzt wird alles, was der Renderer zeichnet, in unserem Fenster angezeigt.

7. Als Nächstes möchten wir den Würfel erstellen, den wir auf dem Canvas anzeigen werden. Fügen Sie den folgenden Codeblock am unteren Ende Ihres JavaScript-Codes hinzu:

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

   Hier gibt es mehr zu beachten, lassen Sie uns das in Abschnitten durchgehen:

   - Wir erstellen zuerst eine `cube`-globale Variable, sodass wir auf unseren Würfel von überall im Code zugreifen können.
   - Als Nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt, dann rufen wir `load()` darauf auf. `load()` nimmt zwei Parameter an diesem Fall (obwohl es mehr annehmen kann): die Textur, die wir laden möchten (unser PNG), und eine Funktion, die ausgeführt wird, wenn die Textur geladen wurde.
   - Innerhalb dieser Funktion nutzen wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um zu spezifizieren, dass wir möchten, dass eine 2 x 2 Wiederholung des Bildes um alle Seiten des Würfels gewickelt wird. Als nächstes erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt, und fügen sie in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) zusammen, um unseren Würfel zu erstellen. Ein Objekt benötigt typischerweise eine Geometrie (welche Form es ist) und ein Material (wie seine Oberfläche aussieht).
   - Schließlich fügen wir unseren Würfel der Szene hinzu, dann rufen wir unsere `draw()`-Funktion auf, um die Animation zu starten.

8. Bevor wir zu der Definition von `draw()` kommen, fürgen wir ein paar Lichter zur Szene hinzu, um die Dinge etwas zu beleben; fügen Sie die folgenden Blöcke als nächstes hinzu:

   ```js
   const light = new THREE.AmbientLight("rgb(255 255 255)"); // sanftes weißes Licht
   scene.add(light);

   const spotLight = new THREE.SpotLight("rgb(255 255 255)");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art von weichem Licht, das die gesamte Szene ein wenig erhellt, wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt andererseits ist ein Strahl gerichteten Lichts, eher wie eine Taschenlampe (oder ein Spotlight tatsächlich).

9. Schließlich fügen wir unsere `draw()`-Funktion am unteren Rand des Codes hinzu:

   ```js
   function draw() {
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
     renderer.render(scene, camera);

     requestAnimationFrame(draw);
   }
   ```

   Dies ist ziemlich intuitiv; auf jedem Frame rotieren wir unseren Würfel leicht auf seinen X- und Y-Achsen, dann rendern wir die Szene aus der Perspektive unserer Ka

mera, dann rufen wir schließlich `requestAnimationFrame()` auf, um die Zeichnung unseres nächsten Frames zu planen.

Lassen Sie uns einen schnellen Blick darauf werfen, wie das fertige Produkt aussehen sollte:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Sie können [den fertigen Code auf GitHub finden](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-cube).

> [!NOTE]
> In unserem GitHub-Repo finden Sie auch ein weiteres interessantes 3D-Würfelbeispiel — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([sehen Sie es live auch](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dies verwendet {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}, um einen Videostream von einer Computerwebcam zu nehmen und ihn als Textur auf die Seite des Wurfels zu projizieren!

## Zusammenfassung

An diesem Punkt sollten Sie eine nützliche Vorstellung von den Grundlagen der Grafikprogrammierung mit Canvas und WebGL haben und was Sie mit diesen APIs tun können, sowie ein gutes Gefühl dafür, wo Sie weitere Informationen erhalten können. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklichen Grundlagen des Canvas behandelt — es gibt noch so viel mehr zu lernen! Die untenstehenden Artikel werden Sie weiterführen.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorialserie, die erklärt, was Sie über das 2D-Canvas in viel mehr Details wissen sollten, als es hier behandelt wurde. Unverzichtbare Lektüre.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Serie, die die Grundlagen der Programmierung von rohem WebGL lehrt.
- [Ein einfaches Demo mit Three.js aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — Einfaches Three.js-Tutorial. Wir ha
