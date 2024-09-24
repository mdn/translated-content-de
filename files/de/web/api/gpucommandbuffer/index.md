---
title: GPUCommandBuffer
slug: Web/API/GPUCommandBuffer
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`GPUCommandBuffer`**-Interface der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} repräsentiert eine vorab aufgezeichnete Liste von GPU-Befehlen, die zur Ausführung an eine {{domxref("GPUQueue")}} übergeben werden können.

Ein `GPUCommandBuffer` wird über die Methode {{domxref("GPUCommandEncoder.finish()")}} erstellt; die darin aufgezeichneten GPU-Befehle werden ausgeführt, indem der `GPUCommandBuffer` als Parameter eines Aufrufs von {{domxref("GPUQueue.submit()")}} übergeben wird.

> [!NOTE]
> Sobald ein `GPUCommandBuffer`-Objekt übermittelt wurde, kann es nicht erneut verwendet werden.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("GPUCommandBuffer.label", "label")}} {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen.

## Beispiele

```js
// ...

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
