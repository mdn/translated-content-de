---
title: GPUCommandBuffer
slug: Web/API/GPUCommandBuffer
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUCommandBuffer`** Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert eine vorab aufgezeichnete Liste von GPU-Befehlen, die zur Ausführung an eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) übermittelt werden kann.

Ein `GPUCommandBuffer` wird mittels der Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) erstellt; die darin aufgezeichneten GPU-Befehle werden zur Ausführung übermittelt, indem der `GPUCommandBuffer` als Parameter eines Aufrufs von [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) übergeben wird.

> [!NOTE]
> Sobald ein `GPUCommandBuffer`-Objekt übermittelt wurde, kann es nicht wiederverwendet werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPUCommandBuffer/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das dazu verwendet werden kann, das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Beispiele

```js
// …

const commandBuffer = commandEncoder.finish();
device.queue.submit([commandBuffer]);
```

> [!NOTE]
> Studieren Sie die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/), um vollständige Beispiele zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
