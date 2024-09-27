---
title: Bestimmung der Dimensionen von Elementen
slug: Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
l10n:
  sourceCommit: a0386fcece25e928a8d045869eda203395e222e3
---

{{DefaultAPISidebar("CSSOM")}}

Es gibt mehrere Eigenschaften, die Sie betrachten können, um die Breite und Höhe von Elementen zu bestimmen, und es kann knifflig sein, herauszufinden, welche für Ihre Bedürfnisse die richtige ist. Dieser Artikel soll Ihnen bei dieser Entscheidung helfen. Beachten Sie, dass alle diese Eigenschaften schreibgeschützt sind. Wenn Sie die Breite und Höhe eines Elements festlegen möchten, verwenden Sie {{CSSxRef("width")}} und {{CSSxRef("height")}} oder die überschreibenden Eigenschaften {{CSSxRef("min-width")}} und {{CSSxRef("max-width")}}, sowie {{CSSxRef("min-height")}} und {{CSSxRef("max-height")}}.

## Wie viel Platz beansprucht es?

Wenn Sie wissen müssen, wie viel Platz ein Element insgesamt einnimmt, einschließlich der Breite des sichtbaren Inhalts, der Scrollleisten (falls vorhanden), der Polsterung und des Rahmens, sollten Sie die Eigenschaften [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth) und [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight) verwenden. Meistens entsprechen diese der Breite und Höhe von [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect), wenn keine Transformationen auf das Element angewendet werden. Im Falle von Transformationen geben `offsetWidth` und `offsetHeight` die Layout-Breite und -Höhe des Elements zurück, während `getBoundingClientRect()` die Breite und Höhe der Darstellung zurückgibt. Zum Beispiel, wenn ein Element `width: 100px;` und `transform: scale(0.5);` hat, wird `getBoundingClientRect()` 50 als Breite zurückgeben, während `offsetWidth` 100 zurückgibt. Ein weiterer Unterschied ist, dass `offsetWidth` und `offsetHeight` die Werte auf ganze Zahlen runden, während `getBoundingClientRect()` präzisere Dezimalwerte liefert.

![Wie die offsetWidth- und offsetHeight-Eigenschaften bestimmt werden, unter Berücksichtigung von Polsterung, Rahmen und Randgrößen](dimensions-offset.png)

## Wie groß ist der angezeigte Inhalt?

Wenn Sie wissen müssen, wie viel Platz der tatsächliche angezeigte Inhalt einnimmt, einschließlich der Polsterung, aber ohne den Rahmen, die Ränder oder die Scrollleisten, sollten Sie die Eigenschaften [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) und [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight) verwenden:

![Wie die clientWidth- und clientHeight-Eigenschaften bestimmt werden, unter Berücksichtigung von Polsterung, Rahmen und Randgrößen](dimensions-client.png)

## Wie groß ist der Inhalt?

Wenn Sie die tatsächliche Größe des Inhalts wissen müssen, unabhängig davon, wie viel davon derzeit sichtbar ist, müssen Sie die Eigenschaften [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth) und [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight) verwenden. Diese geben die Breite und Höhe des gesamten Inhalts eines Elements zurück, selbst wenn nur ein Teil davon aufgrund der Verwendung von Scrollleisten derzeit sichtbar ist.

Wenn beispielsweise ein 600x400 Pixel großes Element in einer 300x300 Pixel großen Scrollbox angezeigt wird, gibt `scrollWidth` 600 und `scrollHeight` 400 zurück.

## Siehe auch

- <https://www.w3.org/TR/cssom-view-1/>
- [MSDN: Measuring Element Dimension and Location](<https://learn.microsoft.com/en-us/previous-versions/hh781509(v=vs.85)>)
