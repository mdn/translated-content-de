---
title: CSS-Maskierung
short-title: Masking
slug: Web/CSS/Guides/Masking
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Maskierungsmodul** definiert Maskierung und das Abschneiden, zwei verschiedene grafische Operationen, die verwendet werden, um Teile von visuellen Elementen teilweise oder vollständig zu verbergen.

**Abschneiden** beinhaltet die Definition eines geschlossenen Vektorwegs, einer Form oder eines Polygons als **Abschneidepfad**. Alles innerhalb des Abschneidepfadbereichs bleibt sichtbar, während alles außerhalb verborgen oder "ausgeschnitten" wird. Die Eigenschaft {{cssxref("clip-path")}} spezifiziert eine {{cssxref("&lt;basic-shape&gt;")}} oder verweist auf ein SVG-Element {{SVGElement("clipPath")}}, das als Abschneidepfad verwendet werden soll.

CSS-**Maskierungseigenschaften** werden verwendet, um einem Element oder dessen Rahmen eine Maske zuzuweisen. Ein grafisches Objekt wird dann auf den Hintergrund oder den Rahmen gemalt, wodurch Teile des Elements oder seines Rahmens je nach Deckkraft oder Leuchtkraft der Maske vollständig oder teilweise maskiert werden.

Das als Maske verwendete Bild wird durch die Eigenschaften {{cssxref("mask-image")}} oder {{cssxref("mask-border-source")}} spezifiziert. Die angegebene Maske kann ein {{cssxref("image")}}, ein {{cssxref("gradient")}} oder ein SVG-Element {{SVGElement("mask")}} sein. Die Maske kann ähnlich wie [Hintergrund- und Rahmenbilder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) skaliert und positioniert werden.

Abschneiden und Maskierung in CSS verhalten sich ebenso wie bei SVG: Zuerst wird das Element ohne Filtereffekte, Maskierung, Abschneiden und Deckkraft gestylt. Dann werden alle Effekte in der folgenden Reihenfolge auf das Element angewendet: [Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects), Abschneiden, Maskierung und Deckkraft.

Während die Maskierung mehr Kontrolle und Optionen bietet, kann das Abschneiden besser abschneiden, wenn nur eine einfache Form erforderlich ist — sie sind einfacher zu interpolieren.

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

- [Einführung in das CSS-Abschneiden](/de/docs/Web/CSS/Guides/Masking/Clipping)
  - : Einführung in das Abschneiden in CSS, einschließlich der `clip-path`-Eigenschaft mit Beispielen.

- [Einführung in die CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
  - : Einführung in die Maskierung in CSS, die verschiedenen Maskenbildformate und die Auswirkungen von Leuchtkraft und Alpha-Transparenz bei der Maskierung.

- [Deklaration mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
  - : Einführung in Maskenschichten und wie man mehrere Maskenbilder deklariert.

- [CSS-Maskeneigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
  - : Eine Erkundung der CSS-Maskierung und der `mask`-Kurzform-Komponenteneigenschaften, mit Erklärungen und Beispielen.

## Verwandte Konzepte

- [`<coord-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#values)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}
- {{cssxref("&lt;url&gt;")}}

- Modul [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)
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

- Modul [CSS-Shapes](/de/docs/Web/CSS/Guides/Shapes)
  - {{cssxref("&lt;basic-shape&gt;")}} Datentyp
  - {{cssxref("basic-shape/polygon","polygon()")}} Funktion
  - [`<shape-box>`](/de/docs/Web/CSS/Reference/Properties/shape-outside#shape-box) Datentyp

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("background-clip")}}
- Modul [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)
- [SVG-Tutorial: Abschneiden und Maskierung](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Clipping_and_masking)
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
- [PWA-Symbolmaskierung](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking)
