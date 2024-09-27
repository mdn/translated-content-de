---
title: "GPUCanvasContext: unconfigure() Methode"
short-title: unconfigure()
slug: Web/API/GPUCanvasContext/unconfigure
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`unconfigure()`**-Methode des [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Interfaces entfernt jede zuvor festgelegte Kontextkonfiguration und zerstört alle Texturen, die über [`getCurrentTexture()`](/de/docs/Web/API/GPUCanvasContext/getCurrentTexture) zurückgegeben wurden, während der Canvas-Kontext konfiguriert war.

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

// Later on
context.unconfigure();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
