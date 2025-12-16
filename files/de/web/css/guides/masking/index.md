---
title: CSS-Maskierung
short-title: Masking
slug: Web/CSS/Guides/Masking
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das **CSS-Maskierungs**-Modul definiert Maskierungs- und Zuschneideoperationen, zwei unterschiedliche grafische Verfahren, die verwendet werden, um Teile visueller Elemente teilweise oder vollständig zu verbergen.

**Zuschneiden** beinhaltet das Definieren eines geschlossenen Vektorpfads, einer Form oder eines Polygons als **Zuschneidepfad**. Alles innerhalb des Zuschneidepfadbereichs bleibt sichtbar, während alles außerhalb ausgeblendet oder „ausgeschnitten“ wird. Die {{cssxref("clip-path")}}-Eigenschaft spezifiziert eine {{cssxref("basic-shape")}} oder referenziert ein SVG-Element {{SVGElement("clipPath")}}, das als Zuschneidepfad verwendet werden soll.

CSS **Maskierungseigenschaften** werden verwendet, um einem Element oder seinem Rand eine Maske zuzuweisen. Ein grafisches Objekt wird dann auf den Hintergrund oder den Rand gemalt, wodurch Teile des Elements oder seines Randes je nach Deckkraft oder Luminanz der Maske vollständig oder teilweise maskiert werden.

Das als Maske verwendete Bild wird durch die Eigenschaften {{cssxref("mask-image")}} oder {{cssxref("mask-border-source")}} spezifiziert. Die angegebene Maske kann ein {{cssxref("image")}}, ein {{cssxref("gradient")}} oder ein SVG-Element {{SVGElement("mask")}} sein. Die Maske kann ähnlich wie [Hintergrund- und Randbilder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) dimensioniert und positioniert werden.

Zuschneiden und Maskieren in CSS verhalten sich genauso wie in SVG: Zuerst wird das Element ohne Filtereffekte, Maskierung, Zuschneiden und Deckkraft gestylt. Dann werden alle Effekte in folgender Reihenfolge auf das Element angewendet: [Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects), Zuschneiden, Maskieren und Deckkraft.

Während Maskierung mehr Kontrolle und Optionen bietet, kann Zuschneiden eine bessere Leistung erbringen, wenn nur eine einfache Form benötigt wird - sie sind einfacher zu interpolieren.

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

- [Einführung in das CSS-Zuschneiden](/de/docs/Web/CSS/Guides/Masking/Clipping)
  - : Einführung in das Zuschneiden in CSS, einschließlich der `clip-path`-Eigenschaft mit Beispielen.

- [Einführung in das CSS-Maskieren](/de/docs/Web/CSS/Guides/Masking/Introduction)
  - : Einführung in das Maskieren in CSS, die verschiedenen Maskenbildtypen und die Effekte von Luminanz und Alpha-Transparenz beim Maskieren.

- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
  - : Einführung in Maskenschichten und wie man mehrere Maskenbilder deklariert.

- [CSS-Maskeneigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
  - : Eine Erkundung der CSS-Maskierung und der `mask`-Kurzformkomponenteneigenschaften, mit Erklärungen und Beispielen.

## Verwandte Konzepte

- [`<coord-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#values)
- {{cssxref("image")}}
- {{cssxref("&lt;position&gt;")}}
- {{cssxref("&lt;url&gt;")}}

- [CSS-Hintergründe und -Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
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

- [CSS-Shapes](/de/docs/Web/CSS/Guides/Shapes) Modul
  - {{cssxref("basic-shape")}} Datentyp
  - {{cssxref("basic-shape/polygon","polygon()")}} Funktion
  - [`<shape-box>`](/de/docs/Web/CSS/Reference/Properties/shape-outside#shape-box) Datentyp

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("background-clip")}}
- [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects) Modul
- [SVG-Tutorial: Zuschnitt und Maskierung](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking)
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
- [PWA Icon Masking](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking)
