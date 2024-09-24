---
title: GPUComputePipeline
slug: Web/API/GPUComputePipeline
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUComputePipeline`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} repräsentiert eine Pipeline, die die Compute-Shader-Stufe steuert und in einem {{domxref("GPUComputePassEncoder")}} verwendet werden kann.

Eine Instanz eines `GPUComputePipeline`-Objekts kann mit den Methoden {{domxref("GPUDevice.createComputePipeline()")}} oder {{domxref("GPUDevice.createComputePipelineAsync()")}} erstellt werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("GPUComputePipeline.label", "label")}} {{Experimental_Inline}}
  - : Ein String, der eine Kennzeichnung bereitstellt, die verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

## Instanz-Methoden

- {{domxref("GPUComputePipeline.getBindGroupLayout", "getBindGroupLayout()")}} {{Experimental_Inline}}
  - : Gibt das {{domxref("GPUBindGroupLayout")}}-Objekt der Pipeline mit dem angegebenen Index zurück (d.h. enthalten im ursprünglichen Aufruf von {{domxref("GPUDevice.createComputePipeline()")}} oder {{domxref("GPUDevice.createComputePipelineAsync()")}} der Pipeline-Layout).

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt einen Prozess von:

- Erstellen eines Bind-Group-Layouts mit {{domxref("GPUDevice.createBindGroupLayout()")}}.
- Übergabe des `bindGroupLayout` an {{domxref("GPUDevice.createPipelineLayout()")}}, um ein {{domxref("GPUPipelineLayout")}} zu erstellen.
- Verwendung dieses Werts sofort in einem `createComputePipeline()`-Aufruf zur Erstellung eines `GPUComputePipeline`.

```js
// ...

const bindGroupLayout = device.createBindGroupLayout({
  entries: [
    {
      binding: 0,
      visibility: GPUShaderStage.COMPUTE,
      buffer: {
        type: "storage",
      },
    },
  ],
});

const computePipeline = device.createComputePipeline({
  layout: device.createPipelineLayout({
    bindGroupLayouts: [bindGroupLayout],
  }),
  compute: {
    module: shaderModule,
    entryPoint: "main",
  },
});

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
