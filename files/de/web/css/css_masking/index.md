---
title: CSS-Maskierung
slug: Web/CSS/CSS_masking
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Masking**-Modul definiert Maskierung und Zuschnitt, zwei verschiedene grafische Operationen, die dazu verwendet werden, Teile von visuellen Elementen teilweise oder vollständig zu verbergen.

**Zuschnitt** beinhaltet das Definieren eines geschlossenen Vektorpfads, einer Form oder eines Polygons als **Zuschnittspfad**. Alles innerhalb des Zuschnittspfadbereichs bleibt sichtbar, während alles außerhalb verborgen oder "ausgeschnitten" wird. Die {{cssxref("clip-path")}}-Eigenschaft spezifiziert eine {{cssxref("&lt;basic-shape&gt;")}} oder verweist auf ein SVG-{{SVGElement("clipPath")}}-Element, das als Zuschnittspfad verwendet wird.

CSS-**Maskierungs**eigenschaften werden verwendet, um einem Element oder seinem Rahmen eine Maske anzuwenden. Ein grafisches Objekt wird dann auf den Hintergrund oder Rahmen gemalt und maskiert je nach Deckkraft oder Luminanz der Maske entweder vollständig oder teilweise Teile des Elements oder seines Rahmens.

Das als Maske verwendete Bild wird durch die Eigenschaften {{cssxref("mask-image")}} oder {{cssxref("mask-border-source")}} angegeben. Die angegebene Maske kann ein {{cssxref("image")}}, ein {{cssxref("gradient")}} oder ein SVG-{{SVGElement("mask")}}-Element sein. Die Maske kann ähnlich wie [Hintergrund- und Rahmenbilder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) skaliert und positioniert werden.

Zuschnitt und Maskierung in CSS verhalten sich genauso wie in SVG: Zuerst wird das Element ohne Filtereffekte, Maskierung, Zuschnitt und Deckkraft gestylt. Danach werden alle Effekte in folgender Reihenfolge auf das Element angewendet: [Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects), Zuschnitt, Maskierung und Deckkraft.

Obwohl Maskierung mehr Kontrolle und Optionen bietet, kann Zuschnitt bei der Verwendung einer einfachen Form leistungsstärker sein, da sie einfacher zu interpolieren sind.

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

- [Einführung in das CSS-Zuschnitt](/de/docs/Web/CSS/CSS_masking/Clipping)
  - : Einführung in den Zuschnitt in CSS, einschließlich der `clip-path`-Eigenschaft mit Beispielen.

- [Einführung in das CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
  - : Einführung in die Maskierung in CSS, die verschiedenen Maskenbildtypen und die Effekte von Luminanz und Alphatransparenz bei der Maskierung.

- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
  - : Einführung in Maskenschichten und Anleitung zur Deklaration mehrerer Maskenbilder.

- [CSS-Maskeneigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
  - : Eine Erkundung der CSS-Maskierung und der `mask`-Kurzformelementeigenschaften mit Erklärungen und Beispielen.

## Verwandte Konzepte

- [`<coord-box>`](/de/docs/Web/CSS/box-edge#values)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}
- {{cssxref("&lt;url&gt;")}}

- [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders)-Modul
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

- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes)-Modul
  - {{cssxref("&lt;basic-shape&gt;")}} Datentyp
  - {{cssxref("basic-shape/polygon","polygon()")}} Funktion
  - [`<shape-box>`](/de/docs/Web/CSS/shape-outside#shape-box) Datentyp

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("background-clip")}}
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)-Modul
- [SVG-Tutorial: Zuschnitt und Maskierung](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking)
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
- [PWA-Symbol-Maskierung](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking)
