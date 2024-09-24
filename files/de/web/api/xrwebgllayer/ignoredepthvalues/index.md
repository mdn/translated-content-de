---
title: "XRWebGLLayer: ignoreDepthValues Eigenschaft"
short-title: ignoreDepthValues
slug: Web/API/XRWebGLLayer/ignoreDepthValues
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte {{domxref("XRWebGLLayer")}}-Eigenschaft **`ignoreDepthValues`** ist ein boolescher Wert, der `true` ist, wenn die Sitzung so konfiguriert wurde, dass die Werte im Tiefenpuffer beim Rendern der Szene ignoriert werden. Wenn der Tiefenpuffer verwendet wird, um die Position von Vertices zu bestimmen, ist diese Eigenschaft `false`.

Der Wert von `ignoreDepthValues` kann nur gesetzt werden, wenn die {{domxref("XRWebGLLayer")}} instanziiert wird, indem der entsprechende Wert im [Konstruktor](/de/docs/Web/API/XRWebGLLayer/XRWebGLLayer) `options` Parameter gesetzt wird.

## Wert

Ein boolescher Wert, der `true` ist, wenn der Tiefenpuffer des WebGL-Kontexts verwendet wird, um die Positionen von Punkten in der 3D-Welt zu berechnen. Andernfalls, wenn dies `true` ist, werden die Werte des Tiefenpuffers verwendet, um Objekte in der Szene zu positionieren. Da der [XR-Compositor](/de/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) standardmäßig den Tiefenpuffer verwendet, ist dieser Wert `false`, es sei denn, er wird beim Erstellen der {{domxref("XRWebGLLayer")}} unter Verwendung ihres Konstruktors, {{domxref("XRWebGLLayer.XRWebGLLayer", "XRWebGLLayer()")}}, explizit anders gesetzt.

## Anwendungshinweise

Wenn die `ignoreDepthValues`-Eigenschaft `false` ist, verwendet der XR-Compositor die im Tiefenpuffer gefundenen Werte, die für die Szene genau sein sollten, um potenziell die Qualität oder die Ausgabe sowie das Komfortniveau für den Betrachter zu verbessern.

Der Tiefenpuffer ist {{domxref("XRWebGLLayer.framebufferWidth", "framebufferWidth")}} Einträge breit und {{domxref("XRWebGLLayer.framebufferHeight", "framebufferHeight")}} Einträge hoch. Jeder Eintrag im Puffer spezifiziert die Tiefe, bei der sich das entsprechende Pixel befindet, und hat einen Wert zwischen 0,0 und 1,0.

Ein Tiefenpuffer-Pixelwert von 0,0 entspricht der Tiefe, die durch die Sitzung {{domxref("XRRenderState.depthNear", "depthNear")}} gegeben ist, und ein Wert von 1,0 entspricht der Tiefe, die durch {{domxref("XRRenderState.depthFar", "depthFar")}} gegeben ist.

Die Tiefe macht es, zusammen mit den Koordinaten jedes gerenderten Punktes, möglich, die Szene im 3D-Raum genauer darzustellen.

## Beispiele

Wenn die Web-Anwendung, die WeXR verwendet, ihren Inhalt ohne einen Tiefenpuffer rendert—oder wenn die Inhalte des Tiefenpuffers ungültig sind—sollten Sie die Verwendung des Tiefenpuffers für WebXR-Rendering deaktivieren, indem Sie `ignoreDepthValues` auf true setzen, wenn Sie die {{domxref("XRWebGLLayer")}} erstellen. Dies wird im folgenden Code-Snippet demonstriert:

```js
const glLayerOptions = {
  ignoreDepthValues: true,
};

let glLayer = new XRWebGLLayer(xrSession, gl, glLayerOptions);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- WebGL-Tiefenpuffer bezogene Methoden: {{domxref("WebGLRenderingContext.depthFunc", "depthFunc()")}}, {{domxref("WebGLRenderingContext.clearDepth", "clearDepth()")}}
