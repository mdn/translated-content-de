---
title: Grafiken zeichnen
slug: Learn/JavaScript/Client-side_web_APIs/Drawing_graphics
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

Der Browser enthält einige sehr leistungsfähige Werkzeuge zur Grafikprogrammierung, von der Sprache Scalable Vector Graphics ([SVG](/de/docs/Web/SVG)) bis hin zu APIs zum Zeichnen auf HTML-{{htmlelement("canvas")}}-Elementen (siehe [Die Canvas API](/de/docs/Web/API/Canvas_API) und [WebGL](/de/docs/Web/API/WebGL_API)). Dieser Artikel bietet eine Einführung in die Nutzung von Canvas und weiterführende Ressourcen, damit Sie mehr darüber lernen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        JavaScript-Grundlagen (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">Einführung</a>,
        <a href="/de/docs/Learn/JavaScript/Building_blocks">Bausteine</a>,
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
        Die Grundlagen des Zeichnens auf <code>&#x3C;canvas></code>-Elementen mit
        JavaScript zu erlernen.
      </td>
    </tr>
  </tbody>
</table>

## Grafiken im Web

Wie in unserem HTML-Modul [Multimedia und Einbettung](/de/docs/Learn/HTML/Multimedia_and_embedding) angesprochen, bestand das Web ursprünglich nur aus Text, was sehr langweilig war, weshalb Bilder eingeführt wurden — zuerst über das {{htmlelement("img")}}-Element und später über CSS-Eigenschaften wie {{cssxref("background-image")}} und [SVG](/de/docs/Web/SVG).

Das war jedoch immer noch nicht genug. Während Sie [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) nutzen konnten, um SVG-Vektorbilder zu animieren (und anderweitig zu manipulieren) — da sie durch Markup dargestellt werden — gab es immer noch keine Möglichkeit, dasselbe für Bitmap-Bilder zu tun, und die verfügbaren Tools waren ziemlich begrenzt. Das Web hatte immer noch keine Möglichkeit, effektiv Animationen, Spiele, 3D-Szenen und andere Anforderungen zu erstellen, die üblicherweise von niedrigeren Programmiersprachen wie C++ oder Java behandelt werden.

Die Situation begann sich zu verbessern, als Browser 2004 begann, das {{htmlelement("canvas")}}-Element und die zugehörige [Canvas API](/de/docs/Web/API/Canvas_API) zu unterstützen. Wie Sie unten sehen werden, bietet die Canvas-API einige nützliche Werkzeuge zur Erstellung von 2D-Animationen, Spielen, Datenvisualisierungen und anderen Arten von Anwendungen, insbesondere wenn sie mit einigen der anderen APIs der Webplattform kombiniert wird. Allerdings kann es schwierig oder unmöglich sein, diese barrierefrei zu machen.

Das folgende Beispiel zeigt eine einfache 2D-Animation mit Canvas-basierten, hüpfenden Bällen, die wir ursprünglich in unserem Modul [Einführung in JavaScript-Objekte](/de/docs/Learn/JavaScript/Objects/Object_building_practice) kennengelernt haben:

{{EmbedGHLiveSample("learning-area/javascript/oojs/bouncing-balls/index-finished.html", '100%', 500)}}

Etwa 2006–2007 begann Mozilla mit der Arbeit an einer experimentellen 3D-Canvas-Implementierung. Daraus wurde [WebGL](/de/docs/Web/API/WebGL_API), das unter Browser-Herstellern an Bedeutung gewann und um 2009–2010 standardisiert wurde. WebGL ermöglicht es Ihnen, echte 3D-Grafiken direkt in Ihrem Webbrowser zu erstellen; das folgende Beispiel zeigt einen einfachen rotierenden WebGL-Würfel:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Dieser Artikel konzentriert sich hauptsächlich auf 2D-Canvas, da rohe WebGL-Programmierung sehr komplex ist. Wir werden jedoch zeigen, wie man eine WebGL-Bibliothek verwendet, um eine 3D-Szene einfacher zu erstellen. Ein Tutorial zur rohen WebGL-Programmierung finden Sie an anderer Stelle — siehe [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Aktives Lernen: Erste Schritte mit einem `<canvas>`

Wenn Sie eine 2D- _oder_ 3D-Szene auf einer Webseite erstellen möchten, müssen Sie mit einem HTML-{{htmlelement("canvas")}}-Element beginnen. Dieses Element wird verwendet, um den Bereich auf der Seite zu definieren, in den das Bild gezeichnet wird. Das ist so einfach wie das Einfügen des Elements auf der Seite:

```html
<canvas width="320" height="240"></canvas>
```

Dies erzeugt ein Canvas auf der Seite mit einer Größe von 320 mal 240 Pixeln.

Sie sollten einige Fallback-Inhalte innerhalb der `<canvas>`-Tags einfügen. Dies sollte den Canvas-Inhalt für Benutzer von Browsern beschreiben, die Canvas nicht unterstützen, oder für Benutzer von Screenreadern.

```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
```

Der Fallback sollte nützlichen alternativen Inhalt zum Canvas-Inhalt bereitstellen. Wenn Sie beispielsweise ein sich ständig aktualisierendes Diagramm von Aktienkursen erstellen, könnte der Fallback-Inhalt ein statisches Bild des neuesten Börsencharts sein, mit `alt`-Text, der die Kurse beschreibt, oder eine Liste von Links zu einzelnen Aktienseiten.

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attributs direkt auf dem Canvas-Element selbst ein oder fügen Sie Fallback-Inhalte innerhalb der öffnenden und schließenden `<canvas>`-Tags hinzu. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte sind es.

### Erstellung und Größenanpassung unseres Canvas

Beginnen wir mit der Erstellung unseres eigenen Canvas, auf dem wir zukünftige Experimente zeichnen werden.

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

   Wir haben dem `<canvas>`-Element eine `class` hinzugefügt, um es leichter auswählen zu können, wenn wir mehrere Canvas auf der Seite haben. Wir haben jedoch die `width`- und `height`-Attribute vorerst entfernt (Sie könnten sie wieder hinzufügen, wenn Sie möchten, aber wir werden sie in einem untenstehenden Abschnitt mit JavaScript setzen). Canvas ohne explizite Breite und Höhe haben standardmäßig eine Breite von 300 Pixeln und eine Höhe von 150 Pixeln.

3. Öffnen Sie nun "script.js" und fügen Sie die folgenden Zeilen JavaScript hinzu:

   ```js
   const canvas = document.querySelector(".myCanvas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Hier haben wir eine Referenz auf das Canvas im `canvas`-Konstanten gespeichert. In der zweiten Zeile setzen wir sowohl eine neue Konstante `width` als auch die `width`-Eigenschaft des Canvas gleich zu [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) (was uns die Viewport-Breite gibt). In der dritten Zeile setzen wir sowohl eine neue Konstante `height` als auch die `height`-Eigenschaft des Canvas gleich zu [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) (was uns die Viewport-Höhe gibt). Jetzt haben wir ein Canvas, das die gesamte Breite und Höhe des Browserfensters ausfüllt!

   Sie werden auch sehen, dass wir Verkettungszuweisungen mit mehreren Gleichheitszeichen verwenden — dies ist in JavaScript erlaubt und ist eine gute Technik, wenn Sie mehrere Variablen alle auf denselben Wert setzen möchten. Wir wollten die Breite und Höhe des Canvas in den Variablen width/height leicht zugänglich machen, da dies nützliche Werte sind, die später verfügbar sind (zum Beispiel, wenn Sie etwas genau auf die Hälfte der Breite des Canvas zeichnen möchten).

> [!NOTE]
> Sie sollten im Allgemeinen die Größe des Bildes mit HTML-Attributen oder DOM-Eigenschaften anpassen, wie oben erklärt. Sie könnten CSS verwenden, aber das Problem ist dann, dass die Größenanpassung nach dem Rendern des Canvas erfolgt, und genau wie bei jedem anderen Bild (das gerenderte Canvas ist nur ein Bild) könnte das Bild pixelig/verzerrt werden.

### Holen des Canvas-Kontextes und abschließendes Setup

Bevor wir unsere Canvas-Vorlage als fertig betrachten können, müssen wir noch eine letzte Sache tun. Um auf das Canvas zu zeichnen, müssen wir einen speziellen Verweis auf den Zeichenbereich erhalten, der als Kontext bezeichnet wird. Dies geschieht mit der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die für grundlegende Anwendungen einen einzelnen String als Parameter aufnimmt, der den Typ des gewünschten Kontextes repräsentiert.

In diesem Fall wollen wir ein 2D-Canvas, also fügen Sie die folgende JavaScript-Zeile unter den anderen in "script.js" hinzu:

```js
const ctx = canvas.getContext("2d");
```

> [!NOTE]
> Andere mögliche Kontextwerte, die Sie wählen könnten, sind `webgl` für WebGL, `webgl2` für WebGL 2, usw., aber diese werden wir in diesem Artikel nicht benötigen.

Das war's — unser Canvas ist jetzt bereit zum Zeichnen! Die Variable `ctx` enthält nun ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, und alle Zeichenoperationen auf dem Canvas werden die Manipulation dieses Objekts beinhalten.

Lassen Sie uns eine letzte Sache tun, bevor wir fortfahren. Wir werden den Hintergrund des Canvas schwarz färben, um Ihnen einen ersten Eindruck von der Canvas-API zu geben. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScripts hinzu:

```js
ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);
```

Hier setzen wir eine Füllfarbe mit der `fillStyle`-Eigenschaft des Canvas (diese nimmt [Farbwerte](/de/docs/Learn/CSS/Building_blocks/Values_and_units#color) genauso an wie CSS-Eigenschaften) und zeichnen dann ein Rechteck, das den gesamten Bereich des Canvas mit der Methode [`fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) abdeckt (die ersten beiden Parameter sind die Koordinaten der oberen linken Ecke des Rechtecks; die letzten beiden sind die Breite und Höhe, in der Sie das Rechteck zeichnen möchten — wir haben Ihnen gesagt, dass diese `width`- und `height`-Variablen nützlich sein würden)!

