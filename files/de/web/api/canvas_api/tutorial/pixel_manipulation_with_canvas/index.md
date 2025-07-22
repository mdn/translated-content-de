---
title: Pixel-Manipulation mit Canvas
slug: Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
l10n:
  sourceCommit: 4ac1847478e12a7254bfb178407b9623353a1d57
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Optimizing_canvas")}}

Bis jetzt haben wir uns die tatsächlichen Pixel unseres Canvas nicht angesehen. Mit dem `ImageData`-Objekt können Sie direkt ein Datenarray lesen und schreiben, um Pixeldaten zu manipulieren. Wir werden auch darauf eingehen, wie die Bildglättung (Anti-Aliasing) gesteuert werden kann und wie Sie Bilder von Ihrem Canvas speichern können.

## Das ImageData-Objekt

Das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt repräsentiert die zugrunde liegenden Pixeldaten eines Bereichs eines Canvas-Objekts. Es enthält die folgenden schreibgeschützten Attribute:

- `width`
  - : Die Breite des Bildes in Pixeln.
- `height`
  - : Die Höhe des Bildes in Pixeln.
- `data`
  - : Ein {{jsxref("Uint8ClampedArray")}}, das ein eindimensionales Array repräsentiert, das die Daten in der Reihenfolge RGBA enthält, mit ganzzahligen Werten zwischen `0` und `255` (inklusive).

Die `data`-Eigenschaft gibt ein {{jsxref("Uint8ClampedArray")}} zurück, auf das zugegriffen werden kann, um die Rohpixeldaten zu betrachten. Jedes Pixel wird durch vier Ein-Byte-Werte repräsentiert (Rot, Grün, Blau und Alpha, in dieser Reihenfolge; das heißt, im "RGBA"-Format). Jede Farbkomponente wird durch eine Ganzzahl zwischen 0 und 255 dargestellt. Jeder Komponente wird innerhalb des Arrays ein aufeinanderfolgender Index zugewiesen, wobei die Rotkomponente des obersten linken Pixels am Index 0 im Array liegt. Die Pixel bewegen sich dann von links nach rechts und dann nach unten im gesamten Array fort.

Das {{jsxref("Uint8ClampedArray")}} enthält `height` × `width` × 4 Byte Daten, mit Indexwerten, die von 0 bis (`height` × `width` × 4) - 1 reichen.

Um zum Beispiel den Wert der blauen Komponente vom Pixel in Spalte 200, Zeile 50 im Bild zu lesen, würden Sie folgendes machen:

```js
const blueComponent = imageData.data[50 * (imageData.width * 4) + 200 * 4 + 2];
```

Wenn Sie ein Satz von Koordinaten (X und Y) gegeben bekommen, könnten Sie so etwas wie das hier machen:

```js
const xCoord = 50;
const yCoord = 100;
const canvasWidth = 1024;

const getColorIndicesForCoord = (x, y, width) => {
  const red = y * (width * 4) + x * 4;
  return [red, red + 1, red + 2, red + 3];
};

const colorIndices = getColorIndicesForCoord(xCoord, yCoord, canvasWidth);

const [redIndex, greenIndex, blueIndex, alphaIndex] = colorIndices;
```

Sie können auch die Größe des Pixelarrays in Bytes ermitteln, indem Sie das `Uint8ClampedArray.length`-Attribut lesen:

```js
const numBytes = imageData.data.length;
```

## Erstellen eines ImageData-Objekts

Um ein neues, leeres `ImageData`-Objekt zu erstellen, sollten Sie die Methode [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData) verwenden. Es gibt zwei Versionen der `createImageData()`-Methode:

```js
const myImageData = ctx.createImageData(width, height);
```

Dies erstellt ein neues `ImageData`-Objekt mit den angegebenen Abmessungen. Alle Pixel sind auf transparentes Schwarz voreingestellt (alle Nullen, d.h. rgb(0 0 0 / 0%)).

