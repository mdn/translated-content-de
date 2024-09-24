---
title: Einführung in das grundlegende CSS-Boxmodell
slug: Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model
l10n:
  sourceCommit: 28505c5b2d83732399d8ba96e4b32793580a7f13
---

{{CSSRef}}

Beim Layouten eines Dokuments stellt die Rendering-Engine des Browsers jedes Element als rechteckige Box gemäß dem standardmäßigen **CSS-Boxmodell** dar. CSS bestimmt die Größe, Position und Eigenschaften (Farbe, Hintergrund, Rahmengröße usw.) dieser Boxen.

Jede Box besteht aus vier Teilen (oder _Bereichen_), die durch ihre jeweiligen Kanten definiert sind: die _Inhaltskante_, _Auffüllungskante_, _Rahmenkante_ und _Randkante_.

![CSS Box model](boxmodel.png)

## Inhaltsbereich

Der **Inhaltsbereich**, begrenzt durch die Inhaltskante, enthält den "echten" Inhalt des Elements, wie Text, ein Bild oder einen Videoplayer. Seine Abmessungen sind die _Inhaltsbreite_ (oder _Inhaltsbox-Breite_) und die _Inhaltshöhe_ (oder _Inhaltsbox-Höhe_). Häufig hat er eine Hintergrundfarbe oder ein Hintergrundbild.

Wenn die Eigenschaft {{cssxref("box-sizing")}} auf `content-box` (Standard) gesetzt ist und das Element ein Blockelement ist, kann die Größe des Inhaltsbereichs explizit mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden.

## Auffüllungsbereich

Der **Auffüllungsbereich**, begrenzt durch die Auffüllungskante, erweitert den Inhaltsbereich, um die Auffüllung des Elements einzuschließen. Seine Abmessungen sind die _Auffüllungsbox-Breite_ und die _Auffüllungsbox-Höhe_.

Die Dicke der Auffüllung wird durch die Eigenschaften {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} und die Kurzschreibweise {{cssxref("padding")}} bestimmt.

## Rahmenbereich

Der **Rahmenbereich**, begrenzt durch die Rahmenkante, erweitert den Auffüllungsbereich, um die Rahmen des Elements einzuschließen. Seine Abmessungen sind die _Rahmenbox-Breite_ und die _Rahmenbox-Höhe_.

Die Dicke der Rahmen wird durch die Eigenschaften {{cssxref("border-width")}} und die Kurzschreibweise {{cssxref("border")}} bestimmt. Wenn die Eigenschaft {{cssxref("box-sizing")}} auf `border-box` gesetzt ist, kann die Größe des Rahmenbereichs explizit mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden. Wenn ein Hintergrund ({{cssxref("background-color")}} oder {{cssxref("background-image")}}) auf einer Box eingestellt ist, erstreckt er sich bis zur äußeren Kante des Rahmens (d.h., er erstreckt sich im Z-Ordering unter den Rahmen). Dieses Standardverhalten kann mit der CSS-Eigenschaft {{cssxref("background-clip")}} geändert werden.

## Randbereich

Der **Randbereich**, begrenzt durch die Randkante, erweitert den Rahmenbereich, um einen leeren Bereich einzuschließen, der verwendet wird, um das Element von seinen Nachbarn zu trennen. Seine Abmessungen sind die _Randbox-Breite_ und die _Randbox-Höhe_.

Die Größe des Randbereichs wird durch die Eigenschaften {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} und die Kurzschreibweise {{cssxref("margin")}} bestimmt. Wenn [Margenüberlappung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) auftritt, ist der Randbereich nicht klar definiert, da Ränder zwischen Boxen geteilt werden.

Beachten Sie schließlich, dass bei nicht ersetzten Inline-Elementen der Platzbedarf (der Beitrag zur Höhe der Zeile) durch die Eigenschaft {{cssxref('line-height')}} bestimmt wird, obwohl die Rahmen und Auffüllungen weiterhin um den Inhalt herum angezeigt werden.

## Siehe auch

- [Layout und der enthaltende Block](/de/docs/Web/CSS/Containing_block)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Cascade)
- [Kaskade, Spezifität und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/At-rule)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Layoutmodi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Randüberlappung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreibweise Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
