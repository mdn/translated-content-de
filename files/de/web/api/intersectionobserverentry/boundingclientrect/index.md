---
title: "IntersectionObserverEntry: boundingClientRect-Eigenschaft"
short-title: boundingClientRect
slug: Web/API/IntersectionObserverEntry/boundingClientRect
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`boundingClientRect`**-Eigenschaft des [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Interfaces gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) zurück, das im Wesentlichen ein Rechteck beschreibt, das das kleinste Rechteck darstellt, das das gesamte Ziel-Element enthält.

## Wert

Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), das das kleinste Rechteck beschreibt, das jedes Teil des Ziel-Elements enthält, dessen Schnittänderung beschrieben wird. Dieser Wert wird mit demselben Algorithmus wie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) ermittelt. Bitte lesen Sie diesen Artikel für Details darüber, was genau getan wird, um dieses Rechteck zu erhalten und was innerhalb seiner Grenzen einbezogen oder ausgeschlossen ist.

Im Allgemeinen kann man jedoch sicher davon ausgehen, dass es sich um das Begrenzungsrechteck des Ziel-Elements handelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
