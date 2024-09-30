---
title: "XRCompositionLayer: mipLevels-Eigenschaft"
short-title: mipLevels
slug: Web/API/XRCompositionLayer/mipLevels
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`mipLevels`**-Eigenschaft des [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer)-Interfaces gibt die Anzahl der Mip-Level in den Farb- und Texturdaten einer Ebene an. Siehe auch [Mipmap](https://en.wikipedia.org/wiki/Mipmap) auf Wikipedia.

Die gewünschte Anzahl der Mip-Level kann beim Erstellen von Ebenen angegeben werden. Wenn der User Agent jedoch nicht die angeforderte Anzahl erstellen kann, kann er weniger erstellen. Verwenden Sie `mipLevels`, um die tatsächliche Anzahl der Mip-Level einer Ebene zu bestimmen.

Die `viewPixelWidth` und `viewPixelHeight` müssen Potenzen von zwei sein, da sie bei jedem Mip-Level nacheinander halbiert werden.

## Wert

Eine Zahl, die gleich oder kleiner ist als die angeforderten Mip-Level, wenn eine Ebene erstellt wurde.

## Beispiele

### Abfragen der Mip-Level einer Ebene

Die `mipLevels`-Eigenschaft gibt die tatsächliche Anzahl der erstellten Mip-Level an. In diesem Beispiel konnte die gewünschte Anzahl von 5 Mip-Leveln, die für eine [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer) angefordert wurden, erfüllt werden.

```js
let xrGLBinding = new XRWebGLBinding(session, gl);
let quadLayer = xrGLBinding.createQuadLayer({
  space: refSpace,
  viewPixelHeight: 512,
  viewPixelWidth: 512,
  width: 1.0,
  height: 1.0,
  mipLevels: 5,
  transform: new XRRigidTransform({
    /* … */
  }),
});

quadLayer.mipLevels; // 5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mipmap](https://en.wikipedia.org/wiki/Mipmap) auf Wikipedia
