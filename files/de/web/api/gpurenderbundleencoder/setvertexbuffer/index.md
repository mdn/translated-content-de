---
title: "GPURenderBundleEncoder: setVertexBuffer()-Methode"
short-title: setVertexBuffer()
slug: Web/API/GPURenderBundleEncoder/setVertexBuffer
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setVertexBuffer()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle setzt oder entfernt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) für den angegebenen Slot, der die Vertex-Daten für nachfolgende Zeichnungsbefehle bereitstellen wird.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer).

## Syntax

```js-nolint
setVertexBuffer(slot, buffer, offset, size)
```

### Parameter

- `slot`
  - : Eine Zahl, die auf den Vertex-Puffer-Slot verweist, für den der Vertex-Puffer gesetzt werden soll.
- `buffer`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der den Puffer darstellt, der die Vertex-Daten für nachfolgende Zeichnungsbefehle enthält, oder `null`, in welchem Fall ein zuvor gesetzter Puffer im angegebenen Slot entfernt wird.
- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes in `buffer` darstellt, wo die Vertex-Daten beginnen. Wenn ausgelassen, wird `offset` standardmäßig auf 0 gesetzt.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes der Vertex-Daten im `buffer` darstellt. Wenn ausgelassen, wird `size` standardmäßig auf die `buffer`'s [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) - `offset` gesetzt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setVertexBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) wird ungültig:

- `buffer`'s [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) enthält das `GPUBufferUsage.VERTEX`-Flag.
- `slot` ist kleiner als das [`GPUDevice`](/de/docs/Web/API/GPUDevice) `maxVertexBuffers` [Limit](/de/docs/Web/API/GPUSupportedLimits).
- `offset` + `size` ist kleiner oder gleich `buffer`'s [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size).
- `offset` ist ein Vielfaches von 4.

## Beispiele

### Vertex-Puffer setzen

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

Der obige Ausschnitt stammt aus dem WebGPU-Beispiel [Animometer example](https://webgpu.github.io/webgpu-samples/samples/animometer/).

### Vertex-Puffer entfernen

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
