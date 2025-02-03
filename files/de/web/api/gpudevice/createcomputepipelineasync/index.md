---
title: "GPUDevice: Methode createComputePipelineAsync()"
short-title: createComputePipelineAsync()
slug: Web/API/GPUDevice/createComputePipelineAsync
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createComputePipelineAsync()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) erfüllt wird. Diese kann die „Compute Shader“-Stufe steuern und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden, sobald die Pipeline ohne Verzögerung genutzt werden kann.

> [!NOTE]
> Es ist generell vorzuziehen, diese Methode anstelle von [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) zu verwenden, wann immer möglich, da sie das Blockieren der GPU-Ausführung bei der Pipeline-Kompilierung verhindert.

## Syntax

```js-nolint
createComputePipelineAsync(descriptor)
```

### Parameter

- `descriptor`
  - : Siehe die Beschreibung des Deskriptors für die Methode [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline#syntax).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)-Objektinstanz erfüllt wird, wenn die erstellte Pipeline bereit ist, ohne zusätzliche Verzögerung verwendet zu werden.

### Validierung

Wenn die Pipelinenerstellung fehlschlägt und die resultierende Pipeline dadurch ungültig wird, lehnt das zurückgegebene Versprechen mit einem [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) ab:

- Wenn dies auf einen internen Fehler zurückzuführen ist, wird der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) einen `reason` von `"internal"` haben.
- Wenn dies auf einen Validierungsfehler zurückzuführen ist, wird der [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError) einen `reason` von `"validation"` haben.

Ein Validierungsfehler kann auftreten, wenn eine der folgenden Aussagen falsch ist:

- Die im `module` verwendete Arbeitsgruppenspeichergröße, die im `compute`-Eigenschaftsverweis angegeben ist, ist kleiner oder gleich dem `maxComputeWorkgroupStorageSize`- [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Das `module` verwendet eine Anzahl von Berechnungsaufrufen pro Arbeitsgruppe, die kleiner oder gleich dem `maxComputeInvocationsPerWorkgroup`- [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice) ist.
- Die Arbeitsgruppengröße des `module` ist kleiner oder gleich dem entsprechenden `maxComputeWorkgroupSizeX`, `maxComputeWorkgroupSizeY` oder `maxComputeWorkgroupSizeZ`- [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn die `entryPoint`-Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne „Compute Shader“-Einstiegspunktfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Das folgende Beispiel zeigt einen Prozess von:

- Erstellen eines Bindungsgruppendesigns mit [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout).
- Übergabe des `bindGroupLayout` an [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), um ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) zu erstellen.
- Sofortige Verwendung dieses Werts in einem Aufruf von `createComputePipelineAsync()`, um ein [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) zu erstellen.

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
