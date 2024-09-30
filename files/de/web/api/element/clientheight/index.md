---
title: "Element: clientHeight-Eigenschaft"
short-title: clientHeight
slug: Web/API/Element/clientHeight
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`Element.clientHeight`** ist null für Elemente ohne CSS- oder Inline-Layout-Boxen; andernfalls entspricht sie der inneren Höhe eines Elements in Pixel. Sie umfasst die Polsterung (padding), schließt jedoch Rahmen, Ränder und horizontale Scrollleisten (sofern vorhanden) aus.

`clientHeight` kann berechnet werden als: CSS `height` + CSS `padding` - Höhe der horizontalen Scrollleiste (falls vorhanden).

Wenn `clientHeight` auf das Wurzelelement (das `<html>`-Element) angewendet wird (oder auf `<body>`, wenn das Dokument im Quirks-Modus ist), wird die Höhe des Viewports (ohne jegliche Scrollleisten) zurückgegeben. [Dies ist ein Spezialfall der `clientHeight`](https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-clientheight).

> [!NOTE]
> Diese Eigenschaft rundet den Wert auf eine ganze Zahl. Wenn Sie einen Bruchteilwert benötigen, verwenden Sie [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect).

## Wert

Eine Zahl.

## Beispiele

![Wie die clientHeight-Eigenschaft die innere Höhe eines Elements unter Berücksichtigung der Höhe und Polsterung bestimmt](dimensions-client.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight)
- [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight)
- [Die Dimensionen von Elementen bestimmen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
