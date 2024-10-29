---
title: "GPUCommandEncoder: beginComputePass() Methode"
short-title: beginComputePass()
slug: Web/API/GPUCommandEncoder/beginComputePass
l10n:
  sourceCommit: 2379747e3cefc009c6a00ec52e88d66ff15c5397
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`beginComputePass()`** Methode der
[`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle beginnt mit der Kodierung eines Compute-Durchlaufs und gibt einen [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) zurück, der zur Steuerung der Berechnung verwendet werden kann.

## Syntax

```js-nolint
beginComputePass()
beginComputePass(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `label` {{optional_inline}}
      - : Ein Zeichenfolgenwert, der ein Label bereitstellt, das zur Identifikation des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `timestampWrites` {{optional_inline}}

      - : Ein Array von Objekten, die definieren, wo und wann Zeitstempel-Abfragewerte für diesen Durchlauf geschrieben werden. Diese Objekte haben die folgenden Eigenschaften:

        - `location`: Ein enumerierter Wert, der angibt, wann der Zeitstempel ausgeführt wird. Verfügbare Werte sind:
          - `"beginning"`: Der Zeitstempel wird zusammen mit den anderen kodierten Befehlen im Compute-Durchlauf ausgeführt, sobald der entsprechende [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) übermittelt wird.
          - `"end"`: Der Zeitstempel wird als Teil einer separaten Liste von Zeitstempel-Anhängen ausgeführt, sobald der Durchlauf endet.
        - `queryIndex`: Eine Nummer, die die Indexposition im `querySet` angibt, an die der Zeitstempel geschrieben wird.
        - `querySet`: Das [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), in das der Zeitstempel geschrieben wird.

        > [!NOTE]
        > Die `timestamp-query` [Funktionalität](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um Zeitstempel-Abfragen zu verwenden.

### Rückgabewert

Eine Instanz des [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Objekts.

### Validierung

Die folgenden Kriterien müssen beim Aufrufen von **`beginComputePass()`** erfüllt sein. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiger [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) wird zurückgegeben:

- Die `timestamp-query` [Funktionalität](/de/docs/Web/API/GPUSupportedFeatures) ist im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert.
- Keine zwei `timestampWrites`-Objekte dürfen dieselbe `location` haben. Dies bedeutet, dass Sie effektive nur zwei Zeitstempel-Abfragen pro Renderdurchlauf ausführen können.
- Für jede Zeitstempel-Abfrage muss der `querySet` [`GPUQuerySet.type`](/de/docs/Web/API/GPUQuerySet/type) `"timestamp"` sein, und der `queryIndex`-Wert muss kleiner als die [`GPUQuerySet.count`](/de/docs/Web/API/GPUQuerySet/count) sein.

## Beispiele

In unserem [Grundlagen-Beispiel für Compute](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen aus dem über `beginComputePass()` erstellten [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder).

```js
// ...

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

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
