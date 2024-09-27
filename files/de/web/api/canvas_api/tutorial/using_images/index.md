---
title: Bilder verwenden
slug: Web/API/Canvas_API/Tutorial/Using_images
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations" )}}

Bisher haben wir unsere eigenen [Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) erstellt und [Stile angewendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors). Eine der spannenderen Funktionen von {{HTMLElement("canvas")}} ist die Möglichkeit, Bilder zu verwenden. Diese können für dynamische Fotokompositionen oder als Hintergründe für Diagramme verwendet werden, für Sprites in Spielen und so weiter. Externe Bilder können in jedem vom Browser unterstützten Format wie PNG, GIF oder JPEG verwendet werden. Sie können sogar das Bild verwenden, das von anderen Canvas-Elementen auf derselben Seite als Quelle produziert wurde!

Das Importieren von Bildern in ein Canvas ist im Wesentlichen ein zweistufiger Prozess:

1. Erhalten Sie eine Referenz zu einem [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt oder zu einem anderen Canvas-Element als Quelle. Es ist auch möglich, Bilder zu verwenden, indem Sie eine URL angeben.
2. Zeichnen Sie das Bild mit der Funktion `drawImage()` auf das Canvas.

Sehen wir uns an, wie das funktioniert.

## Bilder zum Zeichnen erhalten

Die Canvas-API kann jede der folgenden Datentypen als Bildquelle verwenden:

- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
  - : Diese sind Bilder, die mit dem `Image()`-Konstruktor erstellt wurden, sowie jedes {{HTMLElement("img")}}-Element.
- [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)
  - : Diese Bilder werden mithilfe des {{SVGElement("image")}}-Elements eingebettet.
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
  - : Die Verwendung eines HTML-{{HTMLElement("video")}}-Elements als Bildquelle erfasst den aktuellen Frame aus dem Video und verwendet ihn als Bild.
- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
  - : Sie können ein anderes {{HTMLElement("canvas")}}-Element als Bildquelle verwenden.
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
  - : Ein Bitmap-Bild, eventuell zugeschnitten. Solche Arten werden verwendet, um einen Teil eines Bildes, ein _Sprite_, aus einem größeren Bild zu extrahieren.
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
  - : Eine spezielle Art von `<canvas>`, das nicht angezeigt wird und vorbereitet wird, ohne angezeigt zu werden. Die Verwendung einer solchen Bildquelle ermöglicht es, darauf umzuschalten, ohne dass die Komposition des Inhalts für den Benutzer sichtbar ist.
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - : Ein Bild, das eine einzelne Frame eines Videos darstellt.

Es gibt mehrere Möglichkeiten, Bilder für die Verwendung auf einem Canvas zu erhalten.

### Verwenden von Bildern von derselben Seite

Wir können eine Referenz zu Bildern auf derselben Seite wie das Canvas erhalten, indem wir eine der folgenden Methoden verwenden:

- Die [`document.images`](/de/docs/Web/API/Document/images)-Sammlung
- Die Methode [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)
- Wenn Sie die ID des spezifischen Bildes kennen, das Sie verwenden möchten, können Sie [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwenden, um dieses spezifische Bild abzurufen.

### Verwenden von Bildern von anderen Domains

Mithilfe des [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin)-Attributs eines {{HTMLElement("img")}}-Elements (reflektiert durch die [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)-Eigenschaft) können Sie die Erlaubnis anfordern, ein Bild von einer anderen Domain für die Verwendung in Ihrem Aufruf von `drawImage()` zu laden. Wenn die Hosting-Domain den domänenübergreifenden Zugriff auf das Bild zulässt, kann das Bild in Ihrem Canvas verwendet werden, ohne es zu verschmutzen; andernfalls wird das Verwenden des Bildes das Canvas [verunreinigen](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases).

### Verwenden anderer Canvas-Elemente

Genauso wie bei normalen Bildern greifen wir auf andere Canvas-Elemente mithilfe der Methode [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName) oder [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) zu. Stellen Sie sicher, dass Sie etwas auf das Quell-Canvas gezeichnet haben, bevor Sie es in Ihr Ziel-Canvas verwenden.

Eine der praktischeren Anwendungen wäre, ein zweites Canvas-Element als Thumbnail-Ansicht des anderen größeren Canvas zu verwenden.

### Erstellen von Bildern von Grund auf

Eine weitere Option besteht darin, neue [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte in unserem Skript zu erstellen. Dazu steht Ihnen der praktische `Image()`-Konstruktor zur Verfügung:

```js
const img = new Image(); // Create new img element
img.src = "myImage.png"; // Set source path
```

Wenn dieses Skript ausgeführt wird, beginnt das Bild zu laden, aber wenn Sie versuchen, `drawImage()` aufzurufen, bevor das Bild vollständig geladen ist, wird es nichts tun.
Ältere Browser können sogar eine Ausnahme auslösen, daher müssen Sie sicherstellen, dass Sie das [load event](/de/docs/Web/API/HTMLElement/load_event) verwenden, um sicherzustellen, dass Sie das Bild nicht auf das Canvas zeichnen, bevor es bereit ist:

```js
const ctx = document.getElementById("canvas").getContext("2d");
const img = new Image();

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = "myImage.png";
```

Wenn Sie ein externes Bild verwenden, kann dies ein guter Ansatz sein, aber sobald Sie viele Bilder verwenden oder [Ressourcen lazy-laden](/de/docs/Web/Performance/Lazy_loading) wollen, müssen Sie wahrscheinlich warten, bis alle Dateien verfügbar sind, bevor Sie auf das Canvas zeichnen.
Die untenstehenden Beispiele, die sich mit mehreren Bildern befassen, verwenden eine asynchrone Funktion und [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um zu warten, bis alle Bilder geladen sind, bevor `drawImage()` aufgerufen wird:

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

### Einbetten eines Bildes über Daten-URL

Eine weitere mögliche Methode, Bilder einzuschließen, ist über die [data: URL](/de/docs/Web/URI/Schemes/data). Data-URLs ermöglichen es Ihnen, ein Bild vollständig als Base64-zeichenkodierten String direkt in Ihrem Code zu definieren.

```js
const img = new Image(); // Create new img element
img.src =
  "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
```

Ein Vorteil von Data-URLs ist, dass das resultierende Bild sofort verfügbar ist, ohne eine weitere Anfrage an den Server. Ein weiterer potenzieller Vorteil ist, dass es möglich ist, all Ihre [CSS](/de/docs/Web/CSS), [JavaScript](/de/docs/Web/JavaScript), [HTML](/de/docs/Web/HTML), und Bilder in einer Datei zu kapseln, was es tragbarer für andere Orte macht.

Einige Nachteile dieser Methode sind, dass Ihr Bild nicht zwischengespeichert wird und dass für größere Bilder die codierte URL ziemlich lang werden kann.

### Verwenden von Frames aus einem Video

Sie können auch Frames aus einem von einem {{HTMLElement("video")}}-Element präsentierten Video verwenden (auch wenn das Video nicht sichtbar ist). Zum Beispiel, wenn Sie ein {{HTMLElement("video")}}-Element mit der ID "myVideo" haben, können Sie dies tun:

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

Sobald wir eine Referenz zu unserem Quellbildobjekt haben, können wir die Methode `drawImage()` verwenden, um es auf das Canvas zu rendern. Wie wir später sehen werden, ist die Methode `drawImage()` überladen und hat mehrere Varianten. In ihrer einfachsten Form sieht sie so aus:

- [`drawImage(image, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das durch den `image`-Parameter spezifizierte Bild an den Koordinaten (`x`, `y`).

> [!NOTE]
> SVG-Bilder müssen im root-Element \<svg> eine Breite und Höhe angeben.

### Beispiel: Ein kleines Liniendiagramm

Im folgenden Beispiel verwenden wir ein externes Bild als Hintergrund für ein kleines Liniendiagramm. Die Verwendung von Hintergründen kann Ihr Skript erheblich verkleinern, da wir den Bedarf an Code zur Erstellung des Hintergrunds vermeiden können. In diesem Beispiel verwenden wir nur ein Bild, sodass ich den `load`-Ereignishandler des Bildobjekts verwende, um die Zeichnungsanweisungen auszuführen. Die Methode `drawImage()` platziert den Hintergrund an der Koordinate (0, 0), die die obere linke Ecke des Canvas ist.

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
  - : Dies fügt die Parameter `width` und `height` hinzu, die die Größe angeben, auf die das Bild skaliert werden soll, wenn es auf das Canvas gezeichnet wird.

### Beispiel: Eine Fläche mit einem Bild kacheln

In diesem Beispiel verwenden wir ein Bild als Tapete und wiederholen es mehrmals auf dem Canvas. Dies wird getan, indem wir die skalierten Bilder an verschiedenen Positionen platzieren. Im folgenden Code durchläuft die erste `for`-Schleife die Zeilen. Die zweite `for`-Schleife durchläuft die Spalten. Das Bild wird auf ein Drittel seiner ursprünglichen Größe skaliert, was 50x38 Pixel entspricht.

> [!NOTE]
> Bilder können unscharf werden, wenn sie zu stark vergrößert oder körnig werden, wenn sie zu stark verkleinert werden. Skalierung sollte wahrscheinlich nicht durchgeführt werden, wenn Text enthalten ist, der lesbar bleiben muss.

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

Die dritte und letzte Variante der `drawImage()`-Methode hat acht Parameter zusätzlich zur Bildquelle. Sie ermöglicht es uns, einen Abschnitt des Quellbildes auszuschneiden, dann zu skalieren und auf unserem Canvas zu zeichnen.

- [`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Gegeben ein `image`, nimmt diese Funktion den Bereich des Quellbildes, der durch das Rechteck spezifiziert wird, dessen obere linke Ecke bei (`sx`, `sy`) ist und dessen Breite und Höhe `sWidth` und `sHeight` sind, und zeichnet es in das Canvas, indem es es auf dem Canvas bei (`dx`, `dy`) platziert und es auf die Größe skaliert, die durch `dWidth` und `dHeight` angegeben ist, und dabei das [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) beibehält.

Um wirklich zu verstehen, was dies tut, kann es helfen, sich dieses Bild anzusehen:

![Die rechteckigen Quellbildkoordinaten oben links sind sx und sy mit einer Breite und Höhe von sWidth und sHeight. Das Quellbild wird auf das Ziel-Canvas übertragen, wo die Koordinaten der oberen linken Ecke dx und dy sind, mit einer Breite und Höhe von dWidth und dHeight.](canvas_drawimage.jpg)

Die ersten vier Parameter definieren die Position und Größe der Ausschnittstelle auf dem Quellbild. Die letzten vier Parameter definieren das Rechteck, in das das Bild auf dem Ziel-Canvas gezeichnet wird.

Zuschneiden kann ein nützliches Werkzeug sein, wenn Sie Kompositionen erstellen möchten. Sie könnten alle Elemente in einer einzigen Bilddatei haben und diese Methode verwenden, um eine vollständige Zeichnung zu komponieren. Wenn Sie beispielsweise ein Diagramm erstellen möchten, könnten Sie ein PNG-Bild haben, das den gesamten benötigten Text in einer einzigen Datei enthält, und je nach Ihren Daten die Skalierung Ihres Diagramms relativ einfach ändern. Ein weiterer Vorteil ist, dass Sie nicht jedes Bild einzeln laden müssen, was die Ladeleistung verbessern kann.

### Beispiel: Ein Bild einrahmen

In diesem Beispiel verwenden wir dasselbe Nashorn wie im vorherigen Beispiel, aber wir schneiden seinen Kopf aus und komponieren es in einen Bilderrahmen. Der Bilderrahmen ist ein 24-Bit-PNG, das einen Schlagschatten enthält. Da 24-Bit-PNG-Bilder einen vollständigen 8-Bit-Alpha-Kanal enthalten, im Gegensatz zu GIF und 8-Bit-PNG-Bildern, kann es auf jedem Hintergrund platziert werden, ohne dass man sich um eine Mattenfarbe sorgen muss.

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

Wir haben diesmal einen anderen Ansatz zum Laden der Bilder gewählt. Statt sie durch Erstellen neuer [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte zu laden, haben wir sie als {{HTMLElement("img")}}-Tags in unserer HTML-Quelle eingefügt und die Bilder von diesen abgerufen, als wir sie auf das Canvas gezeichnet haben. Die Bilder werden durch Einstellen der CSS-Eigenschaft {{cssxref("display")}} auf `none` von der Seite ausgeblendet.

{{EmbedLiveSample("example_framing_an_image", "", "160")}}

Jedes {{HTMLElement("img")}} erhält ein ID-Attribut, sodass wir eines für eine `source` und eines für den `frame` haben, was sie einfach macht, sie mithilfe von [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) auszuwählen.
Wir verwenden [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um zu warten, bis alle Bilder geladen sind, bevor wir `drawImage()` aufrufen.
`drawImage()` schneidet das Nashorn aus dem ersten Bild aus und skaliert es auf das Canvas.
Abschließend zeichnen wir den Bilderrahmen mit einem zweiten `drawImage()`-Aufruf.

## Kunstgalerie-Beispiel

Im letzten Beispiel dieses Kapitels erstellen wir eine kleine Kunstgalerie. Die Galerie besteht aus einem Tisch, der mehrere Bilder enthält. Wenn die Seite geladen wird, wird für jedes Bild ein {{HTMLElement("canvas")}}-Element eingefügt und ein Rahmen darum gezeichnet.

In diesem Fall hat jedes Bild eine feste Breite und Höhe, ebenso wie der Rahmen, der darum gezeichnet wird. Sie könnten das Skript so erweitern, dass es die Breite und Höhe des Bildes verwendet, um den Rahmen perfekt anzupassen.

Im folgenden Code verwenden wir [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um zu warten, bis alle Bilder geladen sind, bevor irgendwelche Bilder auf das Canvas gezeichnet werden.
Wir durchlaufen den [`document.images`](/de/docs/Web/API/Document/images)-Container und fügen für jedes Bild neue Canvas-Elemente hinzu. Eine weitere bemerkenswerte Sache ist die Verwendung der Methode [`Node.insertBefore`](/de/docs/Web/API/Node/insertBefore). `insertBefore()` ist eine Methode des Elternelements (eine Tabellenzelle) des Elements (des Bildes), vor dem wir unser neues Element (das Canvas-Element) einfügen möchten.

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

Und hier etwas CSS, um die Dinge schön aussehen zu lassen:

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

Den Abschluss bildet das JavaScript zum Zeichnen unserer eingerahmten Bilder:

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

Wie zuvor erwähnt, kann das Skalieren von Bildern zu unscharfen oder verpixelten Artefakten aufgrund des Skalierungsprozesses führen. Sie können die Verwendung von Bildglättungsalgorithmen steuern, indem Sie die [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)-Eigenschaft des Zeichenkontextes verwenden. Standardmäßig ist dies `true`, was bedeutet, dass Bilder beim Skalieren geglättet werden.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations")}}
