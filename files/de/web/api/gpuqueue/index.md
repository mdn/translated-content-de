---
title: GPUQueue
slug: Web/API/GPUQueue
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUQueue`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) steuert die Ausführung von kodierten Befehlen auf der GPU.

Auf die primäre Warteschlange eines Geräts wird über die [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue)-Eigenschaft zugegriffen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`label`](/de/docs/Web/API/GPUQueue/label) {{Experimental_Inline}}
  - : Ein String, der ein Etikett bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Instanzmethoden

- [`copyExternalImageToTexture()`](/de/docs/Web/API/GPUQueue/copyExternalImageToTexture) {{Experimental_Inline}}
  - : Kopiert einen Schnappschuss von einem Quellbild, Video oder Canvas in eine gegebene [`GPUTexture`](/de/docs/Web/API/GPUTexture).
- [`onSubmittedWorkDone()`](/de/docs/Web/API/GPUQueue/onSubmittedWorkDone) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn alle an die GPU über diese `GPUQueue` gesendeten Arbeiten zum Zeitpunkt des Aufrufs der Methode bearbeitet wurden.
- [`submit()`](/de/docs/Web/API/GPUQueue/submit) {{Experimental_Inline}}
  - : Plant die Ausführung von Befehls-Puffern, die durch ein oder mehrere [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekte dargestellt werden, durch die GPU.
- [`writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer) {{Experimental_Inline}}
  - : Schreibt eine bereitgestellte Datenquelle in einen gegebenen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer).
- [`writeTexture()`](/de/docs/Web/API/GPUQueue/writeTexture) {{Experimental_Inline}}
  - : Schreibt eine bereitgestellte Datenquelle in eine gegebene [`GPUTexture`](/de/docs/Web/API/GPUTexture).

## Beispiele

In unserem [Grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) definieren wir einige Vertex-Daten in einem {{jsxref("Float32Array")}}, das wir verwenden werden, um ein Dreieck zu zeichnen:

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Um diese Daten in einer Render-Pipeline zu verwenden, müssen wir sie in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) einfügen. Zuerst erstellen wir den Puffer:

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Um die Daten in den Puffer zu bekommen, können wir die Funktion [`writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer) verwenden, die dem Benutzeragenten die effizienteste Möglichkeit bietet, die Daten zu kopieren:

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

Später wird eine Reihe von Befehlen mithilfe der Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) in einen [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) kodiert. Der Befehls-Puffer wird dann über einen [`submit()`](/de/docs/Web/API/GPUQueue/submit)-Aufruf in die Warteschlange weitergeleitet, um von der GPU bearbeitet zu werden.

```js
device.queue.submit([commandEncoder.finish()]);
```

> [!NOTE]
> Studieren Sie die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/), um weitere Warteschlangenbeispiele zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
