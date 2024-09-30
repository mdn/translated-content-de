---
title: "IntersectionObserver: rootMargin-Eigenschaft"
short-title: rootMargin
slug: Web/API/IntersectionObserver/rootMargin
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`rootMargin`**-Eigenschaft des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Interfaces ist ein String mit einer Syntax, die der der CSS-{{cssxref("margin")}}-Eigenschaft ähnlich ist. Jede Seite des von `rootMargin` repräsentierten Rechtecks wird zur entsprechenden Seite im [Umgrenzungsrahmen](/de/docs/Glossary/bounding_box) des [`root`](/de/docs/Web/API/IntersectionObserver/root)-Elements hinzugefügt, bevor der Schnitttest durchgeführt wird. Auf diese Weise können Sie beispielsweise die Grenzen nach außen verschieben, sodass das Zielelement als 100 % sichtbar gilt, auch wenn eine bestimmte Anzahl von Pixeln der Breite oder Höhe abgeschnitten ist, oder das Ziel als teilweise verborgen behandeln, wenn eine Kante zu nah an der Kante des Umgrenzungsrahmens des Roots liegt.

Siehe [wie Schnittpunkte berechnet werden](/de/docs/Web/API/Intersection_Observer_API#how_intersection_is_calculated) für einen tiefergehenden Blick auf den Root-Margin und wie er mit dem Umgrenzungsrahmen des Roots funktioniert.

## Wert

Ein String, der ähnlich formatiert ist wie der Wert der CSS-{{cssxref("margin")}}-Eigenschaft, der Offsets für eine oder mehrere Seiten des Umgrenzungsrahmens des Roots enthält. Diese Offsets werden zu den entsprechenden Werten im Umgrenzungsrahmen des Roots hinzugefügt, bevor der Schnittpunkt zwischen dem resultierenden Rechteck und den Grenzen des Zielelements berechnet wird.

Der von dieser Eigenschaft zurückgegebene String kann möglicherweise nicht mit dem übereinstimmen, der angegeben wurde, als der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) instanziiert wurde. Der Browser darf die Werte ändern.

Wenn `rootMargin` nicht angegeben wird, wenn das Objekt instanziiert wurde, lautet der Standardwert `"0px 0px 0px 0px"`, was bedeutet, dass der Schnittpunkt zwischen dem unveränderten Umgrenzungsrahmen des Root-Elements und den Grenzen des Ziels berechnet wird. [Wie Schnittpunkte berechnet werden](/de/docs/Web/API/Intersection_Observer_API#how_intersection_is_calculated) beschreibt detaillierter, wie der `rootMargin` verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
