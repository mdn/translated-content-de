---
title: "IntersectionObserver: root-Eigenschaft"
short-title: root
slug: Web/API/IntersectionObserver/root
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die schreibgeschützte **`root`**-Eigenschaft des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Interfaces identifiziert das [`Element`](/de/docs/Web/API/Element) oder das [`Document`](/de/docs/Web/API/Document), dessen Grenzen als [Begrenzungsrahmen](/de/docs/Glossary/bounding_box) des [Ansichtsfensters](/de/docs/Glossary/viewport) für das Element behandelt werden, das das Ziel des Beobachters ist.

Wenn das `root` `null` ist, werden die Grenzen des tatsächlichen Dokumentansichtsfensters verwendet.

## Wert

Ein [`Element`](/de/docs/Web/API/Element) oder [`Document`](/de/docs/Web/API/Document)-Objekt, dessen Begrenzungsrahmen als die Grenzen des Ansichtsfensters verwendet werden, um zu bestimmen, wie viel des Ziel-Elements sichtbar ist. Der Schnittbereich dieses Begrenzungsrahmens, verschoben um alle in den Optionen, die an den [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor übergeben wurden, angegebenen Ränder, den Begrenzungsrahmen des Ziel-Elements, abzüglich der Begrenzungsrahmen jedes Elements oder anderen Objekts, das das Ziel-Element überlappt, wird als der sichtbare Bereich des Ziel-Elements betrachtet.

Wenn `root` `null` ist, wird das besitzende Dokument als Root verwendet, und die Begrenzungen seines Ansichtsfensters (d.h. der sichtbare Bereich des Dokuments) werden als Root-Grenzen verwendet.

## Beispiele

Dieses Beispiel setzt den {{cssxref("border")}} des Root-Elements des Intersection Observers auf eine 2-Pixel breite, mittig-grüne Linie.

```js
observer.root.style.border = "2px solid #44aa44";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Timing der Element-Sichtbarkeit mit der Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
