---
title: CSS-Masking
slug: Web/CSS/CSS_masking
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

Das **CSS-Masking**-Modul definiert Maskierung und Beschneidung, zwei unterschiedliche grafische Operationen, die verwendet werden, um Teile von visuellen Elementen teilweise oder vollständig zu verbergen.

**Beschneidung** beinhaltet das Definieren eines geschlossenen Vektorpfads, einer Form oder eines Polygons als **Beschnittpfad**. Alles innerhalb des Bereichs des Beschnittpfads bleibt sichtbar, während alles außerhalb verborgen oder "ausgeblendet" wird. Die {{cssxref("clip-path")}}-Eigenschaft spezifiziert eine {{cssxref("&lt;basic-shape&gt;")}} oder referenziert ein SVG-{{SVGElement("clipPath")}}-Element, das als Beschnittpfad verwendet werden soll.

CSS-**Maskierungs**-Eigenschaften werden verwendet, um eine Maske auf ein Element oder dessen Rand anzuwenden. Ein grafisches Objekt wird dann vollständig oder teilweise auf den Hintergrund oder Rand gemalt, wodurch Teile des Elements oder seine Ränder je nach Deckkraft oder Luminanz der Maske ausgeblendet werden.

Das Bild, das als Maske verwendet wird, wird durch die {{cssxref("mask-image")}}- oder {{cssxref("mask-border-source")}}-Eigenschaften festgelegt. Die angegebene Maske kann ein {{cssxref("image")}}, ein {{cssxref("gradient")}} oder ein SVG-{{SVGElement("mask")}}-Element sein. Die Maske kann ähnlich wie [Hintergrund- und Randbilder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) skaliert und positioniert werden.

Beschneidung und Maskierung in CSS verhalten sich genauso wie bei SVG: Zuerst wird das Element ohne Filtereffekte, Maskierung, Beschneidung und Deckkraft gestylt. Dann werden dem Element die Effekte in folgender Reihenfolge angewendet: [Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects), Beschneidung, Maskierung und Deckkraft.

Während die Maskierung mehr Kontrolle und Optionen bietet, kann die Beschneidung bessere Leistung bieten, wenn nur eine einfache Form benötigt wird — sie sind einfacher zu interpolieren.

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

- [`<geometry-box>`](/de/docs/Web/CSS/clip-path#geometry-box)

### Funktionen

- {{cssxref("basic-shape/rect","rect()")}} Funktion

### Schnittstellen

- [`SVGClipPathElement`](/de/docs/Web/API/SVGClipPathElement)
- [`SVGMaskElement`](/de/docs/Web/API/SVGMaskElement)
  - [`SVGMaskElement.maskContentUnits`](/de/docs/Web/API/SVGMaskElement/maskContentUnits)

## Leitfäden

- [Einführung in CSS-Beschneidung](/de/docs/Web/CSS/CSS_masking/Clipping)
  - : Einführung in die Beschneidung in CSS, inklusive der `clip-path`-Eigenschaft mit Beispielen.

- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
  - : Einführung in die Maskierung in CSS, die verschiedenen Maskenbildtypen und die Effekte von Luminanz und Alpha-Transparenz in der Maskierung.

- [Deklaration mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
  - : Einführung in Maskenschichten und wie man mehrere Maskenbilder deklariert.

- [CSS-Masken-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
  - : Eine Erkundung von CSS-Maskierung und den `mask`-Kurzformkomponenten-Eigenschaften, mit Erläuterungen und Beispielen.

## Verwandte Konzepte

- [`<coord-box>`](/de/docs/Web/CSS/box-edge#values)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}
- {{cssxref("&lt;url&gt;")}}

- [CSS-Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders)-Modul
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
- [SVG-Tutorial: Beschneidung und Maskierung](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking)
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
- [PWA-Symbolmaskierung](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking)
