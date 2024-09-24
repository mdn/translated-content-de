---
title: "XRProjectionLayer: ignoreDepthValues Eigenschaft"
short-title: ignoreDepthValues
slug: Web/API/XRProjectionLayer/ignoreDepthValues
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`ignoreDepthValues`**-Eigenschaft des {{domxref("XRProjectionLayer")}}-Interfaces ist ein Boolean, der angibt, ob der XR-Kompositor beim Rendern der Schicht die Werte des Tiefenpuffers nicht nutzt.

## Wert

Ein Boolean. `true` bedeutet, dass der XR-Kompositor die Werte des Tiefenpuffers nicht nutzt; `false` bedeutet, dass der Inhalt des Tiefenpuffers beim Rendern der Schicht verwendet wird.

## Beispiele

### Ignorieren von Tiefenwerten

Wenn die `depthFormat`-Option `0` ist, wenn eine Projektionsschicht erstellt wird, wird die `ignoreDepthValues`-Eigenschaft `true` sein. Siehe auch {{domxref("XRWebGLBinding.createProjectionLayer()")}}.

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

- {{domxref("XRWebGLBinding.createProjectionLayer()")}}
