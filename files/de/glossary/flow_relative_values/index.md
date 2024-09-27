---
title: Flussrelative Werte
slug: Glossary/Flow_relative_values
l10n:
  sourceCommit: 63249f6b1e89f42e172878c54a2f9674bee50904
---

{{GlossarySidebar}}

In CSS sind **flussrelative Werte** Richtungs-Schlüsselwortwerte, die relativ zu den Block- und Inline-Achsen eines Elements stehen. Diese Werte umfassen `block-start`, `block-end`, `inline-start`, `inline-end`, `start` und `end`.

In CSS definieren [physikalische Eigenschaften](/de/docs/Glossary/physical_properties) Positionen basierend auf physikalischen Richtungen und beziehen sich auf spezifische Seiten eines Elements.

CSS [logische Eigenschaften](/de/docs/Glossary/logical_properties) hingegen definieren Stile basierend auf dem Schreibmodus und der Schreibrichtung des Dokuments anstatt auf den physikalischen Dimensionen des Ansichtsfensters. Logische Eigenschaften sind relativ zum Inhaltsfluss und nutzen Richtungs-Schlüsselwörter relativ zu den Block- und Inline-Achsen.

## Blockrichtung

Die **Blockachse** bezieht sich auf die Achse, die die Stapelreihenfolge der Elemente in einem Blocklayout definiert. Es ist im Wesentlichen die Richtung, entlang derer Inhaltsblöcke wie Absätze ({{htmlelement("p")}}), Überschriften und Divs ({{htmlelement("div")}}) auf einer Webseite angeordnet werden. Dies wird auch als **Blockrichtung** bezeichnet. In Links-nach-Rechts- und Rechts-nach-Links-Sprachen ist die Blockrichtung die vertikale Flussrichtung des Inhalts, von oben nach unten.

Die Richtungen **block-start** und **block-end** repräsentieren die _Startkante_ und _Endkante_ des Inhalts entlang der Blockachse, bzw. die "von" und "zu" Richtungen, wobei `block-start` dem Äquivalent von `top` und `block-end` dem Äquivalent von `bottom` in horizontalen Schreibmodi entspricht.

## Inlinerichtung

Die **Inlineachse** steht senkrecht zur Blockachse. Die Inlineachse repräsentiert die Richtung, entlang derer Inline-Inhalt wie Text innerhalb eines Blocks fließt. Dies wird auch als **Inlinerichtung** bezeichnet. In Links-nach-Rechts-Schreibmodi, wie im Englischen, ist die Inlinerichtung horizontal, von links nach rechts. In Rechts-nach-Links-Sprachen, wie Arabisch und Hebräisch, ist die Inlinerichtung horizontal, von rechts nach links.

**Inline-start** und **inline-end** repräsentieren die _Startkante_ und _Endkante_ des Inhalts entlang der Inlineachse, wobei die Werte und Eigenschaften `inline-start` und `inline-end` dem Äquivalent von `left` und `right` Eigenschaften und Werten in horizontalen Schreibmodi entsprechen. Ob sie `right` oder `left` entsprechen, hängt von der Schreibrichtung ab. Zum Beispiel entspricht `inline-start` `left` in Links-nach-Rechts-Sprachen und `right` in Rechts-nach-Links-Sprachen.

## Anfang und Ende

Die Effekte einer CSS-Eigenschaft können ein- oder zweidimensional sein. Zum Beispiel betrifft {{cssxref("text-align")}} nur die Inlinerichtung von Text und ist daher eindimensional. Wenn sie kontextuell auf eine Dimension beschränkt sind, werden die flussrelativen Schlüsselwörter auf lediglich `start` oder `end` abgekürzt.

## Siehe auch

- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Grundlegende Konzepte zu logischen Eigenschaften und Werten](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values)
