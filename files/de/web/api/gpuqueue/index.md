---
title: GPUQueue
slug: Web/API/GPUQueue
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUQueue`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) steuert die Ausführung von kodierten Befehlen auf der GPU.

Die primäre Warteschlange eines Geräts wird über die Eigenschaft [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue) abgerufen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`label`](/de/docs/Web/API/GPUQueue/label) {{Experimental_Inline}}
  - : Ein String, der ein Label zur Identifizierung des Objekts bereitstellt, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Instanzmethoden

- [`copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture) {{Experimental_Inline}}
  - : Kopiert einen Schnappschuss, der aus einem Quellbild, Video oder Canvas aufgenommen wurde, in eine gegebene [`GPUTexture`](/de/docs/Web/API/GPUTexture).
- [`onSubmittedWorkDone()`](/de/docs/Web/API/GPUQueue/onSubmittedWorkDone) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn alle der GPU übermittelte Arbeiten, die zum Zeitpunkt des Aufrufs dieser Methode eingereicht wurden, verarbeitet sind.
- [`submit()`](/de/docs/Web/API/GPUQueue/submit) {{Experimental_Inline}}
  - : Plant die Ausführung von Befehls-Puffern, die durch ein oder mehrere [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekte repräsentiert werden, durch die GPU.
- [`writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer) {{Experimental_Inline}}
  - : Schreibt eine bereitgestellte Datenquelle in einen gegebenen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer).
- [`writeTexture()`](/de/docs/Web/API/GPUQueue/writeTexture) {{Experimental_Inline}}
  - : Schreibt eine bereitgestellte Datenquelle in eine gegebene [`GPUTexture`](/de/docs/Web/API/GPUTexture).

## Beispiele

In unserem [einfachen Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) definieren wir einige Vertex-Daten in einem {{jsxref("Float32Array")}}, die wir verwenden werden, um ein Dreieck zu zeichnen:

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

Um die Daten in den Puffer zu bekommen, können wir die Funktion [`writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer) verwenden, die dem Benutzeragenten die effizienteste Methode zum Kopieren der Daten überlässt:

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

Später wird ein Satz von Befehlen in einen [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) mit der Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) kodiert. Der Befehls-Puffer wird dann über einen Aufruf von [`submit()`](/de/docs/Web/API/GPUQueue/submit) in die Warteschlange übergeben, bereit zur Verarbeitung durch die GPU.

```js
device.queue.submit([commandEncoder.finish()]);
```

> [!NOTE]
> Untersuchen Sie die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/), um weitere Beispiele für Warteschlangen zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
