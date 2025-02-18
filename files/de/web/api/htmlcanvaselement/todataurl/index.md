---
title: "HTMLCanvasElement: toDataURL() Methode"
short-title: toDataURL()
slug: Web/API/HTMLCanvasElement/toDataURL
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.toDataURL()`**-Methode gibt eine [Data-URL](/de/docs/Web/URI/Reference/Schemes/data) zurück, die eine Darstellung des Bildes im Format enthält, das durch den `type`-Parameter angegeben wird.

Das gewünschte Dateiformat und die Bildqualität können angegeben werden.
Wenn das Dateiformat nicht angegeben oder das angegebene Format nicht unterstützt wird, werden die Daten als `image/png` exportiert.
Mit anderen Worten, wenn der zurückgegebene Wert mit `data:image/png` für einen anderen angeforderten `type` beginnt, wird dieses Format nicht unterstützt.

Browser sind verpflichtet, `image/png` zu unterstützen; viele unterstützen zusätzliche Formate, einschließlich `image/jpeg` und `image/webp`.

Die erstellten Bilddaten haben eine Auflösung von 96 dpi für Dateiformate, die die Kodierung von Auflösungsmetadaten unterstützen.

> **Warning:** `toDataURL()` kodiert das gesamte Bild als In-Memory-String. Für größere Bilder kann dies Performance-Auswirkungen haben und möglicherweise die URL-Längenbegrenzung des Browsers überschreiten, wenn sie [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src) zugewiesen wird. Stattdessen sollten Sie in der Regel [`toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) in Kombination mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) bevorzugen.

## Syntax

```js-nolint
toDataURL()
toDataURL(type)
toDataURL(type, quality)
```

### Parameter

- `type` {{optional_inline}}
  - : Eine Zeichenfolge, die das Bildformat angibt.
    Der Standardtyp ist `image/png`; dieses Bildformat wird auch verwendet, wenn der angegebene Typ nicht unterstützt wird.
- `quality` {{optional_inline}}
  - : Eine {{jsxref("Number")}} zwischen `0` und `1`, die die zu verwendende Bildqualität angibt, wenn Bilder mit Dateiformaten erstellt werden, die verlustbehaftete Komprimierung unterstützen (wie `image/jpeg` oder `image/webp`).
    Ein Benutzeragent verwendet seinen Standardqualitätswert, wenn diese Option nicht angegeben wurde oder wenn die Zahl außerhalb des zulässigen Bereichs liegt.

### Rückgabewert

Eine Zeichenfolge, die die angeforderte [Data-URL](/de/docs/Web/URI/Reference/Schemes/data) enthält.

Wenn die Höhe oder Breite der Leinwand `0` oder größer als die [Maximale Canvas-Größe](/de/docs/Web/HTML/Element/canvas#maximum_canvas_size) ist, wird die Zeichenfolge `"data:,"` zurückgegeben.

### Ausnahmen

- `SecurityError`
  - : Das Bitmap der Canvas ist nicht origin-clean; zumindest einige ihrer Inhalte wurden möglicherweise von einer anderen Website geladen als derjenigen, von der das Dokument selbst geladen wurde.

## Beispiele

Gegeben ist dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas" width="5" height="5"></canvas>
```

Sie können eine Data-URL der Canvas mit den folgenden Zeilen abrufen:

```js
const canvas = document.getElementById("canvas");
const dataURL = canvas.toDataURL();
console.log(dataURL);
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"
```

### Bildqualität für JPEGs einstellen

```js
const fullQuality = canvas.toDataURL("image/jpeg", 1.0);
// data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ…9oADAMBAAIRAxEAPwD/AD/6AP/Z"
const mediumQuality = canvas.toDataURL("image/jpeg", 0.5);
const lowQuality = canvas.toDataURL("image/jpeg", 0.1);
```

### Beispiel: Bilder dynamisch ändern

Sie können diese Technik in Verbindung mit Mausereignissen verwenden, um Bilder dynamisch zu ändern (Graustufen versus Farbe in diesem Beispiel):

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

- [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data) in der [HTTP](/de/docs/Web/HTTP)-Referenz.
