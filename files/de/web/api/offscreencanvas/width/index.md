---
title: "OffscreenCanvas: width-Eigenschaft"
short-title: width
slug: Web/API/OffscreenCanvas/width
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`width`**-Eigenschaft gibt die Breite eines {{domxref("OffscreenCanvas")}}-Objekts zurück und legt sie fest.

## Wert

## Beispiele

Erstellung einer neuen Offscreen-Leinwand und Zurückgeben oder Festlegen der Breite der Offscreen-Leinwand:

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

- {{domxref("OffscreenCanvas")}}, die Schnittstelle, zu der diese Eigenschaft gehört.
