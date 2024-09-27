---
title: "GPUComputePipeline: getBindGroupLayout()-Methode"
short-title: getBindGroupLayout()
slug: Web/API/GPUComputePipeline/getBindGroupLayout
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getBindGroupLayout()`**-Methode der [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)-Schnittstelle gibt das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt der Pipeline mit dem angegebenen Index zurück (d. h. enthalten im ursprünglichen Aufruf von [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) oder [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) für das Pipeline-Layout).

Wenn die [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) mit `layout: "auto"` erstellt wurde, ist diese Methode der einzige Weg, die von der Pipeline generierten [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s abzurufen.

## Syntax

```js-nolint
getBindGroupLayout(index)
```

### Parameter

- `index`

  - : Eine Zahl, die den Index des zurückzugebenden [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) darstellt.

### Rückgabewert

Ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objektinstanz.

### Validierung

Beim Aufruf von **`getBindGroupLayout()`** müssen die folgenden Kriterien erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt zurückgegeben:

- `index` ist kleiner als die Anzahl der [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekte, die im Pipeline-Layout verwendet werden.

## Beispiele

> [!NOTE]
> Sie können vollständige funktionierende Beispiele mit `getBindGroupLayout()` in Aktion in den [WebGPU-Beispielen](https://webgpu.github.io/webgpu-samples/) sehen.

```js
// ...

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

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
