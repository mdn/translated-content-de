---
title: Logical properties
slug: Glossary/Logical_properties
l10n:
  sourceCommit: aa0ae01fcb69a07b099406e5d6ce907ee9b2f929
---

{{GlossarySidebar}}

CSS **logische Eigenschaften** bieten eine Möglichkeit, Inhalte basierend auf dem Schreibmodus und der Richtung des Dokuments anzuordnen, anstatt auf die physischen Abmessungen des Viewports. Dies ermöglicht flexiblere und pflegeleichtere Designs, insbesondere für Websites, die mehrere Sprachen unterstützen.

Während [physische Eigenschaften](/de/docs/Glossary/physical_properties), wie {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("padding-bottom")}} und {{cssxref("border-bottom-left-radius")}}, Positionen und Merkmale basierend auf physischen Richtungen definieren und sich auf bestimmte Seiten eines Elements beziehen, verwenden logische Eigenschaften wie {{cssxref("inset-block-start")}}, {{cssxref("inset-inline-end")}}, {{cssxref("padding-block-end")}} und {{cssxref("border-end-end-radius")}} logische Richtungsbezeichner, die relativ zum Inhaltsfluss entlang der Block- und Inline-Achsen sind.

## Blockrichtung

Die **Blockachse** bezieht sich auf die Achse, die die Stapelreihenfolge von Elementen in einem Block-Layout definiert. Es ist im Wesentlichen die Richtung, entlang derer Inhaltsblöcke — wie Absätze ({{htmlelement("p")}}), Überschriften und Divs ({{htmlelement("div")}}) — auf einer Webseite angeordnet werden. Dies ist auch als die **Blockrichtung** bekannt. In von links nach rechts und von links nach rechts verlaufenden Sprachen ist die Blockrichtung die vertikale Richtung des Inhaltsflusses, von oben nach unten verlaufend.

Die **block-start**- und **block-end**-Richtungen repräsentieren die _Startkante_ und _Endkante_ des Inhalts entlang der Blockachse bzw. die "von" und "nach" Richtungen, wobei `block-start` dem Äquivalent von `top` und `block-end` dem Äquivalent von `bottom` in horizontalen Schreibrichtungen entspricht.

## Inlinerichtung

Die **Inline-Achse** steht senkrecht zur Blockachse. Die Inline-Achse repräsentiert die Richtung, entlang derer Inline-Inhalte wie Texte innerhalb eines Blocks fließen. Dies wird auch als die **Inlinerichtung** bezeichnet. In Schreibrichtungen von links nach rechts, wie Englisch, ist die Inlinerichtung horizontal, von links nach rechts. In Sprachen von rechts nach links, wie Arabisch und Hebräisch, ist die Inlinerichtung horizontal, von rechts nach links.

**Inline-start** und **inline-end** repräsentieren die _Startkante_ und _Endkante_ des Inhalts entlang der Inline-Achse, wobei die Werte und Eigenschaften `inline-start` und `inline-end` den Eigenschaften und Werten `left` und `right` in horizontalen Schreibrichtungen entsprechen. Welche äquivalent zu `right` oder `left` sind, hängt von der Schreibrichtung ab — zum Beispiel ist `inline-start` `left` in Sprachen von links nach rechts und `right` in Sprachen von rechts nach links.

## Siehe auch

- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
