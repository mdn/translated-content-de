---
title: "OffscreenCanvas: height-Eigenschaft"
short-title: Höhe
slug: Web/API/OffscreenCanvas/height
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`height`**-Eigenschaft gibt die Höhe eines {{domxref("OffscreenCanvas")}}-Objekts zurück und setzt sie.

## Wert

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

- {{domxref("OffscreenCanvas")}}, die Schnittstelle, zu der diese Eigenschaft gehört.
