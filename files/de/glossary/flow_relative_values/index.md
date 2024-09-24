---
title: Flussbezogene Werte
slug: Glossary/Flow_relative_values
l10n:
  sourceCommit: 63249f6b1e89f42e172878c54a2f9674bee50904
---

{{GlossarySidebar}}

Im CSS sind **flussbezogene Werte** richtungsbezogene Schlüsselwortwerte, die sich auf die Block- und Inline-Achsen eines Elements beziehen. Diese Werte umfassen `block-start`, `block-end`, `inline-start`, `inline-end`, `start` und `end`.

Im CSS definieren {{glossary("physical properties")}} Positionen basierend auf physischen Richtungen und beziehen sich auf spezifische Seiten eines Elements.

CSS {{glossary("logical properties")}} hingegen definieren Stile basierend auf dem Schreibmodus und der Richtung des Dokuments anstelle der physischen Dimensionen des Ansichtsfensters. Logische Eigenschaften sind relativ zum Inhaltsfluss und verwenden richtungsbezogene Schlüsselwörter relativ zu den Block- und Inline-Achsen.

## Blockrichtung

Die **Blockachse** bezieht sich auf die Achse, die die Stapelreihenfolge von Elementen in einem Block-Layout definiert. Es ist im Wesentlichen die Richtung, entlang der Blöcke von Inhalten – wie Absätze ({{htmlelement("p")}}), Überschriften und Divs ({{htmlelement("div")}}) – auf einer Webseite angeordnet sind. Dies wird auch als **Blockrichtung** bezeichnet. In Sprachen, die von links nach rechts und von rechts nach links geschrieben werden, ist die Blockrichtung die vertikale Richtung des Inhaltsflusses, die von oben nach unten verläuft.

Die **block-start** und **block-end** Richtungen repräsentieren die _Startkante_ und die _Endkante_ von Inhalten entlang der Blockachse, bzw. die "von" und "zu" Richtungen, wobei `block-start` dem Äquivalent von `top` und `block-end` dem Äquivalent von `bottom` in horizontalen Schreibmodi entspricht.

## Inlinerichtung

Die **Inline-Achse** steht senkrecht zur Blockachse. Die Inline-Achse repräsentiert die Richtung, entlang derer Inline-Inhalte wie Text innerhalb eines Blocks fließen. Dies wird auch als **Inlinerichtung** bezeichnet. In Schreibmodi von links nach rechts, wie im Englischen, ist die Inlinerichtung horizontal, von links nach rechts. In rechts-nach-links-Sprachen, wie Arabisch und Hebräisch, ist die Inlinerichtung horizontal, von rechts nach links.

**Inline-start** und **inline-end** repräsentieren die _Startkante_ und die _Endkante_ von Inhalten entlang der Inline-Achse, wobei die Werte und Eigenschaften `inline-start` und `inline-end` das Äquivalent zu den Eigenschaften und Werten `left` und `right` in horizontalen Schreibmodi sind. Ob sie `right` oder `left` entsprechen, hängt von der Schreibrichtung ab. Zum Beispiel entspricht `inline-start` in links-nach-rechts Sprachen `left` und in rechts-nach-links Sprachen `right`.

## Start und Ende

Die Auswirkungen einer CSS-Eigenschaft können entweder eindimensional oder zweidimensional sein. Zum Beispiel betrifft {{cssxref("text-align")}} nur die Inlinerichtung des Textes und ist daher eindimensional. Wenn sie auf eine Dimension kontextuell beschränkt ist, werden die flussrelativen Schlüsselwörter auf einfach `start` oder `end` abgekürzt.

## Siehe auch

- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Grundlagen der logischen Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values)
