---
title: GPUDevice
slug: Web/API/GPUDevice
l10n:
  sourceCommit: 66f1ba7918610f1145cde4a1d2d7ecb3baea5f65
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUDevice`** Interface der [WebGPU-API](/de/docs/Web/API/WebGPU_API) repräsentiert ein logisches GPU-Gerät. Dies ist das Hauptinterface, über das die Mehrheit der WebGPU-Funktionalität zugegriffen wird.

Ein `GPUDevice`-Objekt wird mit der Methode [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`adapterInfo`](/de/docs/Web/API/GPUDevice/adapterInfo) {{ReadOnlyInline}}
  - : Ein [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Objekt, das identifizierende Informationen über den Adapter des Geräts enthält.

- [`features`](/de/docs/Web/API/GPUDevice/features) {{ReadOnlyInline}}
  - : Ein [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekt, das zusätzliche Funktionalität beschreibt, die vom Gerät unterstützt wird.

- [`label`](/de/docs/Web/API/GPUDevice/label)
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

- [`limits`](/de/docs/Web/API/GPUDevice/limits) {{ReadOnlyInline}}
  - : Ein [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekt, das die Grenzen beschreibt, die von dem Gerät unterstützt werden.

- [`lost`](/de/docs/Web/API/GPUDevice/lost) {{ReadOnlyInline}}
  - : Enthält ein {{jsxref("Promise")}}, das während der gesamten Lebensdauer des Geräts ausstehend bleibt und mit einem [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)-Objekt aufgelöst wird, wenn das Gerät verloren geht.

- [`queue`](/de/docs/Web/API/GPUDevice/queue) {{ReadOnlyInline}}
  - : Gibt die primäre [`GPUQueue`](/de/docs/Web/API/GPUQueue) für das Gerät zurück.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)
  - : Erstellt eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das eine Reihe von Ressourcen definiert, die in einer Gruppe zusammengebunden werden und wie diese Ressourcen in Shader-Stufen verwendet werden.

- [`createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)
  - : Erstellt ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das die Struktur und den Zweck von verwandten GPU-Ressourcen wie Buffern definiert, die in einer Pipeline verwendet werden, und wird als Vorlage beim Erstellen von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s verwendet.

- [`createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer)
  - : Erstellt einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), um rohe Daten zu speichern, die in GPU-Operationen verwendet werden.

- [`createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder)
  - : Erstellt einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder), der verwendet wird, um Befehle zu codieren, die an die GPU ausgegeben werden sollen.

- [`createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline)
  - : Erstellt eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline), die die Compute-Shader-Stufe steuern kann und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann.

- [`createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) erfüllt, die die Compute-Shader-Stufe steuern kann und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann, sobald die Pipeline ohne Verzögerung verwendet werden kann.

- [`createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout)
  - : Erstellt ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout), das die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s definiert, die von einer Pipeline verwendet werden. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die mit der Pipeline während der Befehlscodierung verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.

- [`createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet)
  - : Erstellt ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), das verwendet werden kann, um die Ergebnisse von Anfragen zu Passes aufzuzeichnen, wie z.B. Okklusions- oder Zeitstempelanfragen.

- [`createRenderBundleEncoder()`](/de/docs/Web/API/GPUDevice/createRenderBundleEncoder)
  - : Erstellt einen [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder), der verwendet werden kann, um Bündel von Befehlen im Voraus zu kodieren. Diese können in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s mittels der [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles)-Methode wiederverwendet werden, so oft wie nötig.

- [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline)
  - : Erstellt eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die die Vertex- und Fragment-Shader-Stufen steuern kann und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

- [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) erfüllt, die die Vertex- und Fragment-Shader-Stufen steuern kann und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann, sobald die Pipeline ohne Verzögerung verwendet werden kann.

- [`createSampler()`](/de/docs/Web/API/GPUDevice/createSampler)
  - : Erstellt einen [`GPUSampler`](/de/docs/Web/API/GPUSampler), der steuert, wie Shader Textur-Ressourcendaten transformieren und filtern.

- [`createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule)
  - : Erstellt ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) aus einem String von WGSL-Quellcode.

- [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)
  - : Erstellt eine [`GPUTexture`](/de/docs/Web/API/GPUTexture), um Texturdaten zu speichern, die in GPU-Rendering-Operationen verwendet werden.

- [`destroy()`](/de/docs/Web/API/GPUDevice/destroy)
  - : Zerstört das Gerät und verhindert weitere Operationen darauf.

- [`importExternalTexture()`](/de/docs/Web/API/GPUDevice/importExternalTexture)
  - : Nimmt ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) als Eingabe und gibt ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Wrapper-Objekt zurück, das einen Schnappschuss des Videos enthält und in GPU-Rendering-Operationen verwendet werden kann.

- [`popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope)
  - : Entfernt einen bestehenden GPU-Error-Scope aus dem Error-Scope-Stack und gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Objekt ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)) auflöst, das den ersten im Scope erfassten Fehler beschreibt, oder `null` falls kein Fehler aufgetreten ist.

- [`pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope)
  - : Fügt einen neuen GPU-Error-Scope zum Error-Scope-Stack des Geräts hinzu, damit Sie Fehler eines bestimmten Typs erfassen können.

## Ereignisse

- [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)
  - : Wird ausgelöst, wenn ein Fehler auftritt, der von einem GPU-Error-Scope nicht beobachtet wurde, um eine Möglichkeit zu bieten, unerwartete Fehler zu melden. Bekannte Fehlerfälle sollten mit [`pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) und [`popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) behandelt werden.

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

Sehen Sie sich die einzelnen oben aufgelisteten Mitgliederseiten und die folgenden Demoseiten für viel mehr Beispiele zur Verwendung von `GPUDevice` an:

- [Einfache Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
- [Einfache Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/)
- [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
