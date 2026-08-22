---
title: Verwendung von Bildern
slug: Web/API/Canvas_API/Tutorial/Using_images
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations" )}}

Bis jetzt haben wir unsere eigenen [Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) erstellt und [Stile angewendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors). Eine der aufregendsten Funktionen von {{HTMLElement("canvas")}} ist die Möglichkeit, Bilder zu verwenden. Diese können für dynamische Foto-Montagen oder als Hintergründe von Grafiken, für Sprites in Spielen und so weiter genutzt werden. Externe Bilder können in jedem vom Browser unterstützten Format verwendet werden, wie PNG, GIF oder JPEG. Sie können sogar das von anderen Canvas-Elementen auf derselben Seite erzeugte Bild als Quelle verwenden!

Das Importieren von Bildern in ein Canvas ist im Wesentlichen ein zweistufiger Prozess:

1. Holen Sie sich eine Referenz auf ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt oder ein anderes Canvas-Element als Quelle. Es ist auch möglich, Bilder durch Angabe einer URL zu verwenden.
2. Zeichnen Sie das Bild mit der Funktion `drawImage()` auf das Canvas.

Schauen wir uns an, wie das gemacht wird.

## Bilder zum Zeichnen erhalten

Die Canvas-API kann jeden der folgenden Datentypen als Bildquelle verwenden:

- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
  - : Dies sind Bilder, die mit dem `Image()` Konstruktor erstellt wurden, sowie jedes {{HTMLElement("img")}}-Element.
- [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)
  - : Dies sind Bilder, die mit dem {{SVGElement("image")}}-Element eingebettet sind.
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
  - : Die Verwendung eines HTML {{HTMLElement("video")}}-Elements als Bildquelle erfasst den aktuellen Frame aus dem Video und verwendet ihn als Bild.
- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
  - : Sie können ein anderes {{HTMLElement("canvas")}}-Element als Ihre Bildquelle verwenden.
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
  - : Ein Bitmap-Bild, gegebenenfalls zugeschnitten. Wird verwendet, um einen Teil eines Bildes, einen _Sprite_, aus einem größeren Bild zu extrahieren.
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
  - : Eine besondere Art von `<canvas>`, das nicht angezeigt wird und vorbereitet wird, ohne angezeigt zu werden. Die Verwendung einer solchen Bildquelle ermöglicht es, darauf zu wechseln, ohne dass die Komposition des Inhalts für den Benutzer sichtbar ist.
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - : Ein Bild, das einen einzelnen Frame eines Videos darstellt.

Es gibt mehrere Möglichkeiten, um Bilder zur Verwendung auf einem Canvas zu erhalten.

### Verwenden von Bildern von derselben Seite

Wir können eine Referenz auf Bilder auf derselben Seite wie das Canvas erhalten, indem wir eine der folgenden Methoden verwenden:

