---
title: Logische Eigenschaften
slug: Glossary/Logical_properties
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

CSS **logische Eigenschaften** bieten eine Möglichkeit, Inhalte basierend auf dem Schreibmodus und der Schreibrichtung des Dokuments und nicht auf den physischen Abmessungen des Viewports zu layouten. Dies ermöglicht flexiblere und wartungsfreundlichere Designs, insbesondere für Websites, die mehrere Sprachen unterstützen.

Während {{Glossary("physical_properties", "physische Eigenschaften")}} wie {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("padding-bottom")}} und {{cssxref("border-bottom-left-radius")}} Positionen und Merkmale basierend auf physischen Richtungen definieren und spezifische Seiten eines Elements referenzieren, verwenden logische Eigenschaften wie {{cssxref("inset-block-start")}}, {{cssxref("inset-inline-end")}}, {{cssxref("padding-block-end")}} und {{cssxref("border-end-end-radius")}} logische Richtungs-Schlüsselwörter, die relativ zum Inhaltsfluss entlang der Block- und Inline-Achsen sind.

## Blockrichtung

Die **Blockachse** bezieht sich auf die Achse, die die Stapelreihenfolge von Elementen in einem Blocklayout definiert. Im Wesentlichen ist es die Richtung, entlang derer Blöcke von Inhalten — wie Absätze ({{htmlelement("p")}}), Überschriften und divs ({{htmlelement("div")}}) — auf einer Webseite angeordnet sind. Dies wird auch als **Blockrichtung** bezeichnet. In Links-nach-Rechts und Links-nach-Rechts-Sprachen ist die Blockrichtung die vertikale Richtung des Inhaltsflusses, die von oben nach unten verläuft.

Die **block-start**- und **block-end**-Richtungen repräsentieren den _Anfangsrand_ und den _Endrand_ des Inhalts entlang der Blockachse oder die „von“ und „nach“ Richtungen mit `block-start`, das dem Äquivalent von `top` und `block-end`, das dem Äquivalent von `bottom` in horizontalen Schreibmodi entspricht.

## Inline-Richtung

Die **Inline-Achse** steht senkrecht zur Blockachse. Die Inline-Achse repräsentiert die Richtung, entlang welcher Inline-Inhalte wie Text in einem Block fließen. Dies wird auch als **Inline-Richtung** bezeichnet. In Links-nach-Rechts-Schreibmodi wie dem Englischen ist die Inline-Richtung horizontal, von links nach rechts. In Rechts-nach-Links-Sprachen wie Arabisch und Hebräisch ist die Inline-Richtung horizontal, von rechts nach links.

**Inline-start** und **inline-end** repräsentieren den _Anfangsrand_ und den _Endrand_ des Inhalts entlang der Inline-Achse, wobei die Werte und Eigenschaften `inline-start` und `inline-end` den `left`- und `right`-Eigenschaften und -Werten in horizontalen Schreibmodi entsprechen. Welche den `right`- oder `left`-Eigenschaften entsprechen, hängt von der Schreibrichtung ab — zum Beispiel ist `inline-start` `left` in Links-nach-Rechts-Sprachen und `right` in Rechts-nach-Links-Sprachen.

## Siehe auch

- Modul [CSS logical properties and values](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
