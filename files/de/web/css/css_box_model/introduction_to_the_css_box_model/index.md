---
title: Einführung in das grundlegende CSS-Boxmodell
slug: Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model
l10n:
  sourceCommit: 4e1bf706f08556292e02202486fae8b616cfc358
---

{{CSSRef}}

Beim Layouten eines Dokuments stellt die Rendering-Engine des Browsers jedes Element als rechteckigen Kasten gemäß dem standardmäßigen **CSS-Boxmodell** dar. CSS bestimmt die Größe, Position und Eigenschaften (Farbe, Hintergrund, Rahmenstärke usw.) dieser Kästen.

Jeder Kasten besteht aus vier Teilen (oder _Bereichen_), die durch ihre jeweiligen Kanten definiert sind: die _Inhaltskante_, _Innenabstandskante_ (Padding), _Rahmenkante_ und _Randkante_ (Margin).

![CSS Boxmodell](boxmodel.png)

## Inhaltsbereich

Der **Inhaltsbereich**, der durch die Inhaltskante begrenzt ist, enthält den "echten" Inhalt des Elements, wie Text, ein Bild oder einen Videoplayer. Seine Abmessungen sind die _Inhaltsbreite_ (oder _Content-Box-Breite_) und die _Inhaltshöhe_ (oder _Content-Box-Höhe_). Er hat oft eine Hintergrundfarbe oder ein Hintergrundbild.

Wenn die {{cssxref("box-sizing")}}-Eigenschaft auf `content-box` (Standard) gesetzt ist und das Element ein Block-Element ist, kann die Größe des Inhaltsbereichs explizit mit den {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height") }}, {{cssxref("min-height")}} und {{cssxref("max-height")}}-Eigenschaften definiert werden.

## Innenabstandsbereich (Padding)

Der **Innenabstandsbereich**, der durch die Innenabstandskante begrenzt ist, erweitert den Inhaltsbereich, um den Innenabstand (Padding) des Elements einzuschließen. Seine Abmessungen sind die _Padding-Box-Breite_ und die _Padding-Box-Höhe_.

Die Stärke des Innenabstands wird durch die Eigenschaften {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} und die Kurzschrift {{cssxref("padding")}} bestimmt.

## Rahmenbereich

Der **Rahmenbereich**, der durch die Rahmenkante begrenzt ist, erweitert den Innenabstandsbereich, um die Rahmen des Elements einzuschließen. Seine Abmessungen sind die _Rahmen-Box-Breite_ und die _Rahmen-Box-Höhe_.

Die Stärke der Rahmen wird durch die {{cssxref("border-width")}}-Eigenschaft und die Kurzschrift {{cssxref("border")}} bestimmt. Wenn die {{cssxref("box-sizing")}}-Eigenschaft auf `border-box` gesetzt ist, kann die Größe des Rahmenbereichs mit den {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height") }}, {{cssxref("min-height")}} und {{cssxref("max-height")}}-Eigenschaften explizit definiert werden. Wenn ein Hintergrund ({{cssxref("background-color")}} oder {{cssxref("background-image")}}) auf einen Kasten gesetzt ist, erstreckt er sich bis zur äußeren Kante des Rahmens (d.h. er erstreckt sich im Z-Index unter den Rahmen). Dieses Standardverhalten kann mit der {{cssxref("background-clip")}} CSS-Eigenschaft verändert werden.

## Randbereich (Margin)

Der **Randbereich**, der durch die Randkante begrenzt ist, erweitert den Rahmenbereich, um einen leeren Bereich einzuschließen, der verwendet wird, um das Element von seinen Nachbarn zu trennen. Seine Abmessungen sind die _Rand-Box-Breite_ und die _Rand-Box-Höhe_.

Die Größe des Randbereichs wird durch die {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} und die Kurzschrift {{cssxref("margin")}} bestimmt. Wenn [Randkollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) auftritt, ist der Randbereich nicht klar definiert, da Ränder zwischen Kästen geteilt werden.

Beachten Sie schließlich, dass für nicht ersetzte Inline-Elemente die Menge des eingenommenen Raums (der Beitrag zur Höhe der Zeile) durch die {{cssxref('line-height')}}-Eigenschaft bestimmt wird, obwohl die Rahmen und Innenabstände immer noch um den Inhalt herum angezeigt werden.

## Siehe auch

- [Layout und der enthaltende Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Einführung in den CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Konfliktbewältigung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - {{Glossary("Layout_mode", "Layoutmodi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Randkollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertesyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschrifteigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
