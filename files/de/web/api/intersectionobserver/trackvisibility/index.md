---
title: "IntersectionObserver: trackVisibility-Eigenschaft"
short-title: trackVisibility
slug: Web/API/IntersectionObserver/trackVisibility
l10n:
  sourceCommit: 707183bfb6cffe53650c03e7e7c369ad089f55ae
---

{{APIRef("Intersection Observer API")}}{{SeeCompatTable}}

Die **`trackVisibility`**-Eigenschaft der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Schnittstelle gibt an, ob der Beobachter neben der Element-Intersektion auch die Sichtbarkeit des Ziels verfolgt.

## Wert

`true`, wenn die Sichtbarkeit für Intersektionen berechnet wird, und `false` andernfalls.

Der Wert wird über das [`option.trackVisibility`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver#trackvisibility)-Argument an den `IntersectionObserver()`-Konstruktor übergeben.

## Beschreibung

Wenn die Sichtbarkeit nicht verfolgt wird, gibt der Beobachter Benachrichtigungen, wenn das Ziel-Element in den Viewport des Root-Elements gescrollt wird. Dies sagt Ihnen jedoch nicht, ob die Sichtbarkeit des Ziel-Elements beeinträchtigt ist — es könnte teilweise von einem anderen Element verdeckt sein, reduzierte Deckkraft haben oder durch einen Filter, eine Transformation oder eine andere Modifikation verzerrt sein.

Bei der Verfolgung der Sichtbarkeit werden nur Elemente, die vom Browser als sichtbar angesehen werden, als durchschneidend angezeigt. Der Algorithmus ist konservativ und kann Elemente auslassen, die technisch sichtbar sind, wie solche mit nur leicht verringerter Deckkraft.

Beachten Sie, dass die Berechnung der Sichtbarkeit rechnerisch aufwändig ist. Um zu vermeiden, dass die Operation zu häufig läuft, wird eine [`delay`](/de/docs/Web/API/IntersectionObserver/delay) verwendet, um die Mindestberichtsperiode zu begrenzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Timing der Element-Sichtbarkeit mit der Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
