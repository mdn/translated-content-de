---
title: "GPURenderPassEncoder: drawIndexedIndirect()-Methode"
short-title: drawIndexedIndirect()
slug: Web/API/GPURenderPassEncoder/drawIndexedIndirect
l10n:
  sourceCommit: e6a58084cebdcbc372279b68df85b7b3c4198327
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`drawIndexedIndirect()`**-Methode der {{domxref("GPURenderPassEncoder")}}-Schnittstelle zeichnet indizierte Primitive unter Verwendung von Parametern, die aus einem {{domxref("GPUBuffer")}} gelesen werden.

## Syntax

```js-nolint
drawIndexedIndirect(indirectBuffer, indirectOffset)
```

### Parameter

- `indirectBuffer`

  - : Ein {{domxref("GPUBuffer")}}, der die `indexCount`, `instanceCount`, `firstIndex`, `baseVertex` und `firstInstance` Werte enthält, die für die Durchführung der Zeichnung erforderlich sind. Der Puffer muss einen dicht gepackten Block von fünf 32-Bit-Integer-Werten enthalten, die die Werte darstellen (insgesamt 20 Byte), in der gleichen Reihenfolge wie die Argumente für {{domxref("GPURenderPassEncoder.drawIndexed()")}}. Zum Beispiel:

    ```js
    const uint32 = new Uint32Array(5);
    uint32[0] = 3; // Der indexCount-Wert
    uint32[1] = 1; // Der instanceCount-Wert
    uint32[2] = 0; // Der firstIndex-Wert
    uint32[3] = 0; // Der baseVertex-Wert
    uint32[4] = 0; // Der firstInstance-Wert

    // Werte in einen GPUBuffer schreiben
    device.queue.writeBuffer(buffer, 0, uint32, 0, uint32.length);
    ```

    Der Wert, der `firstInstance` entspricht, muss 0 sein, es sei denn, das `indirect-first-instance`-Feature ist aktiviert. Wenn das `indirect-first-instance`-Feature nicht aktiviert ist und `firstInstance` nicht null ist, wird der `drawIndexedIndirect()`-Aufruf als No-Op behandelt.

- `indirectOffset`
  - : Der Offset in Bytes in `indirectBuffer`, ab dem die Wertedaten beginnen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`drawIndirect()`** aufgerufen wird, sonst wird ein {{domxref("GPUValidationError")}} generiert und der {{domxref("GPURenderPassEncoder")}} wird ungültig:

- Der {{domxref("GPUBuffer.usage")}} von `indirectBuffer` enthält das `GPUBufferUsage.INDIRECT`-Flag.
- `indirectOffset` plus die gesamte durch die Wertparameter im `indirectBuffer` spezifizierte Größe ist kleiner als oder gleich der {{domxref("GPUBuffer.size")}} von `indirectBuffer`.
- `indirectOffset` ist ein Vielfaches von 4.

## Beispiele

```js
// ...

// Erstellen einer GPURenderPassEncoder
const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// Pipeline und Vertex-Buffer setzen
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.setIndexBuffer(indexBuffer, "uint16");

// drawIndexedIndirect-Werte erstellen
const uint32 = new Uint32Array(5);
uint32[0] = 3;
uint32[1] = 1;
uint32[2] = 0;
uint32[3] = 0;
uint32[4] = 0;

// Ein GPUBuffer erstellen und die Zeichnungswerte hineinschreiben
const drawValues = device.createBuffer({
  size: 20,
  usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.INDIRECT,
});
device.queue.writeBuffer(drawValues, 0, uint32, 0, uint32.length);

// Die Vertices zeichnen
passEncoder.drawIndexedIndirect(drawValues, 0);

// Den Render-Pass beenden
passEncoder.end();

// Den Frame beenden, indem ein Array von GPUCommandBuffers zur Ausführung in die Befehlswarteschlange übergeben wird
device.queue.submit([commandEncoder.finish()]);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
