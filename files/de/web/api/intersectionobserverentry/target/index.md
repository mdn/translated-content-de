---
title: "IntersectionObserverEntry: target-Eigenschaft"
short-title: target
slug: Web/API/IntersectionObserverEntry/target
l10n:
  sourceCommit: 618aa21b32b84cdd69b6982303e4ec9667efa48c
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`target`**-Eigenschaft des {{domxref("IntersectionObserverEntry")}}-Interfaces gibt an, welches gezielte {{domxref("Element")}} seinen Grad der Überschneidung mit der Überschneidungswurzel geändert hat.

## Wert

Die `target`-Eigenschaft des `IntersectionObserverEntry` spezifiziert, welches {{domxref("Element")}}, das zuvor durch Aufruf von {{domxref("IntersectionObserver.observe()")}} anvisiert wurde, eine Änderung in der Überschneidung mit der Wurzel erfahren hat.

## Beispiele

In diesem einfachen Beispiel wird die {{cssxref("opacity")}} jedes anvisierten Elements auf sein {{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}} gesetzt.

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    entry.target.style.opacity = entry.intersectionRatio;
  });
}
```

Um ein konkreteres Beispiel zu sehen, schauen Sie sich den Abschnitt [Umgang mit Überschneidungsänderungen](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility#handling_intersection_changes) an.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
