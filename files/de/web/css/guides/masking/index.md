---
title: CSS-Maskierung
short-title: Masking
slug: Web/CSS/Guides/Masking
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

Das **CSS-Maskierungsmodul** definiert Maskierung und Zuschnitt, zwei verschiedene grafische Operationen, die verwendet werden, um Teile von visuellen Elementen teilweise oder vollständig zu verbergen.

Beim **Zuschnitt** wird ein geschlossener Vektorpfad, eine Form oder ein Polygon als **Zuschnittspfad** definiert. Alles innerhalb des Zuschnittspfad-Bereichs bleibt sichtbar, während alles außerhalb verborgen bzw. "ausgeschnitten" wird. Die Eigenschaft {{cssxref("clip-path")}} gibt eine {{cssxref("basic-shape")}} an oder verweist auf ein SVG-Element {{SVGElement("clipPath")}}, das als Zuschnittspfad verwendet wird.

CSS-**Maskierungseigenschaften** werden verwendet, um eine Maske auf ein Element oder dessen Rand anzuwenden. Ein grafisches Objekt wird dann auf den Hintergrund oder den Rand gemalt, wobei je nach Deckkraft oder Leuchtkraft der Maske Teile des Elements oder seines Randes vollständig oder teilweise maskiert werden.

Das Bild, das als Maske verwendet wird, wird durch die Eigenschaften {{cssxref("mask-image")}} oder {{cssxref("mask-border-source")}} festgelegt. Die angegebene Maske kann ein {{cssxref("image")}}, ein {{cssxref("gradient")}} oder ein SVG-Element {{SVGElement("mask")}} sein. Die Maske kann ähnlich wie [Hintergrund- und Randbilder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) dimensioniert und positioniert werden.

Der Zuschnitt und die Maskierung in CSS verhalten sich wie bei SVG: Zuerst wird das Element ohne Filtereffekte, Maskierung, Zuschnitt und Deckkraft gestaltet. Dann werden die Effekte in folgender Reihenfolge auf das Element angewendet: [Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects), Zuschnitt, Maskierung und Deckkraft.

Während die Maskierung mehr Kontrolle und Optionen bietet, kann der Zuschnitt eine bessere Leistung erbringen, wenn nur eine einfache Form erforderlich ist - sie sind einfacher zu interpolieren.

## Referenz

### Eigenschaften

- {{cssxref("clip")}} {{deprecated_inline}}
- {{cssxref("clip-path")}}
- {{cssxref("clip-rule")}}
- Umschalt-Eigenschaft {{cssxref("mask")}}
- {{cssxref("mask-clip")}}
- {{cssxref("mask-composite")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-mode")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-type")}}
- Umschalt-Eigenschaft {{cssxref("mask-border")}}
- {{cssxref("mask-border-outset")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-slice")}}
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-border-width")}}
- {{cssxref("mask-border-mode")}}

### Datentypen

- [`<geometry-box>`](/de/docs/Web/CSS/Reference/Properties/clip-path#geometry-box)

### Funktionen

- {{cssxref("basic-shape/rect","rect()")}} Funktion

### Schnittstellen

- [`SVGClipPathElement`](/de/docs/Web/API/SVGClipPathElement)
- [`SVGMaskElement`](/de/docs/Web/API/SVGMaskElement)
  - [`SVGMaskElement.maskContentUnits`](/de/docs/Web/API/SVGMaskElement/maskContentUnits)

## Leitfäden

- [Einführung in das CSS-Zuschnitt](/de/docs/Web/CSS/Guides/Masking/Clipping)
  - : Einführung in den Zuschnitt in CSS, einschließlich der `clip-path`-Eigenschaft mit Beispielen.

- [Einführung in die CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
  - : Einführung in die Maskierung in CSS, die verschiedenen Maskenbildtypen und die Effekte von Leuchtkraft und Alpha-Transparenz in der Maskierung.

- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
  - : Einführung in Maskenschichten und wie man mehrere Maskenbilder deklariert.

- [CSS-Maskeneigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
  - : Eine Erkundung der CSS-Maskierung und der `mask`-Umschalt-Komponenteneigenschaften mit Erklärungen und Beispielen.

## Verwandte Konzepte

- [`<coord-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#values)
- {{cssxref("image")}}
- {{cssxref("&lt;position&gt;")}}
- {{cssxref("url_value", "&lt;url&gt;")}}

- [CSS-Hintergründe und -Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
  - Umschalt-Eigenschaft {{cssxref("background")}}
  - {{cssxref("background-origin")}}
  - {{cssxref("background-position")}}
  - {{cssxref("background-repeat")}}
  - {{cssxref("background-size")}}
  - Umschalt-Eigenschaft {{cssxref("border-image")}}
  - {{cssxref("border-image-repeat")}}
  - {{cssxref("border-image-slice")}}
  - {{cssxref("border-image-source")}}
  - {{cssxref("border-image-width")}}
  - Datentyp [`<repeat-style>`](/de/docs/Web/CSS/Reference/Properties/background-repeat#values)

- [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) Modul
  - Datentyp {{cssxref("basic-shape")}}
  - Funktion {{cssxref("basic-shape/polygon","polygon()")}}
  - Datentyp [`<shape-box>`](/de/docs/Web/CSS/Reference/Properties/shape-outside#shape-box)

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("background-clip")}}
- [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects) Modul
- [SVG-Tutorial: Zuschnitt und Maskierung](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking)
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
- [PWA-Icon-Maskierung](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking)
