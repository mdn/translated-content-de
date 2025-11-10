---
title: "IntersectionObserver: root-Eigenschaft"
short-title: root
slug: Web/API/IntersectionObserver/root
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Intersection Observer API")}}

Die **`root`**-Eigenschaft der Schnittstelle [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), die nur gelesen werden kann, identifiziert das [`Element`](/de/docs/Web/API/Element) oder das [`Dokument`](/de/docs/Web/API/Document), dessen Grenzen als {{Glossary("bounding_box", "Begrenzungsrahmen")}} des {{Glossary("viewport", "Viewports")}} für das Element angesehen werden, welches das Ziel des Beobachters ist.

Wenn das `root` `null` ist, werden die Grenzen des tatsächlichen Dokument-Viewports verwendet.

## Wert

Ein [`Element`](/de/docs/Web/API/Element) oder [`Dokument`](/de/docs/Web/API/Document)-Objekt, dessen Begrenzungsrahmen als die Grenzen des Viewports verwendet werden, um zu bestimmen, wie viel vom Ziel-Element sichtbar ist.
Der Schnittpunkt dieses begrenzenden Rechtecks, versetzt um alle in den Optionen angegebenen Margen, die an den Konstruktor [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver) übergeben werden, mit den Grenzen des Ziel-Elements, minus den Grenzen jedes Elements oder anderen Objekts, das das Ziel-Element überlappt, wird als der sichtbare Bereich des Ziel-Elements angesehen.

Wenn `root` `null` ist, wird das zugehörige Dokument als Wurzel verwendet und die Grenzen seines Viewports (d.h. der sichtbare Bereich des Dokuments) werden als die Wurzelgrenzen verwendet.

## Beispiele

In diesem Beispiel wird die {{cssxref("border")}} des Root-Elements des Intersection Observers auf eine 2-Pixel breite mittelgrüne Linie gesetzt.

```js
observer.root.style.border = "2px solid #44aa44";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Sichtbarkeit von Elementen mit der Intersection Observer API timen](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
