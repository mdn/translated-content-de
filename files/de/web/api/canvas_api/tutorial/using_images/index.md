---
title: Verwendung von Bildern
slug: Web/API/Canvas_API/Tutorial/Using_images
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations" )}}

Bisher haben wir unsere eigenen [Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) erstellt und [Stile angewendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors). Eine der spannenderen Funktionen von {{HTMLElement("canvas")}} ist die Möglichkeit, Bilder zu verwenden. Diese können zur dynamischen Fotokomposition oder als Hintergründe für Grafiken, für Sprites in Spielen und so weiter verwendet werden. Externe Bilder können in jedem vom Browser unterstützten Format wie PNG, GIF oder JPEG verwendet werden. Sie können sogar das Bild eines anderen Canvas-Elements auf derselben Seite als Quelle verwenden!

Das Einfügen von Bildern in ein Canvas erfolgt im Wesentlichen in zwei Schritten:

1. Eine Referenz auf ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt oder ein anderes Canvas-Element als Quelle erhalten. Es ist auch möglich, Bilder durch Angabe einer URL zu verwenden.
2. Das Bild mit der `drawImage()`-Funktion auf das Canvas zeichnen.

Schauen wir uns einmal an, wie das geht.

## Bilder zum Zeichnen erhalten

Die Canvas-API kann eine beliebige der folgenden Datentypen als Bildquelle verwenden:

- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
  - : Dies sind Bilder, die mit dem `Image()`-Konstruktor erstellt wurden, sowie jedes {{HTMLElement("img")}}-Element.
- [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)
  - : Dies sind Bilder, die mit dem {{SVGElement("image")}}-Element eingebettet sind.
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
  - : Die Verwendung eines HTML-{{HTMLElement("video")}}-Elements als Bildquelle erfasst das aktuelle Frame aus dem Video und verwendet es als Bild.
- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
  - : Sie können ein anderes {{HTMLElement("canvas")}}-Element als Bildquelle verwenden.
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
  - : Ein Bitmap-Bild, gegebenenfalls beschnitten. Dieser Typ wird verwendet, um einen Teil eines Bildes, einen _Sprite_, aus einem größeren Bild zu extrahieren.
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
  - : Eine spezielle Art von `<canvas>`, die nicht angezeigt wird und ohne Anzeige vorbereitet wird. Die Verwendung einer solchen Bildquelle ermöglicht es, darauf umzuschalten, ohne dass der Inhalt für den Benutzer sichtbar ist.
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - : Ein Bild, das ein einzelnes Frame eines Videos darstellt.

Es gibt verschiedene Möglichkeiten, Bilder zur Verwendung auf einem Canvas zu bekommen.

### Verwendung von Bildern auf derselben Seite

Wir können eine Referenz auf Bilder auf derselben Seite wie das Canvas mit einer der folgenden Methoden erhalten:

