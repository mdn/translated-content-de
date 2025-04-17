---
title: SVGAnimatedPreserveAspectRatio
slug: Web/API/SVGAnimatedPreserveAspectRatio
l10n:
  sourceCommit: a275f510c0c0706c272149c596a75299e5e18351
---

{{APIRef("SVG")}}

Die **`SVGAnimatedPreserveAspectRatio`**-Schnittstelle repräsentiert Attribute des Typs [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio), die animiert werden können.

## Instanz-Eigenschaften

- [`baseVal`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio/baseVal) {{ReadOnlyInline}}
  - : Ein [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio), das den Basiswert des angegebenen Attributs vor Anwendung von Animationen repräsentiert.
- [`animVal`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio/animVal) {{ReadOnlyInline}}
  - : Ein [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio), das den aktuellen animierten Wert des angegebenen Attributs repräsentiert. Wenn das angegebene Attribut derzeit nicht animiert wird, hat das [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio) denselben Inhalt wie `baseVal`. Das durch `animVal` referenzierte Objekt ist immer von dem durch `baseVal` referenzierten Objekt zu unterscheiden, selbst wenn das Attribut nicht animiert ist.

## Instanz-Methoden

Die `SVGAnimatedPreserveAspectRatio`-Schnittstelle bietet keine spezifischen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
