---
title: "XRCompositionLayer: Eigenschaft blendTextureSourceAlpha"
short-title: blendTextureSourceAlpha
slug: Web/API/XRCompositionLayer/blendTextureSourceAlpha
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`blendTextureSourceAlpha`**-Eigenschaft der {{domxref("XRCompositionLayer")}}-Schnittstelle ist ein boolescher Wert, der den Alpha-Kanal der Textur der Ebene aktiviert.

## Wert

Ein boolescher Wert. `true` aktiviert den Alpha-Kanal, `false` deaktiviert ihn.

## Beispiele

### Einstellen des Alpha-Kanals der Textur einer Ebene

Der folgende Codeausschnitt schaltet eine Ebene auf opak und wieder zurück.

```js
myLayer.blendTextureSourceAlpha = !myLayer.blendTextureSourceAlpha;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Alpha", "Alpha-Kanal")}}
