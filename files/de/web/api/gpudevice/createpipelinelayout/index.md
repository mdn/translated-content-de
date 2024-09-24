---
title: "GPUDevice: createPipelineLayout()-Methode"
short-title: createPipelineLayout()
slug: Web/API/GPUDevice/createPipelineLayout
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`createPipelineLayout()`**-Methode des {{domxref("GPUDevice")}}-Interfaces erstellt ein {{domxref("GPUPipelineLayout")}}, das die im Rahmen der Pipeline verwendeten {{domxref("GPUBindGroupLayout")}} definiert. {{domxref("GPUBindGroup")}}-Objekte, die während der Befehlskodierung mit der Pipeline verwendet werden, müssen kompatible {{domxref("GPUBindGroupLayout")}}-Objekte besitzen.

## Syntax

```js-nolint
createPipelineLayout(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `bindGroupLayouts`
      - : Ein Array von {{domxref("GPUBindGroupLayout")}}-Objekten (die ihrerseits durch Aufrufe von {{domxref("GPUDevice.createBindGroupLayout()")}} erstellt werden). Jedes entspricht einem [`@group`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding)-Attribut im Shader-Code, der in einem verwandten {{domxref("GPUShaderModule")}} enthalten ist.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt beispielsweise in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen zu identifizieren.

### Rückgabewert

Eine Instanz des {{domxref("GPUPipelineLayout")}}-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createPipelineLayout()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und ein ungültiges {{domxref("GPUPipelineLayout")}}-Objekt zurückgegeben:

- Die {{domxref("GPUBindGroupLayout")}}-Objekte in `bindGroupLayouts` sind gültig.
- Die Anzahl der {{domxref("GPUBindGroupLayout")}}-Objekte in `bindGroupLayouts` ist kleiner als das `maxBindGroups`-{{domxref("GPUSupportedLimits", "Limit", "", "nocode")}} des {{domxref("GPUDevice")}}.

## Beispiele

> [!NOTE]
> Die [WebGPU-Samples](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Mehrere Bind-Group-Layouts, Bind-Group und Pipeline-Layout

Der folgende Ausschnitt:

- Erstellt ein {{domxref("GPUBindGroupLayout")}}, das eine Bindung mit einem Buffer, einer Textur und einem Sampler beschreibt.
- Erstellt ein {{domxref("GPUPipelineLayout")}} basierend auf dem {{domxref("GPUBindGroupLayout")}}.

```js
// ...

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

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
