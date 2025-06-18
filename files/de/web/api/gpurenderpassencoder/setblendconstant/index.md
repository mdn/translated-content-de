---
title: "GPURenderPassEncoder: setBlendConstant()-Methode"
short-title: setBlendConstant()
slug: Web/API/GPURenderPassEncoder/setBlendConstant
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setBlendConstant()`**-Methode des [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Interfaces setzt die konstante Mischfarbe und Alpha-Werte, die mit den Blendfaktoren `"constant"` und `"one-minus-constant"` verwendet werden (wie im Deskriptor der Methode [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) im `blend`-Eigenschaft gesetzt).

## Syntax

```js-nolint
setBlendConstant(color)
```

### Parameter

- `color`

  - : Ein Objekt oder Array, das die Farbe repräsentiert, die beim Mischen verwendet werden soll — die `r`, `g`, `b` und `a` Komponenten werden als Gleitkommazahlen zwischen 0.0 und 1.0 dargestellt.

    Nachfolgend ein Objektbeispiel:

    ```js
    const color = { r: 0.0, g: 0.5, b: 1.0, a: 1.0 };
    ```

    Das äquivalente Array würde folgendermaßen aussehen:

    ```js
    const color = [0.0, 0.5, 1.0, 1.0];
    ```

> [!NOTE]
> Wenn kein Aufruf von `setBlendConstant()` erfolgt, wird der konstante Mischfarbwert für jeden Renderdurchlauf standardmäßig auf `(0, 0, 0, 0)` gesetzt.

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
