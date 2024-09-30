---
title: "XRWebGLLayer: ignoreDepthValues-Eigenschaft"
short-title: ignoreDepthValues
slug: Web/API/XRWebGLLayer/ignoreDepthValues
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Eigenschaft **`ignoreDepthValues`** ist ein Boolescher Wert, der `true` ist, wenn die Sitzung so konfiguriert wurde, dass die Werte im Tiefenpuffer beim Rendern der Szene ignoriert werden. Wenn der Tiefenpuffer verwendet wird, um die Position von Vertices zu bestimmen, ist diese Eigenschaft `false`.

Der Wert von `ignoreDepthValues` kann nur festgelegt werden, wenn die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) instanziiert wird, indem der entsprechende Wert im `options`-Parameter des [Konstruktors](/de/docs/Web/API/XRWebGLLayer/XRWebGLLayer) festgelegt wird.

## Wert

Ein boolescher Wert, der `true` ist, wenn der Tiefenpuffer des WebGL-Kontexts verwendet wird, um die Positionen von Punkten in der 3D-Welt zu berechnen. Andernfalls, wenn `true`, werden die Werte des Tiefenpuffers verwendet, um bei der Platzierung von Objekten in der Szene zu helfen. Da der [XR-Kompositor](/de/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) standardmäßig den Tiefenpuffer verwendet, ist dieser Wert `false`, es sei denn, er wird explizit anders festgelegt, wenn die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) mit ihrem Konstruktor [`XRWebGLLayer()`](/de/docs/Web/API/XRWebGLLayer/XRWebGLLayer) erstellt wird.

## Nutzungshinweise

Wenn die `ignoreDepthValues`-Eigenschaft `false` ist, verwendet der XR-Kompositor die im Tiefenpuffer enthaltenen Werte, die für die Szene genau sein sollten, um möglicherweise die Qualität oder den Komfort für den Betrachter zu verbessern.

Der Tiefenpuffer ist [`framebufferWidth`](/de/docs/Web/API/XRWebGLLayer/framebufferWidth) Einträge breit und [`framebufferHeight`](/de/docs/Web/API/XRWebGLLayer/framebufferHeight) Einträge hoch. Jeder Eintrag im Puffer gibt die Tiefe an, in der sich das entsprechende Pixel befindet, und hat einen Wert zwischen 0,0 und 1,0.

Ein Tiefenpuffer-Pixelwert von 0,0 entspricht der Tiefe, die durch die Sitzungseigenschaften [`depthNear`](/de/docs/Web/API/XRRenderState/depthNear) gegeben ist, und ein Wert von 1,0 entspricht der Tiefe, die durch [`depthFar`](/de/docs/Web/API/XRRenderState/depthFar) gegeben ist.

Die Tiefe, zusammen mit den Koordinaten jedes gerenderten Punktes, ermöglicht es, die Szene genauer im 3D-Raum darzustellen.

## Beispiele

Wenn die Webanwendung, die WeXR nutzt, ihren Inhalt ohne Verwendung eines Tiefenpuffers rendert – oder wenn der Inhalt des Tiefenpuffers ungültig ist – sollten Sie die Verwendung des Tiefenpuffers für das WebXR-Rendering deaktivieren, indem Sie `ignoreDepthValues` auf true setzen, wenn Sie die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) erstellen. Dies wird im folgenden Codeausschnitt demonstriert:

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
- WebGL-bezogene Tiefenpuffer-Methoden: [`depthFunc()`](/de/docs/Web/API/WebGLRenderingContext/depthFunc), [`clearDepth()`](/de/docs/Web/API/WebGLRenderingContext/clearDepth)
