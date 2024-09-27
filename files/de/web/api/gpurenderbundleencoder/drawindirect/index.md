---
title: "GPURenderBundleEncoder: drawIndirect() Methode"
short-title: drawIndirect()
slug: Web/API/GPURenderBundleEncoder/drawIndirect
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`drawIndirect()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle zeichnet Primitive unter Verwendung von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`drawIndirect()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndirect).

## Syntax

```js-nolint
drawIndirect(indirectBuffer, indirectOffset)
```

### Parameter

- `indirectBuffer`

  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der die Werte `vertexCount`, `instanceCount`, `firstVertex` und `firstInstance` enthält, die für die Durchführung der Zeichenoperation erforderlich sind. Der Puffer muss einen eng gepackten Block aus vier 32-Bit-unsigned integer-Werten enthalten, die die Werte darstellen (insgesamt 16 Bytes), in der gleichen Reihenfolge wie die Argumente für [`GPURenderBundleEncoder.draw()`](/de/docs/Web/API/GPURenderBundleEncoder/draw). Zum Beispiel:

    ```js
    const uint32 = new Uint32Array(4);
    uint32[0] = 3; // The vertexCount value
    uint32[1] = 1; // The instanceCount value
    uint32[2] = 0; // The firstVertex value
    uint32[3] = 0; // The firstInstance value

    // Write values into a GPUBuffer
    device.queue.writeBuffer(buffer, 0, uint32, 0, uint32.length);
    ```

- `indirectOffset`
  - : Der Offset in Bytes im `indirectBuffer`, wo die Werte beginnen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen bei einem Aufruf von **`drawIndirect()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) wird ungültig:

- `indirectBuffer`'s [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) enthält das `GPUBufferUsage.INDIRECT`-Flag.
- `indirectOffset` + die durch die Werteparameter im `indirectBuffer` angegebene Gesamtgröße ist kleiner oder gleich der [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `indirectBuffer`.
- `indirectOffset` ist ein Vielfaches von 4.

## Beispiele

```js
// ...

// Create GPURenderBundleEncoder
const bundleEncoder = device.createRenderBundleEncoder(descriptor);

// Set pipeline and vertex buffer
bundleEncoder.setPipeline(renderPipeline);
bundleEncoder.setVertexBuffer(0, vertexBuffer);

// Create drawIndirect values
const uint32 = new Uint32Array(4);
uint32[0] = 3;
uint32[1] = 1;
uint32[2] = 0;
uint32[3] = 0;

// Create a GPUBuffer and write the draw values into it
const drawValues = device.createBuffer({
  size: 16,
  usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.INDIRECT,
});
device.queue.writeBuffer(drawValues, 0, uint32, 0, uint32.length);

// Draw the vertices
bundleEncoder.drawIndirect(drawValues, 0);

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
