---
title: "ImageData: height-Eigenschaft"
short-title: height
slug: Web/API/ImageData/height
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`ImageData.height`** Eigenschaft gibt die Anzahl der Zeilen im {{domxref("ImageData")}}-Objekt zurück.

## Wert

Eine Zahl.

## Beispiele

Dieses Beispiel erstellt ein `ImageData`-Objekt, das 200 Pixel breit und 100 Pixel hoch ist. Somit ist die `height`-Eigenschaft `100`.

```js
let imageData = new ImageData(200, 100);
console.log(imageData.height); // 100
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ImageData.width")}}
- {{domxref("ImageData")}}
