---
title: Bilder verwenden
slug: Web/API/Canvas_API/Tutorial/Using_images
l10n:
  sourceCommit: b4d7275e992575d765bd1f504c28c0a64e1d0632
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations" )}}

Bis jetzt haben wir unsere eigenen [Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) erstellt und [Stile angewendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors). Eine der aufregenderen Funktionen von {{HTMLElement("canvas")}} ist die Fähigkeit, Bilder zu verwenden. Diese können für dynamische Fotokompositionen oder als Hintergründe von Grafiken, für Sprites in Spielen und anderes verwendet werden. Externe Bilder können in jedem vom Browser unterstützten Format verwendet werden, wie PNG, GIF oder JPEG. Sie können sogar das von anderen Canvas-Elementen auf derselben Seite erstellte Bild als Quelle verwenden!

Das Importieren von Bildern in ein Canvas ist im Wesentlichen ein zweistufiger Prozess:

1. Erhalten Sie eine Referenz zu einem [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt oder zu einem anderen Canvas-Element als Quelle. Es ist auch möglich, Bilder bereitzustellen, indem Sie eine URL angeben.
2. Zeichnen Sie das Bild mit der `drawImage()`-Funktion auf das Canvas.

Schauen wir uns an, wie das geht.

## Bilder zum Zeichnen erhalten

Die Canvas-API kann folgende Datentypen als Bildquelle verwenden:

- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
  - : Dies sind Bilder, die mit dem `Image()`-Konstruktor erstellt wurden, sowie jedes {{HTMLElement("img")}}-Element.
- [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)
  - : Dies sind Bilder, die mit dem {{SVGElement("image")}}-Element eingebettet sind.
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
  - : Wenn Sie ein HTML-{{HTMLElement("video")}}-Element als Bildquelle verwenden, wird der aktuelle Frame aus dem Video aufgenommen und als Bild verwendet.
- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
  - : Sie können ein anderes {{HTMLElement("canvas")}}-Element als Bildquelle verwenden.
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
  - : Ein Bitmap-Bild, möglicherweise zugeschnitten. Solche Typen werden verwendet, um einen Teil eines Bildes, ein _Sprite_, aus einem größeren Bild zu extrahieren.
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
  - : Eine spezielle Art von `<canvas>`, das nicht angezeigt wird und vorbereitet ist, ohne angezeigt zu werden. Die Verwendung einer solchen Bildquelle ermöglicht es, darauf umzuschalten, ohne dass die Komposition des Inhalts für den Benutzer sichtbar ist.
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - : Ein Bild, das einen einzelnen Frame eines Videos darstellt.

Es gibt mehrere Möglichkeiten, Bilder zur Verwendung auf einem Canvas zu erhalten.

### Bilder von derselben Seite verwenden

Wir können eine Referenz zu Bildern auf derselben Seite wie das Canvas erhalten, indem wir eine der folgenden Methoden verwenden:

- Die [`document.images`](/de/docs/Web/API/Document/images)-Sammlung
- Die [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)-Methode
- Wenn Sie die ID des bestimmten Bildes kennen, das Sie verwenden möchten, können Sie mit [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) dieses spezifische Bild abrufen.

### Bilder aus anderen Domänen verwenden

Unter Verwendung des [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Attributes eines {{HTMLElement("img")}}-Elements (wiedergegeben durch die [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)-Eigenschaft), können Sie um Erlaubnis bitten, ein Bild von einer anderen Domäne zu laden, um es in Ihrem Aufruf von `drawImage()` zu verwenden. Wenn die Hosting-Domäne den plattformübergreifenden Zugriff auf das Bild erlaubt, kann das Bild in Ihrem Canvas verwendet werden, ohne es zu verfälschen; andernfalls wird bei der Verwendung des Bildes [das Canvas verfälscht](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases).

### Andere Canvas-Elemente verwenden

Genau wie bei normalen Bildern greifen wir auf andere Canvas-Elemente entweder mit der [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)- oder der [`document.getElementById()`](/de/docs/Web/API/Document/getElementById)-Methode zu. Stellen Sie sicher, dass Sie etwas auf das Quell-Canvas gezeichnet haben, bevor Sie es in Ihrem Ziel-Canvas verwenden.

Einer der praktischen Verwendungen wäre, ein zweites Canvas-Element als Miniaturansicht des anderen größeren Canvas zu verwenden.

### Bilder von Grund auf neu erstellen

Eine weitere Möglichkeit besteht darin, in unserem Skript neue [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte zu erstellen. Hierfür bietet sich der `Image()`-Konstruktor an:

```js
const img = new Image(); // Create new img element
img.src = "myImage.png"; // Set source path
```

Wenn dieses Skript ausgeführt wird, beginnt das Bild zu laden. Wenn Sie jedoch `drawImage()` aufrufen, bevor das Bild fertig geladen ist, passiert nichts. Ältere Browser geben möglicherweise sogar eine Ausnahme aus. Daher müssen Sie sicherstellen, dass Sie das [load event](/de/docs/Web/API/HTMLElement/load_event) verwenden, damit Sie das Bild nicht auf das Canvas zeichnen, bevor es bereit ist:

```js
const ctx = document.getElementById("canvas").getContext("2d");
const img = new Image();

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = "myImage.png";
```

Wenn Sie ein externes Bild verwenden, kann dies ein guter Ansatz sein. Sobald Sie jedoch viele Bilder verwenden oder [Ressourcen lazy-loaden](/de/docs/Web/Performance/Guides/Lazy_loading) möchten, müssen Sie wahrscheinlich warten, bis alle Dateien verfügbar sind, bevor Sie auf das Canvas zeichnen.
Die folgenden Beispiele, die sich mit mehreren Bildern befassen, verwenden eine asynchrone Funktion und [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen sind, bevor `drawImage()` aufgerufen wird:

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

### Einbetten eines Bildes über Data: URL

Eine weitere Möglichkeit, Bilder einzubinden, ist über die [data: URL](/de/docs/Web/URI/Reference/Schemes/data). Data URLs ermöglichen es Ihnen, ein Bild vollständig als Base64-kodierten Zeichenfolgen direkt in Ihrem Code zu definieren.

```js
const img = new Image(); // Create new img element
img.src =
  "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
```

Ein Vorteil von Data URLs ist, dass das resultierende Bild sofort verfügbar ist, ohne dass eine zusätzliche Anfrage beim Server erforderlich ist. Ein weiterer potenzieller Vorteil besteht darin, dass es möglich ist, all Ihr [CSS](/de/docs/Web/CSS), [JavaScript](/de/docs/Web/JavaScript), [HTML](/de/docs/Web/HTML) und Bilder in einer Datei zu kapseln, sodass es portabler an andere Orte ist.

Einige Nachteile dieser Methode sind, dass Ihr Bild nicht zwischengespeichert wird, und bei größeren Bildern kann die kodierte URL ziemlich lang werden.

### Frames aus einem Video verwenden

Sie können auch Frames aus einem Video verwenden, das durch ein {{HTMLElement("video")}}-Element wiedergegeben wird (selbst wenn das Video nicht sichtbar ist). Wenn Sie zum Beispiel ein {{HTMLElement("video")}}-Element mit der ID "myVideo" haben, können Sie Folgendes tun:

```js
function getMyVideo() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  return document.getElementById("myVideo");
}
```

Dies gibt das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Objekt für das Video zurück, das, wie zuvor besprochen, als Bildquelle für das Canvas verwendet werden kann.

## Bilder zeichnen

Sobald wir eine Referenz zu unserem Quellbildobjekt haben, können wir die `drawImage()`-Methode verwenden, um es auf dem Canvas zu rendern. Wie wir später sehen werden, ist die `drawImage()`-Methode überladen und hat mehrere Varianten. In ihrer einfachsten Form sieht sie so aus:

- [`drawImage(image, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das Bild, das durch den `image`-Parameter angegeben wird, an den Koordinaten (`x`, `y`).

> [!NOTE]
> SVG-Bilder müssen im Wurzel- `<svg>`-Element eine Breite und Höhe angeben.

### Beispiel: Ein kleines Liniendiagramm

Im folgenden Beispiel verwenden wir ein externes Bild als Hintergrund für ein kleines Liniendiagramm. Wenn Sie Hintergründe verwenden, kann Ihr Skript erheblich verkleinert werden, da wir den Code zum Generieren des Hintergrunds vermeiden können. In diesem Beispiel verwenden wir nur ein Bild, daher verwende ich den `load`-Ereignishandler des Bildobjekts, um die Zeichnungsanweisungen auszuführen. Die `drawImage()`-Methode platziert den Hintergrund an der Koordinate (0, 0), was die obere linke Ecke des Canvas ist.

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

Die zweite Variante der `drawImage()`-Methode fügt zwei neue Parameter hinzu und ermöglicht es uns, skalierte Bilder auf dem Canvas zu platzieren.

- [`drawImage(image, x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Dies fügt die Parameter `width` und `height` hinzu, die die Größe angeben, auf die das Bild beim Zeichnen auf dem Canvas skaliert werden soll.

### Beispiel: Ein Bild kacheln

In diesem Beispiel verwenden wir ein Bild als Tapete und wiederholen es mehrfach auf dem Canvas. Dies wird durch Schleifen und Platzieren der skalierten Bilder an verschiedenen Positionen erreicht. Im untenstehenden Code iteriert die erste `for`-Schleife über die Zeilen. Die zweite `for`-Schleife iteriert über die Spalten. Das Bild wird auf ein Drittel seiner ursprünglichen Größe skaliert, also 50x38 Pixel.

> [!NOTE]
> Bilder können verschwommen werden, wenn sie zu stark vergrößert oder zu körnig, wenn sie zu stark verkleinert werden. Skalierung sollte wahrscheinlich vermieden werden, wenn Text enthalten ist, der lesbar bleiben muss.

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

Die dritte und letzte Variante der `drawImage()`-Methode hat acht Parameter zusätzlich zur Bildquelle. Sie ermöglicht es uns, einen Abschnitt des Quellbildes auszuschneiden, dann zu skalieren und auf unserem Canvas zu zeichnen.

- [`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Für ein `image` nimmt diese Funktion den Bereich des Quellbildes, der durch das Rechteck definiert ist, dessen obere linke Ecke (`sx`, `sy`) und dessen Breite und Höhe `sWidth` und `sHeight` sind, und zeichnet ihn auf das Canvas, platziert es in der Canvas an (`dx`, `dy`) und skaliert es auf die Größe, die durch `dWidth` und `dHeight` angegeben ist, wobei das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten wird.

Um wirklich zu verstehen, was dies tut, kann es hilfreich sein, dieses Bild zu betrachten:

![Die rechteckigen Quellbildkoordinaten oben links sind sx und sy mit einer Breite und Höhe von sWidth und sHeight. Das Quellbild wird auf die Ziel-Canvas übertragen, wo die obere linke Ecke dx und dy sind, mit einer Breite und Höhe von dWidth und dHeight.](canvas_drawimage.jpg)

Die ersten vier Parameter definieren die Position und Größe des Ausschnitts auf dem Quellbild. Die letzten vier Parameter definieren das Rechteck, in das das Bild auf das Ziel-Canvas gezeichnet wird.

Zuschneiden kann ein nützliches Werkzeug sein, wenn Sie Kompositionen erstellen möchten. Sie könnten alle Elemente in einer einzigen Bilddatei haben und diese Methode verwenden, um eine vollständige Zeichnung zu komponieren. Wenn Sie beispielsweise ein Diagramm erstellen möchten, könnten Sie ein PNG-Bild haben, das den gesamten notwendigen Text in einer einzigen Datei enthält und je nach Ihren Daten die Skala Ihres Diagramms relativ einfach ändern. Ein weiterer Vorteil ist, dass Sie nicht jedes Bild einzeln laden müssen, was die Ladeleistung verbessern kann.

### Beispiel: Ein Bild rahmen

In diesem Beispiel verwenden wir dasselbe Nashorn wie im vorherigen Beispiel, aber wir schneiden seinen Kopf aus und komponieren ihn in einem Bilderrahmen. Das Bilderrahmenbild ist ein 24-Bit-PNG, das einen Schlagschatten enthält. Da 24-Bit-PNG-Bilder einen vollständigen 8-Bit-Alpha-Kanal enthalten, im Gegensatz zu GIF- und 8-Bit-PNG-Bildern, kann es auf jedem Hintergrund ohne Berücksichtigung einer Mattefarbe platziert werden.

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

Wir sind bei diesem Mal einen anderen Weg gegangen, um die Bilder zu laden. Statt sie zu laden, indem wir neue [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte erstellen, haben wir sie als {{HTMLElement("img")}}-Tags in unserem HTML-Quellcode eingefügt und die Bilder von dort abgerufen, wenn sie auf das Canvas gezeichnet werden. Die Bilder sind auf der Seite ausgeblendet, indem die CSS-Eigenschaft {{cssxref("display")}} für diese Bilder auf `none` gesetzt wird.

{{EmbedLiveSample("example_framing_an_image", "", "160")}}

Jedes {{HTMLElement("img")}} erhält ein ID-Attribut, sodass wir eines für eine `source` und eines für das `frame` haben, was sie leicht auswählbar macht mit [`document.getElementById()`](/de/docs/Web/API/Document/getElementById).
Wir verwenden [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen sind, bevor `drawImage()` aufgerufen wird.
`drawImage()` schneidet den Nashornkopf aus dem ersten Bild aus und skaliert es auf das Canvas.
Zum Schluss zeichnen wir den Bilderrahmen mit einem zweiten `drawImage()`-Aufruf.

## Kunstgalerie-Beispiel

Im letzten Beispiel dieses Kapitels bauen wir eine kleine Kunstgalerie. Die Galerie besteht aus einer Tabelle mit mehreren Bildern. Wenn die Seite geladen wird, wird für jedes Bild ein {{HTMLElement("canvas")}}-Element eingefügt und ein Rahmen darum gezeichnet.

In diesem Fall hat jedes Bild eine feste Breite und Höhe sowie der Rahmen, der darum gezeichnet wird. Sie könnten das Skript erweitern, sodass es die Breite und Höhe des Bildes verwendet, um den Rahmen perfekt darum fit zu machen.

Im untenstehenden Code verwenden wir [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen sind, bevor irgendwelche Bilder auf das Canvas gezeichnet werden.
Wir durchlaufen den [`document.images`](/de/docs/Web/API/Document/images)-Container und fügen neue Canvas-Elemente für jedes hinzu. Eine andere zu beachtende Sache ist die Verwendung der [`Node.insertBefore`](/de/docs/Web/API/Node/insertBefore)-Methode. `insertBefore()` ist eine Methode des übergeordneten Knotens (einer Tabellenzelle) des Elements (das Bild), vor dem wir unser neues Knoten (das Canvas-Element) einfügen möchten.

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

Und hier ist etwas CSS, damit es gut aussieht:

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

Alles zusammenführt das JavaScript, um unsere gerahmten Bilder zu zeichnen:

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

Wie bereits erwähnt, kann das Skalieren von Bildern aufgrund des Skalierungsprozesses zu unscharfen oder klobigen Artefakten führen. Sie können die [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)-Eigenschaft des Zeichenkontextes verwenden, um die Verwendung von Bildglättungsalgorithmen beim Skalieren von Bildern in Ihrem Kontext zu steuern. Standardmäßig ist dies `true`, was bedeutet, dass Bilder beim Skalieren geglättet werden.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations")}}
