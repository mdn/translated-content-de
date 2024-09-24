---
title: "IntersectionObserver: root-Eigenschaft"
short-title: root
slug: Web/API/IntersectionObserver/root
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`root`**-Eigenschaft des {{domxref("IntersectionObserver")}}-Interfaces identifiziert das {{domxref("Element")}} oder das {{domxref("Document")}}, dessen Grenzen als {{Glossary("bounding box")}} des {{Glossary("viewport")}} für das Element, welches das Ziel des Observers ist, behandelt werden.

Ist `root` `null`, werden die Grenzen des eigentlichen Dokument-Viewports verwendet.

## Wert

Ein {{domxref("Element")}}- oder {{domxref("Document")}}-Objekt, dessen Begrenzungsrahmen als Grenzen des Viewports verwendet wird, um zu bestimmen, wie viel des Ziel-Elements sichtbar ist. Der Schnittpunkt dieses Begrenzungsrechtecks, versetzt um jeden Rand, der in den Optionen angegeben ist, die an den {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}}-Konstruktor übergeben werden, die Grenzen des Ziel-Elements, abzüglich der Grenzen jedes Elements oder Objekts, das das Ziel-Element überlagert, wird als sichtbarer Bereich des Ziel-Elements betrachtet.

Wenn `root` `null` ist, wird das zugehörige Dokument als Wurzel verwendet, und die Grenzen seines Viewports (d. h. der sichtbare Bereich des Dokuments) werden als Wurzelgrenzen verwendet.

## Beispiele

Dieses Beispiel setzt den {{cssxref("border")}} des Wurzelelements des Intersection Observers auf eine 2-Pixel breite, mittelgrüne Linie.

```js
observer.root.style.border = "2px solid #44aa44";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
