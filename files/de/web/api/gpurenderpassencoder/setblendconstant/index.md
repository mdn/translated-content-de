---
title: "GPURenderPassEncoder: setBlendConstant()-Methode"
short-title: setBlendConstant()
slug: Web/API/GPURenderPassEncoder/setBlendConstant
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setBlendConstant()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle setzt die konstante Farb- und Alphawerte, die mit den Blendfaktoren `"constant"` und `"one-minus-constant"` verwendet werden (wie im Deskriptor der [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline)-Methode festgelegt, in der `blend`-Eigenschaft).

## Syntax

```js-nolint
setBlendConstant(color)
```

### Parameter

- `color`

  - : Ein Objekt oder Array, das die Farbe darstellt, die beim Blenden verwendet werden soll — die Komponenten `r`, `g`, `b` und `a` werden als Gleitkommazahlen zwischen 0,0 und 1,0 dargestellt.

    Was folgt, ist ein Objektbeispiel:

    ```js
    const color = { r: 0.0, g: 0.5, b: 1.0, a: 1.0 };
    ```

    Das entsprechende Array würde folgendermaßen aussehen:

    ```js
    const color = [0.0, 0.5, 1.0, 1.0];
    ```

> [!NOTE]
> Wenn kein `setBlendConstant()`-Aufruf erfolgt, wird der Standardwert der Blend-Konstantenfarbe für jeden Render-Durchgang auf `(0, 0, 0, 0)` gesetzt.

### Rückgabewert

Keinen ({{jsxref("Undefined")}}).

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
