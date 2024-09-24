---
title: "GPURenderBundleEncoder: Methode drawIndexedIndirect()"
short-title: drawIndexedIndirect()
slug: Web/API/GPURenderBundleEncoder/drawIndexedIndirect
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`drawIndexedIndirect()`**-Methode der Schnittstelle {{domxref("GPURenderBundleEncoder")}} zeichnet indizierte Primitive unter Verwendung von Parametern, die aus einem {{domxref("GPUBuffer")}} gelesen werden.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent auf {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.drawIndexedIndirect", "drawIndexedIndirect()")}}.

## Syntax

```js-nolint
drawIndexedIndirect(indirectBuffer, indirectOffset)
```

### Parameter

- `indirectBuffer`

  - : Ein {{domxref("GPUBuffer")}}, der die Werte `indexCount`, `instanceCount`, `firstIndex`, `baseVertex` und `firstInstance` enthält, die zum Durchführen der Zeichnungsoperation benötigt werden. Der Puffer muss einen eng gepackten Block von fünf 32-Bit-unsigned-Integer-Werten enthalten, die die Werte (insgesamt 20 Bytes) in derselben Reihenfolge wie die Argumente für {{domxref("GPURenderBundleEncoder.drawIndexed()")}} darstellen. Zum Beispiel:

    ```js
    const uint32 = new Uint32Array(5);
    uint32[0] = 3; // Der Wert von indexCount
    uint32[1] = 1; // Der Wert von instanceCount
    uint32[2] = 0; // Der Wert von firstIndex
    uint32[3] = 0; // Der Wert von baseVertex
    uint32[4] = 0; // Der Wert von firstInstance

    // Werte in einen GPUBuffer schreiben
    device.queue.writeBuffer(buffer, 0, uint32, 0, uint32.length);
    ```

- `indirectOffset`
  - : Der Offset in Bytes innerhalb von `indirectBuffer`, an dem die Wertedaten beginnen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`drawIndirect()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} generiert und der {{domxref("GPURenderBundleEncoder")}} wird ungültig:

- Der {{domxref("GPUBuffer.usage")}} von `indirectBuffer` enthält das Flag `GPUBufferUsage.INDIRECT`.
- `indirectOffset` + die durch die Wertparameter im `indirectBuffer` angegebene Gesamtgröße ist kleiner oder gleich der {{domxref("GPUBuffer.size")}} von `indirectBuffer`.
- `indirectOffset` ist ein Vielfaches von 4.

## Beispiele

```js
// ...

// Erstellen Sie GPURenderBundleEncoder
const bundleEncoder = device.createRenderBundleEncoder(descriptor);

// Pipeline und Vertex-Buffer setzen
bundleEncoder.setPipeline(renderPipeline);
bundleEncoder.setVertexBuffer(0, vertexBuffer);
bundleEncoder.setIndexBuffer(indexBuffer, "uint16");

// drawIndexedIndirect-Werte erstellen
const uint32 = new Uint32Array(5);
uint32[0] = 3;
uint32[1] = 1;
uint32[2] = 0;
uint32[3] = 0;
uint32[4] = 0;

// Erstellen Sie einen GPUBuffer und schreiben Sie die Zeichnungswerte hinein
const drawValues = device.createBuffer({
  size: 20,
  usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.INDIRECT,
});
device.queue.writeBuffer(drawValues, 0, uint32, 0, uint32.length);

// Die Vertices zeichnen
bundleEncoder.drawIndexedIndirect(drawValues, 0);

// Beenden Sie die Bündelaufzeichnung
const renderBundle = bundleEncoder.finish();

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
