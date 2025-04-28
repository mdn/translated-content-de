---
title: "GPURenderPassEncoder: setBlendConstant() Methode"
short-title: setBlendConstant()
slug: Web/API/GPURenderPassEncoder/setBlendConstant
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setBlendConstant()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle legt die konstante Mischfarbe und Alphawerte fest, die mit den `"constant"` und `"one-minus-constant"` Blendfaktoren verwendet werden (wie im Deskriptor der [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) Methode, in der `blend`-Eigenschaft, festgelegt).

## Syntax

```js-nolint
setBlendConstant(color)
```

### Parameter

- `color`

  - : Ein Objekt oder Array, das die beim Mischen zu verwendende Farbe darstellt — die `r`, `g`, `b` und `a` Komponenten werden als Gleitkommazahlen zwischen 0.0 und 1.0 dargestellt.

    Im Folgenden ist ein Beispiel für ein Objekt:

    ```js
    const color = { r: 0.0, g: 0.5, b: 1.0, a: 1.0 };
    ```

    Das entsprechende Array sähe folgendermaßen aus:

    ```js
    const color = [0.0, 0.5, 1.0, 1.0];
    ```

> [!NOTE]
> Wenn kein `setBlendConstant()`-Aufruf erfolgt, sind die Standardwerte für die konstante Mischfarbe `(0, 0, 0, 0)` für jeden Render-Pass.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

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
