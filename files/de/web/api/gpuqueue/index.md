---
title: GPUQueue
slug: Web/API/GPUQueue
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUQueue`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} steuert die Ausführung von kodierten Befehlen auf der GPU.

Auf die primäre Warteschlange eines Geräts wird über die {{domxref("GPUDevice.queue")}}-Eigenschaft zugegriffen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("GPUQueue.label", "label")}} {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

## Instanz-Methoden

- {{domxref("GPUQueue.copyExternalImageToTexture", "copyExternalImageToTexture()")}} {{Experimental_Inline}}
  - : Kopiert einen Schnappschuss, der aus einem Quellbild, Video oder einer Leinwand aufgenommen wurde, in eine gegebene {{domxref("GPUTexture")}}.
- {{domxref("GPUQueue.onSubmittedWorkDone", "onSubmittedWorkDone()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn alle Arbeiten, die der GPU über diese `GPUQueue` zum Zeitpunkt des Aufrufs der Methode übergeben wurden, verarbeitet sind.
- {{domxref("GPUQueue.submit", "submit()")}} {{Experimental_Inline}}
  - : Plant die Ausführung von Befehls-Puffern, die durch ein oder mehrere {{domxref("GPUCommandBuffer")}}-Objekte dargestellt werden, durch die GPU.
- {{domxref("GPUQueue.writeBuffer", "writeBuffer()")}} {{Experimental_Inline}}
  - : Schreibt eine bereitgestellte Datenquelle in einen gegebenen {{domxref("GPUBuffer")}}.
- {{domxref("GPUQueue.writeTexture", "writeTexture()")}} {{Experimental_Inline}}
  - : Schreibt eine bereitgestellte Datenquelle in eine gegebene {{domxref("GPUTexture")}}.

## Beispiele

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) definieren wir einige Vertex-Daten in einem {{jsxref("Float32Array")}}, die wir verwenden werden, um ein Dreieck zu zeichnen:

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Um diese Daten in einer Render-Pipeline zu verwenden, müssen wir sie in einen {{domxref("GPUBuffer")}} einfügen. Zuerst erstellen wir den Puffer:

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // groß genug machen, um Vertizes zu speichern
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Um die Daten in den Puffer zu bekommen, können wir die {{domxref("GPUQueue.writeBuffer", "writeBuffer()")}}-Funktion verwenden, die dem Benutzeragenten ermöglicht, die effizienteste Methode zum Kopieren der Daten zu bestimmen:

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

Später wird eine Reihe von Befehlen in einem {{domxref("GPUCommandBuffer")}} mit der {{domxref("GPUCommandEncoder.finish()")}}-Methode kodiert. Der Befehls-Puffer wird dann über einen {{domxref("GPUQueue.submit", "submit()")}}-Aufruf in die Warteschlange gegeben, bereit zur Verarbeitung durch die GPU.

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
