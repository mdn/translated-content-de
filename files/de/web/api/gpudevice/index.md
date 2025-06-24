---
title: GPUDevice
slug: Web/API/GPUDevice
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUDevice`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert ein logisches GPU-Gerät. Dies ist die Hauptschnittstelle, über die die Mehrheit der WebGPU-Funktionalität zugänglich ist.

Ein `GPUDevice`-Objekt wird mit der Methode [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`adapterInfo`](/de/docs/Web/API/GPUDevice/adapterInfo) {{Experimental_Inline}} {{ReadOnlyInline}}

  - : Ein [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Objekt, das Identifizierungsinformationen über den Adapter des Geräts enthält.

- [`features`](/de/docs/Web/API/GPUDevice/features) {{ReadOnlyInline}}

  - : Ein [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekt, das zusätzliche vom Gerät unterstützte Funktionalitäten beschreibt.

- [`label`](/de/docs/Web/API/GPUDevice/label)

  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

- [`limits`](/de/docs/Web/API/GPUDevice/limits) {{ReadOnlyInline}}

  - : Ein [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekt, das die vom Gerät unterstützten Grenzen beschreibt.

- [`lost`](/de/docs/Web/API/GPUDevice/lost) {{ReadOnlyInline}}

  - : Enthält ein {{jsxref("Promise")}}, das während der gesamten Lebensdauer des Geräts aussteht und mit einem [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)-Objekt aufgelöst wird, wenn das Gerät verloren geht.

- [`queue`](/de/docs/Web/API/GPUDevice/queue) {{ReadOnlyInline}}
  - : Gibt die primäre [`GPUQueue`](/de/docs/Web/API/GPUQueue) des Geräts zurück.

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)

  - : Erstellt eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das eine Reihe von Ressourcen definiert, die in einer Gruppe zusammengebunden werden und wie diese Ressourcen in Shader-Stufen verwendet werden.

- [`createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)

  - : Erstellt ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das die Struktur und den Zweck verwandter GPU-Ressourcen wie Puffer definiert, die in einer Pipeline verwendet werden, und als Vorlage beim Erstellen von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s verwendet wird.

- [`createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer)

  - : Erstellt einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), um rohe Daten zu speichern, die in GPU-Operationen verwendet werden.

- [`createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder)

  - : Erstellt einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder), der verwendet wird, um Befehle zu kodieren, die an die GPU gesendet werden sollen.

- [`createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline)

  - : Erstellt eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline), die die Compute-Shader-Stufe steuern kann und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann.

- [`createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync)

  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) erfüllt wird, die die Compute-Shader-Stufe steuern kann und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann, sobald die Pipeline ohne Blockierung verwendet werden kann.

- [`createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout)

  - : Erstellt ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout), das die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s definiert, die von einer Pipeline verwendet werden. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die mit der Pipeline während der Befehlscodierung verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.

- [`createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet)

  - : Erstellt ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das verwendet werden kann, um die Ergebnisse von Anfragen zu Passes aufzuzeichnen, wie zum Beispiel Frage zu Okklusion oder Zeitstempel.

- [`createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder)

  - : Erstellt einen [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder), der verwendet werden kann, um Befehlspakete vorab aufzuzeichnen. Diese können in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s über die Methode [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) mehrfach wiederverwendet werden.

- [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline)

  - : Erstellt eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die die Vertex- und Fragment-Shader-Stufen steuern und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

- [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync)

  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) erfüllt wird, die die Vertex- und Fragment-Shader-Stufen steuern und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann, sobald die Pipeline ohne Blockierung verwendet werden kann.

- [`createSampler()`](/de/docs/Web/API/GPUDevice/createSampler)

  - : Erstellt einen [`GPUSampler`](/de/docs/Web/API/GPUSampler), der steuert, wie Shader Texturressourcendaten transformieren und filtern.

- [`createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule)

  - : Erstellt ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) aus einem String von WGSL-Quellcode.

- [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)

  - : Erstellt eine [`GPUTexture`](/de/docs/Web/API/GPUTexture), in der Texturdaten gespeichert werden, um sie in GPU-Renderoperationen zu verwenden.

- [`destroy()`](/de/docs/Web/API/GPUDevice/destroy)

  - : Zerstört das Gerät und verhindert weitere Operationen darauf.

- [`importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture)

  - : Nimmt ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) als Eingabe und gibt ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Wrapperobjekt zurück, das ein Schnappschuss des Videos enthält, das in GPU-Renderoperationen verwendet werden kann.

- [`popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope)

  - : Entfernt einen vorhandenen GPU-Fehlerbereich aus dem Fehlerbereichs-Stapel und gibt ein {{jsxref("Promise")}} zurück, das zu einem Objekt ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)) wird, das den ersten in diesem Bereich erfassten Fehler beschreibt, oder `null`, wenn kein Fehler aufgetreten ist.

- [`pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope)
  - : Fügt einen neuen GPU-Fehlerbereich zum Fehlerbereichs-Stapel des Geräts hinzu, sodass Sie Fehler eines bestimmten Typs erfassen können.

## Ereignisse

- [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Fehler auftritt, der nicht von einem GPU-Fehlerbereich erfasst wurde, um eine Möglichkeit zur Meldung unerwarteter Fehler zu bieten. Bekannte Fehlerfälle sollten mit [`pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) und [`popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) behandelt werden.

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

Siehe die oben aufgeführten einzelnen Mitgliederseiten und die folgenden Demo-Sites für viele weitere Beispiele zur Verwendung von `GPUDevice`:

- [Grundlegende Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
- [Grundlegende Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/)
- [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
