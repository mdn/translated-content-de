---
title: Verwendung von Bildern
slug: Web/API/Canvas_API/Tutorial/Using_images
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations" )}}

Bisher haben wir unsere eigenen [Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) erstellt und [Stile angewendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors). Eine der spannenderen Funktionen von {{HTMLElement("canvas")}} ist die Möglichkeit, Bilder zu verwenden. Diese können für dynamische Fotokompositionen, als Hintergründe von Graphen, für Sprites in Spielen und so weiter genutzt werden. Externe Bilder können in jedem vom Browser unterstützten Format verwendet werden, wie PNG, GIF oder JPEG. Sie können sogar das von anderen Canvas-Elementen auf derselben Seite erzeugte Bild als Quelle verwenden!

Das Importieren von Bildern auf eine Leinwand ist im Grunde ein zweistufiger Prozess:

1. Holen Sie sich eine Referenz auf ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt oder auf ein anderes Canvas-Element als Quelle. Es ist auch möglich, Bilder durch Angabe einer URL zu verwenden.
2. Zeichnen Sie das Bild auf die Leinwand, indem Sie die Funktion `drawImage()` verwenden.

Schauen wir uns an, wie das geht.

## Bilder zum Zeichnen besorgen

Die Canvas-API kann jede der folgenden Datentypen als Bildquelle verwenden:

- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
  - : Dies sind Bilder, die mithilfe des `Image()`-Konstruktors erstellt wurden, sowie jedes {{HTMLElement("img")}}-Element.
- [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)
  - : Dies sind Bilder, die mit dem {{SVGElement("image")}}-Element eingebettet sind.
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
  - : Die Verwendung eines HTML-{{HTMLElement("video")}}-Elements als Bildquelle nimmt den aktuellen Frame des Videos und verwendet ihn als Bild.
- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
  - : Sie können ein anderes {{HTMLElement("canvas")}}-Element als Bildquelle verwenden.
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
  - : Ein Bitmap-Bild, möglicherweise beschnitten. Wird verwendet, um einen Teil eines Bildes, ein _Sprite_, aus einem größeren Bild zu extrahieren.
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
  - : Eine spezielle Art von `<canvas>`, die nicht angezeigt wird und vorbereitet wird, ohne angezeigt zu werden. Die Verwendung einer solchen Bildquelle ermöglicht das Umschalten, ohne dass die Zusammensetzung des Inhalts für den Benutzer sichtbar ist.
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - : Ein Bild, das einen einzelnen Frame eines Videos darstellt.

Es gibt mehrere Möglichkeiten, Bilder zur Verwendung auf einer Leinwand zu erhalten.

### Verwendung von Bildern von derselben Seite

Wir können eine Referenz auf Bilder auf derselben Seite wie das Canvas erhalten, indem wir eine der folgenden Methoden verwenden:

