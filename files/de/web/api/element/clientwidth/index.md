---
title: "Element: clientWidth-Eigenschaft"
short-title: clientWidth
slug: Web/API/Element/clientWidth
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("DOM")}}

Die **`clientWidth`**-Eigenschaft der Schnittstelle [`Element`](/de/docs/Web/API/Element) ist schreibgeschützt und hat den Wert null für Inline-Elemente und Elemente ohne CSS. Andernfalls entspricht sie der inneren Breite eines Elements in Pixel. Sie umfasst den Innenabstand (Padding), schließt jedoch Rahmen, Ränder und vertikale Scrollleisten (falls vorhanden) aus.

Wenn `clientWidth` auf dem Wurzelelement (dem `<html>`-Element) verwendet wird, (oder auf `<body>`, wenn das Dokument im Quirks-Modus ist), wird die Breite des Viewports (ohne jegliche Scrollleiste) zurückgegeben.

## Wert

Ein ganzzahliger Wert.

## Beispiele

![Ein Beispiel-Element mit großem Innenabstand, Rahmen und Rand. clientWidth ist die Innenbreite des Elements einschließlich seines Innenabstands und ohne seinen Rand, Rahmen und vertikaler Scrollleiste.](dimensions-client.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bestimmen der Abmessungen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth)
- [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth)
- [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight)
- [`Element.clientLeft`](/de/docs/Web/API/Element/clientLeft)
- [`Element.clientTop`](/de/docs/Web/API/Element/clientTop)
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
