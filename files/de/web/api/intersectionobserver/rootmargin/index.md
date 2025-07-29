---
title: "IntersectionObserver: rootMargin-Eigenschaft"
short-title: rootMargin
slug: Web/API/IntersectionObserver/rootMargin
l10n:
  sourceCommit: 1b61fe3aa68b972468514d5ab13ed93497b13a96
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`rootMargin`**-Eigenschaft des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Interfaces ist ein String mit einer Syntax, die der der CSS-{{cssxref("margin")}}-Eigenschaft ähnlich ist.

Jede Seite des Rechtecks, das durch `rootMargin` dargestellt wird, wird zur entsprechenden Seite im {{Glossary("bounding_box", "Begrenzungsrahmen")}} des [`root`](/de/docs/Web/API/IntersectionObserver/root)-Elements hinzugefügt, bevor der Schnittpunkttest durchgeführt wird. Dies ermöglicht Ihnen beispielsweise, die Grenzen nach außen anzupassen, sodass das Zielelement als 100% sichtbar angesehen wird, selbst wenn eine bestimmte Anzahl von Pixeln in Breite oder Höhe abgeschnitten wird, oder das Ziel als teilweise verdeckt zu behandeln, wenn ein Rand zu nahe am Rand des Begrenzungsrahmens des Roots liegt.

Sehen Sie [wie Schnittpunkte berechnet werden](/de/docs/Web/API/Intersection_Observer_API#how_intersection_is_calculated) für einen detaillierteren Blick auf die Root-Margin und wie sie mit dem Begrenzungsrahmen des Roots funktioniert.

## Wert

Ein String, ähnlich formatiert wie der Wert der CSS-{{cssxref("margin")}}-Eigenschaft, der Offsets für eine oder mehrere Seiten des Begrenzungsrahmens des Roots enthält. Diese Offsets werden zu den entsprechenden Werten im Begrenzungsrahmen des Roots hinzugefügt, bevor der Schnittpunkt zwischen dem resultierenden Rechteck und den Grenzen des Zielelements berechnet wird.

Der von dieser Eigenschaft zurückgegebene String muss möglicherweise nicht mit dem übereinstimmen, der bei der Instanziierung des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) angegeben wurde. Zum Beispiel enthält das Ergebnis immer vier Komponenten, obwohl die Eingabe weniger haben könnte.

Wenn `rootMargin` bei der Instanziierung des Objekts nicht angegeben ist, wird standardmäßig der String `"0px 0px 0px 0px"` verwendet, was bedeutet, dass der Schnittpunkt zwischen dem unveränderten Begrenzungsrechteck des Root-Elements und den Grenzen des Ziels berechnet wird. [Wie Schnittpunkte berechnet werden](/de/docs/Web/API/Intersection_Observer_API#how_intersection_is_calculated) beschreibt, wie die `rootMargin` im Detail verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
