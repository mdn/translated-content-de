---
title: Verwenden von Bildern
slug: Web/API/Canvas_API/Tutorial/Using_images
l10n:
  sourceCommit: 855344e505314d500fa1fa0ddf5c65602a11db3a
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations" )}}

Bis jetzt haben Sie Ihre eigenen [Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) erstellt und [Stile angewendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors). Eine der spannenderen Funktionen von {{HTMLElement("canvas")}} ist die Möglichkeit, Bilder zu verwenden. Diese können für dynamische Fotomontage, als Hintergründe für Diagramme, für Sprites in Spielen usw. verwendet werden. Externe Bilder können in jedem vom Browser unterstützten Format wie PNG, GIF oder JPEG verwendet werden. Sie können sogar das von anderen Canvas-Elementen auf derselben Seite erzeugte Bild als Quelle verwenden!

Bilder in ein Canvas zu importieren, ist im Wesentlichen ein zweistufiger Prozess:

1. Holen Sie sich eine Referenz zu einem [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt oder einem anderen Canvas-Element als Quelle. Es ist auch möglich, Bilder durch Angabe einer URL zu verwenden.
2. Zeichnen Sie das Bild mit der Funktion `drawImage()` auf das Canvas.

Schauen wir uns an, wie das geht.

## Bilder zum Zeichnen holen

Die Canvas-API kann jede der folgenden Datentypen als Bildquelle verwenden:

- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
  - : Dies sind Bilder, die mit dem `Image()`-Konstruktor erstellt wurden, sowie jedes {{HTMLElement("img")}}-Element.
- [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)
  - : Dies sind eingebettete Bilder mit dem {{SVGElement("image")}}-Element.
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
  - : Die Verwendung eines HTML-{{HTMLElement("video")}}-Elements als Bildquelle erfasst das aktuelle Bild des Videos und verwendet es als Bild.
- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
  - : Sie können ein anderes {{HTMLElement("canvas")}}-Element als Bildquelle verwenden.
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
  - : Ein Bitmap-Bild, das möglicherweise zugeschnitten ist. Solche Typen werden verwendet, um einen Teil eines Bildes zu extrahieren, ein _Sprite_, aus einem größeren Bild.
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
  - : Eine spezielle Art von `<canvas>`, das nicht angezeigt wird und vorbereitet wird, ohne angezeigt zu werden. Die Verwendung einer solchen Bildquelle ermöglicht es, zum Bild zu wechseln, ohne dass die Zusammensetzung des Inhalts für den Benutzer sichtbar ist.
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - : Ein Bild, das einen einzigen Frame eines Videos darstellt.

Es gibt mehrere Möglichkeiten, Bilder für die Verwendung auf einem Canvas zu erhalten.

### Verwendung von Bildern von derselben Seite

Wir können eine Referenz zu Bildern auf derselben Seite wie das Canvas erhalten, indem wir eine der folgenden Methoden verwenden:

- Die [`document.images`](/de/docs/Web/API/Document/images)-Sammlung
- Die Methode [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)
- Wenn Sie die ID des spezifischen Bildes kennen, das Sie verwenden möchten, können Sie [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwenden, um dieses bestimmte Bild abzurufen.

Wenn Sie viele Bilder verwenden oder [Ressourcen faul laden](/de/docs/Web/Performance/Guides/Lazy_loading) möchten, müssen Sie wahrscheinlich warten, bis alle Dateien verfügbar sind, bevor Sie auf das Canvas zeichnen.
Das untenstehende Beispiel behandelt mehrere Bilder mit einer asynchronen Funktion und [`Promise.all`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen sind, bevor `drawImage()` aufgerufen wird:

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

### Erstellen von Bildern von Grund auf

Eine weitere Option ist es, neue [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte in unserem Skript zu erstellen. Hierfür haben wir den Komfort eines `Image()`-Konstruktors:

```js
const img = new Image(); // Create new img element
img.src = "myImage.png"; // Set source path
```

Wenn dieses Skript ausgeführt wird, beginnt das Bild zu laden, aber wenn Sie versuchen, `drawImage()` aufzurufen, bevor das Bild fertig geladen ist, wird nichts passieren.
Ältere Browser können sogar eine Ausnahme werfen, daher müssen Sie sichergehen, das [Ladeereignis](/de/docs/Web/API/HTMLElement/load_event) zu verwenden, damit Sie das Bild nicht auf das Canvas zeichnen, bevor es bereit ist:

```js
const ctx = document.getElementById("canvas").getContext("2d");
const img = new Image();

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = "myImage.png";
```

Obwohl Sie `<img>`-Elemente in Ihrem Markup haben oder diese programmatisch in JavaScript erstellen, können externe Bilder [CORS](/de/docs/Web/HTTP/Guides/CORS)-Beschränkungen unterliegen. Standardmäßig verfälschen extern abgerufene Bilder [das Canvas](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases), was verhindert, dass Ihre Seite Daten von fremden Ursprungs lesen kann. Durch die Verwendung des [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Attributs eines {{HTMLElement("img")}}-Elements (reflektiert durch die [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)-Eigenschaft) können Sie um Erlaubnis bitten, ein Bild von einer anderen Domain mit CORS zu laden. Wenn die Hostdomain den domainübergreifenden Zugriff auf das Bild erlaubt, kann das Bild in Ihrem Canvas ohne Verfälschung verwendet werden.

### Einbetten eines Bildes über data: URL

Eine andere mögliche Möglichkeit, Bilder einzuschließen, ist über die [data: URL](/de/docs/Web/URI/Reference/Schemes/data). Daten-URLs ermöglichen es Ihnen, ein Bild als Base64-kodierte Zeichenfolge direkt in Ihrem Code vollständig zu definieren.

```js
const img = new Image(); // Create new img element
img.src =
  "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
```

Ein Vorteil von Daten-URLs ist, dass das resultierende Bild sofort verfügbar ist, ohne einen weiteren Serveraufruf. Ein weiterer potenzieller Vorteil ist, dass es auch möglich ist, alle Ihre [CSS](/de/docs/Web/CSS), [JavaScript](/de/docs/Web/JavaScript), [HTML](/de/docs/Web/HTML) und Bilder in einer Datei zu kapseln, was es tragbarer zu anderen Standorten macht.

Einige Nachteile dieser Methode sind, dass Ihr Bild nicht zwischengespeichert wird und für größere Bilder kann die kodierte URL ziemlich lang werden.

### Verwenden anderer Canvas-Elemente

Wie bei normalen Bildern greifen wir auf andere Canvas-Elemente zu, indem wir entweder die Methode [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName) oder [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwenden. Stellen Sie sicher, dass Sie etwas auf das Quell-Canvas gezeichnet haben, bevor Sie es in Ihrem Ziel-Canvas verwenden.

Einer der praktischeren Verwendungszwecke wäre, ein zweites Canvas-Element als Miniaturansicht des anderen größeren Canvas zu verwenden.

### Verwenden von Frames aus einem Video

Sie können auch Frames aus einem Video verwenden, das von einem {{HTMLElement("video")}}-Element präsentiert wird (auch wenn das Video nicht sichtbar ist). Zum Beispiel, wenn Sie ein {{HTMLElement("video")}}-Element mit der ID "myVideo" haben, können Sie das tun:

```js
const video = document.getElementById("myVideo");
video.currentTime = 10; // Seek to 10 seconds into the video
video.pause(); // Pause the video to freeze the frame
```

Nun befindet sich das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) an der 10-Sekunden-Marke, und Sie können den aktuellen Frame in Ihr Canvas zeichnen. Um sicherzustellen, dass der Frame verfügbar ist, wenn Sie `drawImage()` aufrufen, rufen Sie `drawImage()` innerhalb von [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback#drawing_video_frames_on_a_canvas) auf.

## Zeichnen von Bildern

Sobald Sie eine Referenz zu Ihrem Quellbildobjekt haben, können Sie die `drawImage()`-Methode verwenden, um es auf das Canvas zu rendern. Wie wir später sehen werden, ist die `drawImage()`-Methode überladen und hat mehrere Varianten. In ihrer grundlegendsten Form sieht sie so aus:

- [`drawImage(image, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das durch den Parameter `image` angegebene Bild an den Koordinaten (`x`, `y`).

> [!NOTE]
> SVG-Bilder müssen eine Breite und Höhe im Root-`<svg>`-Element angeben.

### Beispiel: Ein kleines Liniendiagramm

Im folgenden Beispiel verwenden wir ein externes Bild als Hintergrund für ein kleines Liniendiagramm. Durch die Verwendung von Hintergründen kann Ihr Skript erheblich kleiner werden, da wir den Code zur Erzeugung des Hintergrunds vermeiden können. In diesem Beispiel verwenden wir nur ein Bild, daher verwende ich den `load`-Event-Handler des Bildobjekts, um die Zeichnungsbefehle auszuführen. Die `drawImage()`-Methode platziert den Hintergrund an der Koordinate (0, 0), was die obere linke Ecke des Canvas ist.

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

Die zweite Variante der `drawImage()`-Methode fügt zwei neue Parameter hinzu und erlaubt uns, skalierte Bilder auf dem Canvas zu platzieren.

- [`drawImage(image, x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Dies fügt die Parameter `width` und `height` hinzu, die die Größe angeben, auf die das Bild skaliert werden soll, wenn es auf das Canvas gezeichnet wird.

### Beispiel: Kacheln eines Bildes

In diesem Beispiel verwenden wir ein Bild als Tapete und wiederholen es mehrmals auf dem Canvas. Dies wird erreicht, indem geschleift und die skalierten Bilder an unterschiedlichen Positionen platziert werden. Im untenstehenden Code iteriert die erste `for`-Schleife über die Zeilen. Die zweite `for`-Schleife iteriert über die Spalten. Das Bild wird auf ein Drittel seiner ursprünglichen Größe skaliert, das heißt 50x38 Pixel.

> [!NOTE]
> Bilder können unscharf werden, wenn sie vergrößert oder körnig, wenn sie zu sehr verkleinert werden. Skalierung sollte wahrscheinlich vermieden werden, wenn Sie darin Text haben, der leserlich bleiben muss.

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

## Zuschneiden

Die dritte und letzte Variante der `drawImage()`-Methode hat acht Parameter zusätzlich zur Bildquelle. Sie erlaubt es uns, einen Abschnitt des Quellbildes auszuschneiden, dann zu skalieren und es auf unser Canvas zu zeichnen.

- [`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Für ein gegebenes `image` nimmt diese Funktion den Bereich des Quellbilds, der durch das Rechteck angegeben ist, dessen obere linke Ecke (`sx`, `sy`) ist und dessen Breite und Höhe `sWidth` und `sHeight` sind, und zeichnet es in das Canvas, platziert es auf dem Canvas bei (`dx`, `dy`) und skaliert es auf die Größe, die durch `dWidth` und `dHeight` angegeben ist, wobei das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten wird.

Um wirklich zu verstehen, was das macht, kann es helfen, sich dieses Bild anzusehen:

![Die rechteckigen Quellbild-Eckkoordinaten oben links sind sx und sy mit einer Breite und Höhe von sWidth und sHeight. Das Quellbild wird auf das Ziel-Canvas übertragen, wo die obere linke Eckkoordinaten dx und dy mit einer Breite und Höhe von dWidth und dHeight sind.](canvas_drawimage.jpg)

Die ersten vier Parameter definieren die Position und die Größe des Ausschnitts auf dem Quellbild. Die letzten vier Parameter definieren das Rechteck, in das das Bild auf dem Ziel-Canvas gezeichnet wird.

Zuschneiden kann ein nützliches Werkzeug sein, wenn Sie Kompositionen erstellen möchten. Sie könnten alle Elemente in einer einzigen Bilddatei haben und mit dieser Methode eine vollständige Zeichnung zusammensetzen. Wenn Sie beispielsweise ein Diagramm erstellen möchten, könnten Sie ein PNG-Bild mit allen notwendigen Texten in einer einzigen Datei haben und je nach Ihren Daten das Diagramm leicht skalieren. Ein weiterer Vorteil ist, dass Sie nicht jedes Bild einzeln laden müssen, was die Ladeleistung verbessern kann.

### Beispiel: Einrahmen eines Bildes

In diesem Beispiel verwenden wir dasselbe Nashorn wie im vorherigen Beispiel, aber wir schneiden seinen Kopf aus und setzen ihn in einen Bilderrahmen ein. Das Bilderrahmenbild ist ein 24-Bit PNG, das einen Schlagschatten enthält. Da 24-Bit PNG-Bilder ein vollständiges 8-Bit-Alpha-Kanal enthalten, im Gegensatz zu GIF und 8-Bit PNG-Bildern, kann es auf jeden Hintergrund gelegt werden, ohne sich um eine matte Farbe kümmern zu müssen.

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

Dieses Mal haben wir einen anderen Ansatz zum Laden der Bilder gewählt. Anstatt sie durch Erstellen neuer [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte zu laden, haben wir sie als {{HTMLElement("img")}}-Tags in unseren HTML-Code eingefügt und die Bilder beim Zeichnen auf das Canvas von dort abgerufen. Die Bilder sind von der Seite verborgen, indem die CSS-Eigenschaft {{cssxref("display")}} für diese Bilder auf `none` gesetzt wird.

{{EmbedLiveSample("example_framing_an_image", "", "160")}}

Jedes {{HTMLElement("img")}} erhält ein ID-Attribut, sodass wir eine für das `source` und eine für den `frame` haben, was sie leicht macht, mit [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) auszuwählen.
Wir verwenden [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen sind, bevor `drawImage()` aufgerufen wird.
`drawImage()` schneidet das Nashorn aus dem ersten Bild aus und skaliert es auf das Canvas.
Schließlich zeichnen wir den Bilderrahmen mit einem zweiten `drawImage()`-Aufruf.

## Beispiel für eine Kunstgalerie

Im letzten Beispiel dieses Kapitels bauen wir eine kleine Kunstgalerie. Die Galerie besteht aus einer Tabelle mit mehreren Bildern. Wenn die Seite geladen wird, wird für jedes Bild ein {{HTMLElement("canvas")}}-Element eingefügt und ein Rahmen darum gezeichnet.

In diesem Fall hat jedes Bild eine feste Breite und Höhe, ebenso wie der Rahmen, der darum gezeichnet wird. Sie könnten das Skript so verbessern, dass es die Breite und Höhe des Bildes verwendet, um den Rahmen perfekt um es herum anzupassen.

Im untenstehenden Code verwenden wir [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen sind, bevor irgendwelche Bilder auf das Canvas gezeichnet werden.
Wir durchlaufen den [`document.images`](/de/docs/Web/API/Document/images) Container und fügen für jedes Bild neue Canvas-Elemente hinzu. Eine andere Sache, die zu beachten ist, ist die Verwendung der Methode [`Node.insertBefore`](/de/docs/Web/API/Node/insertBefore). `insertBefore()` ist eine Methode des übergeordneten Knotens (einer Tabellenspalte) des Elements (des Bildes), vor dem wir unser neues Element (das Canvas-Element) einfügen möchten.

```html
<table>
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
</table>
<img id="frame" src="canvas_picture_frame.png" width="132" height="150" />
```

Und hier ist etwas CSS, das die Dinge schön aussehen lässt:

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

Alles zusammengefasst ist das JavaScript, um unsere eingerahmten Bilder zu zeichnen:

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

## Steuerung des Bildskalierungsverhaltens

Wie bereits erwähnt, kann die Skalierung von Bildern zu unscharfen oder blockigen Artefakten aufgrund des Skalierungsprozesses führen. Sie können die Eigenschaft [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) des Zeichnungskontexts verwenden, um die Verwendung von Bildglättungsalgorithmen beim Skalieren von Bildern innerhalb Ihres Kontextes zu steuern. Standardmäßig ist dies `true`, wodurch Bilder beim Skalieren geglättet werden.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations")}}
