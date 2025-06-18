---
title: "GPURenderPassEncoder: beginOcclusionQuery()-Methode"
short-title: beginOcclusionQuery()
slug: Web/API/GPURenderPassEncoder/beginOcclusionQuery
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`beginOcclusionQuery()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle startet eine Okklusionsabfrage am angegebenen Index des entsprechenden [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) (bereitgestellt als Wert der `occlusionQuerySet`-Deskriptoreigenschaft beim Aufrufen von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass), um den Rendering-Durchgang auszuführen).

## Syntax

```js-nolint
beginOcclusionQuery(queryIndex)
```

### Parameter

- `queryIndex`
  - : Der Index im [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), an dem die Okklusionsabfrage begonnen werden soll.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`beginOcclusionQuery()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- Ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) wurde in der `occlusionQuerySet`-Deskriptoreigenschaft angegeben, wenn der ursprüngliche [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) aufgerufen wurde.
- `queryIndex` ist kleiner als [`GPUQuerySet.count`](/de/docs/Web/API/GPUQuerySet/count).
- Auf `queryIndex` wurde im gleichen Rendering-Durchgang nicht bereits geschrieben.
- Eine Okklusionsabfrage ist für diesen Rendering-Durchgang nicht bereits aktiv (d.h. durch einen vorherigen `beginOcclusionQuery()`-Aufruf).

## Beispiele

```js
// …

// Create a query set to hold the occlusion queries
const querySet = device.createQuerySet({
  type: "occlusion",
  count: 32,
});

// Render pass descriptor object, including the querySet
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

// Begin the render pass
const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// Begin an occlusion query at index 0
passEncoder.beginOcclusionQuery(0);

// Run some rendering commands
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

// End the occlusion query
passEncoder.endOcclusionQuery();

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
