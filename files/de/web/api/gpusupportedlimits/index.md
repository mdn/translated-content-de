---
title: GPUSupportedLimits
slug: Web/API/GPUSupportedLimits
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUSupportedLimits`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) beschreibt die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützten Grenzen.

Auf das `GPUSupportedLimits`-Objekt des aktuellen Adapters wird über die [`GPUAdapter.limits`](/de/docs/Web/API/GPUAdapter/limits)-Eigenschaft zugegriffen.

Es sollte beachtet werden, dass Browser, anstatt die genauen Grenzen jeder GPU zu melden, wahrscheinlich unterschiedliche Wertstufen verschiedener Grenzen melden, um die verfügbare einzigartige Information zu reduzieren, die für Drive-by-Fingerprinting genutzt werden könnte. Beispielsweise könnten die Stufen einer bestimmten Grenze 2048, 8192 und 32768 sein. Wenn das tatsächliche Limit Ihrer GPU 16384 ist, wird der Browser dennoch 8192 melden.

Da verschiedene Browser dies unterschiedlich handhaben und sich die Stufenwerte im Laufe der Zeit ändern können, ist es schwierig, eine genaue Angabe darüber zu machen, welche Grenzwerte zu erwarten sind — gründliche Tests werden empfohlen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Die folgenden Grenzen werden durch Eigenschaften in einem `GPUSupportedLimits`-Objekt dargestellt. Siehe den [Limits](https://gpuweb.github.io/gpuweb/#limits)-Abschnitt der Spezifikation für detaillierte Beschreibungen, worauf sich die Grenzen beziehen.

| Grenzname                                   | Standardwert             |
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
| `maxUniformBufferBindingSize`               | 65536 bytes              |
| `maxStorageBufferBindingSize`               | 134217728 bytes (128 MB) |
| `minUniformBufferOffsetAlignment`           | 256 bytes                |
| `minStorageBufferOffsetAlignment`           | 256 bytes                |
| `maxVertexBuffers`                          | 8                        |
| `maxBufferSize`                             | 268435456 bytes (256 MB) |
| `maxVertexAttributes`                       | 16                       |
| `maxVertexBufferArrayStride`                | 2048 bytes               |
| `maxInterStageShaderComponents`             | 60                       |
| `maxInterStageShaderVariables`              | 16                       |
| `maxColorAttachments`                       | 8                        |
| `maxColorAttachmentBytesPerSample`          | 32                       |
| `maxComputeWorkgroupStorageSize`            | 16384 bytes              |
| `maxComputeInvocationsPerWorkgroup`         | 256                      |
| `maxComputeWorkgroupSizeX`                  | 256                      |
| `maxComputeWorkgroupSizeY`                  | 256                      |
| `maxComputeWorkgroupSizeZ`                  | 64                       |
| `maxComputeWorkgroupsPerDimension`          | 65535                    |

## Beispiele

Im folgenden Code fragen wir den `GPUAdapter.limits`-Wert von `maxBindGroups` ab, um zu sehen, ob er gleich oder größer als 6 ist. Unsere theoretische Beispielanwendung benötigt idealerweise 6 Bind-Gruppen, daher fügen wir ein maximales Limit von 6 zum `requiredLimits`-Objekt hinzu, wenn der zurückgegebene Wert >= 6 ist. Wir fordern dann ein Gerät mit dieser Grenzanforderung an, indem wir [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) verwenden:

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
