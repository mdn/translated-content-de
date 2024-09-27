---
title: "IntersectionObserverEntry: target-Eigenschaft"
short-title: target
slug: Web/API/IntersectionObserverEntry/target
l10n:
  sourceCommit: 618aa21b32b84cdd69b6982303e4ec9667efa48c
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`target`**-Eigenschaft des [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Interfaces gibt an, welches angezielte [`Element`](/de/docs/Web/API/Element) seine Menge der Schnittmenge mit der Beobachtungswurzel geändert hat.

## Wert

Die `target`-Eigenschaft des `IntersectionObserverEntry` gibt an, welches [`Element`](/de/docs/Web/API/Element), das zuvor durch den Aufruf von [`IntersectionObserver.observe()`](/de/docs/Web/API/IntersectionObserver/observe) anvisiert wurde, eine Änderung in der Schnittmenge mit der Wurzel erfahren hat.

## Beispiele

In diesem einfachen Beispiel wird die {{cssxref("opacity")}} jedes angezielten Elements auf sein [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) gesetzt.

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    entry.target.style.opacity = entry.intersectionRatio;
  });
}
```

Um ein konkreteres Beispiel zu sehen, werfen Sie einen Blick auf [Umgang mit Schnittmengenänderungen](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility#handling_intersection_changes).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
