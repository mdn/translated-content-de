---
title: GPUBindGroup
slug: Web/API/GPUBindGroup
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUBindGroup`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) basiert auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) und definiert eine Gruppe von Ressourcen, die zusammen gebunden werden und wie diese Ressourcen in Shader-Stufen verwendet werden.

Eine Instanz eines `GPUBindGroup`-Objekts wird mit der Methode [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPUBindGroup/label) {{Experimental_Inline}}
  - : Ein String, der eine Bezeichnung bietet, die verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Berechnungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel für die Erstellung eines Bind-Group-Layouts und dessen Verwendung als Vorlage bei der Erstellung einer Bind-Group.

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
