---
title: "GPUComputePipeline: getBindGroupLayout() Methode"
short-title: getBindGroupLayout()
slug: Web/API/GPUComputePipeline/getBindGroupLayout
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Methode **`getBindGroupLayout()`** der [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)-Schnittstelle gibt das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt der Pipeline mit dem angegebenen Index zurück (d.h. einschließlich im ursprünglichen Aufruf von [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) oder [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync)).

Wenn die [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) mit `layout: "auto"` erstellt wurde, ist diese Methode der einzige Weg, um die von der Pipeline generierten [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s abzurufen.

## Syntax

```js-nolint
getBindGroupLayout(index)
```

### Parameter

- `index`

  - : Eine Zahl, die den Index des zurückzugebenden [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) darstellt.

### Rückgabewert

Eine Instanz des [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`getBindGroupLayout()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt zurückgegeben:

- `index` ist kleiner als die Anzahl der [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekte, die im Pipeline-Layout verwendet werden.

## Beispiele

> [!NOTE]
> Sie können vollständige funktionierende Beispiele mit `getBindGroupLayout()` in Aktion in den [WebGPU-Beispielen](https://webgpu.github.io/webgpu-samples/) sehen.

```js
// …

// Create a compute pipeline using layout: "auto" to automatically generate
// appropriate bind group layouts
const computePipeline = device.createComputePipeline({
  layout: "auto",
  compute: {
    module: shaderModule,
    entryPoint: "main",
  },
});

// Create a bind group with the auto-generated layout from the compute pipeline
const computeBindGroup = device.createBindGroup({
  layout: computePipeline.getBindGroupLayout(0),
  entries: [
    {
      binding: 0,
      resource: { buffer: storageBuffer },
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
