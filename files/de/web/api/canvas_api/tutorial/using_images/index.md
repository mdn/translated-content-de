---
title: Verwendung von Bildern
slug: Web/API/Canvas_API/Tutorial/Using_images
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations" )}}

Bisher haben wir unsere eigenen [Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) erstellt und [Stile angewendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors). Eine der aufregenderen Funktionen von {{HTMLElement("canvas")}} ist die Möglichkeit, Bilder zu verwenden. Diese können für dynamische Fotokompositionen oder als Hintergründe von Diagrammen genutzt werden, für Sprites in Spielen und so weiter. Externe Bilder können in jedem vom Browser unterstützten Format verwendet werden, wie PNG, GIF oder JPEG. Sie können sogar das Bild verwenden, das von anderen <canvas>-Elementen auf derselben Seite erzeugt wird!

Das Importieren von Bildern in ein Canvas ist im Grunde ein zweistufiger Prozess:

1. Eine Referenz zu einem [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekt oder zu einem anderen Canvas-Element als Quelle erhalten. Es ist auch möglich, Bilder über eine URL zu verwenden.
2. Das Bild mit der Funktion `drawImage()` auf dem Canvas zeichnen.

Schauen wir uns an, wie das funktioniert.

## Wie man Bilder zeichnet

Die Canvas-API kann jede der folgenden Datentypen als Bildquelle verwenden:

- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
  - : Dies sind Bilder, die mit dem Konstruktor `Image()` erstellt wurden, sowie jedes {{HTMLElement("img")}}-Element.
- [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)
  - : Dies sind eingebettete Bilder, die das {{SVGElement("image")}}-Element verwenden.
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
  - : Die Verwendung eines HTML {{HTMLElement("video")}}-Elements als Bildquelle erfasst den aktuellen Frame aus dem Video und verwendet ihn als Bild.
- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
  - : Sie können ein anderes {{HTMLElement("canvas")}}-Element als Bildquelle verwenden.
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
  - : Ein Bitmap-Bild, möglicherweise zugeschnitten. Solche Typen werden verwendet, um einen Teil eines Bildes, einen _Sprite_, aus einem größeren Bild zu extrahieren.
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
  - : Eine spezielle Art von `<canvas>`, die nicht angezeigt wird und ohne Anzeige vorbereitet ist. Die Verwendung einer solchen Bildquelle erlaubt es, darauf umzuschalten, ohne dass die Zusammensetzung des Inhalts für den Benutzer sichtbar ist.
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - : Ein Bild, das einen einzigen Frame eines Videos darstellt.

Es gibt mehrere Möglichkeiten, Bilder für die Verwendung auf einem Canvas zu erhalten.

### Verwendung von Bildern von derselben Seite

Wir können eine Referenz auf Bilder auf derselben Seite wie das Canvas erhalten, indem wir eine der folgenden Methoden verwenden:

- Die [`document.images`](/de/docs/Web/API/Document/images)-Sammlung
- Die [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)-Methode
- Wenn Sie die ID des spezifischen Bildes kennen, das Sie verwenden möchten, können Sie [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwenden, um dieses spezifische Bild abzurufen.

### Verwendung von Bildern von anderen Domains

Durch die Verwendung des [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin)-Attributs eines {{HTMLElement("img")}}-Elements (reflektiert durch die [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)-Eigenschaft) können Sie die Erlaubnis anfordern, ein Bild von einer anderen Domain für Ihre `drawImage()`-Aufrufe zu laden. Wenn die hostende Domain den domainübergreifenden Zugriff auf das Bild erlaubt, kann das Bild auf Ihrem Canvas verwendet werden, ohne es zu beeinträchtigen; andernfalls wird die Verwendung des Bildes das Canvas [beeinträchtigen](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases).

### Verwendung anderer <canvas>-Elemente

Ähnlich wie bei normalen Bildern greifen wir auf andere <canvas>-Elemente entweder über die [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)- oder die [`document.getElementById()`](/de/docs/Web/API/Document/getElementById)-Methode zu. Stellen Sie sicher, dass Sie etwas auf das Quell-Canvas gezeichnet haben, bevor Sie es in Ihrem Ziel-Canvas verwenden.

Eine der praktischeren Anwendungen davon wäre die Verwendung eines zweiten <canvas>-Elements als Thumbnail-Ansicht des anderen, größeren <canvas>.

### Bilder von Grund auf neu erstellen

Eine weitere Möglichkeit besteht darin, neue [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte in unserem Skript zu erstellen. Dazu haben wir den Komfort eines `Image()`-Konstruktors:

```js
const img = new Image(); // Create new img element
img.src = "myImage.png"; // Set source path
```

Wenn dieses Skript ausgeführt wird, beginnt das Bild zu laden, aber wenn Sie versuchen, `drawImage()` aufzurufen, bevor das Bild vollständig geladen ist, wird es nichts tun. Ältere Browser können sogar eine Ausnahme werfen, daher müssen Sie sicherstellen, dass Sie das [Ladeereignis](/de/docs/Web/API/HTMLElement/load_event) verwenden, um das Bild nicht auf das Canvas zu zeichnen, bevor es bereit ist:

```js
const ctx = document.getElementById("canvas").getContext("2d");
const img = new Image();

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = "myImage.png";
```

Wenn Sie ein externes Bild verwenden, kann dies ein guter Ansatz sein, aber sobald Sie viele Bilder verwenden oder [Ressourcen verzögert laden](/de/docs/Web/Performance/Lazy_loading) möchten, müssen Sie wahrscheinlich warten, bis alle Dateien verfügbar sind, bevor Sie auf das Canvas zeichnen. Die nachstehenden Beispiele, die sich mit mehreren Bildern befassen, verwenden eine asynchrone Funktion und [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen sind, bevor `drawImage()` aufgerufen wird:

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

Eine weitere Möglichkeit, Bilder einzubinden, ist über die [data: URL](/de/docs/Web/URI/Schemes/data). Daten-URLs erlauben es Ihnen, ein Bild vollständig als Base64-kodierten Zeichensatz direkt in Ihrem Code zu definieren.

```js
const img = new Image(); // Create new img element
img.src =
  "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
```

Ein Vorteil von Daten-URLs besteht darin, dass das resultierende Bild sofort ohne weiteren Serverzugriff verfügbar ist. Ein weiterer potenzieller Vorteil ist, dass es auch möglich ist, alle Ihre [CSS](/de/docs/Web/CSS), [JavaScript](/de/docs/Web/JavaScript), [HTML](/de/docs/Web/HTML) und Bilder in einer einzigen Datei zu kapseln, was die Portabilität an andere Orte verbessert.

Einige Nachteile dieser Methode sind, dass Ihr Bild nicht zwischengespeichert wird und für größere Bilder die kodierte URL ziemlich lang werden kann.

### Verwendung von Frames aus einem Video

Sie können auch Frames von einem Video verwenden, das von einem {{HTMLElement("video")}}-Element präsentiert wird (auch wenn das Video nicht sichtbar ist). Wenn Sie beispielsweise ein {{HTMLElement("video")}}-Element mit der ID "myVideo" haben, können Sie dies tun:

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

Sobald wir eine Referenz zu unserem Quelle-Bildobjekt haben, können wir die `drawImage()`-Methode verwenden, um es auf das Canvas zu rendern. Wie wir später sehen werden, ist die `drawImage()`-Methode überladen und hat mehrere Varianten. In ihrer grundlegendsten Form sieht sie so aus:

- [`drawImage(image, x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das durch den `image`-Parameter angegebene Bild an den Koordinaten (`x`, `y`).

> [!NOTE]
> SVG-Bilder müssen in der Wurzel \<svg> Element eine Breite und Höhe angeben.

### Beispiel: Ein kleines Liniendiagramm

Im folgenden Beispiel verwenden wir ein externes Bild als Hintergrund für ein kleines Liniendiagramm. Die Verwendung von Hintergründen kann Ihr Skript erheblich kleiner machen, da wir den Bedarf an Code zur Generierung des Hintergrunds vermeiden können. In diesem Beispiel verwenden wir nur ein Bild, daher verwende ich den `load`-Ereignis-Handler des Bildobjekts, um die Zeichenbefehle auszuführen. Die Methode `drawImage()` platziert den Hintergrund an der Koordinate (0, 0), das ist die obere linke Ecke des Canvas.

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

Das resultierende Diagramm sieht folgendermaßen aus:

{{EmbedLiveSample("Example_A_simple_line_graph", "", "160")}}

## Skalierung

Die zweite Variante der `drawImage()`-Methode fügt zwei neue Parameter hinzu und ermöglicht es uns, skalierte Bilder auf dem Canvas zu platzieren.

- [`drawImage(image, x, y, width, height)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Dies fügt die Parameter `width` und `height` hinzu, die die Größe angeben, auf die das Bild beim Zeichnen auf das Canvas skaliert werden soll.

### Beispiel: Eine Wandklebe verwenden

In diesem Beispiel verwenden wir ein Bild als Tapete und wiederholen es mehrmals auf dem Canvas. Dies wird durch Schleifen und Platzieren der skalierten Bilder an verschiedenen Positionen erreicht. Im folgenden Code durchläuft die erste `for`-Schleife die Zeilen. Die zweite `for`-Schleife durchläuft die Spalten. Das Bild wird auf ein Drittel seiner ursprünglichen Größe skaliert, was 50x38 Pixel entspricht.

> [!NOTE]
> Bilder können verschwommen werden, wenn sie zu stark vergrößert oder körnig, wenn sie zu stark verkleinert werden. Skalierung ist wahrscheinlich am besten zu vermeiden, wenn Sie Text darin haben, der lesbar bleiben muss.

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

Das resultierende Canvas sieht folgendermaßen aus:

{{EmbedLiveSample("Example_Tiling_an_image", "", "160")}}

## Zuschneiden

Die dritte und letzte Variante der `drawImage()`-Methode hat acht Parameter neben der Bildquelle. Sie erlaubt es uns, einen Abschnitt des Quellbildes auszuschneiden, ihn dann zu skalieren und auf unser Canvas zu zeichnen.

- [`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Angenommen ein `image`, diese Funktion nimmt den Bereich des Quellbildes, der durch das Rechteck, dessen obere linke Ecke sich an (`sx`, `sy`) befindet und dessen Breite und Höhe `sWidth` und `sHeight` sind, und zeichnet es in das Canvas, platziert es auf dem Canvas bei (`dx`, `dy`) und skaliert es auf die durch `dWidth` und `dHeight` angegebene Größe, wobei das [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) beibehalten wird.

Um wirklich zu verstehen, was dies bewirkt, kann es hilfreich sein, sich dieses Bild anzusehen:

![Die rechteckigen Quellbild-Koordinaten oben links sind sx und sy mit einer Breite und Höhe von sWidth bzw. sHeight. Das Quellbild wird auf das Ziel-Canvas übertragen, wo die oberen linken Koordinaten dx und dy sind, mit einer Breite und Höhe von dWidth bzw. dHeight.](canvas_drawimage.jpg)

Die ersten vier Parameter definieren den Ort und die Größe des Ausschnitts auf dem Quellbild. Die letzten vier Parameter definieren das Rechteck, in das das Bild auf dem Ziel-Canvas gezeichnet wird.

Das Zuschneiden kann ein nützliches Werkzeug sein, wenn Sie Kompositionen erstellen möchten. Sie könnten alle Elemente in einer einzigen Bilddatei haben und diese Methode verwenden, um eine vollständige Zeichnung zusammenzusetzen. Wenn Sie beispielsweise ein Diagramm erstellen möchten, könnten Sie eine PNG-Datei haben, die alle notwendigen Texte in einer Datei enthält, und je nach Ihren Daten können Sie die Skala Ihres Diagramms ziemlich einfach ändern. Ein weiterer Vorteil ist, dass Sie nicht jedes Bild einzeln laden müssen, was die Ladeleistung verbessern kann.

### Beispiel: Ein Bild einrahmen

In diesem Beispiel verwenden wir dasselbe Nashorn wie im vorherigen Beispiel, aber wir schneiden den Kopf aus und setzen ihn in einen Bilderrahmen ein. Das Bild des Rahmens ist ein 24-Bit-PNG, das einen Schlagschatten enthält. Da 24-Bit-PNG-Bilder einen vollständigen 8-Bit-Alpha-Kanal enthalten, im Gegensatz zu GIF- und 8-Bit-PNG-Bildern, kann es auf jeden Hintergrund gesetzt werden, ohne sich um eine Mattfarbe kümmern zu müssen.

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

Diesmal haben wir einen anderen Ansatz zum Laden der Bilder gewählt. Anstatt sie durch Erstellen neuer [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Objekte zu laden, haben wir sie als {{HTMLElement("img")}}-Tags in unserem HTML-Quellcode eingefügt und die Bilder beim Zeichnen auf das Canvas von diesen abgerufen. Die Bilder sind von der Seite versteckt, indem die CSS-Eigenschaft {{cssxref("display")}} für diese Bilder auf `none` gesetzt wird.

{{EmbedLiveSample("example_framing_an_image", "", "160")}}

Jeder {{HTMLElement("img")}} wird mit einem ID-Attribut versehen, so dass wir eines für eine `source` und eines für den `frame` haben, was es einfach macht, sie mit [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) zu auszuwählen. Wir verwenden [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen sind, bevor `drawImage()` aufgerufen wird. `drawImage()` schneidet das Nashorn aus dem ersten Bild aus und skaliert es auf das Canvas. Schließlich zeichnen wir den Bilderrahmen mit einem zweiten `drawImage()`-Aufruf.

## Kunstgalerie-Beispiel

Im letzten Beispiel dieses Kapitels bauen wir eine kleine Kunstgalerie. Die Galerie besteht aus einem Tisch, der mehrere Bilder enthält. Wenn die Seite geladen wird, wird für jedes Bild ein {{HTMLElement("canvas")}}-Element eingefügt und ein Rahmen darum gezeichnet.

In diesem Fall hat jedes Bild eine feste Breite und Höhe, genauso wie der Rahmen, der um sie gezeichnet wird. Sie könnten das Skript so erweitern, dass es die Breite und Höhe des Bildes verwendet, um den Rahmen perfekt darum anzupassen.

Im folgenden Code verwenden wir [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen sind, bevor Bilder auf das Canvas gezeichnet werden. Wir durchlaufen den [`document.images`](/de/docs/Web/API/Document/images)-Container und fügen für jedes Bild neue Canvas-Elemente hinzu. Eine andere zu beachtende Sache ist die Verwendung der [`Node.insertBefore`](/de/docs/Web/API/Node/insertBefore)-Methode. `insertBefore()` ist eine Methode des übergeordneten Knoten (einer Tabellenspalte) des Elements (des Bildes), vor dem wir unser neues Element (das Canvas-Element) einfügen möchten.

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

Und hier ist etwas CSS, um alles gut aussehen zu lassen:

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

Um alles zusammenzubringen, ist hier das JavaScript, um unsere gerahmten Bilder zu zeichnen:

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

Wie bereits erwähnt, kann das Skalieren von Bildern zu unscharfen oder blockigen Artefakten führen. Sie können die Verwendung von Bildglättungsalgorithmen beim Skalieren von Bildern in Ihrem Kontext mit der [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)-Eigenschaft des Zeichenkontextes steuern. Standardmäßig ist dies `true`, was bedeutet, dass Bilder beim Skalieren geglättet werden.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations")}}
