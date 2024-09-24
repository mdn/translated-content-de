---
title: Verwendung von Bildern
slug: Web/API/Canvas_API/Tutorial/Using_images
l10n:
  sourceCommit: c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations" )}}

Bis jetzt haben wir unsere eigenen [Formen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) erstellt und [Stile angewendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors). Eine der spannendsten Funktionen von {{HTMLElement("canvas")}} ist die Möglichkeit, Bilder zu verwenden. Diese können zur dynamischen Bildkomposition oder als Hintergründe von Grafiken, für Sprites in Spielen und vieles mehr genutzt werden. Externe Bilder können in jedem vom Browser unterstützten Format verwendet werden, wie PNG, GIF oder JPEG. Sie können sogar das von anderen Canvas-Elementen auf derselben Seite erzeugte Bild als Quelle verwenden!

Das Importieren von Bildern in ein Canvas ist im Wesentlichen ein zweistufiger Prozess:

1. Erhalten Sie eine Referenz auf ein {{domxref("HTMLImageElement")}}-Objekt oder auf ein anderes Canvas-Element als Quelle. Es ist auch möglich, Bilder durch Angabe einer URL zu verwenden.
2. Zeichnen Sie das Bild mit der Funktion `drawImage()` auf das Canvas.

Schauen wir uns an, wie das geht.

## Bilder zum Zeichnen beschaffen

Die Canvas-API kann alle der folgenden Datentypen als Bildquelle verwenden:

- {{domxref("HTMLImageElement")}}
  - : Diese sind Bilder, die mit dem Konstruktor `Image()` erstellt wurden, sowie jedes {{HTMLElement("img")}}-Element.
- {{domxref("SVGImageElement")}}
  - : Dies sind eingebettete Bilder, die mit dem {{SVGElement("image")}}-Element eingebettet wurden.
- {{domxref("HTMLVideoElement")}}
  - : Die Verwendung eines HTML-{{HTMLElement("video")}}-Elements als Bildquelle erfasst den aktuellen Frame des Videos und verwendet ihn als Bild.
- {{domxref("HTMLCanvasElement")}}
  - : Sie können ein anderes {{HTMLElement("canvas")}}-Element als Ihre Bildquelle verwenden.
- {{domxref("ImageBitmap")}}
  - : Ein Bitmap-Bild, das möglicherweise zugeschnitten ist. Dieser Typ wird verwendet, um einen Teil eines Bildes, ein Sprite, aus einem größeren Bild zu extrahieren.
- {{domxref("OffscreenCanvas")}}
  - : Eine spezielle Art von `<canvas>`, das nicht angezeigt wird und vorbereitet wird, ohne angezeigt zu werden. Die Verwendung einer solchen Bildquelle ermöglicht es, zu diesem zu wechseln, ohne dass die Komposition des Inhalts für den Benutzer sichtbar wird.
- {{domxref("VideoFrame")}}
  - : Ein Bild, das einen einzigen Frame eines Videos darstellt.

Es gibt mehrere Möglichkeiten, um Bilder für die Verwendung auf einem Canvas zu erhalten.

### Verwendung von Bildern von derselben Seite

Wir können eine Referenz auf Bilder auf derselben Seite wie das Canvas erhalten, indem wir einen der folgenden Wege nutzen:

- Die {{domxref("document.images")}} Sammlung
- Die {{domxref("document.getElementsByTagName()")}} Methode
- Wenn Sie die ID des spezifischen Bildes kennen, das Sie verwenden möchten, können Sie {{domxref("document.getElementById()")}} verwenden, um dieses spezifische Bild abzurufen

### Verwendung von Bildern aus anderen Domains

