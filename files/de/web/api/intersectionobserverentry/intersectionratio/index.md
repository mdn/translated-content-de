---
title: "IntersectionObserverEntry: intersectionRatio-Eigenschaft"
short-title: intersectionRatio
slug: Web/API/IntersectionObserverEntry/intersectionRatio
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte Eigenschaft **`intersectionRatio`** des [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Interfaces gibt Ihnen an, wie viel vom Zielelement derzeit innerhalb des Schnittstellenverhältnisses der Wurzel sichtbar ist, als ein Wert zwischen 0,0 und 1,0.

## Wert

Eine Zahl zwischen 0,0 und 1,0, die angibt, wie viel vom Zielelement tatsächlich innerhalb des Schnittrechtecks der Wurzel sichtbar ist. Genauer gesagt, ist dieser Wert das Verhältnis der Fläche des Schnittrechtecks ([`intersectionRect`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRect)) zur Fläche des Begrenzungsrechtecks des Ziels ([`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry/boundingClientRect)).

Falls die Fläche des Begrenzungsrechtecks des Ziels null ist, beträgt der zurückgegebene Wert 1, wenn [`isIntersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) `true` ist, oder 0, wenn nicht.

## Beispiele

In diesem einfachen Beispiel setzt ein Schnittstellen-Rückruf die {{cssxref("opacity")}} jedes Zielelements auf das Schnittstellenverhältnis dieses Elements zur Wurzel.

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    entry.target.style.opacity = entry.intersectionRatio;
  });
}
```

Um ein konkreteres Beispiel zu sehen, werfen Sie einen Blick auf
[Umgang mit Schnittänderungen](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility#handling_intersection_changes).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
