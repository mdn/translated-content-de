---
title: Verwendung von Bildern
slug: Web/API/Canvas_API/Tutorial/Using_images
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations" )}}

Bisher haben wir unsere eigenen [Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) erstellt und [Stile angewendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors). Eine der spannendsten Funktionen des {{HTMLElement("canvas")}} ist die Möglichkeit, Bilder zu verwenden. Diese können für dynamisches Fotokomponieren oder als Hintergründe für Grafiken, für Sprites in Spielen und so weiter verwendet werden. Externe Bilder können in jedem vom Browser unterstützten Format verwendet werden, wie PNG, GIF oder JPEG. Sie können sogar das von anderen Canvas-Elementen auf derselben Seite erzeugte Bild als Quelle verwenden!

Das Importieren von Bildern in ein Canvas ist im Grunde ein zweistufiger Prozess:

1. Erhalten Sie eine Referenz zu einem [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt oder zu einem anderen Canvas-Element als Quelle. Es ist auch möglich, Bilder bereitzustellen, indem Sie eine URL angeben.
2. Zeichnen Sie das Bild mit der Funktion `drawImage()` auf das Canvas.

Schauen wir uns an, wie das geht.

## Bilder beziehen, die gezeichnet werden sollen

Die Canvas-API kann jede der folgenden Datentypen als Bildquelle verwenden:

- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
  - : Dies sind Bilder, die mit dem Konstruktor `Image()` erstellt wurden, sowie jedes {{HTMLElement("img")}}-Element.
- [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)
  - : Dies sind Bilder, die mit dem {{SVGElement("image")}}-Element eingebettet wurden.
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
  - : Die Verwendung eines HTML-{{HTMLElement("video")}}-Elements als Bildquelle erfasst das aktuelle Bild vom Video und verwendet es als Bild.
- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
  - : Sie können ein anderes {{HTMLElement("canvas")}}-Element als Bildquelle verwenden.
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
  - : Ein Bitmap-Bild, eventuell zugeschnitten. Solche Typen werden verwendet, um einen Teil eines Bildes, ein _Sprite_, aus einem größeren Bild zu extrahieren.
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
  - : Eine spezielle Art von `<canvas>`, die nicht angezeigt wird und ohne Anzeige vorbereitet wird. Die Verwendung einer solchen Bildquelle ermöglicht es, darauf umzuschalten, ohne dass die Zusammensetzung des Inhalts für den Benutzer sichtbar ist.
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - : Ein Bild, das einen einzigen Frame eines Videos darstellt.

Es gibt mehrere Möglichkeiten, Bilder für die Verwendung auf einem Canvas zu erhalten.

### Verwendung von Bildern von derselben Seite

Wir können eine Referenz zu Bildern auf derselben Seite wie das Canvas erhalten, indem wir eine der folgenden Methoden verwenden:

- Die [`document.images`](/de/docs/Web/API/Document/images)-Sammlung
- Die Methode [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)
- Wenn Sie die ID des spezifischen Bildes kennen, das Sie verwenden möchten, können Sie [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwenden, um dieses spezielle Bild abzurufen.

### Verwendung von Bildern aus anderen Domains

Mit dem `crossorigin`-Attribut eines {{HTMLElement("img")}}-Elements (widerspiegelt durch die [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)-Eigenschaft) können Sie die Erlaubnis anfordern, ein Bild von einer anderen Domain für Ihre `drawImage()`-Aufruf zu laden. Wenn die hostende Domain den domänenübergreifenden Zugriff auf das Bild erlaubt, kann das Bild auf Ihrem Canvas verwendet werden, ohne es zu verfälschen; andernfalls wird die Verwendung des Bildes das [Canvas verfälschen](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases).

### Verwendung anderer Canvas-Elemente

Genau wie bei normalen Bildern greifen wir auf andere Canvas-Elemente entweder über die Methode [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName) oder [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) zu. Stellen Sie sicher, dass Sie etwas auf das Quell-Canvas gezeichnet haben, bevor Sie es im Ziel-Canvas verwenden.

Eine der praktischeren Anwendungen wäre die Verwendung eines zweiten Canvas-Elements als Thumbnail-Ansicht des anderen, größeren Canvas.

### Bilder von Grund auf neu erstellen

Eine weitere Option ist es, neue [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte in unserem Skript zu erstellen. Dazu haben wir die Möglichkeit, einen `Image()`-Konstruktor zu verwenden:

```js
const img = new Image(); // Create new img element
img.src = "myImage.png"; // Set source path
```

Wenn dieses Skript ausgeführt wird, beginnt das Bild zu laden, aber wenn Sie versuchen, `drawImage()` aufzurufen, bevor das Bild fertig geladen ist, wird nichts passieren.
Ältere Browser könnten sogar eine Ausnahme werfen, deshalb müssen Sie sicherstellen, dass Sie das [load-Event](/de/docs/Web/API/HTMLElement/load_event) verwenden, damit Sie das Bild nicht auf das Canvas zeichnen, bevor es bereit ist:

```js
const ctx = document.getElementById("canvas").getContext("2d");
const img = new Image();

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = "myImage.png";
```

Wenn Sie nur ein externes Bild verwenden, kann dies ein guter Ansatz sein, aber sobald Sie viele Bilder verwenden oder [Ressourcen nachladen](/de/docs/Web/Performance/Guides/Lazy_loading), müssen Sie wahrscheinlich warten, bis alle Dateien verfügbar sind, bevor Sie auf das Canvas zeichnen.
Die unten stehenden Beispiele, die sich mit mehreren Bildern befassen, verwenden eine asynchrone Funktion und [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um zu warten, bis alle Bilder geladen sind, bevor `drawImage()` aufgerufen wird:

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

### Einbettung eines Bildes über data: URL

Eine weitere Möglichkeit, Bilder einzubinden, ist die Verwendung der [data: URL](/de/docs/Web/URI/Reference/Schemes/data). Data-URLs ermöglichen es, ein Bild vollständig als Base64-kodierten Zeichenfolgen direkt im Code zu definieren.

```js
const img = new Image(); // Create new img element
img.src =
  "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
```

Ein Vorteil von Data-URLs ist, dass das resultierende Bild sofort verfügbar ist, ohne eine zusätzliche Serveranfrage. Ein weiterer potenzieller Vorteil ist, dass es möglich ist, alle Ihre [CSS](/de/docs/Web/CSS), [JavaScript](/de/docs/Web/JavaScript), [HTML](/de/docs/Web/HTML) und Bilder in einer einzigen Datei zu kapseln, was es portabler für andere Standorte macht.

Einige Nachteile dieser Methode sind, dass Ihr Bild nicht zwischengespeichert wird und dass die kodierte URL für größere Bilder ziemlich lang werden kann.

### Verwendung von Frames aus einem Video

Sie können auch Frames aus einem Video verwenden, das von einem {{HTMLElement("video")}}-Element präsentiert wird (auch wenn das Video nicht sichtbar ist). Zum Beispiel, wenn Sie ein {{HTMLElement("video")}}-Element mit der ID "myVideo" haben, können Sie dies tun:

```js
function getMyVideo() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    return document.getElementById("myVideo");
  }
}
```

Dies gibt das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Objekt für das Video zurück, welches, wie zuvor behandelt, als Bildquelle für das Canvas verwendet werden kann.

## Zeichnen von Bildern

Sobald wir eine Referenz zu unserem Quellbildobjekt haben, können wir die Methode `drawImage()` verwenden, um es auf das Canvas zu rendern. Wie wir später sehen werden, ist die Methode `drawImage()` überladen und hat mehrere Varianten. In ihrer einfachsten Form sieht sie so aus:

- [`drawImage(image, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das durch den `image`-Parameter angegebene Bild an den Koordinaten (`x`, `y`).

> [!NOTE]
> SVG-Bilder müssen eine Breite und Höhe im Wurzel-`<svg>`-Element angeben.

### Beispiel: Ein kleines Liniendiagramm

Im folgenden Beispiel verwenden wir ein externes Bild als Hintergrund für ein kleines Liniendiagramm. Die Verwendung von Hintergründen kann Ihr Skript erheblich verkleinern, da wir den Bedarf an Code zur Generierung des Hintergrunds vermeiden können. In diesem Beispiel verwenden wir nur ein Bild, daher verwende ich den `load`-Event-Handler des Bildobjekts, um die Zeichnungsanweisungen auszuführen. Die Methode `drawImage()` platziert den Hintergrund an den Koordinaten (0, 0), was die obere linke Ecke des Canvas ist.

```html hidden
<html lang="en">
  <body>
    <canvas id="canvas" width="180" height="150"></canvas>
  </body>
</html>
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

Die zweite Variante der Methode `drawImage()` fügt zwei neue Parameter hinzu und ermöglicht es uns, skalierte Bilder auf dem Canvas zu platzieren.

- [`drawImage(image, x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Dies fügt die Parameter `width` und `height` hinzu, die die Größe angeben, auf die das Bild beim Zeichnen auf das Canvas skaliert werden soll.

### Beispiel: Ein Bild kacheln

In diesem Beispiel werden wir ein Bild als Hintergrund verwenden und es mehrmals auf dem Canvas wiederholen. Dies geschieht durch Schleifen und Platzieren der skalierten Bilder an verschiedenen Positionen. Im untenstehenden Code durchläuft die erste `for`-Schleife die Zeilen. Die zweite `for`-Schleife durchläuft die Spalten. Das Bild wird auf ein Drittel seiner ursprünglichen Größe skaliert, was 50x38 Pixel beträgt.

> [!NOTE]
> Bilder können unscharf werden, wenn sie zu stark vergrößert oder körnig, wenn sie zu stark verkleinert werden. Skalierung ist wahrscheinlich am besten nicht empfehlenswert, wenn Sie Text darin haben, der lesbar bleiben muss.

```html hidden
<html lang="en">
  <body>
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
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

## Zerschneiden

Die dritte und letzte Variante der `drawImage()`-Methode hat acht Parameter zusätzlich zur Bildquelle. Sie ermöglicht es uns, einen Abschnitt des Quellbildes auszuschneiden, dann zu skalieren und auf unser Canvas zu zeichnen.

- [`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Gegeben ein `image`, nimmt diese Funktion den Bereich des Quellbildes, der durch das Rechteck festgelegt wird, dessen obere linke Ecke bei (`sx`, `sy`) liegt und dessen Breite und Höhe `sWidth` und `sHeight` sind, und zeichnet es auf das Canvas, platziert es auf dem Canvas bei (`dx`, `dy`) und skaliert es auf die durch `dWidth` und `dHeight` angegebene Größe, wobei das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten wird.

Um wirklich zu verstehen, was dies bewirkt, könnte es hilfreich sein, dieses Bild zu betrachten:

![Die rechteckigen Quellbilder haben in der oberen linken Ecke die Koordinaten sx und sy mit einer Breite und Höhe von sWidth bzw. sHeight. Das Quellbild wird auf das Ziel-Canvas übertragen, wo die obere linke Ecke die Koordinaten dx und dy hat, mit einer Breite und Höhe von dWidth bzw. dHeight.](canvas_drawimage.jpg)

Die ersten vier Parameter definieren die Position und Größe des Ausschnitts auf dem Quellbild. Die letzten vier Parameter definieren das Rechteck, in das das Bild auf das Ziel-Canvas gezeichnet wird.

Das Zerschneiden kann ein nützliches Werkzeug sein, wenn Sie Kompositionen erstellen möchten. Sie könnten alle Elemente in einer einzigen Bilddatei haben und diese Methode verwenden, um eine vollständige Zeichnung zusammenzustellen. Wenn Sie beispielsweise ein Diagramm erstellen möchten, könnten Sie eine PNG-Bilddatei haben, die den gesamten notwendigen Text in einer einzigen Datei enthält, und je nach Ihren Daten könnten Sie die Skalierung Ihres Diagramms ziemlich leicht ändern. Ein weiterer Vorteil besteht darin, dass Sie nicht jedes Bild einzeln laden müssen, was die Ladeleistung verbessern kann.

### Beispiel: Ein Bild einrahmen

In diesem Beispiel verwenden wir dasselbe Nashorn wie im vorhergehenden Beispiel, schneiden jedoch den Kopf aus und setzen ihn in einen Bilderrahmen. Der Bilderrahmen ist ein 24-Bit-PNG, das einen Schlagschatten enthält. Da 24-Bit-PNG-Bilder einen vollständigen 8-Bit-Alpha-Kanal enthalten, im Gegensatz zu GIF- und 8-Bit-PNG-Bildern, kann es ohne Bedenken bezüglich einer matten Farbe auf jeden Hintergrund gesetzt werden.

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

Wir haben diesmal einen anderen Ansatz zum Laden der Bilder gewählt. Anstatt sie durch Erstellen neuer [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte zu laden, haben wir sie als {{HTMLElement("img")}}-Tags in unserem HTML-Quellcode eingefügt und die Bilder von diesen geholt, wenn wir auf das Canvas zeichnen wollten. Die Bilder sind durch das Einstellen der CSS-Eigenschaft {{cssxref("display")}} auf `none` für diese Bilder auf der Seite versteckt.

{{EmbedLiveSample("example_framing_an_image", "", "160")}}

Jedes {{HTMLElement("img")}} erhält ein ID-Attribut, sodass wir eines für eine `source` (Quelle) und eines für den `frame` (Rahmen) haben, was es einfach macht, sie mit [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) auszuwählen.
Wir verwenden [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um zu warten, bis alle Bilder geladen sind, bevor wir `drawImage()` aufrufen.
`drawImage()` schneidet das Nashorn aus dem ersten Bild aus und skaliert es auf das Canvas.
Zum Schluss zeichnen wir den Bilderrahmen mit einem zweiten `drawImage()`-Aufruf.

## Kunstgalerie-Beispiel

Im letzten Beispiel dieses Kapitels bauen wir eine kleine Kunstgalerie. Die Galerie besteht aus einer Tabelle, die mehrere Bilder enthält. Wenn die Seite geladen wird, wird für jedes Bild ein {{HTMLElement("canvas")}}-Element eingefügt und ein Rahmen darum gezeichnet.

In diesem Fall hat jedes Bild eine feste Breite und Höhe, ebenso wie der Rahmen, der darum gezeichnet wird. Sie könnten das Skript verbessern, sodass es die Breite und Höhe des Bildes verwendet, um den Rahmen perfekt anzupassen.

Im untenstehenden Code verwenden wir [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um zu warten, bis alle Bilder geladen sind, bevor wir Bilder auf das Canvas zeichnen.
Wir durchlaufen den [`document.images`](/de/docs/Web/API/Document/images)-Container und fügen für jedes Bild neue Canvas-Elemente hinzu. Etwas anderes, was man beachten sollte, ist die Verwendung der Methode [`Node.insertBefore`](/de/docs/Web/API/Node/insertBefore). `insertBefore()` ist eine Methode des übergeordneten Knotens (eine Tabellenzelle) des Elements (das Bild), vor dem wir unseren neuen Knoten (das Canvas-Element) einfügen möchten.

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

Und hier ist etwas CSS, um die Dinge schön aussehen zu lassen:

```css
body {
  background: 0 -100px repeat-x url(bg_gallery.png) #4f191a;
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

Alles zusammenfügt ist das JavaScript, um unsere gerahmten Bilder zu zeichnen:

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

## Kontrolle des Bildskalierungsverhaltens

Wie zuvor erwähnt, kann das Skalieren von Bildern zu unscharfen oder blockigen Artefakten führen, die durch den Skalierungsprozess entstehen. Sie können die Eigenschaft [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) des Zeichnungskontexts verwenden, um den Einsatz von Bildglättungsalgorithmen beim Skalieren von Bildern innerhalb Ihres Kontexts zu steuern. Standardmäßig ist dies `true`, was bedeutet, dass Bilder beim Skalieren geglättet werden.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations")}}
