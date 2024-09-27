---
title: "XRCompositionLayer: mipLevels-Eigenschaft"
short-title: mipLevels
slug: Web/API/XRCompositionLayer/mipLevels
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`mipLevels`**-Eigenschaft des [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer)-Interfaces gibt die Anzahl der Mip-Levels eines Layers in den Farb- und Texturdaten an. Siehe auch [Mipmap](https://en.wikipedia.org/wiki/Mipmap) auf Wikipedia.

Die gewünschte Anzahl von Mip-Levels kann beim Erstellen von Layern angegeben werden. Wenn der Benutzeragent jedoch nicht in der Lage ist, die angeforderte Anzahl zu erstellen, kann er weniger erstellen. Verwenden Sie `mipLevels`, um die tatsächliche Anzahl der Mip-Levels für einen Layer zu bestimmen.

Die `viewPixelWidth` und `viewPixelHeight` müssen Potenzen von zwei sein, da sie bei jedem Mip-Level sukzessive halbiert werden.

## Wert

Eine Zahl, die gleich oder kleiner als die angeforderten Mip-Levels ist, wenn ein Layer erstellt wurde.

## Beispiele

### Abrufen der Mip-Levels eines Layers

Die `mipLevels`-Eigenschaft gibt die tatsächliche Anzahl der erstellten Mip-Levels an. In diesem Beispiel konnte die gewünschte Anzahl von 5 Mip-Levels, die für ein [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer) angefordert wurden, vollständig erfüllt werden.

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
