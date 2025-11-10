---
title: Flow-relative Werte
slug: Glossary/Flow_relative_values
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In CSS sind **flow-relative Werte** richtungsbezogene Schlüsselwortwerte, die relativ zu den Block- und Inline-Achsen eines Elements sind. Diese Werte umfassen `block-start`, `block-end`, `inline-start`, `inline-end`, `start` und `end`.

In CSS definieren {{Glossary("physical_properties", "physische Eigenschaften")}} Positionen basierend auf physischen Richtungen und beziehen sich auf bestimmte Seiten eines Elements.

CSS {{Glossary("logical_properties", "logische Eigenschaften")}} hingegen definieren Stile basierend auf dem Schreibrichtung-Modus des Dokuments und nicht auf den physischen Dimensionen des Ansichtsfensters. Logische Eigenschaften sind relativ zum Inhaltsfluss und verwenden richtungsbezogene Schlüsselwörter relativ zu den Block- und Inline-Achsen.

## Blockrichtung

Die **Blockachse** bezieht sich auf die Achse, die die Stapelreihenfolge von Elementen in einem Block-Layout definiert. Es ist im Wesentlichen die Richtung, entlang der die Inhaltsblöcke – wie Absätze ({{htmlelement("p")}}), Überschriften und Divs ({{htmlelement("div")}}) – auf einer Webseite angeordnet sind. Dies wird auch als **Blockrichtung** bezeichnet. In Links-nach-Rechts- und Rechts-nach-Links-Sprachen ist die Blockrichtung die vertikale Richtung des Inhaltsflusses, die von oben nach unten verläuft.

Die Richtungen **block-start** und **block-end** repräsentieren die _Anfangskante_ und _Endkante_ des Inhalts entlang der Blockachse oder entsprechend die "von" und "zu" Richtungen, wobei `block-start` dem `top` und `block-end` dem `bottom` in horizontalen Schreibmodi entspricht.

## Inline-Richtung

Die **Inline-Achse** steht senkrecht zur Blockachse. Die Inline-Achse repräsentiert die Richtung, entlang der Inline-Inhalte wie Text innerhalb eines Blocks fließen. Dies wird auch als **Inline-Richtung** bezeichnet. In Links-nach-Rechts-Schreibmodi, wie Englisch, ist die Inline-Richtung horizontal, von links nach rechts. In Rechts-nach-Links-Sprachen, wie Arabisch und Hebräisch, ist die Inline-Richtung horizontal, von rechts nach links.

**Inline-start** und **inline-end** repräsentieren die _Anfangskante_ und _Endkante_ des Inhalts entlang der Inline-Achse, wobei die Werte und Eigenschaften `inline-start` und `inline-end` dem `left` und `right` in horizontalen Schreibmodi entsprechen. Ob sie `right` oder `left` entsprechen, hängt von der Schreibrichtung ab. Zum Beispiel entspricht `inline-start` `left` in Links-nach-Rechts-Sprachen und `right` in Rechts-nach-Links-Sprachen.

## Anfang und Ende

Die Auswirkungen einer CSS-Eigenschaft können ein- oder zweidimensional sein. Zum Beispiel betrifft {{cssxref("text-align")}} nur die Inline-Richtung des Textes und ist somit eindimensional. Wenn kontextuell auf eine Dimension beschränkt, werden die flow-relativen Schlüsselwörter auf `start` oder `end` abgekürzt.

## Siehe auch

- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul
- [Grundkonzepte der logischen Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts)
