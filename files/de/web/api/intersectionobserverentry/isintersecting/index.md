---
title: "IntersectionObserverEntry: isIntersecting-Eigenschaft"
short-title: isIntersecting
slug: Web/API/IntersectionObserverEntry/isIntersecting
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die schnittstellenübergreifende, schreibgeschützte **`isIntersecting`**-Eigenschaft der [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) gibt einen booleschen Wert zurück, der `true` ist, wenn das Ziel-Element mit dem Wurzel-Element des Intersection Observers schneidet. Ist dieser Wert `true`, beschreibt der `IntersectionObserverEntry` einen Übergang in einen Zustand der Überschneidung; ist er `false`, wissen Sie, dass der Übergang von überschneidend zu nicht-überschneidend erfolgt.

## Wert

Ein boolescher Wert, der angibt, ob das [`target`](/de/docs/Web/API/IntersectionObserverEntry/target)-Element in einen Zustand der Überschneidung (`true`) eingetreten ist oder aus einem Zustand der Überschneidung (`false`) herausgegangen ist.

## Beispiele

In diesem einfachen Beispiel wird ein Überschneidungs-Callback verwendet, um einen Zähler zu aktualisieren, der anzeigt, wie viele Ziel-Elemente derzeit mit der {{domxref("IntersectionObserver.root", "Schnittwurzel", "", 1)}} im Überschneidungsbereich liegen.

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

Um ein konkretes Beispiel zu sehen, werfen Sie einen Blick auf
[Behandlung von Überschneidungsänderungen](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility#handling_intersection_changes).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
