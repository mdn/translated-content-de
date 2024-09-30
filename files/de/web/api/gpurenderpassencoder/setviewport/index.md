---
title: "GPURenderPassEncoder: setViewport()-Methode"
short-title: setViewport()
slug: Web/API/GPURenderPassEncoder/setViewport
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setViewport()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle setzt den Viewport, der während der Rasterisierungsstufe verwendet wird, um von normalisierten Gerätekoordinaten zu Viewport-Koordinaten linear zu konvertieren.

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
> Wenn kein `setViewport()`-Aufruf vorgenommen wird, lauten die Standardwerte `(0, 0, attachment width, attachment height, 0, 1)` für jeden Render-Pass.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setViewport()`** aufgerufen wird, da sonst ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt wird und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) ungültig wird:

- `x`, `y`, `width` und `height` sind alle größer als oder gleich 0.
- `x` + `width` ist kleiner als oder gleich der Breite der Render-Anhänge des Render-Passes (siehe Hinweis unten).
- `y` + `height` ist kleiner als oder gleich der Höhe der Render-Anhänge des Render-Passes (siehe Hinweis unten).
- `minDepth` und `maxDepth` liegen beide im Bereich 0.0–1.0 inklusive.
- `minDepth` ist kleiner als `maxDepth`.

> [!NOTE]
> Siehe die in der Beschreibung von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegebenen Farb- und Tiefen-/Stencil-Anhänge; die Breite und Höhe basieren auf der des [`GPUTexture`](/de/docs/Web/API/GPUTexture), von dem ihre `view`s stammen.

## Beispiele

### Grundlegender Ausschnitt

Bei einem typischen Canvas-Render könnte das Folgende verwendet werden, um die Breite und Höhe der gerenderten Grafiken zu halbieren:

```js
passEncoder.setViewport(0, 0, canvas.width / 2, canvas.height / 2, 0, 1);
```

### Im Kontext

Im WebGPU-Samples-[reversedZ example](https://webgpu.github.io/webgpu-samples/samples/reversedZ/) wird `setViewport` mehrmals verwendet, um den Viewport für die verschiedenen Render-Passes einzustellen. Studieren Sie die Beispielcodeliste für den vollen Kontext.

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