Sie können auch ein neues `ImageData`-Objekt mit den gleichen Abmessungen wie das durch `anotherImageData` angegebene Objekt erstellen. Die Pixel des neuen Objekts sind alle auf transparentes Schwarz voreingestellt. **Dies kopiert nicht die Bilddaten!**

```js
const myImageData = ctx.createImageData(anotherImageData);
```

## Abrufen der Pixeldaten für einen Kontext

Um ein `ImageData`-Objekt zu erhalten, das eine Kopie der Pixeldaten für einen Canvas-Kontext enthält, können Sie die Methode `getImageData()` verwenden:

```js
const myImageData = ctx.getImageData(left, top, width, height);
```

Diese Methode gibt ein `ImageData`-Objekt zurück, das die Pixeldaten für den Bereich des Canvas repräsentiert, dessen Ecken durch die Punkte (`left`, `top`), (`left+width`, `top`), (`left`, `top+height`) und (`left+width`, `top+height`) dargestellt werden. Die Koordinaten werden in Einheiten des Canvas-Koordinatenraums angegeben.

> [!NOTE]
> Alle außerhalb des Canvas gelegenen Pixel werden im resultierenden `ImageData`-Objekt als transparentes Schwarz zurückgegeben.

Diese Methode wird auch im Artikel [Manipulating video using canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas) demonstriert.

## Erstellen eines Farbwählers

In diesem Beispiel verwenden wir die Methode [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData), um die Farbe unter dem Mauszeiger anzuzeigen.
Hierfür benötigen wir die aktuelle Position der Maus und suchen dann die Pixeldaten an dieser Position im Pixelarray, das [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) bereitstellt.
Schließlich verwenden wir die Arraydaten, um eine Hintergrundfarbe und einen Text im `<div>` festzulegen, um die Farbe anzuzeigen.
Ein Klick auf das Bild führt die gleiche Operation aus, verwendet jedoch die ausgewählte Farbe.

```html
<table>
  <thead>
    <tr>
      <th>Source</th>
      <th>Hovered color</th>
      <th>Selected color</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <canvas id="canvas" width="300" height="227"></canvas>
      </td>
      <td class="color-cell" id="hovered-color"></td>
      <td class="color-cell" id="selected-color"></td>
    </tr>
  </tbody>
</table>
```

```js
const img = new Image();
img.crossOrigin = "anonymous";
img.src = "/shared-assets/images/examples/rhino.jpg";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
  img.style.display = "none";
});
const hoveredColor = document.getElementById("hovered-color");
const selectedColor = document.getElementById("selected-color");

const pick = (event, destination) => {
  const bounding = canvas.getBoundingClientRect();
  const x = event.clientX - bounding.left;
  const y = event.clientY - bounding.top;
  const pixel = ctx.getImageData(x, y, 1, 1);
  const data = pixel.data;

  const rgbColor = `rgb(${data[0]} ${data[1]} ${data[2]} / ${data[3] / 255})`;
  destination.style.background = rgbColor;
  destination.textContent = rgbColor;

  return rgbColor;
};

canvas.addEventListener("mousemove", (event) => pick(event, hoveredColor));
canvas.addEventListener("click", (event) => pick(event, selectedColor));
```

```css hidden
body {
  font-family: sans-serif;
}
.color-cell {
  color: white;
}
th {
  width: 30%;
}
td {
  font-family: monospace;
  font-weight: bold;
  padding-left: 1rem;
}
```

Bewegen Sie Ihren Mauszeiger über das Bild, um das Ergebnis in der Spalte "Hovered color" zu sehen.
Klicken Sie irgendwo auf das Bild, um das Ergebnis in der Spalte "Selected color" zu sehen.

{{embedlivesample("creating_a_color_picker", , 300)}}

## Malen von Pixeldaten in einen Kontext

Sie können die Methode [putImageData()](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) verwenden, um Pixeldaten in einen Kontext zu malen:

```js
ctx.putImageData(myImageData, dx, dy);
```

