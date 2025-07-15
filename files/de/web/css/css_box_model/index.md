---
title: CSS-Box-Modell
slug: Web/CSS/CSS_box_model
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Box-Modell**-Modul definiert die `margin`- und `padding`-Eigenschaften, die zusammen mit der [Höhe](/de/docs/Web/CSS/CSS_box_sizing), der [Breite](/de/docs/Web/CSS/CSS_box_sizing) und den [Randeigenschaften](/de/docs/Web/CSS/CSS_backgrounds_and_borders) das CSS-[Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) bilden.

Jedes sichtbare Element auf einer Webseite ist ein Kasten, der gemäß dem [Visuellen Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model) angeordnet ist. CSS-Eigenschaften definieren ihre Größe, Position und Stapelreihenfolge, wobei die Box-Modell-Eigenschaften (und andere) die extrinsische Größe jedes Kastens und den Raum um sie herum definieren.

Jeder Kasten hat einen rechteckigen Inhaltsbereich, in dem jeglicher Text, Bilder und anderer Inhalt angezeigt werden. Der Inhalt kann auf einer oder mehreren Seiten von Polsterung, Rand und Außenabstand umgeben sein. Die Polsterung befindet sich um den Inhalt, der Rand befindet sich um die Polsterung, und der Außenabstand befindet sich außerhalb des Randes. Das Box-Modell beschreibt, wie diese Eigenschaften — Inhalt, Polsterung, Rand und Außenabstand — zusammenarbeiten, um einen Kasten zu formen, wie er von CSS angezeigt wird.

![Die Komponenten des CSS-Box-Modells](boxmodel.png)

Das CSS-Box-Modell-Modul definiert physische (oder "seitenbezogene") Eigenschaften wie `margin-top` und `padding-top`. Flussbezogene Eigenschaften wie `margin-block-start` und `margin-inline-start` (die mit der Textausrichtung zusammenhängen) werden in [Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) definiert. Das Box-Modell-Modul wird durch das [CSS-Box-Sizing-Modul](/de/docs/Web/CSS/CSS_box_sizing) erweitert, das den {{Glossary("intrinsic_size", "intrinsischen Größenwert")}} einführt und die Definition des {{Glossary("aspect_ratio", "Seitenverhältnisses")}} für Elemente ermöglicht, die in mindestens einer Dimension automatisch skaliert werden.

## Referenz

### Eigenschaften

- {{cssxref("margin")}} Shorthand
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-top")}}
- {{cssxref("margin-trim")}}
- {{cssxref("padding")}} Shorthand
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

- [Einführung in das CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - : Erklärt eines der grundlegenden Konzepte von CSS: das Box-Modell. Dieses Modell definiert, wie CSS Elemente einschließlich ihrer Inhalts-, Polster-, Rand- und Außenabstandsbereiche anordnet.

- [Meisterung des Zusammenfallens von Rändern](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - : Manchmal werden zwei nebeneinander liegende Ränder zu einem zusammengefasst. Dieser Artikel beschreibt die Regeln, die bestimmen, wann und warum dies geschieht, und wie man es kontrolliert.

- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - : Erklärt das visuelle Formatierungsmodell.

## Verwandte Konzepte

- [CSS-Hintergründe und -Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
  - {{cssxref("border-width")}} Shorthand
  - {{cssxref("border-bottom-width")}}
  - {{cssxref("border-left-width")}}
  - {{cssxref("border-right-width")}}
  - {{cssxref("border-top-width")}}
- [CSS-logische Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
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
- [CSS-Box-Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
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
  - {{CSSxRef("overflow")}} Shorthand
  - {{CSSxRef("overflow-block")}}
  - {{CSSxRef("overflow-clip-margin")}}
  - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-x")}}
  - {{CSSxRef("overflow-y")}}
  - {{CSSxRef("text-overflow")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Anzeige](/de/docs/Web/CSS/CSS_display) Modul
- [CSS-Flex-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Gitter-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS-Tabelle](/de/docs/Web/CSS/CSS_table) Modul
- [CSS-Positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
- [CSS-Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
