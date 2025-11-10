---
title: SVGAnimatedLengthList
slug: Web/API/SVGAnimatedLengthList
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Die **`SVGAnimatedLengthList`**-Schnittstelle wird für Attribute vom Typ [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) verwendet, die animiert werden können.

## Instanz-Eigenschaften

- [`SVGAnimatedLengthList.baseVal`](/de/docs/Web/API/SVGAnimatedLengthList/baseVal) {{ReadOnlyInline}}
  - : Eine [`SVGLengthList`](/de/docs/Web/API/SVGLengthList), die den Basiswert des angegebenen Attributs vor Anwendung von Animationen darstellt.
- [`SVGAnimatedLengthList.animVal`](/de/docs/Web/API/SVGAnimatedLengthList/animVal) {{ReadOnlyInline}}
  - : Eine schreibgeschützte [`SVGLengthList`](/de/docs/Web/API/SVGLengthList), die den aktuell animierten Wert des angegebenen Attributs darstellt. Wenn das angegebene Attribut derzeit nicht animiert wird, wird die [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) denselben Inhalt wie `baseVal` haben. Das von `animVal` referenzierte Objekt wird immer von demjenigen, das von `baseVal` referenziert wird, verschieden sein, auch wenn das Attribut nicht animiert ist.

## Instanz-Methoden

_Die `SVGAnimatedLengthList`-Schnittstelle bietet keine spezifischen Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
