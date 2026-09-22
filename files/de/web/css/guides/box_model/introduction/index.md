---
title: Einführung in das CSS-Box-Modell
short-title: Introduction
slug: Web/CSS/Guides/Box_model/Introduction
l10n:
  sourceCommit: 298079b550c76f20de6611c4ecdde4c30dc68b2b
---

Beim Layout eines Dokuments stellt die Rendering-Engine des Browsers jedes Element gemäß dem standardmäßigen **CSS-Box-Modell** als rechteckige Box dar. CSS bestimmt die Größe, Position und Eigenschaften dieser Boxen (Farbe, Hintergrund, Rahmenbreite usw.).

Jede Box besteht aus vier Teilen (oder _Bereichen_), die durch ihre jeweiligen Kanten begrenzt sind: die _Inhaltskante_, die _Innenabstandskante_, die _Rahmenkante_ und die _Außenabstandskante_.

![CSS-Box-Modell](boxmodel.png)

## Inhaltsbereich

Der **Inhaltsbereich** wird von der Inhaltskante begrenzt und enthält den eigentlichen Inhalt des Elements, beispielsweise Text, ein Bild oder einen Videoplayer. Seine Abmessungen sind die _Inhaltsbreite_ (oder _content-box-Breite_) und die _Inhaltshöhe_ (oder _content-box-Höhe_). Er hat häufig eine Hintergrundfarbe oder ein Hintergrundbild.

Wenn die Eigenschaft {{cssxref("box-sizing")}} auf `content-box` (Standardwert) gesetzt ist und das Element ein Blockelement ist, kann die Größe des Inhaltsbereichs mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height") }}, {{cssxref("min-height")}} und {{cssxref("max-height")}} ausdrücklich festgelegt werden.

## Innenabstandsbereich

Der **Innenabstandsbereich** wird von der Innenabstandskante begrenzt und erweitert den Inhaltsbereich um den Innenabstand des Elements. Seine Abmessungen sind die _padding-box-Breite_ und die _padding-box-Höhe_.

Die Größe des Innenabstands wird durch die Eigenschaften {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} und die Kurzschreibweise {{cssxref("padding")}} bestimmt.

## Rahmenbereich

Der **Rahmenbereich** wird von der Rahmenkante begrenzt und erweitert den Innenabstandsbereich um die Rahmen des Elements. Seine Abmessungen sind die _border-box-Breite_ und die _border-box-Höhe_.

Die Breite der Rahmen wird durch die Eigenschaft {{cssxref("border-width")}} und die Kurzschreibweise {{cssxref("border")}} bestimmt. Wenn die Eigenschaft {{cssxref("box-sizing")}} auf `border-box` gesetzt ist, kann die Größe des Rahmenbereichs mit den Eigenschaften {{cssxref("width")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}, {{ cssxref("height") }}, {{cssxref("min-height")}} und {{cssxref("max-height")}} ausdrücklich festgelegt werden. Wenn für eine Box ein Hintergrund ({{cssxref("background-color")}} oder {{cssxref("background-image")}}) festgelegt ist, reicht dieser bis zur Außenkante des Rahmens (liegt in der Z-Reihenfolge also unter dem Rahmen). Dieses Standardverhalten kann mit der CSS-Eigenschaft {{cssxref("background-clip")}} geändert werden.

## Außenabstandsbereich

Der **Außenabstandsbereich** wird von der Außenabstandskante begrenzt und erweitert den Rahmenbereich um einen leeren Bereich, der das Element von benachbarten Elementen trennt. Seine Abmessungen sind die _margin-box-Breite_ und die _margin-box-Höhe_.

Die Größe des Außenabstandsbereichs wird durch die Eigenschaften {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} und die Kurzschreibweise {{cssxref("margin")}} bestimmt. Wenn [Außenabstände zusammenfallen](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing), ist der Außenabstandsbereich nicht eindeutig definiert, da sich Boxen die Außenabstände teilen.

Beachten Sie schließlich, dass bei nicht ersetzten Inline-Elementen der Platzbedarf (ihr Beitrag zur Zeilenhöhe) durch die Eigenschaft {{cssxref('line-height')}} bestimmt wird, obwohl Rahmen und Innenabstand weiterhin um den Inhalt herum angezeigt werden.

## Siehe auch

- Modul [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model)
- [Layout und der umschließende Block](/de/docs/Web/CSS/Guides/Display/Containing_block)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [CSS lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- Grundkonzepte von CSS:
  - [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)
  - [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
  - [Kommentare](/de/docs/Web/CSS/Guides/Syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - [Zusammenfallen von Außenabständen](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - Werte:
    - [Anfangswerte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
  - [Syntax zur Definition von Werten](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - [Kurzschreibweisen für Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
