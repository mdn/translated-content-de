---
title: SVGRect
slug: Web/API/SVGRect
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{APIRef("SVG")}}

Der **`SVGRect`** stellt ein Rechteck dar. Rechtecke bestehen aus einem `x`- und `y`-Koordinatenpaar, das einen minimalen `x`-Wert, einen minimalen `y`-Wert und eine `width` (Breite) und `height` (Höhe) identifiziert, die auf nicht-negative Werte beschränkt sind.

Ein **`SVGRect`**-Objekt kann als schreibgeschützt festgelegt werden, was bedeutet, dass Versuche, das Objekt zu ändern, eine Ausnahme auslösen.

## Instanz-Eigenschaften

- {{domxref("SVGRect.x")}}
  - : Die genaue Wirkung dieser Koordinate hängt von jedem Element ab. Wenn das Attribut nicht angegeben ist, wirkt es so, als ob ein Wert von `0` angegeben worden wäre.
- {{domxref("SVGRect.y")}}
  - : Die genaue Wirkung dieser Koordinate hängt von jedem Element ab. Wenn das Attribut nicht angegeben ist, wirkt es so, als ob ein Wert von `0` angegeben worden wäre.
- {{domxref("SVGRect.width")}}
  - : Dies repräsentiert die Breite des Rechtecks. Ein negativer Wert führt zu einem Fehler. Ein Wert von `0` deaktiviert die Darstellung des Elements.
- {{domxref("SVGRect.height")}}
  - : Dies repräsentiert die Höhe des Rechtecks. Ein negativer Wert führt zu einem Fehler. Ein Wert von `0` deaktiviert die Darstellung des Elements.

## Instanz-Methoden

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
