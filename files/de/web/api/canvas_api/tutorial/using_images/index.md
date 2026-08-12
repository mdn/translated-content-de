---
title: Verwendung von Bildern
slug: Web/API/Canvas_API/Tutorial/Using_images
l10n:
  sourceCommit: 6f1b699dd8891431bbfe0bc3bb803f929fa6032e
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations" )}}

Bisher haben wir unsere eigenen [Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) erstellt und [Stile angewendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors). Eine der spannenderen Funktionen von {{HTMLElement("canvas")}} ist die Möglichkeit, Bilder zu verwenden. Diese können für dynamische Fotokompositionen, als Hintergründe für Grafiken, für Sprites in Spielen und so weiter genutzt werden. Externe Bilder können in jedem vom Browser unterstützten Format verwendet werden, wie PNG, GIF oder JPEG. Es ist sogar möglich, das von anderen Canvas-Elementen auf derselben Seite erzeugte Bild als Quelle zu verwenden!

Das Importieren von Bildern in ein Canvas ist im Wesentlichen ein zweistufiger Prozess:

1. Holen Sie sich eine Referenz auf ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt oder ein anderes Canvas-Element als Quelle. Es ist auch möglich, Bilder durch Angabe einer URL zu verwenden.
2. Zeichnen Sie das Bild auf das Canvas, indem Sie die `drawImage()`-Funktion verwenden.

Schauen wir uns an, wie das funktioniert.

## Bilder zum Zeichnen holen

Die Canvas-API kann die folgenden Datentypen als Bildquelle verwenden:

- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
  - : Dies sind Bilder, die mit dem `Image()`-Konstruktor erstellt wurden, sowie alle {{HTMLElement("img")}}-Elemente.
- [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)
  - : Dies sind eingebettete Bilder, die das {{SVGElement("image")}}-Element verwenden.
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
  - : Mit einem HTML-{{HTMLElement("video")}}-Element als Bildquelle wird das aktuelle Frame aus dem Video verwendet und als Bild genutzt.
- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
  - : Sie können ein anderes {{HTMLElement("canvas")}}-Element als Bildquelle verwenden.
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
  - : Ein Bitmap-Bild, eventuell zugeschnitten. Solche Typen werden verwendet, um einen Teil eines Bildes, einen _Sprite_, aus einem größeren Bild zu extrahieren.
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
  - : Eine spezielle Art von `<canvas>`, die nicht angezeigt wird und ohne Anzeige vorbereitet wird. Mit einer solchen Bildquelle kann man zu ihr wechseln, ohne dass die Zusammensetzung des Inhalts für den Benutzer sichtbar ist.
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - : Ein Bild, das ein einzelnes Frame eines Videos darstellt.

Es gibt mehrere Möglichkeiten, Bilder für die Verwendung auf einem Canvas zu erhalten.

### Verwendung von Bildern von derselben Seite

Wir können eine Referenz auf Bilder auf derselben Seite wie das Canvas erhalten, indem wir eine der folgenden Methoden verwenden:

