---
title: "HTMLElement: offsetWidth-Eigenschaft"
short-title: offsetWidth
slug: Web/API/HTMLElement/offsetWidth
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte Eigenschaft **`HTMLElement.offsetWidth`** gibt die Layout-Breite eines Elements als Ganzzahl zurück.

Typischerweise ist `offsetWidth` ein Maß in Pixeln der CSS-Breite des Elements, einschließlich jeglicher Rahmen, Auffüllung und vertikaler Bildlaufleisten (falls angezeigt). Es schließt nicht die Breite von Pseudo-Elementen wie `::before` oder `::after` ein.

Wenn das Element versteckt ist (zum Beispiel durch das Setzen von `style.display` auf dem Element oder einem seiner Vorfahren auf `"none"`), wird `0` zurückgegeben.

## Wert

Eine Ganzzahl, die dem `offsetWidth`-Pixelwert des Elements entspricht. Die Eigenschaft `offsetWidth` ist schreibgeschützt.

> [!NOTE]
> Diese Eigenschaft wird den Wert auf eine Ganzzahl runden. Wenn Sie einen Bruchwert benötigen, verwenden Sie
> [`element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect).

## Beispiele

![Ein Beispiel-Element mit großer Auffüllung, Rahmen und Rand. `offsetWidth` ist die Layout-Breite des Elements einschließlich seiner Auffüllung und seines Rahmens, und ohne seinen Rand.](dimensions-offset.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth)
- [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth)
- [Bestimmung der Dimensionen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
