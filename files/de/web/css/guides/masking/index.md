---
title: CSS-Maskierung
short-title: Masking
slug: Web/CSS/Guides/Masking
l10n:
  sourceCommit: 6ad108adad746bd7ed79b5b32d8d3e05e5ec685a
---

Das **CSS-Maskierungsmodul** definiert Maskierung und Zuschnitt, zwei unterschiedliche grafische Operationen, die verwendet werden, um Teile von visuellen Elementen teilweise oder vollständig zu verbergen.

**Zuschnitt** beinhaltet das Definieren eines geschlossenen Vektorpfades, einer Form oder eines Polygons als **Zuschnittspfad**. Alles innerhalb des Zuschnittspfadbereichs bleibt sichtbar, während alles außerhalb verborgen wird oder "ausgeschnitten" ist. Die {{cssxref("clip-path")}}-Eigenschaft gibt eine {{cssxref("basic-shape")}} an oder verweist auf ein SVG-{{SVGElement("clipPath")}}-Element, das als Zuschnittspfad verwendet werden soll.

CSS-**Maskierungseigenschaften** werden verwendet, um einem Element oder dessen Rahmen eine Maske hinzuzufügen. Ein grafisches Objekt wird dann auf den Hintergrund oder Rahmen gemalt, wobei je nach Deckkraft oder Leuchtkraft der Maske Teile des Elements oder dessen Rahmen vollständig oder teilweise maskiert werden.

Das als Maske verwendete Bild wird durch die Eigenschaften {{cssxref("mask-image")}} oder {{cssxref("mask-border-source")}} angegeben. Die angegebene Maske kann ein {{cssxref("image")}}, ein {{cssxref("gradient")}}, oder ein SVG-{{SVGElement("mask")}}-Element sein. Die Maske kann in ähnlicher Weise wie [Hintergrund- und Rahmenbilder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) skaliert und positioniert werden.

Zuschnitt und Maskierung in CSS verhalten sich genauso wie bei SVG: Zuerst wird das Element ohne Filtereffekte, Maskierung, Zuschnitt und Deckkraft gestylt. Dann werden alle Effekte in der folgenden Reihenfolge auf das Element angewendet: [Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects), Zuschnitt, Maskierung und Deckkraft.

Während Maskierung mehr Kontrolle und Optionen bietet, kann Zuschnitt besser funktionieren, wenn nur eine Grundform erforderlich ist — sie sind einfacher zu interpolieren.

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

- [Einführung in die CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
  - : Einführung in die Maskierung in CSS, die verschiedenen Maskenbildtypen und die Auswirkungen von Leuchtkraft und Alphatransparenz in der Maskierung.

- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
  - : Einführung in Maskenschichten und wie mehrere Maskenbilder deklariert werden.

- [CSS-Maskeneigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
  - : Eine Erkundung von CSS-Maskierung und der `mask`-Kurzform-Eigenschaften, mit Erklärungen und Beispielen.

## Verwandte Konzepte

- [`<coord-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#values)
- {{cssxref("image")}}
- {{cssxref("&lt;position&gt;")}}
- {{cssxref("url_value", "&lt;url&gt;")}}

- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
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

- [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) Modul
  - {{cssxref("basic-shape")}} Datentyp
  - {{cssxref("basic-shape/polygon","polygon()")}} Funktion
  - [`<shape-box>`](/de/docs/Web/CSS/Reference/Properties/shape-outside#shape-box) Datentyp

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("background-clip")}}
- [CSS Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects) Modul
- [SVG-Tutorial: Zuschneiden und Maskieren](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking)
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
- [PWA-Icon-Maskierung](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking)
