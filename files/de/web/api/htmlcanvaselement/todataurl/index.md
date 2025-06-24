---
title: "HTMLCanvasElement: toDataURL() Methode"
short-title: toDataURL()
slug: Web/API/HTMLCanvasElement/toDataURL
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.toDataURL()`** Methode gibt eine [Daten-URL](/de/docs/Web/URI/Reference/Schemes/data) zurück, die eine Darstellung des Bildes im Format enthält, das durch den `type` Parameter angegeben wird.

Das gewünschte Dateiformat und die Bildqualität können angegeben werden. Wenn das Dateiformat nicht spezifiziert ist oder das angegebene Format nicht unterstützt wird, wird die Daten als `image/png` exportiert. Mit anderen Worten, wenn der zurückgegebene Wert mit `data:image/png` für jeden anderen angeforderten `type` beginnt, wird dieses Format nicht unterstützt.

Browser müssen `image/png` unterstützen; viele werden zusätzliche Formate unterstützen, einschließlich `image/jpeg` und `image/webp`.

Die erstellten Bilddaten haben eine Auflösung von 96dpi für Dateiformate, die die Kodierung von Auflösungsmetadaten unterstützen.

> [!WARNING] > `toDataURL()` kodiert das gesamte Bild in einem Speicher-String. Bei größeren Bildern kann dies Leistungseinbußen verursachen und möglicherweise die URL-Längenbegrenzung des Browsers überschreiten, wenn es der [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src) zugewiesen wird. Sie sollten im Allgemeinen [`toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) anstelle dessen bevorzugen, in Kombination mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static).

## Syntax

```js-nolint
toDataURL()
toDataURL(type)
toDataURL(type, quality)
```

### Parameter

- `type` {{optional_inline}}
  - : Ein String, der das Bildformat angibt. Der Standardtyp ist `image/png`; dieses Bildformat wird auch verwendet, wenn der angegebene Typ nicht unterstützt wird.
- `quality` {{optional_inline}}
  - : Eine {{jsxref("Number")}} zwischen `0` und `1`, die die Bildqualität angibt, die bei der Erstellung von Bildern verwendet werden soll, die Dateiformate mit verlustbehafteter Kompression unterstützen (wie `image/jpeg` oder `image/webp`). Ein Benutzeragent verwendet seinen Standardqualitätswert, wenn diese Option nicht angegeben ist oder wenn die Zahl außerhalb des erlaubten Bereichs liegt.

### Rückgabewert

Ein String, der die angeforderte [Daten-URL](/de/docs/Web/URI/Reference/Schemes/data) enthält.

Wenn die Höhe oder Breite der Leinwand `0` oder größer als die [maximale Leinwandgröße](/de/docs/Web/HTML/Reference/Elements/canvas#maximum_canvas_size) ist, wird der String `"data:,"` zurückgegeben.

### Ausnahmen

- `SecurityError`
  - : Der Bitmap der Leinwand ist nicht ursprungsrein; mindestens einige ihrer Inhalte wurden oder könnten von einer anderen Site geladen worden sein als der, von der das Dokument selbst geladen wurde.

## Beispiele

Gegebenes {{HTMLElement("canvas")}} Element:

```html
<canvas id="canvas" width="5" height="5"></canvas>
```

Sie können eine Daten-URL der Leinwand mit den folgenden Zeilen erhalten:

```js
const canvas = document.getElementById("canvas");
const dataURL = canvas.toDataURL();
console.log(dataURL);
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"
```

### Bildqualität mit JPEGs festlegen

```js
const fullQuality = canvas.toDataURL("image/jpeg", 1.0);
// data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ…9oADAMBAAIRAxEAPwD/AD/6AP/Z"
const mediumQuality = canvas.toDataURL("image/jpeg", 0.5);
const lowQuality = canvas.toDataURL("image/jpeg", 0.1);
```

### Beispiel: Bilder dynamisch ändern

Sie können diese Technik in Koordination mit Maus-Ereignissen verwenden, um Bilder dynamisch zu ändern (grau vs. Farbe in diesem Beispiel):

#### HTML

```html
<img class="grayscale" src="myPicture.png" alt="Description of my picture" />
```

#### JavaScript

```js
window.addEventListener("load", removeColors);

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
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data) in der [HTTP](/de/docs/Web/HTTP) Referenz.
