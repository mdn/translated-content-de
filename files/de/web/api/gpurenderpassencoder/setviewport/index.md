---
title: "GPURenderPassEncoder: setViewport()-Methode"
short-title: setViewport()
slug: Web/API/GPURenderPassEncoder/setViewport
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setViewport()`**-Methode der {{domxref("GPURenderPassEncoder")}}-Schnittstelle legt den Viewport fest, der während der Rasterisierungsphase verwendet wird, um von normalisierten Gerätekoordinaten linear auf Viewport-Koordinaten abzubilden.

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
> Wenn kein `setViewport()`-Aufruf erfolgt, sind die Standardwerte für jeden Render-Durchlauf `(0, 0, attachment width, attachment height, 0, 1)`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setViewport()`** aufgerufen wird. Andernfalls wird ein {{domxref("GPUValidationError")}} generiert und der {{domxref("GPURenderPassEncoder")}} wird ungültig:

- `x`, `y`, `width` und `height` sind alle größer oder gleich 0.
- `x` + `width` ist kleiner oder gleich der Breite der Render-Anhänge des Render-Durchlaufs (siehe Hinweis unten).
- `y` + `height` ist kleiner oder gleich der Höhe der Render-Anhänge des Render-Durchlaufs (siehe Hinweis unten).
- `minDepth` und `maxDepth` liegen beide im Bereich von 0,0 bis 1,0 inklusive.
- `minDepth` ist kleiner als `maxDepth`.

> [!NOTE]
> Sehen Sie die Farb- und Tiefen-/Stencil-Anhänge im Deskriptor von {{domxref("GPUCommandEncoder.beginRenderPass()")}}; die Breite und Höhe basieren auf derjenigen der {{domxref("GPUTexture")}}, von der ihre `view`s stammen.

## Beispiele

### Einfaches Beispiel

In einem typischen Canvas-Render könnte das Folgende verwendet werden, um die Breite und Höhe der gerenderten Grafik zu halbieren:

```js
passEncoder.setViewport(0, 0, canvas.width / 2, canvas.height / 2, 0, 1);
```

### Im Kontext

Im WebGPU-Beispiel [reversedZ example](https://webgpu.github.io/webgpu-samples/samples/reversedZ/) wird `setViewport` mehrmals verwendet, um den Viewport für die verschiedenen Render-Durchläufe festzulegen. Studieren Sie den Beispielcode für den vollständigen Kontext.

Zum Beispiel:

```js
// ...

colorPass.setViewport(
  (canvas.width * m) / 2,
  0,
  canvas.width / 2,
  canvas.height,
  0,
  1,
);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