Gut, unsere Vorlage ist fertig und es ist Zeit, weiterzumachen.

## 2D-Canvas-Grundlagen

Wie oben erwähnt, werden alle Zeichenoperationen durch Manipulation eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts durchgeführt (in unserem Fall `ctx`). Viele Operationen müssen Koordinaten angegeben werden, um genau festzulegen, wo etwas gezeichnet werden soll — die obere linke Ecke des Canvas ist der Punkt (0, 0), die horizontale (x) Achse verläuft von links nach rechts und die vertikale (y) Achse verläuft von oben nach unten.

![Ein Gitter mit kleinen Quadraten, die den Bereich überdecken, mit einem stahlblauen Quadrat in der Mitte. Die obere linke Ecke des Canvas ist Punkt (0, 0) der Canvas x-Achse und y-Achse. Die horizontale (x) Achse verläuft von links nach rechts und gibt die Breite an, und die vertikale (y) Achse verläuft von oben nach unten und gibt die Höhe an. Die obere linke Ecke des blauen Quadrats ist als eine bestimmte Entfernung von x-Einheiten von der y-Achse und y-Einheiten von der x-Achse bezeichnet.](canvas_default_grid.png)

Das Zeichnen von Formen wird in der Regel mit dem Rechteck-Form-Primitive ausgeführt oder indem eine Linie entlang eines bestimmten Pfads verfolgt und dann die Form gefüllt wird. Unten zeigen wir, wie man beides macht.

### Einfache Rechtecke

Beginnen wir mit einigen einfachen Rechtecken.

1. Machen Sie zuerst eine Kopie Ihrer neu codierten Canvas-Vorlage (oder machen Sie eine lokale Kopie des Verzeichnisses [1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template), wenn Sie die obigen Schritte nicht ausgeführt haben).
2. Fügen Sie als Nächstes die folgenden Zeilen unten in Ihr JavaScript ein:

   ```js
   ctx.fillStyle = "rgb(255 0 0)";
   ctx.fillRect(50, 50, 100, 150);
   ```

Speichern Sie und aktualisieren Sie die Seite. Sie sollten ein rotes Rechteck auf Ihrem Canvas sehen. Seine obere linke Ecke ist 50 Pixel vom oberen und linken Rand des Canvas entfernt (wie durch die ersten beiden Parameter definiert), und es ist 100 Pixel breit und 150 Pixel hoch (wie durch den dritten und vierten Parameter definiert).

3. Fügen wir ein weiteres Rechteck hinzu — diesmal ein grünes. Fügen Sie das folgende am Ende Ihres JavaScripts hinzu:

   ```js
   ctx.fillStyle = "rgb(0 255 0)";
   ctx.fillRect(75, 75, 100, 100);
   ```

Speichern und aktualisieren Sie und Sie werden Ihr neues Rechteck sehen. Das bringt einen wichtigen Punkt zur Sprache: Grafikoperationen wie das Zeichnen von Rechtecken, Linien usw. werden in der Reihenfolge ausgeführt, in der sie auftreten. Stellen Sie sich vor, Sie malen eine Wand, wobei jede Farbschicht überlappt und möglicherweise das darunterliegende verdeckt. Sie können nichts tun, um dies zu ändern; Sie müssen also sorgfältig über die Reihenfolge nachdenken, in der Sie die Grafiken zeichnen.

4. Beachten Sie, dass Sie halbtransparente Grafiken zeichnen können, indem Sie eine halbtransparente Farbe angeben, zum Beispiel durch Verwendung von `rgb()`. Der "Alpha-Kanal" definiert die Menge an Transparenz, die die Farbe hat. Je höher ihr Wert, desto mehr verdeckt sie das, was dahinter liegt. Fügen Sie das folgende Ihrem Code hinzu:

   ```js
   ctx.fillStyle = "rgb(255 0 255 / 75%)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Zeichnen Sie jetzt einige weitere Rechtecke; haben Sie Spaß dabei!

### Striche und Linienbreiten

Bisher haben wir uns angeschaut, wie man gefüllte Rechtecke zeichnet, aber man kann auch Rechtecke zeichnen, die nur Umrisse sind (im Grafikdesign als **Striche** bezeichnet). Um die Farbe anzugeben, die Sie für Ihren Strich wünschen, verwenden Sie die [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)-Eigenschaft; das Zeichnen eines Strichrechtecks geschieht mit [`strokeRect`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Fügen Sie dem vorherigen Beispiel das folgende hinzu, erneut unter den vorherigen JavaScript-Zeilen:

   ```js
   ctx.strokeStyle = "rgb(255 255 255)";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. Die Standardbreite von Strichen beträgt 1 Pixel; Sie können den Wert der [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)-Eigenschaft ändern, um dies zu ändern (sie nimmt eine Zahl, die die Anzahl der Pixel angibt, die der Strich breit ist). Fügen Sie die folgende Zeile zwischen die beiden vorherigen hinzu:

   ```js
   ctx.lineWidth = 5;
   ```

