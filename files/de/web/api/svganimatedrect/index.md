---
title: SVGAnimatedRect
slug: Web/API/SVGAnimatedRect
l10n:
  sourceCommit: fb611fd93bd56e48326c038060cc5fb00a552516
---

{{APIRef("SVG")}}

Die **`SVGAnimatedRect`**-Schnittstelle repräsentiert ein [`SVGRect`](/de/docs/Web/API/SVGRect)-Attribut, das animiert werden kann.

## Instanz-Eigenschaften

- [`baseVal`](/de/docs/Web/API/SVGAnimatedRect/baseVal)
  - : Der Basiswert des gegebenen Attributs vor der Anwendung von Animationen.
- [`animVal`](/de/docs/Web/API/SVGAnimatedRect/animVal) {{ReadOnlyInline}}
  - : Der aktuelle animierte Wert des gegebenen Attributs als schreibgeschützte [`SVGRect`](/de/docs/Web/API/SVGRect). Falls das gegebene Attribut derzeit nicht animiert wird, dann wird das [`SVGRect`](/de/docs/Web/API/SVGRect) den gleichen Inhalt wie `baseVal` haben. Das von `animVal` referenzierte Objekt wird immer von dem durch `baseVal` referenzierten Objekt verschieden sein, selbst wenn das Attribut nicht animiert ist.

## Instanz-Methoden

_Die `SVGAnimatedRect`-Schnittstelle bietet keine spezifischen Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