- Die [`document.images`](/de/docs/Web/API/Document/images) Sammlung
- Die Methode [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)
- Falls Sie die ID des spezifischen Bildes kennen, das Sie verwenden möchten, können Sie [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwenden, um dieses spezielle Bild abzurufen

Wenn Sie viele Bilder verwenden oder [Ressourcen verzögert laden](/de/docs/Web/Performance/Guides/Lazy_loading) möchten, müssen Sie wahrscheinlich warten, bis alle Dateien verfügbar sind, bevor Sie sie auf das Canvas zeichnen. Das folgende Beispiel behandelt mehrere Bilder, indem es eine asynchrone Funktion und [`Promise.all`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) verwendet, um auf das Laden aller Bilder zu warten, bevor `drawImage()` aufgerufen wird:

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

Eine weitere Möglichkeit besteht darin, neue [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte in unserem Skript zu erstellen. Dazu haben wir den Komfort eines `Image()`-Konstruktors:

```js
const img = new Image(); // Create new img element
img.src = "myImage.png"; // Set source path
```

Wenn dieses Skript ausgeführt wird, beginnt das Bild zu laden, aber wenn Sie versuchen, `drawImage()` aufzurufen, bevor das Bild fertig geladen ist, passiert nichts. Ältere Browser können sogar eine Ausnahme werfen, daher müssen Sie sicherstellen, dass Sie das [Load-Ereignis](/de/docs/Web/API/HTMLElement/load_event) verwenden, um das Bild erst zu zeichnen, wenn es bereit ist:

```js
const ctx = document.getElementById("canvas").getContext("2d");
const img = new Image();

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = "myImage.png";
```

Egal, ob Sie `<img>`-Elemente in Ihrem Markup haben oder sie programmatisch in JavaScript erstellen, externe Bilder können [CORS](/de/docs/Web/HTTP/Guides/CORS)-Einschränkungen unterliegen. Standardmäßig führen extern abgerufene Bilder zu einer [Verunreinigung des Canvas](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases), was verhindert, dass Ihre Website Daten über verschiedene Domains hinweg lesen kann. Durch die Verwendung des [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Attributs eines {{HTMLElement("img")}}-Elements (wiedergegeben durch die [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)-Eigenschaft) können Sie die Erlaubnis anfordern, ein Bild mit CORS von einer anderen Domain zu laden. Wenn die Domain, auf der es gehostet ist, den Zugriff über verschiedene Domains erlaubt, kann das Bild in Ihrem Canvas verwendet werden, ohne es zu verunreinigen.

### Einbetten eines Bildes über eine data:-URL

Eine andere Möglichkeit, Bilder einzuschließen, ist über die [data:-URL](/de/docs/Web/URI/Reference/Schemes/data). Data-URLs ermöglichen es Ihnen, ein Bild vollständig als Base64-codierten Zeichenfolgen in Ihrem Code zu definieren.

```js
const img = new Image(); // Create new img element
img.src =
  "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
```

Ein Vorteil von Data-URLs besteht darin, dass das resultierende Bild sofort verfügbar ist, ohne dass eine zusätzliche Serveranfrage erforderlich ist. Ein weiterer potenzieller Vorteil ist, dass es auch möglich ist, alle Ihre [CSS](/de/docs/Web/CSS)-, [JavaScript](/de/docs/Web/JavaScript)-, [HTML](/de/docs/Web/HTML)- und Bilder zu kapseln, was es tragbarer für andere Locations macht.

Einige Nachteile dieser Methode sind, dass Ihr Bild nicht zwischengespeichert wird und für größere Bilder kann die codierte URL ziemlich lang werden.

### Verwendung anderer Canvas-Elemente

Genau wie bei normalen Bildern greifen wir auf andere Canvas-Elemente zu, indem wir entweder die Methode [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName) oder [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwenden. Achten Sie darauf, dass Sie etwas auf das Quell-Canvas gezeichnet haben, bevor Sie es in Ihrem Ziel-Canvas verwenden.

Eine der praktischeren Verwendungen hiervon wäre es, ein zweites Canvas-Element als Thumbnail-Ansicht des anderen größeren Canvas zu verwenden.

### Verwendung von Frames aus einem Video

Sie können auch Frames aus einem Video verwenden, das von einem {{HTMLElement("video")}}-Element dargestellt wird (selbst wenn das Video nicht sichtbar ist). Wenn Sie beispielsweise ein {{HTMLElement("video")}}-Element mit der ID "myVideo" haben, können Sie Folgendes tun:

```js
const video = document.getElementById("myVideo");
video.currentTime = 10; // Seek to 10 seconds into the video
video.pause(); // Pause the video to freeze the frame
```

Nun befindet sich das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) bei der 10-Sekunden-Marke, und Sie können das aktuelle Frame auf Ihrem Canvas zeichnen. Um sicherzustellen, dass das Frame verfügbar ist, wenn Sie `drawImage()` aufrufen, rufen Sie `drawImage()` innerhalb von [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback#drawing_video_frames_on_a_canvas) auf.

## Bilder zeichnen

Sobald wir eine Referenz auf unser Quellbildobjekt haben, können wir die `drawImage()`-Methode verwenden, um es auf das Canvas zu rendern. Wie wir später sehen werden, ist die `drawImage()`-Methode überladen und hat mehrere Varianten. In ihrer grundlegendsten Form sieht sie so aus:

- [`drawImage(image, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das im `image`-Parameter angegebene Bild an den Koordinaten (`x`, `y`).

> [!NOTE]
> SVG-Bilder müssen eine Breite und Höhe im Wurzel-Element \<svg> angeben.

### Beispiel: Ein kleines Liniendiagramm

Im folgenden Beispiel werden wir ein externes Bild als Hintergrund für ein kleines Liniendiagramm verwenden. Die Verwendung von Hintergründen kann Ihr Skript erheblich verkleinern, da wir den Code zur Erzeugung des Hintergrunds vermeiden können. In diesem Beispiel verwenden wir nur ein Bild, also wird der `load` Ereignishandler des Bildobjekts verwendet, um die Zeichenanweisungen auszuführen. Die `drawImage()`-Methode platziert den Hintergrund an der Koordinate (0, 0), was die obere linke Ecke des Canvas ist.

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

{{EmbedLiveSample("Example_A_simple_line_graph", "", "160")}}

## Skalierung

Die zweite Variante der `drawImage()`-Methode fügt zwei neue Parameter hinzu und ermöglicht es uns, skalierte Bilder auf dem Canvas zu platzieren.

- [`drawImage(image, x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Dies fügt die `width`- und `height`-Parameter hinzu, die die Größe angeben, auf die das Bild skaliert werden soll, wenn es auf das Canvas gezeichnet wird.

### Beispiel: Kacheln eines Bildes

In diesem Beispiel verwenden wir ein Bild als Tapete und wiederholen es mehrmals auf dem Canvas. Dies wird durch Schleifen und Platzieren der skalierten Bilder an verschiedenen Positionen erreicht. Im unten stehenden Code durchläuft die erste `for`-Schleife die Zeilen. Die zweite `for`-Schleife durchläuft die Spalten. Das Bild wird auf ein Drittel seiner ursprünglichen Größe skaliert, was 50x38 Pixel entspricht.

> [!NOTE]
> Bilder können unscharf werden, wenn sie zu stark hochskaliert werden oder körnig, wenn sie zu stark herunterskaliert werden. Skalierung wird wahrscheinlich am besten vermieden, wenn Sie Text haben, der lesbar bleiben muss.

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

## Zuschneiden

Die dritte und letzte Variante der `drawImage()`-Methode hat acht Parameter zusätzlich zur Bildquelle. Sie ermöglicht es uns, einen Abschnitt des Quellbildes auszuschneiden, dann zu skalieren und es auf unserem Canvas zu zeichnen.

- [`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Bei einem gegebenen `image` nimmt diese Funktion den Bereich des Quellbildes, der durch das Rechteck angegeben wird, dessen obere linke Ecke sich bei (`sx`, `sy`) befindet und dessen Breite und Höhe `sWidth` und `sHeight` sind, und zeichnet es in das Canvas, indem es es auf dem Canvas bei (`dx`, `dy`) platziert und auf die Größe skaliert, die durch `dWidth` und `dHeight` angegeben ist, wobei das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten wird.

Um wirklich zu verstehen, was das macht, könnte es helfen, sich dieses Bild anzusehen:

![Die rechteckigen Quellenbild-Koordinaten oben links sind sx und sy mit einer Breite und Höhe von sWidth und sHeight. Das Quellenbild wird auf das Ziel-Canvas übertragen, wobei die obere linke Ecke die Koordinaten dx und dy hat und die Breite und Höhe dWidth und dHeight sind.](canvas_drawimage.jpg)

Die ersten vier Parameter definieren die Lage und Größe des Ausschnitts auf dem Quellbild. Die letzten vier Parameter definieren das Rechteck, in das das Bild auf das Ziel-Canvas gezeichnet wird.

Zuschneiden kann ein nützliches Werkzeug sein, wenn Sie Kompositionen machen wollen. Sie könnten alle Elemente in einer einzigen Bilddatei haben und diese Methode verwenden, um eine vollständige Zeichnung zu komponieren. Wenn Sie beispielsweise ein Diagramm erstellen möchten, könnten Sie ein PNG-Bild mit allen notwendigen Texten in einer einzigen Datei haben und je nach Ihren Daten die Skala Ihres Diagramms ziemlich einfach ändern. Ein weiterer Vorteil ist, dass Sie nicht jedes Bild einzeln laden müssen, was die Ladeleistung verbessern kann.

### Beispiel: Ein Bild einrahmen

In diesem Beispiel verwenden wir dasselbe Nashorn wie im vorherigen Beispiel, aber wir schneiden seinen Kopf aus und setzen ihn in einen Bilderrahmen ein. Das Bilderrahmenbild ist ein 24-Bit PNG, das einen Schatten enthält. Da 24-Bit PNG-Bilder einen vollständigen 8-Bit Alpha-Kanal enthalten, im Gegensatz zu GIF- und 8-Bit-PNG-Bildern, kann es auf jedem Hintergrund platziert werden, ohne sich um eine Matte-Farbe kümmern zu müssen.

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

Wir haben diesmal einen anderen Ansatz zum Laden der Bilder gewählt. Anstatt sie durch Erstellen neuer [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte zu laden, haben wir sie als {{HTMLElement("img")}}-Tags in unserem HTML-Code eingebunden und die Bilder von diesen gezogen, als wir sie auf das Canvas gezeichnet haben. Die Bilder sind von der Seite versteckt, indem die CSS-Eigenschaft {{cssxref("display")}} für diese Bilder auf `none` gesetzt wird.

{{EmbedLiveSample("example_framing_an_image", "", "160")}}

Jedes {{HTMLElement("img")}} ist mit einem ID-Attribut versehen, sodass wir eines für die `source` und eines für den `frame` haben, was es einfach macht, sie mit [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) zu selektieren.
Wir verwenden [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen sind, bevor `drawImage()` aufgerufen wird.
`drawImage()` schneidet das Nashorn aus dem ersten Bild aus und skaliert es auf das Canvas.
Zum Schluss zeichnen wir den Bilderrahmen mit einem zweiten `drawImage()`-Aufruf.

## Galeriebeispiel

Im letzten Beispiel dieses Kapitels bauen wir eine kleine Kunstgalerie. Die Galerie besteht aus einer Tabelle mit mehreren Bildern. Wenn die Seite geladen wird, wird für jedes Bild ein {{HTMLElement("canvas")}}-Element eingefügt und ein Rahmen um es herum gezeichnet.

In diesem Fall hat jedes Bild eine feste Breite und Höhe, ebenso wie der Rahmen, der um sie gezeichnet wird. Sie könnten das Skript erweitern, damit es die Breite und Höhe des Bildes verwendet, um den Rahmen perfekt darum herum anzupassen.

Im untenstehenden Code verwenden wir [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen sind, bevor Bilder auf das Canvas gezeichnet werden.
Wir durchlaufen den [`document.images`](/de/docs/Web/API/Document/images)-Container und fügen für jedes Bild neue Canvas-Elemente hinzu. Eine weitere Sache, die zu beachten ist, ist die Verwendung der Methode [`Node.insertBefore`](/de/docs/Web/API/Node/insertBefore). `insertBefore()` ist eine Methode des übergeordneten Knotens (einer Tabellenzelle) des Elements (das Bild), vor dem wir unseren neuen Knoten (das Canvas-Element) einfügen möchten.

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

Und hier ist etwas CSS, um die Dinge nett aussehen zu lassen:

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

Einbinden des JavaScripts, um unsere gerahmten Bilder zu zeichnen:

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

## Steuerung des Verhaltens der Bildskalierung

Wie zuvor erwähnt, kann das Skalieren von Bildern zu unscharfen oder blockartigen Artefakten aufgrund des Skalierungsprozesses führen. Sie können die Eigenschaft [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) des Zeichenkontexts verwenden, um die Verwendung von Bildglättungsalgorithmen beim Skalieren von Bildern in Ihrem Kontext zu steuern. Standardmäßig ist diese auf `true` gesetzt, was bedeutet, dass Bilder beim Skalieren geglättet werden.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations")}}
