---
title: "Element: clientWidth Eigenschaft"
short-title: clientWidth
slug: Web/API/Element/clientWidth
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`Element.clientWidth`** Eigenschaft hat den Wert Null für Inline-Elemente und Elemente ohne CSS; ansonsten ist es die innere Breite eines Elements in Pixeln. Sie umfasst das Padding, schließt jedoch Rahmen, Ränder und vertikale Bildlaufleisten (falls vorhanden) aus.

Wenn `clientWidth` auf das Root-Element (das `<html>`-Element) angewendet wird (oder auf `<body>`, wenn das Dokument im Quirks-Modus ist), wird die Breite des Viewports (ohne Bildlaufleiste) zurückgegeben. [Dies ist ein Spezialfall von `clientWidth`](https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-clientwidth).

> [!NOTE]
> Diese Eigenschaft rundet den Wert auf eine Ganzzahl. Wenn Sie einen Bruchwert benötigen, verwenden Sie [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect).

## Wert

Eine Zahl.

## Beispiele

![Ein Beispiel-Element mit großem Padding, Rahmen und Rand. clientWidth ist die innere Breite des Elements einschließlich seines Paddings und ohne seinen Rand, Rahmen und vertikale Bildlaufleiste.](dimensions-client.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth)
- [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth)
- [Bestimmen der Dimensionen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
