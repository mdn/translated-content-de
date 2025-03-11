---
title: "OffscreenCanvas: width-Eigenschaft"
short-title: width
slug: Web/API/OffscreenCanvas/width
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`width`**-Eigenschaft gibt die Breite eines [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekts zurück und legt sie fest.

## Wert

Ein positiver Integer, der die Breite des Offscreen-Canvas in CSS-Pixeln darstellt.

## Beispiele

Erstellen eines neuen Offscreen-Canvas und Zurückgeben oder Festlegen der Breite des Offscreen-Canvas:

```js
const offscreen = new OffscreenCanvas(256, 256);
offscreen.width; // 256
offscreen.width = 512;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), die Schnittstelle, zu der diese Eigenschaft gehört.
