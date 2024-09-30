---
title: CSS box model
slug: Web/CSS/CSS_box_model
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Das **CSS box model**-Modul definiert die `height`, `width`, `margin` und `padding` Eigenschaften, die zusammen mit den [Rahmeneigenschaften](/de/docs/Web/CSS/CSS_backgrounds_and_borders) das CSS [box model](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) bilden.

Jedes sichtbare Element auf einer Webseite ist eine Box, die entsprechend dem [visuellen Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model) angeordnet ist. CSS-Eigenschaften definieren deren Größe, Position und Stapelebene, wobei die Eigenschaften des Boxmodells (und andere) die extrinsische Größe jeder Box und den Raum um sie herum definieren.

Jede Box hat einen rechteckigen Inhaltsbereich, in dem Text, Bilder und andere Inhalte angezeigt werden. Der Inhalt kann von `padding`, einem Rahmen und einem Abstand auf einer oder mehreren Seiten umgeben sein. Das Polster umgibt den Inhalt, der Rahmen umgibt das Polster, und der Margin befindet sich außerhalb des Rahmens. Das Boxmodell beschreibt, wie diese Merkmale – der Inhalt, das Polster, der Rahmen und der Abstand – zusammenarbeiten, um eine Box zu erstellen, wie sie durch CSS angezeigt wird.

![Die Komponenten des CSS-Boxmodells](boxmodel.png)

Das CSS-Boxmodell-Modul definiert physische (oder "seitenbezogene") Eigenschaften wie `width` und `margin-top`. Flussbezogene Eigenschaften wie `inline-size` und `margin-block-start` (die sich auf die Textrichtung beziehen) sind in [logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) definiert. Das Boxmodell-Modul wird durch das [CSS box sizing Modul](/de/docs/Web/CSS/CSS_box_sizing) erweitert, das den [intrinsischen Größenwert](/de/docs/Glossary/intrinsic_size) einführt und das Definieren von [Seitenverhältnissen](/de/docs/Glossary/aspect_ratio) für Elemente ermöglicht, die in mindestens einer Dimension automaßgeschneidert sind.

## Referenz

### Eigenschaften

- {{cssxref("box-sizing")}}
- {{cssxref("height")}}
- {{cssxref("margin")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-top")}}
- {{cssxref("margin-trim")}}
- {{cssxref("max-height")}}
- {{cssxref("max-width")}}
- {{cssxref("min-height")}}
- {{cssxref("min-width")}}
- {{cssxref("padding")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-top")}}
- {{cssxref("width")}}

### Datentypen

- [`<box>`](/de/docs/Web/CSS/box-edge)
  - [`<visual-box>`](/de/docs/Web/CSS/box-edge#visual-box)
  - [`<layout-box>`](/de/docs/Web/CSS/box-edge#layout-box)
  - [`<paint-box>`](/de/docs/Web/CSS/box-edge#paint-box)
  - [`<coord-box>`](/de/docs/Web/CSS/box-edge#coord-box)
  - [`<geometry-box>`](/de/docs/Web/CSS/box-edge#geometry-box)

## Leitfäden

- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

  - : Erklärt eines der grundlegenden Konzepte von CSS: das Boxmodell. Dieses Modell beschreibt, wie CSS Elemente anordnet, einschließlich ihrer Inhalts-, Polster-, Rahmen- und Abstandsbereiche.

- [Beherrschung des Margin-Zusammenbruchs](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)

  - : Manchmal werden zwei benachbarte Margins zu einem zusammengefasst. Dieser Artikel beschreibt die Regeln, die festlegen, wann und warum dies passiert und wie man es steuert.

- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)

  - : Erklärt das visuelle Formatierungsmodell.

## Verwandte Konzepte

- [CSS Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
  - {{cssxref("border-width")}} Kurzform
  - {{cssxref("border-bottom-width")}}
  - {{cssxref("border-left-width")}}
  - {{cssxref("border-right-width")}}
  - {{cssxref("border-top-width")}}
- [CSS logische Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
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
- [CSS box sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
  - {{cssxref("aspect-ratio")}}
  - {{cssxref("contain-intrinsic-block-size")}}
  - {{cssxref("contain-intrinsic-height")}}
  - {{cssxref("contain-intrinsic-inline-size")}}
  - {{cssxref("contain-intrinsic-size")}}
  - {{cssxref("contain-intrinsic-width")}}
  - {{cssxref("max-height")}}
  - {{cssxref("max-width")}}
  - {{cssxref("min-height")}}
  - {{cssxref("min-width")}}
- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
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

- [CSS Display](/de/docs/Web/CSS/CSS_display) Modul
- [CSS Flex Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS Tabelle](/de/docs/Web/CSS/CSS_table) Modul
- [CSS Positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
- [CSS Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Modul
- [Verstehen von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
