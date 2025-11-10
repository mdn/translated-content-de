---
title: SVGAnimatedAngle
slug: Web/API/SVGAnimatedAngle
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Die **`SVGAnimatedAngle`**-Schnittstelle wird für Attribute des Basistyps [\<angle>](/de/docs/Web/SVG/Guides/Content_type#angle) verwendet, die animiert werden können.

## Instanz-Eigenschaften

- [`SVGAnimatedAngle.baseVal`](/de/docs/Web/API/SVGAnimatedAngle/baseVal) {{ReadOnlyInline}}
  - : Ein [`SVGAngle`](/de/docs/Web/API/SVGAngle), der den Basiswert des angegebenen Attributs vor Anwendung von Animationen darstellt.
- [`SVGAnimatedAngle.animVal`](/de/docs/Web/API/SVGAnimatedAngle/animVal) {{ReadOnlyInline}}
  - : Ein schreibgeschützter [`SVGAngle`](/de/docs/Web/API/SVGAngle), der den aktuell animierten Wert des angegebenen Attributs darstellt. Wenn das angegebene Attribut derzeit nicht animiert wird, hat der [`SVGAngle`](/de/docs/Web/API/SVGAngle) denselben Inhalt wie `baseVal`. Das durch `animVal` referenzierte Objekt wird immer von dem durch `baseVal` referenzierten Objekt verschieden sein, selbst wenn das Attribut nicht animiert ist.

## Instanz-Methoden

_Die `SVGAnimatedAngle`-Schnittstelle bietet keine spezifischen Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
