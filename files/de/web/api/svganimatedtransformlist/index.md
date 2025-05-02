---
title: SVGAnimatedTransformList
slug: Web/API/SVGAnimatedTransformList
l10n:
  sourceCommit: 676e3902d017e5251164a3446cdcdd7492ee0cb3
---

{{APIRef("SVG")}}

Das **`SVGAnimatedTransformList`** Interface repräsentiert Attribute, die eine Liste von Zahlen enthalten und animiert werden können.

## Instanz-Eigenschaften

- [`baseVal`](/de/docs/Web/API/SVGAnimatedTransformList/baseVal) {{ReadOnlyInline}}
  - : Der Basiswert des angegebenen Attributs vor der Anwendung von Animationen.
- [`animVal`](/de/docs/Web/API/SVGAnimatedTransformList/animVal) {{ReadOnlyInline}}
  - : Der aktuelle animierte Wert des angegebenen Attributs als schreibgeschützte [`SVGTransformList`](/de/docs/Web/API/SVGTransformList). Wenn das angegebene Attribut derzeit nicht animiert wird, hat die [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) denselben Inhalt wie `baseVal`. Das von `animVal` referenzierte Objekt wird immer von dem durch `baseVal` referenzierten Objekt verschieden sein, selbst wenn das Attribut nicht animiert wird.

## Instanz-Methoden

_Das `SVGAnimatedTransformList` Interface bietet keine spezifischen Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
