---
title: "GPUCommandEncoder: beginComputePass()-Methode"
short-title: beginComputePass()
slug: Web/API/GPUCommandEncoder/beginComputePass
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`beginComputePass()`**-Methode der [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Schnittstelle startet die Kodierung eines Compute-Passes und gibt einen [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) zurück, der zur Steuerung der Berechnung verwendet werden kann.

## Syntax

```js-nolint
beginComputePass()
beginComputePass(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `timestampWrites` {{optional_inline}}

      - : Ein Array von Objekten, das definiert, wo und wann Zeitstempel-Abfragewerte für diesen Pass geschrieben werden. Diese Objekte haben die folgenden Eigenschaften:

        - `location`: Ein Aufzählungswert, der angibt, wann der Zeitstempel ausgeführt wird. Verfügbare Werte sind:
          - `"beginning"`: Der Zeitstempel wird zusammen mit den anderen kodierten Befehlen im Compute-Pass ausgeführt, sobald der entsprechende [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) übermittelt wird.
          - `"end"`: Der Zeitstempel wird als Teil einer separaten Liste von Zeitstempel-Anhängen ausgeführt, sobald der Pass endet.
        - `queryIndex`: Eine Zahl, die die Indexposition im `querySet` angibt, an die der Zeitstempel geschrieben wird.
        - `querySet`: Das [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), an das der Zeitstempel geschrieben wird.

        > [!NOTE]
        > Um Zeitstempelabfragen zu verwenden, muss die `timestamp-query` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein.

### Rückgabewert

Ein [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`beginComputePass()`** aufgerufen wird. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiger [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) zurückgegeben:

- Die `timestamp-query` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) ist im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert.
- Es gibt keine zwei `timestampWrites`-Objekte mit derselben `location`. Das bedeutet, dass Sie nur zwei Zeitstempelabfragen pro Renderpass ausführen können.
- Für jede Zeitstempelabfrage ist der `querySet` [`GPUQuerySet.type`](/de/docs/Web/API/GPUQuerySet/type) `"timestamp"`, und der `queryIndex`-Wert ist kleiner als die [`GPUQuerySet.count`](/de/docs/Web/API/GPUQuerySet/count).

## Beispiele

In unserem [grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen vom [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder), der über `beginComputePass()` erstellt wurde.

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
