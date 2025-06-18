---
title: "GPUDevice: createPipelineLayout() Methode"
short-title: createPipelineLayout()
slug: Web/API/GPUDevice/createPipelineLayout
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createPipelineLayout()`** Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces erstellt ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout), das die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s definiert, die von einer Pipeline verwendet werden. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die während der Befehlscodierung mit der Pipeline verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.

## Syntax

```js-nolint
createPipelineLayout(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `bindGroupLayouts`
      - : Ein Array von [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekten (die wiederum durch Aufrufe von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout) erstellt werden). Jedes entspricht einem [`@group`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding) Attribut im Shader-Code, der im [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) einer zugehörigen Pipeline verwendet wird.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

### Rückgabewert

Eine [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createPipelineLayout()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt zurückgegeben:

- Die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekte in `bindGroupLayouts` sind gültig.
- Die Anzahl der [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekte in `bindGroupLayouts` ist geringer als das [`GPUDevice`](/de/docs/Web/API/GPUDevice)`s `maxBindGroups` [Limit](/de/docs/Web/API/GPUSupportedLimits).

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Mehrere Bind-Group-Layouts, Bind-Group und Pipeline-Layout

Das folgende Snippet:

- Erstellt ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das eine Bindung mit einem Puffer, einer Textur und einem Sampler beschreibt.
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
