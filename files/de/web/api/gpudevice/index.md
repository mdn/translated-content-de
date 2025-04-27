---
title: GPUDevice
slug: Web/API/GPUDevice
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUDevice`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert ein logisches GPU-Gerät. Dies ist das Hauptinterface, über das der Großteil der WebGPU-Funktionalität zugänglich ist.

Ein `GPUDevice`-Objekt wird über die Methode [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`adapterInfo`](/de/docs/Web/API/GPUDevice/adapterInfo) {{Experimental_Inline}} {{ReadOnlyInline}}

  - : Ein [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Objekt, das identifizierende Informationen über den Adapter, von dem das Gerät stammt, enthält.

- [`features`](/de/docs/Web/API/GPUDevice/features) {{Experimental_Inline}} {{ReadOnlyInline}}

  - : Ein [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekt, das zusätzliche Funktionalitäten beschreibt, die vom Gerät unterstützt werden.

- [`label`](/de/docs/Web/API/GPUDevice/label) {{Experimental_Inline}}

  - : Ein String, der eine Bezeichnung bereitstellt, die zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

- [`limits`](/de/docs/Web/API/GPUDevice/limits) {{Experimental_Inline}} {{ReadOnlyInline}}

  - : Ein [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekt, das die vom Gerät unterstützten Limits beschreibt.

- [`lost`](/de/docs/Web/API/GPUDevice/lost) {{Experimental_Inline}} {{ReadOnlyInline}}

  - : Enthält ein {{jsxref("Promise")}}, das während der gesamten Lebensdauer des Geräts ausstehend bleibt und sich mit einem [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)-Objekt auflöst, wenn das Gerät verloren geht.

- [`queue`](/de/docs/Web/API/GPUDevice/queue) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die primäre [`GPUQueue`](/de/docs/Web/API/GPUQueue) für das Gerät zurück.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) {{Experimental_Inline}}

  - : Erstellt eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das einen Satz von Ressourcen definiert, die in einer Gruppe zusammengebunden werden sollen, und wie diese Ressourcen in Shader-Stufen verwendet werden.

- [`createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout) {{Experimental_Inline}}

  - : Erstellt ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das die Struktur und den Zweck zusammenhängender GPU-Ressourcen wie Puffer definiert, die in einer Pipeline verwendet werden sollen, und wird als Vorlage beim Erstellen von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s verwendet.

- [`createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) {{Experimental_Inline}}

  - : Erstellt einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), um Rohdaten für GPU-Operationen zu speichern.

- [`createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) {{Experimental_Inline}}

  - : Erstellt einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder), der verwendet wird, um Befehle zu kodieren, die an die GPU übermittelt werden sollen.

- [`createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) {{Experimental_Inline}}

  - : Erstellt eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline), die die Compute-Shader-Stufe steuern kann und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann.

- [`createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) {{Experimental_Inline}}

  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline), die die Compute-Shader-Stufe steuern kann und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann, erfüllt wird, wenn die Pipeline ohne Verzögerung genutzt werden kann.

- [`createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) {{Experimental_Inline}}

  - : Erstellt ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout), das die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s definiert, die von einer Pipeline verwendet werden. Während der Befehlskodierung genutzte [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.

- [`createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet) {{Experimental_Inline}}

  - : Erstellt ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das verwendet werden kann, um die Ergebnisse von Abfragen zu Aufträgen aufzuzeichnen, wie zum Beispiel Occlusion- oder Zeitstempelabfragen.

- [`createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) {{Experimental_Inline}}

  - : Erstellt einen [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder), der verwendet werden kann, um Befehlspakete vorab aufzuzeichnen. Diese können im [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) mehrmals über die Methode [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) wiederverwendet werden.

- [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) {{Experimental_Inline}}

  - : Erstellt eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die die Vertex- und Fragment-Shader-Stufen steuern kann und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

- [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) {{Experimental_Inline}}

  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die die Vertex- und Fragment-Shader-Stufen steuern kann und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann, erfüllt wird, sobald die Pipeline ohne Verzögerung genutzt werden kann.

- [`createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) {{Experimental_Inline}}

  - : Erstellt einen [`GPUSampler`](/de/docs/Web/API/GPUSampler), der steuert, wie Shader Texturressourcendaten transformieren und filtern.

- [`createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) {{Experimental_Inline}}

  - : Erstellt ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) aus einem String von WGSL-Quellcode.

- [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) {{Experimental_Inline}}

  - : Erstellt eine [`GPUTexture`](/de/docs/Web/API/GPUTexture), in der Texturdaten gespeichert werden, die in GPU-Rendering-Operationen verwendet werden sollen.

- [`destroy()`](/de/docs/Web/API/GPUDevice/destroy) {{Experimental_Inline}}

  - : Zerstört das Gerät und verhindert weitere Operationen darauf.

- [`importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture) {{Experimental_Inline}}

  - : Nimmt ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) als Eingabe und gibt ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Wrapper-Objekt zurück, das einen Schnappschuss des Videos enthält und in GPU-Rendering-Operationen verwendet werden kann.

- [`popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) {{Experimental_Inline}}

  - : Entfernt einen bestehenden GPU-Fehlerbereich aus dem Fehlerbereichs-Stack und gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Objekt ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)) auflöst, das den ersten im Bereich erfassten Fehler beschreibt, oder `null`, wenn kein Fehler aufgetreten ist.

- [`pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) {{Experimental_Inline}}
  - : Fügt einen neuen GPU-Fehlerbereich zum Fehlerbereichs-Stack des Geräts hinzu, sodass Sie Fehler eines bestimmten Typs erfassen können.

## Ereignisse

- [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Fehler geworfen wird, der nicht von einem GPU-Fehlerbereich beobachtet wurde, um eine Möglichkeit zur Berichterstattung über unerwartete Fehler zu bieten. Bekannte Fehlerfälle sollten mit [`pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) und [`popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) behandelt werden.

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

  // …
}
```

Sehen Sie sich die oben aufgeführten individuellen Mitgliedsseiten und die folgenden Demoseiten für viele weitere Beispiele zur Nutzung von `GPUDevice` an:

- [Grundlegendes Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
- [Grundlegendes Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/)
- [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
