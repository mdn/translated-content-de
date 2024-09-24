---
title: "IntersectionObserverEntry: isIntersecting-Eigenschaft"
short-title: isIntersecting
slug: Web/API/IntersectionObserverEntry/isIntersecting
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`isIntersecting`**-Eigenschaft des {{domxref("IntersectionObserverEntry")}}-Interfaces ist ein Boolean-Wert, der `true` ist, wenn das Zielelement mit der Wurzel des Intersection Observers schneidet. Wenn dies `true` ist, beschreibt der `IntersectionObserverEntry` einen Übergang in einen Zustand der Schnittmenge; wenn es `false` ist, wissen Sie, dass der Übergang von Schnittmenge zu Nicht-Schnittmenge erfolgt.

## Wert

Ein Boolean-Wert, der anzeigt, ob das {{domxref("IntersectionObserverEntry.target", "target")}}-Element in einen Zustand der Schnittmenge (`true`) oder aus einem Zustand der Schnittmenge (`false`) übergegangen ist.

## Beispiele

In diesem einfachen Beispiel wird ein Schnittmengen-Callback verwendet, um einen Zähler für die Anzahl der Zielelemente zu aktualisieren, die sich derzeit mit der {{domxref("IntersectionObserver.root", "Schnittwurzel", "", 1)}} schneiden.

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

Um ein konkreteres Beispiel zu sehen, schauen Sie sich [Handling intersection changes](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility#handling_intersection_changes) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
