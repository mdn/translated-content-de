---
title: "Element: clientHeight Eigenschaft"
short-title: clientHeight
slug: Web/API/Element/clientHeight
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`Element.clientHeight`** ist null für Elemente ohne CSS- oder Inline-Layout-Boxen; andernfalls ist es die innere Höhe eines Elements in Pixeln. Es beinhaltet die `padding`, schließt jedoch `borders`, `margins` und horizontale `scrollbars` (falls vorhanden) aus.

`clientHeight` kann wie folgt berechnet werden: CSS `height` + CSS
`padding` - Höhe der horizontalen `scrollbar` (falls vorhanden).

Wenn `clientHeight` auf das Wurzelselement (das
`<html>`-Element) angewendet wird, (oder auf `<body>`, wenn das Dokument sich im Quirks-Modus befindet), wird die Höhe des Viewports (ohne jegliche `scrollbar`) zurückgegeben. [Dies ist ein Sonderfall von `clientHeight`](https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-clientheight).

> [!NOTE]
> Diese Eigenschaft rundet den Wert auf eine Ganzzahl. Wenn Sie einen Bruchteilwert benötigen, verwenden Sie [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect).

## Wert

Eine Zahl.

## Beispiele

![Wie die clientHeight-Eigenschaft die innere Höhe eines Elements unter Berücksichtigung der Höhe und der Polsterung bestimmt](dimensions-client.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight)
- [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight)
- [Ermittlung der Dimensionen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
