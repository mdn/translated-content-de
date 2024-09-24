---
title: "GPUCanvasContext: unconfigure() Methode"
short-title: unconfigure()
slug: Web/API/GPUCanvasContext/unconfigure
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`unconfigure()`** Methode der {{domxref("GPUCanvasContext")}}-Schnittstelle entfernt jede zuvor gesetzte Kontextkonfiguration und zerstört alle Texturen, die über {{domxref("GPUCanvasContext.getCurrentTexture", "getCurrentTexture()")}} zurückgegeben wurden, während der Canvas-Kontext konfiguriert war.

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
  device: device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});

// Später
context.unconfigure();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
