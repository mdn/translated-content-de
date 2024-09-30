---
title: "HTMLElement: offsetHeight-Eigenschaft"
short-title: offsetHeight
slug: Web/API/HTMLElement/offsetHeight
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte **`HTMLElement.offsetHeight`**-Eigenschaft gibt
die Höhe eines Elements zurück, einschließlich vertikaler Innenabstände und Ränder, als Ganzzahl.

Typischerweise ist `offsetHeight` eine Messung in Pixeln der CSS-Höhe des Elements, einschließlich aller Ränder, Innenabstände und horizontaler Scrollbars (falls angezeigt). Es schließt nicht die Höhe von Pseudo-Elementen wie `::before` oder `::after` ein. Für das Dokument-Bodenelement umfasst die Messung die gesamte lineare Inhaltshöhe anstelle der CSS-Höhe des Elements. Schwebende Elemente, die sich unter anderem linearen Inhalt erstrecken, werden ignoriert.

Wenn das Element verborgen ist (zum Beispiel, indem `style.display` auf dem
Element oder einem seiner Vorfahren auf `"none"` gesetzt wird), wird `0` zurückgegeben.

> [!NOTE]
> Diese Eigenschaft rundet den Wert auf eine Ganzzahl. Wenn Sie einen gebrochenen Wert benötigen, verwenden Sie [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect).

## Wert

Eine Zahl.

## Beispiele

![Ein Beispiel eines Elements mit großem Innenabstand, Rand und Abstand. `offsetHeight` ist die Layout-Höhe des Elements einschließlich seines Innenabstands und Randes, jedoch ohne den Abstand.](dimensions-offset.png)

Das obige Beispielbild zeigt eine Scrollbar und ein `offsetHeight`, das in das Fenster passt. Nicht scrollbare Elemente können jedoch große `offsetHeight`-Werte aufweisen, die deutlich größer als der sichtbare Inhalt sind. Diese Elemente befinden sich typischerweise in scrollbaren Elementen; infolgedessen können diese nicht scrollbaren Elemente je nach `scrollTop`-Einstellung des scrollbaren Containers vollständig oder teilweise unsichtbar sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight)
- [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight)
- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth)
- [Bestimmung der Abmessungen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
