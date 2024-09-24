---
title: "GPURenderPassEncoder: endOcclusionQuery()-Methode"
short-title: endOcclusionQuery()
slug: Web/API/GPURenderPassEncoder/endOcclusionQuery
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`endOcclusionQuery()`**-Methode der {{domxref("GPURenderPassEncoder")}}-Schnittstelle beendet eine aktive Occlusion Query, die zuvor mit {{domxref("GPURenderPassEncoder.beginOcclusionQuery", "beginOcclusionQuery()")}} gestartet wurde.

## Syntax

```js-nolint
endOcclusionQuery()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`endOcclusionQuery()`** aufgerufen wird. Andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und die {{domxref("GPURenderPassEncoder")}} wird ungültig:

- Eine Occlusion Query ist für diesen Render-Pass aktiv (d. h. durch einen vorherigen `beginOcclusionQuery()`-Aufruf).

## Beispiele

```js
// ...

// Erstellen eines Query Sets, um die Occlusion Queries zu halten
const querySet = device.createQuerySet({
  type: "occlusion",
  count: 32,
});

// Renderpass-Deskriptorobjekt, einschließlich des querySet
const renderPassDescriptor = {
  colorAttachments: [
    {
      clearValue: clearColor,
      loadOp: "clear",
      storeOp: "store",
      view: context.getCurrentTexture().createView(),
    },
  ],
  occlusionQuerySet: querySet,
};

// Beginnen des Render-Passes
const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// Beginnen einer Occlusion Query bei Index 0
passEncoder.beginOcclusionQuery(0);

// Ausführen einiger Rendering-Befehle
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

// Beenden der Occlusion Query
passEncoder.endOcclusionQuery();

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
