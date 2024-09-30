---
title: "GPUDevice: createComputePipelineAsync()-Methode"
short-title: createComputePipelineAsync()
slug: Web/API/GPUDevice/createComputePipelineAsync
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createComputePipelineAsync()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) erfüllt wird. Diese kann die Berechnungsschaderstufe steuern und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden, sobald die Pipeline ohne Blockierung benutzbar ist.

> [!NOTE]
> Diese Methode sollte generell gegenüber [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) bevorzugt werden, wann immer möglich, da sie das Blockieren der GPU-Ausführung während der Pipeline-Kompilierung verhindert.

## Syntax

```js-nolint
createComputePipeline(descriptor)
```

### Parameter

- `descriptor`
  - : Siehe die Definition des Deskriptors für die Methode [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline#syntax).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)-Objektinstanz erfüllt wird, wenn die erstellte Pipeline ohne zusätzliche Verzögerung einsatzbereit ist.

### Validierung

Falls die Erstellung der Pipeline fehlschlägt und die resultierende Pipeline dadurch ungültig wird, lehnt das zurückgegebene Promise mit einem [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) ab:

- Wenn dies auf einen internen Fehler zurückzuführen ist, wird der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) einen `reason` von `"internal"` haben.
- Wenn dies auf einen Validierungsfehler zurückzuführen ist, wird der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) einen `reason` von `"validation"` haben.

Ein Validierungsfehler kann auftreten, wenn eine der folgenden Bedingungen falsch ist:

- Die Arbeitsgruppenspeichergröße, die vom im `compute`-Eigenschaft referenzierten `module` verwendet wird, ist kleiner oder gleich dem `maxComputeWorkgroupStorageSize`-[Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Das `module` verwendet eine Anzahl von Berechnungsaufrufen pro Arbeitsgruppe, die kleiner oder gleich dem `maxComputeInvocationsPerWorkgroup`-[Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice) ist.
- Die Arbeitsgruppengröße des `module` ist kleiner oder gleich dem entsprechenden `maxComputeWorkgroupSizeX`, `maxComputeWorkgroupSizeY` oder `maxComputeWorkgroupSizeZ`-[Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Das folgende Beispiel zeigt einen Prozess von:

- Erstellen eines Bind-Grup-Layouts mit [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout).
- Einfügen des `bindGroupLayout` in [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), um ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) zu erstellen.
- Verwenden dieses Wertes sofort in einem `createComputePipelineAsync()`-Aufruf, um eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) zu erstellen.

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
