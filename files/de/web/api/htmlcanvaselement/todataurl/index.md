---
title: "HTMLCanvasElement: toDataURL()-Methode"
short-title: toDataURL()
slug: Web/API/HTMLCanvasElement/toDataURL
l10n:
  sourceCommit: 7c2a91a8cf4d9889096019679e4319400e971b41
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.toDataURL()`**-Methode gibt eine [Daten-URL](/de/docs/Web/URI/Schemes/data) zurück, die eine Darstellung des Bildes im durch den `type`-Parameter angegebenen Format enthält.

Das gewünschte Dateiformat und die Bildqualität können angegeben werden. Wenn das Dateiformat nicht angegeben wird oder das angegebene Format nicht unterstützt wird, wird die Daten als `image/png` exportiert. Anders ausgedrückt, wenn der zurückgegebene Wert mit `data:image/png` für irgendeinen anderen angeforderten `type` beginnt, dann wird dieses Format nicht unterstützt.

Browser sind verpflichtet, `image/png` zu unterstützen; viele unterstützen zusätzlich Formate wie `image/jpeg` und `image/webp`.

Die erzeugten Bilddaten haben eine Auflösung von 96dpi für Dateiformate, die das Kodieren von Auflösungsmetadaten unterstützen.

> **Warning:** `toDataURL()` kodiert das gesamte Bild in einem im Speicher befindlichen String. Bei größeren Bildern kann dies Leistungseinbußen mit sich bringen und möglicherweise die URL-Längenbegrenzung von Browsern überschreiten, wenn sie einem [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src) zugewiesen werden. Sie sollten im Allgemeinen [`toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) in Kombination mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) bevorzugen.

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
  - : Eine {{jsxref("Number")}} zwischen `0` und `1`, die die Bildqualität angibt, die beim Erstellen von Bildern verwendet wird, bei Dateiformaten, die verlustbehaftete Kompression unterstützen (wie `image/jpeg` oder `image/webp`). Ein User-Agent wird seinen Standardqualitätswert verwenden, wenn diese Option nicht angegeben wird oder wenn die Zahl außerhalb des zulässigen Bereichs liegt.

### Rückgabewert

Ein String, der die angeforderte [Daten-URL](/de/docs/Web/URI/Schemes/data) enthält.

Wenn die Höhe oder Breite des Canvas `0` ist oder größer als die [maximale Canvas-Größe](/de/docs/Web/HTML/Element/canvas#maximum_canvas_size), wird der String `"data:,"` zurückgegeben.

### Ausnahmen

- `SecurityError`
  - : Der Bitmap des Canvas ist nicht origin-sicher; mindestens ein Teil seines Inhalts wurde möglicherweise von einer anderen Site geladen als die, von der das Dokument selbst geladen wurde.

## Beispiele

Gegeben ist dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas" width="5" height="5"></canvas>
```

Sie können eine Daten-URL des Canvas mit den folgenden Zeilen erhalten:

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

Sie können diese Technik in Koordination mit Mausereignissen verwenden, um Bilder dynamisch zu ändern (Graustufen vs. Farbe in diesem Beispiel):

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

- [Daten-URLs](/de/docs/Web/URI/Schemes/data) im [HTTP](/de/docs/Web/HTTP)-Leitfaden.
