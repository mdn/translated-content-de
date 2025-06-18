---
title: "GPUDevice: createComputePipelineAsync() Methode"
short-title: createComputePipelineAsync()
slug: Web/API/GPUDevice/createComputePipelineAsync
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createComputePipelineAsync()`** Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice) Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) erfüllt wird. Diese kann die Compute-Shader-Stufe steuern und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden, sobald die Pipeline ohne Blockierungen einsatzbereit ist.

> [!NOTE]
> Es ist in der Regel vorzuziehen, diese Methode anstelle von [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) zu verwenden, wann immer dies möglich ist, da sie verhindert, dass die Ausführung der GPU-Operationen durch die Pipeline-Kompilierung blockiert wird.

## Syntax

```js-nolint
createComputePipelineAsync(descriptor)
```

### Parameter

- `descriptor`
  - : Siehe die Descriptor-Definition für die Methode [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline#syntax).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) Objektinstanz erfüllt wird, wenn die erstellte Pipeline einsatzbereit ist, ohne zusätzliche Verzögerungen.

### Validierung

Wenn die Pipelinenerstellung fehlschlägt und die resultierende Pipeline dadurch ungültig wird, wird das zurückgegebene Promise mit einem [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) abgelehnt:

- Wenn dies auf einen internen Fehler zurückzuführen ist, hat der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) einen `reason` von `"internal"`.
- Wenn dies auf einen Validierungsfehler zurückzuführen ist, hat der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) einen `reason` von `"validation"`.

Ein Validierungsfehler kann auftreten, wenn eines der folgenden Dinge nicht zutrifft:

- Die von dem im `compute`-Eigenschaft referenzierten `module` verwendete Arbeitsgruppenspeichergröße ist kleiner oder gleich dem `maxComputeWorkgroupStorageSize`- [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Das `module` verwendet eine Anzahl von Compute-Aufrufen pro Arbeitsgruppe, die kleiner oder gleich dem `maxComputeInvocationsPerWorkgroup`- [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice) ist.
- Die Arbeitsgruppengröße des `module` ist kleiner oder gleich dem entsprechenden `maxComputeWorkgroupSizeX`, `maxComputeWorkgroupSizeY` oder `maxComputeWorkgroupSizeZ`- [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn die `entryPoint`-Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne Compute-Shader-Einstiegspunktfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Das folgende Beispiel zeigt einen Prozess:

- Erstellen eines Bind-Gruppen-Layouts mit [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout).
- Einspeisen des `bindGroupLayout` in [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), um ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) zu erstellen.
- Unmittelbare Nutzung dieses Werts in einem `createComputePipelineAsync()` Aufruf, um eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) zu erstellen.

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
