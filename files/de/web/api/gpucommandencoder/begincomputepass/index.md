---
title: "GPUCommandEncoder: beginComputePass()-Methode"
short-title: beginComputePass()
slug: Web/API/GPUCommandEncoder/beginComputePass
l10n:
  sourceCommit: 891215b6b586ab3489de192058dc6ecdad873e83
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`beginComputePass()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle beginnt eine Compute-Pass-Codierung und gibt einen [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) zurück, der zur Steuerung der Berechnung verwendet werden kann.

## Syntax

```js-nolint
beginComputePass()
beginComputePass(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen zu identifizieren.
    - `timestampWrites` {{optional_inline}}

      - : Ein Array von Objekten, das definiert, wo und wann Zeitstempel-Abfragewerte für diesen Pass geschrieben werden. Diese Objekte haben die folgenden Eigenschaften:

        - `querySet`
          - : Ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) vom Typ `"timestamp"`, in das die Zeitstempelergebnisse geschrieben werden.
        - `beginningOfPassWriteIndex`
          - : Eine Zahl, die den Abfrageindex in `querySet` angibt, wohin der Zeitstempel am Anfang des Render-Passes geschrieben wird. Dies ist optional - wenn nicht definiert, wird kein Zeitstempel für den Beginn des Passes geschrieben.
        - `endOfPassWriteIndex`
          - : Eine Zahl, die den Abfrageindex in `querySet` angibt, wohin der Zeitstempel am Ende des Render-Passes geschrieben wird. Dies ist optional - wenn nicht definiert, wird kein Zeitstempel für das Ende des Passes geschrieben.

        > [!NOTE]
        > Das `timestamp-query`-[Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um Zeitstempel-Abfragen nutzen zu können. Zeitstempel-Abfragewerte werden in Nanosekunden geschrieben, aber wie der Wert bestimmt wird, ist implementierungsabhängig.

### Rückgabewert

Ein [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`beginComputePass()`** aufgerufen wird, sonst wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiger [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) zurückgegeben:

- Das `timestamp-query`-[Feature](/de/docs/Web/API/GPUSupportedFeatures) ist im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert.

## Beispiele

In unserem [basic compute demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen von dem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder), der über `beginComputePass()` erstellt wurde.

```js
// …

// Create GPUCommandEncoder to encode commands to issue to the GPU
const commandEncoder = device.createCommandEncoder();

// Initiate render pass
const passEncoder = commandEncoder.beginComputePass();

// Issue commands
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

// End the render pass
passEncoder.end();

// Copy output buffer to staging buffer
commandEncoder.copyBufferToBuffer(
  output,
  0, // Source offset
  stagingBuffer,
  0, // Destination offset
  BUFFER_SIZE,
);

// End frame by passing array of command buffers to command queue for execution
device.queue.submit([commandEncoder.finish()]);

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
