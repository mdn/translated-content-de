---
title: "GPURenderPassEncoder: setIndexBuffer() Methode"
short-title: setIndexBuffer()
slug: Web/API/GPURenderPassEncoder/setIndexBuffer
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setIndexBuffer()`** Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) Schnittstelle legt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) fest, der Indexpunkte für nachfolgende Zeichenbefehle bereitstellen wird.

## Syntax

```js-nolint
setIndexBuffer(buffer, indexFormat, offset, size)
```

### Parameter

- `buffer`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der den Puffer darstellt, der die Indexpunkte für nachfolgende Zeichenbefehle enthält.
- `indexFormat`
  - : Ein enumerierter Wert, der das Format der im `buffer` enthaltenen Indexpunkte definiert. Mögliche Werte sind:
    - `"uint16"`
    - `"uint32"`
- `offset` {{optional_inline}}
  - : Eine Zahl, die den Versatz in Bytes in den `buffer` angibt, an dem die Indexpunkte beginnen. Wenn weggelassen, wird `offset` auf 0 gesetzt.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes der im `buffer` enthaltenen Indexpunkte angibt. Wenn weggelassen, wird `size` auf die `buffer`'s [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) - `offset` gesetzt.

#### Hinweis zu indexFormat

`indexFormat` bestimmt sowohl den Datentyp der Indexwerte in einem Puffer als auch, wenn es mit einer Pipeline verwendet wird, die eine Streifen-Primitive-Topologie (`"line-strip"` oder `"triangle-strip"`) spezifiziert, den Primitive-Restart-Wert. Der Primitive-Restart-Wert ist ein Indexwert, der angibt, dass ein neues Primitive gestartet werden sollte, anstatt das Streifen mit den vorher indizierten Scheitelpunkten weiter zu konstruieren. Der Wert ist `0xFFFF` für `"uint16"` oder `0xFFFFFFFF` für `"uint32"`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setIndexBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- `buffer`'s [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) enthält das `GPUBufferUsage.INDEX` Flag.
- `offset` + `size` ist kleiner oder gleich der `buffer`'s [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size).
- `offset` ist ein Vielfaches der Bytegröße des `indexFormat` (2 für `"uint16"`, 4 für `"uint32"`).

## Beispiele

Im WebGPU Samples [Shadow Mapping](https://webgpu.github.io/webgpu-samples/samples/shadowMapping/) Beispiel wird `setIndexBuffer()` in zwei separaten Render-Passes in jedem Animationsframe verwendet, einer, um das Hauptmodell zu zeichnen, und einer, um seinen Schatten zu zeichnen. Studieren Sie das Beispiel-Code-Listing für den vollständigen Kontext.

```js
// …

const commandEncoder = device.createCommandEncoder();
{
  const shadowPass = commandEncoder.beginRenderPass(shadowPassDescriptor);
  shadowPass.setPipeline(shadowPipeline);
  shadowPass.setBindGroup(0, sceneBindGroupForShadow);
  shadowPass.setBindGroup(1, modelBindGroup);
  shadowPass.setVertexBuffer(0, vertexBuffer);
  shadowPass.setIndexBuffer(indexBuffer, "uint16");
  shadowPass.drawIndexed(indexCount);

  shadowPass.end();
}
{
  const renderPass = commandEncoder.beginRenderPass(renderPassDescriptor);
  renderPass.setPipeline(pipeline);
  renderPass.setBindGroup(0, sceneBindGroupForRender);
  renderPass.setBindGroup(1, modelBindGroup);
  renderPass.setVertexBuffer(0, vertexBuffer);
  renderPass.setIndexBuffer(indexBuffer, "uint16");
  renderPass.drawIndexed(indexCount);

  renderPass.end();
}

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
