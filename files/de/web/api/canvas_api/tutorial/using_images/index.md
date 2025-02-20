---
title: Verwendung von Bildern
slug: Web/API/Canvas_API/Tutorial/Using_images
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations" )}}

Bisher haben wir unsere eigenen [Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) erstellt und [Stile angewendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors). Eine der spannenderen Funktionen von {{HTMLElement("canvas")}} ist die Fähigkeit, Bilder zu verwenden. Diese können verwendet werden, um dynamische Fotokompositionen zu erstellen oder als Hintergründe für Diagramme, für Sprites in Spielen und so weiter. Externe Bilder können in jedem vom Browser unterstützten Format wie PNG, GIF oder JPEG verwendet werden. Sie können sogar das von anderen Canvas-Elementen auf derselben Seite erzeugte Bild als Quelle verwenden!

Das Importieren von Bildern in ein Canvas ist im Wesentlichen ein zweistufiger Prozess:

1. Erhalten Sie einen Verweis auf ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt oder auf ein anderes Canvas-Element als Quelle. Es ist auch möglich, Bilder durch Angabe einer URL zu verwenden.
2. Zeichnen Sie das Bild mit der Funktion `drawImage()` auf das Canvas.

Lassen Sie uns einen Blick darauf werfen, wie das geht.

## Bilder zum Zeichnen erhalten

Die Canvas-API kann jede der folgenden Datentypen als Bildquelle verwenden:

- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
  - : Diese Bilder werden mit dem Konstruktor `Image()` erstellt, ebenso wie jedes beliebige {{HTMLElement("img")}}-Element.
- [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)
  - : Diese Bilder werden mithilfe des {{SVGElement("image")}}-Elements eingebettet.
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
  - : Die Verwendung eines HTML-{{HTMLElement("video")}}-Elements als Bildquelle erfasst den aktuellen Frame aus dem Video und verwendet ihn als Bild.
- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
  - : Sie können ein anderes {{HTMLElement("canvas")}}-Element als Bildquelle verwenden.
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
  - : Ein Bitmap-Bild, eventuell beschnitten. Diese Art wird verwendet, um einen Teil eines Bildes, einen _Sprite_, aus einem größeren Bild zu extrahieren.
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
  - : Eine besondere Art von `<canvas>`, die nicht angezeigt wird und ohne Anzeige vorbereitet wird. Die Verwendung einer solchen Bildquelle ermöglicht es, darauf umzuschalten, ohne dass die Komposition des Inhalts für den Benutzer sichtbar ist.
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - : Ein Bild, das einen einzelnen Frame eines Videos darstellt.

Es gibt verschiedene Möglichkeiten, Bilder zur Verwendung auf einem Canvas zu erhalten.

### Verwenden von Bildern von derselben Seite

Wir können einen Verweis auf Bilder auf derselben Seite wie das Canvas erhalten, indem wir eine der folgenden Methoden verwenden:

