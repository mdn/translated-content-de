---
title: Bestimmung der Dimensionen von Elementen
slug: Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{DefaultAPISidebar("CSSOM")}}

Es gibt mehrere Eigenschaften, die Sie betrachten können, um die Breite und Höhe von Elementen zu bestimmen, und es kann schwierig sein, herauszufinden, welche die richtige für Ihre Bedürfnisse ist. Dieser Artikel soll Ihnen bei dieser Entscheidung helfen. Beachten Sie, dass all diese Eigenschaften schreibgeschützt sind. Wenn Sie die Breite und Höhe eines Elements festlegen möchten, verwenden Sie {{CSSxRef("width")}} und {{CSSxRef("height")}} oder die überschreibenden Eigenschaften {{CSSxRef("min-width")}} und {{CSSxRef("max-width")}}, sowie {{CSSxRef("min-height")}} und {{CSSxRef("max-height")}}.

## Wie viel Platz nimmt es ein?

Wenn Sie wissen müssen, wie viel Platz ein Element insgesamt einnimmt, einschließlich der Breite des sichtbaren Inhalts, der Bildlaufleisten (falls vorhanden), der Füllung und der Rahmen, sollten Sie die Eigenschaften [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth) und [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight) verwenden. Meistens sind diese identisch mit der Breite und Höhe von [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect), wenn keine Transformationen auf das Element angewendet werden. Im Falle von Transformationen geben `offsetWidth` und `offsetHeight` die Layoutbreite und -höhe des Elements zurück, während `getBoundingClientRect()` die Rendering-Breite und -höhe zurückgibt. Als Beispiel, wenn das Element `width: 100px;` und `transform: scale(0.5);` hat, wird `getBoundingClientRect()` 50 als Breite zurückgeben, während `offsetWidth` 100 zurückgibt. Ein weiterer Unterschied ist, dass `offsetWidth` und `offsetHeight` die Werte auf ganze Zahlen runden, während `getBoundingClientRect()` genauere Dezimalpunktwerte liefert.

![Wie die Eigenschaften offsetWidth und offsetHeight bestimmt werden, unter Berücksichtigung von Padding-, Rahmen- und Margengrößen](dimensions-offset.png)

## Wie groß ist der angezeigte Inhalt?

Wenn Sie wissen müssen, wie viel Platz der tatsächlich angezeigte Inhalt einnimmt, einschließlich Füllung, jedoch ohne Rahmen, Ränder oder Bildlaufleisten, sollten Sie die Eigenschaften [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) und [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight) verwenden:

![Wie die Eigenschaften clientWidth und clientHeight bestimmt werden, unter Berücksichtigung von Padding-, Rahmen- und Margengrößen](dimensions-client.png)

## Wie groß ist der Inhalt?

Wenn Sie die tatsächliche Größe des Inhalts wissen müssen, unabhängig davon, wie viel davon derzeit sichtbar ist, sollten Sie die Eigenschaften [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth) und [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight) verwenden. Diese geben die Breite und Höhe des gesamten Inhalts eines Elements zurück, selbst wenn aufgrund der Verwendung von Bildlaufleisten nur ein Teil davon derzeit sichtbar ist.

Zum Beispiel, wenn ein Element mit 600x400 Pixeln in einem Scroll-Container mit 300x300 Pixeln angezeigt wird, gibt `scrollWidth` 600 und `scrollHeight` 400 zurück.

## Siehe auch

- [Das CSSOM View-Modul](https://drafts.csswg.org/cssom-view/) Spezifikation
- [MSDN: Messen von Elementdimension und -position](<https://learn.microsoft.com/en-us/previous-versions/hh781509(v=vs.85)>)
