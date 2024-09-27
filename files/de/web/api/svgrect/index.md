---
title: SVGRect
slug: Web/API/SVGRect
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{APIRef("SVG")}}

Der **`SVGRect`** repräsentiert ein Rechteck. Rechtecke bestehen aus einem `x`- und `y`-Koordinatenpaar, das einen minimalen `x`-Wert, einen minimalen `y`-Wert sowie eine `width` und `height` identifiziert, die auf nicht-negative Werte beschränkt sind.

Ein **`SVGRect`**-Objekt kann als schreibgeschützt festgelegt werden, was bedeutet, dass Versuche, das Objekt zu ändern, eine Ausnahme auslösen.

## Instanzeigenschaften

- [`SVGRect.x`](/de/docs/Web/API/SVGRect/x)
  - : Die genaue Auswirkung dieser Koordinate hängt von jedem Element ab. Wenn das Attribut nicht angegeben ist, ist die Wirkung so, als ob ein Wert von `0` angegeben wäre.
- [`SVGRect.y`](/de/docs/Web/API/SVGRect/y)
  - : Die genaue Auswirkung dieser Koordinate hängt von jedem Element ab. Wenn das Attribut nicht angegeben ist, ist die Wirkung so, als ob ein Wert von `0` angegeben wäre.
- [`SVGRect.width`](/de/docs/Web/API/SVGRect/width)
  - : Dies repräsentiert die Breite des Rechtecks. Ein negativer Wert führt zu einem Fehler. Ein Wert von `0` deaktiviert das Rendering des Elements.
- [`SVGRect.height`](/de/docs/Web/API/SVGRect/height)
  - : Dies repräsentiert die Höhe des Rechtecks. Ein negativer Wert führt zu einem Fehler. Ein Wert von `0` deaktiviert das Rendering des Elements.

## Instanzmethoden

Keine.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