Die Parameter `dx` und `dy` geben die Gerätekoordinaten innerhalb des Kontexts an, an denen die obere linke Ecke der zu zeichnenden Pixeldaten gemalt werden soll.

Um beispielsweise das gesamte Bild, das durch `myImageData` repräsentiert wird, auf die obere linke Ecke des Kontexts zu malen, können Sie Folgendes tun:

```js
ctx.putImageData(myImageData, 0, 0);
```

## Graustufen und Farben umkehren

In diesem Beispiel durchlaufen wir alle Pixel, um ihre Werte zu ändern, dann setzen wir das modifizierte Pixelarray mit [putImageData()](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) wieder auf das Canvas.
Die `invert`-Funktion subtrahiert jede Farbe vom Maximalwert `255`.
Die `grayscale`-Funktion verwendet den Durchschnitt von Rot, Grün und Blau. Sie können auch einen gewichteten Durchschnitt verwenden, der durch die Formel `x = 0.299r + 0.587g + 0.114b` gegeben wird, zum Beispiel.
Weitere Informationen finden Sie auf Wikipedia unter [Grayscale](https://en.wikipedia.org/wiki/Grayscale).

```html
<canvas id="canvas" width="300" height="227"></canvas>
<form>
  <input type="radio" id="original" name="color" value="original" checked />
  <label for="original">Original</label>

  <input type="radio" id="grayscale" name="color" value="grayscale" />
  <label for="grayscale">Grayscale</label>

  <input type="radio" id="inverted" name="color" value="inverted" />
  <label for="inverted">Inverted</label>

  <input type="radio" id="sepia" name="color" value="sepia" />
  <label for="sepia">Sepia</label>
</form>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.crossOrigin = "anonymous";
img.src = "/shared-assets/images/examples/rhino.jpg";
img.onload = () => {
  ctx.drawImage(img, 0, 0);
};

const original = () => {
  ctx.drawImage(img, 0, 0);
};

const invert = () => {
  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i]; // red
    data[i + 1] = 255 - data[i + 1]; // green
    data[i + 2] = 255 - data[i + 2]; // blue
  }
  ctx.putImageData(imageData, 0, 0);
};

const grayscale = () => {
  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg; // red
    data[i + 1] = avg; // green
    data[i + 2] = avg; // blue
  }
  ctx.putImageData(imageData, 0, 0);
};

const sepia = () => {
  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    let r = data[i], // red
      g = data[i + 1], // green
      b = data[i + 2]; // blue

    data[i] = Math.min(Math.round(0.393 * r + 0.769 * g + 0.189 * b), 255);
    data[i + 1] = Math.min(Math.round(0.349 * r + 0.686 * g + 0.168 * b), 255);
    data[i + 2] = Math.min(Math.round(0.272 * r + 0.534 * g + 0.131 * b), 255);
  }
  ctx.putImageData(imageData, 0, 0);
};

const inputs = document.querySelectorAll("[name=color]");
for (const input of inputs) {
  input.addEventListener("change", (evt) => {
    switch (evt.target.value) {
      case "inverted":
        return invert();
      case "grayscale":
        return grayscale();
      case "sepia":
        return sepia();
      default:
        return original();
    }
  });
}
```

Klicken Sie auf verschiedene Optionen, um das Ergebnis in Aktion zu sehen.

{{embedlivesample("grayscaling_and_inverting_colors", , 300)}}

## Zoom und Anti-Aliasing

Mit Hilfe der Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage), einem zweiten Canvas und der Eigenschaft [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) können wir in unser Bild hineinzoomen und die Details sehen. Ein drittes Canvas ohne [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) wird ebenfalls gezeichnet, um einen Vergleich nebeneinander zu ermöglichen.

```html
<table>
  <thead>
    <tr>
      <th>Source</th>
      <th>Smoothing enabled = true</th>
      <th>Smoothing enabled = false</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <canvas id="canvas" width="300" height="227"></canvas>
      </td>
      <td>
        <canvas id="smoothed" width="200" height="200"></canvas>
      </td>
      <td>
        <canvas id="pixelated" width="200" height="200"></canvas>
      </td>
    </tr>
  </tbody>
</table>
```

