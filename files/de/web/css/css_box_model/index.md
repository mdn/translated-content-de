---
title: CSS-Boxmodell
slug: Web/CSS/CSS_box_model
l10n:
  sourceCommit: aeb74a6e798af00abd2c759939adea1029e94473
---

{{CSSRef}}

Das **CSS-Boxmodell**-Modul definiert die `margin`- und `padding`-Eigenschaften, die zusammen mit der [Höhe](/de/docs/Web/CSS/CSS_box_sizing), der [Breite](/de/docs/Web/CSS/CSS_box_sizing) und den [Rahmeneigenschaften](/de/docs/Web/CSS/CSS_backgrounds_and_borders) das CSS-[Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) bilden.

Jedes sichtbare Element auf einer Webseite ist ein Kasten, der nach dem [visuellen Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model) angeordnet ist. CSS-Eigenschaften definieren deren Größe, Position und Stapelreihenfolge, wobei die Boxmodell-Eigenschaften (und andere) die äußere Größe jedes Kastens und den Raum um sie herum definieren.

Jeder Kasten hat einen rechteckigen Inhaltsbereich, innerhalb dessen Text, Bilder und andere Inhalte angezeigt werden. Der Inhalt kann von Abständen, einem Rahmen und einem Rand an einer oder mehreren Seiten umgeben sein. Der Abstand umgibt den Inhalt, der Rahmen umgibt den Abstand, und der Rand sitzt außerhalb des Rahmens. Das Boxmodell beschreibt, wie diese Merkmale – der Inhalt, der Abstand, der Rahmen und der Rand – zusammenarbeiten, um einen Kasten zu erstellen, der durch CSS angezeigt wird.

![Die Komponenten des CSS-Boxmodells](boxmodel.png)

Das CSS-Boxmodell-Modul definiert physische (oder "seitenbezogene") Eigenschaften wie `margin-top` und `padding-top`. Flussrelative Eigenschaften wie `margin-block-start` und `margin-inline-start` (die sich auf die Textausrichtung beziehen) sind in den [logischen Eigenschaften und Werten](/de/docs/Web/CSS/CSS_logical_properties_and_values) definiert. Das Boxmodell-Modul wird durch das [CSS-Boxsizing-Modul](/de/docs/Web/CSS/CSS_box_sizing) erweitert, das den {{Glossary("intrinsic_size", "intrinsischen Größenwert")}} einführt und das Definieren eines {{Glossary("aspect_ratio", "Seitenverhältnisses")}} für Elemente ermöglicht, die in mindestens einer Dimension automatisch skaliert werden.

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

- [`<box>`](/de/docs/Web/CSS/box-edge)
  - [`<visual-box>`](/de/docs/Web/CSS/box-edge#visual-box)
  - [`<layout-box>`](/de/docs/Web/CSS/box-edge#layout-box)
  - [`<paint-box>`](/de/docs/Web/CSS/box-edge#paint-box)
  - [`<coord-box>`](/de/docs/Web/CSS/box-edge#coord-box)
  - [`<geometry-box>`](/de/docs/Web/CSS/box-edge#geometry-box)

## Leitfäden

- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

  - : Erklärt eines der grundlegenden Konzepte von CSS: das Boxmodell. Dieses Modell definiert, wie CSS Elemente anordnet, einschließlich ihrer Inhalts-, Abstand-, Rahmen- und Randbereiche.

- [Beherrschung von Randüberlappungen](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)

  - : Manchmal werden zwei angrenzende Ränder zu einem einzigen zusammengelegt. Dieser Artikel beschreibt die Regeln, die festlegen, wann und warum dies geschieht und wie es gesteuert werden kann.

- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)

  - : Erklärt das visuelle Formatierungsmodell.

## Verwandte Konzepte

- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
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
- [CSS Boxsizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
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

- [CSS Anzeige](/de/docs/Web/CSS/CSS_display) Modul
- [CSS Flex-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS Tabelle](/de/docs/Web/CSS/CSS_table) Modul
- [CSS Positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
- [CSS Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Modul
- [Verstehen von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
