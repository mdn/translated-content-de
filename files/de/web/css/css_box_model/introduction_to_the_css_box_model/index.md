---
title: Einführung in das grundlegende CSS-Boxmodell
slug: Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Beim Layouten eines Dokuments stellt die Rendering-Engine des Browsers jedes Element als rechteckiges Kästchen gemäß dem standardmäßigen **CSS-Basis-Boxmodell** dar. CSS bestimmt die Größe, Position und Eigenschaften (Farbe, Hintergrund, Rahmengröße usw.) dieser Kästchen.

Jedes Kästchen besteht aus vier Teilen (oder _Bereichen_), die durch ihre entsprechenden Ränder definiert sind: der _Inhaltsrand_, _Abstandsränder_, _Rahmenrand_ und der _Aussenrand_.

![CSS Boxmodell](boxmodel.png)

## Inhaltsbereich

Der **Inhaltsbereich**, begrenzt durch den Inhaltsrand, enthält den "echten" Inhalt des Elements, wie Text, ein Bild oder einen Videoplayer. Seine Dimensionen sind die _Inhaltsbreite_ (oder _content-box Breite_) und die _Inhaltshöhe_ (oder _content-box Höhe_). Häufig hat er eine Hintergrundfarbe oder ein Hintergrundbild.

Wenn die {{cssxref("box-sizing")}} Eigenschaft auf `content-box` (Standard) gesetzt ist und wenn das Element ein Blockelement ist, kann die Größe des Inhaltsbereichs explizit mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height") }}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden.

## Abstandbereich

Der **Abstandbereich**, begrenzt durch den Abstandsränder, erweitert den Inhaltsbereich, um die Abstände des Elements einzubeziehen. Seine Dimensionen sind die _Abstand-box Breite_ und die _Abstand-box Höhe_.

Die Dicke des Abstands wird durch die Eigenschaften {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} und die Kurznotation {{cssxref("padding")}} bestimmt.

## Rahmenbereich

Der **Rahmenbereich**, begrenzt durch den Rahmenrand, erweitert den Abstandbereich, um die Rahmen des Elements einzubeziehen. Seine Dimensionen sind die _Rahmen-box Breite_ und die _Rahmen-box Höhe_.

Die Dicke der Rahmen wird durch die Eigenschaften {{cssxref("border-width")}} und die Kurznotation {{cssxref("border")}} bestimmt. Wenn die {{cssxref("box-sizing")}} Eigenschaft auf `border-box` gesetzt ist, kann die Größe des Rahmenbereichs explizit mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height") }}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden. Wenn ein Hintergrund ({{cssxref("background-color")}} oder {{cssxref("background-image")}}) auf ein Kästchen gesetzt ist, erstreckt er sich bis zum äußeren Rand des Rahmens (d.h. er erstreckt sich unter den Rahmen in der Z-Reihenfolge). Dieses Standardverhalten kann mit der CSS-Eigenschaft {{cssxref("background-clip")}} geändert werden.

## Randbereich

Der **Randbereich**, begrenzt durch den Aussenrand, erweitert den Rahmenbereich, um einen leeren Bereich einzubeziehen, der verwendet wird, um das Element von seinen Nachbarn zu trennen. Seine Dimensionen sind die _Rand-box Breite_ und die _Rand-box Höhe_.

Die Größe des Randbereichs wird durch die Eigenschaften {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} und die Kurznotation {{cssxref("margin")}} bestimmt. Wenn [Randüberlagerung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) auftritt, ist der Randbereich nicht klar definiert, da Ränder zwischen Kästchen geteilt werden.

Abschließend sei angemerkt, dass bei nicht ersetzten Inline-Elementen der Platzbedarf (der Beitrag zur Höhe der Zeile) von der Eigenschaft {{cssxref('line-height')}} bestimmt wird, auch wenn die Rahmen und Abstände weiterhin um den Inhalt herum angezeigt werden.

## Siehe auch

- [Layout und das enthaltende Block](/de/docs/Web/CSS/Containing_block)
- [Einführung in den CSS-Cascade](/de/docs/Web/CSS/Cascade)
- [Leitfaden: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- Wichtigste CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/At-rule)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Layoutmodi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Randoverlagerung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurznotationseigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
