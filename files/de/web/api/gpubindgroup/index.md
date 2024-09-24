---
title: GPUBindGroup
slug: Web/API/GPUBindGroup
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUBindGroup`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} basiert auf einem {{domxref("GPUBindGroupLayout")}} und definiert eine Gruppe von Ressourcen, die zusammen gebunden werden, und wie diese Ressourcen in Shader-Stufen verwendet werden.

Ein `GPUBindGroup`-Objekt wird mit der Methode {{domxref("GPUDevice.createBindGroup()")}} erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("GPUBindGroup.label", "label")}} {{Experimental_Inline}}
  - : Ein String, der ein Etikett bereitstellt, mit dem das Objekt identifiziert werden kann, zum Beispiel in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Unser [grundlegendes Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel für die Erstellung eines Bindungsgruppenlayouts und dessen Verwendung als Vorlage bei der Erstellung einer Bindungsgruppe.

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
