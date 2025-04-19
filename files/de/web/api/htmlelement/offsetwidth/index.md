---
title: "HTMLElement: offsetWidth-Eigenschaft"
short-title: offsetWidth
slug: Web/API/HTMLElement/offsetWidth
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte Eigenschaft **`offsetWidth`** des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces gibt die Layout-Breite eines Elements als Ganzzahl zurück.

Typischerweise ist `offsetWidth` eine Messung in Pixeln der CSS-Breite des Elements, einschließlich aller Rahmen, Polsterungen und vertikalen Scrollleisten (falls gerendert). Sie enthält nicht die Breite von Pseudo-Elementen wie `::before` oder `::after`.

Wenn das Element versteckt ist (zum Beispiel durch Setzen von `style.display` auf dem Element oder einem seiner Vorfahren auf `"none"`), wird `0` zurückgegeben.

## Wert

Eine Ganzzahl.

## Beispiele

![Ein Beispiel-Element mit großer Polsterung, Rahmen und Abstand. `offsetWidth` ist die Layout-Breite des Elements einschließlich seiner Polsterung und seines Rahmens, aber ohne seinen Abstand.](dimensions-offset.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bestimmung der Abmessungen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth)
- [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth)
- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight)
- [`HTMLElement.offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft)
- [`HTMLElement.offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop)
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
