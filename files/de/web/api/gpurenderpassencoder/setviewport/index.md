---
title: "GPURenderPassEncoder: setViewport()-Methode"
short-title: setViewport()
slug: Web/API/GPURenderPassEncoder/setViewport
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setViewport()`**-Methode des [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Interfaces legt den Viewport fest, der während der Rasterisierungsphase verwendet wird, um von normalisierten Gerätekoordinaten auf Viewport-Koordinaten linear abzubilden.

## Syntax

```js-nolint
setViewport(x, y, width, height, minDepth, maxDepth)
```

### Parameter

- `x`
  - : Eine Zahl, die den minimalen X-Wert des Viewports in Pixeln darstellt.
- `y`
  - : Eine Zahl, die den minimalen Y-Wert des Viewports in Pixeln darstellt.
- `width`
  - : Eine Zahl, die die Breite des Viewports in Pixeln darstellt.
- `height`
  - : Eine Zahl, die die Höhe des Viewports in Pixeln darstellt.
- `minDepth`
  - : Eine Zahl, die den minimalen Tiefenwert des Viewports darstellt.
- `maxDepth`
  - : Eine Zahl, die den maximalen Tiefenwert des Viewports darstellt.

> [!NOTE]
> Wenn kein `setViewport()`-Aufruf erfolgt, sind die Standardwerte `(0, 0, attachment width, attachment height, 0, 1)` für jeden Renderpass.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`setViewport()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- `x`, `y`, `width` und `height` sind alle größer oder gleich 0.
- `x` + `width` ist kleiner oder gleich der Breite der Render-Anhänge des Renderpasses (siehe Hinweis unten).
- `y` + `height` ist kleiner oder gleich der Höhe der Render-Anhänge des Renderpasses (siehe Hinweis unten).
- `minDepth` und `maxDepth` liegen beide im Bereich zwischen 0.0 und 1.0 inklusive.
- `minDepth` ist kleiner als `maxDepth`.

> [!NOTE]
> Siehe die Farb- und Tiefen-/Stencil-Anhänge, wie sie im Deskriptor von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegeben sind; die Breite und Höhe basieren auf dem [`GPUTexture`](/de/docs/Web/API/GPUTexture), aus dem ihre `view`s stammen.

## Beispiele

### Grundlegender Ausschnitt

Bei einem typischen Canvas-Render könnte das Folgende verwendet werden, um die Breite und Höhe der gerenderten Grafiken zu halbieren:

```js
passEncoder.setViewport(0, 0, canvas.width / 2, canvas.height / 2, 0, 1);
```

### Im Kontext

Im WebGPU-Beispiel [reversedZ](https://webgpu.github.io/webgpu-samples/samples/reversedZ/) wird `setViewport` mehrmals verwendet, um den Viewport für die verschiedenen Renderpassagen festzulegen. Untersuchen Sie die Beispielcode-Auflistung für den vollständigen Kontext.

Zum Beispiel:

```js
// …

colorPass.setViewport(
  (canvas.width * m) / 2,
  0,
  canvas.width / 2,
  canvas.height,
  0,
  1,
);

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
