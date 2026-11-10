---
title: Bilder verwenden
slug: Web/API/Canvas_API/Tutorial/Using_images
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations" )}}

Bisher haben wir eigene [Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) erstellt und [Stile und Farben darauf angewendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors). Eine der interessanteren Funktionen von {{HTMLElement("canvas")}} ist die Möglichkeit, Bilder zu verwenden. Damit lassen sich dynamische Fotomontagen erstellen, Hintergründe für Diagramme gestalten oder Sprites in Spielen darstellen. Externe Bilder können in jedem vom Browser unterstützten Format verwendet werden, beispielsweise PNG, GIF oder JPEG. Sie können sogar das Bild eines anderen Canvas-Elements auf derselben Seite als Quelle verwenden!

Das Importieren von Bildern in ein Canvas erfolgt im Wesentlichen in zwei Schritten:

1. Rufen Sie eine Referenz auf ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt oder ein anderes Canvas-Element als Quelle ab. Sie können ein Bild auch über eine URL angeben.
2. Zeichnen Sie das Bild mit der Funktion `drawImage()` auf das Canvas.

Sehen wir uns an, wie das funktioniert.

## Bilder zum Zeichnen abrufen

Die Canvas API kann jeden der folgenden Datentypen als Bildquelle verwenden:

- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
  - : Dazu gehören Bilder, die mit dem Konstruktor `Image()` erstellt wurden, sowie jedes {{HTMLElement("img")}}-Element.
- [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)
  - : Dazu gehören Bilder, die mit dem {{SVGElement("image")}}-Element eingebettet wurden.
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
  - : Wenn Sie ein HTML-{{HTMLElement("video")}}-Element als Bildquelle verwenden, wird das aktuelle Videobild als Bild übernommen.
- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
  - : Sie können ein anderes {{HTMLElement("canvas")}}-Element als Bildquelle verwenden.
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
  - : Ein Bitmap-Bild, das gegebenenfalls zugeschnitten wurde. Damit lässt sich ein Teil eines größeren Bildes als _Sprite_ extrahieren.
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
  - : Eine besondere Art von `<canvas>`, die nicht angezeigt wird und im Hintergrund vorbereitet werden kann. Wenn Sie sie als Bildquelle verwenden, können Sie zu ihr wechseln, ohne dass Benutzer die Zusammensetzung des Inhalts sehen.
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - : Ein Bild, das ein einzelnes Videobild darstellt.

Es gibt mehrere Möglichkeiten, Bilder für die Verwendung auf einem Canvas abzurufen.

### Bilder von derselben Seite verwenden

Eine Referenz auf Bilder, die sich auf derselben Seite wie das Canvas befinden, können wir über eine der folgenden Möglichkeiten abrufen:

- Die Sammlung [`document.images`](/de/docs/Web/API/Document/images)
- Die Methode [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)
- Wenn Sie die ID des gewünschten Bildes kennen, können Sie es mit [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) abrufen.

Wenn Sie viele Bilder verwenden oder [Ressourcen verzögert laden](/de/docs/Web/Performance/Guides/Lazy_loading), müssen Sie wahrscheinlich warten, bis alle Dateien verfügbar sind, bevor Sie auf das Canvas zeichnen.
Das folgende Beispiel verarbeitet mehrere Bilder mit einer asynchronen Funktion und [`Promise.all`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all). So wird gewartet, bis alle Bilder geladen sind, bevor `drawImage()` aufgerufen wird:

```js
async function draw() {
  // Wait for all images to be loaded:
  await Promise.all(
    Array.from(document.images).map(
      (image) =>
        new Promise((resolve) => image.addEventListener("load", resolve)),
    ),
  );

  const ctx = document.getElementById("canvas").getContext("2d");
  // call drawImage() as usual
}
draw();
```

### Bilder neu erstellen

