---
title: "GPUCanvasContext: unconfigure() Methode"
short-title: unconfigure()
slug: Web/API/GPUCanvasContext/unconfigure
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`unconfigure()`**-Methode der [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Schnittstelle entfernt jede zuvor festgelegte Kontextkonfiguration und zerstört alle Texturen, die über [`getCurrentTexture()`](/de/docs/Web/API/GPUCanvasContext/getCurrentTexture) zurückgegeben wurden, während der Canvas-Kontext konfiguriert war.

## Syntax

```js-nolint
unconfigure()
```

### Parameter

Keine.

### Rückgabewert

Keiner (`undefined`).

## Beispiele

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});

// Later on
context.unconfigure();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
