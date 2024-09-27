---
title: "GPURenderPipeline: label-Eigenschaft"
short-title: label
slug: Web/API/GPURenderPipeline/label
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`label`**-Eigenschaft des [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Interfaces bietet ein Label, das verwendet werden kann, um das Objekt zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen zu identifizieren.

Dieses kann festgelegt werden, indem eine `label`-Eigenschaft im Deskriptionsobjekt bereitgestellt wird, das in den ursprünglichen Anruf von [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) übergeben wird. Außerdem kann es direkt am `GPURenderPipeline`-Objekt gesetzt und abgerufen werden.

## Wert

Ein String. Wenn dies wie oben beschrieben nicht zuvor gesetzt wurde, wird es ein leerer String sein.

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

Festlegen eines Labels über einen [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline)-Aufruf und anschließendes Abrufen über `GPURenderPipeline.label`:

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
