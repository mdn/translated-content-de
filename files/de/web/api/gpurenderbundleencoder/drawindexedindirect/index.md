---
title: "GPURenderBundleEncoder: drawIndexedIndirect()-Methode"
short-title: drawIndexedIndirect()
slug: Web/API/GPURenderBundleEncoder/drawIndexedIndirect
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`drawIndexedIndirect()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle zeichnet indizierte Primitiven unter Verwendung von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`drawIndexedIndirect()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexedIndirect).

## Syntax

```js-nolint
drawIndexedIndirect(indirectBuffer, indirectOffset)
```

### Parameter

- `indirectBuffer`

  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der die benötigten `indexCount`, `instanceCount`, `firstIndex`, `baseVertex` und `firstInstance`-Werte für den Zeichnungsvorgang enthält. Der Puffer muss einen dicht gepackten Block von fünf 32-Bit-Integer-Werten enthalten, die die Werte in derselben Reihenfolge repräsentieren wie die Argumente für [`GPURenderBundleEncoder.drawIndexed()`](/de/docs/Web/API/GPURenderBundleEncoder/drawIndexed) (insgesamt 20 Bytes). Zum Beispiel:

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

    > [!NOTE]
    > Das `indirect-first-instance` [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit `firstInstance`-Werte, die ungleich null sind, verwendet werden können. Wenn das `indirect-first-instance`-Feature nicht aktiviert ist und `firstInstance` nicht null ist, wird der `drawIndexedIndirect()`-Aufruf als No-Op behandelt.

- `indirectOffset`
  - : Der Offset in Bytes in `indirectBuffer`, ab dem die Wertedaten beginnen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`drawIndirect()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) wird ungültig:

- [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) von `indirectBuffer` enthält das `GPUBufferUsage.INDIRECT`-Flag.
- `indirectOffset` plus die durch die Werte im `indirectBuffer` spezifizierte Gesamtgröße ist kleiner oder gleich der [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) von `indirectBuffer`.
- `indirectOffset` ist ein Vielfaches von 4.

## Beispiele

```js
// …

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

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
