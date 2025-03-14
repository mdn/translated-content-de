---
title: Einführung in das grundlegende CSS-Boxmodell
slug: Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{CSSRef}}

Beim Layout eines Dokuments stellt die Rendering-Engine des Browsers jedes Element als rechteckige Box gemäß dem Standard-**CSS-Basis-Boxmodell** dar. CSS bestimmt die Größe, Position und Eigenschaften (Farbe, Hintergrund, Randgröße usw.) dieser Boxen.

Jede Box besteht aus vier Teilen (oder _Bereichen_), die durch ihre jeweiligen Kanten definiert werden: die _Inhaltskante_, _Polsterkante_, _Randkante_ und _Innenkante_.

![CSS-Boxmodell](boxmodel.png)

## Inhaltsbereich

Der **Inhaltsbereich**, begrenzt durch die Inhaltskante, enthält den "echten" Inhalt des Elements, wie Text, ein Bild oder einen Videoplayer. Seine Abmessungen sind die _Inhaltsbreite_ (oder _Inhaltsfeldbreite_) und die _Inhaltshöhe_ (oder _Inhaltsfeldhöhe_). Er hat oft eine Hintergrundfarbe oder ein Hintergrundbild.

Wenn die Eigenschaft {{cssxref("box-sizing")}} auf `content-box` (Standard) gesetzt ist und wenn das Element ein Blockelement ist, kann die Größe des Inhaltsbereichs durch die Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} explizit definiert werden.

## Polsterbereich

Der **Polsterbereich**, begrenzt durch die Polsterkante, erweitert den Inhaltsbereich, um die Polsterung des Elements einzuschließen. Seine Abmessungen sind die _Polsterfeldbreite_ und die _Polsterfeldhöhe_.

Die Dicke der Polsterung wird durch die Eigenschaften {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} und die Kurzschreibweise {{cssxref("padding")}} bestimmt.

## Randbereich

Der **Randbereich**, begrenzt durch die Randkante, erweitert den Polsterbereich, um die Ränder des Elements einzuschließen. Seine Abmessungen sind die _Randfeldbreite_ und die _Randfeldhöhe_.

Die Dicke der Ränder wird durch die Eigenschaften {{cssxref("border-width")}} und die Kurzschreibweise {{cssxref("border")}} bestimmt. Wenn die Eigenschaft {{cssxref("box-sizing")}} auf `border-box` gesetzt ist, kann die Größe des Randbereichs durch die Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} explizit definiert werden. Wenn ein Hintergrund ({{cssxref("background-color")}} oder {{cssxref("background-image")}}) für eine Box festgelegt ist, erstreckt er sich bis zur äußeren Kante des Randes (d. h. er erstreckt sich unter dem Rand in der Z-Schicht). Dieses Standardverhalten kann mit der CSS-Eigenschaft {{cssxref("background-clip")}} geändert werden.

## Innenbereich

Der **Innenbereich**, begrenzt durch die Innenkante, erweitert den Randbereich, um einen leeren Bereich einzuschließen, der verwendet wird, um das Element von seinen Nachbarn zu trennen. Seine Abmessungen sind die _Innenfeldbreite_ und die _Innenfeldhöhe_.

Die Größe des Innenbereichs wird durch die Eigenschaften {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} und die Kurzschreibweise {{cssxref("margin")}} bestimmt. Wenn das [Innenkollabieren](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) auftritt, ist der Innenbereich nicht klar definiert, da Innenbereiche zwischen Boxen geteilt werden.

Zum Schluss, beachten Sie, dass bei nicht ersetzten Inline-Elementen der Platzbedarf (der Beitrag zur Höhe der Zeile) durch die Eigenschaft {{cssxref('line-height')}} bestimmt wird, obwohl die Ränder und Polsterungen weiterhin um den Inhalt angezeigt werden.

## Siehe auch

- [Layout und der enthaltende Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Einführung in den CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
  - [Innenkollabieren](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertdefinition Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzbefehls-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
