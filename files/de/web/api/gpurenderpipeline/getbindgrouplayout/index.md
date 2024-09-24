---
title: "GPURenderPipeline: Methode getBindGroupLayout()"
short-title: getBindGroupLayout()
slug: Web/API/GPURenderPipeline/getBindGroupLayout
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getBindGroupLayout()`**-Methode des {{domxref("GPURenderPipeline")}}-Interfaces gibt das {{domxref("GPUBindGroupLayout")}}-Objekt der Pipeline mit dem angegebenen Index zurück (d.h. in der ursprünglichen {{domxref("GPUDevice.createRenderPipeline()")}}- oder {{domxref("GPUDevice.createRenderPipelineAsync()")}}-Aufruf Pipeline-Layout enthalten).

Wenn die {{domxref("GPURenderPipeline")}} mit `layout: "auto"` erstellt wurde, ist diese Methode die einzige Möglichkeit, die vom Pipeline generierten {{domxref("GPUBindGroupLayout")}}s zu erhalten.

## Syntax

```js-nolint
getBindGroupLayout(index)
```

### Parameter

- `index`

  - : Eine Zahl, die den Index des zurückzugebenden {{domxref("GPUBindGroupLayout")}}-Objekts darstellt.

### Rückgabewert

Eine Instanz des {{domxref("GPUBindGroupLayout")}}-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`getBindGroupLayout()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} generiert und ein ungültiges {{domxref("GPUBindGroupLayout")}}-Objekt zurückgegeben:

- `index` ist kleiner als die Anzahl der im Pipeline-Layout verwendeten {{domxref("GPUBindGroupLayout")}}-Objekte.

## Beispiele

> [!NOTE]
> Sie können vollständige funktionierende Beispiele mit `getBindGroupLayout()` in Aktion in den [WebGPU-Beispielen](https://webgpu.github.io/webgpu-samples/) sehen.

```js
// ...

// Erstellen Sie eine Render-Pipeline mit layout: "auto" zur automatischen Generierung
// geeigneter Bind Group Layouts
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

// ...

// Erstellen Sie eine Bind Group mit dem automatisch generierten Layout aus der Render-Pipeline
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

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
