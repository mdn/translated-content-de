---
title: "IntersectionObserverEntry: Eigenschaft intersectionRect"
short-title: intersectionRect
slug: Web/API/IntersectionObserverEntry/intersectionRect
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte Eigenschaft **`intersectionRect`** des [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) Interfaces ist ein
[`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) Objekt, das das kleinste Rechteck beschreibt, das den gesamten Teil des Ziel-Elements enthält, der aktuell innerhalb des Schnittmengen-Wurzelbereichs sichtbar ist.

## Wert

Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), das den Teil des Ziel-Elements beschreibt, der aktuell innerhalb des Schnittmengen-Rechtecks der Wurzel sichtbar ist.

Dieses Rechteck wird berechnet, indem die Schnittmenge des
[`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry) mit jedem der Clip-Rechtecke der Vorfahren des [`target`](/de/docs/Web/API/IntersectionObserverEntry/target) gebildet wird, mit Ausnahme des Schnittmengen-[`root`](/de/docs/Web/API/IntersectionObserver/root) selbst.

## Beispiele

In diesem einfachen Beispiel speichert ein Schnittmengen-Callback das Schnittmengen-Rechteck zur späteren Verwendung durch den Code, der den Inhalt der Zielelemente zeichnet, sodass nur der sichtbare Bereich neu gezeichnet wird.

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
