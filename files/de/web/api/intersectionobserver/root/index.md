---
title: "IntersectionObserver: root Eigenschaft"
short-title: root
slug: Web/API/IntersectionObserver/root
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`root`**-Eigenschaft des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Interfaces identifiziert das [`Element`](/de/docs/Web/API/Element) oder [`Document`](/de/docs/Web/API/Document), dessen Grenzen als [Bounding-Box](/de/docs/Glossary/bounding_box) des [Viewports](/de/docs/Glossary/viewport) für das Element behandelt werden, das das Ziel des Beobachters ist.

Wenn `root` `null` ist, werden die Grenzen des tatsächlichen Dokuments Viewport verwendet.

## Wert

Ein [`Element`](/de/docs/Web/API/Element) oder [`Document`](/de/docs/Web/API/Document)-Objekt, dessen Bounding-Box als die Grenzen des Viewports für die Bestimmung, wie viel vom Zielelement sichtbar ist, verwendet wird. Der Schnittpunkt dieses um Randabstände offsettierten Begrenzungsrechtecks, die in den an den [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor übergebenen Optionen festgelegt sind, den Grenzen des Zielelements, abzüglich der Grenzen jedes Elements oder Objekts, das das Zielelement überlappt, wird als der sichtbare Bereich des Zielelements betrachtet.

Wenn `root` `null` ist, wird das übergeordnete Dokument als Wurzel verwendet, und die Grenzen seines Viewports (das heißt, der sichtbare Bereich des Dokuments) werden als Wurzelgrenzen verwendet.

## Beispiele

In diesem Beispiel wird der {{cssxref("border")}} des Wurzelelements des Intersection Observers auf eine mittelgrüne Linie von 2 Pixeln gesetzt.

```js
observer.root.style.border = "2px solid #44aa44";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeitliche Steuerung der Sichtbarkeit von Elementen mit der Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
