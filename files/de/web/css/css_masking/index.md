---
title: CSS Maskierung
slug: Web/CSS/CSS_masking
l10n:
  sourceCommit: 288f873b40bdf6cdcd366dd09e1824da2bc83ebf
---

{{CSSRef}}

Das **CSS Maskierungsmodul** definiert Maskierung und Beschnitt, zwei verschiedene grafische Operationen, mit denen Teile von visuellen Elementen teilweise oder vollständig verborgen werden können.

**Beschnitt** beinhaltet die Definition eines geschlossenen Vektorpfads, einer Form oder eines Polygons als **Beschnpfad**. Alles innerhalb des Beschnpfadbereichs bleibt sichtbar, während alles außerhalb verborgen oder "ausgeschnitten" wird. Die {{cssxref("clip-path")}}-Eigenschaft spezifiziert eine {{cssxref("&lt;basic-shape&gt;")}} oder referenziert ein SVG-{{SVGElement("clipPath")}}-Element, das als Beschnpfad verwendet werden soll.

Die CSS **Maskierungseigenschaften** werden verwendet, um einem Element oder seinem Rand eine Maske anzuwenden. Ein grafisches Objekt wird dann auf den Hintergrund oder Rand gemalt, wobei Teile des Elements oder seines Randes vollständig oder teilweise maskiert werden, abhängig von der Opazität oder Luminanz der Maske.

Das Bild, das als Maske verwendet wird, wird durch die Eigenschaften {{cssxref("mask-image")}} oder {{cssxref("mask-border-source")}} angegeben. Die spezifizierte Maske kann ein {{cssxref("image")}}, ein {{cssxref("gradient")}} oder ein SVG-{{SVGElement("mask")}}-Element sein. Die Maske kann in ähnlicher Weise wie [Hintergrund- und Randbilder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) skaliert und positioniert werden.

Das Verhalten von Beschnitt und Maskierung in CSS ist das gleiche wie in SVG: Zuerst wird das Element ohne Filtereffekte, Maskierung, Beschnitt und Opazität gestylt. Dann werden alle Effekte in folgender Reihenfolge auf das Element angewendet: [Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects), Beschnitt, Maskierung und Opazität.

Während Maskierung mehr Kontrolle und Optionen bietet, kann Beschnitt eine bessere Leistung erbringen, wenn nur eine grundlegende Form erforderlich ist - sie sind einfacher zu interpolieren.

## Referenz

### Eigenschaften

- {{cssxref("clip")}} {{deprecated_inline}}
- {{cssxref("clip-path")}}
- {{cssxref("clip-rule")}}
- {{cssxref("mask")}} Kurzform
- {{cssxref("mask-clip")}}
- {{cssxref("mask-composite")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-mode")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-type")}}
- {{cssxref("mask-border")}} Kurzform
- {{cssxref("mask-border-mode")}}
- {{cssxref("mask-border-outset")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-slice")}}
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-border-width")}}

### Datentypen

- [`<geometry-box>`](/de/docs/Web/CSS/clip-path#geometry-box)

### Funktionen

- {{cssxref("basic-shape/rect","rect()")}} Funktion

### Schnittstellen

- [`SVGClipPathElement`](/de/docs/Web/API/SVGClipPathElement)
- [`SVGMaskElement`](/de/docs/Web/API/SVGMaskElement)
  - [`SVGMaskElement.maskContentUnits`](/de/docs/Web/API/SVGMaskElement/maskContentUnits)

## Leitfäden

- [Einführung in das CSS-Beschnitt](/de/docs/Web/CSS/CSS_masking/Clipping)
  - : Einführung in Beschnitt in CSS, einschließlich der `clip-path`-Eigenschaft mit Beispielen.

- [Einführung in das CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
  - : Einführung in die Maskierung in CSS, die verschiedenen Maskenbildtypen und die Effekte von Luminanz und Alpha-Transparenz in der Maskierung.

- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
  - : Einführung in Maskenschichten und wie man mehrere Maskenbilder deklariert.

- [CSS Maskierungseigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
  - : Eine Erkundung der CSS-Maskierung und der `mask`-Kurzform Komponenteneigenschaften mit Erklärungen und Beispielen.

## Verwandte Konzepte

- [`<coord-box>`](/de/docs/Web/CSS/box-edge#values)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}
- {{cssxref("&lt;url&gt;")}}

- [CSS Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
  - {{cssxref("background")}} Kurzform
  - {{cssxref("background-origin")}}
  - {{cssxref("background-position")}}
  - {{cssxref("background-repeat")}}
  - {{cssxref("background-size")}}
  - {{cssxref("border-image")}} Kurzform
  - {{cssxref("border-image-repeat")}}
  - {{cssxref("border-image-slice")}}
  - {{cssxref("border-image-source")}}
  - {{cssxref("border-image-width")}}
  - [`<repeat-style>`](/de/docs/Web/CSS/background-repeat#values) Datentyp

- [CSS Formen](/de/docs/Web/CSS/CSS_shapes) Modul
  - {{cssxref("&lt;basic-shape&gt;")}} Datentyp
  - {{cssxref("basic-shape/polygon","polygon()")}} Funktion
  - [`<shape-box>`](/de/docs/Web/CSS/shape-outside#shape-box) Datentyp

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("background-clip")}}
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul
- [SVG-Tutorial: Beschnitt und Maskierung](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking)
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
- [PWA-Symbolmaskierung](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking)
