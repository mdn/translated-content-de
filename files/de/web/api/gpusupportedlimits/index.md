---
title: GPUSupportedLimits
slug: Web/API/GPUSupportedLimits
l10n:
  sourceCommit: 9126ecf140009f571300b0d083148eb31e826128
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Schnittstelle **`GPUSupportedLimits`** der [WebGPU API](/de/docs/Web/API/WebGPU_API) beschreibt die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützten Grenzwerte.

{{InheritanceDiagram}}

## Instanzeigenschaften

Die folgenden Grenzwerte werden durch Eigenschaften eines `GPUSupportedLimits`-Objekts dargestellt. Ausführliche Beschreibungen dazu, worauf sich die Grenzwerte beziehen, finden Sie im Abschnitt [Grenzwerte](https://gpuweb.github.io/gpuweb/#limits) der Spezifikation.

Alle Eigenschaften sind schreibgeschützt.

| Name des Grenzwerts                                                                                                                                                                                                                                                                                      | Standardwert             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `maxTextureDimension1D`                                                                                                                                                                                                                                                                                  | 8192                     |
| `maxTextureDimension2D`                                                                                                                                                                                                                                                                                  | 8192                     |
| `maxTextureDimension3D`                                                                                                                                                                                                                                                                                  | 2048                     |
| `maxTextureArrayLayers`                                                                                                                                                                                                                                                                                  | 256                      |
| `maxBindGroups`                                                                                                                                                                                                                                                                                          | 4                        |
| `maxBindingsPerBindGroup`                                                                                                                                                                                                                                                                                | 640                      |
| `maxDynamicUniformBuffersPerPipelineLayout`                                                                                                                                                                                                                                                              | 8                        |
| `maxDynamicStorageBuffersPerPipelineLayout`                                                                                                                                                                                                                                                              | 4                        |
| `maxSampledTexturesPerShaderStage`                                                                                                                                                                                                                                                                       | 16                       |
| `maxSamplersPerShaderStage`                                                                                                                                                                                                                                                                              | 16                       |
| `maxStorageBuffersInFragmentStage`                                                                                                                                                                                                                                                                       | 8                        |
| `maxStorageBuffersInVertexStage`                                                                                                                                                                                                                                                                         | 8                        |
| `maxStorageBuffersPerShaderStage`                                                                                                                                                                                                                                                                        | 8                        |
| `maxStorageTexturesInFragmentStage`                                                                                                                                                                                                                                                                      | 4                        |
| `maxStorageTexturesInVertexStage`                                                                                                                                                                                                                                                                        | 4                        |
| `maxStorageTexturesPerShaderStage`                                                                                                                                                                                                                                                                       | 4                        |
| `maxUniformBuffersPerShaderStage`                                                                                                                                                                                                                                                                        | 12                       |
| `maxUniformBufferBindingSize`                                                                                                                                                                                                                                                                            | 65536 Bytes              |
| `maxStorageBufferBindingSize`                                                                                                                                                                                                                                                                            | 134217728 Bytes (128 MB) |
| `minUniformBufferOffsetAlignment`                                                                                                                                                                                                                                                                        | 256 Bytes                |
| `minStorageBufferOffsetAlignment`                                                                                                                                                                                                                                                                        | 256 Bytes                |
| `maxVertexBuffers`                                                                                                                                                                                                                                                                                       | 8                        |
| `maxBufferSize`                                                                                                                                                                                                                                                                                          | 268435456 Bytes (256 MB) |
| `maxVertexAttributes`                                                                                                                                                                                                                                                                                    | 16                       |
| `maxVertexBufferArrayStride`                                                                                                                                                                                                                                                                             | 2048 Bytes               |
| `maxInterStageShaderComponents` {{deprecated_inline}} {{non-standard_inline}} (verwenden Sie stattdessen `maxInterStageShaderVariables`; weitere Informationen finden Sie im [Hinweis zur Veraltung](https://developer.chrome.com/blog/new-in-webgpu-133#deprecate_maxinterstageshadercomponents_limit)) | 60                       |
| `maxInterStageShaderVariables`                                                                                                                                                                                                                                                                           | 16                       |
| `maxColorAttachments`                                                                                                                                                                                                                                                                                    | 8                        |
| `maxColorAttachmentBytesPerSample`                                                                                                                                                                                                                                                                       | 32                       |
| `maxComputeWorkgroupStorageSize`                                                                                                                                                                                                                                                                         | 16384 Bytes              |
| `maxComputeInvocationsPerWorkgroup`                                                                                                                                                                                                                                                                      | 256                      |
| `maxComputeWorkgroupSizeX`                                                                                                                                                                                                                                                                               | 256                      |
| `maxComputeWorkgroupSizeY`                                                                                                                                                                                                                                                                               | 256                      |
| `maxComputeWorkgroupSizeZ`                                                                                                                                                                                                                                                                               | 64                       |
| `maxComputeWorkgroupsPerDimension`                                                                                                                                                                                                                                                                       | 65535                    |

## Beschreibung

Auf das `GPUSupportedLimits`-Objekt des aktuellen Adapters greifen Sie über die Eigenschaft [`GPUAdapter.limits`](/de/docs/Web/API/GPUAdapter/limits) zu.

Anstatt die genauen Grenzwerte jeder GPU anzugeben, melden Browser üblicherweise abgestufte Werte für die einzelnen Grenzwerte. Dadurch stehen weniger eindeutige Informationen für beiläufiges Fingerprinting zur Verfügung. Die Abstufungen eines bestimmten Grenzwerts könnten beispielsweise bei 2048, 8192 und 32768 liegen. Wenn der tatsächliche Grenzwert Ihrer GPU 16384 beträgt, meldet der Browser dennoch 8192.

Da verschiedene Browser dies unterschiedlich handhaben und sich die abgestuften Werte im Laufe der Zeit ändern können, lässt sich kaum genau vorhersagen, welche Grenzwerte zu erwarten sind. Gründliche Tests sind daher empfehlenswert.

Wenn Sie [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) aufrufen, um ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) anzufordern, das bestimmte Mindestanforderungen („Grenzwerte“) erfüllt, übergeben Sie ein Objekt mit denselben Eigenschaftsnamen wie `GPUSupportedLimits`.

### Grenzwerte für Storage Buffer und Texturen außerhalb des Kompatibilitätsmodus

Wenn Sie ein Device erstellen, werden die angeforderten Grenzwerte `maxStorageBuffersInFragmentStage`, `maxStorageBuffersInVertexStage`, `maxStorageTexturesInFragmentStage` und `maxStorageTexturesInVertexStage` nicht als separate Werte beibehalten, sofern der [WebGPU-Kompatibilitätsmodus](/de/docs/Web/API/WebGPU_API#webgpu_compatibility_mode) nicht verwendet wird. Stattdessen erhöhen sie die Grenzwerte `maxStorageBuffersPerShaderStage` beziehungsweise `maxStorageTexturesPerShaderStage`, falls sie höher sind, und werden anschließend an diese angeglichen.

## Beispiele

Im folgenden Code fragen wir den Wert von `maxBindGroups` über `GPUAdapter.limits` ab, um zu prüfen, ob er mindestens 6 beträgt. Unsere hypothetische Beispielanwendung benötigt idealerweise 6 Bind Groups. Wenn der zurückgegebene Wert >= 6 ist, fügen wir dem Objekt `requiredLimits` daher einen maximalen Grenzwert von 6 hinzu. Anschließend fordern wir mit [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) ein Device mit dieser Grenzwertanforderung an:

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
