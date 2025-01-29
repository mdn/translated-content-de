---
title: CSS-Boxmodell
slug: Web/CSS/CSS_box_model
l10n:
  sourceCommit: dcf5d5a933e9486d2e9f4af9aa27aafa7df6ac77
---

{{CSSRef}}

Das **CSS-Boxmodell**-Modul definiert die `margin`- und `padding`-Eigenschaften, die zusammen mit der [Höhe](/de/docs/Web/CSS/CSS_box_sizing), der [Breite](/de/docs/Web/CSS/CSS_box_sizing) und den [Randeigenschaften](/de/docs/Web/CSS/CSS_backgrounds_and_borders) das CSS-[Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) bilden.

Jedes sichtbare Element auf einer Webseite ist eine Box, die gemäß dem [visuellen Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model) angeordnet ist. CSS-Eigenschaften definieren ihre Größe, Position und Stapelreihenfolge, wobei die Boxmodelleigenschaften (und andere) die extrinsische Größe jeder Box sowie den Raum um sie herum definieren.

Jede Box hat einen rechteckigen Inhaltsbereich, in dem Text, Bilder und andere Inhalte angezeigt werden. Der Inhalt kann an einer oder mehreren Seiten von einem Innenabstand (Padding), einem Rand und einem Außenabstand (Margin) umgeben sein. Der Innenabstand umgibt den Inhalt, der Rand umgibt den Innenabstand und der Außenabstand liegt außerhalb des Randes. Das Boxmodell beschreibt, wie diese Merkmale – Inhalt, Innenabstand, Rand und Außenabstand – zusammenarbeiten, um eine Box zu bilden, wie sie von CSS angezeigt wird.

![Die Komponenten des CSS-Boxmodells](boxmodel.png)

Das CSS-Boxmodell-Modul definiert physische (oder „seitenbezogene“) Eigenschaften wie `margin-top` und `padding-top`. Flussbezogene Eigenschaften wie `margin-block-start` und `margin-inline-start` (die sich auf die Textrichtung beziehen) sind in [Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) definiert. Das Boxmodell-Modul wird durch das [CSS-Boxgrößen-Modul](/de/docs/Web/CSS/CSS_box_sizing) erweitert, welches den {{Glossary("intrinsic_size", "intrinsischen Größen")}}-Wert einführt und ermöglicht, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} für Elemente zu definieren, die in mindestens einer Dimension automatisch skaliert werden.

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

- [`<box-edge>`](/de/docs/Web/CSS/box-edge)
  - [`<visual-box>`](/de/docs/Web/CSS/box-edge#visual-box)
  - [`<layout-box>`](/de/docs/Web/CSS/box-edge#layout-box)
  - [`<paint-box>`](/de/docs/Web/CSS/box-edge#paint-box)
  - [`<coord-box>`](/de/docs/Web/CSS/box-edge#coord-box)
  - [`<geometry-box>`](/de/docs/Web/CSS/box-edge#geometry-box)

## Leitfäden

- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

  - : Erläutert eines der grundlegenden Konzepte von CSS: das Boxmodell. Dieses Modell definiert, wie CSS Elemente anordnet, einschließlich ihrer Inhalts-, Innenabstands-, Rand- und Außenabstandsbereiche.

- [Beherrschen des Margen-Zusammenbruchs](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)

  - : Manchmal werden zwei aneinandergrenzende Außenabstände zu einem zusammengeführt. Dieser Artikel beschreibt die Regeln, die bestimmen, wann und warum dies geschieht und wie es kontrolliert werden kann.

- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)

  - : Erläutert das visuelle Formatierungsmodell.

## Verwandte Konzepte

- [CSS-Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders)-Modul
  - {{cssxref("border-width")}} Kurzschreibweise
  - {{cssxref("border-bottom-width")}}
  - {{cssxref("border-left-width")}}
  - {{cssxref("border-right-width")}}
  - {{cssxref("border-top-width")}}
- [CSS Logische Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values)-Modul
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
- [CSS-Boxgrößen](/de/docs/Web/CSS/CSS_box_sizing)-Modul
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
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow)-Modul
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

- [CSS-Display](/de/docs/Web/CSS/CSS_display)-Modul
- [CSS-Flexlayout](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modul
- [CSS-Gridlayout](/de/docs/Web/CSS/CSS_grid_layout)-Modul
- [CSS-Tabelle](/de/docs/Web/CSS/CSS_table)-Modul
- [CSS-positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout)-Modul
- [CSS-Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation)-Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
