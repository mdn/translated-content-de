---
title: "XRCompositionLayer: Eigenschaft blendTextureSourceAlpha"
short-title: blendTextureSourceAlpha
slug: Web/API/XRCompositionLayer/blendTextureSourceAlpha
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`blendTextureSourceAlpha`**-Eigenschaft des [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer)-Interfaces ist ein boolean, der den Alpha-Kanal der Textur der Ebene aktiviert.

## Wert

Ein boolean. `true` aktiviert den Alpha-Kanal, `false` deaktiviert ihn.

## Beispiele

### Einstellung des Alpha-Kanals einer Ebene

Der folgende Code-Schnipsel schaltet eine Ebene opak und zurück.

```js
myLayer.blendTextureSourceAlpha = !myLayer.blendTextureSourceAlpha;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Alpha-Kanal](/de/docs/Glossary/Alpha)
