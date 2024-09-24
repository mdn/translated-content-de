---
title: "GPURenderPassEncoder: Methode setVertexBuffer()"
short-title: setVertexBuffer()
slug: Web/API/GPURenderPassEncoder/setVertexBuffer
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setVertexBuffer()`**-Methode der {{domxref("GPURenderPassEncoder")}}-Schnittstelle setzt oder entfernt den aktuellen {{domxref("GPUBuffer")}} für den angegebenen Slot, der Vertex-Daten für nachfolgende Zeichenbefehle bereitstellen wird.

## Syntax

```js-nolint
setVertexBuffer(slot, buffer, offset, size)
```

### Parameter

- `slot`
  - : Eine Zahl, die sich auf den Vertex-Buffer-Slot bezieht, für den der Vertex-Buffer gesetzt werden soll.
- `buffer`
  - : Ein {{domxref("GPUBuffer")}}, der den Puffer repräsentiert, der die Vertex-Daten für nachfolgende Zeichenbefehle enthält, oder `null`, in diesem Fall wird jeder zuvor gesetzte Puffer im angegebenen Slot entfernt.
- `offset` {{optional_inline}}
  - : Eine Zahl, die die Verschiebung in Bytes in den `buffer` angibt, wo die Vertex-Daten beginnen. Wenn weggelassen, ist der Standardwert von `offset` 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes der im `buffer` enthaltenen Vertex-Daten angibt. Wenn weggelassen, ist der Standardwert von `size` die Größe des `buffer` {{domxref("GPUBuffer.size")}} minus `offset`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setVertexBuffer()`** aufgerufen wird, ansonsten wird ein {{domxref("GPUValidationError")}} erzeugt und der {{domxref("GPURenderPassEncoder")}} wird ungültig:

- Der {{domxref("GPUBuffer.usage")}} des `buffer` enthält das `GPUBufferUsage.VERTEX`-Flag.
- `slot` ist kleiner als das `maxVertexBuffers`-{{domxref("GPUSupportedLimits", "limit", "", "nocode")}} des {{domxref("GPUDevice")}}.
- `offset` + `size` ist kleiner oder gleich der {{domxref("GPUBuffer.size")}} des `buffer`.
- `offset` ist ein Vielfaches von 4.

## Beispiele

### Vertex-Buffer setzen

In unserem [Basis-Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen {{domxref("GPUCommandEncoder")}} aufgezeichnet. Die meisten dieser Befehle stammen von dem `GPURenderPassEncoder`, der über {{domxref("GPUCommandEncoder.beginRenderPass()")}} erstellt wurde. `setVertexBuffer()` wird je nach Bedarf verwendet, um die Quelle der Vertex-Daten zu setzen.

```js
// ...

const renderPipeline = device.createRenderPipeline(pipelineDescriptor);

// Erstellen Sie einen GPUCommandEncoder, um Befehle an die GPU zu senden
// Hinweis: Renderpass-Deskriptor, Befehlsencoder usw. werden nach der Verwendung zerstört, ein neues wird für jeden Frame benötigt.
const commandEncoder = device.createCommandEncoder();

// Erstellen Sie einen GPURenderPassDescriptor, um WebGPU mitzuteilen, in welche Textur gezeichnet werden soll, und leiten Sie den Render-Pass ein
const renderPassDescriptor = {
  colorAttachments: [
    {
      clearValue: clearColor,
      loadOp: "clear",
      storeOp: "store",
      view: context.getCurrentTexture().createView(),
    },
  ],
};

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// Zeichnen Sie das Dreieck
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

// Beenden Sie den Render-Pass
passEncoder.end();

// Beenden Sie den Frame, indem Sie ein Array von Befehlsbusfpuer an die Befehlswarteschlange zur Ausführung übergeben
device.queue.submit([commandEncoder.finish()]);

// ...
```

### Vertex-Buffer entfernen

```js
// Vertex-Buffer in Slot 0 setzen
passEncoder.setVertexBuffer(0, vertexBuffer);

// Später, Vertex-Buffer in Slot 0 entfernen
passEncoder.setVertexBuffer(0, null);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
