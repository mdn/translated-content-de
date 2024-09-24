---
title: "IntersectionObserverEntry: intersectionRect Eigenschaft"
short-title: intersectionRect
slug: Web/API/IntersectionObserverEntry/intersectionRect
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`intersectionRect`**-Eigenschaft des {{domxref("IntersectionObserverEntry")}}-Interfaces ist ein
{{domxref("DOMRectReadOnly")}}-Objekt, das das kleinste Rechteck beschreibt, das den gesamten Teil des Ziel-Elements enthält, der derzeit innerhalb der Schnittstelle sichtbar ist.

## Wert

Ein {{domxref("DOMRectReadOnly")}}, das den Teil des Ziel-Elements beschreibt, der momentan im Schnittstellen-Rechteck der Wurzel sichtbar ist.

Dieses Rechteck wird berechnet, indem der Schnittpunkt von
{{domxref("IntersectionObserverEntry", "boundingClientRect")}} mit den Clip-Rechtecken der Vorfahren des {{domxref("IntersectionObserverEntry.target", "Ziels")}} genommen wird, mit Ausnahme der Schnittstelle der {{domxref("IntersectionObserver.root", "Wurzel")}} selbst.

## Beispiele

In diesem einfachen Beispiel speichert ein Schnittstellen-Callback das Schnittstellenrechteck zur späteren Verwendung durch den Code, der den Inhalt der Zielelemente zeichnet, so dass nur der sichtbare Bereich neu gezeichnet wird.

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
