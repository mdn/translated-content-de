---
title: "Element: clientWidth-Eigenschaft"
short-title: clientWidth
slug: Web/API/Element/clientWidth
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`Element.clientWidth`**-Eigenschaft ist null für Inline-Elemente und Elemente ohne CSS; andernfalls ist es die innere Breite eines Elements in Pixeln. Sie beinhaltet das Padding, schließt jedoch Rahmen, Ränder und vertikale Scrollleisten (falls vorhanden) aus.

Wenn `clientWidth` auf das Wurzelelement (das `<html>`-Element) angewendet wird (oder auf `<body>`, wenn das Dokument sich im Quirks-Modus befindet), wird die Breite des Ansichtsbereichs (ausschließlich jeglicher Scrollleisten) zurückgegeben. [Dies ist ein Sonderfall von `clientWidth`](https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-clientwidth).

> [!NOTE]
> Diese Eigenschaft wird den Wert auf eine Ganzzahl runden. Wenn Sie einen Bruchwert benötigen, verwenden Sie {{ domxref("element.getBoundingClientRect()") }}.

## Wert

Eine Zahl.

## Beispiele

![Ein Beispiel-Element mit großem Padding, Rahmen und Rand. clientWidth ist die innere Breite des Elements einschließlich seines Paddings, und ohne Rand, Rahmen und vertikale Scrollleiste.](dimensions-client.png)

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("HTMLElement.offsetWidth")}}
- {{domxref("Element.scrollWidth")}}
- [Bestimmen der Abmessungen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
