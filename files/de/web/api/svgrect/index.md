---
title: SVGRect
slug: Web/API/SVGRect
l10n:
  sourceCommit: 3ae7f380c04096191376ffc2b455471e5d5fd8a8
---

{{APIRef("SVG")}}

Der **`SVGRect`**, ein Alias für [`DOMRect`](/de/docs/Web/API/DOMRect), repräsentiert ein Rechteck. Rechtecke bestehen aus einem `x`- und `y`-Koordinatenpaar, das einen minimalen `x`-Wert, einen minimalen `y`-Wert sowie eine `width` und `height` identifiziert, die auf nicht-negative Werte beschränkt sind.

Ein `SVGRect`-Objekt kann als schreibgeschützt festgelegt werden, was bedeutet, dass Versuche, das Objekt zu ändern, eine Ausnahme auslösen.

## Instanz-Eigenschaften

- [`SVGRect.x`](/de/docs/Web/API/SVGRect/x)
  - : Der genaue Effekt dieser Koordinate hängt von jedem Element ab. Wenn das Attribut nicht angegeben wird, ist der Effekt so, als ob ein Wert von `0` angegeben wäre.
- [`SVGRect.y`](/de/docs/Web/API/SVGRect/y)
  - : Der genaue Effekt dieser Koordinate hängt von jedem Element ab. Wenn das Attribut nicht angegeben wird, ist der Effekt so, als ob ein Wert von `0` angegeben wäre.
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

## Siehe auch

- [`DOMRect`](/de/docs/Web/API/DOMRect)
- [`DOMPoint`](/de/docs/Web/API/DOMPoint) Alias [`SVGPoint`](/de/docs/Web/API/SVGPoint)
- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Alias [`SVGMatrix`](/de/docs/Web/API/SVGMatrix)
