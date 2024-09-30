---
title: "OffscreenCanvas: height Eigenschaft"
short-title: height
slug: Web/API/OffscreenCanvas/height
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`height`**-Eigenschaft gibt die Höhe eines [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekts zurück und legt diese fest.

## Wert

## Beispiele

Erstellen einer neuen Offscreen-Leinwand und Zurückgeben oder Festlegen der Höhe der Offscreen-Leinwand:

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

- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), die Schnittstelle, zu der diese Eigenschaft gehört.
