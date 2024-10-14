---
title: "GPUCanvasContext: getConfiguration()-Methode"
short-title: getConfiguration()
slug: Web/API/GPUCanvasContext/getConfiguration
l10n:
  sourceCommit: ca6a51e5335df951c1d5b71593f84811697f4ce6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getConfiguration()`**-Methode des [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Interfaces gibt die aktuelle Konfiguration zurück, die für den Kontext festgelegt ist.

## Syntax

```js-nolint
getConfiguration()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die auf dem Kontext festgelegten Konfigurationsoptionen enthält (d.h. über die [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure)-Methode festgelegt), oder `null`, wenn keine Konfiguration festgelegt ist (entweder wurde keine Konfiguration zuvor festgelegt, oder eine Konfiguration wurde festgelegt und dann wurde [`GPUCanvasContext.unconfigure()`](/de/docs/Web/API/GPUCanvasContext/unconfigure) auf dem Kontext aufgerufen).

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
  device: device,
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