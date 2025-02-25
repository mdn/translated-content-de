---
title: Bilder verwenden
slug: Web/API/Canvas_API/Tutorial/Using_images
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations" )}}

Bisher haben wir unsere eigenen [Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) erstellt und [Stile angewendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors). Eine der spannendsten Funktionen von {{HTMLElement("canvas")}} ist die Fähigkeit, Bilder zu verwenden. Diese können für dynamisches Fotocompositing, als Hintergrundbilder von Grafiken, für Sprites in Spielen und so weiter verwendet werden. Externe Bilder können in jedem vom Browser unterstützten Format wie PNG, GIF oder JPEG verwendet werden. Sie können sogar das von anderen Canvas-Elementen auf derselben Seite erzeugte Bild als Quelle verwenden!

Das Importieren von Bildern in ein Canvas ist im Wesentlichen ein zweistufiger Prozess:

1. Holen Sie sich eine Referenz auf ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt oder auf ein anderes Canvas-Element als Quelle. Es ist auch möglich, Bilder durch Angabe einer URL zu verwenden.
2. Zeichnen Sie das Bild mit der `drawImage()`-Funktion auf das Canvas.

Schauen wir uns an, wie das funktioniert.

## Bilder zur Zeichnung erhalten

Die Canvas-API kann eine der folgenden Datentypen als Bildquelle verwenden:

- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
  - : Diese sind Bilder, die mit dem `Image()`-Konstruktor erstellt wurden, sowie jedes {{HTMLElement("img")}}-Element.
- [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)
  - : Dies sind eingebettete Bilder, die mit dem {{SVGElement("image")}}-Element erstellt wurden.
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
  - : Wenn Sie ein HTML {{HTMLElement("video")}}-Element als Bildquelle verwenden, wird der aktuelle Frame aus dem Video verwendet und als Bild genutzt.
- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
  - : Sie können ein anderes {{HTMLElement("canvas")}}-Element als Bildquelle verwenden.
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
  - : Ein Bitmap-Bild, eventuell beschnitten. Solche Typen werden verwendet, um einen Teil eines Bildes, ein _Sprite_, aus einem größeren Bild zu extrahieren.
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
  - : Eine spezielle Art von `<canvas>`, das nicht angezeigt wird und vorbereitet wird, ohne angezeigt zu werden. Durch die Verwendung einer solchen Bildquelle kann man zu ihr wechseln, ohne dass die Komposition des Inhalts für den Benutzer sichtbar ist.
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - : Ein Bild, das einen einzelnen Frame eines Videos darstellt.

Es gibt mehrere Möglichkeiten, um Bilder für die Verwendung auf einem Canvas zu erhalten.

### Verwendung von Bildern von derselben Seite

Wir können eine Referenz auf Bilder auf derselben Seite wie das Canvas erhalten, indem wir eine der folgenden Methoden verwenden:

