---
title: Pixelmanipulation mit dem Canvas
slug: Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Optimizing_canvas")}}

Bis jetzt haben wir uns die eigentlichen Pixel unseres Canvas nicht angesehen. Mit dem `ImageData`-Objekt können Sie direkt ein Datenarray lesen und schreiben, um Pixeldaten zu manipulieren. Wir werden auch untersuchen, wie das Bildglättung (Anti-Aliasing) gesteuert werden kann und wie Bilder von Ihrem Canvas gespeichert werden können.

## Das ImageData-Objekt

Das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt repräsentiert die zugrunde liegenden Pixeldaten eines Bereichs eines Canvas-Objekts. Seine `data`-Eigenschaft gibt ein {{jsxref("Uint8ClampedArray")}} (oder {{jsxref("Float16Array")}}, falls gewünscht) zurück, auf das zugegriffen werden kann, um die rohen Pixeldaten zu betrachten. Jedes Pixel wird durch vier Ein-Byte-Werte repräsentiert (Rot, Grün, Blau und Alpha, in dieser Reihenfolge; das heißt, "RGBA"-Format). Jede Farbkomponente wird durch eine ganze Zahl zwischen 0 und 255 dargestellt. Jede Komponente wird mit einem aufeinanderfolgenden Index innerhalb des Arrays zugewiesen, wobei die rote Komponente des Pixel oben links an Index 0 innerhalb des Arrays steht. Die Pixel verlaufen dann von links nach rechts und dann nach unten im gesamten Array.

Das {{jsxref("Uint8ClampedArray")}} enthält `height` × `width` × 4 Bytes an Daten, mit Indexwerten von 0 bis (`height` × `width` × 4) - 1.

Sie können beispielsweise den Wert der blauen Komponente des Pixels in Spalte 200, Zeile 50 im Bild wie folgt lesen:

```js
const blueComponent = imageData.data[50 * (imageData.width * 4) + 200 * 4 + 2];
```

Wenn eine Reihe von Koordinaten (X und Y) gegeben ist, könnten Sie so etwas tun:

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

Sie können auch die Größe des Pixelarrays in Bytes durch Lesen des `Uint8ClampedArray.length`-Attributs ermitteln:

```js
const numBytes = imageData.data.length;
```

## Ein ImageData-Objekt erstellen

Um ein neues, leeres `ImageData`-Objekt zu erstellen, sollten Sie die [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData)-Methode verwenden. Es gibt zwei Versionen der `createImageData()`-Methode:

```js
const myImageData = ctx.createImageData(width, height);
```

Dies erstellt ein neues `ImageData`-Objekt mit den angegebenen Abmessungen. Alle Pixel sind auf transparent voreingestellt.

Sie können auch ein neues `ImageData`-Objekt mit denselben Abmessungen wie das vom `anotherImageData` angegebene Objekt erstellen. Die Pixel des neuen Objekts sind alle auf transparentes Schwarz voreingestellt. **Dies kopiert die Bilddaten nicht!**

```js
const myImageData = ctx.createImageData(anotherImageData);
```

## Die Pixeldaten für einen Kontext abrufen

Um ein `ImageData`-Objekt zu erhalten, das eine Kopie der Pixeldaten für einen Canvas-Kontext enthält, können Sie die `getImageData()`-Methode verwenden:

```js
const myImageData = ctx.getImageData(left, top, width, height);
```

Diese Methode gibt ein `ImageData`-Objekt zurück, das die Pixeldaten für den Bereich des Canvas darstellt, dessen Ecken durch die Punkte (`left`, `top`), (`left+width`, `top`), (`left`, `top+height`) und (`left+width`, `top+height`) repräsentiert werden. Die Koordinaten sind in Canvas-Koordinatenraumeinheiten angegeben.

> [!NOTE]
> Alle Pixel außerhalb des Canvas werden im resultierenden `ImageData`-Objekt als transparentes Schwarz zurückgegeben.

Diese Methode wird auch im Artikel [Manipulating video using canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas) demonstriert.

## Einen Farbwähler erstellen

In diesem Beispiel verwenden wir die [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData)-Methode, um die Farbe unter dem Mauszeiger anzuzeigen. Dafür benötigen wir die aktuelle Position der Maus, dann schauen wir an dieser Position die Pixeldaten im Pixelarray nach, das [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) bereitstellt. Schließlich verwenden wir die Array-Daten, um eine Hintergrundfarbe und einen Text im `<div>` zu setzen, um die Farbe anzuzeigen. Ein Klick auf das Bild führt dieselbe Operation aus, aber verwendet die ausgewählte Farbe.

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

Bewegen Sie den Mauszeiger irgendwo über das Bild, um das Ergebnis in der Spalte "Hovered color" zu sehen. Klicken Sie irgendwo auf das Bild, um das Ergebnis in der Spalte "Selected color" zu sehen.

{{embedlivesample("creating_a_color_picker", , 300)}}

## Pixeldaten in einen Kontext malen

