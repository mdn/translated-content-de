---
title: "GPURenderPassEncoder: end()-Methode"
short-title: end()
slug: Web/API/GPURenderPassEncoder/end
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`end()`**-Methode der
{{domxref("GPURenderPassEncoder")}}-Schnittstelle beendet die Aufzeichnung der aktuellen Renderpass-Kommando-Sequenz.

## Syntax

```js-nolint
end()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`end()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und der {{domxref("GPURenderPassEncoder")}} wird ungültig:

- Der {{domxref("GPURenderPassEncoder")}} ist offen (d.h. nicht bereits durch einen `end()`-Aufruf beendet).
- Es gibt keine aktive Okklusionsabfrage (d.h. begonnen über {{domxref("GPURenderPassEncoder.beginOcclusionQuery", "beginOcclusionQuery()")}}) im aktuellen Renderpass.
- Der Debug-Stack für den aktuellen Renderpass ist leer (d.h. keine Renderpass-Debuggruppe ist derzeit geöffnet, wie geöffnet durch {{domxref("GPURenderPassEncoder.pushDebugGroup", "pushDebugGroup()")}}).
- Die Anzahl der in diesem Renderpass kodierten Zeichenbefehle ist kleiner oder gleich der `maxDrawCount`-Eigenschaft, die im {{domxref("GPUCommandEncoder.beginRenderPass()")}}-Deskriptor festgelegt ist.

## Beispiele

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen {{domxref("GPUCommandEncoder")}} aufgezeichnet. Die meisten dieser Befehle stammen vom `GPURenderPassEncoder`, der über {{domxref("GPUCommandEncoder.beginRenderPass()")}} erstellt wurde. `end()` wird an einer geeigneten Stelle aufgerufen, um den Renderpass zu beenden.

```js
// ...

const renderPipeline = device.createRenderPipeline(pipelineDescriptor);

// Erstellen Sie GPUCommandEncoder, um Befehle an die GPU zu senden
// Hinweis: Renderpass-Deskriptor, Befehlsencoder usw. werden nach Gebrauch zerstört, ein frischer wird für jeden Frame benötigt.
const commandEncoder = device.createCommandEncoder();

// Erstellen Sie GPURenderPassDescriptor, um WebGPU mitzuteilen, in welche Textur gezeichnet werden soll, und initiieren Sie dann den Renderpass
const renderPassDescriptor = {
  colorAttachments: [
    {
      clearValue: clearColor,
      loadOp: "clear",
      storeOp: "store",
      view: context.getCurrentTexture().createView(),
    },
  ],
};

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// Zeichnen Sie das Dreieck
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

// Beenden Sie den Renderpass
passEncoder.end();

// Beenden Sie den Frame, indem Sie ein Array von Kommandobuffern zur Ausführung in die Befehlswarteschlange übergeben
device.queue.submit([commandEncoder.finish()]);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