- Die [`document.images`](/de/docs/Web/API/Document/images)-Sammlung
- Die [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)-Methode
- Wenn Sie die ID des spezifischen Bildes kennen, das Sie verwenden möchten, können Sie [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwenden, um dieses spezifische Bild abzurufen.

### Verwendung von Bildern von anderen Domains

Mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Attribut eines {{HTMLElement("img")}}-Elements (widerspiegelt durch die [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)-Eigenschaft) können Sie um Erlaubnis bitten, ein Bild von einer anderen Domain für Ihre Aufruf von `drawImage()` zu laden. Wenn die hostende Domain den Zugriff auf das Bild von anderen Domains erlaubt, kann das Bild in Ihrem Canvas verwendet werden, ohne es zu verunreinigen; andernfalls wird das Bild [das Canvas verunreinigen](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases).

### Verwendung anderer Canvas-Elemente

Genau wie bei normalen Bildern greifen wir auf andere Canvas-Elemente mit entweder der [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)- oder der [`document.getElementById()`](/de/docs/Web/API/Document/getElementById)-Methode zu. Achten Sie darauf, dass Sie etwas auf das Quell-Canvas gezeichnet haben, bevor Sie es in Ihrem Ziel-Canvas verwenden.

Eine der praktischeren Anwendungen davon wäre, ein zweites Canvas-Element als Miniaturansicht des anderen größeren Canvas zu verwenden.

### Erstellen von Bildern von Grund auf

Eine weitere Möglichkeit ist es, neue [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte in unserem Skript zu erstellen. Dafür steht uns der `Image()`-Konstruktor zur Verfügung:

```js
const img = new Image(); // Create new img element
img.src = "myImage.png"; // Set source path
```

Wenn dieses Skript ausgeführt wird, beginnt das Bild zu laden, aber wenn Sie versuchen, `drawImage()` aufzurufen, bevor das Bild vollständig geladen ist, passiert nichts. Ältere Browser können sogar eine Ausnahme auslösen, daher müssen Sie sicherstellen, dass Sie das [load-Ereignis](/de/docs/Web/API/HTMLElement/load_event) verwenden, damit Sie das Bild nicht auf das Canvas zeichnen, bevor es bereit ist:

```js
const ctx = document.getElementById("canvas").getContext("2d");
const img = new Image();

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = "myImage.png";
```

Wenn Sie ein externes Bild verwenden, kann dies ein guter Ansatz sein, aber sobald Sie viele Bilder verwenden möchten oder [Ressourcen verzögert laden](/de/docs/Web/Performance/Guides/Lazy_loading), müssen Sie wahrscheinlich warten, bis alle Dateien verfügbar sind, bevor Sie auf das Canvas zeichnen. Die nachstehenden Beispiele, die sich mit mehreren Bildern befassen, verwenden eine asynchrone Funktion und [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen sind, bevor sie `drawImage()` aufrufen.

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

### Einbetten eines Bildes über eine Daten-URL

Eine weitere Möglichkeit, Bilder einzufügen, ist über die [data: URL](/de/docs/Web/URI/Reference/Schemes/data). Daten-URLs ermöglichen es Ihnen, ein Bild vollständig als Base64-codierten Zeichenfolgen direkt in Ihrem Code zu definieren.

```js
const img = new Image(); // Create new img element
img.src =
  "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
```

Ein Vorteil von Daten-URLs ist, dass das resultierende Bild sofort verfügbar ist, ohne eine weitere Serveranfrage. Ein weiterer potenzieller Vorteil ist, dass es auch möglich ist, all Ihre [CSS](/de/docs/Web/CSS), [JavaScript](/de/docs/Web/JavaScript), [HTML](/de/docs/Web/HTML) und Bilder in einer einzigen Datei zu kapseln, wodurch es portabler für andere Orte wird.

Einige Nachteile dieser Methode sind, dass Ihr Bild nicht zwischengespeichert wird und dass kodierte URLs für größere Bilder ziemlich lang werden können.

### Verwendung von Frames aus einem Video

Sie können auch Frames aus einem Video verwenden, das von einem {{HTMLElement("video")}}-Element präsentiert wird (selbst wenn das Video nicht sichtbar ist). Zum Beispiel, wenn Sie ein {{HTMLElement("video")}}-Element mit der ID "myVideo" haben, könnten Sie dies tun:

```js
function getMyVideo() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    return document.getElementById("myVideo");
  }
}
```

Dies gibt das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Objekt für das Video zurück, das, wie zuvor erwähnt, als Bildquelle für das Canvas verwendet werden kann.

## Zeichnen von Bildern

Sobald wir eine Referenz zu unserem Bildquellen-Objekt haben, können wir die `drawImage()`-Methode verwenden, um es auf das Canvas zu rendern. Wie wir später sehen werden, ist die Methode `drawImage()` überlagert und hat mehrere Varianten. In ihrer grundlegendsten Form sieht sie so aus:

- [`drawImage(image, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das durch den `image`-Parameter spezifizierte Bild an den Koordinaten (`x`, `y`).

> [!NOTE]
> SVG-Bilder müssen eine Breite und Höhe im Root-`<svg>`-Element angeben.

### Beispiel: Ein kleines Liniendiagramm

Im folgenden Beispiel werden wir ein externes Bild als Hintergrund für ein kleines Liniendiagramm verwenden. Die Verwendung von Hintergründen kann Ihr Skript erheblich verkleinern, da wir den Bedarf an Code zur Generierung des Hintergrunds vermeiden können. In diesem Beispiel verwenden wir nur ein Bild, daher verwende ich den `load`-Ereignishandler des Bildobjekts, um die Zeichenanweisungen auszuführen. Die `drawImage()`-Methode platziert den Hintergrund an der Koordinate (0, 0), was die obere linke Ecke des Canvas ist.

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

Die zweite Variante der `drawImage()`-Methode fügt zwei neue Parameter hinzu und ermöglicht es uns, skalierte Bilder auf dem Canvas zu platzieren.

- [`drawImage(image, x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Dies fügt die Parameter `width` und `height` hinzu, die die Größe angeben, auf die das Bild skaliert werden soll, wenn es auf das Canvas gezeichnet wird.

### Beispiel: Kacheln eines Bildes

In diesem Beispiel verwenden wir ein Bild als Tapete und wiederholen es mehrmals auf dem Canvas. Dies wird durch eine Schleife erreicht, die die skalierten Bilder an verschiedenen Positionen platziert. Im folgenden Code iteriert die erste `for`-Schleife über die Reihen, und die zweite `for`-Schleife iteriert über die Spalten. Das Bild wird auf ein Drittel seiner ursprünglichen Größe skaliert, was 50x38 Pixel entspricht.

> [!NOTE]
> Bilder können verschwommen werden, wenn sie zu stark skaliert werden, oder körnig, wenn sie zu stark verkleinert werden. Skalierung sollte wahrscheinlich vermieden werden, wenn Sie Text im Bild haben, der lesbar bleiben muss.

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

## Ausschneiden

Die dritte und letzte Variante der `drawImage()`-Methode hat acht Parameter zusätzlich zur Bildquelle. Sie erlaubt es uns, einen Abschnitt des Quellbildes auszuschneiden, dann zu skalieren und auf unser Canvas zu zeichnen.

- [`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Gegeben ein `image`, nimmt diese Funktion den Bereich des Quellbildes, der durch das Rechteck definiert ist, dessen obere linke Ecke (`sx`, `sy`) ist und dessen Breite und Höhe `sWidth` und `sHeight` sind, und zeichnet es in das Canvas, indem es es auf dem Canvas an (`dx`, `dy`) platziert und es auf die durch `dWidth` und `dHeight` angegebene Größe skaliert, wobei das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten wird.

Um zu verstehen, was dies bewirkt, kann es hilfreich sein, sich dieses Bild anzusehen:

![Die rechteckigen Quellbildkoordinaten oben links sind sx und sy mit einer Breite und Höhe von sWidth und sHeight. Das Quellbild wird auf das Ziel-Canvas übertragen, wo die linken oberen Eckkoordinaten dx und dy sind, mit einer Breite und Höhe von dWidth und dHeight.](canvas_drawimage.jpg)

Die ersten vier Parameter definieren die Position und Größe des Schnittbereichs des Quellbildes. Die letzten vier Parameter definieren das Rechteck, in das das Bild auf dem Zielcanvas gezeichnet wird.

Ausschneiden kann ein nützliches Werkzeug sein, wenn Sie Kompositionen erstellen möchten. Sie könnten alle Elemente in einer einzigen Bilddatei haben und diese Methode verwenden, um eine vollständige Zeichnung zu komponieren. Beispielsweise, wenn Sie ein Diagramm erstellen möchten, könnten Sie ein PNG-Bild haben, das alle notwendigen Texte in einer einzigen Datei enthält, und je nach Ihren Daten könnten Sie die Skala Ihres Diagramms ziemlich einfach ändern. Ein weiterer Vorteil ist, dass Sie nicht jedes Bild einzeln laden müssen, was die Ladeleistung verbessern kann.

### Beispiel: Ein Bild einrahmen

In diesem Beispiel verwenden wir dasselbe Nashorn wie im vorherigen Beispiel, aber wir schneiden seinen Kopf aus und fügen ihn in einen Bilderrahmen ein. Das Bild vom Bilderrahmen ist ein 24-Bit-PNG, das einen Schattenwurf enthält. Da 24-Bit-PNG-Bilder einen vollwertigen 8-Bit-Alpha-Kanal enthalten, können sie auf jeden Hintergrund gelegt werden, ohne sich um eine matte Farbe kümmern zu müssen.

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

Wir haben diesmal einen anderen Ansatz zum Laden der Bilder gewählt. Anstatt sie durch die Erstellung neuer [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte zu laden, haben wir sie als {{HTMLElement("img")}}-Tags in unserem HTML-Quellcode eingebettet und die Bilder von dort geholt, als wir auf das Canvas gezeichnet haben. Die Bilder sind von der Seite verborgen, indem die CSS-Eigenschaft {{cssxref("display")}} für diese Bilder auf `none` gesetzt wird.

{{EmbedLiveSample("example_framing_an_image", "", "160")}}

Jedes {{HTMLElement("img")}} erhält ein ID-Attribut, sodass wir eines für eine `source` und eines für den `frame` verwenden, was es leicht macht, sie mit [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) auszuwählen. Wir verwenden [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen sind, bevor wir `drawImage()` aufrufen. `drawImage()` schneidet das Nashorn aus dem ersten Bild aus und skaliert es auf das Canvas. Schließlich zeichnen wir den Bilderrahmen mit einem zweiten `drawImage()`-Aufruf.

## Kunstgalerie-Beispiel

Im letzten Beispiel dieses Kapitels bauen wir eine kleine Kunstgalerie. Die Galerie besteht aus einer Tabelle, die mehrere Bilder enthält. Wenn die Seite geladen wird, wird für jedes Bild ein {{HTMLElement("canvas")}}-Element eingefügt und ein Rahmen darum gezeichnet.

In diesem Fall hat jedes Bild eine feste Breite und Höhe, ebenso der Rahmen, der um sie gezeichnet wird. Sie könnten das Skript erweitern, sodass es die Breite und Höhe des Bildes nutzt, um den Rahmen perfekt darum zu platzieren.

Im folgenden Code verwenden wir [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen sind, bevor Bilder auf das Canvas gezeichnet werden. Wir durchlaufen den [`document.images`](/de/docs/Web/API/Document/images)-Container und fügen für jedes ein neues Canvas-Element hinzu. Eine andere Sache, die man beachten sollte, ist die Verwendung der [`Node.insertBefore`](/de/docs/Web/API/Node/insertBefore)-Methode. `insertBefore()` ist eine Methode des Elternknotens (einer Tabellenzelle) des Elements (das Bild), vor dem wir unser neues Node (das Canvas-Element) einfügen möchten.

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

Und hier ist etwas CSS, um die Dinge hübsch aussehen zu lassen:

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

Das Ganze wird im JavaScript zusammengebunden, um unsere gerahmten Bilder zu zeichnen:

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

Wie bereits erwähnt, kann das Skalieren von Bildern zu verschwommenen oder blockigen Artefakten aufgrund des Skalierprozesses führen. Sie können die [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)-Eigenschaft des Zeichenkontextes verwenden, um die Verwendung von Bildglättungsalgorithmen beim Skalieren von Bildern in Ihrem Kontext zu steuern. Standardmäßig ist diese Eigenschaft auf `true` gesetzt, was bedeutet, dass Bilder beim Skalieren geglättet werden.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations")}}
