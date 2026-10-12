---
title: "HTMLCanvasElement: Methode toDataURL()"
short-title: toDataURL()
slug: Web/API/HTMLCanvasElement/toDataURL
l10n:
  sourceCommit: 5b85e27155260155bd829fc6d4b98ca2c476b2d1
---

{{APIRef("Canvas API")}}

Die Methode **`HTMLCanvasElement.toDataURL()`** gibt eine [Data-URL](/de/docs/Web/URI/Reference/Schemes/data) zurück, die eine Darstellung des Bildes in dem durch den Parameter `type` angegebenen Format enthält.

Das gewünschte Dateiformat und die Bildqualität können angegeben werden.
Wenn kein Dateiformat angegeben wird oder das angegebene Format nicht unterstützt wird, werden die Daten als `image/png` exportiert.
Wenn der Rückgabewert bei einem anderen angeforderten `type` mit `data:image/png` beginnt, wird dieses Format also nicht unterstützt.

Browser müssen `image/png` unterstützen; viele unterstützen zusätzliche Formate wie `image/jpeg` und `image/webp`.

Die erzeugten Bilddaten haben bei Dateiformaten, die Metadaten zur Auflösung unterstützen, eine Auflösung von 96 dpi.

> [!WARNING]
> `toDataURL()` kodiert das gesamte Bild als Zeichenfolge im Arbeitsspeicher. Bei größeren Bildern kann dies die Leistung beeinträchtigen. Wird die Zeichenfolge [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src) zugewiesen, kann sie sogar die Begrenzung der URL-Länge des Browsers überschreiten. Bevorzugen Sie daher im Allgemeinen [`toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) in Kombination mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static).

## Syntax

```js-nolint
toDataURL()
toDataURL(type)
toDataURL(type, quality)
```

### Parameter

- `type` {{optional_inline}}
  - : Eine Zeichenfolge, die das Bildformat angibt.
    Der Standardwert ist `image/png`; dieses Bildformat wird auch verwendet, wenn das angegebene Format nicht unterstützt wird.
- `quality` {{optional_inline}}
  - : Eine {{jsxref("Number")}} zwischen `0` und `1`, die die Bildqualität beim Erstellen von Bildern in Dateiformaten mit verlustbehafteter Komprimierung angibt (z. B. `image/jpeg` oder `image/webp`).
    Ein User Agent verwendet seinen Standardwert für die Qualität, wenn diese Option nicht angegeben wird oder die Zahl außerhalb des zulässigen Bereichs liegt.

### Rückgabewert

Eine Zeichenfolge mit der angeforderten [Data-URL](/de/docs/Web/URI/Reference/Schemes/data).

Wenn die Höhe oder Breite des Canvas `0` ist oder die [maximale Canvas-Größe](/de/docs/Web/HTML/Reference/Elements/canvas#maximum_canvas_size) überschreitet, wird die Zeichenfolge `"data:,"` zurückgegeben.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Bitmap des Canvas ist nicht „origin-clean“: Zumindest ein Teil ihres Inhalts wurde oder könnte von einer anderen Website geladen worden sein als der, von der das Dokument selbst geladen wurde.

## Beispiele

Gegeben sei dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas" width="5" height="5"></canvas>
```

Mit den folgenden Zeilen können Sie eine Data-URL des Canvas abrufen:

```js
const canvas = document.getElementById("canvas");
const dataURL = canvas.toDataURL();
console.log(dataURL);
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"
```

### Bildqualität bei JPEGs festlegen

```js
const fullQuality = canvas.toDataURL("image/jpeg", 1.0);
// data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ…9oADAMBAAIRAxEAPwD/AD/6AP/Z"
const mediumQuality = canvas.toDataURL("image/jpeg", 0.5);
const lowQuality = canvas.toDataURL("image/jpeg", 0.1);
```

### Beispiel: Bilder dynamisch ändern

Sie können diese Technik zusammen mit Mausereignissen verwenden, um Bilder dynamisch zu ändern (in diesem Beispiel zwischen Graustufen und Farbe):

#### HTML

```html
<img class="grayscale" src="myPicture.png" alt="Description of my picture" />
```

#### JavaScript

```js
function showColorImg() {
  this.style.display = "none";
  this.nextSibling.style.display = "inline";
}

function showGrayImg() {
  this.previousSibling.style.display = "inline";
  this.style.display = "none";
}

function removeColors() {
  const images = document.getElementsByClassName("grayscale");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  for (const colorImg of images) {
    const width = colorImg.offsetWidth;
    const height = colorImg.offsetHeight;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(colorImg, 0, 0);
    const imgData = ctx.getImageData(0, 0, width, height);
    const pix = imgData.data;
    const pixLen = pix.length;
    for (let pixel = 0; pixel < pixLen; pixel += 4) {
      pix[pixel + 2] =
        pix[pixel + 1] =
        pix[pixel] =
          (pix[pixel] + pix[pixel + 1] + pix[pixel + 2]) / 3;
    }
    ctx.putImageData(imgData, 0, 0);
    const grayImg = new Image();
    grayImg.src = canvas.toDataURL();
    grayImg.onmouseover = showColorImg;
    colorImg.onmouseout = showGrayImg;
    ctx.clearRect(0, 0, width, height);
    colorImg.style.display = "none";
    colorImg.parentNode.insertBefore(grayImg, colorImg);
  }
}

removeColors();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data) in der [HTTP](/de/docs/Web/HTTP)-Referenz.
