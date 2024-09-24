---
title: "GPURenderPassEncoder: drawIndirect()-Methode"
short-title: drawIndirect()
slug: Web/API/GPURenderPassEncoder/drawIndirect
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`drawIndirect()`**-Methode der {{domxref("GPURenderPassEncoder")}}-Schnittstelle zeichnet Primitiven mithilfe von Parametern, die aus einem {{domxref("GPUBuffer")}} gelesen werden.

## Syntax

```js-nolint
drawIndirect(indirectBuffer, indirectOffset)
```

### Parameter

- `indirectBuffer`

  - : Ein {{domxref("GPUBuffer")}}, der die Werte `vertexCount`, `instanceCount`, `firstVertex` und `firstInstance` enthält, die für die Durchführung der Zeichenoperation erforderlich sind. Der Puffer muss einen eng gepackten Block von vier 32-Bit-unsigned-Integer-Werten enthalten, die die Werte (insgesamt 16 Bytes) darstellen, in der gleichen Reihenfolge wie die Argumente für {{domxref("GPURenderPassEncoder.draw()")}}. Beispielsweise:

    ```js
    const uint32 = new Uint32Array(4);
    uint32[0] = 3; // Der Wert von vertexCount
    uint32[1] = 1; // Der Wert von instanceCount
    uint32[2] = 0; // Der Wert von firstVertex
    uint32[3] = 0; // Der Wert von firstInstance

    // Werte in einen GPUBuffer schreiben
    device.queue.writeBuffer(buffer, 0, uint32, 0, uint32.length);
    ```

- `indirectOffset`
  - : Der Versatz in Bytes in den `indirectBuffer`, wo die Wertedaten beginnen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`drawIndirect()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} generiert und der {{domxref("GPURenderPassEncoder")}} wird ungültig:

- Die {{domxref("GPUBuffer.usage")}} von `indirectBuffer` enthält das `GPUBufferUsage.INDIRECT`-Flag.
- `indirectOffset` + die durch die Wertparameter im `indirectBuffer` angegebene Gesamtgröße ist kleiner oder gleich der {{domxref("GPUBuffer.size")}} des `indirectBuffer`.
- `indirectOffset` ist ein Vielfaches von 4.

## Beispiele

```js
// ...

// GPURenderPassEncoder erstellen
const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// Pipeline und Vertexbuffer setzen
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);

// drawIndirect-Werte erstellen
const uint32 = new Uint32Array(4);
uint32[0] = 3;
uint32[1] = 1;
uint32[2] = 0;
uint32[3] = 0;

// Einen GPUBuffer erstellen und die Zeichnungswerte darin schreiben
const drawValues = device.createBuffer({
  size: 16,
  usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.INDIRECT,
});
device.queue.writeBuffer(drawValues, 0, uint32, 0, uint32.length);

// Die Vertices zeichnen
passEncoder.drawIndirect(drawValues, 0);

// Den Render-Pass beenden
passEncoder.end();

// Frame beenden, indem ein Array von GPUCommandBuffers an die Befehlswarteschlange zur Ausführung übergeben wird
device.queue.submit([commandEncoder.finish()]);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
