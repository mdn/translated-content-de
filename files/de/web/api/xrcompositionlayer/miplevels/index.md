---
title: "XRCompositionLayer: mipLevels-Eigenschaft"
short-title: mipLevels
slug: Web/API/XRCompositionLayer/mipLevels
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`mipLevels`**-Eigenschaft der [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer)-Schnittstelle ist die Anzahl der Mip-Levels in den Farb- und Texturdaten einer Ebene. Siehe auch [Mipmap](https://en.wikipedia.org/wiki/Mipmap) auf Wikipedia.

Die gewünschte Anzahl von Mip-Levels kann beim Erstellen von Ebenen angegeben werden. Wenn der Benutzeragent jedoch die angegebene Anzahl nicht erstellen kann, kann er weniger erstellen. Verwenden Sie `mipLevels`, um die tatsächliche Anzahl der Mip-Levels für eine Ebene zu bestimmen.

Die `viewPixelWidth` und `viewPixelHeight` müssen Potenzen von zwei sein, da sie bei jedem Mip-Level sukzessive halbiert werden.

## Wert

Eine Zahl, die kleiner oder gleich der angeforderten Mip-Levels ist, wenn eine Ebene erstellt wurde.

## Beispiele

### Abrufen der Mip-Levels einer Ebene

Die `mipLevels`-Eigenschaft gibt die tatsächliche Anzahl der Mip-Levels an, die erstellt wurden. In diesem Beispiel konnte die gewünschte Anzahl von 5 Mip-Levels, die für eine [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer) angefordert wurde, erfüllt werden.

```js
let xrGLBinding = new XRWebGLBinding(session, gl);
let quadLayer = xrGLBinding.createQuadLayer({
  space: refSpace,
  viewPixelHeight: 512,
  viewPixelWidth: 512,
  width: 1.0,
  height: 1.0,
  mipLevels: 5,
  transform: new XRRigidTransform({/* … */}),
});

quadLayer.mipLevels; // 5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mipmap](https://en.wikipedia.org/wiki/Mipmap) auf Wikipedia
