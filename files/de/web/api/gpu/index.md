---
title: GPU
slug: Web/API/GPU
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPU`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist der Ausgangspunkt zur Nutzung von WebGPU. Es kann verwendet werden, um einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zurückzugeben, mit dem Sie Geräte anfordern, Funktionen und Einschränkungen konfigurieren und mehr machen können.

Das `GPU`-Objekt für den aktuellen Kontext wird über die Eigenschaften [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) oder [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu) aufgerufen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`wgslLanguageFeatures`](/de/docs/Web/API/GPU/wgslLanguageFeatures) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein [`WGSLLanguageFeatures`](/de/docs/Web/API/WGSLLanguageFeatures)-Objekt, das die von der WebGPU-Implementierung unterstützten [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) meldet.

## Instanzmethoden

- [`requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Objektinstanz erfüllt wird. Von diesem können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) anfordern, das die primäre Schnittstelle zur Nutzung der WebGPU-Funktionalität darstellt.
- [`getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat) {{Experimental_Inline}}
  - : Gibt das optimale Canvas-Texturformat für die Anzeige von 8-Bit-Tiefe, Standard-Dynamikbereich-Inhalt auf dem aktuellen System zurück.

## Beispiele

### Anfordern eines Adapters und eines Geräts

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

  //...
}
```

### Konfigurieren eines GPUCanvasContext mit dem optimalen Texturformat

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device: device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
