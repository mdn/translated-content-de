---
title: Bestimmung der Abmessungen von Elementen
slug: Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
l10n:
  sourceCommit: a0386fcece25e928a8d045869eda203395e222e3
---

{{DefaultAPISidebar("CSSOM")}}

Es gibt mehrere Eigenschaften, die Sie betrachten können, um die Breite und Höhe von Elementen zu bestimmen. Es kann schwierig sein, festzustellen, welche die richtige für Ihre Bedürfnisse ist. Dieser Artikel soll Ihnen bei dieser Entscheidung helfen. Beachten Sie, dass alle diese Eigenschaften schreibgeschützt sind. Wenn Sie die Breite und Höhe eines Elements festlegen möchten, verwenden Sie die Eigenschaften {{CSSxRef("width")}} und {{CSSxRef("height")}} oder die überschreibenden Eigenschaften {{CSSxRef("min-width")}} und {{CSSxRef("max-width")}}, sowie {{CSSxRef("min-height")}} und {{CSSxRef("max-height")}}.

## Wie viel Platz nimmt es ein?

Wenn Sie wissen müssen, wie viel Platz ein Element insgesamt einnimmt, einschließlich der Breite des sichtbaren Inhalts, der Scrollleisten (falls vorhanden), der Auffüllung und des Rahmens, sollten Sie die Eigenschaften [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth) und [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight) verwenden. Meistens sind diese identisch mit der Breite und Höhe von [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect), wenn keine Transformationen auf das Element angewendet wurden. Bei Transformationen geben `offsetWidth` und `offsetHeight` die Layoutbreite und -höhe des Elements zurück, während `getBoundingClientRect()` die Rendering-Breite und -höhe zurückgibt. Wenn das Element beispielsweise `width: 100px;` und `transform: scale(0.5);` hat, wird `getBoundingClientRect()` 50 als Breite zurückgeben, während `offsetWidth` 100 zurückgibt. Ein weiterer Unterschied besteht darin, dass `offsetWidth` und `offsetHeight` die Werte auf ganze Zahlen runden, während `getBoundingClientRect()` genauere Dezimalwerte liefert.

![Wie die Eigenschaften offsetWidth und offsetHeight unter Berücksichtigung von Padding, Rahmen und Randmaßen bestimmt werden](dimensions-offset.png)

## Wie groß ist der angezeigte Inhalt?

Wenn Sie wissen müssen, wie viel Platz der tatsächlich angezeigte Inhalt einnimmt, einschließlich der Auffüllung, aber ohne Berücksichtigung des Rahmens, der Ränder oder Scrollleisten, sollten Sie die Eigenschaften [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) und [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight) verwenden:

![Wie die Eigenschaften clientWidth und clientHeight unter Berücksichtigung von Padding, Rahmen und Randmaßen bestimmt werden](dimensions-client.png)

## Wie groß ist der Inhalt?

Wenn Sie die tatsächliche Größe des Inhalts wissen müssen, unabhängig davon, wie viel davon derzeit sichtbar ist, müssen Sie die Eigenschaften [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth) und [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight) verwenden. Diese geben die Breite und Höhe des gesamten Inhalts eines Elements zurück, auch wenn derzeit nur ein Teil davon aufgrund der Verwendung von Scrollleisten sichtbar ist.

Wenn beispielsweise ein 600x400 Pixel großes Element in einem 300x300 Pixel großen Scrollfeld angezeigt wird, gibt `scrollWidth` 600, während `scrollHeight` 400 zurückgibt.

## Siehe auch

- <https://www.w3.org/TR/cssom-view-1/>
- [MSDN: Messung der Abmessungen und Positionen von Elementen](<https://learn.microsoft.com/en-us/previous-versions/hh781509(v=vs.85)>)
