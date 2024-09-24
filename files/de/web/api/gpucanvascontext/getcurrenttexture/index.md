---
title: "GPUCanvasContext: Methode getCurrentTexture()"
short-title: getCurrentTexture()
slug: Web/API/GPUCanvasContext/getCurrentTexture
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getCurrentTexture()`**-Methode der {{domxref("GPUCanvasContext")}}-Schnittstelle gibt die nächste {{domxref("GPUTexture")}} zurück, die vom Canvas-Kontext im Dokument zusammengesetzt werden soll.

## Syntax

```js-nolint
getCurrentTexture()
```

### Parameter

Keine.

### Rückgabewert

Eine {{domxref("GPUTexture")}}-Objektinstanz.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `getCurrentTexture()` auf dem Canvas-Kontext aufgerufen wird, bevor er konfiguriert ist (d. h. bevor {{domxref("GPUCanvasContext.configure()")}} aufgerufen wurde).

## Beispiele

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device: device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});

//...
// Später
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
