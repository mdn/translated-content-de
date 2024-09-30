---
title: "Element: clientWidth-Eigenschaft"
short-title: clientWidth
slug: Web/API/Element/clientWidth
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`Element.clientWidth`**-Eigenschaft ist null für Inline-Elemente und Elemente ohne CSS; andernfalls ist sie die innere Breite eines Elements in Pixel. Sie umfasst die Auffüllung, schließt jedoch Rahmen, Ränder und vertikale Bildlaufleisten (falls vorhanden) aus.

Wenn `clientWidth` auf das Wurzelelement (das `<html>` Element) angewendet wird (oder auf `<body>`, wenn das Dokument im Quirks-Modus ist), wird die Breite des Ansichtsfensters (ausschließlich der Bildlaufleiste) zurückgegeben. [Dies ist ein Sonderfall von `clientWidth`](https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-clientwidth).

> [!NOTE]
> Diese Eigenschaft rundet den Wert auf eine ganze Zahl. Wenn Sie einen Bruchwert benötigen, verwenden Sie [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect).

## Wert

Eine Zahl.

## Beispiele

![Ein Beispiel-Element mit großem Padding, Rahmen und Rand. clientWidth ist die innere Breite des Elements einschließlich seines Paddings, auszuschließen sind sein Rand, Rahmen und die vertikale Bildlaufleiste.](dimensions-client.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth)
- [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth)
- [Bestimmung der Abmessungen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
