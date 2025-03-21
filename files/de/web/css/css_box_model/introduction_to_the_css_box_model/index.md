---
title: Einführung in das grundlegende CSS-Boxmodell
slug: Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Beim Layouten eines Dokuments stellt die Render-Engine des Browsers jedes Element als ein rechteckiges Kästchen entsprechend dem Standard-**CSS-Boxmodell** dar. CSS bestimmt die Größe, Position und Eigenschaften (Farbe, Hintergrund, Randgröße usw.) dieser Kästchen.

Jedes Kästchen besteht aus vier Teilen (oder _Bereichen_), die durch ihre jeweiligen Kanten definiert sind: der _Inhaltskante_, der _Polsterkante_, der _Umrandungskante_ und der _Randkante_.

![CSS Boxmodel](boxmodel.png)

## Inhaltsbereich

Der **Inhaltsbereich**, begrenzt durch die Inhaltskante, enthält den "echten" Inhalt des Elements, wie beispielsweise Text, ein Bild oder einen Videoplayer. Seine Abmessungen sind die _Inhaltsbreite_ (oder _Content-Box-Breite_) und die _Höhe des Inhalts_ (oder _Content-Box-Höhe_). Er hat oft eine Hintergrundfarbe oder ein Hintergrundbild.

Wenn die {{cssxref("box-sizing")}}-Eigenschaft auf `content-box` (Standard) gesetzt ist und wenn das Element ein Blockelement ist, kann die Größe des Inhaltsbereichs explizit mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden.

## Polsterbereich

Der **Polsterbereich**, begrenzt durch die Polsterkante, erweitert den Inhaltsbereich, um die Polsterung des Elements einzuschließen. Seine Abmessungen sind die _Polster-Box-Breite_ und die _Polster-Box-Höhe_.

Die Dicke der Polsterung wird durch die Eigenschaften {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} und die Kurzschreibweise {{cssxref("padding")}} bestimmt.

## Randbereich

Der **Randbereich**, begrenzt durch die Umrandungskante, erweitert den Polsterbereich, um die Umrandungen des Elements einzuschließen. Seine Abmessungen sind die _Rand-Box-Breite_ und die _Rand-Box-Höhe_.

Die Dicke der Umrandungen wird durch die Eigenschaften {{cssxref("border-width")}} und die Kurzschreibweise {{cssxref("border")}} bestimmt. Wenn die {{cssxref("box-sizing")}}-Eigenschaft auf `border-box` gesetzt ist, kann die Größe des Randbereichs explizit mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden. Wenn ein Hintergrund ({{cssxref("background-color")}} oder {{cssxref("background-image")}}) auf ein Kästchen gesetzt ist, erstreckt er sich bis zur Außenkante des Rahmens (d.h. erstreckt sich unter den Rahmen in der Z-Reihenfolge). Dieses Standardverhalten kann mit der CSS-Eigenschaft {{cssxref("background-clip")}} geändert werden.

## Randfläche

Die **Randfläche**, begrenzt durch die Randkante, erweitert den Randbereich, um einen leeren Bereich einzuschließen, der verwendet wird, um das Element von seinen Nachbarn zu trennen. Seine Abmessungen sind die _Rand-Box-Breite_ und die _Rand-Box-Höhe_.

Die Größe der Randfläche wird durch die Eigenschaften {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} und die Kurzschreibweise {{cssxref("margin")}} bestimmt. Wenn [Rand-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) auftritt, ist die Randfläche nicht klar definiert, da Ränder zwischen Kästchen geteilt werden.

Abschließend sei angemerkt, dass bei nicht ersetzten Inline-Elementen der Raum, den sie einnehmen (der Beitrag zur Höhe der Linie), durch die {{cssxref('line-height')}}-Eigenschaft bestimmt wird, auch wenn die Ränder und Polsterungen weiterhin um den Inhalt angezeigt werden.

## Siehe auch

- [Layout und der enthaltende Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Rand-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initiale Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used-value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual-value)
  - [Wertdefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