Durch die Verwendung des [`crossorigin`](/de/docs/Web/HTML/Element/img#crossorigin)-Attributs eines {{HTMLElement("img")}}-Elements (widerspiegelt durch die Eigenschaft {{domxref("HTMLImageElement.crossOrigin")}}) können Sie die Erlaubnis anfordern, ein Bild von einer anderen Domain für Ihre `drawImage()`-Aufruf zu laden. Wenn die Host-Domain den Domain-übergreifenden Zugriff auf das Bild erlaubt, kann das Bild in Ihrem Canvas verwendet werden, ohne es zu verfälschen; andernfalls führt die Verwendung des Bildes dazu, dass das [Canvas verfälscht wird](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases).

### Verwendung anderer Canvas-Elemente

Genau wie bei normalen Bildern greifen wir auf andere Canvas-Elemente zu, indem wir entweder die {{domxref("document.getElementsByTagName()")}} oder die {{domxref("document.getElementById()")}} Methode verwenden. Stellen Sie sicher, dass Sie etwas auf das Quellcanvas gezeichnet haben, bevor Sie es in Ihrem Zielcanvas verwenden.

Eine der praktischeren Anwendungen wäre, ein zweites Canvas-Element als Miniaturansicht des anderen größeren Canvas zu verwenden.

### Erstellen von Bildern von Grund auf

Eine weitere Option ist das Erstellen neuer {{domxref("HTMLImageElement")}} Objekte in unserem Skript. Dazu haben wir den Komfort eines `Image()`-Konstruktors:

```js
const img = new Image(); // Neues img-Element erstellen
img.src = "myImage.png"; // Quellpfad festlegen
```

Wenn dieses Skript ausgeführt wird, beginnt das Bild zu laden, aber wenn Sie versuchen, `drawImage()` aufzurufen, bevor das Bild vollständig geladen ist, wird nichts passieren. Ältere Browser könnten sogar eine Ausnahme werfen, also müssen Sie sicherstellen, dass Sie das [load event](/de/docs/Web/API/HTMLElement/load_event) verwenden, damit Sie das Bild nicht auf das Canvas zeichnen, bevor es fertig ist:

```js
const ctx = document.getElementById("canvas").getContext("2d");
const img = new Image();

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = "myImage.png";
```

Wenn Sie ein externes Bild verwenden, kann dies ein guter Ansatz sein, aber sobald Sie viele Bilder verwenden oder [Ressourcen faul laden](/de/docs/Web/Performance/Lazy_loading) möchten, müssen Sie wahrscheinlich warten, bis alle Dateien verfügbar sind, bevor Sie auf das Canvas zeichnen. Die untenstehenden Beispiele, die sich mit mehreren Bildern befassen, verwenden eine asynchrone Funktion und [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen sind, bevor `drawImage()` aufgerufen wird:

```js
async function draw() {
  // Auf das Laden aller Bilder warten:
  await Promise.all(
    Array.from(document.images).map(
      (image) =>
        new Promise((resolve) => image.addEventListener("load", resolve)),
    ),
  );

  const ctx = document.getElementById("canvas").getContext("2d");
  // wie gewohnt drawImage() aufrufen
}

draw();
```

### Einbetten eines Bildes über data: URL

Eine andere mögliche Möglichkeit, Bilder einzubinden, ist über die [data: URL](/de/docs/Web/URI/Schemes/data). Data-URLs ermöglichen es Ihnen, ein Bild als Base64-kodierten Zeichenfolgen direkt in Ihrem Code vollständig zu definieren.

```js
const img = new Image(); // Neues img-Element erstellen
img.src =
  "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
```

Ein Vorteil von Data-URLs ist, dass das resultierende Bild sofort verfügbar ist, ohne eine weitere Rückrunde zum Server. Ein weiterer potenzieller Vorteil ist, dass es auch möglich ist, alle Ihre [CSS](/de/docs/Web/CSS), [JavaScript](/de/docs/Web/JavaScript), [HTML](/de/docs/Web/HTML) und Bilder in einer Datei zu kapseln, was es tragbarer für andere Orte macht.

Einige Nachteile dieser Methode sind, dass Ihr Bild nicht zwischengespeichert wird und für größere Bilder die kodierte URL ziemlich lang werden kann.

### Verwendung von Frames aus einem Video

Sie können auch Frames aus einem Video verwenden, das von einem {{HTMLElement("video")}}-Element präsentiert wird (selbst wenn das Video nicht sichtbar ist). Wenn Sie beispielsweise ein {{HTMLElement("video")}}-Element mit der ID "myVideo" haben, können Sie Folgendes tun:

```js
function getMyVideo() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    return document.getElementById("myVideo");
  }
}
```

Dies gibt das {{domxref("HTMLVideoElement")}}-Objekt für das Video zurück, das, wie zuvor behandelt, als Bildquelle für das Canvas verwendet werden kann.

## Bilder zeichnen

Sobald wir eine Referenz auf unser Quellbildobjekt haben, können wir die `drawImage()`-Methode verwenden, um es auf das Canvas zu rendern. Wie wir später sehen werden, ist die `drawImage()`-Methode überladen und hat mehrere Varianten. In ihrer einfachsten Form sieht sie so aus:

- {{domxref("CanvasRenderingContext2D.drawImage", "drawImage(image, x, y)")}}
  - : Zeichnet das durch den Parameter `image` angegebene Bild an den Koordinaten (`x`, `y`).

> [!NOTE]
> SVG-Bilder müssen eine Breite und Höhe im Wurzel-Element \<svg> angeben.

### Beispiel: Ein kleines Liniendiagramm

Im folgenden Beispiel verwenden wir ein externes Bild als Hintergrund für ein kleines Liniendiagramm. Die Verwendung von Hintergründen kann Ihr Skript erheblich verkleinern, da wir den Code zur Erstellung des Hintergrunds vermeiden können. In diesem Beispiel verwenden wir nur ein Bild, daher verwende ich den `load`-Ereignishandler des Bildobjekts, um die Zeichenausdrücke auszuführen. Die `drawImage()`-Methode platziert den Hintergrund an den Koordinaten (0, 0), was die obere linke Ecke des Canvas ist.

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

Die zweite Variante der `drawImage()`-Methode fügt zwei neue Parameter hinzu und lässt uns skalierte Bilder auf dem Canvas platzieren.

- {{domxref("CanvasRenderingContext2D.drawImage", "drawImage(image, x, y, width, height)")}}
  - : Dies fügt die `width`- und `height`-Parameter hinzu, die die Größe angeben, auf die das Bild skaliert werden soll, wenn es auf das Canvas gezeichnet wird.

### Beispiel: Kacheln eines Bildes

In diesem Beispiel verwenden wir ein Bild als Tapete und wiederholen es mehrmals auf dem Canvas. Dies wird durch Schleifen und Platzieren der skalierten Bilder an verschiedenen Positionen erreicht. Im untenstehenden Code iteriert die erste `for`-Schleife über die Zeilen. Die zweite `for`-Schleife iteriert über die Spalten. Das Bild wird auf ein Drittel seiner Originalgröße skaliert, was 50x38 Pixel entspricht.

> [!NOTE]
> Bilder können unscharf werden, wenn sie nach oben skaliert oder körnig werden, wenn sie zu stark nach unten skaliert werden. Skalierung sollte wahrscheinlich vermieden werden, wenn Ihr Bild Text enthält, der lesbar bleiben muss.

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

## Slicing

Die dritte und letzte Variante der `drawImage()`-Methode hat acht Parameter zusätzlich zur Bildquelle. Sie ermöglicht es uns, einen Abschnitt des Quellbildes auszuschneiden, dann zu skalieren und auf unserem Canvas zu zeichnen.

- {{domxref("CanvasRenderingContext2D.drawImage", "drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)")}}
  - : Angenommen Sie haben ein `image`, nimmt diese Funktion den Bereich des Quellbildes, der durch das Rechteck definiert ist, dessen obere linke Ecke (`sx`, `sy`) ist und dessen Breite und Höhe `sWidth` und `sHeight` ist, und zeichnet ihn auf das Canvas, platziert ihn auf dem Canvas bei (`dx`, `dy`) und skaliert ihn auf die durch `dWidth` und `dHeight` angegebene Größe, wobei das {{glossary("aspect ratio")}} beibehalten wird.

Um wirklich zu verstehen, was das bewirkt, kann es hilfreich sein, dieses Bild anzusehen:

![Die rechteckige Quellbild-Ecke oben links hat die Koordinaten sx und sy mit einer Breite und Höhe von sWidth und sHeight. Das Quellbild wird zum Ziel-Canvas übersetzt, wo die obere linke Ecke die Koordinaten dx und dy hat, mit einer Breite und Höhe von dWidth und dHeight.](canvas_drawimage.jpg)

Die ersten vier Parameter definieren die Position und Größe des Ausschnitts auf dem Quellbild. Die letzten vier Parameter definieren das Rechteck, in das das Bild auf dem Zielcanvas gezeichnet werden soll.

Slicing kann ein nützliches Werkzeug sein, wenn Sie Kompositionen erstellen möchten. Sie könnten alle Elemente in einer einzigen Bilddatei haben und diese Methode verwenden, um eine vollständige Zeichnung zusammenzustellen. Wenn Sie beispielsweise ein Diagramm erstellen möchten, könnten Sie eine PNG-Bilddatei haben, die alle erforderlichen Texte in einer einzelnen Datei enthält und je nach Ihren Daten die Skalierung Ihres Diagramms recht einfach ändern. Ein weiterer Vorteil ist, dass Sie nicht jedes Bild einzeln laden müssen, was die Ladeleistung verbessern kann.

### Beispiel: Einrahmen eines Bildes

In diesem Beispiel verwenden wir das gleiche Nashorn wie im vorherigen Beispiel, schneiden aber seinen Kopf aus und fügen ihn in einen Bilderrahmen ein. Das Bild des Rahmens ist eine 24-Bit-PNG, die einen Schlagschatten enthält. Da 24-Bit-PNG-Bilder einen vollständigen 8-Bit-Alpha-Kanal enthalten, im Gegensatz zu GIF und 8-Bit-PNG-Bildern, kann es auf jeden Hintergrund gestellt werden, ohne sich um eine Matte-Farbe kümmern zu müssen.

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
  // Auf das Laden aller Bilder warten.
  await Promise.all(
    Array.from(document.images).map(
      (image) =>
        new Promise((resolve) => image.addEventListener("load", resolve)),
    ),
  );

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Ausschnitt zeichnen
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

  // Rahmen zeichnen
  ctx.drawImage(document.getElementById("frame"), 0, 0);
}

draw();
```

Wir wählten diesmal einen anderen Ansatz zum Laden der Bilder. Anstatt sie durch Erstellen neuer {{domxref("HTMLImageElement")}}-Objekte zu laden, haben wir sie als {{HTMLElement("img")}}-Tags in unseren HTML-Quelltext aufgenommen und die Bilder aus diesen abgerufen, wenn wir auf das Canvas zeichnen. Die Bilder sind durch Festlegen der CSS-Eigenschaft {{cssxref("display")}} auf `none` für diese Bilder nicht auf der Seite sichtbar.

{{EmbedLiveSample("example_framing_an_image", "", "160")}}

Jedes {{HTMLElement("img")}} hat ein Attribut `ID`, sodass wir eines für eine `source` und eines für den `frame` haben, was es einfach macht, sie mit {{domxref("document.getElementById()")}} auszuwählen. Wir verwenden [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen sind, bevor `drawImage()` aufgerufen wird. `drawImage()` schneidet das Nashorn aus dem ersten Bild aus und skaliert es auf das Canvas. Zuletzt zeichnen wir den Bilderrahmen mit einem zweiten `drawImage()`-Aufruf.

## Kunstgalerie-Beispiel

Im letzten Beispiel dieses Kapitels werden wir eine kleine Kunstgalerie erstellen. Die Galerie besteht aus einem Tisch mit mehreren Bildern. Wenn die Seite geladen wird, wird für jedes Bild ein {{HTMLElement("canvas")}}-Element eingefügt und ein Rahmen darum gezeichnet.

In diesem Fall hat jedes Bild eine feste Breite und Höhe, ebenso wie der Rahmen, der darum gezeichnet wird. Sie könnten das Skript verbessern, sodass es die Breite und Höhe des Bildes verwendet, um den Rahmen perfekt darum passen zu lassen.

Im untenstehenden Code verwenden wir [Promise.all](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), um darauf zu warten, dass alle Bilder geladen sind, bevor irgendwelche Bilder auf das Canvas gezeichnet werden. Wir durchlaufen den {{domxref("document.images")}}-Container und fügen für jedes Bild neue Canvas-Elemente hinzu. Ein weiteres Detail, das zu beachten ist, ist die Verwendung der Methode {{domxref("Node.insertBefore")}}. `insertBefore()` ist eine Methode des übergeordneten Knotens (eine Tabellenzelle) des Elements (des Bildes), vor dem wir unseren neuen Knoten (das Canvas-Element) einfügen möchten.

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

Und hier ist etwas CSS, um alles schön aussehen zu lassen:

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

Alles zusammengefügt ist das JavaScript, um unsere gerahmten Bilder zu zeichnen:

```js
async function draw() {
  // Auf das Laden aller Bilder warten.
  await Promise.all(
    Array.from(document.images).map(
      (image) =>
        new Promise((resolve) => image.addEventListener("load", resolve)),
    ),
  );

  // Durch alle Bilder iterieren.
  for (const image of document.images) {
    // Kein Canvas für das Rahmenbild hinzufügen
    if (image.getAttribute("id") !== "frame") {
      // Canvas-Element erstellen
      const canvas = document.createElement("canvas");
      canvas.setAttribute("width", 132);
      canvas.setAttribute("height", 150);

      // Vor dem Bild einfügen
      image.parentNode.insertBefore(canvas, image);

      const ctx = canvas.getContext("2d");

      // Bild auf das Canvas zeichnen
      ctx.drawImage(image, 15, 20);

      // Rahmen hinzufügen
      ctx.drawImage(document.getElementById("frame"), 0, 0);
    }
  }
}

draw();
```

{{EmbedLiveSample("Art_gallery_example", 725, 400)}}

## Steuerung des Bildskalierungsverhaltens

Wie bereits erwähnt, kann die Skalierung von Bildern zu unscharfen oder körnigen Artefakten führen, die durch den Skalierungsprozess entstehen. Sie können die Verwendung von Bildglättungsalgorithmen beim Skalieren von Bildern in Ihrem Kontext über die Eigenschaft {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}} des Zeichenkontexts steuern. Standardmäßig ist diese auf `true` gesetzt, was bedeutet, dass Bilder beim Skalieren geglättet werden.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations")}}
