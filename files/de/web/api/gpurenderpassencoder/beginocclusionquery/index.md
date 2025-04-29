---
title: "GPURenderPassEncoder: beginOcclusionQuery()-Methode"
short-title: beginOcclusionQuery()
slug: Web/API/GPURenderPassEncoder/beginOcclusionQuery
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`beginOcclusionQuery()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle startet eine Occlusion-Query am angegebenen Index des relevanten [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) (bereitgestellt als Wert der `occlusionQuerySet`-Deskriptoreigenschaft beim Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass), um den Render-Pass auszuführen).

## Syntax

```js-nolint
beginOcclusionQuery(queryIndex)
```

### Parameter

- `queryIndex`
  - : Der Index im [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet), bei dem die Occlusion-Query beginnt.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`beginOcclusionQuery()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- Ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) wurde in der `occlusionQuerySet`-Deskriptoreigenschaft angegeben, als der ursprüngliche [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) aufgerufen wurde.
- `queryIndex` ist kleiner als [`GPUQuerySet.count`](/de/docs/Web/API/GPUQuerySet/count).
- In den `queryIndex` wurde im gleichen Render-Pass noch nicht geschrieben.
- Eine Occlusion-Query ist für diesen Render-Pass nicht bereits aktiv (d.h. durch einen vorherigen `beginOcclusionQuery()`-Aufruf).

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
