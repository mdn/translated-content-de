---
title: "SVGPatternElement: patternTransform-Eigenschaft"
short-title: patternTransform
slug: Web/API/SVGPatternElement/patternTransform
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`patternTransform`** der Schnittstelle [`SVGPatternElement`](/de/docs/Web/API/SVGPatternElement) spiegelt das Attribut {{SVGAttr("patternTransform")}} des betreffenden {{SVGElement("pattern")}}-Elements wider. Diese Eigenschaft enthält die auf das Muster selbst angewendete Transformation und ermöglicht Operationen wie `translate`, `rotate`, `scale` und `skew`.

## Wert

Ein [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList)-Objekt.

## Beispiel

In diesem Beispiel wird das Muster um 20 Grad gedreht, entlang der X-Achse um 30 Grad geschert und horizontal mit dem Faktor 1 sowie vertikal mit dem Faktor 0,5 skaliert:

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

{{EmbedLiveSample("example", '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)
- [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes)
