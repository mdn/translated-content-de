---
title: GPUBindGroup
slug: Web/API/GPUBindGroup
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUBindGroup`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) basiert auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) und definiert eine Gruppe von Ressourcen, die zusammen in einer Gruppe gebunden werden und wie diese Ressourcen in Shader-Stufen verwendet werden.

Eine Instanz eines `GPUBindGroup`-Objekts wird mit der Methode [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`label`](/de/docs/Web/API/GPUBindGroup/label)
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, z. B. in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Berechnungsdemo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel für die Erstellung eines Bind-Gruppen-Layouts und die Verwendung dieses Layouts als Vorlage bei der Erstellung einer Bind-Gruppe.

```js
// …

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

const bindGroup = device.createBindGroup({
  layout: bindGroupLayout,
  entries: [
    {
      binding: 0,
      resource: {
        buffer: output,
      },
    },
  ],
});

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
