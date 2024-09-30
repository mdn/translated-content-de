---
title: "HTMLElement: offsetWidth Eigenschaft"
short-title: offsetWidth
slug: Web/API/HTMLElement/offsetWidth
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte Eigenschaft **`HTMLElement.offsetWidth`** gibt die Layoutbreite eines Elements als Ganzzahl zurück.

Typischerweise ist `offsetWidth` eine Messung in Pixeln der CSS-Breite des Elements, einschließlich jeglicher Rahmen, Polsterung und vertikaler Scrollleisten (falls dargestellt). Sie schließt nicht die Breite von Pseudo-Elementen wie `::before` oder `::after` ein.

Wenn das Element verborgen ist (zum Beispiel, indem `style.display` auf dem Element oder einem seiner Vorfahren auf `"none"` gesetzt wird), wird `0` zurückgegeben.

## Wert

Eine Ganzzahl, die dem `offsetWidth`-Pixelwert des Elements entspricht. Die Eigenschaft `offsetWidth` ist schreibgeschützt.

> [!NOTE]
> Diese Eigenschaft rundet den Wert zu einer Ganzzahl. Wenn Sie einen Bruchwert benötigen, verwenden Sie
> [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect).

## Beispiele

![Ein Beispiel eines Elements mit großen Polsterungen, Rahmen und Rändern. `offsetWidth` ist die Layoutbreite des Elements, einschließlich seiner Polsterung und Rahmen, aber ohne seinen Rand.](dimensions-offset.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth)
- [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth)
- [Bestimmung der Dimensionen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
