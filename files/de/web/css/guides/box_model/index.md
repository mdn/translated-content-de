---
title: CSS-Boxmodell
short-title: Box model
slug: Web/CSS/Guides/Box_model
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das **CSS-Boxmodell**-Modul definiert die `margin`- und `padding`-Eigenschaften, die zusammen mit der [Höhe](/de/docs/Web/CSS/Guides/Box_sizing), der [Breite](/de/docs/Web/CSS/Guides/Box_sizing) und den [Randeigenschaften](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) das CSS-[Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction) ausmachen.

Jedes sichtbare Element auf einer Webseite ist eine Box, die entsprechend dem [visuellen Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model) angeordnet ist. CSS-Eigenschaften definieren ihre Größe, Position und Stapelreihenfolge; die Eigenschaften des Boxmodells (und andere) definieren die äußere Größe jeder Box und den Raum um sie herum.

Jede Box hat einen rechteckigen Inhaltsbereich, in dem Text, Bilder und andere Inhalte angezeigt werden. Der Inhalt kann von Padding, einem Rand und einem Abstand auf einer oder mehreren Seiten umgeben sein. Das Padding befindet sich um den Inhalt herum, der Rand um das Padding und der Abstand liegt außerhalb des Randes. Das Boxmodell beschreibt, wie diese Funktionen - der Inhalt, das Padding, der Rand und der Abstand - zusammenarbeiten, um eine Box zu erstellen, die von CSS angezeigt wird.

![Die Komponenten des CSS-Boxmodells](boxmodel.png)

Das CSS-Boxmodell-Modul definiert physische (oder "seitenbezogene") Eigenschaften wie `margin-top` und `padding-top`. Flussbezogene Eigenschaften wie `margin-block-start` und `margin-inline-start` (die sich auf die Textrichtung beziehen) sind in den [logischen Eigenschaften und Werten](/de/docs/Web/CSS/Guides/Logical_properties_and_values) definiert. Das Boxmodell-Modul wird durch das [CSS-Box-Sizing-Modul](/de/docs/Web/CSS/Guides/Box_sizing) erweitert, das den {{Glossary("intrinsic_size", "intrinsischen Größenwert")}} einführt und das Definieren eines {{Glossary("aspect_ratio", "Seitenverhältnisses")}} für Elemente ermöglicht, die in mindestens einer Dimension automatisch in der Größe angepasst werden.

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

- {{cssxref("box-edge")}}
  - [`<visual-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#visual-box)
  - [`<layout-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#layout-box)
  - [`<paint-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#paint-box)
  - [`<coord-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#coord-box)
  - [`<geometry-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#geometry-box)

## Leitfäden

- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
  - : Erklärt eines der grundlegenden Konzepte von CSS: das Boxmodell. Dieses Modell definiert, wie CSS Elemente, einschließlich ihrer Inhalts-, Padding-, Rand- und Abstandbereiche, anordnet.

- [Beherrschung des Margin-Zusammenbruchs](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - : Manchmal werden zwei angrenzende Ränder zu einem zusammengefasst. Dieser Artikel beschreibt die Regeln, die bestimmen, wann und warum dies geschieht, und wie es kontrolliert werden kann.

- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - : Erklärt das visuelle Formatierungsmodell.

## Verwandte Konzepte

- [CSS-Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
  - {{cssxref("border-width")}} Kurzform
  - {{cssxref("border-bottom-width")}}
  - {{cssxref("border-left-width")}}
  - {{cssxref("border-right-width")}}
  - {{cssxref("border-top-width")}}
- [CSS-logische Eigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul
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
- [CSS-Box-Größenanpassung](/de/docs/Web/CSS/Guides/Box_sizing) Modul
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
- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
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

- [CSS-Anzeige](/de/docs/Web/CSS/Guides/Display) Modul
- [CSS-Flexlayout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS-Rasterlayout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS-Tabelle](/de/docs/Web/CSS/Guides/Table) Modul
- [CSS-Positioniertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
- [CSS-Fragmentierung](/de/docs/Web/CSS/Guides/Fragmentation) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
