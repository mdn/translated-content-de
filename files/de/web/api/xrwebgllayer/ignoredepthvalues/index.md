---
title: "XRWebGLLayer: ignoreDepthValues-Eigenschaft"
short-title: ignoreDepthValues
slug: Web/API/XRWebGLLayer/ignoreDepthValues
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Eigenschaft **`ignoreDepthValues`** ist ein boolescher Wert, der `true` ist, wenn die Sitzung so konfiguriert wurde, dass die Werte im Tiefenpuffer beim Rendern der Szene ignoriert werden. Wenn der Tiefenpuffer verwendet wird, um die Position von Vertices zu bestimmen, ist diese Eigenschaft `false`.

Der Wert von `ignoreDepthValues` kann nur gesetzt werden, wenn die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) instanziiert wird, indem der entsprechende Wert im `options` Parameter des [Konstruktors](/de/docs/Web/API/XRWebGLLayer/XRWebGLLayer) festgelegt wird.

## Wert

Ein boolescher Wert, der `true` ist, wenn der Tiefenpuffer des WebGL-Kontextes verwendet wird, um die Positionen von Punkten in der 3D-Welt zu berechnen. Ansonsten, wenn dies `true` ist, werden die Werte des Tiefenpuffers verwendet, um Objekte in der Szene zu platzieren. Da der [XR-Compositor](/de/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) standardmäßig den Tiefenpuffer verwendet, ist dieser Wert `false`, es sei denn, er wird ausdrücklich anders festgelegt, wenn die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) unter Verwendung ihres Konstruktors, [`XRWebGLLayer()`](/de/docs/Web/API/XRWebGLLayer/XRWebGLLayer), erstellt wird.

## Verwendungshinweise

Wenn die Eigenschaft `ignoreDepthValues` `false` ist, verwendet der XR-Compositor die im Tiefenpuffer gefundenen Werte, die für die Szene genau sein sollten, um die Qualität oder das Ausgabeergebnis sowie das Komfortniveau für den Betrachter potenziell zu verbessern.

Der Tiefenpuffer ist so breit wie die [`framebufferWidth`](/de/docs/Web/API/XRWebGLLayer/framebufferWidth) Einträge und so hoch wie die [`framebufferHeight`](/de/docs/Web/API/XRWebGLLayer/framebufferHeight) Einträge. Jeder Eintrag im Puffer gibt die Tiefe an, bei der sich das entsprechende Pixel befindet, und hat einen Wert zwischen 0,0 und 1,0.

Ein Tiefenpuffer-Pixelwert von 0,0 entspricht der Tiefe, die durch [`depthNear`](/de/docs/Web/API/XRRenderState/depthNear) der Sitzung gegeben ist, und ein Wert von 1,0 entspricht der Tiefe, die durch [`depthFar`](/de/docs/Web/API/XRRenderState/depthFar) gegeben ist.

Die Tiefe, zusammen mit den Koordinaten jedes gerenderten Punktes, macht es möglich, die Szene im 3D-Raum genauer darzustellen.

## Beispiele

Wenn die Webanwendung, die WeXR verwendet, ihren Inhalt ohne Verwendung eines Tiefenpuffers rendert — oder wenn der Inhalt des Tiefenpuffers ungültig ist — sollten Sie die Verwendung des Tiefenpuffers für das WebXR-Rendering deaktivieren, indem Sie `ignoreDepthValues` auf `true` setzen, wenn Sie die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) erstellen. Dies wird im untenstehenden Code-Snippet demonstriert:

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- WebGL-Tiefenpuffer-bezogene Methoden: [`depthFunc()`](/de/docs/Web/API/WebGLRenderingContext/depthFunc), [`clearDepth()`](/de/docs/Web/API/WebGLRenderingContext/clearDepth)
