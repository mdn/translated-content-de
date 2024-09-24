---
title: "GPUDevice: createComputePipelineAsync()-Methode"
short-title: createComputePipelineAsync()
slug: Web/API/GPUDevice/createComputePipelineAsync
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`createComputePipelineAsync()`**-Methode der
{{domxref("GPUDevice")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer {{domxref("GPUComputePipeline")}} erfüllt wird. Diese kann die Berechnungsshader-Stufe steuern und in einem {{domxref("GPUComputePassEncoder")}} verwendet werden, sobald die Pipeline ohne Verzögerung bereit ist.

> [!NOTE]
> Es ist generell vorzuziehen, diese Methode über {{domxref("GPUDevice.createComputePipeline()")}} zu nutzen, wann immer es möglich ist, da sie das Blockieren der Ausführung von GPU-Operationen während der Pipeline-Kompilierung verhindert.

## Syntax

```js-nolint
createComputePipeline(descriptor)
```

### Parameter

- `descriptor`
  - : Siehe die Beschreibung des Deskriptors für die Methode [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline#syntax).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Instanz des {{domxref("GPUComputePipeline")}}-Objekts erfüllt wird, wenn die erstellte Pipeline bereit ist, ohne zusätzliche Verzögerung verwendet zu werden.

### Validierung

Falls die Pipelinenerstellung fehlschlägt und die resultierende Pipeline dadurch ungültig wird, wird das zurückgegebene Promise mit einem {{domxref("GPUPipelineError")}} abgelehnt:

- Wenn dies auf einen internen Fehler zurückzuführen ist, hat der {{domxref("GPUPipelineError")}} einen `reason` von `"internal"`.
- Wenn dies auf einen Validierungsfehler zurückzuführen ist, hat der {{domxref("GPUPipelineError")}} einen `reason` von `"validation"`.

Ein Validierungsfehler kann auftreten, wenn einer der folgenden Punkte falsch ist:

- Die Arbeitsgruppenspeichergröße, die vom `module` innerhalb der `compute`-Eigenschaft referenziert wird, ist kleiner oder gleich der {{domxref("GPUDevice")}}'s `maxComputeWorkgroupStorageSize` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- Das `module` nutzt eine Anzahl von Berechnungsaufrufen pro Arbeitsgruppe, die kleiner oder gleich der {{domxref("GPUDevice")}}'s `maxComputeInvocationsPerWorkgroup` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}} ist.
- Die Arbeitsgruppengröße des `module` ist kleiner oder gleich der entsprechenden `maxComputeWorkgroupSizeX`, `maxComputeWorkgroupSizeY` oder `maxComputeWorkgroupSizeZ` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}} des {{domxref("GPUDevice")}}.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Das folgende Beispiel zeigt einen Prozess von:

- Erstellen eines Bind-Group-Layouts mit {{domxref("GPUDevice.createBindGroupLayout()")}}.
- Einfügen des `bindGroupLayout` in {{domxref("GPUDevice.createPipelineLayout()")}}, um ein {{domxref("GPUPipelineLayout")}} zu erstellen.
- Verwendung dieses Wertes direkt in einem `createComputePipelineAsync()`-Aufruf zur Erstellung einer {{domxref("GPUComputePipeline")}}.

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
