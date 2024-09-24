---
title: GPUSupportedLimits
slug: Web/API/GPUSupportedLimits
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`GPUSupportedLimits`**-Interface der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} beschreibt die von einem {{domxref("GPUAdapter")}} unterstützten Grenzen.

Das `GPUSupportedLimits`-Objekt für den aktuellen Adapter wird über die {{domxref("GPUAdapter.limits")}}-Eigenschaft abgerufen.

Sie sollten beachten, dass Browser möglicherweise keine genauen Einschränkungen jeder GPU melden, sondern unterschiedliche Tier-Werte verschiedener Einschränkungen, um die einzigartige Information zu reduzieren, die durch "Drive-by Fingerprinting" verfügbar wird. Beispielsweise könnten die Tiers einer bestimmten Grenze 2048, 8192 und 32768 sein. Wenn das tatsächliche Limit Ihrer GPU 16384 ist, wird der Browser trotzdem 8192 melden.

Da verschiedene Browser dies unterschiedlich handhaben und die Tier-Werte im Laufe der Zeit ändern können, ist es schwer, eine genaue Vorhersage darüber zu treffen, welche Grenzwerte zu erwarten sind — gründliches Testen ist ratsam.

{{InheritanceDiagram}}

## Instanzeigenschaften

Die folgenden Grenzen werden durch Eigenschaften in einem `GPUSupportedLimits`-Objekt dargestellt. Siehe den [Limits-Abschnitt](https://gpuweb.github.io/gpuweb/#limits) der Spezifikation für detaillierte Beschreibungen dessen, worauf sich die Grenzen beziehen.

| Grenzname                                  | Standardwert             |
| ------------------------------------------ | ------------------------ |
| `maxTextureDimension1D`                    | 8192                     |
| `maxTextureDimension2D`                    | 8192                     |
| `maxTextureDimension3D`                    | 2048                     |
| `maxTextureArrayLayers`                    | 256                      |
| `maxBindGroups`                            | 4                        |
| `maxBindingsPerBindGroup`                  | 640                      |
| `maxDynamicUniformBuffersPerPipelineLayout`| 8                        |
| `maxDynamicStorageBuffersPerPipelineLayout`| 4                        |
| `maxSampledTexturesPerShaderStage`         | 16                       |
| `maxSamplersPerShaderStage`                | 16                       |
| `maxStorageBuffersPerShaderStage`          | 8                        |
| `maxStorageTexturesPerShaderStage`         | 4                        |
| `maxUniformBuffersPerShaderStage`          | 12                       |
| `maxUniformBufferBindingSize`              | 65536 Bytes              |
| `maxStorageBufferBindingSize`              | 134217728 Bytes (128 MB) |
| `minUniformBufferOffsetAlignment`          | 256 Bytes                |
| `minStorageBufferOffsetAlignment`          | 256 Bytes                |
| `maxVertexBuffers`                         | 8                        |
| `maxBufferSize`                            | 268435456 Bytes (256 MB) |
| `maxVertexAttributes`                      | 16                       |
| `maxVertexBufferArrayStride`               | 2048 Bytes               |
| `maxInterStageShaderComponents`            | 60                       |
| `maxInterStageShaderVariables`             | 16                       |
| `maxColorAttachments`                      | 8                        |
| `maxColorAttachmentBytesPerSample`         | 32                       |
| `maxComputeWorkgroupStorageSize`           | 16384 Bytes              |
| `maxComputeInvocationsPerWorkgroup`        | 256                      |
| `maxComputeWorkgroupSizeX`                 | 256                      |
| `maxComputeWorkgroupSizeY`                 | 256                      |
| `maxComputeWorkgroupSizeZ`                 | 64                       |
| `maxComputeWorkgroupsPerDimension`         | 65535                    |

## Beispiele

Im folgenden Code prüfen wir den `GPUAdapter.limits`-Wert von `maxBindGroups`, um zu sehen, ob er gleich oder größer als 6 ist. Unsere theoretische Beispielanwendung benötigt idealerweise 6 Bindungsgruppen, daher fügen wir dem `requiredLimits`-Objekt eine maximale Grenze von 6 hinzu, wenn der zurückgegebene Wert >= 6 ist. Wir fordern dann ein Gerät mit dieser Grenzanforderung an, indem wir {{domxref("GPUAdapter.requestDevice()")}} verwenden:

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

  // Die App benötigt idealerweise 6 Bindungsgruppen, daher werden wir versuchen, das zu fordern, was die App benötigt
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
