---
title: GPUCommandBuffer
slug: Web/API/GPUCommandBuffer
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUCommandBuffer`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert eine vorab aufgezeichnete Liste von GPU-Befehlen, die zur Ausführung an eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) übermittelt werden können.

Ein `GPUCommandBuffer` wird über die Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) erstellt; die darin aufgezeichneten GPU-Befehle werden zur Ausführung eingereicht, indem der `GPUCommandBuffer` als Parameter eines Aufrufs von [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) übergeben wird.

> [!NOTE]
> Sobald ein `GPUCommandBuffer`-Objekt eingereicht wurde, kann es nicht erneut verwendet werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPUCommandBuffer/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

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
