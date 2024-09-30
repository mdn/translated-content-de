---
title: "GPUCanvasContext: canvas-Eigenschaft"
short-title: canvas
slug: Web/API/GPUCanvasContext/canvas
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`canvas`**-Eigenschaft des [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Interfaces ist eine schreibgeschützte Eigenschaft, die eine Referenz auf das Canvas zurückgibt, aus dem der Kontext erstellt wurde.

## Wert

Eine Instanz des [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)- oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Objekts.

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
