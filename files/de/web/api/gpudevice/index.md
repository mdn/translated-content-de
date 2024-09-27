---
title: GPUDevice
slug: Web/API/GPUDevice
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUDevice`**-Schnittstelle der [WebGPU-API](/de/docs/Web/API/WebGPU_API) repräsentiert ein logisches GPU-Gerät. Dies ist die Hauptschnittstelle, über die die Mehrheit der WebGPU-Funktionalität zugegriffen wird.

Ein `GPUDevice`-Objekt wird mithilfe der Methode [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert.

{{InheritanceDiagram}}

## Instanzattribute

_Erbt Attribute von seiner Elternklasse, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`features`](/de/docs/Web/API/GPUDevice/features) {{Experimental_Inline}} {{ReadOnlyInline}}

  - : Ein [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekt, das zusätzliche Funktionalitäten beschreibt, die vom Gerät unterstützt werden.

- [`label`](/de/docs/Web/API/GPUDevice/label) {{Experimental_Inline}}

  - : Ein String, der eine Bezeichnung bereitstellt, die verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

- [`limits`](/de/docs/Web/API/GPUDevice/limits) {{Experimental_Inline}} {{ReadOnlyInline}}

  - : Ein [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekt, das die vom Gerät unterstützten Grenzen beschreibt.

- [`lost`](/de/docs/Web/API/GPUDevice/lost) {{Experimental_Inline}} {{ReadOnlyInline}}

  - : Enthält ein {{jsxref("Promise")}}, das während der gesamten Lebensdauer des Geräts aussteht und mit einem [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)-Objekt aufgelöst wird, wenn das Gerät verloren geht.

- [`queue`](/de/docs/Web/API/GPUDevice/queue) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die primäre [`GPUQueue`](/de/docs/Web/API/GPUQueue) für das Gerät zurück.

## Instanzmethoden

_Erbt Methoden von seiner Elternklasse, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) {{Experimental_Inline}}

  - : Erstellt eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das eine Reihe von Ressourcen definiert, die zusammen in einer Gruppe gebunden werden und wie diese Ressourcen in Shader-Stufen verwendet werden.

- [`createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout) {{Experimental_Inline}}

  - : Erstellt eine [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), die die Struktur und den Zweck verwandter GPU-Ressourcen wie Puffer definiert, die in einer Pipeline verwendet werden, und wird als Vorlage bei der Erstellung von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s verwendet.

- [`createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) {{Experimental_Inline}}

  - : Erstellt einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), in dem Rohdaten gespeichert werden, die in GPU-Operationen verwendet werden.

- [`createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) {{Experimental_Inline}}

  - : Erstellt einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder), der verwendet wird, um Befehle zu codieren, die an die GPU ausgestellt werden sollen.

- [`createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) {{Experimental_Inline}}

  - : Erstellt eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline), die die Compute-Shader-Stufe steuern und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann.

- [`createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) {{Experimental_Inline}}

  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) erfüllt wird, die die Compute-Shader-Stufe steuern und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann, sobald die Pipeline ohne Verzögerung verwendet werden kann.

- [`createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) {{Experimental_Inline}}

  - : Erstellt ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout), das die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s definiert, die von einer Pipeline verwendet werden. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die während der Befehlscodierung mit der Pipeline verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.

- [`createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet) {{Experimental_Inline}}

  - : Erstellt ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das verwendet werden kann, um die Ergebnisse von Abfragen bei Durchgängen, wie Okklusions- oder Zeitstempelabfragen, aufzuzeichnen.

- [`createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) {{Experimental_Inline}}

  - : Erstellt einen [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder), der verwendet werden kann, um Bündel von Befehlen im Voraus aufzuzeichnen. Diese können so oft wie erforderlich in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s über die Methode [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) wiederverwendet werden.

- [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) {{Experimental_Inline}}

  - : Erstellt eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die die Vertex- und Fragment-Shader-Stufen steuern und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

- [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) {{Experimental_Inline}}

  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) erfüllt wird, welche die Vertex- und Fragment-Shader-Stufen steuern und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann, sobald die Pipeline ohne Verzögerung verwendet werden kann.

- [`createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) {{Experimental_Inline}}

  - : Erstellt einen [`GPUSampler`](/de/docs/Web/API/GPUSampler), der steuert, wie Shader Texturressourcendaten transformieren und filtern.

- [`createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) {{Experimental_Inline}}

  - : Erstellt ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) aus einem WGSL-Quellcode-String.

- [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) {{Experimental_Inline}}

  - : Erstellt eine [`GPUTexture`](/de/docs/Web/API/GPUTexture), in der Texturdaten für die Verwendung in GPU-Renderoperationen gespeichert werden.

- [`destroy()`](/de/docs/Web/API/GPUDevice/destroy) {{Experimental_Inline}}

  - : Zerstört das Gerät und verhindert weitere Operationen darauf.

- [`importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture) {{Experimental_Inline}}

  - : Nimmt ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) als Eingabe und gibt ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Wrapper-Objekt zurück, das einen Schnappschuss des Videos enthält, der in GPU-Renderoperationen verwendet werden kann.

- [`popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) {{Experimental_Inline}}

  - : Entfernt einen bestehenden GPU-Fehlerbereich vom Fehlerbereich-Stack und gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Objekt ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)) auflöst, welches den ersten im Bereich erfassten Fehler beschreibt, oder `null`, wenn kein Fehler aufgetreten ist.

- [`pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) {{Experimental_Inline}}
  - : Fügt einen neuen GPU-Fehlerbereich auf den Fehlerbereich-Stack des Geräts hinzu, sodass Sie Fehler eines bestimmten Typs erfassen können.

## Ereignisse

- [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein nicht durch einen GPU-Fehlerbereich beobachteter Fehler auftritt, um eine Möglichkeit zur Meldung unerwarteter Fehler zu bieten. Bekannte Fehlerfälle sollten mithilfe von [`pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) und [`popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) behandelt werden.

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

Siehe die oben aufgeführten individuellen Mitgliedsseiten und die folgenden Demo-Sites für viele weitere Beispiele zur Verwendung von `GPUDevice`:

- [Grundlegendes Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
- [Grundlegendes Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/)
- [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
