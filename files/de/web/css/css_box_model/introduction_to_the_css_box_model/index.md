---
title: Einführung in das grundlegende CSS-Box-Modell
slug: Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model
l10n:
  sourceCommit: 93f54a9e0ceb65880b951986cc47bee87336f156
---

{{CSSRef}}

Beim Layouten eines Dokuments stellt die Rendering-Engine des Browsers jedes Element als rechteckige Box gemäß dem standardmäßigen **CSS-Box-Modell** dar. CSS bestimmt die Größe, Position und Eigenschaften (Farbe, Hintergrund, Randgröße usw.) dieser Boxen.

Jede Box besteht aus vier Teilen (oder _Bereichen_), die durch ihre jeweiligen Kanten definiert sind: die _Content-Kante_, _Padding-Kante_, _Border-Kante_ und _Margin-Kante_.

![CSS Box model](boxmodel.png)

## Content-Bereich

Der **Content-Bereich**, begrenzt durch die Content-Kante, enthält den „echten“ Inhalt des Elements, wie Text, ein Bild oder einen Video-Player. Seine Dimensionen sind die _Content-Breite_ (oder _content-box width_) und die _Content-Höhe_ (oder _content-box height_). Er hat oft eine Hintergrundfarbe oder ein Hintergrundbild.

Wenn die {{cssxref("box-sizing")}} Eigenschaft auf `content-box` (Standard) gesetzt ist und wenn das Element ein Blockelement ist, kann die Größe des Content-Bereichs explizit durch die Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden.

## Padding-Bereich

Der **Padding-Bereich**, begrenzt durch die Padding-Kante, erweitert den Content-Bereich, um das Padding des Elements zu enthalten. Seine Dimensionen sind die _padding-box width_ und die _padding-box height_.

Die Dicke des Paddings wird durch die Eigenschaften {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} und die Kurzschrift {{cssxref("padding")}} bestimmt.

## Border-Bereich

Der **Border-Bereich**, begrenzt durch die Border-Kante, erweitert den Padding-Bereich, um die Ränder des Elements einzubeziehen. Seine Dimensionen sind die _border-box width_ und die _border-box height_.

Die Dicke der Ränder wird durch die Eigenschaften {{cssxref("border-width")}} und die Kurzschrift {{cssxref("border")}} bestimmt. Wenn die {{cssxref("box-sizing")}} Eigenschaft auf `border-box` gesetzt ist, kann die Größe des Border-Bereichs explizit durch die Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden. Wenn ein Hintergrund ({{cssxref("background-color")}} oder {{cssxref("background-image")}}) auf einer Box gesetzt ist, erstreckt er sich bis zur äußeren Kante des Rahmens (d.h. er erstreckt sich in der Z-Ordnung unter den Rahmen). Dieses Standardverhalten kann mit der {{cssxref("background-clip")}} CSS-Eigenschaft geändert werden.

## Margin-Bereich

Der **Margin-Bereich**, begrenzt durch die Margin-Kante, erweitert den Border-Bereich, um einen leeren Bereich zu enthalten, der verwendet wird, um das Element von seinen Nachbarn zu trennen. Seine Dimensionen sind die _margin box width_ und die _margin box height_.

Die Größe des Margin-Bereichs wird durch die Eigenschaften {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} und die Kurzschrift {{cssxref("margin")}} bestimmt. Wenn [Margin-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) auftritt, ist der Margin-Bereich nicht klar definiert, da Margen zwischen Boxen geteilt werden.

Beachten Sie schließlich, dass bei nicht ersetzten Inline-Elementen die Menge des benötigten Platzes (der Beitrag zur Höhe der Zeile) durch die {{cssxref('line-height')}} Eigenschaft bestimmt wird, obwohl die Ränder und das Padding weiterhin um den Inhalt angezeigt werden.

## Siehe auch

- [Layout und der beinhaltende Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Modell der visuellen Formatierung](/de/docs/Web/CSS/Visual_formatting_model)
  - [Margin-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertdefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschrifteigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
