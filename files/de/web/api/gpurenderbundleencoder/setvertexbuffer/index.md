---
title: "GPURenderBundleEncoder: setVertexBuffer()-Methode"
short-title: setVertexBuffer()
slug: Web/API/GPURenderBundleEncoder/setVertexBuffer
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setVertexBuffer()`**-Methode der {{domxref("GPURenderBundleEncoder")}}-Schnittstelle setzt oder hebt den aktuellen {{domxref("GPUBuffer")}}-Status für den angegebenen Slot auf, der Vertexdaten für nachfolgende Zeichnungsbefehle bereitstellen wird.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent auf {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.setVertexBuffer", "setVertexBuffer()")}}.

## Syntax

```js-nolint
setVertexBuffer(slot, buffer, offset, size)
```

### Parameter

- `slot`
  - : Eine Zahl, die den Vertex-Buffer-Slot referenziert, um den Vertex-Buffer festzulegen.
- `buffer`
  - : Ein {{domxref("GPUBuffer")}}, der den Puffer darstellt, der die Vertexdaten für nachfolgende Zeichnungsbefehle enthält, oder `null`, in welchem Fall ein zuvor gesetzter Puffer im angegebenen Slot aufgehoben wird.
- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes in `buffer` darstellt, wo die Vertexdaten beginnen. Falls weggelassen, ist der Standardwert von `offset` 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes der in `buffer` enthaltenen Vertexdaten darstellt. Falls weggelassen, ist der Standardwert von `size` die {{domxref("GPUBuffer.size")}} des `buffer` - `offset`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setVertexBuffer()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und der {{domxref("GPURenderBundleEncoder")}} wird ungültig:

- Das {{domxref("GPUBuffer.usage")}}-Attribut von `buffer` enthält das `GPUBufferUsage.VERTEX`-Flag.
- `slot` ist kleiner als das `maxVertexBuffers`-{{domxref("GPUSupportedLimits", "Limit", "", "nocode")}} des {{domxref("GPUDevice")}}.
- `offset` + `size` ist kleiner oder gleich der {{domxref("GPUBuffer.size")}} des `buffer`.
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

### Vertex-Buffer aufheben

```js
// Vertex-Buffer in Slot 0 setzen
passEncoder.setVertexBuffer(0, vertexBuffer);

// Später den Vertex-Buffer in Slot 0 aufheben
passEncoder.setVertexBuffer(0, null);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
