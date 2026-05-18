---
title: GPUSupportedLimits
slug: Web/API/GPUSupportedLimits
l10n:
  sourceCommit: 082fa6f16f15a707e0c305ee5ff9051d1d179124
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUSupportedLimits`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) beschreibt die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützten Grenzen.

{{InheritanceDiagram}}

## Instanzeigenschaften

Die folgenden Grenzen werden durch Eigenschaften in einem `GPUSupportedLimits`-Objekt dargestellt. Siehe den Abschnitt [Limits](https://gpuweb.github.io/gpuweb/#limits) der Spezifikation für detaillierte Beschreibungen, worauf sich die Grenzen beziehen.

| Grenzname                                                                                                                                                                                                                                                                                 | Standardwert             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `maxTextureDimension1D`                                                                                                                                                                                                                                                                   | 8192                     |
| `maxTextureDimension2D`                                                                                                                                                                                                                                                                   | 8192                     |
| `maxTextureDimension3D`                                                                                                                                                                                                                                                                   | 2048                     |
| `maxTextureArrayLayers`                                                                                                                                                                                                                                                                   | 256                      |
| `maxBindGroups`                                                                                                                                                                                                                                                                           | 4                        |
| `maxBindingsPerBindGroup`                                                                                                                                                                                                                                                                 | 640                      |
| `maxDynamicUniformBuffersPerPipelineLayout`                                                                                                                                                                                                                                               | 8                        |
| `maxDynamicStorageBuffersPerPipelineLayout`                                                                                                                                                                                                                                               | 4                        |
| `maxSampledTexturesPerShaderStage`                                                                                                                                                                                                                                                        | 16                       |
| `maxSamplersPerShaderStage`                                                                                                                                                                                                                                                               | 16                       |
| `maxStorageBuffersInFragmentStage`                                                                                                                                                                                                                                                        | 8                        |
| `maxStorageBuffersInVertexStage`                                                                                                                                                                                                                                                          | 8                        |
| `maxStorageBuffersPerShaderStage`                                                                                                                                                                                                                                                         | 8                        |
| `maxStorageTexturesInFragmentStage`                                                                                                                                                                                                                                                       | 4                        |
| `maxStorageTexturesInVertexStage`                                                                                                                                                                                                                                                         | 4                        |
| `maxStorageTexturesPerShaderStage`                                                                                                                                                                                                                                                        | 4                        |
| `maxUniformBuffersPerShaderStage`                                                                                                                                                                                                                                                         | 12                       |
| `maxUniformBufferBindingSize`                                                                                                                                                                                                                                                             | 65536 bytes              |
| `maxStorageBufferBindingSize`                                                                                                                                                                                                                                                             | 134217728 bytes (128 MB) |
| `minUniformBufferOffsetAlignment`                                                                                                                                                                                                                                                         | 256 bytes                |
| `minStorageBufferOffsetAlignment`                                                                                                                                                                                                                                                         | 256 bytes                |
| `maxVertexBuffers`                                                                                                                                                                                                                                                                        | 8                        |
| `maxBufferSize`                                                                                                                                                                                                                                                                           | 268435456 bytes (256 MB) |
| `maxVertexAttributes`                                                                                                                                                                                                                                                                     | 16                       |
| `maxVertexBufferArrayStride`                                                                                                                                                                                                                                                              | 2048 bytes               |
| `maxInterStageShaderComponents` {{deprecated_inline}} {{non-standard_inline}} (anstelle dessen `maxInterStageShaderVariables` verwenden, siehe [Hinweis zur Veraltung](https://developer.chrome.com/blog/new-in-webgpu-133#deprecate_maxinterstageshadercomponents_limit) für mehr Infos) | 60                       |
| `maxInterStageShaderVariables`                                                                                                                                                                                                                                                            | 16                       |
| `maxColorAttachments`                                                                                                                                                                                                                                                                     | 8                        |
| `maxColorAttachmentBytesPerSample`                                                                                                                                                                                                                                                        | 32                       |
| `maxComputeWorkgroupStorageSize`                                                                                                                                                                                                                                                          | 16384 bytes              |
| `maxComputeInvocationsPerWorkgroup`                                                                                                                                                                                                                                                       | 256                      |
| `maxComputeWorkgroupSizeX`                                                                                                                                                                                                                                                                | 256                      |
| `maxComputeWorkgroupSizeY`                                                                                                                                                                                                                                                                | 256                      |
| `maxComputeWorkgroupSizeZ`                                                                                                                                                                                                                                                                | 64                       |
| `maxComputeWorkgroupsPerDimension`                                                                                                                                                                                                                                                        | 65535                    |

## Beschreibung

Auf das `GPUSupportedLimits`-Objekt für den aktuellen Adapter wird über die [`GPUAdapter.limits`](/de/docs/Web/API/GPUAdapter/limits)-Eigenschaft zugegriffen.

Anstatt die genauen Grenzen jeder GPU zu melden, geben Browser typischerweise unterschiedliche Staffelwerte verschiedener Grenzen an (um die einzigartige Information zu verringern, die für das Fingerprinting verfügbar ist).
Zum Beispiel könnten die Stufen einer bestimmten Grenze 2048, 8192 und 32768 sein.
Wenn das tatsächliche Limit Ihrer GPU 16384 ist, wird der Browser trotzdem 8192 melden.

Da verschiedene Browser dies unterschiedlich handhaben und die Staffelwerte sich im Laufe der Zeit ändern können, ist es schwierig, eine genaue Angabe dessen zu machen, welche Grenzwerte zu erwarten sind — gründliches Testen wird empfohlen.

Beachten Sie, dass beim Aufruf von [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) zur Anforderung eines [`GPUDevice`](/de/docs/Web/API/GPUDevice), das einige Mindestanforderungen ("limits") erfüllt, Sie ein Objekt übergeben, das dieselben Eigenschaftsnamen wie `GPUSupportedLimits` hat.

## Beispiele

Im folgenden Code fragen wir den `GPUAdapter.limits` Wert von `maxBindGroups` ab, um zu sehen, ob er gleich oder größer als 6 ist.
Unsere theoretische Beispielanwendung benötigt idealerweise 6 Bind-Gruppen, also fügen wir dem `requiredLimits`-Objekt ein maximales Limit von 6 hinzu, wenn der zurückgegebene Wert >= 6 ist.
Dann fordern wir ein Gerät mit dieser Grenzanforderung mit [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) an:

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
