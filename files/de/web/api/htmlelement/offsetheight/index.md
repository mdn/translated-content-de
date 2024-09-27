---
title: "HTMLElement: offsetHeight-Eigenschaft"
short-title: offsetHeight
slug: Web/API/HTMLElement/offsetHeight
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte Eigenschaft **`HTMLElement.offsetHeight`** gibt die Höhe eines Elements einschließlich vertikaler Innenabstände und Rahmen als ganze Zahl zurück.

Typischerweise ist `offsetHeight` eine Messung in Pixeln der CSS-Höhe des Elements, einschließlich jeglicher Rahmen, Innenabstände und horizontaler Scrollleisten (falls angezeigt). Es schließt nicht die Höhe von Pseudo-Elementen wie `::before` oder `::after` ein. Für das Dokumentbody-Objekt umfasst die Messung die gesamte lineare Inhaltshöhe anstelle der CSS-Höhe des Elements. Schwimmende Elemente, die sich unterhalb anderer linearer Inhalte erstrecken, werden ignoriert.

Wenn das Element versteckt ist (zum Beispiel, indem `style.display` auf dem Element oder einem seiner Vorfahren auf `"none"` gesetzt wird), wird `0` zurückgegeben.

> [!NOTE]
> Diese Eigenschaft rundet den Wert auf eine ganze Zahl. Wenn Sie einen Bruchwert benötigen, verwenden Sie [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect).

## Wert

Eine Zahl.

## Beispiele

![Ein Beispiel-Element mit großem Innenabstand, Rahmen und Rand. `offsetHeight` ist die Layout-Höhe des Elements einschließlich seines Innenabstands und Rahmens, jedoch ohne seinen Rand.](dimensions-offset.png)

Das obige Beispielbild zeigt eine Scrollleiste und eine `offsetHeight`, die in das Fenster passt. Nicht scrollbare Elemente können jedoch große `offsetHeight`-Werte haben, viel größer als der sichtbare Inhalt. Diese Elemente befinden sich typischerweise in scrollbaren Elementen; folglich können diese nicht scrollbaren Elemente je nach `scrollTop`-Einstellung des scrollbaren Containers vollständig oder teilweise unsichtbar sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight)
- [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight)
- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth)
- [Das Bestimmen der Dimensionen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
