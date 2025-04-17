---
title: CSS-Maskierung
slug: Web/CSS/CSS_masking
l10n:
  sourceCommit: 1b7ea45804a3739f479299f691c8988ccee4901d
---

{{CSSRef}}

Das **CSS-Maskierungsmodul** definiert Maskierung und Zuschnitt, zwei unterschiedliche grafische Operationen, die verwendet werden, um Teile von visuellen Elementen teilweise oder vollständig zu verbergen.

Beim **Zuschnitt** wird ein geschlossener Vektorpfad, eine Form oder ein Polygon als **Zuschnittspfad** definiert. Alles innerhalb des Bereichs des Zuschnittspfads bleibt sichtbar, während alles außerhalb verborgen oder "ausgeschnitten" wird. Die Eigenschaft {{cssxref("clip-path")}} spezifiziert eine {{cssxref("&lt;basic-shape&gt;")}} oder referenziert ein SVG-{{SVGElement("clipPath")}}-Element, das als Zuschnittspfad verwendet wird.

CSS-**Maskierungseigenschaften** werden verwendet, um eine Maske auf ein Element oder dessen Rand anzuwenden. Ein grafisches Objekt wird dann auf den Hintergrund oder Rand gemalt und maskiert vollständig oder teilweise Teile des Elements oder seines Randes, abhängig von der Deckkraft oder Leuchtkraft der Maske.

Das Bild, das als Maske verwendet wird, wird durch die Eigenschaften {{cssxref("mask-image")}} oder {{cssxref("mask-border-source")}} spezifiziert. Die angegebene Maske kann ein {{cssxref("image")}}, ein {{cssxref("gradient")}} oder ein SVG-{{SVGElement("mask")}}-Element sein. Die Maske kann ähnlich wie [Hintergrund- und Randbilder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) skaliert und positioniert werden.

Zuschnitt und Maskierung in CSS verhalten sich genauso wie bei SVG: Zuerst wird das Element ohne Filtereffekte, Maskierung, Zuschnitt und Deckkraft gestylt. Dann werden die Effekte in der folgenden Reihenfolge auf das Element angewendet: [Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects), Zuschnitt, Maskierung und Deckkraft.

Während die Maskierung mehr Kontrolle und Optionen bietet, kann der Zuschnitt leistungsfähiger sein, wenn nur eine grundlegende Form benötigt wird — diese sind leichter zu interpolieren.

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

## Verwandte Konzepte

- [`<coord-box>`](/de/docs/Web/CSS/box-edge#values)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}
- {{cssxref("&lt;url&gt;")}}

- [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul

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
- [SVG-Tutorial: Zuschnitt und Maskierung](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking)
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
- [PWA-Icon-Maskierung](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking)
