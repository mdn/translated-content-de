---
title: "GPURenderPassEncoder: Methode setScissorRect()"
short-title: setScissorRect()
slug: Web/API/GPURenderPassEncoder/setScissorRect
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setScissorRect()`** Methode der Schnittstelle [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) legt das Scherrechteck fest, das während der Rasterisierungsphase verwendet wird. Nach der Transformation in Viewport-Koordinaten werden alle Fragmente, die außerhalb des Scherrechtecks liegen, verworfen.

## Syntax

```js-nolint
setScissorRect(x, y, width, height)
```

### Parameter

- `x`
  - : Eine Zahl, die den minimalen X-Wert des Scherrechtecks in Pixel angibt.
- `y`
  - : Eine Zahl, die den minimalen Y-Wert des Scherrechtecks in Pixel angibt.
- `width`
  - : Eine Zahl, die die Breite des Scherrechtecks in Pixel angibt.
- `height`
  - : Eine Zahl, die die Höhe des Scherrechtecks in Pixel angibt.

> [!NOTE]
> Wenn kein `setScissorRect()` Aufruf erfolgt, sind die Standardwerte `(0, 0, Anhangbreite, Anhanghöhe)` für jeden Renderpass.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setViewport()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- `x` + `width` ist kleiner oder gleich der Breite der Render-Pass-Render-Anhänge (siehe Hinweis unten).
- `y` + `height` ist kleiner oder gleich der Höhe der Render-Pass-Render-Anhänge (siehe Hinweis unten).

> [!NOTE]
> Beachten Sie die Farb- und Tiefen/Stencil-Anhänge, die im Deskriptor von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegeben sind; die Breite und Höhe basieren auf der des [`GPUTexture`](/de/docs/Web/API/GPUTexture), von der deren `view`s stammen.

## Beispiele

### Einfaches Beispiel

Bei einem typischen Canvas-Render könnte das Folgende verwendet werden, um jede Darstellung außerhalb des oberen linken Viertels der Leinwand zu verwerfen:

```js
passEncoder.setScissorRect(0, 0, canvas.width / 2, canvas.height / 2);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
