---
title: "IntersectionObserverEntry: boundingClientRect Eigenschaft"
short-title: boundingClientRect
slug: Web/API/IntersectionObserverEntry/boundingClientRect
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

Die **`boundingClientRect`**-Eigenschaft, die nur lesbar ist, des [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Interfaces gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) zurück, das im Wesentlichen ein Rechteck beschreibt, welches das kleinste Rechteck darstellt, das das gesamte Zielelement enthält.

## Wert

Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), das das kleinste Rechteck beschreibt, das jeden Teil des Zielelements enthält, dessen Schnittänderung beschrieben wird.
Dieser Wert wird mit demselben Algorithmus wie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) ermittelt. Sie sollten daher in dem Artikel nachlesen, um genaue Informationen darüber zu erhalten, was getan wird, um dieses Rechteck zu erhalten und was innerhalb seiner Grenzen enthalten ist und was nicht.

Im Allgemeinen kann man jedoch sicher davon ausgehen, dass es sich hierbei um das Begrenzungsrechteck des Zielelements handelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
