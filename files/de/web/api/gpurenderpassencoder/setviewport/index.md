---
title: "GPURenderPassEncoder: setViewport()-Methode"
short-title: setViewport()
slug: Web/API/GPURenderPassEncoder/setViewport
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setViewport()`**-Methode des [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Interfaces setzt das Viewport, das während der Rasterisierungsphase verwendet wird, um von normalisierten Gerätekoordinaten linear zu Viewport-Koordinaten zu mappen.

## Syntax

```js-nolint
setViewport(x, y, width, height, minDepth, maxDepth)
```

### Parameter

- `x`
  - : Eine Zahl, die den minimalen X-Wert des Viewport in Pixeln darstellt.
- `y`
  - : Eine Zahl, die den minimalen Y-Wert des Viewport in Pixeln darstellt.
- `width`
  - : Eine Zahl, die die Breite des Viewport in Pixeln darstellt.
- `height`
  - : Eine Zahl, die die Höhe des Viewport in Pixeln darstellt.
- `minDepth`
  - : Eine Zahl, die den minimalen Tiefenwert des Viewport darstellt.
- `maxDepth`
  - : Eine Zahl, die den maximalen Tiefenwert des Viewport darstellt.

> [!NOTE]
> Wenn kein `setViewport()`-Aufruf erfolgt, sind die Standardwerte `(0, 0, attachment width, attachment height, 0, 1)` für jeden Render-Pass.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setViewport()`** aufgerufen wird, sonst wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- `x`, `y`, `width` und `height` sind alle größer oder gleich 0.
- `x` + `width` ist kleiner oder gleich der Breite der Render-Anhänge des Render-Passes (siehe Hinweis unten).
- `y` + `height` ist kleiner oder gleich der Höhe der Render-Anhänge des Render-Passes (siehe Hinweis unten).
- `minDepth` und `maxDepth` liegen beide im Bereich 0.0–1.0 inklusive.
- `minDepth` ist kleiner als `maxDepth`.

> [!NOTE]
> Siehe die Farb- und Tiefen-/Stencilanhänge, die im Deskriptor von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegeben sind; die Breite und Höhe basieren auf der des [`GPUTexture`](/de/docs/Web/API/GPUTexture), von der ihre `view`s stammen.

## Beispiele

### Einfacher Codeausschnitt

In einem typischen Canvas-Render könnte Folgendes verwendet werden, um die Breite und Höhe der gerenderten Grafiken zu halbieren:

```js
passEncoder.setViewport(0, 0, canvas.width / 2, canvas.height / 2, 0, 1);
```

### Im Kontext

Im WebGPU Samples [reversedZ-Beispiel](https://webgpu.github.io/webgpu-samples/samples/reversedZ/) wird `setViewport` mehrmals verwendet, um das Viewport für die verschiedenen Render-Pässe einzustellen. Studieren Sie die Beispiel-Codeliste für den vollständigen Kontext.

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
