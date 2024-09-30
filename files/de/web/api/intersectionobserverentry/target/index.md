---
title: "IntersectionObserverEntry: target-Eigenschaft"
short-title: target
slug: Web/API/IntersectionObserverEntry/target
l10n:
  sourceCommit: 618aa21b32b84cdd69b6982303e4ec9667efa48c
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`target`**-Eigenschaft des [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Interfaces gibt an, welches zielgerichtete [`Element`](/de/docs/Web/API/Element) seine Menge an Überschneidung mit dem Schnittpunktstamm geändert hat.

## Wert

Die `target`-Eigenschaft des `IntersectionObserverEntry` gibt an, welches [`Element`](/de/docs/Web/API/Element), das zuvor durch den Aufruf von [`IntersectionObserver.observe()`](/de/docs/Web/API/IntersectionObserver/observe) beobachtet wurde, eine Änderung der Überschneidung mit dem Stamm erlebt hat.

## Beispiele

In diesem einfachen Beispiel wird die {{cssxref("opacity")}} jedes zielgerichteten Elements auf dessen [`intersectionRatio`](/de/docs/Web/API/IntersectionObserverEntry/intersectionRatio) gesetzt.

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    entry.target.style.opacity = entry.intersectionRatio;
  });
}
```

Um ein konkreteres Beispiel zu sehen, schauen Sie sich [Umgang mit Überschneidungsänderungen](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility#handling_intersection_changes) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