- Die [`document.images`](/de/docs/Web/API/Document/images)-Sammlung
- Die [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)-Methode
- Wenn Sie die ID des spezifischen Bildes kennen, das Sie verwenden möchten, können Sie [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwenden, um dieses bestimmte Bild abzurufen.

Wenn Sie viele Bilder verwenden oder [Ressourcen Lazy-Loaden](/de/docs/Web/Performance/Guides/Lazy_loading) möchten, müssen Sie wahrscheinlich warten, bis alle Dateien verfügbar sind, bevor Sie auf das Canvas zeichnen. Im Beispiel unten wird mit mehreren Bildern umgegangen, indem eine asynchrone Funktion und [`Promise.all`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) verwendet werden, um zu warten, bis alle Bilder geladen sind, bevor `drawImage()` aufgerufen wird:

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

### Bilder von Grund auf erstellen

Eine weitere Option ist es, neue [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte in unserem Skript zu erstellen. Dafür haben wir den Komfort eines `Image()` Konstruktors:

```js
const img = new Image(); // Create new img element
img.src = "myImage.png"; // Set source path
```

Wenn dieses Skript ausgeführt wird, beginnt das Bild zu laden. Wenn Sie jedoch versuchen, `drawImage()` aufzurufen, bevor das Bild vollständig geladen ist, wird nichts passieren. Ältere Browser können sogar eine Ausnahme werfen, daher müssen Sie sicherstellen, dass Sie das [Load-Ereignis](/de/docs/Web/API/HTMLElement/load_event) verwenden, um das Bild nicht auf das Canvas zu zeichnen, bevor es bereit ist:

```js
const ctx = document.getElementById("canvas").getContext("2d");
const img = new Image();

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = "myImage.png";
```

Ob Sie `<img>`-Elemente in Ihrem Markup haben oder sie programmgesteuert in JavaScript erstellen, externe Bilder können [CORS](/de/docs/Web/HTTP/Guides/CORS) Einschränkungen haben. Standardmäßig verfärben extern abgerufene Bilder [das Canvas](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases), was verhindert, dass Ihre Seite Daten über Herkunftsgrenzen hinweg liest. Mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin)-Attribut eines {{HTMLElement("img")}}-Elements (reflektiert durch die [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)-Eigenschaft) können Sie die Erlaubnis anfordern, ein Bild von einer anderen Domain mit CORS zu laden. Wenn die hostende Domain den Zugriff auf das Bild domänenübergreifend erlaubt, kann das Bild in Ihrem Canvas verwendet werden, ohne es zu verfärben.

### Einbetten eines Bildes über eine Daten-URL

Eine weitere Möglichkeit, Bilder einzuschließen, ist über die [Daten-URL](/de/docs/Web/URI/Reference/Schemes/data). Daten-URLs ermöglichen es Ihnen, ein Bild vollständig als Base64-codierten Zeichenfolgen direkt in Ihrem Code zu definieren.

```js
const img = new Image(); // Create new img element
img.src =
  "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
```

Ein Vorteil von Daten-URLs ist, dass das resultierende Bild sofort verfügbar ist, ohne dass eine weitere Runde zum Server gemacht werden muss. Ein weiterer potenzieller Vorteil ist, dass es möglich ist, alle Ihre [CSS](/de/docs/Web/CSS), [JavaScript](/de/docs/Web/JavaScript), [HTML](/de/docs/Web/HTML) und Bilder in einer Datei zu kapseln und damit portabler an andere Orte zu machen.

Einige Nachteile dieser Methode sind, dass Ihr Bild nicht zwischengespeichert wird und dass für größere Bilder die codierte URL ziemlich lang werden kann.

### Verwenden anderer Canvas-Elemente

Genau wie bei normalen Bildern greifen wir auf andere Canvas-Elemente entweder mit der [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)- oder der [`document.getElementById()`](/de/docs/Web/API/Document/getElementById)-Methode zu. Stellen Sie sicher, dass Sie etwas auf das Quell-Canvas gezeichnet haben, bevor Sie es in Ihrem Ziel-Canvas verwenden.

Ein praktischer Anwendungsfall wäre es, ein zweites Canvas-Element als Vorschaubild des anderen größeren Canvas zu verwenden.

### Verwenden von Frames aus einem Video

Sie können auch Frames aus einem Video verwenden, das von einem {{HTMLElement("video")}}-Element abgespielt wird (auch wenn das Video nicht sichtbar ist). Zum Beispiel, wenn Sie ein {{HTMLElement("video")}}-Element mit der ID "myVideo" haben, können Sie dies tun:

```js
const video = document.getElementById("myVideo");
video.currentTime = 10; // Seek to 10 seconds into the video
video.pause(); // Pause the video to freeze the frame
```

Nun befindet sich das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) an der 10-Sekunden-Marke, und Sie können den aktuellen Frame auf Ihr Canvas zeichnen. Um sicherzustellen, dass der Frame verfügbar ist, wenn Sie `drawImage()` aufrufen, verwenden Sie `drawImage()` innerhalb von [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback#drawing_video_frames_on_a_canvas).

## Zeichnen von Bildern

Sobald wir eine Referenz auf unser Quellbildobjekt haben, können wir die `drawImage()`-Methode verwenden, um es auf das Canvas zu rendern. Wie wir später sehen werden, ist die `drawImage()`-Methode überladen und hat mehrere Varianten. In ihrer grundlegendsten Form sieht sie so aus:

- [`drawImage(image, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das durch den `image`-Parameter angegebene Bild an den Koordinaten (`x`, `y`).

> [!NOTE]
> SVG-Bilder müssen eine Breite und Höhe im Wurzelelement \<svg> angeben.

### Beispiel: Ein kleines Liniendiagramm

Im folgenden Beispiel verwenden wir ein externes Bild als Hintergrund für ein kleines Liniendiagramm. Die Verwendung von Hintergründen kann Ihr Skript erheblich verkleinern, da wir den Bedarf an Code zur Generierung des Hintergrunds vermeiden können. In diesem Beispiel verwenden wir nur ein Bild, daher verwende ich den `load`-Ereignishandler des Bildobjekts, um die Zeichenanweisungen auszuführen. Die `drawImage()`-Methode platziert den Hintergrund an den Koordinaten (0, 0), dem oberen linken Eckpunkt des Canvas.

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
  - : Dies fügt die Parameter `width` und `height` hinzu, die die Größe angeben, auf die das Bild skaliert wird, wenn es auf das Canvas gezeichnet wird.

### Beispiel: Ein Bild kacheln

In diesem Beispiel verwenden wir ein Bild als Tapete und wiederholen es mehrmals auf dem Canvas. Dies wird durch Schleifen und Platzieren der skalierten Bilder an verschiedenen Positionen erreicht. Im untenstehenden Code iteriert die erste `for`-Schleife über die Zeilen. Die zweite `for`-Schleife iteriert über die Spalten. Das Bild wird auf ein Drittel seiner Originalgröße skaliert, was 50x38 Pixel entspricht.

> [!NOTE]
> Bilder können unscharf werden, wenn sie vergrößert oder körnig, wenn sie zu stark verkleinert werden. Eine Skalierung sollte möglicherweise vermieden werden, wenn Sie Text enthalten, der lesbar bleiben muss.

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

## Ausschneiden

Die dritte und letzte Variante der `drawImage()`-Methode hat acht Parameter zusätzlich zur Bildquelle. Sie ermöglicht es uns, einen Bereich des Quellbildes auszuschneiden, dann zu skalieren und auf unser Canvas zu zeichnen.

- [`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Gegeben ein `image`, nimmt diese Funktion den Bereich des Quellbildes, der durch das Rechteck definiert wird, dessen oberer linker Punkt (`sx`, `sy`) ist und dessen Breite und Höhe `sWidth` und `sHeight` sind, und zeichnet es auf das Canvas, wobei es es an den Koordinaten (`dx`, `dy`) platziert und auf die Größe `dWidth` und `dHeight` skaliert, unter Beibehaltung seines {{Glossary("aspect_ratio", "Seitenverhältnisses")}}.

Um wirklich zu verstehen, was dies tut, kann es hilfreich sein, dieses Bild anzusehen:

![Die rechteckige Quellbild-Koordinaten sx und sy sind mit einer Breite und Höhe von sWidth und sHeight bzw. in der oberen linken Ecke. Das Quellbild wird auf das Zielcanvas übertragen, wobei die koordinaten der oberen linken Ecke dx und dy sind, mit einer Breite und Höhe von dWidth und dHeight.](canvas_drawimage.jpg)

Die ersten vier Parameter definieren die Position und Größe des Ausschnitts auf dem Quellbild. Die letzten vier Parameter definieren das Rechteck, in das das Bild auf dem Zielcanvas gezeichnet wird.

Ausschneiden kann ein nützliches Werkzeug sein, wenn Sie Kompositionen erstellen möchten. Sie könnten alle Elemente in einer einzigen Bilddatei haben und diese Methode verwenden, um eine vollständige Zeichnung zu komponieren. Wenn Sie beispielsweise ein Diagramm erstellen möchten, könnten Sie ein PNG-Bild haben, das den gesamten erforderlichen Text in einer einzigen Datei enthält und je nach Daten könnten Sie die Skalierung Ihres Diagramms recht einfach ändern. Ein weiterer Vorteil ist, dass Sie nicht jedes Bild einzeln laden müssen, was die Ladegeschwindigkeit verbessern kann.

### Beispiel: Ein Bild einrahmen

In diesem Beispiel verwenden wir dasselbe Nashorn wie im vorherigen Beispiel, aber wir schneiden seinen Kopf aus und setzen ihn in einen Bilderrahmen ein. Das Bild des Bilderrahmens ist ein 24-Bit-PNG, das einen Schlagschatten enthält. Da 24-Bit-PNG-Bilder einen vollwertigen 8-Bit-Alpha-Kanal enthalten, im Gegensatz zu GIF- und 8-Bit-PNG-Bildern, kann es auf jedem Hintergrund platziert werden, ohne sich Gedanken über eine Farbmattierung machen zu müssen.

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

Wir sind dieses Mal anders an das Laden der Bilder herangegangen. Anstatt sie zu laden, indem wir neue [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte erstellen, haben wir sie als {{HTMLElement("img")}}-Tags in unserem HTML-Quelltext einbezogen und die Bilder von dort abgerufen, wenn wir auf das Canvas zeichnen. Die Bilder sind von der Seite versteckt, indem die CSS-Eigenschaft {{cssxref("display")}} auf `none` gesetzt wird.

{{EmbedLiveSample("example_framing_an_image", "", "160")}}

Jedes {{HTMLElement("img")}} ist mit einem ID-Attribut versehen, so dass wir eines für eine `source` und eines für den `frame` haben, wodurch es einfach ist, sie mit [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) auszuwählen. Wir verwenden [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um zu warten, bis alle Bilder geladen sind, bevor wir `drawImage()` aufrufen. `drawImage()` schneidet das Nashorn aus dem ersten Bild aus und skaliert es auf das Canvas. Schließlich zeichnen wir den Bilderrahmen mit einem zweiten `drawImage()`-Aufruf.

## Kunstgalerie-Beispiel

Im letzten Beispiel dieses Kapitels bauen wir eine kleine Kunstgalerie. Die Galerie besteht aus einem Tisch, der mehrere Bilder enthält. Wenn die Seite geladen wird, wird für jedes Bild ein {{HTMLElement("canvas")}}-Element eingefügt und ein Rahmen darum gezeichnet.

In diesem Fall hat jedes Bild eine feste Breite und Höhe, ebenso wie der Rahmen, der darum gezeichnet wird. Sie könnten das Skript so erweitern, dass es die Breite und Höhe des Bildes verwendet, um den Rahmen perfekt darum zu passen.

Im Code unten verwenden wir [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um zu warten, bis alle Bilder geladen sind, bevor wir irgendwelche Bilder auf das Canvas zeichnen. Wir durchlaufen den [`document.images`](/de/docs/Web/API/Document/images)-Container und fügen für jedes Bild neue Canvas-Elemente hinzu. Eine weitere zu beachtende Sache ist die Verwendung der Methode [`Node.insertBefore`](/de/docs/Web/API/Node/insertBefore). `insertBefore()` ist eine Methode des übergeordneten Knotens (einer Tabellenzelle) des Elements (das Bild), vor dem wir unseren neuen Knoten (das Canvas-Element) einfügen möchten.

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

Und hier ist etwas CSS, das alles schön aussehen lässt:

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

Zusammengefügt wird alles durch das JavaScript, um unsere gerahmten Bilder zu zeichnen:

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

## Kontrolle des Skalierungsverhaltens von Bildern

Wie bereits erwähnt, kann das Skalieren von Bildern zu unscharfen oder blockigen Artefakten aufgrund des Skalierungsprozesses führen. Sie können die Verwendung von Bildglättungsalgorithmen beim Skalieren von Bildern in Ihrem Kontext über die [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)-Eigenschaft des Zeichenkontexts steuern. Standardmäßig ist dies `true`, was bedeutet, dass Bilder beim Skalieren geglättet werden.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations")}}
