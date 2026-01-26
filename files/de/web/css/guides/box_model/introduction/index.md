---
title: Einführung in das CSS-Boxmodell
short-title: Introduction
slug: Web/CSS/Guides/Box_model/Introduction
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

Beim Layouten eines Dokuments stellt die Rendering-Engine des Browsers jedes Element als rechteckigen Kasten gemäß dem standardmäßigen **CSS-Basis-Boxmodell** dar. CSS bestimmt die Größe, Position und Eigenschaften (Farbe, Hintergrund, Rahmengröße usw.) dieser Kästen.

Jeder Kasten besteht aus vier Teilen (oder _Bereichen_), die durch ihre jeweiligen Kanten definiert sind: die _Innenkante_, _Polsterungskante_, _Rahmenkante_ und _Randkante_.

![CSS Boxmodell](boxmodel.png)

## Inhaltsbereich

Der **Inhaltsbereich**, begrenzt durch die Innenkante, enthält den "echten" Inhalt des Elements, wie Text, Bild oder einen Videoplayer. Seine Abmessungen sind die _Inhaltbreite_ (oder _Content-Box-Breite_) und die _Inhaltshöhe_ (oder _Content-Box-Höhe_). Er hat oft eine Hintergrundfarbe oder ein Hintergrundbild.

Wenn die Eigenschaft {{cssxref("box-sizing")}} auf `content-box` (Standard) gesetzt ist und wenn das Element ein Blockelement ist, kann die Größe des Inhaltsbereichs ausdrücklich mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden.

## Polsterungsbereich

Der **Polsterungsbereich**, begrenzt durch die Polsterungskante, erweitert den Inhaltsbereich, um die Polsterung des Elements einzuschließen. Seine Abmessungen sind die _Padding-Box-Breite_ und die _Padding-Box-Höhe_.

Die Dicke der Polsterung wird durch die Eigenschaften {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} und die Kurzform {{cssxref("padding")}} bestimmt.

## Rahmenbereich

Der **Rahmenbereich**, begrenzt durch die Rahmenkante, erweitert den Polsterungsbereich, um die Rahmen des Elements einzuschließen. Seine Abmessungen sind die _Border-Box-Breite_ und die _Border-Box-Höhe_.

Die Dicke der Rahmen wird durch die Eigenschaften {{cssxref("border-width")}} und die Kurzform {{cssxref("border")}} bestimmt. Wenn die Eigenschaft {{cssxref("box-sizing")}} auf `border-box` gesetzt ist, kann die Größe des Rahmenbereichs ausdrücklich mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden. Wenn ein Hintergrund ({{cssxref("background-color")}} oder {{cssxref("background-image")}}) auf einem Kasten gesetzt ist, erstreckt er sich bis zur Außenkante des Rahmens (d.h. er erstreckt sich in der Z-Anordnung unter den Rahmen). Dieses Standardverhalten kann mit der CSS-Eigenschaft {{cssxref("background-clip")}} geändert werden.

## Randbereich

Der **Randbereich**, begrenzt durch die Randkante, erweitert den Rahmenbereich, um einen leeren Bereich einzuschließen, der verwendet wird, um das Element von seinen Nachbarn zu trennen. Seine Abmessungen sind die _Margin-Box-Breite_ und die _Margin-Box-Höhe_.

Die Größe des Randbereichs wird durch die Eigenschaften {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} und die Kurzform {{cssxref("margin")}} bestimmt. Wenn [Randzusammenfall](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing) auftritt, ist der Randbereich nicht klar definiert, da Ränder zwischen Kästen geteilt werden.

Beachten Sie schließlich, dass für nicht ersetzte Inline-Elemente der Platzbedarf (der Beitrag zur Höhe der Zeile) durch die Eigenschaft {{cssxref('line-height')}} bestimmt wird, auch wenn die Rahmen und Polsterung weiterhin um den Inhalt angezeigt werden.

## Siehe auch

- [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model) Modul
- [Layout und der umgebende Block](/de/docs/Web/CSS/Guides/Display/Containing_block)
- [Einführung in den CSS-Cascade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Lernen: Konflikte bearbeiten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)
  - [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
  - [Kommentare](/de/docs/Web/CSS/Guides/Syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - [Randzusammenfall](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - Werte:
    - [Anfangswerte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
  - [Syntax der Wertdefinition](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - [Kurzform-Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
