---
title: Einführung in das CSS-Basis-Boxmodell
slug: Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model
l10n:
  sourceCommit: 28505c5b2d83732399d8ba96e4b32793580a7f13
---

{{CSSRef}}

Beim Layouten eines Dokuments stellt die Rendering-Engine des Browsers jedes Element als rechteckige Box dar, gemäß dem standardmäßigen **CSS-Basis-Boxmodell**. CSS bestimmt die Größe, Position und Eigenschaften (Farbe, Hintergrund, Randgröße usw.) dieser Boxen.

Jede Box besteht aus vier Teilen (oder _Bereichen_), die durch ihre jeweiligen Kanten definiert sind: der _Inhaltskante_, _Auffüllungskante_, _Randkante_ und _Abstandskante_.

![CSS Box model](boxmodel.png)

## Inhaltsbereich

Der **Inhaltsbereich**, begrenzt durch die Inhaltskante, enthält den "echten" Inhalt des Elements, wie Text, ein Bild oder einen Video-Player. Seine Abmessungen sind die _Inhaltsbreite_ (oder _content-box width_) und die _Inhaltshöhe_ (oder _content-box height_). Oft hat er eine Hintergrundfarbe oder ein Hintergrundbild.

Wenn die {{cssxref("box-sizing")}} Eigenschaft auf `content-box` (Standard) gesetzt ist und das Element ein Blockelement ist, kann die Größe des Inhaltsbereichs mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} explizit definiert werden.

## Auffüllungsbereich

Der **Auffüllungsbereich**, begrenzt durch die Auffüllungskante, erweitert den Inhaltsbereich um die Auffüllung des Elements zu beinhalten. Seine Abmessungen sind die _Auffüllungsbox-Breite_ und die _Auffüllungsbox-Höhe_.

Die Dicke der Auffüllung wird durch die Eigenschaften {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} und die Kurzschreibweise {{cssxref("padding")}} bestimmt.

## Randbereich

Der **Randbereich**, begrenzt durch die Randkante, erweitert den Auffüllungsbereich um die Ränder des Elements zu beinhalten. Seine Abmessungen sind die _Randbox-Breite_ und die _Randbox-Höhe_.

Die Dicke der Ränder wird durch die Eigenschaften {{cssxref("border-width")}} und die Kurzschreibweise {{cssxref("border")}} bestimmt. Wenn die {{cssxref("box-sizing")}} Eigenschaft auf `border-box` gesetzt ist, kann die Größe des Randbereichs mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}} und {{cssxref("max-height")}} explizit definiert werden. Wenn ein Hintergrund ({{cssxref("background-color")}} oder {{cssxref("background-image")}}) auf einer Box gesetzt ist, erstreckt er sich bis zur äußeren Kante des Randes (d.h. er erstreckt sich unter den Rand in der Z-Reihenfolge). Dieses Standardverhalten kann mit der {{cssxref("background-clip")}} CSS-Eigenschaft geändert werden.

## Abstandbereich

Der **Abstandbereich**, begrenzt durch die Abstandskante, erweitert den Randbereich um einen leeren Bereich, der verwendet wird, um das Element von seinen Nachbarn zu trennen. Seine Abmessungen sind die _Abstandsbox-Breite_ und die _Abstandsbox-Höhe_.

Die Größe des Abstandbereichs wird durch die Eigenschaften {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} und die Kurzschreibweise {{cssxref("margin")}} bestimmt. Wenn [Margin-Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) auftritt, ist der Abstandbereich nicht klar definiert, da Abstände zwischen Boxen geteilt werden.

Abschließend sei darauf hingewiesen, dass für nicht ersetzte Inline-Elemente die eingenommene Fläche (der Beitrag zur Höhe der Zeile) durch die Eigenschaft {{cssxref('line-height')}} bestimmt wird, obwohl die Ränder und Auffüllungen weiterhin um den Inhalt angezeigt werden.

## Siehe auch

- [Layout und der umgebende Block](/de/docs/Web/CSS/Containing_block)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Cascade)
- [Kaskade, Spezifität und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [Regeln](/de/docs/Web/CSS/At-rule)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Margin-Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Wertedefinition Syntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzform-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