```css hidden
body {
  font-family: monospace;
}
```

Wir ermitteln die Position der Maus und schneiden ein Bild von 5 Pixeln links und darüber bis 5 Pixeln rechts und darunter aus.
Dann kopieren wir dieses auf ein anderes Canvas und ändern die Größe des Bildes auf die gewünschte.
Im Zoom-Canvas ändern wir die Größe eines 10×10-Pixel-Ausschnitts des Original-Canvas auf 200×200:

```js
const img = new Image();
img.crossOrigin = "anonymous";
img.src = "/shared-assets/images/examples/rhino.jpg";
img.onload = () => {
  draw(img);
};

const draw = (image) => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0);

  const smoothCtx = document.getElementById("smoothed").getContext("2d");
  smoothCtx.imageSmoothingEnabled = true;

  const pixelatedCtx = document.getElementById("pixelated").getContext("2d");
  pixelatedCtx.imageSmoothingEnabled = false;

  const zoom = (ctx, x, y) => {
    ctx.drawImage(
      canvas,
      Math.min(Math.max(0, x - 5), image.width - 10),
      Math.min(Math.max(0, y - 5), image.height - 10),
      10,
      10,
      0,
      0,
      200,
      200,
    );
  };

  canvas.addEventListener("mousemove", (event) => {
    const x = event.layerX;
    const y = event.layerY;
    zoom(smoothCtx, x, y);
    zoom(pixelatedCtx, x, y);
  });
};
```

{{embedlivesample("zooming_and_anti-aliasing", , 300)}}

## Speichern von Bildern

Das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) bietet eine `toDataURL()`-Methode, die nützlich ist, wenn Bilder gespeichert werden. Sie gibt eine [Data-URL](/de/docs/Web/URI/Reference/Schemes/data) zurück, die eine Darstellung des Bildes im durch den Parameter `type` angegebenen Format enthält (Standard ist [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics)). Das zurückgegebene Bild hat eine Auflösung von 96 dpi.

> [!NOTE]
> Beachten Sie, dass, wenn das Canvas Pixel enthält, die von einem anderen {{Glossary("origin", "Ursprung")}} ohne Verwendung von CORS bezogen wurden, das Canvas **verunreinigt** ist und sein Inhalt nicht mehr gelesen und gespeichert werden kann.
> Siehe [Security and tainted canvases](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases).

- [`canvas.toDataURL('image/png')`](/de/docs/Web/API/HTMLCanvasElement/toDataURL)
  - : Standardeinstellung. Erstellt ein PNG-Bild.
- [`canvas.toDataURL('image/jpeg', quality)`](/de/docs/Web/API/HTMLCanvasElement/toDataURL)
  - : Erstellt ein JPG-Bild. Optional können Sie eine Qualität im Bereich von 0 bis 1 angeben, wobei 1 die beste Qualität darstellt und 0 fast nicht erkennbar ist, aber die Dateigröße klein ist.

Sobald Sie eine Data-URL von Ihrem Canvas generiert haben, können Sie sie als Quelle eines beliebigen {{HTMLElement("img")}} verwenden oder in einen Hyperlink mit einem [download-Attribut](/de/docs/Web/HTML/Reference/Elements/a#download) einfügen, um sie beispielsweise auf die Festplatte zu speichern.

Sie können auch ein [`Blob`](/de/docs/Web/API/Blob) aus dem Canvas erstellen.

- [`canvas.toBlob(callback, type, encoderOptions)`](/de/docs/Web/API/HTMLCanvasElement/toBlob)
  - : Erstellt ein `Blob`-Objekt, das das im Canvas enthaltene Bild repräsentiert.

## Siehe auch

- [`ImageData`](/de/docs/Web/API/ImageData)
- [Manipulating video using canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Download Canvas API-Generated Images Using toBlob](https://www.digitalocean.com/community/tutorials/js-canvas-toblob)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Optimizing_canvas")}}
