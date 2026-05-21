---
title: "GPURenderPassEncoder: setBlendConstant() Methode"
short-title: setBlendConstant()
slug: Web/API/GPURenderPassEncoder/setBlendConstant
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setBlendConstant()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle setzt die konstante Blendfarbe und Alphawerte, die mit den Blendfaktoren `"constant"` und `"one-minus-constant"` verwendet werden (wie im Deskriptor der Methode [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) in der `blend`-Eigenschaft festgelegt).

## Syntax

```js-nolint
setBlendConstant(color)
```

### Parameter

- `color`
  - : Ein Objekt oder Array, das die Farbe darstellt, die beim Blenden verwendet wird — die Komponenten `r`, `g`, `b` und `a` werden als Gleitkommazahlen zwischen 0.0 und 1.0 dargestellt.

    Was folgt, ist ein Objektbeispiel:

    ```js
    const color = { r: 0.0, g: 0.5, b: 1.0, a: 1.0 };
    ```

    Das Array-Äquivalent würde so aussehen:

    ```js
    const color = [0.0, 0.5, 1.0, 1.0];
    ```

> [!NOTE]
> Wenn kein `setBlendConstant()`-Aufruf gemacht wird, ist der Standardwert der Blendkonstantenfarbe `(0, 0, 0, 0)` für jeden Renderpass.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// …

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.setBlendConstant([1.0, 0.0, 0.0, 1.0]);
passEncoder.draw(3);

passEncoder.end();

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
