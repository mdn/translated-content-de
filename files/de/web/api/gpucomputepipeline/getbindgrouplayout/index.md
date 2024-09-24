---
title: "GPUComputePipeline: getBindGroupLayout()-Methode"
short-title: getBindGroupLayout()
slug: Web/API/GPUComputePipeline/getBindGroupLayout
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getBindGroupLayout()`**-Methode der {{domxref("GPUComputePipeline")}}-Schnittstelle gibt das {{domxref("GPUBindGroupLayout")}}-Objekt der Pipeline mit dem angegebenen Index zurück (d. h. enthalten im ursprünglichen Aufruf von {{domxref("GPUDevice.createComputePipeline()")}} oder {{domxref("GPUDevice.createComputePipelineAsync()")}} der Pipeline-Layout).

Wenn die {{domxref("GPUComputePipeline")}} mit `layout: "auto"` erstellt wurde, ist diese Methode der einzige Weg, um die von der Pipeline generierten {{domxref("GPUBindGroupLayout")}}s abzurufen.

## Syntax

```js-nolint
getBindGroupLayout(index)
```

### Parameter

- `index`

  - : Eine Zahl, die den Index des zurückzugebenden {{domxref("GPUBindGroupLayout")}} darstellt.

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

// Erstellen Sie eine Compute-Pipeline mit layout: "auto", um automatisch
// geeignete Bind-Group-Layouts zu generieren
const computePipeline = device.createComputePipeline({
  layout: "auto",
  compute: {
    module: shaderModule,
    entryPoint: "main",
  },
});

// Erstellen Sie eine Bind-Group mit dem automatisch generierten Layout von der Compute-Pipeline
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
