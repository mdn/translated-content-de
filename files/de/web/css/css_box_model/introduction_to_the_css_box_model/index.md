---
title: Einführung in das CSS-Basisboxmodell
slug: Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Beim Anordnen eines Dokuments stellt die Rendering-Engine des Browsers jedes Element als ein rechteckiges Kästchen entsprechend dem standardmäßigen **CSS-Basisboxmodell** dar. CSS bestimmt die Größe, Position und Eigenschaften (Farbe, Hintergrund, Rahmenbreite etc.) dieser Boxen.

Jede Box besteht aus vier Teilen (oder _Bereichen_), die durch ihre jeweiligen Kanten definiert sind: die _Inhaltskante_, die _Innenabstandkante_, die _Rahmenkante_ und die _Außenabstandkante_.

![CSS Boxmodel](boxmodel.png)

## Inhaltsbereich

Der **Inhaltsbereich**, begrenzt durch die Inhaltskante, enthält den „tatsächlichen“ Inhalt des Elements, wie Text, ein Bild oder einen Videoplayer. Seine Abmessungen sind die _Inhaltsbreite_ (oder _content-box width_) und die _Inhaltshöhe_ (oder _content-box height_). Er hat häufig eine Hintergrundfarbe oder ein Hintergrundbild.

Wenn die {{cssxref("box-sizing")}}-Eigenschaft auf `content-box` (Standardwert) gesetzt ist und wenn das Element ein Blockelement ist, kann die Größe des Inhaltsbereichs explizit durch die Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden.

## Innenabstandsbereich

Der **Innenabstandsbereich**, begrenzt durch die Innenabstandkante, erweitert den Inhaltsbereich, um den Innenabstand des Elements einzuschließen. Seine Abmessungen sind die _padding-box Breite_ und die _padding-box Höhe_.

Die Dicke des Innenabstandes wird durch die Eigenschaften {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} und die Kurzform {{cssxref("padding")}} bestimmt.

## Rahmenbereich

Der **Rahmenbereich**, begrenzt durch die Rahmenkante, erweitert den Innenabstandsbereich, um die Rahmen des Elements einzuschließen. Seine Abmessungen sind die _border-box Breite_ und die _border-box Höhe_.

Die Dicke der Rahmen wird durch die Eigenschaften {{cssxref("border-width")}} und die Kurzform {{cssxref("border")}} bestimmt. Wenn die {{cssxref("box-sizing")}}-Eigenschaft auf `border-box` gesetzt ist, kann die Größe des Rahmenbereichs explizit durch die Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden. Wenn ein Hintergrund ({{cssxref("background-color")}} oder {{cssxref("background-image")}}) für eine Box festgelegt ist, erstreckt er sich bis zur äußeren Kante des Rahmens (d. h. er wird unter dem Rahmen in der Schichtreihenfolge angezeigt). Dieses Standardverhalten kann mit der CSS-Eigenschaft {{cssxref("background-clip")}} geändert werden.

## Außenabstandsbereich

Der **Außenabstandsbereich**, begrenzt durch die Außenabstandkante, erweitert den Rahmenbereich, um einen leeren Bereich einzuschließen, der verwendet wird, um das Element von seinen Nachbarn zu trennen. Seine Abmessungen sind die _margin-box Breite_ und die _margin-box Höhe_.

Die Größe des Außenabstandsbereichs wird durch die Eigenschaften {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} und die Kurzform {{cssxref("margin")}} bestimmt. Wenn [Außenabstände zusammenfallen](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing), ist der Außenabstandsbereich nicht klar definiert, da die Außenabstände zwischen Kästchen geteilt werden.

Abschließend sei darauf hingewiesen, dass bei nicht ersetzten Inline-Elementen der tatsächlich eingenommene Platz (der Beitrag zur Höhe der Zeile) durch die {{cssxref("line-height")}}-Eigenschaft bestimmt wird, auch wenn die Rahmen und Innenabstände weiterhin um den Inhalt angezeigt werden.

## Siehe auch

- [Layout und der beinhaltende Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Einführung in den CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Zusammenfallende Außenabstände](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Genutzte Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzform-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersatz-Elemente](/de/docs/Web/CSS/Replaced_element)
