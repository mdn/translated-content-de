---
title: "IntersectionObserverEntry: intersectionRatio-Eigenschaft"
short-title: intersectionRatio
slug: Web/API/IntersectionObserverEntry/intersectionRatio
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`intersectionRatio`**-Eigenschaft des {{domxref("IntersectionObserverEntry")}}-Interfaces informiert Sie darüber, wie viel des Zielelements derzeit innerhalb des Schnittverhältnisses der Wurzel sichtbar ist, als ein Wert zwischen 0,0 und 1,0.

## Wert

Eine Zahl zwischen 0,0 und 1,0, die angibt, wie viel des Zielelements tatsächlich innerhalb des Schnittrechtecks der Wurzel sichtbar ist. Genauer gesagt ist dieser Wert das Verhältnis der Fläche des Schnittrechtecks ({{domxref("IntersectionObserverEntry.intersectionRect", "intersectionRect")}}) zur Fläche des Begrenzungsrechtecks des Zielobjekts ({{domxref("IntersectionObserverEntry.boundingClientRect", "boundingClientRect")}}).

Wenn die Fläche des Begrenzungsrechtecks des Zielobjekts null ist, beträgt der zurückgegebene Wert 1, wenn {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}} `true` ist, oder 0, wenn nicht.

## Beispiele

In diesem einfachen Beispiel setzt ein Schnitt-Callback die {{cssxref("opacity")}} jedes Zielelements auf das Schnittverhältnis dieses Elements mit der Wurzel.

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    entry.target.style.opacity = entry.intersectionRatio;
  });
}
```

Um ein konkreteres Beispiel zu sehen, schauen Sie sich [Umgang mit Änderungen der Schnittmenge](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility#handling_intersection_changes) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
