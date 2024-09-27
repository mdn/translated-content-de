---
title: "OffscreenCanvas: OffscreenCanvas() Konstruktor"
short-title: OffscreenCanvas()
slug: Web/API/OffscreenCanvas/OffscreenCanvas
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Der **`OffscreenCanvas()`** Konstruktor gibt ein neu instanziertes [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Objekt zurück.

## Syntax

```js-nolint
new OffscreenCanvas(width, height)
```

### Parameter

- `width`
  - : Die Breite der Offscreen-Leinwand.
- `height`
  - : Die Höhe der Offscreen-Leinwand.

## Beispiele

Dieses Beispiel erstellt eine neue Offscreen-Leinwand unter Verwendung des `OffscreenCanvas()` Konstruktors.
Wir initialisieren dann einen [WebGL](/de/docs/Web/API/WebGL_API) Kontext darauf, indem wir die [`getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext) Methode verwenden.

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
