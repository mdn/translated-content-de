---
title: "HTMLElement: offsetHeight Eigenschaft"
short-title: offsetHeight
slug: Web/API/HTMLElement/offsetHeight
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte **`offsetHeight`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle gibt die Höhe eines Elements zurück, einschließlich des vertikalen Abstands und der Rahmen, als Ganzzahl.

Typischerweise ist `offsetHeight` eine Messung in Pixeln der CSS-Höhe des Elements, einschließlich aller Rahmen, Abstände und horizontalen Bildlaufleisten (falls gerendert). Es beinhaltet nicht die Höhe von Pseudo-Elementen wie `::before` oder `::after`. Für das Dokumentkörperobjekt umfasst die Messung die totale lineare Inhaltshöhe anstelle der CSS-Höhe des Elements. Schwebende Elemente, die unterhalb anderen linearen Inhalts stehen, werden ignoriert.

Falls das Element verborgen ist (zum Beispiel, indem `style.display` auf dem Element oder einem seiner Vorfahren auf `"none"` gesetzt wird), wird `0` zurückgegeben.

## Wert

Eine Ganzzahl.

## Beispiele

![Ein Beispiel eines Elements mit großem Abstand, Rahmen und Rand. `offsetHeight` ist die Layout-Höhe des Elements einschließlich seines Abstands und Rahmens, aber ohne den Rand.](dimensions-offset.png)

Das obige Beispielbild zeigt eine Bildlaufleiste und ein `offsetHeight`, das auf das Fenster passt. Nicht-scrollbare Elemente können jedoch große `offsetHeight`-Werte haben, die weit größer als der sichtbare Inhalt sind. Diese Elemente sind typischerweise innerhalb von scrollbaren Elementen enthalten; folglich können diese nicht-scrollbaren Elemente je nach der `scrollTop`-Einstellung des scrollbaren Containers vollständig oder teilweise unsichtbar sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bestimmung der Abmessungen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight)
- [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight)
- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth)
- [`HTMLElement.offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft)
- [`HTMLElement.offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop)
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
