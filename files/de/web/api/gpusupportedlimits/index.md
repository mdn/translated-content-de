---
title: GPUSupportedLimits
slug: Web/API/GPUSupportedLimits
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das Interface **`GPUSupportedLimits`** der [WebGPU API](/de/docs/Web/API/WebGPU_API) beschreibt die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützten Limits.

{{InheritanceDiagram}}

## Instanzeigenschaften

Die folgenden Limits werden durch Eigenschaften eines `GPUSupportedLimits`-Objekts dargestellt. Ausführliche Beschreibungen der einzelnen Limits finden Sie im Abschnitt [Limits](https://gpuweb.github.io/gpuweb/#limits) der Spezifikation.

Alle Eigenschaften sind schreibgeschützt.

| Name des Limits                                                                                                                                                                                                                                                                                            | Standardwert            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `maxTextureDimension1D`                                                                                                                                                                                                                                                                                    | 8192                    |
| `maxTextureDimension2D`                                                                                                                                                                                                                                                                                    | 8192                    |
| `maxTextureDimension3D`                                                                                                                                                                                                                                                                                    | 2048                    |
| `maxTextureArrayLayers`                                                                                                                                                                                                                                                                                    | 256                     |
| `maxBindGroups`                                                                                                                                                                                                                                                                                            | 4                       |
| `maxBindingsPerBindGroup`                                                                                                                                                                                                                                                                                  | 640                     |
| `maxDynamicUniformBuffersPerPipelineLayout`                                                                                                                                                                                                                                                                | 8                       |
| `maxDynamicStorageBuffersPerPipelineLayout`                                                                                                                                                                                                                                                                | 4                       |
| `maxSampledTexturesPerShaderStage`                                                                                                                                                                                                                                                                         | 16                      |
| `maxSamplersPerShaderStage`                                                                                                                                                                                                                                                                                | 16                      |
| `maxStorageBuffersInFragmentStage`                                                                                                                                                                                                                                                                         | 8                       |
| `maxStorageBuffersInVertexStage`                                                                                                                                                                                                                                                                           | 8                       |
| `maxStorageBuffersPerShaderStage`                                                                                                                                                                                                                                                                          | 8                       |
| `maxStorageTexturesInFragmentStage`                                                                                                                                                                                                                                                                        | 4                       |
| `maxStorageTexturesInVertexStage`                                                                                                                                                                                                                                                                          | 4                       |
| `maxStorageTexturesPerShaderStage`                                                                                                                                                                                                                                                                         | 4                       |
| `maxUniformBuffersPerShaderStage`                                                                                                                                                                                                                                                                          | 12                      |
| `maxUniformBufferBindingSize`                                                                                                                                                                                                                                                                              | 65536 Byte              |
| `maxStorageBufferBindingSize`                                                                                                                                                                                                                                                                              | 134217728 Byte (128 MB) |
| `minUniformBufferOffsetAlignment`                                                                                                                                                                                                                                                                          | 256 Byte                |
| `minStorageBufferOffsetAlignment`                                                                                                                                                                                                                                                                          | 256 Byte                |
| `maxVertexBuffers`                                                                                                                                                                                                                                                                                         | 8                       |
| `maxBufferSize`                                                                                                                                                                                                                                                                                            | 268435456 Byte (256 MB) |
| `maxVertexAttributes`                                                                                                                                                                                                                                                                                      | 16                      |
| `maxVertexBufferArrayStride`                                                                                                                                                                                                                                                                               | 2048 Byte               |
| `maxInterStageShaderComponents` {{deprecated_inline}} {{non-standard_inline}} (verwenden Sie stattdessen `maxInterStageShaderVariables`; weitere Informationen finden Sie im [Hinweis zur Einstellung](https://developer.chrome.com/blog/new-in-webgpu-133#deprecate_maxinterstageshadercomponents_limit)) | 60                      |
| `maxInterStageShaderVariables`                                                                                                                                                                                                                                                                             | 16                      |
| `maxColorAttachments`                                                                                                                                                                                                                                                                                      | 8                       |
| `maxColorAttachmentBytesPerSample`                                                                                                                                                                                                                                                                         | 32                      |
| `maxComputeWorkgroupStorageSize`                                                                                                                                                                                                                                                                           | 16384 Byte              |
| `maxComputeInvocationsPerWorkgroup`                                                                                                                                                                                                                                                                        | 256                     |
| `maxComputeWorkgroupSizeX`                                                                                                                                                                                                                                                                                 | 256                     |
| `maxComputeWorkgroupSizeY`                                                                                                                                                                                                                                                                                 | 256                     |
| `maxComputeWorkgroupSizeZ`                                                                                                                                                                                                                                                                                 | 64                      |
| `maxComputeWorkgroupsPerDimension`                                                                                                                                                                                                                                                                         | 65535                   |

## Beschreibung

Auf das `GPUSupportedLimits`-Objekt des aktuellen Adapters wird über die Eigenschaft [`GPUAdapter.limits`](/de/docs/Web/API/GPUAdapter/limits) zugegriffen.

Anstatt die genauen Limits jeder GPU anzugeben, melden Browser üblicherweise Werte aus verschiedenen Stufen für die jeweiligen Limits. Dadurch stehen weniger eindeutige Informationen für beiläufiges Fingerprinting zur Verfügung. Die Stufen eines bestimmten Limits könnten beispielsweise bei 2048, 8192 und 32768 liegen. Wenn das tatsächliche Limit Ihrer GPU 16384 beträgt, meldet der Browser dennoch 8192.

Da verschiedene Browser dies unterschiedlich handhaben und sich die Stufenwerte im Laufe der Zeit ändern können, lässt sich nur schwer genau vorhersagen, welche Limitwerte zu erwarten sind. Gründliche Tests sind daher ratsam.

Beachten Sie: Wenn Sie mit [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) anfordern, das bestimmte Mindestanforderungen („Limits“) erfüllt, übergeben Sie ein Objekt mit denselben Eigenschaftsnamen wie `GPUSupportedLimits`.

## Beispiele

Im folgenden Code fragen wir über `GPUAdapter.limits` den Wert von `maxBindGroups` ab, um zu prüfen, ob er mindestens 6 beträgt. Unsere hypothetische Beispielanwendung benötigt idealerweise 6 Bind Groups. Ist der zurückgegebene Wert mindestens 6, fügen wir dem Objekt `requiredLimits` daher ein Limit von 6 hinzu. Anschließend fordern wir mit [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) ein Gerät an, das diese Anforderung erfüllt:

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
