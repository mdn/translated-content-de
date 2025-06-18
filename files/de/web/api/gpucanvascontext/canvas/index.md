---
title: "GPUCanvasContext: canvas-Eigenschaft"
short-title: canvas
slug: Web/API/GPUCanvasContext/canvas
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`canvas`**-Eigenschaft, eine schreibgeschützte Eigenschaft der [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Schnittstelle, gibt eine Referenz auf das Canvas zurück, von dem der Kontext erstellt wurde.

## Wert

Eine Instanz eines [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekts.

## Beispiele

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

// returns an HTMLCanvasElement reference
context.canvas;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
