---
title: "OffscreenCanvas: width Eigenschaft"
short-title: width
slug: Web/API/OffscreenCanvas/width
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`width`**-Eigenschaft gibt die Breite eines [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekts zurück und setzt diese.

## Wert

## Beispiele

Erstellen eines neuen Offscreen-Canvas und Zurückgeben oder Setzen der Breite des Offscreen-Canvas:

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
