---
title: "GPURenderPassEncoder: setScissorRect()-Methode"
short-title: setScissorRect()
slug: Web/API/GPURenderPassEncoder/setScissorRect
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setScissorRect()`**-Methode der {{domxref("GPURenderPassEncoder")}}-Schnittstelle legt das Scherenrechteck fest, das während der Rasterisierungsstufe verwendet wird. Nach der Transformation in die Viewport-Koordinaten werden alle Fragmente, die außerhalb des Scherenrechtecks liegen, verworfen.

## Syntax

```js-nolint
setScissorRect(x, y, width, height)
```

### Parameter

- `x`
  - : Eine Zahl, die den minimalen X-Wert des Scherenrechtecks in Pixeln darstellt.
- `y`
  - : Eine Zahl, die den minimalen Y-Wert des Scherenrechtecks in Pixeln darstellt.
- `width`
  - : Eine Zahl, die die Breite des Scherenrechtecks in Pixeln darstellt.
- `height`
  - : Eine Zahl, die die Höhe des Scherenrechtecks in Pixeln darstellt.

> [!NOTE]
> Wenn kein Aufruf von `setScissorRect()` erfolgt, sind die Standardwerte `(0, 0, attachment width, attachment height)` für jeden Render-Pass.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`setViewport()`** erfüllt sein, ansonsten wird ein {{domxref("GPUValidationError")}} generiert und der {{domxref("GPURenderPassEncoder")}} wird ungültig:

- `x` + `width` ist kleiner oder gleich der Breite der Render-Anhänge des Render-Passes (siehe Hinweis unten).
- `y` + `height` ist kleiner oder gleich der Höhe der Render-Anhänge des Render-Passes (siehe Hinweis unten).

> [!NOTE]
> Beachten Sie die Farb- und Tiefen-/Stencil-Anhänge, die im Descriptor von {{domxref("GPUCommandEncoder.beginRenderPass()")}} angegeben sind; die Breite und Höhe basieren auf der des {{domxref("GPUTexture")}}, von der ihre `view`s stammen.

## Beispiele

### Einfacher Codeausschnitt

Bei einer typischen Leinwanddarstellung könnte Folgendes verwendet werden, um jegliches Rendering außerhalb des oberen linken Viertels der Leinwand zu verwerfen:

```js
passEncoder.setScissorRect(0, 0, canvas.width / 2, canvas.height / 2);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
