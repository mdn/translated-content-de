---
title: CSS Box-Modell
short-title: Box model
slug: Web/CSS/Guides/Box_model
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Das **CSS Box-Modell** Modul definiert die `margin` und `padding` Eigenschaften, die zusammen mit der [height](/de/docs/Web/CSS/Guides/Box_sizing), [width](/de/docs/Web/CSS/Guides/Box_sizing) und den [border Eigenschaften](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) das CSS [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction) bilden.

Jedes sichtbare Element auf einer Webseite ist ein Kasten, der gemäß dem [visuellen Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model) angeordnet wird. CSS-Eigenschaften definieren ihre Größe, Position und Stapelreihenfolge, wobei die Eigenschaften des Box-Modells (und andere) die äußere Größe jedes Kastens und den Raum um sie herum definieren.

Jeder Kasten hat einen rechteckigen Inhaltsbereich, in dem Text, Bilder und andere Inhalte angezeigt werden. Der Inhalt kann von Polsterung (=padding), einem Rand (=border) und einem Außenabstand (=margin) umgeben sein, auf einer oder mehreren Seiten. Die Polsterung ist um den Inhalt herum, der Rand ist um die Polsterung herum und der Außenabstand sitzt außerhalb des Randes. Das Box-Modell beschreibt, wie diese Elemente — der Inhalt, die Polsterung, der Rand und der Außenabstand — zusammenarbeiten, um einen Kasten zu erstellen, wie er von CSS angezeigt wird.

![Die Komponenten des CSS Box-Modells](boxmodel.png)

Das CSS Box-Modell Modul definiert physische (oder "seitenbezogene") Eigenschaften wie `margin-top` und `padding-top`. Flussbezogene Eigenschaften wie `margin-block-start` und `margin-inline-start` (die sich auf die Textrichtung beziehen) sind in [Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) definiert. Das Box-Modell Modul wird durch das [CSS Box-Sizing Modul](/de/docs/Web/CSS/Guides/Box_sizing) erweitert, welches den {{Glossary("intrinsic_size", "inneren Größenwert")}} einführt und das Definieren von {{Glossary("aspect_ratio", "Seitenverhältnissen")}} für Elemente ermöglicht, die in mindestens einer Dimension automatisch angepasst werden.

## Referenz

### Eigenschaften

- {{cssxref("margin")}} Kurzform
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-top")}}
- {{cssxref("margin-trim")}}
- {{cssxref("padding")}} Kurzform
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-top")}}

### Datentypen

- [`<box-edge>`](/de/docs/Web/CSS/Reference/Values/box-edge)
  - [`<visual-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#visual-box)
  - [`<layout-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#layout-box)
  - [`<paint-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#paint-box)
  - [`<coord-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#coord-box)
  - [`<geometry-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#geometry-box)

## Leitfäden

- [Einführung in das CSS Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
  - : Erklärt eines der grundlegenden Konzepte von CSS: das Box-Modell. Dieses Modell definiert, wie CSS Elemente anordnet, einschließlich ihrer Inhalts-, Polsterungs-, Rand- und Außenabstandsbereiche.

- [Meistern der Margenkollaps](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - : Manchmal werden zwei aneinandergrenzende Außenabstände zu einem zusammengefasst. Dieser Artikel beschreibt die Regeln, die bestimmen, wann und warum dies geschieht und wie man es steuert.

- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - : Erklärt das visuelle Formatierungsmodell.

## Verwandte Konzepte

- [CSS Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
  - {{cssxref("border-width")}} Kurzform
  - {{cssxref("border-bottom-width")}}
  - {{cssxref("border-left-width")}}
  - {{cssxref("border-right-width")}}
  - {{cssxref("border-top-width")}}
- [CSS logische Eigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul
  - {{CSSxRef("block-size")}}
  - {{CSSxRef("inline-size")}}
  - {{CSSxRef("max-block-size")}}
  - {{CSSxRef("max-inline-size")}}
  - {{CSSxRef("min-block-size")}}
  - {{CSSxRef("min-inline-size")}}
  - {{CSSxRef("margin-block")}}
  - {{CSSxRef("margin-block-end")}}
  - {{CSSxRef("margin-block-start")}}
  - {{CSSxRef("margin-inline")}}
  - {{CSSxRef("margin-inline-end")}}
  - {{CSSxRef("margin-inline-start")}}
  - {{CSSxRef("padding-block")}}
  - {{CSSxRef("padding-block-end")}}
  - {{CSSxRef("padding-block-start")}}
  - {{CSSxRef("padding-inline")}}
  - {{CSSxRef("padding-inline-end")}}
  - {{CSSxRef("padding-inline-start")}}
  - {{CSSxRef("border-block")}}
  - {{CSSxRef("border-block-end")}}
  - {{CSSxRef("border-block-end-width")}}
  - {{CSSxRef("border-block-start")}}
  - {{CSSxRef("border-block-start-width")}}
  - {{CSSxRef("border-block-style")}}
  - {{CSSxRef("border-block-width")}}
  - {{CSSxRef("border-inline")}}
  - {{CSSxRef("border-inline-end")}}
  - {{CSSxRef("border-inline-end-width")}}
  - {{CSSxRef("border-inline-start")}}
  - {{CSSxRef("border-inline-start-width")}}
  - {{CSSxRef("border-inline-width")}}
- [CSS Box-Sizing](/de/docs/Web/CSS/Guides/Box_sizing) Modul
  - {{cssxref("aspect-ratio")}}
  - {{cssxref("box-sizing")}}
  - {{cssxref("contain-intrinsic-block-size")}}
  - {{cssxref("contain-intrinsic-height")}}
  - {{cssxref("contain-intrinsic-inline-size")}}
  - {{cssxref("contain-intrinsic-size")}}
  - {{cssxref("contain-intrinsic-width")}}
  - {{cssxref("height")}}
  - {{cssxref("max-height")}}
  - {{cssxref("max-width")}}
  - {{cssxref("min-height")}}
  - {{cssxref("min-width")}}
  - {{cssxref("width")}}
- [CSS Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
  - {{CSSxRef("overflow")}} Kurzform
  - {{CSSxRef("overflow-block")}}
  - {{CSSxRef("overflow-clip-margin")}}
  - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-x")}}
  - {{CSSxRef("overflow-y")}}
  - {{CSSxRef("text-overflow")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Anzeige](/de/docs/Web/CSS/Guides/Display) Modul
- [CSS Flex Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS Rasterlayout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS Tabelle](/de/docs/Web/CSS/Guides/Table) Modul
- [CSS positioniertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
- [CSS Fragmentierung](/de/docs/Web/CSS/Guides/Fragmentation) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
