---
title: "GPUComputePipeline: Methode getBindGroupLayout()"
short-title: getBindGroupLayout()
slug: Web/API/GPUComputePipeline/getBindGroupLayout
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getBindGroupLayout()`**-Methode der [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)-Schnittstelle gibt das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt der Pipeline mit dem gegebenen Index zurück (d.h. eingeschlossen in das ursprüngliche [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline)- oder [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync)-Aufruf Layout der Pipeline).

Wenn die [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) mit `layout: "auto"` erstellt wurde, ist diese Methode die einzige Möglichkeit, die von der Pipeline generierten [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s abzurufen.

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

Die folgenden Kriterien müssen erfüllt sein, wenn **`getBindGroupLayout()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) Objekt zurückgegeben:

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
