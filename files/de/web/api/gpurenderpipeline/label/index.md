---
title: "GPURenderPipeline: label-Eigenschaft"
short-title: label
slug: Web/API/GPURenderPipeline/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`label`**-Eigenschaft der
{{domxref("GPURenderPipeline")}}-Schnittstelle bietet ein Label, das verwendet werden kann, um das Objekt zu identifizieren, z. B. in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

Dies kann festgelegt werden, indem eine `label`-Eigenschaft im Deskriptorobjekt angegeben wird, das an den ursprünglichen {{domxref("GPUDevice.createRenderPipeline()")}}- oder {{domxref("GPUDevice.createRenderPipelineAsync()")}}-Aufruf übergeben wird, oder Sie können es direkt am `GPURenderPipeline`-Objekt abrufen und festlegen.

## Wert

Ein String. Wenn dies zuvor nicht wie oben beschrieben festgelegt wurde, wird es ein leerer String sein.

## Beispiele

Festlegen und Abrufen eines Labels über `GPURenderPipeline.label`:

```js
// ...

const pipelineDescriptor = {
  vertex: {
    module: shaderModule,
    entryPoint: "vertex_main",
    buffers: vertexBuffers,
  },
  fragment: {
    module: shaderModule,
    entryPoint: "fragment_main",
    targets: [
      {
        format: navigator.gpu.getPreferredCanvasFormat(),
      },
    ],
  },
  primitive: {
    topology: "triangle-list",
  },
  layout: "auto",
};

const renderPipeline = device.createRenderPipeline(pipelineDescriptor);

renderPipeline.label = "myrenderpipeline";

console.log(renderPipeline.label); // "myrenderpipeline"
```

Festlegen eines Labels über einen {{domxref("GPUDevice.createRenderPipeline()")}}-Aufruf und anschließendes Abrufen über `GPURenderPipeline.label`:

```js
// ...

const pipelineDescriptor = {
  vertex: {
    module: shaderModule,
    entryPoint: "vertex_main",
    buffers: vertexBuffers,
  },
  fragment: {
    module: shaderModule,
    entryPoint: "fragment_main",
    targets: [
      {
        format: navigator.gpu.getPreferredCanvasFormat(),
      },
    ],
  },
  primitive: {
    topology: "triangle-list",
  },
  layout: "auto",
  label: "myrenderpipeline",
};

const renderPipeline = device.createRenderPipeline(pipelineDescriptor);

console.log(renderPipeline.label); // "myrenderpipeline"
```

## Spezifikationen

{{Specifications}}

## Kompatibilität von Browsern

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
