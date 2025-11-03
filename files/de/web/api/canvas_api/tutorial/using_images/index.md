---
title: Verwendung von Bildern
slug: Web/API/Canvas_API/Tutorial/Using_images
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations")}}

Bisher haben wir unsere eigenen [Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) erstellt und [Stile angewendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors). Eine der spannendsten Funktionen von {{HTMLElement("canvas")}} ist die Möglichkeit, Bilder zu verwenden. Diese können für dynamische Fotokompositionen, als Hintergründe von Diagrammen, für Sprites in Spielen und so weiter genutzt werden. Externe Bilder können in jedem vom Browser unterstützten Format verwendet werden, wie PNG, GIF oder JPEG. Sie können sogar das Bild verwenden, das von anderen Canvas-Elementen auf derselben Seite erstellt wurde, als Quelle!

Bilder in ein Canvas zu importieren ist im Wesentlichen ein zweistufiger Prozess:

1. Erhalten Sie eine Referenz zu einem [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt oder zu einem anderen Canvas-Element als Quelle. Es ist auch möglich, Bilder durch Bereitstellung einer URL zu verwenden.
2. Zeichnen Sie das Bild mit der `drawImage()`-Funktion auf das Canvas.

Schauen wir uns an, wie das geht.

## Bilder zum Zeichnen erhalten

Die Canvas-API kann folgende Datentypen als Bildquelle verwenden:

- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
  - : Diese sind Bilder, die mit dem `Image()`-Konstruktor erstellt wurden, sowie jedes {{HTMLElement("img")}}-Element.
- [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)
  - : Diese sind Bilder, die mit dem {{SVGElement("image")}}-Element eingebettet wurden.
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
  - : Die Verwendung eines HTML-{{HTMLElement("video")}}-Elements als Bildquelle erfasst den aktuellen Frame aus dem Video und verwendet ihn als Bild.
- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
  - : Sie können ein anderes {{HTMLElement("canvas")}}-Element als Bildquelle verwenden.
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
  - : Ein Bitmap-Bild, eventuell zugeschnitten. Solche Typen werden verwendet, um Teile eines Bildes, einen _Sprite_, aus einem größeren Bild auszuschneiden.
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
  - : Eine spezielle Art von `<canvas>`, die nicht angezeigt wird und vorbereitet wird, ohne angezeigt zu werden. Die Verwendung einer solchen Bildquelle ermöglicht es, darauf umzuschalten, ohne dass die Komposition des Inhalts für den Benutzer sichtbar wird.
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - : Ein Bild, das einen einzelnen Frame eines Videos darstellt.

Es gibt verschiedene Möglichkeiten, Bilder zu erhalten, die auf einem Canvas verwendet werden.

### Verwendung von Bildern von derselben Seite

Wir können auf Bilder auf derselben Seite wie das Canvas zugreifen, indem wir eine der folgenden Methoden verwenden:

- Die [`document.images`](/de/docs/Web/API/Document/images)-Sammlung
- Die Methode [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)
- Wenn Sie die ID des spezifischen Bildes kennen, das Sie verwenden möchten, können Sie [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwenden, um dieses spezifische Bild abzurufen

Wenn Sie viele Bilder verwenden oder [Ressourcen lazy-loaden](/de/docs/Web/Performance/Guides/Lazy_loading) möchten, müssen Sie wahrscheinlich warten, bis alle Dateien verfügbar sind, bevor Sie auf das Canvas zeichnen.
Das folgende Beispiel befasst sich mit mehreren Bildern unter Verwendung einer asynchronen Funktion und [`Promise.all`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um zu warten, bis alle Bilder geladen sind, bevor `drawImage()` aufgerufen wird:

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

### Bilder von Grund auf neu erstellen

Eine andere Möglichkeit besteht darin, neue [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte in unserem Skript zu erstellen. Dazu können wir den Komfort eines `Image()`-Konstruktors nutzen:

```js
const img = new Image(); // Create new img element
img.src = "myImage.png"; // Set source path
```

Wenn dieses Skript ausgeführt wird, beginnt das Bild zu laden, aber wenn Sie versuchen, `drawImage()` aufzurufen, bevor das Bild fertig geladen ist, passiert nichts.
Ältere Browser können sogar eine Ausnahme werfen, daher müssen Sie sicherstellen, dass das [load-Event](/de/docs/Web/API/HTMLElement/load_event) verwendet wird, um das Bild nicht auf das Canvas zu zeichnen, bevor es bereit ist:

```js
const ctx = document.getElementById("canvas").getContext("2d");
const img = new Image();

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = "myImage.png";
```

Unabhängig davon, ob Sie `<img>`-Elemente in Ihrem Markup haben oder sie programmgesteuert in JavaScript erstellen, können externe Bilder [CORS](/de/docs/Web/HTTP/Guides/CORS)-Beschränkungen unterliegen. Standardmäßig "verfälschen" extern abgerufene Bilder [das Canvas](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases), wodurch Ihre Website daran gehindert wird, Daten aus einem anderen Ursprung zu lesen. Mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Attribut eines {{HTMLElement("img")}}-Elements (wiedergegeben durch die [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)-Eigenschaft) können Sie die Erlaubnis anfordern, ein Bild von einer anderen Domain mit CORS zu laden. Wenn die hostende Domain den Zugriff auf die Bilddatei von anderen Domains erlaubt, kann das Bild in Ihrem Canvas verwendet werden, ohne es zu verfälschen.

### Einbetten eines Bildes über eine Data-URL

Eine weitere Möglichkeit, Bilder einzubinden, erfolgt über die [data: URL](/de/docs/Web/URI/Reference/Schemes/data). Data-URLs ermöglichen es Ihnen, ein Bild vollständig als Base64-codierten Zeichensatz direkt in Ihrem Code zu definieren.

```js
const img = new Image(); // Create new img element
img.src =
  "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
```

Ein Vorteil von Data-URLs ist, dass das resultierende Bild sofort verfügbar ist, ohne eine zusätzliche Runde zum Server. Ein weiterer potenzieller Vorteil ist, dass es möglich ist, alle Ihre [CSS](/de/docs/Web/CSS), [JavaScript](/de/docs/Web/JavaScript), [HTML](/de/docs/Web/HTML) und Bilder in einer einzigen Datei zu kapseln, was es tragbarer an andere Orte macht.

Einige Nachteile dieser Methode sind, dass Ihr Bild nicht zwischengespeichert wird und dass die codierte URL bei größeren Bildern ziemlich lang werden kann.

### Verwendung anderer Canvas-Elemente

Genau wie bei normalen Bildern greifen wir auf andere Canvas-Elemente zu, indem wir entweder die Methode [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName) oder [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwenden. Stellen Sie sicher, dass Sie etwas auf das Quell-Canvas gezeichnet haben, bevor Sie es in Ihrem Ziel-Canvas verwenden.

Eine der praktischeren Anwendungen hierbei wäre die Verwendung eines zweiten Canvas-Elements als Miniaturansicht des anderen größeren Canvas.

### Verwendung von Frames aus einem Video

Sie können auch Frames aus einem Video verwenden, das von einem {{HTMLElement("video")}}-Element wiedergegeben wird (selbst wenn das Video nicht sichtbar ist). Wenn Sie beispielsweise ein {{HTMLElement("video")}}-Element mit der ID "myVideo" haben, können Sie dies tun:

```js
const video = document.getElementById("myVideo");
video.currentTime = 10; // Seek to 10 seconds into the video
video.pause(); // Pause the video to freeze the frame
```

Jetzt befindet sich das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) bei der Zehn-Sekunden-Marke, und Sie können den aktuellen Frame auf Ihr Canvas zeichnen. Um sicherzustellen, dass der Frame verfügbar ist, wenn Sie `drawImage()` aufrufen, rufen Sie `drawImage()` innerhalb von [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback#drawing_video_frames_on_a_canvas) auf.

## Bilder zeichnen

Sobald wir eine Referenz zu unserem Quellbildobjekt haben, können wir die Methode `drawImage()` verwenden, um es auf das Canvas zu rendern. Wie wir später sehen werden, ist die Methode `drawImage()` überladen und hat mehrere Varianten. In ihrer grundlegendsten Form sieht sie so aus:

- [`drawImage(image, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das durch den Parameter `image` angegebene Bild an den Koordinaten (`x`, `y`).

> [!NOTE]
> SVG-Bilder müssen eine Breite und Höhe im Wurzel-Element `<svg>` angeben.

### Beispiel: Ein kleines Liniendiagramm

Im folgenden Beispiel verwenden wir ein externes Bild als Hintergrund für ein kleines Liniendiagramm. Die Verwendung von Hintergründen kann Ihr Skript erheblich verkleinern, da wir den Code vermeiden können, um den Hintergrund zu generieren. In diesem Beispiel verwenden wir nur ein Bild, daher verwende ich den `load`-Ereignis-Handler des Bildobjekts, um die Zeichnungsanweisungen auszuführen. Die `drawImage()`-Methode platziert den Hintergrund an der Koordinate (0, 0), was die obere linke Ecke des Canvas ist.

```html hidden
<canvas id="canvas" width="180" height="150"></canvas>
```

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
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

{{EmbedLiveSample("Example_A_simple_line_graph", "", "160")}}

## Skalierung

Die zweite Variante der `drawImage()`-Methode fügt zwei neue Parameter hinzu und ermöglicht es uns, skalierte Bilder auf das Canvas zu platzieren.

- [`drawImage(image, x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Dies fügt die `width`- und `height`-Parameter hinzu, die die Größe angeben, auf die das Bild skaliert werden soll, wenn es auf das Canvas gezeichnet wird.

### Beispiel: Ein Bild kacheln

In diesem Beispiel verwenden wir ein Bild als Hintergrund und wiederholen es mehrmals auf dem Canvas. Dies geschieht, indem wir loopen und die skalierten Bilder an verschiedenen Positionen platzieren. Im untenstehenden Code iteriert die erste `for`-Schleife über die Zeilen. Die zweite `for`-Schleife iteriert über die Spalten. Das Bild wird auf ein Drittel seiner ursprünglichen Größe skaliert, was 50x38 Pixel entspricht.

> [!NOTE]
> Bilder können unscharf werden, wenn sie zu stark hochskaliert oder körnig, wenn sie zu stark verkleinert werden. Eine Skalierung sollte wahrscheinlich vermieden werden, wenn Text darauf enthalten ist, der leserlich bleiben muss.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
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

## Ausschneiden

Die dritte und letzte Variante der Methode `drawImage()` hat acht Parameter zusätzlich zur Bildquelle. Sie ermöglicht es uns, einen Abschnitt des Quellbildes auszuschneiden, ihn dann zu skalieren und auf unserem Canvas zu zeichnen.

- [`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Bei einem `image` nimmt diese Funktion den Bereich des Quellbildes, der durch das Rechteck angegeben ist, dessen obere linke Ecke sich an den Koordinaten (`sx`, `sy`) befindet und dessen Breite und Höhe `sWidth` und `sHeight` sind, und zeichnet ihn auf das Canvas, indem es ihn an den Koordinaten (`dx`, `dy`) platziert und auf die Größe, die durch `dWidth` und `dHeight` angegeben ist, skaliert, um das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beizubehalten.

Um wirklich zu verstehen, was dies tut, könnte es hilfreich sein, sich dieses Bild anzusehen:

![Die rechteckige Quellseite hat obere linke Koordinaten sx und sy mit einer Breite und Höhe von sWidth und sHeight. Das Quellbild wird auf das Ziel-Canvas übertragen, wo die obere linke Ecke die Koordinaten dx und dy hat, mit einer Breite und Höhe von dWidth und dHeight.](canvas_drawimage.jpg)

Die ersten vier Parameter definieren die Position und Größe des Ausschnitts auf dem Quellbild. Die letzten vier Parameter definieren das Rechteck, in das das Bild auf dem Ziel-Canvas gezeichnet wird.

Ausschneiden kann ein nützliches Werkzeug sein, wenn Sie Kompositionen erstellen möchten. Sie könnten alle Elemente in einer einzigen Bilddatei haben und diese Methode verwenden, um eine vollständige Zeichnung zu komponieren. Wenn Sie zum Beispiel ein Diagramm erstellen möchten, könnten Sie ein PNG-Bild verwenden, das den gesamten notwendigen Text in einer einzigen Datei enthält, und je nach Ihren Daten die Skalierung Ihres Diagramms relativ einfach ändern. Ein weiterer Vorteil ist, dass Sie nicht jedes Bild einzeln laden müssen, was die Ladeleistung verbessern kann.

### Beispiel: Ein Bild einrahmen

In diesem Beispiel verwenden wir dasselbe Nashorn wie im vorherigen Beispiel, nur dass wir seinen Kopf ausschneiden und ihn in einen Bilderrahmen kompositionieren. Das Bild des Bilderrahmens ist ein 24-Bit-PNG, das einen Schlagschatten enthält. Da 24-Bit-PNG-Bilder einen vollständigen 8-Bit-Alpha-Kanal enthalten, im Gegensatz zu GIF- und 8-Bit-PNG-Bildern, kann es auf jeden Hintergrund gelegt werden, ohne sich um eine Matte-Farbe sorgen zu müssen.

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

Wir haben diesmal einen anderen Ansatz zum Laden der Bilder gewählt. Anstatt sie durch das Erstellen neuer [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte zu laden, haben wir sie als {{HTMLElement("img")}}-Tags in unserem HTML-Quellcode eingefügt und die Bilder daraus abgerufen, wenn sie auf das Canvas gezeichnet werden sollen. Die Bilder werden von der Seite ausgeblendet, indem die CSS-Eigenschaft {{cssxref("display")}} für diese Bilder auf `none` gesetzt wird.

{{EmbedLiveSample("example_framing_an_image", "", "160")}}

Jedes {{HTMLElement("img")}}-Element erhält ein ID-Attribut, sodass wir einen für die `source` und einen für den `frame` haben, was es einfach macht, sie mit [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) auszuwählen.
Wir verwenden [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen sind, bevor `drawImage()` aufgerufen wird.
`drawImage()` schneidet das Nashorn aus dem ersten Bild aus und skaliert es auf das Canvas.
Zuletzt zeichnen wir den Bilderrahmen mit einem zweiten `drawImage()`-Aufruf.

## Beispiel für eine Kunstgalerie

Im letzten Beispiel dieses Kapitels erstellen wir eine kleine Kunstgalerie. Die Galerie besteht aus einer Tabelle mit mehreren Bildern. Beim Laden der Seite wird ein {{HTMLElement("canvas")}}-Element für jedes Bild eingefügt und ein Rahmen darum gezeichnet.

In diesem Fall hat jedes Bild eine feste Breite und Höhe, genauso wie der Rahmen, der um sie gezeichnet wird. Sie könnten das Skript so erweitern, dass es die Breite und Höhe des Bildes verwendet, um den Rahmen perfekt daran anzupassen.

Im untenstehenden Code verwenden wir [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um zu warten, dass alle Bilder geladen sind, bevor irgendwelche Bilder auf das Canvas gezeichnet werden.
Wir durchlaufen das [`document.images`](/de/docs/Web/API/Document/images)-Container und fügen neue Canvas-Elemente für jedes hinzu. Eine weitere Anmerkung ist die Verwendung der Methode [`Node.insertBefore`](/de/docs/Web/API/Node/insertBefore). `insertBefore()` ist eine Methode des übergeordneten Knotens (einer Tabellenzelle) des Elements (des Bildes), vor dem wir unseren neuen Knoten (das Canvas-Element) einfügen möchten.

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

Und hier ist etwas CSS, um alles schön aussehen zu lassen:

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

Das Ganze wird zusammen mit dem JavaScript für das Zeichnen unserer gerahmten Bilder gebunden:

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

## Steuerung des Skalierungsverhaltens bei Bildern

Wie bereits erwähnt, kann das Skalieren von Bildern zu verschwommenen oder blockigen Artefakten aufgrund des Skalierungsprozesses führen. Sie können die Verwendung von Bildglättungsalgorithmen beim Skalieren von Bildern innerhalb Ihres Kontexts über die Eigenschaft [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) des Zeichnungskontextes steuern. Standardmäßig ist dies `true`, was bedeutet, dass Bilder beim Skalieren geglättet werden.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations")}}
