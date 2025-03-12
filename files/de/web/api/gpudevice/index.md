---
title: GPUDevice
slug: Web/API/GPUDevice
l10n:
  sourceCommit: ec1cb9e541bd5df1e86e17dd4f098781e5b6804b
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUDevice`**-Interface der [WebGPU-API](/de/docs/Web/API/WebGPU_API) repräsentiert ein logisches GPU-Gerät. Dies ist das Hauptinterface, über das die Mehrheit der WebGPU-Funktionalitäten zugänglich ist.

Ein `GPUDevice`-Objekt wird über die Methode [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`adapterInfo`](/de/docs/Web/API/GPUDevice/adapterInfo) {{Experimental_Inline}} {{ReadOnlyInline}}

  - : Ein [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Objekt, das identifizierende Informationen über den Adapter des Geräts enthält.

- [`features`](/de/docs/Web/API/GPUDevice/features) {{Experimental_Inline}} {{ReadOnlyInline}}

  - : Ein [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekt, das zusätzliche, vom Gerät unterstützte Funktionalitäten beschreibt.

- [`label`](/de/docs/Web/API/GPUDevice/label) {{Experimental_Inline}}

  - : Ein String, der eine Bezeichnung bereitstellt, die verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

- [`limits`](/de/docs/Web/API/GPUDevice/limits) {{Experimental_Inline}} {{ReadOnlyInline}}

  - : Ein [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekt, das die vom Gerät unterstützten Grenzen beschreibt.

- [`lost`](/de/docs/Web/API/GPUDevice/lost) {{Experimental_Inline}} {{ReadOnlyInline}}

  - : Enthält ein {{jsxref("Promise")}}, das während der gesamten Lebensdauer des Geräts schwebt und mit einem [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)-Objekt aufgelöst wird, wenn das Gerät verloren geht.

- [`queue`](/de/docs/Web/API/GPUDevice/queue) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die primäre [`GPUQueue`](/de/docs/Web/API/GPUQueue) des Geräts zurück.

## Instanz-Methoden

_Erbt Methoden von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) {{Experimental_Inline}}

  - : Erstellt eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das eine Gruppe von zu bindenden Ressourcen und deren Verwendung in Shader-Stufen definiert.

- [`createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout) {{Experimental_Inline}}

  - : Erstellt ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das die Struktur und den Zweck von verwandten GPU-Ressourcen wie Puffern definiert, die in einer Pipeline verwendet werden, und als Vorlage bei der Erstellung von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s dient.

- [`createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) {{Experimental_Inline}}

  - : Erstellt einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), um Rohdaten für GPU-Operationen zu speichern.

- [`createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) {{Experimental_Inline}}

  - : Erstellt einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder), der verwendet wird, um Befehle zu kodieren, die an die GPU ausgegeben werden sollen.

- [`createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) {{Experimental_Inline}}

  - : Erstellt eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline), die die Compute-Shader-Stufe steuern und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann.

- [`createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) {{Experimental_Inline}}

  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) erfüllt wird, die die Compute-Shader-Stufe steuern kann und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann, sobald die Pipeline ohne Verzögerungen verwendet werden kann.

- [`createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) {{Experimental_Inline}}

  - : Erstellt ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout), das die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s definiert, die von einer Pipeline verwendet werden. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die während der Befehlskodierung mit der Pipeline verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.

- [`createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet) {{Experimental_Inline}}

  - : Erstellt ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das verwendet werden kann, um die Ergebnisse von Abfragen in Durchläufen aufzuzeichnen, wie zum Beispiel Okklusions- oder Zeitstempel-Abfragen.

- [`createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder) {{Experimental_Inline}}

  - : Erstellt einen [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder), der verwendet werden kann, um Bündel von Befehlen im Voraus aufzuzeichnen. Diese können über die Methode [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s beliebig oft erneut verwendet werden.

- [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) {{Experimental_Inline}}

  - : Erstellt eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die die Vertex- und Fragment-Shader-Stufen steuern und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

- [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) {{Experimental_Inline}}

  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) erfüllt wird, die die Vertex- und Fragment-Shader-Stufen steuern und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann, sobald die Pipeline ohne Verzögerungen verwendet werden kann.

- [`createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) {{Experimental_Inline}}

  - : Erstellt einen [`GPUSampler`](/de/docs/Web/API/GPUSampler), der steuert, wie Shader Texturressourcendaten transformieren und filtern.

- [`createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) {{Experimental_Inline}}

  - : Erstellt ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) aus einem String von WGSL-Quellcode.

- [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) {{Experimental_Inline}}

  - : Erstellt eine [`GPUTexture`](/de/docs/Web/API/GPUTexture), um Texturdaten zu speichern, die in GPU-Rendering-Operationen verwendet werden sollen.

- [`destroy()`](/de/docs/Web/API/GPUDevice/destroy) {{Experimental_Inline}}

  - : Zerstört das Gerät und verhindert weitere Operationen darauf.

- [`importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture) {{Experimental_Inline}}

  - : Nimmt ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) als Eingabe und gibt ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Wrapper-Objekt zurück, das einen Schnappschuss des Videos enthält, der in GPU-Rendering-Operationen verwendet werden kann.

- [`popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) {{Experimental_Inline}}

  - : Nimmt einen bestehenden GPU-Fehlerbereich vom Fehlerbereich-Stack und gibt ein {{jsxref("Promise")}} zurück, das zu einem Objekt ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)) aufgelöst wird, das den ersten im Bereich erfassten Fehler beschreibt, oder `null`, wenn kein Fehler aufgetreten ist.

- [`pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) {{Experimental_Inline}}
  - : Schiebt einen neuen GPU-Fehlerbereich auf den Fehlerbereich-Stack des Geräts, sodass Sie Fehler eines bestimmten Typs erfassen können.

## Ereignisse

- [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Fehler auftritt, der nicht von einem GPU-Fehlerbereich beobachtet wurde, um eine Möglichkeit zur Meldung unerwarteter Fehler bereitzustellen. Bekannte Fehlerfälle sollten mit [`pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) und [`popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) behandelt werden.

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

Sehen Sie sich die oben genannten einzelnen Mitgliederseiten und die folgenden Demo-Websites für viele weitere Beispiele der Verwendung von `GPUDevice` an:

- [Basis-Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
- [Basis-Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/)
- [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
