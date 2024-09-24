---
title: GPU
slug: Web/API/GPU
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPU`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} ist der Ausgangspunkt für die Nutzung von WebGPU. Sie kann verwendet werden, um einen {{domxref("GPUAdapter")}} zurückzugeben, von dem aus Sie Geräte anfordern, Funktionen und Grenzwerte konfigurieren und mehr tun können.

Das `GPU`-Objekt für den aktuellen Kontext kann über die {{domxref("Navigator.gpu")}}- oder {{domxref("WorkerNavigator.gpu")}}-Eigenschaften zugegriffen werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("GPU.wgslLanguageFeatures", "wgslLanguageFeatures")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein {{domxref("WGSLLanguageFeatures")}} Objekt, das die [WGSL-Spracherweiterungen](https://gpuweb.github.io/gpuweb/wgsl/#language-extension) berichtet, die von der WebGPU-Implementierung unterstützt werden.

## Instanz-Methoden

- {{domxref("GPU.requestAdapter", "requestAdapter()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer {{domxref("GPUAdapter")}}-Objektinstanz erfüllt wird. Von diesem können Sie ein {{domxref("GPUDevice")}} anfordern, welches die primäre Schnittstelle für die Nutzung der WebGPU-Funktionalität ist.
- {{domxref("GPU.getPreferredCanvasFormat", "getPreferredCanvasFormat()")}} {{Experimental_Inline}}
  - : Gibt das optimale Leinwand-Texturformat zurück, um 8-Bit-Tiefe, Standard-Dynamikbereich-Inhalte auf dem aktuellen System anzuzeigen.

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

### Konfiguration eines GPUCanvasContext mit dem optimalen Texturformat

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
