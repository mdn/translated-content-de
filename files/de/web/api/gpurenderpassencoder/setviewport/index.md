---
title: "GPURenderPassEncoder: setViewport()-Methode"
short-title: setViewport()
slug: Web/API/GPURenderPassEncoder/setViewport
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setViewport()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle setzt den Viewport, der während der Rasterisierungsphase verwendet wird, um linear von normalisierten Gerätekoordinaten zu Viewport-Koordinaten zu übertragen.

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
> Wenn kein Aufruf von `setViewport()` erfolgt, sind die Standardwerte `(0, 0, Anhangsbreite, Anhangshöhe, 0, 1)` für jeden Renderpass.

### Rückgabewert

Keine ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`setViewport()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- `x`, `y`, `width` und `height` sind alle größer oder gleich 0.
- `x` + `width` ist kleiner oder gleich der Breite der Render-Anhänge des Renderpasses (siehe nachstehende Anmerkung).
- `y` + `height` ist kleiner oder gleich der Höhe der Render-Anhänge des Renderpasses (siehe nachstehende Anmerkung).
- `minDepth` und `maxDepth` liegen beide im Bereich 0,0–1,0 inklusive.
- `minDepth` ist kleiner als `maxDepth`.

> [!NOTE]
> Siehe die im Deskriptor von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegebenen Farb- und Tiefen-/Stencilanlagen; die Breite und Höhe basieren auf dem [`GPUTexture`](/de/docs/Web/API/GPUTexture), aus dem deren `view`s stammen.

## Beispiele

### Einfaches Beispiel

In einer typischen Canvas-Render könnte folgendes verwendet werden, um die Breite und Höhe der gerenderten Grafiken zu halbieren:

```js
passEncoder.setViewport(0, 0, canvas.width / 2, canvas.height / 2, 0, 1);
```

### Im Kontext

Im WebGPU Samples [reversedZ-Beispiel](https://webgpu.github.io/webgpu-samples/samples/reversedZ/) wird `setViewport` mehrmals verwendet, um den Viewport für die verschiedenen Render-Pässe zu setzen. Studieren Sie die Beispielcode-Auflistung für den vollständigen Kontext.

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