- Die [`document.images`](/de/docs/Web/API/Document/images)-Sammlung
- Die Methode [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)
- Wenn Sie die ID des spezifischen Bildes kennen, das Sie verwenden möchten, können Sie [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwenden, um dieses spezifische Bild abzurufen

### Verwenden von Bildern von anderen Domains

Durch die Verwendung des [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin)-Attributes eines {{HTMLElement("img")}}-Elements (widerspiegelt durch die [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)-Eigenschaft) können Sie die Erlaubnis anfordern, ein Bild von einer anderen Domain zu laden, um es in Ihrem Aufruf von `drawImage()` zu verwenden. Wenn die Host-Domain den domainübergreifenden Zugriff auf das Bild erlaubt, kann das Bild in Ihrem Canvas verwendet werden, ohne es zu verunreinigen. Andernfalls wird das Canvas durch die Verwendung des Bildes [verunreinigt](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases).

### Verwenden anderer Canvas-Elemente

Genau wie bei normalen Bildern greifen wir auf andere Canvas-Elemente über die Methoden [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName) oder [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) zu. Stellen Sie sicher, dass Sie etwas auf das Quell-Canvas gezeichnet haben, bevor Sie es in Ihrem Ziel-Canvas verwenden.

Eine der praktischeren Verwendungen davon wäre, ein zweites Canvas-Element als Miniaturansicht des anderen größeren Canvas zu verwenden.

### Bilder von Grund auf neu erstellen

Eine weitere Möglichkeit besteht darin, neue [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte in unserem Skript zu erstellen. Dafür steht uns der bequeme Konstruktor `Image()` zur Verfügung:

```js
const img = new Image(); // Create new img element
img.src = "myImage.png"; // Set source path
```

Wenn dieses Skript ausgeführt wird, beginnt das Laden des Bildes, aber wenn Sie versuchen, `drawImage()` aufzurufen, bevor das Bild vollständig geladen ist, passiert nichts. Ältere Browser können sogar eine Ausnahme auslösen, daher müssen Sie sicherstellen, dass das [Ladeereignis](/de/docs/Web/API/HTMLElement/load_event) verwendet wird, um das Bild nicht auf das Canvas zu zeichnen, bevor es bereit ist:

```js
const ctx = document.getElementById("canvas").getContext("2d");
const img = new Image();

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = "myImage.png";
```

Wenn Sie ein externes Bild verwenden, kann dies ein guter Ansatz sein, aber sobald Sie viele Bilder oder [Lazy-Load-Ressourcen](/de/docs/Web/Performance/Lazy_loading) verwenden möchten, müssen Sie wahrscheinlich warten, bis alle Dateien verfügbar sind, bevor Sie auf das Canvas zeichnen. Die unten stehenden Beispiele, die sich mit mehreren Bildern beschäftigen, verwenden eine asynchrone Funktion und [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um zu warten, bis alle Bilder geladen sind, bevor `drawImage()` aufgerufen wird:

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

### Einbetten eines Bildes über eine Data-URL

Eine weitere Möglichkeit, Bilder einzubinden, ist die Verwendung der [Data-URL](/de/docs/Web/URI/Reference/Schemes/data). Data-URLs ermöglichen es, ein Bild vollständig als Base64-kodierten Zeichenfolgen direkt in Ihrem Code zu definieren.

```js
const img = new Image(); // Create new img element
img.src =
  "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
```

Ein Vorteil von Data-URLs ist, dass das resultierende Bild sofort und ohne weiteren Serverabruf verfügbar ist. Ein weiterer potenzieller Vorteil ist, dass es auch möglich ist, in einer Datei Ihr gesamtes [CSS](/de/docs/Web/CSS), [JavaScript](/de/docs/Web/JavaScript), [HTML](/de/docs/Web/HTML) und Bilder zu kapseln, was es tragbarer für andere Standorte macht.

Einige Nachteile dieser Methode sind, dass Ihr Bild nicht zwischengespeichert wird und die kodierte URL bei größeren Bildern ziemlich lang werden kann.

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

Dies gibt das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Objekt für das Video zurück, das, wie zuvor erwähnt, als Bildquelle für das Canvas verwendet werden kann.

## Bilder zeichnen

Sobald wir einen Verweis auf unser Quellbildobjekt haben, können wir die Methode `drawImage()` verwenden, um es auf das Canvas zu rendern. Wie wir später sehen werden, ist die Methode `drawImage()` überladen und hat mehrere Varianten. In ihrer grundlegendsten Form sieht sie folgendermaßen aus:

- [`drawImage(image, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das durch den Parameter `image` angegebene Bild an den Koordinaten (`x`, `y`).

> [!NOTE]
> SVG-Bilder müssen im root-`<svg>`-Element eine Breite und Höhe angeben.

### Beispiel: Ein kleines Diagramm

Im folgenden Beispiel verwenden wir ein externes Bild als Hintergrund für ein kleines Liniendiagramm. Die Verwendung von Hintergründen kann Ihr Skript erheblich verkleinern, da wir den Bedarf an Code zur Generierung des Hintergrundes vermeiden können. In diesem Beispiel verwenden wir nur ein Bild, daher benutze ich den `load`-Event-Handler des Bildobjekts, um die Zeichnungsanweisungen auszuführen. Die Methode `drawImage()` platziert den Hintergrund an der Koordinate (0, 0), was die obere linke Ecke des Canvas ist.

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

Die zweite Variante der Methode `drawImage()` fügt zwei neue Parameter hinzu und ermöglicht es uns, skalierte Bilder auf das Canvas zu platzieren.

- [`drawImage(image, x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Dies fügt die Parameter `width` und `height` hinzu, die die Größe angeben, auf die das Bild skaliert werden soll, wenn es auf das Canvas gezeichnet wird.

### Beispiel: Kacheln eines Bildes

In diesem Beispiel verwenden wir ein Bild als Tapete und wiederholen es mehrmals auf dem Canvas. Dies wird durch Schleifen und Platzieren der skalierten Bilder an verschiedenen Positionen erreicht. In dem unten stehenden Code iteriert die erste `for`-Schleife über die Zeilen. Die zweite `for`-Schleife iteriert über die Spalten. Das Bild wird auf ein Drittel seiner ursprünglichen Größe skaliert, was 50x38 Pixel entspricht.

> [!NOTE]
> Bilder können verschwommen werden, wenn sie hochskaliert oder körnig, wenn sie zu stark herunterskaliert werden. Skalierung sollte wahrscheinlich vermieden werden, wenn Text enthalten ist, der lesbar bleiben muss.

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

Die dritte und letzte Variante der `drawImage()`-Methode hat zusätzlich zu der Bildquelle acht Parameter. Sie ermöglicht es uns, einen Abschnitt des Quellbildes auszuschneiden, dann zu skalieren und auf unser Canvas zu zeichnen.

- [`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Bei einem gegebenen `image` nimmt diese Funktion den Bereich des Quellbildes, der durch das Rechteck angegeben ist, dessen obere linke Ecke sich bei (`sx`, `sy`) befindet und dessen Breite und Höhe durch `sWidth` und `sHeight` angegeben sind, und zeichnet es in das Canvas, indem es es an den Koordinaten (`dx`, `dy`) platziert und auf die durch `dWidth` und `dHeight` angegebene Größe skaliert, während das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten wird.

Um wirklich zu verstehen, was dies tut, könnte es hilfreich sein, dieses Bild zu betrachten:

![Die rechteckigen Quellbildkoordinaten oben links sind sx und sy mit einer Breite und Höhe von sWidth und sHeight. Das Quellbild wird auf das Ziel-Canvas übertragen, wo die obere linke Ecke die Koordinaten dx und dy hat, mit einer Breite und Höhe von dWidth und dHeight.](canvas_drawimage.jpg)

Die ersten vier Parameter definieren die Position und Größe des Ausschnitts im Quellbild. Die letzten vier Parameter definieren das Rechteck, in das das Bild auf dem Ziel-Canvas gezeichnet wird.

Das Zuschneiden kann ein nützliches Werkzeug sein, wenn Sie Kompositionen erstellen möchten. Sie könnten alle Elemente in einer einzigen Bilddatei haben und diese Methode verwenden, um eine vollständige Zeichnung zu erstellen. Zum Beispiel, wenn Sie ein Diagramm erstellen möchten, könnten Sie eine PNG-Bilddatei mit allen notwendigen Texten in einer einzigen Datei verwenden und je nach Ihren Daten die Skalierung Ihres Diagramms relativ einfach ändern. Ein weiterer Vorteil ist, dass Sie nicht jedes Bild einzeln laden müssen, was die Ladeleistung verbessern kann.

### Beispiel: Einrahmen eines Bildes

In diesem Beispiel verwenden wir dasselbe Nashorn wie im vorherigen Beispiel, schneiden aber seinen Kopf aus und komponieren ihn in einen Bilderrahmen. Das Bild des Rahmens ist ein 24-Bit-PNG, das einen Schlagschatten enthält. Da 24-Bit-PNG-Bilder einen vollständigen 8-Bit-Alpha-Kanal enthalten, im Gegensatz zu GIF- und 8-Bit-PNG-Bildern, kann es auf jeden Hintergrund gestellt werden, ohne sich um eine Mattfarbe kümmern zu müssen.

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

Wir haben diesmal einen anderen Ansatz zum Laden der Bilder verwendet. Statt sie durch Erstellen neuer [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte zu laden, haben wir sie als {{HTMLElement("img")}}-Tags in unseren HTML-Quellcode eingebettet und die Bilder von diesen beim Zeichnen auf das Canvas abgerufen. Die Bilder sind von der Seite durch Setzen der CSS-Eigenschaft {{cssxref("display")}} auf `none` für diese Bilder ausgeblendet.

{{EmbedLiveSample("example_framing_an_image", "", "160")}}

Jedes {{HTMLElement("img")}} erhält ein ID-Attribut, sodass wir eines für eine `source` und eines für den `frame` haben, was sie leicht abrufbar mit [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) macht. Wir verwenden [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um zu warten, bis alle Bilder geladen sind, bevor `drawImage()` aufgerufen wird. `drawImage()` schneidet das Nashorn aus dem ersten Bild aus und skaliert es auf das Canvas. Schließlich zeichnen wir den Bilderrahmen mit einem zweiten `drawImage()`-Aufruf.

## Kunstgalerie-Beispiel

Im letzten Beispiel dieses Kapitels erstellen wir eine kleine Kunstgalerie. Die Galerie besteht aus einer Tabelle, die mehrere Bilder enthält. Wenn die Seite geladen wird, wird für jedes Bild ein {{HTMLElement("canvas")}}-Element eingefügt und ein Rahmen darum gezeichnet.

In diesem Fall hat jedes Bild eine feste Breite und Höhe, ebenso wie der Rahmen, der darum gezeichnet wird. Sie könnten das Skript verbessern, sodass es die Breite und Höhe des Bildes verwendet, um den Rahmen perfekt darum anzupassen.

In dem unten stehenden Code verwenden wir [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um auf das Laden aller Bilder zu warten, bevor irgendwelche Bilder auf das Canvas gezeichnet werden. Wir durchlaufen den Container [`document.images`](/de/docs/Web/API/Document/images) und fügen für jedes ein neues Canvas-Element hinzu. Eine weitere Sache, die zu beachten ist, ist die Verwendung der Methode [`Node.insertBefore`](/de/docs/Web/API/Node/insertBefore). `insertBefore()` ist eine Methode des Elternknotens (eine Tabellenzelle) des Elements (das Bild), vor dem wir unseren neuen Knoten (das Canvas-Element) einfügen möchten.

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

Alles zusammengefasst ist das JavaScript, um unsere umrahmten Bilder zu zeichnen:

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

Wie bereits erwähnt, kann das Skalieren von Bildern zu verschwommenen oder blockigen Artefakten führen, die durch den Skalierungsprozess verursacht werden. Sie können die Eigenschaft [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) des Zeichenkontextes verwenden, um die Verwendung von Bildglättungsalgorithmen beim Skalieren von Bildern innerhalb Ihres Kontextes zu steuern. Standardmäßig ist diese Eigenschaft `true`, was bedeutet, dass Bilder beim Skalieren geglättet werden.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations")}}
