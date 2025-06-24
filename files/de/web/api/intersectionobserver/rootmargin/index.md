---
title: "IntersectionObserver: rootMargin-Eigenschaft"
short-title: rootMargin
slug: Web/API/IntersectionObserver/rootMargin
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte Eigenschaft **`rootMargin`** des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Interfaces ist ein String, dessen Syntax der der CSS-Eigenschaft {{cssxref("margin")}} ähnelt.

Jede Seite des durch `rootMargin` dargestellten Rechtecks wird zur entsprechenden Seite im {{Glossary("bounding_box", "Begrenzungsrahmen")}} des [`root`](/de/docs/Web/API/IntersectionObserver/root)-Elements hinzugefügt, bevor der Schnittpunkttest durchgeführt wird. Dies ermöglicht es Ihnen zum Beispiel, die Begrenzungen nach außen zu erweitern, sodass das Zielelement als 100 % sichtbar betrachtet wird, selbst wenn eine bestimmte Anzahl von Pixeln in der Breite oder Höhe abgeschnitten ist, oder das Ziel als teilweise versteckt zu behandeln, wenn eine Kante zu nahe an der Kante des begrenzenden Rahmens des Roots liegt.

Siehe [wie Schnittpunkte berechnet werden](/de/docs/Web/API/Intersection_Observer_API#how_intersection_is_calculated) für einen detaillierteren Blick auf das root margin und wie es mit dem Begrenzungsrahmen des Roots funktioniert.

## Wert

Ein String, der ähnlich wie der Wert der CSS-Eigenschaft {{cssxref("margin")}} formatiert ist, der Offsets für eine oder mehrere Seiten des Begrenzungsrahmens des Roots enthält. Diese Offsets werden zu den entsprechenden Werten im Begrenzungsrahmen des Roots hinzugefügt, bevor der Schnittpunkt zwischen dem resultierenden Rechteck und den Begrenzungen des Zielelements berechnet wird.

Der von dieser Eigenschaft zurückgegebene String entspricht möglicherweise nicht dem, der bei der Instanziierung des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) angegeben wurde. Der Browser darf die Werte ändern.

Wenn `rootMargin` bei der Instanzierung des Objekts nicht angegeben ist, wird es standardmäßig auf den String `"0px 0px 0px 0px"` gesetzt, was bedeutet, dass der Schnittpunkt zwischen dem unveränderten Begrenzungsrechteck des Root-Elements und den Begrenzungen des Ziels berechnet wird. [Wie Schnittpunkte berechnet werden](/de/docs/Web/API/Intersection_Observer_API#how_intersection_is_calculated) beschreibt, wie `rootMargin` detaillierter verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
