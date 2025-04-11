---
title: "HTMLCanvasElement: toDataURL() Methode"
short-title: toDataURL()
slug: Web/API/HTMLCanvasElement/toDataURL
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.toDataURL()`** Methode gibt eine [Data-URL](/de/docs/Web/URI/Reference/Schemes/data) zurück, die eine Darstellung des Bildes im durch den `type` Parameter angegebenen Format enthält.

Das gewünschte Dateiformat und die Bildqualität können angegeben werden.
Wenn das Dateiformat nicht angegeben ist oder das angegebene Format nicht unterstützt wird, wird die Datei als `image/png` exportiert.
Mit anderen Worten, wenn der zurückgegebene Wert mit `data:image/png` beginnt, obwohl ein anderes `type` angefordert wurde, wird dieses Format nicht unterstützt.

Browser sind verpflichtet, `image/png` zu unterstützen; viele werden zusätzliche Formate wie `image/jpeg` und `image/webp` unterstützen.

Die erstellten Bilddaten haben eine Auflösung von 96 dpi für Dateiformate, die das Kodieren von Auflösungsmetadaten unterstützen.

> **Warning:** `toDataURL()` kodiert das gesamte Bild in einem In-Memory-String. Bei größeren Bildern kann dies Auswirkungen auf die Leistung haben und sogar das URL-Längenlimit von Browsern überschreiten, wenn es einem [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src) zugewiesen wird. Sie sollten generell [`toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) in Kombination mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) bevorzugen.

## Syntax

```js-nolint
toDataURL()
toDataURL(type)
toDataURL(type, quality)
```

### Parameter

- `type` {{optional_inline}}
  - : Ein String, der das Bildformat angibt.
    Der Standardtyp ist `image/png`; dieses Bildformat wird auch verwendet, wenn der angegebene Typ nicht unterstützt wird.
- `quality` {{optional_inline}}
  - : Eine {{jsxref("Number")}} zwischen `0` und `1`, die die Bildqualität angibt, die beim Erstellen von Bildern mit Dateiformaten, die verlustbehaftete Kompression unterstützen (wie `image/jpeg` oder `image/webp`), verwendet werden soll.
    Ein User-Agent verwendet seinen Standardqualitätswert, wenn diese Option nicht angegeben ist oder wenn die Zahl außerhalb des zulässigen Bereichs liegt.

### Rückgabewert

Ein String, der die angeforderte [Data-URL](/de/docs/Web/URI/Reference/Schemes/data) enthält.

Wenn die Höhe oder Breite der Leinwand `0` oder größer als die [maximale Leinwandgröße](/de/docs/Web/HTML/Reference/Elements/canvas#maximum_canvas_size) ist, wird der String `"data:,"` zurückgegeben.

### Ausnahmen

- `SecurityError`
  - : Das Bitmap der Leinwand ist nicht origin-sauber;
    mindestens einige seiner Inhalte wurden von einer anderen Website geladen oder könnten von einer anderen Website geladen worden sein als der, von der das Dokument selbst geladen wurde.

## Beispiele

Angenommen, dieses {{HTMLElement("canvas")}} Element:

```html
<canvas id="canvas" width="5" height="5"></canvas>
```

Sie können eine Data-URL der Leinwand mit den folgenden Zeilen erhalten:

```js
const canvas = document.getElementById("canvas");
const dataURL = canvas.toDataURL();
console.log(dataURL);
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"
```

### Festlegen der Bildqualität mit JPEGs

```js
const fullQuality = canvas.toDataURL("image/jpeg", 1.0);
// data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ…9oADAMBAAIRAxEAPwD/AD/6AP/Z"
const mediumQuality = canvas.toDataURL("image/jpeg", 0.5);
const lowQuality = canvas.toDataURL("image/jpeg", 0.1);
```

### Beispiel: Bilder dynamisch ändern

Sie können diese Technik in Kombination mit Mausereignissen verwenden, um Bilder dynamisch zu ändern (Graustufen vs. Farbe in diesem Beispiel):

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

- [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data) im [HTTP](/de/docs/Web/HTTP) Leitfaden.
