---
title: "IntersectionObserverEntry: intersectionRect-Eigenschaft"
short-title: intersectionRect
slug: Web/API/IntersectionObserverEntry/intersectionRect
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Schnittstelle hat eine schreibgeschützte **`intersectionRect`**-Eigenschaft, die ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt darstellt. Dieses Objekt beschreibt das kleinste Rechteck, das den gesamten Bereich des Zielelements enthält, das derzeit innerhalb des Schnittwurzelbereichs sichtbar ist.

## Wert

Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), das den Teil des Zielelements beschreibt, der derzeit innerhalb des Schnittwurzelrechtecks sichtbar ist.

Dieses Rechteck wird berechnet, indem der Schnitt von [`boundingClientRect`](/de/docs/Web/API/IntersectionObserverEntry) mit jedem der Clip-Rechtecke der [`target`](/de/docs/Web/API/IntersectionObserverEntry/target)-Vorfahren genommen wird, mit Ausnahme der Schnittwurzel selbst.

## Beispiele

In diesem einfachen Beispiel speichert ein Schnittcallback das Schnittrechteck zur späteren Verwendung durch den Code, der den Inhalt der Zielelemente zeichnet, sodass nur der sichtbare Bereich neu gezeichnet wird.

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
