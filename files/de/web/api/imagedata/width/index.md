---
title: "ImageData: width-Eigenschaft"
short-title: Breite
slug: Web/API/ImageData/width
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`ImageData.width`**-Eigenschaft gibt die Anzahl der Pixel pro Zeile im {{domxref("ImageData")}}-Objekt zurück.

## Wert

Eine Zahl.

## Beispiele

Dieses Beispiel erstellt ein `ImageData`-Objekt, das 200 Pixel breit und 100 Pixel hoch ist. Daher beträgt der Wert der `width`-Eigenschaft `200`.

```js
let imageData = new ImageData(200, 100);
console.log(imageData.width); // 200
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ImageData.height")}}
- {{domxref("ImageData")}}
