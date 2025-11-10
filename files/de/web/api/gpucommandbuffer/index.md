---
title: GPUCommandBuffer
slug: Web/API/GPUCommandBuffer
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUCommandBuffer`** Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert eine vorab aufgezeichnete Liste von GPU-Befehlen, die zur Ausführung an eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) übermittelt werden können.

Ein `GPUCommandBuffer` wird über die [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) Methode erstellt; die darin aufgezeichneten GPU-Befehle werden zur Ausführung übermittelt, indem der `GPUCommandBuffer` in den Parameter eines [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) Aufrufs übergeben wird.

> [!NOTE]
> Sobald ein `GPUCommandBuffer` Objekt übermittelt wurde, kann es nicht erneut verwendet werden.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`label`](/de/docs/Web/API/GPUCommandBuffer/label)
  - : Ein String, der ein Etikett bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

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
