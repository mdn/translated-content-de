---
title: Einführung in das CSS-Grundlegende Box-Modell
slug: Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model
l10n:
  sourceCommit: 28505c5b2d83732399d8ba96e4b32793580a7f13
---

{{CSSRef}}

Beim Layouten eines Dokuments stellt die Rendering-Engine des Browsers jedes Element als rechteckige Box gemäß dem Standard **CSS-Grundlegende Box-Modell** dar. CSS bestimmt die Größe, Position und Eigenschaften (Farbe, Hintergrund, Randgröße usw.) dieser Boxen.

Jede Box besteht aus vier Teilen (oder _Bereichen_), die durch ihre jeweiligen Begrenzungen definiert sind: die _Inhaltsbegrenzung_, _Polsterbegrenzung_, _Randbegrenzung_ und _Abstandsbegrenzung_.

![CSS Box-Modell](boxmodel.png)

## Inhaltsbereich

Der **Inhaltsbereich**, begrenzt durch die Inhaltsbegrenzung, enthält den "echten" Inhalt des Elements, wie Text, ein Bild oder einen Videoplayer. Seine Abmessungen sind die _Inhaltsbreite_ (oder _Content-Box-Breite_) und die _Inhaltshöhe_ (oder _Content-Box-Höhe_). Er hat oft eine Hintergrundfarbe oder ein Hintergrundbild.

Wenn die Eigenschaft {{cssxref("box-sizing")}} auf `content-box` (Standard) gesetzt ist und das Element ein Blockelement ist, kann die Größe des Inhaltsbereichs explizit mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height") }}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden.

## Polsterbereich

Der **Polsterbereich**, begrenzt durch die Polsterbegrenzung, erweitert den Inhaltsbereich, um die Polsterung des Elements einzuschließen. Seine Abmessungen sind die _Polster-Box-Breite_ und die _Polster-Box-Höhe_.

Die Dicke der Polsterung wird durch die Eigenschaften {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} und die Kurzform {{cssxref("padding")}} bestimmt.

## Randbereich

Der **Randbereich**, begrenzt durch die Randbegrenzung, erweitert den Polsterbereich, um die Ränder des Elements einzuschließen. Seine Abmessungen sind die _Rand-Box-Breite_ und die _Rand-Box-Höhe_.

Die Dicke der Ränder wird durch die Eigenschaft {{cssxref("border-width")}} und die Kurzform {{cssxref("border")}} bestimmt. Wenn die Eigenschaft {{cssxref("box-sizing")}} auf `border-box` gesetzt ist, kann die Größe des Randbereichs explizit mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height") }}, {{cssxref("min-height")}} und {{cssxref("max-height")}} definiert werden. Wenn ein Hintergrund ({{cssxref("background-color")}} oder {{cssxref("background-image")}}) auf einer Box festgelegt ist, erstreckt er sich bis zur äußeren Kante des Randes (d. h., er erstreckt sich unter den Rand in der Z-Reihenfolge). Dieses Standardverhalten kann mit der CSS-Eigenschaft {{cssxref("background-clip")}} geändert werden.

## Abstandsbereich

Der **Abstandsbereich**, begrenzt durch die Abstandsbegrenzung, erweitert den Randbereich, um einen leeren Bereich einzuschließen, der verwendet wird, um das Element von seinen Nachbarn zu trennen. Seine Abmessungen sind die _Abstand-Box-Breite_ und die _Abstand-Box-Höhe_.

Die Größe des Abstandsbereichs wird durch die Eigenschaften {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} und die Kurzform {{cssxref("margin")}} bestimmt. Wenn das [Abstandskollapsen](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) auftritt, ist der Abstandsbereich nicht klar definiert, da Abstände zwischen Boxen geteilt werden.

Abschließend sei angemerkt, dass für nicht ersetzte Inline-Elemente der tatsächlich eingenommene Platz (der Beitrag zur Höhe der Zeile) durch die Eigenschaft {{cssxref('line-height')}} bestimmt wird, auch wenn die Ränder und Polsterungen immer noch um den Inhalt herum angezeigt werden.

## Siehe auch

- [Layout und der umgebende Block](/de/docs/Web/CSS/Containing_block)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Cascade)
- [Kaskade, Spezifität und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- Wichtige Konzepte in CSS:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [Regeln](/de/docs/Web/CSS/At-rule)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Abstandskollapsen](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Wertesyntaxdefinition](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzform-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
