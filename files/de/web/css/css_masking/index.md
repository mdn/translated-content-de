---
title: CSS-Maskierung
slug: Web/CSS/CSS_masking
l10n:
  sourceCommit: ce1dfc470d18fa6ba694a5b8bd5c657914e57cc3
---

{{CSSRef}}

Das **CSS-Maskierungs**modul definiert Maskierung und Clipping, zwei verschiedene grafische Operationen, die verwendet werden, um Teile von visuellen Elementen teilweise oder vollständig zu verbergen.

**Clipping** beinhaltet das Definieren eines geschlossenen Vektorpfads, einer Form oder eines Polygons als **Clipping-Pfad**. Alles innerhalb des Clipping-Pfad-Bereichs bleibt sichtbar, während alles außerhalb verborgen wird oder "ausgeschnitten" ist. Die {{cssxref("clip-path")}}-Eigenschaft gibt eine {{cssxref("&lt;basic-shape&gt;")}} an oder verweist auf ein SVG-{{SVGElement("clipPath")}}-Element, das als Clipping-Pfad verwendet werden soll.

CSS-**Maskierung**seigenschaften werden verwendet, um eine Maske auf ein Element oder dessen Rand anzuwenden. Ein grafisches Objekt wird dann auf den Hintergrund oder Rand gezeichnet und maskiert je nach Opazität oder Leuchtkraft der Maske Teile des Elements oder seines Randes vollständig oder teilweise.

Das Bild, das als Maske verwendet wird, wird durch die {{cssxref("mask-image")}}- oder {{cssxref("mask-border-source")}}-Eigenschaften angegeben. Die angegebene Maske kann ein {{cssxref("image")}}, ein {{cssxref("gradient")}} oder ein SVG-{{SVGElement("mask")}}-Element sein. Die Maske kann ähnlich wie [Hintergrund- und Randelemente](/de/docs/Web/CSS/CSS_backgrounds_and_borders) skaliert und positioniert werden.

Clipping und Maskierung in CSS verhalten sich genauso wie bei SVG: Zuerst wird das Element ohne Filtereffekte, Maskierung, Clipping und Opazität gestylt. Dann werden die Effekte in folgender Reihenfolge auf das Element angewendet: [Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects), Clipping, Maskierung und Opazität.

Während Maskierung mehr Kontrolle und Optionen bietet, kann Clipping besser funktionieren, wenn nur eine einfache Form benötigt wird — sie sind einfacher zu interpolieren.

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

- [Einführung in CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)

  - : Einführung in das Clipping in CSS, einschließlich der `clip-path`-Eigenschaft mit Beispielen.

- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)

  - : Einführung in die CSS-Maskierung, die verschiedenen Maskenbildtypen und die Effekte von Leuchtkraft und Alpha-Transparenz in der Maskierung.

## Verwandte Konzepte

- [`<coord-box>`](/de/docs/Web/CSS/box-edge#values)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}
- {{cssxref("&lt;url&gt;")}}

- [CSS-Hintergründe und -Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul

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

- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) Modul

  - {{cssxref("&lt;basic-shape&gt;")}} Datentyp
  - {{cssxref("basic-shape/polygon","polygon()")}} Funktion
  - [`<shape-box>`](/de/docs/Web/CSS/shape-outside#shape-box) Datentyp

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("background-clip")}}
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul
- [SVG-Tutorial: Clipping und Maskierung](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking)
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
- [PWA-Symbol-Maskierung](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking)
