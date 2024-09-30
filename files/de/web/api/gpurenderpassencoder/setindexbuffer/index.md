---
title: "GPURenderPassEncoder: Methode setIndexBuffer()"
short-title: setIndexBuffer()
slug: Web/API/GPURenderPassEncoder/setIndexBuffer
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setIndexBuffer()`**-Methode des [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Interfaces legt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) fest, der Indexdaten für nachfolgende Zeichenbefehle bereitstellen wird.

## Syntax

```js-nolint
setIndexBuffer(buffer, indexFormat, offset, size)
```

### Parameter

- `buffer`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der den Puffer darstellt, der die Indexdaten enthält, die für nachfolgende Zeichenbefehle verwendet werden.
- `indexFormat`
  - : Ein aufgelisteter Wert, der das Format der im `buffer` enthaltenen Indexdaten definiert. Mögliche Werte sind:
    - `"uint16"`
    - `"uint32"`
- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes in den `buffer` darstellt, wo die Indexdaten beginnen. Wenn weggelassen, ist der Standardwert von `offset` 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes der im `buffer` enthaltenen Indexdaten darstellt. Wenn weggelassen, entspricht `size` der [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `buffers` minus `offset`.

#### Hinweis zu indexFormat

`indexFormat` bestimmt sowohl den Datentyp der Indexwerte in einem Puffer als auch, wenn es mit einer Pipeline verwendet wird, die eine Streifen-Primitive-Topologie (`"line-strip"` oder `"triangle-strip"`) angibt, den Primitive-Restart-Wert. Der Primitive-Restart-Wert ist ein Indexwert, der anzeigt, dass eine neue Primitive gestartet werden soll, anstatt den Streifen mit den vorher indizierten Scheitelpunkten fortzusetzen. Der Wert ist `0xFFFF` für `"uint16"` oder `0xFFFFFFFF` für `"uint32"`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setIndexBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- `buffer`'s [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) enthält das `GPUBufferUsage.INDEX`-Flag.
- `offset` + `size` ist kleiner oder gleich der [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `buffers`.
- `offset` ist ein Vielfaches der Bytegröße von `indexFormat` (2 für `"uint16"`, 4 für `"uint32"`).

## Beispiele

Im WebGPU-Beispiel [Shadow Mapping](https://webgpu.github.io/webgpu-samples/samples/shadowMapping/) wird `setIndexBuffer()` in zwei separaten Render-Passagen in jedem Animationsframe verwendet, eine zum Zeichnen des Hauptmodells und eine, um seinen Schatten zu zeichnen. Untersuchen Sie die Beispielcode-Auflistung für den vollständigen Kontext.

```js
// ...

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

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
