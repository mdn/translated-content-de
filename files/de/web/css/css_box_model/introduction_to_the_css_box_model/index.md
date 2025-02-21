---
title: Einführung in das grundlegende CSS-Boxmodell
slug: Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Beim Layouten eines Dokuments stellt die Rendering-Engine des Browsers jedes Element als rechteckige Box gemäß dem standardmäßigen **CSS-Boxmodell** dar. CSS bestimmt die Größe, Position und Eigenschaften (Farbe, Hintergrund, Randgröße usw.) dieser Boxen.

Jede Box besteht aus vier Teilen (oder _Bereichen_), die durch ihre jeweiligen Kanten definiert sind: die _Inhaltskante_, _Polsterkante_, _Rahmenkante_ und _Randkante_.

![CSS Box model](boxmodel.png)

## Inhaltsbereich

Der **Inhaltsbereich**, begrenzt durch die Inhaltskante, enthält den "echten" Inhalt des Elements, wie Text, ein Bild oder einen Video-Player. Seine Dimensionen sind die _Inhaltsbreite_ (oder _Content-Box-Breite_) und die _Inhaltshöhe_ (oder _Content-Box-Höhe_). Oft hat er eine Hintergrundfarbe oder ein Hintergrundbild.

Wenn die {{cssxref("box-sizing")}}-Eigenschaft auf `content-box` (Standard) gesetzt ist und wenn das Element ein Block-Element ist, kann die Größe des Inhaltsbereichs explizit mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden.

## Polsterbereich

Der **Polsterbereich**, begrenzt durch die Polsterkante, erweitert den Inhaltsbereich, um das Polster des Elements einzuschließen. Seine Dimensionen sind die _Polster-Box-Breite_ und die _Polster-Box-Höhe_.

Die Dicke des Polsters wird durch die Eigenschaften {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} und die Kurzform {{cssxref("padding")}} bestimmt.

## Rahmenbereich

Der **Rahmenbereich**, begrenzt durch die Rahmenkante, erweitert den Polsterbereich, um die Rahmen des Elements einzuschließen. Seine Dimensionen sind die _Rahmen-Box-Breite_ und die _Rahmen-Box-Höhe_.

Die Dicke der Rahmen wird durch die Eigenschaften {{cssxref("border-width")}} und die Kurzform {{cssxref("border")}} bestimmt. Wenn die {{cssxref("box-sizing")}}-Eigenschaft auf `border-box` gesetzt ist, kann die Größe des Rahmenbereichs explizit mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden. Wenn auf einer Box ein Hintergrund ({{cssxref("background-color")}} oder {{cssxref("background-image")}}) festgelegt ist, erstreckt sich dieser bis zur äußeren Kante des Rahmens (d. h. er erstreckt sich in der Z-Reihenfolge unter dem Rahmen). Dieses Standardverhalten kann mit der CSS-Eigenschaft {{cssxref("background-clip")}} geändert werden.

## Randbereich

Der **Randbereich**, begrenzt durch die Randkante, erweitert den Rahmenbereich, um einen leeren Bereich einzuschließen, der zur Trennung des Elements von seinen Nachbarn verwendet wird. Seine Dimensionen sind die _Rand-Box-Breite_ und die _Rand-Box-Höhe_.

Die Größe des Randbereichs wird durch die Eigenschaften {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} und die Kurzform {{cssxref("margin")}} bestimmt. Wenn [Randüberlappung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) auftritt, ist der Randbereich nicht klar definiert, da Ränder zwischen Boxen geteilt werden.

Beachten Sie abschließend, dass für nicht ersetzte Inline-Elemente die Menge an Platz, die eingenommen wird (der Beitrag zur Höhe der Zeile), durch die Eigenschaft {{cssxref('line-height')}} bestimmt wird, auch wenn die Rahmen und Polster weiterhin um den Inhalt herum angezeigt werden.

## Siehe auch

- [Layout und der enthaltene Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Einführung in den CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Randüberlappung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertdefinition Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzformeigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
