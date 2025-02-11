---
title: "Element: clientHeight-Eigenschaft"
short-title: clientHeight
slug: Web/API/Element/clientHeight
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{APIRef("DOM")}}

Die **`Element.clientHeight`**-schreibgeschützte Eigenschaft ist null für Elemente ohne CSS- oder Inline-Layout-Boxen; andernfalls ist sie die innere Höhe eines Elements in Pixeln. Sie beinhaltet das `padding`, schließt jedoch `borders`, `margins` und horizontale Scrollleisten (falls vorhanden) aus.

`clientHeight` kann folgendermaßen berechnet werden: CSS-`height` + CSS-`padding` - Höhe der horizontalen Scrollleiste (falls vorhanden).

Wenn `clientHeight` auf das Root-Element (das `<html>`-Element) angewendet wird (oder auf `<body>`, wenn sich das Dokument im Quirks-Modus befindet), wird die Höhe des Viewports (ohne Scrollleiste) zurückgegeben.

> [!NOTE]
> Diese Eigenschaft rundet den Wert auf eine ganze Zahl. Wenn Sie einen Bruchwert benötigen, verwenden Sie [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect).

## Wert

Eine Zahl.

## Beispiele

![Wie die clientHeight-Eigenschaft die innere Höhe eines Elements unter Berücksichtigung der Höhe und des Paddings bestimmt](dimensions-client.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight)
- [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight)
- [Bestimmung der Dimensionen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
