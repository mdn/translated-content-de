---
title: "Element: clientHeight-Eigenschaft"
short-title: clientHeight
slug: Web/API/Element/clientHeight
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("DOM")}}

Die **`clientHeight`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ist eine Schreibgeschützte Eigenschaft, die null für Elemente ohne CSS- oder Inline-Layout-Boxen ist; andernfalls ist es die innere Höhe eines Elements in Pixeln. Sie umfasst die Auffüllung (padding), schließt jedoch Ränder (borders), Außenabstände (margins) und horizontale Bildlaufleisten (sofern vorhanden) aus.

`clientHeight` kann wie folgt berechnet werden: CSS `height` + CSS `padding` - Höhe der horizontalen Bildlaufleiste (falls vorhanden).

Wenn `clientHeight` auf das Wurzelelement (dem `<html>`-Element) angewendet wird, (oder auf `<body>`, wenn sich das Dokument im Quirks-Modus befindet), wird die Höhe des Anzeigebereichs (ohne die Bildlaufleiste) zurückgegeben.

## Wert

Ein Ganzzahlwert.

## Beispiele

![Wie die clientHeight-Eigenschaft die innere Höhe eines Elements unter Berücksichtigung der Höhe und des Paddings bestimmt](dimensions-client.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ermitteln der Abmessungen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight)
- [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight)
- [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth)
- [`Element.clientLeft`](/de/docs/Web/API/Element/clientLeft)
- [`Element.clientTop`](/de/docs/Web/API/Element/clientTop)
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
