---
title: Ermittlung der Abmessungen von Elementen
slug: Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{DefaultAPISidebar("CSSOM")}}

Es gibt mehrere Eigenschaften, die Sie betrachten können, um die Breite und Höhe von Elementen zu bestimmen, und es kann knifflig sein herauszufinden, welche für Ihre Bedürfnisse die richtige ist. Dieser Artikel soll Ihnen helfen, diese Entscheidung zu treffen. Beachten Sie, dass alle diese Eigenschaften schreibgeschützt sind. Wenn Sie die Breite und Höhe eines Elements festlegen möchten, verwenden Sie die Eigenschaften {{CSSxRef("width")}} und {{CSSxRef("height")}} oder die überlagernden {{CSSxRef("min-width")}} und {{CSSxRef("max-width")}}, sowie {{CSSxRef("min-height")}} und {{CSSxRef("max-height")}}.

## Wie viel Platz nimmt es ein?

Wenn Sie wissen müssen, wie viel Platz ein Element insgesamt einnimmt, einschließlich der Breite des sichtbaren Inhalts, Scrollleisten (falls vorhanden), Polsterung und Rahmen, sollten Sie die Eigenschaften [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth) und [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight) verwenden. Meistens entsprechen diese der Breite und Höhe von [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect), wenn keine Transformationen auf das Element angewendet wurden. Im Fall von Transformationen geben `offsetWidth` und `offsetHeight` die Layout-Breite und -Höhe des Elements zurück, während `getBoundingClientRect()` die Rendering-Breite und -Höhe angibt. Ein Beispiel: Wenn das Element `width: 100px;` und `transform: scale(0.5);` hat, wird `getBoundingClientRect()` 50 als Breite zurückgeben, während `offsetWidth` 100 zurückgibt. Ein weiterer Unterschied ist, dass `offsetWidth` und `offsetHeight` die Werte auf ganze Zahlen runden, während `getBoundingClientRect()` präzisere Werte mit Dezimalstellen liefert.

![Wie die Eigenschaften offsetWidth und offsetHeight unter Berücksichtigung von Polsterungen, Rahmen und Randgrößen bestimmt werden](dimensions-offset.png)

## Wie groß ist der angezeigte Inhalt?

Wenn Sie wissen müssen, wie viel Platz der tatsächlich angezeigte Inhalt einnimmt, einschließlich der Polsterung, aber ohne Rahmen, Ränder oder Scrollleisten, sollten Sie die Eigenschaften [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) und [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight) verwenden:

![Wie die Eigenschaften clientWidth und clientHeight unter Berücksichtigung von Polsterungen, Rahmen und Randgrößen bestimmt werden](dimensions-client.png)

## Wie groß ist der Inhalt?

Wenn Sie die tatsächliche Größe des Inhalts kennen müssen, unabhängig davon, wie viel davon derzeit sichtbar ist, müssen Sie die Eigenschaften [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth) und [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight) verwenden. Diese geben die Breite und Höhe des gesamten Inhalts eines Elements zurück, auch wenn derzeit nur ein Teil davon aufgrund der Verwendung von Scrollleisten sichtbar ist.

Zum Beispiel: Wenn ein 600x400 Pixel großes Element in einem 300x300 Pixel großen Scrollcontainer angezeigt wird, gibt `scrollWidth` den Wert 600 zurück, während `scrollHeight` den Wert 400 zurückgibt.

## Siehe auch

- <https://www.w3.org/TR/cssom-view-1/>
- [MSDN: Measuring Element Dimension and Location](<https://learn.microsoft.com/en-us/previous-versions/hh781509(v=vs.85)>)
