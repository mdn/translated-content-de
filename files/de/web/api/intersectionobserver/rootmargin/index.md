---
title: "IntersectionObserver: rootMargin-Eigenschaft"
short-title: rootMargin
slug: Web/API/IntersectionObserver/rootMargin
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte Eigenschaft **`rootMargin`** des {{domxref("IntersectionObserver")}}-Interfaces ist ein String mit einer Syntax, die der der CSS-{{cssxref("margin")}}-Eigenschaft ähnelt. Jede Seite des Rechtecks, das durch `rootMargin` dargestellt wird, wird der entsprechenden Seite des {{domxref("IntersectionObserver.root", "root")}}-Elements im {{Glossary("bounding box")}} hinzugefügt, bevor der Intersection-Test durchgeführt wird. Dies ermöglicht es Ihnen beispielsweise, die Grenzen nach außen zu verschieben, sodass das Ziel-Element als 100 % sichtbar betrachtet wird, selbst wenn eine bestimmte Pixelanzahl von Breite oder Höhe abgeschnitten wird, oder das Ziel als teilweise verdeckt zu behandeln, wenn eine Kante zu nah an der Kante des Bounding Boxs des Roots liegt.

Sehen Sie sich [an, wie Schnittpunkte berechnet werden](/de/docs/Web/API/Intersection_Observer_API#how_intersection_is_calculated), um einen tieferen Einblick in den Root-Margin und seine Funktionsweise mit dem Bounding Box des Roots zu erhalten.

## Wert

Ein String, der ähnlich wie der Wert der CSS-{{cssxref("margin")}}-Eigenschaft formatiert ist und Versätze für eine oder mehrere Seiten des Bounding Boxs des Roots enthält. Diese Versätze werden den entsprechenden Werten im Bounding Box des Roots hinzugefügt, bevor der Schnittpunkt zwischen dem resultierenden Rechteck und den Grenzen des Ziel-Elements berechnet wird.

Der von dieser Eigenschaft zurückgegebene String stimmt möglicherweise nicht mit dem überein, der bei der Instanziierung des {{domxref("IntersectionObserver")}} angegeben wurde. Der Browser darf die Werte ändern.

Wenn `rootMargin` bei der Instanziierung des Objekts nicht spezifiziert wurde, wird es standardmäßig auf den String `"0px 0px 0px 0px"` gesetzt, was bedeutet, dass der Schnittpunkt zwischen dem unveränderten Bounds-Rechteck des Root-Elements und den Grenzen des Ziels berechnet wird. [Wie Schnittpunkte berechnet werden](/de/docs/Web/API/Intersection_Observer_API#how_intersection_is_calculated) beschreibt, wie der `rootMargin` im Detail verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
