---
title: "GPUDevice: Methode createComputePipelineAsync()"
short-title: createComputePipelineAsync()
slug: Web/API/GPUDevice/createComputePipelineAsync
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createComputePipelineAsync()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) erfüllt wird, die die Compute-Shader-Phase steuern kann und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann, sobald die Pipeline ohne Stalls verwendet werden kann.

> [!NOTE]
> Es ist im Allgemeinen vorzuziehen, diese Methode gegenüber [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) wann immer möglich zu verwenden, da sie das Blockieren der Ausführung von GPU-Operationen bei der Pipeline-Kompilierung verhindert.

## Syntax

```js-nolint
createComputePipeline(descriptor)
```

### Parameter

- `descriptor`
  - : Siehe die Definition des Deskriptors für die Methode [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline#syntax).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) Objektinstanz erfüllt wird, wenn die erstellte Pipeline bereit ist, ohne zusätzliche Verzögerung verwendet zu werden.

### Validierung

Falls die Erstellung der Pipeline fehlschlägt und die resultierende Pipeline dadurch ungültig wird, wird das zurückgegebene Promise mit einem [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) abgelehnt:

- Wenn dies aufgrund eines internen Fehlers geschieht, wird der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) einen `reason` von `"internal"` haben.
- Wenn dies aufgrund eines Validierungsfehlers geschieht, wird der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) einen `reason` von `"validation"` haben.

Ein Validierungsfehler kann auftreten, wenn eine der folgenden Bedingungen falsch ist:

- Die im `module` verwendete Workgroup-Speichergröße, auf die in der `compute`-Eigenschaft verwiesen wird, ist kleiner oder gleich der `maxComputeWorkgroupStorageSize` [Grenze](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Das `module` verwendet eine Anzahl von Berechnungsvorgängen pro Workgroup, die kleiner oder gleich der `maxComputeInvocationsPerWorkgroup` [Grenze](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice) ist.
- Die Workgroup-Größe des `module` ist kleiner oder gleich der entsprechenden `maxComputeWorkgroupSizeX`, `maxComputeWorkgroupSizeY` oder `maxComputeWorkgroupSizeZ` [Grenze](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Das folgende Beispiel zeigt einen Prozess von:

- Erstellen eines Bind-Group-Layouts mit [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout).
- Übergeben des `bindGroupLayout` in [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) zur Erstellung eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout).
- Verwenden dieses Werts sofort in einem `createComputePipelineAsync()`-Aufruf, um eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) zu erstellen.

```js
async function init() {
  // ...

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

  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
