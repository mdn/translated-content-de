---
title: Logische Eigenschaften
slug: Glossary/Logical_properties
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

CSS **logische Eigenschaften** bieten eine Möglichkeit, Inhalte basierend auf dem Schreibmodus und der Ausrichtung des Dokuments anstelle der physischen Dimensionen des Ansichtsfensters zu gestalten. Dies ermöglicht flexiblere und wartungsfreundlichere Designs, insbesondere für Websites, die mehrere Sprachen unterstützen.

Während {{Glossary("physical_properties", "physische Eigenschaften")}}, wie {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("padding-bottom")}} und {{cssxref("border-bottom-left-radius")}}, Positionen und Merkmale basierend auf physischen Richtungen definieren und spezifische Seiten eines Elements referenzieren, nutzen logische Eigenschaften wie {{cssxref("inset-block-start")}}, {{cssxref("inset-inline-end")}}, {{cssxref("padding-block-end")}} und {{cssxref("border-end-end-radius")}} logische Richtungsbegriffe, die relativ zum Inhaltsfluss entlang der Block- und Inline-Achsen sind.

## Blockrichtung

Die **Blockachse** bezieht sich auf die Achse, die die Stapelreihenfolge der Elemente in einem Blocklayout definiert. Dies ist im Wesentlichen die Richtung, in der Inhaltsblöcke – wie Absätze ({{htmlelement("p")}}), Überschriften und Divs ({{htmlelement("div")}}) – auf einer Webseite angeordnet werden. Dies wird auch als die **Blockrichtung** bezeichnet. In Links-nach-Rechts- und Rechts-nach-Links-Sprachen ist die Blockrichtung die vertikale Richtung des Inhaltsflusses, von oben nach unten.

Die **block-start**- und **block-end**-Richtungen repräsentieren den _Anfangsrand_ und den _Endrand_ des Inhalts entlang der Blockachse, oder die "von"- und "zu"-Richtungen, wobei `block-start` das Äquivalent zu `top` und `block-end` das Äquivalent zu `bottom` in horizontalen Schreibmodi ist.

## Inlinerichtung

Die **Inline-Achse** ist senkrecht zur Blockachse. Die Inline-Achse repräsentiert die Richtung, in der Inline-Inhalte wie Text innerhalb eines Blocks fließen. Dies wird auch als die **Inlinerichtung** bezeichnet. In Links-nach-Rechts-Schreibmodi, wie Englisch, ist die Inlinerichtung horizontal, von links nach rechts. In Rechts-nach-Links-Sprachen, wie Arabisch und Hebräisch, ist die Inlinerichtung horizontal, von rechts nach links.

**Inline-start** und **inline-end** repräsentieren den _Anfangsrand_ und den _Endrand_ des Inhalts entlang der Inline-Achse, wobei die Werte und Eigenschaften `inline-start` und `inline-end` äquivalent zu den Eigenschaften und Werten `left` und `right` in horizontalen Schreibmodi sind. Welche äquivalent zu `right` oder `left` sind, hängt von der Schreibrichtung ab – zum Beispiel ist `inline-start` in Links-nach-Rechts-Sprachen `left` und in Rechts-nach-Links-Sprachen `right`.

## Siehe auch

- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