- Die [`document.images`](/de/docs/Web/API/Document/images)-Sammlung
- Die Methode [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)
- Wenn Sie die ID des spezifischen Bildes kennen, das Sie verwenden möchten, können Sie [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwenden, um dieses spezifische Bild abzurufen.

Wenn Sie viele Bilder verwenden oder [Ressourcen lazy-load](/de/docs/Web/Performance/Guides/Lazy_loading) möchten, müssen Sie wahrscheinlich warten, bis alle Dateien verfügbar sind, bevor Sie auf die Leinwand zeichnen.
Das folgende Beispiel zeigt, wie mit mehreren Bildern unter Verwendung einer asynchronen Funktion und [`Promise.all`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) gewartet wird, bis alle Bilder geladen sind, bevor `drawImage()` aufgerufen wird:

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

Eine weitere Möglichkeit besteht darin, neue [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte in unserem Skript zu erstellen. Dazu steht uns der `Image()`-Konstruktor zur Verfügung:

```js
const img = new Image(); // Create new img element
img.src = "myImage.png"; // Set source path
```

Wenn dieses Skript ausgeführt wird, beginnt das Bild mit dem Laden, aber wenn Sie versuchen, `drawImage()` aufzurufen, bevor das Bild geladen wurde, wird nichts geschehen.
Ältere Browser können sogar eine Ausnahme werfen, daher müssen Sie sicherstellen, dass Sie das [load event](/de/docs/Web/API/HTMLElement/load_event) verwenden, damit Sie das Bild nicht auf die Leinwand zeichnen, bevor es fertig geladen ist:

```js
const ctx = document.getElementById("canvas").getContext("2d");
const img = new Image();

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = "myImage.png";
```

Unabhängig davon, ob Sie `<img>`-Elemente in Ihrem Markup haben oder sie programmatisch in JavaScript erstellen, können externe Bilder [CORS](/de/docs/Web/HTTP/Guides/CORS)-Einschränkungen unterliegen. Standardmäßig färben extern abgerufene Bilder die Leinwand [ein](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases), wodurch Ihre Seite daran gehindert wird, Daten über Ursprungsgrenzen hinweg zu lesen. Durch die Verwendung des [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Attributs eines {{HTMLElement("img")}}-Elements (wiedergegeben durch die Eigenschaft [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)), können Sie die Erlaubnis anfordern, ein Bild von einer anderen Domäne mit CORS zu laden. Wenn die Host-Domäne den domainübergreifenden Zugriff auf das Bild zulässt, kann das Bild in Ihrer Leinwand verwendet werden, ohne sie zu beeinträchtigen.

### Einbetten eines Bildes über data: URL

Eine weitere Möglichkeit, Bilder einzubinden, ist über die [data: URL](/de/docs/Web/URI/Reference/Schemes/data). Data-URLs ermöglichen es Ihnen, ein Bild vollständig als Base64-codierten Zeichenfolgen direkt in Ihrem Code zu definieren.

```js
const img = new Image(); // Create new img element
img.src =
  "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
```

Ein Vorteil von Data-URLs ist, dass das resultierende Bild sofort verfügbar ist, ohne einen weiteren Server-Zugriffszyklus. Ein weiterer potenzieller Vorteil ist, dass es auch möglich ist, alle Ihre [CSS](/de/docs/Web/CSS), [JavaScript](/de/docs/Web/JavaScript), [HTML](/de/docs/Web/HTML) und Bilder in einer Datei zu kapseln, was es auf andere Standorte übertragbarer macht.

Einige Nachteile dieser Methode sind, dass Ihr Bild nicht zwischengespeichert wird und bei größeren Bildern die codierte URL ziemlich lang werden kann.

### Verwendung anderer Canvas-Elemente

Genau wie bei normalen Bildern greifen wir auf andere Canvas-Elemente zu, indem wir entweder die Methode [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName) oder [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwenden. Stellen Sie sicher, dass Sie etwas auf die Quell-Canvas gezeichnet haben, bevor Sie sie in Ihrer Ziel-Canvas verwenden.

Eine der praktischeren Anwendungen wäre, ein zweites Canvas-Element als Miniaturansicht der anderen größeren Canvas zu verwenden.

### Verwendung von Frames aus einem Video

Sie können auch Frames aus einem Video verwenden, das durch ein {{HTMLElement("video")}}-Element präsentiert wird (auch wenn das Video nicht sichtbar ist). Wenn Sie beispielsweise ein {{HTMLElement("video")}}-Element mit der ID "myVideo" haben, können Sie dies tun:

```js
const video = document.getElementById("myVideo");
video.currentTime = 10; // Seek to 10 seconds into the video
video.pause(); // Pause the video to freeze the frame
```

Jetzt befindet sich das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) bei der 10-Sekunden-Marke und Sie können den aktuellen Frame auf Ihrer Leinwand zeichnen. Um sicherzustellen, dass der Frame verfügbar ist, wenn Sie `drawImage()` aufrufen, rufen Sie `drawImage()` innerhalb von [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback#drawing_video_frames_on_a_canvas) auf.

## Zeichnen von Bildern

Sobald wir eine Referenz auf unser Quellbildobjekt haben, können wir die Methode `drawImage()` verwenden, um es auf die Leinwand zu rendern. Wie wir später sehen werden, ist die Methode `drawImage()` überlagert und hat mehrere Varianten. In ihrer einfachsten Form sieht sie so aus:

- [`drawImage(image, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das Bild, das durch den `image`-Parameter angegeben ist, an den Koordinaten (`x`, `y`).

> [!NOTE]
> SVG-Bilder müssen eine Breite und Höhe im Wurzel-\<svg>-Element angeben.

### Beispiel: Ein kleiner Liniengraph

Im folgenden Beispiel verwenden wir ein externes Bild als Hintergrund für einen kleinen Liniengraphen. Die Verwendung von Hintergründen kann Ihr Skript erheblich verkleinern, da wir den Code zur Generierung des Hintergrunds vermeiden können. In diesem Beispiel verwenden wir nur ein Bild, daher verwende ich den `load`-Event-Handler des Bildobjekts, um die Zeichenanweisungen auszuführen. Die `drawImage()`-Methode platziert den Hintergrund bei den Koordinaten (0, 0), das ist die obere linke Ecke der Leinwand.

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

Der resultierende Graph sieht so aus:

{{EmbedLiveSample("Example_A_simple_line_graph", "", "160")}}

## Skalierung

Die zweite Variante der `drawImage()`-Methode fügt zwei neue Parameter hinzu und ermöglicht es uns, skalierte Bilder auf die Leinwand zu platzieren.

- [`drawImage(image, x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Dies fügt die Parameter `width` und `height` hinzu, die die Größe angeben, auf die das Bild skaliert werden soll, wenn es auf die Leinwand gezeichnet wird.

### Beispiel: Kacheln eines Bildes

In diesem Beispiel verwenden wir ein Bild als Tapete und wiederholen es mehrmals auf der Leinwand. Dies geschieht durch Schleifen und Platzieren der skalierten Bilder an verschiedenen Positionen. Im folgenden Code iteriert die erste `for`-Schleife über die Zeilen. Die zweite `for`-Schleife iteriert über die Spalten. Das Bild wird auf ein Drittel seiner ursprünglichen Größe skaliert, was 50x38 Pixel entspricht.

> [!NOTE]
> Bilder können unscharf werden, wenn sie stark vergrößert werden, oder körnig, wenn sie stark verkleinert werden. Skalierung sollte wahrscheinlich vermieden werden, wenn Sie Text darin haben, der lesbar bleiben muss.

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

Die resultierende Leinwand sieht so aus:

{{EmbedLiveSample("Example_Tiling_an_image", "", "160")}}

## Zerteilung

Die dritte und letzte Variante der `drawImage()`-Methode hat acht Parameter zusätzlich zur Bildquelle. Sie ermöglicht es uns, einen Abschnitt des Quellbildes auszuschneiden, ihn zu skalieren und auf unserer Leinwand zu zeichnen.

- [`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Bei einem gegebenen `image` nimmt diese Funktion den Bereich des Quellbildes, der durch das Rechteck angegeben ist, dessen obere linke Ecke sich an den Koordinaten (`sx`, `sy`) befindet und dessen Breite und Höhe `sWidth` bzw. `sHeight` sind, und zeichnet ihn auf die Leinwand in einem Rechteck an den Koordinaten (`dx`, `dy`), wobei er auf die durch `dWidth` und `dHeight` angegebene Größe skaliert wird, wobei das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten wird.

Um wirklich zu verstehen, was dies bewirkt, kann es helfen, sich dieses Bild anzusehen:

![Die rechtwinklige Quellbild-Quelle hat eine obere linke Koordinate von sx und sy mit einer Breite und Höhe von sWidth und sHeight entsprechend. Das Quellbild wird auf das Ziel-Canvas übertragen, wo die obere linke Ecke bei dx und dy mit einer Breite und Höhe von dWidth und dHeight entsprechend.](canvas_drawimage.jpg)

Die ersten vier Parameter definieren den Ort und die Größe des Ausschnitts auf dem Quellbild. Die letzten vier Parameter definieren das Rechteck, in das das Bild auf dem Ziel-Canvas gezeichnet wird.

Zerteilung kann ein nützliches Werkzeug sein, wenn Sie Kompositionen erstellen möchten. Sie könnten alle Elemente in einer einzigen Bilddatei haben und diese Methode verwenden, um eine vollständige Zeichnung zusammenzustellen. Zum Beispiel, wenn Sie ein Diagramm erstellen möchten, könnten Sie ein PNG-Bild verwenden, das den gesamten benötigten Text in einer einzigen Datei enthält, und je nach Ihren Daten könnte die Skalierung Ihres Diagramms ziemlich einfach verändert werden. Ein weiterer Vorteil ist, dass Sie nicht jedes Bild einzeln laden müssen, was die Ladeleistung verbessern kann.

### Beispiel: Einrahmen eines Bildes

In diesem Beispiel verwenden wir denselben Rhino wie im vorherigen Beispiel, schneiden aber dessen Kopf aus und setzen ihn in einen Bilderrahmen. Das Bilderrahmenbild ist ein 24-Bit-PNG, das einen Schlagschatten enthält. Da 24-Bit-PNG-Bilder einen vollständigen 8-Bit-Alpha-Kanal enthalten, im Gegensatz zu GIF- und 8-Bit-PNG-Bildern, kann es auf jeden Hintergrund gelegt werden, ohne sich um eine Matte-Farbe kümmern zu müssen.

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

Wir haben diesmal einen anderen Ansatz zum Laden der Bilder gewählt. Anstatt sie zu laden, indem wir neue [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte erstellen, haben wir sie als {{HTMLElement("img")}}-Tags in unserem HTML-Quelltext eingefügt und die Bilder von diesen abgerufen, wenn wir auf die Leinwand zeichnen. Die Bilder sind aus der Seite versteckt, indem die CSS-Eigenschaft {{cssxref("display")}} auf `none` für diese Bilder eingestellt ist.

{{EmbedLiveSample("example_framing_an_image", "", "160")}}

Jedes {{HTMLElement("img")}} hat ein ID-Attribut zugewiesen, sodass wir eines für eine `source` und eines für den `frame` haben, was sie einfach macht, mit [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) auszuwählen.
Wir verwenden [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen werden, bevor `drawImage()` aufgerufen wird.
`drawImage()` schneidet den Rhino aus dem ersten Bild aus und skaliert ihn auf die Leinwand.
Zuletzt zeichnen wir den Bilderrahmen mit einem zweiten `drawImage()`-Aufruf.

## Kunstgalerie-Beispiel

Im letzten Beispiel dieses Kapitels bauen wir eine kleine Kunstgalerie. Die Galerie besteht aus einem Tisch, der mehrere Bilder enthält. Wenn die Seite geladen wird, wird für jedes Bild ein {{HTMLElement("canvas")}}-Element eingefügt und ein Rahmen darum gezeichnet.

In diesem Fall hat jedes Bild eine feste Breite und Höhe, ebenso wie der Rahmen, der um die Bilder gezeichnet wird. Sie könnten das Skript so erweitern, dass es die Breite und Höhe des Bildes verwendet, um den Rahmen perfekt darum herum einzupassen.

Im Code unten verwenden wir [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen werden, bevor irgendwelche Bilder auf die Leinwand gezeichnet werden.
Wir durchlaufen den [`document.images`](/de/docs/Web/API/Document/images)-Container und fügen für jedes Bild neue Canvas-Elemente hinzu. Eine andere Sache, die beachtet werden muss, ist die Verwendung der Methode [`Node.insertBefore`](/de/docs/Web/API/Node/insertBefore). `insertBefore()` ist eine Methode des übergeordneten Knotens (eine Tabellenzelle) des Elements (das Bild), vor dem wir unseren neuen Knoten (das Canvas-Element) einfügen möchten.

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

Und hier ist etwas CSS, um die Dinge schön aussehen zu lassen:

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

Und das JavaScript, um unsere gerahmten Bilder zu zeichnen, rundet alles ab:

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

Wie bereits erwähnt, kann das Skalieren von Bildern zu verschwommenen oder blockigen Artefakten aufgrund des Skalierungsprozesses führen. Sie können die [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)-Eigenschaft des Zeichnungskontexts verwenden, um die Verwendung von Bildglättungsalgorithmen beim Skalieren von Bildern innerhalb Ihres Kontexts zu steuern. Standardmäßig ist dies `true`, was bedeutet, dass Bilder beim Skalieren geglättet werden.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations")}}
