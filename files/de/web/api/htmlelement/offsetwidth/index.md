---
title: "HTMLElement: offsetWidth-Eigenschaft"
short-title: offsetWidth
slug: Web/API/HTMLElement/offsetWidth
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.offsetWidth`** schreibgeschützte Eigenschaft gibt die Layoutbreite eines Elements als Ganzzahl zurück.

Typischerweise ist `offsetWidth` eine Messung in Pixeln der CSS-Breite des Elements, einschließlich aller Rahmen, Polsterungen und vertikalen Scrollbalken (falls gerendert). Es enthält nicht die Breite von Pseudo-Elementen wie `::before` oder `::after`.

Wenn das Element ausgeblendet ist (zum Beispiel, indem `style.display` auf das Element oder einen seiner Vorfahren auf `"none"` gesetzt wird), wird `0` zurückgegeben.

## Wert

Ein Ganzzahl-Wert, der dem Pixelwert von `offsetWidth` des Elements entspricht. Die `offsetWidth`-Eigenschaft ist schreibgeschützt.

> [!NOTE]
> Diese Eigenschaft rundet den Wert auf eine Ganzzahl. Wenn Sie einen Bruchwert benötigen, verwenden Sie
> {{ domxref("element.getBoundingClientRect()") }}.

## Beispiele

![Ein Beispiel eines Elements mit großen Abständen, Rahmen und Rändern. `offsetWidth` ist die Layoutbreite des Elements einschließlich seiner Polsterung und seines Rahmens, jedoch ohne seinen Rand.](dimensions-offset.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.clientWidth")}}
- {{domxref("Element.scrollWidth")}}
- [Bestimmung der Dimensionen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
