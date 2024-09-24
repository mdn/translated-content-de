---
title: "GPURenderPassEncoder: setBlendConstant()-Methode"
short-title: setBlendConstant()
slug: Web/API/GPURenderPassEncoder/setBlendConstant
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setBlendConstant()`**-Methode der {{domxref("GPURenderPassEncoder")}}-Schnittstelle legt die konstante Mischfarbe und Alpha-Werte fest, die mit den `"constant"` und `"one-minus-constant"` Mischfaktoren verwendet werden (wie im Deskriptor der {{domxref("GPUDevice.createRenderPipeline()")}}-Methode, in der `blend`-Eigenschaft, festgelegt).

## Syntax

```js-nolint
setBlendConstant(color)
```

### Parameter

- `color`

  - : Ein Objekt oder Array, das die zu verwendende Farbe beim Mischen darstellt — die `r`, `g`, `b` und `a` Komponenten sind als Gleitkommazahlen zwischen 0,0 und 1,0 dargestellt.

    Hier folgt ein Beispiel für ein Objekt:

    ```js
    const color = { r: 0.0, g: 0.5, b: 1.0, a: 1.0 };
    ```

    Das äquivalente Array würde so aussehen:

    ```js
    const color = [0.0, 0.5, 1.0, 1.0];
    ```

> [!NOTE]
> Wenn kein `setBlendConstant()`-Aufruf erfolgt, werden die Mischkonstanten-Farbwerte für jede Render-Pass-Standard auf `(0, 0, 0, 0)` gesetzt.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

```js
// ...

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.setBlendConstant([1.0, 0.0, 0.0, 1.0]);
passEncoder.draw(3);

passEncoder.end();

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
