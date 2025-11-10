---
title: CSS-Boxmodell
short-title: Box model
slug: Web/CSS/Guides/Box_model
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Boxmodell**-Modul definiert die `margin`- und `padding`-Eigenschaften, welche zusammen mit der [Höhe](/de/docs/Web/CSS/Guides/Box_sizing), der [Breite](/de/docs/Web/CSS/Guides/Box_sizing) und den [Rand-Eigenschaften](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) das CSS-[Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction) bilden.

Jedes sichtbare Element auf einer Webseite ist ein Kasten, der gemäß dem [visuellen Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model) angeordnet ist. CSS-Eigenschaften definieren ihre Größe, Position und Stapelungsebene, wobei die Boxmodelleigenschaften (und andere) die extrinsische Größe jedes Kastens und den Raum um sie herum bestimmen.

Jeder Kasten hat einen rechteckigen Inhaltsbereich, innerhalb dessen jeglicher Text, Bilder und andere Inhalte angezeigt werden. Der Inhalt kann von einem `padding`, einem `border` und einem `margin` auf einer oder mehreren Seiten umgeben sein. Das Padding umgibt den Inhalt, der Rand umgibt das Padding und der Rand sitzt außerhalb des Randes. Das Boxmodell beschreibt, wie diese Merkmale — der Inhalt, das Padding, der Rand und der Margin — zusammenarbeiten, um einen Kasten zu erstellen, wie er von CSS angezeigt wird.

![Die Komponenten des CSS-Boxmodells](boxmodel.png)

Das CSS-Boxmodell-Modul definiert physische (oder "seitenrelative") Eigenschaften wie `margin-top` und `padding-top`. Flussrelative Eigenschaften wie `margin-block-start` und `margin-inline-start` (die sich auf die Schreibrichtung beziehen) sind in [Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) definiert. Das Boxmodell-Modul wird durch das [CSS-Box-Size-Modul](/de/docs/Web/CSS/Guides/Box_sizing) erweitert, das den Wert der {{Glossary("intrinsic_size", "intrinsischen Größe")}} einführt und die Definition des {{Glossary("aspect_ratio", "Seitenverhältnisses")}} für Elemente ermöglicht, die in mindestens einer Dimension automatisch angepasst werden.

## Referenz

### Eigenschaften

- {{cssxref("margin")}} Kurzschreibweise
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-top")}}
- {{cssxref("margin-trim")}}
- {{cssxref("padding")}} Kurzschreibweise
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

- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
  - : Erläutert eines der grundlegenden Konzepte von CSS: das Boxmodell. Dieses Modell definiert, wie CSS Elemente anordnet, einschließlich ihrer Inhalts-, Padding-, Rand- und Margin-Bereiche.

- [Beherrschen der Margen-Kollapsierung](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - : Manchmal werden zwei angrenzende Margen zu einer zusammengeführt. Dieser Artikel beschreibt die Regeln, die bestimmen, wann und warum dies geschieht und wie man dies steuert.

- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - : Erläutert das visuelle Formatierungsmodell.

## Verwandte Konzepte

- [CSS Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
  - {{cssxref("border-width")}} Kurzschreibweise
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
- [CSS Box-Size-Modul](/de/docs/Web/CSS/Guides/Box_sizing)
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
  - {{CSSxRef("overflow")}} Kurzschreibweise
  - {{CSSxRef("overflow-block")}}
  - {{CSSxRef("overflow-clip-margin")}}
  - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-x")}}
  - {{CSSxRef("overflow-y")}}
  - {{CSSxRef("text-overflow")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Display](/de/docs/Web/CSS/Guides/Display) Modul
- [CSS Flexlayout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS Tabelle](/de/docs/Web/CSS/Guides/Table) Modul
- [CSS Positioniertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
- [CSS Fragmentierung](/de/docs/Web/CSS/Guides/Fragmentation) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
