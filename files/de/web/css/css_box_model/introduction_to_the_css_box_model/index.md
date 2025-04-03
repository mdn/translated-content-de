---
title: Einführung in das grundlegende CSS-Box-Modell
slug: Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Beim Layout einer Seite stellt die Rendering-Engine des Browsers jedes Element gemäß dem standardisierten **CSS-Basis-Box-Modell** als rechteckige Box dar. CSS bestimmt die Größe, Position und Eigenschaften (Farbe, Hintergrund, Randgröße usw.) dieser Boxen.

Jede Box besteht aus vier Teilen (oder _Bereichen_), die durch ihre jeweiligen Kanten definiert sind: der _Inhaltskante_, _Abstandskante_, _Rahmenkante_ und _Außenkante_.

![CSS Box-Modell](boxmodel.png)

## Inhaltsbereich

Der **Inhaltsbereich**, der von der Inhaltskante begrenzt wird, enthält den "echten" Inhalt des Elements, wie z.B. Text, ein Bild oder ein Videoplayer. Seine Abmessungen sind die _Inhaltsbreite_ (oder _content-box width_) und die _Inhaltshöhe_ (oder _content-box height_). Er hat oft eine Hintergrundfarbe oder ein Hintergrundbild.

Wenn die {{cssxref("box-sizing")}}-Eigenschaft auf `content-box` (Standard) gesetzt ist und das Element ein Blockelement ist, kann die Größe des Inhaltsbereichs explizit mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden.

## Abstand-Bereich

Der **Abstand-Bereich**, der von der Abstandskante begrenzt wird, erweitert den Inhaltsbereich, um den Abstand des Elements einzuschließen. Seine Abmessungen sind die _Abstandskastenbreite_ und die _Abstandskastenhöhe_.

Die Dicke des Abstands wird durch die Eigenschaften {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} und die Kurzform {{cssxref("padding")}} bestimmt.

## Rahmenbereich

Der **Rahmenbereich**, der von der Rahmenkante begrenzt wird, erweitert den Abstand-Bereich, um die Rahmen des Elements einzuschließen. Seine Abmessungen sind die _Rahmenkastenbreite_ und die _Rahmenkastenhöhe_.

Die Dicke der Rahmen wird durch die Eigenschaften {{cssxref("border-width")}} und die Kurzform {{cssxref("border")}} bestimmt. Wenn die {{cssxref("box-sizing")}}-Eigenschaft auf `border-box` gesetzt ist, kann die Größe des Rahmenbereichs explizit mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden. Wenn ein Hintergrund ({{cssxref("background-color")}} oder {{cssxref("background-image")}}) auf einer Box gesetzt ist, erstreckt er sich bis zur äußeren Kante des Rahmens (d.h. er erstreckt sich unter dem Rahmen in der Z-Ordnung). Dieses Standardverhalten kann mit der CSS-Eigenschaft {{cssxref("background-clip")}} geändert werden.

## Außenbereich

Der **Außenbereich**, der von der Außenkante begrenzt wird, erweitert den Rahmenbereich, um einen leeren Bereich einzuschließen, der dazu verwendet wird, das Element von seinen Nachbarn zu trennen. Seine Abmessungen sind die _Außenkastenbreite_ und die _Außenkastenhöhe_.

Die Größe des Außenbereichs wird durch die Eigenschaften {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} und die Kurzform {{cssxref("margin")}} bestimmt. Wenn [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) auftritt, ist der Außenbereich nicht klar definiert, da Ränder zwischen Boxen geteilt werden.

Beachten Sie abschließend, dass bei nicht ersetzten Inline-Elementen der Raum, der eingenommen wird (der Beitrag zur Höhe der Zeile), durch die {{cssxref('line-height')}}-Eigenschaft bestimmt wird, obwohl die Rahmen und Abstände immer noch um den Inhalt angezeigt werden.

## Siehe auch

- [Layout und der enthaltende Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- Schlüsselkonzepte von CSS:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
    - [Aktuelle Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
  - [Wert-Definitions-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzform-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
