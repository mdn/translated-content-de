---
title: Einführung in das CSS-Boxmodell
short-title: Introduction
slug: Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Beim Layouten eines Dokuments stellt die Rendering-Engine des Browsers jedes Element als rechteckige Box gemäß dem standardmäßigen **CSS-Basis-Boxmodell** dar. CSS bestimmt die Größe, Position und Eigenschaften (Farbe, Hintergrund, Rahmengröße usw.) dieser Boxen.

Jede Box besteht aus vier Teilen (oder _Bereichen_), die durch ihre jeweiligen Kanten definiert sind: der _Inhaltskante_, _Polsterkante_, _Rahmenkante_ und _Außenkante_.

![CSS Boxmodell](boxmodel.png)

## Inhaltsbereich

Der **Inhaltsbereich**, begrenzt durch die Inhaltecke, enthält den "echten" Inhalt des Elements, wie etwa Text, ein Bild oder einen Videoplayer. Seine Abmessungen sind die _Inhaltsbreite_ (oder _content-box width_) und die _Inhaltshöhe_ (oder _content-box height_). Häufig hat er eine Hintergrundfarbe oder ein Hintergrundbild.

Wenn die Eigenschaft {{cssxref("box-sizing")}} auf `content-box` gesetzt ist (Standard) und wenn das Element ein Blockelement ist, kann die Größe des Inhaltsbereiches ausdrücklich mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden.

## Polsterbereich

Der **Polsterbereich**, begrenzt durch die Polsterkante, erweitert den Inhaltsbereich, um das Polster des Elements einzuschließen. Seine Abmessungen sind die _Polsterboxbreite_ und die _Polsterboxhöhe_.

Die Dicke des Polsters wird durch die Eigenschaften {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} und die Kurzschrift {{cssxref("padding")}} bestimmt.

## Rahmenbereich

Der **Rahmenbereich**, begrenzt durch die Rahmenkante, erweitert den Polsterbereich, um die Rahmen des Elements einzuschließen. Seine Abmessungen sind die _Rahmenboxbreite_ und die _Rahmenboxhöhe_.

Die Dicke der Rahmen wird durch die Eigenschaften {{cssxref("border-width")}} und die Kurzschrift {{cssxref("border")}} bestimmt. Wenn die Eigenschaft {{cssxref("box-sizing")}} auf `border-box` gesetzt ist, kann die Größe des Rahmenbereichs ausdrücklich mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden. Wenn sich ein Hintergrund ({{cssxref("background-color")}} oder {{cssxref("background-image")}}) auf einer Box befindet, erstreckt er sich bis zur äußeren Kante des Rahmens (d.h. er erstreckt sich unterhalb des Rahmens in der z-Ordnung). Dieses Standardverhalten kann mit der CSS-Eigenschaft {{cssxref("background-clip")}} geändert werden.

## Randbereich

Der **Randbereich**, begrenzt durch die Außenkante, erweitert den Rahmenbereich, um einen leeren Bereich einzuschließen, der verwendet wird, um das Element von seinen Nachbarn zu trennen. Seine Abmessungen sind die _Randboxbreite_ und die _Randboxhöhe_.

Die Größe des Randbereichs wird durch die Eigenschaften {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} und die Kurzschrift {{cssxref("margin")}} bestimmt. Wenn [Margenüberlappung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) auftritt, ist der Randbereich nicht klar definiert, da die Ränder zwischen Boxen geteilt werden.

Schließlich ist zu beachten, dass für nicht ersetzte Inline-Elemente der genutzte Raum (der Beitrag zur Höhe der Zeile) durch die Eigenschaft {{cssxref('line-height')}} bestimmt wird, auch wenn die Ränder und Polster noch um den Inhalt herum angezeigt werden.

## Siehe auch

- [Layout und der enthaltene Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Einführung in den CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- Schlüsselkonzepte von CSS:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Randüberlappung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
    - [Genutzte Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
  - [Wertdefinierungssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschrift-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
