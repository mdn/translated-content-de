---
title: GPUDevice
slug: Web/API/GPUDevice
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUDevice`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} repräsentiert ein logisches GPU-Gerät. Dies ist die Hauptschnittstelle, über die der Großteil der WebGPU-Funktionalität zugänglich ist.

Ein `GPUDevice`-Objekt wird mit der Methode {{domxref("GPUAdapter.requestDevice()")}} angefordert.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, {{DOMxRef("EventTarget")}}._

- {{domxref("GPUDevice.features", "features")}} {{Experimental_Inline}} {{ReadOnlyInline}}

  - : Ein {{domxref("GPUSupportedFeatures")}}-Objekt, das zusätzliche Funktionalitäten beschreibt, die von dem Gerät unterstützt werden.

- {{domxref("GPUDevice.label", "label")}} {{Experimental_Inline}}

  - : Eine Zeichenkette, die eine Kennzeichnung bereitstellt, die zur Identifizierung des Objekts verwendet werden kann, z. B. in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

- {{domxref("GPUDevice.limits", "limits")}} {{Experimental_Inline}} {{ReadOnlyInline}}

  - : Ein {{domxref("GPUSupportedLimits")}}-Objekt, das die vom Gerät unterstützten Grenzen beschreibt.

- {{domxref("GPUDevice.lost", "lost")}} {{Experimental_Inline}} {{ReadOnlyInline}}

  - : Enthält ein {{jsxref("Promise")}}, das während der gesamten Lebensdauer des Geräts anhängig bleibt und mit einem {{domxref("GPUDeviceLostInfo")}}-Objekt aufgelöst wird, wenn das Gerät verloren geht.

- {{domxref("GPUDevice.queue", "queue")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die primäre {{domxref("GPUQueue")}} für das Gerät zurück.

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, {{DOMxRef("EventTarget")}}._

- {{domxref("GPUDevice.createBindGroup", "createBindGroup()")}} {{Experimental_Inline}}

  - : Erstellt eine {{domxref("GPUBindGroup")}} basierend auf einem {{domxref("GPUBindGroupLayout")}}, das eine Reihe von Ressourcen definiert, die in einer Gruppe gebunden werden sollen und wie diese Ressourcen in Shader-Stufen verwendet werden.

- {{domxref("GPUDevice.createBindGroupLayout", "createBindGroupLayout()")}} {{Experimental_Inline}}

  - : Erstellt ein {{domxref("GPUBindGroupLayout")}}, das die Struktur und den Zweck von verwandten GPU-Ressourcen wie Puffern definiert, die in einer Pipeline verwendet werden, und dient als Vorlage beim Erstellen von {{domxref("GPUBindGroup")}}s.

- {{domxref("GPUDevice.createBuffer", "createBuffer()")}} {{Experimental_Inline}}

  - : Erstellt einen {{domxref("GPUBuffer")}}, in dem Rohdaten gespeichert werden, die in GPU-Operationen verwendet werden sollen.

- {{domxref("GPUDevice.createCommandEncoder", "createCommandEncoder()")}} {{Experimental_Inline}}

  - : Erstellt einen {{domxref("GPUCommandEncoder")}}, der verwendet wird, um Befehle zu codieren, die an die GPU ausgegeben werden sollen.

- {{domxref("GPUDevice.createComputePipeline", "createComputePipeline()")}} {{Experimental_Inline}}

  - : Erstellt eine {{domxref("GPUComputePipeline")}}, die die Berechnungsshader-Stufe steuern kann und in einem {{domxref("GPUComputePassEncoder")}} verwendet werden kann.

- {{domxref("GPUDevice.createComputePipelineAsync", "createComputePipelineAsync()")}} {{Experimental_Inline}}

  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer {{domxref("GPUComputePipeline")}} erfüllt wird, die die Berechnungsshader-Stufe steuern kann und in einem {{domxref("GPUComputePassEncoder")}} verwendet werden kann, sobald die Pipeline verwendet werden kann, ohne dass es zu Verzögerungen kommt.

- {{domxref("GPUDevice.createPipelineLayout", "createPipelineLayout()")}} {{Experimental_Inline}}

  - : Erstellt ein {{domxref("GPUPipelineLayout")}}, das die {{domxref("GPUBindGroupLayout")}}s definiert, die von einer Pipeline verwendet werden. {{domxref("GPUBindGroup")}}s, die während der Befehlskodierung mit der Pipeline verwendet werden, müssen kompatible {{domxref("GPUBindGroupLayout")}}s haben.

- {{domxref("GPUDevice.createQuerySet", "createQuerySet()")}} {{Experimental_Inline}}

  - : Erstellt ein {{domxref("GPUQuerySet")}}, das zur Aufzeichnung der Ergebnisse von Abfragen bei Durchläufen, wie Okklusions- oder Zeitstempelabfragen, verwendet werden kann.

- {{domxref("GPUDevice.createRenderBundleEncoder", "createRenderBundleEncoder()")}} {{Experimental_Inline}}

  - : Erstellt einen {{domxref("GPURenderBundleEncoder")}}, der verwendet werden kann, um Befehlsbündel voraufzuzeichnen. Diese können in {{domxref("GPURenderPassEncoder")}}s mithilfe der Methode {{domxref("GPURenderPassEncoder.executeBundles", "executeBundles()")}}, so oft wie nötig, wiederverwendet werden.

- {{domxref("GPUDevice.createRenderPipeline", "createRenderPipeline()")}} {{Experimental_Inline}}

  - : Erstellt eine {{domxref("GPURenderPipeline")}}, die die Vertex- und Fragment-Shader-Stufen steuern kann und in einem {{domxref("GPURenderPassEncoder")}} oder {{domxref("GPURenderBundleEncoder")}} verwendet werden kann.

- {{domxref("GPUDevice.createRenderPipelineAsync", "createRenderPipelineAsync()")}} {{Experimental_Inline}}

  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer {{domxref("GPURenderPipeline")}} erfüllt wird, die die Vertex- und Fragment-Shader-Stufen steuern kann und in einem {{domxref("GPURenderPassEncoder")}} oder {{domxref("GPURenderBundleEncoder")}} verwendet werden kann, sobald die Pipeline verwendet werden kann, ohne dass es zu Verzögerungen kommt.

- {{domxref("GPUDevice.createSampler", "createSampler()")}} {{Experimental_Inline}}

  - : Erstellt einen {{domxref("GPUSampler")}}, der steuert, wie Shader Textur-Ressourcendaten transformieren und filtern.

- {{domxref("GPUDevice.createShaderModule", "createShaderModule()")}} {{Experimental_Inline}}

  - : Erstellt ein {{domxref("GPUShaderModule")}} aus einem String von WGSL-Quellcode.

- {{domxref("GPUDevice.createTexture", "createTexture()")}} {{Experimental_Inline}}

  - : Erstellt eine {{domxref("GPUTexture")}}, in der Texturdaten gespeichert werden, die in GPU-Rendering-Operationen verwendet werden sollen.

- {{domxref("GPUDevice.destroy", "destroy()")}} {{Experimental_Inline}}

  - : Zerstört das Gerät, wodurch weitere Operationen verhindert werden.

- {{domxref("GPUDevice.importExternalTexture", "importExternalTexture()")}} {{Experimental_Inline}}

  - : Nimmt ein {{domxref("HTMLVideoElement")}} als Eingabe und gibt ein {{domxref("GPUExternalTexture")}}-Wrapperobjekt zurück, das einen Schnappschuss des Videos enthält, der in GPU-Rendering-Operationen verwendet werden kann.

- {{domxref("GPUDevice.popErrorScope", "popErrorScope()")}} {{Experimental_Inline}}

  - : Entfernt einen bestehenden GPU-Fehlerbereich aus dem Fehlerbereichsstapel und gibt ein {{jsxref("Promise")}} zurück, das in ein Objekt ({{domxref("GPUInternalError")}}, {{domxref("GPUOutOfMemoryError")}} oder {{domxref("GPUValidationError")}}) aufgelöst wird, das den ersten in dem Bereich erfassten Fehler beschreibt, oder `null`, falls kein Fehler aufgetreten ist.

- {{domxref("GPUDevice.pushErrorScope", "pushErrorScope()")}} {{Experimental_Inline}}
  - : Fügt einen neuen GPU-Fehlerbereich zum Fehlerbereichsstapel des Geräts hinzu, sodass Sie Fehler eines bestimmten Typs erfassen können.

## Ereignisse

- {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Fehler geworfen wird, der nicht von einem GPU-Fehlerbereich erfasst wurde, um eine Möglichkeit zur Meldung unerwarteter Fehler zu bieten. Bekannte Fehlerfälle sollten mit {{domxref("GPUDevice.pushErrorScope", "pushErrorScope()")}} und {{domxref("GPUDevice.popErrorScope", "popErrorScope()")}} behandelt werden.

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

Siehe die oben aufgeführten Mitgliederseiten und folgende Demoseiten für viele weitere Beispiele zur Verwendung von `GPUDevice`:

- [Basic compute demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
- [Basic render demo](https://mdn.github.io/dom-examples/webgpu-render-demo/)
- [WebGPU samples](https://webgpu.github.io/webgpu-samples/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
