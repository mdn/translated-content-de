---
title: "GPUCommandEncoder: beginComputePass()-Methode"
short-title: beginComputePass()
slug: Web/API/GPUCommandEncoder/beginComputePass
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`beginComputePass()`**-Methode der {{domxref("GPUCommandEncoder")}}-Schnittstelle startet das Codieren eines Compute-Passes und gibt einen {{domxref("GPUComputePassEncoder")}} zurück, der zur Steuerung der Berechnung verwendet werden kann.

## Syntax

```js-nolint
beginComputePass()
beginComputePass(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen.
    - `timestampWrites` {{optional_inline}}

      - : Ein Array von Objekten, das definiert, wo und wann Timestamp-Abfragewerte für diesen Durchlauf geschrieben werden. Diese Objekte haben die folgenden Eigenschaften:

        - `location`: Ein enumerierter Wert, der angibt, wann der Timestamp ausgeführt wird. Verfügbare Werte sind:
          - `"beginning"`: Der Timestamp wird zusammen mit den anderen codierten Befehlen im Compute-Pass ausgeführt, sobald der entsprechende {{domxref("GPUCommandBuffer")}} übermittelt wird.
          - `"end"`: Der Timestamp wird als Teil einer separaten Liste von Timestamp-Anhängen ausgeführt, sobald der Pass endet.
        - `queryIndex`: Eine Zahl, die die Indexposition im `querySet` angibt, in die der Timestamp geschrieben wird.
        - `querySet`: Das {{domxref("GPUQuerySet")}}, in das der Timestamp geschrieben wird.

        > [!NOTE]
        > Um Timestamp-Abfragen zu verwenden, muss das `timestamp-query`-{{domxref("GPUSupportedFeatures", "feature", "", "nocode")}} im {{domxref("GPUDevice")}} aktiviert sein.

### Rückgabewert

Eine {{domxref("GPUComputePassEncoder")}}-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`beginComputePass()`** erfüllt sein, andernfalls wird ein {{domxref("GPUValidationError")}} generiert und ein ungültiger {{domxref("GPUComputePassEncoder")}} wird zurückgegeben:

- Das `timestamp-query`-{{domxref("GPUSupportedFeatures", "feature", "", "nocode")}} ist im {{domxref("GPUDevice")}} aktiviert.
- Keine zwei `timestampWrites`-Objekte haben dieselbe `location`. Dies bedeutet, dass Sie pro Render-Pass nur zwei Timestamp-Abfragen ausführen können.
- Für jede Timestamp-Abfrage ist das `querySet` {{domxref("GPUQuerySet.type")}} `"timestamp"`, und der `queryIndex`-Wert ist kleiner als die {{domxref("GPUQuerySet.count")}}.

## Beispiele

In unserem [Grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen {{domxref("GPUCommandEncoder")}} aufgezeichnet. Die meisten dieser Befehle stammen vom {{domxref("GPUComputePassEncoder")}}, der über `beginComputePass()` erstellt wird.

```js
// ...

// Erstellen Sie GPUCommandEncoder, um Befehle zu codieren, die an die GPU übermittelt werden sollen
const commandEncoder = device.createCommandEncoder();

// Starten Sie den Render-Pass
const passEncoder = commandEncoder.beginComputePass();

// Befehle erteilen
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

// Beenden Sie den Render-Pass
passEncoder.end();

// Kopieren Sie den Ausgabepuffer in den Staging-Puffer
commandEncoder.copyBufferToBuffer(
  output,
  0, // Quell-Offset
  stagingBuffer,
  0, // Ziel-Offset
  BUFFER_SIZE,
);

// Beenden Sie den Frame, indem Sie ein Array von Befehls-Puffern zur Ausführung an die Befehls-Warteschlange übergeben
device.queue.submit([commandEncoder.finish()]);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
