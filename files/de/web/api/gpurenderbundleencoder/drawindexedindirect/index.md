---
title: "GPURenderBundleEncoder: drawIndexedIndirect()-Methode"
short-title: drawIndexedIndirect()
slug: Web/API/GPURenderBundleEncoder/drawIndexedIndirect
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`drawIndexedIndirect()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle zeichnet indizierte Primitiven unter Verwendung von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`drawIndexedIndirect()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexedIndirect).

## Syntax

```js-nolint
drawIndexedIndirect(indirectBuffer, indirectOffset)
```

### Parameter

- `indirectBuffer`

  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der die Werte `indexCount`, `instanceCount`, `firstIndex`, `baseVertex` und `firstInstance` enthält, die für die Durchführung der Zeichnungsoperation erforderlich sind. Der Buffer muss einen lückenlos gepackten Block von fünf 32-Bit-Ganzzahlen ohne Vorzeichen enthalten, die in derselben Reihenfolge angegeben werden wie die Argumente für [`GPURenderBundleEncoder.drawIndexed()`](/de/docs/Web/API/GPURenderBundleEncoder/drawIndexed). Zum Beispiel:

    ```js
    const uint32 = new Uint32Array(5);
    uint32[0] = 3; // The indexCount value
    uint32[1] = 1; // The instanceCount value
    uint32[2] = 0; // The firstIndex value
    uint32[3] = 0; // The baseVertex value
    uint32[4] = 0; // The firstInstance value

    // Write values into a GPUBuffer
    device.queue.writeBuffer(buffer, 0, uint32, 0, uint32.length);
    ```

- `indirectOffset`
  - : Der Offset, in Bytes, in `indirectBuffer`, an dem die Wertedaten beginnen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`drawIndirect()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) wird ungültig:

- `indirectBuffer`'s [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) enthält das `GPUBufferUsage.INDIRECT`-Flag.
- `indirectOffset` plus die durch die Wertparameter im `indirectBuffer` angegebene Gesamtgröße ist kleiner als oder gleich der [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `indirectBuffer`.
- `indirectOffset` ist ein Vielfaches von 4.

## Beispiele

```js
// ...

// Create GPURenderBundleEncoder
const bundleEncoder = device.createRenderBundleEncoder(descriptor);

// Set pipeline and vertex buffer
bundleEncoder.setPipeline(renderPipeline);
bundleEncoder.setVertexBuffer(0, vertexBuffer);
bundleEncoder.setIndexBuffer(indexBuffer, "uint16");

// Create drawIndexedIndirect values
const uint32 = new Uint32Array(5);
uint32[0] = 3;
uint32[1] = 1;
uint32[2] = 0;
uint32[3] = 0;
uint32[4] = 0;

// Create a GPUBuffer and write the draw values into it
const drawValues = device.createBuffer({
  size: 20,
  usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.INDIRECT,
});
device.queue.writeBuffer(drawValues, 0, uint32, 0, uint32.length);

// Draw the vertices
bundleEncoder.drawIndexedIndirect(drawValues, 0);

// End the bundle recording
const renderBundle = bundleEncoder.finish();

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