Sie können die [putImageData()](/de/docs/Web/API/CanvasRenderingContext2D/putImageData)-Methode verwenden, um Pixeldaten in einen Kontext zu malen:

```js
ctx.putImageData(myImageData, dx, dy);
```

Die Parameter `dx` und `dy` geben die Gerätekoordinaten innerhalb des Kontexts an, an denen die obere linke Ecke der Pixeldaten, die Sie zeichnen möchten, gemalt werden soll.

Beispielsweise können Sie das gesamte Bild, das von `myImageData` repräsentiert wird, an die obere linke Ecke des Kontexts malen, indem Sie Folgendes tun:

```js
ctx.putImageData(myImageData, 0, 0);
```

## Graustufen und Invertieren von Farben

In diesem Beispiel durchlaufen wir alle Pixel, um ihre Werte zu ändern, und fügen das modifizierte Pixelarray dann mit [putImageData()](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) wieder auf den Canvas zurück. Die `invert`-Funktion subtrahiert jede Farbe vom Maximalwert, `255`. Die `grayscale`-Funktion verwendet den Durchschnitt von Rot, Grün und Blau. Sie können auch einen gewichteten Durchschnitt verwenden, der durch die Formel `x = 0.299r + 0.587g + 0.114b` gegeben ist, zum Beispiel. Siehe [Graustufen](https://de.wikipedia.org/wiki/Graustufen) auf Wikipedia für weitere Informationen.

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

Klicken Sie verschiedene Optionen an, um das Ergebnis in Aktion zu sehen.

{{embedlivesample("grayscaling_and_inverting_colors", , 300)}}

## Zoom und Anti-Aliasing

Mit Hilfe der [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)-Methode, eines zweiten Canvas und der [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)-Eigenschaft sind wir in der Lage, in unser Bild hinein zu zoomen und die Details zu sehen. Ein drittes Canvas ohne [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) wird ebenfalls gezeichnet, um einen Vergleich nebeneinander zu ermöglichen.

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

Wir erhalten die Position der Maus und schneiden ein Bild von 5 Pixel links und darüber bis zu 5 Pixel rechts und darunter aus. Dann kopieren wir dieses auf ein anderes Canvas und ändern die Größe des Bildes auf die gewünschte Größe. Im Zoom-Canvas vergrößern wir einen 10×10-Pixel-Ausschnitt des ursprünglichen Canvas auf 200×200:

```js
const img = new Image();
img.crossOrigin = "anonymous";
img.src = "/shared-assets/images/examples/rhino.jpg";
img.onload = () => {
  draw(img);
};

function draw(image) {
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
}
```

{{embedlivesample("zooming_and_anti-aliasing", , 300)}}

## Bilder speichern

Das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) stellt eine `toDataURL()`-Methode bereit, die nützlich ist, wenn Sie Bilder speichern. Sie gibt eine [data URL](/de/docs/Web/URI/Reference/Schemes/data) zurück, die eine Darstellung des Bildes im durch den `type`-Parameter angegebenen Format enthält (standardmäßig [PNG](https://de.wikipedia.org/wiki/Portable_Network_Graphics)). Das zurückgegebene Bild hat eine Auflösung von 96 dpi.

> [!NOTE]
> Seien Sie sich bewusst, dass, wenn der Canvas irgendwelche Pixel enthält, die von einem anderen {{Glossary("origin", "Ursprung")}} ohne Verwendung von CORS bezogen wurden, der Canvas **verschmutzt** ist und sein Inhalt nicht mehr gelesen und gespeichert werden kann. Siehe [Sicherheit und verschmutzte Canvase](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases).

- [`canvas.toDataURL('image/png')`](/de/docs/Web/API/HTMLCanvasElement/toDataURL)
  - : Standardeinstellung. Erstellt ein PNG-Bild.
- [`canvas.toDataURL('image/jpeg', quality)`](/de/docs/Web/API/HTMLCanvasElement/toDataURL)
  - : Erstellt ein JPG-Bild. Optional können Sie eine Qualität im Bereich von 0 bis 1 angeben, wobei 1 die beste Qualität ist und 0 fast nicht erkennbar, aber in der Dateigröße klein ist.

Sobald Sie eine Data-URL von Ihrem Canvas generiert haben, können Sie diese als Quelle eines {{HTMLElement("img")}} verwenden oder in einen Hyperlink mit einem [download-Attribut](/de/docs/Web/HTML/Reference/Elements/a#download) einfügen, um es beispielsweise auf die Festplatte zu speichern.

Sie können auch ein [`Blob`](/de/docs/Web/API/Blob) vom Canvas erstellen.

- [`canvas.toBlob(callback, type, encoderOptions)`](/de/docs/Web/API/HTMLCanvasElement/toBlob)
  - : Erstellt ein `Blob`-Objekt, das das im Canvas enthaltene Bild darstellt.

## Siehe auch

- [`ImageData`](/de/docs/Web/API/ImageData)
- [Manipulating video using canvas](/de/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Download Canvas API-Generated Images Using toBlob](https://www.digitalocean.com/community/tutorials/js-canvas-toblob)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Optimizing_canvas")}}
