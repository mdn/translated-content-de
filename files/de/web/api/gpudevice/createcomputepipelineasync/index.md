---
title: "GPUDevice: createComputePipelineAsync()-Methode"
short-title: createComputePipelineAsync()
slug: Web/API/GPUDevice/createComputePipelineAsync
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createComputePipelineAsync()`**-Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) erfüllt wird. Diese kann die Compute Shader-Stufe steuern und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden, sobald die Pipeline ohne Verzögerung genutzt werden kann.

> [!NOTE]
> Es ist generell vorzuziehen, diese Methode über [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) zu verwenden, wann immer dies möglich ist, da so die Blockierung der GPU-Operationen während der Pipeline-Kompilierung vermieden wird.

## Syntax

```js-nolint
createComputePipelineAsync(descriptor)
```

### Parameter

- `descriptor`
  - : Siehe die Definition des Descriptors für die Methode [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline#syntax).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)-Objektinstanz erfüllt wird, wenn die erstellte Pipeline ohne zusätzliche Verzögerung einsatzbereit ist.

### Validierung

Wenn die Pipeline-Erstellung fehlschlägt und die resultierende Pipeline dadurch ungültig wird, wird das zurückgegebene Promise mit einem [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) abgelehnt:

- Wenn dies auf einen internen Fehler zurückzuführen ist, wird der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) ein `reason` von `"internal"` haben.
- Wenn dies auf einen Validierungsfehler zurückzuführen ist, wird der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) ein `reason` von `"validation"` haben.

Ein Validierungsfehler kann auftreten, wenn eine der folgenden Bedingungen nicht erfüllt ist:

- Die im `module` referenzierte Workgroup-Speichergröße innerhalb der `compute`-Eigenschaft ist kleiner oder gleich dem `maxComputeWorkgroupStorageSize` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Das `module` verwendet eine Anzahl an Compute-Aufrufen pro Workgroup, die kleiner oder gleich dem `maxComputeInvocationsPerWorkgroup` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice) ist.
- Die Workgroup-Größe des `module` ist kleiner oder gleich dem entsprechenden `maxComputeWorkgroupSizeX`, `maxComputeWorkgroupSizeY`, oder `maxComputeWorkgroupSizeZ` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn die `entryPoint`-Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne Compute-Shader-Einstiegspunktfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Das folgende Beispiel zeigt einen Prozess:

- Erstellen eines Bindgroup-Layouts mit [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout).
- Übergabe des `bindGroupLayout` an [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), um ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) zu erstellen.
- Verwendung dieses Werts unmittelbar in einem `createComputePipelineAsync()`-Aufruf, um eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) zu erstellen.

```js
async function init() {
  // …

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

  const computePipeline = await device.createComputePipelineAsync({
    layout: device.createPipelineLayout({
      bindGroupLayouts: [bindGroupLayout],
    }),
    compute: {
      module: shaderModule,
      entryPoint: "main",
    },
  });

  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
