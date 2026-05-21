---
title: "GPURenderBundleEncoder: drawIndirect()-Methode"
short-title: drawIndirect()
slug: Web/API/GPURenderBundleEncoder/drawIndirect
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`drawIndirect()`**-Methode des [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Interfaces zeichnet Primitive unter Verwendung von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent im [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`drawIndirect()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndirect).

## Syntax

```js-nolint
drawIndirect(indirectBuffer, indirectOffset)
```

### Parameter

- `indirectBuffer`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der die `vertexCount`, `instanceCount`, `firstVertex` und `firstInstance` Werte enthält, die zur Durchführung der Zeichnungsoperation benötigt werden. Der Puffer muss einen dicht gepackten Block von vier 32-Bit-ungesicherten Ganzzahlen enthalten, die die Werte (insgesamt 16 Bytes) in derselben Reihenfolge darstellen, wie sie bei [`GPURenderBundleEncoder.draw()`](/de/docs/Web/API/GPURenderBundleEncoder/draw) angegeben sind. Ein Beispiel:

    ```js
    const uint32 = new Uint32Array(4);
    uint32[0] = 3; // The vertexCount value
    uint32[1] = 1; // The instanceCount value
    uint32[2] = 0; // The firstVertex value
    uint32[3] = 0; // The firstInstance value

    // Write values into a GPUBuffer
    device.queue.writeBuffer(buffer, 0, uint32, 0, uint32.length);
    ```

    > [!NOTE]
    > Die `indirect-first-instance` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit nicht-null `firstInstance`-Werte verwendet werden können. Wenn die `indirect-first-instance` Funktion nicht aktiviert ist und `firstInstance` nicht null ist, wird der `drawIndirect()`-Aufruf als No-Op behandelt.

- `indirectOffset`
  - : Der Offset, in Bytes, in `indirectBuffer`, wo die Wertdaten beginnen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`drawIndirect()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) wird ungültig:

- `indirectBuffer`'s [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) enthält das `GPUBufferUsage.INDIRECT`-Flag.
- `indirectOffset` + die durch die Wertparameter im `indirectBuffer` angegebene Gesamtgröße ist kleiner oder gleich der [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) von `indirectBuffer`.
- `indirectOffset` ist ein Vielfaches von 4.

## Beispiele

```js
// …

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

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
