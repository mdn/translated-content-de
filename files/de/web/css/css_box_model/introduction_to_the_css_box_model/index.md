---
title: Einführung in das CSS-Boxmodell
short-title: Introduction
slug: Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Bei der Gestaltung eines Dokuments stellt die Rendering-Engine des Browsers jedes Element als rechteckigen Kasten dar, gemäß dem Standard **CSS-Grundkastenmodell**. CSS bestimmt die Größe, Position und Eigenschaften (Farbe, Hintergrund, Randgröße, etc.) dieser Kästen.

Jeder Kasten besteht aus vier Teilen (oder _Bereichen_), definiert durch ihre jeweiligen Kanten: die _Inhaltskante_, _Abstandskante_, _Rahmenkante_ und _Randkante_.

![CSS Box model](boxmodel.png)

## Inhaltsbereich

Der **Inhaltsbereich**, begrenzt durch die Inhaltskante, enthält den "echten" Inhalt des Elements, wie Text, ein Bild oder einen Videoplayer. Seine Abmessungen sind die _Inhaltsbreite_ (oder _Content-Box-Breite_) und die _Inhaltshöhe_ (oder _Content-Box-Höhe_). Oft hat er eine Hintergrundfarbe oder ein Hintergrundbild.

Ist die Eigenschaft {{cssxref("box-sizing")}} auf `content-box` (Standard) gesetzt und das Element ein Block-Element, kann die Größe des Inhaltsbereichs explizit mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden.

## Abstandbereich

Der **Abstandbereich**, begrenzt durch die Abstandskante, erweitert den Inhaltsbereich, um den Abstand des Elements zu enthalten. Seine Abmessungen sind die _Abstandsbox-Breite_ und die _Abstandsbox-Höhe_.

Die Dicke des Abstands wird durch die Eigenschaften {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, und die Kurzform {{cssxref("padding")}} bestimmt.

## Rahmenbereich

Der **Rahmenbereich**, begrenzt durch die Rahmenkante, erweitert den Abstandbereich, um die Rahmen des Elements zu umfassen. Seine Abmessungen sind die _Rahmenbox-Breite_ und die _Rahmenbox-Höhe_.

Die Dicke der Rahmen wird durch die Eigenschaften {{cssxref("border-width")}} und die Kurzform {{cssxref("border")}} bestimmt. Wenn die Eigenschaft {{cssxref("box-sizing")}} auf `border-box` gesetzt ist, kann die Größe des Rahmenbereichs explizit mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden. Wenn ein Hintergrund ({{cssxref("background-color")}} oder {{cssxref("background-image")}}) auf einem Kasten gesetzt ist, erstreckt sich dieser bis zur äußeren Kante des Rahmens (d.h. er erstreckt sich unter dem Rahmen in der Tiefenordnung). Dieses Standardverhalten kann mit der CSS-Eigenschaft {{cssxref("background-clip")}} geändert werden.

## Randbereich

Der **Randbereich**, begrenzt durch die Randkante, erweitert den Rahmenbereich, um einen leeren Bereich einzuschließen, der verwendet wird, um das Element von seinen Nachbarn zu trennen. Seine Abmessungen sind die _Randbox-Breite_ und die _Randbox-Höhe_.

Die Größe des Randbereichs wird durch die Eigenschaften {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, und die Kurzform {{cssxref("margin")}} bestimmt. Wenn [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) auftritt, ist der Randbereich nicht klar definiert, da Ränder zwischen Kästen geteilt werden.

Schließlich ist zu beachten, dass für nicht ersetzte Inline-Elemente der Platzbedarf (der Beitrag zur Höhe der Zeile) durch die Eigenschaft {{cssxref('line-height')}} bestimmt wird, obwohl die Rahmen und Abstände noch immer um den Inhalt herum angezeigt werden.

## Siehe auch

- [Layout und der beinhaltende Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Konflikte bearbeiten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- Wichtige CSS-Konzepte:
  - [CSS Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-rules](/de/docs/Web/CSS/CSS_syntax/At-rules)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
  - [Kurzschreib-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
