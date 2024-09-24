---
title: "GPURenderPassEncoder: Methode beginOcclusionQuery()"
short-title: beginOcclusionQuery()
slug: Web/API/GPURenderPassEncoder/beginOcclusionQuery
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`beginOcclusionQuery()`**-Methode der {{domxref("GPURenderPassEncoder")}}-Schnittstelle startet eine Occlusion Query am angegebenen Index des entsprechenden {{domxref("GPUQuerySet")}} (bereitgestellt als Wert der `occlusionQuerySet` Beschreibereigenschaft beim Aufrufen von {{domxref("GPUCommandEncoder.beginRenderPass()")}}, um den Render-Pass auszuführen).

## Syntax

```js-nolint
beginOcclusionQuery(queryIndex)
```

### Parameter

- `queryIndex`
  - : Der Index im {{domxref("GPUQuerySet")}}, an dem die Occlusion Query gestartet wird.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`beginOcclusionQuery()`** aufgerufen wird, ansonsten wird ein {{domxref("GPUValidationError")}} erzeugt und der {{domxref("GPURenderPassEncoder")}} wird ungültig:

- Ein {{domxref("GPUQuerySet")}} wurde in der `occlusionQuerySet` Beschreibereigenschaft angegeben, als der ursprüngliche {{domxref("GPUCommandEncoder.beginRenderPass()")}} aufgerufen wurde.
- `queryIndex` ist kleiner als {{domxref("GPUQuerySet.count")}}.
- Der `queryIndex` wurde im selben Render-Pass noch nicht beschrieben.
- Eine Occlusion Query ist für diesen Render-Pass noch nicht aktiv (d. h. durch einen vorherigen `beginOcclusionQuery()`-Aufruf).

## Beispiele

```js
// ...

// Ein Query-Set erstellen, um die Occlusion Queries zu speichern
const querySet = device.createQuerySet({
  type: "occlusion",
  count: 32,
});

// Render-Pass-Deskriptor-Objekt, einschließlich des querySet
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

// Den Render-Pass beginnen
const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// Eine Occlusion Query bei Index 0 starten
passEncoder.beginOcclusionQuery(0);

// Einige Rendering-Befehle ausführen
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

// Die Occlusion Query beenden
passEncoder.endOcclusionQuery();

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
