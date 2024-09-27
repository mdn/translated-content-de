---
title: "IntersectionObserverEntry: isIntersecting Eigenschaft"
short-title: isIntersecting
slug: Web/API/IntersectionObserverEntry/isIntersecting
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`isIntersecting`**-Eigenschaft des [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Interfaces ist ein Boolean-Wert, der `true` ist, wenn das Zielelement mit dem Wurzelknoten des Intersection Observers überlappt. Ist dieser Wert `true`, so beschreibt das `IntersectionObserverEntry` einen Übergang in einen Zustand der Überlappung; ist er `false`, wissen Sie, dass der Übergang von Überlappung zu Nicht-Überlappung erfolgt.

## Wert

Ein Boolean-Wert, der angibt, ob das [`target`](/de/docs/Web/API/IntersectionObserverEntry/target)-Element in einen Zustand der Überlappung (`true`) übergegangen ist oder aus einem Zustand der Überlappung (`false`) heraus.

## Beispiele

In diesem einfachen Beispiel wird ein Intersection-Callback verwendet, um einen Zähler zu aktualisieren, wie viele Ziel-Elemente derzeit mit der {{domxref("IntersectionObserver.root", "Schnittstelle des Intersectionswurzel", "", 1)}} überlappen.

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      intersectingCount += 1;
    } else {
      intersectingCount -= 1;
    }
  });
}
```

Um ein konkreteres Beispiel zu sehen, werfen Sie einen Blick auf [Umgang mit Überlappungsänderungen](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility#handling_intersection_changes).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
