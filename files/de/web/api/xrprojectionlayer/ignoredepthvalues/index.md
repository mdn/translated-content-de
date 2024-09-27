---
title: "XRProjectionLayer: ignoreDepthValues-Eigenschaft"
short-title: ignoreDepthValues
slug: Web/API/XRProjectionLayer/ignoreDepthValues
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`ignoreDepthValues`**-Eigenschaft des [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)-Interfaces ist ein boolescher Wert, der angibt, ob der XR-Kompositor die Tiefenpufferwerte beim Rendern der Schicht nicht verwendet.

## Wert

Ein boolescher Wert. `true` gibt an, dass der XR-Kompositor die Tiefenpufferwerte nicht verwendet; `false` gibt an, dass der Inhalt des Tiefenpuffers beim Rendern der Schicht verwendet wird.

## Beispiele

### Ignorieren von Tiefenwerten

Wenn die `depthFormat`-Option `0` ist, wenn eine Projektschicht erstellt wird, wird die `ignoreDepthValues`-Eigenschaft `true` sein. Siehe auch [`XRWebGLBinding.createProjectionLayer()`](/de/docs/Web/API/XRWebGLBinding/createProjectionLayer).

```js
let glProjectionLayer = xrGLBinding.createProjectionLayer({
  depthFormat: 0,
});

glProjectionLayer.ignoreDepthValues; // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRWebGLBinding.createProjectionLayer()`](/de/docs/Web/API/XRWebGLBinding/createProjectionLayer)
