---
title: "Element: clientHeight-Eigenschaft"
short-title: clientHeight
slug: Web/API/Element/clientHeight
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`Element.clientHeight`** Leseeigenschaft ist null für Elemente ohne CSS- oder Inline-Layout-Boxen; andernfalls ist sie die innere Höhe eines Elements in Pixel. Sie umfasst die Auffüllung (padding), schließt jedoch Rahmen, Ränder und horizontale Scrollbalken (falls vorhanden) aus.

`clientHeight` kann berechnet werden als: CSS `height` + CSS
`padding` - Höhe des horizontalen Scrollbalkens (falls vorhanden).

Wenn `clientHeight` auf dem Wurzelelement (dem
`<html>`-Element) verwendet wird, (oder auf `<body>`, wenn das Dokument im Quirks-Modus ist), wird die Höhe des Ansichtsfensters (ohne irgendeinen Scrollbalken) zurückgegeben. [Dies ist ein Spezialfall von `clientHeight`](https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-clientheight).

> [!NOTE]
> Diese Eigenschaft rundet den Wert auf eine ganze Zahl. Wenn Sie einen Bruchwert benötigen, verwenden Sie {{ domxref("element.getBoundingClientRect()") }}.

## Wert

Eine Zahl.

## Beispiele

![Wie die clientHeight-Eigenschaft die innere Höhe eines Elements bestimmt, unter Berücksichtigung der Höhe und Auffüllung](dimensions-client.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLElement.offsetHeight")}}
- {{domxref("Element.scrollHeight")}}
- [Ermitteln der Abmessungen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
