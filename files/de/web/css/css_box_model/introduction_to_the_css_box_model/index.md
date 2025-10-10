---
title: Einführung in das CSS-Box-Modell
short-title: Introduction
slug: Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Beim Layout eines Dokuments stellt die Rendering-Engine des Browsers jedes Element als rechteckigen Kasten gemäß dem standardmäßigen **CSS-Basis-Box-Modell** dar. CSS bestimmt die Größe, Position und Eigenschaften (Farbe, Hintergrund, Randgröße usw.) dieser Boxen.

Jede Box besteht aus vier Teilen (oder _Bereichen_), die durch ihre jeweiligen Ränder definiert sind: dem _Inhaltsrand_, _Abstandrand_, _Rahmenrand_ und _Außenrand_.

![CSS-Box-Modell](boxmodel.png)

## Inhaltsbereich

Der **Inhaltsbereich**, begrenzt durch den Inhaltsrand, enthält den "wirklichen" Inhalt des Elements, wie Text, ein Bild oder einen Video-Player. Seine Dimensionen sind die _Inhaltsbreite_ (oder _Inhalts-Box-Breite_) und die _Inhaltshöhe_ (oder _Inhalts-Box-Höhe_). Häufig hat er eine Hintergrundfarbe oder ein Hintergrundbild.

Wenn die {{cssxref("box-sizing")}}-Eigenschaft auf `content-box` (Standard) gesetzt ist und wenn das Element ein Blockelement ist, kann die Größe des Inhaltsbereichs explizit mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height") }}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden.

## Abstandbereich

Der **Abstandbereich**, begrenzt durch den Abstandrand, erweitert den Inhaltsbereich, um den Abstand des Elements einzuschließen. Seine Dimensionen sind die _Abstands-Box-Breite_ und die _Abstands-Box-Höhe_.

Die Dicke des Abstandes wird durch die Eigenschaften {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} und die Kurzform {{cssxref("padding")}} bestimmt.

## Rahmenbereich

Der **Rahmenbereich**, begrenzt durch den Rahmenrand, erweitert den Abstandbereich, um die Rahmen des Elements einzuschließen. Seine Dimensionen sind die _Rahmen-Box-Breite_ und die _Rahmen-Box-Höhe_.

Die Dicke der Rahmen wird durch die Eigenschaften {{cssxref("border-width")}} und die Kurzform {{cssxref("border")}} bestimmt. Wenn die {{cssxref("box-sizing")}}-Eigenschaft auf `border-box` gesetzt ist, kann die Größe des Rahmenbereichs explizit mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height") }}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden. Wenn ein Hintergrund ({{cssxref("background-color")}} oder {{cssxref("background-image")}}) auf einem Kasten gesetzt ist, erstreckt er sich bis zum äußeren Rand des Rahmens (d.h. er erstreckt sich unter dem Rahmen in Z-Reihenfolge). Dieses Standardverhalten kann mit der CSS-Eigenschaft {{cssxref("background-clip")}} geändert werden.

## Außenbereich

Der **Außenbereich**, begrenzt durch den Außenrand, erweitert den Rahmenbereich, um einen leeren Bereich einzuschließen, der verwendet wird, um das Element von seinen Nachbarn zu trennen. Seine Dimensionen sind die _Außen-Box-Breite_ und die _Außen-Box-Höhe_.

Die Größe des Außenbereichs wird durch die Eigenschaften {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} und die Kurzform {{cssxref("margin")}} bestimmt. Wenn [Margin-Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) auftritt, ist der Außenbereich nicht klar definiert, da Margen zwischen Boxen geteilt werden.

Beachten Sie schließlich, dass für nicht-ersetzte Inline-Elemente die Menge des eingenommenen Raumes (der Beitrag zur Höhe der Zeile) durch die {{cssxref('line-height')}}-Eigenschaft bestimmt wird, auch wenn die Rahmen und Abstände immer noch um den Inhalt angezeigt werden.

## Siehe auch

- [Layout und das umgebende Blockelement](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Einführung in den CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Margin-Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
  - [Kurzform-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
