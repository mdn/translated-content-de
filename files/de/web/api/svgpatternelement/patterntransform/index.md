---
title: "SVGPatternElement: patternTransform-Eigenschaft"
short-title: patternTransform
slug: Web/API/SVGPatternElement/patternTransform
l10n:
  sourceCommit: c82c597653873328e18fc45ac02f610d8f9bc1a7
---

{{APIRef("SVG")}}

Die **`patternTransform`**-Eigenschaft nur-lesbar des [`SVGPatternElement`](/de/docs/Web/API/SVGPatternElement)-Interfaces spiegelt das {{SVGAttr("patternTransform")}}-Attribut des gegebenen {{SVGElement("pattern")}}-Elements wider. Diese Eigenschaft hält die auf das Muster selbst angewendete Transformation und ermöglicht Operationen wie `translate`, `rotate`, `scale` und `skew`.

## Wert

Ein [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList)-Objekt.

## Beispiel

In diesem Beispiel wird das Muster um 20 Grad gedreht, auf der X-Achse um 30 Grad geneigt und um einen Faktor von 1 horizontal und 0,5 vertikal skaliert:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Apply a transform on the tile -->
  <pattern
    id="p1"
    width=".25"
    height=".25"
    patternTransform="rotate(20)
                      skewX(30)
                      scale(1 0.5)">
    <circle cx="10" cy="10" r="10" />
  </pattern>

  <!-- Apply the transformed pattern tile -->
  <rect x="10" y="10" width="80" height="80" fill="url(#p1)" />
</svg>
```

{{EmbedLiveSample("Examples", '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)
- [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes)
