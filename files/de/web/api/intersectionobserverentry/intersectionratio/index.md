---
title: "IntersectionObserverEntry: intersectionRatio Eigenschaft"
short-title: intersectionRatio
slug: Web/API/IntersectionObserverEntry/intersectionRatio
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

Die **`intersectionRatio`** schreibgeschützte Eigenschaft der [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) Schnittstelle gibt an, wie viel des Zielelements derzeit innerhalb des Intersektionverhältnisses der Wurzel sichtbar ist, als ein Wert zwischen 0,0 und 1,0.

## Wert

Eine Zahl zwischen 0,0 und 1,0, die angibt, wie viel des Zielelements tatsächlich innerhalb des Schnittrechtecks der Wurzel sichtbar ist.
Genauer gesagt, dieser Wert ist das Verhältnis der Fläche des Schnittrechtecks ([`intersectionRect`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRect)) zur Fläche des Begrenzungsrechtecks des Ziels ([`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect)).

Wenn die Fläche des Begrenzungsrechtecks des Ziels null ist, wird der Wert 1 zurückgegeben, wenn [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) `true` ist, oder 0, wenn nicht.

## Beispiele

In diesem einfachen Beispiel setzt ein Schnittpunkt-Callback die {{cssxref("opacity")}} jedes Zielelements auf das Schnittverhältnis dieses Elements mit der Wurzel.

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    entry.target.style.opacity = entry.intersectionRatio;
  });
}
```

Um ein konkreteres Beispiel zu sehen, schauen Sie sich [Umgang mit Änderungsbenachrichtigungen von Schnittpunkten](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility#handling_intersection_changes) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
