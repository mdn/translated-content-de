---
title: "GPUCommandEncoder: beginComputePass() Methode"
short-title: beginComputePass()
slug: Web/API/GPUCommandEncoder/beginComputePass
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`beginComputePass()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle beginnt mit der Kodierung eines Compute-Durchlaufs und gibt einen [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) zurück, der zur Steuerung der Berechnung verwendet werden kann.

## Syntax

```js-nolint
beginComputePass()
beginComputePass(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifikation des Objekts verwendet werden kann, z. B. in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
    - `timestampWrites` {{optional_inline}}

      - : Ein Array von Objekten, die definieren, wann und wo die Zeitstempel-Abfragewerte für diesen Durchlauf geschrieben werden. Diese Objekte haben die folgenden Eigenschaften:

        - `querySet`
          - : Ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) des Typs `"timestamp"`, in den die Ergebnisse der Zeitstempel-Abfrage geschrieben werden.
        - `beginningOfPassWriteIndex`
          - : Eine Zahl, die den Abfrageindex in `querySet` angibt, an dem der Zeitstempel zu Beginn des Render-Durchlaufs geschrieben wird. Dies ist optional - wenn nicht definiert, wird kein Zeitstempel für den Beginn des Durchlaufs geschrieben.
        - `endOfPassWriteIndex`
          - : Eine Zahl, die den Abfrageindex in `querySet` angibt, an dem der Zeitstempel am Ende des Render-Durchlaufs geschrieben wird. Dies ist optional - wenn nicht definiert, wird kein Zeitstempel für das Ende des Durchlaufs geschrieben.

        > [!NOTE]
        > Die `timestamp-query`-[Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um Zeitstempel-Abfragen zu verwenden. Zeitstempel-Abfragewerte werden in Nanosekunden geschrieben, aber wie der Wert ermittelt wird, ist implementierungsabhängig.

### Rückgabewert

Eine Instanz des [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`beginComputePass()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiger [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) zurückgegeben:

- Die `timestamp-query`-[Funktion](/de/docs/Web/API/GPUSupportedFeatures) ist im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert.

## Beispiele

In unserem [grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen von dem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder), der über `beginComputePass()` erstellt wurde.

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
