---
title: Einführung in das CSS-Boxmodell
short-title: Introduction
slug: Web/CSS/Guides/Box_model/Introduction
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Beim Layouten eines Dokuments stellt die Rendering-Engine des Browsers jedes Element als ein rechteckiges Kästchen gemäß dem standardmäßigen **CSS-Grundboxmodell** dar. CSS bestimmt die Größe, Position und Eigenschaften (Farbe, Hintergrund, Randgröße usw.) dieser Kästchen.

Jedes Kästchen besteht aus vier Teilen (oder _Bereichen_), die durch ihre jeweiligen Kanten definiert sind: der _Inhaltskante_, der _Auffüllkante_, der _Rahmenkante_ und der _Ränderkante_.

![CSS-Boxmodell](boxmodel.png)

## Inhaltsbereich

Der **Inhaltsbereich**, begrenzt durch die Inhaltskante, enthält den "echten" Inhalt des Elements, wie Text, ein Bild oder einen Videoplayer. Seine Abmessungen sind die _Inhaltsbreite_ (oder _content-box Breite_) und die _Inhaltshöhe_ (oder _content-box Höhe_). Oft hat er eine Hintergrundfarbe oder ein Hintergrundbild.

Wenn die Eigenschaft {{cssxref("box-sizing")}} auf `content-box` (Standard) gesetzt ist und wenn das Element ein Blockelement ist, kann die Größe des Inhaltsbereichs explizit mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height") }}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden.

## Auffüllbereich

Der **Auffüllbereich**, begrenzt durch die Auffüllkante, erweitert den Inhaltsbereich, um die Auffüllung des Elements einzubeziehen. Seine Abmessungen sind die _Auffüllbox-Breite_ und die _Auffüllbox-Höhe_.

Die Dicke der Auffüllung wird durch die Eigenschaften {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} und die Kurzform {{cssxref("padding")}} bestimmt.

## Rahmenbereich

Der **Rahmenbereich**, begrenzt durch die Rahmenkante, erweitert den Auffüllbereich, um die Rahmen des Elements einzubeziehen. Seine Abmessungen sind die _Rahmenbox-Breite_ und die _Rahmenbox-Höhe_.

Die Dicke der Rahmen wird durch die Eigenschaften {{cssxref("border-width")}} und die Kurzform {{cssxref("border")}} bestimmt. Wenn die Eigenschaft {{cssxref("box-sizing")}} auf `border-box` gesetzt ist, kann die Größe des Rahmenbereichs explizit mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height") }}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden. Wenn auf ein Kästchen ein Hintergrund ({{cssxref("background-color")}} oder {{cssxref("background-image")}}) gesetzt ist, erstreckt sich dieser bis zur äußeren Kante des Rahmens (d.h. erstreckt sich in der Z-Reihenfolge unter den Rahmen). Dieses Standardverhalten kann mit der CSS-Eigenschaft {{cssxref("background-clip")}} verändert werden.

## Ränderbereich

Der **Ränderbereich**, begrenzt durch die Ränderkante, erweitert den Rahmenbereich, um einen leeren Bereich einzubeziehen, der verwendet wird, um das Element von seinen Nachbarn zu trennen. Seine Abmessungen sind die _Ränderbox-Breite_ und die _Ränderbox-Höhe_.

Die Größe des Ränderbereichs wird durch die Eigenschaften {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} und die Kurzform {{cssxref("margin")}} bestimmt. Wenn ein [Margin-Zusammenfall](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing) auftritt, ist der Ränderbereich nicht klar definiert, da Ränder zwischen Kästchen geteilt werden.

Schließlich ist zu beachten, dass bei nicht ersetzten Inline-Elementen die eingenommene Menge an Platz (der Beitrag zur Höhe der Zeile) durch die Eigenschaft {{cssxref('line-height')}} bestimmt wird, auch wenn die Rahmen und Auffüllungen weiterhin um den Inhalt angezeigt werden.

## Siehe auch

- [Layout und das enthaltene Block](/de/docs/Web/CSS/Guides/Display/Containing_block)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)
  - [At-Rules](/de/docs/Web/CSS/Guides/Syntax/At-rules)
  - [Kommentare](/de/docs/Web/CSS/Guides/Syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - [Margin-Zusammenfall](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - [Kurzschreibweiseigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
