---
title: GPUBindGroupLayout
slug: Web/API/GPUBindGroupLayout
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUBindGroupLayout`**-Schnittstelle der [WebGPU-API](/de/docs/Web/API/WebGPU_API) definiert die Struktur und den Zweck verwandter GPU-Ressourcen wie Puffern, die in einer Pipeline verwendet werden, und wird als Vorlage verwendet, wenn [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s erstellt werden.

Ein `GPUBindGroupLayout`-Objekt wird mit der Methode [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout) erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPUBindGroupLayout/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das genutzt werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Rechenbeispiel](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel, wie eine Bindungsgruppen-Layout erstellt und dann als Vorlage für die Erstellung einer Bindungsgruppe verwendet wird.

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

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
