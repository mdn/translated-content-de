---
title: GPUSupportedLimits
slug: Web/API/GPUSupportedLimits
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUSupportedLimits`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) beschreibt die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützten Grenzwerte.

Auf das `GPUSupportedLimits`-Objekt für den aktuellen Adapter wird über die [`GPUAdapter.limits`](/de/docs/Web/API/GPUAdapter/limits)-Eigenschaft zugegriffen.

Es ist zu beachten, dass Browser eher unterschiedliche Wertstufen verschiedener Grenzwerte melden, anstatt die genauen Grenzwerte jeder GPU zu berichten. Dadurch wird die verfügbare einzigartige Information für das sogenannte „Drive-by-Fingerprinting“ reduziert. Beispielsweise könnten die Stufen eines bestimmten Grenzwerts 2048, 8192 und 32768 sein. Wenn der tatsächliche Grenzwert Ihrer GPU 16384 ist, wird der Browser dennoch 8192 melden.

Da unterschiedliche Browser dies unterschiedlich handhaben und sich die Wertstufen im Laufe der Zeit ändern können, ist es schwierig, genau vorherzusagen, welche Grenzwertwerte zu erwarten sind — ausführliche Tests werden empfohlen.

{{InheritanceDiagram}}

## Instanzeigenschaften

Die folgenden Grenzwerte werden durch Eigenschaften in einem `GPUSupportedLimits`-Objekt dargestellt. Siehe den [Limits](https://gpuweb.github.io/gpuweb/#limits)-Abschnitt der Spezifikation für detaillierte Beschreibungen, worauf sich die Grenzwerte beziehen.

| Grenzwertname                               | Standardwert             |
| ------------------------------------------- | ------------------------ |
| `maxTextureDimension1D`                     | 8192                     |
| `maxTextureDimension2D`                     | 8192                     |
| `maxTextureDimension3D`                     | 2048                     |
| `maxTextureArrayLayers`                     | 256                      |
| `maxBindGroups`                             | 4                        |
| `maxBindingsPerBindGroup`                   | 640                      |
| `maxDynamicUniformBuffersPerPipelineLayout` | 8                        |
| `maxDynamicStorageBuffersPerPipelineLayout` | 4                        |
| `maxSampledTexturesPerShaderStage`          | 16                       |
| `maxSamplersPerShaderStage`                 | 16                       |
| `maxStorageBuffersPerShaderStage`           | 8                        |
| `maxStorageTexturesPerShaderStage`          | 4                        |
| `maxUniformBuffersPerShaderStage`           | 12                       |
| `maxUniformBufferBindingSize`               | 65536 Bytes              |
| `maxStorageBufferBindingSize`               | 134217728 Bytes (128 MB) |
| `minUniformBufferOffsetAlignment`           | 256 Bytes                |
| `minStorageBufferOffsetAlignment`           | 256 Bytes                |
| `maxVertexBuffers`                          | 8                        |
| `maxBufferSize`                             | 268435456 Bytes (256 MB) |
| `maxVertexAttributes`                       | 16                       |
| `maxVertexBufferArrayStride`                | 2048 Bytes               |
| `maxInterStageShaderComponents`             | 60                       |
| `maxInterStageShaderVariables`              | 16                       |
| `maxColorAttachments`                       | 8                        |
| `maxColorAttachmentBytesPerSample`          | 32                       |
| `maxComputeWorkgroupStorageSize`            | 16384 Bytes              |
| `maxComputeInvocationsPerWorkgroup`         | 256                      |
| `maxComputeWorkgroupSizeX`                  | 256                      |
| `maxComputeWorkgroupSizeY`                  | 256                      |
| `maxComputeWorkgroupSizeZ`                  | 64                       |
| `maxComputeWorkgroupsPerDimension`          | 65535                    |

## Beispiele

Im folgenden Code prüfen wir den `GPUAdapter.limits`-Wert von `maxBindGroups`, um zu sehen, ob er gleich oder größer als 6 ist. Unsere theoretische Beispielanwendung benötigt idealerweise 6 Bindungsgruppen, daher fügen wir dem `requiredLimits`-Objekt ein Maximalgrenze von 6 hinzu, wenn der zurückgegebene Wert >= 6 ist. Wir fordern dann ein Gerät mit dieser Grenzwertanforderung an, indem wir [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) verwenden:

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const requiredLimits = {};

  // App ideally needs 6 bind groups, so we'll try to request what the app needs
  if (adapter.limits.maxBindGroups >= 6) {
    requiredLimits.maxBindGroups = 6;
  }

  const device = await adapter.requestDevice({
    requiredLimits,
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
