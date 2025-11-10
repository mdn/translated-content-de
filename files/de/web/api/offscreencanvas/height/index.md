---
title: "OffscreenCanvas: height-Eigenschaft"
short-title: height
slug: Web/API/OffscreenCanvas/height
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`height`**-Eigenschaft gibt die Höhe eines [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekts zurück und setzt sie.

## Wert

Ein positiver ganzzahliger Wert, der die Höhe des Offscreen-Canvas in CSS-Pixeln darstellt.

## Beispiele

Erstellen eines neuen Offscreen-Canvas und Zurückgeben oder Setzen der Höhe des Offscreen-Canvas:

```js
const offscreen = new OffscreenCanvas(256, 256);
offscreen.height; // 256
offscreen.height = 512;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), das Interface, zu dem diese Eigenschaft gehört.
