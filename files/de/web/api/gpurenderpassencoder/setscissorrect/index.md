---
title: "GPURenderPassEncoder: setScissorRect() Methode"
short-title: setScissorRect()
slug: Web/API/GPURenderPassEncoder/setScissorRect
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setScissorRect()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle setzt das Scherrechteck, das während der Rasterisierungsphase verwendet wird. Fragmente, die nach der Transformation in Viewport-Koordinaten außerhalb des Scherrechtecks liegen, werden verworfen.

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
> Wenn kein `setScissorRect()`-Aufruf erfolgt, sind die Standardwerte `(0, 0, attachment width, attachment height)` für jede Render-Pass gesetzt.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`setViewport()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- `x` + `width` ist kleiner oder gleich der Breite der Render-Pass-Render-Anhänge (siehe Hinweis unten).
- `y` + `height` ist kleiner oder gleich der Höhe der Render-Pass-Render-Anhänge (siehe Hinweis unten).

> [!NOTE]
> Siehe die Farb- und Tiefen/Stencil-Anhänge, die im Deskriptor von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegeben sind; die Breite und Höhe basieren auf der des [`GPUTexture`](/de/docs/Web/API/GPUTexture), von der ihre `view`s stammen.

## Beispiele

### Grundlegendes Beispiel

In einem typischen Kanvas-Render könnte Folgendes verwendet werden, um das Rendern außerhalb des oberen linken Viertels des Kanvas zu verwerfen:

```js
passEncoder.setScissorRect(0, 0, canvas.width / 2, canvas.height / 2);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
