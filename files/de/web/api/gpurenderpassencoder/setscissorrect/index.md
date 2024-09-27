---
title: "GPURenderPassEncoder: setScissorRect()-Methode"
short-title: setScissorRect()
slug: Web/API/GPURenderPassEncoder/setScissorRect
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setScissorRect()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle setzt das Scherrechteck, das während der Rasterisierungsphase verwendet wird. Nach der Transformation in Viewport-Koordinaten werden alle Fragmente, die außerhalb des Scherrechtecks liegen, verworfen.

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
> Wenn kein `setScissorRect()`-Aufruf gemacht wird, lauten die Standardwerte `(0, 0, Anhangsbreite, Anhangshöhe)` für jeden Render-Pass.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Folgende Kriterien müssen beim Aufruf von **`setViewport()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- `x` + `width` muss kleiner als oder gleich der Breite der Render-Anhänge des Render-Passes sein (siehe Hinweis unten).
- `y` + `height` muss kleiner als oder gleich der Höhe der Render-Anhänge des Render-Passes sein (siehe Hinweis unten).

> [!NOTE]
> Beachten Sie die in der Beschreibung von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) spezifizierten Farb- und Tiefen-/Stencil-Anhänge; die Breite und Höhe basieren auf dem [`GPUTexture`](/de/docs/Web/API/GPUTexture), von dem die `view`s stammen.

## Beispiele

### Grundlegendes Beispiel

In einem typischen Canvas-Render könnte das Folgende verwendet werden, um jede Darstellung außerhalb des oberen linken Viertels des Canvas zu verwerfen:

```js
passEncoder.setScissorRect(0, 0, canvas.width / 2, canvas.height / 2);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
