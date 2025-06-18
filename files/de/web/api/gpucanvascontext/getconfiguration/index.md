---
title: "GPUCanvasContext: getConfiguration() Methode"
short-title: getConfiguration()
slug: Web/API/GPUCanvasContext/getConfiguration
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getConfiguration()`** Methode der [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) Schnittstelle gibt die aktuelle Konfiguration zurück, die für den Kontext eingestellt ist.

## Syntax

```js-nolint
getConfiguration()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die auf den Kontext gesetzten Konfigurationsoptionen enthält (d.h. über die [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) Methode), oder `null`, wenn keine Konfiguration eingestellt ist (entweder wurde zuvor keine Konfiguration gesetzt, oder eine Konfiguration wurde gesetzt und dann wurde [`GPUCanvasContext.unconfigure()`](/de/docs/Web/API/GPUCanvasContext/unconfigure) auf den Kontext angewendet).

## Beispiele

```js
const canvas = document.querySelector("canvas");
const context = canvas.getContext("webgpu");

if (!navigator.gpu) {
  throw Error("WebGPU not supported.");
}

const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("Couldn't request WebGPU adapter.");
}

const device = await adapter.requestDevice();

context.configure({
  device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});

console.log(context.getConfiguration());
/* Logs something like:

{
  "alphaMode": "premultiplied",
  "colorSpace": "srgb",
  "device": { ... },
  "format": "bgra8unorm",
  "toneMapping": {
      "mode": "standard"
  },
  "usage": 16,
  "viewFormats": []
}
*/
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure)
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
