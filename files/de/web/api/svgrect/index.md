---
title: SVGRect
slug: Web/API/SVGRect
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{APIRef("SVG")}}

Das **`SVGRect`** repräsentiert ein Rechteck. Rechtecke bestehen aus einem `x`- und `y`-Koordinatenpaar, das einen minimalen `x`-Wert und einen minimalen `y`-Wert identifiziert, sowie einer `width` und `height`, die auf nicht-negative Werte beschränkt sind.

Ein **`SVGRect`**-Objekt kann als schreibgeschützt festgelegt werden, was bedeutet, dass Versuche, das Objekt zu modifizieren, eine Ausnahme hervorrufen.

## Instanz-Eigenschaften

- [`SVGRect.x`](/de/docs/Web/API/SVGRect/x)
  - : Die genaue Wirkung dieser Koordinate hängt von jedem Element ab. Wenn das Attribut nicht angegeben ist, wirkt es sich so aus, als ob ein Wert von `0` angegeben wäre.
- [`SVGRect.y`](/de/docs/Web/API/SVGRect/y)
  - : Die genaue Wirkung dieser Koordinate hängt von jedem Element ab. Wenn das Attribut nicht angegeben ist, wirkt es sich so aus, als ob ein Wert von `0` angegeben wäre.
- [`SVGRect.width`](/de/docs/Web/API/SVGRect/width)
  - : Dies repräsentiert die Breite des Rechtecks. Ein negativer Wert führt zu einem Fehler. Ein Wert von `0` deaktiviert die Darstellung des Elements.
- [`SVGRect.height`](/de/docs/Web/API/SVGRect/height)
  - : Dies repräsentiert die Höhe des Rechtecks. Ein negativer Wert führt zu einem Fehler. Ein Wert von `0` deaktiviert die Darstellung des Elements.

## Instanz-Methoden

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
