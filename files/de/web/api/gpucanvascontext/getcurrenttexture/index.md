---
title: "GPUCanvasContext: Methode getCurrentTexture()"
short-title: getCurrentTexture()
slug: Web/API/GPUCanvasContext/getCurrentTexture
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getCurrentTexture()`**-Methode der [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Schnittstelle gibt die nächste [`GPUTexture`](/de/docs/Web/API/GPUTexture) zurück, die vom Canvas-Kontext mit dem Dokument zusammengesetzt wird.

## Syntax

```js-nolint
getCurrentTexture()
```

### Parameter

Keine.

### Rückgabewert

Eine [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objektinstanz.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `getCurrentTexture()` im Canvas-Kontext aufgerufen wird, bevor dieser konfiguriert wurde (d.h. bevor [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) aufgerufen wurde).

## Beispiele

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});

// …
// Later on
const commandEncoder = device.createCommandEncoder();

const renderPassDescriptor = {
  colorAttachments: [
    {
      clearValue: [0, 0, 0, 1], // Opaque black
      loadOp: "clear",
      storeOp: "store",
      view: context.getCurrentTexture().createView(),
    },
  ],
};

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
