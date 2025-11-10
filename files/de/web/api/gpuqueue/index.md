---
title: GPUQueue
slug: Web/API/GPUQueue
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUQueue`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) steuert die Ausführung von kodierten Befehlen auf der GPU.

Auf die Hauptwarteschlange eines Geräts wird über die Eigenschaft [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue) zugegriffen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`label`](/de/docs/Web/API/GPUQueue/label)
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

## Instanzmethoden

- [`copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture)
  - : Kopiert eine Momentaufnahme, die von einem Quellbild, Video oder Canvas aufgenommen wurde, in eine gegebene [`GPUTexture`](/de/docs/Web/API/GPUTexture).
- [`onSubmittedWorkDone()`](/de/docs/Web/API/GPUQueue/onSubmittedWorkDone)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn alle Arbeiten, die über diese `GPUQueue` zum Zeitpunkt des Aufrufs der Methode an die GPU übergeben wurden, verarbeitet wurden.
- [`submit()`](/de/docs/Web/API/GPUQueue/submit)
  - : Plant die Ausführung von Befehls-Puffern, die durch ein oder mehrere [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekte dargestellt werden, durch die GPU.
- [`writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer)
  - : Schreibt eine bereitgestellte Datenquelle in einen gegebenen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer).
- [`writeTexture()`](/de/docs/Web/API/GPUQueue/writeTexture)
  - : Schreibt eine bereitgestellte Datenquelle in eine gegebene [`GPUTexture`](/de/docs/Web/API/GPUTexture).

## Beispiele

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) definieren wir einige Vertex-Daten in einem {{jsxref("Float32Array")}}, die wir verwenden werden, um ein Dreieck zu zeichnen:

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Um diese Daten in einer Render-Pipeline zu verwenden, müssen wir sie in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) legen. Zuerst erstellen wir den Puffer:

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Um die Daten in den Puffer zu bekommen, können wir die Funktion [`writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer) verwenden, die es dem Benutzeragenten ermöglicht, den effizientesten Weg zu bestimmen, um die Daten zu kopieren:

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

Später wird eine Reihe von Befehlen in einem [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) mit der Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) kodiert. Der Befehls-Puffer wird dann über einen [`submit()`](/de/docs/Web/API/GPUQueue/submit)-Aufruf in die Warteschlange übergeben, bereit zur Verarbeitung durch die GPU.

```js
device.queue.submit([commandEncoder.finish()]);
```

> [!NOTE]
> Studieren Sie die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/), um weitere Beispiele für Warteschlangen zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
