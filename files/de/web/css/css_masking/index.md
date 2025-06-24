---
title: CSS-Maskierung
slug: Web/CSS/CSS_masking
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das **CSS-Masking**-Modul definiert das Maskieren und Zuschneiden, zwei unterschiedliche grafische Operationen, die verwendet werden, um Teile von visuellen Elementen teilweise oder vollständig zu verbergen.

**Zuschneiden** beinhaltet die Definition eines geschlossenen Vektorpfades, einer Form oder eines Polygons als **Clipping-Pfad**. Alles innerhalb der Zuschneidepfad-Region bleibt sichtbar, während alles außerhalb versteckt oder "ausgeschnitten" wird. Die {{cssxref("clip-path")}}-Eigenschaft gibt ein {{cssxref("&lt;basic-shape&gt;")}} an oder verweist auf ein SVG-{{SVGElement("clipPath")}}-Element, das als Zuschneidepfad verwendet werden soll.

CSS-**Maskierungs**eigenschaften werden verwendet, um ein Element oder dessen Rahmen mit einer Maske zu versehen. Ein grafisches Objekt wird dann auf den Hintergrund oder den Rahmen gemalt und maskiert Teile des Elements oder dessen Rahmen vollständig oder teilweise, abhängig von der Opazität oder Helligkeit der Maske.

Das als Maske verwendete Bild wird durch die Eigenschaften {{cssxref("mask-image")}} oder {{cssxref("mask-border-source")}} festgelegt. Die angegebene Maske kann ein {{cssxref("image")}}, ein {{cssxref("gradient")}} oder ein SVG-{{SVGElement("mask")}}-Element sein. Die Maske kann in ähnlicher Weise wie [Hintergrund- und Rahmenbilder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) skaliert und positioniert werden.

Das Zuschneiden und Maskieren in CSS verhält sich genauso wie bei SVG: Zuerst wird das Element ohne Filtereffekte, Maskierung, Zuschneiden und Opazität gestylt. Dann werden alle Effekte in folgender Reihenfolge auf das Element angewendet: [Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects), Zuschneiden, Maskieren und Opazität.

Während das Maskieren mehr Kontrolle und Optionen bietet, kann das Zuschneiden effizienter sein, wenn nur eine grundlegende Form benötigt wird — sie sind leichter zu interpolieren.

## Referenz

### Eigenschaften

- {{cssxref("clip")}} {{deprecated_inline}}
- {{cssxref("clip-path")}}
- {{cssxref("clip-rule")}}
- {{cssxref("mask")}} Kurzschreibweise
- {{cssxref("mask-clip")}}
- {{cssxref("mask-composite")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-mode")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-type")}}
- {{cssxref("mask-border")}} Kurzschreibweise
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

- [Einführung in das CSS-Zuschneiden](/de/docs/Web/CSS/CSS_masking/Clipping)

  - : Einführung in das Zuschneiden in CSS, einschließlich der `clip-path`-Eigenschaft mit Beispielen.

- [Einführung in die CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)

  - : Einführung in die Maskierung in CSS, die verschiedenen Maskenbildtypen und die Effekte von Helligkeit und Alphatransparenz bei der Maskierung.

- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
  - : Einführung in Maskenschichten und wie man mehrere Maskenbilder deklariert.

## Verwandte Konzepte

- [`<coord-box>`](/de/docs/Web/CSS/box-edge#values)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}
- {{cssxref("&lt;url&gt;")}}

- [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul

  - {{cssxref("background")}} Kurzschreibweise
  - {{cssxref("background-origin")}}
  - {{cssxref("background-position")}}
  - {{cssxref("background-repeat")}}
  - {{cssxref("background-size")}}
  - {{cssxref("border-image")}} Kurzschreibweise
  - {{cssxref("border-image-repeat")}}
  - {{cssxref("border-image-slice")}}
  - {{cssxref("border-image-source")}}
  - {{cssxref("border-image-width")}}
  - [`<repeat-style>`](/de/docs/Web/CSS/background-repeat#values) Datentyp

- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) Modul
  - {{cssxref("&lt;basic-shape&gt;")}} Datentyp
  - {{cssxref("basic-shape/polygon","polygon()")}} Funktion
  - [`<shape-box>`](/de/docs/Web/CSS/shape-outside#shape-box) Datentyp

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("background-clip")}}
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul
- [SVG-Tutorial: Zuschneiden und Maskieren](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking)
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
- [PWA-Icon-Maskierung](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking)
