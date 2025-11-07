---
title: CSS-Masking
slug: Web/CSS/CSS_masking
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **CSS-Masking-Modul** definiert Maskierung und das Abschneiden, zwei verschiedene grafische Operationen, die verwendet werden, um Teile von visuellen Elementen teilweise oder vollständig auszublenden.

**Abschneiden** beinhaltet das Definieren eines geschlossenen Vektorpfades, einer Form oder eines Polygons als **Ausschnittspfad**. Alles innerhalb der Region des Ausschnittspfades bleibt sichtbar, während alles außerhalb ausgeblendet oder "ausgeschnitten" wird. Die {{cssxref("clip-path")}}-Eigenschaft spezifiziert eine {{cssxref("&lt;basic-shape&gt;")}} oder referenziert ein SVG-{{SVGElement("clipPath")}}-Element, das als Ausschnittspfad verwendet werden soll.

Die **Masking-Eigenschaften** von CSS werden verwendet, um ein Element oder dessen Rahmen zu maskieren. Ein grafisches Objekt wird dann auf den Hintergrund oder Rahmen gemalt, wobei Teile des Elements oder seines Rahmens je nach Opazität oder Leuchtdichte der Maske vollständig oder teilweise ausgeblendet werden.

Das Bild, das als Maske verwendet wird, wird durch die Eigenschaften {{cssxref("mask-image")}} oder {{cssxref("mask-border-source")}} angegeben. Die angegebene Maske kann ein {{cssxref("image")}}, ein {{cssxref("gradient")}} oder ein SVG-{{SVGElement("mask")}}-Element sein. Die Maske kann ähnlich wie [Hintergrund- und Rahmenbilder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) skaliert und positioniert werden.

Das Abschneiden und Maskieren in CSS verhält sich genauso wie bei SVG: Zuerst wird das Element ohne Filtereffekte, Maskierung, Abschneiden und Opazität gestaltet. Dann werden die Effekte in folgender Reihenfolge auf das Element angewendet: [Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects), Abschneiden, Maskieren und Opazität.

Während Maskierung mehr Kontrolle und Optionen bietet, kann das Abschneiden besser performen, wenn nur eine einfache Form benötigt wird - sie sind einfacher zu interpolieren.

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

- [Einführung in das CSS-Abschneiden](/de/docs/Web/CSS/CSS_masking/Clipping)
  - : Einführung in das Abschneiden in CSS, einschließlich der `clip-path`-Eigenschaft mit Beispielen.

- [Einführung in das CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
  - : Einführung in das Maskieren in CSS, die verschiedenen Typen von Maskenbildern und die Effekte von Leuchtdichte und Alphatransparenz bei der Maskierung.

- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
  - : Einführung in Maskenebenen und wie man mehrere Maskenbilder deklariert.

- [CSS-Maskeneigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
  - : Eine Erkundung des CSS-Maskierens und der `mask`-Kurzformkomponenteneigenschaften mit Erklärungen und Beispielen.

## Verwandte Konzepte

- [`<coord-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#values)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}
- {{cssxref("&lt;url&gt;")}}

- [CSS-Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
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
  - [`<repeat-style>`](/de/docs/Web/CSS/Reference/Properties/background-repeat#values) Datentyp

- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) Modul
  - {{cssxref("&lt;basic-shape&gt;")}} Datentyp
  - {{cssxref("basic-shape/polygon","polygon()")}} Funktion
  - [`<shape-box>`](/de/docs/Web/CSS/Reference/Properties/shape-outside#shape-box) Datentyp

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("background-clip")}}
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul
- [SVG-Tutorial: Clipping und Masking](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking)
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
- [PWA-Symbolmaskierung](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking)
