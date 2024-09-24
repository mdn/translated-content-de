---
title: "GPURenderBundleEncoder: drawIndirect() Methode"
short-title: drawIndirect()
slug: Web/API/GPURenderBundleEncoder/drawIndirect
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`drawIndirect()`** Methode der {{domxref("GPURenderBundleEncoder")}} Schnittstelle zeichnet Primitive mithilfe von Parametern, die aus einem {{domxref("GPUBuffer")}} gelesen werden.

> [!NOTE]
> Diese Methode ist funktionell identisch mit ihrem Äquivalent auf {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.drawIndirect", "drawIndirect()")}}.

## Syntax

```js-nolint
drawIndirect(indirectBuffer, indirectOffset)
```

### Parameter

- `indirectBuffer`

  - : Ein {{domxref("GPUBuffer")}}, der die `vertexCount`, `instanceCount`, `firstVertex` und `firstInstance` Werte enthält, die für den Zeichnungsvorgang benötigt werden. Der Buffer muss einen dicht gepackten Block von vier 32-Bit-unsigned Integer-Werten enthalten, die die Werte darstellen (insgesamt 16 Bytes), und zwar in derselben Reihenfolge wie die Argumente für {{domxref("GPURenderBundleEncoder.draw()")}}. Zum Beispiel:

    ```js
    const uint32 = new Uint32Array(4);
    uint32[0] = 3; // Der vertexCount-Wert
    uint32[1] = 1; // Der instanceCount-Wert
    uint32[2] = 0; // Der firstVertex-Wert
    uint32[3] = 0; // Der firstInstance-Wert

    // Werte in einen GPUBuffer schreiben
    device.queue.writeBuffer(buffer, 0, uint32, 0, uint32.length);
    ```

- `indirectOffset`
  - : Der Offset in Bytes in `indirectBuffer`, wo die Wertdaten beginnen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`drawIndirect()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und der {{domxref("GPURenderBundleEncoder")}} wird ungültig:

- `indirectBuffer`'s {{domxref("GPUBuffer.usage")}} enthält das `GPUBufferUsage.INDIRECT` Flag.
- `indirectOffset` plus die durch die Wertparameter im `indirectBuffer` angegebene Gesamtgröße ist kleiner oder gleich der {{domxref("GPUBuffer.size")}} des `indirectBuffer`.
- `indirectOffset` ist ein Vielfaches von 4.

## Beispiele

```js
// ...

// GPURenderBundleEncoder erstellen
const bundleEncoder = device.createRenderBundleEncoder(descriptor);

// Pipeline und Vertex Buffer setzen
bundleEncoder.setPipeline(renderPipeline);
bundleEncoder.setVertexBuffer(0, vertexBuffer);

// drawIndirect Werte erstellen
const uint32 = new Uint32Array(4);
uint32[0] = 3;
uint32[1] = 1;
uint32[2] = 0;
uint32[3] = 0;

// Einen GPUBuffer erstellen und die Zeichenwerte darin schreiben
const drawValues = device.createBuffer({
  size: 16,
  usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.INDIRECT,
});
device.queue.writeBuffer(drawValues, 0, uint32, 0, uint32.length);

// Die Vertices zeichnen
bundleEncoder.drawIndirect(drawValues, 0);

// Die Aufnahme des Bundles beenden
const renderBundle = bundleEncoder.finish();

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
