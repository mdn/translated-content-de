---
title: "HTMLCanvasElement: toDataURL()-Methode"
short-title: toDataURL()
slug: Web/API/HTMLCanvasElement/toDataURL
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.toDataURL()`**-Methode gibt eine [Daten-URL](/de/docs/Web/URI/Schemes/data) zurück, die eine Darstellung des Bildes im durch den `type`-Parameter angegebenen Format enthält.

Das gewünschte Dateiformat und die Bildqualität können spezifiziert werden. Wenn das Dateiformat nicht angegeben wird oder das angegebene Format nicht unterstützt wird, werden die Daten als `image/png` exportiert. Mit anderen Worten: Wenn der zurückgegebene Wert mit `data:image/png` für jeden anderen angeforderten `type` beginnt, wird dieses Format nicht unterstützt.

Browser sind verpflichtet, `image/png` zu unterstützen; viele unterstützen zusätzliche Formate, einschließlich `image/jpeg` und `image/webp`.

Die erstellten Bilddaten haben eine Auflösung von 96dpi für Dateiformate, die das Kodieren von Auflösungsmetadaten unterstützen.

> **Warning:** `toDataURL()` kodiert das gesamte Bild in einem im Speicher befindlichen String. Bei größeren Bildern kann dies Leistungseinbußen mit sich bringen und unter Umständen die URL-Längenbegrenzung in Browsern überschreiten, wenn es [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src) zugewiesen wird. Sie sollten im Allgemeinen [`toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) in Kombination mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) bevorzugen.

## Syntax

```js-nolint
toDataURL()
toDataURL(type)
toDataURL(type, encoderOptions)
```

### Parameter

- `type` {{optional_inline}}
  - : Ein String, der das Bildformat angibt. Der Standardtyp ist `image/png`; dieses Format wird ebenfalls verwendet, wenn der angegebene Typ nicht unterstützt wird.
- `encoderOptions` {{optional_inline}}
  - : Ein {{jsxref("Number")}} zwischen `0` und `1`, das die Bildqualität angibt, die beim Erstellen von Bildern in Dateiformaten verwendet werden soll, die verlustbehaftete Komprimierung unterstützen (wie `image/jpeg` oder `image/webp`). Ein User-Agent wird seinen Standardqualitätswert verwenden, wenn diese Option nicht angegeben wird oder die Zahl außerhalb des erlaubten Bereichs liegt.

### Rückgabewert

Ein String, der die angeforderte [Daten-URL](/de/docs/Web/URI/Schemes/data) enthält.

Wenn die Höhe oder Breite der Leinwand `0` ist oder größer als die [maximale Leinwandgröße](/de/docs/Web/HTML/Element/canvas#maximum_canvas_size) ist, wird der String `"data:,"` zurückgegeben.

### Ausnahmen

- `SecurityError`
  - : Das Bitmap der Leinwand ist nicht origin clean; mindestens ein Teil seines Inhalts wurde oder könnte von einer anderen Website geladen worden sein als der, von der das Dokument selbst geladen wurde.

## Beispiele

Angenommen, dieses {{HTMLElement("canvas")}}-Element:

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

### Bildqualität bei JPEGs einstellen

```js
const fullQuality = canvas.toDataURL("image/jpeg", 1.0);
// data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ…9oADAMBAAIRAxEAPwD/AD/6AP/Z"
const mediumQuality = canvas.toDataURL("image/jpeg", 0.5);
const lowQuality = canvas.toDataURL("image/jpeg", 0.1);
```

### Beispiel: Bilder dynamisch ändern

Sie können diese Technik in Verbindung mit Mausereignissen verwenden, um Bilder dynamisch zu ändern (Grau- vs. Farbskala in diesem Beispiel):

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

- [Daten-URLs](/de/docs/Web/URI/Schemes/data) in der [HTTP](/de/docs/Web/HTTP)-Referenz.
