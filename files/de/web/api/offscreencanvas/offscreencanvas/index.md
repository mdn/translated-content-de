---
title: "OffscreenCanvas: OffscreenCanvas() Konstruktor"
short-title: OffscreenCanvas()
slug: Web/API/OffscreenCanvas/OffscreenCanvas
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Der **`OffscreenCanvas()`** Konstruktor gibt ein neu instanziiertes {{domxref("OffscreenCanvas")}} Objekt zurück.

## Syntax

```js-nolint
new OffscreenCanvas(width, height)
```

### Parameter

- `width`
  - : Die Breite des Offscreen-Canvas.
- `height`
  - : Die Höhe des Offscreen-Canvas.

## Beispiele

Dieses Beispiel erstellt einen neuen Offscreen-Canvas mit dem `OffscreenCanvas()` Konstruktor.
Wir initialisieren dann einen [WebGL](/de/docs/Web/API/WebGL_API) Kontext darauf, indem wir die {{domxref("OffscreenCanvas.getContext()", "getContext()")}} Methode verwenden.

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("OffscreenCanvas")}}, die Schnittstelle, zu der dieser Konstruktor gehört
