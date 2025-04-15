---
title: SVGAnimatedNumberList
slug: Web/API/SVGAnimatedNumberList
l10n:
  sourceCommit: 624ae775ae376b1c8924f3d0a8572fa54195fb68
---

{{APIRef("SVG")}}

Die **`SVGAnimatedNumberList`**-Schnittstelle repräsentiert eine Liste von Attributen des Typs [\<number>](/de/docs/Web/SVG/Guides/Content_type#number), die animiert werden können.

## Instanzeigenschaften

- [`SVGAnimatedNumberList.baseVal`](/de/docs/Web/API/SVGAnimatedNumberList/baseVal) {{ReadOnlyInline}}
  - : Eine [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), die den Basiswert des angegebenen Attributs darstellt, bevor irgendwelche Animationen angewendet werden.
- [`SVGAnimatedNumberList.animVal`](/de/docs/Web/API/SVGAnimatedNumberList/animVal) {{ReadOnlyInline}}
  - : Eine schreibgeschützte [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), die den aktuellen animierten Wert des angegebenen Attributs darstellt. Wenn das angegebene Attribut aktuell nicht animiert wird, wird die [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) denselben Inhalt wie `baseVal` haben. Das Objekt, auf das `animVal` verweist, ist immer verschieden von dem, auf das `baseVal` verweist, selbst wenn das Attribut nicht animiert wird.

## Instanzmethoden

Die `SVGAnimatedNumberList`-Schnittstelle bietet keine spezifischen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
