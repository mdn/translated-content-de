---
title: Logische Eigenschaften
slug: Glossary/Logical_properties
l10n:
  sourceCommit: aa0ae01fcb69a07b099406e5d6ce907ee9b2f929
---

{{GlossarySidebar}}

CSS **logische Eigenschaften** bieten eine Möglichkeit, Inhalte basierend auf dem Schreibmodus und der Schreibrichtung des Dokuments anstatt auf den physischen Dimensionen des Ansichtsfensters anzuordnen. Dies ermöglicht flexiblere und leichter wartbare Designs, insbesondere für Websites, die mehrere Sprachen unterstützen.

Während [physische Eigenschaften](/de/docs/Glossary/physical_properties), wie {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("padding-bottom")}} und {{cssxref("border-bottom-left-radius")}}, Positionen und Merkmale basierend auf physischen Richtungen und referenzieren spezifische Seiten eines Elements definieren, verwenden logische Eigenschaften wie {{cssxref("inset-block-start")}}, {{cssxref("inset-inline-end")}}, {{cssxref("padding-block-end")}} und {{cssxref("border-end-end-radius")}} logische Richtungsbegriffe, die relativ zum Inhaltsfluss entlang der Block- und Inline-Achsen sind.

## Blockrichtung

Die **Blockachse** bezieht sich auf die Achse, die die Stapelreihenfolge von Elementen in einem Blocklayout definiert. Es ist im Wesentlichen die Richtung, entlang derer Inhaltsblöcke – wie Absätze ({{htmlelement("p")}}), Überschriften und Divs ({{htmlelement("div")}}) – auf einer Webseite angeordnet werden. Dies wird auch als **Blockrichtung** bezeichnet. In Links-nach-Rechts- und Links-nach-Rechts-Sprachen ist die Blockrichtung die vertikale Richtung des Inhaltsflusses, von oben nach unten.

Die Richtungen **block-start** und **block-end** repräsentieren den _Anfangsrand_ und den _Endrand_ des Inhalts entlang der Blockachse oder die "von" und "zu" Richtungen, wobei `block-start` dem `top` und `block-end` dem `bottom` in horizontalen Schreibmodi entspricht.

## Inline-Richtung

Die **Inline-Achse** steht senkrecht zur Blockachse. Die Inline-Achse stellt die Richtung dar, in der Inline-Inhalte wie Text innerhalb eines Blocks fließen. Dies wird auch als **Inline-Richtung** bezeichnet. In linken-nach-rechten Schreibmodi, wie im Englischen, ist die Inline-Richtung horizontal, von links nach rechts. In rechts-nach-links-Sprachen, wie Arabisch und Hebräisch, ist die Inline-Richtung horizontal, von rechts nach links.

**Inline-start** und **inline-end** repräsentieren den _Anfangsrand_ und den _Endrand_ des Inhalts entlang der Inline-Achse, wobei die Werte und Eigenschaften `inline-start` und `inline-end` den `left` und `right` Eigenschaften und Werten in horizontalen Schreibmodi entsprechen. Welche den `right` oder `left` entsprechen, hängt von der Schreibrichtung ab – zum Beispiel ist `inline-start` `left` in Links-nach-Rechts-Sprachen und `right` in Rechts-nach-Links-Sprachen.

## Siehe auch

- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
