---
title: GPUSupportedLimits
slug: Web/API/GPUSupportedLimits
l10n:
  sourceCommit: d7438905d75890632212e7ea856f9e8f44ce8fef
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUSupportedLimits`** Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) beschreibt die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützten Grenzen.

Das `GPUSupportedLimits`-Objekt für den aktuellen Adapter wird über die Eigenschaft [`GPUAdapter.limits`](/de/docs/Web/API/GPUAdapter/limits) abgerufen.

Sie sollten beachten, dass Browser anstatt die genauen Begrenzungen jeder GPU zu melden, wahrscheinlich unterschiedliche Stufenwerte verschiedener Begrenzungen angeben werden, um die verfügbaren eindeutigen Informationen zur Vermeidung von Fingerprinting zu verringern. Zum Beispiel könnten die Stufen einer bestimmten Begrenzung 2048, 8192 und 32768 sein. Wenn das tatsächliche Limit Ihrer GPU 16384 ist, wird der Browser trotzdem 8192 melden.

Da verschiedene Browser dies unterschiedlich behandeln und sich die Stufenwerte im Laufe der Zeit ändern können, ist es schwierig, eine genaue Angabe darüber zu machen, welche Limitwerte zu erwarten sind — gründliche Tests werden empfohlen.

{{InheritanceDiagram}}

## Instanzeigenschaften

Die folgenden Begrenzungen werden durch Eigenschaften eines `GPUSupportedLimits`-Objekts dargestellt. Siehe den [Limits](https://gpuweb.github.io/gpuweb/#limits)-Abschnitt der Spezifikation für detaillierte Beschreibungen, worauf sich die Begrenzungen beziehen.

| Begrenzungsname                                                                                                                                                                                                                                                                                    | Standardwert             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `maxTextureDimension1D`                                                                                                                                                                                                                                                                            | 8192                     |
| `maxTextureDimension2D`                                                                                                                                                                                                                                                                            | 8192                     |
| `maxTextureDimension3D`                                                                                                                                                                                                                                                                            | 2048                     |
| `maxTextureArrayLayers`                                                                                                                                                                                                                                                                            | 256                      |
| `maxBindGroups`                                                                                                                                                                                                                                                                                    | 4                        |
| `maxBindingsPerBindGroup`                                                                                                                                                                                                                                                                          | 640                      |
| `maxDynamicUniformBuffersPerPipelineLayout`                                                                                                                                                                                                                                                        | 8                        |
| `maxDynamicStorageBuffersPerPipelineLayout`                                                                                                                                                                                                                                                        | 4                        |
| `maxSampledTexturesPerShaderStage`                                                                                                                                                                                                                                                                 | 16                       |
| `maxSamplersPerShaderStage`                                                                                                                                                                                                                                                                        | 16                       |
| `maxStorageBuffersPerShaderStage`                                                                                                                                                                                                                                                                  | 8                        |
| `maxStorageTexturesPerShaderStage`                                                                                                                                                                                                                                                                 | 4                        |
| `maxUniformBuffersPerShaderStage`                                                                                                                                                                                                                                                                  | 12                       |
| `maxUniformBufferBindingSize`                                                                                                                                                                                                                                                                      | 65536 bytes              |
| `maxStorageBufferBindingSize`                                                                                                                                                                                                                                                                      | 134217728 bytes (128 MB) |
| `minUniformBufferOffsetAlignment`                                                                                                                                                                                                                                                                  | 256 bytes                |
| `minStorageBufferOffsetAlignment`                                                                                                                                                                                                                                                                  | 256 bytes                |
| `maxVertexBuffers`                                                                                                                                                                                                                                                                                 | 8                        |
| `maxBufferSize`                                                                                                                                                                                                                                                                                    | 268435456 bytes (256 MB) |
| `maxVertexAttributes`                                                                                                                                                                                                                                                                              | 16                       |
| `maxVertexBufferArrayStride`                                                                                                                                                                                                                                                                       | 2048 bytes               |
| `maxInterStageShaderComponents` {{deprecated_inline}} {{non-standard_inline}} (verwenden Sie stattdessen `maxInterStageShaderVariables`, siehe [Abkündigungshinweis](https://developer.chrome.com/blog/new-in-webgpu-133#deprecate_maxinterstageshadercomponents_limit) für weitere Informationen) | 60                       |
| `maxInterStageShaderVariables`                                                                                                                                                                                                                                                                     | 16                       |
| `maxColorAttachments`                                                                                                                                                                                                                                                                              | 8                        |
| `maxColorAttachmentBytesPerSample`                                                                                                                                                                                                                                                                 | 32                       |
| `maxComputeWorkgroupStorageSize`                                                                                                                                                                                                                                                                   | 16384 bytes              |
| `maxComputeInvocationsPerWorkgroup`                                                                                                                                                                                                                                                                | 256                      |
| `maxComputeWorkgroupSizeX`                                                                                                                                                                                                                                                                         | 256                      |
| `maxComputeWorkgroupSizeY`                                                                                                                                                                                                                                                                         | 256                      |
| `maxComputeWorkgroupSizeZ`                                                                                                                                                                                                                                                                         | 64                       |
| `maxComputeWorkgroupsPerDimension`                                                                                                                                                                                                                                                                 | 65535                    |

## Beispiele

Im folgenden Code fragen wir den `GPUAdapter.limits`-Wert von `maxBindGroups` ab, um zu sehen, ob er gleich oder größer als 6 ist. Unsere theoretische Beispielanwendung benötigt idealerweise 6 Bindungsgruppen. Wenn der zurückgegebene Wert >= 6 ist, fügen wir dem `requiredLimits`-Objekt eine maximale Begrenzung von 6 hinzu. Anschließend bitten wir um ein Gerät mit dieser Begrenzungsanforderung unter Verwendung von [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice):

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
