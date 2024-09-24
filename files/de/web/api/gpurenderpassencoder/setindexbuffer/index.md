---
title: "GPURenderPassEncoder: Methode setIndexBuffer()"
short-title: setIndexBuffer()
slug: Web/API/GPURenderPassEncoder/setIndexBuffer
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setIndexBuffer()`**-Methode der {{domxref("GPURenderPassEncoder")}}-Schnittstelle setzt den aktuellen {{domxref("GPUBuffer")}}, der Indexdaten für nachfolgende Zeichnungskommandos bereitstellen wird.

## Syntax

```js-nolint
setIndexBuffer(buffer, indexFormat, offset, size)
```

### Parameter

- `buffer`
  - : Ein {{domxref("GPUBuffer")}}, der den Puffer darstellt, der die zu verwendenden Indexdaten für nachfolgende Zeichnungskommandos enthält.
- `indexFormat`
  - : Ein enumerierter Wert, der das Format der in `buffer` enthaltenen Indexdaten definiert. Mögliche Werte sind:
    - `"uint16"`
    - `"uint32"`
- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes in `buffer` darstellt, an dem die Indexdaten beginnen. Wenn nicht angegeben, ist der Standardwert für `offset` 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes der in `buffer` enthaltenen Indexdaten darstellt. Wenn nicht angegeben, ist der Standardwert für `size` die `buffer`'s {{domxref("GPUBuffer.size")}} - `offset`.

#### Hinweis zum indexFormat

`indexFormat` bestimmt sowohl den Datentyp der Indexwerte in einem Puffer als auch, wenn es mit einer Pipeline verwendet wird, die eine Streifen-Primitiv-Topologie ("line-strip" oder "triangle-strip") spezifiziert, den Primitivneustartwert. Der Primitivneustartwert ist ein Indexwert, der anzeigt, dass ein neues Primitive gestartet werden soll, anstatt den Streifen mit den zuvor indizierten Vertices weiter zu konstruieren. Der Wert ist `0xFFFF` für `"uint16"` oder `0xFFFFFFFF` für `"uint32"`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setIndexBuffer()`** aufgerufen wird, sonst wird ein {{domxref("GPUValidationError")}} generiert, und der {{domxref("GPURenderPassEncoder")}} wird ungültig:

- `buffer`'s {{domxref("GPUBuffer.usage")}} enthält das `GPUBufferUsage.INDEX`-Flag.
- `offset` + `size` ist kleiner oder gleich der `buffer`'s {{domxref("GPUBuffer.size")}}.
- `offset` ist ein Vielfaches der Byte-Größe von `indexFormat` (2 für `"uint16"`, 4 für `"uint32"`).

## Beispiele

Im WebGPU-Beispiel [Shadow Mapping](https://webgpu.github.io/webgpu-samples/samples/shadowMapping/) wird `setIndexBuffer()` in zwei separaten Render-Passes in jedem Animationsrahmen verwendet, eines zum Zeichnen des Hauptmodells und eines zum Zeichnen seines Schattens. Studieren Sie die Beispiel-Codeauflistung für den vollständigen Kontext.

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
