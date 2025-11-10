---
title: GPUBindGroupLayout
slug: Web/API/GPUBindGroupLayout
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUBindGroupLayout`** Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) definiert die Struktur und den Zweck von verwandten GPU-Ressourcen wie Buffern, die in einer Pipeline verwendet werden und dient als Vorlage bei der Erstellung von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s.

Eine Instanz eines `GPUBindGroupLayout`-Objekts wird mit der Methode [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout) erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPUBindGroupLayout/label)
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel dafür, wie eine Bind-Group-Layout erstellt und dann als Vorlage verwendet wird, wenn eine Bind-Group erstellt wird.

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
