---
title: "GPUCommandEncoder: beginComputePass() Methode"
short-title: beginComputePass()
slug: Web/API/GPUCommandEncoder/beginComputePass
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`beginComputePass()`**-Methode des [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Interfaces startet das Codieren eines Compute-Passes und gibt einen [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) zurück, der zur Steuerung von Berechnungen verwendet werden kann.

## Syntax

```js-nolint
beginComputePass()
beginComputePass(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `label` {{optional_inline}}
      - : Ein String, der ein Label angibt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `timestampWrites` {{optional_inline}}

      - : Ein Array von Objekten, das definiert, wo und wann Zeitstempel-Abfragewerte für diesen Pass geschrieben werden. Diese Objekte haben die folgenden Eigenschaften:

        - `location`: Ein enumerierter Wert, der angibt, wann der Zeitstempel ausgeführt wird. Verfügbare Werte sind:
          - `"beginning"`: Der Zeitstempel wird zusammen mit den anderen codierten Befehlen im Compute-Pass ausgeführt, sobald der entsprechende [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) übermittelt wird.
          - `"end"`: Der Zeitstempel wird als Teil einer separaten Liste von Zeitstempel-Anhängen ausgeführt, sobald der Pass endet.
        - `queryIndex`: Eine Zahl, die die Indexposition im `querySet` angibt, an die der Zeitstempel geschrieben wird.
        - `querySet`: Das [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), an das der Zeitstempel geschrieben wird.

        > [!NOTE]
        > Um Zeitstempel-Abfragen zu verwenden, muss die `timestamp-query`-[Funktion](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein.

### Rückgabewert

Eine [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen beim Aufrufen von **`beginComputePass()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiger [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) zurückgegeben:

- Die `timestamp-query`-[Funktion](/de/docs/Web/API/GPUSupportedFeatures) ist im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert.
- Keine zwei `timestampWrites`-Objekte haben die gleiche `location`. Dies bedeutet in der Praxis, dass Sie nur zwei Zeitstempel-Abfragen pro Render-Pass ausführen können.
- Für jede Zeitstempel-Abfrage ist der `querySet`-Wert [`GPUQuerySet.type`](/de/docs/Web/API/GPUQuerySet/type) `"timestamp"`, und der `queryIndex`-Wert ist kleiner als [`GPUQuerySet.count`](/de/docs/Web/API/GPUQuerySet/count).

## Beispiele

In unserem [einfachen Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen vom [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder), der über `beginComputePass()` erstellt wurde.

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
