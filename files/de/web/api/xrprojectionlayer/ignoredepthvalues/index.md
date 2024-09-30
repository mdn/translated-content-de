---
title: "XRProjectionLayer: ignoreDepthValues-Eigenschaft"
short-title: ignoreDepthValues
slug: Web/API/XRProjectionLayer/ignoreDepthValues
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`ignoreDepthValues`**-Eigenschaft der [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)-Schnittstelle ist ein Boolean, der angibt, ob der XR-Kompositor bei der Darstellung der Ebene die Werte des Tiefenpuffers nicht verwendet.

## Wert

Ein Boolean. `true` bedeutet, dass der XR-Kompositor die Werte des Tiefenpuffers nicht verwendet; `false` bedeutet, dass der Inhalt des Tiefenpuffers beim Rendern der Ebene verwendet wird.

## Beispiele

### Ignorieren von Tiefenwerten

Wenn die Option `depthFormat` auf `0` gesetzt ist, wenn eine Projektionsebene erstellt wird, wird die Eigenschaft `ignoreDepthValues` den Wert `true` haben. Siehe auch [`XRWebGLBinding.createProjectionLayer()`](/de/docs/Web/API/XRWebGLBinding/createProjectionLayer).

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
