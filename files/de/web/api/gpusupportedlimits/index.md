---
title: GPUSupportedLimits
slug: Web/API/GPUSupportedLimits
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUSupportedLimits`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) beschreibt die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützten Grenzen.

Das `GPUSupportedLimits`-Objekt für den aktuellen Adapter wird über die [`GPUAdapter.limits`](/de/docs/Web/API/GPUAdapter/limits)-Eigenschaft aufgerufen.

Sie sollten beachten, dass Browser, anstatt die genauen Grenzen jeder GPU zu melden, wahrscheinlich verschiedene Stufenwerte verschiedener Grenzen melden werden, um die verfügbare eindeutige Information zu reduzieren, die für Drive-by-Fingerprinting genutzt werden kann. Zum Beispiel könnten die Stufen einer bestimmten Grenze 2048, 8192 und 32768 sein. Wenn das tatsächliche Limit Ihrer GPU 16384 ist, wird der Browser dennoch 8192 melden.

Da verschiedene Browser dies unterschiedlich handhaben und sich die Stufenwerte im Laufe der Zeit ändern können, ist es schwierig, eine genaue Einschätzung zu geben, welche Grenzwerte zu erwarten sind — gründliches Testen wird empfohlen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Die folgenden Grenzen werden durch Eigenschaften eines `GPUSupportedLimits`-Objekts dargestellt. Siehe den Abschnitt [Grenzen](https://gpuweb.github.io/gpuweb/#limits) der Spezifikation für detaillierte Beschreibungen, wozu die Grenzen gehören.

| Name der Grenze                                                                                                                                                                                                                                                                                        | Standardwert             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| `maxTextureDimension1D`                                                                                                                                                                                                                                                                                | 8192                     |
| `maxTextureDimension2D`                                                                                                                                                                                                                                                                                | 8192                     |
| `maxTextureDimension3D`                                                                                                                                                                                                                                                                                | 2048                     |
| `maxTextureArrayLayers`                                                                                                                                                                                                                                                                                | 256                      |
| `maxBindGroups`                                                                                                                                                                                                                                                                                        | 4                        |
| `maxBindingsPerBindGroup`                                                                                                                                                                                                                                                                              | 640                      |
| `maxDynamicUniformBuffersPerPipelineLayout`                                                                                                                                                                                                                                                            | 8                        |
| `maxDynamicStorageBuffersPerPipelineLayout`                                                                                                                                                                                                                                                            | 4                        |
| `maxSampledTexturesPerShaderStage`                                                                                                                                                                                                                                                                     | 16                       |
| `maxSamplersPerShaderStage`                                                                                                                                                                                                                                                                            | 16                       |
| `maxStorageBuffersPerShaderStage`                                                                                                                                                                                                                                                                      | 8                        |
| `maxStorageTexturesPerShaderStage`                                                                                                                                                                                                                                                                     | 4                        |
| `maxUniformBuffersPerShaderStage`                                                                                                                                                                                                                                                                      | 12                       |
| `maxUniformBufferBindingSize`                                                                                                                                                                                                                                                                          | 65536 Bytes              |
| `maxStorageBufferBindingSize`                                                                                                                                                                                                                                                                          | 134217728 Bytes (128 MB) |
| `minUniformBufferOffsetAlignment`                                                                                                                                                                                                                                                                      | 256 Bytes                |
| `minStorageBufferOffsetAlignment`                                                                                                                                                                                                                                                                      | 256 Bytes                |
| `maxVertexBuffers`                                                                                                                                                                                                                                                                                     | 8                        |
| `maxBufferSize`                                                                                                                                                                                                                                                                                        | 268435456 Bytes (256 MB) |
| `maxVertexAttributes`                                                                                                                                                                                                                                                                                  | 16                       |
| `maxVertexBufferArrayStride`                                                                                                                                                                                                                                                                           | 2048 Bytes               |
| `maxInterStageShaderComponents` {{deprecated_inline}} {{non-standard_inline}} (verwenden Sie stattdessen `maxInterStageShaderVariables`, siehe [Hinweis zur Abschaffung](https://developer.chrome.com/blog/new-in-webgpu-133#deprecate_maxinterstageshadercomponents_limit) für weitere Informationen) | 60                       |
| `maxInterStageShaderVariables`                                                                                                                                                                                                                                                                         | 16                       |
| `maxColorAttachments`                                                                                                                                                                                                                                                                                  | 8                        |
| `maxColorAttachmentBytesPerSample`                                                                                                                                                                                                                                                                     | 32                       |
| `maxComputeWorkgroupStorageSize`                                                                                                                                                                                                                                                                       | 16384 Bytes              |
| `maxComputeInvocationsPerWorkgroup`                                                                                                                                                                                                                                                                    | 256                      |
| `maxComputeWorkgroupSizeX`                                                                                                                                                                                                                                                                             | 256                      |
| `maxComputeWorkgroupSizeY`                                                                                                                                                                                                                                                                             | 256                      |
| `maxComputeWorkgroupSizeZ`                                                                                                                                                                                                                                                                             | 64                       |
| `maxComputeWorkgroupsPerDimension`                                                                                                                                                                                                                                                                     | 65535                    |

## Beispiele

Im folgenden Code fragen wir den `GPUAdapter.limits`-Wert von `maxBindGroups` ab, um zu sehen, ob er gleich oder größer als 6 ist. Unsere theoretische Beispielanwendung benötigt idealerweise 6 Bindgruppen, also fügen wir dem `requiredLimits`-Objekt ein maximales Limit von 6 hinzu, wenn der zurückgegebene Wert >= 6 ist. Anschließend fordern wir ein Gerät mit diesem Grenzwertanforderung mithilfe von [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) an:

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

  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
