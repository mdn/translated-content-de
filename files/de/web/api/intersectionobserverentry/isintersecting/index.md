---
title: "IntersectionObserverEntry: isIntersecting-Eigenschaft"
short-title: isIntersecting
slug: Web/API/IntersectionObserverEntry/isIntersecting
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`isIntersecting`**-Eigenschaft der [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Schnittstelle ist ein Boolean-Wert, der `true` ist, wenn das Ziel-Element mit dem Root des Intersection Observer überschneidet.

Wenn dies `true` ist, beschreibt der `IntersectionObserverEntry` einen Übergang in einen Zustand der Überschneidung; wenn es `false` ist, wissen Sie, dass der Übergang von überschneidend zu nicht-überschneidend erfolgt.

## Wert

Ein Boolean-Wert, der angibt, ob das [`target`](/de/docs/Web/API/IntersectionObserverEntry/target)-Element in einen Zustand der Überschneidung übergegangen ist (`true`) oder aus einem Zustand der Überschneidung heraus (`false`).

## Beispiele

In diesem einfachen Beispiel wird ein Überschneidungs-Callback verwendet, um einen Zähler zu aktualisieren, wie viele Ziel-Elemente aktuell mit dem [Intersection Root](/de/docs/Web/API/IntersectionObserver/root) überschneiden.

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

Für ein konkreteres Beispiel schauen Sie sich [Verarbeiten von Überschneidungsänderungen](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility#handling_intersection_changes) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
