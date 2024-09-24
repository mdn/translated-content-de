---
title: "GPUCanvasContext: canvas-Eigenschaft"
short-title: canvas
slug: Web/API/GPUCanvasContext/canvas
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`canvas`** Nur-Lese-Eigenschaft des {{domxref("GPUCanvasContext")}}-Interfaces gibt eine Referenz auf die Leinwand zurück, von der der Kontext erstellt wurde.

## Wert

Ein {{domxref("HTMLCanvasElement")}}- oder {{domxref("OffscreenCanvas")}}-Objekt-Instanz.

## Beispiele

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

// returns an HTMLCanvasElement reference
context.canvas;
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