- Die [`document.images`](/de/docs/Web/API/Document/images)-Sammlung
- Die [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)-Methode
- Wenn Sie die ID des spezifischen Bildes kennen, das Sie verwenden möchten, können Sie [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwenden, um dieses bestimmte Bild abzurufen.

### Verwendung von Bildern von anderen Domains

Mit dem [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin)-Attribut eines {{HTMLElement("img")}}-Elements (reflektiert durch die [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)-Eigenschaft) können Sie die Erlaubnis anfordern, ein Bild von einer anderen Domain für Ihre `drawImage()`-Ausführung zu laden. Wenn die Hosting-Domain Zugriff auf das Bild von anderen Domains erlaubt, kann das Bild in Ihrem Canvas verwendet werden, ohne es zu beschädigen; andernfalls wird die Verwendung des Bildes [das Canvas beschädigen](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases).

### Verwendung anderer Canvas-Elemente

Genau wie bei normalen Bildern greifen wir auf andere Canvas-Elemente zu, indem wir entweder die [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)- oder die [`document.getElementById()`](/de/docs/Web/API/Document/getElementById)-Methode verwenden. Stellen Sie sicher, dass Sie etwas auf das Quell-Canvas gezeichnet haben, bevor Sie es in Ihrem Ziel-Canvas verwenden.

Eine der praktischeren Anwendungen wäre die Verwendung eines zweiten Canvas-Elements als Thumbnail-Ansicht des anderen größeren Canvas.

### Bilder von Grund auf neu erstellen

Eine weitere Möglichkeit ist, neue [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte in unserem Skript zu erstellen. Dazu haben wir den Komfort eines `Image()`-Konstruktors:

```js
const img = new Image(); // Create new img element
img.src = "myImage.png"; // Set source path
```

Wenn dieses Skript ausgeführt wird, beginnt das Bild zu laden, aber wenn Sie versuchen, `drawImage()` aufzurufen, bevor das Bild fertig geladen ist, wird nichts passieren.
Ältere Browser werfen möglicherweise sogar eine Ausnahme, daher müssen Sie sicherstellen, dass Sie das [load event](/de/docs/Web/API/HTMLElement/load_event) verwenden, um das Bild nicht vor dem Laden auf das Canvas zu zeichnen:

```js
const ctx = document.getElementById("canvas").getContext("2d");
const img = new Image();

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = "myImage.png";
```

Wenn Sie ein externes Bild verwenden, kann dies ein guter Ansatz sein, aber sobald Sie viele Bilder verwenden möchten oder [Ressourcen verzögert laden](/de/docs/Web/Performance/Guides/Lazy_loading) möchten, müssen Sie wahrscheinlich warten, bis alle Dateien verfügbar sind, bevor Sie auf das Canvas zeichnen.
Die folgenden Beispiele, die mit mehreren Bildern umgehen, verwenden eine asynchrone Funktion und [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen sind, bevor `drawImage()` aufgerufen wird:

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

### Einbetten eines Bildes über data: URL

Eine weitere mögliche Möglichkeit, Bilder einzuschließen, ist über die [data: URL](/de/docs/Web/URI/Reference/Schemes/data). Data-URLs ermöglichen es Ihnen, ein Bild vollständig als Base64-kodierte Zeichenfolge direkt in Ihrem Code zu definieren.

```js
const img = new Image(); // Create new img element
img.src =
  "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
```

Ein Vorteil von Data-URLs ist, dass das resultierende Bild sofort verfügbar ist, ohne einen weiteren Serveraufruf. Ein weiterer potenzieller Vorteil ist, dass es auch möglich ist, alle Ihre [CSS](/de/docs/Web/CSS), [JavaScript](/de/docs/Web/JavaScript), [HTML](/de/docs/Web/HTML) und Bilder in einer Datei zu kapseln, wodurch es tragbarer an anderen Orten wird.

Einige Nachteile dieser Methode sind, dass Ihr Bild nicht zwischengespeichert wird, und für größere Bilder kann die kodierte URL ziemlich lang werden.

### Verwendung von Frames aus einem Video

Sie können auch Frames aus einem Video verwenden, das von einem {{HTMLElement("video")}}-Element präsentiert wird (auch wenn das Video nicht sichtbar ist). Wenn Sie beispielsweise ein {{HTMLElement("video")}}-Element mit der ID "myVideo" haben, können Sie Folgendes tun:

```js
function getMyVideo() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    return document.getElementById("myVideo");
  }
}
```

Dies gibt das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Objekt für das Video zurück, das, wie zuvor beschrieben, als Bildquelle für das Canvas verwendet werden kann.

## Bilder zeichnen

Sobald Sie eine Referenz auf unser Quellbildobjekt haben, können wir die `drawImage()`-Methode verwenden, um es auf dem Canvas zu rendern. Wie wir später sehen werden, ist die `drawImage()`-Methode überladen und hat mehrere Varianten. In ihrer grundlegendsten Form sieht sie so aus:

- [`drawImage(image, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das durch den `image`-Parameter angegebene Bild an den Koordinaten (`x`, `y`).

> [!NOTE]
> SVG-Bilder müssen Breite und Höhe im Wurzel-`<svg>`-Element angeben.

### Beispiel: Ein kleines Liniendiagramm

Im folgenden Beispiel verwenden wir ein externes Bild als Hintergrund für ein kleines Liniendiagramm. Die Verwendung von Hintergrundbildern kann Ihr Skript erheblich verkleinern, da wir keinen Code zur Erzeugung des Hintergrunds benötigen. In diesem Beispiel verwenden wir nur ein Bild, sodass ich den `load`-Event-Handler des Bildobjekts verwende, um die Zeichnungsanweisungen auszuführen. Die `drawImage()`-Methode platziert den Hintergrund an der Koordinate (0, 0), die die obere linke Ecke des Canvas ist.

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

Die zweite Variante der `drawImage()`-Methode fügt zwei neue Parameter hinzu und lässt uns skalierte Bilder auf dem Canvas platzieren.

- [`drawImage(image, x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Diese fügt die Parameter `width` und `height` hinzu, die die Größe angeben, auf die das Bild skaliert werden soll, wenn es auf das Canvas gezeichnet wird.

### Beispiel: Ein Bild kacheln

In diesem Beispiel verwenden wir ein Bild als Tapete und wiederholen es mehrmals auf dem Canvas. Dies wird durch Schleifen und Platzieren der skalierten Bilder an verschiedenen Positionen erreicht. Im Code unten iteriert die erste `for`-Schleife über die Zeilen. Die zweite `for`-Schleife iteriert über die Spalten. Das Bild wird auf ein Drittel seiner ursprünglichen Größe skaliert, was 50x38 Pixel entspricht.

> [!NOTE]
> Bilder können verschwommen werden, wenn sie zu stark skaliert werden, oder körnig, wenn sie zu stark verkleinert werden. Das Skalieren sollte idealerweise vermieden werden, wenn Sie Text haben, der lesbar bleiben muss.

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

## Zuschneiden

Die dritte und letzte Variante der `drawImage()`-Methode hat acht Parameter zusätzlich zur Bildquelle. Sie ermöglicht es uns, einen Abschnitt des Quellbildes auszuschneiden, zu skalieren und auf unserem Canvas zu zeichnen.

- [`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Angenommen ein `image`, nimmt diese Funktion den Bereich des Quellbildes, der durch das Rechteck mit der oberen linken Ecke (`sx`, `sy`) und der Breite und Höhe `sWidth` und `sHeight` angegeben wird, und zeichnet es in das Canvas, wobei es auf dem Canvas an (`dx`, `dy`) platziert und auf die Größe skaliert wird, die durch `dWidth` und `dHeight` angegeben wird, wobei das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten wird.

Um wirklich zu verstehen, was dies tut, kann es hilfreich sein, sich dieses Bild anzusehen:

![Die rechteckigen Quellbildkoordinaten sind sx und sy, mit einer Breite und Höhe von sWidth und sHeight. Das Quellbild wird auf das Ziel-Canvas übertragen, wo sich die oberen linken Koordinaten dx und dy befinden, mit einer Breite und Höhe von dWidth und dHeight.](canvas_drawimage.jpg)

Die ersten vier Parameter definieren den Ort und die Größe des Ausschnitts im Quellbild. Die letzten vier Parameter definieren das Rechteck, in das das Bild auf dem Ziel-Canvas gezeichnet wird.

Das Zuschneiden kann ein nützliches Werkzeug sein, wenn Sie Kompositionen erstellen möchten. Sie könnten alle Elemente in einer einzigen Bilddatei haben und diese Methode verwenden, um eine vollständige Zeichnung zu komponieren. Wenn Sie beispielsweise ein Diagramm erstellen möchten, könnten Sie ein PNG-Bild mit dem gesamten notwendigen Text in einer einzigen Datei haben und je nach Ihren Daten die Skalierung Ihres Diagramms relativ einfach ändern. Ein weiterer Vorteil ist, dass Sie nicht jedes Bild einzeln laden müssen, was die Ladeleistung verbessern kann.

### Beispiel: Ein Bild rahmen

In diesem Beispiel verwenden wir das gleiche Rhinozeros wie im vorherigen Beispiel, aber wir schneiden seinen Kopf aus und setzen ihn in einen Bilderrahmen. Das Bilderrahmenbild ist ein 24-Bit-PNG, das einen Schattenwurf beinhaltet. Da 24-Bit-PNG-Bilder einen vollständigen 8-Bit-Alpha-Kanal enthalten, im Gegensatz zu GIF- und 8-Bit-PNG-Bildern, kann es auf jeden Hintergrund gelegt werden, ohne sich um eine Matte-Farbe kümmern zu müssen.

```html
<canvas id="canvas" width="150" height="150"></canvas>
<div style="display: none;">
  <img
    id="source"
    src="https://mdn.github.io/shared-assets/images/examples/rhino.jpg"
    width="300"
    height="227" />
  <img id="frame" src="canvas_picture_frame.png" width="132" height="150" />
</div>
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

Wir sind bei der Bildladung dieses Mal anders vorgegangen. Anstatt sie durch das Erstellen neuer [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte zu laden, haben wir sie als {{HTMLElement("img")}}-Tags in unsere HTML-Quelle eingebunden und die Bilder von diesen abgerufen, wenn wir sie auf das Canvas gezeichnet haben. Die Bilder werden durch das Festlegen der CSS-Eigenschaft {{cssxref("display")}} auf `none` für diese Bilder von der Seite ausgeblendet.

{{EmbedLiveSample("example_framing_an_image", "", "160")}}

Jedes {{HTMLElement("img")}} wird mit einem ID-Attribut versehen, sodass wir eines für eine `source` und eines für den `frame` haben, was es einfach macht, sie mit [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) auszuwählen.
Wir verwenden [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um zu warten, dass alle Bilder geladen werden, bevor wir `drawImage()` aufrufen.
`drawImage()` schneidet das Rhinozeros aus dem ersten Bild aus und skaliert es auf das Canvas.
Schließlich zeichnen wir den Bilderrahmen mit einem zweiten `drawImage()`-Aufruf.

## Kunstgalerie-Beispiel

Im letzten Beispiel dieses Kapitels erstellen wir eine kleine Kunstgalerie. Die Galerie besteht aus einem Tisch, der mehrere Bilder enthält. Wenn die Seite geladen wird, wird für jedes Bild ein {{HTMLElement("canvas")}}-Element eingefügt und ein Rahmen darum gezeichnet.

In diesem Fall hat jedes Bild eine feste Breite und Höhe, ebenso wie der Rahmen, der darum gezeichnet wird. Sie könnten das Skript so erweitern, dass es die Breite und Höhe des Bildes verwendet, um den Rahmen perfekt um es herum passen zu lassen.

Im folgenden Code verwenden wir [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um zu warten, dass alle Bilder geladen werden, bevor wir Bilder auf das Canvas zeichnen.
Wir durchlaufen den [`document.images`](/de/docs/Web/API/Document/images)-Container und fügen neue Canvas-Elemente für jedes hinzu. Eine weitere zu beachtende Sache ist die Verwendung der [`Node.insertBefore`](/de/docs/Web/API/Node/insertBefore)-Methode. `insertBefore()` ist eine Methode des Elternelements (einer Tabellenzelle) des Elements (des Bildes), vor welchem wir unseren neuen Knoten (das Canvas-Element) einfügen möchten.

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

Und hier ist ein wenig CSS, um die Dinge schön aussehen zu lassen:

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

Alles zusammengeführt wird mit dem JavaScript, um unsere gerahmten Bilder zu zeichnen:

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

Wie bereits erwähnt, kann das Skalieren von Bildern zu unscharfen oder blockigen Artefakten führen, die durch den Skalierungsprozess entstehen. Sie können die Verwendung von Bildglättungsalgorithmen beim Skalieren von Bildern innerhalb Ihres Kontexts mit der Eigenschaft [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) des Zeichenkontextes steuern. Standardmäßig ist diese Eigenschaft auf `true` gesetzt, was bedeutet, dass Bilder beim Skalieren geglättet werden.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations")}}
