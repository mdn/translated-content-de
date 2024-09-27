---
title: "IntersectionObserver: rootMargin-Eigenschaft"
short-title: rootMargin
slug: Web/API/IntersectionObserver/rootMargin
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`rootMargin`**-Eigenschaft des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Interfaces ist ein String mit einer Syntax, die der der CSS-{{cssxref("margin")}}-Eigenschaft ähnelt. Jede Seite des durch `rootMargin` dargestellten Rechtecks wird zur entsprechenden Seite im [Begrenzungsrahmen](/de/docs/Glossary/bounding_box) des [`root`](/de/docs/Web/API/IntersectionObserver/root)-Elements hinzugefügt, bevor der Schnittpunkttest durchgeführt wird. Dies ermöglicht es Ihnen zum Beispiel, die Grenzen nach außen anzupassen, sodass das Zielelement als 100% sichtbar betrachtet wird, auch wenn eine bestimmte Anzahl von Pixeln der Breite oder Höhe abgeschnitten wird, oder das Ziel als teilweise verborgen zu behandeln, wenn eine Kante zu nah an der Kante des Begrenzungsrahmens des Roots liegt.

Sehen Sie sich an, [wie Schnittpunkte berechnet werden](/de/docs/Web/API/Intersection_Observer_API#how_intersection_is_calculated) für einen tiefergehenden Blick auf den Root-Margin und wie er mit dem Begrenzungsrahmen des Roots funktioniert.

## Wert

Ein String, der ähnlich formatiert ist wie der Wert der CSS-{{cssxref("margin")}}-Eigenschaft, welcher Offsets für eine oder mehrere Seiten des Begrenzungsrahmens des Roots enthält. Diese Offsets werden den entsprechenden Werten im Begrenzungsrahmen des Roots hinzugefügt, bevor der Schnittpunkt zwischen dem resultierenden Rechteck und den Grenzen des Zielelements ermittelt wird.

Der durch diese Eigenschaft zurückgegebene String muss nicht mit dem übereinstimmen, der angegeben wurde, als der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) instanziiert wurde. Es ist dem Browser erlaubt, die Werte zu ändern.

Wenn `rootMargin` bei der Instanziierung des Objekts nicht angegeben wird, hat es standardmäßig den Wert des Strings `"0px 0px 0px 0px"`, was bedeutet, dass der Schnittpunkt zwischen dem unveränderten Grenzenrechteck des Root-Elements und den Begrenzungen des Ziels berechnet wird. [Wie Schnittpunkte berechnet werden](/de/docs/Web/API/Intersection_Observer_API#how_intersection_is_calculated) beschreibt, wie das `rootMargin` im Detail verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
