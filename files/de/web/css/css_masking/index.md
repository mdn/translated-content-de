---
title: CSS-Maskierung
slug: Web/CSS/CSS_masking
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **CSS-Maskierungsmodul** definiert Maskierung und Clipping – zwei verschiedene grafische Operationen, die dazu verwendet werden, Teile von visuellen Elementen ganz oder teilweise zu verbergen.

**Clipping** beinhaltet die Definition eines geschlossenen Vektorpfads, einer Form oder eines Polygons als **Clipping-Pfad**. Alles innerhalb des Clipping-Pfads bleibt sichtbar, während alles außerhalb verborgen oder "ausgeschnitten" wird. Die {{cssxref("clip-path")}}-Eigenschaft spezifiziert eine {{cssxref("&lt;basic-shape&gt;")}} oder verweist auf ein SVG-{{SVGElement("clipPath")}}-Element, das als Clipping-Pfad verwendet wird.

Die CSS-**Maskierungs**eigenschaften werden verwendet, um eine Maske auf ein Element oder dessen Rahmen anzuwenden. Ein grafisches Objekt wird dann auf den Hintergrund oder den Rahmen gemalt und maskiert Teile des Elements oder seines Rahmens vollständig oder teilweise, je nach Deckkraft oder Leuchtkraft der Maske.

Das Bild, das als Maske verwendet wird, wird durch die Eigenschaften {{cssxref("mask-image")}} oder {{cssxref("mask-border-source")}} spezifiziert. Die angegebene Maske kann ein {{cssxref("image")}}, eine {{cssxref("gradient")}} oder ein SVG-{{SVGElement("mask")}}-Element sein. Die Maske kann ähnlich wie [Hintergrund- und Rahmenbilder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) skaliert und positioniert werden.

Das Verhalten von Clipping und Maskierung in CSS ist identisch wie in SVG: Zuerst wird das Element ohne Filtereffekte, Maskierung, Clipping und Deckkraft gestylt. Danach werden alle Effekte in folgender Reihenfolge auf das Element angewendet: [Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects), Clipping, Maskierung und Deckkraft.

Während die Maskierung mehr Kontrolle und Optionen bietet, kann das Clipping leistungsfähiger sein, wenn nur eine Grundform benötigt wird – sie sind einfacher zu interpolieren.

## Referenz

### Eigenschaften

- {{cssxref("clip")}} {{deprecated_inline}}
- {{cssxref("clip-path")}}
- {{cssxref("clip-rule")}}
- {{cssxref("mask")}} shorthand
- {{cssxref("mask-clip")}}
- {{cssxref("mask-composite")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-mode")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-type")}}
- {{cssxref("mask-border")}} shorthand
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

- [Einführung in das CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
  - : Einführung in das Clipping in CSS, einschließlich der `clip-path`-Eigenschaft mit Beispielen.

- [Einführung in das CSS-Maskieren](/de/docs/Web/CSS/CSS_masking/Masking)
  - : Einführung in die Maskierung in CSS, die verschiedenen Maskenbildtypen und die Auswirkungen von Leuchtkraft und Alphatransparenz bei der Maskierung.

- [Deklaration mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
  - : Einführung in Maskenschichten und wie mehrere Maskenbilder deklariert werden.

- [CSS-Maskeneigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
  - : Eine Erkundung der CSS-Maskierung und der `mask`-Shorthand-Komponenteneigenschaften mit Erklärungen und Beispielen.

## Verwandte Konzepte

- [`<coord-box>`](/de/docs/Web/CSS/box-edge#values)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}
- {{cssxref("&lt;url&gt;")}}

- [CSS-Hintergrund- und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
  - {{cssxref("background")}} shorthand
  - {{cssxref("background-origin")}}
  - {{cssxref("background-position")}}
  - {{cssxref("background-repeat")}}
  - {{cssxref("background-size")}}
  - {{cssxref("border-image")}} shorthand
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
- [SVG-Tutorial: Clipping und Maskierung](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking)
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
- [PWA-Icon-Maskierung](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking)