Eine weitere Möglichkeit besteht darin, im Skript neue [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte zu erstellen. Dafür steht der Konstruktor `Image()` zur Verfügung:

```js
const img = new Image(); // Create new img element
img.src = "myImage.png"; // Set source path
```

Wenn dieses Skript ausgeführt wird, beginnt das Bild zu laden. Rufen Sie jedoch `drawImage()` auf, bevor das Bild vollständig geladen ist, geschieht nichts.
Ältere Browser können sogar eine Ausnahme auslösen. Verwenden Sie daher das [load-Ereignis](/de/docs/Web/API/HTMLElement/load_event), damit Sie das Bild erst auf das Canvas zeichnen, wenn es bereit ist:

```js
const ctx = document.getElementById("canvas").getContext("2d");
const img = new Image();

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = "myImage.png";
```

Unabhängig davon, ob Sie `<img>`-Elemente im Markup verwenden oder sie programmgesteuert in JavaScript erstellen: Für externe Bilder können [CORS](/de/docs/Web/HTTP/Guides/CORS)-Einschränkungen gelten. Standardmäßig [verunreinigen extern abgerufene Bilder das Canvas](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases), sodass Ihre Website keine Daten ursprungsübergreifend daraus auslesen kann. Mit dem Attribut [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin) eines {{HTMLElement("img")}}-Elements (das sich in der Eigenschaft [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin) widerspiegelt) können Sie mithilfe von CORS die Erlaubnis anfordern, ein Bild von einer anderen Domain zu laden. Wenn die Domain, auf der das Bild gehostet wird, den domainübergreifenden Zugriff erlaubt, können Sie das Bild in Ihrem Canvas verwenden, ohne es zu verunreinigen.

### Ein Bild über eine data:-URL einbetten

Bilder lassen sich auch über eine [data:-URL](/de/docs/Web/URI/Reference/Schemes/data) einbinden. Mit Daten-URLs können Sie ein Bild direkt im Code vollständig als Base64-codierte Zeichenfolge definieren.

```js
const img = new Image(); // Create new img element
img.src =
  "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
```

Ein Vorteil von Daten-URLs besteht darin, dass das resultierende Bild sofort verfügbar ist, ohne dass eine weitere Anfrage an den Server nötig ist. Ein weiterer möglicher Vorteil ist, dass Sie [CSS](/de/docs/Web/CSS), [JavaScript](/de/docs/Web/JavaScript), [HTML](/de/docs/Web/HTML) und Bilder in einer einzigen Datei zusammenfassen können. Dadurch lässt sie sich leichter an andere Orte übertragen.

Nachteile dieser Methode sind, dass das Bild nicht zwischengespeichert wird und die codierte URL bei größeren Bildern sehr lang werden kann.

### Andere Canvas-Elemente verwenden

Wie bei gewöhnlichen Bildern greifen wir auf andere Canvas-Elemente entweder mit der Methode [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName) oder mit [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) zu. Stellen Sie sicher, dass Sie etwas auf das Quell-Canvas gezeichnet haben, bevor Sie es im Ziel-Canvas verwenden.

Eine praktische Anwendung besteht darin, ein zweites Canvas-Element als Miniaturansicht eines größeren Canvas zu verwenden.

### Einzelbilder aus einem Video verwenden

Sie können auch Einzelbilder aus einem Video verwenden, das von einem {{HTMLElement("video")}}-Element bereitgestellt wird – selbst wenn das Video nicht sichtbar ist. Wenn Sie beispielsweise ein {{HTMLElement("video")}}-Element mit der ID „myVideo“ haben, können Sie Folgendes tun:

```js
const video = document.getElementById("myVideo");
video.currentTime = 10; // Seek to 10 seconds into the video
video.pause(); // Pause the video to freeze the frame
```

Das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) befindet sich nun bei der 10-Sekunden-Marke, und Sie können das aktuelle Einzelbild auf Ihr Canvas zeichnen. Damit das Einzelbild beim Aufruf von `drawImage()` verfügbar ist, rufen Sie `drawImage()` innerhalb von [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback#drawing_video_frames_on_a_canvas) auf.

## Bilder zeichnen

Sobald wir eine Referenz auf das Quellbildobjekt haben, können wir es mit der Methode `drawImage()` auf dem Canvas darstellen. Wie wir später sehen werden, ist `drawImage()` überladen und hat mehrere Varianten. In ihrer einfachsten Form sieht die Methode so aus:

- [`drawImage(image, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das durch den Parameter `image` angegebene Bild an den Koordinaten (`x`, `y`).

> [!NOTE]
> Bei SVG-Bildern müssen Breite und Höhe im Wurzelelement \<svg> angegeben sein.

### Beispiel: Ein kleines Liniendiagramm

Im folgenden Beispiel verwenden wir ein externes Bild als Hintergrund für ein kleines Liniendiagramm. Ein Hintergrundbild kann das Skript erheblich verkürzen, da kein Code zum Erzeugen des Hintergrunds erforderlich ist. In diesem Beispiel verwenden wir nur ein Bild. Deshalb nutzen wir den `load`-Ereignishandler des Bildobjekts, um die Zeichenanweisungen auszuführen. Die Methode `drawImage()` platziert das Hintergrundbild an der Koordinate (0, 0), also in der oberen linken Ecke des Canvas.

```html hidden
<canvas id="my-canvas" width="180" height="150"></canvas>
```

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");
  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
    ctx.beginPath();
    ctx.moveTo(30, 96);
    ctx.lineTo(70, 66);
    ctx.lineTo(103, 76);
    ctx.lineTo(170, 15);
    ctx.stroke();
  };
  img.src = "backdrop.png";
}

draw();
```

Das resultierende Diagramm sieht so aus:

{{EmbedLiveSample("example_a_small_line_graph", "", "160")}}

## Skalierung

Die zweite Variante der Methode `drawImage()` fügt zwei Parameter hinzu und ermöglicht es, skalierte Bilder auf dem Canvas zu platzieren.

- [`drawImage(image, x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Die zusätzlichen Parameter `width` und `height` geben an, auf welche Größe das Bild beim Zeichnen auf das Canvas skaliert wird.

### Beispiel: Ein Bild kacheln

In diesem Beispiel verwenden wir ein Bild als Hintergrundmuster und wiederholen es mehrmals auf dem Canvas. Dazu platzieren wir die skalierten Bilder in Schleifen an verschiedenen Positionen. Im folgenden Code durchläuft die erste `for`-Schleife die Zeilen und die zweite `for`-Schleife die Spalten. Das Bild wird auf ein Drittel seiner ursprünglichen Größe skaliert, also auf 50 × 38 Pixel.

> [!NOTE]
> Bilder können beim Vergrößern unscharf und beim starken Verkleinern körnig werden. Wenn ein Bild lesbar bleiben muss, weil es beispielsweise Text enthält, sollten Sie es möglichst nicht skalieren.

```html hidden
<canvas id="my-canvas" width="150" height="150"></canvas>
```

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");
  const img = new Image();
  img.onload = () => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.drawImage(img, j * 50, i * 38, 50, 38);
      }
    }
  };
  img.src = "https://mdn.github.io/shared-assets/images/examples/rhino.jpg";
}

draw();
```

Das resultierende Canvas sieht so aus:

{{EmbedLiveSample("Example_Tiling_an_image", "", "160")}}

## Bildausschnitte verwenden

Die dritte und letzte Variante der Methode `drawImage()` hat neben der Bildquelle acht Parameter. Damit können wir einen Ausschnitt aus dem Quellbild auswählen, skalieren und auf unser Canvas zeichnen.

- [`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Für ein gegebenes `image` wählt diese Funktion den Bereich des Quellbildes aus, der durch ein Rechteck mit der oberen linken Ecke (`sx`, `sy`) sowie der Breite `sWidth` und der Höhe `sHeight` definiert ist. Sie zeichnet diesen Bereich an der Position (`dx`, `dy`) auf das Canvas und skaliert ihn auf die durch `dWidth` und `dHeight` angegebene Größe, wobei das {{Glossary("aspect_ratio", "Seitenverhältnis")}} erhalten bleibt.

Die folgende Abbildung veranschaulicht diesen Vorgang:

![Die Koordinaten der oberen linken Ecke des rechteckigen Quellbildausschnitts sind sx und sy; seine Breite und Höhe sind sWidth beziehungsweise sHeight. Der Quellbildausschnitt wird auf das Ziel-Canvas übertragen. Dort hat das Rechteck die Koordinaten dx und dy für die obere linke Ecke sowie die Breite dWidth und die Höhe dHeight.](canvas_drawimage.jpg)

Die ersten vier Parameter legen Position und Größe des Ausschnitts im Quellbild fest. Die letzten vier Parameter definieren das Rechteck, in das der Ausschnitt auf dem Ziel-Canvas gezeichnet wird.

Bildausschnitte können beim Zusammensetzen von Bildern nützlich sein. Sie können alle Elemente in einer einzigen Bilddatei speichern und mit dieser Methode daraus eine vollständige Zeichnung zusammensetzen. Wenn Sie beispielsweise ein Diagramm erstellen möchten, könnten Sie ein PNG-Bild mit dem gesamten benötigten Text in einer Datei speichern und die Skalierung des Diagramms abhängig von Ihren Daten recht einfach ändern. Ein weiterer Vorteil ist, dass Sie nicht jedes Bild einzeln laden müssen, was die Ladeleistung verbessern kann.

### Beispiel: Ein Bild einrahmen

In diesem Beispiel verwenden wir dasselbe Nashorn wie im vorherigen Beispiel. Diesmal schneiden wir jedoch seinen Kopf aus und setzen ihn in einen Bilderrahmen ein. Das Bild des Bilderrahmens ist ein 24-Bit-PNG mit Schlagschatten. Anders als GIF- und 8-Bit-PNG-Bilder verfügen 24-Bit-PNG-Bilder über einen vollständigen 8-Bit-Alphakanal. Daher lässt sich der Rahmen auf jedem Hintergrund platzieren, ohne dass eine Hintergrundfarbe berücksichtigt werden muss.

```html
<canvas id="canvas" width="150" height="150"></canvas>
<div class="hidden">
  <img
    id="source"
    src="https://mdn.github.io/shared-assets/images/examples/rhino.jpg"
    width="300"
    height="227" />
  <img id="frame" src="canvas_picture_frame.png" width="132" height="150" />
</div>
```

```css hidden
.hidden {
  display: none;
}
```

```js
async function draw() {
  // Wait for all images to be loaded.
  await Promise.all(
    Array.from(document.images).map(
      (image) =>
        new Promise((resolve) => image.addEventListener("load", resolve)),
    ),
  );

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Draw slice
  ctx.drawImage(
    document.getElementById("source"),
    33,
    71,
    104,
    124,
    21,
    20,
    87,
    104,
  );

  // Draw frame
  ctx.drawImage(document.getElementById("frame"), 0, 0);
}

draw();
```

Diesmal laden wir die Bilder auf andere Weise. Statt neue [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte zu erstellen, haben wir sie als {{HTMLElement("img")}}-Tags in den HTML-Quelltext eingefügt und greifen beim Zeichnen auf das Canvas darüber auf die Bilder zu. Die Bilder werden auf der Seite ausgeblendet, indem die CSS-Eigenschaft {{cssxref("display")}} für sie auf `none` gesetzt wird.

{{EmbedLiveSample("example_framing_an_image", "", "160")}}

Jedem {{HTMLElement("img")}} ist ein ID-Attribut zugewiesen: eines für `source` und eines für `frame`. So lassen sich beide mit [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) leicht auswählen.
Mit [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) warten wir, bis alle Bilder geladen sind, bevor wir `drawImage()` aufrufen.
`drawImage()` schneidet das Nashorn aus dem ersten Bild aus und skaliert den Ausschnitt auf das Canvas.
Zum Schluss zeichnen wir den Bilderrahmen mit einem zweiten Aufruf von `drawImage()`.

## Beispiel: Eine Kunstgalerie

Im letzten Beispiel dieses Kapitels erstellen wir eine kleine Kunstgalerie. Die Galerie besteht aus einer Tabelle mit mehreren Bildern. Beim Laden der Seite wird für jedes Bild ein {{HTMLElement("canvas")}}-Element eingefügt und ein Rahmen um das Bild gezeichnet.

In diesem Fall haben alle Bilder eine feste Breite und Höhe; das gilt auch für den Rahmen, der um sie gezeichnet wird. Sie könnten das Skript so erweitern, dass es anhand der Breite und Höhe des jeweiligen Bildes einen genau passenden Rahmen erstellt.

Im folgenden Code verwenden wir [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um auf das Laden aller Bilder zu warten, bevor wir Bilder auf die Canvas-Elemente zeichnen.
Wir durchlaufen die Sammlung [`document.images`](/de/docs/Web/API/Document/images) und fügen für jedes Bild ein neues Canvas-Element hinzu. Beachten Sie außerdem die Verwendung der Methode [`Node.insertBefore`](/de/docs/Web/API/Node/insertBefore). `insertBefore()` ist eine Methode des übergeordneten Knotens (einer Tabellenzelle) des Elements (des Bildes), vor dem wir unseren neuen Knoten (das Canvas-Element) einfügen möchten.

```html
<table>
  <tbody>
    <tr>
      <td><img src="gallery_1.jpg" /></td>
      <td><img src="gallery_2.jpg" /></td>
      <td><img src="gallery_3.jpg" /></td>
      <td><img src="gallery_4.jpg" /></td>
    </tr>
    <tr>
      <td><img src="gallery_5.jpg" /></td>
      <td><img src="gallery_6.jpg" /></td>
      <td><img src="gallery_7.jpg" /></td>
      <td><img src="gallery_8.jpg" /></td>
    </tr>
  </tbody>
</table>
<img id="frame" src="canvas_picture_frame.png" width="132" height="150" />
```

Mit etwas CSS gestalten wir die Darstellung:

```css
body {
  background: 0 -100px repeat-x url("bg_gallery.png") #4f191a;
  margin: 10px;
}

img {
  display: none;
}

table {
  margin: 0 auto;
}

td {
  padding: 15px;
}
```

Das JavaScript zeichnet schließlich unsere eingerahmten Bilder:

```js
async function draw() {
  // Wait for all images to be loaded.
  await Promise.all(
    Array.from(document.images).map(
      (image) =>
        new Promise((resolve) => image.addEventListener("load", resolve)),
    ),
  );

  // Loop through all images.
  for (const image of document.images) {
    // Don't add a canvas for the frame image
    if (image.getAttribute("id") !== "frame") {
      // Create canvas element
      const canvas = document.createElement("canvas");
      canvas.setAttribute("width", 132);
      canvas.setAttribute("height", 150);

      // Insert before the image
      image.parentNode.insertBefore(canvas, image);

      ctx = canvas.getContext("2d");

      // Draw image to canvas
      ctx.drawImage(image, 15, 20);

      // Add frame
      ctx.drawImage(document.getElementById("frame"), 0, 0);
    }
  }
}

draw();
```

{{EmbedLiveSample("Art_gallery_example", 725, 400)}}

## Das Skalierungsverhalten von Bildern steuern

Wie bereits erwähnt, können beim Skalieren von Bildern durch den Skalierungsvorgang unscharfe oder blockartige Artefakte entstehen. Mit der Eigenschaft [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) des Zeichenkontexts können Sie steuern, ob beim Skalieren von Bildern im Kontext Algorithmen zur Bildglättung verwendet werden. Standardmäßig ist die Eigenschaft auf `true` gesetzt, sodass Bilder beim Skalieren geglättet werden.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations")}}
