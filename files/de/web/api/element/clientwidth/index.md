---
title: "Element: clientWidth-Eigenschaft"
short-title: clientWidth
slug: Web/API/Element/clientWidth
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{APIRef("DOM")}}

Die **`Element.clientWidth`**-Eigenschaft ist für Inline-Elemente und Elemente ohne CSS gleich null. Andernfalls ist sie die innere Breite eines Elements in Pixel. Sie umfasst das `padding`, schließt jedoch `borders`, `margins` und vertikale Scrollleisten (falls vorhanden) aus.

Wenn `clientWidth` auf dem Wurzelelement (dem `<html>`-Element) verwendet wird, (oder auf `<body>`, falls das Dokument sich im Quirks-Modus befindet), wird die Breite des Ansichtsbereichs (ohne Scrollleiste) zurückgegeben.

> [!NOTE]
> Diese Eigenschaft rundet den Wert auf eine Ganzzahl. Wenn Sie einen Bruchwert benötigen, verwenden Sie [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect).

## Wert

Eine Zahl.

## Beispiele

![Ein Beispiel-Element mit großem padding, border und margin. clientWidth ist die innere Breite des Elements einschließlich seines padding, aber ohne seine margin, border und vertikale Scrollleiste.](dimensions-client.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth)
- [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth)
- [Bestimmung der Dimensionen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
