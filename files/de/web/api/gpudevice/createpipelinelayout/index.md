---
title: "GPUDevice: createPipelineLayout() Methode"
short-title: createPipelineLayout()
slug: Web/API/GPUDevice/createPipelineLayout
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createPipelineLayout()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout), das die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s definiert, die von einer Pipeline verwendet werden. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die während der Befehlscodierung mit der Pipeline verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.

## Syntax

```js-nolint
createPipelineLayout(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `bindGroupLayouts`
      - : Ein Array von [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekten (die wiederum durch Aufrufe von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout) erstellt werden). Jedes entspricht einem [`@group`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding)-Attribut im Shader-Code, der im zugehörigen [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) enthalten ist.
    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung bereitstellt, die beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen verwendet werden kann.

### Rückgabewert

Eine Instanz eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekts.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`createPipelineLayout()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt zurückgegeben:

- Die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekte in `bindGroupLayouts` sind gültig.
- Die Anzahl der [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekte in `bindGroupLayouts` ist kleiner als die `maxBindGroups`-[Grenze](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Mehrere Bind Group Layouts, Bind Group und Pipeline Layout

Der folgende Codeausschnitt:

- Erstellt ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das eine Bindung mit einem Buffer, einer Textur und einem Sampler beschreibt.
- Erstellt ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) basierend auf dem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout).

```js
// …

const bindGroupLayout = device.createBindGroupLayout({
  entries: [
    {
      binding: 0,
      visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
      buffer: {},
    },
    {
      binding: 1,
      visibility: GPUShaderStage.FRAGMENT,
      texture: {},
    },
    {
      binding: 2,
      visibility: GPUShaderStage.FRAGMENT,
      sampler: {},
    },
  ],
});

const pipelineLayout = device.createPipelineLayout({
  bindGroupLayouts: [bindGroupLayout],
});

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
