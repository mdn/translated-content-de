---
title: "GPURenderBundleEncoder: setVertexBuffer() Methode"
short-title: setVertexBuffer()
slug: Web/API/GPURenderBundleEncoder/setVertexBuffer
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setVertexBuffer()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) Schnittstelle setzt oder entfernt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) für den angegebenen Slot, der Vertex-Daten für nachfolgende Zeichenbefehle bereitstellen wird.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer).

## Syntax

```js-nolint
setVertexBuffer(slot, buffer, offset, size)
```

### Parameter

- `slot`
  - : Eine Zahl, die den Vertex-Buffer-Slot referenziert, für den der Vertex-Buffer gesetzt werden soll.
- `buffer`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der den Puffer darstellt, der die Vertex-Daten für nachfolgende Zeichenbefehle enthält, oder `null`, in welchem Fall ein zuvor gesetzter Puffer im angegebenen Slot entfernt wird.
- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes in den `buffer` darstellt, wo die Vertex-Daten beginnen. Wenn weggelassen, ist der Standardwert für `offset` 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe der im `buffer` enthaltenen Vertex-Daten in Bytes darstellt. Wenn weggelassen, ist der Standardwert für `size` die Größe von [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `buffer` - `offset`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setVertexBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) wird ungültig:

- [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) des `buffer` enthält das `GPUBufferUsage.VERTEX`-Flag.
- `slot` ist kleiner als das `maxVertexBuffers`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- `offset` + `size` ist kleiner oder gleich der Größe des `buffer`'s [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size).
- `offset` ist ein Vielfaches von 4.

## Beispiele

### Vertex-Buffer setzen

```js
function recordRenderPass(passEncoder) {
  if (settings.dynamicOffsets) {
    passEncoder.setPipeline(dynamicPipeline);
  } else {
    passEncoder.setPipeline(pipeline);
  }
  passEncoder.setVertexBuffer(0, vertexBuffer);
  passEncoder.setBindGroup(0, timeBindGroup);
  const dynamicOffsets = [0];
  for (let i = 0; i < numTriangles; ++i) {
    if (settings.dynamicOffsets) {
      dynamicOffsets[0] = i * alignedUniformBytes;
      passEncoder.setBindGroup(1, dynamicBindGroup, dynamicOffsets);
    } else {
      passEncoder.setBindGroup(1, bindGroups[i]);
    }
    passEncoder.draw(3, 1, 0, 0);
  }
}
```

Der obige Code-Snippet stammt aus dem WebGPU Samples [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/).

### Vertex-Buffer aufheben

```js
// Set vertex buffer in slot 0
passEncoder.setVertexBuffer(0, vertexBuffer);

// Later, unset vertex buffer in slot 0
passEncoder.setVertexBuffer(0, null);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
