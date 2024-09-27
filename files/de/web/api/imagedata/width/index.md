---
title: "ImageData: width-Eigenschaft"
short-title: width
slug: Web/API/ImageData/width
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die readonly **`ImageData.width`**-Eigenschaft gibt die Anzahl der Pixel pro Zeile im [`ImageData`](/de/docs/Web/API/ImageData)-Objekt zurück.

## Wert

Eine Zahl.

## Beispiele

In diesem Beispiel wird ein `ImageData`-Objekt erstellt, das 200 Pixel breit und 100 Pixel hoch ist. Daher ist die `width`-Eigenschaft `200`.

```js
let imageData = new ImageData(200, 100);
console.log(imageData.width); // 200
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ImageData.height`](/de/docs/Web/API/ImageData/height)
- [`ImageData`](/de/docs/Web/API/ImageData)
