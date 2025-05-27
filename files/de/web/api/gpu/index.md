---
title: GPU
slug: Web/API/GPU
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPU`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist der Ausgangspunkt für die Verwendung von WebGPU. Es kann verwendet werden, um ein [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zurückzugeben, von dem aus Sie Geräte anfordern, Funktionen und Grenzen konfigurieren und mehr tun können.

Das `GPU`-Objekt für den aktuellen Kontext wird über die Eigenschaften [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) oder [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu) abgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`wgslLanguageFeatures`](/de/docs/Web/API/GPU/wgslLanguageFeatures) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein [`WGSLLanguageFeatures`](/de/docs/Web/API/WGSLLanguageFeatures)-Objekt, das die [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) berichtet, die von der WebGPU-Implementierung unterstützt werden.

## Instanz-Methoden

- [`requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Objektinstanz erfüllt wird. Von diesem können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) anfordern, welches die primäre Schnittstelle zur Nutzung der WebGPU-Funktionalität ist.
- [`getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat) {{Experimental_Inline}}
  - : Gibt das optimale Canvas-Texturformat für die Darstellung von Inhalten mit 8-Bit-Tiefe und Standard-Dynamikbereich auf dem aktuellen System zurück.

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

### Konfigurieren eines GPUCanvasContext mit dem optimalen Texturformat

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
