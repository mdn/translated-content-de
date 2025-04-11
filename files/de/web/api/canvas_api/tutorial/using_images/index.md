---
title: Verwenden von Bildern
slug: Web/API/Canvas_API/Tutorial/Using_images
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations" )}}

Bis jetzt haben wir unsere eigenen [Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) erstellt und [Stile angewendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors). Eine der aufregendsten Funktionen von {{HTMLElement("canvas")}} ist die Möglichkeit, Bilder zu verwenden. Diese können genutzt werden, um dynamische Fotocollagen zu erstellen oder als Hintergründe von Grafiken, für Sprites in Spielen und so weiter. Externe Bilder können in jedem vom Browser unterstützten Format verwendet werden, wie PNG, GIF oder JPEG. Sie können sogar das Bild verwenden, das von anderen Canvas-Elementen auf derselben Seite erzeugt wird, als Quelle!

Das Importieren von Bildern in ein Canvas ist im Wesentlichen ein zweistufiger Prozess:

1. Erhalten Sie eine Referenz zu einem [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt oder einem anderen Canvas-Element als Quelle. Es ist auch möglich, Bilder bereitzustellen, indem Sie eine URL angeben.
2. Zeichnen Sie das Bild auf das Canvas mit der `drawImage()`-Funktion.

Schauen wir uns an, wie das funktioniert.

## Bilder zum Zeichnen bekommen

Die Canvas-API kann jede der folgenden Datentypen als Bildquelle verwenden:

- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
  - : Diese sind Bilder, die mit dem Konstruktor `Image()` erstellt wurden, sowie jedes {{HTMLElement("img")}}-Element.
- [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)
  - : Diese sind Bilder, die mit dem {{SVGElement("image")}}-Element eingebettet sind.
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
  - : Die Verwendung eines HTML-{{HTMLElement("video")}}-Elements als Bildquelle nimmt den aktuellen Frame aus dem Video und verwendet ihn als Bild.
- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
  - : Sie können ein anderes {{HTMLElement("canvas")}}-Element als Bildquelle verwenden.
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
  - : Ein Bitmap-Bild, eventuell zugeschnitten. Solche Typen werden verwendet, um einen Teil eines Bildes, ein _Sprite_, aus einem größeren Bild zu extrahieren.
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
  - : Eine spezielle Art von `<canvas>`, die nicht angezeigt wird und vorbereitet ist, ohne angezeigt zu werden. Die Verwendung einer solchen Bildquelle ermöglicht es, zu switchen, ohne dass die Zusammensetzung des Inhalts für den Benutzer sichtbar ist.
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - : Ein Bild, das einen einzelnen Frame eines Videos darstellt.

Es gibt mehrere Möglichkeiten, Bilder zur Verwendung auf einem Canvas zu erhalten.

### Verwendung von Bildern von derselben Seite

Wir können eine Referenz zu Bildern auf derselben Seite wie das Canvas durch eine der folgenden Methoden erhalten:

- Die [`document.images`](/de/docs/Web/API/Document/images)-Sammlung
- Die [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)-Methode
- Wenn Sie die ID des spezifischen Bildes kennen, das Sie verwenden möchten, können Sie [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwenden, um dieses spezifische Bild abzurufen

### Verwendung von Bildern von anderen Domains

Mithilfe des [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Attributs eines {{HTMLElement("img")}}-Elements (wiedergegeben durch die [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)-Eigenschaft) können Sie die Berechtigung anfordern, ein Bild von einer anderen Domain für die Verwendung in Ihrem `drawImage()`-Aufruf zu laden. Wenn die Hosting-Domain den Cross-Domain-Zugriff auf das Bild erlaubt, kann das Bild in Ihrem Canvas verwendet werden, ohne es zu belasten; andernfalls wird das Verwenden des Bildes [das Canvas belasten](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases).

### Verwendung anderer Canvas-Elemente

Genau wie bei normalen Bildern greifen wir auf andere Canvas-Elemente entweder mit der [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)- oder der [`document.getElementById()`](/de/docs/Web/API/Document/getElementById)-Methode zu. Vergewissern Sie sich, dass Sie etwas auf das Quell-Canvas gezeichnet haben, bevor Sie es in Ihrem Ziel-Canvas verwenden.

Eine der praktischeren Anwendungen davon wäre, ein zweites Canvas-Element als Thumbnail-Ansicht des anderen größeren Canvas zu verwenden.

### Bilder von Grund auf neu erstellen

Eine weitere Option ist das Erstellen neuer [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte in unserem Skript. Dazu haben wir den Komfort eines `Image()`-Konstruktors:

```js
const img = new Image(); // Create new img element
img.src = "myImage.png"; // Set source path
```

Wenn dieses Skript ausgeführt wird, beginnt das Bild zu laden, aber wenn Sie versuchen, `drawImage()` aufzurufen, bevor das Bild fertig geladen ist, wird nichts passieren. Ältere Browser können möglicherweise sogar eine Ausnahme auslösen, daher müssen Sie sicherstellen, dass Sie das [load event](/de/docs/Web/API/HTMLElement/load_event) verwenden, damit Sie das Bild nicht auf das Canvas zeichnen, bevor es fertig ist:

```js
const ctx = document.getElementById("canvas").getContext("2d");
const img = new Image();

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = "myImage.png";
```

Wenn Sie ein externes Bild verwenden, kann dies ein guter Ansatz sein, aber wenn Sie viele Bilder verwenden möchten oder [Ressourcen „Lazy-loading“](/de/docs/Web/Performance/Guides/Lazy_loading), müssen Sie wahrscheinlich warten, bis alle Dateien verfügbar sind, bevor Sie auf das Canvas zeichnen. Die untenstehenden Beispiele, die mit mehreren Bildern umgehen, verwenden eine asynchrone Funktion und [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen werden, bevor `drawImage()` aufgerufen wird:

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

### Einbetten eines Bildes über eine data: URL

Eine andere mögliche Möglichkeit, Bilder einzufügen, ist über die [data: URL](/de/docs/Web/URI/Reference/Schemes/data). Daten-URLs ermöglichen es Ihnen, ein Bild vollständig als Base64-codierten Zeichenfolgen direkt in Ihrem Code zu definieren.

```js
const img = new Image(); // Create new img element
img.src =
  "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
```

Ein Vorteil von Daten-URLs ist, dass das resultierende Bild sofort verfügbar ist, ohne eine weitere Rundreise zum Server. Ein weiterer potenzieller Vorteil ist, dass es auch möglich ist, all Ihre [CSS](/de/docs/Web/CSS), [JavaScript](/de/docs/Web/JavaScript), [HTML](/de/docs/Web/HTML) und Bilder in einer Datei zu kapseln, was es tragbarer für andere Orte macht.

Einige Nachteile dieser Methode sind, dass Ihr Bild nicht zwischengespeichert wird und bei größeren Bildern die codierte URL ziemlich lang werden kann.

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

Dies gibt das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Objekt für das Video zurück, das, wie bereits erwähnt, als Bildquelle für das Canvas verwendet werden kann.

## Bilder zeichnen

Sobald wir eine Referenz zu unserem Quellbildobjekt haben, können wir die Methode `drawImage()` verwenden, um es auf das Canvas zu rendern. Wie wir später sehen werden, ist die Methode `drawImage()` überladen und hat mehrere Varianten. In ihrer grundlegendsten Form sieht sie so aus:

- [`drawImage(image, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das durch den Parameter `image` angegebene Bild an den Koordinaten (`x`, `y`).

> [!NOTE]
> SVG-Bilder müssen eine Breite und Höhe im Wurzel-`<svg>`-Element angeben.

### Beispiel: Ein kleines Liniendiagramm

Im folgenden Beispiel werden wir ein externes Bild als Hintergrund für ein kleines Liniendiagramm verwenden. Die Verwendung von Hintergründen kann Ihr Skript erheblich verkleinern, da wir den Bedarf an Code zur Erzeugung des Hintergrunds vermeiden können. In diesem Beispiel verwenden wir nur ein Bild, daher verwende ich den `load`-Event-Handler des Bildobjekts, um die Zeichnungsanweisungen auszuführen. Die `drawImage()`-Methode platziert den Hintergrund bei den Koordinaten (0, 0), was die obere linke Ecke des Canvas ist.

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

Die zweite Variante der `drawImage()`-Methode fügt zwei neue Parameter hinzu und ermöglicht es uns, skalierte Bilder auf das Canvas zu platzieren.

- [`drawImage(image, x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Dies fügt die Parameter `width` und `height` hinzu, die die Größe angeben, auf die das Bild beim Zeichnen auf das Canvas skaliert werden soll.

### Beispiel: Ein Bild kacheln

In diesem Beispiel verwenden wir ein Bild als Tapete und wiederholen es mehrmals auf dem Canvas. Dies wird durch Schleifen erreicht, wobei die skalierten Bilder an verschiedenen Positionen platziert werden. Im untenstehenden Code iteriert die erste `for`-Schleife über die Zeilen. Die zweite `for`-Schleife iteriert über die Spalten. Das Bild wird auf ein Drittel seiner ursprünglichen Größe skaliert, was 50x38 Pixel beträgt.

> [!NOTE]
> Bilder können unscharf werden, wenn sie hochskaliert werden, oder körnig, wenn sie zu stark verkleinert werden. Das Skalieren sollte wahrscheinlich vermieden werden, wenn Sie Text darin haben, der lesbar bleiben muss.

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

Die dritte und letzte Variante der `drawImage()`-Methode hat acht Parameter zusätzlich zur Bildquelle. Sie ermöglicht es uns, einen Abschnitt des Quellbildes auszuschneiden, dann zu skalieren und auf unser Canvas zu zeichnen.

- [`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Bei einem `image` nimmt diese Funktion den Bereich des Quellbildes, der durch das Rechteck angegeben ist, dessen obere linke Ecke (`sx`, `sy`) ist und dessen Breite und Höhe `sWidth` und `sHeight` ist, und zeichnet ihn auf das Canvas, wobei es ihn auf dem Canvas an der Stelle (`dx`, `dy`) platziert und auf die durch `dWidth` und `dHeight` angegebene Größe skaliert, wobei das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten wird.

Um wirklich zu verstehen, was dies bewirkt, könnte es hilfreich sein, sich dieses Bild anzusehen:

![Die rechteckigen Quellbild-Koordinaten oben links sind sx und sy mit einer Breite und Höhe von jeweils sWidth und sHeight. Das Quellbild wird auf das Ziel-Canvas übertragen, wobei die oberen linken Koordinaten dx und dy mit einer Breite und Höhe von jeweils dWidth und dHeight sind.](canvas_drawimage.jpg)

Die ersten vier Parameter definieren die Position und Größe des Ausschnitts auf dem Quellbild. Die letzten vier Parameter definieren das Rechteck, in das das Bild auf dem Ziel-Canvas gezeichnet wird.

Ausschneiden kann ein nützliches Werkzeug sein, wenn Sie Kompositionen erstellen möchten. Sie könnten alle Elemente in einer einzigen Bilddatei haben und diese Methode verwenden, um eine vollständige Zeichnung zu erstellen. Wenn Sie beispielsweise eine Grafik erstellen möchten, könnten Sie ein PNG-Bild haben, das den gesamten erforderlichen Text in einer einzigen Datei enthält, und je nach Ihren Daten könnte es einfach sein, die Skalierung Ihrer Grafik zu ändern. Ein weiterer Vorteil ist, dass Sie nicht jedes Bild einzeln laden müssen, was die Ladeperformance verbessern kann.

### Beispiel: Ein Bild rahmen

In diesem Beispiel verwenden wir dasselbe Nashorn wie im vorherigen Beispiel, aber wir schneiden seinen Kopf aus und fügen ihn in einen Bilderrahmen ein. Das Bild des Bilderrahmens ist ein 24-Bit-PNG mit einem Schlagschatten. Da 24-Bit-PNG-Bilder einen vollständigen 8-Bit-Alpha-Kanal enthalten, im Gegensatz zu GIF- und 8-Bit-PNG-Bildern, kann es auf jeden Hintergrund platziert werden, ohne sich um eine matte Farbe kümmern zu müssen.

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

Wir haben diesmal einen anderen Ansatz zum Laden der Bilder gewählt. Anstatt sie durch das Erstellen neuer [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte zu laden, haben wir sie als {{HTMLElement("img")}}-Tags in unserem HTML-Quellcode eingefügt und die Bilder von dort abgerufen, wenn wir auf das Canvas zeichnen. Die Bilder sind von der Seite ausgeblendet, indem für diese Bilder die CSS-Eigenschaft {{cssxref("display")}} auf `none` gesetzt wird.

{{EmbedLiveSample("example_framing_an_image", "", "160")}}

Jedes {{HTMLElement("img")}} erhält ein ID-Attribut, sodass wir eines für einen `source` und eines für den `frame` haben, was es einfach macht, sie mit [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) auszuwählen. Wir verwenden [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen werden, bevor wir `drawImage()` aufrufen. `drawImage()` schneidet das Nashorn aus dem ersten Bild aus und skaliert es auf das Canvas. Zum Schluss zeichnen wir den Bilderrahmen mit einem zweiten `drawImage()`-Aufruf.

## Kunstgalerie-Beispiel

Im letzten Beispiel dieses Kapitels bauen wir eine kleine Kunstgalerie. Die Galerie besteht aus einer Tabelle, die mehrere Bilder enthält. Wenn die Seite geladen wird, wird für jedes Bild ein {{HTMLElement("canvas")}}-Element eingefügt und ein Rahmen darum gezeichnet.

In diesem Fall hat jedes Bild eine feste Breite und Höhe, ebenso wie der Rahmen, der um sie gezeichnet wird. Sie könnten das Skript so erweitern, dass es die Breite und Höhe des Bildes verwendet, um den Rahmen perfekt darum passen zu lassen.

Im untenstehenden Code verwenden wir [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen werden, bevor Bilder auf das Canvas gezeichnet werden. Wir durchlaufen den [`document.images`](/de/docs/Web/API/Document/images)-Container und fügen für jedes Bild neue Canvas-Elemente hinzu. Eine weitere Sache, die beachtet werden muss, ist die Verwendung der Methode [`Node.insertBefore`](/de/docs/Web/API/Node/insertBefore). `insertBefore()` ist eine Methode des übergeordneten Knotens (einer Tabellenzelle) des Elements (des Bildes), vor dem wir unseren neuen Knoten (das Canvas-Element) einfügen möchten.

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

Das alles zusammenfügend ist das JavaScript, um unsere eingerahmten Bilder zu zeichnen:

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

## Steuerung des Skalierungsverhaltens von Bildern

Wie zuvor erwähnt, kann das Skalieren von Bildern zu verschwommenen oder blockigen Artefakten führen, die durch den Skalierungsprozess entstehen. Sie können die Eigenschaft [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) des Zeichenkontexts verwenden, um die Verwendung von Bildglättungsalgorithmen beim Skalieren von Bildern in Ihrem Kontext zu steuern. Standardmäßig ist dies `true`, was bedeutet, dass Bilder beim Skalieren geglättet werden.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations")}}
