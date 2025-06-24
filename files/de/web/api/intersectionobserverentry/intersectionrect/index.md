---
title: "IntersectionObserverEntry: intersectionRect-Eigenschaft"
short-title: intersectionRect
slug: Web/API/IntersectionObserverEntry/intersectionRect
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

Die **`intersectionRect`**-Eigenschaft der [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Schnittstelle ist ein schreibgeschütztes [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt, das das kleinste Rechteck beschreibt, das den gesamten Teil des Zielelements enthält, der derzeit innerhalb der Schnittfläche sichtbar ist.

## Wert

Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), das den Teil des Zielelements beschreibt, der innerhalb des Schnittflächen-Rechtecks der Wurzel derzeit sichtbar ist.

Dieses Rechteck wird berechnet, indem der Schnitt von [`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry) mit jedem der Clip-Rechtecke der Vorfahren des [`target`](/de/docs/Web/API/IntersectionObserverEntry/target) ermittelt wird, mit Ausnahme der Schnittfläche der [`root`](/de/docs/Web/API/IntersectionObserver/root) selbst.

## Beispiele

In diesem einfachen Beispiel speichert ein Schnittmengen-Callback das Schnittflächen-Rechteck zur späteren Verwendung durch den Code, der den Inhalt der Zielelemente zeichnet, so dass nur der sichtbare Bereich neu gezeichnet wird.

```js
function intersectionCallback(entries) {
  entries.forEach((entry) => {
    refreshZones.push({
      element: entry.target,
      rect: entry.intersectionRect,
    });
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
