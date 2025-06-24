---
title: "IntersectionObserverEntry: target-Eigenschaft"
short-title: target
slug: Web/API/IntersectionObserverEntry/target
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte Eigenschaft **`target`** der [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Schnittstelle gibt an, welches gezielte [`Element`](/de/docs/Web/API/Element) seine Intersektion mit der Intersektionswurzel verändert hat.

## Wert

Die `target`-Eigenschaft des `IntersectionObserverEntry` spezifiziert, welches durch den Aufruf von [`IntersectionObserver.observe()`](/de/docs/Web/API/IntersectionObserver/observe) zuvor gezielte [`Element`](/de/docs/Web/API/Element) eine Veränderung in der Intersektion mit der Wurzel erfahren hat.

## Beispiele

In diesem einfachen Beispiel wird die {{cssxref("opacity")}} jedes gezielten Elements auf dessen [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) gesetzt.

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    entry.target.style.opacity = entry.intersectionRatio;
  });
}
```

Um ein konkreteres Beispiel zu sehen, werfen Sie einen Blick auf [Umgang mit Intersektionsänderungen](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility#handling_intersection_changes).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
