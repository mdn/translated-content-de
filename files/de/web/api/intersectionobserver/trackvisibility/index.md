---
title: "IntersectionObserver: trackVisibility-Eigenschaft"
short-title: trackVisibility
slug: Web/API/IntersectionObserver/trackVisibility
l10n:
  sourceCommit: 809a1f18b067a6f768ccde5b9672733014179ede
---

{{APIRef("Intersection Observer API")}}

Die **`trackVisibility`**-Eigenschaft des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Interfaces ist eine nur-lesbare Eigenschaft, die angibt, ob der Observer zusätzlich zu den Elementüberschneidungen die Sichtbarkeit des Ziels verfolgt.

## Wert

`true`, wenn die Sichtbarkeit für Schnittmengenberechnungen verfolgt wird, und `false` andernfalls.

Der Wert wird über das Argument [`option.trackVisibility`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver#trackvisibility) an den `IntersectionObserver()`-Konstruktor festgelegt.

## Beschreibung

Wenn die Sichtbarkeit nicht verfolgt wird, liefert der Observer Benachrichtigungen, wenn das Zielelement in das Viewport des Root-Elements hineingescolt wird. Dies sagt Ihnen jedoch nicht, ob das Zielelement in seiner Sichtbarkeit beeinträchtigt ist — es könnte teilweise von einem anderen Element überdeckt sein, eine reduzierte Deckkraft aufweisen oder durch einen Filter, eine Transformierung oder andere Modifikationen verzerrt sein.

Beim Verfolgen der Sichtbarkeit werden nur Elemente, die vom Browser als sichtbar betrachtet werden, als sich überschneidend angezeigt. Der Algorithmus ist konservativ und könnte Elemente auslassen, die technisch sichtbar sind, wie solche mit nur geringer Deckkraftreduzierung.

Beachten Sie, dass die Berechnung der Sichtbarkeit rechenintensiv ist. Um zu verhindern, dass der Vorgang zu oft ausgeführt wird, wird ein [`delay`](/de/docs/Web/API/IntersectionObserver/delay) verwendet, um die minimale Berichtsperiode zu begrenzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Timing der Elementsichtbarkeit mit der Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
