---
title: "GPUCanvasContext: getCurrentTexture() Methode"
short-title: getCurrentTexture()
slug: Web/API/GPUCanvasContext/getCurrentTexture
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getCurrentTexture()`**-Methode der [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Schnittstelle gibt die nächste [`GPUTexture`](/de/docs/Web/API/GPUTexture) zurück, die vom Canvas-Kontext im Dokument zusammengesetzt werden soll.

## Syntax

```js-nolint
getCurrentTexture()
```

### Parameter

Keine.

### Rückgabewert

Ein [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekt-Instanz.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `getCurrentTexture()` im Canvas-Kontext aufgerufen wird, bevor er konfiguriert wurde (d.h. bevor [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) aufgerufen wurde).

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
