---
title: GPU
slug: Web/API/GPU
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPU`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist der Ausgangspunkt für die Nutzung von WebGPU. Es kann verwendet werden, um einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zurückzugeben, von dem aus Sie Geräte anfordern, Funktionen und Limits konfigurieren und mehr tun können.

Das `GPU`-Objekt für den aktuellen Kontext wird über die Eigenschaften [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) oder [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu) aufgerufen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`wgslLanguageFeatures`](/de/docs/Web/API/GPU/wgslLanguageFeatures) {{ReadOnlyInline}}
  - : Ein [`WGSLLanguageFeatures`](/de/docs/Web/API/WGSLLanguageFeatures)-Objekt, das die von der WebGPU-Implementierung unterstützten [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) meldet.

## Instanzmethoden

- [`requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Objektinstanz erfüllt wird. Von diesem aus können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) anfordern, welches das Hauptinterface für die Nutzung der WebGPU-Funktionalität darstellt.
- [`getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat)
  - : Gibt das optimale Canvas-Texturformat für die Anzeige von Inhalten mit 8-Bit-Tiefe und Standarddynamikbereich auf dem aktuellen System zurück.

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

  // …
}
```

### Konfiguration eines GPUCanvasContext mit dem optimalen Texturformat

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device,
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
