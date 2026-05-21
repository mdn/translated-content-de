---
title: "GPURenderPassEncoder: Methode setScissorRect()"
short-title: setScissorRect()
slug: Web/API/GPURenderPassEncoder/setScissorRect
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setScissorRect()`** Methode der Schnittstelle [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) setzt das Scherrechteck, das während der Rasterisierungsphase verwendet wird. Nach der Transformation in die Viewport-Koordinaten werden alle Fragmente, die außerhalb des Scherrechtecks fallen, verworfen.

## Syntax

```js-nolint
setScissorRect(x, y, width, height)
```

### Parameter

- `x`
  - : Eine Zahl, die den minimalen X-Wert des Scherrechtecks in Pixeln darstellt.
- `y`
  - : Eine Zahl, die den minimalen Y-Wert des Scherrechtecks in Pixeln darstellt.
- `width`
  - : Eine Zahl, die die Breite des Scherrechtecks in Pixeln darstellt.
- `height`
  - : Eine Zahl, die die Höhe des Scherrechtecks in Pixeln darstellt.

> [!NOTE]
> Wenn kein `setScissorRect()` Aufruf erfolgt, sind die Standardwerte `(0, 0, attachment width, attachment height)` für jede Render-Pass-Schicht.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setViewport()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- `x` + `width` muss kleiner oder gleich der Breite der Render-Anhänge des Render-Passes sein (siehe Hinweis unten).
- `y` + `height` muss kleiner oder gleich der Höhe der Render-Anhänge des Render-Passes sein (siehe Hinweis unten).

> [!NOTE]
> Siehe die in der Deskriptor der [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) spezifizierten Farb- und Tiefen-/Stencil-Anhänge; die Breite und Höhe basieren auf jener der [`GPUTexture`](/de/docs/Web/API/GPUTexture), von denen ihre `view`s stammen.

## Beispiele

### Grundlegendes Beispiel

In einem typischen Canvas-Rendering könnte Folgendes verwendet werden, um jegliches Rendering außerhalb des oberen linken Viertels der Leinwand zu verwerfen:

```js
passEncoder.setScissorRect(0, 0, canvas.width / 2, canvas.height / 2);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
