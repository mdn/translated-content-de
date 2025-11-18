---
title: "GPURenderPassEncoder: setBlendConstant() Methode"
short-title: setBlendConstant()
slug: Web/API/GPURenderPassEncoder/setBlendConstant
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setBlendConstant()`** Methode der
[`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) Schnittstelle setzt die konstante Mischfarbe und Alphawerte, die mit den Mischfaktoren `"constant"` und `"one-minus-constant"` verwendet werden (wie im Deskriptor der Methode [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline), in der Eigenschaft `blend`, festgelegt).

## Syntax

```js-nolint
setBlendConstant(color)
```

### Parameter

- `color`
  - : Ein Objekt oder Array, das die beim Mischen verwendete Farbe darstellt — die Komponenten `r`, `g`, `b` und `a` werden als Gleitkommazahlen zwischen 0.0 und 1.0 dargestellt.

    Nachfolgend ein Beispiel für ein Objekt:

    ```js
    const color = { r: 0.0, g: 0.5, b: 1.0, a: 1.0 };
    ```

    Das Array-Äquivalent würde folgendermaßen aussehen:

    ```js
    const color = [0.0, 0.5, 1.0, 1.0];
    ```

> [!NOTE]
> Wenn kein `setBlendConstant()` Aufruf gemacht wird, ist der Standardwert der Mischkonstantenfarbe für jeden Render-Pass `(0, 0, 0, 0)`.

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
