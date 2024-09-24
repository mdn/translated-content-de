---
title: Logische Eigenschaften
slug: Glossary/Logical_properties
l10n:
  sourceCommit: aa0ae01fcb69a07b099406e5d6ce907ee9b2f929
---

{{GlossarySidebar}}

CSS **logische Eigenschaften** bieten eine Möglichkeit, Inhalte basierend auf dem Schreibmodus und der Schreibrichtung des Dokuments anzupassen, anstatt auf den physikalischen Dimensionen des Ansichtsfensters. Dies ermöglicht flexiblere und wartbare Designs, insbesondere für Websites, die mehrere Sprachen unterstützen.

Während {{glossary("physische Eigenschaften")}}, wie {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("padding-bottom")}} und {{cssxref("border-bottom-left-radius")}}, Positionen und Merkmale basierend auf physischen Richtungen definieren und sich auf spezifische Seiten eines Elements beziehen, verwenden logische Eigenschaften wie {{cssxref("inset-block-start")}}, {{cssxref("inset-inline-end")}}, {{cssxref("padding-block-end")}} und {{cssxref("border-end-end-radius")}} logische Richtungs-Schlüsselwörter, die relativ zum Inhaltsfluss entlang der Block- und Inline-Achsen sind.

## Blockrichtung

Die **Blockachse** bezieht sich auf die Achse, die die Stapelreihenfolge von Elementen in einem Blocklayout definiert. Im Wesentlichen ist es die Richtung, entlang derer Inhaltsblöcke — wie Absätze ({{htmlelement("p")}}), Überschriften und Divs ({{htmlelement("div")}}) — auf einer Webseite angeordnet sind. Dies wird auch als **Blockrichtung** bezeichnet. In links-nach-rechts und links-nach-rechts Sprachen ist die Blockrichtung die vertikale Richtung des Inhaltsflusses, von oben nach unten.

Die **block-start**- und **block-end**-Richtungen repräsentieren die _Startseite_ und _Endseite_ von Inhalten entlang der Blockachse, oder die "von"- und "zu"-Richtungen, wobei `block-start` das Äquivalent von `top` und `block-end` das Äquivalent von `bottom` in horizontalen Schreibmodi ist.

## Inlinerichtung

Die **Inlineachse** steht senkrecht zur Blockachse. Die Inlineachse repräsentiert die Richtung, entlang derer Inline-Inhalte wie Text innerhalb eines Blocks fließen. Dies wird auch als **Inlinerichtung** bezeichnet. In links-nach-rechts Schreibmodi, wie Englisch, ist die Inlinerichtung horizontal, von links nach rechts. In rechts-nach-links Sprachen, wie Arabisch und Hebräisch, ist die Inlinerichtung horizontal, von rechts nach links.

**Inline-start** und **inline-end** repräsentieren die _Startseite_ und _Endseite_ von Inhalten entlang der Inlineachse, mit den Werten und Eigenschaften `inline-start` und `inline-end`, die äquivalente Bedeutungen zu den `left`- und `right`-Eigenschaften und Werten in horizontalen Schreibmodi haben. Welche äquivalent zu `right` oder `left` sind, hängt von der Schreibrichtung ab — zum Beispiel ist `inline-start` `left` in links-nach-rechts Sprachen und `right` in rechts-nach-links Sprachen.

## Siehe auch

- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