Nun sollten Sie sehen, dass Ihr weißer Umriss viel dicker geworden ist! Das wäre es für den Moment. An diesem Punkt sollte Ihr Beispiel so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles/index.html", '100%', 250)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [2_canvas_rectangles](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles) verfügbar.

### Zeichnen von Pfaden

Wenn Sie mehr als nur ein Rechteck zeichnen möchten, müssen Sie einen Pfad zeichnen. Grundsätzlich bedeutet dies, dass Sie Code schreiben, um genau anzugeben, welchen Pfad der Stift auf Ihrem Canvas entlang gehen soll, um die Form zu zeichnen, die Sie darstellen möchten. Die Canvas-API enthält Funktionen zum Zeichnen von geraden Linien, Kreisen, Bézierkurven und mehr.

Starten wir diesen Abschnitt, indem wir eine neue Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) erstellen, in der wir das neue Beispiel zeichnen werden.

Wir werden einige gängige Methoden und Eigenschaften über alle folgenden Abschnitte hinweg verwenden:

- [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) — Beginnen Sie damit, einen Pfad an dem Punkt zu zeichnen, an dem sich der Stift derzeit auf dem Canvas befindet. Auf einem neuen Canvas beginnt der Stift bei (0, 0).
- [`moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo) — Bewegen Sie den Stift an einen anderen Punkt auf dem Canvas, ohne die Linie zu zeichnen oder aufzuzeichnen; der Stift "springt" zur neuen Position.
- [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) — Zeichnen Sie eine gefüllte Form, indem Sie den bisher verfolgten Pfad füllen.
- [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) — Zeichnen Sie eine Umrissform, indem Sie einen Strich entlang des bisher gezeichneten Pfads zeichnen.
- Sie können auch Funktionen wie `lineWidth` und `fillStyle`/`strokeStyle` mit Pfaden sowie Rechtecken verwenden.

Ein typischer, einfacher Pfadzeichnungsbefehl würde ungefähr so aussehen:

```js
ctx.fillStyle = "rgb(255 0 0)";
ctx.beginPath();
ctx.moveTo(50, 50);
// draw your path
ctx.fill();
```

#### Zeichnen von Linien

Lassen Sie uns ein gleichseitiges Dreieck auf das Canvas zeichnen.

1. Fügen Sie zunächst die folgende Hilfsfunktion am Ende Ihres Codes hinzu. Diese konvertiert Gradwerte in Radianten, was nützlich ist, da wann immer Sie einen Winkelwert in JavaScript angeben müssen, dieser fast immer in Radianten sein wird, aber Menschen normalerweise in Grad denken.

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Beginnen Sie als Nächstes Ihren Pfad, indem Sie das Folgende unter Ihrer vorherigen Hinzufügung hinzufügen; hier setzen wir eine Farbe für unser Dreieck, beginnen den Pfad zu zeichnen und bewegen den Stift dann zu (50, 50), ohne etwas zu zeichnen. Dort beginnen wir, unser Dreieck zu zeichnen.

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

   Zunächst ziehen wir eine Linie bis (150, 50) — unser Pfad geht jetzt 100 Pixel nach rechts entlang der x-Achse.

   Zweitens berechnen wir die Höhe unseres gleichseitigen Dreiecks, indem wir etwas einfache Trigonometrie anwenden. Grundsätzlich zeichnen wir das Dreieck nach unten zeigend. Die Winkel in einem gleichseitigen Dreieck sind immer 60 Grad; um die Höhe zu berechnen, können wir das Dreieck in der Mitte in zwei rechtwinklige Dreiecke teilen, die jeweils Winkel von 90 Grad, 60 Grad und 30 Grad haben werden. In Bezug auf die Seiten:

   - Die längste Seite wird als **Hypotenuse** bezeichnet
   - Die Seite, die an den 60-Grad-Winkel angrenzt, wird als **Ankathete** bezeichnet — die in unserem Beispiel 50 Pixel beträgt, da sie die Hälfte der von uns gerade gezeichneten Linie ist.
   - Die Seite, die dem 60-Grad-Winkel gegenüberliegt, wird als **Gegenkathete** bezeichnet, was die Höhe des Dreiecks ist, die wir berechnen wollen.

   ![Ein gleichseitiges Dreieck, das nach unten zeigt, mit beschrifteten Winkeln und Seiten. Die horizontale Linie oben ist als 'Ankathete' bezeichnet. Eine senkrechte gepunktete Linie, in der Mitte der Ankathete, als 'Gegenkathete' bezeichnet, teilt das Dreieck in zwei gleiche rechte Dreiecke auf. Die rechte Seite des Dreiecks ist die Hypotenuse, da sie die Hypotenuse des rechten Dreiecks bildet, das durch die Linie bezeichnet ist 'Gegenkathete'. Während alle drei Seiten des Dreiecks gleich lang sind, ist die Hypotenuse die längste Seite des rechten Dreiecks.](trigonometry.png)

   Eine der grundlegenden trigonometrischen Formeln besagt, dass die Länge der Ankathete multipliziert mit der Tangente des Winkels gleich der Gegenkathete ist, daher kommen wir auf `50 * Math.tan(degToRad(60))`. Wir verwenden unsere `degToRad()`-Funktion, um 60 Grad in Radianten umzuwandeln, da {{jsxref("Math.tan()")}} erwartet einen Eingabewert in Radianten.

4. Mit der berechneten Höhe ziehen wir eine weitere Linie zu `(100, 50 + triHeight)`. Die X-Koordinate ist einfach; sie muss in der Mitte zwischen den vorherigen zwei von uns gesetzten X-Werten liegen. Die Y-Koordinate muss andererseits 50 plus die Dreieckshöhe sein, da wir wissen, dass die Spitze des Dreiecks 50 Pixel vom oberen Rand des Canvas entfernt ist.
5. Die nächste Linie zieht eine Linie zurück zum Startpunkt des Dreiecks.
6. Zuletzt führen wir `ctx.fill()` aus, um den Pfad zu beenden und die Form auszufüllen.

#### Zeichnen von Kreisen

Nun schauen wir uns an, wie man einen Kreis in Canvas zeichnet. Dies wird mit der [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)-Methode erreicht, die einen ganzen oder einen Teil eines Kreises an einem bestimmten Punkt zeichnet.

1. Fügen wir einen Bogen zu unserem Canvas hinzu — fügen Sie das Folgende am Ende Ihres Codes hinzu:

   ```js
   ctx.fillStyle = "rgb(0 0 255)";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` nimmt sechs Parameter entgegen. Die ersten beiden geben die Position des Mittelpunktes des Bogens an (X und Y, jeweils). Der dritte ist der Radius des Kreises, der vierte und fünfte sind die Start- und Endwinkel, bei denen der Kreis gezeichnet werden soll (durch die Angabe von 0 und 360 Grad erhalten wir einen vollständigen Kreis), und der sechste Parameter definiert, ob der Kreis gegen den Uhrzeigersinn (antiUhrzeigersinn) oder im Uhrzeigersinn gezeichnet werden soll (`false` ist im Uhrzeigersinn).

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

   - Wir haben den letzten Parameter von `arc()` auf `true` gesetzt, was bedeutet, dass der Bogen gegen den Uhrzeigersinn gezeichnet wird, was bedeutet, dass selbst wenn der Bogen so angegeben wird, dass er bei -45 Grad beginnt und bei 45 Grad endet, wir den Bogen über die 270 Grad zeichnen, die nicht innerhalb dieses Bereichs liegen. Wenn Sie `true` durch `false` ersetzen und dann den Code erneut ausführen würden, würde nur das 90-Grad-Stück des Kreises gezeichnet.
   - Bevor `fill()` aufgerufen wird, ziehen wir eine Linie zum Mittelpunkt des Kreises. Dies bedeutet, dass wir das recht nette Pac-Man-artige Ausschnittsdiagramm erhalten. Wenn Sie diese Linie entfernen (probieren Sie es aus!) und dann den Code erneut ausführen, würde einfach eine Kante des Kreises zwischen Start- und Endpunkt des Bogens abgeschnitten. Dies verdeutlicht einen weiteren wichtigen Punkt des Canvas — wenn Sie versuchen, einen unvollständigen Pfad (d.h. einen, der nicht geschlossen ist) zu füllen, füllt der Browser eine gerade Linie zwischen Start- und Endpunkt ein und dann füllt er es aus.

Das wäre es für's Erste; Ihr endgültiges Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/3_canvas_paths/index.html", '100%', 200)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [3_canvas_paths](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/3_canvas_paths) verfügbar.

> [!NOTE]
> Um mehr über fortgeschrittene Pfadzeichnungsfunktionen wie Bézierkurven zu erfahren, schauen Sie sich unser Tutorial [Formen mit Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) an.

### Text

Canvas verfügt auch über Funktionen zum Zeichnen von Text. Lassen Sie uns diese kurz erkunden. Starten Sie, indem Sie eine weitere neue Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) erstellen, um das neue Beispiel zu zeichnen.

Text wird mit zwei Methoden gezeichnet:

- [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText) — zeichnet gefüllten Text.
- [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) — zeichnet Umriss (Strich) Text.

Beide nehmen in ihrer grundlegenden Verwendung drei Eigenschaften auf: den Textstring, der gezeichnet werden soll, und die X- und Y-Koordinaten des Punktes, an dem der Text begonnen werden soll. Dies ist die **untere linke** Ecke der **Textbox** (wörtlich, die Box, die den gezeichneten Text umgibt), was Sie verwirren könnte, da andere Zeichenoperationen normalerweise von der oberen linken Ecke aus starten — beachten Sie dies.

Es gibt auch eine Reihe von Eigenschaften, um die Textrenderung zu steuern, wie [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), mit der Sie Schriftfamilie, -größe usw. angeben können. Sie nimmt als Wert dieselbe Syntax wie die CSS-Eigenschaft {{cssxref("font")}}.

Canvas-Inhalte sind für Screenreader nicht zugänglich. In den Canvas gemalter Text ist nicht im DOM verfügbar, muss aber zugänglich gemacht werden. In diesem Beispiel fügen wir den Text als Wert für `aria-label` hinzu.

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

Hier zeichnen wir zwei Textzeilen, eine Umriss und die andere Strich. Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/4_canvas_text/index.html", '100%', 180)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [4_canvas_text](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/4_canvas_text) verfügbar.

Spielen Sie damit und sehen Sie, was Sie damit erreichen können! Weitere Informationen zu den Optionen, die für Canvas-Text verfügbar sind, finden Sie unter [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Bilder auf Canvas zeichnen

Es ist möglich, externe Bilder auf Ihr Canvas zu rendern. Diese können einfache Bilder, Frames von Videos oder der Inhalt anderer Canvas sein. Für den Moment werden wir uns nur das Verwenden einiger einfacher Bilder auf unserem Canvas ansehen.

1. Erstellen Sie wie zuvor eine weitere neue Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)), um das neue Beispiel zu zeichnen.

   Bilder werden auf Canvas mit der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) gezeichnet. Die einfachste Version nimmt drei Parameter an — einen Verweis auf das Bild, das Sie rendern möchten, und die X- und Y-Koordinaten der oberen linken Ecke des Bildes.

2. Beginnen wir damit, eine Bildquelle zu erhalten, um sie in unser Canvas einzubetten. Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript hinzu:

   ```js
   const image = new Image();
   image.src = "firefox.png";
   ```

   Hier erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt mit dem [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor. Das zurückgegebene Objekt ist vom selben Typ wie das, welches zurückgegeben wird, wenn Sie eine Referenz auf ein bestehendes {{htmlelement("img")}}-Element erhalten. Dann setzen wir dessen [`src`](/de/docs/Web/HTML/Element/img#src)-Attribut auf unser Firefox-Logo-Bild. Zu diesem Zeitpunkt beginnt der Browser, das Bild zu laden.

3. Wir könnten jetzt versuchen, das Bild mit `drawImage()` einzubetten, aber wir müssen sicherstellen, dass die Bilddatei zuerst geladen wurde, ansonsten würde der Code fehlschlagen. Wir können das erreichen, indem wir das `load`-Ereignis verwenden, das nur aufgerufen wird, wenn das Bild geladen wurde. Fügen Sie den folgenden Block unter dem vorherigen hinzu:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Wenn Sie Ihr Beispiel jetzt im Browser laden, sollten Sie das Bild in das Canvas eingebettet sehen.

4. Aber es gibt mehr! Was, wenn wir nur einen Teil des Bildes anzeigen oder es vergrößern möchten? Beides können wir mit der komplexeren Version von `drawImage()` tun. Aktualisieren Sie Ihre `ctx.drawImage()`-Zeile wie folgt:

   ```js
   ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
   ```

   - Der erste Parameter ist der Bildverweis, wie zuvor.
   - Die Parameter 2 und 3 definieren die Koordinaten der oberen linken Ecke des Bereichs, den Sie aus dem geladenen Bild herausschneiden möchten, relativ zur oberen linken Ecke des Bildes selbst. Nichts links vom ersten Parameter oder über dem zweiten wird gezeichnet.
   - Parameter 4 und 5 definieren die Breite und Höhe des Bereichs, den wir aus dem ursprünglichen Bild, das wir geladen haben, herausschneiden möchten.
   - Parameter 6 und 7 definieren die Koordinaten, an denen Sie die obere linke Ecke des ausgeschnittenen Teils des Bildes zeichnen möchten, relativ zur oberen linken Ecke des Canvas.
   - Parameter 8 und 9 definieren die Breite und Höhe, in denen der ausgeschnittene Bereich des Bildes gezeichnet werden soll. In diesem Fall haben wir die gleichen Dimensionen wie den ursprünglichen Ausschnitt angegeben, aber Sie könnten ihn vergrößern, indem Sie unterschiedliche Werte angeben.

5. Wenn das Bild in einer bedeutungsvollen Weise aktualisiert wird, muss die [zugängliche Beschreibung](/de/docs/Glossary/accessible_description) ebenfalls aktualisiert werden.

   ```js
   canvas.setAttribute("aria-label", "Firefox Logo");
   ```

Das fertige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/5_canvas_images/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [5_canvas_images](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/5_canvas_images) verfügbar.

## Schleifen und Animationen

Bisher haben wir einige sehr grundlegende Anwendungen von 2D-Canvas behandelt, aber wirklich erleben Sie die volle Kraft von Canvas nicht, wenn Sie es nicht auf irgendeine Weise aktualisieren oder animieren. Letztendlich bietet Canvas skriptgesteuerte Bilder! Wenn Sie nichts ändern möchten, könnten Sie genauso gut einfach statische Bilder verwenden und sich die ganze Arbeit ersparen.

### Erstellen einer Schleife

Spielerisch mit Schleifen auf Canvas ist recht amüsant — Sie können Canvas-Befehle innerhalb einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) (oder einer anderen Schleifenart) Schleife genauso ausführen wie jeden anderen JavaScript-Code.

Lassen Sie uns ein einfaches Beispiel erstellen.

1. Erstellen Sie eine weitere neue Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie diese in Ihrem Code-Editor.
2. Fügen Sie die folgende Zeile am Ende Ihres JavaScript hinzu. Diese enthält eine neue Methode, [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate), die den Ursprungspunkt des Canvas verschiebt:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

   Dadurch wird der Koordinatenursprung (0, 0) in die Mitte des Canvas verschoben, anstatt in die obere linke Ecke. Dies ist in vielen Situationen sehr nützlich, wie in diesem Fall, in dem wir unser Design relativ zur Mitte des Canvas zeichnen möchten.

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

   Hier implementieren wir dieselbe `degToRad()`-Funktion, die wir im Dreieckbeispiel oben gesehen haben, eine `rand()`-Funktion, die eine Zufallszahl zwischen angegebenen unteren und oberen Grenzen zurückgibt, sowie die Variablen `length` und `moveOffset` (über die wir später mehr erfahren werden) und eine leere `for`-Schleife.

4. Die Idee hier ist, dass wir etwas im `for`-loop auf das Canvas zeichnen und es bei jeder Iteration aktualisieren, um etwas Interessantes zu schaffen. Fügen Sie diesen Code Ihrem `for`-loop hinzu:

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

   - Setzen wir die `fillStyle` auf eine leichte transparente Schattierung von Lila, die sich jedes Mal basierend auf dem Wert von `length` ändert. Wie Sie später sehen werden, wird die Länge jedes Mal kleiner, wenn die Schleife läuft, sodass der Effekt hier ist, dass die Farbe bei jedem erfolgreich gezeichneten Dreieck heller wird.
   - Beginnen wir den Pfad.
   - Bewegen wir den Stift zu einer Koordinate von `(moveOffset, moveOffset)`; Diese Variable definiert, wie weit wir jedes Mal bewegen möchten, wenn wir ein neues Dreieck zeichnen.
   - Zeichnen wir eine Linie zu einer Koordinate von `(moveOffset+length, moveOffset)`. Dies zeichnet eine Linie von der Länge `length` parallel zur X-Achse.
   - Berechnen wir die Höhe des Dreiecks wie früher.
   - Ziehen wir eine Linie zur nach unten zeigenden Ecke des Dreiecks, dann ziehen wir eine Linie zurück zum Startpunkt des Dreiecks.
   - Rufen wir `fill()` auf, um das Dreieck zu füllen.
   - Aktualisieren wir die Variablen, die die Dreieckssequenz beschreiben, um bereit zu sein, das nächste zu zeichnen. Wir verringern den `length`-Wert um 1, sodass die Dreiecke jedes Mal kleiner werden; erhöhen `moveOffset` um einen kleinen Betrag, sodass jedes folgende Dreieck ein wenig weiter entfernt ist, und verwenden eine weitere neue Funktion, [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate), die es uns erlaubt, das gesamte Canvas zu drehen! Wir drehen es um 5 Grad, bevor das nächste Dreieck gezeichnet wird.

Das ist es! Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop/index.html", '100%', 550)}}

An diesem Punkt möchten wir Sie dazu ermutigen, mit dem Beispiel zu spielen und es zu Ihrem Eigenen zu machen! Beispielsweise:

- Zeichnen Sie Rechtecke oder Bögen anstelle von Dreiecken oder sogar betteten Sie Bilder ein.
- Spielen Sie mit den `length`- und `moveOffset`-Werten.
- Fügen Sie einige Zufallszahlen mit der `rand()`-Funktion hinzu, die wir oben enthalten haben, aber noch nicht verwendet haben.

> [!NOTE]
> Der fertige Code ist auf GitHub als [6_canvas_for_loop](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop) verfügbar.

### Animationen

Das Schleifenbeispiel, das wir oben erstellt haben, war unterhaltsam, aber wirklich benötigen Sie eine konstante Schleife, die kontinuierlich läuft, um ernsthafte Canvas-Anwendungen zu erstellen (wie Spiele und Echtzeitvisualisierungen). Wenn Sie Ihr Canvas wie einen Film betrachten, möchten Sie, dass das Display bei jedem Frame aktualisiert wird, um die aktualisierte Ansicht anzuzeigen, mit einer idealen Bildwiederholrate von 60 Frames pro Sekunde, damit die Bewegungen flüssig erscheinen.

Es gibt einige JavaScript-Funktionen, die es ermöglichen, Funktionen wiederholt, mehrere Male pro Sekunde auszuführen, wobei die beste hier für unsere Zwecke [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) ist. Es nimmt einen Parameter entgegen — den Namen der Funktion, die Sie für jeden Frame ausführen möchten. Das nächste Mal, wenn der Browser bereit ist, den Bildschirm zu aktualisieren, wird Ihre Funktion aufgerufen. Wenn diese Funktion das neue Update für Ihre Animation zeichnet, dann `requestAnimationFrame()` direkt vor dem Ende der Funktion erneut auf schreibt, wird die Animationsschleife weiterhin ausgeführt. Die Schleife endet, wenn Sie aufhören, `requestAnimationFrame()` aufzurufen, oder wenn Sie [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) nach dem Aufruf von `requestAnimationFrame()` und vor der Ausführung des Frames aufrufen.

> [!NOTE]
> Es ist gute Praxis, `cancelAnimationFrame()` von Ihrem Hauptcode aus aufzurufen, wenn Sie mit der Animation fertig sind, um sicherzustellen, dass keine Updates weiterhin warten, um ausgeführt zu werden.

Der Browser regelt komplexe Details wie das regelmäßige Ablaufen der Animation und das Sparen von Ressourcen durch das Animieren von Dingen, die nicht sichtbar sind.

Um zu sehen, wie es funktioniert, werfen wir noch einmal einen kurzen Blick auf unser Bouncing-Balls-Beispiel ([sehen Sie es live](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html) und sehen Sie auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/oojs/bouncing-balls)). Der Code für die Schleife, die alles bewegt, sieht so aus:

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

Wir führen die `loop()`-Funktion einmal am Ende des Codes aus, um den Zyklus zu starten, der den ersten Animations-Frame zeichnet; die `loop()`-Funktion übernimmt dann die Aufgabe, `requestAnimationFrame(loop)` aufzurufen, um den nächsten Frame der Animation auszuführen, immer wieder.

Beachten Sie, dass wir bei jedem Frame das Canvas vollständig leeren und alles neu zeichnen. Für jeden vorhandenen Ball zeichnen wir ihn, aktualisieren seine Position und prüfen, ob er mit anderen Bällen kollidiert. Sobald Sie eine Grafik auf ein Canvas gezogen haben, gibt es keine Möglichkeit, diese Grafik individuell zu manipulieren, wie Sie es mit DOM-Elementen können. Sie können jeden Ball nicht auf dem Canvas bewegen, da er, sobald er gezeichnet wurde, Teil des Canvas ist und kein einzelnes zugängliches Element oder Objekt ist. Stattdessen müssen Sie löschen und neu zeichnen, indem Sie entweder den gesamten Frame löschen und alles neu zeichnen oder indem Sie Code haben, der genau weiß, welche Teile gelöscht werden müssen und nur das Minimum an Fläche des Canvas, das notwendig ist, gelöscht und neu gezeichnet wird.

Die Optimierung der Animation von Grafiken ist eine ganze Spezialität der Programmierung, mit vielen cleveren Techniken. Diese gehen jedoch über das hinaus, was wir für unser Beispiel benötigen!

Im Allgemeinen umfasst der Prozess eine Canvas-Animation die folgenden Schritte:

1. Löschen Sie den Canvas-Inhalt (z.B. mit [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) oder [`clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. Speichern Sie den Zustand (falls erforderlich) mit [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save) — dies ist erforderlich, wenn Sie Einstellungen speichern möchten, die Sie auf dem Canvas aktualisiert haben, bevor Sie fortfahren, was für fortgeschrittenere Anwendungen nützlich ist.
3. Zeichnen Sie die Grafiken, die Sie animieren möchten.
4. Stellen Sie die Einstellungen wieder her, die Sie in Schritt 2 gespeichert haben, mit [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
5. Rufen Sie `requestAnimationFrame()` auf, um die Zeichnung des nächsten Animations-Frames zu terminieren.

> [!NOTE]
> Wir werden `save()` und `restore()` hier nicht behandeln, aber sie werden in unserem [Transformationen](/de/docs/Web/API/Canvas_API/Tutorial/Transformations)-Tutorial (und denen, die darauf folgen) schön erklärt.

### Eine einfache Charakteranimation

Lassen Sie uns nun eine einfache Animation erstellen — wir lassen eine Figur aus einem gewissen ziemlich großartigen Retro-Computerspiel über den Bildschirm laufen.

1. Erstellen Sie eine weitere neue Kopie unserer Canvas-Vorlage ([1_canvas_template](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) und öffnen Sie diese in Ihrem Code-Editor.

2. Aktualisieren Sie das innere HTML, um das Bild zu widerspiegeln:

   ```html
   <canvas class="myCanvas">
     <p>A man walking.</p>
   </canvas>
   ```

3. Am Ende des JavaScripts fügen Sie erneut die folgende Zeile hinzu, um die Koordinatenursprung in die Mitte des Canvas zu setzen:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

4. Lassen Sie uns eine neue [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt erstellen, sein [`src`](/de/docs/Web/HTML/Element/img#src) auf das Bild setzen, das wir laden möchten, und ein `onload`-Ereignishandler hinzufügen, der die `draw()`-Funktion aktiviert, wenn das Bild geladen ist:

   ```js
   const image = new Image();
   image.src = "walk-right.png";
   image.onload = draw;
   ```

5. Nun fügen wir einige Variablen hinzu, um die Position zu verfolgen, an der der Sprite auf dem Bildschirm gezeichnet werden soll, und die Sprite-Nummer, die wir anzeigen möchten.

   ```js
   let sprite = 0;
   let posX = 0;
   ```

   Lassen Sie uns das Sprite-Image erklären (das wir respektvoll von Mike Thomas' [Walking cycle using CSS animation](https://codepen.io/mikethomas/pen/kQjKLW) CodePen entliehen haben). Das Bild sieht so aus:

   ![Ein Spritesheet mit sechs Spritebildern eines pixelisierten Charakters, die eine gehende Person von ihrer rechten Seite in unterschiedlichen Momenten eines einzelnen Schritts nach vorne darstellen. Der Charakter hat ein weißes Hemd mit himmelblauen Knöpfen, schwarze Hosen und schwarze Schuhe. Jeder Sprite ist 102 Pixel breit und 148 Pixel hoch.](walk-right.png)

   Es enthält sechs Sprites, die die gesamte Gehsequenz darstellen — jedes ist 102 Pixel breit und 148 Pixel hoch. Um jeden Sprite sauber anzuzeigen, müssen wir `drawImage()` verwenden, um ein einzelnes Sprite-Bild aus dem Spritesheet auszuschneiden und nur diesen Teil anzuzeigen, wie wir es zuvor mit dem Firefox-Logo gemacht haben. Die X-Koordinate des Ausschnitts muss ein Vielfaches von 102 sein, und die Y-Koordinate wird immer 0 sein. Die Ausschnittgröße wird immer 102 mal 148 Pixel betragen.

6. Lassen Sie uns nun eine leere `draw()`-Funktion am Ende des Codes einfügen, die bereit ist, mit Code gefüllt zu werden:

   ```js
   function draw() {}
   ```

7. Der Rest des Codes in diesem Abschnitt geht in die `draw()`-Funktion. Fügen Sie zunächst die folgende Zeile hinzu, die das Canvas löscht, um es auf das Zeichnen jedes Frames vorzubereiten. Beachten Sie, dass wir die obere linke Ecke des Rechtecks als `-(width/2), -(height/2)` angeben müssen, weil wir den Ursprungspunkt zuvor als `width/2, height/2` festgelegt haben.

   ```js
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

8. Als Nächstes zeichnen wir unser Bild mit drawImage — der 9-Parameter-Version. Fügen Sie das folgende hinzu:

   ```js
   ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);
   ```

   Wie Sie sehen können:

   - Wir geben `image` als das Bild an, das eingebettet werden soll.
   - Die Parameter 2 und 3 geben die obere linke Ecke des Ausschnitts an, der aus dem Quellbild herausgeschnitten werden soll, wobei der X-Wert als `sprite` multipliziert mit 102 (wo `sprite` die Spritenummer zwischen 0 und 5 ist) und der Y-Wert immer 0 ist.
   - Die Parameter 4 und 5 geben die Größe des herauszuschneidenden Ausschnitts an — 102 Pixel mal 148 Pixel.
   - Die Parameter 6 und 7 geben die obere linke Ecke des Feldes an, in das der Ausschnitt auf das Canvas gezeichnet werden soll — die X-Position ist 0 + `posX`, d.h. wir können die Zeichenposition ändern, indem wir den `posX`-Wert ändern.
   - Die Parameter 8 und 9 geben die Größe des Bildes auf dem Canvas an. Wir möchten seine ursprüngliche Größe beibehalten, daher geben wir 102 und 148 als Breite und Höhe an.

9. Nun ändern wir den `sprite`-Wert nach jedem Zeichnen — zumindest nach einigen von ihnen. Fügen Sie folgenden Block am Ende der `draw()`-Funktion hinzu:

   ```js
   if (posX % 13 === 0) {
     if (sprite === 5) {
       sprite = 0;
     } else {
       sprite++;
     }
   }
   ```

   Wir verpacken den gesamten Block in `if (posX % 13 === 0) { }`. Wir verwenden den Modulo-Operator (`%`) (auch bekannt als [Rechnerrestoperator](/de/docs/Web/JavaScript/Reference/Operators/Remainder)), um zu prüfen, ob der `posX`-Wert genau durch 13 ohne Rest geteilt werden kann. Wenn ja, wechseln wir zum nächsten Sprite, indem wir `sprite` inkrementieren (wechseln auf 0, nachdem wir mit Sprite #5 fertig sind). Das bedeutet im Wesentlichen, dass wir das Sprite nur bei jedem dreizehnten Frame aktualisieren, oder grob etwa 5 Bilder pro Sekunde (`requestAnimationFrame()` ruft uns bis zu 60 Bilder pro Sekunde auf, wenn möglich). Wir verlangsamen die Bildrate bewusst, da wir nur sechs Sprites zur Verfügung haben, und wenn wir eines alle 60/1000 einer Sekunde anzeigen würden, würde sich unser Charakter viel zu schnell bewegen!

   Innerhalb des äußeren Blocks verwenden wir eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung, um zu prüfen, ob der `sprite`-Wert bei 5 ist (das letzte Sprite, da die Spritenummern von 0 bis 5 laufen). Wenn wir bereits das letzte Sprite anzeigen, setzen wir `sprite` wieder auf 0; Wenn nicht, erhöhen wir es einfach um 1.

10. Als Nächstes müssen wir herausfinden, wie wir den `posX`-Wert bei jedem Frame ändern können — fügen Sie den folgenden Codeblock direkt unter Ihrem letzten hinzu.

    ```js
    if (posX > width / 2) {
      let newStartPos = -(width / 2 + 102);
      posX = Math.ceil(newStartPos);
      console.log(posX);
    } else {
      posX += 2;
    }
    ```

    Wir verwenden eine weitere `if...else`-Anweisung, um zu prüfen, ob der Wert von `posX` größer als `width/2` geworden ist, was bedeutet, dass unser Charakter vom rechten Rand des Bildschirms gelaufen ist. Wenn ja, berechnen wir eine Position, die den Charakter gerade links vom linken Rand des Bildschirms platzieren würde.

    Wenn unser Charakter den Rand des Bildschirms noch nicht erreicht hat, erhöhen wir `posX` um 2. Dies wird ihn ein wenig nach rechts verschieben, das nächste Mal, wenn wir ihn zeichnen.

11. Schließlich müssen wir die Animation in einer Schleife ausführen lassen, indem wir [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) am Ende der `draw()`-Funktion aufrufen:

    ```js
    window.requestAnimationFrame(draw);
    ```

Das war's! Das endgültige Beispiel sollte so aussehen:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation/index.html", '100%', 260)}}

> [!NOTE]
> Der fertige Code ist auf GitHub als [7_canvas_walking_animation](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation) verfügbar.

### Eine einfache Zeichenanwendung

Als letztes Animationsbeispiel möchten wir Ihnen eine sehr einfache Zeichenanwendung zeigen, um zu veranschaulichen, wie die Animationsschleife mit Benutzereingaben (wie Mausbewegungen in diesem Fall) kombiniert werden kann. Wir werden Ihnen nicht erklären, wie Sie diese erstellen; wir werden nur die interessantesten Teile des Codes erkunden.

Das Beispiel auf GitHub als [8_canvas_drawing_app](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app) verfügbar, und Sie können es live unten ausprobieren:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app/index.html", '100%', 600)}}

Lassen Sie uns die interessantesten Teile untersuchen. Zuerst verfolgen wir die X- und Y-Koordinaten der Maus und ob sie angeklickt wird oder nicht mit drei Variablen: `curX`, `curY` und `pressed`. Wenn sich die Maus bewegt, wird eine Funktion aufgerufen, die als `onmousemove`-Ereignishandler eingestellt ist, welche die aktuellen X- und Y-Werte erfasst. Wir verwenden auch `onmousedown` und `onmouseup`-Ereignishandler, um den Wert von `pressed` auf `true` zu ändern, wenn die Maustaste gedrückt wird, und wieder auf `false`, wenn sie losgelassen wird.

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

Wenn die Schaltfläche "Canvas löschen" gedrückt wird, führen wir eine einfache Funktion aus, die das gesamte Canvas wie zuvor auf Schwarz zurücksetzt:

```js
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
});
```

Die Zeichenschleife ist diesmal ziemlich einfach — wenn pressed `true` ist, zeichnen wir einen Kreis mit einem Füllstil, der dem Wert im Farbwähler entspricht, und einem Radius, der dem im Eingabebereich festgelegten Wert entspricht. Wir müssen den Kreis um 85 Pixel überhalb des Punktes zeichnen, von dem wir es gemessen haben, da die vertikale Messung von oben im Viewport erfolgt, aber wir den Kreis relativ zur Spitze des Canvas zeichnen, der unterhalb der 85 Pixel hohen Symbolleiste beginnt. Wenn wir es mit nur `curY` als y-Koordinate zeichnen würden, würde es 85 Pixel niedriger als die Mausposition erscheinen.

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

Alle {{htmlelement("input")}}-Typen sind gut unterstützt. Wenn ein Browser einen Eingabetyp nicht unterstützt, fällt er auf ein einfaches Texteingabefeld zurück.

## WebGL

Es ist jetzt an der Zeit, 2D hinter sich zu lassen und einen kurzen Blick auf 3D-Canvas zu werfen. 3D-Canvas-Inhalte werden mit der [WebGL-API](/de/docs/Web/API/WebGL_API) spezifiziert, die vollständig von der 2D-Canvas-API getrennt ist, obwohl beide auf {{htmlelement("canvas")}}-Elemente rendern.

WebGL basiert auf [OpenGL](/de/docs/Glossary/OpenGL) (Open Graphics Library) und ermöglicht es Ihnen, direkt mit der [GPU](/de/docs/Glossary/GPU) zu kommunizieren. Als solches ist das Schreiben von rohem WebGL mehr mit niedrigen Programmiersprachen wie C++ als mit normalem JavaScript vergleichbar; es ist ziemlich komplex, aber unglaublich leistungsfähig.

### Eine Bibliothek verwenden

Aufgrund seiner Komplexität schreiben die meisten Leute 3D-Grafikcode mithilfe einer Drittanbieter-JavaScript-Bibliothek wie [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). Die meisten dieser Bibliotheken funktionieren auf ähnliche Weise, indem sie Funktionalität bieten, um primitive und benutzerdefinierte Formen zu erstellen, Kameras und Beleuchtung zu positionieren, Oberflächen mit Texturen zu abzubilden und mehr. Sie kümmern sich um das WebGL für Sie und ermöglichen es Ihnen, auf einer höheren Ebene zu arbeiten.

Ja, die Verwendung einer dieser Bibliotheken bedeutet das Erlernen einer anderen neuen API (einer Drittanbieter-API in diesem Fall), aber sie sind viel einfacher als das Programmieren von rohem WebGL.

### Unseren Würfel nachbauen

Lassen Sie uns ein einfaches Beispiel betrachten, wie man etwas mit einer WebGL-Bibliothek erstellt. Wir wählen [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), da es eine der beliebtesten Bibliotheken ist. In diesem Tutorial erstellen wir den 3D-spinnenden Würfel, den wir zuvor gesehen haben.

1. Beginnen Sie damit, eine lokale Kopie von [threejs-cube/index.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/index.html) in einem neuen Ordner zu speichern, dann speichern Sie eine Kopie von [metal003.png](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/metal003.png) im selben Ordner. Dies ist das Bild, das wir später als Oberflächentextur für den Würfel verwenden werden.
2. Erstellen Sie anschließend eine neue Datei namens `script.js`, wieder im selben Ordner wie zuvor.
3. Als Nächstes müssen Sie die Three.js-Bibliothek installiert haben. Sie können die Anweisungen zur Einrichtung der Umgebung im [Building up a basic demo with Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) durchgehen, damit Three.js wie erwartet funktioniert.
4. Jetzt haben wir `three.js` an unsere Seite angehängt, wir können beginnen, JavaScript zu schreiben, das es in `script.js` verwendet. Beginnen wir mit der Erstellung einer neuen Szene — fügen Sie das Folgende in Ihre `script.js`-Datei ein:

   ```js
   const scene = new THREE.Scene();
   ```

   Der [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene)-Konstruktor erstellt eine neue Szene, die die gesamte 3D-Welt darstellt, die wir anzeigen möchten.

5. Als Nächstes benötigen wir eine **Kamera**, damit wir die Szene sehen können. In 3D-Bildgebungsbegriffen repräsentiert die Kamera die Position des Betrachters in der Welt. Um eine Kamera zu erstellen, fügen Sie als Nächstes die folgenden Zeilen hinzu:

   ```js
   const camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000,
   );
   camera.position.z = 5;
   ```

   Der [`PerspectiveCamera()`](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera)-Konstruktor nimmt vier Argumente entgegen:

   - Das Sichtfeld: Wie groß ist der Bereich vor der Kamera, der auf dem Bildschirm sichtbar sein soll, in Grad angegeben.
   - Das [Seitenverhältnis](/de/docs/Glossary/aspect_ratio): Normalerweise ist dies das Verhältnis der Breite der Szene geteilt durch die Höhe der Szene. Die Verwendung eines anderen Werts wird die Szene verzerren (was vielleicht gewünscht ist, aber normalerweise nicht).
   - Die Nahdistanzebene: Ab wie nah zur Kamera Objekte sein können, bevor wir aufhören, sie auf den Bildschirm zu rendern. Denken Sie daran, wie Sie Ihren Finger immer näher zwischen Ihre Augen bringen, bis Sie ihn nicht mehr sehen können.
   - Die Ferndistanzebene: Wie weit entfernt Dinge von der Kamera sind, bevor sie nicht mehr gerendert werden.

   Wir setzen auch die Position der Kamera auf 5 Einheitsabstände entlang der Z-Achse, die, wie in CSS, aus dem Bildschirm in Richtung zu Ihnen, dem Betrachter, geht.

6. Die dritte wesentliche Zutat ist ein Renderer. Dies ist ein Objekt, das eine gegebene Szene, gesehen durch eine gegebene Kamera, rendert. Wir erstellen vorerst einen mit dem [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)-Konstruktor, aber wir verwenden ihn erst später. Fügen Sie als Nächstes die folgenden Zeilen hinzu:

   ```js
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   Die erste Zeile erstellt einen neuen Renderer, die zweite Zeile setzt die Größe, mit der der Renderer die Sicht der Kamera zeichnen wird, und die dritte Zeile hängt das {{htmlelement("canvas")}}-Element, das vom Renderer erstellt wurde, an das {{htmlelement("body")}}-Dokument an. Jetzt wird alles, was der Renderer zeichnet, in unserem Fenster angezeigt.

7. Als Nächstes möchten wir den Würfel erstellen, den wir auf dem Canvas anzeigen werden. Fügen Sie den folgenden Code am Ende Ihres JavaScript hinzu:

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

   Hier gibt es etwas mehr zu begreifen, also gehen wir es in Teilen durch:

   - Wir erstellen zuerst eine globale Variable `cube`, damit wir von überall im Code auf unseren Würfel zugreifen können.
   - Als Nächstes erstellen wir ein neues [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader)-Objekt und rufen `load()` darauf auf. `load()` nimmt in diesem Fall zwei Parameter an (obwohl es mehr aufnehmen kann): die zu ladende Textur (unser PNG) und eine Funktion, die ausgeführt wird, wenn die Textur geladen wurde.
   - Innerhalb dieser Funktion verwenden wir Eigenschaften des [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture)-Objekts, um anzugeben, dass wir eine 2 x 2-Wiederholung des Bildes über alle Seiten des Würfels gewickelt wünschen. Danach erstellen wir ein neues [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)-Objekt und ein neues [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial)-Objekt und bringen sie zusammen in einem [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh), um unseren Würfel zu erstellen. Ein Objekt erfordert typischerweise eine Geometrie (welche Form es hat) und ein Material (wie seine Oberfläche aussieht).
   - Letztendlich fügen wir unseren Würfel zur Szene hinzu und rufen unsere `draw()`-Funktion auf, um die Animation zu starten.

8. Bevor wir `draw()` definieren, fügen wir ein paar Lichter zur Szene hinzu, um sie etwas lebendiger zu machen; fügen Sie als Nächstes die folgenden Blöcke hinzu:

   ```js
   const light = new THREE.AmbientLight("rgb(255 255 255)"); // soft white light
   scene.add(light);

   const spotLight = new THREE.SpotLight("rgb(255 255 255)");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Ein [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight)-Objekt ist eine Art weiches Licht, das die gesamte Szene etwas aufhellt, wie die Sonne, wenn Sie draußen sind. Das [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight)-Objekt hingegen ist ein gerichteter Lichtstrahl, mehr wie eine Taschenlampe (oder ein Scheinwerfer, in der Tat).

9. Schließlich lassen Sie uns die `draw()`-Funktion am Ende des Codes hinzufügen:

   ```js
   function draw() {
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
     renderer.render(scene, camera);

     requestAnimationFrame(draw);
   }
   ```

   Dies ist ziemlich intuitiv; bei jedem Frame drehen wir unseren Würfel leicht auf seinen X- und Y-Achsen, rendern dann die Szene mit der Kameraansicht und rufen schließlich `requestAnimationFrame()` auf, um die Zeichnung unseres nächsten Frames zu terminieren.

Werfen wir noch einen kurzen Blick darauf, wie das Endprodukt aussehen sollte:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Sie können den fertigen Code auch [auf GitHub finden](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-cube).

> [!NOTE]
> In unserem GitHub-Repo finden Sie auch ein weiteres interessantes 3D-Würfel-Beispiel — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube) ([siehe es live](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Dies verwendet [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um einen Videostream von einer Computer-Webcam aufzunehmen und auf die Seite des Würfels als Textur zu projizieren!

## Zusammenfassung

An diesem Punkt sollten Sie eine nützliche Vorstellung von den Grundlagen der Grafikprogrammierung mit Canvas und WebGL haben und davon, was Sie mit diesen APIs tun können, sowie eine gute Vorstellung davon, wo Sie weitere Informationen finden können. Viel Spaß!

## Siehe auch

Hier haben wir nur die wirklichen Grundlagen von Canvas angesprochen — es gibt so viel mehr zu lernen! Die folgenden Artikel werden Sie weiterbringen.

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — Eine sehr detaillierte Tutorial-Reihe, die erklärt, was Sie über 2D-Canvas wissen sollten, in wesentlich mehr Detail als hier behandelt wurde. Essenzielle Lektüre.
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) — Eine Serie, die die Grundlagen des programmierten WebGL erläutert.
- [Ein einfaches Demo mit Three.js erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — Grundlagen-Tutorial zu Three.js. Wir haben auch entsprechende Leitfäden für [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) und [Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Spielentwicklung](/de/docs/Games) — Die Hauptseite für die Entwicklung von Webspielen auf MDN. Es gibt einige wirklich nützliche Tutorials und Techniken, die sich auf 2D- und 3D-Canvas beziehen — siehe die Optionen Techniken und Tutorials im Menü.

## Beispiele

- [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin) — Verwendet die Web Audio API, um Ton zu erzeugen, und Canvas, um eine hübsche Visualisierung dazu zu generieren.
- [Voice Change-o-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) — Verwendet ein Canvas, um Echtzeit-Audiodaten von der Web Audio API zu visualisieren.

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}
