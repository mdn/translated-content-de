---
title: "GPURenderBundleEncoder: setVertexBuffer()-Methode"
short-title: setVertexBuffer()
slug: Web/API/GPURenderBundleEncoder/setVertexBuffer
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setVertexBuffer()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle setzt oder entfernt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) für den angegebenen Slot, der Vertex-Daten für nachfolgende Zeichenbefehle bereitstellt.

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
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der den Puffer mit den zu verwendenden Vertex-Daten für nachfolgende Zeichenbefehle darstellt, oder `null`, in welchem Fall ein zuvor gesetzter Puffer im angegebenen Slot entfernt wird.
- `offset` {{optional_inline}}
  - : Eine Zahl, die den Versatz in Bytes in `buffer` darstellt, wo die Vertex-Daten beginnen. Falls weggelassen, ist der Standardwert von `offset` 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes der in `buffer` enthaltenen Vertex-Daten darstellt. Falls weggelassen, ist der Standardwert von `size` die [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `buffers` - `offset`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`setVertexBuffer()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) wird ungültig:

- Die [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) des `buffers` enthält das `GPUBufferUsage.VERTEX`-Flag.
- `slot` ist kleiner als das Limit [`maxVertexBuffers`](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- `offset` + `size` ist kleiner oder gleich der [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `buffers`.
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

Der obige Ausschnitt stammt aus dem WebGPU Samples [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/).

### Vertex-Buffer entfernen

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
