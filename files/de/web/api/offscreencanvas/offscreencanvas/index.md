---
title: "OffscreenCanvas: OffscreenCanvas() Konstruktor"
short-title: OffscreenCanvas()
slug: Web/API/OffscreenCanvas/OffscreenCanvas
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Der **`OffscreenCanvas()`** Konstruktor gibt ein neu instanziiertes [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekt zurück.

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

Dieses Beispiel erstellt ein neues Offscreen-Canvas mit dem `OffscreenCanvas()` Konstruktor. Wir initialisieren dann einen [WebGL](/de/docs/Web/API/WebGL_API)-Kontext darauf mit der [`getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext)-Methode.

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), die Schnittstelle, zu der dieser Konstruktor gehört
