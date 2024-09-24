---
title: Bestimmen der Dimensionen von Elementen
slug: Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
l10n:
  sourceCommit: a0386fcece25e928a8d045869eda203395e222e3
---

{{DefaultAPISidebar("CSSOM")}}

Es gibt mehrere Eigenschaften, die Sie betrachten können, um die Breite und Höhe von Elementen zu bestimmen, und es kann kompliziert sein, herauszufinden, welche für Ihre Anforderungen die richtige ist. Dieser Artikel soll Ihnen bei dieser Entscheidung helfen. Beachten Sie, dass all diese Eigenschaften schreibgeschützt sind. Wenn Sie die Breite und Höhe eines Elements festlegen möchten, verwenden Sie {{CSSxRef("width")}} und {{CSSxRef("height")}} oder die übergeordneten {{CSSxRef("min-width")}} und {{CSSxRef("max-width")}}, sowie {{CSSxRef("min-height")}} und {{CSSxRef("max-height")}} Eigenschaften.

## Wie viel Platz beansprucht es?

Wenn Sie wissen müssen, wie viel Platz ein Element insgesamt einnimmt, einschließlich der Breite des sichtbaren Inhalts, der Bildlaufleisten (falls vorhanden), der Auffüllung (padding) und des Randes (border), sollten Sie die Eigenschaften {{DOMxRef("HTMLElement.offsetWidth")}} und {{DOMxRef("HTMLElement.offsetHeight")}} verwenden. Meistens sind diese dieselben wie Breite und Höhe von {{DOMxRef("Element.getBoundingClientRect()")}}, wenn auf das Element keine Transformationen angewendet werden. Bei Transformationen geben `offsetWidth` und `offsetHeight` die Layout-Breite und -Höhe des Elements zurück, während `getBoundingClientRect()` die Rendering-Breite und -Höhe zurückgibt. Zum Beispiel, wenn das Element `width: 100px;` und `transform: scale(0.5);` hat, wird `getBoundingClientRect()` die Breite als 50 zurückgeben, während `offsetWidth` 100 zurückgibt. Ein weiterer Unterschied ist, dass `offsetWidth` und `offsetHeight` die Werte auf ganze Zahlen aufrunden, während `getBoundingClientRect()` genauere Dezimalwerte liefert.

![Wie die Eigenschaften offsetWidth und offsetHeight bestimmt werden, unter Berücksichtigung von Auffüllung, Rändern und Randgrößen](dimensions-offset.png)

## Wie groß ist der angezeigte Inhalt?

Wenn Sie wissen möchten, wie viel Platz der tatsächlich angezeigte Inhalt einnimmt, einschließlich Auffüllung, aber ohne die Grenze (border), Ränder (margins) oder Bildlaufleisten, sollten Sie die Eigenschaften {{DOMxRef("Element.clientWidth")}} und {{DOMxRef("Element.clientHeight")}} verwenden:

![Wie die Eigenschaften clientWidth und clientHeight bestimmt werden, unter Berücksichtigung von Auffüllung, Rändern und Randgrößen](dimensions-client.png)

## Wie groß ist der Inhalt?

Wenn Sie die tatsächliche Größe des Inhalts wissen müssen, unabhängig davon, wie viel davon aktuell sichtbar ist, müssen Sie die Eigenschaften {{DOMxRef("Element.scrollWidth")}} und {{DOMxRef("Element.scrollHeight")}} verwenden. Diese geben die Breite und Höhe des gesamten Inhalts eines Elements zurück, selbst wenn derzeit nur ein Teil aufgrund der Verwendung von Bildlaufleisten sichtbar ist.

Zum Beispiel, wenn ein 600x400 Pixel großes Element in einem 300x300 Pixel großen Scrollbox angezeigt wird, wird `scrollWidth` 600 zurückgeben, während `scrollHeight` 400 zurückgibt.

## Siehe auch

- <https://www.w3.org/TR/cssom-view-1/>
- [MSDN: Messen von Elementdimensionen und Standort](<https://learn.microsoft.com/en-us/previous-versions/hh781509(v=vs.85)>)
