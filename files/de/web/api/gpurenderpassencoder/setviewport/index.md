---
title: "GPURenderPassEncoder: setViewport() Methode"
short-title: setViewport()
slug: Web/API/GPURenderPassEncoder/setViewport
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setViewport()`**-Methode der
[`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle setzt die Viewport, die während der Rasterisierungsphase verwendet wird, um von normalisierten Gerätekoordinaten linear zu Viewport-Koordinaten zu wechseln.

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
> Wenn kein `setViewport()`-Aufruf erfolgt, sind die Standardwerte `(0, 0, attachment width, attachment height, 0, 1)` für jeden Render-Pass.

### Rückgabewert

Keine ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setViewport()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- `x`, `y`, `width` und `height` sind alle größer oder gleich 0.
- `x` + `width` ist kleiner oder gleich der Breite der Render-Anhänge des Render-Passes (siehe Hinweis unten).
- `y` + `height` ist kleiner oder gleich der Höhe der Render-Anhänge des Render-Passes (siehe Hinweis unten).
- `minDepth` und `maxDepth` liegen beide im Bereich von 0,0 bis 1,0 einschließlich.
- `minDepth` ist kleiner als `maxDepth`.

> [!NOTE]
> Siehe die im Deskriptor von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegebenen Farb- und Tiefen/Stencilanlagen; die Breite und Höhe basieren auf der des [`GPUTexture`](/de/docs/Web/API/GPUTexture), von der ihre `view`s stammen.

## Beispiele

### Einfaches Snippet

In einem typischen Canvas-Render könnte folgendes verwendet werden, um die Breite und Höhe der gerenderten Grafiken zu halbieren:

```js
passEncoder.setViewport(0, 0, canvas.width / 2, canvas.height / 2, 0, 1);
```

### Im Kontext

Im WebGPU-Beispiel [reversedZ example](https://webgpu.github.io/webgpu-samples/samples/reversedZ/) wird `setViewport` mehrmals verwendet, um den Viewport für die verschiedenen Render-Passes zu setzen. Studieren Sie die Beispiel-Codelisting für den vollständigen Kontext.

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
