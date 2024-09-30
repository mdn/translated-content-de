---
title: GPUDevice
slug: Web/API/GPUDevice
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUDevice`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert ein logisches GPU-Gerät. Dies ist die Hauptschnittstelle, über die die meisten Funktionen von WebGPU genutzt werden.

Ein `GPUDevice`-Objekt wird mit der Methode [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`features`](/de/docs/Web/API/GPUDevice/features) {{Experimental_Inline}} {{ReadOnlyInline}}

  - : Ein [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekt, das zusätzliche Funktionalitäten beschreibt, die vom Gerät unterstützt werden.

- [`label`](/de/docs/Web/API/GPUDevice/label) {{Experimental_Inline}}

  - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

- [`limits`](/de/docs/Web/API/GPUDevice/limits) {{Experimental_Inline}} {{ReadOnlyInline}}

  - : Ein [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekt, das die vom Gerät unterstützten Grenzen beschreibt.

- [`lost`](/de/docs/Web/API/GPUDevice/lost) {{Experimental_Inline}} {{ReadOnlyInline}}

  - : Enthält ein {{jsxref("Promise")}}, das während der gesamten Lebensdauer des Geräts ausstehend bleibt und sich mit einem [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)-Objekt auflöst, wenn das Gerät verloren geht.

- [`queue`](/de/docs/Web/API/GPUDevice/queue) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die primäre [`GPUQueue`](/de/docs/Web/API/GPUQueue) für das Gerät zurück.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) {{Experimental_Inline}}

  - : Erstellt eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das eine Gruppe von Ressourcen definiert, die zusammen gebunden werden und wie diese Ressourcen in Shader-Phasen verwendet werden.

- [`createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout) {{Experimental_Inline}}

  - : Erstellt ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das die Struktur und den Zweck von verwandten GPU-Ressourcen wie Buffern definiert, die in einer Pipeline verwendet werden und als Vorlage bei der Erstellung von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s dient.

- [`createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) {{Experimental_Inline}}

  - : Erstellt einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), um Rohdaten für GPU-Operationen zu speichern.

- [`createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) {{Experimental_Inline}}

  - : Erstellt einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder), der verwendet wird, um Befehle für die GPU zu kodieren.

- [`createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) {{Experimental_Inline}}

  - : Erstellt eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline), die die Compute-Shader-Phase steuern kann und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann.

- [`createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) {{Experimental_Inline}}

  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) erfüllt wird, die die Compute-Shader-Phase steuern kann und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann, sobald die Pipeline verwendet werden kann, ohne dass Verzögerungen auftreten.

- [`createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) {{Experimental_Inline}}

  - : Erstellt ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout), das die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s definiert, die von einer Pipeline verwendet werden. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die während der Befehlskodierung mit der Pipeline verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.

- [`createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet) {{Experimental_Inline}}

  - : Erstellt ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das verwendet werden kann, um die Ergebnisse von Abfragen bei Durchläufen aufzuzeichnen, wie z.B. Occlusion- oder Zeitstempel-Abfragen.

- [`createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) {{Experimental_Inline}}

  - : Erstellt einen [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder), der verwendet werden kann, um Bündel von Befehlen vorab aufzuzeichnen. Diese können in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s über die Methode [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) beliebig oft wiederverwendet werden.

- [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) {{Experimental_Inline}}

  - : Erstellt eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die die Vertex- und Fragment-Shader-Phasen steuern kann und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

- [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) {{Experimental_Inline}}

  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) erfüllt wird, die die Vertex- und Fragment-Shader-Phasen steuern kann und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann, sobald die Pipeline verwendet werden kann, ohne dass Verzögerungen auftreten.

- [`createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) {{Experimental_Inline}}

  - : Erstellt einen [`GPUSampler`](/de/docs/Web/API/GPUSampler), der steuert, wie Shader die Texturnutzungsdaten transformieren und filtern.

- [`createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) {{Experimental_Inline}}

  - : Erstellt ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) aus einem String von WGSL-Quellcode.

- [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) {{Experimental_Inline}}

  - : Erstellt eine [`GPUTexture`](/de/docs/Web/API/GPUTexture), um Texturdaten zu speichern, die in GPU-Rendering-Operationen verwendet werden.

- [`destroy()`](/de/docs/Web/API/GPUDevice/destroy) {{Experimental_Inline}}

  - : Zerstört das Gerät und verhindert weitere Operationen darauf.

- [`importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture) {{Experimental_Inline}}

  - : Nimmt ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) als Eingabe und gibt ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Wrapper-Objekt zurück, das einen Schnappschuss des Videos enthält, der in GPU-Rendering-Operationen verwendet werden kann.

- [`popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) {{Experimental_Inline}}

  - : Hebt einen bestehenden GPU-Fehlerbereich aus dem Fehlerbereich-Stack und gibt ein {{jsxref("Promise")}} zurück, das sich auflöst in ein Objekt ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)), das den ersten im Bereich erfassten Fehler beschreibt, oder `null`, wenn kein Fehler aufgetreten ist.

- [`pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) {{Experimental_Inline}}
  - : Schiebt einen neuen GPU-Fehlerbereich auf den Fehlerbereich-Stack des Geräts, um Fehler eines bestimmten Typs zu erfassen.

## Ereignisse

- [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Fehler auftritt, der nicht von einem GPU-Fehlerbereich erfasst wurde, um eine Möglichkeit zu bieten, unerwartete Fehler zu melden. Bekannte Fehlerfälle sollten mit [`pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) und [`popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) behandelt werden.

## Beispiele

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const device = await adapter.requestDevice();

  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  //...
}
```

Siehe die oben aufgelisteten Seiten der einzelnen Mitglieder und die folgenden Demo-Seiten für weitere Beispiele zur Nutzung von `GPUDevice`:

- [Grundlegendes Rechen-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
- [Grundlegendes Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/)
- [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
