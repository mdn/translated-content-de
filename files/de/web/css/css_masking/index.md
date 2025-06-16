---
title: CSS-Masking
slug: Web/CSS/CSS_masking
l10n:
  sourceCommit: 1ed73e7c02a9afd99c86719cc850254ffe2f7661
---

{{CSSRef}}

Das **CSS-Masking**-Modul definiert Maskierung und Clipping, zwei unterschiedliche grafische Operationen, die verwendet werden, um Teile von visuellen Elementen teilweise oder vollständig zu verbergen.

**Clipping** beinhaltet das Definieren eines geschlossenen Vektorpfads, einer Form oder eines Polygons als **Clipping-Pfad**. Alles innerhalb des Clipping-Pfads bleibt sichtbar, während alles außerhalb ausgeblendet oder "ausgeschnitten" wird. Die {{cssxref("clip-path")}}-Eigenschaft gibt eine {{cssxref("&lt;basic-shape&gt;")}} an oder verweist auf ein SVG-Element {{SVGElement("clipPath")}}, das als Clipping-Pfad verwendet werden soll.

Die **Maskierung**-Eigenschaften von CSS werden verwendet, um einem Element oder seinem Rand eine Maske hinzuzufügen. Ein grafisches Objekt wird dann auf den Hintergrund oder Rand gemalt und verdeckt vollständig oder teilweise Teile des Elements oder seines Randes, abhängig von der Opazität oder Leuchtkraft der Maske.

Das Bild, das als Maske verwendet wird, wird durch die Eigenschaften {{cssxref("mask-image")}} oder {{cssxref("mask-border-source")}} festgelegt. Die angegebene Maske kann ein {{cssxref("image")}}, ein {{cssxref("gradient")}} oder ein SVG-Element {{SVGElement("mask")}} sein. Die Maske kann ähnlich wie [Hintergrund- und Randbilder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) skaliert und positioniert werden.

Das Clipping und die Maskierung in CSS verhalten sich genauso wie bei SVG: Zunächst wird das Element ohne Filtereffekte, Maskierung, Clipping und Opazität gestylt. Dann werden alle Effekte in der folgenden Reihenfolge auf das Element angewendet: [Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects), Clipping, Maskierung und Opazität.

Während die Maskierung mehr Kontrolle und Optionen bietet, kann das Clipping eine bessere Leistung bieten, wenn nur eine einfache Form erforderlich ist — sie sind leichter zu interpolieren.

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

- [Einführung in das CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)

  - : Einführung in das Clipping in CSS, einschließlich der `clip-path`-Eigenschaft mit Beispielen.

- [Einführung in die CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)

  - : Einführung in die Maskierung in CSS, die verschiedenen Maskenbildtypen und die Effekte von Leuchtkraft und Alpha-Transparenz bei der Maskierung.

- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)

  - : Einführung in Maskenebenen und wie man mehrere Maskenbilder deklariert.

## Verwandte Konzepte

- [`<coord-box>`](/de/docs/Web/CSS/box-edge#values)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}
- {{cssxref("&lt;url&gt;")}}

- [CSS-Hintergründe und -Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders)-Modul

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
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul
- [SVG-Tutorial: Clipping und Maskierung](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking)
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
- [PWA-Symbolmaskierung](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking)
