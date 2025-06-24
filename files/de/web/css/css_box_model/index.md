---
title: CSS-Boxmodell
slug: Web/CSS/CSS_box_model
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das **CSS-Box Modell**-Modul definiert die `margin`- und `padding`-Eigenschaften, die zusammen mit der [Höhe](/de/docs/Web/CSS/CSS_box_sizing), [Breite](/de/docs/Web/CSS/CSS_box_sizing) und den [Randeigenschaften](/de/docs/Web/CSS/CSS_backgrounds_and_borders) das CSS-[Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) bilden.

Jedes sichtbare Element auf einer Webseite ist eine Box, die gemäß dem [visuellen Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model) angeordnet ist. CSS-Eigenschaften definieren deren Größe, Position und Stapelungsebene, wobei die Boxmodell-Eigenschaften (und andere) die extrinsische Größe jeder Box und den Raum um sie herum definieren.

Jede Box hat einen rechteckigen Inhaltsbereich, innerhalb dessen Text, Bilder und andere Inhalte angezeigt werden. Der Inhalt kann an einer oder mehreren Seiten von `padding`, einem `border` und einem `margin` umgeben sein. Das `padding` ist um den Inhalt herum, der `border` ist um das `padding` herum und der `margin` sitzt außerhalb des `border`. Das Boxmodell beschreibt, wie diese Merkmale - der Inhalt, das `padding`, der `border` und der `margin` - zusammenarbeiten, um eine Box zu erstellen, wie sie von CSS angezeigt wird.

![Die Komponenten des CSS-Boxmodells](boxmodel.png)

Das CSS-Boxmodellmodul definiert physische (oder "seitenrelative") Eigenschaften wie `margin-top` und `padding-top`. Fluss-relative Eigenschaften wie `margin-block-start` und `margin-inline-start` (die sich auf die Textausrichtung beziehen) werden in [Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) definiert. Das Boxmodellmodul wird durch das [CSS-Box-Größenmodul](/de/docs/Web/CSS/CSS_box_sizing) erweitert, das den {{Glossary("intrinsic_size", "intrinsischen Größenwert")}} einführt und es ermöglicht, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} für Elemente zu definieren, die in mindestens einer Dimension automatisch dimensioniert sind.

## Referenz

### Eigenschaften

- {{cssxref("margin")}} Kurzschrift
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-top")}}
- {{cssxref("margin-trim")}}
- {{cssxref("padding")}} Kurzschrift
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-top")}}

### Datentypen

- [`<box-edge>`](/de/docs/Web/CSS/box-edge)
  - [`<visual-box>`](/de/docs/Web/CSS/box-edge#visual-box)
  - [`<layout-box>`](/de/docs/Web/CSS/box-edge#layout-box)
  - [`<paint-box>`](/de/docs/Web/CSS/box-edge#paint-box)
  - [`<coord-box>`](/de/docs/Web/CSS/box-edge#coord-box)
  - [`<geometry-box>`](/de/docs/Web/CSS/box-edge#geometry-box)

## Leitfäden

- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

  - : Erklärt eines der grundlegenden Konzepte von CSS: das Boxmodell. Dieses Modell definiert, wie CSS Elemente einschließlich ihrer Inhalts-, `padding`-, `border`- und `margin`-Bereiche anordnet.

- [Meistern des Margin-Zusammenfalls](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)

  - : Manchmal werden zwei benachbarte Ränder zu einem zusammengefasst. Dieser Artikel beschreibt die Regeln, die festlegen, wann und warum dies geschieht und wie man es steuert.

- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - : Erklärt das visuelle Formatierungsmodell.

## Verwandte Konzepte

- [CSS-Hintergründe und -Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
  - {{cssxref("border-width")}} Kurzschrift
  - {{cssxref("border-bottom-width")}}
  - {{cssxref("border-left-width")}}
  - {{cssxref("border-right-width")}}
  - {{cssxref("border-top-width")}}
- [CSS Logische Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
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
- [CSS-Box-Größen](/de/docs/Web/CSS/CSS_box_sizing) Modul
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
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
  - {{CSSxRef("overflow")}} Kurzschrift
  - {{CSSxRef("overflow-block")}}
  - {{CSSxRef("overflow-clip-margin")}}
  - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-x")}}
  - {{CSSxRef("overflow-y")}}
  - {{CSSxRef("text-overflow")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Display](/de/docs/Web/CSS/CSS_display) Modul
- [CSS-Flexlayout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Gridlayout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS-Tabelle](/de/docs/Web/CSS/CSS_table) Modul
- [CSS-Positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
- [CSS-Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Modul
- [Verstehen von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
