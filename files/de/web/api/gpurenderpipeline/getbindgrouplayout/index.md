---
title: "GPURenderPipeline: Methode getBindGroupLayout()"
short-title: getBindGroupLayout()
slug: Web/API/GPURenderPipeline/getBindGroupLayout
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getBindGroupLayout()`**-Methode des [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Interfaces gibt das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt der Pipeline mit dem angegebenen Index zurück (d.h. enthalten im ursprünglichen Aufruf von [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) für das Pipeline-Layout).

Wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) mit `layout: "auto"` erstellt wurde, ist diese Methode der einzige Weg, um die von der Pipeline generierten [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s abzurufen.

## Syntax

```js-nolint
getBindGroupLayout(index)
```

### Parameter

- `index`

  - : Eine Zahl, die den Index des zurückzugebenden [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) repräsentiert.

### Rückgabewert

Ein Instanzobjekt von [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`getBindGroupLayout()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt zurückgegeben:

- `index` ist kleiner als die Anzahl der im Pipeline-Layout verwendeten [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekte.

## Beispiele

> [!NOTE]
> Sie können vollständige funktionierende Beispiele mit der Nutzung von `getBindGroupLayout()` in den [WebGPU-Beispielen](https://webgpu.github.io/webgpu-samples/) sehen.

```js
// …

// Create a render pipeline using layout: "auto" to automatically generate
// appropriate bind group layouts
const fullscreenQuadPipeline = device.createRenderPipeline({
  layout: "auto",
  vertex: {
    module: device.createShaderModule({
      code: fullscreenTexturedQuadWGSL,
    }),
    entryPoint: "vert_main",
  },
  fragment: {
    module: device.createShaderModule({
      code: fullscreenTexturedQuadWGSL,
    }),
    entryPoint: "frag_main",
    targets: [
      {
        format: presentationFormat,
      },
    ],
  },
  primitive: {
    topology: "triangle-list",
  },
});

// …

// Create a bind group with the auto-generated layout from the render pipeline
const showResultBindGroup = device.createBindGroup({
  layout: fullscreenQuadPipeline.getBindGroupLayout(0),
  entries: [
    {
      binding: 0,
      resource: sampler,
    },
    {
      binding: 1,
      resource: textures[1].createView(),
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
