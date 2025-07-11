---
title: Flussbezogene Werte
slug: Glossary/Flow_relative_values
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In CSS sind **flussbezogene Werte** richtungsabhängige Schlüsselwortwerte, die sich auf die Block- und Inline-Achsen eines Elements beziehen. Diese Werte umfassen `block-start`, `block-end`, `inline-start`, `inline-end`, `start` und `end`.

In CSS definieren {{Glossary("physical_properties", "physikalische Eigenschaften")}} Positionen basierend auf physikalischen Richtungen und beziehen sich auf spezifische Seiten eines Elements.

CSS {{Glossary("logical_properties", "logische Eigenschaften")}} hingegen definieren Stile basierend auf dem Schreibmodus und der Richtung des Dokuments anstatt der physikalischen Dimensionen des Ansichtsfensters. Logische Eigenschaften sind relativ zum Inhaltsfluss und verwenden richtungsabhängige Schlüsselwörter, die sich auf die Block- und Inline-Achsen beziehen.

## Blockrichtung

Die **Blockachse** bezieht sich auf die Achse, die die Stapelreihenfolge von Elementen im Block-Layout definiert. Im Wesentlichen ist dies die Richtung, entlang der Blöcke von Inhalten – wie Absätze ({{htmlelement("p")}}), Überschriften und Divs ({{htmlelement("div")}}) – auf einer Webseite angeordnet sind. Dies wird auch als **Blockrichtung** bezeichnet. In links-nach-rechts und rechts-nach-links Sprachen ist die Blockrichtung die vertikale Richtung des Inhaltsflusses, der von oben nach unten verläuft.

Die **block-start** und **block-end** Richtungen repräsentieren die _Startkante_ und _Endkante_ des Inhalts entlang der Blockachse, beziehungsweise die "von" und "zu" Richtungen, wobei `block-start` dem Äquivalent von `top` und `block-end` dem Äquivalent von `bottom` in horizontalen Schreibmodi entspricht.

## Inline-Richtung

Die **Inline-Achse** steht senkrecht zur Blockachse. Die Inline-Achse repräsentiert die Richtung, entlang der inline Inhalte wie Text innerhalb eines Blocks fließen. Dies wird auch als **Inline-Richtung** bezeichnet. In links-nach-rechts Schreibmodi, wie Englisch, ist die Inline-Richtung horizontal, von links nach rechts. In rechts-nach-links Sprachen, wie Arabisch und Hebräisch, ist die Inline-Richtung horizontal, von rechts nach links.

**Inline-start** und **inline-end** repräsentieren die _Startkante_ und _Endkante_ des Inhalts entlang der Inline-Achse, wobei die Werte und Eigenschaften `inline-start` und `inline-end` dem Äquivalent der `left` und `right` Eigenschaften und Werte in horizontalen Schreibmodi entsprechen. Ob sie `right` oder `left` entsprechen hängt von der Schreibrichtung ab. Zum Beispiel entspricht `inline-start` in links-nach-rechts Sprachen `left` und in rechts-nach-links Sprachen `right`.

## Start und Ende

Die Auswirkungen einer CSS-Eigenschaft können entweder eindimensional oder zweidimensional sein. Zum Beispiel betrifft {{cssxref("text-align")}} nur die Inline-Richtung des Textes und ist daher eindimensional. Wenn kontextuell auf eine Dimension eingeschränkt, werden die flussbezogenen Schlüsselwörter nur auf `start` oder `end` abgekürzt.

## Siehe auch

- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Grundlagen der logischen Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values)
