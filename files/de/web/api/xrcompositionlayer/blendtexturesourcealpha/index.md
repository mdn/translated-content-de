---
title: "XRCompositionLayer: blendTextureSourceAlpha-Eigenschaft"
short-title: blendTextureSourceAlpha
slug: Web/API/XRCompositionLayer/blendTextureSourceAlpha
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`blendTextureSourceAlpha`**-Eigenschaft der [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer)-Schnittstelle ist ein Boolean, der den Alpha-Kanal der Textur des Layers aktiviert.

## Wert

Ein Boolean. `true` aktiviert den Alpha-Kanal, `false` deaktiviert ihn.

## Beispiele

### Einstellen des Alpha-Kanals einer Textur eines Layers

Der folgende Codeausschnitt schaltet einen Layer auf undurchsichtig und zurück.

```js
myLayer.blendTextureSourceAlpha = !myLayer.blendTextureSourceAlpha;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Alpha", "Alpha-Kanal")}}
