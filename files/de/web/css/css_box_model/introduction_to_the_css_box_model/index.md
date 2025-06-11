---
title: Einführung in das CSS-Boxmodell
short-title: Introduction
slug: Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Beim Layout einer Dokumentation stellt die Rendering-Engine des Browsers jedes Element als rechteckigen Rahmen gemäß dem standardmäßigen **CSS-Basis-Boxmodell** dar. CSS bestimmt die Größe, Position und Eigenschaften (Farbe, Hintergrund, Rahmenstärke usw.) dieser Boxen.

Jede Box besteht aus vier Teilen (oder _Bereichen_), die durch ihre jeweiligen Kanten definiert sind: die _Inhaltskante_, _Abstandskante_, _Rahmenkante_ und _Außenkante_.

![CSS Boxmodell](boxmodel.png)

## Inhaltsbereich

Der **Inhaltsbereich**, begrenzt durch die Inhaltskante, enthält den "echten" Inhalt des Elements, wie etwa Text, ein Bild oder einen Videoplayer. Seine Abmessungen sind die _Inhaltsbreite_ (oder _Content-Box-Breite_) und die _Inhaltshöhe_ (oder _Content-Box-Höhe_). Oftmals hat er eine Hintergrundfarbe oder ein Hintergrundbild.

Wenn die Eigenschaft {{cssxref("box-sizing")}} auf `content-box` (Standard) gesetzt ist und das Element ein Blockelement ist, kann die Größe des Inhaltsbereichs explizit mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height") }}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden.

## Abstandbereich

Der **Abstandbereich**, begrenzt durch die Abstandskante, erweitert den Inhaltsbereich, um den Abstand des Elements einzuschließen. Seine Abmessungen sind die _Padding-Box-Breite_ und die _Padding-Box-Höhe_.

Die Dicke des Abstands wird durch die Eigenschaften {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} und die Kurzform {{cssxref("padding")}} bestimmt.

## Rahmenbereich

Der **Rahmenbereich**, begrenzt durch die Rahmenkante, erweitert den Abstandbereich, um die Rahmen des Elements einzuschließen. Seine Abmessungen sind die _Border-Box-Breite_ und die _Border-Box-Höhe_.

Die Dicke der Rahmen wird durch die Eigenschaften {{cssxref("border-width")}} und die Kurzform {{cssxref("border")}} bestimmt. Wenn die Eigenschaft {{cssxref("box-sizing")}} auf `border-box` gesetzt ist, kann die Größe des Rahmenbereichs explizit mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height") }}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden. Wenn ein Hintergrund ({{cssxref("background-color")}} oder {{cssxref("background-image")}}) auf einer Box gesetzt ist, erstreckt er sich bis zur äußeren Kante des Rahmens (d.h. er liegt in der Z-Reihenfolge unter dem Rahmen). Dieses Standardverhalten kann mit der CSS-Eigenschaft {{cssxref("background-clip")}} geändert werden.

## Außenbereich

Der **Außenbereich**, begrenzt durch die Außenkante, erweitert den Rahmenbereich, um eine leere Fläche einzuschließen, die zur Trennung des Elements von seinen Nachbarn verwendet wird. Seine Abmessungen sind die _Margin-Box-Breite_ und die _Margin-Box-Höhe_.

Die Größe des Außenbereichs wird durch die Eigenschaften {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} und die Kurzform {{cssxref("margin")}} bestimmt. Wenn es zu einem [Außen-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) kommt, ist der Außenbereich nicht klar definiert, da Außenabstände zwischen Boxen geteilt werden.

Beachten Sie schließlich, dass bei nicht ersetzten Inline-Elementen der Platzbedarf (der Beitrag zur Höhe der Zeile) durch die Eigenschaft {{cssxref('line-height')}} bestimmt wird, auch wenn die Rahmen und Abstände weiterhin um den Inhalt angezeigt werden.

## Siehe auch

- [Layout und der umgebende Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Einführung in den CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Außen-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzform-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
